import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "@angular/fire/auth";
import { ToastService } from "../toast/toast.service";

@Injectable({
    providedIn: 'root'
})
export class AuthService {

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

        // Sample only - remove this after real authentication / session
        let session = {
            email: 'john.doe@mail.com'
        }

        return false;
        // return session;
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
}
