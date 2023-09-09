import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from "@ionic/angular";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { Auth, user } from "@angular/fire/auth";
import { Subscription } from "rxjs";
import firebase from "firebase/compat";
import { ToastService } from "../../../services/toast/toast.service";
import User = firebase.User;

@Component({
    selector: 'app-payment',
    templateUrl: './payment.page.html',
    styleUrls: ['./payment.page.scss'],
})
export class PaymentPage implements OnInit {

    game: any
    username: string

    friends: any[] = []; // Initialize it as an empty array

    user$ = user(this.auth);
    userSubscription: Subscription;

    paymentForm: FormGroup;

    calculatedFees: number = 0
    spotsLeft: number = 0

    constructor(
        private modalController: ModalController,
        private formBuilder: FormBuilder,
        private navParams: NavParams,
        private firestore: AngularFirestore,
        private auth: Auth,
        private toastService: ToastService,
    ) {

        this.paymentForm = this.formBuilder.group({
            agree: [false, Validators.requiredTrue],
        });

        // Retrieve username from Firebase Auth displayName field
        this.userSubscription = this.user$.subscribe((aUser: User | null) => {
            this.username = aUser.displayName
        })

    }

    async ngOnInit() {

        // Retrieve the 'game' object passed from the calling component
        this.game = this.navParams.get('game');

        // Retrieve the 'spotsLeft' object passed from the calling component
        this.spotsLeft = this.navParams.get('spotsLeft');

        console.log('THE SPOTS LEFT:', this.spotsLeft)

        // Initialise calculatedFees first
        this.calculatedFees = this.extractNumberFromPrice(this.game.price)

    }

    cancel() {

        // Dismiss modal
        this.modalController.dismiss();
    }

    updateFriendName(index: number, newName: string) {

        console.log('Index position: ', index)

        // Set the friends array object name - with onChange input
        if (this.friends[index]) {
            this.friends[index].name = newName;
        }

        console.log('The friends array object: ', this.friends)

    }


    async addPlayerToGame(gameId: any) {

        // If payment form is valid, proceed
        if (this.paymentForm.valid) {

            console.log('Total friends: ', this.friends)

            console.log('THIS GAME ID:::', gameId)

            // TODO:: Make payment system gateway here - to finish off the deal. Make payment processing here first to book slot

            try {

                // Retrieve game reference object
                const gameRef = this.firestore.collection('games').doc(gameId);
                const playerListRef = gameRef.collection('playerList');

                // TODO:: Have to set paymentStatus == PAID once Stripe payment is released.

                // This is for Personal User Setting - his own account to be added
                const playerData = {
                    playerName: this.username,
                    timestamp: new Date(),
                    paymentStatus: 'PAID'
                };

                await playerListRef.add(playerData);

                // If there are some friends involved;
                if (this.friends.length > 0) {

                    // Iterate through the friends array
                    for (const friend of this.friends) {

                        // Create a friend object for each friend
                        const friendData = {
                            playerName: friend.name,
                            timestamp: new Date(),
                            paymentStatus: 'PAID'
                        };

                        // Add the friend object to the 'playerList' collection
                        await playerListRef.add(friendData);
                    }

                }

                await this.toastService.presentToast('Players Added Successfully', `Players has been added to the session.`, 'top', 'success', 3500);

                // Dismiss modal
                await this.modalController.dismiss();

            } catch (error) {
                console.error('Error adding player to game: ', error);
            }

        }


    }

    addFriendButton() {

        // Add an empty friend object to the friends array
        this.friends.push(
            {
                name: '',
                timestamp: new Date()
            }
        );

        // Calculate the total price and update calculatedFees
        this.calculatedFees = this.calculateTotalPrice();

        // Minus the spotsLeft variable by one
        this.spotsLeft--;
    }

    removeFriend(index: number) {

        this.friends.splice(index, 1);

        console.log('This.friends.length: ', this.friends.length)

        // Calculate the total price and update calculatedFees
        this.calculatedFees = this.calculateTotalPrice();

        // Add the spotsLeft variable by one
        this.spotsLeft++;
    }

    calculateTotalPrice(): number {

        const basePrice = this.extractNumberFromPrice(this.game.price);

        if (this.friends.length > 0) {
            this.calculatedFees = basePrice * (1 + this.friends.length);
        } else {
            this.calculatedFees = basePrice; // Set it to the base price if no friends are added
        }

        return this.calculatedFees;
    }

    // Function to extract the numeric part from a string like 'RM25'
    extractNumberFromPrice(priceString: string): number {
        // Use regex to match the numeric part of the string
        const match = priceString.match(/\d+/);

        // If a match is found, parse it to an integer; otherwise, return 0
        return match ? parseInt(match[0], 10) : 0;
    }

}
