"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_secure_home_home_module_ts"],{

/***/ 28368:
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/secure/home/home.page.html ***!
  \************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header collapse=\"fade\" [translucent]=\"true\">\r\n    <ion-toolbar>\r\n        <ion-title>\r\n            Home\r\n        </ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n    <ion-header collapse=\"condense\">\r\n        <ion-toolbar>\r\n            <ion-title size=\"large\">Hello, {{ (user$ | async)?.displayName }}</ion-title>\r\n        </ion-toolbar>\r\n    </ion-header>\r\n\r\n    <div class=\"ion-padding\">\r\n\r\n        <ion-list-header>\r\n            <ion-label color=\"white\">Upcoming Games</ion-label>\r\n        </ion-list-header>\r\n\r\n        <ion-list-header>\r\n            <ion-label color=\"white\"><p style=\"color: white; font-weight: 500;\">Here's some suggested games for you:</p></ion-label>\r\n        </ion-list-header>\r\n\r\n        <!-- Skeletons -->\r\n        <!--        <ion-list class=\"item-card-list animate__animated animate__fadeIn\" *ngIf=\"!content_loaded\">-->\r\n        <!--            <ion-item lines=\"none\" *ngFor=\"let i of [].constructor(1);\">-->\r\n        <!--                <ion-avatar slot=\"start\">-->\r\n        <!--                    <ion-skeleton-text animated></ion-skeleton-text>-->\r\n        <!--                </ion-avatar>-->\r\n        <!--                <ion-label>-->\r\n        <!--                    <h3>-->\r\n        <!--                        <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>-->\r\n        <!--                    </h3>-->\r\n        <!--                    <p>-->\r\n        <!--                        <ion-skeleton-text animated style=\"width: 30%\"></ion-skeleton-text>-->\r\n        <!--                    </p>-->\r\n        <!--                </ion-label>-->\r\n        <!--            </ion-item>-->\r\n        <!--        </ion-list>-->\r\n\r\n        <!--   Real items here   -->\r\n        <!--        <ion-list class=\"item-card-list animate__animated animate__fadeIn\" *ngIf=\"content_loaded\" lines=\"none\">-->\r\n        <!--            <ion-item button detail>-->\r\n        <!--                <ion-avatar slot=\"start\" class=\"ion-avatar-default-icon\">-->\r\n        <!--                    <ion-icon name=\"wallet\"></ion-icon>-->\r\n        <!--                </ion-avatar>-->\r\n        <!--                <ion-label>-->\r\n        <!--                    <h3>$71,648.13</h3>-->\r\n        <!--                    <p>Bank of America</p>-->\r\n        <!--                </ion-label>-->\r\n        <!--            </ion-item>-->\r\n        <!--        </ion-list>-->\r\n\r\n        <!--        <hr>-->\r\n\r\n        <ion-card *ngFor=\"let game of activeGames\">\r\n            <img alt=\"Silhouette of mountains\" src=\"{{ game.arenaPhotoUrl }}\"/>\r\n            <ion-card-header style=\"padding-bottom: 0\">\r\n                <ion-card-title>{{ game.name }}</ion-card-title>\r\n                <ion-card-subtitle>\r\n                    {{ game.date }}\r\n                    <br>\r\n                    {{ game.time }}\r\n                </ion-card-subtitle>\r\n            </ion-card-header>\r\n            <ion-card-content>\r\n                <ion-text color=\"light\">\r\n                    <ion-chip>\r\n                        <ion-icon name=\"people\"></ion-icon>\r\n                        <ion-label>{{ game.spotsLeft }} spots left</ion-label>\r\n                    </ion-chip>\r\n                    <br>\r\n                </ion-text>\r\n\r\n                <ion-text color=\"light\">\r\n                    <ion-icon name=\"cash-outline\"></ion-icon>\r\n                    Price: {{ game.price }}\r\n                    <br>\r\n                </ion-text>\r\n\r\n                <ion-text color=\"light\">\r\n                    <ion-icon name=\"location\"></ion-icon>\r\n                    Location: {{ game.location }}\r\n                    <br>\r\n                </ion-text>\r\n\r\n                <br>\r\n\r\n                <ion-button *ngIf=\"game.spotsLeft != 0\" (click)=\"goToGamePage(game)\">Book Slot</ion-button>\r\n                <ion-button *ngIf=\"game.spotsLeft == 0\" [disabled]=\"true\">Slots Fully Booked</ion-button>\r\n\r\n            </ion-card-content>\r\n        </ion-card>\r\n\r\n\r\n        <!--        <ion-list-header>-->\r\n        <!--            <ion-label color=\"white\">Recent transactions</ion-label>-->\r\n        <!--            <ion-button *ngIf=\"content_loaded\" routerLink=\"/payments\">See All-->\r\n        <!--                <ion-icon slot=\"end\" name=\"arrow-forward\"></ion-icon>-->\r\n        <!--            </ion-button>-->\r\n        <!--        </ion-list-header>-->\r\n\r\n        <!--        &lt;!&ndash; Skeletons &ndash;&gt;-->\r\n        <!--        <ion-list class=\"list-custom animate__animated animate__fadeIn\" lines=\"full\" *ngIf=\"!content_loaded\">-->\r\n        <!--            <ion-item *ngFor=\"let i of [].constructor(3);\">-->\r\n        <!--                <ion-label>-->\r\n        <!--                    <h3>-->\r\n        <!--                        <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>-->\r\n        <!--                    </h3>-->\r\n        <!--                    <p>-->\r\n        <!--                        <ion-skeleton-text animated style=\"width: 70%\"></ion-skeleton-text>-->\r\n        <!--                    </p>-->\r\n        <!--                </ion-label>-->\r\n        <!--                <ion-skeleton-text slot=\"end\" animated style=\"width: 10%\"></ion-skeleton-text>-->\r\n        <!--            </ion-item>-->\r\n        <!--        </ion-list>-->\r\n\r\n        <!--        <ion-list class=\"list-custom animate__animated animate__fadeIn\" lines=\"full\" *ngIf=\"content_loaded\">-->\r\n        <!--            <ion-item button detail=\"false\">-->\r\n        <!--                <ion-label>-->\r\n        <!--                    <h3>Coffee</h3>-->\r\n        <!--                    <p>Starbucks &middot; 04.01.2022</p>-->\r\n        <!--                </ion-label>-->\r\n        <!--                <ion-badge color=\"danger\" mode=\"ios\" slot=\"end\">- $8.60</ion-badge>-->\r\n        <!--            </ion-item>-->\r\n        <!--            <ion-item button detail=\"false\">-->\r\n        <!--                <ion-label>-->\r\n        <!--                    <h3>Salary</h3>-->\r\n        <!--                    <p>Apple Inc. &middot; 03.01.2022</p>-->\r\n        <!--                </ion-label>-->\r\n        <!--                <ion-badge color=\"medium\" mode=\"ios\" slot=\"end\">$8412.48</ion-badge>-->\r\n        <!--            </ion-item>-->\r\n        <!--            <ion-item button detail=\"false\">-->\r\n        <!--                <ion-label>-->\r\n        <!--                    <h3>Rent</h3>-->\r\n        <!--                    <p>Housing Inc. &middot; 01.01.2022</p>-->\r\n        <!--                </ion-label>-->\r\n        <!--                <ion-badge color=\"danger\" mode=\"ios\" slot=\"end\">- $1400.00</ion-badge>-->\r\n        <!--            </ion-item>-->\r\n        <!--        </ion-list>-->\r\n\r\n    </div>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ 89321:
/*!**********************************************************!*\
  !*** ./src/app/pages/secure/home/home-routing.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": () => (/* binding */ HomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 39859);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 55828);




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], HomePageRoutingModule);



/***/ }),

/***/ 71634:
/*!**************************************************!*\
  !*** ./src/app/pages/secure/home/home.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 39859);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 91346);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-routing.module */ 89321);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page */ 55828);







let HomePageModule = class HomePageModule {
};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _home_routing_module__WEBPACK_IMPORTED_MODULE_0__.HomePageRoutingModule
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_1__.HomePage]
    })
], HomePageModule);



/***/ }),

/***/ 55828:
/*!************************************************!*\
  !*** ./src/app/pages/secure/home/home.page.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 39859);
/* harmony import */ var _C_Users_user_Desktop_futbuddy_repo_futbuddy_app_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_home_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./home.page.html */ 28368);
/* harmony import */ var _home_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.scss */ 52768);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _services_data_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/data/data.service */ 39638);
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/auth/auth.service */ 68927);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 27091);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/auth */ 75656);









let HomePage = class HomePage {
    constructor(dataService, authService, router, firestore, auth) {
        this.dataService = dataService;
        this.authService = authService;
        this.router = router;
        this.firestore = firestore;
        this.auth = auth;
        this.user$ = (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__.user)(this.auth);
        this.games = [];
        this.activeGames = [];
        this.contentLoaded = false;
        this.userSubscription = this.user$.subscribe((aUser) => {
            console.log('the aUser', aUser);
            this.username = aUser.displayName;
        });
    }
    ngOnInit() {
        this.dataService.getGames().subscribe((res) => {
            this.games = res;
            this.activeGames = this.games.filter(game => game.status === 'ACTIVE');
            // Calculate and set spotsLeft for each game
            this.activeGames.forEach(game => {
                this.calculateSpotsLeft(game);
            });
            console.log('the games boy', this.games);
            console.log('the active games boy', this.activeGames);
        });
        // Fake timeout
        setTimeout(() => {
            this.contentLoaded = true;
        }, 2000);
    }
    goToGamePage(game) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            yield this.router.navigateByUrl(`/games/${game.id}`);
        });
    }
    calculateSpotsLeft(game) {
        this.getPlayerList(game.id).subscribe(playerList => {
            const spotsLeft = game.numOfPlayers - playerList.length;
            game.spotsLeft = spotsLeft >= 0 ? spotsLeft : 0;
            console.log('Spots left for', game.name, ':', game.spotsLeft);
        });
    }
    getPlayerList(gameId) {
        const gameRef = this.firestore.collection('games').doc(gameId);
        const playerListRef = gameRef.collection('playerList');
        return playerListRef.valueChanges(); // Returns an Observable of player data
    }
    ngOnDestroy() {
        this.userSubscription.unsubscribe();
    }
};
HomePage.ctorParameters = () => [
    { type: _services_data_data_service__WEBPACK_IMPORTED_MODULE_2__.DataService },
    { type: _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_7__.AngularFirestore },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__.Auth }
];
HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-home',
        template: _C_Users_user_Desktop_futbuddy_repo_futbuddy_app_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_home_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], HomePage);



/***/ }),

/***/ 52768:
/*!**************************************************!*\
  !*** ./src/app/pages/secure/home/home.page.scss ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLnBhZ2Uuc2NzcyJ9 */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_secure_home_home_module_ts.js.map