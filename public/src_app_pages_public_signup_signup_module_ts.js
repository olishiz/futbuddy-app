"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_public_signup_signup_module_ts"],{

/***/ 36492:
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/public/signup/signup.page.html ***!
  \****************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n    <ion-toolbar class=\"ion-no-border\">\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button text=\"Sign in\" defaultHref=\"/signin\"></ion-back-button>\r\n        </ion-buttons>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n    <div class=\"ion-padding ion-full-height ion-flex ion-flex-center\">\r\n\r\n        <div class=\"logo-container\">\r\n            <h1 class=\"logo-placeholder\">FutBuddy</h1>\r\n            <p>Sign up to enjoy all of our cool features</p>\r\n        </div>\r\n\r\n        <form class=\"form-default\" [formGroup]=\"signup_form\" (submit)=\"signUp()\">\r\n\r\n            <ion-list class=\"item-card-list\" lines=\"none\">\r\n\r\n                <ion-item>\r\n                    <ion-label color=\"tertiary\" position=\"stacked\">Name</ion-label>\r\n                    <ion-input formControlName=\"name\" type=\"text\" autocomplete=\"off\"\r\n                               placeholder=\"Your name\"></ion-input>\r\n                </ion-item>\r\n\r\n                <ion-item>\r\n                    <ion-label color=\"tertiary\" position=\"stacked\">Email</ion-label>\r\n                    <ion-input formControlName=\"email\" type=\"email\" autocomplete=\"off\"\r\n                               placeholder=\"Your email address\"></ion-input>\r\n                </ion-item>\r\n\r\n                <ion-item class=\"ion-margin-top-small\">\r\n                    <ion-label color=\"tertiary\" position=\"stacked\">Password</ion-label>\r\n                    <ion-input formControlName=\"password\" type=\"password\" placeholder=\"Your password\"></ion-input>\r\n                </ion-item>\r\n\r\n            </ion-list>\r\n\r\n            <ion-button class=\"ion-margin-top\" type=\"submit\" expand=\"block\" color=\"primary\">\r\n                Sign up\r\n            </ion-button>\r\n        </form>\r\n\r\n        <div class=\"ion-text-center ion-margin-top\">\r\n            <ion-text color=\"medium\">\r\n                <small>&copy; {{current_year}} FutBuddy</small>\r\n            </ion-text>\r\n        </div>\r\n\r\n    </div>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ 59789:
/*!**************************************************************!*\
  !*** ./src/app/pages/public/signup/signup-routing.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignupPageRoutingModule": () => (/* binding */ SignupPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 39859);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _signup_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signup.page */ 63438);




const routes = [
    {
        path: '',
        component: _signup_page__WEBPACK_IMPORTED_MODULE_0__.SignupPage
    }
];
let SignupPageRoutingModule = class SignupPageRoutingModule {
};
SignupPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SignupPageRoutingModule);



/***/ }),

/***/ 59383:
/*!******************************************************!*\
  !*** ./src/app/pages/public/signup/signup.module.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignupPageModule": () => (/* binding */ SignupPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 39859);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 91346);
/* harmony import */ var _signup_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signup-routing.module */ 59789);
/* harmony import */ var _signup_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signup.page */ 63438);







let SignupPageModule = class SignupPageModule {
};
SignupPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _signup_routing_module__WEBPACK_IMPORTED_MODULE_0__.SignupPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule
        ],
        declarations: [_signup_page__WEBPACK_IMPORTED_MODULE_1__.SignupPage]
    })
], SignupPageModule);



/***/ }),

/***/ 63438:
/*!****************************************************!*\
  !*** ./src/app/pages/public/signup/signup.page.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignupPage": () => (/* binding */ SignupPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 39859);
/* harmony import */ var _C_Users_user_Desktop_futbuddy_repo_futbuddy_app_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_signup_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./signup.page.html */ 36492);
/* harmony import */ var _signup_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signup.page.scss */ 17182);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 91346);
/* harmony import */ var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth/auth.service */ 68927);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var src_app_services_toast_toast_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/toast/toast.service */ 84746);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/firestore */ 44783);










let SignupPage = class SignupPage {
    constructor(authService, loadingController, formBuilder, toastService, router, firestore) {
        this.authService = authService;
        this.loadingController = loadingController;
        this.formBuilder = formBuilder;
        this.toastService = toastService;
        this.router = router;
        this.firestore = firestore;
        this.current_year = new Date().getFullYear();
        this.submit_attempt = false;
    }
    ngOnInit() {
        // Setup form
        this.signup_form = this.formBuilder.group({
            name: [''],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.email, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required])],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required])],
        });
        const usersRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__.collection)(this.firestore, 'users');
        const data = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__.collectionData)(usersRef);
        console.log(data);
    }
    // Sign up
    signUp() {
        var _a, _b, _c, _d, _e;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.submit_attempt = true;
            // If email or password empty
            if (this.signup_form.value.email == '' || this.signup_form.value.password == '' || this.signup_form.value.name == '') {
                yield this.toastService.presentToast('Error', 'Please fill in all fields', 'top', 'danger', 4000);
            }
            else {
                // Proceed with loading overlay
                const loading = yield this.loadingController.create({
                    cssClass: 'default-loading',
                    message: '<p>Signing up...</p><span>Please be patient.</span>',
                    spinner: 'crescent'
                });
                yield loading.present();
                // Sign up with Firebase Authentication
                const user = yield this.authService.signUp((_a = this.signup_form.get('email')) === null || _a === void 0 ? void 0 : _a.value, (_b = this.signup_form.get('password')) === null || _b === void 0 ? void 0 : _b.value);
                // Constructing userObject to be used
                const userObject = {
                    name: (_c = this.signup_form.get('name')) === null || _c === void 0 ? void 0 : _c.value,
                    email: (_d = this.signup_form.get('email')) === null || _d === void 0 ? void 0 : _d.value,
                    password: (_e = this.signup_form.get('password')) === null || _e === void 0 ? void 0 : _e.value,
                };
                // Update Profile Name into Firebase Auth object
                yield this.authService.updateProfileName(userObject.name);
                // adding userObject into Firestore database collection named 'users'
                const userRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__.collection)(this.firestore, 'users');
                yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__.addDoc)(userRef, userObject);
                yield loading.dismiss();
                // Success messages + routing
                if (user) {
                    yield this.toastService.presentToast(`Welcome ${userObject.name}!`, 'Successful sign up', 'top', 'success', 2000);
                    yield this.router.navigateByUrl('/home', { replaceUrl: true });
                }
            }
        });
    }
};
SignupPage.ctorParameters = () => [
    { type: src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.LoadingController },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder },
    { type: src_app_services_toast_toast_service__WEBPACK_IMPORTED_MODULE_3__.ToastService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__.Firestore }
];
SignupPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-signup',
        template: _C_Users_user_Desktop_futbuddy_repo_futbuddy_app_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_signup_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_signup_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], SignupPage);



/***/ }),

/***/ 17182:
/*!******************************************************!*\
  !*** ./src/app/pages/public/signup/signup.page.scss ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaWdudXAucGFnZS5zY3NzIn0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_public_signup_signup_module_ts.js.map