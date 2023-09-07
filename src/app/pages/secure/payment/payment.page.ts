import { Component, OnInit, Renderer2 } from '@angular/core';
import { IonRouterOutlet, LoadingController, ModalController, NavParams } from "@ionic/angular";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { DataService } from "../../../services/data/data.service";
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { Auth, user } from "@angular/fire/auth";
import { Subscription } from "rxjs";
import firebase from "firebase/compat";
import User = firebase.User;

@Component({
    selector: 'app-payment',
    templateUrl: './payment.page.html',
    styleUrls: ['./payment.page.scss'],
})
export class PaymentPage implements OnInit {

    game: any
    username: string

    user$ = user(this.auth);
    userSubscription: Subscription;

    paymentForm: FormGroup;

    constructor(
        private modalController: ModalController,
        private loadingController: LoadingController,
        private formBuilder: FormBuilder,
        private navParams: NavParams,
        private renderer: Renderer2,
        private route: ActivatedRoute,
        private dataService: DataService,
        private firestore: AngularFirestore,
        private auth: Auth,
        private routerOutlet: IonRouterOutlet
    ) {

        this.paymentForm = this.formBuilder.group({
            agree: [false, Validators.requiredTrue], // The checkbox is initially unchecked
        });

        // Retrieve username from Firebase Auth displayName field
        this.userSubscription = this.user$.subscribe((aUser: User | null) => {
            this.username = aUser.displayName
        })

    }

    async ngOnInit() {

        // Retrieve the 'game' object passed from the calling component
        this.game = this.navParams.get('game');

        console.log('Received game:', this.game);

    }

    cancel() {

        // Dismiss modal
        this.modalController.dismiss();
    }

    onSubmit() {
        if (this.paymentForm.valid) {
            // The checkbox is checked, proceed with payment
            console.log('Payment successful!');
        } else {
            // The checkbox is not checked, show an error message
            console.log('Please agree to the terms and conditions.');
        }
    }

    async addPlayerToGame(gameId: any) {

        console.log('Game Session Document ID: ', gameId)

        console.log('THIS GAME ID:::', gameId)

        debugger

        // TODO:: Make payment system gateway here - to finish off the deal.

        try {

            // Retrieve game reference object
            const gameRef = this.firestore.collection('games').doc(gameId);
            const playerListRef = gameRef.collection('playerList');


            // TODO:: Have to set paymentStatus == PAID once Stripe payment is released.
            const playerData = {
                playerName: this.username,
                timestamp: new Date(),
                paymentStatus: 'PAID'
            };

            await playerListRef.add(playerData);

            console.log('Successfully add players to the game.')

        } catch (error) {
            console.error('Error adding player to game: ', error);
        }


    }

}
