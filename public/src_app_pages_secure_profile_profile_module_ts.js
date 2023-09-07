"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_secure_profile_profile_module_ts"],{

/***/ 51228:
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/secure/profile/profile-page.component.html ***!
  \****************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header collapse=\"fade\" [translucent]=\"true\">\r\n    <ion-toolbar>\r\n        <ion-title>\r\n            Profile\r\n        </ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n\r\n    <div class=\"hero hero-light-gradient\" style=\"padding: 10px\">\r\n        <ion-avatar>\r\n            <ion-icon class=\"avatar-icon-placeholder\" name=\"person-circle\" color=\"tertiary\">\r\n            </ion-icon>\r\n        </ion-avatar>\r\n        <p class=\"font-weight-500\">{{ (user$ | async)?.displayName }}</p>\r\n        <ion-text color=\"medium\">\r\n            <small>{{ (user$ | async)?.email }}</small>\r\n        </ion-text>\r\n        <ion-text color=\"medium\">\r\n            <small>Created At: {{ formattedCreationTime }}</small>\r\n        </ion-text>\r\n        <ion-text color=\"medium\">\r\n            <small>Last Login: {{ formattedLastSignInTime }}</small>\r\n        </ion-text>\r\n    </div>\r\n\r\n    <div class=\"ion-padding\">\r\n\r\n        <ion-list class=\"list-custom\" lines=\"full\">\r\n            <ion-item button routerLink=\"edit\">\r\n                <ion-icon slot=\"start\" color=\"medium\" name=\"person\"></ion-icon>\r\n                <ion-label>\r\n                    <h3>Profile</h3>\r\n                </ion-label>\r\n            </ion-item>\r\n            <ion-item button routerLink=\"../about-us\">\r\n                <ion-icon slot=\"start\" color=\"medium\" name=\"help-outline\"></ion-icon>\r\n                <ion-label>\r\n                    <h3>About Us</h3>\r\n                </ion-label>\r\n            </ion-item>\r\n        </ion-list>\r\n\r\n        <hr class=\"hr-medium\">\r\n\r\n        <!--    <ion-list-header class=\"ion-list-header-small\">-->\r\n        <!--      <ion-label>Synchronisation</ion-label>-->\r\n        <!--    </ion-list-header>-->\r\n\r\n        <!--    <ion-list class=\"list-custom\" lines=\"full\">-->\r\n        <!--      <ion-item detail=\"false\">-->\r\n        <!--        <ion-icon slot=\"start\" color=\"medium\" name=\"scan\"></ion-icon>-->\r\n        <!--        <ion-label>-->\r\n        <!--          <h3>Smart sync</h3>-->\r\n        <!--        </ion-label>-->\r\n        <!--        <ion-toggle checked slot=\"end\"></ion-toggle>-->\r\n        <!--      </ion-item>-->\r\n        <!--      <ion-item button routerLink=\"devices\">-->\r\n        <!--        <ion-icon slot=\"start\" color=\"medium\" name=\"phone-portrait\"></ion-icon>-->\r\n        <!--        <ion-label>-->\r\n        <!--          <h3>Registered devices</h3>-->\r\n        <!--        </ion-label>-->\r\n        <!--        <ion-note slot=\"end\" color=\"medium\">3</ion-note>-->\r\n        <!--      </ion-item>-->\r\n        <!--    </ion-list>-->\r\n        <!--    <p class=\"list-description\">Smart Sync synchronises banking data safely between all your registered devices.</p>-->\r\n\r\n        <!--    <hr class=\"hr-medium\">-->\r\n\r\n        <!--    <ion-list-header class=\"ion-list-header-small\">-->\r\n        <!--      <ion-label>Security</ion-label>-->\r\n        <!--    </ion-list-header>-->\r\n\r\n        <!--    <ion-list class=\"list-custom\" lines=\"full\">-->\r\n        <!--      <ion-item button>-->\r\n        <!--        <ion-icon slot=\"start\" color=\"medium\" name=\"lock-closed\"></ion-icon>-->\r\n        <!--        <ion-label>-->\r\n        <!--          <h3>Master password</h3>-->\r\n        <!--        </ion-label>-->\r\n        <!--      </ion-item>-->\r\n        <!--      <ion-item detail=\"false\">-->\r\n        <!--        <ion-icon slot=\"start\" color=\"medium\" name=\"scan\"></ion-icon>-->\r\n        <!--        <ion-label>-->\r\n        <!--          <h3>Face ID</h3>-->\r\n        <!--        </ion-label>-->\r\n        <!--        <ion-toggle slot=\"end\"></ion-toggle>-->\r\n        <!--      </ion-item>-->\r\n        <!--      <ion-item button routerLink=\"backups\">-->\r\n        <!--        <ion-icon slot=\"start\" color=\"medium\" name=\"cloud-circle\"></ion-icon>-->\r\n        <!--        <ion-label>-->\r\n        <!--          <h3>Backups</h3>-->\r\n        <!--        </ion-label>-->\r\n        <!--      </ion-item>-->\r\n        <!--    </ion-list>-->\r\n\r\n        <!--    <hr class=\"hr-medium\">-->\r\n\r\n        <ion-list class=\"list-custom\" lines=\"full\" (click)=\"signOut()\">\r\n            <ion-item button detail=false>\r\n                <ion-icon slot=\"start\" color=\"danger\" name=\"log-out\"></ion-icon>\r\n                <ion-label color=\"danger\">\r\n                    <h3>Sign out</h3>\r\n                </ion-label>\r\n            </ion-item>\r\n        </ion-list>\r\n\r\n    </div>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ 27171:
/*!****************************************************************!*\
  !*** ./src/app/pages/secure/profile/profile-page.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePage": () => (/* binding */ ProfilePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 39859);
/* harmony import */ var _C_Users_user_Desktop_futbuddy_repo_futbuddy_app_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_profile_page_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./profile-page.component.html */ 51228);
/* harmony import */ var _profile_page_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile-page.component.scss */ 6988);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth/auth.service */ 68927);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ 75656);






let ProfilePage = class ProfilePage {
    constructor(authService, auth) {
        this.authService = authService;
        this.auth = auth;
        this.user$ = (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__.user)(this.auth);
        this.userSubscription = this.user$.subscribe((aUser) => {
            console.log('the aUser', aUser);
            // Parse the createdAtTime timestamp and format it when the component is created
            const creationTime = aUser.metadata.creationTime;
            const lastSignInTime = aUser.metadata.lastSignInTime;
            this.formattedCreationTime = this.formatTimestamp(creationTime);
            this.formattedLastSignInTime = this.formatTimestamp(lastSignInTime);
        });
    }
    ngOnInit() {
    }
    // Sign out
    signOut() {
        this.authService.signOut();
    }
    formatTimestamp(timestamp) {
        const date = new Date(timestamp);
        return date.toLocaleString(); // You can customize the format as needed
    }
    ngOnDestroy() {
        this.userSubscription.unsubscribe();
    }
};
ProfilePage.ctorParameters = () => [
    { type: src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__.Auth }
];
ProfilePage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-profile',
        template: _C_Users_user_Desktop_futbuddy_repo_futbuddy_app_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_profile_page_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_profile_page_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], ProfilePage);



/***/ }),

/***/ 45362:
/*!****************************************************************!*\
  !*** ./src/app/pages/secure/profile/profile-routing.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePageRoutingModule": () => (/* binding */ ProfilePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 39859);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _profile_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile-page.component */ 27171);




const routes = [
    {
        path: '',
        component: _profile_page_component__WEBPACK_IMPORTED_MODULE_0__.ProfilePage
    },
];
let ProfilePageRoutingModule = class ProfilePageRoutingModule {
};
ProfilePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ProfilePageRoutingModule);



/***/ }),

/***/ 32322:
/*!********************************************************!*\
  !*** ./src/app/pages/secure/profile/profile.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePageModule": () => (/* binding */ ProfilePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 39859);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 91346);
/* harmony import */ var _profile_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile-page.component */ 27171);
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile-routing.module */ 45362);







let ProfilePageModule = class ProfilePageModule {
};
ProfilePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _profile_routing_module__WEBPACK_IMPORTED_MODULE_1__.ProfilePageRoutingModule
        ],
        declarations: [_profile_page_component__WEBPACK_IMPORTED_MODULE_0__.ProfilePage]
    })
], ProfilePageModule);



/***/ }),

/***/ 6988:
/*!******************************************************************!*\
  !*** ./src/app/pages/secure/profile/profile-page.component.scss ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9maWxlLXBhZ2UuY29tcG9uZW50LnNjc3MifQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_secure_profile_profile_module_ts.js.map