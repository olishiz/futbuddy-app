"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_secure_payments_payment-detail_payment-detail_module_ts"],{

/***/ 93276:
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/secure/payments/payment-detail/payment-detail.page.html ***!
  \*****************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button text=\"Payments\" defaultHref=\"/payments\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      Details\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <div class=\"ion-padding\">\r\n\r\n    <ion-list-header class=\"ion-list-header-small\">\r\n      <ion-label>Information</ion-label>\r\n    </ion-list-header>\r\n\r\n    <ion-list class=\"list-custom\" lines=\"full\">\r\n      <ion-item>\r\n        <ion-label>\r\n          <p>Amount</p>\r\n        </ion-label>\r\n        <ion-badge color=\"danger\" mode=\"ios\" slot=\"end\">- $8.60</ion-badge>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label>\r\n          <p>Status</p>\r\n        </ion-label>\r\n        <ion-input readonly slot=\"end\" class=\"font-size-small ion-text-right ion-no-padding-end\" value=\"Completed\"></ion-input>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label>\r\n          <p>Date</p>\r\n        </ion-label>\r\n        <ion-input readonly slot=\"end\" class=\"font-size-small ion-text-right ion-no-padding-end\" value=\"01 June, 2022 / 09:21\"></ion-input>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label>\r\n          <p>Merchant</p>\r\n        </ion-label>\r\n        <ion-input readonly slot=\"end\" class=\"font-size-small ion-text-right ion-no-padding-end\" value=\"Starbucks New York\"></ion-input>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label>\r\n          <p>Transaction-ID</p>\r\n        </ion-label>\r\n        <ion-input readonly slot=\"end\" class=\"font-size-small ion-text-right ion-no-padding-end\" value=\"848-14E-11V\"></ion-input>\r\n      </ion-item>\r\n    </ion-list>\r\n\r\n    <hr class=\"hr-medium\">\r\n\r\n    <ion-list-header class=\"ion-list-header-small\">\r\n      <ion-label>Actions</ion-label>\r\n    </ion-list-header>\r\n\r\n    <ion-list class=\"list-custom\" lines=\"full\">\r\n      <ion-item detail=\"false\">\r\n        <ion-avatar slot=\"start\" class=\"ion-avatar-default-icon\">\r\n          <ion-icon color=\"primary\" name=\"receipt\"></ion-icon>\r\n        </ion-avatar>\r\n        <ion-label>\r\n          <h3>Receipt</h3>\r\n          <p class=\"font-size-smallest\">View digital invoice</p>\r\n        </ion-label>\r\n        <ion-button slot=\"end\">\r\n          View\r\n        </ion-button>\r\n      </ion-item>\r\n      <ion-item button>\r\n        <ion-avatar slot=\"start\" class=\"ion-avatar-default-icon\">\r\n          <ion-icon color=\"primary\" name=\"chatbox\"></ion-icon>\r\n        </ion-avatar>\r\n        <ion-label>\r\n          <h3>Contact merchant</h3>\r\n          <p class=\"font-size-smallest\">Get in touch with merchant</p>\r\n        </ion-label>\r\n      </ion-item>\r\n    </ion-list>\r\n\r\n  </div>\r\n\r\n</ion-content>");

/***/ }),

/***/ 22568:
/*!***************************************************************************************!*\
  !*** ./src/app/pages/secure/payments/payment-detail/payment-detail-routing.module.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentDetailPageRoutingModule": () => (/* binding */ PaymentDetailPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 39859);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _payment_detail_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./payment-detail.page */ 23346);




const routes = [
    {
        path: '',
        component: _payment_detail_page__WEBPACK_IMPORTED_MODULE_0__.PaymentDetailPage
    }
];
let PaymentDetailPageRoutingModule = class PaymentDetailPageRoutingModule {
};
PaymentDetailPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PaymentDetailPageRoutingModule);



/***/ }),

/***/ 4750:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/secure/payments/payment-detail/payment-detail.module.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentDetailPageModule": () => (/* binding */ PaymentDetailPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 39859);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 91346);
/* harmony import */ var _payment_detail_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./payment-detail-routing.module */ 22568);
/* harmony import */ var _payment_detail_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./payment-detail.page */ 23346);







let PaymentDetailPageModule = class PaymentDetailPageModule {
};
PaymentDetailPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _payment_detail_routing_module__WEBPACK_IMPORTED_MODULE_0__.PaymentDetailPageRoutingModule
        ],
        declarations: [_payment_detail_page__WEBPACK_IMPORTED_MODULE_1__.PaymentDetailPage]
    })
], PaymentDetailPageModule);



/***/ }),

/***/ 23346:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/secure/payments/payment-detail/payment-detail.page.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentDetailPage": () => (/* binding */ PaymentDetailPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 39859);
/* harmony import */ var _C_Users_user_Desktop_futbuddy_repo_futbuddy_app_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_payment_detail_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./payment-detail.page.html */ 93276);
/* harmony import */ var _payment_detail_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./payment-detail.page.scss */ 71080);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);




let PaymentDetailPage = class PaymentDetailPage {
    constructor() { }
    ngOnInit() {
    }
};
PaymentDetailPage.ctorParameters = () => [];
PaymentDetailPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-payment-detail',
        template: _C_Users_user_Desktop_futbuddy_repo_futbuddy_app_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_payment_detail_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_payment_detail_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], PaymentDetailPage);



/***/ }),

/***/ 71080:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/secure/payments/payment-detail/payment-detail.page.scss ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYXltZW50LWRldGFpbC5wYWdlLnNjc3MifQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_secure_payments_payment-detail_payment-detail_module_ts.js.map