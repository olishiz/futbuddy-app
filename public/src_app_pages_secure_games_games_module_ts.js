"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_secure_games_games_module_ts"],{

/***/ 77514:
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/secure/games/games.page.html ***!
  \**************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header collapse=\"fade\" [translucent]=\"true\">\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button text=\"Home\" defaultHref=\"/home\">\r\n            </ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>\r\n            Game Session Detail\r\n        </ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n    <ion-list-header class=\"ion-text-center\">\r\n        <ion-label color=\"white\">{{ (game$ | async)?.name }}</ion-label>\r\n    </ion-list-header>\r\n\r\n    <ion-img src=\"{{ (game$ | async)?.arenaPhotoUrl }}\" alt=\"Futsal court\"></ion-img>\r\n\r\n    <ion-grid>\r\n        <ion-row>\r\n            <ion-col>\r\n                <ion-chip color=\"tertiary\">Format: {{ (game$ | async)?.formatType }}</ion-chip>\r\n            </ion-col>\r\n            <ion-col>\r\n                <ion-chip color=\"tertiary\">Price: {{ (game$ | async)?.price }} </ion-chip>\r\n            </ion-col>\r\n            <ion-col>\r\n                <ion-chip color=\"tertiary\">Floor: {{ (game$ | async)?.floorType }}</ion-chip>\r\n            </ion-col>\r\n        </ion-row>\r\n    </ion-grid>\r\n\r\n    <div class=\"ion-text-center\">\r\n        <ion-text color=\"light\" style=\"margin-top: 10px\">\r\n            <ion-icon name=\"location\"></ion-icon>\r\n            Location: {{ (game$ | async)?.location }}\r\n            <br>\r\n        </ion-text>\r\n    </div>\r\n\r\n    <div class=\"ion-text-center\">\r\n        <ion-text color=\"light\" style=\"margin-top: 10px\">\r\n            <ion-icon name=\"calendar-outline\"></ion-icon>\r\n            Date: {{ (game$ | async)?.date }}\r\n            <br>\r\n        </ion-text>\r\n    </div>\r\n\r\n    <div class=\"ion-text-center\">\r\n        <ion-text color=\"light\" style=\"margin-top: 10px\">\r\n            <ion-icon name=\"time-outline\"></ion-icon>\r\n            Time: {{ (game$ | async)?.time }}\r\n            <br>\r\n        </ion-text>\r\n    </div>\r\n\r\n    <hr style=\"background: grey\">\r\n\r\n    <div class=\"ion-text-center\">\r\n\r\n        <!-- Spots left -->\r\n        <ion-chip>\r\n            <ion-icon name=\"people\"></ion-icon>\r\n            <ion-label>{{ calculateSpotsLeft() }} spots left</ion-label>\r\n        </ion-chip>\r\n\r\n        <br>\r\n        Lineup\r\n        <br>\r\n\r\n        Total players signed up: {{ (playerList$ | async)?.length }}\r\n\r\n        <ion-grid>\r\n            <ion-row>\r\n                <ion-col size=\"6\" *ngFor=\"let player of playerList$ | async; let i = index\">\r\n                    <ion-item>\r\n                        <ion-label>{{ i + 1 }}. {{ player.playerName }}</ion-label>\r\n                    </ion-item>\r\n                </ion-col>\r\n            </ion-row>\r\n        </ion-grid>\r\n\r\n\r\n    </div>\r\n\r\n    <hr style=\"background: grey\">\r\n\r\n    <div class=\"ion-text-center\">\r\n\r\n        <ion-button *ngIf=\"calculateSpotsLeft() != 0 && !is_modal_open\" (click)=\"openCard()\">Book Slot</ion-button>\r\n\r\n        <ion-button *ngIf=\"calculateSpotsLeft() != 0 && is_modal_open\" (click)=\"openCard()\" [disabled]=\"true\">\r\n            <ion-spinner></ion-spinner>\r\n            Book Slot\r\n        </ion-button>\r\n\r\n        <ion-button *ngIf=\"calculateSpotsLeft() == 0\" [disabled]=\"true\">Slots Fully Booked</ion-button>\r\n    </div>\r\n\r\n    <br> <br>\r\n\r\n    <ion-accordion-group>\r\n        <ion-accordion value=\"first\">\r\n            <ion-item slot=\"header\" color=\"dark\">\r\n                <ion-label class=\"ion-text-center\">Description</ion-label>\r\n            </ion-item>\r\n            <div class=\"ion-padding ion-text-center\" slot=\"content\">\r\n\r\n                💦 Bring your bottle of water <br>\r\n\r\n                👕 Bibs will be provided <br>\r\n\r\n                ⏱️ Please arrive 15 minutes earlier before the game for briefing and team assignment. <br>\r\n\r\n                <br> *GAMEPLAY DETAILS* <br>\r\n\r\n                🥅 {{ (game$ | async)?.formatType }} - no subs <br>\r\n\r\n                ♻️ Goalkeeper changes, if required <br>\r\n\r\n                <br> *VENUE DETAILS* <br>\r\n\r\n                👌 Good quality {{ (game$ | async)?.floorType }} <br>\r\n\r\n                🚗 Ample Parking <br>\r\n\r\n                ✅ Free shower and dressing rooms <br>\r\n            </div>\r\n        </ion-accordion>\r\n    </ion-accordion-group>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ 51111:
/*!************************************************************!*\
  !*** ./src/app/pages/secure/games/games-routing.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GamesPageRoutingModule": () => (/* binding */ GamesPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 39859);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _games_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./games.page */ 13573);




const routes = [
    {
        path: '',
        component: _games_page__WEBPACK_IMPORTED_MODULE_0__.GamesPage
    }
];
let GamesPageRoutingModule = class GamesPageRoutingModule {
};
GamesPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], GamesPageRoutingModule);



/***/ }),

/***/ 9094:
/*!****************************************************!*\
  !*** ./src/app/pages/secure/games/games.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GamesPageModule": () => (/* binding */ GamesPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 39859);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 91346);
/* harmony import */ var _games_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./games-routing.module */ 51111);
/* harmony import */ var _games_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./games.page */ 13573);







let GamesPageModule = class GamesPageModule {
};
GamesPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _games_routing_module__WEBPACK_IMPORTED_MODULE_0__.GamesPageRoutingModule
        ],
        declarations: [_games_page__WEBPACK_IMPORTED_MODULE_1__.GamesPage]
    })
], GamesPageModule);



/***/ }),

/***/ 13573:
/*!**************************************************!*\
  !*** ./src/app/pages/secure/games/games.page.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GamesPage": () => (/* binding */ GamesPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 39859);
/* harmony import */ var _C_Users_user_Desktop_futbuddy_repo_futbuddy_app_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_games_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./games.page.html */ 77514);
/* harmony import */ var _games_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./games.page.scss */ 49754);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _services_data_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/data/data.service */ 39638);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 27091);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/auth */ 75656);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 91346);
/* harmony import */ var _payment_payment_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../payment/payment.page */ 88132);










let GamesPage = class GamesPage {
    constructor(route, dataService, firestore, auth, modalController, routerOutlet) {
        this.route = route;
        this.dataService = dataService;
        this.firestore = firestore;
        this.auth = auth;
        this.modalController = modalController;
        this.routerOutlet = routerOutlet;
        this.user$ = (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__.user)(this.auth);
        this.id = null;
        this.is_modal_open = false;
        // Retrieve username from Firebase Auth displayName field
        this.userSubscription = this.user$.subscribe((aUser) => {
            this.username = aUser.displayName;
        });
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            // Retrieve params id from url
            this.route.params.subscribe(params => {
                this.id = params['id'];
                console.log('this.id', this.id);
            });
            this.game$ = this.dataService.getGameById(this.id);
            this.playerList$ = this.getPlayerList(this.id);
            // Convert the Observable to a Promise and log the result
            this.playerList$.toPromise().then(playerList => {
                console.log('Player List:', playerList);
            });
            // Subscribe and store to variable of player List
            this.playerList$.subscribe(playerList => {
                this.playerList = playerList;
                console.log('converted', this.playerList);
            });
            // Fetch game details
            this.dataService.getGameById(this.id).subscribe(game => {
                this.game = game;
                console.log('the GAME', this.game);
            });
        });
    }
    getPlayerList(gameId) {
        const gameRef = this.firestore.collection('games').doc(gameId);
        const playerListRef = gameRef.collection('playerList');
        return playerListRef.valueChanges(); // Returns an Observable of player data
    }
    calculateSpotsLeft() {
        var _a;
        if (this.game && this.game.numOfPlayers) {
            const spotsLeft = this.game.numOfPlayers - ((_a = (this.playerList)) === null || _a === void 0 ? void 0 : _a.length);
            return spotsLeft >= 0 ? spotsLeft : 0;
        }
        return 0;
    }
    ngOnDestroy() {
        this.userSubscription.unsubscribe();
    }
    openCard() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.is_modal_open = true;
            const spotsLeft = this.calculateSpotsLeft();
            // Open filter modal
            const modal = yield this.modalController.create({
                component: _payment_payment_page__WEBPACK_IMPORTED_MODULE_3__.PaymentPage,
                swipeToClose: true,
                presentingElement: this.routerOutlet.nativeEl,
                componentProps: {
                    game: this.game,
                    spotsLeft: spotsLeft
                },
            });
            modal.onDidDismiss().then(() => {
                // Handle the modal dismissal event
                this.is_modal_open = false;
            });
            return yield modal.present();
        });
    }
};
GamesPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute },
    { type: _services_data_data_service__WEBPACK_IMPORTED_MODULE_2__.DataService },
    { type: _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_7__.AngularFirestore },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__.Auth },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonRouterOutlet }
];
GamesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-games',
        template: _C_Users_user_Desktop_futbuddy_repo_futbuddy_app_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_games_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_games_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], GamesPage);



/***/ }),

/***/ 49754:
/*!****************************************************!*\
  !*** ./src/app/pages/secure/games/games.page.scss ***!
  \****************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJnYW1lcy5wYWdlLnNjc3MifQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_secure_games_games_module_ts.js.map