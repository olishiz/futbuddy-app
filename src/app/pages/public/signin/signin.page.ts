import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastService } from 'src/app/services/toast/toast.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-signin',
    templateUrl: './signin.page.html',
    styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {

    current_year: number = new Date().getFullYear();

    signin_form: FormGroup;
    submit_attempt: boolean = false;

    constructor(
        private authService: AuthService,
        private loadingController: LoadingController,
        private formBuilder: FormBuilder,
        private toastService: ToastService,
        private router: Router
    ) {
    }

    ngOnInit() {

        // Setup form
        this.signin_form = this.formBuilder.group({
            email: ['', Validators.compose([Validators.email, Validators.required])],
            password: ['', Validators.compose([Validators.minLength(6), Validators.required])]
        });

        // DEBUG: Prefill inputs
        // this.signin_form.get('email').setValue('john.doe@mail.com');
        // this.signin_form.get('password').setValue('123456');
    }

    // Sign in
    async signIn() {

        this.submit_attempt = true;

        // If email or password empty
        if (this.signin_form.value.email == '' || this.signin_form.value.password == '') {
            await this.toastService.presentToast('Error', 'Please input email and password', 'top', 'danger', 2000);

        } else {

            // Proceed with loading overlay
            const loading = await this.loadingController.create({
                cssClass: 'default-loading',
                message: '<p>Signing in...</p><span>Please be patient.</span>',
                spinner: 'crescent'
            });

            await loading.present();

            // Sign in via Firebase Authentication
            const user = await this.authService.signIn(this.signin_form.get('email')?.value, this.signin_form.get('password')?.value);
            await loading.dismiss();

            // If there is user, navigate them to home page
            if (user) {
                await this.router.navigateByUrl('/home', {replaceUrl: true});
            }

        }
    }

}
