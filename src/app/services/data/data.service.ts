import { Injectable } from '@angular/core';
import { collection, collectionData, doc, docData, Firestore } from "@angular/fire/firestore";
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { Observable } from "rxjs";
import { IGame } from "../../models/game.model";

@Injectable({
    providedIn: 'root'
})
export class DataService {

    constructor(
        private firestore: Firestore,
        private afs: AngularFirestore) {
    }

    getGames(): Observable<IGame[]> {
        const gamesRef = collection(this.firestore, 'games');
        return collectionData(gamesRef, {idField: 'id'}) as Observable<IGame[]>;
    }

    getGameById(id: string) {
        const gamesRef = doc(this.firestore, `games/${id}`);
        return docData(gamesRef, {idField: 'id'}) as Observable<IGame>;
    }

    // getPlayerList(gameId: string): Observable<any[]> {
    //     const gameRef = collectionGroup(this.firestore, gameId);
    //     const playerListRef = gameRef.collection('playerList');
    //     return playerListRef.valueChanges(); // Returns an Observable of player data
    // }


}
