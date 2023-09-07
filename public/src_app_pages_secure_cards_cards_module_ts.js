"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_secure_cards_cards_module_ts"],{

/***/ 13794:
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/secure/cards/add/add.page.html ***!
  \****************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button (click)=\"cancel()\">\r\n        Cancel\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      Add card\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <div class=\"ion-padding\">\r\n\r\n    <form class=\"form-default\" [formGroup]=\"add_card_form\" (submit)=\"save()\">\r\n\r\n      <ion-list class=\"item-card-list\" lines=\"none\">\r\n        <ion-item>\r\n          <ion-label color=\"tertiary\" position=\"stacked\">Card number</ion-label>\r\n          <ion-input formControlName=\"card_number\" placeholder=\"0000 0000 0000 0000\" type=\"text\" minlength=\"13\" maxlength=\"22\" inputmode=\"numeric\" (ionChange)=\"formatCreditCardNumber($event)\"></ion-input>\r\n        </ion-item>\r\n        <ion-text *ngIf=\"!add_card_form.controls.card_number.valid && submit_attempt\" color=\"danger\">\r\n          <small class=\"error-message-form\">Credit card number not valid. Minimum digits is 9, maximum digits is 19.</small>\r\n        </ion-text>\r\n\r\n        <ion-item>\r\n          <ion-label color=\"tertiary\" position=\"stacked\">Expiry date</ion-label>\r\n          <ion-input formControlName=\"expiry_date\" placeholder=\"MM/YY\" type=\"text\" minlength=\"5\" maxlength=\"5\" inputmode=\"numeric\" length=\"5\" (ionChange)=\"formatExpiryDate($event)\"></ion-input>\r\n        </ion-item>\r\n        <ion-text *ngIf=\"!add_card_form.controls.expiry_date.valid && submit_attempt\" color=\"danger\">\r\n          <small class=\"error-message-form\">Expiry date is required.</small>\r\n        </ion-text>\r\n\r\n        <ion-item>\r\n          <ion-label color=\"tertiary\" position=\"stacked\">CVC/CVV</ion-label>\r\n          <ion-input formControlName=\"cvv\" placeholder=\"123\" type=\"tel\" pattern=\"[0-9]*\" maxlength=\"3\" inputmode=\"numeric\"></ion-input>\r\n        </ion-item>\r\n        <ion-text *ngIf=\"!add_card_form.controls.cvv.valid && submit_attempt\" color=\"danger\">\r\n          <small class=\"error-message-form\">CVC/CVV number is required to have exactly 3 digits.</small>\r\n        </ion-text>\r\n\r\n      </ion-list>\r\n\r\n    </form>\r\n\r\n  </div>\r\n\r\n</ion-content>\r\n\r\n<ion-footer class=\"modal-footer\" collapse=\"fade\">\r\n  <ion-toolbar>\r\n    <form class=\"form-default\" [formGroup]=\"add_card_form\" (submit)=\"save()\">\r\n      <ion-button type=\"submit\" expand=\"block\" color=\"primary\">\r\n        Save card\r\n      </ion-button>\r\n    </form>\r\n  </ion-toolbar>\r\n</ion-footer>");

/***/ }),

/***/ 89041:
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/secure/cards/cards.page.html ***!
  \**************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header collapse=\"fade\" [translucent]=\"true\">\r\n  <ion-toolbar>\r\n    <ion-title>\r\n      Cards\r\n    </ion-title>\r\n    <ion-buttons slot=\"primary\">\r\n      <ion-button (click)=\"addCard()\">\r\n        <ion-icon slot=\"icon-only\" name=\"add\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n  <ion-header collapse=\"condense\">\r\n    <ion-toolbar>\r\n      <ion-title size=\"large\">Cards</ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n\r\n  <div class=\"ion-padding\">\r\n\r\n    <swiper class=\"swiper-cards\" #swiper [config]=\"config\">\r\n      <ng-template swiperSlide>\r\n        <div class=\"cc-template cc-template-color-1\">\r\n          <div class=\"cc-bankname\">Bank of America</div>\r\n          <div class=\"cc-number\">\r\n            <ion-text *ngIf=\"card_details_visible\" class=\"animate__animated animate__flipInX\">0123 4567 8901 2345</ion-text>\r\n            <ion-text *ngIf=\"!card_details_visible\" class=\"animate__animated animate__flipInX\">&middot;&middot;&middot;&middot; &middot;&middot;&middot;&middot;\r\n              &middot;&middot;&middot;&middot; 2345</ion-text>\r\n          </div>\r\n          <div class=\"cc-footer\">\r\n            <div>\r\n              <div class=\"cc-expiry-date\">\r\n                <p>Expiry date</p>\r\n                <span>03/26</span>\r\n              </div>\r\n              <div class=\"cc-cvv\">\r\n                <p>CVV</p>\r\n                <span>047</span>\r\n              </div>\r\n            </div>\r\n            <div>\r\n              <div class=\"cc-logo\">\r\n                <img src=\"../../../../assets/sample/banking-logos/visa.svg\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <p class=\"cc-description\">VISA 2345</p>\r\n      </ng-template>\r\n      <ng-template swiperSlide>\r\n        <div class=\"cc-template cc-template-color-2\">\r\n          <div class=\"cc-bankname\">Wells Fargo</div>\r\n          <div class=\"cc-number\">\r\n            <ion-text *ngIf=\"card_details_visible\" class=\"animate__animated animate__flipInX\">9876 5432 1098 7654</ion-text>\r\n            <ion-text *ngIf=\"!card_details_visible\" class=\"animate__animated animate__flipInX\">&middot;&middot;&middot;&middot; &middot;&middot;&middot;&middot;\r\n              &middot;&middot;&middot;&middot; 7654</ion-text>\r\n          </div>\r\n          <div class=\"cc-footer\">\r\n            <div>\r\n              <div class=\"cc-expiry-date\">\r\n                <p>Expiry date</p>\r\n                <span>01/24</span>\r\n              </div>\r\n              <div class=\"cc-cvv\">\r\n                <p>CVV</p>\r\n                <span>853</span>\r\n              </div>\r\n            </div>\r\n            <div>\r\n              <div class=\"cc-logo\">\r\n                <img src=\"../../../../assets/sample/banking-logos/visa.svg\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <p class=\"cc-description\">VISA 7654</p>\r\n      </ng-template>\r\n    </swiper>\r\n\r\n    <ion-list class=\"list-custom\" lines=\"full\">\r\n      <ion-item button routerLink=\"/payments\">\r\n        <ion-avatar slot=\"start\" class=\"ion-avatar-default-icon\">\r\n          <ion-icon color=\"primary\" name=\"analytics\"></ion-icon>\r\n        </ion-avatar>\r\n        <ion-label>\r\n          <h3>Transactions</h3>\r\n          <p class=\"font-size-smallest\">View all transactions</p>\r\n        </ion-label>\r\n      </ion-item>\r\n    </ion-list>\r\n\r\n    <hr class=\"hr-medium\">\r\n\r\n    <ion-list-header class=\"ion-list-header-small\">\r\n      <ion-label>Quick Actions</ion-label>\r\n    </ion-list-header>\r\n\r\n    <ion-list class=\"list-custom\" lines=\"full\">\r\n      <ion-item button detail=\"false\">\r\n        <ion-avatar slot=\"start\" class=\"ion-avatar-default-icon\">\r\n          <ion-icon color=\"primary\" name=\"eye\"></ion-icon>\r\n        </ion-avatar>\r\n        <ion-label>\r\n          <h3>Show card details</h3>\r\n          <p class=\"font-size-smallest\">Hidden by default</p>\r\n        </ion-label>\r\n        <ion-toggle slot=\"end\" [(ngModel)]=\"card_details_visible\"></ion-toggle>\r\n      </ion-item>\r\n      <ion-item detail=\"false\">\r\n        <ion-avatar slot=\"start\" class=\"ion-avatar-default-icon\">\r\n          <ion-icon color=\"primary\" name=\"sync\"></ion-icon>\r\n        </ion-avatar>\r\n        <ion-label>\r\n          <h3>Manual sync</h3>\r\n          <p class=\"font-size-smallest\">Sync card</p>\r\n        </ion-label>\r\n        <ion-button slot=\"end\" (click)=\"sync()\">\r\n          Sync now\r\n        </ion-button>\r\n      </ion-item>\r\n      <ion-item button>\r\n        <ion-avatar slot=\"start\" class=\"ion-avatar-default-icon\">\r\n          <ion-icon color=\"primary\" name=\"information\"></ion-icon>\r\n        </ion-avatar>\r\n        <ion-label>\r\n          <h3>Details</h3>\r\n          <p class=\"font-size-smallest\">More info about this card</p>\r\n        </ion-label>\r\n      </ion-item>\r\n    </ion-list>\r\n\r\n    <hr class=\"hr-medium\">\r\n\r\n    <ion-list class=\"list-custom\" lines=\"full\">\r\n      <ion-item button detail=\"false\" (click)=\"deleteCard()\">\r\n        <ion-avatar slot=\"start\" class=\"ion-avatar-danger-icon\">\r\n          <ion-icon color=\"danger\" name=\"close\"></ion-icon>\r\n        </ion-avatar>\r\n        <ion-label color=\"danger\">\r\n          <h3>Delete card</h3>\r\n          <p class=\"font-size-smallest\">Remove this card</p>\r\n        </ion-label>\r\n      </ion-item>\r\n    </ion-list>\r\n  </div>\r\n\r\n</ion-content>");

/***/ }),

/***/ 32586:
/*!****************************************************!*\
  !*** ./src/app/pages/secure/cards/add/add.page.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddPage": () => (/* binding */ AddPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 39859);
/* harmony import */ var _C_Users_user_Desktop_futbuddy_repo_futbuddy_app_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_add_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./add.page.html */ 13794);
/* harmony import */ var _add_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add.page.scss */ 92988);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 91346);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 18346);






let AddPage = class AddPage {
    constructor(modalController, loadingController, formBuilder) {
        this.modalController = modalController;
        this.loadingController = loadingController;
        this.formBuilder = formBuilder;
        this.submit_attempt = false;
    }
    ngOnInit() {
        // Setup form
        this.add_card_form = this.formBuilder.group({
            card_number: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
            expiry_date: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
            cvv: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.maxLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required])]
        });
    }
    // Format credit
    formatCreditCardNumber(event) {
        // Input val
        let value = event.detail.value;
        // Format: 0000 0000 0000 0000
        const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
        const matches = v.match(/\d{4,16}/g);
        const match = (matches && matches[0]) || '';
        const parts = [];
        for (let i = 0, len = match.length; i < len; i += 4) {
            parts.push(match.substring(i, i + 4));
        }
        // Set formatted value
        if (parts.length > 0) {
            this.add_card_form.get('card_number').setValue(parts.join(' '));
        }
        else {
            this.add_card_form.get('card_number').setValue(value);
        }
    }
    // Format expiry date
    formatExpiryDate(event) {
        // Input val
        let value = event.detail.value;
        // Format: 01/23
        if (value.length == 3) {
            if (!value.includes('/')) {
                const month = value.slice(0, 2);
                const year = value.slice(2, 4);
                this.add_card_form.get('expiry_date').setValue(month + '/' + year);
            }
        }
        else if (value.length > 5) {
            value = value.substring(0, value.length - 1);
            this.add_card_form.get('expiry_date').setValue(value);
        }
    }
    // Cancel
    cancel() {
        // Dismiss modal
        this.modalController.dismiss();
    }
    // Save card
    save() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            this.submit_attempt = true;
            // If form valid
            if (this.add_card_form.valid) {
                // Loading overlay
                const loading = yield this.loadingController.create({
                    cssClass: 'default-loading',
                    message: '<p>Saving card...</p><span>Please be patient.</span>',
                    spinner: 'crescent'
                });
                yield loading.present();
                // Add save logic here ...
                // ...
                // Fake timeout
                setTimeout(() => {
                    // Dismiss modal
                    this.modalController.dismiss();
                    loading.dismiss();
                }, 2000);
            }
        });
    }
};
AddPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.LoadingController },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder }
];
AddPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-add',
        template: _C_Users_user_Desktop_futbuddy_repo_futbuddy_app_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_add_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_add_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], AddPage);



/***/ }),

/***/ 85302:
/*!************************************************************!*\
  !*** ./src/app/pages/secure/cards/cards-routing.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CardsPageRoutingModule": () => (/* binding */ CardsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 39859);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _cards_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cards.page */ 89756);




const routes = [
    {
        path: '',
        component: _cards_page__WEBPACK_IMPORTED_MODULE_0__.CardsPage
    },
    {
        path: 'add',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_secure_cards_add_add_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./add/add.module */ 84974)).then(m => m.AddPageModule)
    }
];
let CardsPageRoutingModule = class CardsPageRoutingModule {
};
CardsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CardsPageRoutingModule);



/***/ }),

/***/ 99314:
/*!****************************************************!*\
  !*** ./src/app/pages/secure/cards/cards.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CardsPageModule": () => (/* binding */ CardsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 39859);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 91346);
/* harmony import */ var _cards_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cards-routing.module */ 85302);
/* harmony import */ var _cards_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cards.page */ 89756);
/* harmony import */ var swiper_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! swiper/angular */ 20861);







// Swiper

let CardsPageModule = class CardsPageModule {
};
CardsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _cards_routing_module__WEBPACK_IMPORTED_MODULE_0__.CardsPageRoutingModule,
            swiper_angular__WEBPACK_IMPORTED_MODULE_7__.SwiperModule
        ],
        declarations: [_cards_page__WEBPACK_IMPORTED_MODULE_1__.CardsPage]
    })
], CardsPageModule);



/***/ }),

/***/ 89756:
/*!**************************************************!*\
  !*** ./src/app/pages/secure/cards/cards.page.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CardsPage": () => (/* binding */ CardsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 39859);
/* harmony import */ var _C_Users_user_Desktop_futbuddy_repo_futbuddy_app_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_cards_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./cards.page.html */ 89041);
/* harmony import */ var _cards_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cards.page.scss */ 32154);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper */ 81365);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 91346);
/* harmony import */ var src_app_services_toast_toast_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/toast/toast.service */ 84746);
/* harmony import */ var _add_add_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add/add.page */ 32586);








swiper__WEBPACK_IMPORTED_MODULE_2__["default"].use([swiper__WEBPACK_IMPORTED_MODULE_2__.Pagination]);
let CardsPage = class CardsPage {
    constructor(alertController, toastService, loadingController, modalController, routerOutlet) {
        this.alertController = alertController;
        this.toastService = toastService;
        this.loadingController = loadingController;
        this.modalController = modalController;
        this.routerOutlet = routerOutlet;
        // Swiper config
        this.config = {
            slidesPerView: 1,
            spaceBetween: 50,
            pagination: { clickable: false },
            allowTouchMove: true
        };
        this.card_details_visible = false;
    }
    ngAfterContentChecked() {
        if (this.swiper) {
            this.swiper.updateSwiper({});
        }
    }
    // Sync
    sync() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            // Loading overlay
            const loading = yield this.loadingController.create({
                cssClass: 'default-loading',
                message: '<p>Syncing card...</p><span>Please be patient.</span>',
                spinner: 'crescent'
            });
            yield loading.present();
            // Fake timeout
            setTimeout(() => {
                loading.dismiss();
            }, 2000);
        });
    }
    // Add card
    addCard() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            // Open filter modal
            const modal = yield this.modalController.create({
                component: _add_add_page__WEBPACK_IMPORTED_MODULE_4__.AddPage,
                swipeToClose: true,
                presentingElement: this.routerOutlet.nativeEl
            });
            return yield modal.present();
        });
    }
    // Delete card
    deleteCard() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'custom-alert',
                header: 'Delete this card permanently?',
                message: 'This action cannot be undone.',
                buttons: [
                    {
                        text: 'Delete card',
                        cssClass: 'danger',
                        handler: () => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                            this.toastService.presentToast('Success', 'Card successfully deleted', 'top', 'success', 2000);
                        })
                    },
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'cancel'
                    }
                ]
            });
            yield alert.present();
        });
    }
};
CardsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController },
    { type: src_app_services_toast_toast_service__WEBPACK_IMPORTED_MODULE_3__.ToastService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonRouterOutlet }
];
CardsPage.propDecorators = {
    swiper: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild, args: ['swiper',] }]
};
CardsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-cards',
        template: _C_Users_user_Desktop_futbuddy_repo_futbuddy_app_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_cards_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_cards_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], CardsPage);



/***/ }),

/***/ 92988:
/*!******************************************************!*\
  !*** ./src/app/pages/secure/cards/add/add.page.scss ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 32154:
/*!****************************************************!*\
  !*** ./src/app/pages/secure/cards/cards.page.scss ***!
  \****************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXJkcy5wYWdlLnNjc3MifQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_secure_cards_cards_module_ts.js.map