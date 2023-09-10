"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_secure_qr-code_qr-code_module_ts"],{

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

/***/ 38443:
/*!****************************************************************!*\
  !*** ./src/app/pages/secure/qr-code/qr-code-routing.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QrCodePageRoutingModule": () => (/* binding */ QrCodePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 39859);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _qr_code_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./qr-code.page */ 6640);




const routes = [
    {
        path: '',
        component: _qr_code_page__WEBPACK_IMPORTED_MODULE_0__.QrCodePage
    }
];
let QrCodePageRoutingModule = class QrCodePageRoutingModule {
};
QrCodePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], QrCodePageRoutingModule);



/***/ }),

/***/ 4225:
/*!********************************************************!*\
  !*** ./src/app/pages/secure/qr-code/qr-code.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QrCodePageModule": () => (/* binding */ QrCodePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 39859);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 91346);
/* harmony import */ var _qr_code_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./qr-code-routing.module */ 38443);
/* harmony import */ var _qr_code_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./qr-code.page */ 6640);







let QrCodePageModule = class QrCodePageModule {
};
QrCodePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _qr_code_routing_module__WEBPACK_IMPORTED_MODULE_0__.QrCodePageRoutingModule
        ],
        declarations: [_qr_code_page__WEBPACK_IMPORTED_MODULE_1__.QrCodePage]
    })
], QrCodePageModule);



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

/***/ 55894:
/*!********************************************************!*\
  !*** ./src/app/pages/secure/qr-code/qr-code.page.scss ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJxci1jb2RlLnBhZ2Uuc2NzcyJ9 */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_secure_qr-code_qr-code_module_ts.js.map