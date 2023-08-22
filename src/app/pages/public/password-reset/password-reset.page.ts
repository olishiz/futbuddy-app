import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "../../../services/auth/auth.service";
import { LoadingController } from "@ionic/angular";
import { ToastService } from "../../../services/toast/toast.service";
import { Router } from "@angular/router";

@Component({
    selector: 'app-password-reset',
    templateUrl: './password-reset.page.html',
    styleUrls: ['./password-reset.page.scss'],
})
export class PasswordResetPage implements OnInit {

    current_year: number = new Date().getFullYear();

    reset_form: FormGroup;

    constructor(private authService: AuthService,
                private loadingController: LoadingController,
                private formBuilder: FormBuilder,
                private toastService: ToastService,
                private router: Router) {

        // Setup form
        this.reset_form = this.formBuilder.group({
            email: ['', Validators.compose([Validators.email, Validators.required])],
        });
    }

    ngOnInit() {
    }

    async reset() {

        // If password empty
        if (this.reset_form.value.email == '') {
            await this.toastService.presentToast('Error', 'Please input email', 'top', 'danger', 2000);

        } else {

            // Reset password via email
            await this.authService.resetPasswordViaEmail(this.reset_form.get('email')?.value);

            // Make timeout to navigate back to sign in page
            setTimeout(() => {
                this.router.navigateByUrl('/signin', {replaceUrl: true});
            }, 2000);

        }

    }

}
