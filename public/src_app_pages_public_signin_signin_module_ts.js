"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_public_signin_signin_module_ts"],{

/***/ 13105:
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/public/signin/signin.page.html ***!
  \****************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n    <ion-toolbar class=\"ion-no-border\">\r\n        <ion-buttons slot=\"end\">\r\n            <ion-button color=\"primary\" routerLink=\"/signup\">\r\n                Sign up\r\n            </ion-button>\r\n        </ion-buttons>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n    <div class=\"ion-padding ion-full-height ion-flex ion-flex-center\">\r\n\r\n        <div class=\"logo-container\">\r\n            <h1 class=\"logo-placeholder\">FutBuddy</h1>\r\n            <p>Login to your account</p>\r\n        </div>\r\n\r\n        <form class=\"form-default\" [formGroup]=\"signin_form\" (submit)=\"signIn()\">\r\n\r\n            <ion-list class=\"item-card-list\" lines=\"none\">\r\n                <ion-item>\r\n                    <ion-label color=\"tertiary\" position=\"stacked\">Email</ion-label>\r\n                    <ion-input formControlName=\"email\" type=\"email\" autocomplete=\"off\"\r\n                               placeholder=\"Your email address\"></ion-input>\r\n                </ion-item>\r\n\r\n                <ion-item class=\"ion-margin-top-small\">\r\n                    <ion-label color=\"tertiary\" position=\"stacked\">Password</ion-label>\r\n                    <ion-input formControlName=\"password\" type=\"password\" placeholder=\"Your password\"></ion-input>\r\n                </ion-item>\r\n            </ion-list>\r\n\r\n            <ion-button class=\"ion-margin-top\" type=\"submit\" expand=\"block\" color=\"primary\">\r\n                Sign in\r\n            </ion-button>\r\n\r\n            <ion-button color=\"primary\" fill=\"clear\" expand=\"block\" class=\"ion-button-small ion-margin-top-medium\"\r\n                        routerLink=\"/password-reset\">\r\n                Forgot password?\r\n            </ion-button>\r\n        </form>\r\n\r\n        <div class=\"ion-text-center ion-margin-top\">\r\n            <ion-text color=\"medium\">\r\n                <small>&copy; {{current_year}} FutBuddy</small>\r\n            </ion-text>\r\n        </div>\r\n\r\n    </div>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ 45317:
/*!**************************************************************!*\
  !*** ./src/app/pages/public/signin/signin-routing.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SigninPageRoutingModule": () => (/* binding */ SigninPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 39859);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _signin_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signin.page */ 71429);




const routes = [
    {
        path: '',
        component: _signin_page__WEBPACK_IMPORTED_MODULE_0__.SigninPage
    }
];
let SigninPageRoutingModule = class SigninPageRoutingModule {
};
SigninPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SigninPageRoutingModule);



/***/ }),

/***/ 60054:
/*!******************************************************!*\
  !*** ./src/app/pages/public/signin/signin.module.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SigninPageModule": () => (/* binding */ SigninPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 39859);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 91346);
/* harmony import */ var _signin_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signin-routing.module */ 45317);
/* harmony import */ var _signin_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signin.page */ 71429);







let SigninPageModule = class SigninPageModule {
};
SigninPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _signin_routing_module__WEBPACK_IMPORTED_MODULE_0__.SigninPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule
        ],
        declarations: [_signin_page__WEBPACK_IMPORTED_MODULE_1__.SigninPage]
    })
], SigninPageModule);



/***/ }),

/***/ 71429:
/*!****************************************************!*\
  !*** ./src/app/pages/public/signin/signin.page.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SigninPage": () => (/* binding */ SigninPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 39859);
/* harmony import */ var _C_Users_user_Desktop_futbuddy_repo_futbuddy_app_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_signin_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./signin.page.html */ 13105);
/* harmony import */ var _signin_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signin.page.scss */ 91430);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 91346);
/* harmony import */ var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth/auth.service */ 68927);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var src_app_services_toast_toast_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/toast/toast.service */ 84746);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 13252);









let SigninPage = class SigninPage {
    constructor(authService, loadingController, formBuilder, toastService, router) {
        this.authService = authService;
        this.loadingController = loadingController;
        this.formBuilder = formBuilder;
        this.toastService = toastService;
        this.router = router;
        this.current_year = new Date().getFullYear();
        this.submit_attempt = false;
    }
    ngOnInit() {
        // Setup form
        this.signin_form = this.formBuilder.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.email, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required])],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required])]
        });
        // DEBUG: Prefill inputs
        // this.signin_form.get('email').setValue('john.doe@mail.com');
        // this.signin_form.get('password').setValue('123456');
    }
    // Sign in
    signIn() {
        var _a, _b;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.submit_attempt = true;
            // If email or password empty
            if (this.signin_form.value.email == '' || this.signin_form.value.password == '') {
                yield this.toastService.presentToast('Error', 'Please input email and password', 'top', 'danger', 2000);
            }
            else {
                // Proceed with loading overlay
                const loading = yield this.loadingController.create({
                    cssClass: 'default-loading',
                    message: '<p>Signing in...</p><span>Please be patient.</span>',
                    spinner: 'crescent'
                });
                yield loading.present();
                // Sign in via Firebase Authentication
                const user = yield this.authService.signIn((_a = this.signin_form.get('email')) === null || _a === void 0 ? void 0 : _a.value, (_b = this.signin_form.get('password')) === null || _b === void 0 ? void 0 : _b.value);
                yield loading.dismiss();
                // If there is user, navigate them to home page
                if (user) {
                    yield this.router.navigateByUrl('/home', { replaceUrl: true });
                }
            }
        });
    }
};
SigninPage.ctorParameters = () => [
    { type: src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.LoadingController },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder },
    { type: src_app_services_toast_toast_service__WEBPACK_IMPORTED_MODULE_3__.ToastService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router }
];
SigninPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-signin',
        template: _C_Users_user_Desktop_futbuddy_repo_futbuddy_app_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_signin_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_signin_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], SigninPage);



/***/ }),

/***/ 91430:
/*!******************************************************!*\
  !*** ./src/app/pages/public/signin/signin.page.scss ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaWduaW4ucGFnZS5zY3NzIn0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_public_signin_signin_module_ts.js.map