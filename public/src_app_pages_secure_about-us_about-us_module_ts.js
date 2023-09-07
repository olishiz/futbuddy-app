"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_secure_about-us_about-us_module_ts"],{

/***/ 75196:
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/secure/about-us/about-us.page.html ***!
  \********************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header collapse=\"fade\" [translucent]=\"true\">\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button text=\"Back\" defaultHref=\"/profile\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>\r\n            About Us\r\n        </ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n\r\n    <div class=\"ion-padding\">\r\n\r\n        <ion-accordion-group>\r\n            <ion-accordion value=\"first\">\r\n                <ion-item slot=\"header\" color=\"dark\">\r\n                    <ion-label>What is FutBuddy?</ion-label>\r\n                </ion-item>\r\n                <div class=\"ion-padding\" slot=\"content\">\r\n                    FutBuddy is a better way to organise and play football with friends. We bring you payment solutions,\r\n                    scheduling tools, reminders and more.\r\n                    Organise and attend your favourite trainings, connect with friends and meet new people - all with\r\n                    our 1-click solution.\r\n                </div>\r\n            </ion-accordion>\r\n            <ion-accordion value=\"second\">\r\n                <ion-item slot=\"header\" color=\"dark\">\r\n                    <ion-label>How do I book a game?</ion-label>\r\n                </ion-item>\r\n                <div class=\"ion-padding custom-spacing\" slot=\"content\">\r\n\r\n                    <p style=\"margin-bottom: 15px; font-weight: bold\" class=\"ion-text-center\">To book a game: </p>\r\n\r\n                    <p style=\"margin: 5px 5px\">1. Navigate to your chosen game. </p>\r\n                    <p style=\"margin: 5px 5px\">2. Tap “Book Slot”. </p>\r\n                    <p style=\"margin: 5px 5px\">\r\n                        3. Choose your method of payment: Stripe. Note that all payments will be processed in MYR.\r\n                    </p>\r\n                    <p style=\"margin: 5px 5px\">\r\n                        4. Follow the instructions from our payment provider to complete the purchase.\r\n                    </p>\r\n                    <p style=\"margin: 5px 5px\">\r\n                        5. Upon successful payment, your first name will appear on the players list and you will receive\r\n                        a confirmation email with your booking details as well as a receipt of your purchase. Please\r\n                        allow a couple of minutes for the emails to arrive.\r\n                    </p>\r\n                    <p style=\"margin: 5px 5px\">6. Show up and have fun! </p>\r\n\r\n                </div>\r\n            </ion-accordion>\r\n            <ion-accordion value=\"third\">\r\n                <ion-item slot=\"header\" color=\"dark\">\r\n                    <ion-label>Cancellation Policy</ion-label>\r\n                </ion-item>\r\n                <div class=\"ion-padding\" slot=\"content\">\r\n                    Please make sure to cancel your spot at least 24 hours before the game starts. If you cancel within\r\n                    the 24 hour period, you are not entitled to a refund. To cancel, please send a WhatsApp message to\r\n                    Oliver <a href=\"https://wa.me/60168694900\">(+60168694900)</a> stating that you would like to cancel your booking slot.\r\n                </div>\r\n            </ion-accordion>\r\n        </ion-accordion-group>\r\n\r\n        <!--        <ion-list class=\"list-custom\" lines=\"full\">-->\r\n        <!--            <ion-item button detail=false>-->\r\n        <!--                <ion-icon slot=\"start\" color=\"danger\" name=\"close\"></ion-icon>-->\r\n        <!--                <ion-label color=\"danger\">-->\r\n        <!--                    <h3>Delete account</h3>-->\r\n        <!--                </ion-label>-->\r\n        <!--            </ion-item>-->\r\n        <!--        </ion-list>-->\r\n\r\n    </div>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ 17823:
/*!******************************************************************!*\
  !*** ./src/app/pages/secure/about-us/about-us-routing.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutUsPageRoutingModule": () => (/* binding */ AboutUsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 39859);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _about_us_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about-us.page */ 94110);




const routes = [
    {
        path: '',
        component: _about_us_page__WEBPACK_IMPORTED_MODULE_0__.AboutUsPage
    }
];
let AboutUsPageRoutingModule = class AboutUsPageRoutingModule {
};
AboutUsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AboutUsPageRoutingModule);



/***/ }),

/***/ 87612:
/*!**********************************************************!*\
  !*** ./src/app/pages/secure/about-us/about-us.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutUsModule": () => (/* binding */ AboutUsModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 39859);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 91346);
/* harmony import */ var _about_us_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about-us.page */ 94110);
/* harmony import */ var _about_us_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about-us-routing.module */ 17823);







let AboutUsModule = class AboutUsModule {
};
AboutUsModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _about_us_routing_module__WEBPACK_IMPORTED_MODULE_1__.AboutUsPageRoutingModule,
        ],
        declarations: [_about_us_page__WEBPACK_IMPORTED_MODULE_0__.AboutUsPage]
    })
], AboutUsModule);



/***/ }),

/***/ 94110:
/*!********************************************************!*\
  !*** ./src/app/pages/secure/about-us/about-us.page.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutUsPage": () => (/* binding */ AboutUsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 39859);
/* harmony import */ var _C_Users_user_Desktop_futbuddy_repo_futbuddy_app_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_about_us_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./about-us.page.html */ 75196);
/* harmony import */ var _about_us_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about-us.page.scss */ 253);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);




let AboutUsPage = class AboutUsPage {
    constructor() {
    }
    ngOnInit() {
    }
};
AboutUsPage.ctorParameters = () => [];
AboutUsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-account',
        template: _C_Users_user_Desktop_futbuddy_repo_futbuddy_app_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_about_us_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_about_us_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], AboutUsPage);



/***/ }),

/***/ 253:
/*!**********************************************************!*\
  !*** ./src/app/pages/secure/about-us/about-us.page.scss ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = ".custom-spacing {\n  margin: 10px;\n  /* Adjust the margin value as per your preference */\n  padding: 10px;\n  /* Adjust the padding value as per your preference */\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0LXVzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFBYyxtREFBQTtFQUNkLGFBQUE7RUFBZSxvREFBQTtBQUdqQiIsImZpbGUiOiJhYm91dC11cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3VzdG9tLXNwYWNpbmcge1xyXG4gIG1hcmdpbjogMTBweDsgLyogQWRqdXN0IHRoZSBtYXJnaW4gdmFsdWUgYXMgcGVyIHlvdXIgcHJlZmVyZW5jZSAqL1xyXG4gIHBhZGRpbmc6IDEwcHg7IC8qIEFkanVzdCB0aGUgcGFkZGluZyB2YWx1ZSBhcyBwZXIgeW91ciBwcmVmZXJlbmNlICovXHJcbn1cclxuIl19 */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_secure_about-us_about-us_module_ts.js.map