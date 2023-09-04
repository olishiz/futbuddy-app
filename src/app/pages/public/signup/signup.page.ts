import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastService } from 'src/app/services/toast/toast.service';
import { Router } from '@angular/router';

import { addDoc, collection, collectionData, Firestore } from "@angular/fire/firestore";
import { IUser } from "../../../models/user.model";

@Component({
    selector: 'app-signup',
    templateUrl: './signup.page.html',
    styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

    current_year: number = new Date().getFullYear();

    signup_form: FormGroup;
    submit_attempt: boolean = false;

    constructor(
        private authService: AuthService,
        private loadingController: LoadingController,
        private formBuilder: FormBuilder,
        private toastService: ToastService,
        private router: Router,
        private firestore: Firestore
    ) {
    }

    ngOnInit() {

        // Setup form
        this.signup_form = this.formBuilder.group({
            name: [''],
            email: ['', Validators.compose([Validators.email, Validators.required])],
            password: ['', Validators.compose([Validators.minLength(6), Validators.required])],
        });

        const usersRef = collection(this.firestore, 'users');
        const data = collectionData(usersRef);
        console.log(data)

    }

    // Sign up
    async signUp() {

        this.submit_attempt = true;

        // If email or password empty
        if (this.signup_form.value.email == '' || this.signup_form.value.password == '' || this.signup_form.value.name == '') {
            await this.toastService.presentToast('Error', 'Please fill in all fields', 'top', 'danger', 4000);

        } else {

            // Proceed with loading overlay
            const loading = await this.loadingController.create({
                cssClass: 'default-loading',
                message: '<p>Signing up...</p><span>Please be patient.</span>',
                spinner: 'crescent'
            });

            await loading.present();

            // Sign up with Firebase Authentication
            const user = await this.authService.signUp(this.signup_form.get('email')?.value, this.signup_form.get('password')?.value);

            // Constructing userObject to be used
            const userObject: IUser = {
                name: this.signup_form.get('name')?.value,
                email: this.signup_form.get('email')?.value,
                password: this.signup_form.get('password')?.value,
            };

            // Update Profile Name into Firebase Auth object
            await this.authService.updateProfileName(userObject.name)

            // adding userObject into Firestore database collection named 'users'
            const userRef = collection(this.firestore, 'users')
            await addDoc(userRef, userObject)

            await loading.dismiss();

            // Success messages + routing
            if (user) {
                await this.toastService.presentToast(`Welcome ${userObject.name}!`, 'Successful sign up', 'top', 'success', 2000);
                await this.router.navigateByUrl('/home', {replaceUrl: true});
            }

        }

    }

}
