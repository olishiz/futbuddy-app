import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AboutUsPage } from './about-us.page';
import { AboutUsPageRoutingModule } from "./about-us-routing.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        AboutUsPageRoutingModule,
    ],
    declarations: [AboutUsPage]
})
export class AboutUsModule {
}
