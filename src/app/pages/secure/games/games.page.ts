import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { IGame } from "../../../models/game.model";
import { DataService } from "../../../services/data/data.service";
import { Observable } from "rxjs";
import { AngularFirestore } from "@angular/fire/compat/firestore";


const playerData = {
    playerName: 'John Doe',
    playerId: 'uid_of_player',
    timestamp: new Date(),
};

@Component({
    selector: 'app-games',
    templateUrl: './games.page.html',
    styleUrls: ['./games.page.scss'],
})
export class GamesPage implements OnInit {

    id: string | null = null;
    game$: Observable<IGame>;

    game: any;

    playerList$: Observable<any[]>;
    playerList: any

    constructor(
        private route: ActivatedRoute,
        private dataService: DataService,
        private firestore: AngularFirestore
    ) {
    }

    async ngOnInit() {
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
        console.log('join game init', gameId)

        try {
            const gameRef = this.firestore.collection('games').doc(gameId);
            const playerListRef = gameRef.collection('playerList');
            await playerListRef.add(playerData);
            console.log('successfull add')
        } catch (error) {
            console.error('Error adding player to game:', error);
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

}
