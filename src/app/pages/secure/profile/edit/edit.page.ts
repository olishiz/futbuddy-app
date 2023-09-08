import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActionSheetController, AlertController, NavController } from '@ionic/angular';
import { ToastService } from 'src/app/services/toast/toast.service';
import { AuthService } from "../../../../services/auth/auth.service";
import { Auth, deleteUser, getAuth, user } from "@angular/fire/auth";
import { Subscription } from "rxjs";
import firebase from "firebase/compat";
import { Router } from "@angular/router";
import { deleteDoc, doc, Firestore } from "@angular/fire/firestore";
import { AngularFirestore } from "@angular/fire/compat/firestore";
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
        private alertController: AlertController,
        private firestore: Firestore,
        private afs: AngularFirestore
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

    async deleteAccount() {

        try {
            const alert = await this.alertController.create({
                cssClass: 'custom-alert',
                header: 'Delete this account permanently?',
                message: 'This action cannot be undone.',
                buttons: [
                    {
                        text: 'Delete account',
                        cssClass: 'danger',
                        handler: async () => {

                            // Deletion of Firebase Auth Object - which is the current user
                            const auth = getAuth();
                            const user = auth.currentUser;

                            // Delete username in Firestore Database 'users' collection
                            // Get a reference to the users collection, then the document, and valueChanges to retrieve the document id.
                            const userDocument$ =
                                this.afs.collection('users', ref =>
                                    ref.where('uid', '==', user.uid)).valueChanges({idField: 'id'}
                                );

                            // After retrieval of collections, then only observable has to be subscribed in order to retrieve values
                            userDocument$.subscribe((userDoc) => {

                                // If there is data related
                                if (userDoc.length > 0) {

                                    // Assign userData with first item
                                    const userData = userDoc[0];

                                    // Deletes operation on the 'users/{document_id}' of the selected user
                                    this.deleteUser(userData.id)

                                    console.log('Successfully deleted the user in Angular Firestore: ', userData.id)

                                }
                            });

                            // Delete auth user record in Authentication tab - Firebase
                            deleteUser(user).then(async () => {
                                // User deleted.
                                await this.toastService.presentToast('Success', 'User successfully deleted', 'top', 'success', 2000);

                                await this.router.navigateByUrl('/signin', {replaceUrl: true});

                            }).catch(async (error) => {
                                // An error occurred
                                await this.toastService.presentToast('Error', `Message: ${error}`, 'top', 'danger', 2000);

                            });

                        }
                    },
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'cancel'
                    }
                ]
            });

            await alert.present();

        } catch (ex) {
            console.log("Error: ", ex)
            await this.toastService.presentToast('Error', `Message: ${ex}`, 'top', 'danger', 2000);
        }


    }

    deleteUser(userId: any) {
        const userRef = doc(this.firestore, `users/${userId}`);
        return deleteDoc(userRef);
    }

}
