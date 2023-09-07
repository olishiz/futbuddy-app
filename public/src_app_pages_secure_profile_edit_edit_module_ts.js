"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_secure_profile_edit_edit_module_ts"],{

/***/ 94389:
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/secure/profile/edit/edit.page.html ***!
  \********************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header collapse=\"fade\" [translucent]=\"true\">\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button text=\"Back\" defaultHref=\"/profile\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>\r\n            Profile\r\n        </ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n\r\n    <div class=\"hero hero-light-gradient\">\r\n        <ion-avatar>\r\n            <ion-icon class=\"avatar-icon-placeholder\" name=\"person-circle\" color=\"tertiary\">\r\n            </ion-icon>\r\n        </ion-avatar>\r\n        <ion-button class=\"ion-button-small\" color=\"primary\" fill=\"clear\" (click)=\"updateProfilePicture()\">\r\n            Update profile picture\r\n        </ion-button>\r\n    </div>\r\n\r\n    <div class=\"ion-padding\">\r\n\r\n        <form class=\"form-default\" [formGroup]=\"edit_profile_form\" (submit)=\"submit()\">\r\n\r\n            <ion-list class=\"item-card-list\" lines=\"none\">\r\n                <ion-item>\r\n                    <ion-label color=\"tertiary\" position=\"stacked\">Name</ion-label>\r\n                    <ion-input formControlName=\"username\" placeholder=\"Name\" [ngModel]=\"username\"></ion-input>\r\n                </ion-item>\r\n            </ion-list>\r\n\r\n            <p class=\"list-description\">Info: Upon clicking save, username will be changed.</p>\r\n\r\n            <br>\r\n\r\n            <div class=\"ion-text-center\">\r\n                <ion-button expand=\"block\" type=\"submit\" shape=\"round\">\r\n                    Save\r\n                </ion-button>\r\n            </div>\r\n\r\n        </form>\r\n\r\n    </div>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ 52891:
/*!******************************************************************!*\
  !*** ./src/app/pages/secure/profile/edit/edit-routing.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditPageRoutingModule": () => (/* binding */ EditPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 39859);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _edit_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit.page */ 12078);




const routes = [
    {
        path: '',
        component: _edit_page__WEBPACK_IMPORTED_MODULE_0__.EditPage
    }
];
let EditPageRoutingModule = class EditPageRoutingModule {
};
EditPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], EditPageRoutingModule);



/***/ }),

/***/ 48228:
/*!**********************************************************!*\
  !*** ./src/app/pages/secure/profile/edit/edit.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditPageModule": () => (/* binding */ EditPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 39859);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 91346);
/* harmony import */ var _edit_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit-routing.module */ 52891);
/* harmony import */ var _edit_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit.page */ 12078);







let EditPageModule = class EditPageModule {
};
EditPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _edit_routing_module__WEBPACK_IMPORTED_MODULE_0__.EditPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule
        ],
        declarations: [_edit_page__WEBPACK_IMPORTED_MODULE_1__.EditPage]
    })
], EditPageModule);



/***/ }),

/***/ 12078:
/*!********************************************************!*\
  !*** ./src/app/pages/secure/profile/edit/edit.page.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditPage": () => (/* binding */ EditPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 39859);
/* harmony import */ var _C_Users_user_Desktop_futbuddy_repo_futbuddy_app_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_edit_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./edit.page.html */ 94389);
/* harmony import */ var _edit_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit.page.scss */ 24230);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 91346);
/* harmony import */ var src_app_services_toast_toast_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/toast/toast.service */ 84746);
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/auth/auth.service */ 68927);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/auth */ 75656);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 13252);










let EditPage = class EditPage {
    constructor(formBuilder, toastService, navController, actionSheetController, authService, auth, router) {
        this.formBuilder = formBuilder;
        this.toastService = toastService;
        this.navController = navController;
        this.actionSheetController = actionSheetController;
        this.authService = authService;
        this.auth = auth;
        this.router = router;
        this.user$ = (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__.user)(this.auth);
        this.submit_attempt = false;
        this.userSubscription = this.user$.subscribe((aUser) => {
            this.username = aUser.displayName;
        });
    }
    ngOnInit() {
        // Setup form
        this.edit_profile_form = this.formBuilder.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
        });
    }
    // Update profile picture
    updateProfilePicture() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetController.create({
                header: 'Choose existing picture or take new',
                cssClass: 'custom-action-sheet',
                buttons: [
                    {
                        text: 'Choose from gallery',
                        icon: 'images',
                        handler: () => {
                            // Put in logic ...
                        }
                    },
                    {
                        text: 'Take picture',
                        icon: 'camera',
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
    // Submit form
    submit() {
        this.submit_attempt = true;
        // If form valid
        if (this.edit_profile_form.valid) {
            // Save form ...
            this.authService.updateProfileName(this.edit_profile_form.get('username').value);
            // Display success message and go back
            this.toastService.presentToast('Success', 'Username has been saved', 'top', 'success', 2000);
            // Move controller back to profile page
            this.router.navigateByUrl('/profile', { replaceUrl: true });
        }
        else {
            // Display error message
            this.toastService.presentToast('Error', 'Please fill in all required fields', 'top', 'danger', 2000);
        }
    }
    ngOnDestroy() {
        this.userSubscription.unsubscribe();
    }
};
EditPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder },
    { type: src_app_services_toast_toast_service__WEBPACK_IMPORTED_MODULE_2__.ToastService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.NavController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ActionSheetController },
    { type: _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__.Auth },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router }
];
EditPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-edit',
        template: _C_Users_user_Desktop_futbuddy_repo_futbuddy_app_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_edit_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_edit_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], EditPage);



/***/ }),

/***/ 24230:
/*!**********************************************************!*\
  !*** ./src/app/pages/secure/profile/edit/edit.page.scss ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0LnBhZ2Uuc2NzcyJ9 */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_secure_profile_edit_edit_module_ts.js.map