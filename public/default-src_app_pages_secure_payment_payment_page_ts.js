"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_pages_secure_payment_payment_page_ts"],{

/***/ 93755:
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/secure/payment/payment.page.html ***!
  \******************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-button (click)=\"cancel()\">\n                Cancel\n            </ion-button>\n        </ion-buttons>\n        <ion-title>\n            Checkout\n        </ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <form [formGroup]=\"paymentForm\" (ngSubmit)=\"addPlayerToGame(this.game.id)\">\n\n        <div class=\"ion-text-center\">\n            <ion-chip color=\"light\">Game Details</ion-chip>\n\n            <div class=\"ion-text-center\">\n                <ion-text color=\"light\" style=\"margin-top: 10px\">\n                    <ion-icon name=\"location\"></ion-icon>\n                    Location: {{ this.game.location }}\n                    <br>\n                </ion-text>\n            </div>\n\n            <div class=\"ion-text-center\">\n                <ion-text color=\"light\" style=\"margin-top: 10px\">\n                    <ion-icon name=\"calendar-outline\"></ion-icon>\n                    Date: {{ this.game.date }}\n                    <br>\n                </ion-text>\n            </div>\n\n            <div class=\"ion-text-center\">\n                <ion-text color=\"light\" style=\"margin-top: 10px\">\n                    <ion-icon name=\"time-outline\"></ion-icon>\n                    Time: {{ this.game.time }}\n                    <br>\n                </ion-text>\n            </div>\n\n            <br>\n\n            <ion-chip color=\"light\">Add Friends if any</ion-chip>\n\n            <!-- List of friends -->\n            <ion-list *ngFor=\"let friend of friends; let i = index\">\n                <ion-item>\n                    <ion-label position=\"floating\">Friend {{ i + 1 }}</ion-label>\n                    <ion-input [value]=\"friend.name\" (input)=\"updateFriendName(i, $event.target.value)\" name=\"friendName{{ i }}\" placeholder=\"Input friend name\" required></ion-input>\n                    <ion-button fill=\"clear\" color=\"danger\" (click)=\"removeFriend(i)\">\n                        <ion-icon name=\"close-circle\"></ion-icon>\n                        Remove\n                    </ion-button>\n                </ion-item>\n            </ion-list>\n\n            <br>\n\n            <ion-button (click)=\"addFriendButton()\" style=\"margin-top: 10px;\">Add Friend</ion-button>\n\n            <br> <br>\n\n            <ion-chip color=\"light\">Price</ion-chip>\n\n            <div class=\"ion-text-center\">\n                <ion-text color=\"light\" style=\"margin-top: 10px\">\n                    <ion-icon name=\"cash-outline\"></ion-icon>\n                    You will be paying: {{ this.game.price }} per person.\n                    <br>\n                </ion-text>\n            </div>\n\n            <br>\n\n            <div *ngIf=\"friends.length > 0\">\n                <ion-chip color=\"light\">Total Calculated Price</ion-chip>\n\n                <div class=\"ion-text-center\">\n                    <ion-text color=\"light\" style=\"margin-top: 10px\">\n                        <ion-icon name=\"cash-outline\"></ion-icon>\n                        Total calculated price would be: RM{{ this.calculatedFees }} which includes yours as well.\n                        <br>\n                    </ion-text>\n                </div>\n            </div>\n\n\n        </div>\n\n        <div class=\"ion-text-center\" style=\"margin-top: 20px; display: flex; align-items: center; margin-left: 10%\">\n            <ion-checkbox formControlName=\"agree\" color=\"light\" style=\"margin-right: 8px;\"></ion-checkbox>\n            I agree to the terms and conditions\n        </div>\n\n        <div class=\"ion-text-center\" style=\"margin-top: 20px\">\n            <ion-button color=\"danger\" type=\"submit\" [disabled]=\"!paymentForm.valid\">\n                Pay Now\n            </ion-button>\n        </div>\n\n\n    </form>\n</ion-content>\n");

/***/ }),

/***/ 88132:
/*!******************************************************!*\
  !*** ./src/app/pages/secure/payment/payment.page.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentPage": () => (/* binding */ PaymentPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 39859);
/* harmony import */ var _C_Users_user_Desktop_futbuddy_repo_futbuddy_app_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_payment_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./payment.page.html */ 93755);
/* harmony import */ var _payment_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./payment.page.scss */ 28152);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 91346);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 27091);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ 75656);
/* harmony import */ var _services_toast_toast_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/toast/toast.service */ 84746);









let PaymentPage = class PaymentPage {
    constructor(modalController, formBuilder, navParams, firestore, auth, toastService) {
        this.modalController = modalController;
        this.formBuilder = formBuilder;
        this.navParams = navParams;
        this.firestore = firestore;
        this.auth = auth;
        this.toastService = toastService;
        this.friends = []; // Initialize it as an empty array
        this.user$ = (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__.user)(this.auth);
        this.calculatedFees = 0;
        this.spotsLeft = 0;
        this.paymentForm = this.formBuilder.group({
            agree: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.requiredTrue],
        });
        // Retrieve username from Firebase Auth displayName field
        this.userSubscription = this.user$.subscribe((aUser) => {
            this.username = aUser.displayName;
        });
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            // Retrieve the 'game' object passed from the calling component
            this.game = this.navParams.get('game');
            // Retrieve the 'spotsLeft' object passed from the calling component
            this.spotsLeft = this.navParams.get('spotsLeft');
            console.log('THE SPOTS LEFT:', this.spotsLeft);
            // Initialise calculatedFees first
            this.calculatedFees = this.extractNumberFromPrice(this.game.price);
        });
    }
    cancel() {
        // Dismiss modal
        this.modalController.dismiss();
    }
    updateFriendName(index, newName) {
        console.log('Index position: ', index);
        // Set the friends array object name - with onChange input
        if (this.friends[index]) {
            this.friends[index].name = newName;
        }
        console.log('The friends array object: ', this.friends);
    }
    addPlayerToGame(gameId) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            // If payment form is valid, proceed
            if (this.paymentForm.valid) {
                console.log('Total friends: ', this.friends);
                console.log('THIS GAME ID:::', gameId);
                // TODO:: Make payment system gateway here - to finish off the deal. Make payment processing here first to book slot
                try {
                    // Retrieve game reference object
                    const gameRef = this.firestore.collection('games').doc(gameId);
                    const playerListRef = gameRef.collection('playerList');
                    // TODO:: Have to set paymentStatus == PAID once Stripe payment is released.
                    // This is for Personal User Setting - his own account to be added
                    const playerData = {
                        playerName: this.username,
                        timestamp: new Date(),
                        paymentStatus: 'PAID'
                    };
                    yield playerListRef.add(playerData);
                    // If there are some friends involved;
                    if (this.friends.length > 0) {
                        // Iterate through the friends array
                        for (const friend of this.friends) {
                            // Create a friend object for each friend
                            const friendData = {
                                playerName: friend.name,
                                timestamp: new Date(),
                                paymentStatus: 'PAID'
                            };
                            // Add the friend object to the 'playerList' collection
                            yield playerListRef.add(friendData);
                        }
                    }
                    yield this.toastService.presentToast('Players Added Successfully', `Players has been added to the session.`, 'top', 'success', 3500);
                    // Dismiss modal
                    yield this.modalController.dismiss();
                }
                catch (error) {
                    console.error('Error adding player to game: ', error);
                }
            }
        });
    }
    addFriendButton() {
        // Add an empty friend object to the friends array
        this.friends.push({
            name: '',
            timestamp: new Date()
        });
        // Calculate the total price and update calculatedFees
        this.calculatedFees = this.calculateTotalPrice();
    }
    removeFriend(index) {
        this.friends.splice(index, 1);
        console.log('This.friends.length: ', this.friends.length);
        // Calculate the total price and update calculatedFees
        this.calculatedFees = this.calculateTotalPrice();
    }
    calculateTotalPrice() {
        const basePrice = this.extractNumberFromPrice(this.game.price);
        if (this.friends.length > 0) {
            this.calculatedFees = basePrice * (1 + this.friends.length);
        }
        else {
            this.calculatedFees = basePrice; // Set it to the base price if no friends are added
        }
        return this.calculatedFees;
    }
    // Function to extract the numeric part from a string like 'RM25'
    extractNumberFromPrice(priceString) {
        // Use regex to match the numeric part of the string
        const match = priceString.match(/\d+/);
        // If a match is found, parse it to an integer; otherwise, return 0
        return match ? parseInt(match[0], 10) : 0;
    }
};
PaymentPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.NavParams },
    { type: _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_7__.AngularFirestore },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__.Auth },
    { type: _services_toast_toast_service__WEBPACK_IMPORTED_MODULE_2__.ToastService }
];
PaymentPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-payment',
        template: _C_Users_user_Desktop_futbuddy_repo_futbuddy_app_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_payment_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_payment_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], PaymentPage);



/***/ }),

/***/ 28152:
/*!********************************************************!*\
  !*** ./src/app/pages/secure/payment/payment.page.scss ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "ion-checkbox {\n  --size: 25px;\n  --checkbox-background-checked: #6815ec;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBheW1lbnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLHNDQUFBO0FBQ0YiLCJmaWxlIjoicGF5bWVudC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY2hlY2tib3gge1xyXG4gIC0tc2l6ZTogMjVweDtcclxuICAtLWNoZWNrYm94LWJhY2tncm91bmQtY2hlY2tlZDogIzY4MTVlYztcclxufVxyXG5cclxuLy9pb24tY2hlY2tib3g6OnBhcnQoY29udGFpbmVyKSB7XHJcbi8vICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbi8vICBib3JkZXI6IDJweCBzb2xpZCAjNjgxNWVjO1xyXG4vL31cclxuIl19 */";

/***/ })

}]);
//# sourceMappingURL=default-src_app_pages_secure_payment_payment_page_ts.js.map