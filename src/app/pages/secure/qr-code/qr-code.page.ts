import { Component, OnInit } from '@angular/core';
import { ModalController } from "@ionic/angular";

@Component({
  selector: 'app-qr-code',
  templateUrl: './qr-code.page.html',
  styleUrls: ['./qr-code.page.scss'],
})
export class QrCodePage implements OnInit {

  constructor(
      private modalController: ModalController,
  ) { }

  ngOnInit() {
  }

  close() {

    // Dismiss modal
    this.modalController.dismiss();
  }

}
