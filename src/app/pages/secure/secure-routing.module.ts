import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./../../tabs/tabs.module').then(m => m.TabsPageModule)
    },
    {
        path: 'profile',
        loadChildren: () => import('./profile/profile.module').then(m => m.ProfilePageModule)
    },
    {
        path: 'profile/edit',
        loadChildren: () => import('./profile/edit/edit.module').then(m => m.EditPageModule)
    },
    {
        path: 'about-us',
        loadChildren: () => import('./about-us/about-us.module').then(m => m.AboutUsModule)
    },
    {
        path: 'games/:id',
        loadChildren: () => import('./games/games.module').then(m => m.GamesPageModule)
    },
    {
        path: 'qr-code',
        loadChildren: () => import('./qr-code/qr-code.module').then(m => m.QrCodePageModule)
    },


    // not in used yet
    {
        path: 'payments/detail',
        loadChildren: () => import('./payments/payment-detail/payment-detail.module').then(m => m.PaymentDetailPageModule)
    },
    {
        path: 'styleguide',
        loadChildren: () => import('./styleguide/styleguide.module').then(m => m.StyleguidePageModule)
    },
    {
        path: 'payment',
        loadChildren: () => import('./payment/payment.module').then(m => m.PaymentPageModule)
    },
    {
        path: 'my-games',
        loadChildren: () => import('./my-games/my-games.module').then(m => m.MyGamesPageModule)
    },




];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SecureRoutingModule {
}
