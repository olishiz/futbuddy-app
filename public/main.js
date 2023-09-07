(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["main"],{

/***/ 66224:
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/app.component.html ***!
  \**********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-app>\r\n  <ion-router-outlet></ion-router-outlet>\r\n</ion-app>\r\n");

/***/ }),

/***/ 68438:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 39859);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./guards/auth.guard */ 5903);
/* harmony import */ var _guards_public_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./guards/public.guard */ 84898);





const routes = [
    {
        path: '',
        redirectTo: 'welcome',
        pathMatch: 'full'
    },
    {
        path: '',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_secure_secure_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/secure/secure.module */ 49621)).then(m => m.SecureModule),
        // canActivate: [AuthGuard] // Secure all child pages
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard]
    },
    {
        path: 'welcome',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_swiper_angular_fesm2015_swiper_angular_js"), __webpack_require__.e("src_app_pages_public_welcome_welcome_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/public/welcome/welcome.module */ 30762)).then(m => m.WelcomePageModule),
        // canActivate: [PublicGuard] // Prevent for signed in users
        canActivate: [_guards_public_guard__WEBPACK_IMPORTED_MODULE_1__.PublicGuard]
    },
    {
        path: 'signin',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_public_signin_signin_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/public/signin/signin.module */ 60054)).then(m => m.SigninPageModule),
        // canActivate: [PublicGuard] // Prevent for signed in users
        canActivate: [_guards_public_guard__WEBPACK_IMPORTED_MODULE_1__.PublicGuard]
    },
    {
        path: 'signup',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_public_signup_signup_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/public/signup/signup.module */ 59383)).then(m => m.SignupPageModule),
        // canActivate: [PublicGuard] // Prevent for signed in users
        canActivate: [_guards_public_guard__WEBPACK_IMPORTED_MODULE_1__.PublicGuard]
    },
    {
        path: 'password-reset',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_public_password-reset_password-reset_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/public/password-reset/password-reset.module */ 65409)).then(m => m.PasswordResetPageModule),
        // canActivate: [PublicGuard] // Prevent for signed in users
        canActivate: [_guards_public_guard__WEBPACK_IMPORTED_MODULE_1__.PublicGuard]
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_4__.PreloadAllModules, relativeLinkResolution: 'legacy' })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
    })
], AppRoutingModule);



/***/ }),

/***/ 36104:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 39859);
/* harmony import */ var _C_Users_user_Desktop_futbuddy_repo_futbuddy_app_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./app.component.html */ 66224);
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss */ 30836);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _capacitor_splash_screen__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/splash-screen */ 26391);
/* harmony import */ var _capacitor_status_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @capacitor/status-bar */ 74866);
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @capacitor/core */ 24249);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 91346);








let AppComponent = class AppComponent {
    constructor(platform) {
        this.platform = platform;
        this.initializeApp();
    }
    // Initialize app
    initializeApp() {
        // Wait until platform is ready
        this.platform.ready().then(() => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            // If we're on a mobile platform (iOS / Android), not web
            if (_capacitor_core__WEBPACK_IMPORTED_MODULE_4__.Capacitor.getPlatform() !== 'web') {
                // Set StatusBar style (dark / light)
                yield _capacitor_status_bar__WEBPACK_IMPORTED_MODULE_3__.StatusBar.setStyle({ style: _capacitor_status_bar__WEBPACK_IMPORTED_MODULE_3__.Style.Dark });
            }
            // ...
            // do some more config and setup if necessary
            // ...
            // Fake timeout since we do not load any data
            setTimeout(() => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                // Hide SplashScreen
                yield _capacitor_splash_screen__WEBPACK_IMPORTED_MODULE_2__.SplashScreen.hide();
            }), 2000);
        }));
    }
};
AppComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.Platform }
];
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-root',
        template: _C_Users_user_Desktop_futbuddy_repo_futbuddy_app_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_app_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], AppComponent);



/***/ }),

/***/ 92014:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 39859);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ 86219);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 91346);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 68438);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 36104);
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng2-charts */ 40923);
/* harmony import */ var _angular_fire_app__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/fire/app */ 11576);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../environments/environment */ 41251);
/* harmony import */ var _angular_fire_analytics__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/fire/analytics */ 18819);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/fire/auth */ 75656);
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/fire/database */ 22956);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/fire/firestore */ 44783);
/* harmony import */ var _angular_fire_functions__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/fire/functions */ 60639);
/* harmony import */ var _angular_fire_messaging__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/fire/messaging */ 57420);
/* harmony import */ var _angular_fire_performance__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/fire/performance */ 71445);
/* harmony import */ var _angular_fire_remote_config__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/fire/remote-config */ 71976);
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/fire/storage */ 9243);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _angular_fire_compat__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/fire/compat */ 33467);







// NgCharts












// ReactiveForms


let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent],
        entryComponents: [],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule.forRoot({ mode: 'ios' }),
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            ng2_charts__WEBPACK_IMPORTED_MODULE_8__.NgChartsModule,
            (0,_angular_fire_app__WEBPACK_IMPORTED_MODULE_9__.provideFirebaseApp)(() => (0,_angular_fire_app__WEBPACK_IMPORTED_MODULE_9__.initializeApp)(_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.firebase)),
            (0,_angular_fire_analytics__WEBPACK_IMPORTED_MODULE_10__.provideAnalytics)(() => (0,_angular_fire_analytics__WEBPACK_IMPORTED_MODULE_10__.getAnalytics)()),
            (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_11__.provideAuth)(() => (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_11__.getAuth)()),
            (0,_angular_fire_database__WEBPACK_IMPORTED_MODULE_12__.provideDatabase)(() => (0,_angular_fire_database__WEBPACK_IMPORTED_MODULE_12__.getDatabase)()),
            (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_13__.provideFirestore)(() => (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_13__.getFirestore)()),
            (0,_angular_fire_functions__WEBPACK_IMPORTED_MODULE_14__.provideFunctions)(() => (0,_angular_fire_functions__WEBPACK_IMPORTED_MODULE_14__.getFunctions)()),
            (0,_angular_fire_messaging__WEBPACK_IMPORTED_MODULE_15__.provideMessaging)(() => (0,_angular_fire_messaging__WEBPACK_IMPORTED_MODULE_15__.getMessaging)()),
            (0,_angular_fire_performance__WEBPACK_IMPORTED_MODULE_16__.providePerformance)(() => (0,_angular_fire_performance__WEBPACK_IMPORTED_MODULE_16__.getPerformance)()),
            (0,_angular_fire_remote_config__WEBPACK_IMPORTED_MODULE_17__.provideRemoteConfig)(() => (0,_angular_fire_remote_config__WEBPACK_IMPORTED_MODULE_17__.getRemoteConfig)()),
            (0,_angular_fire_storage__WEBPACK_IMPORTED_MODULE_18__.provideStorage)(() => (0,_angular_fire_storage__WEBPACK_IMPORTED_MODULE_18__.getStorage)())
        ],
        providers: [
            {
                provide: _angular_router__WEBPACK_IMPORTED_MODULE_19__.RouteReuseStrategy,
                useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicRouteStrategy
            },
            _angular_fire_analytics__WEBPACK_IMPORTED_MODULE_10__.ScreenTrackingService,
            _angular_fire_analytics__WEBPACK_IMPORTED_MODULE_10__.UserTrackingService,
            {
                provide: _angular_fire_compat__WEBPACK_IMPORTED_MODULE_20__.FIREBASE_OPTIONS,
                useValue: _environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.firebase
            }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent],
    })
], AppModule);



/***/ }),

/***/ 5903:
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuard": () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 39859);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/auth/auth.service */ 68927);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/auth */ 75656);





let AuthGuard = class AuthGuard {
    constructor(router, authService, auth) {
        this.router = router;
        this.authService = authService;
        this.auth = auth;
        this.user$ = (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__.user)(this.auth);
    }
    // async canActivate(): Promise<boolean> {
    //
    //     const is_signed_in = !!(await this.authService.getSession())
    //
    //     // If not signed in, redirect to welcome page
    //     if (!is_signed_in) {
    //         this.router.navigate(['/welcome']);
    //     }
    //
    //     return is_signed_in;
    // }
    // async canActivate() {
    //     // @ts-ignore
    //     return this.authService.getSession().pipe(
    //         map((user) => {
    //             const isSignedIn = !!user;
    //
    //             // If not signed in, navigate to the welcome page
    //             if (!isSignedIn) {
    //                 this.router.navigate(['/welcome']);
    //             }
    //
    //             return isSignedIn;
    //         })
    //     );
    //
    // }
    canActivate() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const user = yield this.authService.getSession();
            // Check if the user is signed in
            const isSignedIn = !!user;
            // If not signed in, navigate to the welcome page
            if (!isSignedIn) {
                yield this.router.navigate(['/welcome']);
            }
            return isSignedIn;
        });
    }
};
AuthGuard.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__.Auth }
];
AuthGuard = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root',
    })
], AuthGuard);



/***/ }),

/***/ 84898:
/*!****************************************!*\
  !*** ./src/app/guards/public.guard.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PublicGuard": () => (/* binding */ PublicGuard)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 39859);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/auth/auth.service */ 68927);




let PublicGuard = class PublicGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    // async canActivate(): Promise<boolean> {
    //
    //   const is_signed_in = !!(await this.authService.getSession());
    //
    //   // If signed in, redirect to home page
    //   if (is_signed_in) {
    //     this.router.navigate(['/home']);
    //   }
    //
    //   return !is_signed_in;
    // }
    canActivate() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            const user = yield this.authService.getSession();
            // Check if the user is authenticated (you can define your own logic)
            const isAuth = !!user;
            // If authenticated, allow access to the route
            if (isAuth) {
                return true;
            }
            // If not authenticated, you can handle the redirection logic here
            // For example, you can redirect to a login page or show a message
            yield this.router.navigate(['/signin']); // Redirect to the login page
            return false;
        });
    }
};
PublicGuard.ctorParameters = () => [
    { type: _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
PublicGuard = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], PublicGuard);



/***/ }),

/***/ 68927:
/*!***********************************************!*\
  !*** ./src/app/services/auth/auth.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 39859);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/auth */ 75656);
/* harmony import */ var _toast_toast_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../toast/toast.service */ 84746);





let AuthService = class AuthService {
    constructor(router, auth, toastService) {
        this.router = router;
        this.auth = auth;
        this.toastService = toastService;
        this.user$ = (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__.user)(this.auth);
        // subscribe to the user auth object
        this.user = (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__.user)(this.auth);
    }
    // Get user session
    getSession() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            return this.user;
            // ...
            // put auth session here
            // ...
            // authState observable will automatically emit the user's session details
            // return this.user.toPromise();
            // return false
        });
    }
    // Sign in
    signIn(email, password) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            try {
                return yield (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__.signInWithEmailAndPassword)(this.auth, email, password);
            }
            catch (e) {
                console.log("Error: ", e);
                yield this.toastService.presentToast('Login Failed', `Reason: ${e}`, 'top', 'danger', 2000);
            }
        });
    }
    // Sign up
    signUp(email, password) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            try {
                return yield (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__.createUserWithEmailAndPassword)(this.auth, email, password);
            }
            catch (e) {
                console.log("Error: ", e);
                yield this.toastService.presentToast('Sign Up Failed', `Reason: ${e}`, 'top', 'danger', 2000);
            }
        });
    }
    // Sign out
    signOut() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            yield (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__.signOut)(this.auth);
            // Navigate to sign-in
            yield this.router.navigateByUrl('/signin');
        });
    }
    resetPasswordViaEmail(email) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            try {
                yield (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__.sendPasswordResetEmail)(this.auth, email);
                yield this.toastService.presentToast('Password Reset Successful', `Please check your Junk Email for reset link password.`, 'top', 'success', 3500);
            }
            catch (e) {
                console.log("Error: ", e);
                yield this.toastService.presentToast('Reset Password Failed', `Reason: ${e}`, 'top', 'danger', 2000);
            }
        });
    }
    updateProfileName(name) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            yield (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__.updateProfile)(this.auth.currentUser, { displayName: name })
                .catch((error) => console.log(error));
        });
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__.Auth },
    { type: _toast_toast_service__WEBPACK_IMPORTED_MODULE_0__.ToastService }
];
AuthService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
    })
], AuthService);



/***/ }),

/***/ 84746:
/*!*************************************************!*\
  !*** ./src/app/services/toast/toast.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToastService": () => (/* binding */ ToastService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 39859);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ 91346);



let ToastService = class ToastService {
    constructor(toastController) {
        this.toastController = toastController;
    }
    presentToast(header, message, position, color, duration, icon) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            if (!icon) {
                switch (color) {
                    case 'success':
                        icon = 'checkmark-outline';
                        break;
                    case 'medium':
                        icon = 'information-circle-outline';
                        break;
                    case 'danger':
                        icon = 'warning-outline';
                        break;
                }
            }
            const toast = yield this.toastController.create({
                header: header,
                message: message,
                duration: duration,
                position: position,
                color: color,
                icon: icon
            });
            yield toast.present();
        });
    }
};
ToastService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.ToastController }
];
ToastService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], ToastService);



/***/ }),

/***/ 41251:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    firebase: {
        projectId: 'futbuddy-kl',
        appId: '1:1000652290768:web:56f449111d029dad693cd5',
        databaseURL: 'https://futbuddy-kl-default-rtdb.asia-southeast1.firebasedatabase.app',
        storageBucket: 'futbuddy-kl.appspot.com',
        apiKey: 'AIzaSyC890rC1x9d06eAWWDxJoJQE-ZkbaIjl50',
        authDomain: 'futbuddy-kl.firebaseapp.com',
        messagingSenderId: '1000652290768',
        measurementId: 'G-18WTJD6DVS',
    },
    production: true
};


/***/ }),

/***/ 3422:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 42577);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 92014);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 41251);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ 50863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-accordion_2.entry.js": [
		65429,
		"common",
		"node_modules_ionic_core_dist_esm_ion-accordion_2_entry_js"
	],
	"./ion-action-sheet.entry.js": [
		89115,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		83969,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		25882,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		34548,
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		68751,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		430,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-breadcrumb_2.entry.js": [
		48762,
		"common",
		"node_modules_ionic_core_dist_esm_ion-breadcrumb_2_entry_js"
	],
	"./ion-button_2.entry.js": [
		36232,
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		82541,
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		91446,
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		60298,
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		29171,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime-button.entry.js": [
		48238,
		"default-node_modules_ionic_core_dist_esm_data-caf38df0_js-node_modules_ionic_core_dist_esm_th-d3ab8e",
		"node_modules_ionic_core_dist_esm_ion-datetime-button_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		41502,
		"default-node_modules_ionic_core_dist_esm_data-caf38df0_js-node_modules_ionic_core_dist_esm_th-d3ab8e",
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		88899,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		89396,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		5194,
		"common",
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		69491,
		"common",
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		19420,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		40978,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		78860,
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		11389,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		11526,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		51872,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-picker-column-internal.entry.js": [
		88040,
		"common",
		"node_modules_ionic_core_dist_esm_ion-picker-column-internal_entry_js"
	],
	"./ion-picker-internal.entry.js": [
		76326,
		"node_modules_ionic_core_dist_esm_ion-picker-internal_entry_js"
	],
	"./ion-popover.entry.js": [
		94614,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		94513,
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		81673,
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		3596,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		77415,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		51391,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		96219,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		37363,
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		76266,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		38939,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		2482,
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		78906,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		7743,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		21872,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		84541,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		84160,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		31580,
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		20530,
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		71167,
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		55869,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		6056,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 50863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 30836:
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(3422)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map