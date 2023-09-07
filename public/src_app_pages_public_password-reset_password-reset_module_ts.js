"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_public_password-reset_password-reset_module_ts"],{

/***/ 8989:
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/public/password-reset/password-reset.page.html ***!
  \********************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n    <ion-toolbar class=\"ion-no-border\">\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button text=\"Sign in\" defaultHref=\"/signin\"></ion-back-button>\r\n        </ion-buttons>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n    <div class=\"ion-padding ion-full-height ion-flex ion-flex-center\">\r\n\r\n        <div class=\"logo-container\">\r\n            <h1 class=\"logo-placeholder\">FutBuddy</h1>\r\n            <p>Reset your password</p>\r\n        </div>\r\n\r\n        <form class=\"form-default\" [formGroup]=\"reset_form\" (submit)=\"reset()\">\r\n\r\n            <ion-list class=\"item-card-list\" lines=\"none\">\r\n\r\n                <ion-item>\r\n                    <ion-label color=\"tertiary\" position=\"stacked\">Email</ion-label>\r\n                    <ion-input formControlName=\"email\" type=\"email\" autocomplete=\"off\"\r\n                               placeholder=\"Your email address\"></ion-input>\r\n                </ion-item>\r\n            </ion-list>\r\n\r\n            <ion-button class=\"ion-margin-top\" expand=\"block\" color=\"primary\" type=\"submit\">\r\n                Reset password\r\n            </ion-button>\r\n        </form>\r\n\r\n        <div class=\"ion-text-center ion-margin-top\">\r\n            <ion-text color=\"medium\">\r\n                <small>&copy; {{current_year}} FutBuddy</small>\r\n            </ion-text>\r\n        </div>\r\n\r\n    </div>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ 62154:
/*!******************************************************************************!*\
  !*** ./src/app/pages/public/password-reset/password-reset-routing.module.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PasswordResetPageRoutingModule": () => (/* binding */ PasswordResetPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 39859);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _password_reset_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./password-reset.page */ 69058);




const routes = [
    {
        path: '',
        component: _password_reset_page__WEBPACK_IMPORTED_MODULE_0__.PasswordResetPage
    }
];
let PasswordResetPageRoutingModule = class PasswordResetPageRoutingModule {
};
PasswordResetPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PasswordResetPageRoutingModule);



/***/ }),

/***/ 65409:
/*!**********************************************************************!*\
  !*** ./src/app/pages/public/password-reset/password-reset.module.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PasswordResetPageModule": () => (/* binding */ PasswordResetPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 39859);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 91346);
/* harmony import */ var _password_reset_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./password-reset-routing.module */ 62154);
/* harmony import */ var _password_reset_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./password-reset.page */ 69058);







let PasswordResetPageModule = class PasswordResetPageModule {
};
PasswordResetPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _password_reset_routing_module__WEBPACK_IMPORTED_MODULE_0__.PasswordResetPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule
        ],
        declarations: [_password_reset_page__WEBPACK_IMPORTED_MODULE_1__.PasswordResetPage]
    })
], PasswordResetPageModule);



/***/ }),

/***/ 69058:
/*!********************************************************************!*\
  !*** ./src/app/pages/public/password-reset/password-reset.page.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PasswordResetPage": () => (/* binding */ PasswordResetPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 39859);
/* harmony import */ var _C_Users_user_Desktop_futbuddy_repo_futbuddy_app_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_password_reset_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./password-reset.page.html */ 8989);
/* harmony import */ var _password_reset_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./password-reset.page.scss */ 30901);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/auth/auth.service */ 68927);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 91346);
/* harmony import */ var _services_toast_toast_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/toast/toast.service */ 84746);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 13252);









let PasswordResetPage = class PasswordResetPage {
    constructor(authService, loadingController, formBuilder, toastService, router) {
        this.authService = authService;
        this.loadingController = loadingController;
        this.formBuilder = formBuilder;
        this.toastService = toastService;
        this.router = router;
        this.current_year = new Date().getFullYear();
        // Setup form
        this.reset_form = this.formBuilder.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.email, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required])],
        });
    }
    ngOnInit() {
    }
    reset() {
        var _a;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            // If password empty
            if (this.reset_form.value.email == '') {
                yield this.toastService.presentToast('Error', 'Please input email', 'top', 'danger', 2000);
            }
            else {
                // Reset password via email
                yield this.authService.resetPasswordViaEmail((_a = this.reset_form.get('email')) === null || _a === void 0 ? void 0 : _a.value);
                // Make timeout to navigate back to sign in page
                setTimeout(() => {
                    this.router.navigateByUrl('/signin', { replaceUrl: true });
                }, 2000);
            }
        });
    }
};
PasswordResetPage.ctorParameters = () => [
    { type: _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.LoadingController },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder },
    { type: _services_toast_toast_service__WEBPACK_IMPORTED_MODULE_3__.ToastService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router }
];
PasswordResetPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-password-reset',
        template: _C_Users_user_Desktop_futbuddy_repo_futbuddy_app_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_password_reset_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_password_reset_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], PasswordResetPage);



/***/ }),

/***/ 30901:
/*!**********************************************************************!*\
  !*** ./src/app/pages/public/password-reset/password-reset.page.scss ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYXNzd29yZC1yZXNldC5wYWdlLnNjc3MifQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_public_password-reset_password-reset_module_ts.js.map