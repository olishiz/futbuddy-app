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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-button (click)=\"cancel()\">\n                Cancel\n            </ion-button>\n        </ion-buttons>\n        <ion-title>\n            Checkout\n        </ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <form [formGroup]=\"paymentForm\" (ngSubmit)=\"addPlayerToGame(this.game.id)\">\n\n        <div class=\"ion-text-center\">\n            <ion-chip color=\"light\">Game Details</ion-chip>\n\n            <div class=\"ion-text-center\">\n                <ion-text color=\"light\" style=\"margin-top: 10px\">\n                    <ion-icon name=\"location\"></ion-icon>\n                    Location: {{ this.game.location }}\n                    <br>\n                </ion-text>\n            </div>\n\n            <div class=\"ion-text-center\">\n                <ion-text color=\"light\" style=\"margin-top: 10px\">\n                    <ion-icon name=\"calendar-outline\"></ion-icon>\n                    Date: {{ this.game.date }}\n                    <br>\n                </ion-text>\n            </div>\n\n            <div class=\"ion-text-center\">\n                <ion-text color=\"light\" style=\"margin-top: 10px\">\n                    <ion-icon name=\"time-outline\"></ion-icon>\n                    Time: {{ this.game.time }}\n                    <br>\n                </ion-text>\n            </div>\n\n            <br>\n\n            <ion-chip color=\"light\">Add Friends if any</ion-chip>\n\n            <!-- List of friends -->\n            <ion-list *ngFor=\"let friend of friends; let i = index\">\n                <ion-item>\n                    <ion-label position=\"floating\">Friend {{ i + 1 }}</ion-label>\n                    <ion-input [value]=\"friend.name\" (input)=\"updateFriendName(i, $event.target.value)\"\n                               name=\"friendName{{ i }}\" placeholder=\"Input friend name\" required\n                               [clearInput]=\"true\"></ion-input>\n                    <ion-button fill=\"clear\" color=\"danger\" (click)=\"removeFriend(i)\">\n                        <ion-icon name=\"close-circle\"></ion-icon>\n                        Remove\n                    </ion-button>\n                </ion-item>\n            </ion-list>\n\n            <br>\n\n            <ion-button *ngIf=\"this.spotsLeft != 1\" (click)=\"addFriendButton()\" style=\"margin-top: 10px;\">Add Friend\n            </ion-button>\n\n            <!--  If spotsLeft == 1, which means - only him available, then hide this button  -->\n            <ion-button *ngIf=\"this.spotsLeft == 1\" [disabled]=\"true\" style=\"margin-top: 10px;\">Not Allowed</ion-button>\n\n            <br> <br>\n\n            <ion-chip color=\"light\">Price</ion-chip>\n\n            <div class=\"ion-text-center\">\n                <ion-text color=\"light\" style=\"margin-top: 10px\">\n                    <ion-icon name=\"cash-outline\"></ion-icon>\n                    You will be paying: {{ this.game.price }} per person.\n                    <br>\n                </ion-text>\n            </div>\n\n            <br>\n\n            <div *ngIf=\"friends.length > 0\">\n                <div class=\"ion-text-center\">\n                    <ion-text color=\"light\" style=\"margin-top: 10px\">\n                        <ion-icon name=\"cash-outline\"></ion-icon>\n                        Total calculated price would be: RM{{ this.calculatedFees }} which includes yours as well.\n                        <br>\n                    </ion-text>\n                </div>\n            </div>\n\n            <br>\n\n            <ion-chip color=\"light\">Payment Method</ion-chip>\n\n            <div class=\"ion-text-center\">\n\n                <ion-row style=\"margin-top: 10px\" class=\"ion-justify-content-center\">\n\n                    <input style=\"margin-bottom: 10px\" type=\"file\" class=\"text-nowrap text-truncate\"\n                           (change)=\"selectFile($event)\">\n\n                    <ion-button (click)=\"upload()\" size=\"small\" color=\"success\" style=\"margin-right: 5px;\">\n                        Upload\n                    </ion-button>\n                    <ion-button (click)=\"openQrCodeModal()\" size=\"small\" color=\"light\">\n                        View Qr Code\n                    </ion-button>\n                </ion-row>\n\n                <br>\n                <ion-text color=\"light\">\n                    Upload a receipt of DuitNow Receipt and our system will verify the payment.\n                </ion-text>\n            </div>\n\n\n        </div>\n\n        <div class=\"ion-text-center\" style=\"margin-top: 20px; display: flex; align-items: center; margin-left: 10%\">\n            <ion-checkbox formControlName=\"agree\" color=\"light\" style=\"margin-right: 8px;\"></ion-checkbox>\n            I agree to the terms and conditions\n        </div>\n\n        <div class=\"ion-text-center\" style=\"margin-top: 20px\">\n            <ion-button color=\"danger\" type=\"submit\" [disabled]=\"!paymentForm.valid\">\n                Pay Now\n            </ion-button>\n        </div>\n\n\n    </form>\n</ion-content>\n");

/***/ }),

/***/ 30330:
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/secure/qr-code/qr-code.page.html ***!
  \******************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-button (click)=\"close()\">\n                Close\n            </ion-button>\n        </ion-buttons>\n        <ion-title>\n            DuitNow QR Code\n        </ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n    <img src=\"https://firebasestorage.googleapis.com/v0/b/futbuddy-kl.appspot.com/o/qr-code%2FFutBuddy%20QR%20Code.jpg?alt=media&token=12a03de5-8576-4435-a3d9-64a28564127c\"\n         alt=\"QR Code\">\n\n    <div class=\"ion-text-center\">\n        <ion-button color=\"light\" (click)=\"close()\" style=\"margin-top: 20px\">Close</ion-button>\n    </div>\n\n</ion-content>\n");

/***/ }),

/***/ 13862:
/*!*********************************************!*\
  !*** ./src/app/models/file-upload.model.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FileUpload": () => (/* binding */ FileUpload)
/* harmony export */ });
class FileUpload {
    constructor(file) {
        this.file = file;
    }
}


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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 39859);
/* harmony import */ var _C_Users_user_Desktop_futbuddy_repo_futbuddy_app_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_payment_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./payment.page.html */ 93755);
/* harmony import */ var _payment_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./payment.page.scss */ 28152);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 91346);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 27091);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/auth */ 75656);
/* harmony import */ var _services_toast_toast_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/toast/toast.service */ 84746);
/* harmony import */ var _qr_code_qr_code_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../qr-code/qr-code.page */ 6640);
/* harmony import */ var _models_file_upload_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../models/file-upload.model */ 13862);











let PaymentPage = class PaymentPage {
    constructor(modalController, formBuilder, navParams, firestore, auth, toastService) {
        this.modalController = modalController;
        this.formBuilder = formBuilder;
        this.navParams = navParams;
        this.firestore = firestore;
        this.auth = auth;
        this.toastService = toastService;
        this.friends = []; // Initialize it as an empty array
        this.user$ = (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__.user)(this.auth);
        this.calculatedFees = 0;
        this.spotsLeft = 0;
        this.percentage = 0;
        this.paymentForm = this.formBuilder.group({
            agree: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.requiredTrue],
        });
        // Retrieve username from Firebase Auth displayName field
        this.userSubscription = this.user$.subscribe((aUser) => {
            this.username = aUser.displayName;
        });
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            // Validation steps for not empty array in friends array
            if (this.checkFriendNames()) {
                yield this.toastService.presentToast('Error', 'Please input friend name', 'top', 'danger', 2000);
                return;
            }
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
        // Minus the spotsLeft variable by one
        this.spotsLeft--;
    }
    removeFriend(index) {
        this.friends.splice(index, 1);
        console.log('This.friends.length: ', this.friends.length);
        // Calculate the total price and update calculatedFees
        this.calculatedFees = this.calculateTotalPrice();
        // Add the spotsLeft variable by one
        this.spotsLeft++;
    }
    checkFriendNames() {
        for (const friend of this.friends) {
            if (!friend.name || friend.name.trim() === '') {
                return true; // At least one friend's name is empty
            }
        }
        return false; // All friend names are filled
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
    openQrCodeModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            console.log('open open');
            // Open filter modal
            const modal = yield this.modalController.create({
                component: _qr_code_qr_code_page__WEBPACK_IMPORTED_MODULE_3__.QrCodePage,
                swipeToClose: true,
            });
            return yield modal.present();
        });
    }
    onImageChange(event) {
        const reader = new FileReader();
        if (event.target.files && event.target.files[0]) {
            const file = event.target.files[0];
            this.selectedImage = file; // Store the actual file object for uploading
            console.log("Image loaded:", this.selectedImage.name); // Log the name of the loaded image
            reader.readAsDataURL(file);
            reader.onload = () => {
                this.imagePreview = reader.result; // Set the base64 encoded preview
            };
        }
    }
    selectFile(event) {
        this.selectedFiles = event.target.files;
        console.log('this.selectedFiles', this.selectedFiles);
    }
    upload() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            if (this.selectedFiles) {
                const file = this.selectedFiles.item(0);
                if (file) {
                    this.currentFileUpload = new _models_file_upload_model__WEBPACK_IMPORTED_MODULE_4__.FileUpload(file);
                    console.log('the currenty file upload', this.currentFileUpload);
                    const filePath = '/uploads-receipts/' + file.name; // Set the desired storage path
                    console.log('filepath', filePath);
                    // const newImageRef = ref(this.storage, filePath);
                    //
                    // console.log(newImageRef)
                    //
                    // const fileSnapshot = await uploadBytesResumable(newImageRef, file);
                    //
                    // console.log('filesnapshot', fileSnapshot)
                    //
                    // debugger
                    // const fileRef = this.storage.ref(filePath);
                    //
                    // // Upload the file to Firebase Storage
                    // const task = fileRef.put(file);
                    //
                    // // Track the upload progress
                    // task.percentageChanges().subscribe(percentage => {
                    //     this.percentage = Math.round(percentage ? percentage : 0);
                    // });
                    //
                    // // Handle the completion of the upload
                    // task.then(() => {
                    //     // File uploaded successfully
                    //     console.log('File uploaded:', filePath);
                    // }).catch(error => {
                    //     // Handle any errors during the upload
                    //     console.error('Error uploading file:', error);
                    // })
                }
            }
        });
    }
};
PaymentPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ModalController },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.NavParams },
    { type: _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_9__.AngularFirestore },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__.Auth },
    { type: _services_toast_toast_service__WEBPACK_IMPORTED_MODULE_2__.ToastService }
];
PaymentPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-payment',
        template: _C_Users_user_Desktop_futbuddy_repo_futbuddy_app_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_payment_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_payment_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], PaymentPage);



/***/ }),

/***/ 6640:
/*!******************************************************!*\
  !*** ./src/app/pages/secure/qr-code/qr-code.page.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QrCodePage": () => (/* binding */ QrCodePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 39859);
/* harmony import */ var _C_Users_user_Desktop_futbuddy_repo_futbuddy_app_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_qr_code_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./qr-code.page.html */ 30330);
/* harmony import */ var _qr_code_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./qr-code.page.scss */ 55894);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 91346);





let QrCodePage = class QrCodePage {
    constructor(modalController) {
        this.modalController = modalController;
    }
    ngOnInit() {
    }
    close() {
        // Dismiss modal
        this.modalController.dismiss();
    }
};
QrCodePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ModalController }
];
QrCodePage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-qr-code',
        template: _C_Users_user_Desktop_futbuddy_repo_futbuddy_app_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_qr_code_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_qr_code_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], QrCodePage);



/***/ }),

/***/ 28152:
/*!********************************************************!*\
  !*** ./src/app/pages/secure/payment/payment.page.scss ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "ion-checkbox {\n  --size: 25px;\n  --checkbox-background-checked: #6815ec;\n}\n\n/* CSS */\n\n.file-input-button {\n  position: relative;\n  overflow: hidden;\n  display: inline-block;\n  cursor: pointer;\n  color: #fff;\n  /* Button text color */\n  padding: 10px 20px;\n  /* Button padding */\n  border-radius: 4px;\n  /* Button border radius */\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBheW1lbnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLHNDQUFBO0FBQ0Y7O0FBT0EsUUFBQTs7QUFDQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQWEsc0JBQUE7RUFDYixrQkFBQTtFQUFvQixtQkFBQTtFQUNwQixrQkFBQTtFQUFvQix5QkFBQTtBQUR0QiIsImZpbGUiOiJwYXltZW50LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jaGVja2JveCB7XHJcbiAgLS1zaXplOiAyNXB4O1xyXG4gIC0tY2hlY2tib3gtYmFja2dyb3VuZC1jaGVja2VkOiAjNjgxNWVjO1xyXG59XHJcblxyXG4vL2lvbi1jaGVja2JveDo6cGFydChjb250YWluZXIpIHtcclxuLy8gIGJvcmRlci1yYWRpdXM6IDZweDtcclxuLy8gIGJvcmRlcjogMnB4IHNvbGlkICM2ODE1ZWM7XHJcbi8vfVxyXG5cclxuLyogQ1NTICovXHJcbi5maWxlLWlucHV0LWJ1dHRvbiB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBjb2xvcjogI2ZmZjsgLyogQnV0dG9uIHRleHQgY29sb3IgKi9cclxuICBwYWRkaW5nOiAxMHB4IDIwcHg7IC8qIEJ1dHRvbiBwYWRkaW5nICovXHJcbiAgYm9yZGVyLXJhZGl1czogNHB4OyAvKiBCdXR0b24gYm9yZGVyIHJhZGl1cyAqL1xyXG59XHJcbiJdfQ== */";

/***/ }),

/***/ 55894:
/*!********************************************************!*\
  !*** ./src/app/pages/secure/qr-code/qr-code.page.scss ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJxci1jb2RlLnBhZ2Uuc2NzcyJ9 */";

/***/ })

}]);
//# sourceMappingURL=default-src_app_pages_secure_payment_payment_page_ts.js.map