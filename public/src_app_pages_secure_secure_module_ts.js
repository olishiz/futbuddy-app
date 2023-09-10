"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_secure_secure_module_ts"],{

/***/ 34016:
/*!*******************************************************!*\
  !*** ./src/app/pages/secure/secure-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SecureRoutingModule": () => (/* binding */ SecureRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 39859);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 13252);



const routes = [
    {
        path: '',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_tabs_tabs_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./../../tabs/tabs.module */ 33644)).then(m => m.TabsPageModule)
    },
    {
        path: 'profile',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_secure_profile_profile_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./profile/profile.module */ 32322)).then(m => m.ProfilePageModule)
    },
    {
        path: 'profile/edit',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_fire_fesm2015_angular-fire-compat-firestore_js"), __webpack_require__.e("src_app_pages_secure_profile_edit_edit_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./profile/edit/edit.module */ 48228)).then(m => m.EditPageModule)
    },
    {
        path: 'about-us',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_secure_about-us_about-us_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./about-us/about-us.module */ 87612)).then(m => m.AboutUsModule)
    },
    {
        path: 'games/:id',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_fire_fesm2015_angular-fire-compat-firestore_js"), __webpack_require__.e("default-src_app_pages_secure_payment_payment_page_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_secure_games_games_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./games/games.module */ 9094)).then(m => m.GamesPageModule)
    },
    {
        path: 'qr-code',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_secure_qr-code_qr-code_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./qr-code/qr-code.module */ 4225)).then(m => m.QrCodePageModule)
    },
    // not in used yet
    {
        path: 'payments/detail',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_secure_payments_payment-detail_payment-detail_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./payments/payment-detail/payment-detail.module */ 4750)).then(m => m.PaymentDetailPageModule)
    },
    {
        path: 'styleguide',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_secure_styleguide_styleguide_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./styleguide/styleguide.module */ 3534)).then(m => m.StyleguidePageModule)
    },
    {
        path: 'payment',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_fire_fesm2015_angular-fire-compat-firestore_js"), __webpack_require__.e("default-src_app_pages_secure_payment_payment_page_ts"), __webpack_require__.e("src_app_pages_secure_payment_payment_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./payment/payment.module */ 27902)).then(m => m.PaymentPageModule)
    },
    {
        path: 'my-games',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_secure_my-games_my-games_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./my-games/my-games.module */ 36995)).then(m => m.MyGamesPageModule)
    },
];
let SecureRoutingModule = class SecureRoutingModule {
};
SecureRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    })
], SecureRoutingModule);



/***/ }),

/***/ 49621:
/*!***********************************************!*\
  !*** ./src/app/pages/secure/secure.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SecureModule": () => (/* binding */ SecureModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 39859);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _secure_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./secure-routing.module */ 34016);




let SecureModule = class SecureModule {
};
SecureModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        declarations: [],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _secure_routing_module__WEBPACK_IMPORTED_MODULE_0__.SecureRoutingModule
        ]
    })
], SecureModule);



/***/ })

}]);
//# sourceMappingURL=src_app_pages_secure_secure_module_ts.js.map