"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_tabs_tabs_module_ts"],{

/***/ 58948:
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/tabs/tabs.page.html ***!
  \***********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-tabs>\r\n\r\n    <ion-tab-bar slot=\"bottom\">\r\n\r\n        <ion-tab-button tab=\"home\">\r\n            <ion-icon name=\"home\"></ion-icon>\r\n            <ion-label>Home</ion-label>\r\n        </ion-tab-button>\r\n\r\n        <ion-tab-button tab=\"my-games\">\r\n            <ion-icon name=\"football\"></ion-icon>\r\n            <ion-label>My Games</ion-label>\r\n        </ion-tab-button>\r\n\r\n        <ion-tab-button tab=\"profile\">\r\n            <ion-icon name=\"person-outline\"></ion-icon>\r\n            <ion-label>Profile</ion-label>\r\n        </ion-tab-button>\r\n\r\n        <!-- Placeholder for fab button -->\r\n        <!--    <ion-tab-button class=\"ion-tab-button-placeholder\">-->\r\n        <!--    </ion-tab-button>-->\r\n\r\n\r\n\r\n            <ion-tab-button tab=\"cards\">\r\n              <ion-icon name=\"card\"></ion-icon>\r\n              <ion-label>Cards</ion-label>\r\n            </ion-tab-button>\r\n\r\n    </ion-tab-bar>\r\n\r\n    <!--  <ion-fab class=\"ion-fab-custom\" vertical=\"bottom\" horizontal=\"center\" slot=\"fixed\" (click)=\"selectAction()\">-->\r\n    <!--    <ion-fab-button>-->\r\n    <!--      <ion-icon name=\"add\"></ion-icon>-->\r\n    <!--    </ion-fab-button>-->\r\n    <!--  </ion-fab>-->\r\n\r\n</ion-tabs>\r\n");

/***/ }),

/***/ 53756:
/*!*********************************************!*\
  !*** ./src/app/tabs/tabs-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsPageRoutingModule": () => (/* binding */ TabsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 39859);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs.page */ 97737);




const routes = [
    {
        path: '',
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_0__.TabsPage,
        children: [
            {
                path: 'home',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_fire_fesm2015_angular-fire-compat-firestore_js"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_secure_home_home_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../pages/secure/home/home.module */ 71634)).then(m => m.HomePageModule)
            },
            {
                path: '',
                redirectTo: 'home',
                pathMatch: 'full'
            },
            {
                path: 'insights',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_secure_insights_insights_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../pages/secure/insights/insights.module */ 49080)).then(m => m.InsightsPageModule)
            },
            {
                path: 'my-games',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_secure_my-games_my-games_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../pages/secure/my-games/my-games.module */ 36995)).then(m => m.MyGamesPageModule)
            },
            {
                path: 'payments',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_secure_payments_payments_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../pages/secure/payments/payments.module */ 45819)).then(m => m.PaymentsPageModule)
            },
            {
                path: 'cards',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_swiper_angular_fesm2015_swiper_angular_js"), __webpack_require__.e("src_app_pages_secure_cards_cards_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../pages/secure/cards/cards.module */ 99314)).then(m => m.CardsPageModule)
            },
            {
                path: 'profile',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_secure_profile_profile_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../pages/secure/profile/profile.module */ 32322)).then(m => m.ProfilePageModule)
            },
        ]
    }
];
let TabsPageRoutingModule = class TabsPageRoutingModule {
};
TabsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], TabsPageRoutingModule);



/***/ }),

/***/ 33644:
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsPageModule": () => (/* binding */ TabsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 39859);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 91346);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _tabs_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs-routing.module */ 53756);
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs.page */ 97737);







let TabsPageModule = class TabsPageModule {
};
TabsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _tabs_routing_module__WEBPACK_IMPORTED_MODULE_0__.TabsPageRoutingModule
        ],
        declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_1__.TabsPage]
    })
], TabsPageModule);



/***/ }),

/***/ 97737:
/*!***********************************!*\
  !*** ./src/app/tabs/tabs.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsPage": () => (/* binding */ TabsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 39859);
/* harmony import */ var _C_Users_user_Desktop_futbuddy_repo_futbuddy_app_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_tabs_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./tabs.page.html */ 58948);
/* harmony import */ var _tabs_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs.page.scss */ 25066);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 91346);





let TabsPage = class TabsPage {
    constructor(actionSheetController) {
        this.actionSheetController = actionSheetController;
    }
    // Select action
    selectAction() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetController.create({
                header: 'Choose an action',
                cssClass: 'custom-action-sheet',
                buttons: [
                    {
                        text: 'Add account',
                        icon: 'wallet',
                        handler: () => {
                            // Put in logic ...
                        }
                    },
                    {
                        text: 'Add transaction',
                        icon: 'swap-horizontal-outline',
                        handler: () => {
                            // Put in logic ...
                        }
                    },
                    {
                        text: 'Set budget',
                        icon: 'calculator',
                        handler: () => {
                            // Put in logic ...
                        }
                    }, {
                        text: 'Cancel',
                        icon: 'close',
                        role: 'cancel'
                    }
                ]
            });
            yield actionSheet.present();
        });
    }
};
TabsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ActionSheetController }
];
TabsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-tabs',
        template: _C_Users_user_Desktop_futbuddy_repo_futbuddy_app_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_tabs_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_tabs_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], TabsPage);



/***/ }),

/***/ 25066:
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.page.scss ***!
  \*************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWJzLnBhZ2Uuc2NzcyJ9 */";

/***/ })

}]);
//# sourceMappingURL=src_app_tabs_tabs_module_ts.js.map