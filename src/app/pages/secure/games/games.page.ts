import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { IGame } from "../../../models/game.model";
import { DataService } from "../../../services/data/data.service";
import { Observable, Subscription } from "rxjs";
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { Auth, user } from "@angular/fire/auth";
import firebase from "firebase/compat";
import { IonRouterOutlet, ModalController } from "@ionic/angular";
import { PaymentPage } from "../payment/payment.page";
import User = firebase.User;

@Component({
    selector: 'app-games',
    templateUrl: './games.page.html',
    styleUrls: ['./games.page.scss'],
})
export class GamesPage implements OnInit, OnDestroy {

    user$ = user(this.auth);
    userSubscription: Subscription;

    id: string | null = null;
    game$: Observable<IGame>;
    username: string

    game: any;

    playerList$: Observable<any[]>;
    playerList: any

    constructor(
        private route: ActivatedRoute,
        private dataService: DataService,
        private firestore: AngularFirestore,
        private auth: Auth,
        private modalController: ModalController,
        private routerOutlet: IonRouterOutlet
    ) {

        // Retrieve username from Firebase Auth displayName field
        this.userSubscription = this.user$.subscribe((aUser: User | null) => {
            this.username = aUser.displayName
        })

    }

    async ngOnInit() {

        // Retrieve params id from url
        this.route.params.subscribe(params => {
            this.id = params['id'];
            console.log('this.id', this.id);
        });

        this.game$ = this.dataService.getGameById(this.id);
        this.playerList$ = this.getPlayerList(this.id);

        // Convert the Observable to a Promise and log the result
        this.playerList$.toPromise().then(playerList => {
            console.log('Player List:', playerList);
        });

        // Subscribe and store to variable of player List
        this.playerList$.subscribe(playerList => {
            this.playerList = playerList
            console.log('converted', this.playerList)
        })

        // Fetch game details
        this.dataService.getGameById(this.id).subscribe(game => {
            this.game = game;
            console.log('the GAME', this.game)
        });

    }

    async addPlayerToGame(gameId: any) {

        console.log('Game Session Document ID: ', gameId)

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

    getPlayerList(gameId: string): Observable<any[]> {
        const gameRef = this.firestore.collection('games').doc(gameId);
        const playerListRef = gameRef.collection('playerList');
        return playerListRef.valueChanges(); // Returns an Observable of player data
    }

    calculateSpotsLeft() {
        if (this.game && this.game.numOfPlayers) {
            const spotsLeft = this.game.numOfPlayers - (this.playerList)?.length;
            return spotsLeft >= 0 ? spotsLeft : 0;
        }
        return 0;
    }

    ngOnDestroy() {
        this.userSubscription.unsubscribe();
    }

    async openCard() {

        // Open filter modal
        const modal = await this.modalController.create({
            component: PaymentPage,
            swipeToClose: true,
            presentingElement: this.routerOutlet.nativeEl,
            componentProps: {
                game: this.game, // Pass your 'game' object here
            },
        });

        return await modal.present();
    }

}
