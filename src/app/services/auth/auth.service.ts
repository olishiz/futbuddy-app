import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import {
    Auth,
    createUserWithEmailAndPassword,
    sendPasswordResetEmail,
    signInWithEmailAndPassword,
    signOut,
    updateProfile,
    user
} from "@angular/fire/auth";
import { ToastService } from "../toast/toast.service";
import { Observable, Subscription } from "rxjs";
import firebase from "firebase/compat";
import User = firebase.User;

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    user: any;
    userSubscription: Subscription;

    user$ = user(this.auth);

    constructor(
        private router: Router,
        private auth: Auth,
        private toastService: ToastService,
    ) {

        // subscribe to the user auth object
        this.user = user(this.auth);

    }

    // Get user session
    async getSession(): Promise<Observable<User | null>> {

        return this.user


        // ...
        // put auth session here
        // ...


        // authState observable will automatically emit the user's session details
        // return this.user.toPromise();

        // return false
    }

    // Sign in
    async signIn(email: string, password: string) {
        try {
            return await signInWithEmailAndPassword(this.auth, email, password);
        } catch (e) {
            console.log("Error: ", e)
            await this.toastService.presentToast('Login Failed', `Reason: ${e}`, 'top', 'danger', 2000);
        }
    }

    // Sign up
    async signUp(email: string, password: string) {
        try {
            return await createUserWithEmailAndPassword(this.auth, email, password);
        } catch (e) {
            console.log("Error: ", e)
            await this.toastService.presentToast('Sign Up Failed', `Reason: ${e}`, 'top', 'danger', 2000);
        }
    }

    // Sign out
    async signOut() {

        await signOut(this.auth);

        // Navigate to sign-in
        await this.router.navigateByUrl('/signin');
    }

    async resetPasswordViaEmail(email: string) {

        try {
            await sendPasswordResetEmail(this.auth, email)
            await this.toastService.presentToast('Password Reset Successful', `Please check your Junk Email for reset link password.`, 'top', 'success', 3500);
        } catch (e) {
            console.log("Error: ", e)
            await this.toastService.presentToast('Reset Password Failed', `Reason: ${e}`, 'top', 'danger', 2000);
        }

    }

    async updateProfileName(name: string) {
        await updateProfile(this.auth.currentUser, {displayName: name})
            .catch((error) => console.log(error))
    }

}
