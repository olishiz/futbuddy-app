import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActionSheetController, NavController } from '@ionic/angular';
import { ToastService } from 'src/app/services/toast/toast.service';
import { AuthService } from "../../../../services/auth/auth.service";
import { Auth, user } from "@angular/fire/auth";
import { Subscription } from "rxjs";
import firebase from "firebase/compat";
import { Router } from "@angular/router";
import User = firebase.User;

@Component({
    selector: 'app-edit',
    templateUrl: './edit.page.html',
    styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit, OnDestroy {

    user$ = user(this.auth);
    userSubscription: Subscription;

    edit_profile_form: FormGroup;
    submit_attempt: boolean = false;

    username: any

    constructor(
        private formBuilder: FormBuilder,
        private toastService: ToastService,
        private navController: NavController,
        private actionSheetController: ActionSheetController,
        private authService: AuthService,
        private auth: Auth,
        private router: Router,
    ) {

        this.userSubscription = this.user$.subscribe((aUser: User | null) => {
            this.username = aUser.displayName
        })
    }

    ngOnInit() {

        // Setup form
        this.edit_profile_form = this.formBuilder.group({
            username: ['', Validators.required],
        });

    }

    // Update profile picture
    async updateProfilePicture() {

        const actionSheet = await this.actionSheetController.create({
            header: 'Choose existing picture or take new',
            cssClass: 'custom-action-sheet',
            buttons: [
                {
                    text: 'Choose from gallery',
                    icon: 'images',
                    handler: () => {
                        // Put in logic ...
                    }
                },
                {
                    text: 'Take picture',
                    icon: 'camera',
                    handler: () => {
                        // Put in logic ...
                    }
                }, {
                    text: 'Cancel',
                    icon: 'close',
                    role: 'cancel'
                }]
        });
        await actionSheet.present();
    }

    // Submit form
    submit() {

        this.submit_attempt = true;

        // If form valid
        if (this.edit_profile_form.valid) {

            // Save form ...
            this.authService.updateProfileName(this.edit_profile_form.get('username').value)

            // Display success message and go back
            this.toastService.presentToast('Success', 'Username has been saved', 'top', 'success', 2000);

            // Move controller back to profile page
            this.router.navigateByUrl('/profile', {replaceUrl: true});

        } else {

            // Display error message
            this.toastService.presentToast('Error', 'Please fill in all required fields', 'top', 'danger', 2000);
        }
    }

    ngOnDestroy() {
        this.userSubscription.unsubscribe();
    }

}
