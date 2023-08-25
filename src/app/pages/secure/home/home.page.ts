import { Component, OnInit } from '@angular/core';
import { DataService } from "../../../services/data/data.service";
import { IGame } from "../../../models/game.model";
import { AuthService } from "../../../services/auth/auth.service";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { AngularFirestore } from "@angular/fire/compat/firestore";

@Component({
    selector: 'app-home',
    templateUrl: './home.page.html',
    styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

    games: IGame[] = [];
    activeGames: IGame[] = []

    user: any

    content_loaded: boolean = false;

    playerList: any
    playerList$: Observable<any[]>;

    constructor(
        private dataService: DataService,
        private authService: AuthService,
        private router: Router,
        private firestore: AngularFirestore
    ) {
    }

    ngOnInit() {

        this.dataService.getGames().subscribe((res: IGame[]) => {
            this.games = res
            this.activeGames = this.games.filter(game => game.status === 'ACTIVE')

            console.log('the games boy', this.games)
            console.log('the active games boy', this.activeGames)
        })

        // Fake timeout
        setTimeout(() => {
            this.content_loaded = true;
        }, 2000);
    }

    async goToGamePage(game: IGame) {
        await this.router.navigateByUrl(`/games/${game.id}`);
    }

    calculateSpotsLeft(game: any) {

        this.playerList$ = this.getPlayerList(game.id);

        this.playerList$.subscribe(playerList => {
            this.playerList = playerList
        })

        if (game && game.numOfPlayers) {
            const spotsLeft = game.numOfPlayers - (this.playerList)?.length;
            return spotsLeft >= 0 ? spotsLeft : 0;
        }
        return 0;
    }

    getPlayerList(gameId: string): Observable<any[]> {
        const gameRef = this.firestore.collection('games').doc(gameId);
        const playerListRef = gameRef.collection('playerList');
        return playerListRef.valueChanges(); // Returns an Observable of player data
    }


}
