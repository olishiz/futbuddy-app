"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_secure_styleguide_styleguide_module_ts"],{

/***/ 94602:
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/secure/styleguide/styleguide.page.html ***!
  \************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header collapse=\"fade\" [translucent]=\"true\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button text=\"Back\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Styleguide</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n  <ion-header collapse=\"condense\">\r\n    <ion-toolbar>\r\n      <ion-title size=\"large\">Styleguide</ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n\r\n  <div class=\"ion-padding\">\r\n\r\n    <p><strong>Text</strong></p>\r\n    <hr>\r\n\r\n    <h1>First Headline Lorem ipsum dolor sit.</h1>\r\n    <h2>Second Headline Lorem ipsum dolor sit amet, consetetur sadipscing.</h2>\r\n    <h3>Third Headline Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</h3>\r\n    <p>Default text Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut.\r\n    </p>\r\n    <ion-text color=\"medium\">\r\n      <p>Light text Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut.\r\n      </p>\r\n    </ion-text>\r\n    <small>Small text Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut\r\n      labore et dolore magna aliquyam erat, sed diam voluptua.</small>\r\n    <br>\r\n    <ion-text color=\"medium\">\r\n      <small>Small light text Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor\r\n        invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</small>\r\n    </ion-text>\r\n\r\n    <br>\r\n    <hr>\r\n    <br>\r\n    <br>\r\n\r\n    <p><strong>Buttons</strong></p>\r\n    <br>\r\n\r\n    <ion-button expand=\"block\">\r\n      Primary button\r\n    </ion-button>\r\n    <ion-text color=\"medium\">\r\n      <small class=\"ion-margin-top-small\">Used for creating or updating data or navigation.</small>\r\n    </ion-text>\r\n\r\n    <br>\r\n\r\n    <ion-button expand=\"block\" color=\"secondary\">\r\n      Secondary button\r\n    </ion-button>\r\n    <ion-text color=\"medium\">\r\n      <small class=\"ion-margin-top-small\">Used for doing some real action.</small>\r\n    </ion-text>\r\n\r\n    <br>\r\n\r\n    <ion-button expand=\"block\" color=\"medium\" fill=\"clear\">\r\n      Cancel action\r\n    </ion-button>\r\n    <ion-text color=\"medium\">\r\n      <small class=\"ion-margin-top-small\">Cancel things.</small>\r\n    </ion-text>\r\n\r\n    <br>\r\n\r\n    <ion-button expand=\"block\">\r\n      <ion-icon slot=\"start\" name=\"duplicate-outline\"></ion-icon>\r\n      Button with icon start\r\n    </ion-button>\r\n\r\n    <br>\r\n\r\n    <ion-button expand=\"block\">\r\n      <ion-icon slot=\"end\" name=\"arrow-forward-outline\"></ion-icon>\r\n      Button with icon end\r\n    </ion-button>\r\n\r\n    <br>\r\n\r\n    <ion-button class=\"ion-button-small\">\r\n      Button small\r\n    </ion-button>\r\n\r\n    <br>\r\n    <hr>\r\n    <br>\r\n    <br>\r\n\r\n    <p><strong>Cards</strong></p>\r\n    <hr>\r\n    <br>\r\n\r\n    <ion-card class=\"card-default ion-no-margin ion-no-padding\">\r\n      <ion-card-header>\r\n        <ion-card-title>\r\n          <h2>Default card</h2>\r\n        </ion-card-title>\r\n      </ion-card-header>\r\n      <ion-card-content>\r\n        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo impedit aspernatur deleniti ratione vel sed\r\n          tempora, facere dolores, veritatis vitae velit quis labore at aliquid repellat quo nisi. Inventore, quae?</p>\r\n          <ion-text color=\"medium\">\r\n            <h1>Awesome text</h1>\r\n          </ion-text>\r\n      </ion-card-content>\r\n    </ion-card>\r\n\r\n    <br><br>\r\n\r\n    <ion-card class=\"card-default ion-no-margin ion-no-padding\" color=\"primary\">\r\n      <ion-card-header>\r\n        <ion-card-title>\r\n          <h2>Light card</h2>\r\n        </ion-card-title>\r\n      </ion-card-header>\r\n      <ion-card-content>\r\n        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo impedit aspernatur deleniti ratione vel sed\r\n          tempora, facere dolores, veritatis vitae velit quis labore at aliquid repellat quo nisi. Inventore, quae?</p>\r\n      </ion-card-content>\r\n    </ion-card>\r\n\r\n    <br>\r\n    <hr>\r\n    <br>\r\n\r\n    <p><strong>Lists</strong></p>\r\n\r\n    <ion-list class=\"list-custom\">\r\n      <ion-list-header class=\"list-header-compact\">\r\n        Simple list\r\n      </ion-list-header>\r\n\r\n      <ion-item detail lines=\"full\" *ngFor=\"let l of [].constructor(3);\">\r\n        <ion-label>\r\n          <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint nulla dolorum repellendus necessitatibus, laborum quidem enim ab excepturi quibusdam facilis culpa ex beatae, totam repudiandae mollitia natus ipsa aut vitae?</h3>\r\n          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis expedita distinctio quod libero quidem placeat at corrupti sapiente quis veniam voluptate deleniti nam, amet saepe, dolores quam non quibusdam. Ipsa!</p>\r\n        </ion-label>\r\n      </ion-item>\r\n    </ion-list>\r\n\r\n  </div>\r\n\r\n</ion-content>");

/***/ }),

/***/ 64020:
/*!**********************************************************************!*\
  !*** ./src/app/pages/secure/styleguide/styleguide-routing.module.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StyleguidePageRoutingModule": () => (/* binding */ StyleguidePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 39859);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _styleguide_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styleguide.page */ 40745);




const routes = [
    {
        path: '',
        component: _styleguide_page__WEBPACK_IMPORTED_MODULE_0__.StyleguidePage
    }
];
let StyleguidePageRoutingModule = class StyleguidePageRoutingModule {
};
StyleguidePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], StyleguidePageRoutingModule);



/***/ }),

/***/ 3534:
/*!**************************************************************!*\
  !*** ./src/app/pages/secure/styleguide/styleguide.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StyleguidePageModule": () => (/* binding */ StyleguidePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 39859);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 91346);
/* harmony import */ var _styleguide_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styleguide-routing.module */ 64020);
/* harmony import */ var _styleguide_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styleguide.page */ 40745);







let StyleguidePageModule = class StyleguidePageModule {
};
StyleguidePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _styleguide_routing_module__WEBPACK_IMPORTED_MODULE_0__.StyleguidePageRoutingModule
        ],
        declarations: [_styleguide_page__WEBPACK_IMPORTED_MODULE_1__.StyleguidePage]
    })
], StyleguidePageModule);



/***/ }),

/***/ 40745:
/*!************************************************************!*\
  !*** ./src/app/pages/secure/styleguide/styleguide.page.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StyleguidePage": () => (/* binding */ StyleguidePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 39859);
/* harmony import */ var _C_Users_user_Desktop_futbuddy_repo_futbuddy_app_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_styleguide_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./styleguide.page.html */ 94602);
/* harmony import */ var _styleguide_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styleguide.page.scss */ 563);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);




let StyleguidePage = class StyleguidePage {
    constructor() { }
    ngOnInit() {
    }
};
StyleguidePage.ctorParameters = () => [];
StyleguidePage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-styleguide',
        template: _C_Users_user_Desktop_futbuddy_repo_futbuddy_app_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_styleguide_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_styleguide_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], StyleguidePage);



/***/ }),

/***/ 563:
/*!**************************************************************!*\
  !*** ./src/app/pages/secure/styleguide/styleguide.page.scss ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdHlsZWd1aWRlLnBhZ2Uuc2NzcyJ9 */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_secure_styleguide_styleguide_module_ts.js.map