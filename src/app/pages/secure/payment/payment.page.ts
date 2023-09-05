import { Component, OnInit, Renderer2 } from '@angular/core';
import { LoadingController, ModalController, NavParams } from "@ionic/angular";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
    selector: 'app-payment',
    templateUrl: './payment.page.html',
    styleUrls: ['./payment.page.scss'],
})
export class PaymentPage implements OnInit {

    game: any

    paymentForm: FormGroup;

    constructor(
        private modalController: ModalController,
        private loadingController: LoadingController,
        private formBuilder: FormBuilder,
        private navParams: NavParams,
        private renderer: Renderer2
    ) {

        this.paymentForm = this.formBuilder.group({
            agree: [false, Validators.requiredTrue], // The checkbox is initially unchecked
        });

    }

    async ngOnInit() {

        // Retrieve the 'game' object passed from the calling component
        this.game = this.navParams.get('game');
        console.log('Received game:', this.game);

    }

    cancel() {

        // Dismiss modal
        this.modalController.dismiss();
    }

    onSubmit() {
        if (this.paymentForm.valid) {
            // The checkbox is checked, proceed with payment
            console.log('Payment successful!');
        } else {
            // The checkbox is not checked, show an error message
            console.log('Please agree to the terms and conditions.');
        }
    }

}
