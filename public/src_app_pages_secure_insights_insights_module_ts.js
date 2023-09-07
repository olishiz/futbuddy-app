"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_secure_insights_insights_module_ts"],{

/***/ 89366:
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/secure/insights/insights.page.html ***!
  \********************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header collapse=\"fade\" [translucent]=\"true\">\r\n  <ion-toolbar>\r\n    <ion-title>\r\n      Insights\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n  <ion-header collapse=\"condense\">\r\n    <ion-toolbar>\r\n      <ion-title size=\"large\">Insights</ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n\r\n  <div class=\"ion-padding\">\r\n\r\n    <ion-card class=\"ion-card-chart ion-no-margin animate__animated animate__fadeIn\">\r\n\r\n      <!-- Skeletons -->\r\n      <ng-container *ngIf=\"!content_loaded\">\r\n        <ion-card-header>\r\n          <div>\r\n            <ion-card-title>\r\n              <ion-skeleton-text animated style=\"width: 60px\"></ion-skeleton-text>\r\n            </ion-card-title>\r\n            <ion-card-subtitle>\r\n              <ion-skeleton-text animated style=\"width: 80px\"></ion-skeleton-text>\r\n            </ion-card-subtitle>\r\n          </div>\r\n          <ion-badge color=\"primary\" mode=\"ios\">\r\n            <ion-skeleton-text animated style=\"width: 50px\"></ion-skeleton-text>\r\n          </ion-badge>\r\n        </ion-card-header>\r\n\r\n        <ion-skeleton-text animated style=\"width: calc(100% - 40px); margin: 16px auto 16px auto; min-height: 140px;\">\r\n        </ion-skeleton-text>\r\n      </ng-container>\r\n\r\n      <!-- Chart -->\r\n      <ng-container *ngIf=\"content_loaded\">\r\n        <ion-card-header>\r\n          <div>\r\n            <ion-card-title>$481.00</ion-card-title>\r\n            <ion-card-subtitle>Spent in total this year</ion-card-subtitle>\r\n          </div>\r\n          <ion-badge color=\"primary\" mode=\"ios\">\r\n            <ion-icon name=\"caret-up\"></ion-icon>21.16%\r\n          </ion-badge>\r\n        </ion-card-header>\r\n\r\n        <canvas baseChart [data]=\"bar_chart_data\" [options]=\"bar_chart_option\" [type]=\"bar_chart_type\"\r\n          class=\"ion-padding\">\r\n        </canvas>\r\n      </ng-container>\r\n\r\n    </ion-card>\r\n\r\n    <hr class=\"hr-medium\">\r\n\r\n    <ion-list-header>\r\n      <ion-label color=\"white\">Spending categories</ion-label>\r\n    </ion-list-header>\r\n\r\n    <!-- Skeletons -->\r\n    <ion-list class=\"list-custom animate__animated animate__fadeIn\" lines=\"full\" *ngIf=\"!content_loaded\">\r\n      <ion-item button detail=\"false\" *ngFor=\"let i of [].constructor(4);\">\r\n        <ion-avatar slot=\"start\" class=\"ion-avatar-default-icon\">\r\n          <ion-skeleton-text animated></ion-skeleton-text>\r\n        </ion-avatar>\r\n        <ion-label>\r\n          <h3>\r\n            <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\r\n          </h3>\r\n          <p class=\"font-size-smallest\">\r\n            <ion-skeleton-text animated style=\"width: 20%\"></ion-skeleton-text>\r\n          </p>\r\n        </ion-label>\r\n        <ion-skeleton-text slot=\"end\" animated style=\"width: 10%\"></ion-skeleton-text>\r\n      </ion-item>\r\n    </ion-list>\r\n\r\n    <ion-list class=\"list-custom animate__animated animate__fadeIn\" lines=\"full\" *ngIf=\"content_loaded\">\r\n      <ion-item button detail=\"false\">\r\n        <ion-avatar slot=\"start\" class=\"ion-avatar-default-icon\">\r\n          <ion-icon color=\"primary\" name=\"home\"></ion-icon>\r\n        </ion-avatar>\r\n        <ion-label>\r\n          <h3>Home & living</h3>\r\n          <p class=\"font-size-smallest\">1 transaction</p>\r\n        </ion-label>\r\n        <ion-note color=\"primary\" class=\"ion-note-small font-weight-500 ion-padding-end-small\">$1,021</ion-note>\r\n      </ion-item>\r\n      <ion-item button detail=\"false\">\r\n        <ion-avatar slot=\"start\" class=\"ion-avatar-default-icon\">\r\n          <ion-icon color=\"primary\" name=\"wallet\"></ion-icon>\r\n        </ion-avatar>\r\n        <ion-label>\r\n          <h3>Loans</h3>\r\n          <p class=\"font-size-smallest\">2 transactions</p>\r\n        </ion-label>\r\n        <ion-note color=\"primary\" class=\"ion-note-small font-weight-500 ion-padding-end-small\">$407.21</ion-note>\r\n      </ion-item>\r\n      <ion-item button detail=\"false\">\r\n        <ion-avatar slot=\"start\" class=\"ion-avatar-default-icon\">\r\n          <ion-icon color=\"primary\" name=\"barbell\"></ion-icon>\r\n        </ion-avatar>\r\n        <ion-label>\r\n          <h3>Sports</h3>\r\n          <p class=\"font-size-smallest\">1 transaction</p>\r\n        </ion-label>\r\n        <ion-note color=\"primary\" class=\"ion-note-small font-weight-500 ion-padding-end-small\">$17.99</ion-note>\r\n      </ion-item>\r\n      <ion-item button detail=\"false\">\r\n        <ion-avatar slot=\"start\" class=\"ion-avatar-default-icon\">\r\n          <ion-icon color=\"primary\" name=\"medkit\"></ion-icon>\r\n        </ion-avatar>\r\n        <ion-label>\r\n          <h3>Insurance</h3>\r\n          <p class=\"font-size-smallest\">3 transactions</p>\r\n        </ion-label>\r\n        <ion-note color=\"primary\" class=\"ion-note-small font-weight-500 ion-padding-end-small\">$140.15</ion-note>\r\n      </ion-item>\r\n    </ion-list>\r\n\r\n  </div>\r\n\r\n</ion-content>");

/***/ }),

/***/ 42853:
/*!******************************************************************!*\
  !*** ./src/app/pages/secure/insights/insights-routing.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InsightsPageRoutingModule": () => (/* binding */ InsightsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 39859);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _insights_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./insights.page */ 11823);




const routes = [
    {
        path: '',
        component: _insights_page__WEBPACK_IMPORTED_MODULE_0__.InsightsPage
    }
];
let InsightsPageRoutingModule = class InsightsPageRoutingModule {
};
InsightsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], InsightsPageRoutingModule);



/***/ }),

/***/ 49080:
/*!**********************************************************!*\
  !*** ./src/app/pages/secure/insights/insights.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InsightsPageModule": () => (/* binding */ InsightsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 39859);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 91346);
/* harmony import */ var _insights_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./insights-routing.module */ 42853);
/* harmony import */ var _insights_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./insights.page */ 11823);
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-charts */ 40923);







// NgCharts

let InsightsPageModule = class InsightsPageModule {
};
InsightsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _insights_routing_module__WEBPACK_IMPORTED_MODULE_0__.InsightsPageRoutingModule,
            ng2_charts__WEBPACK_IMPORTED_MODULE_7__.NgChartsModule
        ],
        declarations: [_insights_page__WEBPACK_IMPORTED_MODULE_1__.InsightsPage]
    })
], InsightsPageModule);



/***/ }),

/***/ 11823:
/*!********************************************************!*\
  !*** ./src/app/pages/secure/insights/insights.page.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InsightsPage": () => (/* binding */ InsightsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 39859);
/* harmony import */ var _C_Users_user_Desktop_futbuddy_repo_futbuddy_app_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_insights_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./insights.page.html */ 89366);
/* harmony import */ var _insights_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./insights.page.scss */ 11618);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-charts */ 40923);
/* harmony import */ var src_app_services_helper_helper_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/helper/helper.service */ 48426);






let InsightsPage = class InsightsPage {
    constructor(helperService) {
        this.helperService = helperService;
        this.bar_chart_option = {
            font: {
                family: 'Inter'
            },
            animation: {
                easing: 'easeInOutElastic',
                delay: 25
            },
            responsive: true,
            scales: {
                x: {
                    grid: {
                        borderColor: this.helperService.getColorVariable('medium'),
                        color: this.helperService.getColorVariable('medium')
                    },
                    ticks: {
                        color: this.helperService.getColorVariable('tertiary'),
                        font: {
                            family: 'Inter',
                            weight: '500'
                        }
                    }
                },
                y: {
                    position: 'right',
                    grid: {
                        borderColor: this.helperService.getColorVariable('medium'),
                        color: this.helperService.getColorVariable('medium')
                    },
                    ticks: {
                        color: this.helperService.getColorVariable('tertiary'),
                        font: {
                            family: 'Inter',
                            weight: '500'
                        },
                        callback: function (value, index, ticks) {
                            return '$' + value;
                        }
                    }
                }
            },
            plugins: {
                legend: {
                    display: false,
                },
                tooltip: {
                    backgroundColor: this.helperService.getColorVariable('dark'),
                    bodyColor: this.helperService.getColorVariable('primary'),
                    titleColor: this.helperService.getColorVariable('tertiary'),
                    titleFont: {
                        size: 14,
                        weight: 'normal'
                    },
                    bodyFont: {
                        size: 16,
                        weight: 'bold'
                    },
                    padding: 12,
                    boxWidth: 10,
                    boxHeight: 10,
                    boxPadding: 3,
                    usePointStyle: true,
                    callbacks: {
                        // Add currency format to tooltip
                        label: function (context) {
                            var label = context.dataset.label || '';
                            if (label) {
                                label += ': ';
                            }
                            if (context.parsed.y !== null) {
                                label += new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(context.parsed.y);
                            }
                            return label;
                        }
                    }
                }
            }
        };
        this.bar_chart_data = {
            labels: [],
            datasets: []
        };
        this.bar_chart_type = 'bar';
        this.content_loaded = false;
    }
    ngOnInit() {
        // Create bar chart
        this.createBarChart();
    }
    ionViewDidEnter() {
        // Fake timeout
        setTimeout(() => {
            this.content_loaded = true;
        }, 2000);
    }
    // Create bar chart
    createBarChart() {
        let helperService = this.helperService;
        // Random array of numbers
        let rand_numbers = [...Array(12)].map(e => Math.random() * 100 | 0);
        // Set labels
        this.bar_chart_data.labels = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
        // Set datasets
        this.bar_chart_data.datasets = [
            {
                data: rand_numbers,
                backgroundColor: function (context) {
                    const chart = context.chart;
                    const { ctx, chartArea } = chart;
                    if (!chartArea) {
                        // This case happens on initial chart load
                        return null;
                    }
                    // Create gradient
                    return helperService.createGradientChart(ctx, 'primary', 'primary');
                },
                barThickness: 10,
                borderRadius: 4,
                borderColor: helperService.getColorVariable('primary'),
                hoverBackgroundColor: helperService.getColorVariable('primary'),
                pointStyle: 'circle',
            }
        ];
    }
};
InsightsPage.ctorParameters = () => [
    { type: src_app_services_helper_helper_service__WEBPACK_IMPORTED_MODULE_2__.HelperService }
];
InsightsPage.propDecorators = {
    chart: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ViewChild, args: [ng2_charts__WEBPACK_IMPORTED_MODULE_4__.BaseChartDirective,] }]
};
InsightsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-insights',
        template: _C_Users_user_Desktop_futbuddy_repo_futbuddy_app_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_insights_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_insights_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], InsightsPage);



/***/ }),

/***/ 48426:
/*!***************************************************!*\
  !*** ./src/app/services/helper/helper.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HelperService": () => (/* binding */ HelperService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 39859);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 14001);


let HelperService = class HelperService {
    constructor() { }
    // Get color variable from SCSS by color name
    getColorVariable(name) {
        return getComputedStyle(document.documentElement).getPropertyValue('--ion-color-' + name);
    }
    // Get color variable RGB from SCSS by color name
    getColorVariableRgb(name) {
        return getComputedStyle(document.documentElement).getPropertyValue('--ion-color-' + name + '-rgb');
    }
    // Create gradient for chart
    createGradientChart(ctx, color_1, color_2) {
        // Create gradient
        var bar_background = ctx.createLinearGradient(0, 0, 0, 150);
        bar_background.addColorStop(0, this.getColorVariable(color_1));
        bar_background.addColorStop(1, 'rgba(' + this.getColorVariableRgb(color_2) + ', .35)');
        return bar_background;
    }
};
HelperService.ctorParameters = () => [];
HelperService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
        providedIn: 'root'
    })
], HelperService);



/***/ }),

/***/ 11618:
/*!**********************************************************!*\
  !*** ./src/app/pages/secure/insights/insights.page.scss ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbnNpZ2h0cy5wYWdlLnNjc3MifQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_secure_insights_insights_module_ts.js.map