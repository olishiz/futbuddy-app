import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import {
    Auth,
    createUserWithEmailAndPassword,
    sendPasswordResetEmail,
    signInWithEmailAndPassword,
    signOut
} from "@angular/fire/auth";
import { ToastService } from "../toast/toast.service";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    user: Observable<any>;  // Observable to hold user session details

    constructor(
        private router: Router,
        private auth: Auth,
        private toastService: ToastService,
    ) {
    }

    // Get user session
    async getSession() {

        // ...
        // put auth session here
        // ...

        // authState observable will automatically emit the user's session details
        // return this.user.toPromise();

        return false
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
}
