import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataService } from '../../../services/data/data.service';
import { IGame } from '../../../models/game.model';
import { AuthService } from '../../../services/auth/auth.service';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Auth, user } from "@angular/fire/auth";
import firebase from "firebase/compat";
import User = firebase.User;

@Component({
    selector: 'app-home',
    templateUrl: './home.page.html',
    styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit, OnDestroy {

    user$ = user(this.auth);
    userSubscription: Subscription;

    games: IGame[] = [];
    activeGames: IGame[] = [];

    contentLoaded = false;

    playerList: any;
    playerList$: Observable<any[]>;

    username: string;

    private spotsLeft: number;

    constructor(
        private dataService: DataService,
        private authService: AuthService,
        private router: Router,
        private firestore: AngularFirestore,
        private auth: Auth,
    ) {

        this.userSubscription = this.user$.subscribe((aUser: User | null) => {
            console.log('the aUser', aUser);
            this.username = aUser.displayName
        })

    }

    ngOnInit() {

        this.dataService.getGames().subscribe((res: IGame[]) => {
            this.games = res;
            this.activeGames = this.games.filter(game => game.status === 'ACTIVE');

            // Calculate and set spotsLeft for each game
            this.activeGames.forEach(game => {
                this.calculateSpotsLeft(game);
            });

            console.log('the games boy', this.games);
            console.log('the active games boy', this.activeGames);
        });

        // Fake timeout
        setTimeout(() => {
            this.contentLoaded = true;
        }, 2000);
    }

    async goToGamePage(game: IGame) {
        await this.router.navigateByUrl(`/games/${game.id}`);
    }

    calculateSpotsLeft(game: any) {

        this.getPlayerList(game.id).subscribe(playerList => {
            const spotsLeft = game.numOfPlayers - playerList.length;
            game.spotsLeft = spotsLeft >= 0 ? spotsLeft : 0;
            console.log('Spots left for', game.name, ':', game.spotsLeft);
        });

    }

    getPlayerList(gameId: string): Observable<any[]> {
        const gameRef = this.firestore.collection('games').doc(gameId);
        const playerListRef = gameRef.collection('playerList');
        return playerListRef.valueChanges(); // Returns an Observable of player data
    }

    ngOnDestroy() {
        this.userSubscription.unsubscribe();
    }

}
