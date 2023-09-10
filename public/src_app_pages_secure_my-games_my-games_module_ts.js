"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_secure_my-games_my-games_module_ts"],{

/***/ 66391:
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/secure/my-games/my-games.page.html ***!
  \********************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Upload Page</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"ion-padding\">\r\n    <h2>Upload Image to Firebase Storage</h2>\r\n    <p>Select an image and then click the \"Upload\" button to upload it to Firebase Storage.</p>\r\n\r\n    <input type=\"file\" (change)=\"onImageChange($event)\" #fileInput>\r\n\r\n    <!-- Preview selected image -->\r\n    <img *ngIf=\"imagePreview\" [src]=\"imagePreview\" alt=\"Selected Image\" width=\"100%\">\r\n\r\n\r\n    <!-- Progress Bar -->\r\n    <ion-progress-bar *ngIf=\"uploadPercent | async as percent\" value=\"{{ percent / 100 }}\"></ion-progress-bar>\r\n\r\n    <!-- Upload Button -->\r\n    <ion-button expand=\"full\" (click)=\"uploadFile(fileInput)\">Upload to Firebase</ion-button>\r\n  </div>\r\n</ion-content>\r\n");

/***/ }),

/***/ 23457:
/*!******************************************************************!*\
  !*** ./src/app/pages/secure/my-games/my-games-routing.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyGamesPageRoutingModule": () => (/* binding */ MyGamesPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 39859);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _my_games_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./my-games.page */ 27275);




const routes = [
    {
        path: '',
        component: _my_games_page__WEBPACK_IMPORTED_MODULE_0__.MyGamesPage
    }
];
let MyGamesPageRoutingModule = class MyGamesPageRoutingModule {
};
MyGamesPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MyGamesPageRoutingModule);



/***/ }),

/***/ 36995:
/*!**********************************************************!*\
  !*** ./src/app/pages/secure/my-games/my-games.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyGamesPageModule": () => (/* binding */ MyGamesPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 39859);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 91346);
/* harmony import */ var _my_games_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./my-games-routing.module */ 23457);
/* harmony import */ var _my_games_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./my-games.page */ 27275);







let MyGamesPageModule = class MyGamesPageModule {
};
MyGamesPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _my_games_routing_module__WEBPACK_IMPORTED_MODULE_0__.MyGamesPageRoutingModule
        ],
        declarations: [_my_games_page__WEBPACK_IMPORTED_MODULE_1__.MyGamesPage]
    })
], MyGamesPageModule);



/***/ }),

/***/ 27275:
/*!********************************************************!*\
  !*** ./src/app/pages/secure/my-games/my-games.page.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyGamesPage": () => (/* binding */ MyGamesPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 39859);
/* harmony import */ var _C_Users_user_Desktop_futbuddy_repo_futbuddy_app_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_my_games_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./my-games.page.html */ 66391);
/* harmony import */ var _my_games_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./my-games.page.scss */ 4891);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/storage */ 9243);





let MyGamesPage = class MyGamesPage {
    constructor(storage) {
        this.storage = storage;
    }
    ngOnInit() {
    }
    onImageChange(event) {
        const reader = new FileReader();
        if (event.target.files && event.target.files[0]) {
            const file = event.target.files[0];
            this.selectedImage = file; // Store the actual file object for uploading
            console.log("Image loaded:", this.selectedImage.name); // Log the name of the loaded image
            reader.readAsDataURL(file);
            reader.onload = () => {
                this.imagePreview = reader.result; // Set the base64 encoded preview
            };
        }
    }
    uploadFile(fileInput) {
        if (!fileInput.files || fileInput.files.length === 0)
            return;
        const file = fileInput.files[0];
        console.log("Image loaded:", file.name);
        const filePath = `images/${file.name}`;
        const storageRef = (0,_angular_fire_storage__WEBPACK_IMPORTED_MODULE_2__.ref)(this.storage, filePath);
        //const task = uploadBytesResumable(storageRef, file);
        // 'file' comes from the Blob or File API
        (0,_angular_fire_storage__WEBPACK_IMPORTED_MODULE_2__.uploadBytes)(storageRef, file).then((snapshot) => {
            console.log('Uploaded a blob or file!');
        });
    }
};
MyGamesPage.ctorParameters = () => [
    { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_2__.Storage }
];
MyGamesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-my-games',
        template: _C_Users_user_Desktop_futbuddy_repo_futbuddy_app_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_my_games_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_my_games_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], MyGamesPage);



/***/ }),

/***/ 4891:
/*!**********************************************************!*\
  !*** ./src/app/pages/secure/my-games/my-games.page.scss ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJteS1nYW1lcy5wYWdlLnNjc3MifQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_secure_my-games_my-games_module_ts.js.map