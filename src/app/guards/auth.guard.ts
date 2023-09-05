import { Injectable } from '@angular/core'
import { CanActivate, Router } from '@angular/router'
import { AuthService } from '../services/auth/auth.service';
import { Auth, user } from "@angular/fire/auth";
import { Subscription } from "rxjs";

@Injectable({
    providedIn: 'root',
})
export class AuthGuard implements CanActivate {

    user$ = user(this.auth);
    userSubscription: Subscription;

    constructor(
        private readonly router: Router,
        private readonly authService: AuthService,
        private auth: Auth
    ) {


    }

    // async canActivate(): Promise<boolean> {
    //
    //     const is_signed_in = !!(await this.authService.getSession())
    //
    //     // If not signed in, redirect to welcome page
    //     if (!is_signed_in) {
    //         this.router.navigate(['/welcome']);
    //     }
    //
    //     return is_signed_in;
    // }

    // async canActivate() {
    //     // @ts-ignore
    //     return this.authService.getSession().pipe(
    //         map((user) => {
    //             const isSignedIn = !!user;
    //
    //             // If not signed in, navigate to the welcome page
    //             if (!isSignedIn) {
    //                 this.router.navigate(['/welcome']);
    //             }
    //
    //             return isSignedIn;
    //         })
    //     );
    //
    // }


    async canActivate(): Promise<boolean> {
        const user = await this.authService.getSession();

        // Check if the user is signed in
        const isSignedIn = !!user;

        // If not signed in, navigate to the welcome page
        if (!isSignedIn) {
            await this.router.navigate(['/welcome']);
        }

        return isSignedIn;
    }
}

