import { Injectable } from '@angular/core'
import { CanActivate, Router } from '@angular/router'
import { AuthService } from '../services/auth/auth.service'

@Injectable({
    providedIn: 'root'
})
export class PublicGuard implements CanActivate {
    constructor(
        private readonly authService: AuthService,
        private readonly router: Router
    ) {
    }

    // async canActivate(): Promise<boolean> {
    //
    //   const is_signed_in = !!(await this.authService.getSession());
    //
    //   // If signed in, redirect to home page
    //   if (is_signed_in) {
    //     this.router.navigate(['/home']);
    //   }
    //
    //   return !is_signed_in;
    // }

    async canActivate(): Promise<boolean> {
        const user = await this.authService.getSession();

        // Check if the user is authenticated (you can define your own logic)
        const isAuth = !!user;

        // If authenticated, allow access to the route
        if (isAuth) {
            return true;
        }

        // If not authenticated, you can handle the redirection logic here
        // For example, you can redirect to a login page or show a message
        await this.router.navigate(['/signin']); // Redirect to the login page

        return false;
    }
}
