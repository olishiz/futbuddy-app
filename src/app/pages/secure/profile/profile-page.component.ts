import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Auth, user } from "@angular/fire/auth";
import { Subscription } from "rxjs";
import firebase from "firebase/compat";
import User = firebase.User;

@Component({
    selector: 'app-profile',
    templateUrl: './profile-page.component.html',
    styleUrls: ['./profile-page.component.scss'],
})
export class ProfilePage implements OnInit, OnDestroy {

    user$ = user(this.auth);
    userSubscription: Subscription;

    formattedCreationTime: any;
    formattedLastSignInTime: any;

    constructor(
        private authService: AuthService,
        private auth: Auth
    ) {

        this.userSubscription = this.user$.subscribe((aUser: User | null) => {

            console.log('the aUser', aUser);

            // Parse the createdAtTime timestamp and format it when the component is created
            const creationTime = aUser.metadata.creationTime;
            const lastSignInTime = aUser.metadata.lastSignInTime;

            this.formattedCreationTime = this.formatTimestamp(creationTime);
            this.formattedLastSignInTime = this.formatTimestamp(lastSignInTime);

        })


    }

    ngOnInit() {
    }

    // Sign out
    signOut() {
        this.authService.signOut();
    }

    private formatTimestamp(timestamp: any): string {
        const date = new Date(timestamp);
        return date.toLocaleString(); // You can customize the format as needed
    }

    ngOnDestroy() {
        this.userSubscription.unsubscribe();
    }

}
