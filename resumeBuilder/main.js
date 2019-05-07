(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng2-slim-loading-bar color=\"blue\"></ng2-slim-loading-bar>\r\n<ngx-spinner\r\n  bdColor=\"rgba(51,51,51,0.8)\"\r\n  size=\"medium\"\r\n  color=\"#fff\"\r\n  type=\"ball-scale-multiple\">\r\n <p style=\"font-size: 20px; color: white\">Loading...</p>\r\n</ngx-spinner>\r\n<router-outlet > </router-outlet>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ::ng-deep .black-overlay {\n  position: fixed !important; }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng2_slim_loading_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng2-slim-loading-bar */ "./node_modules/ng2-slim-loading-bar/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(_loadingBar, _router) {
        var _this = this;
        this._loadingBar = _loadingBar;
        this._router = _router;
        this.title = 'ResumeBuilder';
        this._router.events.subscribe(function (event) {
            _this.navigationInterceptor(event);
        });
    }
    AppComponent.prototype.navigationInterceptor = function (event) {
        if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"]) {
            this._loadingBar.start();
        }
        if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
            this._loadingBar.complete();
        }
        if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationCancel"]) {
            this._loadingBar.stop();
        }
        if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationError"]) {
            this._loadingBar.stop();
        }
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [ng2_slim_loading_bar__WEBPACK_IMPORTED_MODULE_1__["SlimLoadingBarService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angularfire2 */ "./node_modules/angularfire2/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.routing.module */ "./src/app/app.routing.module.ts");
/* harmony import */ var angularfire2_storage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! angularfire2/storage */ "./node_modules/angularfire2/storage/index.js");
/* harmony import */ var _firebase_config__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./firebase_config */ "./src/app/firebase_config.ts");
/* harmony import */ var src_services_auth_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/services/auth.service */ "./src/services/auth.service.ts");
/* harmony import */ var src_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/services/auth-guard.service */ "./src/services/auth-guard.service.ts");
/* harmony import */ var _beyerleinf_ngx_dnd__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @beyerleinf/ngx-dnd */ "./node_modules/@beyerleinf/ngx-dnd/fesm5/beyerleinf-ngx-dnd.js");
/* harmony import */ var ng2_slim_loading_bar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng2-slim-loading-bar */ "./node_modules/ng2-slim-loading-bar/index.js");
/* harmony import */ var ngx_papaparse__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-papaparse */ "./node_modules/ngx-papaparse/fesm5/ngx-papaparse.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm5/ng-select.js");
/* harmony import */ var ngx_virtual_scroller__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-virtual-scroller */ "./node_modules/ngx-virtual-scroller/dist/virtual-scroller.js");
/* harmony import */ var ngx_virtual_scroller__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(ngx_virtual_scroller__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var ngx_paypal__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ngx-paypal */ "./node_modules/ngx-paypal/fesm5/ngx-paypal.js");
/* harmony import */ var src_services_can_deactivate_guard__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! src/services/can-deactivate.guard */ "./src/services/can-deactivate.guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["routingComponents"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _beyerleinf_ngx_dnd__WEBPACK_IMPORTED_MODULE_15__["DndModule"].forRoot(),
                _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_4__["HttpModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                angularfire2__WEBPACK_IMPORTED_MODULE_5__["AngularFireModule"].initializeApp(_firebase_config__WEBPACK_IMPORTED_MODULE_12__["config"]),
                angularfire2_database__WEBPACK_IMPORTED_MODULE_6__["AngularFireDatabaseModule"],
                angularfire2_auth__WEBPACK_IMPORTED_MODULE_8__["AngularFireAuthModule"],
                angularfire2_storage__WEBPACK_IMPORTED_MODULE_11__["AngularFireStorageModule"],
                ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerModule"],
                ng2_slim_loading_bar__WEBPACK_IMPORTED_MODULE_16__["SlimLoadingBarModule"],
                ngx_papaparse__WEBPACK_IMPORTED_MODULE_17__["PapaParseModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_18__["NgSelectModule"],
                ngx_virtual_scroller__WEBPACK_IMPORTED_MODULE_19__["VirtualScrollerModule"],
                ngx_paypal__WEBPACK_IMPORTED_MODULE_20__["NgxPayPalModule"],
            ],
            providers: [
                angularfire2_database__WEBPACK_IMPORTED_MODULE_6__["AngularFireDatabase"],
                src_services_auth_service__WEBPACK_IMPORTED_MODULE_13__["AuthService"],
                src_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"],
                src_services_can_deactivate_guard__WEBPACK_IMPORTED_MODULE_21__["CanDeactivateGuard"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]],
            entryComponents: _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["routingComponents"]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app.routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule, routingComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routingComponents", function() { return routingComponents; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_components_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/components/home/home.component */ "./src/components/home/home.component.ts");
/* harmony import */ var src_layout_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/layout/layout.component */ "./src/layout/layout.component.ts");
/* harmony import */ var src_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/components/navbar/navbar.component */ "./src/components/navbar/navbar.component.ts");
/* harmony import */ var src_components_navbar2_navbar2_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/components/navbar2/navbar2.component */ "./src/components/navbar2/navbar2.component.ts");
/* harmony import */ var src_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/components/footer/footer.component */ "./src/components/footer/footer.component.ts");
/* harmony import */ var src_components_pricing_pricing_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/components/pricing/pricing.component */ "./src/components/pricing/pricing.component.ts");
/* harmony import */ var src_components_login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/components/login/login.component */ "./src/components/login/login.component.ts");
/* harmony import */ var src_components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/components/dashboard/dashboard.component */ "./src/components/dashboard/dashboard.component.ts");
/* harmony import */ var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/auth-guard.service */ "./src/services/auth-guard.service.ts");
/* harmony import */ var src_components_signup_signup_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/components/signup/signup.component */ "./src/components/signup/signup.component.ts");
/* harmony import */ var src_components_terms_terms_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/components/terms/terms.component */ "./src/components/terms/terms.component.ts");
/* harmony import */ var src_components_privacy_privacy_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/components/privacy/privacy.component */ "./src/components/privacy/privacy.component.ts");
/* harmony import */ var src_components_resources_resources_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/components/resources/resources.component */ "./src/components/resources/resources.component.ts");
/* harmony import */ var src_components_successful_resumes_successful_resumes_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/components/successful-resumes/successful-resumes.component */ "./src/components/successful-resumes/successful-resumes.component.ts");
/* harmony import */ var src_components_faq_faq_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/components/faq/faq.component */ "./src/components/faq/faq.component.ts");
/* harmony import */ var src_components_templates_templates_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/components/templates/templates.component */ "./src/components/templates/templates.component.ts");
/* harmony import */ var src_components_resume_editor_resume_editor_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/components/resume-editor/resume-editor.component */ "./src/components/resume-editor/resume-editor.component.ts");
/* harmony import */ var src_components_user_info_user_info_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! src/components/user-info/user-info.component */ "./src/components/user-info/user-info.component.ts");
/* harmony import */ var src_components_blogs_blogs_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! src/components/blogs/blogs.component */ "./src/components/blogs/blogs.component.ts");
/* harmony import */ var src_components_recover_account_recover_account_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! src/components/recover-account/recover-account.component */ "./src/components/recover-account/recover-account.component.ts");
/* harmony import */ var src_components_user_resume_list_user_resume_list_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! src/components/user-resume-list/user-resume-list.component */ "./src/components/user-resume-list/user-resume-list.component.ts");
/* harmony import */ var src_components_resume1_resume1_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! src/components/resume1/resume1.component */ "./src/components/resume1/resume1.component.ts");
/* harmony import */ var src_components_resume2_resume2_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! src/components/resume2/resume2.component */ "./src/components/resume2/resume2.component.ts");
/* harmony import */ var src_components_resume3_resume3_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! src/components/resume3/resume3.component */ "./src/components/resume3/resume3.component.ts");
/* harmony import */ var src_components_resume4_resume4_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! src/components/resume4/resume4.component */ "./src/components/resume4/resume4.component.ts");
/* harmony import */ var src_components_resume5_resume5_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! src/components/resume5/resume5.component */ "./src/components/resume5/resume5.component.ts");
/* harmony import */ var src_components_resume6_resume6_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! src/components/resume6/resume6.component */ "./src/components/resume6/resume6.component.ts");
/* harmony import */ var src_components_resume7_resume7_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! src/components/resume7/resume7.component */ "./src/components/resume7/resume7.component.ts");
/* harmony import */ var src_components_resume8_resume8_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! src/components/resume8/resume8.component */ "./src/components/resume8/resume8.component.ts");
/* harmony import */ var src_components_resume9_resume9_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! src/components/resume9/resume9.component */ "./src/components/resume9/resume9.component.ts");
/* harmony import */ var src_components_resume10_resume10_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! src/components/resume10/resume10.component */ "./src/components/resume10/resume10.component.ts");
/* harmony import */ var src_components_resume11_resume11_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! src/components/resume11/resume11.component */ "./src/components/resume11/resume11.component.ts");
/* harmony import */ var src_components_resume12_resume12_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! src/components/resume12/resume12.component */ "./src/components/resume12/resume12.component.ts");
/* harmony import */ var src_components_resume13_resume13_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! src/components/resume13/resume13.component */ "./src/components/resume13/resume13.component.ts");
/* harmony import */ var src_components_resume14_resume14_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! src/components/resume14/resume14.component */ "./src/components/resume14/resume14.component.ts");
/* harmony import */ var src_components_resume15_resume15_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! src/components/resume15/resume15.component */ "./src/components/resume15/resume15.component.ts");
/* harmony import */ var src_components_resume16_resume16_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! src/components/resume16/resume16.component */ "./src/components/resume16/resume16.component.ts");
/* harmony import */ var src_components_resume17_resume17_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! src/components/resume17/resume17.component */ "./src/components/resume17/resume17.component.ts");
/* harmony import */ var src_components_resume18_resume18_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! src/components/resume18/resume18.component */ "./src/components/resume18/resume18.component.ts");
/* harmony import */ var src_components_resume19_resume19_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! src/components/resume19/resume19.component */ "./src/components/resume19/resume19.component.ts");
/* harmony import */ var src_components_resume20_resume20_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! src/components/resume20/resume20.component */ "./src/components/resume20/resume20.component.ts");
/* harmony import */ var src_components_resume21_resume21_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! src/components/resume21/resume21.component */ "./src/components/resume21/resume21.component.ts");
/* harmony import */ var src_components_resume22_resume22_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! src/components/resume22/resume22.component */ "./src/components/resume22/resume22.component.ts");
/* harmony import */ var src_components_resume23_resume23_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! src/components/resume23/resume23.component */ "./src/components/resume23/resume23.component.ts");
/* harmony import */ var src_components_cover_editor_cover_editor_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! src/components/cover-editor/cover-editor.component */ "./src/components/cover-editor/cover-editor.component.ts");
/* harmony import */ var src_components_cover1_cover1_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! src/components/cover1/cover1.component */ "./src/components/cover1/cover1.component.ts");
/* harmony import */ var src_components_user_cover_letter_user_cover_letter_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! src/components/user-cover-letter/user-cover-letter.component */ "./src/components/user-cover-letter/user-cover-letter.component.ts");
/* harmony import */ var src_components_account_account_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! src/components/account/account.component */ "./src/components/account/account.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















































var routes = [
    { path: 'blogs', component: src_components_blogs_blogs_component__WEBPACK_IMPORTED_MODULE_20__["BlogsComponent"] },
    { path: 'faq', component: src_components_faq_faq_component__WEBPACK_IMPORTED_MODULE_16__["FAQComponent"] },
    { path: 'home', component: src_components_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'pricing', component: src_components_pricing_pricing_component__WEBPACK_IMPORTED_MODULE_7__["PricingComponent"] },
    { path: 'login', component: src_components_login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"] },
    {
        path: 'dashboard', component: src_components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__["DashboardComponent"], canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]],
        children: [
            { path: '', component: src_components_user_resume_list_user_resume_list_component__WEBPACK_IMPORTED_MODULE_22__["UserResumeListComponent"] },
            { path: 'resume', component: src_components_user_resume_list_user_resume_list_component__WEBPACK_IMPORTED_MODULE_22__["UserResumeListComponent"] },
            { path: 'cover', component: src_components_user_cover_letter_user_cover_letter_component__WEBPACK_IMPORTED_MODULE_48__["UserCoverLetterComponent"] },
        ]
    },
    {
        path: 'account', component: src_components_account_account_component__WEBPACK_IMPORTED_MODULE_49__["AccountComponent"], canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]],
    },
    { path: 'signup', component: src_components_signup_signup_component__WEBPACK_IMPORTED_MODULE_11__["SignupComponent"] },
    { path: 'recovery', component: src_components_recover_account_recover_account_component__WEBPACK_IMPORTED_MODULE_21__["RecoverAccountComponent"] },
    { path: 'privacy', component: src_components_privacy_privacy_component__WEBPACK_IMPORTED_MODULE_13__["PrivacyComponent"] },
    { path: 'resources', component: src_components_resources_resources_component__WEBPACK_IMPORTED_MODULE_14__["ResourcesComponent"] },
    { path: 'successful-resumes', component: src_components_successful_resumes_successful_resumes_component__WEBPACK_IMPORTED_MODULE_15__["SuccessfulResumesComponent"] },
    { path: 'terms', component: src_components_terms_terms_component__WEBPACK_IMPORTED_MODULE_12__["TermsComponent"] },
    { path: 'templates', component: src_components_templates_templates_component__WEBPACK_IMPORTED_MODULE_17__["TemplatesComponent"], canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]] },
    {
        path: 'resume-editor', component: src_components_resume_editor_resume_editor_component__WEBPACK_IMPORTED_MODULE_18__["ResumeEditorComponent"],
        children: [
            { path: '', component: src_components_resume1_resume1_component__WEBPACK_IMPORTED_MODULE_23__["Resume1Component"] },
            { path: 'resume1', component: src_components_resume1_resume1_component__WEBPACK_IMPORTED_MODULE_23__["Resume1Component"] },
            { path: 'resume2', component: src_components_resume2_resume2_component__WEBPACK_IMPORTED_MODULE_24__["Resume2Component"] },
            { path: 'resume3', component: src_components_resume3_resume3_component__WEBPACK_IMPORTED_MODULE_25__["Resume3Component"] },
            { path: 'resume4', component: src_components_resume4_resume4_component__WEBPACK_IMPORTED_MODULE_26__["Resume4Component"] },
            { path: 'resume5', component: src_components_resume5_resume5_component__WEBPACK_IMPORTED_MODULE_27__["Resume5Component"] },
            { path: 'resume6', component: src_components_resume6_resume6_component__WEBPACK_IMPORTED_MODULE_28__["Resume6Component"] },
            { path: 'resume7', component: src_components_resume7_resume7_component__WEBPACK_IMPORTED_MODULE_29__["Resume7Component"] },
            { path: 'resume8', component: src_components_resume8_resume8_component__WEBPACK_IMPORTED_MODULE_30__["Resume8Component"] },
            { path: 'resume9', component: src_components_resume9_resume9_component__WEBPACK_IMPORTED_MODULE_31__["Resume9Component"] },
            { path: 'resume10', component: src_components_resume10_resume10_component__WEBPACK_IMPORTED_MODULE_32__["Resume10Component"] },
            { path: 'resume11', component: src_components_resume11_resume11_component__WEBPACK_IMPORTED_MODULE_33__["Resume11Component"] },
            { path: 'resume12', component: src_components_resume12_resume12_component__WEBPACK_IMPORTED_MODULE_34__["Resume12Component"] },
            { path: 'resume13', component: src_components_resume13_resume13_component__WEBPACK_IMPORTED_MODULE_35__["Resume13Component"] },
            { path: 'resume14', component: src_components_resume14_resume14_component__WEBPACK_IMPORTED_MODULE_36__["Resume14Component"] },
            { path: 'resume15', component: src_components_resume15_resume15_component__WEBPACK_IMPORTED_MODULE_37__["Resume15Component"] },
            { path: 'resume16', component: src_components_resume16_resume16_component__WEBPACK_IMPORTED_MODULE_38__["Resume16Component"] },
            { path: 'resume17', component: src_components_resume17_resume17_component__WEBPACK_IMPORTED_MODULE_39__["Resume17Component"] },
            { path: 'resume18', component: src_components_resume18_resume18_component__WEBPACK_IMPORTED_MODULE_40__["Resume18Component"] },
            { path: 'resume19', component: src_components_resume19_resume19_component__WEBPACK_IMPORTED_MODULE_41__["Resume19Component"] },
            { path: 'resume20', component: src_components_resume20_resume20_component__WEBPACK_IMPORTED_MODULE_42__["Resume20Component"] },
            { path: 'resume21', component: src_components_resume21_resume21_component__WEBPACK_IMPORTED_MODULE_43__["Resume21Component"] },
            { path: 'resume22', component: src_components_resume22_resume22_component__WEBPACK_IMPORTED_MODULE_44__["Resume22Component"] },
            { path: 'resume23', component: src_components_resume23_resume23_component__WEBPACK_IMPORTED_MODULE_45__["Resume23Component"] },
        ],
        canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]],
    },
    { path: 'user-details', component: src_components_user_info_user_info_component__WEBPACK_IMPORTED_MODULE_19__["UserInfoComponent"] },
    {
        path: 'cover-editor', component: src_components_cover_editor_cover_editor_component__WEBPACK_IMPORTED_MODULE_46__["CoverEditorComponent"], children: [
            { path: '', component: src_components_cover1_cover1_component__WEBPACK_IMPORTED_MODULE_47__["Cover1Component"] },
            { path: 'cover1', component: src_components_cover1_cover1_component__WEBPACK_IMPORTED_MODULE_47__["Cover1Component"] }
        ],
        canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]],
    },
    // { path: 'edit-customer/:id', component: EditCustomerComponent },
    // { path: 'edit-customer/:id', component: EditCustomerComponent },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());

var routingComponents = [
    src_components_blogs_blogs_component__WEBPACK_IMPORTED_MODULE_20__["BlogsComponent"],
    src_components_faq_faq_component__WEBPACK_IMPORTED_MODULE_16__["FAQComponent"],
    src_components_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"],
    src_layout_layout_component__WEBPACK_IMPORTED_MODULE_3__["LayoutComponent"],
    src_components_navbar2_navbar2_component__WEBPACK_IMPORTED_MODULE_5__["Navbar2Component"],
    src_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"],
    src_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
    src_components_pricing_pricing_component__WEBPACK_IMPORTED_MODULE_7__["PricingComponent"],
    src_components_login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
    src_components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__["DashboardComponent"],
    src_components_signup_signup_component__WEBPACK_IMPORTED_MODULE_11__["SignupComponent"],
    src_components_privacy_privacy_component__WEBPACK_IMPORTED_MODULE_13__["PrivacyComponent"],
    src_components_resources_resources_component__WEBPACK_IMPORTED_MODULE_14__["ResourcesComponent"],
    src_components_successful_resumes_successful_resumes_component__WEBPACK_IMPORTED_MODULE_15__["SuccessfulResumesComponent"],
    src_components_terms_terms_component__WEBPACK_IMPORTED_MODULE_12__["TermsComponent"],
    src_components_templates_templates_component__WEBPACK_IMPORTED_MODULE_17__["TemplatesComponent"],
    src_components_resume_editor_resume_editor_component__WEBPACK_IMPORTED_MODULE_18__["ResumeEditorComponent"],
    src_components_user_info_user_info_component__WEBPACK_IMPORTED_MODULE_19__["UserInfoComponent"],
    src_components_recover_account_recover_account_component__WEBPACK_IMPORTED_MODULE_21__["RecoverAccountComponent"],
    src_components_user_resume_list_user_resume_list_component__WEBPACK_IMPORTED_MODULE_22__["UserResumeListComponent"],
    src_components_resume1_resume1_component__WEBPACK_IMPORTED_MODULE_23__["Resume1Component"],
    src_components_resume2_resume2_component__WEBPACK_IMPORTED_MODULE_24__["Resume2Component"],
    src_components_resume3_resume3_component__WEBPACK_IMPORTED_MODULE_25__["Resume3Component"],
    src_components_resume4_resume4_component__WEBPACK_IMPORTED_MODULE_26__["Resume4Component"],
    src_components_resume5_resume5_component__WEBPACK_IMPORTED_MODULE_27__["Resume5Component"],
    src_components_resume6_resume6_component__WEBPACK_IMPORTED_MODULE_28__["Resume6Component"],
    src_components_resume7_resume7_component__WEBPACK_IMPORTED_MODULE_29__["Resume7Component"],
    src_components_resume8_resume8_component__WEBPACK_IMPORTED_MODULE_30__["Resume8Component"],
    src_components_resume9_resume9_component__WEBPACK_IMPORTED_MODULE_31__["Resume9Component"],
    src_components_resume10_resume10_component__WEBPACK_IMPORTED_MODULE_32__["Resume10Component"],
    src_components_resume11_resume11_component__WEBPACK_IMPORTED_MODULE_33__["Resume11Component"],
    src_components_resume12_resume12_component__WEBPACK_IMPORTED_MODULE_34__["Resume12Component"],
    src_components_resume13_resume13_component__WEBPACK_IMPORTED_MODULE_35__["Resume13Component"],
    src_components_resume14_resume14_component__WEBPACK_IMPORTED_MODULE_36__["Resume14Component"],
    src_components_resume15_resume15_component__WEBPACK_IMPORTED_MODULE_37__["Resume15Component"],
    src_components_resume16_resume16_component__WEBPACK_IMPORTED_MODULE_38__["Resume16Component"],
    src_components_resume17_resume17_component__WEBPACK_IMPORTED_MODULE_39__["Resume17Component"],
    src_components_resume18_resume18_component__WEBPACK_IMPORTED_MODULE_40__["Resume18Component"],
    src_components_resume19_resume19_component__WEBPACK_IMPORTED_MODULE_41__["Resume19Component"],
    src_components_resume20_resume20_component__WEBPACK_IMPORTED_MODULE_42__["Resume20Component"],
    src_components_resume21_resume21_component__WEBPACK_IMPORTED_MODULE_43__["Resume21Component"],
    src_components_cover_editor_cover_editor_component__WEBPACK_IMPORTED_MODULE_46__["CoverEditorComponent"],
    src_components_cover1_cover1_component__WEBPACK_IMPORTED_MODULE_47__["Cover1Component"],
    src_components_resume22_resume22_component__WEBPACK_IMPORTED_MODULE_44__["Resume22Component"],
    src_components_resume23_resume23_component__WEBPACK_IMPORTED_MODULE_45__["Resume23Component"],
    src_components_user_cover_letter_user_cover_letter_component__WEBPACK_IMPORTED_MODULE_48__["UserCoverLetterComponent"],
    src_components_account_account_component__WEBPACK_IMPORTED_MODULE_49__["AccountComponent"]
];


/***/ }),

/***/ "./src/app/firebase_config.ts":
/*!************************************!*\
  !*** ./src/app/firebase_config.ts ***!
  \************************************/
/*! exports provided: config */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "config", function() { return config; });
var config = {
    apiKey: "AIzaSyBgMthmHdl3MPbLfZFbLhk3jrKMuBE3qAw",
    authDomain: "resumebuilder-d5571.firebaseapp.com",
    databaseURL: "https://resumebuilder-d5571.firebaseio.com",
    projectId: "resumebuilder-d5571",
    storageBucket: "resumebuilder-d5571.appspot.com",
    messagingSenderId: "487609345559"
};


/***/ }),

/***/ "./src/components/account/account.component.html":
/*!*******************************************************!*\
  !*** ./src/components/account/account.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar2></app-navbar2>\n  <div class=\"container mt-5\" style=\"min-height: 70vh;\">\n    <div class=\"row\">\n      <div class=\"col-4\">\n        <!-- <p class=\"text-primary\">Update Password</p> -->\n          <!-- <div class=\"form-group\">\n            <label for=\"oldPassword\" >Enter Old Password</label>\n            <input type=\"password\" id=\"oldPassword\" placeholder=\"Old password\" class=\"form-control\">\n          </div> -->\n          <div class=\"form-group\">\n              <label for=\"newPassword\" >Enter New Password</label>\n              <input type=\"password\" [(ngModel)]=\"newPassword\" id=\"newPassword\" placeholder=\"New password\" class=\"form-control\">\n              <input type=\"password\" [(ngModel)]=\"confirmPassword\"  id=\"confirmPassword\" placeholder=\"Confirm password\" class=\"form-control mt-2\">\n          </div>\n          <div *ngIf=\"newPassword !== confirmPassword\" class=\"alert alert-warning\" role=\"alert\">\n              Password not match\n          </div>\n          <div *ngIf=\"err\" class=\"alert alert-danger\" role=\"alert\">\n              {{err.message}}\n          </div>\n          <button [disabled]=\"newPassword !== confirmPassword && newPassword \" (click)=\"updatePassword()\" class=\"btn btn-primary\">Update</button>\n      </div>\n    </div>\n  </div>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/components/account/account.component.scss":
/*!*******************************************************!*\
  !*** ./src/components/account/account.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/components/account/account.component.ts":
/*!*****************************************************!*\
  !*** ./src/components/account/account.component.ts ***!
  \*****************************************************/
/*! exports provided: AccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountComponent", function() { return AccountComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/services/auth.service */ "./src/services/auth.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AccountComponent = /** @class */ (function () {
    function AccountComponent(auth, spinner) {
        this.auth = auth;
        this.spinner = spinner;
    }
    AccountComponent.prototype.ngOnInit = function () {
    };
    AccountComponent.prototype.updatePassword = function () {
        var _this = this;
        console.log(this.newPassword, this.confirmPassword);
        this.spinner.show();
        this.auth.updatePassword(this.newPassword).then(function (res) {
            console.log(res, 'Password Updated');
            _this.spinner.hide();
        }).catch(function (err) {
            console.log(err, 'Error');
            _this.err = err;
            _this.spinner.hide();
            // alert('Update Password Error');
        });
    };
    AccountComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-account',
            template: __webpack_require__(/*! ./account.component.html */ "./src/components/account/account.component.html"),
            styles: [__webpack_require__(/*! ./account.component.scss */ "./src/components/account/account.component.scss")]
        }),
        __metadata("design:paramtypes", [src_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"]])
    ], AccountComponent);
    return AccountComponent;
}());



/***/ }),

/***/ "./src/components/blogs/blogs.component.html":
/*!***************************************************!*\
  !*** ./src/components/blogs/blogs.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar> \r\n  <div class=\"frontpage-top-post\">\r\n  </div>\r\n  <div class=\"container\">\r\n    <div class=\"row mt-5\">\r\n      <div class=\"col-lg-1\">1</div>\r\n      <div class=\"col-lg-7\">\r\n        <h1>How to make your resume stand out according to three recruiters</h1>\r\n        <p>Lorem ipsum dolor sit amet, qui ei inciderint efficiantur, soleat adipisci his no, eum ex sonet nonumes. No qui stet homero vocibus, numquam intellegam mei at. Per sint interpretaris at, eam cu meis nominati. Id fabulas suavitate vix.\r\n\r\n          Sit in iusto bonorum volutpat, an labores legimus accusam sit. Vel cu suas docendi, ei liber omittantur ius. Dicta platonem erroribus per ad, utamur ancillae eligendi nam ne. Vix ex aeterno minimum quaerendum, ea per agam sonet intellegat.\r\n          \r\n          At scripta percipit praesent ius, pro ridens propriae assentior in. Vitae deserunt comprehensam pro ad, pri everti aliquid maiorum in. Quem harum ea eam. Id vis impetus maiestatis, vis ei delectus moderatius. Duo in cibo labitur volutpat.\r\n          \r\n          Purto sensibus no sit, nullam eloquentiam sea at. Et erant invenire repudiandae duo, doming argumentum ei vim. Nec ut tation deseruisse, quot vidisse cu eam, ut paulo torquatos eam. Mei esse feugiat apeirian ea, dolore nostro veritus usu no. Eruditi pertinacia scripserit an sit, in cum quis iisque. Eu modo deserunt recteque eam.\r\n          \r\n          Nobis persius eos te, ut posidonium definitiones qui, mel in error aliquam mentitum. In enim erat nostrud qui, pro congue veniam quaestio ut. In menandri scripserit eos, at vel omnis partiendo. Eos ad dico eirmod detraxit. Ius prima philosophia ne.\r\n          \r\n          Ius eu corpora deserunt prodesset, ei solet legimus civibus per, placerat dissentiunt pri te. Mei ei semper insolens, ei eos case sadipscing. Nec ea quot mucius aliquid, pro vide saepe ne, ei choro soleat cum. Laudem constituam nec ad, ne mei semper patrioque.\r\n          \r\n          Tollit nostrud mnesarchum et ius. Veri aperiri no ius, ubique mollis elaboraret ut qui. Definiebas efficiantur et per, sea urbanitas consectetuer at. Vero reprimique an nam.\r\n          \r\n          Facete phaedrum imperdiet est ne, nec nihil choro interpretaris ne. Te feugiat offendit usu, nulla maiorum assueverit quo an. Usu no illud reformidans. Vel ut malis argumentum dissentiunt, no est tempor efficiendi. Solum oportere vel ne, quo atqui honestatis et. Mei eu fuisset consetetur accommodare, has ea solum recteque. Eripuit sanctus scaevola sea ea.\r\n          \r\n          Ea nam eius argumentum, ancillae gloriatur mei te. Ne ornatus pertinax pri. Saepe blandit commune ex sit, ea usu scripta legendos. Ei sit case diceret commune. Ad autem civibus hendrerit nam, in nec appellantur philosophia, te vim augue decore iudicabit. Volutpat imperdiet aliquando at eum, ullum accusam ius ne, integre signiferumque ne eos.\r\n          \r\n          Molestie theophrastus sed eu. Idque fabellas vim in, no aliquid indoctum argumentum duo. Dolorem appareat ad sed, ex alia solum est. Ut habeo blandit nam, gloriatur scriptorem ne his, ius ei consul molestie. Vocibus voluptaria interpretaris cu has, dicat scripta convenire nec in. Quo quot civibus et, vix an illud suavitate interpretaris. Mea dicunt delenit adipiscing ei, et qui autem malis omittam.\r\n          \r\n          Vero laoreet est te. His at timeam nominavi, id sea euismod bonorum salutatus. Probo consul graeco cu pri, eirmod feugait nam cu. Ex vocent inermis eum, eirmod hendrerit et per. At movet omnes facilis quo.\r\n          \r\n          At vel quando soleat. Et quo audiam maiorum evertitur. Ridens discere aliquam nam eu, an duo atqui legere consetetur. Probo debitis elaboraret et quo, id munere nostrum sensibus eos, in duo alterum intellegam. Ex mea choro scripta molestiae, sale deserunt mel id.\r\n          \r\n          Bonorum voluptaria ei eam, docendi patrioque mediocritatem eu eum. Quo in elit efficiendi interpretaris. Persius dolorem vel id. Falli erant eleifend ut vis, mel et veri discere impedit, mutat aeque inimicus eos ut. Mundi putant propriae his ad. Eam ut wisi ferri.</p>\r\n      </div>\r\n      <div class=\"col-lg-4\">\r\n        <h6>Latest posts</h6>\r\n        <div class=\"row mt-3\">\r\n          <div class=\"col-lg-4\">\r\n            <img class=\"blog-image-1\" src=\"../assets/images/homepage-resume1.jpg\" height=\"80\" width=\"100\" alt=\"\">\r\n          </div>\r\n          <div class=\"col-lg-8\">\r\n            <p>How I decide when to leave or stay in a job</p>\r\n          </div>\r\n        </div>\r\n        <div class=\"row mt-3\">\r\n            <div class=\"col-lg-4\">\r\n              <img class=\"blog-image-1\" src=\"../assets/images/homepage-resume1.jpg\" height=\"80\" width=\"100\" alt=\"\">\r\n            </div>\r\n            <div class=\"col-lg-8\">\r\n              <p>3 steps to write a killer eCommerce Resume</p>\r\n            </div>\r\n        </div>\r\n        <div class=\"row mt-3\">\r\n            <div class=\"col-lg-4\">\r\n              <img class=\"blog-image-1\" src=\"../assets/images/homepage-resume1.jpg\" height=\"80\" width=\"100\" alt=\"\">\r\n            </div>\r\n            <div class=\"col-lg-8\">\r\n              <p>Successful Resumes - real resumes that got people hired at top companies</p>\r\n            </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n<app-footer></app-footer>\r\n"

/***/ }),

/***/ "./src/components/blogs/blogs.component.scss":
/*!***************************************************!*\
  !*** ./src/components/blogs/blogs.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".frontpage-top-post {\n  display: block;\n  position: relative;\n  width: 100%;\n  height: 500px;\n  background-size: cover;\n  background-position: 50%;\n  background-image: url(\"https://blog.enhancv.com/wp-content/uploads/2018/06/SR_blog_post_cover.png\"); }\n\n.blog-image-1 {\n  border-radius: 25%; }\n"

/***/ }),

/***/ "./src/components/blogs/blogs.component.ts":
/*!*************************************************!*\
  !*** ./src/components/blogs/blogs.component.ts ***!
  \*************************************************/
/*! exports provided: BlogsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogsComponent", function() { return BlogsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BlogsComponent = /** @class */ (function () {
    function BlogsComponent() {
    }
    BlogsComponent.prototype.ngOnInit = function () {
    };
    BlogsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-blogs',
            template: __webpack_require__(/*! ./blogs.component.html */ "./src/components/blogs/blogs.component.html"),
            styles: [__webpack_require__(/*! ./blogs.component.scss */ "./src/components/blogs/blogs.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BlogsComponent);
    return BlogsComponent;
}());



/***/ }),

/***/ "./src/components/cover-editor/cover-editor.component.html":
/*!*****************************************************************!*\
  !*** ./src/components/cover-editor/cover-editor.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar2></app-navbar2>\n<div class=\"modal fade\" id=\"modalEmail\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"modalEmailTitle\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h5 class=\"modal-title\" id=\"modalEmailTitle\">Enter Email</h5>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">\n          <input  [(ngModel)]=\"email\"  type=\"text\" class=\"form-control\" placeholder=\"Email Address\" >\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" (click)=\"sendResumeByEmail()\">Send</button>\n        </div>\n      </div>\n    </div>\n  </div>\n<div class=\"container-fluid\">\n    <div class=\"row cover-editor\">\n      <div class=\"col-lg-2 sidebar\">\n        <div class=\"row\" *ngIf=\"isSidebarAction === 'main'\">\n          <div class=\"col-12 py-3 pl-2rem pr-3rem bottom-border\">\n               <button type=\"button\" (click)=\"download()\" class=\"btn btn-info btn-block btn-add-section\" data-toggle=\"modal\" data-target=\"#exampleModalCenter\">\n                  <i class=\"fa fa-download pr-3\"></i>\n                  <span class=\"spn-txt\">Download</span> \n                </button>\n          </div>\n    \n          <div class=\"col-12  py-3 px-5 border-bottom\">\n              <a class=\"sidebar-btn\" data-toggle=\"modal\" data-target=\"#modalEmail\">\n                <i class=\"fa fa-envelope pr-3\"></i>\n                <span class=\"spn-txt\">Send to Email</span> \n              </a>\n        </div>\n          <div class=\"col-12  py-3 px-5 border-bottom\">\n              <!-- <button (click)=\"save()\" type=\"button\" class=\"btn  btn-info btn-block\" > -->\n                <a class=\"sidebar-btn \" (click)=\"save()\">\n                  <i class=\"fa fa-save pr-3\"></i>\n                  <span class=\"spn-txt\">Save</span> \n                </a>\n          </div>\n        </div>\n        <div *ngIf=\"isSidebarAction === 'chooseTemplate'\" class=\"row\">\n            <div class=\"col-12 py-3 px-2 border-bottom\">\n                  <button (click)=\"gotoMainSideBar()\" type=\"button\" class=\"btn btn-info btn-block btn-add-section\">\n                    <i class=\"fa fa-arrow-left pr-3\"></i>\n                    <span class=\"spn-txt\">Back to Navigation</span> \n                  </button>\n            </div>\n            <div class=\"col-12 py-3 px-4\">\n              <div class=\"mb-3 templates\" (click)=\"selectTemplate('resume1')\">\n                  <img src=\"assets/images/Resume Templates/8.jpg\" style=\"width:100%;\" alt=\"\">\n              </div>\n              <div class=\"mb-3 templates\" (click)=\"selectTemplate('resume2')\">\n                  <img src=\"assets/images/Resume Templates/9.jpg\" style=\"width:100%;\" alt=\"\">\n              </div>\n              <div class=\"mb-3 templates\" (click)=\"selectTemplate('resume4')\">\n                  <img src=\"assets/images/Resume Templates/16.jpg\" style=\"width:100%;\" alt=\"\">\n              </div>\n            </div>\n        </div>\n      </div>\n    \n      <div class=\"col-lg-10 m-0 p-0\">\n        <div class=\"preview mt-0 mb-5\">\n            <div class=\"my-3 row justify-content-left\">\n              <div class=\"col p-0\">\n                  <button (click)=\"undo()\" class=\"btn btn-light btn-square animated-hover mr-3\"><i class=\"fa fa-undo text-primary\"></i></button>\n                  <button (click)=\"redo()\" class=\"btn btn-light btn-square animated-hover\"><i class=\"fa fa-repeat text-primary\"></i></button>\n              </div>\n            </div>\n            <div class=\"row\" >\n              <div class=\"col p-0\">\n                  <router-outlet></router-outlet>\n              </div>\n            </div>\n       \n        </div>\n      </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/components/cover-editor/cover-editor.component.scss":
/*!*****************************************************************!*\
  !*** ./src/components/cover-editor/cover-editor.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cover-editor ::ng-deep {\n  background-color: #f3f3f3; }\n  .cover-editor ::ng-deep a {\n    cursor: pointer; }\n  .cover-editor ::ng-deep .medium-editor-element {\n    min-height: auto !important; }\n  .cover-editor ::ng-deep .medium-editor-element p {\n      display: inline;\n      margin: 0;\n      padding: 0; }\n  .cover-editor ::ng-deep .preview {\n    margin: 3rem 11rem; }\n  .cover-editor ::ng-deep .preview .document {\n      border: 1px solid #b4b4b4;\n      background-color: #fff; }\n  .cover-editor ::ng-deep .preview .document p {\n        font-size: 12px;\n        margin-bottom: .2rem; }\n  .cover-editor ::ng-deep .preview .document .content-container {\n        height: 279mm;\n        max-height: 279mm; }\n  .cover-editor ::ng-deep .preview .document .content-container * {\n          max-height: 100%; }\n  .cover-editor ::ng-deep .preview .document .content-container .content {\n          transition: background 1s; }\n  .cover-editor ::ng-deep .preview .document .basic img {\n        cursor: pointer; }\n  .cover-editor ::ng-deep .preview .document .basic img:hover {\n        opacity: 0.8; }\n  .cover-editor ::ng-deep .preview .editable-container {\n      transition: background 1s;\n      border: 1px solid transparent;\n      border-radius: 5px;\n      padding: 1rem;\n      position: relative; }\n  @-webkit-keyframes showNav {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n  @keyframes showNav {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n  .cover-editor ::ng-deep .preview .editable-container .editable-toolbar {\n        position: absolute;\n        left: 39%;\n        top: -18px; }\n  .cover-editor ::ng-deep .preview .editable-container.active {\n      background-color: #fff; }\n  .cover-editor ::ng-deep .preview .editable-container:hover {\n      border: 1px solid #17a2b8;\n      border-radius: 5px; }\n  .cover-editor ::ng-deep .preview .editable:focus {\n      outline: 0px solid transparent; }\n"

/***/ }),

/***/ "./src/components/cover-editor/cover-editor.component.ts":
/*!***************************************************************!*\
  !*** ./src/components/cover-editor/cover-editor.component.ts ***!
  \***************************************************************/
/*! exports provided: CoverEditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoverEditorComponent", function() { return CoverEditorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_services_json_resume_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/services/json-resume.service */ "./src/services/json-resume.service.ts");
/* harmony import */ var src_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/services/auth.service */ "./src/services/auth.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! html2canvas */ "./node_modules/html2canvas/dist/npm/index.js");
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(html2canvas__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jspdf */ "./node_modules/jspdf/dist/jspdf.min.js");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jspdf__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_6__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};







var CoverEditorComponent = /** @class */ (function () {
    function CoverEditorComponent(ResumeJsonService, authService, spinner) {
        var _this = this;
        this.ResumeJsonService = ResumeJsonService;
        this.authService = authService;
        this.spinner = spinner;
        this.isSidebarAction = 'main';
        jquery__WEBPACK_IMPORTED_MODULE_6__(window).on('beforeunload', function (event) { return __awaiter(_this, void 0, void 0, function () {
            var savePromise;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.save()];
                    case 1:
                        savePromise = _a.sent();
                        console.log('saved');
                        return [2 /*return*/, undefined];
                }
            });
        }); });
        jquery__WEBPACK_IMPORTED_MODULE_6__(window).on('unload', function () {
            console.log('test');
            console.log('test');
            console.log('test');
            console.log('test');
            // this.save();
        });
    }
    CoverEditorComponent.prototype.ngOnInit = function () {
        this.ResumeJsonService.activateEditor();
    };
    CoverEditorComponent.prototype.undo = function () {
        document.execCommand('undo', false, null);
    };
    CoverEditorComponent.prototype.redo = function () {
        document.execCommand('redo', false, null);
    };
    CoverEditorComponent.prototype.save = function () {
        var _this = this;
        this.spinner.show();
        return new Promise(function (resolve, reject) {
            html2canvas__WEBPACK_IMPORTED_MODULE_4___default()(jquery__WEBPACK_IMPORTED_MODULE_6__('.document')[0], { backgroundColor: 'red' }).then(function (canvas) {
                var templatePreviewImage = canvas.toDataURL('image/jpeg', 1.0);
                _this.authService.getUserDetails().subscribe(function (user) {
                    if (user) {
                        _this.CoverJson = {
                            name: jquery__WEBPACK_IMPORTED_MODULE_6__('.name').html() || null,
                            jobTitle: jquery__WEBPACK_IMPORTED_MODULE_6__('.jobTitle').html() || null,
                            companyDetails: jquery__WEBPACK_IMPORTED_MODULE_6__('.companyDetails').html() || null,
                            date: jquery__WEBPACK_IMPORTED_MODULE_6__('.date').html() || null,
                            email: jquery__WEBPACK_IMPORTED_MODULE_6__('.email').html() || null,
                            phone: jquery__WEBPACK_IMPORTED_MODULE_6__('.phone').html() || null,
                            body: jquery__WEBPACK_IMPORTED_MODULE_6__('.body').html() || null,
                            templatePreview: templatePreviewImage
                        };
                        _this.ResumeJsonService.getCoverJsonRef(user.uid).set(_this.CoverJson).then(function (res) {
                            console.log(res);
                            resolve();
                            _this.spinner.hide();
                        })
                            .catch(function (err) { return reject(); });
                    }
                });
            });
        });
        // console.log(user.);
        // this.ResumeJsonService.getResumeJsonRef().push()
    };
    CoverEditorComponent.prototype.download = function () {
        return __awaiter(this, void 0, void 0, function () {
            var document, pdf;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        document = jquery__WEBPACK_IMPORTED_MODULE_6__('.document')[0];
                        pdf = new jspdf__WEBPACK_IMPORTED_MODULE_5___default.a('p', 'mm', [216, 279]);
                        return [4 /*yield*/, html2canvas__WEBPACK_IMPORTED_MODULE_4___default()(document, { backgroundColor: 'red' }).then(function (canvas) {
                                console.log(canvas);
                                try {
                                    // pdf.addPage(216, 279);
                                    console.log(canvas.toDataURL('image/jpeg', 1.0));
                                    pdf.addImage(canvas.toDataURL('image/jpeg', 1.0), 'JPEG', 0, 0, 216, 279);
                                    if (!jquery__WEBPACK_IMPORTED_MODULE_6__('.document')[1]) {
                                        pdf.save('test.pdf');
                                    }
                                }
                                catch (e) {
                                    alert('Error description: ' + e.message);
                                }
                            })];
                    case 1:
                        _a.sent();
                        if (jquery__WEBPACK_IMPORTED_MODULE_6__('.document')[1]) {
                            html2canvas__WEBPACK_IMPORTED_MODULE_4___default()(jquery__WEBPACK_IMPORTED_MODULE_6__('.document')[1], { backgroundColor: 'red' }).then(function (canvas2) {
                                console.log(canvas2);
                                try {
                                    pdf.addPage(216, 279);
                                    pdf.addImage(canvas2.toDataURL('image/jpeg', 1.0), 'JPEG', 0, 0, 216, 279);
                                    pdf.save('test.pdf');
                                }
                                catch (e) {
                                    alert('Error description: ' + e.message);
                                }
                            });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    CoverEditorComponent.prototype.sendResumeByEmail = function () {
        return __awaiter(this, void 0, void 0, function () {
            var document, pdf;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.spinner.show();
                        document = jquery__WEBPACK_IMPORTED_MODULE_6__('.document')[0];
                        pdf = new jspdf__WEBPACK_IMPORTED_MODULE_5___default.a('p', 'mm', [216, 279]);
                        return [4 /*yield*/, html2canvas__WEBPACK_IMPORTED_MODULE_4___default()(document, { backgroundColor: 'red' }).then(function (canvas) {
                                try {
                                    // pdf.addPage(216, 279);
                                    pdf.addImage(canvas.toDataURL('image/jpeg', 1.0), 'JPEG', 0, 0, 216, 279);
                                    if (!jquery__WEBPACK_IMPORTED_MODULE_6__('.document')[1]) {
                                        //  pdf.save( 'test.pdf');
                                        // console.log( pdf.output('datauristring'));
                                        // const byteArray = Base64Binary.decodeArrayBuffer(pdf.output('datauri'));
                                        _this.ResumeJsonService.sendResumeByEmail({ to: _this.email, attachement: (pdf.output('datauristring')) }).subscribe(function (res) {
                                            console.log(res);
                                            _this.spinner.hide();
                                        });
                                    }
                                }
                                catch (e) {
                                    _this.spinner.hide();
                                    alert('Error : ' + e.message);
                                }
                            })];
                    case 1:
                        _a.sent();
                        if (jquery__WEBPACK_IMPORTED_MODULE_6__('.document')[1]) {
                            html2canvas__WEBPACK_IMPORTED_MODULE_4___default()(jquery__WEBPACK_IMPORTED_MODULE_6__('.document')[1], { backgroundColor: 'red' }).then(function (canvas2) {
                                console.log(canvas2);
                                try {
                                    pdf.addPage(216, 279);
                                    pdf.addImage(canvas2.toDataURL('image/jpeg', 1.0), 'JPEG', 0, 0, 216, 279);
                                    //  pdf.save( 'test.pdf');
                                    _this.ResumeJsonService.sendResumeByEmail({ to: _this.email, attachement: (pdf.output('datauristring')) }).subscribe(function (res) {
                                        console.log(res);
                                        _this.spinner.hide();
                                    });
                                }
                                catch (e) {
                                    _this.spinner.hide();
                                    alert('Error description: ' + e.message);
                                }
                            });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    CoverEditorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cover-editor',
            template: __webpack_require__(/*! ./cover-editor.component.html */ "./src/components/cover-editor/cover-editor.component.html"),
            styles: [__webpack_require__(/*! ./cover-editor.component.scss */ "./src/components/cover-editor/cover-editor.component.scss")]
        }),
        __metadata("design:paramtypes", [src_services_json_resume_service__WEBPACK_IMPORTED_MODULE_1__["JsonResumeService"],
            src_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"]])
    ], CoverEditorComponent);
    return CoverEditorComponent;
}());



/***/ }),

/***/ "./src/components/cover1/cover1.component.html":
/*!*****************************************************!*\
  !*** ./src/components/cover1/cover1.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"document row\">\n  <div class=\"col p-0\">\n    <div class=\"content-container\">\n      <div class=\"content p-5\">\n        <div class=\"headers clearfix\">\n          <div class=\"float-left\">\n              <h4 class=\"editable mb-1 name\" [innerHtml]=\"CoverJson?.name\">Jhon Doe</h4>\n              <h6 class=\"editable jobTitle\" [innerHtml]=\"CoverJson?.jobTitle ? CoverJson.jobTitle :'Professional Title'\">Professional Title</h6>\n              <div class=\"mt-4\">\n                  <p class=\"font-italic\" contenteditable=\"false\">To</p>\n                  <h6 class=\"editable m-0 companyDetails\" [innerHtml]=\"CoverJson?.companyDetails ? CoverJson.companyDetails : 'Company Details'\">Company Details</h6>  \n                  <h6 class=\"font-italic editable date\" [innerHtml]=\"CoverJson?.date\">27 December, 2018</h6>\n              </div>\n          </div>\n          <div class=\"float-right\">\n            <p><i class=\"fa fa-envelope-o mr-2\"></i><span class=\"editable email\" [innerHtml]=\"CoverJson?.email ? CoverJson.email : 'test@email.com'\">test@email.com</span></p>\n            <p><i class=\"fa fa-phone mr-2\"></i><span class=\"editable phone\" [innerHtml]=\"CoverJson?.phone\">01234567</span></p>\n          </div>\n        </div>\n        <div class=\"body mt-4\">\n          <p class=\"editable\">Dear Sir/Madam,</p>\n          <p class=\"editable mt-2 body\" [innerHtml]=\"CoverJson?.body ? CoverJson.body : 'Lorem Ipsum is simply dummy textof the printing and typesetting industry.'\">\n            \n          </p>\n\n        </div>\n        <div class=\"footer mt-5\">\n          <p contenteditable=\"false\">Sincerely,</p>\n          <p class=\"editable mt-4\" [innerHtml]=\"CoverJson?.name\">Jhon Doe</p>\n        </div>\n        \n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/components/cover1/cover1.component.scss":
/*!*****************************************************!*\
  !*** ./src/components/cover1/cover1.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/components/cover1/cover1.component.ts":
/*!***************************************************!*\
  !*** ./src/components/cover1/cover1.component.ts ***!
  \***************************************************/
/*! exports provided: Cover1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cover1Component", function() { return Cover1Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_services_json_resume_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/services/json-resume.service */ "./src/services/json-resume.service.ts");
/* harmony import */ var src_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/services/auth.service */ "./src/services/auth.service.ts");
/* harmony import */ var _cover_editor_cover_editor_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cover-editor/cover-editor.component */ "./src/components/cover-editor/cover-editor.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Cover1Component = /** @class */ (function () {
    function Cover1Component(ResumeJsonService, authService, injector) {
        this.ResumeJsonService = ResumeJsonService;
        this.authService = authService;
        this.injector = injector;
        this.coverEditorComponent = this.injector.get(_cover_editor_cover_editor_component__WEBPACK_IMPORTED_MODULE_3__["CoverEditorComponent"]);
    }
    Cover1Component.prototype.ngOnInit = function () {
        var _this = this;
        this.$subscription = this.ResumeJsonService.getCoverJson().subscribe(function (res) {
            console.log(res);
            _this.CoverJson = res;
        });
        // this.authService.getUserDetails().subscribe(
        //   (user) => {
        //     if (user) {
        //       console.log(user);
        //       this.ResumeJsonService.getResumeJsonRef(user.uid)
        //       .valueChanges()
        //       .subscribe(async res => {
        //         const jsonResume = res as ResumeJson;
        //         this.coverJson = {
        //           name: jsonResume.basic.name,
        //           jobTitle: jsonResume.basic.jobtitle,
        //           date: this.DateNow,
        //           email: jsonResume.basic.email,
        //           phone: jsonResume.basic.phone
        //         };
        //       });
        //     }
        //   }
        // );
        //  this.ResumeJsonService.getResumeJson().subscribe(res => {
        //    console.log(res);
        //     this.coverJson = {
        //       name: res.basic.name,
        //       jobTitle: res.basic.jobtitle,
        //       date: this.DateNow,
        //       email: res.basic.email,
        //       phone: res.basic.phone
        //     };
        //  });
    };
    Cover1Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cover1',
            template: __webpack_require__(/*! ./cover1.component.html */ "./src/components/cover1/cover1.component.html"),
            styles: [__webpack_require__(/*! ./cover1.component.scss */ "./src/components/cover1/cover1.component.scss")]
        }),
        __metadata("design:paramtypes", [src_services_json_resume_service__WEBPACK_IMPORTED_MODULE_1__["JsonResumeService"],
            src_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]])
    ], Cover1Component);
    return Cover1Component;
}());



/***/ }),

/***/ "./src/components/dashboard/dashboard.component.html":
/*!***********************************************************!*\
  !*** ./src/components/dashboard/dashboard.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar2></app-navbar2>\r\n  <!-- <p>\r\n  <button class=\"btn btn-info\" (click)=\"logOut()\">Logout</button>\r\n  </p> -->\r\n  <div class=\"container mb-5\">\r\n       <div class=\"alert alert-info alert-dismissible fade show\" role=\"alert\">\r\n        <strong>Welcome to Dashboard!</strong> You should check in on some of those fields below.\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col\">\r\n              <ul class=\"nav nav-tabs\">\r\n                  <li class=\"nav-item\">\r\n                    <a class=\"nav-link\" routerLink=\"/dashboard/resume\" routerLinkActive=\"active\" >Resume</a>\r\n                  </li>\r\n                  <li class=\"nav-item\">\r\n                    <a class=\"nav-link\" routerLink=\"/dashboard/cover\" routerLinkActive=\"active\">Cover Letter</a>\r\n                  </li>\r\n                  \r\n              </ul>     \r\n          </div>\r\n        </div>\r\n        <router-outlet></router-outlet>\r\n\r\n  </div>\r\n<app-footer></app-footer>\r\n"

/***/ }),

/***/ "./src/components/dashboard/dashboard.component.scss":
/*!***********************************************************!*\
  !*** ./src/components/dashboard/dashboard.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/components/dashboard/dashboard.component.ts":
/*!*********************************************************!*\
  !*** ./src/components/dashboard/dashboard.component.ts ***!
  \*********************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/services/auth.service */ "./src/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent.prototype.logOut = function () {
        var _this = this;
        this.authService.logout().then(function (res) {
            console.log(res, 'logut');
            _this.router.navigate(['/home']);
        })
            .catch(function (err) { return console.log(err); });
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/components/dashboard/dashboard.component.scss")]
        }),
        __metadata("design:paramtypes", [src_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/components/faq/faq.component.html":
/*!***********************************************!*\
  !*** ./src/components/faq/faq.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar2></app-navbar2>\r\n<div class=\"container\">\r\n  <section>\r\n    <div class=\"row mt-3 mt-5\">\r\n      <div class=\"col-lg-1\"></div>\r\n      <div class=\"col-lg-10\">\r\n        <a href=\"#\">\r\n        <div class=\"divider\">\r\n          <div class=\"row\">\r\n            <div class=\"col-lg-2\">\r\n              <img src=\"../assets/images/bookmark-alt-flat.png\" height=\"100\" width=\"100\" alt=\"\">              \r\n            </div>\r\n            <div class=\"col-lg-10\">\r\n              <h5>Getting started with your resume</h5>\r\n              <h6>Real advice from the Enhancv Customer Success team on editing your resume for success</h6>\r\n              <div class=\"row mt-3\">\r\n                <div class=\"col-lg-1\">\r\n                  <img class=\"faq-image-1\" src=\"../assets/images/XpgonN0X_400x400.jpg\">\r\n                </div>\r\n                <div class=\"col-lg-11\">\r\n                  <h6 class=\"ml--15 fs-12\">22 articles in this collection</h6>\r\n                  <h6 class=\"ml--15 fs-12\">Written by Bill Gates</h6>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </a>\r\n      </div>\r\n      <div class=\"col-lg-1\"></div>\r\n    </div>\r\n    <div class=\"row mt-3 mt-5\">\r\n        <div class=\"col-lg-1\"></div>\r\n        <div class=\"col-lg-10\">\r\n          <a href=\"#\">\r\n          <div class=\"divider\">\r\n            <div class=\"row\">\r\n              <div class=\"col-lg-2\">\r\n                <img src=\"../assets/images/bookmark-alt-flat.png\" height=\"100\" width=\"100\" alt=\"\">              \r\n              </div>\r\n              <div class=\"col-lg-10\">\r\n                <h5>Getting started with your resume</h5>\r\n                <h6>Real advice from the Enhancv Customer Success team on editing your resume for success</h6>\r\n                <div class=\"row mt-3\">\r\n                  <div class=\"col-lg-1\">\r\n                    <img class=\"faq-image-1\" src=\"../assets/images/XpgonN0X_400x400.jpg\">\r\n                  </div>\r\n                  <div class=\"col-lg-11\">\r\n                    <h6 class=\"ml--15 fs-12\">22 articles in this collection</h6>\r\n                    <h6 class=\"ml--15 fs-12\">Written by Bill Gates</h6>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </a>\r\n        </div>\r\n        <div class=\"col-lg-1\"></div>\r\n      </div>\r\n    <div class=\"row mt-3 mt-5\">\r\n        <div class=\"col-lg-1\"></div>\r\n        <div class=\"col-lg-10\">\r\n          <a href=\"#\">\r\n          <div class=\"divider\">\r\n            <div class=\"row\">\r\n              <div class=\"col-lg-2\">\r\n                <img src=\"../assets/images/bookmark-alt-flat.png\" height=\"100\" width=\"100\" alt=\"\">              \r\n              </div>\r\n              <div class=\"col-lg-10\">\r\n                <h5>Getting started with your resume</h5>\r\n                <h6>Real advice from the Enhancv Customer Success team on editing your resume for success</h6>\r\n                <div class=\"row mt-3\">\r\n                  <div class=\"col-lg-1\">\r\n                    <img class=\"faq-image-1\" src=\"../assets/images/XpgonN0X_400x400.jpg\">\r\n                  </div>\r\n                  <div class=\"col-lg-11\">\r\n                    <h6 class=\"ml--15 fs-12\">22 articles in this collection</h6>\r\n                    <h6 class=\"ml--15 fs-12\">Written by Bill Gates</h6>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </a>\r\n        </div>\r\n        <div class=\"col-lg-1\"></div>\r\n      </div>\r\n    <div class=\"row mt-3 mb-5\">\r\n        <div class=\"col-lg-1\"></div>\r\n        <div class=\"col-lg-10\">\r\n          <a href=\"#\">\r\n          <div class=\"divider\">\r\n            <div class=\"row\">\r\n              <div class=\"col-lg-2\">\r\n                <img src=\"../assets/images/bookmark-alt-flat.png\" height=\"100\" width=\"100\" alt=\"\">              \r\n              </div>\r\n              <div class=\"col-lg-10\">\r\n                <h5>Getting started with your resume</h5>\r\n                <h6>Real advice from the Enhancv Customer Success team on editing your resume for success</h6>\r\n                <div class=\"row mt-3\">\r\n                  <div class=\"col-lg-1\">\r\n                    <img class=\"faq-image-1\" src=\"../assets/images/XpgonN0X_400x400.jpg\">\r\n                  </div>\r\n                  <div class=\"col-lg-11\">\r\n                    <h6 class=\"ml--15 fs-12\">22 articles in this collection</h6>\r\n                    <h6 class=\"ml--15 fs-12\">Written by Bill Gates</h6>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </a>\r\n        </div>\r\n        <div class=\"col-lg-1\"></div>\r\n      </div>\r\n  </section>\r\n</div>\r\n"

/***/ }),

/***/ "./src/components/faq/faq.component.scss":
/*!***********************************************!*\
  !*** ./src/components/faq/faq.component.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".divider {\n  border: 1px solid #d4dadf;\n  width: 100%;\n  padding: 30px;\n  background-color: white;\n  border-radius: 4px; }\n\n.faq-image-1 {\n  width: 100%;\n  border-radius: 50%; }\n\n.ml--15 {\n  margin-left: -15px; }\n\n.fs-12 {\n  font-size: 12px; }\n\na {\n  text-decoration: none; }\n\n@media only screen and (min-width: 320px) {\n  .faq-image-1 {\n    width: 20%; }\n  .ml--15 {\n    margin-left: 0px;\n    margin-top: 5px; }\n  .fs-12 {\n    font-size: 10px; }\n  h6 {\n    font-size: 0.7rem; } }\n\n@media only screen and (min-width: 375px) {\n  .faq-image-1 {\n    width: 15%; }\n  .ml--15 {\n    margin-left: 0px;\n    margin-top: 5px; }\n  .fs-12 {\n    font-size: 10px; }\n  h6 {\n    font-size: 0.7rem; } }\n\n@media only screen and (min-width: 425px) {\n  .faq-image-1 {\n    width: 10%; }\n  .ml--15 {\n    margin-left: 0px;\n    margin-top: 5px; }\n  .fs-12 {\n    font-size: 12px; }\n  h6 {\n    font-size: 1rem; } }\n\n@media only screen and (min-width: 768px) {\n  .faq-image-1 {\n    width: 5%; }\n  .ml--15 {\n    margin-left: 0px;\n    margin-top: 5px; }\n  .fs-12 {\n    font-size: 12px; }\n  h6 {\n    font-size: 1rem; } }\n\n@media only screen and (min-width: 1024px) {\n  .faq-image-1 {\n    width: 130%; }\n  .ml--15 {\n    margin-left: -15px; }\n  .fs-12 {\n    font-size: 12px; }\n  h6 {\n    font-size: 1rem; } }\n"

/***/ }),

/***/ "./src/components/faq/faq.component.ts":
/*!*********************************************!*\
  !*** ./src/components/faq/faq.component.ts ***!
  \*********************************************/
/*! exports provided: FAQComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FAQComponent", function() { return FAQComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FAQComponent = /** @class */ (function () {
    function FAQComponent() {
    }
    FAQComponent.prototype.ngOnInit = function () {
    };
    FAQComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-faq',
            template: __webpack_require__(/*! ./faq.component.html */ "./src/components/faq/faq.component.html"),
            styles: [__webpack_require__(/*! ./faq.component.scss */ "./src/components/faq/faq.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FAQComponent);
    return FAQComponent;
}());



/***/ }),

/***/ "./src/components/footer/footer.component.html":
/*!*****************************************************!*\
  !*** ./src/components/footer/footer.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer>\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-3 col-sm-6\">\r\n            <div class=\"footer-title mt-2 mb-4\">Get started</div>\r\n            <ul class=\"list-unstyled\">\r\n              <li >\r\n                <a  class=\"footer-arrow-link\" routerLink=\"/resources\" routerLinkActive=\"active\" >Create Resume &nbsp;→</a>\r\n              </li>\r\n              <li><a routerLink=\"/pricing\" routerLinkActive=\"active\" >Pricing</a></li>\r\n              <li><a routerLink=\"/terms\" routerLinkActive=\"active\" >Terms of Service</a></li>\r\n              <li><a routerLink=\"/privacy\" routerLinkActive=\"active\" >Privacy Policy</a></li>\r\n            </ul>\r\n        </div> \r\n        <div class=\"col-md-3 col-sm-6\">\r\n            <div class=\"footer-title mt-2 mb-4\">Goodies</div>\r\n            <ul class=\"list-unstyled\">\r\n              <li><a routerLink=\"/faq\" routerLinkActive=\"active\"  target=\"_blank\">FAQ</a></li>\r\n              <li><a routerLink=\"/resources\" routerLinkActive=\"active\"  target=\"_blank\">Resources</a></li>\r\n              <li><a routerLink=\"/successful-resumes\" routerLinkActive=\"active\" >Successful Resumes</a></li>\r\n              <li><a routerLink=\"/blog\" routerLinkActive=\"active\"  target=\"_blank\">Blog</a></li>\r\n            </ul>\r\n        </div>\r\n        <div class=\"col-md-3 col-sm-6\">\r\n            <div class=\"footer-title mt-2 mb-4\">About us</div>\r\n            <ul class=\"list-unstyled\">\r\n              <li><a routerLink=\"/about\" routerLinkActive=\"active\">Company</a></li>\r\n              <li><a routerLink=\"/careers\" routerLinkActive=\"active\">Careers</a></li>\r\n            </ul>\r\n        </div>\r\n        <div class=\"col-md-3 col-sm-6\">\r\n            <div class=\"footer-title mt-2 mb-4\">From the blog</div>\r\n            <ul class=\"list-unstyled homepage-blog-latest-short\">\r\n              <li><a class=\"footer-arrow-link\" routerLink=\"/read-more\" routerLinkActive=\"active\" target=\"_blank\">Read more &nbsp;→</a></li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n    <div class=\"row mt-5\">\r\n      <div class=\"col-4\">\r\n          <p class=\"copyright\">© 2018. All rights reserved.</p>\r\n      </div>\r\n      <div class=\"col-4\">\r\n          <div class=\"social\">\r\n          \r\n              <a href=\"https://facebook.com/\" class=\"social-link px-2\"><img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAABjJJREFUeAHlW29IXWUYf96zq1ebbunmJMc2WrUiN6JkMFJrCIs+iGyDjeVibFqTKKICEfrQ9xHNsA/D1dyodlcGKwZBFESkVvuwYpVC2xfdymiaOiz/XK/n7fmd4zn337kez7nnzJvnhcN5/z/P73fe/+9zBPnsao91ldFM7AkWUymFfFBK2kYk15OgYpKiWBMv5CRJmiQSo0LQNSHFbxzfTwWhb3vONo34qaLwo/KaxnerGGQjP3sY8HZ+u5TDVAj6lYn5ip9Ib+T5K17r61KxdDUams4Uj83GjpOUTQz64fQc2ccwGQMkRFdpOHT6Ulczt5jsXdYE7D569u5YNPoKf+WXGXhJ9irZ18BEjHOL6Ajl57/9zbljE/YlMudwTYCUUtQ2dh5lRU5IkmWZRfiXIkjw+CDbeiIt54QQ0o0kVwTUHOncTDEZ4S9e7Uao12W4RfRRSDT2vt9yw2ndjgmoPfxetSpjF3nU3uBUmK/5Bd1SRGh/z/nn+pzIUZxkrjl8uklV57/OOfAAwR8EukFHJ5iW1AIOdHevGv5s/E0e4V91Uvmy5RWivWJvSesnBw/O2+lgS4AG/tPxi0xxg11luZUuLlXsK9lvR0LITmnty/sIvmRNIVVsKKaiu8JUWBDiaT79m1z++SZNTc/ZqZqSLht03em1lISkYLq0hGT0J6mqZxKiPPGWla6mA0/voCd33ksby9fY1vls68c0+Ie76V4oSnPv+eNdmYRkHAQx2ktVnspU0G38U9UP0EcnD1Fj/SNLAu9WjlEOGIDFCKe+LQnAPK9NdSTzUwtkE67bdR+98WIdhfNte142YlLKynxg0dYuKSkIphGAFR4WOV5PdWuKwtTaXGuhwh2IwppFW7ilb8rSCMDy1o8VXv3uh6h4dfgOoLUWAUz60j05PYkAbGywtk/O4k2obtdWbyrKqhZxQscYrySJAOzq/NjY5Oetovs3r4tLXSYfsOk717gC5jSo7edn5ob82NJuumctXXjrUFyqhY/HHnrng++p58ogjd2eJlVVzVxzsbjfjHTpwVa6tCBvi3GeYLYAHGb4AR56FvMix879ODBM3V/8Qn+OTNJsNEYAbTx2ZZ2kA6N2cLNQyCQAJzlOKnKStyBsP+3dGHa30HGih5k3AatGAM7wmBlfjrEg1Gp5ayqz4JmejaVG+RYGVv3c0lwH4AAzaE7HvNAF5J6gwefdrYZZ4NxenZn7iyPMGSFbMnZsK6fydUVmNVs3ldKRvY+ZYSvPdz8N0Ze9162S6IerN+mfqahlmvtIIZWCvPKQfmnhHXgohJ0e1v1O3OOPbiE8Vm7fSx/6QABj5gsbdIFKK6G5EqeqksYmpvxSp1LBdZVftXtR79jtKZpnEvxwwK7wlMB3dbnrRsf/9U05YOcuwBeVOexGxnxr/oxarle0W9qcJsC/FgDsinlFnaMkjE74SABfz4vqZzpnuSl4evSFg12+tzMpraqsoPbX682wlefC51fpVORyWpLKHdU/J6J8Dq0ZJ3i6WYfOvPc29V7KII4y/oI11Yl7GDt3AVhmBNQxdp4FxGhA4TNsMapwf70WVAKAXVkwSAokB8COvUB/INHroPsVmKJxX4gP2YFhgzEzdgV2eNwX2BQtWA6YgR1dgB3s8ILmdMwGAZGgweePrmHWCIAFJjeJgaCQAKyG1elCC2DobIEZFAISsZoEwPyUmWELzJXtgBFYDZQmAfpdmegwElbuW3QY94LAaBKAAGxvdfNThFaeAzZgTESWRIBueCzbEjOsLL9sSzWuTiIAYHXDY7a9XWGO+34fsKXCSiNAs7pmw2M+0LmVmvl/GwYWxmRlUZ5GAEDC6hqGxzw3en0ftQwciiiwZLIktyQAWsLqWijihWXQ2FORwLCYBXn85DKD2OrGzpPZGkmXri2kqu0bM0jQowd/H6frQ38vmsdxIhtN90Va3JvKQuBKN5bO2AUMtmFtDatrXj62G3E5/4a5/BIsxYHDtgskgtWNp2E/7O09QqKM7Pwiij6/mHF0av2OCEDhQP8yAwK02SEkdmJhgXAuOOgiWKfFRvtMejpuAUZFgf5tziAB78D+OJlIAvyB/XU2lQiEA/nztBURiMv13+f/A9HNaO0I450FAAAAAElFTkSuQmCC\" alt=\"Facebook logo\"></a>\r\n            \r\n              <img  class=\"px-2\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAGXlJREFUeAG1WwuUXVV5/s/j3pl7J5PMkMwAKgQkTchLEiLLuPKQh3ShaERbaQ1LC2lJ29WFJrIiaqvFrq5WYEEQukobW/BRowtrKsESC8g7CxAiKCQazEMCgZCJmZncyczce889p9/3/3ufeychQCDsyb17n733/+////7H3ufck0De5nLFhx7qyQJZXA/CmVkQTpMsm5qE4SQJgs40DDsDrB+maSXLskqcpvvQ/1yQpVsLWbo5yOShmzcs7ns7ReT6x7xcec598+qxLE0lPL8RhrPSMAigrKCNtTJJw8jqANeQIGykWkdpprIAEIKCT5ZFafosZt1TCNK119997qZjLewxA+CaJY90/n5gaHkjiJalUTCjAeWSQiyNIFDFCQAXa4SBAgBQ4AymDqYoCFSaJcKAB4HtuF6XkHWWbQkbjVsndo1bc9X6hRWjfmvfbxmAq8++vytJhlckEn4WynXX41hSp3TmrG7Wh+IAJY3gCawJCFZXEFDD0t7qqBv4ZHmfAtJgXyoF1JjbH0t2UxyXb7z6gXMG3goEbxoAxGzw9/N/cikseU0jkJ6EilNhaEUXN0XZhif4MbW+AUBPsMXhCfij+0dZKgHCgTWv4wSwQmm2Q/RZ22qORZn0AairvvbYR74VBMgYb6K8KQC+Pu/Ok2thujYJZAEV5KcemdI5CLgmGFRe3d5ZPQeG89GnytPlaVnWVNa1A3hCEYDw2kLCQGLO0NBwAMWZbCym4dIvbvrorqPFgFnpqMq17/3RglTqT2RZusATanKDsnRnc2ngigbBoIKa4ejvrihouLZ8AADRTgGI0vKLvJQKc5QOtFo7BmTvm7pUCkPUn6BsrvsNV0cFwL+89/vLsqxxH5TqbQpEqzWwoBPJ6ckrWo2Orl2qGHFxVtbaxz2tzAQIKkfv+ZGH9uX0phtzBgu7uRb49lI2yqgDb/ArX+615t/+ydujge3V62oSrBwOilIPIkFelqwloWnyQ1xbghubB2yMoWI5gR5DqyuI1AAaMu7NzQ0MdfEGcgDdHcpyFzDX5zzmh7rlBozp3KwhBXzKWU0Kkq7uPq191cU/vJiWec3yuh5A5Ye2D69Ls3QlRS0IeEIYIqeyO/aauSGs6WWJjdZmsQyPOMa4Kqk1PcFdo2by40ezP/nTq4y8BSjnPRjzKVQX4Dr4EABzF1lZgcyUXcdf4+t1AahuP3AdmC+hwn5RIGxCHcqYRqUiziqHDvskR0C4nRkgEFyTHi1JABqqt19LaXJgyNGjwpa1sf/Q6k53goEmZK7+FrK/TnlNANbNvWVZIYXlibAmISxpa0oMQakIhaYgKnA+DQ1MtHGzNLcy/mlGd4rqdse2ZnmOATz82TnAvMPkJ2O2yJe1XmgIECAvlMlm3hfDG7D/rFw3d81r5oQjAnDXnFsWZGlwC5Unut69bGknDEDholSOLmt7Nbcq+zBug3wLYyy7MdR0/0KCuMXH6Pw2eMg8B46FEegAmLUBFo1CARwglI0hWoS8Goq4TtPGLXdAF0r8aqWpT8voPfO+cfJwEj9Rl6A3YcILYk16NSS+xLWZCIcDQOPOAb7mtjXxlE5557TxMr6nXTq6i1JoiyQqhBKzjgCaPwRxdbWoWxzANBqZJNWGNGop6kSGBhI5sG9EXtp6QPbtrFgyVO8zENsadTMQFMcNFI7LiRrLG401ANlbipOzzt/0uV0tamozPrQDFg/unXPj2kKW9AZQMsCtXI1SQthD0SLzuqaDQDomRDL/T0+TeReeJJ0T2w5le0yuK7+vyqb/fUEe+8EOGfn9qHqCZ6yOADnpFfYn6gkaClmjV5J0LXRbdOiJ8VCd5OEzbrhsNJVb/VbHmlY360eujtX63ArpITMuOEmWfPkMKZYOw9PLd0zr2kgid/7jU7L1/3bl4Ulj0Pp0fyrNUGDY+pBgzmoPG8sW/XLVba3CjAHgqTmru4bT2nP1LOqhe1O5puIEguGAvgyK47yPnVjm/+UsWXT59FaeeXuovypDg3UZriQycjBBPOJ0CI/JUAvDgIGKokkWfQH68E/DpL0jlnJnLOMmFGRc96t71MPf/LU89u/PqpJUmsp7pa1OpZTyXODACNK+clicOvfplfkN1BiTJenoCgRoDwPTkh5bLkgpLJp6DY/grce0CyYfpvyvH94jP7/jBdn5zICMDiOWQccDEwsPSeRAxX1bsxX8VxOmzkKoYTdg0W0R7XI5klPe0y1nfewkmb7oBDdLdO2h3/XLjp/uhLzcCs3izu2xC5DPGPl7knR4BTqv9kxyD/jNgms6Rwfrz1cl6B4J2mBpc29a2XuBWh/X9IS4uyyfvvNjUnBuXx9NZN1XN8mWB1/JEyMXYXLU8zxWYpuxapYHlC2ycS6vuTs4x9Bdg9cE3XaQVKYvPl4+8Q/zpNButqsjHL770Tsk2X9QFabhigAi9wi0zQvMO+Al/e0TCpNP33iVPk/It8HGYG05FupmAkECVA/wSPq4Yhx55nOXTs2Vp/Drv/qkbL9/d75F+VMet0c7ACE267yFtcMOx227tP3eToDWxzF/K8x2F5JqZ1dBPYNrrP/KE1xSCw2gssDaxRblCYTKj/U1fQNd99fdGBxd7siRxVwpZPVlto2AACbw8clhGkqvnb9woWlLTnOUItsf3C077ntBr7nooQcgVRYxrgqj5rWdAnEG4LWe9EjHMas9aBeumCFfWP9BWXXXH8q5l0/TNXbc/6Ku6QWgLFzXEqHVxaAZEhoauLYcoZ6wzNMqAM/P/so8PH6bYfGJwwQ8QBmCqU8scer2V/R1njpBypPKnof8et1v1WN84iGtKumsbNZs9ikgsEiuMNrss4cc1iaIvSeVZf6fvFvXoQEWXn66TOiOVTau6QtlGQ+ZTH7mKhdbZjnt10Sr3UjE0JU6k14DKQtrSwspmo5ON3woYXUiGWLeiu2wvacf566t2vf0HkWf9MwTtITQ9SBLHRVRDvjwg0rjc/z0LjlpVrd0TrLsXtlXlRee7Zc9W/pzvgSk4Jd1vQShqH0N4Zqt5fjTJ8ruHX2WB7C+94gCDYdr+zgvQV7IwsZS0G9SACDu+U3tW9mObevOAAXG9ZbygZH9I5JWRrEAHmgQAQ0TFystgCYYmHfRZFl42VSZcELTe3JGaAzuGZZHbntOfrF+l0Q4Au/fNiCb73peZn54sk775fe3SvWViuahrFIXrl06zmTp6G03L2QucAC08vbGVU/AAHZy6AwPeHnRl3pqI9VZKWQu1GFhCK1yOx28OxF97gbMD+Xj2nPe1f5R1ZlxxkaTnqayG5NxE0ty0fUL5B0zx3pOzsQ1CMyFX5ojc5ecLD++cqMc3Dcqd3/lUfnFt7dIiHuGgzv7oRzP+2bh6sBoDgBlUs/DuCmJZM7dAJ/cA+DVMXJBWIA5omQWdQff4cVQGHeP1JwtuJlbwGLaJxfLAdwFQvNDFbt+oNqyY5i7NekTZPCifPrb5x2mPLfNfdsH9cN2ayFQpOmaVFAlDmzrl6Gd+9XDVCkoQvvUB6s5WVzUdKbzNQH6ewKeD6g48xplh/JINhIUkiCJK4tjKdRmBllB45SWj+si2Kws67MDgKjrY3me1OgecQsASQUAADC6vz2XNeHUGyDTkhsWSefxTZcfhsc8eP1Tsu1nL0pSs7kR+E05713ygSvnSrnbvIs0S65fJOsv2yBZAotjDSrtrcpsxLV9CYtQhdamspirVkfbewXn6U5GI/uSNmaGYaExLYDWQIQxAOsaUnpXpe7DBxR2S+zvtDza5MPb3dYzuD8nMAnN/PgUOX7mRL+c7H78ZVn7Rz+RHRt2SFiraSxTwADtHRt26tjun7+czyftzIu4xeGMD34lPO7iWcTf9eHWMZ9LmcxjaXHzVj+oCRGur9aljgwB1lFjGh/bTrWJsCD/dBAL6j5qsVaEG7HocROCRDFt4Qr2cCqRA4a5BIGfM5bN9rNklJb/0gOSDgy7+WYdWo38SR8NDMmDX3xA53pC8ijjroNr6JbseFNZniF8oUyco16Amu6i3kIwQEOl/Ud1ZBi0JVMBW20Sre4Vzz0EXuEt6xl7TyBqviB5GPKquClCxHumd0vHCeP8NHnyusek0T+Mh5ZNvpyn5wtVyoTnHM71hTx6Z0xUWWyuMwotiq3SF0anegA8hDpoKIA/flOEVyPU6OWMbyKDCYhs1pPCoNDoDIiGfsw91EUwgTHDxKHWBTNaStH0q6IOEfhqGSrDBdUKqbxj9qR8VoLz+sv3blNajhMEPr2lW/trntdJT895CXOTEQprpWd2j7O+eZdZFla1pKOT8IuyKk39yIN86cUhlVbFMQ36mPubvngYiftNyTrJgQPEk0ozpbGoN+BnXqKoXWCOW+UxC+P+RgEyZO0hBLfL8qSWs8LuQcQ8wFWutgZ3HYLrC8OPfVw/Q3Ic3n1Axk+x/FHuKZkRKCH+mTw4MdKKruBBk/LjAxz1LPKGTtRE16UH4Jo7gIFAj0g6YyRBHA2hdB2ZH5MzTlSmdm+uoOC6ACAoJBXl7u4LmRNtRYsnRgzx5NgaJpxLl6QFdA3Grmt7ProNo4/0nGsy2Chvlf3tLtfn6Y70HlDOokz0RMqhez09GqFNfj7mQ/YpCBYK6uFBVK8EcTaRzDIKAEXVZcBIGaPO6tgmEUdxjfyAvBvTcR5ZqZwWJzZIk716t6m95XeOl3GFTKp8fuaLsfdXWnul8au6kMYX8qLVCQIVNMChWGsOcDJReY11Kso1aFBanXkOtcpP8LELSJRU4N9JBa400UTDMBgFSQFmAAEBQeEOzJZaGyC0egCFYEzqYpjDBbCSDP9qN0m1RKWCnPjBd8veDb/Rh6vmQ5jnQfCaQwjy6r1ghpDGl+Ffvagge6AVABAz7n2hTMxVtLCPc44hx6niVJ6FY/R6Fw4VhvC+HCE3yDhhIUpE08cM0WQb0Os4v8iAglEoCu8TYm3zbqnuOZDPm/KFc6SEx1t+F1AaWhU05t5IjoCnhMdfU75wdk5HHrXNL0nZJUnO90k5bEkCeAelRXm6OACCrF5+Ys22DwHqHBUa+0LEyXO0moLQQuBdRpnQXWD3HFn8ZucLhdDsr4cP26JUKQCy95uP+GlSOK4sp1+7REpdRQVBAXB3aqWsqgpybNo1H9G5nnDvmkcMJPDT7A6rc/fgmmHoXQjq8ndEGscpqVbOjee8AmHAOX4eXOi5MIgaWzk5B0FjxeKGfao00FL0PIIJ4sAVeLtuN3bTYR6gj6Ag4OB/PykjzzRDYfz8U2T2jy+Xng9Pl46CWZyWbSvgDQv0cWzC/FM9axkG7YEfbVIPo9WpdAm3ZFyLW1wAurzU8TAPykW65zMUaG1ncTWw6URDa7/mgcbWOCrVN2d4Ds741p2AqLEN3qzpSqyxUViiB2HWAkA4vs3AQT+TpBYyh8B4GCi7r1grk3+wXAon8IEFDHRch5xyzUWSXn2h1Hbb/X/xnd0StsQ859X3DMrLn/0+ohGCkzfDDvlJjaU1LNnZfFqcpVQQngoF1cLgYfGPPuqi3k3lzXsJQhQ1NsdRUHgojWtMJ3jJBKGgoFIBioGiNVMMgeAZASVpuQmZgP2ezNEdAgHuGCpwzW6HpW9AXvrUv0nvTZdIafa7SK2FCrdP6fWXY+rqMy/Kniv+S4J9Q3D/ptIqGr2Qf7T2hOZNltRxW44+VVSV9DkAspHQeS89gCUqJFkUFx+KO2/e0Nd/xQeeRSjrwT3jfu+8wKwOBMBgjDdUBpWJMuoaJ1F5FIrznEC8bI+IwCPDbsJdJe3fL69c9q/S8dH3SffyD0h8YldO39pIXh6Q/jUPytD6x/QBaAgX112Jbusm0qosKmNXh+vFupUDTnlzdZWZQOSAucwPCoKUxcmznTf/rA8RjI62xj3IArPpASxEmCFghV6Ba+8RGGv07/ODEnV3SjgBN6ADTJRWjDQnoCwAJpGDP3lIDv74USlMf4e0vWeyxD16CJWkryLVXz0v9d8+r3P5GiGe2FgbCpgJIQetR3MyBPCUmGv7Qpk0TwEgVZB2w3xKQc/QMYJBetRRW3oPaRUA8FsLos/TetzzWXiSo7sTDPYzJEhLYJLnt+kc/9U+51QZ2bhFKTVElAVoKADPFCjmFxiAMI3fbZODUFYTL6n4D3NDnaoiKy+lU4ujD/94GGODdmqf425iOQmFMvHkRz76QZ8mO3DSmvxJD1oCEseNtaRTz+66/pFNyJ5b1K0wqLPICO2QWyAQ09hS5nVJX9kFL8h/XZKOCxfrOJ8nMBxMCKCt9BTI2rkV2F8e0bkh5oftI44/5/HggpprltjPNuUwPl4WrukLZcn27jIaziONfkx+5YV+Iqdt6Nrx9cc3kd5CGw0Ac6siSOHoRm7PJNq6uDL2oCQy+sB9fn1pf9+ZUlp8Rj6P8/0nKA3nQPjbblPGrePA0Vh1dAqcWz/vJ7BuvHTOLF3TC6CyEDCC5+T063t6A8TGcU9wq6fNAejsjteAqJ8IKZGrlRFdSy3hPAHtkbvXSzY66vlI15V/Je0Lz8wtx/nkQ6G8V9g1LKH9zqKY54VlrWuzD9b39Oz367cvnCtdK/4mX5cyUBabYzxNB78Oc4IDhusWk/6OzvY1ngH3Ki1fu/eF2t+dh/vOQM7WmIz8HQBiJgQDJoAQfawxJtWqNPr2SNtZC5Q+wAuRpYXvl8KUybidPSjpgQFMBwgRaElHEDEzwOudAXnntWtzDdcftuN9NLRDzCF9OK5N2s+cIeMuvUQ6L/5jgKypS9etfPMGyXY/Y7JhHe+55K+Kc32NfwCCNaJidm3xb5+4W4kpj2+wzlbP6TpYyZ5Lq/yFGNfY07OEiyE5utvllNsdQEhrJkTpI38m5Ys+xemHlXRwEL8ZHJB0aEiy4WEcVwFcAqUYVwqoW55bjJ5EcNLg4zb8mhyUy1B8HA4747HL2CHq0AWG139PRu78ripIduo9aKgH4JKKsxAUN9bXMT6cGqx8Ok9gYwDg5JF/mnFZoxYjRpBtkcGpMAv3eat5NMGfHni0S+K5H5Rxn1mBZ2zN3wts5O35zqqjMvSdGyV56l5dgIpSJg0h9LAGpFaj4UMIb+0vK315y22tUh0GAA4ewcg/z3wY9QIqTUZUFi/9urYBQSYGCr0DXtHZJe3nfkLa3n8BLPbaP4C0CnA07XRwv1Qf/alU71sHz0KIMc/AOzXfoOUBoLVZWoEIC9HG9lXPvP4rMiQc+ca8k9Nq7QmpJ3pWVS8gCIBLlcUcA6bpFezxfdGJkyV61x9I2D1Rgg58YtAWihAUdQga9VfM1prMSMkaH9zVZTj/Sx03Fo1RhM8ATpL7pPHCNsn277C5LW5OMq+od33GPplxR9BSiPaGbW1nlT63aZd1NL8P8wA/NLx6zoKgltyH54NFvGCk3V55rSGE9xAOqpeoBmybt8A26IFWeiTWWZo/NAXwEqv7dKCjDhPtg3U9PesxCpGUO4P2Ni3vAfCKBzFzPJ++Fs4tr3x6Iy4OK0cEgDNHVp+xDO/z/KcHIMPvcyxeQdZeSH/io0bW9uIpifVRMye2b/GaIJkg1jZXHkufW5nrk8shbs7ZYxVHR4xkGgZ/Xlr5S+S0Vy+27quPae/oN868IU2SlbwgAKpwDgRcmuLAG1Lc/ekWyR4q6m6E2EeBm8DwgqVVwWZbFTWWysfTe4V1DSivNee5PEA5zOJgDcWVfxysLn/u6c9ztSOVZkY7woy2E09bVd2z/TQotcSmGGb6HcMjXHjw7s+HCEHC7q6PrQkGsq+SZnRbggXPsQ7FzizKDm9Vggbl+MSL9Lh1xSB5GDJ+eyNJU2l1d3ZpHx7wri+dcNoqkae170hfJtmRRl1/dvsno2rfzuvgAXhjHEJAabUMhPNhQQEzvA3hdFVKhogWVcjcHNSqik4kvb9Gnbdb5pPeuzbbOglvnVpewLVam7UBwEMSlFrd1nPqquDiH1rMku4I5Q0B4GlHbnnvMtwV4v1hPJbTcIA8LhxULbSpBKX0AhIU09hzOcraubOzP6zr3JtrQOkcNLxOgjm1LI7+urT88SPG/KGrHxUAJK7/x/wFSSNbJwleP9UCEeARpjg61DsAAVBiMaAsufFac0grQK5tvmDjSsd+tSqvmmWM0s7qinAc7cXjrU8U/uKxV832TQ5jW0cNAMmz7yw8uVpN1map+39DPOI6BLxn6Dx8qeVavcRPtBFOQ9FZ1nTfYxRFH9njMKO5Qa8Ya+4FTLxfsLEQRUuDzzxy2D4/humrXLwpAMgHFg7qty24FKpfk9WTHp8TDlNYOyg+vECBsPCwHpPIt+kFGjo+rgmMo/eAkIJdGvNB0IeAuKpw2cZvYX2yOeqivI6aqoUg+5+zu2oHkhXSSD8LULppGPV+9Qrv2BQaAxzDy5KmApTVZEdmJru6vGfgaq+VjdlU0PXD+jcVx8c3Bh9/IL+xIaejLW8ZAL9gdseSzqQysDxN02UAYoZtj2Zbr5Mp6pZkpdrZHOVzWJ+j5/ty1twSSnhrPKFrTfCx9c0fH70Qb6I+ZgC0rl373jnz8PPZUnjF+XCHWXgxERhYIqTVncGVRN0efT5pqqc4Zny1EA8FngXpPXhKurZ4yf36GKt1rbfaflsAaBUqu/1DPY1sdDGeBcxEaEyDMlMBx6QgxXsJgb2bgF9dKngEX4EweLQr+O/zshXHqM1R3P5QcPGGvlZ+x7r9/7Yx9HpoSVBkAAAAAElFTkSuQmCC\" alt=\"Instagram logo\">  \r\n        \r\n           \r\n              <img class=\"px-2\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAABpVJREFUaAXVWn1sVEUQn3331XttKXfcIVCkopU0ioJJG2vUpESqoiDYBKIRxGiE+I8mRIwRoxgN0SZiTPxHEoMoGFM0QhTRGgMJMcGWD9NQRPlQCuWr1x71rtf7fM+Zvd713b13d/uuX3SSS/djduY3u7PzZnfLYBRodovq7Av5GlVQF6kANcCgmoHqwnI5iWcAARWYH1Q4g+VTDNgBt+z55eIqNjhS9SivOKrYdd0VT0SXK4q6HIE+jFJkk5JCqLxVktheq8W+t/+ZqX6T4zm7aQNmfa/Kfb09G3D0awAqn+FiFGeOYQGsN7unebdeWsZCmX35a8IGrGxRLftCvhdUpm5WVXVmfrHF9TLGLjOVbX5c9ny2exVLiEgRMsC5w1cJoOxB4LUiQkfKg4YcAZBWDK71dBeSJRVicH7huxfBt48XeMKT1KW0J3XnR5jXgJIdvtWqkjg4Vi6TDxrpJN2EIR9fThfiA9XEl/kGj1sfs6wJr/XsNNJnaAAtHVmPA0qMBk1AW5hJlobBZz2/Z+vWGTC0YcnnxyTSZAMQrVOEwo1dl72xM/YAhcqhaHNDgScjkxOq7EliHDY7wwAe58cpVA5DEC+hEbWEUTsi7UL0hfX39ZwZS9epqbDAhvkyLHTbYG65BKf6E3DMF4MPT4Sga0BJ45KtANXlVujwx9NtqQK5ksvtrU59sdMrQOlBIfA3l0rwyh3OlCxTf2nc4WVuWFPthLvcViizSVDrscG6GhnannDDU3MdsGimDd6vLYOTTR6IKJhhGRBhHEpleC9fAUrMIrHo+UK5zaYFpfDmwlJ440gQPuoUT1maqhywq6HCAI5x07vHg7ClIwRoI8SGF0bDzAIOm72KEkC+ApRVFgJPo+e7cI8jbcFZev1umdLkguSyM/i4Xjzn+6ErwmW2LKqAaY60g2TpUcuTmDEuUQ+lxFkchtVS6zDkt+8pg1+XTIV5U5JGGQ7AxgdusoGnJBcQ/ailcxzw8p0yfNAxAFcGDaefD0phlugwMpTP66VltZwLZCaI9023c/8l1/KWDBunHbZgmk1bLVg+H0xAw49+ONqr38DawYSZsEt0ksIOocPIt/8ml1cryGFhfF+cXemBr9HPH620g1OzKFNsxoZpZWjLO8+GeXTStuUoy4TdSsfAHAy65kNXY7D/YgSWzHbo+mwSg+W4WemHkQIuYFj8uz8Orpx+rBPBGwZixtHHiJuwowF4hhWkx2bbYWNbEDwIqs6b2zUwVsOcMgv/CYpOs/VFcvt9mmmoQNitdADHw7YQNd3igKdvLYFrYXElQoI1TF0DmftM06UvInZceNWl7zFuOeqLg4SzO0Pr5MasRbUq6HpHUIcoEXYJJ184SG8/PQhdGCXGijr9CQiY2gOACYkJCiP29b/9B2Y2mgnx0PJP2Aw750UXArrSEKaDV2LQ+LMf/sIIM5qUwNznq3PmDCDs6EJ4Y2aSnBj7KYNs7dZ/F0yKSrMT+Eshc8GBsFvpug+lVKclCRRiOFvb7p8iwCnGMhhX4Z3jA2LMWi7ETi50StsmUm7HSPHJSfFstJDM9/4YgG6Ts08yCTsawA4UUmDUv7E9yBOuaELwI2IkBNt+wi/7VhOpuVYMYWeUEPlC13zYIZQPaQVQuapMgtW3lUA9fpkXV+pTjGx+bf3P63F4aL8f/NGiJiHkkad7JLrixqVo1Qo2Uz4fVOBwTxzmVeA50AR14nHxEYxmRYIn92kl7FwrXXFjGFthQj+4HQwWz7LDS3gkrJ+eOy8ykrnvQgTW4fekL1LUzHORhJkK3AC6n08oUfwe5L4ufxAPJs/Pc8JMpwQzZIkfZChpM0N+TNQ2HQ3C9tPm4r1eBwsQZmrnX+Khx4VmPeNwC6XSbx0Lwkn0Wy+esMyAp0PKq20BuP2b3lEAzzE1px5E0lNo5lqFDtuN6D7kOnV4s0C3FZT3OzCm9eIs+/DXjeeBQ1ejcOByFE5gjjNalH2tkjaAFMif96xTQPl0tJSNhRwJpPWh57zbUrIzkjl6GUEL8XHhxiTCRhi16DJWgDom9eUuGcBvf5n0JBZHGipI3GhRGBBT9s00Cc9woZQ2fg/PLC+m6hP+F7EYvQ0QLkMDqIO/iODLCBWpPkGEM5/7dYYw6fZANlD+0KYq3xW6+M0eN9I6hUvuNgavMlrZBQ0g5kn9zEoG0OZZ6vTWUwzmM0ONY0Akm3SQLqMNa6RSaAW0AyftvxpojaDypP1nj2xDqD6R/27zP46CnosOMbRpAAAAAElFTkSuQmCC\" alt=\"Twitter logo\">    \r\n          \r\n          </div>     \r\n\r\n      </div>\r\n      <div class=\"col-4\">\r\n          <p class=\"copyright\">Made with love by people who care.</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</footer>"

/***/ }),

/***/ "./src/components/footer/footer.component.scss":
/*!*****************************************************!*\
  !*** ./src/components/footer/footer.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".social img {\n  height: 30px; }\n"

/***/ }),

/***/ "./src/components/footer/footer.component.ts":
/*!***************************************************!*\
  !*** ./src/components/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/components/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/components/home/home.component.html":
/*!*************************************************!*\
  !*** ./src/components/home/home.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar> \n        <div class=\"row text-center my-5 sec-1\">\n        <div class=\"col\">\n            <h1 class=\"\">A resume to be proud of</h1>\n            <p class=\"homepage-content-sub-1 lead\">Stand out and make sure the key things come across</p>\n            \n                <button routerLink=\"/templates\" class=\"btn-info btn py-3 px-5\">CREATE RESUME</button>\n        \n        </div>\n        </div>\n        <div class=\"row sec-2\">\n        </div>\n        <div class=\"container\">\n        <div class=\"row sec-3 text-center my-5\">\n            <div class=\"col\">\n                <ul class=\"px-0\" >\n                    <li class=\"homepage-content-item-1 p-4\"><img class=\"homepage-content-item-1\" height=\"150\" width=\"200\" src=\"assets/images/homepage-tesla.png\" alt=\"Tesla\">\n                    </li><li class=\"homepage-content-item-1 p-4\"><img  src=\"assets/images/homepage-google.png\" alt=\"Google\"></li>\n                    <li class=\"homepage-content-item-1 p-4\"><img src=\"assets/images/homepage-facebook.png\" alt=\"Facebook\"></li>\n                    <li class=\"homepage-content-item-1 p-4\"><img  src=\"assets/images/spotify.095e3761.svg\" alt=\"Spotify\"></li>\n                    <li class=\"homepage-content-item-1 p-4\"><img  src=\"assets/images/homepage-gray.png\" alt=\"Gray Area\"></li>\n                    <p class=\"homepage-content-sub-2 p-4\">Our users got noticed and hired by their top choice companies - read more about their journey to the perfect job <strong><span style=\"color:#0875BD; font-weight: 600;\"><a href=\"#\">here.</a></span></strong></p>\n                </ul>\n            </div>\n        </div>\n        <div class=\"row sec-4\">\n            <div class=\"col-md-6 pr-5\">\n                <h1 class=\"homepage-content-header-2\">A resume that simply stands out</h1>\n                <p class=\"homepage-content-sub-3 mt-3\">90% of applicants use a word-editing software and traditional templates. Don't rely on a bland resume - get the recruiter's attention with a visually appealing format.</p>\n                <p class=\"mt-5\"><a class=\" homepage-content-sub-4\" href=\"#\">Build a modern resume &nbsp;→ </a></p>\n            </div>\n            <div class=\"col-md-6\">\n                <div class=\"resume-image\">\n                <img  src=\"assets/images/homepage-image-4.png\">\n                </div>\n            </div>  \n        </div>\n        <div class=\"row sec-5\">\n\n            <div class=\"col-md-6\">\n                <div class=\"resume-image\">\n                <img  src=\"assets/images/homepage-image-2.jpg\">\n                </div>\n            </div>\n            <div class=\"col-md-6 pl-5\">\n                <h1 class=\"homepage-content-header-2\">Put your achievements in the spotlight</h1>\n                <p class=\"homepage-content-sub-3 mt-3\">With most resumes, the key things don't come across. Bring your most important accomplishements forward and show what you're capable of achieving.</p>\n                <p class=\"mt-5\"><a class=\"homepage-content-sub-4\" href=\"#\">Show them what you have to offer &nbsp;→</a></p>\n            </div>\n            \n        \n        </div>\n        <div class=\"row sec-6 my-5\">\n            <div class=\"col-md-6 pr-5\">\n                <h1 class=\"homepage-content-header-2\">Building a resume shouldn't be frustrating</h1>\n                <p class=\"homepage-content-sub-3 mt-3\">With Enhacv, editing your resume is easy. Just focus on the content and let us take care of the formatting.</p>\n                <p class=\"mt-5\"><a class=\" homepage-content-sub-4\" href=\"#\">See it in action with our free trial &nbsp;→ </a></p>\n            </div>\n            <div class=\"col-md-6\">\n                <div class=\"resume-image\">\n                <img  src=\"assets/images/homepage-image-3.png\">\n                </div>\n            </div>  \n        </div>\n        <div class=\"row sec-7 text-center mt-5\">\n            <div class=\"col-lg-3\" >\n                <img src=\"assets/images/homepage-icon-1.png\" height=\"50\" width=\"50\">\n                <h3 >Simple editing</h3>\n                <div >\n                    <p class=\"text-muted\">Make changes straight on the page and see a preview of the resume without downloading it.</p>\n                </div>\n            </div>\n            <div class=\"col-lg-3\" >\n                <img src=\"assets/images/homepage-icon-2.png\" height=\"50\" width=\"50\">\n                <h3 class=\"mt-2\">No learning curve</h3>\n                <div >\n                    <p class=\"text-muted\">Each step of building your resume is so natural, you don't have to figure things out on your own.</p>\n                </div>\n            </div>\n            <div class=\"col-lg-3\" >\n                <img src=\"assets/images/homepage-icon-3.png\" height=\"50\" width=\"50\">\n                <h3>Balance the personal and the professional</h3>\n                <div style=\"margin-bottom: 30px;\">\n                    <p class=\"text-muted\">Showcase personal strengths and key drivers in addition to your skills to demonstrate culture fit.</p>\n                </div>\n            </div>\n            <div class=\"col-lg-3\" >\n                <img src=\"assets/images/homepage-icon-4.png\" height=\"50\" width=\"50\">\n                <h3>A memorable resume</h3>\n                <div >\n                    <p class=\"text-muted\">The distinct visual style will make people remember you and the key things about you, even in a pile of resumes.</p>\n                </div>\n            </div>\n        </div>\n\n        </div>\n\n        <div class=\"row text-center sec-8 my-5\">\n        <div class=\"col action\">\n            <h1 class=\"homepage-content-header-3\">Not happy with your current resume?</h1>\n            <button >TRY FREE FOR 14 DAYS</button>\n        </div>\n        </div>\n        \n<app-footer></app-footer>\n\n"

/***/ }),

/***/ "./src/components/home/home.component.scss":
/*!*************************************************!*\
  !*** ./src/components/home/home.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".homepage-content-header-1 {\n  text-align: center;\n  font-weight: 600;\n  font-size: 60px;\n  margin-top: 5%; }\n\n.homepage-content-sub-1 {\n  font-size: 20px;\n  text-align: center; }\n\n.sec-2 {\n  background-image: url(\"/assets/images/homepage-image.jpg\");\n  height: 100vh;\n  background-size: cover;\n  background-repeat: no-repeat; }\n\n.sec-3 ul {\n  list-style: none; }\n\n.sec-3 ul li {\n    display: inline; }\n\n.sec-3 img {\n  width: 150px; }\n\n.sec-4 .resume-image {\n  position: relative;\n  bottom: 2em; }\n\n.sec-4 .resume-image img {\n    width: 100%; }\n\n.sec-5 .resume-image {\n  position: relative;\n  right: 2em; }\n\n.sec-5 .resume-image img {\n    width: 100%; }\n\n.sec-6 img {\n  width: 100%; }\n\n.sec-7 img {\n  height: 30px;\n  width: 30px; }\n\n.sec-7 h3 {\n  font-size: 26px;\n  margin-top: 10px; }\n\n.sec-8 {\n  background: #0072BB; }\n\n.sec-8 button {\n    padding: 8px 15px;\n    font-size: 15px;\n    font-weight: 600;\n    background: white;\n    border: 1px white solid;\n    color: #0072BB;\n    border-radius: 5px;\n    margin-top: 10px;\n    cursor: pointer; }\n\n.sec-8 h1 {\n    color: white; }\n\n.sec-8 .action {\n    padding: 12% 0; }\n"

/***/ }),

/***/ "./src/components/home/home.component.ts":
/*!***********************************************!*\
  !*** ./src/components/home/home.component.ts ***!
  \***********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/components/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/components/login/login.component.html":
/*!***************************************************!*\
  !*** ./src/components/login/login.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<diV class=\"py-5 bg-light\">\n<div class=\"container\">\n      <div class=\"row sec-1 justify-content-center \">\n        <div class=\"col-md-4 p-5\">\n            <h6>Create a resume you are proud of</h6>\n              <!-- <div class=\"row\">\n                <div class=\"col-1 \"><img class=\"content-icon\" src=\"assets/images/icon-1.png\"></div>\n                <div class=\"col\">\n                    <p class=\"m-0\">Save time with hassle free templates</p>\n                </div>\n              </div> -->\n              <ul class=\"px-0\">\n                <li class=\"my-4\"><span><img class=\"content-icon\" src=\"assets/images/icon-1.png\"> <p class=\"mx-2\">Save time with hassle free templates</p> </span></li>\n                <li class=\"my-4\"><span><img class=\"content-icon\" src=\"assets/images/icon-2.png\"> <p class=\"mx-2\">Beat the competition using actionable, contextual advise</p> </span></li>\n                <li class=\"my-4\"><span><img class=\"content-icon\" src=\"assets/images/icon-3.png\"> <p class=\"mx-2\">Highly key achievements with memorable visuals</p> </span></li>\n\n              </ul>\n\n        </div>\n        <div class=\"col-md-5 p-5 col-sm-12 text-center bg-white\">\n            <h6 class=\"mb-4 \">Sign in to your account</h6>\n       \n     \n            <div class=\"mb-4\">\n              <button class=\"btn btn-outline-primary m-1\"><i class=\"fa fa-linkedin-square\"></i> LinkedIn</button>\n              <button (click)=\"signInWithGoogle()\" class=\"btn btn-outline-primary m-1\"><i class=\"fa fa-google\"></i> Google</button>\n              <button class=\"btn btn-outline-primary m-1\" ><i class=\"fa fa-facebook-square\"></i> Facebook</button>\n            </div>\n\n            <div class=\"mb-4 tex-muted\">or sign in with email</div>\n             \n              <div class=\"form-group   text-left\">\n                <input type=\"email\" [(ngModel)]=\"email\" class=\"form-control form-control-lg\" placeholder=\"Your Email\" name=\"email\">\n              </div>\n              \n              <div class=\"form-group  text-left\">\n                <input type=\"password\" [(ngModel)]=\"password\" class=\"form-control m-top-1 form-control-lg\" placeholder=\"Password\" name=\"password\">\n              </div>\n\n              <div *ngIf=\"err\" class=\"alert alert-danger\" role=\"alert\">\n                  {{err.message}}\n              </div>\n\n              <button type=\"submit\" class=\"btn btn-lg btn-primary btn-block mt-5 text-uppercase\" [disabled]=\"!email || !password\" (click)=\"login()\">Sign In</button>\n\n              <p style=\"cursor: pointer;\" class=\"text-center mb-1 mt-5 text-muted\" (click)=\"gotoRecover()\"><strong>Forgotten password?</strong></p>\n              <p style=\"cursor: pointer;\" class=\"text-center mt-1 text-muted\">Don't have an account? <strong (click)=\"gotoSignUp()\"> Create an account</strong> </p>\n            \n        </div>\n     </div>\n</div>\n</diV>\n<!-- <app-footer></app-footer> -->"

/***/ }),

/***/ "./src/components/login/login.component.scss":
/*!***************************************************!*\
  !*** ./src/components/login/login.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sec-1 img {\n  height: 40px; }\n\n.sec-1 ul {\n  list-style: none; }\n\n.sec-1 ul li p {\n    display: inline; }\n\n.bg-grey {\n  background-color: #FBFAFD;\n  min-height: 85vh; }\n"

/***/ }),

/***/ "./src/components/login/login.component.ts":
/*!*************************************************!*\
  !*** ./src/components/login/login.component.ts ***!
  \*************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/services/auth.service */ "./src/services/auth.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_services_json_resume_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/services/json-resume.service */ "./src/services/json-resume.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, jsonService, spinner, router, route) {
        this.authService = authService;
        this.jsonService = jsonService;
        this.spinner = spinner;
        this.router = router;
        this.route = route;
    }
    LoginComponent.prototype.ngOnInit = function () {
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/dashboard';
        //  this.jsonService.getResumeJsonRef(uid).valueChanges()
        // .subscribe(
        //     result => {
        //         console.log(result);
        //         this.router.navigate(['/dashboard']);
        //     }
        // );
        // this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/dashboard';
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.spinner.show();
        this.authService.login(this.email, this.password).then(function (value) {
            console.log('Nice, it worked!', value);
            var uid = value.uid;
            _this.jsonService.getResumeJsonRef(uid).valueChanges()
                .subscribe(function (result) {
                console.log(result, 'RESUME USER');
                if (result) {
                    _this.returnUrl = '/dashboard';
                }
                else {
                    _this.returnUrl = '/templates';
                }
                _this.spinner.hide();
                _this.router.navigateByUrl(_this.returnUrl);
                // this.router.navigate(['/dashboard']);
            });
        })
            .catch(function (err) {
            console.log('Something went wrong:', err.message);
            // alert('Login Error');
            _this.err = err;
            _this.spinner.hide();
        });
    };
    LoginComponent.prototype.signInWithGoogle = function () {
        var _this = this;
        this.authService.signInWithGoogle().then(function (res) {
            console.log('Nice, it worked!', res);
            var uid = res.uid;
            _this.jsonService.getResumeJsonRef(uid).valueChanges()
                .subscribe(function (result) {
                console.log(result, 'RESUME USER');
                if (result) {
                    _this.returnUrl = '/dashboard';
                }
                else {
                    _this.returnUrl = '/templates';
                }
                _this.spinner.hide();
                _this.router.navigateByUrl(_this.returnUrl);
                // this.router.navigate(['/dashboard']);
            });
        });
    };
    LoginComponent.prototype.gotoSignUp = function () {
        this.router.navigate(['/signup']);
    };
    LoginComponent.prototype.gotoRecover = function () {
        this.router.navigate(['/recovery']);
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/components/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [src_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            src_services_json_resume_service__WEBPACK_IMPORTED_MODULE_4__["JsonResumeService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/components/navbar/navbar.component.html":
/*!*****************************************************!*\
  !*** ./src/components/navbar/navbar.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light px-5 sticky\" data-toggle=\"affix\">\r\n    <a routerLink=\"/home\" routerLinkActive=\"active\" class=\"navbar-brand\">\r\n      <img src=\"assets/images/resume builder-01.png\" alt=\"\" >\r\n    </a>\r\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarColor02\" aria-controls=\"navbarColor02\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n\r\n    <div class=\"collapse navbar-collapse\" id=\"navbarColor02\">\r\n        <ul class=\"nav navbar-nav ml-auto\">\r\n            <li class=\"nav-item  px-2\">\r\n              <a  routerLink=\"/successful-resumes\" routerLinkActive=\"active\" class=\"nav-link\" href=\"#\">Successful Resumes </a>\r\n            </li>\r\n            <li class=\"nav-item px-2\">\r\n              <a  routerLink=\"/resources\" routerLinkActive=\"active\" class=\"nav-link\" href=\"#\">Resources</a>\r\n            </li>\r\n            <li class=\"nav-item px-2\">\r\n              <a routerLink=\"/pricing\" routerLinkActive=\"active\"  class=\"nav-link\" href=\"#\">Pricing</a>\r\n            </li>\r\n            <li [hidden]=\"isLoggedIn\" class=\"nav-item px-2\">\r\n              <a routerLink=\"/login\" routerLinkActive=\"active\" class=\"nav-link\" href=\"#\">Sign In</a>\r\n            </li>\r\n            <li *ngIf=\"isLoggedIn\" class=\"nav-item px-2\">\r\n                <a routerLink=\"/dashboard\" routerLinkActive=\"active\" class=\"nav-link\" href=\"#\">Dashboard</a>\r\n              </li>\r\n            <li   [hidden]=\"isLoggedIn\" class=\"nav-item px-2\" >\r\n                <button  routerLink=\"/templates\" routerLinkActive=\"active\" class=\"btn-info btn btn-lg px-4\">Get Started</button>\r\n            </li>\r\n           \r\n          </ul>\r\n    </div>\r\n  </nav>"

/***/ }),

/***/ "./src/components/navbar/navbar.component.scss":
/*!*****************************************************!*\
  !*** ./src/components/navbar/navbar.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\n  height: 100px; }\n\n.sticky {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 1; }\n\n.navbar {\n  transition: background .5s; }\n"

/***/ }),

/***/ "./src/components/navbar/navbar.component.ts":
/*!***************************************************!*\
  !*** ./src/components/navbar/navbar.component.ts ***!
  \***************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/services/auth.service */ "./src/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(authService) {
        var _this = this;
        this.authService = authService;
        // this.authService.canActivate().then(res => {
        //   return this.isLoggedIn = true;
        // })
        // .catch(err => {
        //   console.log(err, 'not authenticated');
        //   return this.isLoggedIn = false;
        // });
        this.$subscription = this.authService.curentLoginStatus.subscribe(function (status) { return _this.isLoggedIn = status; });
        this.authService.isLoggedIn().then(function () {
            return _this.authService.updateLoginStatus(true);
        })
            .catch(function (err) {
            console.log(err);
            return _this.authService.updateLoginStatus(false);
        });
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.navBarOnscroll();
        jquery__WEBPACK_IMPORTED_MODULE_1__(window).scroll(function () {
            _this.navBarOnscroll();
        });
    };
    NavbarComponent.prototype.navBarOnscroll = function () {
        if (window.pageYOffset > 0) {
            jquery__WEBPACK_IMPORTED_MODULE_1__('nav').addClass('bg-light');
        }
        else {
            jquery__WEBPACK_IMPORTED_MODULE_1__('nav').removeClass('bg-light');
        }
    };
    NavbarComponent.prototype.ngOnDestroy = function () {
        this.$subscription.unsubscribe();
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.scss */ "./src/components/navbar/navbar.component.scss")]
        }),
        __metadata("design:paramtypes", [src_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/components/navbar2/navbar2.component.html":
/*!*******************************************************!*\
  !*** ./src/components/navbar2/navbar2.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg bg-light px-5 sticky\" data-toggle=\"affix\">\r\n  <a routerLink=\"/home\" routerLinkActive=\"active\" class=\"navbar-brand\">\r\n    <img src=\"assets/images/resume builder-01.png\" alt=\"\" >\r\n  </a>\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarColor02\" aria-controls=\"navbarColor02\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarColor02\">\r\n      <ul class=\"nav navbar-nav mr-auto\">\r\n          <li class=\"nav-item  px-2\">\r\n            <a  routerLink=\"/dashboard\" routerLinkActive=\"active\" class=\"nav-link\" href=\"#\">Dashboard<span class=\"sr-only\">(current)</span></a>\r\n          </li>\r\n          <li class=\"nav-item px-2\">\r\n            <a  routerLink=\"/resources\" routerLinkActive=\"active\" class=\"nav-link\" href=\"#\">Help</a>\r\n          </li>\r\n          <!-- <li class=\"nav-item px-2\">\r\n            <a routerLink=\"/pricing\" routerLinkActive=\"active\"  class=\"nav-link\" href=\"#\">Pricing</a>\r\n          </li>\r\n          <li class=\"nav-item px-2\">\r\n            <a routerLink=\"/login\" routerLinkActive=\"active\" class=\"nav-link\" href=\"#\">Sign In</a>\r\n          </li>\r\n          <li  class=\"nav-item px-2\" >\r\n              <button  routerLink=\"/templates\" routerLinkActive=\"active\" class=\"btn-info btn btn-lg px-4\">Get Started</button>\r\n          </li> -->\r\n         \r\n        </ul> \r\n        <ul class=\"nav navbar-nav navbar-right\">\r\n          <li (click)=\"gotoPricing()\"><button class=\"btn navbar-btn btn-primary\">Upgrade</button></li>\r\n          <li><button class=\"btn btn-link navbar-btn navbar-btn-icon navbar-btn-notifications\"> <i class=\"fa fa-bell\"></i></button></li>\r\n          <li class=\"nav-item dropdown\">\r\n              <a class=\"dropdown-toggle btn btn-link navbar-btn navbar-btn-icon navbar-btn-avatar\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"> \r\n                  <img class=\"avatar img-circle\" width=\"40\" height=\"40\" src=\"https://lh3.googleusercontent.com/-XdUIqdMkCWA/AAAAAAAAAAI/AAAAAAAAAAA/4252rscbv5M/photo.jpg?sz=50\" alt=\"DT\">\r\n              </a>\r\n              <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\r\n                <a (click)=\"gotoAccount()\" class=\"dropdown-item\" >Account</a>\r\n                <a (click)=\"gotoPricing()\" class=\"dropdown-item\" >Plans</a>\r\n                <div class=\"dropdown-divider\"></div>\r\n                <a class=\"dropdown-item\" (click)=\"logOut()\" >Logout</a>\r\n              </div>\r\n            </li>\r\n        </ul>\r\n  </div>\r\n</nav>"

/***/ }),

/***/ "./src/components/navbar2/navbar2.component.scss":
/*!*******************************************************!*\
  !*** ./src/components/navbar2/navbar2.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\n  height: 55px; }\n\n.dropdown-menu {\n  left: -127px; }\n\n.nav-item {\n  cursor: pointer; }\n\n.navbar-btn-avatar {\n  margin-left: -14px;\n  padding-right: 0;\n  margin-top: -9px;\n  margin-bottom: 5px; }\n\n.navbar-btn-avatar i {\n  margin-right: -3px; }\n\n.m-left-1 {\n  margin-left: 8px; }\n\n.navbar-btn-icon i {\n  font-size: 17px;\n  line-height: 17px;\n  margin-top: -1px;\n  margin-bottom: -1px;\n  vertical-align: middle; }\n\n.avatar {\n  width: 40px;\n  height: 40px;\n  color: #fff;\n  border-radius: 50%;\n  display: inline-block;\n  line-height: 40px;\n  text-align: center;\n  background-color: #65696d; }\n"

/***/ }),

/***/ "./src/components/navbar2/navbar2.component.ts":
/*!*****************************************************!*\
  !*** ./src/components/navbar2/navbar2.component.ts ***!
  \*****************************************************/
/*! exports provided: Navbar2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Navbar2Component", function() { return Navbar2Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/services/auth.service */ "./src/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Navbar2Component = /** @class */ (function () {
    function Navbar2Component(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    Navbar2Component.prototype.ngOnInit = function () {
    };
    Navbar2Component.prototype.logOut = function () {
        var _this = this;
        this.authService.logout().then(function (res) {
            console.log(res, 'logut');
            _this.router.navigate(['/home']);
        })
            .catch(function (err) { return console.log(err); });
    };
    Navbar2Component.prototype.gotoPricing = function () {
        this.router.navigate(['/pricing']);
    };
    Navbar2Component.prototype.gotoAccount = function () {
        this.router.navigate(['/account']);
    };
    Navbar2Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar2',
            template: __webpack_require__(/*! ./navbar2.component.html */ "./src/components/navbar2/navbar2.component.html"),
            styles: [__webpack_require__(/*! ./navbar2.component.scss */ "./src/components/navbar2/navbar2.component.scss")]
        }),
        __metadata("design:paramtypes", [src_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], Navbar2Component);
    return Navbar2Component;
}());



/***/ }),

/***/ "./src/components/pricing/pricing.component.html":
/*!*******************************************************!*\
  !*** ./src/components/pricing/pricing.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<!-- Modal -->\r\n<div class=\"modal fade\" id=\"exampleModalCenter\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <h5 class=\"modal-title\" id=\"exampleModalCenterTitle\"><span [hidden]=\"isLogin\">Please Log-in</span><span *ngIf=\"isLogin\">Choose what do you want</span></h5>\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n          </button>\r\n        </div>\r\n        <div class=\"modal-body p-5\">\r\n            <div [hidden]=\"isLogin\">\r\n                <div class=\"form-group   text-left\">\r\n                    <input type=\"email\" [(ngModel)]=\"email\" class=\"form-control form-control-lg\" placeholder=\"Your Email\" name=\"email\">\r\n                    </div>\r\n                    \r\n                    <div class=\"form-group  text-left\">\r\n                      <input type=\"password\" [(ngModel)]=\"password\" class=\"form-control m-top-1 form-control-lg\" placeholder=\"Password\" name=\"password\">\r\n                    </div>\r\n                    <button type=\"submit\" class=\"btn btn-lg btn-primary btn-block mt-5 text-uppercase\" [disabled]=\"!email || !password\" (click)=\"login()\">Sign In</button>\r\n          \r\n                    <p style=\"cursor: pointer;\" class=\"text-center mb-1 mt-5 text-muted\" data-dismiss=\"modal\" (click)=\"gotoRecover()\"><strong>Forgotten password?</strong></p>\r\n                    <p  style=\"cursor: pointer;\" class=\"text-center mt-1 text-muted\" data-dismiss=\"modal\">Don't have an account? <strong (click)=\"gotoSignUp()\"> Create an account</strong> </p>\r\n            </div>\r\n            <div *ngIf=\"isLogin\" style=\"margin: 0 75px;\">\r\n              <ngx-paypal  [config]=\"payPalConfig\"></ngx-paypal>\r\n            </div>\r\n        </div>\r\n        <!-- <div class=\"modal-footer\">\r\n          <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\r\n          <button type=\"button\" class=\"btn btn-primary\">Save changes</button>\r\n        </div> -->\r\n      </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"container\">\r\n  <section>\r\n    <div class=\"\">\r\n      <div class=\"col-lg-12 col-md-12 col-sm-12 text-center mt-5\">\r\n        <h1 class=\"pricing-content-sub-1\">Sign up now, decide on your plan later.</h1>\r\n        <a href=\"https://www.sandbox.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=7SQ7NZHXMURMW\"><button\r\n            class=\"pricing-content-button-1\">TRY FREE FOR 14 DAYS</button></a>\r\n        <p class=\"pricing-content-sub-2\">* No credit card required.</p>\r\n      </div>\r\n    </div>\r\n  </section>\r\n  <section>\r\n    <div class=\"\">\r\n      <div class=\"col-lg-12 col-md-12 col-sm-12 text-center my-5\">\r\n        <h1>Create a resume you're proud of</h1>\r\n        <h5>Stand out with a visual resume that highlights the key things about you and show you're relevant.</h5>\r\n      </div>\r\n    </div>\r\n  </section>\r\n  <section>\r\n    <div class=\"row mt-5\">\r\n      <div class=\"card-deck mb-3 text-center\">\r\n        <div class=\"card mb-4 shadow-sm\" style=\"margin-top: 18px; height: 315px;\">\r\n          <div class=\"card-header\" style=\"background-color:white; border: 0px;\">\r\n            <h4 class=\"my-0 font-weight-normal\">Monthly</h4>\r\n          </div>\r\n          <div class=\"card-body\">\r\n            <h1 class=\"card-title pricing-card-title\">$19<sup style=\"top: -1.5em !important; font-size:35%;font-weight: bolder !important;\">.99/m</sup></h1>\r\n            <p class=\"plan-1\" style=\"margin-top: 20px; font-size: 14px; margin-left: 80px;margin-right: 80px;margin-bottom: 36px;\">You\r\n              will be billed once a month</p>\r\n            <!-- <a href=\"https://www.sandbox.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=VUJM9FZHS8PFA\"><button\r\n                type=\"button\" class=\"btn btn-lg btn-block btn-outline-primary\" style=\"background-color:#cef2fe !important;color: #007bff;\">Buy\r\n                Pro Monthly</button></a> -->\r\n            <!-- <div id=\"paypal-checkout-btn2\"></div> -->\r\n            <button data-toggle=\"modal\" data-target=\"#exampleModalCenter\" (click)=\"choosePlan(19.99,30)\"\r\n                type=\"button\" class=\"btn btn-lg btn-block btn-outline-primary\" style=\"background-color:#cef2fe !important;color: #007bff;\">Buy\r\n                Pro Monthly</button>\r\n            <p style=\"font-size: 15px; margin-top: 15px\">UPGRADE ANYTIME</p>\r\n          </div>\r\n        </div>\r\n        <div class=\"card mb-4 shadow-sm\" id=\"middleCard\">\r\n          <div class=\"card-header\" style=\"background-color: #fdf1e5;\">\r\n            <h4 class=\"my-0 font-weight-normal\" style=\"color: #fa712a; font-size: 15px; font-weight: bolder !important;\">MOST\r\n              POPULAR</h4>\r\n          </div>\r\n          <div class=\"card-header\" style=\"background-color: white; border: 0px;\">\r\n            <h4 class=\"my-0 font-weight-normal\">Quarterly</h4>\r\n          </div>\r\n          <div class=\"card-body\">\r\n            <h1 class=\"card-title pricing-card-title\">$14<sup style=\"top: -1.5em !important; font-size:35%;font-weight: bolder !important;\">.99/m</sup></h1>\r\n            <p class=\"plan-2\" style=\"margin-top: 20px; font-size: 14px; margin-left: 80px;margin-right: 80px;\"><s style=\"color: gray;\">$59.97</s>&nbsp;$44.97\r\n              billed every 3 months</p>\r\n            <!-- <a href=\"https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=MJUSAFQCA8ZKU\"><button type=\"button\" class=\"btn btn-lg btn-block btn-primary\">Buy Pro Quarterly</button></a>  -->\r\n            <!-- <a href=\"https://www.sandbox.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=DJNKT3FDZBJ7W\"><button\r\n                type=\"button\" class=\"btn btn-lg btn-block btn-primary\">Buy Pro Quarterly</button></a> -->\r\n            <!-- <div id=\"paypal-checkout-btn\"></div> -->\r\n            <button data-toggle=\"modal\" data-target=\"#exampleModalCenter\" (click)=\"choosePlan(14.99, 90)\"\r\n                type=\"button\" class=\"btn btn-lg btn-block btn-primary\">Buy Pro Quarterly</button>\r\n            <p style=\"font-size: 15px; margin-top: 15px\">SAVE <span style=\"color:orange\">25%</span></p>\r\n          </div>\r\n        </div>\r\n        <div class=\"card mb-4 shadow-sm\" style=\"margin-top: 18px; height: 315px;\">\r\n          <div class=\"card-header\" style=\"background-color:white; border: 0px;\">\r\n            <h4 class=\"my-0 font-weight-normal\">Semi Annual</h4>\r\n          </div>\r\n          <div class=\"card-body\">\r\n            <h1 class=\"card-title pricing-card-title\">$10<sup style=\"top: -1.5em !important; font-size:35%;font-weight: bolder !important;\">.99/m</sup></h1>\r\n            <p class=\"plan-3\" style=\"margin-top: 20px; font-size: 14px; margin-left: 80px;margin-right: 80px;\"><s style=\"color: gray;\">$119.94</s>&nbsp;$65.94\r\n              billed every 6 months</p>\r\n            <!-- <a href=\"https://www.sandbox.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=J8VV6UY2DMR6C\"><button\r\n                type=\"button\" class=\"btn btn-lg btn-block btn-primary\" style=\"background-color:#cef2fe !important;color: #007bff;\">Buy\r\n                Pro Semi-Annual</button></a> -->\r\n            <!-- <div id=\"paypal-checkout-btn3\"></div> -->\r\n            <button data-toggle=\"modal\" data-target=\"#exampleModalCenter\" (click)=\"choosePlan(10.99, 180)\"\r\n                type=\"button\" class=\"btn btn-lg btn-block btn-primary\" style=\"background-color:#cef2fe !important;color: #007bff;\">Buy\r\n                Pro Semi-Annual</button>\r\n            <p style=\"font-size: 15px; margin-top: 15px\">SAVE <span style=\"color:orange\">45%</span></p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>\r\n  <section>\r\n    <div class=\"col-lg-12 col-md-12 col-sm-12 text-center my-5\">\r\n      <h1>What's included in pro</h1>\r\n      <div class=\"container\" style=\"margin-top: 50px;\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-6\">\r\n            <img class=\"float-left\" src=\"../assets/images/1-01.png\" height=\"50\" width=\"50\">\r\n            <div class=\"content pl-5 ml-5\">\r\n              <p class=\"text-left\" style=\"font-size: 20px; font-weight: 600;\">Up to 10 resumes</p>\r\n              <p class=\"text-left\" style=\"font-size: 14px;\">Make changes to your resume and tailor to a specific\r\n                position in a matter of minutes.</p>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-6\">\r\n            <img class=\"float-left\" src=\"../assets/images/2-01.png\" height=\"50\" width=\"50\">\r\n            <div class=\"content pl-5 ml-5\">\r\n              <p class=\"text-left\" style=\"font-size: 20px; font-weight: 600;\">Unlimited entries</p>\r\n              <p class=\"text-left\" style=\"font-size: 14px;\">Add more of your personal and professional experience to\r\n                prove your culture fit.</p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-md-6\">\r\n            <img class=\"float-left\" src=\"../assets/images/3-01.png\" height=\"50\" width=\"50\">\r\n            <div class=\"content pl-5 ml-5\">\r\n              <p class=\"text-left\" style=\"font-size: 20px; font-weight: 600;\">Pro sections</p>\r\n              <p class=\"text-left\" style=\"font-size: 14px;\">Show certificates, awards, references, and more, so that\r\n                your achievements come across.</p>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-6\">\r\n            <img class=\"float-left\" src=\"../assets/images/4-01.png\" height=\"50\" width=\"50\">\r\n            <div class=\"content pl-5 ml-5\">\r\n              <p class=\"text-left\" style=\"font-size: 20px; font-weight: 600;\">Pro sections</p>\r\n              <p class=\"text-left\" style=\"font-size: 14px;\">Customize colors, fonts, and icons and make sure your\r\n                resume is never bland.</p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-md-6\">\r\n            <img class=\"float-left\" src=\"../assets/images/5-01.png\" height=\"50\" width=\"50\">\r\n            <div class=\"content pl-5 ml-5\">\r\n              <p class=\"text-left\" style=\"font-size: 20px; font-weight: 600;\">Remove branding</p>\r\n              <p class=\"text-left\" style=\"font-size: 14px;\">Get the full credit for your resume by removing the Enhancv\r\n                logo on the page.</p>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-6\">\r\n            <img class=\"float-left\" src=\"../assets/images/6-01.png\" height=\"50\" width=\"50\">\r\n            <div class=\"content pl-5 ml-5\">\r\n              <p class=\"text-left\" style=\"font-size: 20px; font-weight: 600;\">Contact template</p>\r\n              <p class=\"text-left\" style=\"font-size: 14px;\">Use a visually appealing layout that fits more information\r\n                in one page.</p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>\r\n  <section class=\"row-full\">\r\n    <div class=\"py-5\">\r\n      <div class=\"col-lg-12 col-md-12 col-sm-12 text-center\">\r\n        <h1 class=\"pricing-content-sub-1 text-light\">Not happy with your current resume?</h1>\r\n        <button class=\"pricing-content-button-4\">TRY FREE FOR 14 DAYS</button>\r\n      </div>\r\n    </div>\r\n  </section>\r\n\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/components/pricing/pricing.component.scss":
/*!*******************************************************!*\
  !*** ./src/components/pricing/pricing.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pricing-content-sub-1 {\n  color: black;\n  font-size: 40px; }\n\n.pricing-content-sub-2 {\n  color: gray;\n  font-size: 20px; }\n\na {\n  text-decoration: none; }\n\n.pricing-content-button-1 {\n  padding: 15px 40px;\n  background: #0072BB;\n  color: white;\n  border: 1px #0072BB solid;\n  border-radius: 10px;\n  font-weight: 600;\n  font-size: 20px;\n  margin-top: 30px;\n  margin-bottom: 20px; }\n\n.pricing-content-button-4 {\n  padding: 15px 70px;\n  background: white;\n  border: 2px #0072BB solid;\n  border-radius: 10px;\n  color: black;\n  font-weight: 600;\n  font-size: 20px;\n  margin-bottom: 0px; }\n\n.row-full {\n  background-color: #0072bb;\n  width: 100vw;\n  position: relative;\n  margin-left: -50vw;\n  height: 300px;\n  margin-top: 100px;\n  left: 50%; }\n\n@media only screen and (min-width: 320px) {\n  .plan-1 {\n    margin-bottom: 20px !important;\n    margin-top: 10px !important; } }\n\n@media only screen and (min-width: 768px) {\n  .plan-1 {\n    margin-left: 0px !important;\n    margin-right: 0px !important; }\n  .plan-2 {\n    margin-left: 0px !important;\n    margin-right: 0px !important; }\n  .plan-3 {\n    margin-left: 0px !important;\n    margin-right: 0px !important;\n    margin-bottom: 12px !important; }\n  .btn-block {\n    font-size: 15px; } }\n\n@media only screen and (min-width: 1024px) {\n  .plan-1 {\n    margin-left: 80px !important;\n    margin-right: 80px !important; }\n  .plan-2 {\n    margin-left: 80px !important;\n    margin-right: 80px !important; }\n  .plan-3 {\n    margin-left: 80px !important;\n    margin-right: 80px !important; } }\n"

/***/ }),

/***/ "./src/components/pricing/pricing.component.ts":
/*!*****************************************************!*\
  !*** ./src/components/pricing/pricing.component.ts ***!
  \*****************************************************/
/*! exports provided: PricingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PricingComponent", function() { return PricingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var ngx_paypal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-paypal */ "./node_modules/ngx-paypal/fesm5/ngx-paypal.js");
/* harmony import */ var src_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/services/auth.service */ "./src/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_services_json_resume_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/services/json-resume.service */ "./src/services/json-resume.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};







// declare let paypal: any;
var PricingComponent = /** @class */ (function () {
    function PricingComponent(authService, router, jsonService, spinner) {
        var _this = this;
        this.authService = authService;
        this.router = router;
        this.jsonService = jsonService;
        this.spinner = spinner;
        this.needLogin = true;
        this.$subscription = this.authService.curentLoginStatus.subscribe(function (status) {
            console.log(status);
            _this.isLogin = status;
        });
        this.spinner.show();
        this.authService.isLoggedIn().then(function (res) {
            console.log(res, 'user is login');
            // actions.enable();
            _this.needLogin = false;
            _this.authService.updateLoginStatus(true);
            _this.spinner.hide();
        })
            .catch(function (err) {
            console.log(err);
            // actions.disable();
            _this.needLogin = true;
            _this.authService.updateLoginStatus(false);
            _this.spinner.hide();
            // this.router.navigate(['/login'], { queryParams: { returnUrl: '/pricing'}});
        });
    }
    // addScript: boolean = false;
    // finalAmount: number = 1;
    // paypalConfig1 = {
    //   env: 'sandbox',
    //   client: {
    //     sandbox: 'AZw6gqitk2nDExrcAkhdPRCN6GTeSb23_dEOfP7zCza0NhQRplf-ab1NaLjju2ekXGt6SFxHPdJl0l7D',
    //     // production: '<production-key>' 
    //   },
    //   commit: true,
    //   payment: (data, actions) => {
    //       return actions.payment.create({
    //         payment: {
    //           transactions: [
    //             {amount: { total: 49.99, currency: 'USD'}}
    //           ]
    //         }
    //       });
    //   },
    //   onAuthorize: (data, actions) => {
    //     return actions.payment.execute().then((payment) => {
    //       // console.log('pay succesful');
    //       console.log(payment);
    //     })
    //   },
    // };
    // paypalConfig2 = {
    //   env: 'sandbox',
    //   client: {
    //     sandbox: 'AZw6gqitk2nDExrcAkhdPRCN6GTeSb23_dEOfP7zCza0NhQRplf-ab1NaLjju2ekXGt6SFxHPdJl0l7D',
    //     // production: '<production-key>' 
    //   },
    //   commit: true,
    //   payment: (data, actions) => {
    //       return actions.payment.create({
    //         payment: {
    //           transactions: [
    //             {amount: { total: 19.99, currency: 'USD'}}
    //           ]
    //         }
    //       });
    //   },
    //   onAuthorize: (data, actions) => {
    //     return actions.payment.execute().then((payment) => {
    //       // console.log('pay succesful');
    //       console.log(payment);
    //     });
    //   },
    // };
    // paypalConfig3 = {
    //   env: 'sandbox',
    //   client: {
    //     sandbox: 'AZw6gqitk2nDExrcAkhdPRCN6GTeSb23_dEOfP7zCza0NhQRplf-ab1NaLjju2ekXGt6SFxHPdJl0l7D',
    //     // production: '<production-key>' 
    //   },
    //   commit: true,
    //   payment: (data, actions) => {
    //       return actions.payment.create({
    //         payment: {
    //           transactions: [
    //             {amount: { total: 65.94, currency: 'USD'}}
    //           ]
    //         }
    //       });
    //   },
    //   onAuthorize: (data, actions) => {
    //     return actions.payment.execute().then((payment) => {
    //       // console.log('pay succesful');
    //       console.log(payment);
    //     })
    //   },
    // };
    PricingComponent.prototype.ngOnInit = function () {
    };
    PricingComponent.prototype.choosePlan = function (price, days) {
        this.initConfig(price, days);
    };
    PricingComponent.prototype.initConfig = function (price, days) {
        var _this = this;
        this.payPalConfig = new ngx_paypal__WEBPACK_IMPORTED_MODULE_2__["PayPalConfig"](ngx_paypal__WEBPACK_IMPORTED_MODULE_2__["PayPalIntegrationType"].ClientSideREST, ngx_paypal__WEBPACK_IMPORTED_MODULE_2__["PayPalEnvironment"].Sandbox, {
            commit: true,
            client: {
                sandbox: 'AZw6gqitk2nDExrcAkhdPRCN6GTeSb23_dEOfP7zCza0NhQRplf-ab1NaLjju2ekXGt6SFxHPdJl0l7D'
            },
            button: {
                label: 'paypal',
                layout: 'vertical'
            },
            onAuthorize: function (data, actions) {
                console.log('Authorize');
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(undefined);
            },
            onPaymentComplete: function (data, actions) { return __awaiter(_this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    this.spinner.show();
                    console.log('OnPaymentComplete', data);
                    this.$subscription = this.authService.getUserDetails().subscribe(function (user) { return __awaiter(_this, void 0, void 0, function () {
                        var userAccount, dateExpiration, timestampExpiration;
                        var _this = this;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    console.log(user, 'The registered user');
                                    return [4 /*yield*/, this.getUserAccount(user.uid)];
                                case 1:
                                    userAccount = _a.sent();
                                    console.log(userAccount);
                                    dateExpiration = new Date(userAccount.expiration_date);
                                    dateExpiration.setDate(dateExpiration.getDate() + days);
                                    timestampExpiration = dateExpiration.getTime();
                                    console.log(timestampExpiration);
                                    this.jsonService.getResumeJsonRefAccount(user.uid)
                                        .set({ start_date: userAccount.start_date, expiration_date: timestampExpiration })
                                        .then(function () {
                                        _this.spinner.hide();
                                    })
                                        .catch(function (err) {
                                        console.log(err);
                                        alert(err);
                                        _this.spinner.hide();
                                    });
                                    return [2 /*return*/];
                            }
                        });
                    }); });
                    return [2 /*return*/];
                });
            }); },
            onCancel: function (data, actions) {
                console.log('OnCancel');
            },
            onError: function (err) {
                console.log('OnError');
            },
            onClick: function () {
                console.log('onClick');
            },
            validate: function (actions) {
                console.log(actions);
                if (_this.isLogin) {
                    actions.enable();
                }
                else {
                    actions.disable();
                }
            },
            experience: {
                noShipping: true,
                brandName: 'Angular PayPal'
            },
            transactions: [
                {
                    amount: {
                        total: price,
                        currency: 'USD',
                    },
                }
            ],
            note_to_payer: 'Contact us if you have troubles processing payment'
        });
    };
    PricingComponent.prototype.ngAfterViewChecked = function () {
        // if(!this.addScript) {
        //   this.addPaypalScript().then(() => {
        //     paypal.Button.render(this.paypalConfig1, '#paypal-checkout-btn');
        //     paypal.Button.render(this.paypalConfig2, '#paypal-checkout-btn2');
        //     paypal.Button.render(this.paypalConfig3, '#paypal-checkout-btn3');
        //   })
        // }
    };
    PricingComponent.prototype.login = function () {
        var _this = this;
        this.spinner.show();
        this.authService.login(this.email, this.password).then(function (value) {
            console.log('Nice, it worked!', value);
            var uid = value.uid;
            _this.authService.updateLoginStatus(true);
            _this.spinner.hide();
        })
            .catch(function (err) {
            console.log('Something went wrong:', err.message);
            _this.authService.updateLoginStatus(false);
            alert('Login Error');
            _this.spinner.hide();
        });
    };
    PricingComponent.prototype.signInWithGoogle = function () {
        var _this = this;
        this.authService.signInWithGoogle().then(function (res) {
            console.log('Nice, it worked!', res);
            var uid = res.uid;
            _this.jsonService.getResumeJsonRef(uid).valueChanges()
                .subscribe(function (result) {
                console.log(result, 'RESUME USER');
                // if (result) {
                //   this.returnUrl = '/dashboard';
                // } else {
                //   this.returnUrl = '/templates';
                // }
                _this.spinner.hide();
                // this.router.navigateByUrl(this.returnUrl);
                // this.router.navigate(['/dashboard']);
            });
        });
    };
    PricingComponent.prototype.gotoSignUp = function () {
        this.router.navigate(['/signup']);
    };
    PricingComponent.prototype.gotoRecover = function () {
        this.router.navigate(['/recovery']);
    };
    PricingComponent.prototype.ngOnDestroy = function () {
        this.$subscription.unsubscribe();
    };
    PricingComponent.prototype.getUserAccount = function (uid) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.jsonService.getResumeJsonRefAccount(uid).valueChanges().subscribe(function (res) {
                resolve(res);
            });
        });
    };
    PricingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pricing',
            template: __webpack_require__(/*! ./pricing.component.html */ "./src/components/pricing/pricing.component.html"),
            styles: [__webpack_require__(/*! ./pricing.component.scss */ "./src/components/pricing/pricing.component.scss")]
        }),
        __metadata("design:paramtypes", [src_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], src_services_json_resume_service__WEBPACK_IMPORTED_MODULE_5__["JsonResumeService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"]])
    ], PricingComponent);
    return PricingComponent;
}());



/***/ }),

/***/ "./src/components/privacy/privacy.component.html":
/*!*******************************************************!*\
  !*** ./src/components/privacy/privacy.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n  <div class=\"container\">\r\n      <section>\r\n        <h1 class=\"text-center mt-6\">Privacy Policy</h1>\r\n        <div class=\"row mt-12\">\r\n          <div class=\"col-sm-3\">\r\n            <ul class=\"list-unstyled\">\r\n              <li><a routerLink=\"/terms\" routerLinkActive=\"active\">Terms of Service</a></li>\r\n              <li><a routerLink=\"/privacy\" routerLinkActive=\"active\" href=\"#\">Privacy Policy</a> </li>\r\n            </ul>\r\n          </div>\r\n          <div class=\"col-sm-9 mb-12\">\r\n            <div class=\"mb-6\">\r\n              <small>Last updated: October 5, 2017</small>\r\n            </div>\r\n            <h5>Table of contents:</h5>\r\n            <ul class=\"mb-5\">\r\n              <li><a href=\"#introduction\" class=\"feature-link\">Introduction</a></li>\r\n              <li><a href=\"#\" class=\"feature-link\">Usage information</a></li>\r\n              <li><a href=\"#\" class=\"feature-link\">Log information</a></li>\r\n              <li><a href=\"#\" class=\"feature-link\">Account information</a></li>\r\n              <li><a href=\"#\" class=\"feature-link\">Billing information and Payment details</a></li>\r\n              <li><a href=\"#\" class=\"feature-link\">Contact information</a></li>\r\n              <li><a href=\"#\" class=\"feature-link\">Sensitive information</a></li>\r\n              <li><a href=\"#\" class=\"feature-link\">Cookies</a></li>\r\n              <li><a href=\"#\" class=\"feature-link\">How do we protect your personal information?</a></li>\r\n              <li><a href=\"#\" class=\"feature-link\">Your legal rights</a></li>\r\n              <li><a href=\"#\" class=\"feature-link\">Can this Privacy Policy change?</a></li>\r\n            </ul>\r\n            <h5 id=\"introduction\">Introduction</h5>\r\n            <p>Lorem ipsum dolor sit amet, no habeo atqui quando vis. Erat pericula est ex. Eu vitae adolescens complectitur sed, ignota legimus eloquentiam ei sea, pri no scripserit appellantur. Vidit veniam nec id, commodo albucius periculis ea ius, has eu tale putent.\r\n                <br/> <br/> Lorem ipsum dolor sit amet, no habeo atqui quando vis. Erat pericula est ex. Eu vitae adolescens complectitur sed, ignota legimus eloquentiam ei sea, pri no scripserit appellantur.</p>\r\n            <p>Integre philosophia ius ut. At agam soleat neglegentur sit, ius possit inermis corpora in. Ei consul constituto interpretaris ius. Augue primis sententiae mel ne, per eius audire et, ea viderer fabulas ceteros nec. Veri error per ad, omnes tantas ancillae sed ad, est cu legimus pericula consulatu. Nec ad aeterno atomorum, eam in saepe facilis nominavi. <br /> <br /> Lorem ipsum dolor sit amet, no habeo atqui quando vis. Erat pericula est ex. Eu vitae adolescens complectitur sed, ignota legimus eloquentiam ei sea, pri no scripserit appellantur.</p>\r\n            <p>Lorem ipsum dolor sit amet, no habeo atqui quando vis. Erat pericula est ex. Eu vitae adolescens complectitur sed, ignota legimus eloquentiam ei sea, pri no scripserit appellantur. Vidit veniam nec id, commodo albucius periculis ea ius, has eu tale putent.</p>\r\n            <p>Integre philosophia ius ut. At agam soleat neglegentur sit, ius possit inermis corpora in. Ei consul constituto interpretaris ius. Augue primis sententiae mel ne, per eius audire et, ea viderer fabulas ceteros nec. Veri error per ad, omnes tantas ancillae sed ad, est cu legimus pericula consulatu. Nec ad aeterno atomorum, eam in saepe facilis nominavi. <br /> <br /> Lorem ipsum dolor sit amet, no habeo atqui quando vis. Erat pericula est ex. Eu vitae adolescens complectitur sed, ignota legimus eloquentiam ei sea, pri no scripserit appellantur.</p>\r\n            <p>Lorem ipsum dolor sit amet, no habeo atqui quando vis. Erat pericula est ex. Eu vitae adolescens complectitur sed, ignota legimus eloquentiam ei sea, pri no scripserit appellantur. Vidit veniam nec id, commodo albucius periculis ea ius, has eu tale putent.</p>\r\n            <p>Integre philosophia ius ut. At agam soleat neglegentur sit, ius possit inermis corpora in. Ei consul constituto interpretaris ius. Augue primis sententiae mel ne, per eius audire et, ea viderer fabulas ceteros nec. Veri error per ad, omnes tantas ancillae sed ad, est cu legimus pericula consulatu. Nec ad aeterno atomorum, eam in saepe facilis nominavi. <br /> <br /> Lorem ipsum dolor sit amet, no habeo atqui quando vis. Erat pericula est ex. Eu vitae adolescens complectitur sed, ignota legimus eloquentiam ei sea, pri no scripserit appellantur.</p>\r\n            <p>Integre philosophia ius ut. At agam soleat neglegentur sit, ius possit inermis corpora in. Ei consul constituto interpretaris ius. Augue primis sententiae mel ne, per eius audire et, ea viderer fabulas ceteros nec. Veri error per ad, omnes tantas ancillae sed ad, est cu legimus pericula consulatu. Nec ad aeterno atomorum, eam in saepe facilis nominavi. <br /> <br /> Lorem ipsum dolor sit amet, no habeo atqui quando vis. Erat pericula est ex. Eu vitae adolescens complectitur sed, ignota legimus eloquentiam ei sea, pri no scripserit appellantur.</p>\r\n            <h5 id=\"usage-information\">Usage information</h5>\r\n            <div class=\"sub-title\">What is it?</div>\r\n            <p>Lorem ipsum dolor sit amet, no habeo atqui quando vis. Erat pericula est ex. Eu vitae adolescens complectitur sed, ignota legimus eloquentiam ei sea, pri no scripserit appellantur. Vidit veniam nec id, commodo albucius periculis ea ius, has eu tale putent.</p>\r\n            <p>Integre philosophia ius ut. At agam soleat neglegentur sit, ius possit inermis corpora in. Ei consul constituto interpretaris ius. Augue primis sententiae mel ne, per eius audire et, ea viderer fabulas ceteros nec. Veri error per ad, omnes tantas ancillae sed ad, est cu legimus pericula consulatu. Nec ad aeterno atomorum, eam in saepe facilis nominavi. <br /> <br /> Lorem ipsum dolor sit amet, no habeo atqui quando vis. Erat pericula est ex. Eu vitae adolescens complectitur sed, ignota legimus eloquentiam ei sea, pri no scripserit appellantur.</p>\r\n            <p>Lorem ipsum dolor sit amet, no habeo atqui quando vis. Erat pericula est ex. Eu vitae adolescens complectitur sed, ignota legimus eloquentiam ei sea, pri no scripserit appellantur. Vidit veniam nec id, commodo albucius periculis ea ius, has eu tale putent.</p>\r\n            <p>Integre philosophia ius ut. At agam soleat neglegentur sit, ius possit inermis corpora in. Ei consul constituto interpretaris ius. Augue primis sententiae mel ne, per eius audire et, ea viderer fabulas ceteros nec. Veri error per ad, omnes tantas ancillae sed ad, est cu legimus pericula consulatu. Nec ad aeterno atomorum, eam in saepe facilis nominavi. <br /> <br /> Lorem ipsum dolor sit amet, no habeo atqui quando vis. Erat pericula est ex. Eu vitae adolescens complectitur sed, ignota legimus eloquentiam ei sea, pri no scripserit appellantur.</p>\r\n            <div class=\"sub-title\">How do we use it?</div>\r\n            <p>Integre philosophia ius ut. At agam soleat neglegentur sit, ius possit inermis corpora in. Ei consul constituto interpretaris ius. Augue primis sententiae mel ne, per eius audire et, ea viderer fabulas ceteros nec. Veri error per ad, omnes tantas ancillae sed ad, est cu legimus pericula consulatu. Nec ad aeterno atomorum, eam in saepe facilis nominavi. <br /> <br /> Lorem ipsum dolor sit amet, no habeo atqui quando vis. Erat pericula est ex. Eu vitae adolescens complectitur sed, ignota legimus eloquentiam ei sea, pri no scripserit appellantur.</p>\r\n            <p>Lorem ipsum dolor sit amet, no habeo atqui quando vis. Erat pericula est ex. Eu vitae adolescens complectitur sed, ignota legimus eloquentiam ei sea, pri no scripserit appellantur. Vidit veniam nec id, commodo albucius periculis ea ius, has eu tale putent.</p>\r\n            <p>Lorem ipsum dolor sit amet, no habeo atqui quando vis. Erat pericula est ex. Eu vitae adolescens complectitur sed, ignota legimus eloquentiam ei sea, pri no scripserit appellantur. Vidit veniam nec id, commodo albucius periculis ea ius, has eu tale putent.</p>\r\n            <h5 id=\"log-information\">Log information</h5>\r\n            <p>Integre philosophia ius ut. At agam soleat neglegentur sit, ius possit inermis corpora in. Ei consul constituto interpretaris ius. Augue primis sententiae mel ne, per eius audire et, ea viderer fabulas ceteros nec. Veri error per ad, omnes tantas ancillae sed ad, est cu legimus pericula consulatu. Nec ad aeterno atomorum, eam in saepe facilis nominavi. <br /> <br /> Lorem ipsum dolor sit amet, no habeo atqui quando vis. Erat pericula est ex. Eu vitae adolescens complectitur sed, ignota legimus eloquentiam ei sea, pri no scripserit appellantur.</p>\r\n            <h5 id=\"account-information\">Account information</h5>\r\n            <p>Lorem ipsum dolor sit amet, no habeo atqui quando vis. Erat pericula est ex. Eu vitae adolescens complectitur sed, ignota legimus eloquentiam ei sea, pri no scripserit appellantur. Integre philosophia ius ut. At agam soleat neglegentur sit, ius possit inermis corpora in. Ei consul constituto interpretaris ius. Augue primis sententiae mel ne, per eius audire et, ea viderer fabulas ceteros nec. Veri error per ad, omnes tantas ancillae sed ad, est cu legimus pericula consulatu. Nec ad aeterno atomorum, eam in saepe facilis nominavi.</p>\r\n            <h5 id=\"billing-information\">Billing information and Payment details</h5>\r\n            <p>Integre philosophia ius ut. At agam soleat neglegentur sit, ius possit inermis corpora in. Ei consul constituto interpretaris ius. Augue primis sententiae mel ne, per eius audire et, ea viderer fabulas ceteros nec. Veri error per ad, omnes tantas ancillae sed ad, est cu legimus pericula consulatu. Nec ad aeterno atomorum, eam in saepe facilis nominavi.</p>\r\n            <h5 id=\"contact-information\">Contact information</h5>\r\n            <p>Lorem ipsum dolor sit amet, no habeo atqui quando vis. Erat pericula est ex. Eu vitae adolescens complectitur sed, ignota legimus eloquentiam ei sea, pri no scripserit appellantur. Vidit veniam nec id, commodo albucius periculis ea ius, has eu tale putent.<br/><br/>Lorem ipsum dolor sit amet, no habeo atqui quando vis. Erat pericula est ex. Eu vitae adolescens complectitur sed, ignota legimus eloquentiam ei sea, pri no scripserit appellantur.</p>\r\n            <h5 id=\"sensitive-information\">Sensitive information</h5>\r\n            <p>Lorem ipsum dolor sit amet, no habeo atqui quando vis. Erat pericula est ex. Eu vitae adolescens complectitur sed, ignota legimus eloquentiam ei sea, pri no scripserit appellantur.</p>\r\n            <h5 id=\"cookies\">Cookies</h5>\r\n            <p>Lorem ipsum dolor sit amet, no habeo atqui quando vis. Erat pericula est ex. Eu vitae adolescens complectitur sed, ignota legimus eloquentiam ei sea, pri no scripserit appellantur. Vidit veniam nec id, commodo albucius periculis ea ius, has eu tale putent.</p>\r\n            <h5 id=\"protect-information\">How do we protect your personal information?</h5>\r\n            <p>Lorem ipsum dolor sit amet, no habeo atqui quando vis. Erat pericula est ex. Eu vitae adolescens complectitur sed, ignota legimus eloquentiam ei sea, pri no scripserit appellantur. <br /> <br /> Integre philosophia ius ut. At agam soleat neglegentur sit, ius possit inermis corpora in. Ei consul constituto interpretaris ius. Augue primis sententiae mel ne, per eius audire et, ea viderer fabulas ceteros nec. Veri error per ad, omnes tantas ancillae sed ad, est cu legimus pericula consulatu. Nec ad aeterno atomorum, eam in saepe facilis nominavi.</p>\r\n            <h5 id=\"legal-rights\">Your legal rights</h5>\r\n            <p>Integre philosophia ius ut. At agam soleat neglegentur sit, ius possit inermis corpora in. Ei consul constituto interpretaris ius. Augue primis sententiae mel ne, per eius audire et, ea viderer fabulas ceteros nec. Veri error per ad, omnes tantas ancillae sed ad, est cu legimus pericula consulatu. Nec ad aeterno atomorum, eam in saepe facilis nominavi.</p>\r\n            <h5 id=\"changes\">Can this Privacy Policy change?</h5>\r\n            <p>Integre philosophia ius ut. At agam soleat neglegentur sit, ius possit inermis corpora in. Ei consul constituto interpretaris ius. Augue primis sententiae mel ne, per eius audire et, ea viderer fabulas ceteros nec. Veri error per ad, omnes tantas ancillae sed ad, est cu legimus pericula consulatu. Nec ad aeterno atomorum, eam in saepe facilis nominavi.</p>\r\n          </div>\r\n        </div>\r\n      </section>\r\n    </div>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/components/privacy/privacy.component.scss":
/*!*******************************************************!*\
  !*** ./src/components/privacy/privacy.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mb-1 {\n  margin-bottom: 8px; }\n\n.mb-5 {\n  margin-bottom: 40px; }\n\n.mb-6 {\n  margin-bottom: 48px; }\n\n.mb-12 {\n  margin-bottom: 96px; }\n\n.mt-6 {\n  margin-top: 48px; }\n\n.mt-12 {\n  margin-top: 96px; }\n\n.feature-link {\n  color: #8c7cdb;\n  text-decoration: none;\n  font-weight: 600; }\n\n.sub-title {\n  font-size: 18px;\n  color: #65696d;\n  margin-bottom: 8px; }\n"

/***/ }),

/***/ "./src/components/privacy/privacy.component.ts":
/*!*****************************************************!*\
  !*** ./src/components/privacy/privacy.component.ts ***!
  \*****************************************************/
/*! exports provided: PrivacyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivacyComponent", function() { return PrivacyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PrivacyComponent = /** @class */ (function () {
    function PrivacyComponent() {
    }
    PrivacyComponent.prototype.ngOnInit = function () {
    };
    PrivacyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-privacy',
            template: __webpack_require__(/*! ./privacy.component.html */ "./src/components/privacy/privacy.component.html"),
            styles: [__webpack_require__(/*! ./privacy.component.scss */ "./src/components/privacy/privacy.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PrivacyComponent);
    return PrivacyComponent;
}());



/***/ }),

/***/ "./src/components/recover-account/recover-account.component.html":
/*!***********************************************************************!*\
  !*** ./src/components/recover-account/recover-account.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<diV class=\"py-5 bg-light\">\n<div class=\"container\">\n      <div class=\"row sec-1 justify-content-center \">\n        <div class=\"col-md-4 p-5\">\n            <h6>Create a resume you are proud of</h6>\n              <!-- <div class=\"row\">\n                <div class=\"col-1 \"><img class=\"content-icon\" src=\"assets/images/icon-1.png\"></div>\n                <div class=\"col\">\n                    <p class=\"m-0\">Save time with hassle free templates</p>\n                </div>\n              </div> -->\n              <ul class=\"px-0\">\n                <li class=\"my-4\"><span><img class=\"content-icon\" src=\"assets/images/icon-1.png\"> <p class=\"mx-2\">Save time with hassle free templates</p> </span></li>\n                <li class=\"my-4\"><span><img class=\"content-icon\" src=\"assets/images/icon-2.png\"> <p class=\"mx-2\">Beat the competition using actionable, contextual advise</p> </span></li>\n                <li class=\"my-4\"><span><img class=\"content-icon\" src=\"assets/images/icon-3.png\"> <p class=\"mx-2\">Highly key achievements with memorable visuals</p> </span></li>\n\n              </ul>\n\n        </div>\n        <div class=\"col-md-5 p-5 col-sm-12 text-center bg-white\">\n           \n            <h6 class=\"mb-4 \">Enter your email address</h6>\n            \n<!--      \n            <div class=\"mb-4\">\n              <button class=\"btn btn-default-gray btn-linkedin m-1 btn-lg\"><i class=\"icon icon-linkedin-square-1\"></i> LinkedIn</button>\n              <button class=\"btn btn-default-gray btn-gplus m-1 btn-lg\"><i class=\"icon icon-google-plus-square\"></i> Google</button>\n              <button class=\"btn btn-default-gray btn-facebook m-1 btn-lg\" ><i class=\"icon icon-facebook-square\"></i> Facebook</button>\n            </div> -->\n\n            <!-- <div class=\"mb-4 tex-muted\">or sign in with email</div> -->\n             \n              <div class=\"form-group   text-left\">\n                <input type=\"email\" [(ngModel)]=\"email\" class=\"form-control form-control-lg\" placeholder=\"Your Email\" name=\"email\">\n              </div>\n              \n              <div *ngIf=\"err\" class=\"alert alert-danger\" role=\"alert\">\n                 {{err.message}}\n              </div>\n              <div *ngIf=\"emailSent\" class=\"alert alert-success\" role=\"alert\">\n                  Email sent!\n              </div>\n\n              <button type=\"submit\" class=\"btn btn-lg btn-primary btn-block mt-5 text-uppercase\" [disabled]=\"!email \" (click)=\"resetPassword()\">Send email</button>\n\n              <!-- <p class=\"text-center mb-1 mt-5 text-muted\" (click)=\"gotoRecover()\"><strong>Forgotten password?</strong></p>\n              <p class=\"text-center mt-1 text-muted\">Don't have an account? <strong (click)=\"gotoSignUp()\"> Create an account</strong> </p>\n             -->\n        </div>\n     </div>\n</div>\n</diV>\n<!-- <app-footer></app-footer> -->"

/***/ }),

/***/ "./src/components/recover-account/recover-account.component.scss":
/*!***********************************************************************!*\
  !*** ./src/components/recover-account/recover-account.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sec-1 img {\n  height: 40px; }\n\n.sec-1 ul {\n  list-style: none; }\n\n.sec-1 ul li p {\n    display: inline; }\n\n.bg-grey {\n  background-color: #FBFAFD;\n  min-height: 85vh; }\n"

/***/ }),

/***/ "./src/components/recover-account/recover-account.component.ts":
/*!*********************************************************************!*\
  !*** ./src/components/recover-account/recover-account.component.ts ***!
  \*********************************************************************/
/*! exports provided: RecoverAccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecoverAccountComponent", function() { return RecoverAccountComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/services/auth.service */ "./src/services/auth.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RecoverAccountComponent = /** @class */ (function () {
    function RecoverAccountComponent(authService, spinner) {
        this.authService = authService;
        this.spinner = spinner;
        this.emailSent = false;
    }
    RecoverAccountComponent.prototype.ngOnInit = function () {
    };
    RecoverAccountComponent.prototype.resetPassword = function () {
        var _this = this;
        this.spinner.show();
        this.authService.resetPassword(this.email).then(function (res) {
            console.log(res, 'email sent');
            _this.emailSent = true;
            _this.err = null;
            _this.spinner.hide();
        })
            .catch(function (err) {
            console.log(err);
            // alert('Error: Please try again');
            _this.err = err;
            _this.spinner.hide();
        });
    };
    RecoverAccountComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-recover-account',
            template: __webpack_require__(/*! ./recover-account.component.html */ "./src/components/recover-account/recover-account.component.html"),
            styles: [__webpack_require__(/*! ./recover-account.component.scss */ "./src/components/recover-account/recover-account.component.scss")]
        }),
        __metadata("design:paramtypes", [src_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"]])
    ], RecoverAccountComponent);
    return RecoverAccountComponent;
}());



/***/ }),

/***/ "./src/components/resources/resources.component.html":
/*!***********************************************************!*\
  !*** ./src/components/resources/resources.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>  \r\n  <div class=\"container\">\r\n    <div class=\"row mt-5\">\r\n      <div class=\"col-lg-6\">\r\n        <img class=\"resources-img-w9\" src=\"../assets/images/content/worksheet_preview_up@2x-ec90486252c09feb83e4d607a5502c52-1d92c.png\" alt=\"\">\r\n      </div>\r\n      <div class=\"col-lg-6\">\r\n        <h1 class=\"resources-content-header-1\">Learning Through Struggles</h1>\r\n        <p class=\"resources-content-sub-1\">Struggles shape our skills and who we are. Explore this question to learn more about yourself and what you should be proud of.</p>\r\n        <button type=\"button\" class=\"btn btn-info\">DOWNLOAD FOR FREE</button>\r\n      </div>\r\n    </div>\r\n    <div class=\"row mt-5\">\r\n        <div class=\"col-lg-7\">\r\n          <h1 class=\"resources-content-sub-1\">How this is helpful?</h1>\r\n          <p>Understand how struggles have shaped your skills</p>\r\n          <p>Learn about how and why struggles are often at the core of our successes.</p>\r\n          <h1 class=\"resources-content-sub-1\">Discover your strengths</h1>\r\n          <p>Take those insights and use them to discover new strengths.</p>\r\n          <h1 class=\"resources-content-sub-1\">Understand how to use those strengths in your resume</h1>\r\n          <p>Apply these learnings to create a resume that’s more honest and impactful.</p>\r\n        </div>\r\n        <div class=\"col-lg-5\">\r\n          <img class=\"resources-img-w9\" src=\"../assets/images/content/ladder@2-d44f0a53d6ff2914bba2a924038a1bea-66d17.png\" alt=\"\">\r\n        </div>\r\n      </div>\r\n      <div class=\"row mt-5\">\r\n          <div class=\"col-lg-6\">\r\n            <img class=\"resources-img-w6 mt-1 img-people\" src=\"../assets/images/content/people.png\" alt=\"\">\r\n          </div>\r\n          <div class=\"col-lg-6\">\r\n            <h1 class=\"resources-content-header-1\">Who is this good for?</h1>\r\n            <p class=\"resources-content-sub-1\">Anyone who’ d like to explore their own life struggles to better understand what strengths and skills they can apply to their next job.</p>\r\n            <button type=\"button\" class=\"btn btn-info\">DOWNLOAD FOR FREE</button>\r\n          </div>\r\n      </div>\r\n      <div class=\"row mt-5\">\r\n          <div class=\"col-lg-6\">\r\n            <h1 class=\"resources-content-header-1\">Discover Your Definition of Success</h1>\r\n            <p class=\"resources-content-sub-1\">When it comes to success, the reason “why” you define something as success is fundamental. Understanding your reason why can help you make better decisions, find more satisfaction, and ultimately be truly successful.</p>\r\n            <button type=\"button\" class=\"btn btn-info\">TRY IT FOR YOURSELF</button>\r\n          </div>\r\n          <div class=\"col-lg-6\">\r\n            <img class=\"resources-img-w9\" src=\"../assets/images/content/worksheet_bg_illustration.png\" alt=\"\">\r\n          </div>\r\n      </div>\r\n      <div class=\"row mt-5 mb-5\">\r\n        <div class=\"col-sm-3\"></div>\r\n        <div class=\"col-sm-6\">\r\n          <h1 class=\"resources-content-header-2 text-center\">Get more inspiration & free resources</h1>\r\n          <p class=\"resources-content-sub-3 mt-2\">No spam, just information that will help you build a resume that makes you feel relevant and well represented.</p>\r\n          <div class=\"text-center\">\r\n            <input class=\"resources-content-input-1 mr-2 input-email\" type=\"email\" placeholder=\"Email Address\">\r\n            <input class=\"resources-content-button-2 input-btn\" type=\"submit\" value=\"SUBSCRIBE\">\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-3\"></div>\r\n      </div>\r\n  </div>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/components/resources/resources.component.scss":
/*!***********************************************************!*\
  !*** ./src/components/resources/resources.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".resources-img-w6 {\n  width: 60%; }\n\n.resources-img-w9 {\n  width: 90%; }\n\n.resources-content-header-1 {\n  font-size: 50px;\n  font-weight: 600;\n  color: #5D5D5D; }\n\n.resources-content-header-2 {\n  font-size: 40px;\n  font-weight: 600;\n  color: black;\n  text-align: center;\n  margin-bottom: -10px; }\n\n.resources-content-input-1 {\n  border: 1px #0072BB solid;\n  padding: 10px;\n  border-radius: 5px;\n  font-weight: 600;\n  width: 55%;\n  margin-bottom: 5%; }\n\n.resources-content-button-2 {\n  background: #0072BB;\n  border: 1px #0072BB solid;\n  color: white;\n  padding: 10px;\n  border-radius: 5px;\n  font-weight: 600;\n  width: 25%; }\n\n.resources-content-sub-1 {\n  margin-top: 40px;\n  font-size: 25px; }\n\n.resources-content-sub-2 {\n  margin-top: 80px;\n  font-size: 25px; }\n\n.resources-content-sub-3 {\n  font-size: 20px;\n  text-align: center;\n  padding-top: 0px; }\n\n.btn {\n  margin-right: 4px;\n  margin-bottom: 4px;\n  font-family: \"Raleway\", Arial, sans-serif;\n  font-size: 13px;\n  font-weight: 700 !important;\n  border-radius: 0px;\n  letter-spacing: 2px;\n  transition: 0.5s;\n  padding: 13px 30px;\n  text-transform: uppercase;\n  text-shadow: none !important;\n  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.15); }\n\n@media only screen and (min-width: 320px) {\n  .input-email {\n    width: 90% !important; }\n  .input-btn {\n    width: 50% !important; }\n  .img-people {\n    width: 90% !important; } }\n\n@media only screen and (min-width: 768px) {\n  .input-email {\n    width: 60% !important; }\n  .input-btn {\n    width: 35% !important; }\n  .img-people {\n    width: 60% !important; } }\n\n@media only screen and (min-width: 1440px) {\n  .input-email {\n    width: 55% !important; }\n  .input-btn {\n    width: 25% !important; }\n  .img-people {\n    width: 60% !important; } }\n"

/***/ }),

/***/ "./src/components/resources/resources.component.ts":
/*!*********************************************************!*\
  !*** ./src/components/resources/resources.component.ts ***!
  \*********************************************************/
/*! exports provided: ResourcesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourcesComponent", function() { return ResourcesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ResourcesComponent = /** @class */ (function () {
    function ResourcesComponent() {
    }
    ResourcesComponent.prototype.ngOnInit = function () {
    };
    ResourcesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-resources',
            template: __webpack_require__(/*! ./resources.component.html */ "./src/components/resources/resources.component.html"),
            styles: [__webpack_require__(/*! ./resources.component.scss */ "./src/components/resources/resources.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ResourcesComponent);
    return ResourcesComponent;
}());



/***/ }),

/***/ "./src/components/resume-editor/resume-editor.component.html":
/*!*******************************************************************!*\
  !*** ./src/components/resume-editor/resume-editor.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar2></app-navbar2>\r\n<div class=\"editable-item-toolbar\" style=\"display:none;\">\r\n  <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">\r\n    <label data-toggle=\"modal\" data-target=\"#exampleModalCenter\" class=\"btn btn-secondary \">\r\n      Add\r\n    </label>\r\n    <label (click)=\"deleteEntry()\" class=\"btn btn-danger\">\r\n      <i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i>\r\n    </label>\r\n  </div>\r\n</div>\r\n\r\n<!-- Modal -->\r\n<div class=\"modal fade\" id=\"modalEmail\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"modalEmailTitle\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <h5 class=\"modal-title\" id=\"modalEmailTitle\">Enter Email</h5>\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n          </button>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n          <input  [(ngModel)]=\"email\"  type=\"text\" class=\"form-control\" placeholder=\"Email Address\" >\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n          <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" (click)=\"sendResumeByEmail()\">Send</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n</div>\r\n<div class=\"modal fade\" id=\"exampleModalCenter\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\"\r\n  aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-lg modal-dialog-centered\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h5 class=\"modal-title text-muted p-4\" id=\"exampleModalCenterTitle\">Add Section</h5>\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <div class=\"row\">\r\n          <div class=\"col-lg-4 p-0\">\r\n            <div class=\"add-section-sidebar\">\r\n              <div>\r\n                <div class=\"add-section-list\">\r\n                  <!-- <div class=\"title text-primary text-center\">Recommended for You</div> -->\r\n                  <ul>\r\n                        <li (click)=\"chooseSection('professionalSummary')\"  class=\"{{ currentAddSectionItem == 'professionalSummary'? 'active' : ''}}\"><span>Professional Summary</span><i class=\"icon-23-free-star-two text-primary\"></i></li>\r\n                        <li (click)=\"chooseSection('education')\" class=\"{{ currentAddSectionItem == 'education'? 'active' : ''}}\"><span>Education and Qualifications</span><i class=\"icon-add-1\"></i></li>\r\n                        <li (click)=\"chooseSection('courses_licenses')\" class=\"{{ currentAddSectionItem == 'courses_licenses'? 'active' : ''}}\"><span>Courses and Licenses</span><i class=\"icon-lock\"></i></li>\r\n                        <li (click)=\"chooseSection('skills')\" class=\"{{ currentAddSectionItem == 'skills'? 'active' : ''}}\"><span>Skills</span><i class=\"icon-23-free-star-two text-primary\"></i></li>\r\n                        <!-- git <li (click)=\"chooseSection('core_competencies')\"  class=\"{{ currentAddSectionItem == 'core_competencies'? 'active' : ''}}\"><span>Core Competencies</span><i class=\"icon-23-free-star-two text-primary\"></i></li> -->\r\n                        <li (click)=\"chooseSection('experience')\"  class=\"{{ currentAddSectionItem == 'experience'? 'active' : ''}}\"><span>Employment History</span><i class=\"icon-23-free-star-two text-primary\"></i></li>\r\n                        <li (click)=\"chooseSection('references')\" class=\"{{ currentAddSectionItem == 'references'? 'active' : ''}}\"><span>References</span><i class=\"icon-23-free-star-two text-primary\"></i></li>\r\n                  </ul>\r\n                </div>\r\n                <!-- <div class=\"add-section-list\">\r\n                      <div class=\"title text-muted text-center\">All Sections</div>\r\n                      <ul>\r\n                        <li class=\"\"><span>Projects</span></li>\r\n                        <li class=\"\"><span>Books</span><i class=\"icon-lock\"></i></li>\r\n                        <li class=\"\"><span>Courses</span></li>\r\n                        <li class=\"\"><span>Languages</span></li>\r\n                        <li class=\"\"><span>Passions</span></li>\r\n                        <li class=\"\"><span>My Life Philosophy</span><i class=\"icon-lock\"></i>\r\n                        </li><li class=\"\"><span>Summary</span></li>\r\n                        <li class=\"\"><span>Strengths</span></li>\r\n                        <li class=\"\"><span>References</span><i class=\"icon-lock\"></i></li>\r\n                      </ul>\r\n                    </div> -->\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col\">\r\n            <div class=\"preview-item  px-5 \">\r\n              <div *ngIf=\"currentAddSectionItem == 'objectives' \" class=\"objectives\">\r\n                <h4 style=\"color: #FF9900;\"><strong>OBJECTIVES</strong></h4>\r\n                <ul>\r\n                  <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit</li>\r\n                  <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit</li>\r\n                  <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit</li>\r\n                  <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit</li>\r\n                </ul>\r\n                <hr class=\"dash\">\r\n              </div>\r\n              <div *ngIf=\"currentAddSectionItem === 'skills' \" class=\" row form\">\r\n                <div class=\"has-search col-12\">\r\n                  <span class=\"fa fa-search form-control-feedback\"></span>\r\n                  <ng-select class=\"custom\" (change)=\"selectJob()\" placeholder=\"Job Title\" [(ngModel)]=\"currentJob\">\r\n                    <ng-option *ngFor=\"let job of jobTitlesFiltered\" [value]=\"job\">{{job.JOB_VALUE}}</ng-option>\r\n                  </ng-select>\r\n                  <virtual-scroller #scroll [items]=\"jobSkillsFiltered\">\r\n                    <ul class=\"mt-4 list-group \">\r\n                      <li class=\"p-0\" (click)=\"addItemSkill(item?.SKILL_VALUE)\" *ngFor=\"let item of scroll.viewPortItems; let i = index\">\r\n                        <div class=\"row\">\r\n                          <div class=\"col-1 p-0\">\r\n                            <ng-container *ngIf=\"skills.indexOf(item?.SKILL_VALUE) < 0; else elseSkills\">\r\n                                   <span style=\"display: block;     margin-left: auto;     margin-right: auto; writing-mode: tb-rl; font-size: 12px; margin-top: 15px;\" class=\"action \"> ADD </span>\r\n                            </ng-container>\r\n                            <ng-template #elseSkills>\r\n                                   <span  style=\"display: block;     margin-left: auto;     margin-right: auto; writing-mode: tb-rl; font-size: 12px; margin-top: 15px;\" \r\n                                class=\"action\"> REMOVE </span>\r\n                            </ng-template>\r\n                          </div>\r\n                          <div class=\"col-11 p-3\">\r\n                            <span class=\"\">{{item?.SKILL_VALUE}}</span>\r\n\r\n                          </div>\r\n                        </div>\r\n                      </li>\r\n                    </ul>\r\n                  </virtual-scroller>\r\n                </div>\r\n\r\n              </div>\r\n              <div *ngIf=\"currentAddSectionItem === 'professionalSummary' \" class=\" row form\">\r\n                <div class=\"has-search col-12\">\r\n                  <span class=\"fa fa-search form-control-feedback\"></span>\r\n                  <ng-select class=\"custom\" (change)=\"selectJob()\" placeholder=\"Job Title\" [(ngModel)]=\"currentJob\">\r\n                    <ng-option *ngFor=\"let job of jobTitlesFiltered\" [value]=\"job\">{{job.JOB_VALUE}}</ng-option>\r\n                  </ng-select>\r\n                  <virtual-scroller #scroll [items]=\"jobProfessionalSummaryFiltered\">\r\n                    <ul class=\"mt-4 list-group \">\r\n                      <li class=\"p-0\" (click)=\"addItemJobProfessionalSummary(item?.summary)\" *ngFor=\"let item of scroll.viewPortItems; let i = index\">\r\n                        <div class=\"row\">\r\n                          <div class=\"col-1 p-0\">\r\n                            <ng-container *ngIf=\"professionalSummary.indexOf(item?.summary) < 0; else elseJobProfSummary\">\r\n                                   <span style=\"display: block;     margin-left: auto;     margin-right: auto; writing-mode: tb-rl; font-size: 12px; margin-top: 15px;\" class=\"action \"> ADD </span>\r\n                            </ng-container>\r\n                            <ng-template #elseJobProfSummary>\r\n                                  \r\n                            <span  style=\"display: block;     margin-left: auto;     margin-right: auto; writing-mode: tb-rl; font-size: 12px; margin-top: 15px;\" \r\n                                class=\"action\"> REMOVE </span>\r\n\r\n                            </ng-template>\r\n                        \r\n                       \r\n                          </div>\r\n                          <div class=\"col-11 p-3\">\r\n                            <span class=\"\">{{item?.summary}}</span>\r\n\r\n                          </div>\r\n                        </div>\r\n                      </li>\r\n                    </ul>\r\n                  </virtual-scroller>\r\n                </div>\r\n\r\n              </div>\r\n             \r\n              <div *ngIf=\"currentAddSectionItem === 'experience' \" class=\"experience form-group row\">\r\n                <div class=\"col mb-3\">\r\n                  <div class=\"has-search\">\r\n                    <span class=\"fa fa-search form-control-feedback\"></span>\r\n                    <ng-select class=\"custom\" placeholder=\"Job Title\" (change)=\"selectJob()\" [(ngModel)]=\"currentJob\">\r\n                      <ng-option *ngFor=\"let job of jobTitlesFiltered\" [value]=\"job\">{{job.JOB_VALUE}}</ng-option>\r\n                    </ng-select>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-6  mb-3\">\r\n                  <input [(ngModel)]=\"experience.company\" type=\"text\" class=\"form-control\" placeholder=\"Employer\">\r\n                </div>\r\n                <div class=\"col-6  mb-3\">\r\n                  <input [(ngModel)]=\"experience.city\" type=\"text\" class=\"form-control\" placeholder=\"City\">\r\n                </div>\r\n                <div class=\"col-6  mb-3\">\r\n                  <input [(ngModel)]=\"experience.state\" type=\"text\" class=\"form-control\" placeholder=\"State\">\r\n                </div>\r\n                <div class=\"col-12  mb-3\">\r\n                  <virtual-scroller #scroll [items]=\"jobDescriptionsFiltered\">\r\n                    <ul class=\"mt-4 list-group \">\r\n                      <li (click)=\"addItemJobDescription(item?.DESCRIPTION_VALUE)\" class=\"p-0\" *ngFor=\"let item of scroll.viewPortItems\">\r\n                        <div class=\"row\">\r\n                          <div class=\"col-1 p-0\">\r\n                            <ng-container *ngIf=\"experience.desc.indexOf(item?.DESCRIPTION_VALUE) < 0; else elseJobDescription\">\r\n                                    <span style=\"display: block;     margin-left: auto;     margin-right: auto; writing-mode: tb-rl; font-size: 12px; margin-top: 15px;\" class=\"action \"> ADD </span>\r\n                            </ng-container>\r\n                            <ng-template #elseJobDescription>\r\n                                    <span  style=\"display: block;     margin-left: auto;     margin-right: auto; writing-mode: tb-rl; font-size: 12px; margin-top: 15px;\" \r\n                                class=\"action\"> REMOVE </span>\r\n                            </ng-template>\r\n                          </div>\r\n                          <div class=\"col-11 p-3\">\r\n                            <span class=\"\">{{item?.DESCRIPTION_VALUE}}</span>\r\n\r\n                          </div>\r\n                        </div>\r\n                      </li>\r\n                    </ul>\r\n                  </virtual-scroller>\r\n                  <!-- <textarea class=\"form-control\" [(ngModel)]=\"experience.desc\" ></textarea> -->\r\n                </div>\r\n                <!-- <h4 style=\"color: #FF9900;\"><strong>EXPERIENCE</strong></h4>\r\n        \r\n                    <strong>SALES AND MARKETING DIRECTOR<span style=\"float: right;\">2011-2013</span></strong>\r\n                    <p>GREAT COMPANY<span style=\"float: right;\">MICHIGAN, MI</span></p>\r\n                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elitLorem ipsum dolor sit amet, consectetur adipisicing elitLorem ipsum dolor sit amet, consectetur</p>\r\n                    <hr class=\"dash\"> -->\r\n              </div>\r\n              <div *ngIf=\"currentAddSectionItem === 'education' \"class=\"education\">\r\n                  <div class=\"form-group\">\r\n                    <input type=\"text\" class=\"form-control mb-3\" placeholder=\"Year\" [(ngModel)]=\"education.year\">\r\n                    <input type=\"text\" class=\"form-control mb-3\" placeholder=\"School\" [(ngModel)]=\"education.school\">\r\n                    <textarea class=\"form-control mb-3\" placeholder=\"Description\" [(ngModel)]=\"education.info1\"></textarea>\r\n                  </div>\r\n              </div>\r\n              <div *ngIf=\"currentAddSectionItem === 'courses_licenses' \">\r\n                  <div class=\"form-group\">\r\n                    <input type=\"text\" class=\"form-control mb-3\" placeholder=\"Year\" [(ngModel)]=\"coursesLicenses.year\">\r\n                    <input type=\"text\" class=\"form-control mb-3\" placeholder=\"Courses or Licenses\" [(ngModel)]=\"coursesLicenses.coursesLicenses\">\r\n                    <textarea class=\"form-control mb-3\" placeholder=\"Description\" [(ngModel)]=\"coursesLicenses.info1\"></textarea>\r\n                  </div>\r\n              </div>\r\n              <div *ngIf=\"currentAddSectionItem === 'references'\">\r\n                <div class=\"form-group\">\r\n                  <input [(ngModel)]=\"references.name\" type=\"text\" class=\"form-control\" placeholder=\"Name\">\r\n                </div>\r\n                <div class=\"form-group\">\r\n                  <input [(ngModel)]=\"references.contactNumber\" type=\"tel\" class=\"form-control\" placeholder=\"Contact Number\">\r\n                </div>\r\n                <div class=\"form-group\">\r\n                  <input [(ngModel)]=\"references.address\" type=\"text\" class=\"form-control\" placeholder=\"Address\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"modal-footer px-4 py-2\">\r\n        <div class=\"row\">\r\n          <div class=\"col-8 p-3\">\r\n            Include any majors, minors, or specializations that are relevant to your next desired role and is part of\r\n            your degree(s) or field of study.\r\n          </div>\r\n          <div class=\"col-4 p-4\">\r\n            <button type=\"button\" class=\"btn btn-primary btn-block m-top-1\" data-dismiss=\"modal\" (click)=\"addSection(currentAddSectionItem)\">Add\r\n              to Resume</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"modal fade\" id=\"exampleModalCenter2\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle2\"\r\n  aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-md modal-dialog-centered\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h5 class=\"modal-title text-muted p-4\" id=\"exampleModalCenterTitle2\">Add Photo</h5>\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body p-0\">\r\n        <div class=\"image-editor-view\">\r\n          <div class=\"avatar-panel\">\r\n            <img [src]=\"ResumeJson?.basic.profile ? ResumeJson?.basic.profile : 'assets/images/Resume/profile-placeholder.svg'\"\r\n              class=\"img-responsive img-circle\" style=\"height:140px; width: 140px; border: 1px solid rgb(230, 230, 230);\">\r\n            <div class=\"responsive-transition-item avatar-button-container img-circle animated-hover fadeIn\">\r\n              <button type=\"button\" class=\"btn btn-primary btn-icon\"><i class=\"icon icon-13-trash-bin btn-icon-single\"></i></button>\r\n            </div>\r\n          </div>\r\n          <div class=\"import-panel\">\r\n            <div class=\"row\">\r\n              <div class=\"col text-center p-4\">\r\n                <p> <span class=\"text-muted \">Import photo</span></p>\r\n                <label for=\"fileInput\" class=\"btn btn-outline-info my-0 mx-2\">From Computer</label>\r\n                <input id=\"fileInput\" type=\"file\" accept=\"image/*\" capture class=\"hidden\" accept=\"image/*\" (change)=\"previeImage($event)\">\r\n                <button type=\"button\" class=\"btn btn-info top-ok mx-2 px-5\" data-dismiss=\"modal\">OK</button>\r\n                <!-- <button type=\"button\" class=\"btn btn-facebook btn-block btn-icon m-top-1\">\r\n                    <i class=\"icon icon-facebook-squared btn-icon-right\"></i>From Facebook\r\n                  </button> -->\r\n              </div>\r\n              <!-- <div class=\"col-sm-4 col-sm-offset-2 align-self-end\">\r\n                  <button type=\"button\" class=\"btn btn-purple btn-block top-ok\">OK</button>\r\n                </div> -->\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"modal-footer bg-light\">\r\n        <p class=\"text-dark text-center p-3 m-0\">Disclaimer. Keep in mind that in some US states, having a photo on\r\n          your resume is forbidden.</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"container-fluid\">\r\n  <div class=\"row resume-editor\">\r\n    <div class=\"col-lg-2 sidebar\">\r\n      <div class=\"row\" *ngIf=\"isSidebarAction === 'main'\">\r\n        <div class=\"col-12 py-3 pl-2rem pr-3rem bottom-border\">\r\n          <button type=\"button\" class=\"btn btn-info btn-block btn-add-section\" data-toggle=\"modal\" data-target=\"#exampleModalCenter\">\r\n            <i class=\"fa fa-plus-square pr-3\"></i>\r\n            <span class=\"spn-txt\">Add New Section</span>\r\n          </button>\r\n        </div>\r\n        <div class=\"col-12  py-3 px-5 border-bottom\">\r\n          <!-- <button (click)=\"save()\" type=\"button\" class=\"btn  btn-info btn-block\" > -->\r\n          <a class=\"sidebar-btn \" (click)=\"chooseTemplate()\">\r\n            <i class=\"fa fa-th-list pr-3\"></i>\r\n            <span class=\"spn-txt\">Pick Template</span>\r\n          </a>\r\n        </div>\r\n        <div class=\"col-12  py-3 px-5 border-bottom\">\r\n          <!-- <button (click)=\"download()\" type=\"button\" class=\"btn  btn-info btn-block\" > -->\r\n          <a class=\"sidebar-btn\" (click)=\"download()\">\r\n            <i class=\"fa fa-download pr-3\"></i>\r\n            <span class=\"spn-txt\">Download</span>\r\n          </a>\r\n          <!-- </button> -->\r\n        </div>\r\n        <div class=\"col-12  py-3 px-5 border-bottom\">\r\n            <a class=\"sidebar-btn\" data-toggle=\"modal\" data-target=\"#modalEmail\">\r\n              <i class=\"fa fa-envelope pr-3\"></i>\r\n              <span class=\"spn-txt\">Send to Email</span> \r\n            </a>\r\n        </div>\r\n        <div class=\"col-12  py-3 px-5 border-bottom\">\r\n          <!-- <button (click)=\"save()\" type=\"button\" class=\"btn  btn-info btn-block\" > -->\r\n          <a class=\"sidebar-btn \" (click)=\"save()\">\r\n            <i class=\"fa fa-save pr-3\"></i>\r\n            <span class=\"spn-txt\">Save</span>\r\n          </a>\r\n        </div>\r\n     \r\n      </div>\r\n      <div *ngIf=\"isSidebarAction === 'chooseTemplate'\" class=\"row\">\r\n        <div class=\"col-12 py-3 px-2 border-bottom\">\r\n          <button (click)=\"gotoMainSideBar()\" type=\"button\" class=\"btn btn-info btn-block btn-add-section\">\r\n            <i class=\"fa fa-arrow-left pr-3\"></i>\r\n            <span class=\"spn-txt\">Back to Navigation</span>\r\n          </button>\r\n        </div>\r\n        <div class=\"col-12 py-3 px-4\" style=\"max-height: 1127px;\r\n        overflow: scroll;\">\r\n            <div class=\"mb-3 templates\" (click)=\"selectTemplate('resume1')\">\r\n                <img src=\"assets/images/Resume Templates/8.jpg\" style=\"width:100%;\" alt=\"\">\r\n            </div>\r\n            <div class=\"mb-3 templates\" (click)=\"selectTemplate('resume2')\">\r\n                <img src=\"assets/images/Resume Templates/9.jpg\" style=\"width:100%;\" alt=\"\">\r\n            </div>\r\n            <div class=\"mb-3 templates\" (click)=\"selectTemplate('resume4')\">\r\n                <img src=\"assets/images/Resume Templates/16.jpg\" style=\"width:100%;\" alt=\"\">\r\n            </div>\r\n            <div class=\"mb-3 templates\" (click)=\"selectTemplate('resume3')\">\r\n                <img src=\"assets/images/Resume Templates/5.jpg\" style=\"width:100%;\" alt=\"\">\r\n            </div>\r\n            <div class=\"mb-3 templates\" (click)=\"selectTemplate('resume5')\">\r\n                <img src=\"assets/images/Resume Templates/1 PR_ResumeTemplate.PNG\" style=\"width:100%;\" alt=\"\">\r\n            </div>\r\n            <div class=\"mb-3 templates\" (click)=\"selectTemplate('resume6')\">\r\n                <img src=\"assets/images/Resume Templates/1.jpg\" style=\"width:100%;\" alt=\"\">\r\n            </div>\r\n            <div class=\"mb-3 templates\" (click)=\"selectTemplate('resume8')\">\r\n                <img src=\"assets/images/Resume Templates/3.jpg\" style=\"width:100%;\" alt=\"\">\r\n            </div>\r\n            <div class=\"mb-3 templates\" (click)=\"selectTemplate('resume9')\">\r\n                <img src=\"assets/images/Resume Templates/9 PR_ResumeTemplate.PNG\" style=\"width:100%;\" alt=\"\">\r\n            </div>\r\n            <div class=\"mb-3 templates\" (click)=\"selectTemplate('resume11')\">\r\n                <img src=\"assets/images/Resume Templates/14.jpg\" style=\"width:100%;\" alt=\"\">\r\n            </div>  \r\n            <div class=\"mb-3 templates\" (click)=\"selectTemplate('resume12')\">\r\n                <img src=\"assets/images/Resume Templates/30 PR_ResumeTemplate_New.PNG\" style=\"width:100%;\" alt=\"\">\r\n            </div>\r\n            <div class=\"mb-3 templates\" (click)=\"selectTemplate('resume13')\">\r\n                <img src=\"assets/images/Resume Templates/28 PR_ResumeTemplate_New.PNG\" style=\"width:100%;\" alt=\"\">\r\n            </div>\r\n            <div class=\"mb-3 templates\" (click)=\"selectTemplate('resume14')\">\r\n                <img src=\"assets/images/Resume Templates/23 PR_ResumeTemplate.PNG\" style=\"width:100%;\" alt=\"\">\r\n            </div>\r\n            <div class=\"mb-3 templates\" (click)=\"selectTemplate('resume15')\">\r\n                <img src=\"assets/images/Resume Templates/11 PR_ResumeTemplate.PNG\" style=\"width:100%;\" alt=\"\">\r\n            </div>\r\n            <div class=\"mb-3 templates\" (click)=\"selectTemplate('resume16')\">\r\n                <img src=\"assets/images/Resume Templates/10 PR_ResumeTemplate.PNG\" style=\"width:100%;\" alt=\"\">\r\n            </div>\r\n            <div class=\"mb-3 templates\" (click)=\"selectTemplate('resume17')\">\r\n                <img src=\"assets/images/Resume Templates/15.jpg\" style=\"width:100%;\" alt=\"\">\r\n            </div>\r\n            <div class=\"mb-3 templates\" (click)=\"selectTemplate('resume18')\">\r\n                <img src=\"assets/images/Resume Templates/22 PR_ResumeTemplate.PNG\" style=\"width:100%;\" alt=\"\">\r\n            </div>\r\n            <div class=\"mb-3 templates\" (click)=\"selectTemplate('resume19')\">\r\n                <img src=\"assets/images/Resume Templates/28 PR_ResumeTemplate.PNG\" style=\"width:100%;\" alt=\"\">\r\n            </div> \r\n            <div class=\"mb-3 templates\" (click)=\"selectTemplate('resume20')\">\r\n                <img src=\"assets/images/Resume Templates/17 PR_ResumeTemplate.PNG\" style=\"width:100%;\" alt=\"\">\r\n            </div>\r\n            <div class=\"mb-3 templates\" (click)=\"selectTemplate('resume21')\">\r\n                <img src=\"assets/images/Resume Templates/18 PR_ResumeTemplate.PNG\" style=\"width:100%;\" alt=\"\">\r\n            </div>\r\n            <div class=\"mb-3 templates\" (click)=\"selectTemplate('resume22')\">\r\n                <img src=\"assets/images/Resume Templates/15 PR_ResumeTemplate.PNG\" style=\"width:100%;\" alt=\"\">\r\n            </div>\r\n            <div class=\"mb-3 templates\" (click)=\"selectTemplate('resume23')\">\r\n                <img src=\"assets/images/Resume Templates/21 PR_ResumeTemplate.PNG\" style=\"width:100%;\" alt=\"\">\r\n            </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col-lg-10 m-0 p-0\">\r\n      <div class=\"preview mt-0 mb-5\">\r\n        <div class=\"my-3 row justify-content-left\">\r\n          <div class=\"col p-0\">\r\n            <button (click)=\"undo()\" class=\"btn btn-light btn-square animated-hover mr-3\"><i class=\"fa fa-undo text-primary\"></i></button>\r\n            <button (click)=\"redo()\" class=\"btn btn-light btn-square animated-hover\"><i class=\"fa fa-repeat text-primary\"></i></button>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col p-0\">\r\n            <router-outlet></router-outlet>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/components/resume-editor/resume-editor.component.scss":
/*!*******************************************************************!*\
  !*** ./src/components/resume-editor/resume-editor.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".resume-editor ::ng-deep {\n  background-color: #F3F3F3; }\n  .resume-editor ::ng-deep .medium-editor-element {\n    min-height: auto !important; }\n  .resume-editor ::ng-deep .medium-editor-element p {\n      display: inline;\n      margin: 0;\n      padding: 0; }\n  .resume-editor ::ng-deep .sidebar {\n    border-right: solid 1px gainsboro; }\n  .resume-editor ::ng-deep .sidebar .templates {\n      box-shadow: 0 0 25px 0 #ccc;\n      position: relative;\n      border: 2px solid transparent;\n      transition: border-color .3s ease-out;\n      cursor: pointer; }\n  .resume-editor ::ng-deep .sidebar .sidebar-btn {\n      cursor: pointer; }\n  .resume-editor ::ng-deep .preview {\n    margin: 3rem 11rem; }\n  .resume-editor ::ng-deep .preview .document {\n      border: 1px solid #b4b4b4;\n      background-color: #fff; }\n  .resume-editor ::ng-deep .preview .document p {\n        font-size: 10px;\n        margin-bottom: .2rem; }\n  .resume-editor ::ng-deep .preview .document .content-container {\n        height: 279mm;\n        max-height: 279mm; }\n  .resume-editor ::ng-deep .preview .document .content-container * {\n          max-height: 100%; }\n  .resume-editor ::ng-deep .preview .document .content-container .content {\n          transition: background 1s; }\n  .resume-editor ::ng-deep .preview .document .basic img {\n        cursor: pointer; }\n  .resume-editor ::ng-deep .preview .document .basic img:hover {\n        opacity: 0.8; }\n  .resume-editor ::ng-deep .preview .editable-container {\n      transition: background 1s;\n      border: 1px solid transparent;\n      border-radius: 5px;\n      padding: 1rem;\n      position: relative; }\n  @-webkit-keyframes showNav {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n  @keyframes showNav {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n  .resume-editor ::ng-deep .preview .editable-container .editable-toolbar {\n        position: absolute;\n        left: 39%;\n        top: -18px; }\n  .resume-editor ::ng-deep .preview .editable-container.active {\n      background-color: #fff; }\n  .resume-editor ::ng-deep .preview .editable-container:hover {\n      border: 1px solid #17a2b8;\n      border-radius: 5px; }\n  .resume-editor ::ng-deep .preview .editable:focus {\n      outline: 0px solid transparent; }\n  .editable-item-toolbar {\n  position: absolute;\n  z-index: 1; }\n  .image-editor-view {\n  padding-bottom: 40px; }\n  .image-editor-view .avatar-panel {\n    margin-top: 0;\n    position: relative;\n    margin: 30px auto;\n    width: 140px;\n    height: 140px; }\n  .image-editor-view .avatar-panel .img-circle {\n      border-radius: 50%; }\n  .image-editor-view .avatar-panel .img-responsive {\n      display: block;\n      max-width: 100%;\n      height: auto; }\n  .image-editor-view .avatar-panel .avatar-button-container {\n      text-align: center;\n      line-height: 150px; }\n  .image-editor-view .avatar-panel .animated-hover.fadeIn, .image-editor-view .avatar-panel .animated-hover .fadeIn {\n      opacity: 0; }\n  .image-editor-view .avatar-panel .responsive-transition-item {\n      position: absolute;\n      top: 0;\n      left: 0;\n      bottom: 0;\n      border: 0;\n      right: 0; }\n  .image-editor-view .import-panel {\n    color: #676767; }\n  .image-editor-view .import-panel .hidden, .image-editor-view .import-panel .hide {\n      display: none !important; }\n  .add-section-sidebar {\n  max-height: 490px;\n  overflow: auto;\n  -ms-overflow-style: none; }\n  .add-section-sidebar .add-section-list ul {\n    list-style: none;\n    overflow-x: hidden; }\n  .add-section-sidebar .add-section-list ul li {\n      height: 55px;\n      border-bottom: 1px solid #e6e6e6;\n      display: flex;\n      align-items: center;\n      cursor: pointer; }\n  .add-section-sidebar .add-section-list .title {\n    justify-content: center; }\n  .add-section-sidebar .add-section-list li.active {\n    background-color: #eaf8f3;\n    color: #00c091;\n    margin: -1px -16px 1px;\n    padding-left: 16px;\n    padding-right: 16px; }\n  .has-search ul.list2 {\n  font-size: 1rem;\n  width: 400px; }\n  .has-search ul.listdown {\n  list-style: none;\n  background-color: #fff;\n  z-index: 1;\n  position: absolute;\n  font-size: .8rem;\n  border: 1px solid #b4b4b4;\n  max-height: 265px;\n  overflow: scroll; }\n  .has-search ul.listdown li:hover {\n    background-color: #f6f8fa;\n    cursor: pointer; }\n  .has-search .form-control {\n  padding-left: 2.375rem; }\n  .has-search .form-control-feedback {\n  position: absolute;\n  z-index: 2;\n  display: block;\n  width: 2.375rem;\n  height: 2.375rem;\n  line-height: 2.375rem;\n  text-align: center;\n  pointer-events: none;\n  color: #aaa; }\n  .ng-select.custom ::ng-deep .ng-select-container .ng-value-container .ng-placeholder {\n  padding-left: 23px; }\n  .ng-select.custom ::ng-deep .ng-select-container .ng-value-container .ng-value {\n  padding-left: 23px; }\n  virtual-scroller {\n  display: block;\n  height: 368px;\n  margin-top: 10px; }\n  virtual-scroller ul {\n    padding-right: 1rem; }\n  virtual-scroller ul li {\n      padding: 1em 0;\n      margin-bottom: 1rem;\n      cursor: pointer;\n      border: 1px solid #b4b4b4; }\n  virtual-scroller ul li .row {\n        margin: 0; }\n  virtual-scroller ul li .row .col-1 {\n          background-color: #36C39F;\n          color: #fff; }\n  virtual-scroller ul li .row span.action {\n          -webkit-writing-mode: tb-rl;\n              -ms-writing-mode: tb-rl;\n                  writing-mode: tb-rl; }\n  .virtual-content {\n  display: block;\n  width: 100%;\n  height: 30px; }\n  /* width */\n  ::-webkit-scrollbar {\n  width: 10px; }\n  /* Track */\n  ::-webkit-scrollbar-track {\n  background: #f1f1f1; }\n  /* Handle */\n  ::-webkit-scrollbar-thumb {\n  background: #b4b4b4; }\n  /* Handle on hover */\n  ::-webkit-scrollbar-thumb:hover {\n  background: #888; }\n"

/***/ }),

/***/ "./src/components/resume-editor/resume-editor.component.ts":
/*!*****************************************************************!*\
  !*** ./src/components/resume-editor/resume-editor.component.ts ***!
  \*****************************************************************/
/*! exports provided: ResumeEditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResumeEditorComponent", function() { return ResumeEditorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! html2canvas */ "./node_modules/html2canvas/dist/npm/index.js");
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(html2canvas__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jspdf */ "./node_modules/jspdf/dist/jspdf.min.js");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jspdf__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_services_json_resume_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/services/json-resume.service */ "./src/services/json-resume.service.ts");
/* harmony import */ var src_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/services/auth.service */ "./src/services/auth.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var src_services_dom_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/services/dom.service */ "./src/services/dom.service.ts");
/* harmony import */ var ngx_papaparse__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-papaparse */ "./node_modules/ngx-papaparse/fesm5/ngx-papaparse.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};










var ResumeEditorComponent = /** @class */ (function () {
    function ResumeEditorComponent(ResumeJsonService, authService, spinner, domService, papa, router) {
        //   $(window).on('beforeunload', (e) => {
        // // Chrome requires returnValue to be set.
        //     event.preventDefault();
        //      this.save().then(
        //       res => {
        //         console.log('saved');
        //         return undefined;
        //       },
        //       err => ''
        //     );
        //   //  e.returnValue = 'dsd';
        //   });
        var _this = this;
        this.ResumeJsonService = ResumeJsonService;
        this.authService = authService;
        this.spinner = spinner;
        this.domService = domService;
        this.papa = papa;
        this.router = router;
        this.isSidebarAction = 'main';
        this.currentJob = {
            JOB_ID: undefined,
            JOB_VALUE: undefined
        };
        this.education = {
            year: undefined,
            school: undefined,
            info1: undefined,
            info2: undefined
        };
        this.coursesLicenses = {
            year: undefined,
            school: undefined,
            info1: undefined,
        };
        this.objective = 'Lorem ipsum dolor sit amet, consectetur adipisicing elitLorem ipsum dolor sit amet';
        this.experience = {
            position: undefined,
            company: undefined,
            desc: [],
            date: '2011 - 2013',
            place: 'MICHIGAN, MI',
            city: undefined,
            state: undefined
        };
        this.skills = [];
        this.professionalSummary = [];
        this.references = {
            name: undefined,
            contactNumber: undefined,
            address: undefined
        };
        // $(window).on('unload', function(){
        //   console.log('test');
        //   console.log('test');
        //   console.log('test');
        //   console.log('test');
        //   // this.save();
        // });
        console.log('constructor executed : ResumeEditor');
        this.currentAddSectionItem = 'profSummary';
        this.ResumeJsonService.getAllJobs().subscribe(function (res) {
            var csv = res;
            _this.papa.parse(csv._body, {
                complete: function (result) {
                    console.log(result, 'parsed');
                    _this.jobTitles = result.data;
                    _this.jobTitlesFiltered = result.data;
                },
                header: true
            });
        });
        this.ResumeJsonService.getAllSkills().subscribe(function (res) {
            var csv = res;
            _this.papa.parse(csv._body, {
                complete: function (result) {
                    console.log(result, 'parsed');
                    _this.jobSkills = result.data;
                    _this.jobSkillsFiltered = result.data;
                },
                header: true
            });
        });
        this.ResumeJsonService.getAllJobDescriptions().subscribe(function (res) {
            var csv = res;
            _this.papa.parse(csv._body, {
                complete: function (result) {
                    console.log(result, 'parsed JOB');
                    _this.jobDescriptions = result.data;
                    _this.jobDescriptionsFiltered = result.data;
                    _this.spinner.hide();
                },
                header: true
            });
        });
        this.ResumeJsonService.getAllProfessionalSummary().subscribe(function (res) {
            var csv = res;
            _this.papa.parse(csv._body, {
                complete: function (result) {
                    console.log(result, 'parsed ProffSummary');
                    _this.jobProfessionalSummary = result.data;
                    _this.jobProfessionalSummaryFiltered = result.data;
                    _this.spinner.hide();
                },
                header: true
            });
        });
    }
    ResumeEditorComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('ngoninit executed : ResumeEditor');
        this.spinner.show();
        // this.offsetHeight = $('.content:eq(0)')[0].offsetHeight;
        this.ResumeJsonService.getResumeJson().subscribe(function (resumeJson) {
            console.log(resumeJson);
            _this.ResumeJson = resumeJson;
        });
        // this.activateEditor();
        // this.onEditorFocusAndOut();
        // this.domObserver();
    };
    ResumeEditorComponent.prototype.ngAfterViewInit = function () {
        // $('[data-toggle="popover"]').popover();
        this.pageBreaker = setInterval(this.pageBreakerObserver, 100);
    };
    ResumeEditorComponent.prototype.ngOnDestroy = function () {
        clearInterval(this.pageBreaker);
    };
    ResumeEditorComponent.prototype.domObserver = function () {
        var _this = this;
        var config = { subtree: true, childList: true };
        // Create an observer instance linked to the callback function
        this.observerEditor = new MutationObserver(function (mutationsList, observer) {
            _this.domObserverCallBack(mutationsList, observer);
        });
        // Start observing the target node for configured mutations
        jquery__WEBPACK_IMPORTED_MODULE_3__('.document').get().forEach(function (dom) {
            _this.observerEditor.observe(dom, config);
        });
        // this.observerEditor.observe($('.document')[0], config);
        // this.observerEditor.observe($('.document')[1], config);
    };
    // Callback function to execute when mutations are observed
    ResumeEditorComponent.prototype.domObserverCallBack = function (mutationsList, observer) {
        console.log(mutationsList, 'mutationsList');
        // this.pageBreakerObserver();
        this.activateEditor();
        this.onEditorFocusAndOut();
        console.log('editor activated');
        // for ( const mutation of mutationsList ) {
        //   console.log(mutation.type);
        //     if (mutation.type === 'characterData' || mutation.type === 'childList') {
        //         console.log('A child node has been added or removed.');
        //     }
        // }
        // this.activateEditor();
        // this.onEditorFocusAndOut();
    };
    ResumeEditorComponent.prototype.domObserverDisconnect = function () {
        this.observerEditor.disconnect();
    };
    ResumeEditorComponent.prototype.pageBreakerObserver = function () {
        var i = 0;
        var x = 0;
        var outerHtmlOverFlowed = '';
        var loop = true;
        var container;
        var containerClass;
        // const a = new Promise( (resolve , reject) => {
        if (jquery__WEBPACK_IMPORTED_MODULE_3__('.content:eq(0)')[0].scrollHeight > jquery__WEBPACK_IMPORTED_MODULE_3__('.content:eq(0)')[0].offsetHeight) {
            // debugger; 
            this.iteration = 0;
            console.log(this.iteration);
            console.log(jquery__WEBPACK_IMPORTED_MODULE_3__('.content:eq(0)')[0].scrollHeight + ' :Scroll Height', jquery__WEBPACK_IMPORTED_MODULE_3__('.content:eq(0)')[0].offsetHeight + ' :OffsetHEIGHT');
            this.offsetHeight = jquery__WEBPACK_IMPORTED_MODULE_3__('.content:eq(0)')[0].offsetHeight;
            if ((jquery__WEBPACK_IMPORTED_MODULE_3__('.content:eq(1)').length === 0)) {
                jquery__WEBPACK_IMPORTED_MODULE_3__('.document:eq(0)').clone().appendTo(jquery__WEBPACK_IMPORTED_MODULE_3__('.document:eq(0)').parent()[0]);
                jquery__WEBPACK_IMPORTED_MODULE_3__('.document:eq(1)').find('.content').empty();
                jquery__WEBPACK_IMPORTED_MODULE_3__('.document:eq(1)').find('.basic, .side').remove();
            }
            // this.ResumeJsonService.isPage2 = true
            container = jquery__WEBPACK_IMPORTED_MODULE_3__('.content:eq(0)').find('.editable-container').last().clone().empty();
            containerClass = '.' + container.attr('class').replace(/ /gi, '.');
            console.log('.content ' + containerClass + ':eq(1)', 'containerClass');
            // const element = $($('.content:eq(0)').find('.editable-item').get().reverse())[this.iteration];
            console.log(jquery__WEBPACK_IMPORTED_MODULE_3__('.content ' + containerClass + ':eq(1)').length);
            if (jquery__WEBPACK_IMPORTED_MODULE_3__('.content:eq(1)').find(containerClass).length === 0) {
                console.log('Append the container');
                jquery__WEBPACK_IMPORTED_MODULE_3__('.content:eq(1)').prepend(container);
            }
            // $(element).remove();
            // this.offsetHeight = $('.content:eq(0)')[0].offsetHeight;
            //  $('.content:eq(0)').find('.editable-item').last().detach().prependTo('.content ' + containerClass.replace(' ', '') + ':eq(1)');
            jquery__WEBPACK_IMPORTED_MODULE_3__('.content:eq(1)').find(containerClass).prepend(jquery__WEBPACK_IMPORTED_MODULE_3__('.content:eq(0)').find('.editable-item').last().detach());
            // outerHtmlOverFlowed += element;
            var scrollHeight = jquery__WEBPACK_IMPORTED_MODULE_3__('.content:eq(0)')[0].scrollHeight;
            if (jquery__WEBPACK_IMPORTED_MODULE_3__('.content:eq(0)').find('.editable-container').last().children().length === 0) {
                console.log('remove container');
                jquery__WEBPACK_IMPORTED_MODULE_3__('.content:eq(0)').find('.editable-container').last().remove();
            }
            this.iteration += 1;
        }
        else if (jquery__WEBPACK_IMPORTED_MODULE_3__('.content:eq(1)').find('.editable-item').length) {
            // debugger;
            container = jquery__WEBPACK_IMPORTED_MODULE_3__('.content:eq(1)').find('.editable-container').first().clone().empty();
            containerClass = '.' + container.attr('class').replace(/ /gi, '.');
            this.iteration2 = 0;
            var element = jquery__WEBPACK_IMPORTED_MODULE_3__('.content:eq(1)').find('.editable-item').get()[this.iteration2];
            var futureTotalHeight = jquery__WEBPACK_IMPORTED_MODULE_3__('.content:eq(1)').find('.editable-item').get()[0].offsetHeight + jquery__WEBPACK_IMPORTED_MODULE_3__('.content:eq(0)')[0].offsetHeight;
            if (jquery__WEBPACK_IMPORTED_MODULE_3__('.content:eq(0)').find(containerClass).length <= 1) {
                futureTotalHeight = jquery__WEBPACK_IMPORTED_MODULE_3__('.content:eq(1)').find('.editable-container')[0].offsetHeight + jquery__WEBPACK_IMPORTED_MODULE_3__('.content:eq(0)')[0].offsetHeight;
            }
            if (futureTotalHeight <= this.offsetHeight) {
                // debugger;
                if (jquery__WEBPACK_IMPORTED_MODULE_3__('.content:eq(0)').find(containerClass).length === 0) {
                    console.log('Append the container');
                    jquery__WEBPACK_IMPORTED_MODULE_3__('.content:eq(0)').append(container);
                }
                jquery__WEBPACK_IMPORTED_MODULE_3__('.content:eq(0)').find(containerClass).append(jquery__WEBPACK_IMPORTED_MODULE_3__('.content:eq(1)').find('.editable-item').first().detach());
                this.iteration2 += 1;
                if (jquery__WEBPACK_IMPORTED_MODULE_3__('.content:eq(1)').find('.editable-container').first().children().length === 0) {
                    jquery__WEBPACK_IMPORTED_MODULE_3__('.content:eq(1)').find('.editable-container').first().remove();
                }
            }
        }
        else {
            jquery__WEBPACK_IMPORTED_MODULE_3__('.document:eq(1)').remove();
        }
        // if ($('.content:eq(1)').find('*').get().length === 0) {
        //   $('.document:eq(1)').remove();
        // }
        // });
        // while ( $('.content:eq(0)')[0].scrollHeight > $('.content:eq(0)')[0].clientHeight ) {
        //   const container = $('.content:eq(0)').children().last().clone().empty();
        //   const containerClass = '.' + container.attr('class').replace(' ', '.');
        //   const element = $($('.content:eq(0)').find('*').get().reverse())[i];
        //   if ($('.content ' + containerClass + ':eq(1)').length === 0) {
        //     console.log('Append the container');
        //     $('.content:eq(1)').prepend(container);
        //   }
        //   $(element).detach().prependTo('.content ' + containerClass + ':eq(1)');
        //   i++;
        // }
        // a.then( () => {
        //   console.log('promise ended')
        //   if ($('.content:eq(1)').find('*').get().length) {
        //     $($('.content:eq(1)').children().first().find('*').get()).each( (i2, val2) => {
        //       if ($('.content:eq(0)')[0].clientHeight < 932) {
        //       $(val2).detach().appendTo($('.content:eq(0)').children().last());
        //       } else {
        //         return false;
        //       }
        //     });
        // }
        // })
        // let elementsPageBreak = '';
        // $($('.content:eq(0)').find('*').get().reverse()).each( (i, val) => {
        //   console.log($(val));
        //   if ( $('.content:eq(0)')[0].scrollHeight > $('.content:eq(0)')[0].clientHeight ) {
        //       this.ResumeJsonService.isPage2 = true;
        //       const container = $('.content:eq(0)').children().last().clone().empty();
        //       const containerClass = '.' + container.attr('class').replace(' ', '.');
        //       if ($('.content ' + containerClass + ':eq(1)').length === 0) {
        //         console.log('Append the container');
        //        $('.content:eq(1)').prepend(container);
        //       }
        //       elementsPageBreak += val.outerHTML;
        //       $(val).detach().prependTo('.content ' + containerClass + ':eq(1)');
        //   } 
        //   else if ($('.content:eq(0)')[0].clientHeight < 932) {
        //       if ($('.content:eq(1)').find('*').get().length) {
        //         $($('.content:eq(1)').children().first().find('*').get()).each( (i2, val2) => {
        //           if ($('.content:eq(0)')[0].clientHeight < 932) {
        //            $(val2).detach().appendTo($('.content:eq(0)').children().last());
        //           } else {
        //             return false;
        //           }
        //         });
        //       }
        //   }
        //    else {
        //       console.log(elementsPageBreak , 'html');
        //       return false;
        //     }
        // } );
    };
    ResumeEditorComponent.prototype.searchJobtitle = function (event) {
        this.jobTitlesFiltered = this.jobTitles.filter(function (item) {
            return (item.JOB_VALUE.toLowerCase().indexOf(event.target.value.toLowerCase()) > -1);
        });
    };
    ResumeEditorComponent.prototype.onSearch = function () {
        console.log('searching');
        this.isSearch = true;
    };
    ResumeEditorComponent.prototype.selectJob = function () {
        var _this = this;
        console.log(this.currentJob);
        this.isSearch = false;
        console.log('select', this.currentJob.JOB_ID);
        this.experience.position = this.currentJob.JOB_VALUE;
        this.currentJobTitleId = this.currentJob.JOB_ID;
        this.jobSkillsFiltered = this.jobSkills.filter(function (item) {
            return (item.JOB_ID.toLowerCase() === _this.currentJobTitleId.toLowerCase());
        });
        this.jobDescriptionsFiltered = this.jobDescriptions.filter(function (item) {
            return (item.JOB_ID.toLowerCase() === _this.currentJobTitleId.toLowerCase());
        });
        this.jobProfessionalSummaryFiltered = this.jobProfessionalSummary.filter(function (item) {
            return (item.job_id.toLowerCase() === _this.currentJobTitleId.toLowerCase());
        });
        console.log(this.jobProfessionalSummary);
    };
    ResumeEditorComponent.prototype.paginate = function (array, page_size, page_number) {
        --page_number; // because pages logically start with 1, but technically with 0
        return array.slice(page_number * page_size, (page_number + 1) * page_size);
    };
    ResumeEditorComponent.prototype.activateEditor = function () {
        jquery__WEBPACK_IMPORTED_MODULE_3__('.editable').off();
        jquery__WEBPACK_IMPORTED_MODULE_3__('.editable').unbind();
        this.ResumeJsonService.activateEditor();
    };
    ResumeEditorComponent.prototype.download = function () {
        return __awaiter(this, void 0, void 0, function () {
            var document, pdf;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        document = jquery__WEBPACK_IMPORTED_MODULE_3__('.document')[0];
                        pdf = new jspdf__WEBPACK_IMPORTED_MODULE_2___default.a('p', 'mm', [216, 279]);
                        return [4 /*yield*/, html2canvas__WEBPACK_IMPORTED_MODULE_1___default()(document, { backgroundColor: 'red' }).then(function (canvas) {
                                console.log(canvas);
                                try {
                                    // pdf.addPage(216, 279);
                                    console.log(canvas.toDataURL('image/jpeg', 1.0));
                                    pdf.addImage(canvas.toDataURL('image/jpeg', 1.0), 'JPEG', 0, 0, 216, 279);
                                    if (!jquery__WEBPACK_IMPORTED_MODULE_3__('.document')[1]) {
                                        pdf.save('test.pdf');
                                    }
                                }
                                catch (e) {
                                    alert('Error description: ' + e.message);
                                }
                            })];
                    case 1:
                        _a.sent();
                        if (jquery__WEBPACK_IMPORTED_MODULE_3__('.document')[1]) {
                            html2canvas__WEBPACK_IMPORTED_MODULE_1___default()(jquery__WEBPACK_IMPORTED_MODULE_3__('.document')[1], { backgroundColor: 'red' }).then(function (canvas2) {
                                console.log(canvas2);
                                try {
                                    pdf.addPage(216, 279);
                                    pdf.addImage(canvas2.toDataURL('image/jpeg', 1.0), 'JPEG', 0, 0, 216, 279);
                                    pdf.save('test.pdf');
                                }
                                catch (e) {
                                    alert('Error description: ' + e.message);
                                }
                            });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    ResumeEditorComponent.prototype.sendResumeByEmail = function () {
        return __awaiter(this, void 0, void 0, function () {
            var document, pdf;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.spinner.show();
                        document = jquery__WEBPACK_IMPORTED_MODULE_3__('.document')[0];
                        pdf = new jspdf__WEBPACK_IMPORTED_MODULE_2___default.a('p', 'mm', [216, 279]);
                        return [4 /*yield*/, html2canvas__WEBPACK_IMPORTED_MODULE_1___default()(document, { backgroundColor: 'red' }).then(function (canvas) {
                                try {
                                    // pdf.addPage(216, 279);
                                    pdf.addImage(canvas.toDataURL('image/jpeg', 1.0), 'JPEG', 0, 0, 216, 279);
                                    if (!jquery__WEBPACK_IMPORTED_MODULE_3__('.document')[1]) {
                                        //  pdf.save( 'test.pdf');
                                        // console.log( pdf.output('datauristring'));
                                        // const byteArray = Base64Binary.decodeArrayBuffer(pdf.output('datauri'));
                                        _this.ResumeJsonService.sendResumeByEmail({ to: _this.email, attachement: (pdf.output('datauristring')) }).subscribe(function (res) {
                                            console.log(res);
                                            _this.spinner.hide();
                                        });
                                    }
                                }
                                catch (e) {
                                    _this.spinner.hide();
                                    alert('Error : ' + e.message);
                                }
                            })];
                    case 1:
                        _a.sent();
                        if (jquery__WEBPACK_IMPORTED_MODULE_3__('.document')[1]) {
                            html2canvas__WEBPACK_IMPORTED_MODULE_1___default()(jquery__WEBPACK_IMPORTED_MODULE_3__('.document')[1], { backgroundColor: 'red' }).then(function (canvas2) {
                                console.log(canvas2);
                                try {
                                    pdf.addPage(216, 279);
                                    pdf.addImage(canvas2.toDataURL('image/jpeg', 1.0), 'JPEG', 0, 0, 216, 279);
                                    //  pdf.save( 'test.pdf');
                                    _this.ResumeJsonService.sendResumeByEmail({ to: _this.email, attachement: (pdf.output('datauristring')) }).subscribe(function (res) {
                                        console.log(res);
                                        _this.spinner.hide();
                                    });
                                }
                                catch (e) {
                                    _this.spinner.hide();
                                    alert('Error description: ' + e.message);
                                }
                            });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    ResumeEditorComponent.prototype.chooseSection = function (section) {
        this.currentAddSectionItem = section;
    };
    ResumeEditorComponent.prototype.addSection = function (section) {
        console.log(section);
        if (section === 'education') {
            this.addEducation();
        }
        else if (section === 'objectives') {
            this.addObjectives();
        }
        else if (section === 'experience') {
            this.addExperience();
        }
        else if (section === 'skills') {
            this.addSkills();
        }
        else if (section === 'professionalSummary') {
            this.addprofessionalSummary();
        }
        else if (section === 'references') {
            this.addReferences();
        }
        this.updateResumeJson();
        // this.activateEditor();
    };
    ResumeEditorComponent.prototype.deleteSection = function () {
        var confirmation = confirm('Are you sure you want to delete this section?');
        console.log(this.currentAddSectionItem);
        if (confirmation) {
            delete this.ResumeJson[this.currentAddSectionItem];
            // $('.summary').remove();
            jquery__WEBPACK_IMPORTED_MODULE_3__('.' + this.currentAddSectionItem).remove();
        }
    };
    ResumeEditorComponent.prototype.deleteEntry = function () {
        console.log(this.dataIndex);
        this.ResumeJson[this.currentAddSectionItem][this.currentAddSectionItem].splice(this.dataIndex, 1);
        jquery__WEBPACK_IMPORTED_MODULE_3__('.editable-item-toolbar').css({ 'display': 'none' });
        // if (section === 'education') {
        //   this.deleteEducationEntry();
        // } else if (section === 'objectives') {
        //   this.deleteObjectivesEntry();
        // } else if (section === 'experience') {
        //   this.deleteExperienceEntry();
        // } else if (section === 'skills') {
        //   this.deleteSkillsEntry();
        // }
        this.updateResumeJson();
        // this.activateEditor();
    };
    ResumeEditorComponent.prototype.addEducation = function () {
        if (this.ResumeJson.education) {
            this.ResumeJson.education.education.push(this.education);
        }
        else {
            this.ResumeJson.education = { title: 'Education', education: [] };
            this.ResumeJson.education.education.push(this.education);
        }
    };
    ResumeEditorComponent.prototype.addObjectives = function () {
        if (this.ResumeJson.objective) {
            this.ResumeJson.objective.push(this.objective);
        }
        else {
            this.ResumeJson.objective = [];
            this.ResumeJson.objective.push(this.objective);
        }
    };
    ResumeEditorComponent.prototype.addExperience = function () {
        if (this.ResumeJson.experience) {
            this.ResumeJson.experience.experience.push(this.experience);
        }
        else {
            this.ResumeJson.experience = { title: 'Employment History', experience: [] };
            this.ResumeJson.experience.experience.push(this.experience);
        }
        this.experience = {
            position: undefined,
            company: undefined,
            desc: [],
            date: '2011 - 2013',
            place: 'MICHIGAN, MI',
            city: undefined,
            state: undefined
        };
    };
    ResumeEditorComponent.prototype.addSkills = function () {
        if (this.ResumeJson.skills) {
            this.ResumeJson.skills.skills = this.ResumeJson.skills.skills.concat(this.skills);
        }
        else {
            this.ResumeJson.skills = { title: 'Skills', skills: [] };
            this.ResumeJson.skills.skills = this.ResumeJson.skills.skills.concat(this.skills);
        }
        this.skills = [];
    };
    ResumeEditorComponent.prototype.addprofessionalSummary = function () {
        if (this.ResumeJson.professionalSummary) {
            this.ResumeJson.professionalSummary.professionalSummary = this.ResumeJson.professionalSummary.professionalSummary.concat(this.professionalSummary);
        }
        else {
            this.ResumeJson.professionalSummary = { title: 'Professional Summary', professionalSummary: [] };
            this.ResumeJson.professionalSummary.professionalSummary = this.ResumeJson.professionalSummary.professionalSummary.concat(this.professionalSummary);
        }
        this.professionalSummary = [];
    };
    ResumeEditorComponent.prototype.addReferences = function () {
        if (this.ResumeJson.references) {
            this.ResumeJson.references.references.push(this.references);
        }
        else {
            this.ResumeJson.references = { title: 'References', references: [] };
            this.ResumeJson.references.references.push(this.references);
        }
        this.references = {
            name: undefined,
            contactNumber: undefined,
            address: undefined
        };
    };
    ResumeEditorComponent.prototype.addItemSkill = function (skill) {
        if (this.skills.indexOf(skill) < 0) {
            console.log(skill);
            this.skills.push(skill);
        }
        else {
            this.removeItemSkill(this.skills.indexOf(skill));
        }
    };
    ResumeEditorComponent.prototype.addItemJobDescription = function (desc) {
        if (this.experience.desc.indexOf(desc) < 0) {
            this.experience.desc.push(desc);
        }
        else {
            this.removeItemJobDescription(this.experience.desc.indexOf(desc));
        }
    };
    ResumeEditorComponent.prototype.addItemJobProfessionalSummary = function (profSummary) {
        if (this.professionalSummary.indexOf(profSummary) < 0) {
            console.log(profSummary);
            this.professionalSummary.push(profSummary);
        }
        else {
            this.removeItemJobProfessionalSummary(this.professionalSummary.indexOf(profSummary));
        }
    };
    ResumeEditorComponent.prototype.removeItemSkill = function (index) {
        console.log(index);
        this.skills.splice(index, 1);
    };
    ResumeEditorComponent.prototype.removeItemJobDescription = function (index) {
        console.log(index);
        this.experience.desc.splice(index, 1);
    };
    ResumeEditorComponent.prototype.removeItemJobProfessionalSummary = function (index) {
        console.log(index);
        this.professionalSummary.splice(index, 1);
    };
    ResumeEditorComponent.prototype.deleteEducationEntry = function () {
        this.ResumeJson.education.education.pop();
    };
    ResumeEditorComponent.prototype.deleteObjectivesEntry = function () {
        this.ResumeJson.objective.pop();
    };
    ResumeEditorComponent.prototype.deleteExperienceEntry = function () {
        this.ResumeJson.experience.experience.pop();
    };
    ResumeEditorComponent.prototype.deleteSkillsEntry = function () {
        this.ResumeJson.skills.skills.pop();
    };
    ResumeEditorComponent.prototype.onSaveChanges = function () {
        jquery__WEBPACK_IMPORTED_MODULE_3__('body').on('focus', '[contenteditable]', function () {
            var $this = jquery__WEBPACK_IMPORTED_MODULE_3__(this);
            $this.data('before', $this.html());
        }).on('blur keyup paste input', '[contenteditable]', function () {
            var $this = jquery__WEBPACK_IMPORTED_MODULE_3__(this);
            if ($this.data('before') !== $this.html()) {
                $this.data('before', $this.html());
                $this.trigger('change');
            }
        });
        jquery__WEBPACK_IMPORTED_MODULE_3__('[contenteditable]').on('change', function () {
            console.log('changed');
        });
    };
    ResumeEditorComponent.prototype.undo = function () {
        document.execCommand('undo', false, null);
    };
    ResumeEditorComponent.prototype.redo = function () {
        document.execCommand('redo', false, null);
    };
    ResumeEditorComponent.prototype.updateResumeJson = function () {
        this.ResumeJsonService.updateResumeJson(this.ResumeJson);
    };
    ResumeEditorComponent.prototype.onEditorFocusAndOut = function () {
        // $('.editable').focusin((e) => {
        //   this.ResumeJsonService.setActiveStateEditor(true);
        // }).focusout( () => {
        //   this.ResumeJsonService.setActiveStateEditor(false);
        // });
        var _this = this;
        // $('.editable')
        // .focus((e) => {
        // const $this = $(e.currentTarget);
        //  const container =  $this.closest( '.editable-container' ).addClass('active');
        // //  console.log($(this)`.closest( '.editable-container' )`
        // //  .attr('class').replace(/row|col-row-1|editable-container|active| |col-sm-12|/gi, ''));
        // const parentClass = $this.closest( '.editable-container' ).attr('class');
        // const currentSectionEditing = parentClass.includes('basic') ? 'basic' : parentClass.includes('education') ? 'education'
        // : parentClass.includes('experience') ? 'experience' : parentClass.includes('professionalSummary ') ? 'professionalSummary'
        // : 'skills';
        // this.ResumeJsonService.setCurrentSectionEditing(currentSectionEditing);
        // })
        // .blur( e => {
        //   const $this = $(e.currentTarget);
        //   const container = $this.closest( '.editable-container' ).removeClass('active');
        //   setTimeout( () => this.ResumeJsonService.setCurrentSectionEditing('') , 200);
        // });
        jquery__WEBPACK_IMPORTED_MODULE_3__('.editable-container').off();
        jquery__WEBPACK_IMPORTED_MODULE_3__('.editable-container').unbind();
        jquery__WEBPACK_IMPORTED_MODULE_3__('.editable-container').on('focusin', function (e) {
            _this.ResumeJsonService.setActiveStateEditor(true);
            // $('.editable-container').removeClass('active');
            var $this = jquery__WEBPACK_IMPORTED_MODULE_3__(e.currentTarget);
            $this.addClass('active');
            //  console.log($(this).closest( '.editable-container' )
            //  .attr('class').replace(/row|col-row-1|editable-container|active| |col-sm-12|/gi, ''));
            var parentClass = $this.attr('class');
            var currentSectionEditing = parentClass.includes('basic') ? 'basic' : parentClass.includes('education') ? 'education'
                : parentClass.includes('experience') ? 'experience' : parentClass.includes('professionalSummary ') ? 'professionalSummary'
                    : parentClass.includes('skills') ? 'skills' : parentClass.includes('references') ? 'references' : '';
            _this.ResumeJsonService.setCurrentSectionEditing(currentSectionEditing);
            _this.currentAddSectionItem = currentSectionEditing;
        }).focusout(function (e) {
            var $this = jquery__WEBPACK_IMPORTED_MODULE_3__(e.currentTarget);
            $this.removeClass('active');
            if ($this[0].contains(e.relatedTarget) || jquery__WEBPACK_IMPORTED_MODULE_3__('.editable-toolbar:hover').length) {
                return;
            }
            else {
                _this.ResumeJsonService.setActiveStateEditor(false);
                _this.ResumeJsonService.setCurrentSectionEditing('');
            }
        });
        // $('.editable-container').on('focusout', e => {
        //     // $this.removeClass('active');
        //     // setTimeout( () => this.ResumeJsonService.setCurrentSectionEditing('') , 100);
        //     // this.ResumeJsonService.setCurrentSectionEditing('');
        //   });
        jquery__WEBPACK_IMPORTED_MODULE_3__('.editable-item').off();
        jquery__WEBPACK_IMPORTED_MODULE_3__('.editable-item').unbind();
        jquery__WEBPACK_IMPORTED_MODULE_3__('.editable-item').on('focusin', function (e) {
            var $this = jquery__WEBPACK_IMPORTED_MODULE_3__(e.currentTarget);
            // console.log( this.getOffset($this[0]));
            if ($this.find('.title').length === 0) {
                jquery__WEBPACK_IMPORTED_MODULE_3__('.editable-item-toolbar')
                    .css({ 'display': 'block', 'left': _this.getOffset($this[0]).left + 187.99988134765624 + 'px',
                    'top': _this.getOffset($this[0]).top - 40.0004559326172 + 'px' });
                _this.dataIndex = $this.data('index');
                console.log(_this.dataIndex);
            }
            var parentClass = $this.closest('.editable-container').attr('class');
            var currentSectionEditing = parentClass.includes('basic') ? 'basic' : parentClass.includes('education') ? 'education'
                : parentClass.includes('experience') ? 'experience' : parentClass.includes('professionalSummary ') ? 'professionalSummary'
                    : parentClass.includes('skills') ? 'skills' : parentClass.includes('references') ? 'references' : '';
            // this.ResumeJsonService.setCurrentSectionEditing(currentSectionEditing);
            _this.currentAddSectionItem = currentSectionEditing;
        }).focusout(function () {
            if (jquery__WEBPACK_IMPORTED_MODULE_3__('.editable-item-toolbar:hover').length) {
                return;
            }
            else {
                jquery__WEBPACK_IMPORTED_MODULE_3__('.editable-item-toolbar').css({ 'display': 'none' });
            }
        });
    };
    ResumeEditorComponent.prototype.previeImage = function (event) {
        var _this = this;
        if (event.target.files && event.target.files[0]) {
            this.File = event.target.files[0];
            var reader = new FileReader();
            reader.onload = function (e) {
                // document.getElementById('blah').src=e.target.result
                console.log(e);
                _this.ResumeJson.basic.profile = e.target.result;
                _this.ResumeJsonService.updateResumeJson(_this.ResumeJson);
            };
            reader.readAsDataURL(event.target.files[0]);
        }
    };
    ResumeEditorComponent.prototype.uploadImage = function () {
        var _this = this;
        console.log('uploading');
        //  this.ResumeJsonService.doUpload(this.File).percentageChanges().subscribe(res => {
        //     console.log(res);
        //    });
        //  this.ResumeJsonService.uploadImage(this.File).subscribe( url => {
        //     console.log(url);
        //   });
        this.spinner.show();
        this.ResumeJsonService.uploadImage(this.File).then(function () { return _this.ResumeJsonService.getRef().getDownloadURL().subscribe(function (url) {
            console.log(url);
            _this.ResumeJson.basic.profile = url;
            _this.ResumeJsonService.updateResumeJson(_this.ResumeJson);
            // this.authService.updateProfile(this.ResumeJson.basic.name , url).then(() => {
            //    console.log('success');
            //    this.ResumeJsonService.ResumeJson.basic.profile = url;
            //    this.spinner.hide();
            //   })
            //   .catch(err => {
            //     console.log(err);
            //     alert('Error Please try again');
            //     this.spinner.hide();
            //   });
        }); });
    };
    ResumeEditorComponent.prototype.save = function () {
        var _this = this;
        this.spinner.show();
        return html2canvas__WEBPACK_IMPORTED_MODULE_1___default()(jquery__WEBPACK_IMPORTED_MODULE_3__('.document')[0], { backgroundColor: 'red' }).then(function (canvas) {
            try {
                console.log(canvas.toDataURL('image/jpeg', 1.0));
                var previewImage_1 = canvas.toDataURL('image/jpeg', 1.0);
                return new Promise(function (resolve, reject) {
                    _this.authService.getUserDetails().subscribe(function (user) {
                        if (user) {
                            console.log(_this.getCurrentExperience(), 'EXPERIENCE');
                            console.log(_this.getCurrentEducation(), 'Education');
                            console.log(_this.getCurrentReferences(), 'References');
                            _this.ResumeJson = {
                                basic: {
                                    name: jquery__WEBPACK_IMPORTED_MODULE_3__('.basic .name').text() || null,
                                    jobtitle: jquery__WEBPACK_IMPORTED_MODULE_3__('.basic .jobtitle').text() || null,
                                    description: jquery__WEBPACK_IMPORTED_MODULE_3__('.basic .description').text() || null,
                                    profile: _this.ResumeJson.basic.profile || null,
                                    email: jquery__WEBPACK_IMPORTED_MODULE_3__('.basic .email').text() || null,
                                    phone: jquery__WEBPACK_IMPORTED_MODULE_3__('.basic .phone').text() || null,
                                    address: jquery__WEBPACK_IMPORTED_MODULE_3__('.basic .address').text() || null,
                                },
                                education: {
                                    title: jquery__WEBPACK_IMPORTED_MODULE_3__('.education .title').text() || null,
                                    education: _this.getCurrentEducation() || null,
                                },
                                experience: {
                                    title: jquery__WEBPACK_IMPORTED_MODULE_3__('.experience .title').text() || null,
                                    experience: _this.getCurrentExperience() || null
                                },
                                skills: _this.getCurrentSkills() || null,
                                professionalSummary: _this.getCurrentProfessionalSummary() || null,
                                references: {
                                    title: jquery__WEBPACK_IMPORTED_MODULE_3__('.references .title').text() || null,
                                    references: _this.getCurrentReferences() || null
                                },
                                templatePreview: previewImage_1,
                            };
                            console.log(_this.ResumeJson);
                            _this.ResumeJsonService.getResumeJsonRef(user.uid).set(_this.ResumeJson).then(function (res) {
                                console.log(res);
                                resolve();
                                _this.spinner.hide();
                            })
                                .catch(function (err) { return reject(); });
                        }
                    });
                });
            }
            catch (e) {
                alert('Error description: ' + e.message);
            }
        });
        // console.log(user.);
        // this.ResumeJsonService.getResumeJsonRef().push()
    };
    ResumeEditorComponent.prototype.getCurrentEducation = function () {
        var a = jquery__WEBPACK_IMPORTED_MODULE_3__('.education .year ').map(function () {
            return this.innerText;
        }).get();
        var b = jquery__WEBPACK_IMPORTED_MODULE_3__('.education .info1 ').map(function () {
            return this.innerText;
        }).get();
        var c = jquery__WEBPACK_IMPORTED_MODULE_3__('.education .school ').map(function () {
            return this.innerText;
        }).get();
        return a.map(function (e, i) {
            return { year: e, info1: b[i], school: c[i] };
        });
    };
    ResumeEditorComponent.prototype.getCurrentExperience = function () {
        var a = jquery__WEBPACK_IMPORTED_MODULE_3__('.experience .date ').map(function () {
            return this.innerText;
        }).get();
        var b = jquery__WEBPACK_IMPORTED_MODULE_3__('.experience .company ').map(function () {
            return this.innerText;
        }).get();
        return a.map(function (e, i) {
            return { date: e, company: b[i], desc: jquery__WEBPACK_IMPORTED_MODULE_3__('.experience .desc-' + [i]).map(function () {
                    return this.innerText;
                }).get() };
        });
    };
    ResumeEditorComponent.prototype.getCurrentSkills = function () {
        var a = jquery__WEBPACK_IMPORTED_MODULE_3__('.skills .title ').text();
        var b = jquery__WEBPACK_IMPORTED_MODULE_3__('.skills .skill ').map(function () {
            return this.innerText;
        }).get();
        return { title: a || null, skills: b };
    };
    ResumeEditorComponent.prototype.getCurrentProfessionalSummary = function () {
        var a = jquery__WEBPACK_IMPORTED_MODULE_3__('.professionalSummary .title ').text();
        var b = jquery__WEBPACK_IMPORTED_MODULE_3__('.professionalSummary .summary ').map(function () {
            return this.innerText;
        }).get();
        return { title: a || null, professionalSummary: b };
    };
    ResumeEditorComponent.prototype.getCurrentReferences = function () {
        // const a = $('.references .title ').text();
        var a = jquery__WEBPACK_IMPORTED_MODULE_3__('.references .name ').map(function () {
            return this.innerText;
        }).get();
        var b = jquery__WEBPACK_IMPORTED_MODULE_3__('.references .contactNumber ').map(function () {
            return this.innerText;
        }).get();
        var c = jquery__WEBPACK_IMPORTED_MODULE_3__('.references .address ').map(function () {
            return this.innerText;
        }).get();
        return a.map(function (e, i) {
            return { name: e, contactNumber: b[i], address: c[i] };
        });
    };
    ResumeEditorComponent.prototype.getOffset = function (el) {
        var rect = el.getBoundingClientRect();
        return {
            left: rect.left + window.scrollX,
            top: rect.top + window.scrollY
        };
    };
    ResumeEditorComponent.prototype.chooseTemplate = function () {
        this.isSidebarAction = 'chooseTemplate';
    };
    ResumeEditorComponent.prototype.gotoMainSideBar = function () {
        this.isSidebarAction = 'main';
    };
    ResumeEditorComponent.prototype.selectTemplate = function (template) {
        this.ResumeJson.template = template;
        this.updateResumeJson();
        this.router.navigate(['/resume-editor/' + template]);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('document'),
        __metadata("design:type", Object)
    ], ResumeEditorComponent.prototype, "document", void 0);
    ResumeEditorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-resume-editor',
            template: __webpack_require__(/*! ./resume-editor.component.html */ "./src/components/resume-editor/resume-editor.component.html"),
            styles: [__webpack_require__(/*! ./resume-editor.component.scss */ "./src/components/resume-editor/resume-editor.component.scss")]
        }),
        __metadata("design:paramtypes", [src_services_json_resume_service__WEBPACK_IMPORTED_MODULE_4__["JsonResumeService"],
            src_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"],
            src_services_dom_service__WEBPACK_IMPORTED_MODULE_7__["DomService"],
            ngx_papaparse__WEBPACK_IMPORTED_MODULE_8__["Papa"],
            _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]])
    ], ResumeEditorComponent);
    return ResumeEditorComponent;
}());



/***/ }),

/***/ "./src/components/resume1/resume1.component.html":
/*!*******************************************************!*\
  !*** ./src/components/resume1/resume1.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"document row row-eq-height\" [style.background-color]=\" onEdit ? '#DCDBE0' : '#FFF'\" #document>\r\n  <div class=\"col-sm-3 topall col-parent-left\" style=\"background: #090909;color: white;text-align: center; border-right: 10px #FF9900 solid;\">\r\n    <div class=\"basic \">\r\n      <div class=\"col-sm-12 col-child-left\" style=\"margin-bottom: 30px; bottom: 14%;\">\r\n        <div class=\"col-sm-4\"><img src=\"assets/images/Template10/icon-1.png\" class=\"icons\"></div>\r\n        <p style=\"text-align: left; padding-left: 50px;\" class=\"address editable\" [innerHtml]=\"ResumeJson?.basic.address\"></p>\r\n      </div>\r\n      <div class=\"col-sm-12 col-child-left\" style=\"margin-bottom: 30px; bottom: 8%;\">\r\n        <div class=\"col-sm-4\"><img src=\"assets/images/Template10/icon-2.png\" class=\"icons\"></div>\r\n        <p style=\"text-align: left; padding-left: 50px;\" class=\"email editable\" [innerHtml]=\"ResumeJson?.basic.email\"></p>\r\n      </div>\r\n      <div class=\"col-sm-12 col-child-left\" style=\"bottom: 5%;\">\r\n        <div class=\"col-sm-4\"><img src=\"assets/images/Template10/icon-3.png\" class=\"icons\"></div>\r\n        <p style=\"text-align: left; padding-left: 50px;\" class=\"phone editable\" [innerHtml]=\"ResumeJson?.basic.phone\"></p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-sm-9 left-txt topall content-container\" style=\"color: black;\">\r\n    <div class=\"content\">\r\n      <div class=\"basic editable-container\">\r\n        <hr class=\"dash\">\r\n        <h2 style=\"color: #FF9900;\" id=\"name\" class=\"name editable\" [innerHtml]=\"ResumeJson?.basic.name\"></h2>\r\n        <h4 class=\"editable jobtitle\"><strong [innerHtml]=\"ResumeJson?.basic.jobtitle\"></strong></h4>\r\n        <!-- <p  class=\"editable description\" >{{ResumeJson?.basic.description}}</p> -->\r\n        <hr class=\"editable-item dash\">\r\n      </div>\r\n      <div class=\"professionalSummary editable-container\" *ngIf=\"ResumeJson?.professionalSummary\">\r\n        <div class=\"editable-item\">\r\n          <div class=\"editable-toolbar\" *ngIf=\"currentSectionEditing === 'professionalSummary'\">\r\n            <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">\r\n              <label data-toggle=\"modal\" data-target=\"#exampleModalCenter\" class=\"btn btn-secondary \">\r\n                Add\r\n              </label>\r\n              <label (click)=\"deleteSection()\" class=\"btn btn-danger\">\r\n                <i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i>\r\n              </label>\r\n            </div>\r\n          </div>\r\n          <h4 style=\"color: #FF9900;\" class=\"editable title\"><strong [innerHtml]=\"ResumeJson?.professionalSummary.title\"></strong></h4>\r\n        </div>\r\n        <p [attr.data-index]=\"i\" class=\"editable-item editable summary\" *ngFor=\"let summary of ResumeJson?.professionalSummary.professionalSummary; let i = index\" [innerHtml]=\"summary\"></p>\r\n        <div class=\"editable-item\">\r\n          <hr class=\"editable-item dash\">\r\n        </div>\r\n      </div>\r\n\r\n      <!-- <div class=\"objective editable-container-container\"  *ngIf=\"ResumeJson?.objective\">\r\n                    <h4 style=\"color: #FF9900;\"><strong>OBJECTIVES</strong></h4>\r\n                    <ul>\r\n                        <li *ngFor=\"let objective of ResumeJson?.objective\" >{{objective}}</li>\r\n                    </ul>\r\n                    <hr class=\"dash\">\r\n            </div> -->\r\n\r\n      <div class=\"education editable-container\" *ngIf=\"ResumeJson?.education\">\r\n        <div class=\"editable-item\">\r\n          <div class=\"editable-toolbar\" *ngIf=\"currentSectionEditing === 'education'\">\r\n            <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">\r\n              <label data-toggle=\"modal\" data-target=\"#exampleModalCenter\" class=\"btn btn-secondary \">\r\n                Add\r\n              </label>\r\n              <label (click)=\"deleteSection()\" class=\"btn btn-danger\">\r\n                <i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i>\r\n              </label>\r\n            </div>\r\n          </div>\r\n          <h4 style=\"color: #FF9900;\" class=\"editable title\"><strong [innerHtml]=\"ResumeJson?.education.title\"></strong></h4>\r\n        </div>\r\n        <div [attr.data-index]=\"i\" class=\"editable-item\" *ngFor=\"let education of ResumeJson?.education.education; let i = index\">\r\n          <strong><span class=\"editable year\" [innerHtml]=\"education.year\"></span><span style=\"float: right;\" class=\"editable school\" [innerHtml]=\"education.school\"></span></strong>\r\n          <p><span class=\"editable info1\" [innerHtml]=\"education.info1\"></span></p>\r\n        </div>\r\n        <hr class=\"editable-item dash\">\r\n      </div>\r\n\r\n      <div class=\"editable-container experience\" *ngIf=\"ResumeJson?.experience\">\r\n        <div class=\"editable-item\">\r\n          <div class=\"editable-toolbar\" [style.display]=\"currentSectionEditing === 'experience' ? 'block' : 'none'\">\r\n            <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">\r\n              <label data-toggle=\"modal\" data-target=\"#exampleModalCenter\" class=\"btn btn-secondary \">\r\n                Add\r\n              </label>\r\n              <label (click)=\"deleteSection()\" class=\"btn btn-danger\">\r\n                <i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i>\r\n              </label>\r\n            </div>\r\n          </div>\r\n          <h4 class=\"editable title\" style=\"color: #FF9900;\"><strong [innerHtml]=\"ResumeJson?.experience.title\"></strong></h4>\r\n        </div>\r\n        <div [attr.data-index]=\"i\" class=\"editable-item\" *ngFor=\"let experience of ResumeJson?.experience.experience ; let i = index\">\r\n          <strong><span class=\"editable company\" [innerHtml]=\"experience.company\"> </span><span clas=\"editable\" class=\"date\"\r\n              style=\"float: right;\" [innerHtml]=\"experience.date\"></span></strong>\r\n          <!-- <p><span class=\"editable company\" >{{experience.company}}</span> <span style=\"float: right;\">MICHIGAN, MI</span></p> -->\r\n          <p *ngFor=\"let desc of experience.desc\" class=\"editable desc-{{i}}\" [innerHtml]=\"desc\"></p>\r\n          <hr class=\"dash\">\r\n        </div>\r\n      </div>\r\n      <div class=\"skills editable-container\" *ngIf=\"ResumeJson?.skills\">\r\n        <div class=\"editable-item\">\r\n          <div class=\"editable-toolbar\" [style.display]=\"currentSectionEditing === 'skills' ? 'block' : 'none'\">\r\n            <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">\r\n              <label data-toggle=\"modal\" data-target=\"#exampleModalCenter\" class=\"btn btn-secondary \">\r\n                Add\r\n              </label>\r\n              <label (click)=\"deleteSection()\" class=\"btn btn-danger\">\r\n                <i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i>\r\n              </label>\r\n            </div>\r\n          </div>\r\n          <h4 style=\"color: #FF9900;\" class=\"editable title\"><strong [innerHtml]=\"ResumeJson?.skills.title\"></strong></h4>\r\n        </div>\r\n        <p [attr.data-index]=\"i\" *ngFor=\"let skill of ResumeJson?.skills.skills; let i = index\" class=\"editable editable-item m-0 skill\">{{skill}}</p>\r\n      </div>\r\n      <div class=\"references editable-container\" *ngIf=\"ResumeJson?.references\">\r\n        <div class=\"editable-item\">\r\n                <div class=\"editable-toolbar\" *ngIf=\"currentSectionEditing === 'references'\">\r\n                  <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">\r\n                    <label data-toggle=\"modal\" data-target=\"#exampleModalCenter\" class=\"btn btn-secondary \">\r\n                      Add\r\n                    </label>\r\n                    <label (click)=\"deleteSection()\" class=\"btn btn-danger\">\r\n                      <i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i>\r\n                    </label>\r\n                  </div>\r\n                </div>\r\n                <h4 style=\"color: #FF9900;\" class=\"editable title\"><strong [innerHtml]=\"ResumeJson?.references.title\"></strong></h4>\r\n              </div>\r\n        <div [attr.data-index]=\"i\" class=\"editable-item\" *ngFor=\"let reference of ResumeJson?.references.references; let i = index\">\r\n          <p class=\"editable name m-0\"><strong [innerHtml]=\"reference.name\"></strong></p>\r\n          <p class=\"editable contactNumber m-0\" [innerHtml]=\"reference.contactNumber\"></p>\r\n          <p class=\"editable address\" [innerHtml]=\"reference.address\"></p>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- <div *ngIf=\"ResumeJson?.experience\" class=\"experience editable-container\">\r\n                <div class=\"editable-item\">\r\n                    <h4 style=\"color: #FF9900;\"><strong [innerHtml]=\"ResumeJson?.experience.title\" ></strong></h4>\r\n                </div>\r\n                <div [attr.data-index]=\"i\" class=\"editable-item\" *ngFor=\"let experience of ResumeJson?.experience.experience ; let i = index\">\r\n                        <strong><span>SALES AND MARKETING DIRECTOR</span><span style=\"float: right;\">2011 - 2013</span></strong>\r\n                        <p *ngFor=\"let desc of experience.desc\" class=\"editable desc-{{i}}\" [innerHTML]=\"desc\"> </p>             \r\n                        <hr class=\"dash\">\r\n                </div>\r\n                \r\n            </div> -->\r\n\r\n\r\n      <!-- <h4 style=\"color: #FF9900;\"><strong>OBJECTIVES</strong></h4>\r\n            <ul>\r\n                <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit</li>\r\n                <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit</li>\r\n                <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit</li>\r\n                <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit</li>\r\n            </ul>\r\n            <hr class=\"dash\">\r\n    \r\n            <h4 style=\"color: #FF9900;\"><strong>EXPIRIENCE</strong></h4>\r\n            <strong>SALES AND MARKETING DIRECTOR<span style=\"float: right;\">2011 - 2013</span></strong>\r\n            <p>GREAT COMPANY <span style=\"float: right;\">MICHIGAN, MI</span></p>\r\n            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elitLorem ipsum dolor sit amet, consectetur adipisicing elitLorem ipsum dolor sit amet, consectetur</p>\r\n            <strong>MARKETING MANAGER<span style=\"float: right;\">2011 - 2013</span></strong>\r\n            <p>AWESOME COMPANY <span style=\"float: right;\">MICHIGAN, MI</span></p>\r\n            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elitLorem ipsum dolor sit amet, consectetur adipisicing elitLorem ipsum dolor sit amet, consectetur</p>\r\n            <hr class=\"dash\">\r\n    \r\n            <h4 style=\"color: #FF9900;\"><strong>EDUCATION</strong></h4>\r\n    \r\n            <strong>2005<span style=\"float: right;\">MICHIGAN STATE UNIVERSITY</span></strong>\r\n            <p>Lorem ipsum dolor sit amet, consectetur adipisicing<span style=\"float: right;\">MICHIGAN, MI</span></p>\r\n            <strong>SALES AND MARKETING DIRECTOR<span style=\"float: right;\">BATAVIA HIGH SCHOOL</span></strong>\r\n            <p>Lorem ipsum dolor sit amet, consectetur adipisicing<span style=\"float: right;\">BATAVIA, MI</span></p>\r\n            <hr class=\"dash\">\r\n    \r\n            <h4 style=\"color: #FF9900;\"><strong>CAREER SKILLS</strong></h4>\r\n            <p>Pellentesque</p>\r\n            <p>Pellentesque porttitor</p>\r\n            <p>Cras non magna</p>\r\n            <p>Vivamus ami</p>\r\n            <p>Morbi neque</p>\r\n            <p>Aliquameratvolutpat</p>\r\n            <p>Integerultrices</p>\r\n            <p>Pellentesque habitant</p>\r\n            <p>Etiamatligula et tellusullamcorper</p>\r\n            <p>Ulticesn ferme ntum, lorem non cursus porttitor</p> -->\r\n    </div>\r\n  </div>\r\n</div>\r\n<br>\r\n"

/***/ }),

/***/ "./src/components/resume1/resume1.component.scss":
/*!*******************************************************!*\
  !*** ./src/components/resume1/resume1.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".preview {\n  margin: 3rem 11rem; }\n\np, span {\n  font-size: 12px; }\n\n.basic.editable-container {\n  position: initial !important; }\n\nbody {\n  background: gray !important; }\n\n.left-txt h3 {\n  color: #866c87; }\n\n.topall {\n  padding-top: 60px;\n  padding-bottom: 60px; }\n\n.container {\n  margin-bottom: 40px; }\n\nimg {\n  width: 100%;\n  padding: 5% 15%; }\n\n.col-sm-9.left-txt.topall {\n  padding-left: 3%;\n  padding-right: 3%; }\n\n.row-eq-height {\n  display: flex; }\n\nh2 {\n  font-size: 42px;\n  font-weight: bold;\n  line-height: 1.1em;\n  margin: 0px; }\n\n.col-sm-3.topall p {\n  padding-left: 15%;\n  line-height: 1.2em;\n  margin: 0px; }\n\n.dash {\n  border: 0 none;\n  border-top: 2px dotted;\n  background: none;\n  height: 0; }\n\n.col-parent-left {\n  position: relative;\n  width: 350px; }\n\n.col-child-left {\n  position: absolute;\n  left: -10px; }\n\n.icons {\n  float: left;\n  width: 85%; }\n\n@media (max-width: 1091px) and (min-width: 845px) {\n  .col-parent-left {\n    width: 40% !important; } }\n\n@media (max-width: 844px) {\n  .col-parent-left {\n    width: 40% !important; }\n  .icons {\n    width: 55% !important;\n    margin-left: -25px; } }\n"

/***/ }),

/***/ "./src/components/resume1/resume1.component.ts":
/*!*****************************************************!*\
  !*** ./src/components/resume1/resume1.component.ts ***!
  \*****************************************************/
/*! exports provided: Resume1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Resume1Component", function() { return Resume1Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_services_json_resume_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/services/json-resume.service */ "./src/services/json-resume.service.ts");
/* harmony import */ var _resume_editor_resume_editor_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../resume-editor/resume-editor.component */ "./src/components/resume-editor/resume-editor.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Resume1Component = /** @class */ (function () {
    function Resume1Component(ResumeJsonService, injector) {
        this.ResumeJsonService = ResumeJsonService;
        this.injector = injector;
        this.onEdit = false;
        this.ResumeEditorComponent = this.injector.get(_resume_editor_resume_editor_component__WEBPACK_IMPORTED_MODULE_2__["ResumeEditorComponent"]);
    }
    Resume1Component.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription$ = this.ResumeJsonService.getResumeJson().subscribe(function (resumeJson) {
            console.log(resumeJson);
            _this.ResumeJson = resumeJson;
        });
        this.subscription$.add(this.ResumeJsonService.getCurrentStateEditor().subscribe(function (state) {
            _this.onEdit = state;
        }));
        this.subscription$.add(this.ResumeJsonService.getCurrentSectionEditing().subscribe(function (section) {
            console.log(section);
            _this.currentSectionEditing = section;
        }));
        this.ResumeEditorComponent.domObserver();
    };
    Resume1Component.prototype.deleteSection = function () {
        var parentComponent = this.injector.get(_resume_editor_resume_editor_component__WEBPACK_IMPORTED_MODULE_2__["ResumeEditorComponent"]);
        parentComponent.deleteSection();
    };
    Resume1Component.prototype.ngOnDestroy = function () {
        this.subscription$.unsubscribe();
        this.ResumeEditorComponent.domObserverDisconnect();
    };
    Resume1Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-resume1',
            template: __webpack_require__(/*! ./resume1.component.html */ "./src/components/resume1/resume1.component.html"),
            styles: [__webpack_require__(/*! ./resume1.component.scss */ "./src/components/resume1/resume1.component.scss")]
        }),
        __metadata("design:paramtypes", [src_services_json_resume_service__WEBPACK_IMPORTED_MODULE_1__["JsonResumeService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]])
    ], Resume1Component);
    return Resume1Component;
}());



/***/ }),

/***/ "./src/components/resume10/resume10.component.html":
/*!*********************************************************!*\
  !*** ./src/components/resume10/resume10.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"document\">\r\n  <div class=\"container content-container\" style=\"border: 10px solid white;\">\r\n    <div class=\"row\" style=\"border: 1px solid;\">\r\n      <div class=\"col-sm-12 content\">\r\n        <div class=\"row\">\r\n          <div class=\"col-12 basic\">\r\n            <br>\r\n            <br>\r\n            <div class=\"row\">\r\n              <div class=\"col-sm-6\">\r\n                <h1 class=\"editable name\" [innerHtml]=\"ResumeJson?.basic.name\" style=\"text-transform: uppercase;\"></h1>\r\n                <h6 [innerHtml]=\"ResumeJson?.basic.jobtitle\" class=\"editable jobtitle\"></h6>\r\n              </div>\r\n              <div class=\"col-sm-6\">\r\n                <img data-toggle=\"modal\" data-target=\"#exampleModalCenter2\" class=\"profile\" style=\"float:right; width:150px;height:150px;\"\r\n                  [src]=\"ResumeJson?.basic.profile ? ResumeJson?.basic.profile : 'assets/images/Resume/profile-placeholder.jpg'\">\r\n              </div>\r\n            </div>\r\n            <br>\r\n            <div class=\"row\">\r\n              <div class=\"col\">\r\n                <span class=\"editable email\" [innerHtml]=\"ResumeJson?.basic.email\"></span>\r\n              </div>\r\n              <div class=\"col\">\r\n                <span class=\"editable address\" [innerHtml]=\"ResumeJson?.basic.address\"></span>\r\n              </div>\r\n              <div class=\"col\">\r\n                <span class=\"editable phone\" [innerHtml]=\"ResumeJson?.basic.phone\"></span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <hr>\r\n        </div>\r\n        <div class=\"\">\r\n          <div class=\"\">\r\n            <div class=\"row\">\r\n              <div class=\"col-12 editable-container professionalSummary\" *ngIf=\"ResumeJson?.professionalSummary\">\r\n                <hr>\r\n                <br>\r\n                <div class=\"editable-item\">\r\n                  <div class=\"editable-toolbar\" *ngIf=\"currentSectionEditing === 'professionalSummary'\">\r\n                    <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">\r\n                      <label data-toggle=\"modal\" data-target=\"#exampleModalCenter\" class=\"btn btn-secondary \">\r\n                        Add\r\n                      </label>\r\n                      <label (click)=\"deleteSection()\" class=\"btn btn-danger\">\r\n                        <i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i>\r\n                      </label>\r\n                    </div>\r\n                  </div>\r\n                  <h4 class=\"editable title\" [innerHtml]=\"ResumeJson?.professionalSummary.title\"></h4>\r\n                </div>\r\n                <div class=\"col\">\r\n                  <p style=\"padding: 0 20px;font-family: courier\" *ngFor=\"let summary of ResumeJson?.professionalSummary.professionalSummary\"\r\n                    class=\"summary editable-item editable\" [innerHtml]=\"summary\"></p>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-12 editable-container education\" *ngIf=\"ResumeJson?.education\">\r\n                <hr>\r\n                <br>\r\n                <div class=\"editable-item\">\r\n                  <div class=\"editable-toolbar\" *ngIf=\"currentSectionEditing === 'education'\">\r\n                    <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">\r\n                      <label data-toggle=\"modal\" data-target=\"#exampleModalCenter\" class=\"btn btn-secondary \">\r\n                        Add\r\n                      </label>\r\n                      <label (click)=\"deleteSection()\" class=\"btn btn-danger\">\r\n                        <i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i>\r\n                      </label>\r\n                    </div>\r\n                  </div>\r\n                  <h4 class=\"title editable\" [innerHtml]=\"ResumeJson?.education.title\"></h4>\r\n                </div>\r\n                <div class=\"row editable-item\" *ngFor=\"let education of ResumeJson?.education.education\">\r\n                  <div class=\"col\">\r\n                    <p style=\"font-family:courier;\" class=\"editable year\" [innerHtml]=\"education.year\"></p>\r\n                  </div>\r\n                  <div class=\"col\">\r\n                    <p style=\"font-family:courier;\" class=\"editable school\" [innerHtml]=\"education.school\"></p>\r\n                    <p class=\"editable info1\" [innerHtml]=\"education.info1\"></p>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-12 editable-container experience\" *ngIf=\"ResumeJson?.experience\" dnd-sortable-container\r\n                [sortableData]=\"ResumeJson?.experience.experience\">\r\n                <hr>\r\n                <br>\r\n                <div class=\"editable-item\">\r\n                  <div class=\"editable-toolbar\" *ngIf=\"currentSectionEditing === 'experience'\">\r\n                    <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">\r\n                      <label data-toggle=\"modal\" data-target=\"#exampleModalCenter\" class=\"btn btn-secondary \">\r\n                        Add\r\n                      </label>\r\n                      <label (click)=\"deleteSection()\" class=\"btn btn-danger\">\r\n                        <i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i>\r\n                      </label>\r\n\r\n                    </div>\r\n                  </div>\r\n                  <h4 class=\"editable title\" [innerHtml]=\"ResumeJson?.experience.title\"></h4>\r\n                </div>\r\n                <div class=\"row editable-item\" *ngFor=\"let experience of ResumeJson?.experience.experience ; let i = index\"\r\n                  dnd-sortable [sortableIndex]=\"i\">\r\n                  <div class=\"col\">\r\n                    <p style=\"font-family:courier;\" class=\"editable date\" [innerHtml]=\"experience.date\"></p>\r\n                  </div>\r\n                  <div class=\"col\">\r\n                    <p style=\"font-family:courier;\" class=\"editable company\" [innerHtml]=\"experience.company\"></p>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"skills editable-container col-12\" *ngIf=\"ResumeJson?.skills\">\r\n                <hr>\r\n                <br>\r\n                <div class=\"editable-item\">\r\n                  <div class=\"editable-toolbar\" *ngIf=\"currentSectionEditing === 'skills'\">\r\n                    <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">\r\n                      <label data-toggle=\"modal\" data-target=\"#exampleModalCenter\" class=\"btn btn-secondary \">\r\n                        Add\r\n                      </label>\r\n                      <label (click)=\"deleteSection()\" class=\"btn btn-danger\">\r\n                        <i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i>\r\n                      </label>\r\n\r\n                    </div>\r\n                  </div>\r\n                  <h4 class=\"editable title\" [innerHtml]=\"ResumeJson?.skills.title\"></h4>\r\n                </div>\r\n                <div class=\"row editable-item\" *ngFor=\"let skill of ResumeJson?.skills.skills\">\r\n                  <div class=\"col\">\r\n                    <li style=\"font-family:courier;\" class=\"editable ml-3 skill\" [innerHtml]=\"skill\"></li>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"references editable-container col-12\" *ngIf=\"ResumeJson?.references\">\r\n                <hr>\r\n                <br>\r\n                <div class=\"editable-item\">\r\n                  <div class=\"editable-toolbar\" *ngIf=\"currentSectionEditing === 'references'\">\r\n                    <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">\r\n                      <label data-toggle=\"modal\" data-target=\"#exampleModalCenter\" class=\"btn btn-secondary \">\r\n                        Add References\r\n                      </label>\r\n                      <label (click)=\"deleteSection()\" class=\"btn btn-danger\">\r\n                        <i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i>\r\n                      </label>\r\n\r\n                    </div>\r\n                  </div>\r\n                  <h4 class=\"editable title\" [innerHtml]=\"ResumeJson?.references.title\"></h4>\r\n                </div>\r\n                <div class=\"editable-item row\" *ngFor=\"let reference of ResumeJson?.references.references\">\r\n                  <div class=\"col\">\r\n                    <p style=\"padding: 0 20px;\" class=\"editable name\"><strong [innerHtml]=\"reference.name\"></strong></p>\r\n                    <p style=\"padding: 0 20px;\" class=\"editable contactNumber\" [innerHtml]=\"reference.contactNumber\"></p>\r\n                    <p style=\"padding: 0 20px;\" class=\"editable address\" [innerHtml]=\"reference.address\"></p>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n\r\n\r\n\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n<br>"

/***/ }),

/***/ "./src/components/resume10/resume10.component.scss":
/*!*********************************************************!*\
  !*** ./src/components/resume10/resume10.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  box-sizing: border-box; }\n\nhtml, h4, p {\n  font-family: \"roboto\", sans-serif;\n  color: black; }\n\nspan {\n  font-family: courier; }\n\nh1 {\n  font-family: \"roboto\", sans-serif;\n  color: black;\n  text-align: left; }\n\nh6 {\n  text-align: left; }\n"

/***/ }),

/***/ "./src/components/resume10/resume10.component.ts":
/*!*******************************************************!*\
  !*** ./src/components/resume10/resume10.component.ts ***!
  \*******************************************************/
/*! exports provided: Resume10Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Resume10Component", function() { return Resume10Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_services_json_resume_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/services/json-resume.service */ "./src/services/json-resume.service.ts");
/* harmony import */ var _resume_editor_resume_editor_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../resume-editor/resume-editor.component */ "./src/components/resume-editor/resume-editor.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Resume10Component = /** @class */ (function () {
    function Resume10Component(ResumeJsonService, injector) {
        this.ResumeJsonService = ResumeJsonService;
        this.injector = injector;
        this.onEdit = false;
        this.ResumeEditorComponent = this.injector.get(_resume_editor_resume_editor_component__WEBPACK_IMPORTED_MODULE_2__["ResumeEditorComponent"]);
    }
    Resume10Component.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription$ = this.ResumeJsonService.getResumeJson().subscribe(function (resumeJson) {
            console.log(resumeJson);
            _this.ResumeJson = resumeJson;
        });
        this.subscription$.add(this.ResumeJsonService.getCurrentStateEditor().subscribe(function (state) {
            _this.onEdit = state;
        }));
        this.subscription$.add(this.ResumeJsonService.getCurrentSectionEditing().subscribe(function (section) {
            console.log(section);
            _this.currentSectionEditing = section;
        }));
        this.ResumeEditorComponent.domObserver();
    };
    Resume10Component.prototype.deleteSection = function () {
        var parentComponent = this.injector.get(_resume_editor_resume_editor_component__WEBPACK_IMPORTED_MODULE_2__["ResumeEditorComponent"]);
        parentComponent.deleteSection();
    };
    Resume10Component.prototype.ngOnDestroy = function () {
        this.subscription$.unsubscribe();
        this.ResumeEditorComponent.domObserverDisconnect();
    };
    Resume10Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-resume10',
            template: __webpack_require__(/*! ./resume10.component.html */ "./src/components/resume10/resume10.component.html"),
            styles: [__webpack_require__(/*! ./resume10.component.scss */ "./src/components/resume10/resume10.component.scss")]
        }),
        __metadata("design:paramtypes", [src_services_json_resume_service__WEBPACK_IMPORTED_MODULE_1__["JsonResumeService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]])
    ], Resume10Component);
    return Resume10Component;
}());



/***/ }),

/***/ "./src/components/resume11/resume11.component.html":
/*!*********************************************************!*\
  !*** ./src/components/resume11/resume11.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"document row\">\r\n  <div class=\"col-12 p-0 content-container\">\r\n    <div class=\"row basic\">\r\n        <div class=\"col-lg-12 name1\">\r\n            <div class=\"profile-img\">\r\n              <img style=\"height:150px; width:150px;\" data-toggle=\"modal\" data-target=\"#exampleModalCenter2\" class=\"col-image-layout-4 profile\"\r\n                [src]=\"ResumeJson?.basic.profile ? ResumeJson?.basic.profile : 'assets/images/Resume/profile-placeholder.jpg'\" />\r\n            </div>\r\n            <h1><b class=\"editable name\" [innerHtml]=\"ResumeJson?.basic.name\"></b></h1>\r\n            <h4 [innerHtml]=\"ResumeJson?.basic.jobtitle\" class=\"editable jobtitle text-uppercase\"></h4>\r\n          </div>\r\n      \r\n          <div class=\"col-lg-12 contact-info\">\r\n            <nav>\r\n              <ul class=\"information\">\r\n                <li><span class=\"fa fa-mobile-alt\"></span><label class=\"editable phone\" [innerHtml]=\"ResumeJson?.basic.phone\"></label></li>\r\n                <li><span class=\"fa fa-envelope\"></span><label class=\"editable email\" [innerHtml]=\"ResumeJson?.basic.email\"></label></li>\r\n                <li><span class=\"fa fa-map-marker-alt\"></span><label class=\"editable address\" [innerHtml]=\"ResumeJson?.basic.address\"></label></li>\r\n              </ul>\r\n            </nav>\r\n          </div>\r\n    </div>\r\n    <div class=\"row details\">\r\n      <div class=\"col-lg-4 col-md-4 col-sm-4 left side\">\r\n          <div  class=\"skills editable-container\" *ngIf=\"ResumeJson?.skills\" >      \r\n              <div class=\"editable-item\">\r\n                      <div class=\"editable-toolbar\" *ngIf=\"currentSectionEditing === 'skills'\">\r\n                                      <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">\r\n                                                      <label data-toggle=\"modal\" data-target=\"#exampleModalCenter\" class=\"btn btn-secondary \">\r\n                                                      Add Skill\r\n                                                      </label>\r\n                                                      <label (click)=\"deleteSection()\" class=\"btn btn-danger\">\r\n                                                              <i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i>\r\n                                                      </label>\r\n                                                      <!-- <label class=\"btn btn-secondary\">\r\n                                                              <input type=\"radio\" name=\"options\" id=\"option3\" autocomplete=\"off\"> Radio\r\n                                                      </label> -->\r\n                                      </div>\r\n                      </div>  \r\n                      <h4 class=\"text-uppercase e editable title\" [innerHtml]=\"ResumeJson?.skills.title\" ></h4>\r\n              </div>\r\n              <p  *ngFor=\"let skill of ResumeJson?.skills.skills\" class=\"ditable-item editable skill m-0\" [innerHtml]=\"skill\"></p>\r\n          </div>\r\n          <div class=\"section editable-container references\" *ngIf=\"ResumeJson?.references\">\r\n              <div class=\"editable-item \">\r\n                  <div class=\"editable-toolbar\" *ngIf=\"currentSectionEditing === 'references'\">\r\n                      <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">\r\n                          <label data-toggle=\"modal\" data-target=\"#exampleModalCenter\" class=\"btn btn-secondary \">\r\n                          Add\r\n                          </label>\r\n                          <label (click)=\"deleteSection()\" class=\"btn btn-danger\">\r\n                          <i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i>\r\n                          </label>\r\n                      </div>\r\n                  </div>\r\n                <h4 class=\"text-uppercase editable title\" [innerHtml]=\"ResumeJson?.references.title\"></h4>\r\n              </div> \r\n              <div [attr.data-index]=\"i\" class=\"editable-item paragraph_section\" *ngFor=\"let reference of ResumeJson?.references.references; let i = index\" >\r\n                      <p class=\"editable name section_text bolder_text\">{{reference.name}}</p>\r\n                      <p class=\"editable contactNumber section_text\">{{reference.contactNumber}}</p>\r\n                      <p class=\"editable address section_text\">{{reference.address}}</p>\r\n              </div>\r\n          </div>\r\n      </div>\r\n      <div class=\"col right\">\r\n        <div class=\"content\">\r\n            <div class=\"row\">\r\n                <div *ngIf=\"ResumeJson?.professionalSummary\" class=\"editable-container professionalSummary col-lg-12\">\r\n                  <div class=\"editable-item\">\r\n                    <div class=\"editable-toolbar\" *ngIf=\"currentSectionEditing === 'professionalSummary'\">\r\n                      <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">\r\n                        <label data-toggle=\"modal\" data-target=\"#exampleModalCenter\" class=\"btn btn-secondary \">\r\n                          Add\r\n                        </label>\r\n                        <label (click)=\"deleteSection()\" class=\"btn btn-danger\">\r\n                          <i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i>\r\n                        </label>\r\n                      </div>\r\n                    </div>\r\n                    <h4 class=\"text-uppercase m-less-top editable title\" [innerHtml]=\"ResumeJson?.professionalSummary.title\"></h4>\r\n                  </div>\r\n                  <p *ngFor=\"let summary of ResumeJson?.professionalSummary.professionalSummary\" class=\"summary editable-item editable\"\r\n                    [innerHtml]=\"summary\"></p>\r\n                </div>\r\n                <div class=\"col-lg-12 editable-container experience\" *ngIf=\"ResumeJson?.experience\" dnd-sortable-container\r\n                  [sortableData]=\"ResumeJson?.experience.experience\">\r\n                  <div class=\"editable-item\">\r\n                    <div class=\"editable-toolbar\" *ngIf=\"currentSectionEditing === 'experience'\">\r\n                      <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">\r\n                        <label data-toggle=\"modal\" data-target=\"#exampleModalCenter\" class=\"btn btn-secondary \">\r\n                          Add\r\n                        </label>\r\n                        <label (click)=\"deleteSection()\" class=\"btn btn-danger\">\r\n                          <i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i>\r\n                        </label>\r\n                      </div>\r\n                    </div>\r\n                    <h4 class=\"editable title text-uppercase\" [innerHtml]=\"ResumeJson?.experience.title\"><span class=\"fa fa-briefcase\"></span></h4>\r\n                  </div>\r\n      \r\n                  <div class=\"editable-item\" *ngFor=\"let experience of ResumeJson?.experience.experience ; let i = index\"\r\n                    dnd-sortable [sortableIndex]=\"i\">\r\n                    <p><b class=\"editable company\" [innerHtml]=\"experience.company\" ></b> <span contenteditable=\"false\">&nbsp;-&nbsp;</span> <span class=\"editable date\" [innerHtml]=\"experience.date\"></span></p>\r\n                    <p *ngFor=\"let desc of experience.desc\" class=\"editable desc-{{i}}\" [innerHtml]=\"desc\"></p>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-lg-12 editable-container education\" *ngIf=\"ResumeJson?.education\">\r\n                  <div class=\"editable-item\">\r\n                    <div class=\"editable-toolbar\" *ngIf=\"currentSectionEditing === 'education'\">\r\n                      <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">\r\n                        <label data-toggle=\"modal\" data-target=\"#exampleModalCenter\" class=\"btn btn-secondary \">\r\n                          Add\r\n                        </label>\r\n                        <label (click)=\"deleteSection()\" class=\"btn btn-danger\">\r\n                          <i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i>\r\n                        </label>\r\n                      </div>\r\n                    </div>\r\n                    <h4 class=\"title editable text-uppercase\" [innerHtml]=\"ResumeJson?.education.title\"><span class=\"fa fa-graduation-cap\"></span>\r\n                      Education</h4>\r\n                  </div>\r\n                  <div *ngFor=\"let education of ResumeJson?.education.education\" class=\"editable-item\">\r\n                    <p><b class=\"editable school\" [innerHtml]=\"education.school\"></b> <span class=\"editable year\" innerHtml=\"education.year\"></span></p>\r\n                    <p class=\"editable info1\" [innerHtml]=\"education.info1\">\r\n                    </p>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<br>"

/***/ }),

/***/ "./src/components/resume11/resume11.component.scss":
/*!*********************************************************!*\
  !*** ./src/components/resume11/resume11.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".row {\n  margin: 0; }\n\n.name1 {\n  background-color: #2b3d4f;\n  color: #fff;\n  padding: 20px 60px; }\n\n.name1 h1 {\n    text-shadow: 2px 2px #2222229e; }\n\n.name1 h1, .name1 h4 {\n    color: #fff;\n    padding-left: 220px; }\n\n.profile-img {\n  width: 160px;\n  height: 160px;\n  min-width: 160px;\n  max-width: 160px;\n  min-height: 160px;\n  max-height: 160px;\n  border: 4px solid #f29c1d;\n  background-color: #4a2323;\n  float: left;\n  position: absolute;\n  z-index: 1; }\n\n.contact-info {\n  padding: 15px 0 15px 270px;\n  background-color: #f29c1d;\n  border-bottom: 4px solid #eee; }\n\nul {\n  list-style-type: none;\n  padding-left: 15px; }\n\nul.information {\n  display: flex;\n  margin-bottom: 0; }\n\nul.information > li {\n  padding: 5px 15px;\n  color: #000; }\n\nul.references, ul.information {\n  padding-left: 0; }\n\n.document:nth-of-type(2) .left, .document:nth-of-type(2) .right {\n  height: 1054px; }\n\n.left, .right {\n  height: 845px; }\n\n.m-less-top {\n  margin-top: 0; }\n\np {\n  color: #525252;\n  font-size: 12px; }\n\nh1, h2, h3, h4, h5, h6 {\n  color: #2b3d4f; }\n"

/***/ }),

/***/ "./src/components/resume11/resume11.component.ts":
/*!*******************************************************!*\
  !*** ./src/components/resume11/resume11.component.ts ***!
  \*******************************************************/
/*! exports provided: Resume11Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Resume11Component", function() { return Resume11Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_services_json_resume_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/services/json-resume.service */ "./src/services/json-resume.service.ts");
/* harmony import */ var _resume_editor_resume_editor_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../resume-editor/resume-editor.component */ "./src/components/resume-editor/resume-editor.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Resume11Component = /** @class */ (function () {
    function Resume11Component(ResumeJsonService, injector) {
        this.ResumeJsonService = ResumeJsonService;
        this.injector = injector;
        this.onEdit = false;
        this.ResumeEditorComponent = this.injector.get(_resume_editor_resume_editor_component__WEBPACK_IMPORTED_MODULE_2__["ResumeEditorComponent"]);
    }
    Resume11Component.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription$ = this.ResumeJsonService.getResumeJson().subscribe(function (resumeJson) {
            console.log(resumeJson);
            _this.ResumeJson = resumeJson;
        });
        this.subscription$.add(this.ResumeJsonService.getCurrentStateEditor().subscribe(function (state) {
            _this.onEdit = state;
        }));
        this.subscription$.add(this.ResumeJsonService.getCurrentSectionEditing().subscribe(function (section) {
            console.log(section);
            _this.currentSectionEditing = section;
        }));
        this.ResumeEditorComponent.domObserver();
    };
    Resume11Component.prototype.deleteSection = function () {
        var parentComponent = this.injector.get(_resume_editor_resume_editor_component__WEBPACK_IMPORTED_MODULE_2__["ResumeEditorComponent"]);
        parentComponent.deleteSection();
    };
    Resume11Component.prototype.ngOnDestroy = function () {
        this.subscription$.unsubscribe();
        this.ResumeEditorComponent.domObserverDisconnect();
    };
    Resume11Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-resume11',
            template: __webpack_require__(/*! ./resume11.component.html */ "./src/components/resume11/resume11.component.html"),
            styles: [__webpack_require__(/*! ./resume11.component.scss */ "./src/components/resume11/resume11.component.scss")]
        }),
        __metadata("design:paramtypes", [src_services_json_resume_service__WEBPACK_IMPORTED_MODULE_1__["JsonResumeService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]])
    ], Resume11Component);
    return Resume11Component;
}());



/***/ }),

/***/ "./src/components/resume12/resume12.component.html":
/*!*********************************************************!*\
  !*** ./src/components/resume12/resume12.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"document row\">\r\n        <div class=\"content-container col-12\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-12 headerDiv basic\">\r\n                      <h1 style=\"color:#0c271a\" class=\"editable name\" [innerHtml]=\"ResumeJson?.basic.name\">\\</h1>\r\n                      <h3 style=\"color:white\" [innerHtml]=\"ResumeJson?.basic.jobtitle\" class=\"editable jobtitle\"></h3>\r\n                      <hr width=\"30%\">\r\n                      <br>\r\n                      <h4 class=\"fa fa-home\" style=\"font-size:15px;\" class=\"editable address\" [innerHtml]=\"ResumeJson?.basic.address\"></h4>\r\n                      <br>\r\n                      <i style=\"font-size:10px\" class=\"fa\">&#xf095;</i>\r\n                      <i class=\"editable phone\" [innerHtml]=\"ResumeJson?.basic.phone\"></i>\r\n                    </div>\r\n                    <div class=\"col-sm-12\">\r\n                          <div class=\"row\">\r\n                            <div class=\"col-sm-8 main\">\r\n                             <div class=\"content\">\r\n                                <div *ngIf=\"ResumeJson?.professionalSummary\" class=\"editable-container professionalSummary\">\r\n                                    <div>\r\n                                      <div class=\"editable-toolbar\" *ngIf=\"currentSectionEditing === 'professionalSummary'\">\r\n                                        <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">\r\n                                          <label data-toggle=\"modal\" data-target=\"#exampleModalCenter\" class=\"btn btn-secondary \">\r\n                                            Add\r\n                                          </label>\r\n                                          <label (click)=\"deleteSection()\" class=\"btn btn-danger\">\r\n                                            <i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i>\r\n                                          </label>\r\n                                        </div>\r\n                                      </div>\r\n                                      <h3 style=\"color:#0c271a\" class=\"editable title\" [innerHtml]=\"ResumeJson?.professionalSummary.title\"></h3>\r\n                                    </div>\r\n                                    <p *ngFor=\"let summary of ResumeJson?.professionalSummary.professionalSummary\" class=\"summary editable editable-item\"\r\n                                      [innerHtml]=\"summary\"></p>\r\n                                  </div>\r\n                                  <div class=\"editable-container experience\" *ngIf=\"ResumeJson?.experience\" dnd-sortable-container\r\n                                    [sortableData]=\"ResumeJson?.experience.experience\">\r\n                                    <div class=\"editable-item\">\r\n                                      <div class=\"editable-toolbar\" *ngIf=\"currentSectionEditing === 'experience'\">\r\n                                        <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">\r\n                                          <label data-toggle=\"modal\" data-target=\"#exampleModalCenter\" class=\"btn btn-secondary \">\r\n                                            Add\r\n                                          </label>\r\n                                          <label (click)=\"deleteSection()\" class=\"btn btn-danger\">\r\n                                            <i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i>\r\n                                          </label>\r\n                                        </div>\r\n                                      </div>\r\n                                      <h3 style=\"color:#0c271a\" class=\"editable title\" [innerHtml]=\"ResumeJson?.experience.title\"></h3>\r\n                                    </div>\r\n                                    <div class=\"editable-item\" *ngFor=\"let experience of ResumeJson?.experience.experience ; let i = index\"\r\n                                      dnd-sortable [sortableIndex]=\"i\">\r\n                                      <h5 class=\"editable company\" [innerHtml]=\"experience.company\"></h5>\r\n                                      <li class=\"editable date\" [innerHtml]=\"experience.date\"></li>\r\n                                      <p *ngFor=\"let desc of experience.desc\" class=\"editable desc-{{i}}\" [innerHtml]=\"desc\"></p>\r\n                                      <!-- <hr> -->\r\n                                      <br>\r\n                                    </div>\r\n                                  </div>\r\n                                  <div class=\"editable-container education\" *ngIf=\"ResumeJson?.education\">\r\n                                    <div class=\"editable-item\">\r\n                                      <div class=\"editable-toolbar\" *ngIf=\"currentSectionEditing === 'education'\">\r\n                                        <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">\r\n                                          <label data-toggle=\"modal\" data-target=\"#exampleModalCenter\" class=\"btn btn-secondary \">\r\n                                            Add\r\n                                          </label>\r\n                                          <label (click)=\"deleteSection()\" class=\"btn btn-danger\">\r\n                                            <i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i>\r\n                                          </label>\r\n                                        </div>\r\n                                      </div>\r\n                                      <h3 style=\"color:#0c271a\" class=\"title editable\" [innerHtml]=\"ResumeJson?.education.title\"></h3>\r\n                                    </div>\r\n                                    <div *ngFor=\"let education of ResumeJson?.education.education\" class=\"editable-item\">\r\n                                      <li class=\"editable school\" [innerHtml]=\"education.school\"></li>\r\n                                      <span class=\"editable year ml-4\" [innerHtml]=\"education.year\"></span>\r\n                                      <br>\r\n                                      <p class=\"editable info1 ml-4\" [innerHtml]=\"education.info1\"></p>\r\n                                    </div>\r\n                                  </div>\r\n                                  \r\n                             </div>\r\n                            </div>\r\n                            <div class=\"col-sm-4 sidebar\" >\r\n                                <div class=\"skills editable-container\" *ngIf=\"ResumeJson?.skills\">\r\n                                    <div class=\"editable-item\">\r\n                                      <div class=\"editable-toolbar\" *ngIf=\"currentSectionEditing === 'skills'\">\r\n                                        <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">\r\n                                          <label data-toggle=\"modal\" data-target=\"#exampleModalCenter\" class=\"btn btn-secondary \">\r\n                                            Add\r\n                                          </label>\r\n                                          <label (click)=\"deleteSection()\" class=\"btn btn-danger\">\r\n                                            <i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i>\r\n                                          </label>\r\n                    \r\n                                        </div>\r\n                                      </div>\r\n                                      <h3  class=\"title editable\" [innerHtml]=\"ResumeJson?.skills.title\"></h3>\r\n                                    </div>\r\n                                    <div *ngFor=\"let skill of ResumeJson?.skills.skills\" class=\"editable-item\">\r\n                                      <p >\r\n                                        <span class=\"editable ml-3 skill\" [innerHtml]=\"skill\"></span>\r\n                                      </p>\r\n                                    </div>\r\n                                  </div>\r\n                            </div>\r\n                          </div>\r\n                    </div>\r\n                </div>\r\n        </div>\r\n</div>\r\n<br>"

/***/ }),

/***/ "./src/components/resume12/resume12.component.scss":
/*!*********************************************************!*\
  !*** ./src/components/resume12/resume12.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  box-sizing: border-box; }\n\n.editable-container.skills.active {\n  background-color: #0c271a !important; }\n\n.skills * {\n  color: #fff; }\n\nbody {\n  font-family: Arial, Helvetica, sans-serif; }\n\n.document:nth-of-type(2) .sidebar, .document:nth-of-type(2) .main {\n  height: 1054px; }\n\n.sidebar, .main {\n  height: 813px; }\n\n.sidebar {\n  background: #0c271a; }\n\nnav ul {\n  list-style-type: none;\n  padding: 0; }\n\nh1, h2, h3 {\n  text-transform: uppercase; }\n\n.headerDiv {\n  background-color: #ffe066;\n  padding: 10px;\n  text-align: center;\n  color: #0c271a; }\n\nh1 {\n  font-family: 'Times New Roman', Times, serif; }\n"

/***/ }),

/***/ "./src/components/resume12/resume12.component.ts":
/*!*******************************************************!*\
  !*** ./src/components/resume12/resume12.component.ts ***!
  \*******************************************************/
/*! exports provided: Resume12Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Resume12Component", function() { return Resume12Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_services_json_resume_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/services/json-resume.service */ "./src/services/json-resume.service.ts");
/* harmony import */ var _resume_editor_resume_editor_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../resume-editor/resume-editor.component */ "./src/components/resume-editor/resume-editor.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Resume12Component = /** @class */ (function () {
    function Resume12Component(ResumeJsonService, injector) {
        this.ResumeJsonService = ResumeJsonService;
        this.injector = injector;
        this.onEdit = false;
        this.ResumeEditorComponent = this.injector.get(_resume_editor_resume_editor_component__WEBPACK_IMPORTED_MODULE_2__["ResumeEditorComponent"]);
    }
    Resume12Component.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription$ = this.ResumeJsonService.getResumeJson().subscribe(function (resumeJson) {
            console.log(resumeJson);
            _this.ResumeJson = resumeJson;
        });
        this.subscription$.add(this.ResumeJsonService.getCurrentStateEditor().subscribe(function (state) {
            _this.onEdit = state;
        }));
        this.subscription$.add(this.ResumeJsonService.getCurrentSectionEditing().subscribe(function (section) {
            console.log(section);
            _this.currentSectionEditing = section;
        }));
        this.ResumeEditorComponent.domObserver();
    };
    Resume12Component.prototype.deleteSection = function () {
        var parentComponent = this.injector.get(_resume_editor_resume_editor_component__WEBPACK_IMPORTED_MODULE_2__["ResumeEditorComponent"]);
        parentComponent.deleteSection();
    };
    Resume12Component.prototype.ngOnDestroy = function () {
        this.subscription$.unsubscribe();
        this.ResumeEditorComponent.domObserverDisconnect();
    };
    Resume12Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-resume12',
            template: __webpack_require__(/*! ./resume12.component.html */ "./src/components/resume12/resume12.component.html"),
            styles: [__webpack_require__(/*! ./resume12.component.scss */ "./src/components/resume12/resume12.component.scss")]
        }),
        __metadata("design:paramtypes", [src_services_json_resume_service__WEBPACK_IMPORTED_MODULE_1__["JsonResumeService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]])
    ], Resume12Component);
    return Resume12Component;
}());



/***/ }),

/***/ "./src/components/resume13/resume13.component.html":
/*!*********************************************************!*\
  !*** ./src/components/resume13/resume13.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"document\">\r\n  <div class=\"row content-container m-0\">\r\n    <div class=\"navdsad col-sm-4 px-5\" style=\"text-align: center;\">\r\n      <div class=\"basic\">\r\n          <img style=\"width: 150px; height: 150px;\" data-toggle=\"modal\" data-target=\"#exampleModalCenter2\" class=\"profile\"\r\n        [src]=\"ResumeJson?.basic.profile ? ResumeJson?.basic.profile : 'assets/images/Resume/profile-placeholder.jpg'\" />\r\n      <h1 style=\"color: white; \" class=\"editable name\" [innerHtml]=\"ResumeJson?.basic.name\"></h1>\r\n      <p style=\"text-align:center;text-transform: uppercase;\" [innerHtml]=\"ResumeJson?.basic.jobtitle\" class=\"editable jobtitle\"></p>\r\n      <hr>\r\n      <br>\r\n      <br>\r\n      <h4 style=\"color:white;\"> CONTACT</h4>\r\n      <hr width=\"50%\">\r\n      <p class=\"contact-label editable email\" [innerHtml]=\"ResumeJson?.basic.email\"> </p>\r\n      <p class=\"contact-label editable address\" [innerHtml]=\"ResumeJson?.basic.address\"></p>\r\n      <p class=\"contact-label editable phone\" [innerHtml]=\"ResumeJson?.basic.phone\"></p>\r\n      <br>\r\n      <br>\r\n      </div>\r\n    </div>\r\n\r\n\r\n    <div class=\"col-sm-8\">\r\n      <div class=\"content\">\r\n          <div class=\"container\">\r\n\r\n              <div *ngIf=\"ResumeJson?.professionalSummary\" class=\"editable-container professionalSummary\">\r\n                <div class=\"editable-item\">\r\n                  <div class=\"editable-toolbar\" *ngIf=\"currentSectionEditing === 'professionalSummary'\">\r\n                    <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">\r\n                      <label data-toggle=\"modal\" data-target=\"#exampleModalCenter\" class=\"btn btn-secondary \">\r\n                        Add\r\n                      </label>\r\n                      <label (click)=\"deleteSection()\" class=\"btn btn-danger\">\r\n                        <i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i>\r\n                      </label>\r\n      \r\n                    </div>\r\n                  </div>\r\n                  <h4 style=\"color:black;\" class=\"editable title\" [innerHtml]=\"ResumeJson?.professionalSummary.title\"></h4>\r\n      \r\n                </div>\r\n                <p  *ngFor=\"let summary of ResumeJson?.professionalSummary.professionalSummary\" class=\"summary editable-item editable\"\r\n                  [innerHtml]=\"summary\"></p>\r\n              </div>\r\n      \r\n              <div class=\"editable-container experience\" *ngIf=\"ResumeJson?.experience\" dnd-sortable-container [sortableData]=\"ResumeJson?.experience.experience\">\r\n                <div class=\"editable-item\">\r\n                  <div class=\"editable-toolbar\" *ngIf=\"currentSectionEditing === 'experience'\">\r\n                    <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">\r\n                      <label data-toggle=\"modal\" data-target=\"#exampleModalCenter\" class=\"btn btn-secondary \">\r\n                        Add\r\n                      </label>\r\n                      <label (click)=\"deleteSection()\" class=\"btn btn-danger\">\r\n                        <i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i>\r\n                      </label>\r\n      \r\n                    </div>\r\n                  </div>\r\n                  <h4 style=\"color:black;\" class=\"editable title\" [innerHtml]=\"ResumeJson?.experience.title\"></h4>\r\n                </div>\r\n                <div class=\"editable-item\" *ngFor=\"let experience of ResumeJson?.experience.experience ; let i = index\"\r\n                  dnd-sortable [sortableIndex]=\"i\">\r\n                  <h6 class=\"editable company\" [innerHtml]=\"experience.company\"></h6>\r\n                  <p class=\"editable date\" [innerHtml]=\"experience.date\"></p>\r\n                  <p><span *ngFor=\"let desc of experience.desc\" class=\"editable desc-{{i}}\" [innerHtml]=\"desc\"></span></p>\r\n                </div>\r\n              </div>\r\n      \r\n      \r\n              <div class=\"editable-container education\" *ngIf=\"ResumeJson?.education\">\r\n                <div class=\"editable-item\">\r\n                  <div class=\"editable-toolbar\" *ngIf=\"currentSectionEditing === 'education'\">\r\n                    <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">\r\n                      <label data-toggle=\"modal\" data-target=\"#exampleModalCenter\" class=\"btn btn-secondary \">\r\n                        Add\r\n                      </label>\r\n                      <label (click)=\"deleteSection()\" class=\"btn btn-danger\">\r\n                        <i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i>\r\n                      </label>\r\n      \r\n                    </div>\r\n                  </div>\r\n                  <h4 style=\"color:black;\" class=\"title editable\" [innerHtml]=\"ResumeJson?.education.title\"></h4>\r\n                </div>\r\n                <div *ngFor=\"let education of ResumeJson?.education.education\" class=\"editable-item\">\r\n                  <h6 class=\"editable school\" [innerHtml]=\"education.school\"></h6>\r\n                  <p class=\"year\" [innerHtml]=\"education.year\"></p>\r\n                  <p class=\"editable info1\" [innerHtml]=\"education.info1\"></p>\r\n                </div>\r\n              </div>\r\n\r\n              <div  class=\"skills editable-container\" *ngIf=\"ResumeJson?.skills\" >      \r\n                <div class=\"editable-item\">\r\n                        <div class=\"editable-toolbar\" *ngIf=\"currentSectionEditing === 'skills'\">\r\n                                        <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">\r\n                                                        <label data-toggle=\"modal\" data-target=\"#exampleModalCenter\" class=\"btn btn-secondary \">\r\n                                                        Add \r\n                                                        </label>\r\n                                                        <label (click)=\"deleteSection()\" class=\"btn btn-danger\">\r\n                                                                <i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i>\r\n                                                        </label>\r\n                                                        <!-- <label class=\"btn btn-secondary\">\r\n                                                                <input type=\"radio\" name=\"options\" id=\"option3\" autocomplete=\"off\"> Radio\r\n                                                        </label> -->\r\n                                        </div>\r\n                        </div>  \r\n                        <h4 class=\"editable title\">{{ResumeJson?.skills.title}}</h4>\r\n                </div>\r\n                <p #skills *ngFor=\"let skill of ResumeJson?.skills.skills\" class=\"editable-item editable skill m-0\">{{skill}}</p>\r\n              </div>\r\n\r\n              <div  class=\"references editable-container\" *ngIf=\"ResumeJson?.references\" >       \r\n                <div class=\"editable-item\">\r\n                        <div class=\"editable-toolbar\" *ngIf=\"currentSectionEditing === 'references'\">\r\n                                        <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">\r\n                                                        <label data-toggle=\"modal\" data-target=\"#exampleModalCenter\" class=\"btn btn-secondary \">\r\n                                                        Add References\r\n                                                        </label>\r\n                                                        <label (click)=\"deleteSection()\" class=\"btn btn-danger\">\r\n                                                                <i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i>\r\n                                                        </label>\r\n                                                        \r\n                                        </div>\r\n                        </div> \r\n                        <h4 class=\"editable title\">{{ResumeJson?.references.title}}</h4>\r\n                </div>\r\n                <div class=\"editable-item\" *ngFor=\"let reference of ResumeJson?.references.references\" >\r\n                        <p class=\"editable name\"><strong>{{reference.name}}</strong></p>\r\n                        <p class=\"editable contactNumber\">{{reference.contactNumber}}</p>\r\n                        <p class=\"editable address\">{{reference.address}}</p>\r\n                </div>\r\n              </div>\r\n\r\n            </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<br>"

/***/ }),

/***/ "./src/components/resume13/resume13.component.scss":
/*!*********************************************************!*\
  !*** ./src/components/resume13/resume13.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  box-sizing: border-box;\n  font-family: 'Montserrat', sans-serif; }\n\nh1, h4, h3, h2 {\n  text-transform: uppercase; }\n\n.basic * {\n  color: #fff; }\n\n.basic h4 {\n  border-bottom: 2px solid;\n  margin-bottom: 1rem;\n  padding-bottom: 5px;\n  border-color: #fff; }\n\nbody {\n  font-family: Helvetica, sans-serif; }\n\n.navdsad {\n  float: left;\n  width: 30%;\n  background: #262626;\n  padding: 20px; }\n\nh1 {\n  font-size: 40px; }\n\nh5, p, li, i {\n  color: black; }\n\nnav ul {\n  list-style-type: none;\n  padding: 0; }\n\n.editable-container .editable-item h4 {\n  border-bottom: 2px solid;\n  margin-bottom: 1rem;\n  padding-bottom: 5px; }\n\nsection:after {\n  content: \"\";\n  display: table;\n  clear: both; }\n\n@media (max-width: 600px) {\n  nav, article {\n    width: 100%;\n    height: auto; } }\n"

/***/ }),

/***/ "./src/components/resume13/resume13.component.ts":
/*!*******************************************************!*\
  !*** ./src/components/resume13/resume13.component.ts ***!
  \*******************************************************/
/*! exports provided: Resume13Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Resume13Component", function() { return Resume13Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_services_json_resume_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/services/json-resume.service */ "./src/services/json-resume.service.ts");
/* harmony import */ var _resume_editor_resume_editor_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../resume-editor/resume-editor.component */ "./src/components/resume-editor/resume-editor.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Resume13Component = /** @class */ (function () {
    function Resume13Component(ResumeJsonService, injector) {
        this.ResumeJsonService = ResumeJsonService;
        this.injector = injector;
        this.onEdit = false;
        this.ResumeEditorComponent = this.injector.get(_resume_editor_resume_editor_component__WEBPACK_IMPORTED_MODULE_2__["ResumeEditorComponent"]);
    }
    Resume13Component.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription$ = this.ResumeJsonService.getResumeJson().subscribe(function (resumeJson) {
            console.log(resumeJson);
            _this.ResumeJson = resumeJson;
        });
        this.subscription$.add(this.ResumeJsonService.getCurrentStateEditor().subscribe(function (state) {
            _this.onEdit = state;
        }));
        this.subscription$.add(this.ResumeJsonService.getCurrentSectionEditing().subscribe(function (section) {
            console.log(section);
            _this.currentSectionEditing = section;
        }));
        this.ResumeEditorComponent.domObserver();
    };
    Resume13Component.prototype.deleteSection = function () {
        var parentComponent = this.injector.get(_resume_editor_resume_editor_component__WEBPACK_IMPORTED_MODULE_2__["ResumeEditorComponent"]);
        parentComponent.deleteSection();
    };
    Resume13Component.prototype.ngOnDestroy = function () {
        this.subscription$.unsubscribe();
        this.ResumeEditorComponent.domObserverDisconnect();
    };
    Resume13Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-resume13',
            template: __webpack_require__(/*! ./resume13.component.html */ "./src/components/resume13/resume13.component.html"),
            styles: [__webpack_require__(/*! ./resume13.component.scss */ "./src/components/resume13/resume13.component.scss")]
        }),
        __metadata("design:paramtypes", [src_services_json_resume_service__WEBPACK_IMPORTED_MODULE_1__["JsonResumeService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]])
    ], Resume13Component);
    return Resume13Component;
}());



/***/ }),

/***/ "./src/components/resume14/resume14.component.html":
/*!*********************************************************!*\
  !*** ./src/components/resume14/resume14.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"document\">\r\n <div class=\"content-container\">\r\n  <header style=\"color:white; width: 100%\">RESUME</header>\r\n  <section>\r\n    <div class=\"row\" style=\"height:1000px;\">\r\n      <div class=\"col-sm-8 content\">\r\n        <div class=\"container\">\r\n          <div class=\"basic\">\r\n            <h1 style=\"color:steelblue\" class=\"editable name m-0\" [innerHtml]=\"ResumeJson?.basic.name\"></h1>\r\n            <h6 style=\"color:dimgray\" [innerHtml]=\"ResumeJson?.basic.jobtitle\" class=\"editable jobtitle\"></h6>\r\n          </div>\r\n\r\n          <div *ngIf=\"ResumeJson?.professionalSummary\" class=\"editable-container professionalSummary\">\r\n            <div class=\"editable-item\">\r\n              <div class=\"editable-toolbar\" *ngIf=\"currentSectionEditing === 'professionalSummary'\">\r\n                <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">\r\n                  <label data-toggle=\"modal\" data-target=\"#exampleModalCenter\" class=\"btn btn-secondary \">\r\n                    Add\r\n                  </label>\r\n                  <label (click)=\"deleteSection()\" class=\"btn btn-danger\">\r\n                    <i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i>\r\n                  </label>\r\n\r\n                </div>\r\n              </div>\r\n              <h5 style=\"color:steelblue\" class=\"editable title\" [innerHtml]=\"ResumeJson?.professionalSummary.title\"></h5>\r\n            </div>\r\n            <p style=\"color:dimgray\" *ngFor=\"let summary of ResumeJson?.professionalSummary.professionalSummary\"\r\n              class=\"summary editable-item editable\" [innerHtml]=\"summary\"></p>\r\n          </div>\r\n\r\n          <div class=\"editable-container education\" *ngIf=\"ResumeJson?.education\">\r\n            <div class=\"editable-item\">\r\n              <div class=\"editable-toolbar\" *ngIf=\"currentSectionEditing === 'education'\">\r\n                <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">\r\n                  <label data-toggle=\"modal\" data-target=\"#exampleModalCenter\" class=\"btn btn-secondary \">\r\n                    Add\r\n                  </label>\r\n                  <label (click)=\"deleteSection()\" class=\"btn btn-danger\">\r\n                    <i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i>\r\n                  </label>\r\n                </div>\r\n              </div>\r\n              <h5 style=\"color:steelblue\" class=\"title editable\" [innerHtml]=\"ResumeJson?.education.title\"></h5>\r\n            </div>\r\n            <div *ngFor=\"let education of ResumeJson?.education.education\" class=\"editable-item\">\r\n              <p><strong class=\"editable school\" [innerHtml]=\"education.school\" ></strong> </p>\r\n              <p><strong  class=\"editable year\" [innerHtml]=\"education.year\"></strong></p>\r\n              <p class=\"editable info1\" [innerHtml]=\"education.info1\"></p>\r\n            </div>\r\n          </div>\r\n          <div class=\"editable-container experience\" *ngIf=\"ResumeJson?.experience\" dnd-sortable-container\r\n            [sortableData]=\"ResumeJson?.experience.experience\">\r\n            <div class=\"editable-item\">\r\n              <div class=\"editable-toolbar\" *ngIf=\"currentSectionEditing === 'experience'\">\r\n                <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">\r\n                  <label data-toggle=\"modal\" data-target=\"#exampleModalCenter\" class=\"btn btn-secondary \">\r\n                    Add\r\n                  </label>\r\n                  <label (click)=\"deleteSection()\" class=\"btn btn-danger\">\r\n                    <i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i>\r\n                  </label>\r\n                </div>\r\n              </div>\r\n              <h5 style=\"color:steelblue\" class=\"editable title\" [innerHtml]=\"ResumeJson?.experience.title\"></h5>\r\n            </div>\r\n            <div class=\"editable-item\" *ngFor=\"let experience of ResumeJson?.experience.experience ; let i = index\"\r\n              dnd-sortable [sortableIndex]=\"i\">\r\n              <p><strong class=\"editable company\" [innerHtml]=\"experience.company\"></strong></p>\r\n              <p><strong class=\"editable date\" [innerHtml]=\"experience.date\"></strong></p>\r\n              <p><span *ngFor=\"let desc of experience.desc\" class=\"editable desc-{{i}}\" [innerHtml]=\"desc\"></span></p>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"skills editable-container col-sm-12 col-layout-1\" *ngIf=\"ResumeJson?.skills\">\r\n            <div class=\"editable-item\">\r\n              <div class=\"editable-toolbar\" *ngIf=\"currentSectionEditing === 'skills'\">\r\n                <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">\r\n                  <label data-toggle=\"modal\" data-target=\"#exampleModalCenter\" class=\"btn btn-secondary \">\r\n                    Add\r\n                  </label>\r\n                  <label (click)=\"deleteSection()\" class=\"btn btn-danger\">\r\n                    <i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i>\r\n                  </label>\r\n\r\n                </div>\r\n              </div>\r\n              <h5 style=\"color:steelblue\" class=\"editable title\" [innerHtml]=\"ResumeJson?.skills.title\"></h5>\r\n            </div>\r\n            <div *ngFor=\"let skill of ResumeJson?.skills.skills\" class=\"editable-item\">\r\n              <p><span class=\"editable skill\" [innerHtml]=\"skill\"></span></p>\r\n            </div>\r\n          </div>\r\n          <div  class=\"references editable-container\" *ngIf=\"ResumeJson?.references\" >       \r\n            <div class=\"editable-item\">\r\n                    <div class=\"editable-toolbar\" *ngIf=\"currentSectionEditing === 'references'\">\r\n                                    <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">\r\n                                                    <label data-toggle=\"modal\" data-target=\"#exampleModalCenter\" class=\"btn btn-secondary \">\r\n                                                    Add References\r\n                                                    </label>\r\n                                                    <label (click)=\"deleteSection()\" class=\"btn btn-danger\">\r\n                                                            <i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i>\r\n                                                    </label>\r\n                                                    \r\n                                    </div>\r\n                    </div> \r\n                    <h5 class=\"editable title\" style=\"color: steelblue;\">{{ResumeJson?.references.title}}</h5>\r\n            </div>\r\n            <div class=\"editable-item\" *ngFor=\"let reference of ResumeJson?.references.references\" >\r\n                    <p class=\"editable name\"><strong>{{reference.name}}</strong></p>\r\n                    <p class=\"editable contactNumber\">{{reference.contactNumber}}</p>\r\n                    <p class=\"editable address\">{{reference.address}}</p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-sm-4\">\r\n        <div class=\"container basic\">\r\n          <br>\r\n          <h5 style=\"color:steelblue\">&#x2751; CONTACT</h5>\r\n          <hr>\r\n          <h6>ADDRESS</h6>\r\n          <p class=\"editable address\" [innerHtml]=\"ResumeJson?.basic.address\">Location, State, Country, Zip Code</p>\r\n          <h6>PHONE</h6>\r\n          <p class=\"editable phone\" [innerHtml]=\"ResumeJson?.basic.phone\">+12 3456 78910</p>\r\n          <h6>EMAIL ME</h6>\r\n          <p class=\"editable email\" [innerHtml]=\"ResumeJson?.basic.email\">email@email.com</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>\r\n </div>\r\n</div>\r\n<br>"

/***/ }),

/***/ "./src/components/resume14/resume14.component.scss":
/*!*********************************************************!*\
  !*** ./src/components/resume14/resume14.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  box-sizing: border-box; }\n\n.row {\n  margin: 0; }\n\n.basic {\n  padding: 1rem; }\n\nbody {\n  font-family: Arial, Helvetica, sans-serif; }\n\nh1, h4, h3, h2, h5 {\n  text-transform: uppercase; }\n\nnav ul {\n  list-style-type: none;\n  padding: 0; }\n\nsection:after {\n  content: \"\";\n  display: table;\n  clear: both; }\n\nheader {\n  background-color: steelblue;\n  padding: 15px;\n  text-align: left;\n  color: #0c271a; }\n\n@media (max-width: 600px) {\n  nav, article {\n    width: 100%;\n    height: auto; } }\n\nh1 {\n  font-size: 300%;\n  font-family: 'Courier New', Courier, monospace; }\n"

/***/ }),

/***/ "./src/components/resume14/resume14.component.ts":
/*!*******************************************************!*\
  !*** ./src/components/resume14/resume14.component.ts ***!
  \*******************************************************/
/*! exports provided: Resume14Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Resume14Component", function() { return Resume14Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_services_json_resume_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/services/json-resume.service */ "./src/services/json-resume.service.ts");
/* harmony import */ var _resume_editor_resume_editor_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../resume-editor/resume-editor.component */ "./src/components/resume-editor/resume-editor.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Resume14Component = /** @class */ (function () {
    function Resume14Component(ResumeJsonService, injector) {
        this.ResumeJsonService = ResumeJsonService;
        this.injector = injector;
        this.onEdit = false;
        this.ResumeEditorComponent = this.injector.get(_resume_editor_resume_editor_component__WEBPACK_IMPORTED_MODULE_2__["ResumeEditorComponent"]);
    }
    Resume14Component.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription$ = this.ResumeJsonService.getResumeJson().subscribe(function (resumeJson) {
            console.log(resumeJson);
            _this.ResumeJson = resumeJson;
        });
        this.subscription$.add(this.ResumeJsonService.getCurrentStateEditor().subscribe(function (state) {
            _this.onEdit = state;
        }));
        this.subscription$.add(this.ResumeJsonService.getCurrentSectionEditing().subscribe(function (section) {
            console.log(section);
            _this.currentSectionEditing = section;
        }));
        this.ResumeEditorComponent.domObserver();
    };
    Resume14Component.prototype.deleteSection = function () {
        var parentComponent = this.injector.get(_resume_editor_resume_editor_component__WEBPACK_IMPORTED_MODULE_2__["ResumeEditorComponent"]);
        parentComponent.deleteSection();
    };
    Resume14Component.prototype.ngOnDestroy = function () {
        this.subscription$.unsubscribe();
        this.ResumeEditorComponent.domObserverDisconnect();
    };
    Resume14Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-resume14',
            template: __webpack_require__(/*! ./resume14.component.html */ "./src/components/resume14/resume14.component.html"),
            styles: [__webpack_require__(/*! ./resume14.component.scss */ "./src/components/resume14/resume14.component.scss")]
        }),
        __metadata("design:paramtypes", [src_services_json_resume_service__WEBPACK_IMPORTED_MODULE_1__["JsonResumeService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]])
    ], Resume14Component);
    return Resume14Component;
}());



/***/ }),

/***/ "./src/components/resume15/resume15.component.html":
/*!*********************************************************!*\
  !*** ./src/components/resume15/resume15.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"document row row-eq-height m-0\">\r\n  <div class=\"container content-container\">\r\n    <div class=\"resume-container\">\r\n      <div class=\"left-side-background\"></div>\r\n      <section class=\"body-content content\">\r\n        <div class=\"row\">\r\n          <div class=\"col-12\">\r\n            <div class=\"phone-email text-right basic\">\r\n              <span><a class=\"editable phone\" [innerHtml]=\"ResumeJson?.basic.phone\"></a></span>\r\n              <span><a class=\"editable email\" [innerHtml]=\"ResumeJson?.basic.email\"></a></span>\r\n            </div>\r\n            <div class=\"profile-info\">\r\n              <div class=\"profile-name basic\">\r\n                <h1 class=\"editable name\" [innerHtml]=\"ResumeJson?.basic.name\"></h1>\r\n              </div>\r\n              <div class=\"editable-container professionalSummary\" *ngIf=\"ResumeJson?.professionalSummary\">\r\n                <div class=\"profile-desc\">\r\n                  <!-- <p>Divamus a mi. Morbi neque. Aliquam erat volutpat. Integer uiltrices lobortis.</p>\r\n        <p>Pleelentesque habitant morbi tristique senectus et netus et malesuada fames.</p>\r\n        <p>Proin semper, ante vitae sollicitudin posuere metus quam iaculis nibh, vitae.</p> -->\r\n                  <p *ngFor=\"let summary of ResumeJson?.professionalSummary.professionalSummary\" class=\"summary editable-item editable\"\r\n                    [innerHtml]=\"summary\"></p>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n\r\n            <div class=\"info-container editable-container experience\" *ngIf=\"ResumeJson?.experience\"\r\n              dnd-sortable-container [sortableData]=\"ResumeJson?.experience.experience\">\r\n              <div class=\"editable-item\">\r\n                <div class=\"editable-toolbar\" *ngIf=\"currentSectionEditing === 'experience'\">\r\n                  <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">\r\n                    <label data-toggle=\"modal\" data-target=\"#exampleModalCenter\" class=\"btn btn-secondary \">\r\n                      Add\r\n                    </label>\r\n                    <label (click)=\"deleteSection()\" class=\"btn btn-danger\">\r\n                      <i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i>\r\n                    </label>\r\n\r\n                  </div>\r\n                </div>\r\n                <div class=\"info-title\">\r\n                  <h5 class=\"editable title\" [innerHtml]=\"ResumeJson?.experience.title\"></h5>\r\n                </div>\r\n              </div>\r\n              <div class=\"info-details editable-item\" *ngFor=\"let experience of ResumeJson?.experience.experience ; let i = index\"\r\n                dnd-sortable [sortableIndex]=\"i\">\r\n                <div class=\"years\">\r\n                  <p class=\"editable date\" [innerHtml]=\"experience.date\"></p>\r\n                </div>\r\n                <div class=\"position-company\">\r\n                    <h6 class=\"editable company\"\r\n                      [innerHtml]=\"experience.company\"></h6>\r\n                  <ul>\r\n                    <li *ngFor=\"let desc of experience.desc\" class=\"editable desc-{{i}}\" [innerHtml]=\"desc\"></li>\r\n                  </ul>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n\r\n\r\n            <div class=\"info-container editable-container education\" *ngIf=\"ResumeJson?.education\">\r\n              <div class=\"editable-item\">\r\n                <div class=\"editable-toolbar\" *ngIf=\"currentSectionEditing === 'education'\">\r\n                  <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">\r\n                    <label data-toggle=\"modal\" data-target=\"#exampleModalCenter\" class=\"btn btn-secondary \">\r\n                      Add\r\n                    </label>\r\n                    <label (click)=\"deleteSection()\" class=\"btn btn-danger\">\r\n                      <i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i>\r\n                    </label>\r\n                  </div>\r\n                </div>\r\n                <div class=\"info-title\">\r\n                  <h5 class=\"title editable\" [innerHtml]=\"ResumeJson?.education.title\">EDUCATION</h5>\r\n                </div>\r\n              </div>\r\n              <div *ngFor=\"let education of ResumeJson?.education.education\" class=\"editable-item info-details\">\r\n                <div class=\"years\">\r\n                  <p class=\"editable year\" [innerHtml]=\"education.year\"></p>\r\n                </div>\r\n                <div class=\"position-company\">\r\n                  <h6 class=\"editable school\" [innerHtml]=\"education.school\"></h6>\r\n                  <ul>\r\n                    <li class=\"editable info1\" [innerHtml]=\"education.info1\"></li>\r\n                  </ul>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n\r\n\r\n            <div class=\"info-container skills editable-container\" *ngIf=\"ResumeJson?.skills\">\r\n              <div class=\"editable-item\">\r\n                <div class=\"editable-toolbar\" *ngIf=\"currentSectionEditing === 'skills'\">\r\n                  <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">\r\n                    <label data-toggle=\"modal\" data-target=\"#exampleModalCenter\" class=\"btn btn-secondary \">\r\n                      Add\r\n                    </label>\r\n                    <label (click)=\"deleteSection()\" class=\"btn btn-danger\">\r\n                      <i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i>\r\n                    </label>\r\n                  </div>\r\n                </div>\r\n                <div class=\"info-title\">\r\n                  <h5 class=\"editable title\" [innerHtml]=\"ResumeJson?.skills.title\">AWARDS</h5>\r\n                </div>\r\n              </div>\r\n\r\n                <p *ngFor=\"let skill of ResumeJson?.skills.skills\" class=\"editable-item info-details\" style=\"margin-left: 11rem;\" class=\"editable skill\" [innerHtml]=\"skill\"></p>\r\n            </div>\r\n\r\n            <div class=\"info-container references editable-container\" *ngIf=\"ResumeJson?.references\">\r\n                <div class=\"editable-item\">\r\n                  <div class=\"editable-toolbar\" *ngIf=\"currentSectionEditing === 'references'\">\r\n                    <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">\r\n                      <label data-toggle=\"modal\" data-target=\"#exampleModalCenter\" class=\"btn btn-secondary \">\r\n                        Add\r\n                      </label>\r\n                      <label (click)=\"deleteSection()\" class=\"btn btn-danger\">\r\n                        <i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i>\r\n                      </label>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"info-title\">\r\n                    <h5 class=\"editable title\" [innerHtml]=\"ResumeJson?.references.title\"></h5>\r\n                  </div>\r\n                </div>\r\n                <div *ngFor=\"let reference of ResumeJson?.references.references\" class=\"editable-item info-details\">\r\n                  <div class=\"years\">\r\n                    <!-- <p class=\"editable year\" [innerHtml]=\"education.year\"></p> -->\r\n                  </div>\r\n                  <div class=\"position-company\">\r\n                    <div class=\"title\">\r\n                       <h6 class=\"editable name\" [innerHtml]=\"reference.name\"></h6>\r\n                    </div>\r\n                    <ul>\r\n                      <li class=\"editable contactNumber\" [innerHtml]=\"reference.contactNumber\"></li>\r\n                      <li class=\"editable address\" [innerHtml]=\"reference.address\"></li>\r\n                    </ul>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n          </div>\r\n        </div>\r\n        <!--END OF ROW-->\r\n      </section>\r\n      <!--END OF BODY CONTENT-->\r\n    </div>\r\n    <!--END OF RESUME CONTAINER-->\r\n  </div>\r\n  <!--END OF CONTAINER-->\r\n</div>\r\n<br>"

/***/ }),

/***/ "./src/components/resume15/resume15.component.scss":
/*!*********************************************************!*\
  !*** ./src/components/resume15/resume15.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  box-sizing: border-box; }\n\nbody {\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 13px; }\n\nbody p,\nul,\nli {\n  font-size: 12px;\n  line-height: 1.3; }\n\n.resume-container {\n  width: 100%;\n  max-width: 210mm;\n  margin: 0 auto;\n  padding: 50px;\n  height: 1054px;\n  position: relative; }\n\n.left-side-background {\n  width: 29%;\n  height: 100%;\n  position: absolute;\n  left: -18px;\n  top: 0;\n  background-color: #59B0B9; }\n\n.phone-email span {\n  border-right: 1px solid #59B0B9;\n  padding-right: 10px;\n  margin-right: 5px; }\n\n.phone-email span a {\n  color: #2B5D62; }\n\n.phone-email span:last-child {\n  padding: 0;\n  margin: 0;\n  border: 0; }\n\n.profile-info {\n  padding-left: 25%; }\n\n.profile-name h1 {\n  font-weight: 600;\n  color: #000000;\n  font-size: 42px; }\n\n.profile-name h1 span {\n  color: #5B6973; }\n\n.profile-desc p {\n  margin-bottom: 5px;\n  background-color: #f7f7f7;\n  font-size: 14px;\n  display: inline-block;\n  padding: 2px; }\n\n.info-title {\n  padding: 0;\n  border-bottom: 1px solid #000;\n  letter-spacing: 3px;\n  color: #fff;\n  margin-bottom: 20px; }\n\n.info-details {\n  display: flex;\n  flex-wrap: wrap;\n  padding: 5px 0;\n  flex-direction: row; }\n\n.years {\n  width: 25%;\n  text-align: right;\n  padding-right: 50px;\n  color: #fff;\n  flex: 1; }\n\n.position-company .years p {\n  margin: 0 !important; }\n\n.position-company .title strong {\n  color: #2B5D62; }\n\n.position-company {\n  width: 75%; }\n\n.editable-container.active {\n  background-color: unset !important; }\n\n.editable-container {\n  padding: 1rem 0 !important; }\n\n.editable-container h6 {\n    color: #2B5D62; }\n"

/***/ }),

/***/ "./src/components/resume15/resume15.component.ts":
/*!*******************************************************!*\
  !*** ./src/components/resume15/resume15.component.ts ***!
  \*******************************************************/
/*! exports provided: Resume15Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Resume15Component", function() { return Resume15Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_services_json_resume_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/services/json-resume.service */ "./src/services/json-resume.service.ts");
/* harmony import */ var _resume_editor_resume_editor_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../resume-editor/resume-editor.component */ "./src/components/resume-editor/resume-editor.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Resume15Component = /** @class */ (function () {
    function Resume15Component(ResumeJsonService, injector) {
        this.ResumeJsonService = ResumeJsonService;
        this.injector = injector;
        this.onEdit = false;
        this.ResumeEditorComponent = this.injector.get(_resume_editor_resume_editor_component__WEBPACK_IMPORTED_MODULE_2__["ResumeEditorComponent"]);
    }
    Resume15Component.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription$ = this.ResumeJsonService.getResumeJson().subscribe(function (resumeJson) {
            console.log(resumeJson);
            _this.ResumeJson = resumeJson;
        });
        this.subscription$.add(this.ResumeJsonService.getCurrentStateEditor().subscribe(function (state) {
            _this.onEdit = state;
        }));
        this.subscription$.add(this.ResumeJsonService.getCurrentSectionEditing().subscribe(function (section) {
            console.log(section);
            _this.currentSectionEditing = section;
        }));
        this.ResumeEditorComponent.domObserver();
    };
    Resume15Component.prototype.deleteSection = function () {
        var parentComponent = this.injector.get(_resume_editor_resume_editor_component__WEBPACK_IMPORTED_MODULE_2__["ResumeEditorComponent"]);
        parentComponent.deleteSection();
    };
    Resume15Component.prototype.ngOnDestroy = function () {
        this.subscription$.unsubscribe();
        this.ResumeEditorComponent.domObserverDisconnect();
    };
    Resume15Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-resume15',
            template: __webpack_require__(/*! ./resume15.component.html */ "./src/components/resume15/resume15.component.html"),
            styles: [__webpack_require__(/*! ./resume15.component.scss */ "./src/components/resume15/resume15.component.scss")]
        }),
        __metadata("design:paramtypes", [src_services_json_resume_service__WEBPACK_IMPORTED_MODULE_1__["JsonResumeService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]])
    ], Resume15Component);
    return Resume15Component;
}());



/***/ }),

/***/ "./src/components/resume16/resume16.component.html":
/*!*********************************************************!*\
  !*** ./src/components/resume16/resume16.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"document row row-eq-height \">\r\n  <div class=\"container content-container\">\r\n    <div class=\"resume-container content\">\r\n      <div class=\"\">\r\n        <div class=\"row align-items-center\">\r\n          <div class=\"col-sm-12\">\r\n            <div class=\"header-container text-center basic\">\r\n              <h1 class=\"name-container d-inline-block text-white editable name\" [innerHtml]=\"ResumeJson?.basic.name\"\r\n                style=\"text-transform: uppercase;\"></h1>\r\n              <h4 class=\"position-container\"><strong [innerHtml]=\"ResumeJson?.basic.jobtitle\" class=\"editable jobtitle\"></strong></h4>\r\n              <div class=\"contact-info\">\r\n                <p>\r\n                  <span class=\"glyphicon glyphicon-phone\"></span>\r\n                  <span class=\"editable phone\" [innerHtml]=\"ResumeJson?.basic.phone\"></span>\r\n                  <span class=\"glyphicon glyphicon-envelope\"></span>\r\n                  <span class=\"editable email\" [innerHtml]=\"ResumeJson?.basic.email\"></span>\r\n                </p>\r\n              </div>\r\n            </div>\r\n            <!-- <div class=\"content\"> -->\r\n            <div class=\"info-container\">\r\n              <div class=\"editable-container experience\" *ngIf=\"ResumeJson?.experience\" dnd-sortable-container\r\n                [sortableData]=\"ResumeJson?.experience.experience\">\r\n                <div class=\"editable-item\">\r\n                  <div class=\"editable-toolbar\" *ngIf=\"currentSectionEditing === 'experience'\">\r\n                    <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">\r\n                      <label data-toggle=\"modal\" data-target=\"#exampleModalCenter\" class=\"btn btn-secondary \">\r\n                        Add\r\n                      </label>\r\n                      <label (click)=\"deleteSection()\" class=\"btn btn-danger\">\r\n                        <i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i>\r\n                      </label>\r\n\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"title-container text-center\">\r\n                    <h3 class=\"info-title m-0 editable title\" [innerHtml]=\"ResumeJson?.experience.title\"></h3>\r\n                    <div class=\"border-diamond\"><span>&#9670;</span><span>&#9670;</span><span>&#9670;</span></div>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"experience-timeline editable-item\">\r\n                  <div class=\"experiencce-info-container\" *ngFor=\"let experience of ResumeJson?.experience.experience ; let i = index\"\r\n                    dnd-sortable [sortableIndex]=\"i\">\r\n                    <div class=\"circle-timeline\"></div>\r\n                    <div class=\"editable company\" [innerHtml]=\"experience.company\"></div>\r\n                    <div class=\"date\" [innerHtml]=\"experience.date\"></div>\r\n                    <div *ngFor=\"let desc of experience.desc\" class=\"editable desc-{{i}}\" [innerHtml]=\"desc\"></div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div *ngIf=\"ResumeJson?.professionalSummary\" class=\"editable-container professionalSummary\">\r\n                <div class=\"paragraph description\">\r\n                  <p *ngFor=\"let summary of ResumeJson?.professionalSummary.professionalSummary\" class=\"summary editable-item editable\"\r\n                    [innerHtml]=\"summary\"></p>\r\n                </div>\r\n              </div>\r\n\r\n            </div>\r\n            <div class=\"info-container text-center skills editable-container\" *ngIf=\"ResumeJson?.skills\">\r\n              <div class=\"editable-item\">\r\n                <div class=\"editable-toolbar\" *ngIf=\"currentSectionEditing === 'skills'\">\r\n                  <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">\r\n                    <label data-toggle=\"modal\" data-target=\"#exampleModalCenter\" class=\"btn btn-secondary \">\r\n                      Add\r\n                    </label>\r\n                    <label (click)=\"deleteSection()\" class=\"btn btn-danger\">\r\n                      <i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i>\r\n                    </label>\r\n\r\n                  </div>\r\n                </div>\r\n                <div class=\"title-container text-center\">\r\n                  <h3 class=\"info-title m-0 editable title\" [innerHtml]=\"ResumeJson?.skills.title\"></h3>\r\n                  <div class=\"border-diamond\"><span>&#9670;</span><span>&#9670;</span><span>&#9670;</span></div>\r\n                </div>\r\n              </div>\r\n              <div class=\"info-description editable-item\" *ngFor=\"let skill of ResumeJson?.skills.skills\">\r\n                <ul>\r\n                  <li class=\"editable skill\" [innerHtml]=\"skill\"></li>\r\n                </ul>\r\n              </div>\r\n            </div>\r\n            <div class=\"info-container text-center editable-container education\" *ngIf=\"ResumeJson?.education\">\r\n              <div class=\"editable-item\">\r\n                <div class=\"editable-toolbar\" *ngIf=\"currentSectionEditing === 'education'\">\r\n                  <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">\r\n                    <label data-toggle=\"modal\" data-target=\"#exampleModalCenter\" class=\"btn btn-secondary \">\r\n                      Add\r\n                    </label>\r\n                    <label (click)=\"deleteSection()\" class=\"btn btn-danger\">\r\n                      <i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i>\r\n                    </label>\r\n                  </div>\r\n                </div>\r\n                <div class=\"title-container text-center\">\r\n                  <h3 class=\"info-title m-0 title editable\" [innerHtml]=\"ResumeJson?.education.title\"></h3>\r\n                  <div class=\"border-diamond\"><span>&#9670;</span><span>&#9670;</span><span>&#9670;</span></div>\r\n                </div>\r\n              </div>\r\n              <div class=\"info-description editable-item\" *ngFor=\"let education of ResumeJson?.education.education\">\r\n                <ul>\r\n                  <li><span class=\"editable school\" [innerHtml]=\"education.school\"></span><span contenteditable=\"false\">/</span><span\r\n                      class=\"editable year\" [innerHtml]=\"education.year\"></span>\r\n                    <p class=\"editable info1\" [innerHtml]=\"education.info1\"></p>\r\n                  </li>\r\n                </ul>\r\n              </div>\r\n            </div>\r\n            <!-- </div> -->\r\n          </div>\r\n          <!--END OF COL--->\r\n        </div>\r\n        <!---END OF ROW--->\r\n      </div>\r\n      <!--END OF RESUME CONTAINER-->\r\n    </div>\r\n    <!--END OF CONTAINER-->\r\n  </div>\r\n</div>\r\n<br>\r\n"

/***/ }),

/***/ "./src/components/resume16/resume16.component.scss":
/*!*********************************************************!*\
  !*** ./src/components/resume16/resume16.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  box-sizing: border-box; }\n\nh1, h2, h3, h4, h5 {\n  font-weight: 400; }\n\nbody {\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 13px; }\n\nbody p, ul, li {\n  font-size: 13px;\n  line-height: 1.3;\n  margin-bottom: 5px; }\n\n.resume-container {\n  width: 100%;\n  max-width: 210mm;\n  margin: 0 auto;\n  padding: 70px 0; }\n\n.header-container {\n  padding-bottom: 40px; }\n\n.header-container .name-container {\n  margin: 0;\n  background-color: #2E75B6;\n  padding: 5px;\n  border-radius: 10px;\n  min-width: 240px; }\n\n.position-container {\n  color: #595959; }\n\n.contact-info span:last-child {\n  padding: 0; }\n\n.contact-info span {\n  padding-right: 20px; }\n\n.contact-info .glyphicon {\n  font-size: 24px;\n  padding-right: 10px; }\n\n.contact-info p {\n  font-size: 16px;\n  color: #828282; }\n\n.position-container {\n  color: #595959;\n  margin: 12px 0; }\n\n.info-container .info-title {\n  color: #595959;\n  font-weight: 600; }\n\n.border-diamond span {\n  font-size: 8px;\n  padding: 0px 4px;\n  color: #666666; }\n\n.experience-timeline {\n  position: relative;\n  display: flex;\n  padding: 0 40px;\n  flex-wrap: wrap; }\n\n.experience-timeline:before {\n  content: '';\n  width: 100%;\n  height: 2px;\n  background-color: #BBBBBB;\n  top: 50%;\n  left: 0;\n  position: absolute; }\n\n.experiencce-info-container {\n  padding: 100px 10px 0;\n  flex-direction: column;\n  position: relative;\n  color: #888888;\n  text-align: center;\n  font-size: 15px;\n  flex: 1; }\n\n.experiencce-info-container:nth-child(even) {\n  padding-bottom: 100px;\n  padding-top: 0; }\n\n.experiencce-info-container .company {\n  color: #000; }\n\n.circle-timeline {\n  position: absolute;\n  width: 22px;\n  height: 22px;\n  background-color: #2E75B6;\n  border-radius: 50%;\n  border: 2px solid #2E75B6;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%); }\n\n.info-container {\n  margin-bottom: 30px; }\n\n.title-container {\n  margin-bottom: 25px; }\n\n.paragraph.description {\n  padding: 30px 50px;\n  text-align: justify;\n  text-align-last: center; }\n\n.info-description ul li {\n  text-align: left; }\n\n.info-description ul {\n  display: inline-block;\n  padding: 0; }\n\n.paragraph.description strong {\n  color: #3377B6; }\n"

/***/ }),

/***/ "./src/components/resume16/resume16.component.ts":
/*!*******************************************************!*\
  !*** ./src/components/resume16/resume16.component.ts ***!
  \*******************************************************/
/*! exports provided: Resume16Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Resume16Component", function() { return Resume16Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_services_json_resume_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/services/json-resume.service */ "./src/services/json-resume.service.ts");
/* harmony import */ var _resume_editor_resume_editor_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../resume-editor/resume-editor.component */ "./src/components/resume-editor/resume-editor.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Resume16Component = /** @class */ (function () {
    function Resume16Component(ResumeJsonService, injector) {
        this.ResumeJsonService = ResumeJsonService;
        this.injector = injector;
        this.onEdit = false;
        this.ResumeEditorComponent = this.injector.get(_resume_editor_resume_editor_component__WEBPACK_IMPORTED_MODULE_2__["ResumeEditorComponent"]);
    }
    Resume16Component.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription$ = this.ResumeJsonService.getResumeJson().subscribe(function (resumeJson) {
            console.log(resumeJson);
            _this.ResumeJson = resumeJson;
        });
        this.subscription$.add(this.ResumeJsonService.getCurrentStateEditor().subscribe(function (state) {
            _this.onEdit = state;
        }));
        this.subscription$.add(this.ResumeJsonService.getCurrentSectionEditing().subscribe(function (section) {
            console.log(section);
            _this.currentSectionEditing = section;
        }));
        this.ResumeEditorComponent.domObserver();
    };
    Resume16Component.prototype.deleteSection = function () {
        var parentComponent = this.injector.get(_resume_editor_resume_editor_component__WEBPACK_IMPORTED_MODULE_2__["ResumeEditorComponent"]);
        parentComponent.deleteSection();
    };
    Resume16Component.prototype.ngOnDestroy = function () {
        this.subscription$.unsubscribe();
        this.ResumeEditorComponent.domObserverDisconnect();
    };
    Resume16Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-resume16',
            template: __webpack_require__(/*! ./resume16.component.html */ "./src/components/resume16/resume16.component.html"),
            styles: [__webpack_require__(/*! ./resume16.component.scss */ "./src/components/resume16/resume16.component.scss")]
        }),
        __metadata("design:paramtypes", [src_services_json_resume_service__WEBPACK_IMPORTED_MODULE_1__["JsonResumeService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]])
    ], Resume16Component);
    return Resume16Component;
}());



/***/ }),

/***/ "./src/components/resume17/resume17.component.html":
/*!*********************************************************!*\
  !*** ./src/components/resume17/resume17.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"document row row-eq-height m-0\">\r\n  <div class=\"container\">\r\n    <div class=\"resume-container\">\r\n      <section class=\"top-section\">\r\n        <div class=\"row\">\r\n          <div class=\"col-12\">\r\n            <h4 class=\"header-title text-white m-0 p-0 text-right\">\r\n              RESUME\r\n            </h4>\r\n          </div>\r\n        </div>\r\n      </section>\r\n      <!--END OF TOP SECTION-->\r\n      <section class=\"profile-image basic\">\r\n        <div class=\"row\">\r\n          <div class=\"col-12\">\r\n            <div class=\"image-container\">\r\n              <img style=\"width: 130px; height: 130px;border-radius: 50%;\" data-toggle=\"modal\" data-target=\"#exampleModalCenter2\"\r\n                class=\"profile\" [src]=\"ResumeJson?.basic.profile ? ResumeJson?.basic.profile : 'assets/images/Resume/profile-placeholder.jpg'\" />\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </section>\r\n      <!--END OF PROFILE IMAGE-->\r\n      <section class=\"body-content\">\r\n        <div class=\"row\">\r\n          <div class=\"col-7\">\r\n            <div class=\"profile-info \">\r\n              <div class=\"profile-name basic\">\r\n                <h1 class=\"editable name\" [innerHtml]=\"ResumeJson?.basic.name\"></h1>\r\n              </div>\r\n              <div class=\"profile-position basic\">\r\n                <h3 class=\"black-text editable jobtitle\" [innerHtml]=\"ResumeJson?.basic.jobtitle\"></h3>\r\n              </div>\r\n\r\n              <div class=\"editable-container professionalSummary\" editable-container professionalSummary>\r\n                <div class=\"profile-desc summary editable-item editable\" *ngFor=\"let summary of ResumeJson?.professionalSummary.professionalSummary\"\r\n                  [innerHtml]=\"summary\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n\r\n            <div class=\"info-container skills editable-container\" *ngIf=\"ResumeJson?.skills\">\r\n\r\n              <div class=\"editable-item\">\r\n                <div class=\"editable-toolbar\" *ngIf=\"currentSectionEditing === 'skills'\">\r\n                  <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">\r\n                    <label data-toggle=\"modal\" data-target=\"#exampleModalCenter\" class=\"btn btn-secondary \">\r\n                      Add\r\n                    </label>\r\n                    <label (click)=\"deleteSection()\" class=\"btn btn-danger\">\r\n                      <i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i>\r\n                    </label>\r\n\r\n                  </div>\r\n                </div>\r\n                <div class=\"info-title\">\r\n                  <h3 class=\"editable title\" [innerHtml]=\"ResumeJson?.skills.title\"></h3>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"info-details editable-item\" *ngFor=\"let skill of ResumeJson?.skills.skills\">\r\n                <ul>\r\n                  <li class=\"editable skill\" [innerHtml]=\"skill\"></li>\r\n                </ul>\r\n              </div>\r\n            </div>\r\n\r\n\r\n\r\n\r\n            <div class=\"info-container references editable-container\" *ngIf=\"ResumeJson?.references\">\r\n              <div class=\"editable-item\">\r\n                <div class=\"editable-toolbar\" *ngIf=\"currentSectionEditing === 'references'\">\r\n                  <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">\r\n                    <label data-toggle=\"modal\" data-target=\"#exampleModalCenter\" class=\"btn btn-secondary \">\r\n                      Add References\r\n                    </label>\r\n                    <label (click)=\"deleteSection()\" class=\"btn btn-danger\">\r\n                      <i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i>\r\n                    </label>\r\n\r\n                  </div>\r\n                </div>\r\n                <div class=\"info-title\">\r\n                  <h3 class=\"editable title\" [innerHtml]=\"ResumeJson?.references.title\">STRENGTHS</h3>\r\n                </div>\r\n              </div>\r\n              <div class=\"info-details editable-item\" *ngFor=\"let reference of ResumeJson?.references.references\">\r\n                <p style=\"padding: 0 20px;\" class=\"editable name\"><strong [innerHtml]=\"reference.name\"></strong></p>\r\n                <p style=\"padding: 0 20px;\" class=\"editable contactNumber\" [innerHtml]=\"reference.contactNumber\"></p>\r\n                <p style=\"padding: 0 20px;\" class=\"editable address\" [innerHtml]=\"reference.address\"></p>\r\n              </div>\r\n            </div>\r\n            <!-- <div class=\"info-container\">\r\n              <div class=\"info-title\">\r\n                <h3>STRENGTHS</h3>\r\n              </div>\r\n              <div class=\"info-details\">\r\n                <ul>\r\n                  <li>Creativity</li>\r\n                  <li>Reliable</li>\r\n                  <li>Communication</li>\r\n                  <li>Team player</li>\r\n                  <li>CSS/HTML </li>\r\n                  <li>Leadership </li>\r\n                </ul>\r\n              </div>\r\n            </div> -->\r\n          </div>\r\n          <!--END OF COL-8-->\r\n          <div class=\"col-5\">\r\n            <div class=\"right-container text-right\">\r\n              <div class=\"info-container\">\r\n                <div class=\"info-title\">\r\n                  <h3>GET IN TOUCH</h3>\r\n                </div>\r\n                <div class=\"info-details basic\">\r\n                  <ul>\r\n                    <li class=\"editable phone\" [innerHtml]=\"ResumeJson?.basic.phone\"><span class=\"icon\"><i class=\"fa fa-mobile\"></i></span></li>\r\n                    <li class=\"editable email\" [innerHtml]=\"ResumeJson?.basic.email\"><span class=\"icon\"><i class=\"fa fa-envelope\"></i></span></li>\r\n                    <li class=\"editable address\" [innerHtml]=\"ResumeJson?.basic.address\"><span class=\"icon\"><i class=\"fa fa-globe\"></i></span></li>\r\n                  </ul>\r\n                </div>\r\n              </div>\r\n              <div class=\"info-container editable-container experience\" *ngIf=\"ResumeJson?.experience\"\r\n                dnd-sortable-container [sortableData]=\"ResumeJson?.experience.experience\">\r\n                <div class=\"editable-item\">\r\n                  <div class=\"editable-toolbar\" *ngIf=\"currentSectionEditing === 'experience'\">\r\n                    <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">\r\n                      <label data-toggle=\"modal\" data-target=\"#exampleModalCenter\" class=\"btn btn-secondary \">\r\n                        Add\r\n                      </label>\r\n                      <label (click)=\"deleteSection()\" class=\"btn btn-danger\">\r\n                        <i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i>\r\n                      </label>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"info-title\">\r\n                    <h3 class=\"editable title\" [innerHtml]=\"ResumeJson?.experience.title\"></h3>\r\n                    <span class=\"icon\"><i class=\"fa fa-briefcase\"></i></span>\r\n                  </div>\r\n                </div>\r\n                <div class=\"editable-item\" *ngFor=\"let experience of ResumeJson?.experience.experience ; let i = index\"\r\n                  dnd-sortable [sortableIndex]=\"i\">\r\n                  <div class=\"info-details\">\r\n                    <div class=\"job-title editable company\" [innerHtml]=\"experience.company\">\r\n                    </div>\r\n                    <div class=\"job-position with-green-color\">\r\n                      Web & Graphic Designer\r\n                    </div>\r\n                    <div class=\"job-desc editable desc-{{i}}\" *ngFor=\"let desc of experience.desc\" [innerHtml]=\"desc\">\r\n                    </div>\r\n                    <div class=\"years\">\r\n                      <p><span class=\"with-green-color date editable\" [innerHtml]=\"experience.date\"></span></p>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <!--END OF 2ND INFO CONTAINER-->\r\n              <div class=\"info-container editable-container education\" *ngIf=\"ResumeJson?.education\">\r\n                <div class=\"editable-item\">\r\n                  <div class=\"editable-toolbar\" *ngIf=\"currentSectionEditing === 'education'\">\r\n                    <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">\r\n                      <label data-toggle=\"modal\" data-target=\"#exampleModalCenter\" class=\"btn btn-secondary \">\r\n                        Add\r\n                      </label>\r\n                      <label (click)=\"deleteSection()\" class=\"btn btn-danger\">\r\n                        <i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i>\r\n                      </label>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"info-title\">\r\n                    <h3 class=\"title editable\" [innerHtml]=\"ResumeJson?.education.title\"></h3>\r\n                    <span class=\"icon\"><i class=\"fa fa-graduation-cap\"></i></span>\r\n                  </div>\r\n                </div>\r\n                <div *ngFor=\"let education of ResumeJson?.education.education\" class=\"editable-item info-details\">\r\n                  <div class=\"job-title\">\r\n                    GRAPHIC DESIGN - B.A.\r\n                  </div>\r\n                  <div class=\"job-position with-green-color editable school\" [innerHtml]=\"education.school\">\r\n                  </div>\r\n                  <div class=\"job-desc editable info1\" [innerHtml]=\"education.info1\">\r\n                  </div>\r\n                  <div class=\"years\">\r\n                    <p><span class=\"with-green-color editable year\" [innerHtml]=\"education.year\"></span></p>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <!--END OF 3RD INFO CONTAINER-->\r\n            </div>\r\n            <!--END OF RIGHT -CONTAINER-->\r\n          </div>\r\n          <!--END OF COL 4-->\r\n        </div>\r\n        <!--END OF ROW-->\r\n      </section>\r\n      <!--END OF BODY CONTENT-->\r\n      <footer class=\"footer\">\r\n        <div class=\"transparent-circle\"></div>\r\n      </footer>\r\n    </div>\r\n    <!--END OF RESUME CONTAINER-->\r\n  </div>\r\n  <!--END OF CONTAINER-->\r\n</div>\r\n"

/***/ }),

/***/ "./src/components/resume17/resume17.component.scss":
/*!*********************************************************!*\
  !*** ./src/components/resume17/resume17.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  box-sizing: border-box; }\n\nh1,\nh2,\nh3,\nh4,\nh5 {\n  font-weight: 400;\n  color: #00A651; }\n\nbody {\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 13px; }\n\nbody p,\nul,\nli {\n  font-size: 12px;\n  line-height: 1.3;\n  margin-bottom: 5px; }\n\n.resume-container {\n  width: 100%;\n  max-width: 210mm;\n  margin: 0 auto;\n  padding: 0px;\n  height: 297mm;\n  position: relative; }\n\nsection.top-section {\n  background-color: #00A651;\n  width: 104.6%;\n  margin-left: -18px; }\n\n.top-section .header-title {\n  font-weight: 600;\n  letter-spacing: 8px; }\n\n.top-section {\n  padding: 50px; }\n\n.profile-image {\n  margin-top: -75px; }\n\n.profile-image .image-container {\n  width: 150px;\n  height: 150px;\n  margin-left: 120px;\n  margin-bottom: 20px;\n  background-color: #f1f1f1;\n  max-width: 100%;\n  border-radius: 50%;\n  border: 10px solid #fff; }\n\n.body-content {\n  padding: 0 50px; }\n\n.profile-name h1 {\n  font-size: 50px;\n  margin: 0; }\n\n.profile-position h3 {\n  margin: 0;\n  padding-bottom: 30px;\n  color: #000;\n  font-size: 20px; }\n\n.profile-desc {\n  font-size: 12px;\n  padding-bottom: 30px; }\n\n.info-container {\n  padding-bottom: 30px; }\n\n.info-container .info-title h3 {\n  margin: 0;\n  font-weight: 600;\n  margin-bottom: 10px;\n  font-size: 22px; }\n\n.info-container .info-details ul {\n  padding: 0;\n  list-style-position: inside; }\n\n.info-container .info-details ul li {\n  line-height: 1;\n  position: relative;\n  font-size: 12px; }\n\n.right-container ul {\n  list-style-type: none; }\n\n.info-details {\n  font-size: 12px;\n  position: relative; }\n\n.with-green-color,\n.icon {\n  color: #15AD5F; }\n\n.right-container {\n  padding-right: 40px; }\n\n.right-container .icon {\n  position: absolute;\n  right: -35px;\n  text-align: center;\n  display: block;\n  width: 15px;\n  bottom: 0; }\n\n.right-container .info-title {\n  position: relative; }\n\n.right-container .years {\n  position: absolute;\n  right: -40px;\n  top: 0px;\n  max-width: 50px;\n  text-align: center;\n  word-wrap: break-word; }\n\n.right-container .years span {\n  display: block; }\n\n.right-container .info-container:first-child .info-details,\n.right-container .info-container .info-details:last-child {\n  margin-bottom: 0; }\n\n.right-container .info-details {\n  margin-bottom: 15px; }\n\n.job-desc {\n  padding-top: 5px;\n  line-height: 1.2; }\n\n.info-container:last-child {\n  padding: 0; }\n\n.footer {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  left: 0;\n  background-color: #00a651;\n  height: 30px;\n  z-index: -1; }\n\n.transparent-circle {\n  height: 100px;\n  width: 170px;\n  border-radius: 50%;\n  background-color: #fff;\n  margin-left: 110px;\n  position: relative;\n  bottom: 75px; }\n"

/***/ }),

/***/ "./src/components/resume17/resume17.component.ts":
/*!*******************************************************!*\
  !*** ./src/components/resume17/resume17.component.ts ***!
  \*******************************************************/
/*! exports provided: Resume17Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Resume17Component", function() { return Resume17Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_services_json_resume_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/services/json-resume.service */ "./src/services/json-resume.service.ts");
/* harmony import */ var _resume_editor_resume_editor_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../resume-editor/resume-editor.component */ "./src/components/resume-editor/resume-editor.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Resume17Component = /** @class */ (function () {
    function Resume17Component(ResumeJsonService, injector) {
        this.ResumeJsonService = ResumeJsonService;
        this.injector = injector;
        this.onEdit = false;
        this.ResumeEditorComponent = this.injector.get(_resume_editor_resume_editor_component__WEBPACK_IMPORTED_MODULE_2__["ResumeEditorComponent"]);
    }
    Resume17Component.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription$ = this.ResumeJsonService.getResumeJson().subscribe(function (resumeJson) {
            console.log(resumeJson);
            _this.ResumeJson = resumeJson;
        });
        this.subscription$.add(this.ResumeJsonService.getCurrentStateEditor().subscribe(function (state) {
            _this.onEdit = state;
        }));
        this.subscription$.add(this.ResumeJsonService.getCurrentSectionEditing().subscribe(function (section) {
            console.log(section);
            _this.currentSectionEditing = section;
        }));
        this.ResumeEditorComponent.domObserver();
    };
    Resume17Component.prototype.deleteSection = function () {
        var parentComponent = this.injector.get(_resume_editor_resume_editor_component__WEBPACK_IMPORTED_MODULE_2__["ResumeEditorComponent"]);
        parentComponent.deleteSection();
    };
    Resume17Component.prototype.ngOnDestroy = function () {
        this.subscription$.unsubscribe();
        this.ResumeEditorComponent.domObserverDisconnect();
    };
    Resume17Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-resume17',
            template: __webpack_require__(/*! ./resume17.component.html */ "./src/components/resume17/resume17.component.html"),
            styles: [__webpack_require__(/*! ./resume17.component.scss */ "./src/components/resume17/resume17.component.scss")]
        }),
        __metadata("design:paramtypes", [src_services_json_resume_service__WEBPACK_IMPORTED_MODULE_1__["JsonResumeService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]])
    ], Resume17Component);
    return Resume17Component;
}());



/***/ }),

/***/ "./src/components/resume18/resume18.component.html":
/*!*********************************************************!*\
  !*** ./src/components/resume18/resume18.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"document row row-eq-height\">\r\n  <div class=\"container\">\r\n    <div class=\"resume-container content\">\r\n      <div class=\"row align-items-center\">\r\n        <div class=\"col-sm-6\">\r\n          <div class=\"left-container basic\">\r\n            <div class=\"name-container\">\r\n              <h1 class=\"m-0 text-black editable name\" [innerHtml]=\"ResumeJson?.basic.name\"></h1>\r\n            </div>\r\n            <div class=\"position\">\r\n              <h4 class=\"m-0 text-black editable jobtitle\" [innerHtml]=\"ResumeJson?.basic.jobtitle\"></h4>\r\n            </div>\r\n            <div class=\"contact-details\">\r\n              <p><i class=\"fa fa-mobile\"></i> <span class=\"editable phone\" [innerHtml]=\"ResumeJson?.basic.phone\"></span></p>\r\n              <p><i class=\"fa fa-envelope-o\"></i> <span class=\"editable email\" [innerHtml]=\"ResumeJson?.basic.email\"></span></p>\r\n              <p><i class=\"fa fa-map-marker\"></i> <span class=\"editable address\" [innerHtml]=\"ResumeJson?.basic.address\"></span></p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-6\">\r\n          <div class=\"right-container\">\r\n\r\n\r\n\r\n            <div class=\"info-container editable-container experience\" *ngIf=\"ResumeJson?.experience\"\r\n              dnd-sortable-container [sortableData]=\"ResumeJson?.experience.experience\">\r\n              <div class=\"editable-item\">\r\n                <div class=\"editable-toolbar\" *ngIf=\"currentSectionEditing === 'experience'\">\r\n                  <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">\r\n                    <label data-toggle=\"modal\" data-target=\"#exampleModalCenter\" class=\"btn btn-secondary \">\r\n                      Add\r\n                    </label>\r\n                    <label (click)=\"deleteSection()\" class=\"btn btn-danger\">\r\n                      <i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i>\r\n                    </label>\r\n\r\n                  </div>\r\n                </div>\r\n                <div class=\"info-title\">\r\n                  <h3 class=\"text-white m-0 editable title\" [innerHtml]=\"ResumeJson?.experience.title\"></h3>\r\n                </div>\r\n              </div>\r\n              <div class=\"info-details editable-item\" *ngFor=\"let experience of ResumeJson?.experience.experience ; let i = index\"\r\n                dnd-sortable [sortableIndex]=\"i\">\r\n                <div class=\"years-company\">\r\n                  <p><span class=\"editable date\" [innerHtml]=\"experience.date\"></span><span contenteditable=\"false\">,&nbsp;</span><span class=\"editable company\" [innerHtml]=\"experience.company\"></span></p>\r\n                  \r\n                </div>\r\n                <div class=\"info-position\">\r\n                    <p class=\"job-desc editable desc-{{i}}\" *ngFor=\"let desc of experience.desc\" [innerHtml]=\"desc\" ></p>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n\r\n            <div class=\"info-container editable-container education\" *ngIf=\"ResumeJson?.education\">\r\n              <div class=\"editable-item\">\r\n                <div class=\"editable-toolbar\" *ngIf=\"currentSectionEditing === 'education'\">\r\n                  <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">\r\n                    <label data-toggle=\"modal\" data-target=\"#exampleModalCenter\" class=\"btn btn-secondary \">\r\n                      Add\r\n                    </label>\r\n                    <label (click)=\"deleteSection()\" class=\"btn btn-danger\">\r\n                      <i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i>\r\n                    </label>\r\n\r\n                  </div>\r\n                </div>\r\n                <div class=\"info-title\">\r\n                  <h3 class=\"text-white m-0 title editable\" [innerHtml]=\"ResumeJson?.education.title\">Education</h3>\r\n                </div>\r\n              </div>\r\n\r\n              <div *ngFor=\"let education of ResumeJson?.education.education\" class=\"editable-item info-details\">\r\n                <div class=\"years-company\">\r\n                  <p><span class=\"editable year\" [innerHtml]=\"education.year\"></span><span contenteditable=\"false\">, &nbsp;</span><span class=\"editable school\" [innerHtml]=\"education.school\"></span></p>\r\n                </div>\r\n                <div class=\"info-position\">\r\n                  <p class=\"editable info1\" [innerHtml]=\"education.info1\"></p>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n\r\n\r\n\r\n            <div class=\"info-container references editable-container\" *ngIf=\"ResumeJson?.references\">\r\n              <div class=\"editable-item\">\r\n                <div class=\"editable-toolbar\" *ngIf=\"currentSectionEditing === 'references'\">\r\n                  <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">\r\n                    <label data-toggle=\"modal\" data-target=\"#exampleModalCenter\" class=\"btn btn-secondary \">\r\n                      Add References\r\n                    </label>\r\n                    <label (click)=\"deleteSection()\" class=\"btn btn-danger\">\r\n                      <i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i>\r\n                    </label>\r\n\r\n                  </div>\r\n                </div>\r\n                <div class=\"info-title\">\r\n                  <h3 class=\"text-white m-0 editable title\" [innerHtml]=\"ResumeJson?.references.title\"></h3>\r\n                </div>\r\n              </div>\r\n              <div class=\"info-details editable-item\" *ngFor=\"let reference of ResumeJson?.references.references\">\r\n                <p style=\"padding: 0 20px;\" class=\"editable name\"><strong [innerHtml]=\"reference.name\"></strong></p>\r\n                <p style=\"padding: 0 20px;\" class=\"editable contactNumber\" [innerHtml]=\"reference.contactNumber\"></p>\r\n                <p style=\"padding: 0 20px;\" class=\"editable address\" [innerHtml]=\"reference.address\"></p>\r\n              </div>\r\n            </div>\r\n\r\n\r\n            <!-- \r\n            <div class=\"references editable-container\" *ngIf=\"ResumeJson?.references\">\r\n              <div class=\"editable-item\">\r\n                <div class=\"editable-toolbar\" *ngIf=\"currentSectionEditing === 'references'\">\r\n                  <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">\r\n                    <label data-toggle=\"modal\" data-target=\"#exampleModalCenter\" class=\"btn btn-secondary \">\r\n                      Add References\r\n                    </label>\r\n                    <label (click)=\"deleteSection()\" class=\"btn btn-danger\">\r\n                      <i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i>\r\n                    </label>\r\n\r\n                  </div>\r\n                </div>\r\n                <ul class=\"col-info-1\">\r\n                  <li class=\"li-layout\"><span class=\"icon-container\"><img class=\"head-icons\" src=\"/assets/images/template2/icon-6.png\"></span><label\r\n                      class=\"label-header\">\r\n                      <h3 class=\"editable title\"><strong [innerHtml]=\"ResumeJson?.references.title\"></strong></h3>\r\n                    </label></li>\r\n                </ul>\r\n              </div>\r\n              <div class=\"editable-item\" *ngFor=\"let reference of ResumeJson?.references.references\">\r\n                <p style=\"padding: 0 20px;\" class=\"editable name\"><strong [innerHtml]=\"reference.name\"></strong></p>\r\n                <p style=\"padding: 0 20px;\" class=\"editable contactNumber\" [innerHtml]=\"reference.contactNumber\"></p>\r\n                <p style=\"padding: 0 20px;\" class=\"editable address\" [innerHtml]=\"reference.address\"></p>\r\n              </div>\r\n            </div> -->\r\n\r\n\r\n            <div class=\"info-container skills editable-container\" *ngIf=\"ResumeJson?.skills\">\r\n              <div class=\"editable-item\">\r\n                <div class=\"editable-toolbar\" *ngIf=\"currentSectionEditing === 'skills'\">\r\n                  <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">\r\n                    <label data-toggle=\"modal\" data-target=\"#exampleModalCenter\" class=\"btn btn-secondary \">\r\n                      Add\r\n                    </label>\r\n                    <label (click)=\"deleteSection()\" class=\"btn btn-danger\">\r\n                      <i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i>\r\n                    </label>\r\n\r\n                  </div>\r\n                </div>\r\n                <div class=\"info-title\">\r\n                  <h3 class=\"text-white m-0 editable title\" [innerHtml]=\"ResumeJson?.skills.title\"></h3>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"info-details\">\r\n                <ul *ngFor=\"let skill of ResumeJson?.skills.skills\" class=\"editable-item p-0\">\r\n                  <li class=\"editable ml-3 skill\" [innerHtml]=\"skill\"></li>\r\n                </ul>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<br>"

/***/ }),

/***/ "./src/components/resume18/resume18.component.scss":
/*!*********************************************************!*\
  !*** ./src/components/resume18/resume18.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  box-sizing: border-box; }\n\nbody p,\nul,\nli {\n  font-size: 12px;\n  line-height: 1.3; }\n\n.resume-container {\n  width: 100%;\n  max-width: 210mm;\n  margin: 0 auto;\n  height: 297mm;\n  position: relative; }\n\n.text-black {\n  color: #000; }\n\n.left-container {\n  padding-left: 50px; }\n\n.name-container,\n.position {\n  border-bottom: 2px solid #5A92C5;\n  width: 75%;\n  padding-bottom: 15px; }\n\n.position {\n  padding-top: 15px; }\n\n.contact-details {\n  padding-top: 20px; }\n\n.contact-details p {\n  font-size: 20px; }\n\n.contact-details p .fa {\n  font-size: 34px;\n  width: 34px;\n  text-align: center;\n  margin-right: 10px; }\n\n.right-container {\n  border-left: 2px solid #DFDFDF;\n  height: 297mm;\n  margin: 0 -1px 0 -15px;\n  padding: 50px 0 0; }\n\n.info-container {\n  padding-bottom: 10px; }\n\n.info-title {\n  background-color: #2E75B6;\n  padding: 5px 5px 5px 30px;\n  margin-bottom: 15px; }\n\n.info-details {\n  padding: 0 0 5px 30px;\n  color: #000;\n  font-size: 16px; }\n\n.info-position {\n  padding-left: 40px;\n  color: #8E8E8E; }\n\n.info-details ul li {\n  list-style-position: inside;\n  font-size: 16px; }\n"

/***/ }),

/***/ "./src/components/resume18/resume18.component.ts":
/*!*******************************************************!*\
  !*** ./src/components/resume18/resume18.component.ts ***!
  \*******************************************************/
/*! exports provided: Resume18Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Resume18Component", function() { return Resume18Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_services_json_resume_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/services/json-resume.service */ "./src/services/json-resume.service.ts");
/* harmony import */ var _resume_editor_resume_editor_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../resume-editor/resume-editor.component */ "./src/components/resume-editor/resume-editor.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Resume18Component = /** @class */ (function () {
    function Resume18Component(ResumeJsonService, injector) {
        this.ResumeJsonService = ResumeJsonService;
        this.injector = injector;
        this.onEdit = false;
        this.ResumeEditorComponent = this.injector.get(_resume_editor_resume_editor_component__WEBPACK_IMPORTED_MODULE_2__["ResumeEditorComponent"]);
    }
    Resume18Component.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription$ = this.ResumeJsonService.getResumeJson().subscribe(function (resumeJson) {
            console.log(resumeJson);
            _this.ResumeJson = resumeJson;
        });
        this.subscription$.add(this.ResumeJsonService.getCurrentStateEditor().subscribe(function (state) {
            _this.onEdit = state;
        }));
        this.subscription$.add(this.ResumeJsonService.getCurrentSectionEditing().subscribe(function (section) {
            console.log(section);
            _this.currentSectionEditing = section;
        }));
        this.ResumeEditorComponent.domObserver();
    };
    Resume18Component.prototype.deleteSection = function () {
        var parentComponent = this.injector.get(_resume_editor_resume_editor_component__WEBPACK_IMPORTED_MODULE_2__["ResumeEditorComponent"]);
        parentComponent.deleteSection();
    };
    Resume18Component.prototype.ngOnDestroy = function () {
        this.subscription$.unsubscribe();
        this.ResumeEditorComponent.domObserverDisconnect();
    };
    Resume18Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-resume18',
            template: __webpack_require__(/*! ./resume18.component.html */ "./src/components/resume18/resume18.component.html"),
            styles: [__webpack_require__(/*! ./resume18.component.scss */ "./src/components/resume18/resume18.component.scss")]
        }),
        __metadata("design:paramtypes", [src_services_json_resume_service__WEBPACK_IMPORTED_MODULE_1__["JsonResumeService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]])
    ], Resume18Component);
    return Resume18Component;
}());



/***/ }),

/***/ "./src/components/resume19/resume19.component.html":
/*!*********************************************************!*\
  !*** ./src/components/resume19/resume19.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"document row row-eq-height m-0\">\r\n  <div class=\"container content-container\">\r\n    <div class=\"resume-container content\">\r\n      <div class=\"row \">\r\n        <div class=\"col-12\">\r\n          <div class=\"top-container position-relative basic\">\r\n            <h1 class=\"name1 editable name\" [innerHtml]=\"ResumeJson?.basic.name\">JOHN SMITH</h1>\r\n            <h5 [innerHtml]=\"ResumeJson?.basic.jobtitle\" class=\"editable jobtitle position\">GRAPHIC & WEB DESIGNER</h5>\r\n            <div class=\"resume-text\">RESUME</div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-12\">\r\n          <div class=\"contact-details-container position-relative\">\r\n            <div class=\"green-bar\"></div>\r\n            <div class=\"get-in-touch\">GET IN TOUCH</div>\r\n            <div class=\"contact-list basic\">\r\n              <ul class=\"contacts m-0 d-flex flex-wrap align-items-center flex-row\">\r\n                <li class=\"items\"><i class=\"fa fa-mobile\"></i> <span class=\"editable phone\" [innerHtml]=\"ResumeJson?.basic.phone\"></span></li>\r\n                <li class=\"items\"><i class=\"fa fa-envelope-open-o\"></i> <span class=\"editable email\" [innerHtml]=\"ResumeJson?.basic.email\"></span></li>\r\n                <li class=\"items\"><i class=\"fa fa-map-marker\"></i> <span class=\"editable address\" [innerHtml]=\"ResumeJson?.basic.address\"></span></li>\r\n              </ul>\r\n            </div>\r\n            <div class=\"profile-image-container\">\r\n              <div class=\"image-container basic\">\r\n                <img style=\"width: 160px; height: 170px;\" data-toggle=\"modal\" data-target=\"#exampleModalCenter2\" class=\"profile\"\r\n                  [src]=\"ResumeJson?.basic.profile ? ResumeJson?.basic.profile : 'assets/images/Resume/profile-placeholder.jpg'\" />\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div *ngIf=\"ResumeJson?.professionalSummary\" class=\"editable-container professionalSummary\">\r\n            <!-- <div class=\"about-me-title\">ABOUT ME</div> -->\r\n            <p class=\"about-me-desc summary editable-item editable\" *ngFor=\"let summary of ResumeJson?.professionalSummary.professionalSummary\"\r\n              [innerHtml]=\"summary\">\r\n            </p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-7\">\r\n          <div class=\"left-container\">\r\n            <div class=\"info-container editable-container experience\" *ngIf=\"ResumeJson?.experience\"\r\n              dnd-sortable-container [sortableData]=\"ResumeJson?.experience.experience\">\r\n              <div class=\"editable-item\">\r\n                <div class=\"editable-toolbar\" *ngIf=\"currentSectionEditing === 'experience'\">\r\n                  <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">\r\n                    <label data-toggle=\"modal\" data-target=\"#exampleModalCenter\" class=\"btn btn-secondary \">\r\n                      Add\r\n                    </label>\r\n                    <label (click)=\"deleteSection()\" class=\"btn btn-danger\">\r\n                      <i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i>\r\n                    </label>\r\n                  </div>\r\n                </div>\r\n                <div class=\"info-title info editable title\" [innerHtml]=\"ResumeJson?.experience.title\">EMPLOYMENT</div>\r\n              </div>\r\n              <div class=\"employment-details editable-item\" *ngFor=\"let experience of ResumeJson?.experience.experience ; let i = index\"\r\n                dnd-sortable [sortableIndex]=\"i\">\r\n                <div class=\"year info date\" [innerHtml]=\"experience.date\"></div>\r\n                <div class=\"info-details info\">\r\n                  <p class=\"detail-title company\" [innerHtml]=\"experience.company\"></p>\r\n                  <p class=\"detail-sub-title\">Web & Graphic Designer</p>\r\n                  <p *ngFor=\"let desc of experience.desc\" class=\"detail-desceditable desc-{{i}}\" [innerHtml]=\"desc\"></p>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <!--END OF INFO CONTAINER-->\r\n            <div class=\"info-container skills editable-container\" *ngIf=\"ResumeJson?.skills\">\r\n              <div class=\"editable-item\">\r\n                <div class=\"editable-toolbar\" *ngIf=\"currentSectionEditing === 'skills'\">\r\n                  <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">\r\n                    <label data-toggle=\"modal\" data-target=\"#exampleModalCenter\" class=\"btn btn-secondary \">\r\n                      Add\r\n                    </label>\r\n                    <label (click)=\"deleteSection()\" class=\"btn btn-danger\">\r\n                      <i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i>\r\n                    </label>\r\n\r\n                  </div>\r\n                </div>\r\n                <div class=\"info-title info editable title\" [innerHtml]=\"ResumeJson?.skills.title\"></div>\r\n              </div>\r\n              <div class=\"editable-item info-details info\">\r\n                <ul class=\"skills p-0\">\r\n                  <li *ngFor=\"let skill of ResumeJson?.skills.skills\" class=\"item editable skill\" [innerHtml]=\"skill\"></li>\r\n                </ul>\r\n              </div>\r\n            </div>\r\n            <!--END OF INFO CONTAINER-->\r\n          </div>\r\n          <!--END OF LEFT CONTAINER-->\r\n        </div>\r\n        <!--END OF COL-7-->\r\n        <div class=\"col-5\">\r\n          <div class=\"right-container text-right\">\r\n            <div class=\"info-container editable-container education\" *ngIf=\"ResumeJson?.education\">\r\n              <div class=\"editable-item\">\r\n                <div class=\"editable-toolbar\" *ngIf=\"currentSectionEditing === 'education'\">\r\n                  <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">\r\n                    <label data-toggle=\"modal\" data-target=\"#exampleModalCenter\" class=\"btn btn-secondary \">\r\n                      Add\r\n                    </label>\r\n                    <label (click)=\"deleteSection()\" class=\"btn btn-danger\">\r\n                      <i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i>\r\n                    </label>\r\n                  </div>\r\n                </div>\r\n                <div class=\"info-title info title editable\" [innerHtml]=\"ResumeJson?.education.title\"></div>\r\n              </div>\r\n              <div *ngFor=\"let education of ResumeJson?.education.education\" class=\"editable-item education-details\">\r\n                <div class=\"year1 info year editable\" [innerHtml]=\"education.year\"></div>\r\n                <div class=\"info-details info\">\r\n                  <p class=\"detail-sub-title school editable\" [innerHtml]=\"education.school\"></p>\r\n                  <p class=\"detail-desc editable info1\" [innerHtml]=\"education.info1\"></p>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <!--END OF INFO CONTAINER-->\r\n            <div class=\"info-container references editable-container\" *ngIf=\"ResumeJson?.references\">\r\n              <div class=\"editable-item\">\r\n                <div class=\"editable-toolbar\" *ngIf=\"currentSectionEditing === 'references'\">\r\n                  <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">\r\n                    <label data-toggle=\"modal\" data-target=\"#exampleModalCenter\" class=\"btn btn-secondary \">\r\n                      Add References\r\n                    </label>\r\n                    <label (click)=\"deleteSection()\" class=\"btn btn-danger\">\r\n                      <i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i>\r\n                    </label>\r\n\r\n                  </div>\r\n                </div>\r\n                <div class=\"info-title info editable title\" [innerHtml]=\"ResumeJson?.references.title\">LANGUAGE</div>\r\n              </div>\r\n              <div class=\"info-details info editable-item\">\r\n                <ul class=\"skills p-0\" *ngFor=\"let reference of ResumeJson?.references.references\">\r\n                  <p style=\"padding: 0 20px;\" class=\"editable name\"><strong [innerHtml]=\"reference.name\"></strong></p>\r\n                  <p style=\"padding: 0 20px;\" class=\"editable contactNumber\" [innerHtml]=\"reference.contactNumber\"></p>\r\n                  <p style=\"padding: 0 20px;\" class=\"editable address\" [innerHtml]=\"reference.address\"></p>\r\n                </ul>\r\n              </div>\r\n            </div>\r\n            <!--END OF INFO CONTAINER-->\r\n          </div>\r\n          <!--END OF RIGHT CONTAINER-->\r\n        </div>\r\n        <!--END OF COL-5-->\r\n      </div>\r\n      <!--END OF ROW-->\r\n    </div>\r\n    <!--END OF RESUME CONTAINER-->\r\n  </div>\r\n  <!--END OF CONTAINER-->\r\n</div>\r\n<br>"

/***/ }),

/***/ "./src/components/resume19/resume19.component.scss":
/*!*********************************************************!*\
  !*** ./src/components/resume19/resume19.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "border {\n  border: 1px;\n  color: #B2D234; }\n\nbody {\n  font-family: Arial, Helvetica, sans-serif; }\n\n.resume-container {\n  width: 100%;\n  max-width: 210mm;\n  margin: 0 auto;\n  position: relative; }\n\n.top-container {\n  padding: 50px; }\n\n.top-container .name1 {\n  color: #B2D234;\n  line-height: 1;\n  font-weight: 700;\n  font-size: 50px;\n  margin: 0; }\n\n.top-container .position {\n  color: #808182; }\n\n.top-container .resume-text {\n  position: absolute;\n  right: 0;\n  width: 240px;\n  top: 50px;\n  padding-left: 30px;\n  margin: 0;\n  padding: 7px 0 7px 50px;\n  line-height: 1;\n  font-weight: 600;\n  letter-spacing: 2px;\n  color: #B2D234;\n  background-color: #F7FAEA; }\n\n.green-bar {\n  height: 10px;\n  padding: 0;\n  width: 100%;\n  background-color: #B2D234;\n  margin-bottom: 5px;\n  display: block;\n  box-sizing: content-box; }\n\n.get-in-touch {\n  background-color: #B2D234;\n  color: #fff;\n  position: relative;\n  text-transform: uppercase;\n  letter-spacing: 2px;\n  padding: 10px 0px 10px 50px; }\n\n.profile-image-container {\n  position: absolute;\n  right: 60px;\n  top: -80px;\n  max-width: 100%;\n  width: 180px;\n  background-color: #fff;\n  height: 190px;\n  border: 10px solid #B2D234; }\n\n.contact-list {\n  width: 550px;\n  padding: 15px 20px 15px 50px;\n  max-width: 100%; }\n\n.contacts {\n  padding: 0;\n  list-style: none;\n  -webkit-column-count: 3;\n          column-count: 3;\n  font-size: 10px; }\n\n.contacts .items {\n  width: 100%;\n  margin-bottom: 5px;\n  display: initial;\n  vertical-align: bottom;\n  flex: 0 33.33333%; }\n\n.contacts .items a {\n  text-decoration: underline;\n  color: #0D0DFF; }\n\n.contacts .items .fa {\n  background-color: #B2D234;\n  width: 20px;\n  color: #fff;\n  text-align: center;\n  line-height: 20px;\n  height: 20px;\n  border-radius: 50%; }\n\n.contacts .items .fa:before {\n  margin-right: 2px; }\n\n.about-me {\n  padding: 30px 50px;\n  background-color: #F7FAEA;\n  margin-top: 10px;\n  margin-bottom: 30px;\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: row; }\n\n.about-me-title {\n  width: 90px;\n  text-align: center;\n  -webkit-transform: rotate(-90deg);\n          transform: rotate(-90deg);\n  margin-right: -40px;\n  color: #5F5F61;\n  font-weight: 600;\n  font-size: 14px; }\n\n.about-me-desc {\n  font-size: 10px;\n  flex: 1; }\n\n.left-container .info {\n  color: #000; }\n\n.info-title {\n  font-weight: 600;\n  letter-spacing: 1px; }\n\n.year1 {\n  background-color: #F7FAEA;\n  max-width: 175px;\n  font-size: 14px;\n  height: 30px;\n  line-height: 30px;\n  margin: 10px 0; }\n\n.info-details {\n  padding-bottom: 15px;\n  min-height: 78px; }\n\n.info-details p {\n  margin-bottom: 0px;\n  line-height: 1.2;\n  font-size: 14px; }\n\n.detail-title {\n  font-size: 16px;\n  font-weight: 600;\n  color: #5A5A5D; }\n\n.info-details .detail-desc {\n  color: #5A5A5D;\n  font-size: 12px; }\n\n.info-details .skills .item {\n  list-style-position: inside;\n  line-height: 1.2;\n  font-size: 10px; }\n\n.skills {\n  margin-top: 10px; }\n\n.right-container .info {\n  padding-right: 50px; }\n\n.right-container .year1 {\n  margin-left: auto; }\n\n.right-container .skills {\n  direction: rtl; }\n\n.info-container div:last-child .info-details,\n.info-container:last-child .info-details:last-child {\n  padding-bottom: 0; }\n"

/***/ }),

/***/ "./src/components/resume19/resume19.component.ts":
/*!*******************************************************!*\
  !*** ./src/components/resume19/resume19.component.ts ***!
  \*******************************************************/
/*! exports provided: Resume19Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Resume19Component", function() { return Resume19Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_services_json_resume_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/services/json-resume.service */ "./src/services/json-resume.service.ts");
/* harmony import */ var _resume_editor_resume_editor_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../resume-editor/resume-editor.component */ "./src/components/resume-editor/resume-editor.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Resume19Component = /** @class */ (function () {
    function Resume19Component(ResumeJsonService, injector) {
        this.ResumeJsonService = ResumeJsonService;
        this.injector = injector;
        this.onEdit = false;
        this.ResumeEditorComponent = this.injector.get(_resume_editor_resume_editor_component__WEBPACK_IMPORTED_MODULE_2__["ResumeEditorComponent"]);
    }
    Resume19Component.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription$ = this.ResumeJsonService.getResumeJson().subscribe(function (resumeJson) {
            console.log(resumeJson);
            _this.ResumeJson = resumeJson;
        });
        this.subscription$.add(this.ResumeJsonService.getCurrentStateEditor().subscribe(function (state) {
            _this.onEdit = state;
        }));
        this.subscription$.add(this.ResumeJsonService.getCurrentSectionEditing().subscribe(function (section) {
            console.log(section);
            _this.currentSectionEditing = section;
        }));
        this.ResumeEditorComponent.domObserver();
    };
    Resume19Component.prototype.deleteSection = function () {
        var parentComponent = this.injector.get(_resume_editor_resume_editor_component__WEBPACK_IMPORTED_MODULE_2__["ResumeEditorComponent"]);
        parentComponent.deleteSection();
    };
    Resume19Component.prototype.ngOnDestroy = function () {
        this.subscription$.unsubscribe();
        this.ResumeEditorComponent.domObserverDisconnect();
    };
    Resume19Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-resume19',
            template: __webpack_require__(/*! ./resume19.component.html */ "./src/components/resume19/resume19.component.html"),
            styles: [__webpack_require__(/*! ./resume19.component.scss */ "./src/components/resume19/resume19.component.scss")]
        }),
        __metadata("design:paramtypes", [src_services_json_resume_service__WEBPACK_IMPORTED_MODULE_1__["JsonResumeService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]])
    ], Resume19Component);
    return Resume19Component;
}());



/***/ }),

/***/ "./src/components/resume2/resume2.component.html":
/*!*******************************************************!*\
  !*** ./src/components/resume2/resume2.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"document row row-eq-height\">\r\n        <div class=\"col-sm-3 topall \" style=\"background: #866c87;color: white;text-align: center;\">\r\n                <div class=\"basic mx-2 px-2 my-4 py-4\">\r\n                    <h2   class=\"editable name\" [textContent]=\"ResumeJson?.basic.name\"  style=\"text-transform: uppercase;\">{{ResumeJson?.basic.name}}</h2>\r\n                    <h6  class=\"my-3 editable jobtitle\" style=\"text-transform: capitalize;\">{{ResumeJson?.basic.jobtitle}}</h6>\r\n                    <img style=\"height:130px; width: 100%;\" data-toggle=\"modal\" data-target=\"#exampleModalCenter2\" class=\"mb-3 profile\" [src]=\"ResumeJson?.basic.profile ? ResumeJson?.basic.profile : 'assets/images/Resume/profile-placeholder.jpg'\">\r\n                    <p class=\"editable phone\" style=\"text-align: left;\">{{ResumeJson?.basic.phone}}</p>\r\n                    <p  class=\"editable address\"style=\"text-align: left;\">{{ResumeJson?.basic.address}}</p>\r\n                    <p  class=\"editable email\"style=\"text-align: left;\">{{ResumeJson?.basic.email}}</p>\r\n                </div>\r\n        </div>\r\n    <div class=\"content-container col-sm-9 left-txt topall  px-4 py-5\" [style.background-color]=\" onEdit ? '#DCDBE0' : '#FFF'\">\r\n        <div class=\"content\" >\r\n                <div  class=\"professionalSummary editable-container\" *ngIf=\"ResumeJson?.professionalSummary\">\r\n                        <div class=\"editable-item\">\r\n                                <div class=\"editable-toolbar\" [style.display]=\"currentSectionEditing === 'professionalSummary' ? 'block' : 'none'\">\r\n                                        <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">\r\n                                                <label data-toggle=\"modal\" data-target=\"#exampleModalCenter\" class=\"btn btn-secondary \">\r\n                                                Add Summary\r\n                                                </label>\r\n                                                <label (click)=\"deleteSection()\" class=\"btn btn-danger\">\r\n                                                        <i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i>\r\n                                                </label>\r\n                                        </div>\r\n                                </div>\r\n                                <h3 class=\"editable title\" >{{ResumeJson?.professionalSummary.title}}</h3>\r\n                        </div>\r\n                        <p [attr.data-index]=\"i\" class=\"editable-item editable summary\" *ngFor=\"let summary of ResumeJson?.professionalSummary.professionalSummary; let i = index\">{{summary}}</p>\r\n                        <div class=\"editable-item\">\r\n                                <hr>    \r\n                        </div>\r\n                </div>  \r\n                <div class=\"editable-container education\" *ngIf=\"ResumeJson?.education\" >\r\n                        <div class=\"editable-item\">\r\n                                <div class=\"editable-toolbar\" *ngIf=\"currentSectionEditing === 'education'\">\r\n                                        <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">\r\n                                                <label data-toggle=\"modal\" data-target=\"#exampleModalCenter\" class=\"btn btn-secondary \">\r\n                                                Add Education\r\n                                                </label>\r\n                                                <label (click)=\"deleteSection()\" class=\"btn btn-danger\">\r\n                                                        <i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i>\r\n                                                </label>\r\n                                        </div>\r\n                                </div>\r\n                                <h3  class=\"title editable\">{{ResumeJson?.education.title}}</h3>\r\n                        </div>\r\n                        <div [attr.data-index]=\"i\" *ngFor=\"let education of ResumeJson?.education.education; let i = index\" class=\"editable-item\">\r\n                                <p><strong class=\"editable\"><span class=\"year\">{{education.year}}</span> <span contenteditable=\"false\">/ </span><span class=\"school\"> {{education.school}} </span>:</strong></p>\r\n                                <p  class=\"editable info1\">{{education.info1}}</p>\r\n                        </div>\r\n                        <div class=\"editable-item\">\r\n                                <hr>\r\n                        </div>\r\n                </div>\r\n                <div class=\"editable-container experience\" *ngIf=\"ResumeJson?.experience\" dnd-sortable-container [sortableData]=\"ResumeJson?.experience.experience\"  >\r\n                        <div class=\"editable-item\">\r\n                                <div class=\"editable-toolbar\" *ngIf=\"currentSectionEditing === 'experience'\">\r\n                                                <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">\r\n                                                        <label data-toggle=\"modal\" data-target=\"#exampleModalCenter\" class=\"btn btn-secondary \">\r\n                                                        Add Experience\r\n                                                        </label>\r\n                                                        <label (click)=\"deleteSection()\" class=\"btn btn-danger\">\r\n                                                                <i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i>\r\n                                                        </label>\r\n                                                </div>\r\n                                </div> \r\n                                <h3  class=\"editable title\" [innerHTML]=\"ResumeJson?.experience.title\"></h3>\r\n                        </div>\r\n                        <div  [attr.data-index]=\"i\" class=\"editable-item\" *ngFor=\"let experience of ResumeJson?.experience.experience ; let i = index\" dnd-sortable [sortableIndex]=\"i\">\r\n                                <!-- <span dnd-sortable-handle>=</span>&nbsp; -->\r\n                                <p >  <strong class=\"editable\"><span class=\"date\">{{experience.date}}</span> <span contenteditable=\"false\">/</span> <span class=\"company\">{{experience.company}}</span>:</strong> </p>\r\n                                <p *ngFor=\"let desc of experience.desc\" class=\"editable desc-{{i}}\" [innerHTML]=\"desc\"> </p>             \r\n                                <hr>\r\n                        </div>\r\n                </div>\r\n                \r\n                <div  class=\"skills editable-container\" *ngIf=\"ResumeJson?.skills\" >      \r\n                        <div class=\"editable-item\">\r\n                                <div class=\"editable-toolbar\" *ngIf=\"currentSectionEditing === 'skills'\">\r\n                                                <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">\r\n                                                                <label data-toggle=\"modal\" data-target=\"#exampleModalCenter\" class=\"btn btn-secondary \">\r\n                                                                Add Skill\r\n                                                                </label>\r\n                                                                <label (click)=\"deleteSection()\" class=\"btn btn-danger\">\r\n                                                                        <i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i>\r\n                                                                </label>\r\n                                                                <!-- <label class=\"btn btn-secondary\">\r\n                                                                        <input type=\"radio\" name=\"options\" id=\"option3\" autocomplete=\"off\"> Radio\r\n                                                                </label> -->\r\n                                                </div>\r\n                                </div>  \r\n                                <h3 class=\"editable title\"  >{{ResumeJson?.skills.title}}</h3>\r\n                        </div>\r\n                        <p #skills *ngFor=\"let skill of ResumeJson?.skills.skills\" class=\"editable-item editable skill m-0\">{{skill}}</p>\r\n                </div>\r\n                <div  class=\"references editable-container\" *ngIf=\"ResumeJson?.references\" >       \r\n                        <div class=\"editable-item\">\r\n                                <div class=\"editable-toolbar\" *ngIf=\"currentSectionEditing === 'references'\">\r\n                                                <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">\r\n                                                                <label data-toggle=\"modal\" data-target=\"#exampleModalCenter\" class=\"btn btn-secondary \">\r\n                                                                Add \r\n                                                                </label>\r\n                                                                <label (click)=\"deleteSection()\" class=\"btn btn-danger\">\r\n                                                                        <i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i>\r\n                                                                </label>\r\n                                                                \r\n                                                </div>\r\n                                </div> \r\n                                <h3 class=\"editable title\">{{ResumeJson?.references.title}}</h3>\r\n                        </div>\r\n                        <div class=\"editable-item\" *ngFor=\"let reference of ResumeJson?.references.references\" >\r\n                                <p class=\"editable name\"><strong>{{reference.name}}</strong></p>\r\n                                <p class=\"editable contactNumber\">{{reference.contactNumber}}</p>\r\n                                <p class=\"editable address\">{{reference.address}}</p>\r\n                        </div>\r\n                </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n        <br>\r\n<!-- <div  class=\"document row row-eq-height\">\r\n        <div class=\"col-sm-3 topall \" style=\"background: #866c87;color: white;text-align: center;\">\r\n                \r\n        </div>\r\n        <div class=\"content-container content-2 col-sm-9 left-txt topall  px-4 py-5\" [style.background-color]=\" onEdit ? '#DCDBE0' : '#FFF'\">\r\n        <div class=\"content\">\r\n\r\n        </div>\r\n        </div>\r\n</div> -->"

/***/ }),

/***/ "./src/components/resume2/resume2.component.scss":
/*!*******************************************************!*\
  !*** ./src/components/resume2/resume2.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".editable-container.basic.active {\n  background-color: #866c87 !important; }\n\nh1, h2, h3, h4, h5, h6, .h1, .h2, .h3, .h4, .h5, .h6 {\n  font-family: inherit;\n  font-weight: bold;\n  line-height: 1.1;\n  color: inherit; }\n\np {\n  font-size: 12px; }\n"

/***/ }),

/***/ "./src/components/resume2/resume2.component.ts":
/*!*****************************************************!*\
  !*** ./src/components/resume2/resume2.component.ts ***!
  \*****************************************************/
/*! exports provided: Resume2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Resume2Component", function() { return Resume2Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_services_json_resume_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/services/json-resume.service */ "./src/services/json-resume.service.ts");
/* harmony import */ var _resume_editor_resume_editor_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../resume-editor/resume-editor.component */ "./src/components/resume-editor/resume-editor.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Resume2Component = /** @class */ (function () {
    function Resume2Component(ResumeJsonService, injector) {
        var _this = this;
        this.ResumeJsonService = ResumeJsonService;
        this.injector = injector;
        this.onEdit = false;
        this.transferData = { id: 1, msg: 'Hello' };
        this.receivedData = [];
        this.ResumeEditorComponent = this.injector.get(_resume_editor_resume_editor_component__WEBPACK_IMPORTED_MODULE_2__["ResumeEditorComponent"]);
        this.subscription$ = this.ResumeJsonService.getResumeJson().subscribe(function (resumeJson) {
            console.log(resumeJson);
            _this.ResumeJson = resumeJson;
        });
    }
    Resume2Component.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription$.add(this.ResumeJsonService.getCurrentStateEditor().subscribe(function (state) {
            _this.onEdit = state;
        }));
        this.subscription$.add(this.ResumeJsonService.getCurrentSectionEditing().subscribe(function (section) {
            console.log(section);
            _this.currentSectionEditing = section;
        }));
        // this.ResumeEditorComponent.activateEditor();
        // this.ResumeEditorComponent.onEditorFocusAndOut();
        this.ResumeEditorComponent.domObserver();
    };
    Resume2Component.prototype.transferDataSuccess = function ($event) {
        this.receivedData.push($event);
    };
    Resume2Component.prototype.deleteSection = function () {
        var parentComponent = this.injector.get(_resume_editor_resume_editor_component__WEBPACK_IMPORTED_MODULE_2__["ResumeEditorComponent"]);
        parentComponent.deleteSection();
    };
    Resume2Component.prototype.ngOnDestroy = function () {
        this.subscription$.unsubscribe();
        this.ResumeEditorComponent.domObserverDisconnect();
    };
    Resume2Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-resume2',
            template: __webpack_require__(/*! ./resume2.component.html */ "./src/components/resume2/resume2.component.html"),
            styles: [__webpack_require__(/*! ./resume2.component.scss */ "./src/components/resume2/resume2.component.scss")]
        }),
        __metadata("design:paramtypes", [src_services_json_resume_service__WEBPACK_IMPORTED_MODULE_1__["JsonResumeService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]])
    ], Resume2Component);
    return Resume2Component;
}());



/***/ }),

/***/ "./src/components/resume20/resume20.component.html":
/*!*********************************************************!*\
  !*** ./src/components/resume20/resume20.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"document row row-eq-height\">\r\n  <div class=\"container content-container\">\r\n    <div class=\"resume-container content\">\r\n      <div class=\"row\">\r\n        <div class=\"col-4 p-0\">\r\n          <div class=\"left-container\">\r\n            <div class=\"image-container text-center basic\">\r\n              <img style=\"height: 156px;width: 156px;border-radius: 50%;\" data-toggle=\"modal\" data-target=\"#exampleModalCenter2\"\r\n                class=\"img-fluid profile\" [src]=\"ResumeJson?.basic.profile ? ResumeJson?.basic.profile : 'assets/images/Resume/profile-placeholder.jpg'\" />\r\n            </div>\r\n            <div class=\"name-container text-center basic\">\r\n              <h4 class=\"editable name\" [innerHtml]=\"ResumeJson?.basic.name\"></h4>\r\n            </div>\r\n            <div *ngIf=\"ResumeJson?.professionalSummary\" class=\"editable-container professionalSummary info-container\">\r\n              <div class=\"editable-item\">\r\n                <div class=\"editable-toolbar\" *ngIf=\"currentSectionEditing === 'professionalSummary'\">\r\n                  <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">\r\n                    <label data-toggle=\"modal\" data-target=\"#exampleModalCenter\" class=\"btn btn-secondary \">\r\n                      Add\r\n                    </label>\r\n                    <label (click)=\"deleteSection()\" class=\"btn btn-danger\">\r\n                      <i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i>\r\n                    </label>\r\n                  </div>\r\n                  <div class=\"title-container text-center\">\r\n                    <div class=\"title-icon\">\r\n                      <img src=\"assets/images/template15/icon-1.png\" class=\"img-fluid\" />\r\n                    </div>\r\n                    <p class=\"info-title m-0 editable title\" [innerHtml]=\"ResumeJson?.professionalSummary.title\">PROFILE</p>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"info-description text-justify text-last-justify\">\r\n                <p *ngFor=\"let summary of ResumeJson?.professionalSummary.professionalSummary\" class=\"summary editable-item editable\"\r\n                  [innerHtml]=\"summary\"></p>\r\n              </div>\r\n            </div>\r\n            <div class=\"info-container\">\r\n              <div class=\"title-container text-center\">\r\n                <div class=\"title-icon\">\r\n                  <img src=\"assets/images/template15/icon-2.png\" class=\"img-fluid\" />\r\n                </div>\r\n                <p class=\"info-title m-0\">CONTACT ME</p>\r\n              </div>\r\n              <div class=\"info-description\">\r\n                <p><strong>A.</strong>&nbsp; <span class=\"editable address\" [innerHtml]=\"ResumeJson?.basic.address\"></span></p>\r\n                <p><strong>M.</strong>&nbsp; <span class=\"editable email\" [innerHtml]=\"ResumeJson?.basic.email\"></span></p>\r\n                <p><strong>T.</strong>&nbsp; <span class=\"editable phone\" [innerHtml]=\"ResumeJson?.basic.phone\"></span></p>\r\n              </div>\r\n            </div>\r\n           \r\n          </div>\r\n          <!--END OF LEFT CONTAINER-->\r\n        </div>\r\n        <!--END OF COL-4 -->\r\n        <div class=\"col-8\">\r\n          <div class=\"right-container\">\r\n            <div class=\"info-container editable-container education\" *ngIf=\"ResumeJson?.education\">\r\n              <div class=\"editable-item\">\r\n                <div class=\"editable-toolbar\" *ngIf=\"currentSectionEditing === 'education'\">\r\n                  <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">\r\n                    <label data-toggle=\"modal\" data-target=\"#exampleModalCenter\" class=\"btn btn-secondary \">\r\n                      Add\r\n                    </label>\r\n                    <label (click)=\"deleteSection()\" class=\"btn btn-danger\">\r\n                      <i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i>\r\n                    </label>\r\n\r\n                  </div>\r\n                </div>\r\n                <div class=\"title-container text-center\">\r\n                  <div class=\"title-icon\">\r\n                    <img src=\"assets/images/template15/icon-4.png\" class=\"img-fluid\" />\r\n                  </div>\r\n                  <p class=\"info-title m-0 title editable\" [innerHtml]=\"ResumeJson?.education.title\"></p>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"editable-item info-description\">\r\n                <div class=\"list\" *ngFor=\"let education of ResumeJson?.education.education\">\r\n                  <p class=\"editable year\" [innerHtml]=\"education.year\"></p>\r\n                  <p><strong class=\"editable school\" [innerHtml]=\"education.school\"></strong><span class=\"editable info1\"\r\n                      [innerHtml]=\"education.info1\"></span>\r\n                  </p>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"info-container editable-container experience\" *ngIf=\"ResumeJson?.experience\"\r\n              dnd-sortable-container [sortableData]=\"ResumeJson?.experience.experience\">\r\n              <div class=\"editable-item\">\r\n                <div class=\"editable-toolbar\" *ngIf=\"currentSectionEditing === 'experience'\">\r\n                  <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">\r\n                    <label data-toggle=\"modal\" data-target=\"#exampleModalCenter\" class=\"btn btn-secondary \">\r\n                      Add\r\n                    </label>\r\n                    <label (click)=\"deleteSection()\" class=\"btn btn-danger\">\r\n                      <i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i>\r\n                    </label>\r\n\r\n                  </div>\r\n                </div>\r\n                <div class=\"title-container text-center\">\r\n                  <div class=\"title-icon\">\r\n                    <img src=\"assets/images/template15/icon-5.png\" class=\"img-fluid\" />\r\n                  </div>\r\n                  <p class=\"info-title m-0 editable title\" [innerHtml]=\"ResumeJson?.experience.title\"></p>\r\n                </div>\r\n              </div>\r\n              <div class=\"info-description editable-item\" *ngFor=\"let experience of ResumeJson?.experience.experience ; let i = index\"\r\n                dnd-sortable [sortableIndex]=\"i\">\r\n                <div class=\"list\">\r\n                  <p><strong class=\"editable company\" [innerHtml]=\"experience.company\"></strong><span>&nbsp;/&nbsp;</span>\r\n                    <span class=\"editable date\" [innerHtml]=\"experience.date\"></span></p>\r\n                  <p *ngFor=\"let desc of experience.desc\" class=\"editable desc-{{i}}\" [innerHtml]=\"desc\"></p>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"info-container skills editable-container\" *ngIf=\"ResumeJson?.skills\">\r\n                <div class=\"editable-item\">\r\n                  <div class=\"editable-toolbar\" *ngIf=\"currentSectionEditing === 'skills'\">\r\n                    <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">\r\n                      <label data-toggle=\"modal\" data-target=\"#exampleModalCenter\" class=\"btn btn-secondary \">\r\n                        Add\r\n                      </label>\r\n                      <label (click)=\"deleteSection()\" class=\"btn btn-danger\">\r\n                        <i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i>\r\n                      </label>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"title-container text-center mb-3\">\r\n                    <div class=\"title-icon\">\r\n                      <img src=\"assets/images/template15/icon-3.png\" class=\"img-fluid\" />\r\n                    </div>\r\n                    <p class=\"info-title m-0 editable title\" [innerHtml]=\"ResumeJson?.skills.title\">PERSONAL SKILLS</p>\r\n                  </div>\r\n                </div>\r\n                <p *ngFor=\"let skill of ResumeJson?.skills.skills\"  class=\"editable ml-3 skill\" [innerHtml]=\"skill\"></p>\r\n            </div>\r\n            <div class=\"info-container references editable-container\" *ngIf=\"ResumeJson?.references\">\r\n              <div class=\"editable-item\">\r\n                <div class=\"editable-toolbar\" *ngIf=\"currentSectionEditing === 'references'\">\r\n                  <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">\r\n                    <label data-toggle=\"modal\" data-target=\"#exampleModalCenter\" class=\"btn btn-secondary \">\r\n                      Add References\r\n                    </label>\r\n                    <label (click)=\"deleteSection()\" class=\"btn btn-danger\">\r\n                      <i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i>\r\n                    </label>\r\n\r\n                  </div>\r\n                </div>\r\n                <div class=\"title-container text-center\">\r\n                  <div class=\"title-icon\">\r\n                    <img src=\"assets/images/template15/icon-6.png\" class=\"img-fluid\" />\r\n                  </div>\r\n                  <p class=\"info-title m-0 editable title\" [innerHtml]=\"ResumeJson?.references.title\">PROFESSIONAL\r\n                    SKILLS</p>\r\n                </div>\r\n              </div>\r\n              <div class=\"info-description editable-item\" *ngFor=\"let reference of ResumeJson?.references.references\">\r\n                <p style=\"padding: 0 20px;\" class=\"editable name\"><strong [innerHtml]=\"reference.name\"></strong></p>\r\n                <p style=\"padding: 0 20px;\" class=\"editable contactNumber\" [innerHtml]=\"reference.contactNumber\"></p>\r\n                <p style=\"padding: 0 20px;\" class=\"editable address\" [innerHtml]=\"reference.address\"></p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!--END OF RIGHT CONTAINER-->\r\n        </div>\r\n        <!--END OF COL-8 -->\r\n      </div>\r\n      <!--END OF ROW-->\r\n    </div>\r\n    <!--END OF RESUME CONTAINER-->\r\n  </div>\r\n  <!--END OF CONTAINER-->\r\n</div>\r\n<br>\r\n"

/***/ }),

/***/ "./src/components/resume20/resume20.component.scss":
/*!*********************************************************!*\
  !*** ./src/components/resume20/resume20.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  box-sizing: border-box; }\n\nbody {\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 13px; }\n\nbody p,\nul,\nli {\n  font-size: 13px;\n  line-height: 1.3;\n  margin-bottom: 5px; }\n\n.resume-container {\n  width: 100%;\n  max-width: 210mm;\n  margin: 0 auto;\n  padding: 70px 65px; }\n\n.left-container .image-container {\n  width: 160px;\n  margin: 0 auto;\n  border: 2px solid #4BAADB;\n  border-radius: 50%;\n  height: 160px; }\n\n.name-container {\n  position: relative;\n  margin: 20px 0 30px; }\n\n.first-name {\n  display: inline-block;\n  background-color: #fff;\n  padding: 0 6px;\n  letter-spacing: 2px;\n  color: #626262; }\n\n.first-name:before {\n  content: '';\n  display: block;\n  position: absolute;\n  top: 14px;\n  background-color: #61B9E5;\n  z-index: -1;\n  width: 100%;\n  height: 2px;\n  left: 0; }\n\n.title-icon {\n  max-width: 35px;\n  margin: 0 auto 10px; }\n\n.title-container .info-title {\n  display: inline-block;\n  min-width: 150px;\n  padding: 2px 5px;\n  border: 1px solid #4BAADB;\n  font-weight: 600;\n  color: #3DA9E0;\n  text-transform: uppercase;\n  position: relative; }\n\n.title-container .info-title::after {\n  width: 0;\n  height: 0;\n  border-top: 0px solid transparent;\n  border-bottom: 9px solid transparent;\n  border-right: 13px solid #49B0E4;\n  content: '';\n  position: absolute;\n  bottom: -10px;\n  left: -1px; }\n\n.info-description {\n  padding: 30px 0 20px; }\n\n.right-container {\n  border-left: 2px solid #6DBEE7;\n  padding-left: 35px;\n  margin-left: 20px; }\n\n.right-container .info-container:last-child .info-description,\n.left-container .info-container:last-child .info-description {\n  padding-bottom: 0; }\n\n.right-container .info-description .list {\n  position: relative; }\n\n.right-container .info-description .list::before {\n  position: absolute;\n  content: \"\\00D7\";\n  width: 15px;\n  font-size: 12px;\n  line-height: 13px;\n  height: 15px;\n  left: -25px;\n  top: 2px;\n  background-color: #3DA9E0;\n  text-align: center;\n  color: #fff; }\n\n.right-container .info-description .list::after {\n  content: '';\n  width: 0;\n  height: 0;\n  top: 2px;\n  top: 2px;\n  left: -10px;\n  z-index: 1;\n  position: absolute;\n  border-left: 5px solid #3DA9E0;\n  border-top: 7.5px solid transparent;\n  border-bottom: 7.5px solid transparent;\n  border-right: 0px solid #3DA9E0; }\n"

/***/ }),

/***/ "./src/components/resume20/resume20.component.ts":
/*!*******************************************************!*\
  !*** ./src/components/resume20/resume20.component.ts ***!
  \*******************************************************/
/*! exports provided: Resume20Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Resume20Component", function() { return Resume20Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_services_json_resume_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/services/json-resume.service */ "./src/services/json-resume.service.ts");
/* harmony import */ var _resume_editor_resume_editor_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../resume-editor/resume-editor.component */ "./src/components/resume-editor/resume-editor.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Resume20Component = /** @class */ (function () {
    function Resume20Component(ResumeJsonService, injector) {
        this.ResumeJsonService = ResumeJsonService;
        this.injector = injector;
        this.onEdit = false;
        this.ResumeEditorComponent = this.injector.get(_resume_editor_resume_editor_component__WEBPACK_IMPORTED_MODULE_2__["ResumeEditorComponent"]);
    }
    Resume20Component.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription$ = this.ResumeJsonService.getResumeJson().subscribe(function (resumeJson) {
            console.log(resumeJson);
            _this.ResumeJson = resumeJson;
        });
        this.subscription$.add(this.ResumeJsonService.getCurrentStateEditor().subscribe(function (state) {
            _this.onEdit = state;
        }));
        this.subscription$.add(this.ResumeJsonService.getCurrentSectionEditing().subscribe(function (section) {
            console.log(section);
            _this.currentSectionEditing = section;
        }));
        this.ResumeEditorComponent.domObserver();
    };
    Resume20Component.prototype.deleteSection = function () {
        var parentComponent = this.injector.get(_resume_editor_resume_editor_component__WEBPACK_IMPORTED_MODULE_2__["ResumeEditorComponent"]);
        parentComponent.deleteSection();
    };
    Resume20Component.prototype.ngOnDestroy = function () {
        this.subscription$.unsubscribe();
        this.ResumeEditorComponent.domObserverDisconnect();
    };
    Resume20Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-resume20',
            template: __webpack_require__(/*! ./resume20.component.html */ "./src/components/resume20/resume20.component.html"),
            styles: [__webpack_require__(/*! ./resume20.component.scss */ "./src/components/resume20/resume20.component.scss")]
        }),
        __metadata("design:paramtypes", [src_services_json_resume_service__WEBPACK_IMPORTED_MODULE_1__["JsonResumeService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]])
    ], Resume20Component);
    return Resume20Component;
}());



/***/ }),

/***/ "./src/components/resume21/resume21.component.html":
/*!*********************************************************!*\
  !*** ./src/components/resume21/resume21.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"document row row-eq-height\">\r\n  <div class=\"container content-container\">\r\n    <div class=\"resume-container position-relative content\">\r\n      <div class=\"top-container\">\r\n        <div class=\"row align-items-center\">\r\n          <div class=\"col-sm-8\">\r\n            <div class=\"name-container basic\">\r\n              <h1 class=\"name-text editable name text-uppercase\" style=\"letter-spacing: -5px;\" [innerHtml]=\"ResumeJson?.basic.name\"></h1>\r\n              <h2 [innerHtml]=\"ResumeJson?.basic.jobtitle\" class=\"editable jobtitle position\"></h2>\r\n            </div>\r\n          </div>\r\n          <!--END OF COL-8 --->\r\n          <div class=\"col-sm-4\">\r\n            <div class=\"contact-info\">\r\n              <div class=\"contact-title\">\r\n                <i class='fa fa-user mr-2'> </i>\r\n                <span>CONTACT</span>\r\n              </div>\r\n              <div class=\"contact-details\">\r\n                <p><i class='fa fa-envelope mr-2'></i><span class=\"editable email\" [innerHtml]=\"ResumeJson?.basic.email\"></span></p>\r\n                <p><i class='fa fa-phone  mr-2'></i><span class=\"editable phone\" [innerHtml]=\"ResumeJson?.basic.phone\"></span></p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!--END OF COL-4 --->\r\n        </div>\r\n        <!---END OF ROW--->\r\n      </div>\r\n      <!---END OF TOP CONTAINER--->\r\n      <div class=\"body-content\">\r\n        <div class=\"row\">\r\n          <div claSs=\"col-sm-8\">\r\n            <div class=\"left-container\">\r\n              <div class=\"editable-container experience\" *ngIf=\"ResumeJson?.experience\" dnd-sortable-container\r\n                [sortableData]=\"ResumeJson?.experience.experience\">\r\n                <div class=\"editable-item\">\r\n                  <div class=\"editable-toolbar\" *ngIf=\"currentSectionEditing === 'experience'\">\r\n                    <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">\r\n                      <label data-toggle=\"modal\" data-target=\"#exampleModalCenter\" class=\"btn btn-secondary \">\r\n                        Add\r\n                      </label>\r\n                      <label (click)=\"deleteSection()\" class=\"btn btn-danger\">\r\n                        <i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i>\r\n                      </label>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"title-container\">\r\n                    <h3 class=\"editable title text-uppercase\" [innerHtml]=\"ResumeJson?.experience.title\"></h3>\r\n                  </div>\r\n                </div>\r\n                <div class=\"info-container editable-item\" *ngFor=\"let experience of ResumeJson?.experience.experience ; let i = index\"\r\n                  dnd-sortable [sortableIndex]=\"i\">\r\n                  <div class=\"info-details\">\r\n                    <div class=\"year-content\">\r\n                      <div class=\"rectangle-blue\"></div> <span class=\"date editable\" [innerHtml]=\"experience.date\"></span>\r\n                    </div>\r\n                    <div class=\"company-details\">\r\n                      <p class=\"info-title company editable\" [innerHtml]=\"experience.company\"></p>\r\n                      <p class=\"info-position\">Gaphic and Web Designer</p>\r\n                      <p class=\"info-desc editable desc-{{i}}\" *ngFor=\"let desc of experience.desc\" [innerHtml]=\"desc\"></p>\r\n                    </div>\r\n                    <div class=\"dotted-line-circle\"></div>\r\n                  </div>\r\n                </div>\r\n                <!--END OF INFO CONTAINER-->\r\n              </div>\r\n              <div class=\"editable-container education\" *ngIf=\"ResumeJson?.education\">\r\n                <div class=\"editable-item\">\r\n                  <div class=\"editable-toolbar\" *ngIf=\"currentSectionEditing === 'education'\">\r\n                    <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">\r\n                      <label data-toggle=\"modal\" data-target=\"#exampleModalCenter\" class=\"btn btn-secondary \">\r\n                        Add\r\n                      </label>\r\n                      <label (click)=\"deleteSection()\" class=\"btn btn-danger\">\r\n                        <i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i>\r\n                      </label>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"title-container\">\r\n                    <h3 class=\"title editable text-uppercase\" [innerHtml]=\"ResumeJson?.education.title\"></h3>\r\n                  </div>\r\n                </div>\r\n                <div *ngFor=\"let education of ResumeJson?.education.education\" class=\"editable-item info-container\">\r\n                  <div class=\"info-details\">\r\n                    <div class=\"year-content\">\r\n                      <div class=\"rectangle-blue\"></div><span class=\"editable year\" [innerHtml]=\"education.year\"></span>\r\n                    </div>\r\n                    <div class=\"company-details\">\r\n                      <p class=\"info-title editable school\" [innerHtml]=\"education.school\"></p>\r\n                      <p class=\"info-desc editable info1\" [innerHtml]=\"education.info1\"></p>\r\n                    </div>\r\n                    <div class=\"dotted-line-circle\"></div>\r\n                  </div>\r\n                </div>\r\n                <!--END OF INFO CONTAINER-->\r\n              </div>\r\n            </div>\r\n            <!--END OF LEFT CONTAINER-->\r\n          </div>\r\n          <!--END OF COL-8-->\r\n          <div claSs=\"col-4\">\r\n            <div class=\"right-container\">\r\n              <div class=\"skills editable-container\" *ngIf=\"ResumeJson?.skills\">\r\n                <div class=\"editable-item\">\r\n                  <div class=\"editable-toolbar\" *ngIf=\"currentSectionEditing === 'skills'\">\r\n                    <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">\r\n                      <label data-toggle=\"modal\" data-target=\"#exampleModalCenter\" class=\"btn btn-secondary \">\r\n                        Add\r\n                      </label>\r\n                      <label (click)=\"deleteSection()\" class=\"btn btn-danger\">\r\n                        <i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i>\r\n                      </label>\r\n\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"title-container\">\r\n                    <h3 class=\"editable title text-uppercase\" [innerHtml]=\"ResumeJson?.skills.title\"></h3>\r\n                  </div>\r\n                </div>\r\n                <div class=\"info-container editable-item\">\r\n                  <div class=\"info-details\">\r\n                    <ul >\r\n                      <li style=\"font-size:10px;\" *ngFor=\"let skill of ResumeJson?.skills.skills\" class=\"editable ml-3 skill\" [innerHtml]=\"skill\"></li>\r\n                    </ul>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"references editable-container\" *ngIf=\"ResumeJson?.references\">\r\n                <div class=\"editable-item\">\r\n                  <div class=\"editable-toolbar\" *ngIf=\"currentSectionEditing === 'references'\">\r\n                    <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">\r\n                      <label data-toggle=\"modal\" data-target=\"#exampleModalCenter\" class=\"btn btn-secondary \">\r\n                        Add References\r\n                      </label>\r\n                      <label (click)=\"deleteSection()\" class=\"btn btn-danger\">\r\n                        <i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i>\r\n                      </label>\r\n\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"title-container\">\r\n                    <h3 class=\"editable title text-uppercase\" [innerHtml]=\"ResumeJson?.references.title\">LANGUAGE</h3>\r\n                  </div>\r\n                </div>\r\n                <div class=\"info-container editable-item\">\r\n                  <div class=\"info-details\" *ngFor=\"let reference of ResumeJson?.references.references\">\r\n                    <p style=\"padding: 0 20px;\" class=\"editable name\"><strong [innerHtml]=\"reference.name\"></strong></p>\r\n                    <p style=\"padding: 0 20px;\" class=\"editable contactNumber\" [innerHtml]=\"reference.contactNumber\"></p>\r\n                    <p style=\"padding: 0 20px;\" class=\"editable address\" [innerHtml]=\"reference.address\"></p>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <!--END OF RIGHT CONTAINER--->\r\n          </div>\r\n          <!--END OF COL-4--->\r\n        </div>\r\n        <!--END OF ROW--->\r\n      </div>\r\n      <!--END OF BODY CONTENT--->\r\n    \r\n    </div>\r\n    <!--END OF RESUME CONTAINER-->\r\n    <div class=\"footer-part\">\r\n        <div class=\"resume-date\">12/09/2018, New York</div>\r\n      </div>\r\n  </div>\r\n  <!--END OF CONTAINER-->\r\n</div>\r\n<br>"

/***/ }),

/***/ "./src/components/resume21/resume21.component.scss":
/*!*********************************************************!*\
  !*** ./src/components/resume21/resume21.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  box-sizing: border-box; }\n\nbody {\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 13px; }\n\nbody p {\n  font-size: 13px;\n  line-height: 1.3;\n  margin-bottom: 5px; }\n\nul,\nli {\n  font-size: 13px; }\n\n.resume-container {\n  width: 100%;\n  max-width: 210mm;\n  margin: 0 auto;\n  padding: 50px; }\n\n.name-container .name-text {\n  font-size: 72px;\n  margin: 0;\n  font-weight: 600;\n  color: #00B0F0; }\n\n.name-container .name-text span {\n  color: #7F7F7F; }\n\n.position {\n  padding-top: 0px;\n  font-size: 32px;\n  margin-top: 0px;\n  color: #737372; }\n\n.contact-info {\n  padding: 1rem; }\n\n.contact-title {\n  border-bottom: 2px solid #00b0f0;\n  font-size: 20px;\n  margin-bottom: 10px;\n  display: inline-block;\n  color: #6D6E72;\n  padding-bottom: 5px; }\n\n.contact-title i {\n  font-size: 32px; }\n\n.contact-details {\n  color: #6D6E72; }\n\n.contact-details p {\n  margin-bottom: 4px;\n  line-height: 1; }\n\n.contact-details span {\n  color: #00B0F0; }\n\n.title-container {\n  border-bottom: 2px solid #00b0f0;\n  margin-bottom: 10px;\n  margin-top: 42px;\n  color: #8B8B8A; }\n\n.title-container h3 {\n  font-size: 16px;\n  font-weight: 600; }\n\n.left-container .info-details {\n  display: flex;\n  flex-direction: row;\n  align-items: center; }\n\n.info-details {\n  margin-bottom: 10px;\n  position: relative; }\n\n.year-content {\n  width: 30%;\n  text-align: left;\n  line-height: 12px; }\n\n.rectangle-blue {\n  width: 20px;\n  height: 12px;\n  margin-right: 10px;\n  display: inline-block;\n  background-color: #00B0F0; }\n\n.dotted-line-circle {\n  width: 10px;\n  height: 10px;\n  position: absolute;\n  border-radius: 50%;\n  border: 1px solid #00b0f0;\n  background: #00B0F0;\n  left: 52px;\n  content: '';\n  display: block;\n  bottom: 22px; }\n\n.info-details:after {\n  content: '';\n  height: 70px;\n  width: 0;\n  border-right: 2px dotted #00B0F0;\n  left: 65px;\n  -webkit-transform: rotate(-15deg);\n          transform: rotate(-15deg);\n  position: absolute;\n  bottom: -42px; }\n\n.info-container .info-details:nth-child(even) .dotted-line-circle {\n  left: 71px; }\n\n.info-container .info-details:nth-child(even):after {\n  -webkit-transform: rotate(15deg);\n          transform: rotate(15deg); }\n\n.info-details:last-child:after,\n.info-details:last-child .dotted-line-circle {\n  display: none; }\n\n.info-title {\n  color: #00B0F0;\n  font-weight: 600; }\n\n.info-position {\n  font-weight: 600; }\n\n.company-details {\n  width: 60%;\n  border-left: 1px solid #00b0f0;\n  padding-left: 20px; }\n\n.info-container {\n  position: relative; }\n\n.right-container .info-details ul {\n  padding: 0;\n  display: block;\n  list-style-position: inside; }\n\n.info-details ul li {\n  font-size: 16px; }\n\n.footer-part {\n  position: absolute;\n  bottom: 45px;\n  width: 100%;\n  padding: 0;\n  left: 0;\n  display: block;\n  right: auto;\n  text-align: right; }\n\n.resume-date {\n  padding: 10px;\n  border-top: 1px solid #00B0F0;\n  border-bottom: 1px solid #00B0F0;\n  margin: 20px 50px; }\n"

/***/ }),

/***/ "./src/components/resume21/resume21.component.ts":
/*!*******************************************************!*\
  !*** ./src/components/resume21/resume21.component.ts ***!
  \*******************************************************/
/*! exports provided: Resume21Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Resume21Component", function() { return Resume21Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_services_json_resume_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/services/json-resume.service */ "./src/services/json-resume.service.ts");
/* harmony import */ var _resume_editor_resume_editor_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../resume-editor/resume-editor.component */ "./src/components/resume-editor/resume-editor.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Resume21Component = /** @class */ (function () {
    function Resume21Component(ResumeJsonService, injector) {
        this.ResumeJsonService = ResumeJsonService;
        this.injector = injector;
        this.onEdit = false;
        this.ResumeEditorComponent = this.injector.get(_resume_editor_resume_editor_component__WEBPACK_IMPORTED_MODULE_2__["ResumeEditorComponent"]);
    }
    Resume21Component.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription$ = this.ResumeJsonService.getResumeJson().subscribe(function (resumeJson) {
            console.log(resumeJson);
            _this.ResumeJson = resumeJson;
        });
        this.subscription$.add(this.ResumeJsonService.getCurrentStateEditor().subscribe(function (state) {
            _this.onEdit = state;
        }));
        this.subscription$.add(this.ResumeJsonService.getCurrentSectionEditing().subscribe(function (section) {
            console.log(section);
            _this.currentSectionEditing = section;
        }));
        this.ResumeEditorComponent.domObserver();
    };
    Resume21Component.prototype.deleteSection = function () {
        var parentComponent = this.injector.get(_resume_editor_resume_editor_component__WEBPACK_IMPORTED_MODULE_2__["ResumeEditorComponent"]);
        parentComponent.deleteSection();
    };
    Resume21Component.prototype.ngOnDestroy = function () {
        this.subscription$.unsubscribe();
        this.ResumeEditorComponent.domObserverDisconnect();
    };
    Resume21Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-resume21',
            template: __webpack_require__(/*! ./resume21.component.html */ "./src/components/resume21/resume21.component.html"),
            styles: [__webpack_require__(/*! ./resume21.component.scss */ "./src/components/resume21/resume21.component.scss")]
        }),
        __metadata("design:paramtypes", [src_services_json_resume_service__WEBPACK_IMPORTED_MODULE_1__["JsonResumeService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]])
    ], Resume21Component);
    return Resume21Component;
}());



/***/ }),

/***/ "./src/components/resume22/resume22.component.html":
/*!*********************************************************!*\
  !*** ./src/components/resume22/resume22.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"document row row-eq-height\">\r\n  <div class=\"container\">\r\n    <div class=\"resume-container position-relative\">\r\n      <div class=\"top-container\">\r\n        <div class=\"row align-items-center m-0\">\r\n          <div class=\"col-sm-6 p-0 basic\">\r\n            <div class=\"profile-image\" style=\"padding: 10px;\"><img data-toggle=\"modal\" data-target=\"#exampleModalCenter2\"\r\n                src=\"\" alt=\"\" class=\"img-fluid profile\" [src]=\"ResumeJson?.basic.profile ? ResumeJson?.basic.profile : 'assets/images/Resume/profile-placeholder.jpg'\"></div>\r\n            <div class=\"name-container\">\r\n              <h1 class=\"name-text m-0 editable name\" [innerHtml]=\"ResumeJson?.basic.name\"></h1>\r\n              <h2 class=\"position m-0 editable jobtitle \" [innerHtml]=\"ResumeJson?.basic.jobtitle\"></h2>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-sm-6 p-0\">\r\n            <div class=\"contact-info\">\r\n              <div class=\"contact-details\">\r\n                <ul class=\"contact-info m-0\">\r\n                  <li class=\"item basic\">\r\n                    <p><i class='fas fa-home'></i><span class=\"editable email\" [innerHtml]=\"ResumeJson?.basic.email\"></span></p>\r\n                  </li>\r\n                </ul>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!---END OF ROW--->\r\n      </div>\r\n      <!---END OF TOP CONTAINER--->\r\n      <div class=\"body-content\">\r\n        <div class=\"row\">\r\n          <div class=\"col-8\">\r\n            <div class=\"left-container\">\r\n\r\n\r\n              <div *ngIf=\"ResumeJson?.professionalSummary\" class=\"editable-container professionalSummary about-me-container\">\r\n                <div class=\"editable-item\">\r\n                  <div class=\"editable-toolbar\" *ngIf=\"currentSectionEditing === 'professionalSummary'\">\r\n                    <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">\r\n                      <label data-toggle=\"modal\" data-target=\"#exampleModalCenter\" class=\"btn btn-secondary \">\r\n                        Add\r\n                      </label>\r\n                      <label (click)=\"deleteSection()\" class=\"btn btn-danger\">\r\n                        <i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i>\r\n                      </label>\r\n\r\n                    </div>\r\n                  </div>\r\n                  <h3 class=\"about-me-title editable title\" [innerHtml]=\"ResumeJson?.professionalSummary.title\">\r\n                    ABOUT ME\r\n                  </h3>\r\n                </div>\r\n                <div class=\"about-me-desc summary editable-item editable\" *ngFor=\"let summary of ResumeJson?.professionalSummary.professionalSummary\"\r\n                  [innerHtml]=\"summary\">\r\n                </div>\r\n              </div>\r\n              <div class=\"editable-container experience\" *ngIf=\"ResumeJson?.experience\" dnd-sortable-container\r\n                [sortableData]=\"ResumeJson?.experience.experience\">\r\n                <div class=\"editable-item\">\r\n                  <div class=\"editable-toolbar\" *ngIf=\"currentSectionEditing === 'experience'\">\r\n                    <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">\r\n                      <label data-toggle=\"modal\" data-target=\"#exampleModalCenter\" class=\"btn btn-secondary \">\r\n                        Add\r\n                      </label>\r\n                      <label (click)=\"deleteSection()\" class=\"btn btn-danger\">\r\n                        <i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i>\r\n                      </label>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"column-title-container\">\r\n                    <h3 class=\"editable title\" [innerHtml]=\"ResumeJson?.experience.title\">WORK HISTORY</h3>\r\n                  </div>\r\n                </div>\r\n                <div class=\"info-container position-relative with-left-line editable-item\" *ngFor=\"let experience of ResumeJson?.experience.experience ; let i = index\"\r\n                  dnd-sortable [sortableIndex]=\"i\">\r\n                  <div class=\"clock-container\"><i class=\"fas fa-clock\" aria-hidden=\"true\"></i></div>\r\n                  <h4 class=\"info-title editable\">\r\n                    THE MOST RECENT JOB TITLE GOES HERE\r\n                  </h4>\r\n                  <div class=\"info-company-years company editable\" [innerHtml]=\"experience.company\">\r\n                  </div>\r\n                  <div class=\"info-desc editable desc-{{i}}\" *ngFor=\"let desc of experience.desc\" [innerHtml]=\"desc\">\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"skills editable-container col-sm-12 col-layout-1\" *ngIf=\"ResumeJson?.skills\">\r\n                <div class=\"editable-item\">\r\n                  <div class=\"editable-toolbar\" *ngIf=\"currentSectionEditing === 'skills'\">\r\n                    <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">\r\n                      <label data-toggle=\"modal\" data-target=\"#exampleModalCenter\" class=\"btn btn-secondary \">\r\n                        Add\r\n                      </label>\r\n                      <label (click)=\"deleteSection()\" class=\"btn btn-danger\">\r\n                        <i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i>\r\n                      </label>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"column-title-container\">\r\n                    <h3 class=\"editable title\" [innerHtml]=\"ResumeJson?.skills.title\">LANGUAGES</h3>\r\n                  </div>\r\n                </div>\r\n                <div class=\"info-container position-relative\">\r\n                  <ul class=\"list-items p-0 m-0 editable-item\" *ngFor=\"let skill of ResumeJson?.skills.skills\">\r\n                    <li class=\"item editable ml-3 skill\" [innerHtml]=\"skill\"></li>\r\n                  </ul>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-4\">\r\n            <div class=\"right-container\">\r\n              <div class=\"column-container position-relative with-line\">\r\n                <div class=\"column-icon-container\">\r\n                  <i class=\"fa fa-graduation-cap\" aria-hidden=\"true\"></i>\r\n                </div>\r\n                <div class=\"editable-container education\" *ngIf=\"ResumeJson?.education\">\r\n                  <div class=\"editable-item\">\r\n                    <div class=\"editable-toolbar\" *ngIf=\"currentSectionEditing === 'education'\">\r\n                      <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">\r\n                        <label data-toggle=\"modal\" data-target=\"#exampleModalCenter\" class=\"btn btn-secondary \">\r\n                          Add\r\n                        </label>\r\n                        <label (click)=\"deleteSection()\" class=\"btn btn-danger\">\r\n                          <i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i>\r\n                        </label>\r\n\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"column-title-container m-0 position-relative\">\r\n                      <h4 class=\"m-0 title editable\" [innerHtml]=\"ResumeJson?.education.title\">EDUCATION</h4>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"info-container position-relative editable-item\" *ngFor=\"let education of ResumeJson?.education.education\">\r\n                    <div class=\"diamond-container\"></div>\r\n                    <div class=\"info-company-years school editable\" [innerHtml]=\"education.school\">\r\n                    </div>\r\n                    <div class=\"info-desc editable info1\" [innerHtml]=\"education.info1\">\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"column-container position-relative references editable-container\" *ngIf=\"ResumeJson?.references\">\r\n                <div class=\"editable-item\">\r\n                  <div class=\"editable-toolbar\" *ngIf=\"currentSectionEditing === 'references'\">\r\n                    <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">\r\n                      <label data-toggle=\"modal\" data-target=\"#exampleModalCenter\" class=\"btn btn-secondary \">\r\n                        Add References\r\n                      </label>\r\n                      <label (click)=\"deleteSection()\" class=\"btn btn-danger\">\r\n                        <i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i>\r\n                      </label>\r\n\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"column-title-container m-0 position-relative\">\r\n                    <h4 class=\"m-0 editable title\" [innerHtml]=\"ResumeJson?.references.title\"></h4>\r\n                  </div>\r\n                </div>\r\n                <div class=\"info-container position-relative\">\r\n                  <!-- <div class=\"info-details\">\r\n                    <ul class=\"info-items m-0 p-0\">\r\n                      <li class=\"item\">NOSE EATING</li>\r\n                      <li class=\"item\">ELECTRIC FAN</li>\r\n                      <li class=\"item\">EATING HAMBURGER</li>\r\n                      <li class=\"item\">EATING PIZZA</li>\r\n                      <li class=\"item\">EATING SCORPION</li>\r\n                    </ul>\r\n                  </div> -->\r\n                  <div class=\"editable-item\" *ngFor=\"let reference of ResumeJson?.references.references\">\r\n                    <p style=\"padding: 0 20px;\" class=\"editable name\"><strong [innerHtml]=\"reference.name\"></strong></p>\r\n                    <p style=\"padding: 0 20px;\" class=\"editable contactNumber\" [innerHtml]=\"reference.contactNumber\"></p>\r\n                    <p style=\"padding: 0 20px;\" class=\"editable address\" [innerHtml]=\"reference.address\"></p>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!--END OF COL-4-->\r\n        </div>\r\n        <!--END OF ROW-->\r\n      </div>\r\n      <!--END OF BODY CONTENT-->\r\n    </div>\r\n    <!--END OF RESUME CONTAINER-->\r\n  </div>\r\n  <!--END OF CONTAINER-->\r\n</div>\r\n"

/***/ }),

/***/ "./src/components/resume22/resume22.component.scss":
/*!*********************************************************!*\
  !*** ./src/components/resume22/resume22.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  box-sizing: border-box; }\n\nh1, h2, h3, h4, h5 {\n  margin-top: 0px;\n  font-family: serif; }\n\nbody {\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 13px; }\n\nbody p {\n  font-size: 13px;\n  line-height: 1.3;\n  margin-bottom: 5px; }\n\nul, li {\n  font-size: 13px; }\n\n.resume-container {\n  width: 103.7%;\n  /* max-width: 210mm; */\n  margin: 0 auto;\n  padding: 0;\n  height: 297mm;\n  left: -15px; }\n\n.top-container {\n  background-color: #3497DB;\n  padding: 40px 0;\n  color: #fff; }\n\n.profile-image {\n  width: 40%;\n  display: block;\n  float: left; }\n\n.name-container {\n  width: 60%;\n  display: block;\n  float: left; }\n\n.name-text {\n  font-family: serif; }\n\n.position {\n  font-size: 24px;\n  font-style: italic;\n  font-family: monospace; }\n\nul.contact-info {\n  padding: 0;\n  list-style: none;\n  column-count: 2;\n  -webkit-column-count: 2;\n  -moz-column-count: 2;\n  -ms-column-count: 2;\n  -o-column-count: 2; }\n\n.body-content {\n  padding: 60px 40px 0px; }\n\n.about-me-container {\n  padding: 20px;\n  background-color: #EFF5F6; }\n\n.about-me-desc {\n  font-style: italic;\n  font-size: 12px; }\n\n.column-title-container h3, .info-title, .about-me-title, .column-title-container h4 {\n  color: #3497DB;\n  font-weight: 600; }\n\n.left-container .info-container.with-left-line {\n  padding: 10px 0 10px 70px; }\n\n.info-title {\n  margin-bottom: 0;\n  line-height: 1; }\n\n.info-company-years {\n  font-style: italic;\n  font-size: 12px; }\n\n.info-desc {\n  font-size: 12px;\n  font-style: italic;\n  line-height: 1.5;\n  margin-top: 10px; }\n\n.left-container .clock-container {\n  position: absolute;\n  left: 13px;\n  background: #3497DB;\n  color: #fff;\n  top: 55%;\n  width: 20px;\n  text-align: center;\n  height: 20px;\n  line-height: 22px;\n  -webkit-transform-origin: top;\n          transform-origin: top;\n  -webkit-transform: rotate(-45deg) translateY(50%);\n          transform: rotate(-45deg) translateY(50%);\n  font-size: 11px; }\n\n.left-container .info-container.with-left-line:before {\n  content: '';\n  width: 1px;\n  border-right: 1px solid #CDCDCD;\n  position: absolute;\n  height: 100%;\n  top: 0;\n  left: 37px; }\n\n.column-title-container {\n  margin-top: 40px; }\n\n.info-container .list-items li {\n  list-style-position: inside;\n  font-size: 16px; }\n\n.right-container {\n  padding-left: 30px; }\n\n.right-container .info-title, .right-container .info-company-years {\n  font-size: 10px; }\n\n.right-container .info-container {\n  padding: 10px 0; }\n\n.diamond-container {\n  width: 6px;\n  height: 6px;\n  position: absolute;\n  left: -20px;\n  -webkit-transform-origin: 0 0;\n          transform-origin: 0 0;\n  top: 45%;\n  background-color: #3497DB;\n  -webkit-transform: rotate(-45deg) translateY(-50%);\n          transform: rotate(-45deg) translateY(-50%); }\n\n.column-container.with-line:before {\n  content: '';\n  position: absolute;\n  left: -18px;\n  top: 0;\n  width: 1px;\n  border-right: 1px solid #3999DC;\n  height: 100%; }\n\n.diamond-container.top {\n  top: 5px; }\n\n.column-icon-container {\n  position: absolute;\n  top: -8px;\n  left: -32px;\n  width: 30px;\n  text-align: center;\n  font-size: 24px;\n  color: #3497DB;\n  background: #fff; }\n\n.column-container {\n  margin-bottom: 20px; }\n\n.info-items .item {\n  list-style-position: inside; }\n"

/***/ }),

/***/ "./src/components/resume22/resume22.component.ts":
/*!*******************************************************!*\
  !*** ./src/components/resume22/resume22.component.ts ***!
  \*******************************************************/
/*! exports provided: Resume22Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Resume22Component", function() { return Resume22Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_services_json_resume_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/services/json-resume.service */ "./src/services/json-resume.service.ts");
/* harmony import */ var _resume_editor_resume_editor_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../resume-editor/resume-editor.component */ "./src/components/resume-editor/resume-editor.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Resume22Component = /** @class */ (function () {
    function Resume22Component(ResumeJsonService, injector) {
        this.ResumeJsonService = ResumeJsonService;
        this.injector = injector;
        this.onEdit = false;
        this.ResumeEditorComponent = this.injector.get(_resume_editor_resume_editor_component__WEBPACK_IMPORTED_MODULE_2__["ResumeEditorComponent"]);
    }
    Resume22Component.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription$ = this.ResumeJsonService.getResumeJson().subscribe(function (resumeJson) {
            console.log(resumeJson);
            _this.ResumeJson = resumeJson;
        });
        this.subscription$.add(this.ResumeJsonService.getCurrentStateEditor().subscribe(function (state) {
            _this.onEdit = state;
        }));
        this.subscription$.add(this.ResumeJsonService.getCurrentSectionEditing().subscribe(function (section) {
            console.log(section);
            _this.currentSectionEditing = section;
        }));
        this.ResumeEditorComponent.domObserver();
    };
    Resume22Component.prototype.deleteSection = function () {
        var parentComponent = this.injector.get(_resume_editor_resume_editor_component__WEBPACK_IMPORTED_MODULE_2__["ResumeEditorComponent"]);
        parentComponent.deleteSection();
    };
    Resume22Component.prototype.ngOnDestroy = function () {
        this.subscription$.unsubscribe();
        this.ResumeEditorComponent.domObserverDisconnect();
    };
    Resume22Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-resume22',
            template: __webpack_require__(/*! ./resume22.component.html */ "./src/components/resume22/resume22.component.html"),
            styles: [__webpack_require__(/*! ./resume22.component.scss */ "./src/components/resume22/resume22.component.scss")]
        }),
        __metadata("design:paramtypes", [src_services_json_resume_service__WEBPACK_IMPORTED_MODULE_1__["JsonResumeService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]])
    ], Resume22Component);
    return Resume22Component;
}());



/***/ }),

/***/ "./src/components/resume23/resume23.component.html":
/*!*********************************************************!*\
  !*** ./src/components/resume23/resume23.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"document row row-eq-height\">\r\n  <div class=\"container\">\r\n    <div class=\"resume-container position-relative\">\r\n      <div class=\"top-container text-white position-relative\">\r\n        <div class=\"row align-items-center\">\r\n          <div class=\"col-6 basic\">\r\n            <div class=\"profile-image-container d-inline-block\" style=\"padding:10px;\">\r\n              <img data-toggle=\"modal\" data-target=\"#exampleModalCenter2\" class=\"img-fluid profile\" [src]=\"ResumeJson?.basic.profile ? ResumeJson?.basic.profile : 'assets/images/Resume/profile-placeholder.jpg'\" />\r\n            </div>\r\n            <div class=\"name-container d-inline-block text-left\">\r\n              <h1 class=\"name-text m-0 editable name\" [innerHtml]=\"ResumeJson?.basic.name\"></h1>\r\n              <h4 [innerHtml]=\"ResumeJson?.basic.jobtitle\" class=\"editable jobtitle position m-0\"></h4>\r\n            </div>\r\n          </div>\r\n          <!--END OF COL-6 --->\r\n          <div class=\"col-sm-6\">\r\n            <div class=\"contact-info\">\r\n              <ul class=\"contact-details p-0 m-0 d-inline-block text-left list-style-none basic\">\r\n                <li><i class=\"fa fa-map-marker\"></i> <span class=\" editable address\" [innerHtml]=\"ResumeJson?.basic.address\"></span></li>\r\n                <li><i class=\"fa fa-envelope\"></i><span class=\" editable email\" [innerHtml]=\"ResumeJson?.basic.email\"></span></li>\r\n                <li><i class=\"fa fa-phone\"></i><span class=\" editable phone\" [innerHtml]=\"ResumeJson?.basic.phone\"></span></li>\r\n              </ul>\r\n            </div>\r\n          </div>\r\n          <!--END OF COL-4 --->\r\n        </div>\r\n        <!---END OF ROW--->\r\n      </div>\r\n      <!---END OF TOP CONTAINER--->\r\n      <div class=\"body-content\">\r\n        <div class=\"row\">\r\n          <div claSs=\"col-sm-6\">\r\n            <div class=\"left-container\">\r\n              <div class=\"editable-container experience\" *ngIf=\"ResumeJson?.experience\" dnd-sortable-container\r\n                [sortableData]=\"ResumeJson?.experience.experience\">\r\n                <div class=\"editable-item\">\r\n                  <div class=\"editable-toolbar\" *ngIf=\"currentSectionEditing === 'experience'\">\r\n                    <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">\r\n                      <label data-toggle=\"modal\" data-target=\"#exampleModalCenter\" class=\"btn btn-secondary \">\r\n                        Add\r\n                      </label>\r\n                      <label (click)=\"deleteSection()\" class=\"btn btn-danger\">\r\n                        <i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i>\r\n                      </label>\r\n\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"title-container\">\r\n                    <span class=\"icon-container\"><i class=\"fa fa-envelope\"></i></span><span class=\"editable title title1\"\r\n                      [innerHtml]=\"ResumeJson?.experience.title\"></span>\r\n                  </div>\r\n                </div>\r\n                <div class=\"info-container editable-item\" *ngFor=\"let experience of ResumeJson?.experience.experience ; let i = index\"\r\n                  dnd-sortable [sortableIndex]=\"i\">\r\n                  <div class=\"years\">\r\n                    <i class=\"fa fa-clock\"></i><span class=\"editable date\" [innerHtml]=\"experience.date\">2009 - 2011</span>\r\n                  </div>\r\n                  <div class=\"info-details\">\r\n                    <p class=\"info-title editable company\" [innerHtml]=\"experience.company\"></p>\r\n                    <p class=\"info-position\">Graphic Design</p>\r\n                    <p class=\"info-desc editable desc-{{i}}\" *ngFor=\"let desc of experience.desc\" [innerHtml]=\"desc\"></p>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n\r\n            <div class=\"editable-container education\" *ngIf=\"ResumeJson?.education\">\r\n              <div class=\"editable-item\">\r\n                <div class=\"editable-toolbar\" *ngIf=\"currentSectionEditing === 'education'\">\r\n                  <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">\r\n                    <label data-toggle=\"modal\" data-target=\"#exampleModalCenter\" class=\"btn btn-secondary \">\r\n                      Add\r\n                    </label>\r\n                    <label (click)=\"deleteSection()\" class=\"btn btn-danger\">\r\n                      <i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i>\r\n                    </label>\r\n\r\n                  </div>\r\n                </div>\r\n                <div class=\"title-container\">\r\n                  <span class=\"icon-container\"></span><span class=\"title editable title1\" [innerHtml]=\"ResumeJson?.education.title\">\r\n                    Education</span>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"info-container editable-item\" *ngFor=\"let education of ResumeJson?.education.education\">\r\n                <div class=\"years\">\r\n                  <i class=\"fa fa-clock\"></i><span class=\"editable year\" [innerHtml]=\"education.year\"></span>\r\n                </div>\r\n                <div class=\"info-details\">\r\n                  <p class=\"info-title editable school\" [innerHtml]=\"education.school\"></p>\r\n                  <p class=\"info-position editable info1\" [innerHtml]=\"education.info1\"></p>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n\r\n\r\n\r\n          </div>\r\n          <div claSs=\"col-6\">\r\n            <div class=\"right-container\">\r\n              <div class=\"title-container\">\r\n\r\n\r\n\r\n                <div class=\"info-container skills editable-container\" *ngIf=\"ResumeJson?.skills\">\r\n                  <div class=\"editable-item\">\r\n                    <div class=\"editable-toolbar\" *ngIf=\"currentSectionEditing === 'skills'\">\r\n                      <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">\r\n                        <label data-toggle=\"modal\" data-target=\"#exampleModalCenter\" class=\"btn btn-secondary \">\r\n                          Add\r\n                        </label>\r\n                        <label (click)=\"deleteSection()\" class=\"btn btn-danger\">\r\n                          <i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i>\r\n                        </label>\r\n\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"years\">\r\n                      <i class=\"fa fa-clock\"></i><span class=\"editable title\" [innerHtml]=\"ResumeJson?.skills.title\"></span>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"info-details editable-item\">\r\n                    <ul class=\"m-0 p-0\" *ngFor=\"let skill of ResumeJson?.skills.skills\">\r\n                      <li><span class=\"editable ml-3 skill\" [innerHtml]=\"skill\"></span></li>\r\n                    </ul>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!--END OF ROW--->\r\n        </div>\r\n        <!--END OF BODY CONTENT--->\r\n        <div class=\"footer\">\r\n          <div class=\"footer-content\">\r\n            <div class=\"footer-info basic\">\r\n              <span class=\"editable email\" [innerHtml]=\"ResumeJson?.basic.address\"></span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!--END OF RESUME CONTAINER-->\r\n    </div>\r\n    <!--END OF CONTAINER-->\r\n  </div>\r\n"

/***/ }),

/***/ "./src/components/resume23/resume23.component.scss":
/*!*********************************************************!*\
  !*** ./src/components/resume23/resume23.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  box-sizing: border-box; }\n\nh1,\nh2,\nh3,\nh4,\nh5 {\n  font-weight: 400; }\n\nbody {\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 13px; }\n\nbody p,\nul,\nli {\n  font-size: 13px;\n  line-height: 1.3;\n  margin-bottom: 5px; }\n\n.resume-container {\n  width: 103.7%;\n  /* max-width: 210mm; */\n  margin: 0 auto;\n  height: 297mm;\n  left: -15px; }\n\n.list-style-none {\n  list-style: none; }\n\n.top-container {\n  padding: 20px 50px;\n  text-align: center;\n  background-color: #376092; }\n\n.top-container:after {\n  content: '';\n  position: absolute;\n  left: 0;\n  bottom: -6px;\n  width: 100%;\n  border-bottom: 3px solid #254061;\n  display: block; }\n\n.profile-image-container {\n  width: 120px; }\n\n.name-container {\n  width: 205px;\n  vertical-align: middle; }\n\n.title-container .icon-container {\n  width: 42px;\n  height: 42px;\n  background-color: #254061;\n  color: #fff;\n  border: 1px solid;\n  margin-right: 10px;\n  border-radius: 50%;\n  text-align: center;\n  line-height: 42px;\n  font-size: 20px; }\n\n.title-container span {\n  vertical-align: middle;\n  display: inline-block; }\n\n.title-container .title {\n  font-size: 16px;\n  font-weight: 600; }\n\n.body-content {\n  padding: 60px 50px; }\n\n.info-container .years {\n  padding: 10px 0 10px 12px; }\n\n.info-container .years .fa {\n  color: #7490B3;\n  padding-right: 10px; }\n\n.info-title {\n  font-size: 17px;\n  color: #3A6293;\n  font-weight: 600;\n  margin: 0;\n  line-height: 1; }\n\n.info-container .info-position {\n  color: #000;\n  font-weight: 600; }\n\n.info-container {\n  margin-bottom: 20px; }\n\n.info-container .years span {\n  font-size: 14px;\n  font-weight: 600; }\n\n.info-container ul li span {\n  color: #000; }\n\n.info-container ul {\n  margin-bottom: 20px !important;\n  list-style-position: inside;\n  color: #376092; }\n\n.footer {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  border-top: 3px solid #254061;\n  padding-top: 3px; }\n\n.footer-content {\n  display: block;\n  padding: 10px 50px;\n  background-color: #376092;\n  color: #fff; }\n\n.footer-content .footer-info span {\n  padding-right: 30px; }\n"

/***/ }),

/***/ "./src/components/resume23/resume23.component.ts":
/*!*******************************************************!*\
  !*** ./src/components/resume23/resume23.component.ts ***!
  \*******************************************************/
/*! exports provided: Resume23Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Resume23Component", function() { return Resume23Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_services_json_resume_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/services/json-resume.service */ "./src/services/json-resume.service.ts");
/* harmony import */ var _resume_editor_resume_editor_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../resume-editor/resume-editor.component */ "./src/components/resume-editor/resume-editor.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Resume23Component = /** @class */ (function () {
    function Resume23Component(ResumeJsonService, injector) {
        this.ResumeJsonService = ResumeJsonService;
        this.injector = injector;
        this.onEdit = false;
        this.ResumeEditorComponent = this.injector.get(_resume_editor_resume_editor_component__WEBPACK_IMPORTED_MODULE_2__["ResumeEditorComponent"]);
    }
    Resume23Component.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription$ = this.ResumeJsonService.getResumeJson().subscribe(function (resumeJson) {
            console.log(resumeJson);
            _this.ResumeJson = resumeJson;
        });
        this.subscription$.add(this.ResumeJsonService.getCurrentStateEditor().subscribe(function (state) {
            _this.onEdit = state;
        }));
        this.subscription$.add(this.ResumeJsonService.getCurrentSectionEditing().subscribe(function (section) {
            console.log(section);
            _this.currentSectionEditing = section;
        }));
        this.ResumeEditorComponent.domObserver();
    };
    Resume23Component.prototype.deleteSection = function () {
        var parentComponent = this.injector.get(_resume_editor_resume_editor_component__WEBPACK_IMPORTED_MODULE_2__["ResumeEditorComponent"]);
        parentComponent.deleteSection();
    };
    Resume23Component.prototype.ngOnDestroy = function () {
        this.subscription$.unsubscribe();
        this.ResumeEditorComponent.domObserverDisconnect();
    };
    Resume23Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-resume23',
            template: __webpack_require__(/*! ./resume23.component.html */ "./src/components/resume23/resume23.component.html"),
            styles: [__webpack_require__(/*! ./resume23.component.scss */ "./src/components/resume23/resume23.component.scss")]
        }),
        __metadata("design:paramtypes", [src_services_json_resume_service__WEBPACK_IMPORTED_MODULE_1__["JsonResumeService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]])
    ], Resume23Component);
    return Resume23Component;
}());



/***/ }),

/***/ "./src/components/resume3/resume3.component.html":
/*!*******************************************************!*\
  !*** ./src/components/resume3/resume3.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <div class=\"document row row-eq-height\">\r\n      <div class=\"col-sm-5 topall col-image-layout-0 \" style=\"background-color:#E7E7E7\">\r\n        <div class=\"basic\">\r\n            <div class=\"col-image-layout-1 bas mb-5\">\r\n                <div class=\"col-image-layout-2\">\r\n                    <div class=\"col-image-layout-3\">\r\n                        <img data-toggle=\"modal\" data-target= \"#exampleModalCenter2\" class=\"col-image-layout-4 profile\" [src]=\"ResumeJson?.basic.profile ? ResumeJson?.basic.profile : 'assets/images/Resume/profile-placeholder.jpg'\"/>\r\n                    </div>\r\n                </div>\r\n                <div style=\"margin: 0 auto;\r\n                display: block;\r\n                width: 190px;\">\r\n                    <p style=\"padding: 10px 0 0 0;\"></p><h2 class=\"editable name text-left\" [innerHtml]=\"ResumeJson?.basic.name\" style=\"text-transform: uppercase;\"></h2><p></p>\r\n                    <hr style=\"border: 1px #DFDFDF solid;\">\r\n                    <h4 [innerHtml]=\"ResumeJson?.basic.jobtitle\" class=\"editable jobtitle text-left\" ></h4>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-sm-12 col-layout-0\">\r\n                <ul class=\"col-info-1\" style=\"list-style-type: none;\" >\r\n                    <li class=\"li-layout\"><span class=\"icon-container\"><img class=\"icons\" src=\"/assets/images/template2/icon-1.png\"></span><label class=\"contact-label editable phone\" [innerHtml]=\"ResumeJson?.basic.phone\"></label></li>\r\n                    <li class=\"li-layout\"><span class=\"icon-container\"><img class=\"icons\" src=\"/assets/images/template2/icon-2.png\"></span><label class=\"contact-label editable email\" [innerHtml]=\"ResumeJson?.basic.email\"></label></li>\r\n                    <!-- <li class=\"li-layout\"><span class=\"icon-container\"><img class=\"icons\" src=\"/assets/images/template2/icon-3.png\"></span><label class=\"contact-label\" [innerHtml]=\"ResumeJson?.basic.phone\"></label></li> -->\r\n                    <li class=\"li-layout\"><span class=\"icon-container\"><img class=\"icons\" src=\"/assets/images/template2/icon-4.png\"></span><label class=\"contact-label editable address\" [innerHtml]=\"ResumeJson?.basic.address\"></label></li>\r\n                </ul>\r\n            </div>\r\n            <hr style=\"border: 1px #DFDFDF solid;\">\r\n            <!-- <div class=\"col-sm-12 col-layout-1\">\r\n                <ul class=\"col-info-1\">\r\n                    <li class=\"li-layout\"><span class=\"icon-container\"><img class=\"head-icons\" src=\"/assets/images/template2/icon-5.png\"></span><label class=\"label-header\"><h3>LANGUAGE</h3></label></li>\r\n                    <li class=\"li-layout\" style=\"margin-left: -28px; padding: 0px;\">\r\n                        <span class=\"icon-container-0\">\r\n                            <span style=\"background: white; padding: 4px 2px 0px; border-radius: 10px;\">\r\n                                <span style=\"font-size: 25px; color: #555;\">•</span>\r\n                            </span>\r\n                        </span>\r\n                        <label class=\"contact-label\">ARABIC</label>\r\n                        <div class=\"col-sm-7 topall\" style=\"padding-top: 10px; padding-bottom: 0px; float: right;\">\r\n                            <span class=\"dot\" style=\"background-color: #3376A2;\"></span>\r\n                            <span class=\"dot\" style=\"background-color: #3376A2;\"></span>\r\n                            <span class=\"dot\" style=\"background-color: #3376A2;\"></span>\r\n                            <span class=\"dot\" style=\"background-color: #3376A2;\"></span>\r\n                            <span class=\"dot\" style=\"background-color: #3376A2;\"></span>\r\n                        </div>\r\n                    </li>\r\n                    <li class=\"li-layout\" style=\"margin-left: -28px; padding: 0px;\">\r\n                        <span class=\"icon-container-0\">\r\n                            <span style=\"background: white; padding: 4px 2px 0px; border-radius: 10px;\">\r\n                                <span style=\"font-size: 25px; color: #555;\">•</span>\r\n                            </span>\r\n                        </span>\r\n                        <label class=\"contact-label\">ENGLISH</label>\r\n                        <div class=\"col-sm-7 topall\" style=\"padding-top: 10px; padding-bottom: 0px; float: right;\">\r\n                            <span class=\"dot\" style=\"background-color: #3376A2;\"></span>\r\n                            <span class=\"dot\" style=\"background-color: #3376A2;\"></span>\r\n                            <span class=\"dot\" style=\"background-color: #3376A2;\"></span>\r\n                            <span class=\"dot\" style=\"background-color: #BFBFBF;\"></span>\r\n                            <span class=\"dot\" style=\"background-color: #BFBFBF;\"></span>\r\n                        </div>\r\n                    </li>\r\n                    <li class=\"li-layout\" style=\"margin-left: -28px; padding: 0px;\">\r\n                        <span class=\"icon-container-0\">\r\n                            <span style=\"background: white; padding: 4px 2px 0px; border-radius: 10px;\">\r\n                                <span style=\"font-size: 25px; color: #555;\">•</span>\r\n                            </span>\r\n                        </span>\r\n                        <label class=\"contact-label\">FRENCH</label>\r\n                        <div class=\"col-sm-7 topall\" style=\"padding-top: 10px; padding-bottom: 0px; float: right;\">\r\n                            <span class=\"dot\" style=\"background-color: #3376A2;\"></span>\r\n                            <span class=\"dot\" style=\"background-color: #3376A2;\"></span>\r\n                            <span class=\"dot\" style=\"background-color: #BFBFBF;\"></span>\r\n                            <span class=\"dot\" style=\"background-color: #BFBFBF;\"></span>\r\n                            <span class=\"dot\" style=\"background-color: #BFBFBF;\"></span>\r\n                        </div>\r\n                    </li>\r\n                    <li class=\"li-layout\" style=\"margin-left: -28px; padding: 0px;\">\r\n                        <span class=\"icon-container-0\">\r\n                            <span style=\"background: white; padding: 4px 2px 0px; border-radius: 10px;\">\r\n                                <span style=\"font-size: 25px; color: #555;\">•</span>\r\n                            </span>\r\n                        </span>\r\n                        <label class=\"contact-label\">SPANISH</label>\r\n                        <div class=\"col-sm-7 topall\" style=\"padding-top: 10px; padding-bottom: 0px; float: right;\">\r\n                            <span class=\"dot\" style=\"background-color: #3376A2;\"></span>\r\n                            <span class=\"dot\" style=\"background-color: #BFBFBF;\"></span>\r\n                            <span class=\"dot\" style=\"background-color: #BFBFBF;\"></span>\r\n                            <span class=\"dot\" style=\"background-color: #BFBFBF;\"></span>\r\n                            <span class=\"dot\" style=\"background-color: #BFBFBF;\"></span>\r\n                        </div>\r\n                    </li>\r\n                </ul>\r\n            </div> -->\r\n            <!-- <hr style=\"border: 1px #DFDFDF solid;\"> -->\r\n        </div>\r\n         \r\n      </div>\r\n      <div class=\"col-sm-7 left-txt topall content-container\" [style.background-color]=\" onEdit ? '#DCDBE0' : '#FFF'\" >\r\n          <div class=\"content\">\r\n                <div *ngIf=\"ResumeJson?.professionalSummary\" class=\"editable-container professionalSummary\">\r\n                        <div class=\"editable-item\">\r\n                                <div class=\"editable-toolbar\" *ngIf=\"currentSectionEditing === 'professionalSummary'\">\r\n                                        <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">\r\n                                                        <label data-toggle=\"modal\" data-target=\"#exampleModalCenter\" class=\"btn btn-secondary \">\r\n                                                        Add\r\n                                                        </label>\r\n                                                        <label (click)=\"deleteSection()\" class=\"btn btn-danger\">\r\n                                                                <i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i>\r\n                                                        </label>\r\n                                                        \r\n                                        </div>\r\n                                </div> \r\n                                <ul class=\"col-info-1 \">\r\n                                    \r\n                                    <li class=\"li-layout\">\r\n                                        <span class=\"icon-container\">\r\n                                            <img class=\"content-head-icons\" src=\"/assets/images/template2/icon-7.png\">\r\n                                        </span>\r\n                                        <label class=\"content-label-header\">\r\n                                            <h3 class=\"editable title\" style=\"color: black;\"><strong [innerHtml]=\"ResumeJson?.professionalSummary.title\"></strong></h3>\r\n                                        </label>\r\n                                    </li>\r\n                                </ul>\r\n                        </div>\r\n                        <p style=\"padding: 0 20px;\" *ngFor=\"let summary of ResumeJson?.professionalSummary.professionalSummary\" class=\"summary editable-item editable\" [innerHtml]=\"summary\"></p>\r\n                      </div>\r\n            \r\n                      <div class=\"editable-container education\" *ngIf=\"ResumeJson?.education\">\r\n                        <div class=\"editable-item\">\r\n                                <div class=\"editable-toolbar\" *ngIf=\"currentSectionEditing === 'education'\">\r\n                                        <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">\r\n                                                        <label data-toggle=\"modal\" data-target=\"#exampleModalCenter\" class=\"btn btn-secondary \">\r\n                                                        Add\r\n                                                        </label>\r\n                                                        <label (click)=\"deleteSection()\" class=\"btn btn-danger\">\r\n                                                                <i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i>\r\n                                                        </label>\r\n                                                        \r\n                                        </div>\r\n                                </div> \r\n                                <ul class=\"col-info-1\">\r\n                                  <li class=\"li-layout\">\r\n                                      <span class=\"icon-container\">\r\n                                          <img class=\"content-head-icons\" src=\"/assets/images/template2/icon-8.png\">\r\n                                      </span>\r\n                                      <label class=\"content-label-header\">\r\n                                          <h3 style=\"color: black;\"><strong class=\"title editable\" [innerHtml]=\"ResumeJson?.education.title\"></strong></h3>\r\n                                      </label>\r\n                                  </li>\r\n                                </ul>\r\n                        </div>\r\n                        <div *ngFor=\"let education of ResumeJson?.education.education\" class=\"editable-item\">\r\n                          <p style=\"padding: 0 20px;\" >\r\n                            <span class=\"icon-container-0\">\r\n                                <span style=\"background: white; padding: 2px 2px 0px; border-radius: 10px;\">\r\n                                    <span style=\"font-size: 25px; color: #555;\">•</span>\r\n                                </span>\r\n                            </span>\r\n                            <label class=\"contact-label\"><strong class=\"editable\"><span class=\"school\" [innerHtml]=\"education.school\"></span> <span contenteditable=\"false\">|</span> <span style=\"color:#A7A7A7;\" class=\"year\" innerHtml=\"education.year\"></span></strong></label>\r\n                            <br><p class=\"editable info1\" [innerHtml]=\"education.info1\"></p> \r\n                          </p>\r\n                        </div>\r\n                      </div>\r\n                      <!-- <p style=\"padding: 0 20px;\">\r\n                          <span class=\"icon-container-0\">\r\n                              <span style=\"background: white; padding: 2px 2px 0px; border-radius: 10px;\">\r\n                                  <span style=\"font-size: 25px; color: #555;\">•</span>\r\n                              </span>\r\n                          </span>\r\n                          <label class=\"contact-label\">SCHOOL NAME 1 | <span style=\"color:#A7A7A7;\">JUNE 2008 - DEC 2014</span></label>\r\n                          <br><strong>Lorem ipsum dolor sit amet:</strong> consectetur adipisicing elitLorem ipsum dolor sit amet, consectetur adipisicing elitLorem ipsum dolor sit amet, consectetur\r\n                      </p> -->\r\n                      <!-- <br><br> -->\r\n                      <div class=\"editable-container experience\" *ngIf=\"ResumeJson?.experience\" dnd-sortable-container [sortableData]=\"ResumeJson?.experience.experience\" >\r\n                        <div class=\"editable-item\">\r\n                                <div class=\"editable-toolbar\" *ngIf=\"currentSectionEditing === 'experience'\">\r\n                                        <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">\r\n                                                        <label data-toggle=\"modal\" data-target=\"#exampleModalCenter\" class=\"btn btn-secondary \">\r\n                                                        Add\r\n                                                        </label>\r\n                                                        <label (click)=\"deleteSection()\" class=\"btn btn-danger\">\r\n                                                                <i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i>\r\n                                                        </label>\r\n                                                        \r\n                                        </div>\r\n                                </div> \r\n                                <ul class=\"col-info-1\">\r\n                                  <li class=\"li-layout\">\r\n                                      <span class=\"icon-container\">\r\n                                          <img class=\"content-head-icons\" src=\"/assets/images/template2/icon-9.png\">\r\n                                      </span>\r\n                                      <label class=\"content-label-header\">\r\n                                          <h3 style=\"color: black;\"><strong class=\"editable title\" [innerHtml]=\"ResumeJson?.experience.title\"></strong></h3>\r\n                                      </label>\r\n                                  </li>\r\n                                </ul>\r\n                        </div>\r\n                        <div class=\"editable-item\" *ngFor=\"let experience of ResumeJson?.experience.experience ; let i = index\" dnd-sortable [sortableIndex]=\"i\">\r\n                          <p style=\"padding: 0 20px;\">\r\n                            <span class=\"icon-container-0\">\r\n                                <span style=\"background: white; padding: 2px 2px 0px; border-radius: 10px;\">\r\n                                    <span style=\"font-size: 25px; color: #555;\">•</span>\r\n                                </span>\r\n                            </span>\r\n                            <label class=\"contact-label\"><strong class=\"editable\"><span class=\"company\" [innerHtml]=\"experience.company\"></span><span contenteditable=\"false\">|</span>  <span style=\"color:#A7A7A7;\" class=\"date\" [innerHtml]=\"experience.date\"></span></strong></label>\r\n                            <br>\r\n                            <span *ngFor=\"let desc of experience.desc\" class=\"editable desc-{{i}}\" [innerHtml]=\"desc\"></span> \r\n                          </p>\r\n                        </div>\r\n                        \r\n                      </div>\r\n                      <div class=\"skills editable-container col-sm-12 col-layout-1\" *ngIf=\"ResumeJson?.skills\" >\r\n                       <div class=\"editable-item\">\r\n                            <div class=\"editable-toolbar\" *ngIf=\"currentSectionEditing === 'skills'\">\r\n                                    <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">\r\n                                                    <label data-toggle=\"modal\" data-target=\"#exampleModalCenter\" class=\"btn btn-secondary \">\r\n                                                    Add\r\n                                                    </label>\r\n                                                    <label (click)=\"deleteSection()\" class=\"btn btn-danger\">\r\n                                                            <i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i>\r\n                                                    </label>\r\n                                                    \r\n                                    </div>\r\n                            </div>\r\n                            <ul class=\"col-info-1\">\r\n                                <li class=\"li-layout\"><span class=\"icon-container\"><img class=\"head-icons\" src=\"/assets/images/template2/icon-6.png\"></span><label class=\"label-header\"><h3 class=\"editable title\" ><strong [innerHtml]=\"ResumeJson?.skills.title\"></strong></h3></label></li>\r\n                            </ul>  \r\n                       </div>\r\n                        <!-- <ul class=\"col-info-1\"> -->\r\n                              <!-- <li class=\"li-layout\"><span class=\"icon-container\"><img class=\"head-icons\" src=\"/assets/images/template2/icon-6.png\"></span><label class=\"label-header\"><h3 class=\"editable title\">{{ResumeJson?.skills.title}}</h3></label></li> -->\r\n                            \r\n                                <div *ngFor=\"let skill of ResumeJson?.skills.skills\" class=\"editable-item\">\r\n                                    <p style=\"padding: 0 20px;\" >\r\n                                      <span class=\"icon-container-0\">\r\n                                          <span style=\"background: white; padding: 2px 2px 0px; border-radius: 10px;\">\r\n                                              <span style=\"font-size: 25px; color: #555;\">•</span>\r\n                                          </span>\r\n                                      </span>\r\n                                      <span class=\"editable ml-3 skill\" [innerHtml]=\"skill\"></span>\r\n                                    </p>\r\n                                </div>\r\n                                \r\n                          <!-- </ul> -->\r\n                      </div>\r\n                      <div  class=\"references editable-container\" *ngIf=\"ResumeJson?.references\" >       \r\n                        <div class=\"editable-item\">\r\n                                <div class=\"editable-toolbar\" *ngIf=\"currentSectionEditing === 'references'\">\r\n                                                <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">\r\n                                                                <label data-toggle=\"modal\" data-target=\"#exampleModalCenter\" class=\"btn btn-secondary \">\r\n                                                                Add References\r\n                                                                </label>\r\n                                                                <label (click)=\"deleteSection()\" class=\"btn btn-danger\">\r\n                                                                        <i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i>\r\n                                                                </label>\r\n                                                                \r\n                                                </div>\r\n                                </div> \r\n                                <ul class=\"col-info-1\">\r\n                                    <li class=\"li-layout\"><span class=\"icon-container\"><img class=\"head-icons\" src=\"/assets/images/template2/icon-6.png\"></span><label class=\"label-header\"><h3 class=\"editable title\" ><strong [innerHtml]=\"ResumeJson?.references.title\"></strong></h3></label></li>\r\n                                </ul> \r\n                        </div>\r\n                        <div class=\"editable-item\" *ngFor=\"let reference of ResumeJson?.references.references\" >\r\n                                <p style=\"padding: 0 20px;\" class=\"editable name\"><strong [innerHtml]=\"reference.name\"></strong></p>\r\n                                <p style=\"padding: 0 20px;\" class=\"editable contactNumber\" [innerHtml]=\"reference.contactNumber\" ></p>\r\n                                <p style=\"padding: 0 20px;\" class=\"editable address\" [innerHtml]=\"reference.address\" ></p>\r\n                        </div>\r\n                     </div>\r\n          </div>\r\n      </div>\r\n  </div>\r\n  <br>\r\n<!-- </div> -->"

/***/ }),

/***/ "./src/components/resume3/resume3.component.scss":
/*!*******************************************************!*\
  !*** ./src/components/resume3/resume3.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".document {\n  border: 1px solid #b4b4b4;\n  background-color: #fff; }\n  .document .content {\n    transition: background 1s; }\n  .document img {\n    cursor: pointer; }\n  .document img:hover {\n    opacity: 0.8; }\n  .editable-container .editable-item ul {\n  margin: 0; }\n  h1, h2, h3, h4, h5, h6, .h1, .h2, .h3, .h4, .h5, .h6 {\n  font-family: inherit;\n  font-weight: 500;\n  line-height: 1.1;\n  color: inherit;\n  text-transform: uppercase; }\n  h2 {\n  font-size: 42px;\n  font-weight: bold;\n  line-height: 1.1em;\n  margin: 0px; }\n  h3 {\n  font-size: 24px;\n  margin-top: 20px;\n  margin-bottom: 10px; }\n  h4 {\n  font-size: 18px; }\n  .editable-container {\n  transition: background 1s;\n  border: 1px solid transparent;\n  border-radius: 5px;\n  padding: 1rem; }\n  .editable-container .editable:focus {\n    outline: 0px solid transparent; }\n  .editable-container.active {\n  background-color: #fff; }\n  .editable-container.basic.active {\n  background-color: #866c87; }\n  .editable-container:hover {\n  border: 1px solid #17a2b8;\n  border-radius: 5px; }\n  .col-image-layout-0 {\n  background: #F2F2F2;\n  color: black;\n  text-align: center;\n  border-left: 30px #3376A2 solid; }\n  .topall {\n  padding-top: 25px;\n  padding-bottom: 25px; }\n  .col-image-layout-1 {\n  text-align: -webkit-center; }\n  .col-image-layout-2 {\n  background: #CBCBCB;\n  padding: 5px;\n  border-radius: 50%;\n  height: 200px;\n  width: 200px; }\n  .col-image-layout-3 {\n  background: #FFFFFF;\n  padding: 5px;\n  border-radius: 50%;\n  height: 190px; }\n  .col-image-layout-4 {\n  background: #595959;\n  border-radius: 50%;\n  height: 180px;\n  width: 180px; }\n  .col-layout-0 {\n  padding-top: 20px; }\n  .col-info-1 {\n  list-style: none; }\n  .li-layout {\n  padding: 5px;\n  text-align: left; }\n  .editable-container .icon-container {\n  background: #3376A2; }\n  .editable-container .icon-container img {\n    width: 45px;\n    height: 45px; }\n  .icons {\n  float: left;\n  width: 10%;\n  background: #3376A2;\n  padding: 0px !important;\n  border-radius: 50%;\n  margin-left: -30px; }\n  .contact-label {\n  margin-left: 10px;\n  margin-top: 2px; }\n  label {\n  display: inline-block;\n  max-width: 100%;\n  margin-bottom: 5px;\n  font-weight: 700; }\n  .icon-container {\n  background: #3376A2; }\n  .head-icons {\n  float: left;\n  width: 20%;\n  background: #3376A2;\n  padding: 7px !important;\n  border-radius: 50%;\n  margin-left: -45px;\n  border: 3px #C8C7C7 solid; }\n  .label-header {\n  margin-left: 10px;\n  margin-top: -10px; }\n  .icon-container-0 {\n  background: #555;\n  padding: 2px;\n  border-radius: 15px; }\n  .content-head-icons {\n  float: left;\n  width: 12%;\n  background: #3376A2;\n  padding: 7px !important;\n  border-radius: 50%;\n  margin-left: -45px;\n  border: 3px #C8C7C7 solid; }\n  .content-label-header {\n  margin-left: 10px;\n  margin-top: -8px; }\n"

/***/ }),

/***/ "./src/components/resume3/resume3.component.ts":
/*!*****************************************************!*\
  !*** ./src/components/resume3/resume3.component.ts ***!
  \*****************************************************/
/*! exports provided: Resume3Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Resume3Component", function() { return Resume3Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_services_json_resume_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/services/json-resume.service */ "./src/services/json-resume.service.ts");
/* harmony import */ var _resume_editor_resume_editor_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../resume-editor/resume-editor.component */ "./src/components/resume-editor/resume-editor.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Resume3Component = /** @class */ (function () {
    function Resume3Component(ResumeJsonService, injector) {
        this.ResumeJsonService = ResumeJsonService;
        this.injector = injector;
        this.onEdit = false;
        this.ResumeEditorComponent = this.injector.get(_resume_editor_resume_editor_component__WEBPACK_IMPORTED_MODULE_2__["ResumeEditorComponent"]);
    }
    Resume3Component.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription$ = this.ResumeJsonService.getResumeJson().subscribe(function (resumeJson) {
            console.log(resumeJson);
            _this.ResumeJson = resumeJson;
        });
        this.subscription$.add(this.ResumeJsonService.getCurrentStateEditor().subscribe(function (state) {
            _this.onEdit = state;
        }));
        this.subscription$.add(this.ResumeJsonService.getCurrentSectionEditing().subscribe(function (section) {
            console.log(section);
            _this.currentSectionEditing = section;
        }));
        this.ResumeEditorComponent.domObserver();
    };
    Resume3Component.prototype.deleteSection = function () {
        var parentComponent = this.injector.get(_resume_editor_resume_editor_component__WEBPACK_IMPORTED_MODULE_2__["ResumeEditorComponent"]);
        parentComponent.deleteSection();
    };
    Resume3Component.prototype.ngOnDestroy = function () {
        this.subscription$.unsubscribe();
        this.ResumeEditorComponent.domObserverDisconnect();
    };
    Resume3Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-resume3',
            template: __webpack_require__(/*! ./resume3.component.html */ "./src/components/resume3/resume3.component.html"),
            styles: [__webpack_require__(/*! ./resume3.component.scss */ "./src/components/resume3/resume3.component.scss")]
        }),
        __metadata("design:paramtypes", [src_services_json_resume_service__WEBPACK_IMPORTED_MODULE_1__["JsonResumeService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]])
    ], Resume3Component);
    return Resume3Component;
}());



/***/ }),

/***/ "./src/components/resume4/resume4.component.html":
/*!*******************************************************!*\
  !*** ./src/components/resume4/resume4.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"document row \">\r\n        <div class=\"col-12  content-container\" [style.background-color]=\" onEdit ? '#DCDBE0' : '#FFF'\">\r\n                <div class=\"content\">\r\n                        <div style=\"padding: 0 50px 30px 50px;\" *ngIf=\"ResumeJson?.basic\"  class=\"row col-row-1 basic editable-container\">\r\n                                <div class=\"col-sm-12\">\r\n                                    <p class=\"header-label-container\">\r\n                                        <label class=\"header-label editable\">R E S U M E</label>\r\n                                    </p>\r\n                                </div>\r\n                                <div class=\"col-sm-9 \" >\r\n                                   <h1 class=\"editable name\" style=\"margin-bottom: 0px; font-size: 60px; color: white\">{{ResumeJson.basic.name}}</h1>\r\n                                        <h3 class=\"editable jobtitle\" style=\"margin-top: 0px;\">{{ResumeJson.basic.jobtitle}}</h3>\r\n                                    <p></p>\r\n                                </div>\r\n                                <div class=\"col-sm-3\">\r\n                                    <img data-toggle=\"modal\"  style=\"height: 120px;\" data-target=\"#exampleModalCenter2\" class=\"profile\" [src]=\"ResumeJson?.basic.profile ? ResumeJson?.basic.profile : 'assets/images/Resume/profile-placeholder.jpg'\">\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row row-eq-height \" >\r\n                                <div class=\"col-sm-7 left-txt topall \" style=\"color: black; padding-left: 40px;\">\r\n                                    <!-- <p style=\"padding: 0 20px;\">Lorem ipsum dolor sit amet, consectetur adipisicing elitLorem ipsum dolor sit amet, consectetur adipisicing elitLorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit amet, consectetur adipisicing elitLorem ipsum dolor sit amet, consectetur adipisicing elitLorem ipsum dolor sit amet, consectetur</p>\r\n                                    <br> -->\r\n                               \r\n                                                <div class=\"editable-container professionalSummary\" *ngIf=\"ResumeJson?.professionalSummary\">\r\n                                                        <p [attr.data-index]=\"i\" class=\"editable editable-item summary\" *ngFor=\"let summary of ResumeJson?.professionalSummary.professionalSummary\" [innerHtml]=\"summary\"></p>\r\n                                                </div>\r\n\r\n                                                <table *ngIf=\"ResumeJson?.experience\" class=\"experience editable-container table-1\">\r\n                                                    <tbody>\r\n                                                    <tr class=\"table-head editable-item\">\r\n                                                        <th class=\"editable title table-head-content\" colspan=\"2\">{{ResumeJson.experience.title}} </th>\r\n                                                            <div class=\"editable-toolbar\" *ngIf=\"currentSectionEditing === 'experience'\">\r\n                                                                <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">\r\n                                                                        <label data-toggle=\"modal\" data-target=\"#exampleModalCenter\" class=\"btn btn-secondary \">\r\n                                                                        Add\r\n                                                                        </label>\r\n                                                                        <label (click)=\"deleteSection()\" class=\"btn btn-danger\">\r\n                                                                                <i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i>\r\n                                                                        </label>\r\n                                                                </div>\r\n                                                            </div>\r\n                                                    </tr>\r\n                                                    <tr [attr.data-index]=\"i\" class=\"editable-item\" *ngFor=\"let experience of ResumeJson?.experience.experience ; let i = index\"  >\r\n                                                        <td width=\"30%\" valign=\"top\"><p class=\"editable date table-content-inner\">{{experience.date}} </p></td>\r\n                                                        <td width=\"70%\">\r\n                                                            \r\n                                                                <strong style=\"text-transform: uppercase;color: #57CFFF;\" class=\"editable company\">{{experience.company}}</strong>\r\n                                                                <!-- <br><span style=\"color: #57CFFF;\">Web &amp; GraphicDesigner</span> -->\r\n                                                                <br>\r\n                                                                <ul class=\"p-0\">\r\n                                                                <li  *ngFor=\"let desc of experience.desc\" class=\"editable list-group desc-{{i}}\" >{{desc}}</li>\r\n                                    \r\n                                                                </ul>    \r\n                                                        </td>\r\n                                                    </tr>\r\n                                                   \r\n                                                </tbody>\r\n                                              </table>\r\n                                                <br>\r\n                                                <table *ngIf=\"ResumeJson?.education\" class=\"education editable-container table-1\">\r\n                                                    <tbody>\r\n                                                    <tr class=\"table-head editable-item\">\r\n                                                        <th class=\"editable title table-head-content\" colspan=\"2\">{{ResumeJson.education.title}} </th>\r\n                                                        <div class=\"editable-toolbar\" *ngIf=\"currentSectionEditing === 'education'\">\r\n                                                                <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">\r\n                                                                        <label data-toggle=\"modal\" data-target=\"#exampleModalCenter\" class=\"btn btn-secondary \">\r\n                                                                        Add\r\n                                                                        </label>\r\n                                                                        <label (click)=\"deleteSection()\" class=\"btn btn-danger\">\r\n                                                                                <i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i>\r\n                                                                        </label>\r\n                                                                </div>\r\n                                                        </div>\r\n                                                    </tr>\r\n                                                    <tr [attr.data-index]=\"i\" class=\"editable-item\" *ngFor=\"let education of ResumeJson?.education.education ; let i = index\"  >\r\n                                                        <td width=\"30%\" valign=\"top\"><p class=\"editable year table-content-inner\">{{education.year}} </p></td>\r\n                                                        <td width=\"70%\">\r\n                                                            \r\n                                                                <strong style=\"text-transform: uppercase;color: #57CFFF;\" class=\"editable school\">{{education.school}}</strong>\r\n                                                                <!-- <br><span style=\"color: #57CFFF;\">Web &amp; GraphicDesigner</span> -->\r\n                                                                <br>\r\n                                                                <ul class=\"p-0\">\r\n                                                                <li  class=\"editable list-group info1\" >{{education.info1}}</li>\r\n                                    \r\n                                                                </ul>    \r\n                                                        </td>\r\n                                                    </tr>\r\n                                                   \r\n                                                </tbody>\r\n                                              </table>\r\n                                              \r\n                                            <div *ngIf=\"ResumeJson?.skills\" class=\"skills editable-container text-left\">\r\n                                                <div class=\"editable-item\">\r\n                                                    <h4 class=\"title editable\">{{ResumeJson?.skills.title}}</h4>\r\n                                                    <div class=\"editable-toolbar\" *ngIf=\"currentSectionEditing === 'skills'\">\r\n                                                            <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">\r\n                                                                    <label data-toggle=\"modal\" data-target=\"#exampleModalCenter\" class=\"btn btn-secondary \">\r\n                                                                    Add\r\n                                                                    </label>\r\n                                                                    <label (click)=\"deleteSection()\" class=\"btn btn-danger\">\r\n                                                                            <i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i>\r\n                                                                    </label>\r\n                                                            </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                                <p [attr.data-index]=\"i\"  *ngFor=\"let skill of ResumeJson?.skills.skills\" class=\" editable editable-item skill \">{{skill}}</p>\r\n                                            </div>\r\n                                            <div  class=\"references editable-container\" *ngIf=\"ResumeJson?.references\" >       \r\n                                                    <div class=\"editable-item\">\r\n                                                            <div class=\"editable-toolbar\" *ngIf=\"currentSectionEditing === 'references'\">\r\n                                                                            <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">\r\n                                                                                            <label data-toggle=\"modal\" data-target=\"#exampleModalCenter\" class=\"btn btn-secondary \">\r\n                                                                                            Add References\r\n                                                                                            </label>\r\n                                                                                            <label (click)=\"deleteSection()\" class=\"btn btn-danger\">\r\n                                                                                                    <i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i>\r\n                                                                                            </label>\r\n                                                                                            \r\n                                                                            </div>\r\n                                                            </div> \r\n                                                            <h4 class=\"editable title\">{{ResumeJson?.references.title}}</h4>\r\n                                                    </div>\r\n                                                    <div class=\"editable-item\" *ngFor=\"let reference of ResumeJson?.references.references\" >\r\n                                                            <p class=\"editable name\"><strong>{{reference.name}}</strong></p>\r\n                                                            <p class=\"editable contactNumber\">{{reference.contactNumber}}</p>\r\n                                                            <p class=\"editable address\">{{reference.address}}</p>\r\n                                                    </div>\r\n                                            </div>\r\n                                    \r\n                                </div>\r\n                                <div class=\"col-sm-5 topall col-image-layout-0\" style=\"padding-right: 40px;\">\r\n                                   \r\n                                    <div *ngIf=\"ResumeJson?.basic\" class=\"col-sm-12 col-layout-0  basic basic2 text-left\">\r\n                                        <h4 class=\"editable\">GET IN TOUCH</h4>\r\n                                        <p>\r\n                                            <img src=\"assets/images/template25/icon-1.png\" style=\"width: 40px; margin-right: 1em \">\r\n                                            <span class=\"editable phone\" style=\"margin-bottom: 0px;\">{{ResumeJson.basic.phone}}</span>\r\n                                        </p>\r\n                                        <p>\r\n                                            <img src=\"assets/images/template25/icon-2.png\" style=\"width: 40px; margin-right: 1em\">\r\n                                            <span class=\"editable email\" style=\"margin-bottom: 0px;\">{{ResumeJson.basic.email}}</span>\r\n                                        </p>\r\n                                        <p>\r\n                                            <img src=\"assets/images/template25/icon-3.png\" style=\"width: 40px; margin-right: 1em\">\r\n                                            <span class=\"editable address\" style=\"margin-bottom: 0px;\">{{ResumeJson.basic.address}}</span>\r\n                                        </p>\r\n                                        <br><br>\r\n                                    </div>\r\n                                    \r\n                                  \r\n                                   \r\n                                </div>\r\n                            </div>\r\n                </div>\r\n        </div>\r\n</div>\r\n<br>\r\n"

/***/ }),

/***/ "./src/components/resume4/resume4.component.scss":
/*!*******************************************************!*\
  !*** ./src/components/resume4/resume4.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".basic.editable-container.active {\n  background-color: #15516a !important; }\n\n.editable-container.basic.basic2.active {\n  background-color: #fff !important; }\n\ntr, li, p {\n  font-size: 13px; }\n\n* {\n  font-family: Courier New,Courier,Lucida Sans Typewriter,Lucida Typewriter,monospace; }\n\n.left-txt h3 {\n  color: #866c87; }\n\n.topall {\n  padding-top: 60px;\n  padding-bottom: 60px; }\n\n.container {\n  margin-bottom: 40px; }\n\nimg {\n  width: 100%; }\n\n.col-sm-9.left-txt.topall {\n  padding-left: 5%;\n  padding-right: 5%; }\n\n.row-eq-height {\n  display: flex; }\n\nh2 {\n  font-size: 42px;\n  font-weight: bold;\n  line-height: 1.1em;\n  margin: 0px; }\n\n.col-sm-3.topall p {\n  padding-left: 15%;\n  line-height: 1.2em;\n  margin: 0px; }\n\n.dash {\n  border: 0 none;\n  border-top: 2px dotted;\n  background: none;\n  height: 0; }\n\n.col-image-layout-0 {\n  color: black;\n  text-align: center; }\n\n.col-image-layout-1 {\n  background: #D1D2D4;\n  text-align: -webkit-center;\n  margin: -160px 90px 0px;\n  border: 10px #595959 solid; }\n\n.col-layout-0 {\n  padding-top: 20px; }\n\n.col-info-1 {\n  list-style: none; }\n\n.li-layout {\n  padding: 5px;\n  text-align: left; }\n\n.icons {\n  float: left;\n  width: 10%;\n  background: #3376A2;\n  padding: 0px !important;\n  border-radius: 50%;\n  margin-left: -30px; }\n\n.head-icons {\n  float: left;\n  width: 20%;\n  background: #3376A2;\n  padding: 7px !important;\n  border-radius: 50%;\n  margin-left: -45px;\n  border: 3px #C8C7C7 solid; }\n\n.content-head-icons {\n  float: left;\n  width: 12%;\n  background: #3376A2;\n  padding: 7px !important;\n  border-radius: 50%;\n  margin-left: -45px;\n  border: 3px #C8C7C7 solid; }\n\n.contact-label {\n  margin-left: 10px;\n  margin-top: 2px; }\n\n.icon-container {\n  background: #3376A2; }\n\n.icon-container-0 {\n  background: #555;\n  padding: 2px;\n  border-radius: 15px; }\n\n.label-header {\n  margin-left: 10px;\n  margin-top: -10px; }\n\n.content-label-header {\n  margin-left: 10px;\n  margin-top: -8px; }\n\n.dot {\n  height: 10px;\n  width: 10px;\n  background-color: #BFBFBF;\n  border-radius: 50%;\n  display: inline-block;\n  margin-left: 10px;\n  margin-bottom: -3px; }\n\n.col-row-1 {\n  background: #57CFFF;\n  border-bottom: 10px #595959 solid; }\n\n.header-label-container {\n  margin-left: 5%;\n  width: 100%; }\n\n.header-label {\n  background: #595959;\n  color: white;\n  padding: 0 20px; }\n\n.table-1 {\n  border-top: 1px #595959 solid;\n  border-left: 1px #595959 solid;\n  width: 100%; }\n\n.table-head {\n  background: #595959;\n  color: white; }\n\n.table-head-content {\n  padding: 3px 10px; }\n\n.table-content-inner {\n  border-left: 5px #595959 solid;\n  padding-left: 10px; }\n\n.table-content-inner-1 {\n  padding-left: 35px;\n  margin-left: -30px;\n  text-align: left;\n  padding-top: 10px; }\n\n.progress {\n  margin: 5px 0 0 15px; }\n\n.progress-bar {\n  background-color: #57CFFF; }\n\ninput[type=range] {\n  display: inline-block;\n  width: 85%;\n  margin-top: 15px; }\n\n#demo {\n  margin: 0px 15px; }\n"

/***/ }),

/***/ "./src/components/resume4/resume4.component.ts":
/*!*****************************************************!*\
  !*** ./src/components/resume4/resume4.component.ts ***!
  \*****************************************************/
/*! exports provided: Resume4Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Resume4Component", function() { return Resume4Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_services_json_resume_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/services/json-resume.service */ "./src/services/json-resume.service.ts");
/* harmony import */ var _resume_editor_resume_editor_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../resume-editor/resume-editor.component */ "./src/components/resume-editor/resume-editor.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Resume4Component = /** @class */ (function () {
    function Resume4Component(ResumeJsonService, injector) {
        this.ResumeJsonService = ResumeJsonService;
        this.injector = injector;
    }
    Resume4Component.prototype.ngOnInit = function () {
        var _this = this;
        this.ResumeEditorComponent = this.injector.get(_resume_editor_resume_editor_component__WEBPACK_IMPORTED_MODULE_2__["ResumeEditorComponent"]);
        this.subscription$ = this.ResumeJsonService.getResumeJson().subscribe(function (resumeJson) {
            console.log(resumeJson);
            _this.ResumeJson = resumeJson;
        });
        this.subscription$.add(this.ResumeJsonService.getCurrentStateEditor().subscribe(function (state) {
            _this.onEdit = state;
        }));
        this.subscription$.add(this.ResumeJsonService.getCurrentSectionEditing().subscribe(function (section) {
            console.log(section);
            _this.currentSectionEditing = section;
        }));
        this.ResumeEditorComponent.domObserver();
    };
    Resume4Component.prototype.deleteSection = function () {
        var parentComponent = this.injector.get(_resume_editor_resume_editor_component__WEBPACK_IMPORTED_MODULE_2__["ResumeEditorComponent"]);
        parentComponent.deleteSection();
    };
    Resume4Component.prototype.ngOnDestroy = function () {
        this.subscription$.unsubscribe();
        this.ResumeEditorComponent.domObserverDisconnect();
    };
    Resume4Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-resume4',
            template: __webpack_require__(/*! ./resume4.component.html */ "./src/components/resume4/resume4.component.html"),
            styles: [__webpack_require__(/*! ./resume4.component.scss */ "./src/components/resume4/resume4.component.scss")]
        }),
        __metadata("design:paramtypes", [src_services_json_resume_service__WEBPACK_IMPORTED_MODULE_1__["JsonResumeService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]])
    ], Resume4Component);
    return Resume4Component;
}());



/***/ }),

/***/ "./src/components/resume5/resume5.component.html":
/*!*******************************************************!*\
  !*** ./src/components/resume5/resume5.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"document row row-eq-height\"  [style.background-color]=\" onEdit ? '#DCDBE0' : '#FFF'\" #document>\r\n    <div class=\"col-sm-3 topall col-parent-left\" style=\"background:#215968;color: white;text-align: center;\">\r\n        <div class=\"basic\">\r\n            <div class=\"col-image-layout-2\">\r\n                <img data-toggle=\"modal\" data-target=\"#exampleModalCenter2\" class=\"col-image-layout-3 profile\" [src]=\"ResumeJson?.basic.profile ? ResumeJson?.basic.profile : 'assets/images/Resume/profile-placeholder.jpg'\"/>\r\n            </div>\r\n        </div>\r\n        <div class=\"skills text-left\" *ngIf=\"ResumeJson?.skills\" >\r\n            <div class=\"\">\r\n                <div class=\"editable-toolbar\" *ngIf=\"currentSectionEditing === 'skills'\">\r\n                    <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">\r\n                        <label data-toggle=\"modal\" data-target=\"#exampleModalCenter\" class=\"btn btn-secondary \">\r\n                        Add\r\n                        </label>\r\n                        <label (click)=\"deleteSection()\" class=\"btn btn-danger\">\r\n                            <i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i>\r\n                        </label>\r\n                    </div>\r\n                </div>\r\n                <h5 style=\"font-size: 21px; color: #fff; text-decoration: underline; text-transform: uppercase\"><strong class=\"editable title\" [innerHtml]=\"ResumeJson?.skills.title\" ></strong></h5>\r\n            </div>\r\n            <ul class=\"px-3\">\r\n                <li *ngFor=\"let skill of ResumeJson?.skills.skills\"  class=\"editable skill\" [innerHtml]=\"skill\"></li>\r\n            </ul>   \r\n        </div>\r\n    </div>\r\n    <div class=\"content-container col-sm-9 left-txt topall\" style=\"color: black;\" [style.background-color]=\" onEdit ? '#DCDBE0' : '#FFF'\" >\r\n        <div class=\"content\">\r\n            <div class=\"basic\">\r\n                <h2 style=\"color: #000; font-size: 58px; font-family: Tahoma, Geneva, sans-serif;\"  id=\"name\"  class=\"name editable\" [innerHtml]=\"ResumeJson?.basic.name\"></h2>\r\n                <p>Mobile: <span class=\"editable phone\" [innerHtml]=\"ResumeJson?.basic.phone\"></span> &nbsp;|&nbsp; <span class=\"editable email\" [innerHtml]=\"ResumeJson?.basic.email\"></span></p>        \r\n            </div>\r\n            <div style=\"background-color: #F2F2F2;\" class=\"professionalSummary editable-container\" *ngIf=\"ResumeJson?.professionalSummary\">\r\n                <div class=\"editable-item\">\r\n                    <h3 style=\"font-size: 21px; color: #404040;\"><strong class=\"editable title\" [innerHtml]=\"ResumeJson?.professionalSummary.title\"></strong></h3>\r\n                 \r\n                    <div class=\"editable-toolbar\" *ngIf=\"currentSectionEditing === 'professionalSummary'\">\r\n                        <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">\r\n                                <label data-toggle=\"modal\" data-target=\"#exampleModalCenter\" class=\"btn btn-secondary \">\r\n                                Add\r\n                                </label>\r\n                                <label (click)=\"deleteSection()\" class=\"btn btn-danger\">\r\n                                        <i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i>\r\n                                </label>\r\n                        </div>\r\n                </div>\r\n                </div>\r\n                <p style=\"font-size: 13px;\" class=\"editable-item editable summary\" *ngFor=\"let summary of ResumeJson?.professionalSummary.professionalSummary\" [innerHtml]=\"summary\"></p>\r\n\r\n            </div>\r\n            <div class=\"education editable-container\" *ngIf=\"ResumeJson?.education\">\r\n                <div class=\"editable-item\">\r\n                    <div class=\"editable-toolbar\" *ngIf=\"currentSectionEditing === 'education'\">\r\n                        <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">\r\n                            <label data-toggle=\"modal\" data-target=\"#exampleModalCenter\" class=\"btn btn-secondary \">\r\n                            Add\r\n                            </label>\r\n                            <label (click)=\"deleteSection()\" class=\"btn btn-danger\">\r\n                                <i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i>\r\n                            </label>\r\n                        </div>\r\n                    </div> \r\n                    <h3 style=\"font-size: 21px; color: #404040;\"><strong class=\"editable title\" [innerHtml]=\"ResumeJson?.education.title\"></strong></h3>\r\n                </div>\r\n                <div *ngFor=\"let education of ResumeJson?.education.education\" class=\"editable-item\">\r\n                    <strong class=\"editable\"><span style=\"font-size: 12px\"> Bachelor of Commerce</span></strong> <!-- course -->\r\n                    <p><span style=\"font-size: 12px\" class=\"editable info1\" ><i [innerHtml]=\"education.info1\"></i></span></p>\r\n                    <p style=\"font-size: 12px\" class=\"editable\"><span class=\"school\" [innerHtml]=\"education.school\"></span> <span contenteditable=\"false\">&nbsp;//&nbsp;</span>  <span class=\"year\">{{education.year}}</span> </p>\r\n                </div>   \r\n            </div>\r\n            <div class=\"editable-container experience\" *ngIf=\"ResumeJson?.experience\" dnd-sortable-container [sortableData]=\"ResumeJson?.experience.experience\">\r\n                <div class=\"editable-item\">\r\n                    <div class=\"editable-toolbar\" *ngIf=\"currentSectionEditing === 'experience'\">\r\n                        <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">\r\n                            <label data-toggle=\"modal\" data-target=\"#exampleModalCenter\" class=\"btn btn-secondary \">\r\n                            Add\r\n                            </label>\r\n                            <label (click)=\"deleteSection()\" class=\"btn btn-danger\">\r\n                                <i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i>\r\n                            </label>\r\n                        </div>\r\n                    </div> \r\n                    <h3 style=\"font-size: 21px; color: #404040;\"><strong class=\"editable title\" [innerHtml]=\"ResumeJson?.experience.title\" ></strong></h3>\r\n                </div>\r\n                <div class=\"editable-item\" *ngFor=\"let experience of ResumeJson?.experience.experience ; let i = index\" dnd-sortable [sortableIndex]=\"i\"> \r\n                    <strong><span style=\"font-size: 12px\" class=\"editable position\" >Graphic/Web Designer </span><span clas=\"editable\" class=\"editable date\" style=\"float: right;\" [innerHtml]=\"experience.date\"></span></strong>\r\n                    <p class=\"editable\"><span style=\"font-size: 12px\" class=\"company\" [innerHtml]=\"experience.company\"></span><span contenteditable=\"false\">&nbsp;/&nbsp;</span><span [innerHtml]=\"experience.date\"></span></p>\r\n                    <p style=\"font-size: 12px\" *ngFor=\"let desc of experience.desc\" class=\"editable desc-{{i}}\" [innerHtml]=\"desc\" ></p>             \r\n                </div>\r\n            </div>\r\n            <div  class=\"references editable-container\" *ngIf=\"ResumeJson?.references\" >       \r\n                <div class=\"editable-item\">\r\n                        <div class=\"editable-toolbar\" *ngIf=\"currentSectionEditing === 'references'\">\r\n                                        <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">\r\n                                                        <label data-toggle=\"modal\" data-target=\"#exampleModalCenter\" class=\"btn btn-secondary \">\r\n                                                        Add \r\n                                                        </label>\r\n                                                        <label (click)=\"deleteSection()\" class=\"btn btn-danger\">\r\n                                                                <i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i>\r\n                                                        </label>\r\n                                                        \r\n                                        </div>\r\n                        </div> \r\n                        <h3 class=\"editable title\" style=\"font-size: 21px;\"><strong [innerHtml]=\"ResumeJson?.references.title\"></strong></h3>\r\n                </div>\r\n                <div class=\"editable-item\" *ngFor=\"let reference of ResumeJson?.references.references\" >\r\n                        <p class=\"editable name\"><strong>{{reference.name}}</strong></p>\r\n                        <p class=\"editable contactNumber\">{{reference.contactNumber}}</p>\r\n                        <p class=\"editable address\">{{reference.address}}</p>\r\n                </div>\r\n        </div>\r\n          \r\n        </div>\r\n    </div>\r\n</div>\r\n<br>"

/***/ }),

/***/ "./src/components/resume5/resume5.component.scss":
/*!*******************************************************!*\
  !*** ./src/components/resume5/resume5.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".editable-item strong span {\n  color: #215968; }\n\n.basic {\n  padding: 1rem; }\n\nbody {\n  background: gray !important; }\n\nh3 {\n  text-transform: uppercase; }\n\n.topall {\n  padding-top: 60px;\n  padding-bottom: 60px; }\n\n.container {\n  margin-bottom: 40px; }\n\n.col-sm-9.left-txt.topall {\n  padding-left: 3%;\n  padding-right: 3%; }\n\n.row-eq-height {\n  display: flex; }\n\nh2 {\n  font-size: 42px;\n  font-weight: bold;\n  line-height: 1.1em;\n  margin: 0px; }\n\n.col-sm-3.topall p {\n  padding-left: 15%;\n  line-height: 1.2em;\n  margin: 0px; }\n\n.dash {\n  border: 0 none;\n  border-top: 2px dotted;\n  background: none;\n  height: 0; }\n\n.col-parent-left {\n  position: relative;\n  width: 350px; }\n\n.col-child-left {\n  position: absolute;\n  left: -10px; }\n\n.icons {\n  float: left;\n  width: 85%; }\n\n@media (max-width: 1091px) and (min-width: 845px) {\n  .col-parent-left {\n    width: 40% !important; } }\n\n@media (max-width: 844px) {\n  .col-parent-left {\n    width: 40% !important; }\n  .icons {\n    width: 55% !important;\n    margin-left: -25px; } }\n\n.col-image-layout-2 {\n  background: #CBCBCB;\n  padding: 5px;\n  border-radius: 50%;\n  height: 130px;\n  width: 130px;\n  margin: 0 auto; }\n\n.col-image-layout-3 {\n  background: #FFFFFF;\n  padding: 5px;\n  border-radius: 50%;\n  height: 120px;\n  width: 120px; }\n\n.col-image-layout-4 {\n  background: #595959;\n  border-radius: 50%;\n  height: 150px;\n  width: 150px; }\n\nh6 {\n  font-size: 13px; }\n\nli {\n  font-size: 13px; }\n"

/***/ }),

/***/ "./src/components/resume5/resume5.component.ts":
/*!*****************************************************!*\
  !*** ./src/components/resume5/resume5.component.ts ***!
  \*****************************************************/
/*! exports provided: Resume5Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Resume5Component", function() { return Resume5Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_services_json_resume_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/services/json-resume.service */ "./src/services/json-resume.service.ts");
/* harmony import */ var _resume_editor_resume_editor_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../resume-editor/resume-editor.component */ "./src/components/resume-editor/resume-editor.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Resume5Component = /** @class */ (function () {
    function Resume5Component(ResumeJsonService, injector) {
        this.ResumeJsonService = ResumeJsonService;
        this.injector = injector;
        this.onEdit = false;
        this.ResumeEditorComponent = this.injector.get(_resume_editor_resume_editor_component__WEBPACK_IMPORTED_MODULE_2__["ResumeEditorComponent"]);
    }
    Resume5Component.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription$ = this.ResumeJsonService.getResumeJson().subscribe(function (resumeJson) {
            console.log(resumeJson);
            _this.ResumeJson = resumeJson;
        });
        this.subscription$.add(this.ResumeJsonService.getCurrentStateEditor().subscribe(function (state) {
            _this.onEdit = state;
        }));
        this.subscription$.add(this.ResumeJsonService.getCurrentSectionEditing().subscribe(function (section) {
            console.log(section);
            _this.currentSectionEditing = section;
        }));
        this.ResumeEditorComponent.domObserver();
    };
    Resume5Component.prototype.deleteSection = function () {
        var parentComponent = this.injector.get(_resume_editor_resume_editor_component__WEBPACK_IMPORTED_MODULE_2__["ResumeEditorComponent"]);
        parentComponent.deleteSection();
    };
    Resume5Component.prototype.ngOnDestroy = function () {
        this.subscription$.unsubscribe();
        this.ResumeEditorComponent.domObserverDisconnect();
    };
    Resume5Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-resume5',
            template: __webpack_require__(/*! ./resume5.component.html */ "./src/components/resume5/resume5.component.html"),
            styles: [__webpack_require__(/*! ./resume5.component.scss */ "./src/components/resume5/resume5.component.scss")]
        }),
        __metadata("design:paramtypes", [src_services_json_resume_service__WEBPACK_IMPORTED_MODULE_1__["JsonResumeService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]])
    ], Resume5Component);
    return Resume5Component;
}());



/***/ }),

/***/ "./src/components/resume6/resume6.component.html":
/*!*******************************************************!*\
  !*** ./src/components/resume6/resume6.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"document  row row-eq-height\" [style.background-color]=\" onEdit ? '#DCDBE0' : '#FFF'\" #document>\r\n  <div class=\"col-sm-12 pt-5 content-container\">\r\n    <div class=\"content\">\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-3\">\r\n          <div class=\"col-image-layout-2\">\r\n            <img data-toggle=\"modal\" data-target=\"#exampleModalCenter2\" class=\"col-image-layout-3 profile\" [src]=\"ResumeJson?.basic.profile ? ResumeJson?.basic.profile : 'assets/images/Resume/profile-placeholder.jpg'\" />\r\n          </div>\r\n        </div>\r\n        <div class=\"basic col-sm-9\">\r\n          <h1 class=\"editable name\" [textContent]=\"ResumeJson?.basic.name\" style=\"font-size: 52px; color: #31849B;\"\r\n            [innerHtml]=\"ResumeJson?.basic.name\"></h1>\r\n          <h6 class=\"my-3 editable jobtitle\" style=\"font-size: 16px;\" [innerHtml]=\"ResumeJson?.basic.jobtitle\"></h6>\r\n          <hr>\r\n          <img src=\"/assets/images/1-T2.PNG\" alt=\"\"> <span class=\"editable phone\" style=\"font-size: 13px;\" [innerHtml]=\"ResumeJson?.basic.phone\"></span>\r\n          <span class=\"ml-3\"> <img src=\"/assets/images/2-T2.PNG\" alt=\"\"></span> <span class=\"editable email\" style=\"font-size: 13px;\"\r\n            [innerHtml]=\"ResumeJson?.basic.email\"></span>\r\n        </div>\r\n      </div>\r\n        <div class=\"col-sm-12 mt-3 px-5 professionalSummary editable-container\" *ngIf=\"ResumeJson?.professionalSummary\">\r\n\r\n          <div class=\"editable-item mb-2\">\r\n            <div class=\"editable-toolbar\" [style.display]=\"currentSectionEditing === 'professionalSummary' ? 'block' : 'none'\">\r\n              <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">\r\n                <label data-toggle=\"modal\" data-target=\"#exampleModalCenter\" class=\"btn btn-secondary \">\r\n                  Add\r\n                </label>\r\n                <label (click)=\"deleteSection()\" class=\"btn btn-danger\">\r\n                  <i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i>\r\n                </label>\r\n              </div>\r\n            </div>\r\n            <img style=\"float: left;height: 28px;\" src=\"/assets/images/3-T2.PNG\" alt=\"\">\r\n            <h3 class=\"editable title pl-3\" style=\"font-size:22px; color: #31849B;display: inline;\" [innerHtml]=\"ResumeJson?.professionalSummary.title\"></h3>\r\n          </div>\r\n          <p class=\"editable-item editable summary\" style='\r\n                  content: \"\";\r\n                  clear: both;\r\n                  display: table;\r\n                  margin-left: 2.7rem;\r\n                  font-size: 13px;\r\n                  '\r\n            *ngFor=\"let summary of ResumeJson?.professionalSummary.professionalSummary\" [innerHtml]=\"summary\"></p>\r\n          <div class=\"editable-item\">\r\n            <hr>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-12 px-5 editable-container education\" *ngIf=\"ResumeJson?.education\">\r\n          <div class=\"editable-item mb-2\">\r\n            <div class=\"editable-toolbar\" *ngIf=\"currentSectionEditing === 'education'\">\r\n              <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">\r\n                <label data-toggle=\"modal\" data-target=\"#exampleModalCenter\" class=\"btn btn-secondary \">\r\n                  Add Education\r\n                </label>\r\n                <label (click)=\"deleteSection()\" class=\"btn btn-danger\">\r\n                  <i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i>\r\n                </label>\r\n              </div>\r\n            </div>\r\n            <img style=\"float: left; height: 28px;\" src=\"/assets/images/4-T2.PNG\" alt=\"\">\r\n            <h3 class=\"pl-3 title editable\" style=\"font-size:22px; color: #31849B; display: inline;\" [innerHtml]=\"ResumeJson?.education.title\"></h3>\r\n          </div>\r\n          <div class=\"row  editable-item\" *ngFor=\"let education of ResumeJson?.education.education\">\r\n            <div class=\"col-sm-3\">\r\n              <h6 class=\"editable year\" style=\"font-size: 12px; color: #949290; margin-left: 3rem;\" [innerHtml]=\"education.year\"></h6>\r\n            </div>\r\n            <div class=\"col-sm-9 editable\">\r\n              <span style=\"font-size: 13px;\"><strong class=\"editable school\" [innerHtml]=\"education.school\"></strong><strong>\r\n                  :&nbsp; </strong></span><span style=\"font-size: 13px;\" class=\"editable info1\" [innerHtml]=\"education.info1\"></span>\r\n            </div>\r\n          </div>\r\n          <div class=\"editable-item\">\r\n            <hr>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-12 px-5 editable-container experience\" *ngIf=\"ResumeJson?.experience\" dnd-sortable-container\r\n          [sortableData]=\"ResumeJson?.experience.experience\">\r\n\r\n          <div class=\"editable-item\">\r\n            <div class=\"editable-toolbar\" *ngIf=\"currentSectionEditing === 'experience'\">\r\n              <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">\r\n                <label data-toggle=\"modal\" data-target=\"#exampleModalCenter\" class=\"btn btn-secondary \">\r\n                  Add Experience\r\n                </label>\r\n                <label (click)=\"deleteSection()\" class=\"btn btn-danger\">\r\n                  <i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i>\r\n                </label>\r\n              </div>\r\n            </div>\r\n            <img style=\"float: left;\" src=\"/assets/images/5-T2.PNG\" alt=\"\">\r\n            <h3 class=\"title editable pl-3\" style=\"font-size:22px; color: #31849B;display:inline;\" [innerHTML]=\"ResumeJson?.experience.title\"></h3>\r\n          </div>\r\n          <div class=\"row mt-3 editable-item\" *ngFor=\"let experience of ResumeJson?.experience.experience ; let i = index\"\r\n            dnd-sortable [sortableIndex]=\"i\">\r\n            <div class=\"col-sm-3 editable\">\r\n              <h6 class=\"company\" style=\"font-size: 12px; margin-left: 3rem\">{{experience.company}}</h6>\r\n              <h6 class=\"date\" style=\"font-size: 12px; color: #949290; margin-left: 3rem\">{{experience.date}}</h6>\r\n            </div>\r\n            <div class=\"col-sm-9 editable\">\r\n              <p style=\"float: right;font-size: 13px;\" *ngFor=\"let desc of experience.desc\" class=\"editable desc-{{i}}\"\r\n                [innerHTML]=\"desc\"></p>\r\n            </div>\r\n          </div>\r\n          <div class=\"editable-item\">\r\n            <hr>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-12 px-5 skills editable-container\" *ngIf=\"ResumeJson?.skills\">\r\n\r\n          <div class=\"editable-item mb-2\">\r\n            <div class=\"editable-item editable-toolbar\" *ngIf=\"currentSectionEditing === 'skills'\">\r\n              <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">\r\n                <label data-toggle=\"modal\" data-target=\"#exampleModalCenter\" class=\"btn btn-secondary \">\r\n                  Add Skill\r\n                </label>\r\n                <label (click)=\"deleteSection()\" class=\"btn btn-danger\">\r\n                  <i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i>\r\n                </label>\r\n                <!-- <label class=\"btn btn-secondary\">\r\n                          <input type=\"radio\" name=\"options\" id=\"option3\" autocomplete=\"off\"> Radio\r\n                        </label> -->\r\n              </div>\r\n            </div>\r\n            <img style=\"float: left;height: 28px;\" src=\"/assets/images/6-T2.PNG\" alt=\"\">\r\n            <h3 class=\"title editable pl-3\" style=\"font-size:22px; color: #31849B; display: inline;\" [innerHtml]=\"ResumeJson?.skills.title\"></h3>\r\n          </div>\r\n          <!-- <div class=\"row mt-3\">\r\n                  <div class=\"col-sm-3\">\r\n                    <h6 style=\"font-size: 12px;\">Diploma 1</h6>\r\n                  </div>\r\n                  <div class=\"col-sm-9\">\r\n                    <span style=\"font-size: 13px;\"  class=\"editable school\">Advanced</span>\r\n                  </div>\r\n                </div> -->\r\n          <p #skills *ngFor=\"let skill of ResumeJson?.skills.skills\" style='\r\n                content: \"\";\r\n                clear: both;\r\n                display: table;\r\n                margin-left: 2.7rem;\r\n                '\r\n            class=\"editable-item editable skill \">{{skill}}</p>\r\n        </div>\r\n      <div class=\"col-sm-12 references editable-container px-5\" *ngIf=\"ResumeJson?.references\">\r\n        <div class=\"editable-item mb-2\">\r\n          <div class=\"editable-toolbar\" *ngIf=\"currentSectionEditing === 'references'\">\r\n            <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">\r\n              <label data-toggle=\"modal\" data-target=\"#exampleModalCenter\" class=\"btn btn-secondary \">\r\n                Add \r\n              </label>\r\n              <label (click)=\"deleteSection()\" class=\"btn btn-danger\">\r\n                <i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i>\r\n              </label>\r\n\r\n            </div>\r\n          </div>\r\n          <img style=\"float: left;height: 28px;\" src=\"/assets/images/6-T2.PNG\" alt=\"\">\r\n          <h3 class=\"title editable pl-3\" style=\"font-size:22px; color: #31849B; display: inline;\" [innerHtml]=\"ResumeJson?.references.title\"></h3>\r\n        </div>\r\n        <div class=\"editable-item\" *ngFor=\"let reference of ResumeJson?.references.references\">\r\n          <p  style='\r\n          content: \"\";\r\n          clear: both;\r\n          display: table;\r\n          margin-left: 2.7rem;\r\n          ' class=\"editable name\"><strong [innerHtml]=\"reference.name\"></strong></p>\r\n          <p style=\"margin-left: 2.7rem;\" class=\"editable contactNumber\" [innerHtml]=\"reference.contactNumber\"></p>\r\n          <p style=\"margin-left: 2.7rem;\" class=\"editable address\" [innerHtml]=\"reference.address\"></p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<br>\r\n"

/***/ }),

/***/ "./src/components/resume6/resume6.component.scss":
/*!*******************************************************!*\
  !*** ./src/components/resume6/resume6.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content:nth-of-type(2) {\n  padding: 0 3rem; }\n\nbody {\n  background: gray !important; }\n\n.left-txt h3 {\n  color: #866c87; }\n\n.topall {\n  padding-top: 60px;\n  padding-bottom: 60px; }\n\n.container {\n  margin-bottom: 40px; }\n\n.col-sm-9.left-txt.topall {\n  padding-left: 3%;\n  padding-right: 3%; }\n\n.row-eq-height {\n  display: flex; }\n\nh2 {\n  font-size: 42px;\n  font-weight: bold;\n  line-height: 1.1em;\n  margin: 0px; }\n\n.col-sm-3.topall p {\n  padding-left: 15%;\n  line-height: 1.2em;\n  margin: 0px; }\n\n.dash {\n  border: 0 none;\n  border-top: 2px dotted;\n  background: none;\n  height: 0; }\n\n.col-parent-left {\n  position: relative;\n  width: 350px; }\n\n.col-child-left {\n  position: absolute;\n  left: -10px; }\n\n.icons {\n  float: left;\n  width: 85%; }\n\n@media (max-width: 1091px) and (min-width: 845px) {\n  .col-parent-left {\n    width: 40% !important; } }\n\n@media (max-width: 844px) {\n  .col-parent-left {\n    width: 40% !important; }\n  .icons {\n    width: 55% !important;\n    margin-left: -25px; } }\n\n.col-image-layout-2 {\n  background: #CBCBCB;\n  padding: 5px;\n  border-radius: 50%;\n  height: 130px;\n  width: 130px;\n  margin: 0 auto; }\n\n.col-image-layout-3 {\n  background: #FFFFFF;\n  padding: 5px;\n  border-radius: 50%;\n  height: 120px;\n  width: 120px; }\n\n.col-image-layout-4 {\n  background: #595959;\n  border-radius: 50%;\n  height: 150px;\n  width: 150px; }\n\nh6 {\n  font-size: 13px; }\n\nli {\n  font-size: 13px; }\n"

/***/ }),

/***/ "./src/components/resume6/resume6.component.ts":
/*!*****************************************************!*\
  !*** ./src/components/resume6/resume6.component.ts ***!
  \*****************************************************/
/*! exports provided: Resume6Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Resume6Component", function() { return Resume6Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_services_json_resume_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/services/json-resume.service */ "./src/services/json-resume.service.ts");
/* harmony import */ var _resume_editor_resume_editor_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../resume-editor/resume-editor.component */ "./src/components/resume-editor/resume-editor.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Resume6Component = /** @class */ (function () {
    function Resume6Component(ResumeJsonService, injector) {
        this.ResumeJsonService = ResumeJsonService;
        this.injector = injector;
        this.onEdit = false;
        this.transferData = { id: 1, msg: 'Hello' };
        this.receivedData = [];
        this.ResumeEditorComponent = this.injector.get(_resume_editor_resume_editor_component__WEBPACK_IMPORTED_MODULE_2__["ResumeEditorComponent"]);
    }
    Resume6Component.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription$ = this.ResumeJsonService.getResumeJson().subscribe(function (resumeJson) {
            console.log(resumeJson);
            _this.ResumeJson = resumeJson;
        });
        this.subscription$.add(this.ResumeJsonService.getCurrentStateEditor().subscribe(function (state) {
            _this.onEdit = state;
        }));
        this.subscription$.add(this.ResumeJsonService.getCurrentSectionEditing().subscribe(function (section) {
            console.log(section);
            _this.currentSectionEditing = section;
        }));
        this.ResumeEditorComponent.domObserver();
    };
    Resume6Component.prototype.transferDataSuccess = function ($event) {
        this.receivedData.push($event);
    };
    Resume6Component.prototype.deleteSection = function () {
        var parentComponent = this.injector.get(_resume_editor_resume_editor_component__WEBPACK_IMPORTED_MODULE_2__["ResumeEditorComponent"]);
        parentComponent.deleteSection();
    };
    Resume6Component.prototype.ngOnDestroy = function () {
        this.subscription$.unsubscribe();
        this.ResumeEditorComponent.domObserverDisconnect();
    };
    Resume6Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-resume6',
            template: __webpack_require__(/*! ./resume6.component.html */ "./src/components/resume6/resume6.component.html"),
            styles: [__webpack_require__(/*! ./resume6.component.scss */ "./src/components/resume6/resume6.component.scss")]
        }),
        __metadata("design:paramtypes", [src_services_json_resume_service__WEBPACK_IMPORTED_MODULE_1__["JsonResumeService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]])
    ], Resume6Component);
    return Resume6Component;
}());



/***/ }),

/***/ "./src/components/resume7/resume7.component.html":
/*!*******************************************************!*\
  !*** ./src/components/resume7/resume7.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"document row row-eq-height\"  [style.background-color]=\" onEdit ? '#DCDBE0' : '#FFF'\" #document>\r\n  <div class=\"content-container container\">\r\n    <div class=\"content\">\r\n      <div class=\"col-sm-12 mt-5\">\r\n        <div class=\"row\">\r\n          <div class=\"col-sm-3 basic editable-container\">\r\n            <div class=\"qwe\">\r\n              <h1 class=\"editable name\" [textContent]=\"ResumeJson?.basic.name\" style=\"font-size: 64px; writing-mode: vertical-lr;transform: rotate(180deg);color: #376899;\">{{ResumeJson?.basic.name}}</h1>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-sm-9\">\r\n            <div class=\"float-right basic editable-container\">\r\n              <p class=\"editable email\" style=\"font-size: 19px\">{{ResumeJson?.basic.email}}<span contenteditable=\"false\">&nbsp;|</span> <span class=\"editable phone\">&nbsp;{{ResumeJson?.basic.phone}}</span></p>\r\n            </div>\r\n            <div class=\"mt-5 editable-container education\" *ngIf=\"ResumeJson?.education\" >\r\n              <div class=\"editable-item editable-toolbar\" *ngIf=\"currentSectionEditing === 'education'\">\r\n                <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">\r\n                  <label data-toggle=\"modal\" data-target=\"#exampleModalCenter\" class=\"btn btn-secondary \">\r\n                  Add Education\r\n                  </label>\r\n                  <label (click)=\"deleteSection()\" class=\"btn btn-danger\">\r\n                          <i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i>\r\n                  </label>\r\n                </div>\r\n              </div>\r\n              <div class=\"editable-item\">\r\n                <h5 class=\"title editable\" style=\"color: #376899; font-size: 19px;\"><strong>{{ResumeJson?.education.title}}</strong></h5>\r\n              </div>\r\n              <div *ngFor=\"let education of ResumeJson?.education.education\" class=\"editable-item\">\r\n                <h6 class=\"editable school\" style=\"font-size: 15px; color: #949290;\">{{education.school}}</h6>\r\n                <h6 class=\"editable year\" style=\"font-size: 15px;\">{{education.year}}</h6>\r\n                <div class=\"ml-5\">\r\n                  <p class=\"editable info1\" style=\"font-size: 15px;\">{{education.info1}}</p>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"editable-container experience\" *ngIf=\"ResumeJson?.experience\" dnd-sortable-container [sortableData]=\"ResumeJson?.experience.experience\">\r\n              <div class=\"editable-item editable-toolbar\" *ngIf=\"currentSectionEditing === 'experience'\">\r\n                <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">\r\n                  <label data-toggle=\"modal\" data-target=\"#exampleModalCenter\" class=\"btn btn-secondary \">\r\n                  Add Experience\r\n                  </label>\r\n                  <label (click)=\"deleteSection()\" class=\"btn btn-danger\">\r\n                          <i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i>\r\n                  </label>\r\n                </div>\r\n              </div>\r\n              <div class=\"editable-item\">\r\n                <h5 class=\"title editable\" style=\"color: #376899; font-size: 19px;\"><strong>{{ResumeJson?.experience.title}}</strong></h5>\r\n              </div>\r\n              <div class=\"editable-item\" *ngFor=\"let experience of ResumeJson?.experience.experience ; let i = index\" dnd-sortable [sortableIndex]=\"i\">\r\n                <h6 class=\"editable company\" style=\"font-size: 15px; color: #949290;\">{{experience.company}}</h6>\r\n                <h6 class=\"editable date\" style=\"font-size: 15px;\">{{experience.date}}</h6>\r\n                <div class=\"ml-5\">\r\n                  <p *ngFor=\"let desc of experience.desc\" class=\"editable desc-{{i}}\" [innerHTML]=\"desc\" style=\"font-size: 15px;\">\r\n                  </p>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"skills editable-container\" *ngIf=\"ResumeJson?.skills\">\r\n              <div class=\"editable-item editable-toolbar\" *ngIf=\"currentSectionEditing === 'skills'\">\r\n                <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">\r\n                  <label data-toggle=\"modal\" data-target=\"#exampleModalCenter\" class=\"btn btn-secondary \">\r\n                  Add Skill\r\n                  </label>\r\n                  <label (click)=\"deleteSection()\" class=\"btn btn-danger\">\r\n                          <i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i>\r\n                  </label>\r\n                  <!-- <label class=\"btn btn-secondary\">\r\n                          <input type=\"radio\" name=\"options\" id=\"option3\" autocomplete=\"off\"> Radio\r\n                  </label> -->\r\n                </div>\r\n              </div>\r\n              <div class=\"editable-item\">\r\n                <h5 class=\"editable title\" style=\"color: #376899; font-size: 19px;\"><strong>{{ResumeJson?.skills.title}}</strong></h5>\r\n              </div>\r\n              <p #skills *ngFor=\"let skill of ResumeJson?.skills.skills\" class=\"editable-item editable skill m-0\">{{skill}}</p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/components/resume7/resume7.component.scss":
/*!*******************************************************!*\
  !*** ./src/components/resume7/resume7.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".preview {\n  margin: 3rem 11rem; }\n\n.document {\n  border: 1px solid #b4b4b4; }\n\n.document .content {\n    min-height: 1300px; }\n\n.document .editable-container {\n    transition: background 1s;\n    border: 1px solid transparent;\n    border-radius: 5px;\n    padding: 1rem; }\n\n.document .editable-container .editable:focus {\n      outline: 0px solid transparent; }\n\n.document .editable-container.active {\n    background-color: #fff; }\n\n.document .editable-container:hover {\n    border: 1px solid #17a2b8;\n    border-radius: 5px; }\n\nbody {\n  background: gray !important; }\n\n.left-txt h3 {\n  color: #866c87; }\n\n.topall {\n  padding-top: 60px;\n  padding-bottom: 60px; }\n\n.container {\n  margin-bottom: 40px; }\n\n.col-sm-9.left-txt.topall {\n  padding-left: 3%;\n  padding-right: 3%; }\n\n.row-eq-height {\n  display: flex; }\n\nh2 {\n  font-size: 42px;\n  font-weight: bold;\n  line-height: 1.1em;\n  margin: 0px; }\n\n.col-sm-3.topall p {\n  padding-left: 15%;\n  line-height: 1.2em;\n  margin: 0px; }\n\n.dash {\n  border: 0 none;\n  border-top: 2px dotted;\n  background: none;\n  height: 0; }\n\n.col-parent-left {\n  position: relative;\n  width: 350px; }\n\n.col-child-left {\n  position: absolute;\n  left: -10px; }\n\n.icons {\n  float: left;\n  width: 85%; }\n\n@media (max-width: 1091px) and (min-width: 845px) {\n  .col-parent-left {\n    width: 40% !important; } }\n\n@media (max-width: 844px) {\n  .col-parent-left {\n    width: 40% !important; }\n  .icons {\n    width: 55% !important;\n    margin-left: -25px; } }\n\n.col-image-layout-2 {\n  background: #CBCBCB;\n  padding: 5px;\n  border-radius: 50%;\n  height: 130px;\n  width: 130px;\n  margin: 0 auto; }\n\n.col-image-layout-3 {\n  background: #FFFFFF;\n  padding: 5px;\n  border-radius: 50%;\n  height: 120px; }\n\n.col-image-layout-4 {\n  background: #595959;\n  border-radius: 50%;\n  height: 150px;\n  width: 150px; }\n\nh6 {\n  font-size: 13px; }\n\nli {\n  font-size: 13px; }\n"

/***/ }),

/***/ "./src/components/resume7/resume7.component.ts":
/*!*****************************************************!*\
  !*** ./src/components/resume7/resume7.component.ts ***!
  \*****************************************************/
/*! exports provided: Resume7Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Resume7Component", function() { return Resume7Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_services_json_resume_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/services/json-resume.service */ "./src/services/json-resume.service.ts");
/* harmony import */ var _resume_editor_resume_editor_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../resume-editor/resume-editor.component */ "./src/components/resume-editor/resume-editor.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Resume7Component = /** @class */ (function () {
    function Resume7Component(ResumeJsonService, injector) {
        var _this = this;
        this.ResumeJsonService = ResumeJsonService;
        this.injector = injector;
        this.onEdit = false;
        this.transferData = { id: 1, msg: 'Hello' };
        this.receivedData = [];
        this.ResumeEditorComponent = this.injector.get(_resume_editor_resume_editor_component__WEBPACK_IMPORTED_MODULE_2__["ResumeEditorComponent"]);
        this.ResumeJsonService.getResumeJson().subscribe(function (resumeJson) {
            console.log(resumeJson);
            _this.ResumeJson = resumeJson;
        });
    }
    Resume7Component.prototype.ngOnInit = function () {
        var _this = this;
        this.ResumeJsonService.getCurrentStateEditor().subscribe(function (state) {
            _this.onEdit = state;
        });
        this.ResumeJsonService.getCurrentSectionEditing().subscribe(function (section) {
            console.log(section);
            _this.currentSectionEditing = section;
        });
    };
    Resume7Component.prototype.transferDataSuccess = function ($event) {
        this.receivedData.push($event);
    };
    Resume7Component.prototype.deleteSection = function () {
        var parentComponent = this.injector.get(_resume_editor_resume_editor_component__WEBPACK_IMPORTED_MODULE_2__["ResumeEditorComponent"]);
        parentComponent.deleteSection();
    };
    Resume7Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-resume7',
            template: __webpack_require__(/*! ./resume7.component.html */ "./src/components/resume7/resume7.component.html"),
            styles: [__webpack_require__(/*! ./resume7.component.scss */ "./src/components/resume7/resume7.component.scss")]
        }),
        __metadata("design:paramtypes", [src_services_json_resume_service__WEBPACK_IMPORTED_MODULE_1__["JsonResumeService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]])
    ], Resume7Component);
    return Resume7Component;
}());



/***/ }),

/***/ "./src/components/resume8/resume8.component.html":
/*!*******************************************************!*\
  !*** ./src/components/resume8/resume8.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"document\" [style.background-color]=\" onEdit ? '#DCDBE0' : '#FFF'\" #document>\r\n  <div class=\"content-container\">\r\n    <div class=\"content\">\r\n      <div class=\"basic my-5\">\r\n        <div class=\"profile_avatar\">\r\n          <img style=\"height:130px; width: 100%;\" data-toggle=\"modal\" data-target=\"#exampleModalCenter2\" class=\"mb-3 profile\"\r\n            [src]=\"ResumeJson?.basic.profile ? ResumeJson?.basic.profile : 'assets/images/Resume/profile-placeholder.jpg'\">\r\n        </div>\r\n        <div class=\"applicant_name_section\">\r\n          <h1 class=\"applicant_name editable name\" [innerHtml]=\"ResumeJson?.basic.name\"></h1>\r\n          <h6 class=\"applicant_address\">\r\n            <h6 class=\"address editable\" [innerHtml]=\"ResumeJson?.basic.address\" style=\"display: inline;\"> </h6> <span\r\n              contenteditable=\"false\">•</span>\r\n            <h6 class=\"email editable\" [innerHtml]=\"ResumeJson?.basic.email\" style=\"display: inline;\"> </h6> <span\r\n              contenteditable=\"false\">•</span>\r\n            <h6 class=\"phone editable\" [innerHtml]=\"ResumeJson?.basic.phone\" style=\"display: inline;\"> </h6>\r\n          </h6>\r\n        </div>\r\n      </div>\r\n      <div class=\"section editable-container professionalSummary\" *ngIf=\"ResumeJson?.professionalSummary\">\r\n        <div class=\"editable-item mb-3\">\r\n            <div class=\"editable-toolbar\" *ngIf=\"currentSectionEditing === 'professionalSummary'\">\r\n                <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">\r\n                    <label data-toggle=\"modal\" data-target=\"#exampleModalCenter\" class=\"btn btn-secondary \">\r\n                    Add\r\n                    </label>\r\n                    <label (click)=\"deleteSection()\" class=\"btn btn-danger\">\r\n                    <i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i>\r\n                    </label>\r\n                </div>\r\n            </div>\r\n          <h6 class=\"heading editable title\" [innerHtml]=\"ResumeJson?.professionalSummary.title\"></h6>\r\n          <div class=\"heading_border_bottom\"></div>\r\n        </div> \r\n        <p class=\"editable-item paragraph_section section_text summary editable\" *ngFor=\"let summary of ResumeJson?.professionalSummary.professionalSummary\"\r\n        [innerHtml]=\"summary\"></p>\r\n      </div>\r\n      <div class=\"section editable-container education\" *ngIf=\"ResumeJson?.education\">\r\n        <div class=\"editable-item mb-3\">\r\n          <div class=\"editable-toolbar\" *ngIf=\"currentSectionEditing === 'education'\">\r\n            <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">\r\n              <label data-toggle=\"modal\" data-target=\"#exampleModalCenter\" class=\"btn btn-secondary \">\r\n                Add\r\n              </label>\r\n              <label (click)=\"deleteSection()\" class=\"btn btn-danger\">\r\n                <i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i>\r\n              </label>\r\n            </div>\r\n          </div>\r\n          <h6 class=\"heading editable title\" [innerHtml]=\"ResumeJson?.education.title\"></h6>\r\n          <div class=\"heading_border_bottom\"></div>\r\n        </div>\r\n        <div class=\"paragraph_section editable-item mb-3\" [attr.data-index]=\"i\" *ngFor=\"let education of ResumeJson?.education.education; let i = index\">\r\n          <p class=\"section_text\"><span class=\"bolder_text editable school\" [innerHtml]=\"education.school\"></span></p>\r\n          <p class=\"section_text\"><span class=\"editable info1\" [innerHtml]=\"education.info1\"></span> &nbsp; <span class=\"editable year bolder_text\"\r\n              [innerHtml]=\"education.year\"></span></p>\r\n        </div>\r\n      </div>\r\n      <div class=\"section editable-container skills\" *ngIf=\"ResumeJson?.skills\">\r\n        <div class=\"editable-item mb-3\">\r\n            <div class=\"editable-toolbar\" *ngIf=\"currentSectionEditing === 'skills'\">\r\n                <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">\r\n                    <label data-toggle=\"modal\" data-target=\"#exampleModalCenter\" class=\"btn btn-secondary \">\r\n                    Add\r\n                    </label>\r\n                    <label (click)=\"deleteSection()\" class=\"btn btn-danger\">\r\n                    <i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i>\r\n                    </label>\r\n                </div>\r\n            </div>\r\n            <h6 class=\"heading editable title\" [innerHtml]=\"ResumeJson?.skills.title\"></h6>\r\n            <div class=\"heading_border_bottom\"></div>\r\n        </div>\r\n        <p [attr.data-index]=\"i\" class=\"editable-item paragraph_section section_text skill editable\" *ngFor=\"let skill of ResumeJson?.skills.skills; let i = index\"\r\n        [innerHtml]=\"skill\"></p>\r\n      </div>\r\n      <div class=\"section editable-container experience\" *ngIf=\"ResumeJson?.experience\">\r\n        <div class=\"editable-item mb-3\">\r\n          <div class=\"editable-toolbar\" *ngIf=\"currentSectionEditing === 'experience'\">\r\n            <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">\r\n              <label data-toggle=\"modal\" data-target=\"#exampleModalCenter\" class=\"btn btn-secondary \">\r\n                Add\r\n              </label>\r\n              <label (click)=\"deleteSection()\" class=\"btn btn-danger\">\r\n                <i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i>\r\n              </label>\r\n            </div>\r\n          </div>\r\n          <h6 class=\"heading title editable\" [innerHtml]=\"ResumeJson?.experience.title\"></h6>\r\n          <div class=\"heading_border_bottom\"></div>\r\n        </div>\r\n        <div class=\"editable-item paragraph_section\" [attr.data-index]=\"i\" *ngFor=\"let experience of ResumeJson?.experience.experience ; let i = index\">\r\n          <p class=\"section_text\"><span class=\"bolder_text company\" [innerHtml]=\"experience.company\"></span> <span\r\n              class=\"bolder_text\" contenteditable=\"false\">/</span> <span class=\"bolder_text date\" [innerHtml]=\"experience.date\"></span></p>\r\n          <p *ngFor=\"let desc of experience.desc\" class=\"editable  section_text desc-{{i}}\" [innerHTML]=\"desc\"> </p>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"section editable-container references\" *ngIf=\"ResumeJson?.references\">\r\n            <div class=\"editable-item mb-3\">\r\n                <div class=\"editable-toolbar\" *ngIf=\"currentSectionEditing === 'references'\">\r\n                    <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">\r\n                        <label data-toggle=\"modal\" data-target=\"#exampleModalCenter\" class=\"btn btn-secondary \">\r\n                        Add\r\n                        </label>\r\n                        <label (click)=\"deleteSection()\" class=\"btn btn-danger\">\r\n                        <i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i>\r\n                        </label>\r\n                    </div>\r\n                </div>\r\n              <h6 class=\"heading editable title\" [innerHtml]=\"ResumeJson?.references.title\"></h6>\r\n              <div class=\"heading_border_bottom\"></div>\r\n            </div> \r\n            <div [attr.data-index]=\"i\" class=\"editable-item paragraph_section\" *ngFor=\"let reference of ResumeJson?.references.references; let i = index\" >\r\n                    <p class=\"editable name section_text bolder_text\">{{reference.name}}</p>\r\n                    <p class=\"editable contactNumber section_text\">{{reference.contactNumber}}</p>\r\n                    <p class=\"editable address section_text\">{{reference.address}}</p>\r\n            </div>\r\n          </div>\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/components/resume8/resume8.component.scss":
/*!*******************************************************!*\
  !*** ./src/components/resume8/resume8.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".profile_avatar {\n  height: 100px;\n  width: 100px;\n  margin: 0 auto; }\n  .profile_avatar img {\n    border-radius: 100px; }\n  .applicant_name_section {\n  text-align: center; }\n  .heading {\n  color: #4584BD;\n  width: 164px;\n  text-align: right; }\n  .heading_border_bottom {\n  border-top: 3px solid #4584BD;\n  width: 160px; }\n  .paragraph_section {\n  margin-left: 165px; }\n  .section_text {\n  text-align: left;\n  color: #989898; }\n  .bolder_text {\n  font-weight: 500;\n  color: black; }\n"

/***/ }),

/***/ "./src/components/resume8/resume8.component.ts":
/*!*****************************************************!*\
  !*** ./src/components/resume8/resume8.component.ts ***!
  \*****************************************************/
/*! exports provided: Resume8Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Resume8Component", function() { return Resume8Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _resume_editor_resume_editor_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../resume-editor/resume-editor.component */ "./src/components/resume-editor/resume-editor.component.ts");
/* harmony import */ var src_services_json_resume_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/services/json-resume.service */ "./src/services/json-resume.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Resume8Component = /** @class */ (function () {
    function Resume8Component(ResumeJsonService, injector) {
        this.ResumeJsonService = ResumeJsonService;
        this.injector = injector;
        this.onEdit = false;
        this.transferData = { id: 1, msg: 'Hello' };
        this.receivedData = [];
        this.ResumeEditorComponent = this.injector.get(_resume_editor_resume_editor_component__WEBPACK_IMPORTED_MODULE_1__["ResumeEditorComponent"]);
    }
    Resume8Component.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription$ = this.ResumeJsonService.getResumeJson().subscribe(function (resumeJson) {
            console.log(resumeJson);
            _this.ResumeJson = resumeJson;
        });
        this.subscription$.add(this.ResumeJsonService.getCurrentStateEditor().subscribe(function (state) {
            _this.onEdit = state;
        }));
        this.subscription$.add(this.ResumeJsonService.getCurrentSectionEditing().subscribe(function (section) {
            console.log(section);
            _this.currentSectionEditing = section;
        }));
        this.ResumeEditorComponent.domObserver();
    };
    Resume8Component.prototype.transferDataSuccess = function ($event) {
        this.receivedData.push($event);
    };
    Resume8Component.prototype.deleteSection = function () {
        var parentComponent = this.injector.get(_resume_editor_resume_editor_component__WEBPACK_IMPORTED_MODULE_1__["ResumeEditorComponent"]);
        parentComponent.deleteSection();
    };
    Resume8Component.prototype.ngOnDestroy = function () {
        this.subscription$.unsubscribe();
        this.ResumeEditorComponent.domObserverDisconnect();
    };
    Resume8Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-resume8',
            template: __webpack_require__(/*! ./resume8.component.html */ "./src/components/resume8/resume8.component.html"),
            styles: [__webpack_require__(/*! ./resume8.component.scss */ "./src/components/resume8/resume8.component.scss")]
        }),
        __metadata("design:paramtypes", [src_services_json_resume_service__WEBPACK_IMPORTED_MODULE_2__["JsonResumeService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]])
    ], Resume8Component);
    return Resume8Component;
}());



/***/ }),

/***/ "./src/components/resume9/resume9.component.html":
/*!*******************************************************!*\
  !*** ./src/components/resume9/resume9.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"document row row-eq-height\"  [style.background-color]=\" onEdit ? '#DCDBE0' : '#FFF'\" #document>\r\n  <div class=\"container mx-3 my-3\" >\r\n    <div class=\"mt-5 basic\">\r\n      <h1 class=\"editable name\" [innerHtml]=\"ResumeJson?.basic.name\" style=\"font-size: 96px;color: #2e74b5;\"></h1>\r\n      <img src=\"/assets/images/1-T3.png\" alt=\"\"><span class=\"editable phone\" [innerHtml]=\"ResumeJson?.basic.phone\"></span><span contenteditable=\"false\"> /</span>\r\n      <span>\r\n      <img src=\"/assets/images/2-T3.png\" alt=\"\">\r\n      </span>\r\n      <span class=\"editable email\" [innerHtml]=\"ResumeJson?.basic.email\"></span>\r\n    </div>\r\n    <div class=\"content-container\">\r\n      <div class=\"content\">\r\n        <div *ngIf=\"ResumeJson?.professionalSummary\" class=\"mt-5 editable-container professionalSummary\">\r\n          <div class=\"editable-item\">\r\n              <div class=\"editable-toolbar\" *ngIf=\"currentSectionEditing === 'professionalSummary'\">\r\n                <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">\r\n                  <label data-toggle=\"modal\" data-target=\"#exampleModalCenter\" class=\"btn btn-secondary \">\r\n                  Add\r\n                  </label>\r\n                  <label (click)=\"deleteSection()\" class=\"btn btn-danger\">\r\n                    <i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i>\r\n                  </label>\r\n                </div>\r\n              </div> \r\n              <h4 style=\"color: #2e74b5\" class=\"editable title\" [innerHtml]=\"ResumeJson?.professionalSummary.title\"></h4>\r\n          </div>\r\n          <p *ngFor=\"let summary of ResumeJson?.professionalSummary.professionalSummary\" class=\"summary editable-item editable\" [innerHtml]=\"summary\"></p>\r\n        </div>\r\n        <div class=\"mt-3 editable-container experience\" *ngIf=\"ResumeJson?.experience\" dnd-sortable-container [sortableData]=\"ResumeJson?.experience.experience\">\r\n          <div class=\"editable-item\">\r\n            <div class=\"editable-toolbar\" *ngIf=\"currentSectionEditing === 'experience'\">\r\n              <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">\r\n                <label data-toggle=\"modal\" data-target=\"#exampleModalCenter\" class=\"btn btn-secondary \">\r\n                Add\r\n                </label>\r\n                <label (click)=\"deleteSection()\" class=\"btn btn-danger\">\r\n                  <i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i>\r\n                </label>\r\n              </div>\r\n            </div>\r\n            <h4 style=\"color: #2e74b5; font-size: 26px\" class=\"editable title\" [innerHtml]=\"ResumeJson?.experience.title\"></h4>\r\n          </div>\r\n          <div>\r\n            <div class=\"row\">\r\n              <div class=\"col-sm-6 editable-item\" *ngFor=\"let experience of ResumeJson?.experience.experience ; let i = index\" dnd-sortable [sortableIndex]=\"i\">\r\n                <div>\r\n                  <h4 style=\"font-size:26px;\"><span class=\"editable date\" [innerHtml]=\"experience.date\"></span><span>&nbsp;&#9679;&nbsp;</span><span class=\"editable company\" [innerHtml]=\"experience.company\"></span></h4>  \r\n                  <ul>\r\n                    <li *ngFor=\"let desc of experience.desc\"  ><p> <span class=\"editable desc-{{i}}\" [innerHtml]=\"desc\"></span> </p></li>\r\n                  </ul>\r\n                </div> \r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"mt-3 editable-container education\" *ngIf=\"ResumeJson?.education\">\r\n          <div class=\"editable-item\">\r\n            <div class=\"editable-toolbar\" *ngIf=\"currentSectionEditing === 'education'\">\r\n              <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">\r\n                <label data-toggle=\"modal\" data-target=\"#exampleModalCenter\" class=\"btn btn-secondary \">\r\n                Add\r\n                </label>\r\n                <label (click)=\"deleteSection()\" class=\"btn btn-danger\">\r\n                  <i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i>\r\n                </label>\r\n              </div>\r\n            </div> \r\n            <h4 style=\"color: #2e74b5; font-size: 26px\" class=\"title editable\" [innerHtml]=\"ResumeJson?.education.title\"></h4>\r\n          </div>\r\n          <div>\r\n            <div class=\"row\">\r\n              <div class=\"col-sm-6 editable-item\" style=\"font-size:16px;\" *ngFor=\"let education of ResumeJson?.education.education\">\r\n              <p><span>&#9679; &nbsp;</span><span class=\"editable school\" [innerHtml]=\"education.school\"></span><span>&nbsp;&#9679;&nbsp;</span><span class=\"editable year\" [innerHtml]=\"education.year\"></span></p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div *ngIf=\"ResumeJson?.skills\" class=\"skills editable-container text-left\">\r\n          <div class=\"editable-item\">\r\n              <h4 class=\"title editable\" style=\"color: #2e74b5\">{{ResumeJson?.skills.title}}</h4>\r\n              <div class=\"editable-toolbar\" *ngIf=\"currentSectionEditing === 'skills'\">\r\n                      <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">\r\n                              <label data-toggle=\"modal\" data-target=\"#exampleModalCenter\" class=\"btn btn-secondary \">\r\n                              Add\r\n                              </label>\r\n                              <label (click)=\"deleteSection()\" class=\"btn btn-danger\">\r\n                                      <i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i>\r\n                              </label>\r\n                      </div>\r\n              </div>\r\n          </div>\r\n          <p [attr.data-index]=\"i\"  *ngFor=\"let skill of ResumeJson?.skills.skills\" class=\"ml-4 editable editable-item skill \">&#9679;&nbsp;<span [innerHtml]=\"skill\"></span></p>\r\n      </div>\r\n      <div  class=\"references editable-container\" *ngIf=\"ResumeJson?.references\" >       \r\n          <div class=\"editable-item\">\r\n                  <div class=\"editable-toolbar\" *ngIf=\"currentSectionEditing === 'references'\">\r\n                                  <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">\r\n                                                  <label data-toggle=\"modal\" data-target=\"#exampleModalCenter\" class=\"btn btn-secondary \">\r\n                                                  Add \r\n                                                  </label>\r\n                                                  <label (click)=\"deleteSection()\" class=\"btn btn-danger\">\r\n                                                          <i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i>\r\n                                                  </label>\r\n                                                  \r\n                                  </div>\r\n                  </div> \r\n                  <h4 class=\"editable title\" style=\"color: #2e74b5;\" [innerHtml]=\"ResumeJson?.references.title\"></h4>\r\n          </div>\r\n          <div class=\"editable-item\" *ngFor=\"let reference of ResumeJson?.references.references\" >\r\n                  <p class=\"ml-3\">\r\n                    &#9679; &nbsp;<span class=\"editable name\" [innerHtml]=\"reference.name\"></span> \r\n                    &nbsp; &#9679; &nbsp;<span class=\"editable contactNumber\" [innerHtml]=\"reference.contactNumber\"></span>\r\n                    &nbsp; &#9679; &nbsp;<span class=\"editable address\" [innerHtml]=\"reference.address\"></span>\r\n                  </p>\r\n          </div>  \r\n          \r\n    </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<br>"

/***/ }),

/***/ "./src/components/resume9/resume9.component.scss":
/*!*******************************************************!*\
  !*** ./src/components/resume9/resume9.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  background: gray !important; }\n\n.basic {\n  padding: 1rem; }\n\n.basic img {\n    height: 20px;\n    margin-right: 5px; }\n\n.topall {\n  padding-top: 60px;\n  padding-bottom: 60px; }\n\n.container {\n  margin-bottom: 40px; }\n\n.col-sm-9.left-txt.topall {\n  padding-left: 3%;\n  padding-right: 3%; }\n\n.row-eq-height {\n  display: flex; }\n\nh2 {\n  font-size: 42px;\n  font-weight: bold;\n  line-height: 1.1em;\n  margin: 0px; }\n\n.col-sm-3.topall p {\n  padding-left: 15%;\n  line-height: 1.2em;\n  margin: 0px; }\n\n.dash {\n  border: 0 none;\n  border-top: 2px dotted;\n  background: none;\n  height: 0; }\n\n.col-parent-left {\n  position: relative;\n  width: 350px; }\n\n.col-child-left {\n  position: absolute;\n  left: -10px; }\n\n.icons {\n  float: left;\n  width: 85%; }\n\n@media (max-width: 1091px) and (min-width: 845px) {\n  .col-parent-left {\n    width: 40% !important; } }\n\n@media (max-width: 844px) {\n  .col-parent-left {\n    width: 40% !important; }\n  .icons {\n    width: 55% !important;\n    margin-left: -25px; } }\n\n.col-image-layout-2 {\n  background: #CBCBCB;\n  padding: 5px;\n  border-radius: 50%;\n  height: 130px;\n  width: 130px;\n  margin: 0 auto; }\n\n.col-image-layout-3 {\n  background: #FFFFFF;\n  padding: 5px;\n  border-radius: 50%;\n  height: 120px; }\n\n.col-image-layout-4 {\n  background: #595959;\n  border-radius: 50%;\n  height: 150px;\n  width: 150px; }\n\n.profile_avatar {\n  background-color: #2E75B6;\n  height: 100px;\n  width: 100px;\n  margin: 0 auto;\n  border-radius: 100px;\n  margin-top: 100px; }\n\n.applicant_name_section {\n  text-align: center; }\n\n.applicant_name {\n  font-size: 60px; }\n\n.applicant_address {\n  font-size: 20px;\n  margin-top: 30px;\n  margin-bottom: 80px; }\n\n.heading {\n  margin-left: 50px;\n  font-size: 30px;\n  color: #4584BD; }\n\n.heading_border_bottom {\n  border-top: 3px solid #4584BD;\n  margin-top: -15px;\n  margin-left: 10px;\n  width: 150px; }\n\n.paragraph_section {\n  width: 60%;\n  margin: 0 auto;\n  padding-top: 20px; }\n\n.section_text {\n  text-align: left;\n  font-size: 20px;\n  line-height: 30px;\n  color: #989898; }\n\n.bolder_text {\n  font-weight: 500;\n  color: black;\n  font-size: 22px; }\n"

/***/ }),

/***/ "./src/components/resume9/resume9.component.ts":
/*!*****************************************************!*\
  !*** ./src/components/resume9/resume9.component.ts ***!
  \*****************************************************/
/*! exports provided: Resume9Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Resume9Component", function() { return Resume9Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_services_json_resume_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/services/json-resume.service */ "./src/services/json-resume.service.ts");
/* harmony import */ var _resume_editor_resume_editor_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../resume-editor/resume-editor.component */ "./src/components/resume-editor/resume-editor.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Resume9Component = /** @class */ (function () {
    function Resume9Component(ResumeJsonService, injector) {
        this.ResumeJsonService = ResumeJsonService;
        this.injector = injector;
        this.onEdit = false;
        this.ResumeEditorComponent = this.injector.get(_resume_editor_resume_editor_component__WEBPACK_IMPORTED_MODULE_2__["ResumeEditorComponent"]);
    }
    Resume9Component.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription$ = this.ResumeJsonService.getResumeJson().subscribe(function (resumeJson) {
            console.log(resumeJson);
            _this.ResumeJson = resumeJson;
        });
        this.subscription$.add(this.ResumeJsonService.getCurrentStateEditor().subscribe(function (state) {
            _this.onEdit = state;
        }));
        this.subscription$.add(this.ResumeJsonService.getCurrentSectionEditing().subscribe(function (section) {
            console.log(section);
            _this.currentSectionEditing = section;
        }));
        this.ResumeEditorComponent.domObserver();
    };
    Resume9Component.prototype.deleteSection = function () {
        var parentComponent = this.injector.get(_resume_editor_resume_editor_component__WEBPACK_IMPORTED_MODULE_2__["ResumeEditorComponent"]);
        parentComponent.deleteSection();
    };
    Resume9Component.prototype.ngOnDestroy = function () {
        this.subscription$.unsubscribe();
        this.ResumeEditorComponent.domObserverDisconnect();
    };
    Resume9Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-resume9',
            template: __webpack_require__(/*! ./resume9.component.html */ "./src/components/resume9/resume9.component.html"),
            styles: [__webpack_require__(/*! ./resume9.component.scss */ "./src/components/resume9/resume9.component.scss")]
        }),
        __metadata("design:paramtypes", [src_services_json_resume_service__WEBPACK_IMPORTED_MODULE_1__["JsonResumeService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]])
    ], Resume9Component);
    return Resume9Component;
}());



/***/ }),

/***/ "./src/components/signup/signup.component.html":
/*!*****************************************************!*\
  !*** ./src/components/signup/signup.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n\r\n<div class=\"py-5 bg-light\">\r\n<div class=\"container\">\r\n      <div class=\"row sec-1 justify-content-center \">\r\n        <div class=\"col-md-4 p-5\">\r\n            <h6>Create a resume you are proud of</h6>\r\n              <!-- <div class=\"row\">\r\n                <div class=\"col-1 \"><img class=\"content-icon\" src=\"assets/images/icon-1.png\"></div>\r\n                <div class=\"col\">\r\n                    <p class=\"m-0\">Save time with hassle free templates</p>\r\n                </div>\r\n              </div> -->\r\n              <ul class=\"px-0\">\r\n                <li class=\"my-4\"><span><img class=\"content-icon\" src=\"assets/images/icon-1.png\"> <p class=\"mx-2\">Save time with hassle free templates</p> </span></li>\r\n                <li class=\"my-4\"><span><img class=\"content-icon\" src=\"assets/images/icon-2.png\"> <p class=\"mx-2\">Beat the competition using actionable, contextual advise</p> </span></li>\r\n                <li class=\"my-4\"><span><img class=\"content-icon\" src=\"assets/images/icon-3.png\"> <p class=\"mx-2\">Highly key achievements with memorable visuals</p> </span></li>\r\n\r\n              </ul>\r\n\r\n        </div>\r\n        <div class=\"col-md-5 p-5 col-sm-12 text-center bg-white\">\r\n            <h6 class=\"mb-4 \">Create your account</h6>\r\n<!--        \r\n     \r\n            <div class=\"mb-4\">\r\n                <button class=\"btn btn-outline-primary m-1\"><i class=\"fa fa-linkedin-square\"></i> LinkedIn</button>\r\n                <button (click)=\"signInWithGoogle()\" class=\"btn btn-outline-primary m-1\"><i class=\"fa fa-google\"></i> Google</button>\r\n                <button class=\"btn btn-outline-primary m-1\" ><i class=\"fa fa-facebook-square\"></i> Facebook</button>\r\n            </div>\r\n\r\n            <div class=\"mb-4 tex-muted\">or sign up with email</div> -->\r\n              <div class=\"form-group   text-left\">\r\n                <input type=\"text\" [(ngModel)]=\"name\" class=\"form-control form-control-lg\" placeholder=\"Your Name\">\r\n              </div>\r\n\r\n              <div class=\"form-group   text-left\">\r\n                <input type=\"email\" [(ngModel)]=\"email\" class=\"form-control form-control-lg\" placeholder=\"Your Email\" >\r\n              </div>\r\n              \r\n              <div class=\"form-group  text-left\">\r\n                <input type=\"password\" [(ngModel)]=\"password\" class=\"form-control m-top-1 form-control-lg\" placeholder=\"Password\" >\r\n              </div>\r\n              <div class=\"custom-control custom-checkbox text-left mb-3\">\r\n                  <input [(ngModel)]=\"terms\" type=\"checkbox\" class=\"custom-control-input\" id=\"customCheck1\">\r\n                  <label class=\"custom-control-label text-muted\" for=\"customCheck1\">I agree to <strong>Terms of Service</strong> and <strong>Privacy policy*</strong></label>\r\n              </div>\r\n              <div class=\"custom-control custom-checkbox text-left\">\r\n                  <input type=\"checkbox\" class=\"custom-control-input\" id=\"customCheck2\">\r\n                  <label class=\"custom-control-label text-muted\" for=\"customCheck2\">Send me resume examples and updates</label>\r\n              </div>\r\n              <div *ngIf=\"err\" class=\"mt-4 alert alert-danger\" role=\"alert\">\r\n                 {{err.message}}\r\n              </div>\r\n              <button type=\"submit\" class=\"btn btn-lg btn-primary btn-block mt-5 text-uppercase\" [disabled]=\"!email || !password || !terms\" (click)=\"signUp()\">CREATE AN ACCOUNT</button>\r\n\r\n              <p style=\"cursor: pointer;\" class=\"text-center mt-1 text-muted\">Already have an account? <strong (click)=\"gotoSignin()\">Sign in</strong> </p>\r\n            \r\n        </div>\r\n     </div>\r\n</div>\r\n</div>\r\n<!-- <app-footer></app-footer> -->"

/***/ }),

/***/ "./src/components/signup/signup.component.scss":
/*!*****************************************************!*\
  !*** ./src/components/signup/signup.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sec-1 img {\n  height: 40px; }\n\n.sec-1 ul {\n  list-style: none; }\n\n.sec-1 ul li p {\n    display: inline; }\n\n.bg-grey {\n  background-color: #FBFAFD;\n  min-height: 85vh; }\n"

/***/ }),

/***/ "./src/components/signup/signup.component.ts":
/*!***************************************************!*\
  !*** ./src/components/signup/signup.component.ts ***!
  \***************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/services/auth.service */ "./src/services/auth.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_services_json_resume_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/services/json-resume.service */ "./src/services/json-resume.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SignupComponent = /** @class */ (function () {
    function SignupComponent(authService, spinner, router, ResumeJsonService) {
        this.authService = authService;
        this.spinner = spinner;
        this.router = router;
        this.ResumeJsonService = ResumeJsonService;
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent.prototype.signUp = function () {
        var _this = this;
        this.spinner.show();
        this.authService.signup(this.email, this.password).then(function (value) {
            console.log('Success!', value);
            _this.authService.updateProfile(_this.name).then(function () {
                console.log('Success!');
                _this.authService.getUserDetails().subscribe(function (user) {
                    console.log(user, 'The registered user');
                    var dateNow = new Date();
                    var dateExpiration = new Date();
                    var timestampNow = dateNow.getTime();
                    dateExpiration.setDate(dateExpiration.getDate() + 14);
                    var timestampExpiration = dateExpiration.getTime();
                    _this.ResumeJsonService.getResumeJsonRefAccount(user.uid).set({ start_date: timestampNow, expiration_date: timestampExpiration })
                        .then(function (res) {
                        console.log(res, 'Added to database Free trial');
                        _this.spinner.hide();
                        _this.router.navigate(['/templates']);
                    })
                        .catch(function (err) {
                        console.log(err);
                        alert(err);
                        _this.spinner.hide();
                    });
                });
                // this.ResumeJsonService.getResumeJsonRef().set(this.ResumeJson);
                // this.spinner.hide();
            })
                .catch(function (err) {
                console.log('Something went wrong:', err.message);
                alert('Error:' + err.message);
                _this.err = err;
                _this.spinner.hide();
            });
        })
            .catch(function (err) {
            console.log('Something went wrong:', err.message);
            // alert('Error: ' + err.message  )
            _this.err = err;
            _this.spinner.hide();
        });
    };
    SignupComponent.prototype.gotoSignin = function () {
        this.router.navigate(['/login']);
    };
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/components/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.scss */ "./src/components/signup/signup.component.scss")]
        }),
        __metadata("design:paramtypes", [src_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            src_services_json_resume_service__WEBPACK_IMPORTED_MODULE_4__["JsonResumeService"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/components/successful-resumes/successful-resumes.component.html":
/*!*****************************************************************************!*\
  !*** ./src/components/successful-resumes/successful-resumes.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>  \r\n  <div class=\"container\">\r\n    <div class=\"row mt-5\">\r\n      <div class=\"col-lg-6\">\r\n        <h1 class=\"success-resume-header-1\">Resume examples that get people like you hired</h1>\r\n        <h4 class=\"success-resume-sub-1\">Get inspired and learn from these real life examples</h4>\r\n      </div>\r\n      <div class=\"col-lg-6\"></div>\r\n    </div>\r\n    <div class=\"row mt-5\">\r\n      <div class=\"col-lg-6\">\r\n        <img class=\"success-resume-image-1\" src=\"../assets/images/image-1.png\" alt=\"\">\r\n      </div>\r\n      <div class=\"col-lg-6\">\r\n        <h1 class=\"success-resume-header-2\">From investment banking to Spotify - Sam's career change</h1>\r\n        <h4 class=\"success-resume-sub-2\">It took a lot of planning, hard work, and an amazing resume to get Sam her dream job at Spotify. We break down how she did it step by step.</h4>\r\n        <p class=\"success-resume-sub-3\">Hired at <span><img class=\"success-resume-image-2\" src=\"assets/images/Spotify.png\"></span> | IT, Senior, Operations</p>\r\n      </div>\r\n    </div>\r\n    <div class=\"row mt-5\">\r\n      <div class=\"col-lg-2\"></div>\r\n      <div class=\"col-lg-8 px-2 text-center\">\r\n        <ul>\r\n          <li class=\"success-resume-item-1\">IT and Tech</li>\r\n          <li class=\"success-resume-item-1\">Marketing</li>\r\n          <li class=\"success-resume-item-1\">Sales</li>\r\n          <li class=\"success-resume-item-1\">Students and Volunteering</li>\r\n          <li class=\"success-resume-item-1\">Business and Management</li>\r\n          <li class=\"success-resume-item-1\">Customer Support</li>\r\n          <li class=\"success-resume-item-1\">Accounting and Finance</li>\r\n          <li class=\"success-resume-item-1\">Engineering</li>\r\n          <li class=\"success-resume-item-1\">Medicine</li>\r\n        </ul>\r\n      </div>\r\n      <div class=\"col-lg-2\"></div>\r\n    </div>\r\n      <div class=\"row mt-5\">\r\n        <div class=\"col-lg-3 col-md-6 col-sm-12\">\r\n          <div class=\"success-resume-layout-1\">\r\n              <img class=\"success-resume-image-3\" src=\"../assets/images/XpgonN0X_400x400.jpg\">\r\n              <p class=\"success-resume-header-3\">Lorem Ipsump</p>\r\n              <span class=\"success-resume-span-1\">Lorem Ipsump</span><br>\r\n              <label class=\"success-resume-sub-4\">Hired at</label><br>\r\n              <img class=\"success-resume-image-4\" src=\"../assets/images/Spotify.png\">\r\n          </div>\r\n        </div>\r\n        <div class=\"col-lg-3 col-md-6 col-sm-12\">\r\n          <div class=\"success-resume-layout-1\">\r\n              <img class=\"success-resume-image-3\" src=\"../assets/images/XpgonN0X_400x400.jpg\">\r\n              <p class=\"success-resume-header-3\">Lorem Ipsump</p>\r\n              <span class=\"success-resume-span-1\">Lorem Ipsump</span><br>\r\n              <label class=\"success-resume-sub-4\">Hired at</label><br>\r\n              <img class=\"success-resume-image-4\" src=\"../assets/images/Spotify.png\">\r\n          </div>\r\n        </div>\r\n        <div class=\"col-lg-3 col-md-6 col-sm-12\">\r\n          <div class=\"success-resume-layout-1\">\r\n              <img class=\"success-resume-image-3\" src=\"../assets/images/XpgonN0X_400x400.jpg\">\r\n              <p class=\"success-resume-header-3\">Lorem Ipsump</p>\r\n              <span class=\"success-resume-span-1\">Lorem Ipsump</span><br>\r\n              <label class=\"success-resume-sub-4\">Hired at</label><br>\r\n              <img class=\"success-resume-image-4\" src=\"../assets/images/Spotify.png\">\r\n          </div>\r\n        </div>\r\n        <div class=\"col-lg-3 col-md-6 col-sm-12\">\r\n          <div class=\"success-resume-layout-1\">\r\n              <img class=\"success-resume-image-3\" src=\"../assets/images/XpgonN0X_400x400.jpg\">\r\n              <p class=\"success-resume-header-3\">Lorem Ipsump</p>\r\n              <span class=\"success-resume-span-1\">Lorem Ipsump</span><br>\r\n              <label class=\"success-resume-sub-4\">Hired at</label><br>\r\n              <img class=\"success-resume-image-4\" src=\"../assets/images/Spotify.png\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-3 col-md-6 col-sm-12\">\r\n          <div class=\"success-resume-layout-1\">\r\n              <img class=\"success-resume-image-3\" src=\"../assets/images/XpgonN0X_400x400.jpg\">\r\n              <p class=\"success-resume-header-3\">Lorem Ipsump</p>\r\n              <span class=\"success-resume-span-1\">Lorem Ipsump</span><br>\r\n              <label class=\"success-resume-sub-4\">Hired at</label><br>\r\n              <img class=\"success-resume-image-4\" src=\"../assets/images/Spotify.png\">\r\n          </div>\r\n        </div>\r\n        <div class=\"col-lg-3 col-md-6 col-sm-12\">\r\n          <div class=\"success-resume-layout-1\">\r\n              <img class=\"success-resume-image-3\" src=\"../assets/images/XpgonN0X_400x400.jpg\">\r\n              <p class=\"success-resume-header-3\">Lorem Ipsump</p>\r\n              <span class=\"success-resume-span-1\">Lorem Ipsump</span><br>\r\n              <label class=\"success-resume-sub-4\">Hired at</label><br>\r\n              <img class=\"success-resume-image-4\" src=\"../assets/images/Spotify.png\">\r\n          </div>\r\n        </div>\r\n        <div class=\"col-lg-3 col-md-6 col-sm-12\">\r\n          <div class=\"success-resume-layout-1\">\r\n              <img class=\"success-resume-image-3\" src=\"../assets/images/XpgonN0X_400x400.jpg\">\r\n              <p class=\"success-resume-header-3\">Lorem Ipsump</p>\r\n              <span class=\"success-resume-span-1\">Lorem Ipsump</span><br>\r\n              <label class=\"success-resume-sub-4\">Hired at</label><br>\r\n              <img class=\"success-resume-image-4\" src=\"../assets/images/Spotify.png\">\r\n          </div>\r\n        </div>\r\n        <div class=\"col-lg-3 col-md-6 col-sm-12\">\r\n          <div class=\"success-resume-layout-1\">\r\n              <img class=\"success-resume-image-3\" src=\"../assets/images/XpgonN0X_400x400.jpg\">\r\n              <p class=\"success-resume-header-3\">Lorem Ipsump</p>\r\n              <span class=\"success-resume-span-1\">Lorem Ipsump</span><br>\r\n              <label class=\"success-resume-sub-4\">Hired at</label><br>\r\n              <img class=\"success-resume-image-4\" src=\"../assets/images/Spotify.png\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-3\"></div>\r\n        <div class=\"col-lg-6\">\r\n          <p class=\"success-resume-sub-5\"><a href=\"#\">See more real resumes <span class=\"icon-arrow-bold-right\"></span></a></p>\r\n        </div>\r\n        <div class=\"col-lg-3\"></div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-2\"></div>\r\n        <div class=\"col-lg-8\">\r\n          <p class=\"success-resume-header-4\">They changed the world</p>\r\n          <p class=\"success-resume-sub-6\">Learn from famous resume examples</p>\r\n        </div>\r\n        <div class=\"col-lg-2\"></div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-7\">\r\n          <h1 class=\"success-resume-header-5\">From dishwasher to iconic Youtube filmmaker</h1>\r\n          <p class=\"success-resume-sub-7\">Every time he tries something new, Casey shows the importance of knowing why you do what you do. He also shows why success can be dangerous. His uniqie example of a filmmaker resume tells that story.</p>\r\n          <p><input class=\"success-resume-button-1\" type=\"submit\" value=\"READ RESUME\"></p>\r\n          <p class=\"success-resume-sub-8\"><span class=\"icon-arrow-bold-down\"></span><a href=\"#\"> Explore more resumes</a></p>\r\n        </div>\r\n        <div class=\"col-lg-5\">\r\n          <img class=\"success-resume-image-5\" src=\"../assets/images/Resume/mark-zuckerberg-resume.jpg\">\r\n        </div>\r\n      </div>\r\n      <div class=\"row mt-5\">\r\n        <div class=\"col-lg-3 col-md-6 col-sm-12\">\r\n          <div class=\"success-resume-layout-2\">\r\n              <img class=\"success-resume-image-3\" src=\"../assets/images/XpgonN0X_400x400.jpg\">\r\n              <p class=\"success-resume-header-6\">Lorem Ipsump</p>\r\n              <span class=\"success-resume-span-1\">Lorem Ipsump</span><br>\r\n              <label class=\"success-resume-sub-9\">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </label><br>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-lg-3 col-md-6 col-sm-12\">\r\n          <div class=\"success-resume-layout-2\">\r\n              <img class=\"success-resume-image-3\" src=\"../assets/images/XpgonN0X_400x400.jpg\">\r\n              <p class=\"success-resume-header-6\">Lorem Ipsump</p>\r\n              <span class=\"success-resume-span-1\">Lorem Ipsump</span><br>\r\n              <label class=\"success-resume-sub-9\">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </label><br>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-lg-3 col-md-6 col-sm-12\">\r\n          <div class=\"success-resume-layout-2\">\r\n              <img class=\"success-resume-image-3\" src=\"../assets/images/XpgonN0X_400x400.jpg\">\r\n              <p class=\"success-resume-header-6\">Lorem Ipsump</p>\r\n              <span class=\"success-resume-span-1\">Lorem Ipsump</span><br>\r\n              <label class=\"success-resume-sub-9\">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </label><br>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-lg-3 col-md-6 col-sm-12\">\r\n          <div class=\"success-resume-layout-2\">\r\n              <img class=\"success-resume-image-3\" src=\"../assets/images/XpgonN0X_400x400.jpg\">\r\n              <p class=\"success-resume-header-6\">Lorem Ipsump</p>\r\n              <span class=\"success-resume-span-1\">Lorem Ipsump</span><br>\r\n              <label class=\"success-resume-sub-9\">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </label><br>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n          <div class=\"col-lg-3\"></div>\r\n          <div class=\"col-lg-6\">\r\n            <p class=\"success-resume-sub-5\"><a href=\"#\">See more famous resumes <span class=\"icon-arrow-bold-right\"></span></a></p>\r\n          </div>\r\n          <div class=\"col-lg-3\"></div>\r\n      </div>\r\n      <div class=\"row mt-5 mb-5\">\r\n        <div class=\"col-lg-6\">\r\n          <img class=\"success-resume-image-1\" src=\"../assets/images/image-2.png\">\r\n        </div>\r\n        <div class=\"col-lg-6\">\r\n          <h1 class=\"success-resume-header-7\">Get more inspiration</h1>\r\n          <p class=\"success-resume-sub-10\">No spam, just information that will help you build a resume that makes you feel relevant and well represent.</p>\r\n          <input class=\"success-resume-input-1 mr-2\" type=\"email\" placeholder=\"Email Address\">\r\n          <input class=\"success-resume-button-2\" type=\"submit\" value=\"SUBSCRIBE\">\r\n        </div>\r\n      </div>\r\n  </div>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/components/successful-resumes/successful-resumes.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/components/successful-resumes/successful-resumes.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".success-resume-header-1 {\n  margin: 30px;\n  font-size: 55px;\n  font-weight: 600; }\n\n.success-resume-sub-1 {\n  margin: 30px;\n  font-size: 25px; }\n\n.success-resume-sub-2 {\n  margin-top: 40px;\n  font-size: 25px; }\n\n.success-resume-sub-3 {\n  margin-top: 40px;\n  font-size: 25px;\n  color: #0173BC;\n  font-weight: 600; }\n\n.success-resume-image-1 {\n  width: 90%; }\n\n.success-resume-image-2 {\n  width: 20%; }\n\n.success-resume-item-1 {\n  display: inline-block;\n  color: black;\n  padding: 8px; }\n\n.success-resume-layout-1 {\n  text-align: center;\n  padding: 15px 0px;\n  border-top: 5px #0173BC solid;\n  margin-bottom: 20%;\n  box-shadow: 5px 10px 15px #888888; }\n\n.success-resume-image-3 {\n  width: 50%;\n  border-radius: 50%; }\n\n.success-resume-header-3 {\n  font-size: 30px;\n  font-weight: 600;\n  padding: 10px 0px;\n  margin-bottom: -20px; }\n\n.success-resume-span-1 {\n  font-size: 20px; }\n\n.success-resume-sub-4 {\n  padding: 30px 0px; }\n\n.success-resume-image-4 {\n  width: 30%; }\n\n.success-resume-sub-5 {\n  margin-top: 40px;\n  font-size: 25px;\n  font-weight: 600;\n  text-align: center; }\n\n.success-resume-header-4 {\n  font-size: 40px;\n  font-weight: 600;\n  color: black;\n  text-align: center;\n  padding-top: 80px;\n  margin-bottom: -10px; }\n\n.success-resume-sub-6 {\n  font-size: 20px;\n  text-align: center;\n  padding-top: 0px; }\n\n.success-resume-header-5 {\n  font-size: 50px;\n  margin-top: 15%;\n  color: #5D5D5D;\n  font-weight: 600; }\n\n.success-resume-sub-7 {\n  margin-top: 40px;\n  font-size: 25px; }\n\n.success-resume-button-1 {\n  background: #0072BB;\n  border: 1px #0072BB solid;\n  color: white;\n  padding: 10px 50px;\n  border-radius: 5px;\n  font-weight: 600; }\n\n.success-resume-sub-8 {\n  margin-top: 15%;\n  font-size: 25px;\n  font-weight: 600; }\n\n.success-resume-image-5 {\n  width: 70%;\n  margin-top: 10%; }\n\n.success-resume-layout-2 {\n  text-align: center;\n  padding: 15px 0px;\n  border-top: 5px #0173BC solid;\n  margin-bottom: 20%;\n  box-shadow: 5px 10px 15px #888888; }\n\n.success-resume-image-3 {\n  width: 50%;\n  border-radius: 50%; }\n\n.success-resume-header-6 {\n  font-size: 30px;\n  font-weight: 500;\n  padding: 10px 0px;\n  margin-bottom: -20px; }\n\n.success-resume-sub-9 {\n  margin-top: 20px;\n  font-size: 15px;\n  font-weight: 500;\n  padding: 10px; }\n\n.success-resume-header-7 {\n  font-size: 50px;\n  font-weight: 600;\n  color: #5D5D5D;\n  margin-top: 15%; }\n\n.success-resume-sub-10 {\n  margin-top: 40px;\n  font-size: 25px; }\n\n.success-resume-input-1 {\n  border: 1px #0072BB solid;\n  padding: 10px;\n  border-radius: 5px;\n  font-weight: 600;\n  width: 65%;\n  margin-bottom: 5%; }\n\n.success-resume-button-2 {\n  background: #0072BB;\n  border: 1px #0072BB solid;\n  color: white;\n  padding: 10px;\n  border-radius: 5px;\n  font-weight: 600;\n  width: 30%; }\n\n@media only screen and (min-width: 320px) {\n  .success-resume-input-1 {\n    width: 98% !important; }\n  .success-resume-button-2 {\n    width: 40% !important; } }\n\n@media only screen and (min-width: 768px) {\n  .success-resume-input-1 {\n    width: 65% !important; }\n  .success-resume-button-2 {\n    width: 30% !important; } }\n"

/***/ }),

/***/ "./src/components/successful-resumes/successful-resumes.component.ts":
/*!***************************************************************************!*\
  !*** ./src/components/successful-resumes/successful-resumes.component.ts ***!
  \***************************************************************************/
/*! exports provided: SuccessfulResumesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuccessfulResumesComponent", function() { return SuccessfulResumesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SuccessfulResumesComponent = /** @class */ (function () {
    function SuccessfulResumesComponent() {
    }
    SuccessfulResumesComponent.prototype.ngOnInit = function () {
    };
    SuccessfulResumesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-successful-resumes',
            template: __webpack_require__(/*! ./successful-resumes.component.html */ "./src/components/successful-resumes/successful-resumes.component.html"),
            styles: [__webpack_require__(/*! ./successful-resumes.component.scss */ "./src/components/successful-resumes/successful-resumes.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SuccessfulResumesComponent);
    return SuccessfulResumesComponent;
}());



/***/ }),

/***/ "./src/components/templates/templates.component.html":
/*!***********************************************************!*\
  !*** ./src/components/templates/templates.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<div>\r\n  <div class=\"container\">\r\n    <div class=\"row my-5\">\r\n      <div class=\"col text-center\">\r\n        <h3 class=\"text-info\">What do you want your resume to look like?</h3>\r\n        <h6 class=\"text-muted\">Scroll to view all styles and click to select a specific style.</h6>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-4 col-md-6 col-sm-12 mb-4\">\r\n        <div class=\"hover-effect\">\r\n          <img class=\"img-thumbnail\" src=\"assets/images/Resume Templates/8.jpg\" alt=\"\">\r\n          <div class=\"overlay\">\r\n            <div class=\"text-center action\">\r\n              <h4 class=\"text-white mb-3\">Blueprint</h4>\r\n              <button class=\"btn btn-info btn-lg\" (click)=\"selectTemplate('resume1')\">Create Resume</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n      <div class=\"col-lg-4 col-md-6 col-sm-12 mb-4\">\r\n        <div class=\"hover-effect\">\r\n          <img class=\"img-thumbnail\" src=\"assets/images/Resume Templates/9.jpg\" alt=\"\">\r\n          <div class=\"overlay\">\r\n            <div class=\"text-center action\">\r\n              <h4 class=\"text-white mb-3\">Refined</h4>\r\n              <button class=\"btn btn-info btn-lg\" (click)=\"selectTemplate('resume2')\">Create Resume</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n      <div class=\"col-lg-4 col-md-6 col-sm-12 mb-4\">\r\n        <div class=\"hover-effect\">\r\n          <img class=\"img-thumbnail\" src=\"assets/images/Resume Templates/5.jpg\" alt=\"\">\r\n          <div class=\"overlay\">\r\n            <div class=\"text-center action\">\r\n              <h4 class=\"text-white mb-3\">Refined</h4>\r\n              <button class=\"btn btn-info btn-lg\" (click)=\"selectTemplate('resume3')\">Create Resume</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n      <div class=\"col-lg-4 col-md-6 col-sm-12 mb-4\">\r\n        <div class=\"hover-effect\">\r\n          <img class=\"img-thumbnail\" src=\"assets/images/Resume Templates/16.jpg\" alt=\"\">\r\n          <div class=\"overlay\">\r\n            <div class=\"text-center action\">\r\n              <h4 class=\"text-white mb-3\">Refined</h4>\r\n              <button class=\"btn btn-info btn-lg\" (click)=\"selectTemplate('resume4')\">Create Resume</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-4 col-md-6 col-sm-12 mb-4\">\r\n        <div class=\"hover-effect\">\r\n          <img class=\"img-thumbnail\" src=\"assets/images/Resume Templates/1 PR_ResumeTemplate.PNG\" alt=\"\">\r\n          <div class=\"overlay\">\r\n            <div class=\"text-center action\">\r\n              <h4 class=\"text-white mb-3\">1 PR_ResumeTemplate</h4>\r\n              <button class=\"btn btn-info btn-lg\" (click)=\"selectTemplate('resume5')\">Create Resume</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-4 col-md-6 col-sm-12 mb-4\">\r\n        <div class=\"hover-effect\">\r\n          <img class=\"img-thumbnail\" src=\"assets/images/Resume Templates/2 PR_ResumeTemplate.PNG\" alt=\"\">\r\n          <div class=\"overlay\">\r\n            <div class=\"text-center action\">\r\n              <h4 class=\"text-white mb-3\">2 PR_ResumeTemplate</h4>\r\n              <button class=\"btn btn-info btn-lg\" (click)=\"selectTemplate('resume6')\">Create Resume</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-4 col-md-6 col-sm-12 mb-4\">\r\n        <div class=\"hover-effect\">\r\n          <img class=\"img-thumbnail\" src=\"assets/images/Resume Templates/8 PR_ResumeTemplate.PNG\" alt=\"\">\r\n          <div class=\"overlay\">\r\n            <div class=\"text-center action\">\r\n              <h4 class=\"text-white mb-3\">8 PR_ResumeTemplate</h4>\r\n              <button class=\"btn btn-info btn-lg\" (click)=\"selectTemplate('resume7')\">Create Resume</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-4 col-md-6 col-sm-12 mb-4\">\r\n        <div class=\"hover-effect\">\r\n          <img class=\"img-thumbnail\" src=\"assets/images/Resume Templates/20 PR_ResumeTemplate.PNG\" alt=\"\">\r\n          <div class=\"overlay\">\r\n            <div class=\"text-center action\">\r\n              <h4 class=\"text-white mb-3\">20 PR_ResumeTemplate</h4>\r\n              <button class=\"btn btn-info btn-lg\" (click)=\"selectTemplate('resume8')\">Create Resume</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-4 col-md-6 col-sm-12 mb-4\">\r\n        <div class=\"hover-effect\">\r\n          <img class=\"img-thumbnail\" src=\"assets/images/Resume Templates/9 PR_ResumeTemplate.PNG\" alt=\"\">\r\n          <div class=\"overlay\">\r\n            <div class=\"text-center action\">\r\n              <h4 class=\"text-white mb-3\">9 PR_ResumeTemplate</h4>\r\n              <button class=\"btn btn-info btn-lg\" (click)=\"selectTemplate('resume9')\">Create Resume</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-4 col-md-6 col-sm-12 mb-4\">\r\n        <div class=\"hover-effect\">\r\n          <img class=\"img-thumbnail\" src=\"assets/images/Resume Templates/29 PR_ResumeTemplate_New.PNG\" alt=\"\">\r\n          <div class=\"overlay\">\r\n            <div class=\"text-center action\">\r\n              <h4 class=\"text-white mb-3\">29 PR_ResumeTemplate</h4>\r\n              <button class=\"btn btn-info btn-lg\" (click)=\"selectTemplate('resume10')\">Create Resume</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-4 col-md-6 col-sm-12 mb-4\">\r\n        <div class=\"hover-effect\">\r\n          <img class=\"img-thumbnail\" src=\"assets/images/Resume Templates/24 PR_ResumeTemplate.PNG\" alt=\"\">\r\n          <div class=\"overlay\">\r\n            <div class=\"text-center action\">\r\n              <h4 class=\"text-white mb-3\">24 PR_ResumeTemplate</h4>\r\n              <button class=\"btn btn-info btn-lg\" (click)=\"selectTemplate('resume11')\">Create Resume</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-4 col-md-6 col-sm-12 mb-4\">\r\n        <div class=\"hover-effect\">\r\n          <img class=\"img-thumbnail\" src=\"assets/images/Resume Templates/30 PR_ResumeTemplate_New.PNG\" alt=\"\">\r\n          <div class=\"overlay\">\r\n            <div class=\"text-center action\">\r\n              <h4 class=\"text-white mb-3\">30 PR_ResumeTemplate</h4>\r\n              <button class=\"btn btn-info btn-lg\" (click)=\"selectTemplate('resume12')\">Create Resume</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-4 col-md-6 col-sm-12 mb-4\">\r\n        <div class=\"hover-effect\">\r\n          <img class=\"img-thumbnail\" src=\"assets/images/Resume Templates/28 PR_ResumeTemplate_New.PNG\" alt=\"\">\r\n          <div class=\"overlay\">\r\n            <div class=\"text-center action\">\r\n              <h4 class=\"text-white mb-3\">28 PR_ResumeTemplate</h4>\r\n              <button class=\"btn btn-info btn-lg\" (click)=\"selectTemplate('resume13')\">Create Resume</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-4 col-md-6 col-sm-12 mb-4\">\r\n        <div class=\"hover-effect\">\r\n          <img class=\"img-thumbnail\" src=\"assets/images/Resume Templates/23 PR_ResumeTemplate.PNG\" alt=\"\">\r\n          <div class=\"overlay\">\r\n            <div class=\"text-center action\">\r\n              <h4 class=\"text-white mb-3\">23 PR_ResumeTemplate</h4>\r\n              <button class=\"btn btn-info btn-lg\" (click)=\"selectTemplate('resume14')\">Create Resume</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-4 col-md-6 col-sm-12 mb-4\">\r\n        <div class=\"hover-effect\">\r\n          <img class=\"img-thumbnail\" src=\"assets/images/Resume Templates/11 PR_ResumeTemplate.PNG\" alt=\"\">\r\n          <div class=\"overlay\">\r\n            <div class=\"text-center action\">\r\n              <h4 class=\"text-white mb-3\">11 PR_ResumeTemplate</h4>\r\n              <button class=\"btn btn-info btn-lg\" (click)=\"selectTemplate('resume15')\">Create Resume</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-4 col-md-6 col-sm-12 mb-4\">\r\n        <div class=\"hover-effect\">\r\n          <img class=\"img-thumbnail\" src=\"assets/images/Resume Templates/10 PR_ResumeTemplate.PNG\" alt=\"\">\r\n          <div class=\"overlay\">\r\n            <div class=\"text-center action\">\r\n              <h4 class=\"text-white mb-3\">10 PR_ResumeTemplate</h4>\r\n              <button class=\"btn btn-info btn-lg\" (click)=\"selectTemplate('resume16')\">Create Resume</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-4 col-md-6 col-sm-12 mb-4\">\r\n        <div class=\"hover-effect\">\r\n          <img class=\"img-thumbnail\" src=\"assets/images/Resume Templates/26 PR_ResumeTemplate (1).PNG\" alt=\"\">\r\n          <div class=\"overlay\">\r\n            <div class=\"text-center action\">\r\n              <h4 class=\"text-white mb-3\">26 PR_ResumeTemplate</h4>\r\n              <button class=\"btn btn-info btn-lg\" (click)=\"selectTemplate('resume17')\">Create Resume</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-4 col-md-6 col-sm-12 mb-4\">\r\n        <div class=\"hover-effect\">\r\n          <img class=\"img-thumbnail\" src=\"assets/images/Resume Templates/22 PR_ResumeTemplate.PNG\" alt=\"\">\r\n          <div class=\"overlay\">\r\n            <div class=\"text-center action\">\r\n              <h4 class=\"text-white mb-3\">22 PR_ResumeTemplate</h4>\r\n              <button class=\"btn btn-info btn-lg\" (click)=\"selectTemplate('resume18')\">Create Resume</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-4 col-md-6 col-sm-12 mb-4\">\r\n        <div class=\"hover-effect\">\r\n          <img class=\"img-thumbnail\" src=\"assets/images/Resume Templates/28 PR_ResumeTemplate.PNG\" alt=\"\">\r\n          <div class=\"overlay\">\r\n            <div class=\"text-center action\">\r\n              <h4 class=\"text-white mb-3\">28 PR_ResumeTemplate</h4>\r\n              <button class=\"btn btn-info btn-lg\" (click)=\"selectTemplate('resume19')\">Create Resume</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-4 col-md-6 col-sm-12 mb-4\">\r\n        <div class=\"hover-effect\">\r\n          <img class=\"img-thumbnail\" src=\"assets/images/Resume Templates/17 PR_ResumeTemplate.PNG\" alt=\"\">\r\n          <div class=\"overlay\">\r\n            <div class=\"text-center action\">\r\n              <h4 class=\"text-white mb-3\">17 PR_ResumeTemplate</h4>\r\n              <button class=\"btn btn-info btn-lg\" (click)=\"selectTemplate('resume20')\">Create Resume</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-4 col-md-6 col-sm-12 mb-4\">\r\n        <div class=\"hover-effect\">\r\n          <img class=\"img-thumbnail\" src=\"assets/images/Resume Templates/18 PR_ResumeTemplate.PNG\" alt=\"\">\r\n          <div class=\"overlay\">\r\n            <div class=\"text-center action\">\r\n              <h4 class=\"text-white mb-3\">18 PR_ResumeTemplate</h4>\r\n              <button class=\"btn btn-info btn-lg\" (click)=\"selectTemplate('resume21')\">Create Resume</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-4 col-md-6 col-sm-12 mb-4\">\r\n        <div class=\"hover-effect\">\r\n          <img class=\"img-thumbnail\" src=\"assets/images/Resume Templates/15 PR_ResumeTemplate.PNG\" alt=\"\">\r\n          <div class=\"overlay\">\r\n            <div class=\"text-center action\">\r\n              <h4 class=\"text-white mb-3\">15 PR_ResumeTemplate</h4>\r\n              <button class=\"btn btn-info btn-lg\" (click)=\"selectTemplate('resume22')\">Create Resume</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-4 col-md-6 col-sm-12 mb-4\">\r\n        <div class=\"hover-effect\">\r\n          <img class=\"img-thumbnail\" src=\"assets/images/Resume Templates/21 PR_ResumeTemplate.PNG\" alt=\"\">\r\n          <div class=\"overlay\">\r\n            <div class=\"text-center action\">\r\n              <h4 class=\"text-white mb-3\">21 PR_ResumeTemplate</h4>\r\n              <button class=\"btn btn-info btn-lg\" (click)=\"selectTemplate('resume23')\">Create Resume</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/components/templates/templates.component.scss":
/*!***********************************************************!*\
  !*** ./src/components/templates/templates.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".hover-effect {\n  overflow: hidden; }\n  .hover-effect img {\n    width: 100%;\n    height: 460px;\n    transition: all .4s linear; }\n  .hover-effect .overlay {\n    position: absolute;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    left: 0;\n    overflow: hidden;\n    opacity: 0;\n    background-color: rgba(0, 0, 0, 0.5);\n    transition: all .4s ease-in-out; }\n  .hover-effect .overlay .action {\n      position: relative;\n      top: 50%;\n      -webkit-transform: translateY(-50%);\n      transform: translateY(-50%); }\n  .hover-effect:hover img {\n  -webkit-transform: scale(1.2);\n  transform: scale(1.2); }\n  .hover-effect:hover .overlay {\n  opacity: 1; }\n"

/***/ }),

/***/ "./src/components/templates/templates.component.ts":
/*!*********************************************************!*\
  !*** ./src/components/templates/templates.component.ts ***!
  \*********************************************************/
/*! exports provided: TemplatesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplatesComponent", function() { return TemplatesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_services_json_resume_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/services/json-resume.service */ "./src/services/json-resume.service.ts");
/* harmony import */ var src_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/services/auth.service */ "./src/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var TemplatesComponent = /** @class */ (function () {
    function TemplatesComponent(router, ResumeJsonService, authService) {
        this.router = router;
        this.ResumeJsonService = ResumeJsonService;
        this.authService = authService;
    }
    TemplatesComponent.prototype.ngOnInit = function () {
    };
    TemplatesComponent.prototype.selectTemplate = function (template) {
        var _this = this;
        this.ResumeJsonService.Template = template;
        this.authService.getUserDetails().subscribe(function (user) {
            if (user) {
                console.log(user);
                _this.ResumeJsonService.getResumeJsonRef(user.uid)
                    .valueChanges()
                    .subscribe(function (res) { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        if (res) {
                            this.router.navigate(['resume-editor/' + template]);
                        }
                        else {
                            this.router.navigate(['/user-details']);
                        }
                        return [2 /*return*/];
                    });
                }); }, function (err) { return _this.router.navigate(['/user-details']); });
            }
        });
    };
    TemplatesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-templates',
            template: __webpack_require__(/*! ./templates.component.html */ "./src/components/templates/templates.component.html"),
            styles: [__webpack_require__(/*! ./templates.component.scss */ "./src/components/templates/templates.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            src_services_json_resume_service__WEBPACK_IMPORTED_MODULE_2__["JsonResumeService"],
            src_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], TemplatesComponent);
    return TemplatesComponent;
}());



/***/ }),

/***/ "./src/components/terms/terms.component.html":
/*!***************************************************!*\
  !*** ./src/components/terms/terms.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>  \r\n  <div class=\"container\">\r\n    <section>\r\n      <h1 class=\"text-center mt-6\">Terms of service</h1>\r\n      <div class=\"row mt-12\">\r\n        <div class=\"col-sm-3\">\r\n          <ul class=\"list-unstyled\">\r\n            <li><a routerLink=\"/terms\" routerLinkActive=\"active\">Terms of Service</a></li>\r\n            <li><a routerLink=\"/privacy\" routerLinkActive=\"active\" href=\"#\">Privacy Policy</a> </li>\r\n          </ul>\r\n        </div>\r\n        <div class=\"col-sm-9 mb-12\">\r\n          <div class=\"mb-6\">\r\n            <small>Last updated: October 5, 2017</small>\r\n          </div>\r\n          <h5>Welcome to Resume Builder</h5>\r\n          <p>Lorem ipsum dolor sit amet, no habeo atqui quando vis. Erat pericula est ex. Eu vitae adolescens complectitur sed, ignota legimus eloquentiam ei sea, pri no scripserit appellantur.<br/> <br/> Lorem ipsum dolor sit amet, no habeo atqui quando vis. Erat pericula est ex. Eu vitae adolescens complectitur sed, ignota legimus eloquentiam ei sea, pri no scripserit appellantur.</p>\r\n          <h5>Accounts</h5>\r\n          <p>Lorem ipsum dolor sit amet, no habeo atqui quando vis. Erat pericula est ex. Eu vitae adolescens complectitur sed, ignota legimus eloquentiam ei sea, pri no scripserit appellantur. Vidit veniam nec id, commodo albucius periculis ea ius, has eu tale putent.\r\n              <br/> <br/> Lorem ipsum dolor sit amet, no habeo atqui quando vis. Erat pericula est ex. Eu vitae adolescens complectitur sed, ignota legimus eloquentiam ei sea, pri no scripserit appellantur.</p>\r\n          <h5>Content</h5>\r\n          <p>Lorem ipsum dolor sit amet, no habeo atqui quando vis. Erat pericula est ex. Eu vitae adolescens complectitur sed, ignota legimus eloquentiam ei sea, pri no scripserit appellantur. Vidit veniam nec id, commodo albucius periculis ea ius, has eu tale putent.</p>\r\n          <h5>Fees, Payments and Refunds</h5>\r\n          <p>Integre philosophia ius ut. At agam soleat neglegentur sit, ius possit inermis corpora in. Ei consul constituto interpretaris ius. Augue primis sententiae mel ne, per eius audire et, ea viderer fabulas ceteros nec. Veri error per ad, omnes tantas ancillae sed ad, est cu legimus pericula consulatu. Nec ad aeterno atomorum, eam in saepe facilis nominavi. <br /> <br /> Lorem ipsum dolor sit amet, no habeo atqui quando vis. Erat pericula est ex. Eu vitae adolescens complectitur sed, ignota legimus eloquentiam ei sea, pri no scripserit appellantur.</p>\r\n          <h5>Trials & Discounts</h5>\r\n          <p>Lorem ipsum dolor sit amet, no habeo atqui quando vis. Erat pericula est ex. Eu vitae adolescens complectitur sed, ignota legimus eloquentiam ei sea, pri no scripserit appellantur. Integre philosophia ius ut. At agam soleat neglegentur sit, ius possit inermis corpora in. Ei consul constituto interpretaris ius. Augue primis sententiae mel ne, per eius audire et, ea viderer fabulas ceteros nec. Veri error per ad, omnes tantas ancillae sed ad, est cu legimus pericula consulatu. Nec ad aeterno atomorum, eam in saepe facilis nominavi.</p>\r\n          <h5>Cancellation</h5>\r\n          <p>Integre philosophia ius ut. At agam soleat neglegentur sit, ius possit inermis corpora in. Ei consul constituto interpretaris ius. Augue primis sententiae mel ne, per eius audire et, ea viderer fabulas ceteros nec. Veri error per ad, omnes tantas ancillae sed ad, est cu legimus pericula consulatu. Nec ad aeterno atomorum, eam in saepe facilis nominavi.</p>\r\n          <h5>Termination</h5>\r\n          <p>Lorem ipsum dolor sit amet, no habeo atqui quando vis. Erat pericula est ex. Eu vitae adolescens complectitur sed, ignota legimus eloquentiam ei sea, pri no scripserit appellantur. Vidit veniam nec id, commodo albucius periculis ea ius, has eu tale putent.<br/><br/>Lorem ipsum dolor sit amet, no habeo atqui quando vis. Erat pericula est ex. Eu vitae adolescens complectitur sed, ignota legimus eloquentiam ei sea, pri no scripserit appellantur.</p>\r\n          <h5>Privacy</h5>\r\n          <p>Lorem ipsum dolor sit amet, no habeo atqui quando vis. Erat pericula est ex. Eu vitae adolescens complectitur sed, ignota legimus eloquentiam ei sea, pri no scripserit appellantur.</p>\r\n          <h5>Limited Warranties and Liability</h5>\r\n          <p>Integre philosophia ius ut. At agam soleat neglegentur sit, ius possit inermis corpora in. Ei consul constituto interpretaris ius. Augue primis sententiae mel ne, per eius audire et, ea viderer fabulas ceteros nec. Veri error per ad, omnes tantas ancillae sed ad, est cu legimus pericula consulatu. Nec ad aeterno atomorum, eam in saepe facilis nominavi.</p>\r\n          <h5>Governing Law</h5>\r\n          <p>Lorem ipsum dolor sit amet, no habeo atqui quando vis. Erat pericula est ex. Eu vitae adolescens complectitur sed, ignota legimus eloquentiam ei sea, pri no scripserit appellantur. <br /> <br /> Integre philosophia ius ut. At agam soleat neglegentur sit, ius possit inermis corpora in. Ei consul constituto interpretaris ius. Augue primis sententiae mel ne, per eius audire et, ea viderer fabulas ceteros nec. Veri error per ad, omnes tantas ancillae sed ad, est cu legimus pericula consulatu. Nec ad aeterno atomorum, eam in saepe facilis nominavi.</p>\r\n          <h5>Changes</h5>\r\n          <p>Integre philosophia ius ut. At agam soleat neglegentur sit, ius possit inermis corpora in. Ei consul constituto interpretaris ius. Augue primis sententiae mel ne, per eius audire et, ea viderer fabulas ceteros nec. Veri error per ad, omnes tantas ancillae sed ad, est cu legimus pericula consulatu. Nec ad aeterno atomorum, eam in saepe facilis nominavi.</p>\r\n        </div>\r\n      </div>\r\n    </section>\r\n  </div>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/components/terms/terms.component.scss":
/*!***************************************************!*\
  !*** ./src/components/terms/terms.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mb-6 {\n  margin-bottom: 48px; }\n\n.mt-6 {\n  margin-top: 48px; }\n\n.mb-12 {\n  margin-bottom: 96px; }\n\n.mt-12 {\n  margin-top: 96px; }\n"

/***/ }),

/***/ "./src/components/terms/terms.component.ts":
/*!*************************************************!*\
  !*** ./src/components/terms/terms.component.ts ***!
  \*************************************************/
/*! exports provided: TermsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermsComponent", function() { return TermsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TermsComponent = /** @class */ (function () {
    function TermsComponent() {
    }
    TermsComponent.prototype.ngOnInit = function () {
    };
    TermsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-terms',
            template: __webpack_require__(/*! ./terms.component.html */ "./src/components/terms/terms.component.html"),
            styles: [__webpack_require__(/*! ./terms.component.scss */ "./src/components/terms/terms.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TermsComponent);
    return TermsComponent;
}());



/***/ }),

/***/ "./src/components/user-cover-letter/user-cover-letter.component.html":
/*!***************************************************************************!*\
  !*** ./src/components/user-cover-letter/user-cover-letter.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"templatePreviewImage; else elseTemplate\">\n  <div class=\"row\">\n      <div class=\"col-md-6 p-3\">\n          <div class=\"hover-effect m-5\">\n              <img class=\"img-thumbnail\" [src]=\"templatePreviewImage\" alt=\"\">\n              <div class=\"overlay\">\n                <div class=\"text-center action\">\n                  <!-- <h4 class=\"text-white mb-3\">Blueprint</h4> -->\n                  <button class=\"btn btn-info btn-lg\" (click)=\"gotoCoverLetter()\">Continue Editing</button>\n                </div>\n              </div>\n          </div>\n      </div>\n    </div>\n</ng-container>\n<ng-template #elseTemplate>\n  <div class=\"row p-3\" style=\"min-height: 80vh;\">\n      <div class=\"col text-center m-5\">\n          <p class=\"lead\"> It's looks like you don't have a cover letter yet.</p>\n          <button (click)=\"gotoCoverLetter()\" class=\"btn btn-primary btn-lg\">Start Now</button>\n      </div>\n  </div>\n</ng-template>\n"

/***/ }),

/***/ "./src/components/user-cover-letter/user-cover-letter.component.scss":
/*!***************************************************************************!*\
  !*** ./src/components/user-cover-letter/user-cover-letter.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".hover-effect {\n  overflow: hidden; }\n  .hover-effect img {\n    width: 100%;\n    height: 100%;\n    transition: all .4s linear; }\n  .hover-effect .overlay {\n    position: absolute;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    left: 0;\n    overflow: hidden;\n    opacity: 0;\n    transition: all .4s ease-in-out; }\n  .hover-effect .overlay .action {\n      position: relative;\n      top: 50%;\n      -webkit-transform: translateY(-50%);\n      transform: translateY(-50%); }\n  .hover-effect:hover img {\n  -webkit-transform: scale(1.2);\n  transform: scale(1.2); }\n  .hover-effect:hover .overlay {\n  opacity: 1; }\n"

/***/ }),

/***/ "./src/components/user-cover-letter/user-cover-letter.component.ts":
/*!*************************************************************************!*\
  !*** ./src/components/user-cover-letter/user-cover-letter.component.ts ***!
  \*************************************************************************/
/*! exports provided: UserCoverLetterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserCoverLetterComponent", function() { return UserCoverLetterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_services_json_resume_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/services/json-resume.service */ "./src/services/json-resume.service.ts");
/* harmony import */ var src_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/services/auth.service */ "./src/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserCoverLetterComponent = /** @class */ (function () {
    function UserCoverLetterComponent(router, ResumeJsonService, authService) {
        var _this = this;
        this.router = router;
        this.ResumeJsonService = ResumeJsonService;
        this.authService = authService;
        this.istemplatePreviewImage = false;
        this.$subscription = this.authService.getUserDetails().subscribe(function (user) {
            _this.ResumeJsonService.getCoverJsonRef(user.uid).valueChanges().subscribe(function (res) {
                var userData = res;
                _this.templatePreviewImage = userData.templatePreview;
            });
        });
    }
    UserCoverLetterComponent.prototype.ngOnInit = function () {
    };
    UserCoverLetterComponent.prototype.gotoCoverLetter = function () {
        this.router.navigate(['/cover-editor']);
    };
    UserCoverLetterComponent.prototype.ngOnDestroy = function () {
        this.$subscription.unsubscribe();
    };
    UserCoverLetterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-cover-letter',
            template: __webpack_require__(/*! ./user-cover-letter.component.html */ "./src/components/user-cover-letter/user-cover-letter.component.html"),
            styles: [__webpack_require__(/*! ./user-cover-letter.component.scss */ "./src/components/user-cover-letter/user-cover-letter.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], src_services_json_resume_service__WEBPACK_IMPORTED_MODULE_2__["JsonResumeService"], src_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], UserCoverLetterComponent);
    return UserCoverLetterComponent;
}());



/***/ }),

/***/ "./src/components/user-info/user-info.component.html":
/*!***********************************************************!*\
  !*** ./src/components/user-info/user-info.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<div>\r\n  <div class=\"container\">\r\n    <div class=\"row justify-content-center\">\r\n      <div class=\"col-lg-8\">\r\n              <div class=\"form-row\">\r\n                <div class=\"form-group col-md-6\">\r\n                  <label for=\"inputEmail4\">First Name</label>\r\n                  <input [(ngModel)]=\"user.firstname\" type=\"email\" class=\"form-control\" id=\"inputEmail4\" placeholder=\"First Name\">\r\n                </div>\r\n                <div class=\"form-group col-md-6\">\r\n                  <label for=\"inputLastname\">Last Name</label>\r\n                  <input type=\"text\" [(ngModel)]=\"user.lastname\" class=\"form-control\" id=\"inputLastname\" placeholder=\"Last Name\">\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                  <label for=\"inputJobtitle\">Job Title</label>\r\n                  <ng-select class=\"custom\"  placeholder=\"Job Title\" [(ngModel)]=\"currentJob\">\r\n                      <ng-option *ngFor=\"let job of jobTitles\" [value]=\"job\"  >{{job.JOB_VALUE}}</ng-option>\r\n                  </ng-select>\r\n                </div>\r\n              <div class=\"form-group\">\r\n                <label for=\"inputAddress\">Address</label>\r\n                <input [(ngModel)]=\"user.address\" type=\"text\" class=\"form-control\" id=\"inputAddress\" placeholder=\"1234 Main St\">\r\n              </div>\r\n              <!-- <div class=\"form-group\">\r\n                <label for=\"inputAddress2\">Address 2</label>\r\n                <input type=\"text\" class=\"form-control\" id=\"inputAddress2\" placeholder=\"Apartment, studio, or floor\">\r\n              </div> -->\r\n              <div class=\"form-row\">\r\n                <div class=\"form-group col-md-6\">\r\n                  <label for=\"inputCity\">City</label>\r\n                  <input [(ngModel)]=\"user.city\" type=\"text\" class=\"form-control\" id=\"inputCity\" placeholder=\"City\">\r\n                </div>\r\n                <div class=\"form-group col-md-4\">\r\n                  <label for=\"inputState\">State/Province</label>\r\n                  <select id=\"inputState\" class=\"form-control\">\r\n                    <option selected=\"\">Choose...</option>\r\n                    <option>...</option>\r\n                  </select>\r\n                </div>\r\n                <div class=\"form-group col-md-2\">\r\n                  <label for=\"inputZip\">Zip</label>\r\n                  <input [(ngModel)]=\"user.zip\" type=\"text\" class=\"form-control\" id=\"inputZip\" placeholder=\"Zip\">\r\n                </div>\r\n                <div class=\"form-group col-md-6\">\r\n                    <label for=\"inputPhone\">Phone</label>\r\n                    <input [(ngModel)]=\"user.phone\" type=\"text\" class=\"form-control\" id=\"inputPhone\" placeholder=\"Phone\">\r\n                </div>\r\n                <div class=\"form-group col-md-6\">\r\n                    <label for=\"inputEmail\">Email Address</label>\r\n                    <input [(ngModel)]=\"user.email\" type=\"text\" class=\"form-control\" id=\"inputEmail\" placeholder=\"Email Address\">\r\n                </div>\r\n              </div>\r\n              \r\n      </div>\r\n    </div>\r\n    <div class=\"row justify-content-end mt-5\">\r\n        <div class=\"col-4\">\r\n          <button class=\"btn btn-info btn-lg float-right\" (click)=\"gotoResumeEditor()\">Save & Next</button>\r\n        </div>\r\n       \r\n      </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/components/user-info/user-info.component.scss":
/*!***********************************************************!*\
  !*** ./src/components/user-info/user-info.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".hover-effect {\n  overflow: hidden; }\n  .hover-effect img {\n    width: 100%;\n    height: 100%;\n    transition: all .4s linear; }\n  .hover-effect .overlay {\n    position: absolute;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    left: 0;\n    overflow: hidden;\n    opacity: 0;\n    background-color: rgba(0, 0, 0, 0.5);\n    transition: all .4s ease-in-out; }\n  .hover-effect .overlay .action {\n      position: relative;\n      top: 50%;\n      -webkit-transform: translateY(-50%);\n      transform: translateY(-50%); }\n  .hover-effect:hover img {\n  -webkit-transform: scale(1.2);\n  transform: scale(1.2); }\n  .hover-effect:hover .overlay {\n  opacity: 1; }\n"

/***/ }),

/***/ "./src/components/user-info/user-info.component.ts":
/*!*********************************************************!*\
  !*** ./src/components/user-info/user-info.component.ts ***!
  \*********************************************************/
/*! exports provided: UserInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserInfoComponent", function() { return UserInfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_services_json_resume_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/services/json-resume.service */ "./src/services/json-resume.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var src_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/services/auth.service */ "./src/services/auth.service.ts");
/* harmony import */ var ngx_papaparse__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-papaparse */ "./node_modules/ngx-papaparse/fesm5/ngx-papaparse.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UserInfoComponent = /** @class */ (function () {
    function UserInfoComponent(router, ResumeJsonService, spinner, authService, papa) {
        var _this = this;
        this.router = router;
        this.ResumeJsonService = ResumeJsonService;
        this.spinner = spinner;
        this.authService = authService;
        this.papa = papa;
        this.user = {
            firstname: undefined,
            lastname: undefined,
            jobtitle: undefined,
            address: undefined,
            city: undefined,
            zip: undefined,
            phone: undefined,
            email: undefined
        };
        this.ResumeJson = {};
        this.currentJob = {
            JOB_ID: undefined,
            JOB_VALUE: undefined
        };
        this.ResumeJsonService.getAllJobs().subscribe(function (res) {
            var csv = res;
            _this.papa.parse(csv._body, {
                complete: function (result) {
                    console.log(result, 'parsed');
                    _this.jobTitles = result.data;
                },
                header: true
            });
        });
    }
    UserInfoComponent.prototype.ngOnInit = function () {
    };
    UserInfoComponent.prototype.gotoResumeEditor = function () {
        var _this = this;
        this.spinner.show();
        this.ResumeJson.template = this.ResumeJsonService.Template;
        this.ResumeJson.basic = {
            name: this.user.firstname + ' ' + this.user.lastname,
            email: this.user.email,
            phone: this.user.phone,
            address: this.user.address + ' ' + this.user.city + ' ' + this.user.zip,
            jobtitle: this.currentJob.JOB_VALUE
        };
        // this.ResumeJsonService.updateResumeJson(this.ResumeJson);
        this.spinner.show();
        this.authService.getUserDetails().subscribe(function (user) {
            if (user) {
                _this.ResumeJsonService.getResumeJsonRef(user.uid).set(_this.ResumeJson).then(function (res) {
                    console.log(res);
                    _this.spinner.hide();
                    _this.router.navigate(['/resume-editor/' + _this.ResumeJsonService.Template]);
                });
            }
        });
    };
    UserInfoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-info',
            template: __webpack_require__(/*! ./user-info.component.html */ "./src/components/user-info/user-info.component.html"),
            styles: [__webpack_require__(/*! ./user-info.component.scss */ "./src/components/user-info/user-info.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            src_services_json_resume_service__WEBPACK_IMPORTED_MODULE_2__["JsonResumeService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"],
            src_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            ngx_papaparse__WEBPACK_IMPORTED_MODULE_5__["Papa"]])
    ], UserInfoComponent);
    return UserInfoComponent;
}());



/***/ }),

/***/ "./src/components/user-resume-list/user-resume-list.component.html":
/*!*************************************************************************!*\
  !*** ./src/components/user-resume-list/user-resume-list.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-md-6 p-3\">\r\n      <div class=\"hover-effect m-5\">\r\n          <img class=\"img-thumbnail\" [src]=\"templatePreviewimage\" alt=\"\">\r\n          <div class=\"overlay\">\r\n            <div class=\"text-center action\">\r\n              <!-- <h4 class=\"text-white mb-3\">Blueprint</h4> -->\r\n             <button class=\"btn btn-info btn-lg\" (click)=\"continueEditing()\">Continue Editing</button>\r\n            </div>\r\n          </div>\r\n      </div>\r\n  </div>\r\n  <div class=\"col-md-6\">\r\n\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/components/user-resume-list/user-resume-list.component.scss":
/*!*************************************************************************!*\
  !*** ./src/components/user-resume-list/user-resume-list.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".hover-effect {\n  overflow: hidden; }\n  .hover-effect img {\n    width: 100%;\n    height: 100%;\n    transition: all .4s linear; }\n  .hover-effect .overlay {\n    position: absolute;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    left: 0;\n    overflow: hidden;\n    opacity: 0;\n    transition: all .4s ease-in-out; }\n  .hover-effect .overlay .action {\n      position: relative;\n      top: 50%;\n      -webkit-transform: translateY(-50%);\n      transform: translateY(-50%); }\n  .hover-effect:hover img {\n  -webkit-transform: scale(1.2);\n  transform: scale(1.2); }\n  .hover-effect:hover .overlay {\n  opacity: 1; }\n"

/***/ }),

/***/ "./src/components/user-resume-list/user-resume-list.component.ts":
/*!***********************************************************************!*\
  !*** ./src/components/user-resume-list/user-resume-list.component.ts ***!
  \***********************************************************************/
/*! exports provided: UserResumeListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserResumeListComponent", function() { return UserResumeListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_services_json_resume_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/services/json-resume.service */ "./src/services/json-resume.service.ts");
/* harmony import */ var src_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/services/auth.service */ "./src/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserResumeListComponent = /** @class */ (function () {
    function UserResumeListComponent(ResumeJsonService, authService, router, spinner) {
        var _this = this;
        this.ResumeJsonService = ResumeJsonService;
        this.authService = authService;
        this.router = router;
        this.spinner = spinner;
        this.spinner.show();
        this.$subscription = this.authService.getUserDetails().subscribe(function (user) {
            _this.ResumeJsonService.getResumeJsonRef(user.uid)
                .valueChanges()
                .subscribe(function (res) {
                var userData = res;
                _this.templatePreviewimage = userData ? userData.templatePreview : null;
                _this.spinner.hide();
            });
        });
    }
    UserResumeListComponent.prototype.ngOnInit = function () {
    };
    UserResumeListComponent.prototype.continueEditing = function () {
        this.router.navigate(['/resume-editor']);
    };
    UserResumeListComponent.prototype.ngOnDestroy = function () {
        this.$subscription.unsubscribe();
    };
    UserResumeListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-resume-list',
            template: __webpack_require__(/*! ./user-resume-list.component.html */ "./src/components/user-resume-list/user-resume-list.component.html"),
            styles: [__webpack_require__(/*! ./user-resume-list.component.scss */ "./src/components/user-resume-list/user-resume-list.component.scss")]
        }),
        __metadata("design:paramtypes", [src_services_json_resume_service__WEBPACK_IMPORTED_MODULE_1__["JsonResumeService"],
            src_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"]])
    ], UserResumeListComponent);
    return UserResumeListComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/layout/layout.component.html":
/*!******************************************!*\
  !*** ./src/layout/layout.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n  <app-navbar></app-navbar>  \r\n \r\n    <div class=\"container-fluid\">\r\n      <router-outlet > </router-outlet>\r\n \r\n  <app-footer></app-footer>\r\n"

/***/ }),

/***/ "./src/layout/layout.component.scss":
/*!******************************************!*\
  !*** ./src/layout/layout.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/layout/layout.component.ts":
/*!****************************************!*\
  !*** ./src/layout/layout.component.ts ***!
  \****************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LayoutComponent = /** @class */ (function () {
    function LayoutComponent() {
    }
    LayoutComponent.prototype.ngOnInit = function () {
    };
    LayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-layout',
            template: __webpack_require__(/*! ./layout.component.html */ "./src/layout/layout.component.html"),
            styles: [__webpack_require__(/*! ./layout.component.scss */ "./src/layout/layout.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LayoutComponent);
    return LayoutComponent;
}());



/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ "./src/services/auth-guard.service.ts":
/*!********************************************!*\
  !*** ./src/services/auth-guard.service.ts ***!
  \********************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/services/auth.service.ts");
/* harmony import */ var _json_resume_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./json-resume.service */ "./src/services/json-resume.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthGuard = /** @class */ (function () {
    function AuthGuard(router, af, authService, jsonService) {
        this.router = router;
        this.af = af;
        this.authService = authService;
        this.jsonService = jsonService;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        var _this = this;
        // console.log(this.authService.isLoggedIn());
        // if ( this.authService.isLoggedIn() ) {
        //     return true;
        // } else {
        // this.router.navigate(['/login']);
        // return false;
        // }
        return this.authService.isLoggedIn().then(function (res) {
            // const uid = Object.values(res)[9];
            // this.jsonService.getResumeJsonRef(uid).valueChanges()
            // .subscribe(
            //     result => {
            //         console.log(result);
            //         this.router.navigate(['/dashboard']);
            //     }
            // );
            return true;
        })
            .catch(function (err) {
            console.log(err);
            _this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
            return false;
        });
        // return this.af.authState.subscribe(res=>{
        //     console.log(res);
        // })
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"],
            _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _json_resume_service__WEBPACK_IMPORTED_MODULE_4__["JsonResumeService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/services/auth.service.ts":
/*!**************************************!*\
  !*** ./src/services/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/index.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = /** @class */ (function () {
    function AuthService(firebaseAuth) {
        this.firebaseAuth = firebaseAuth;
        this.userDetails = null;
        this.curentLoginStatusSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
        this.curentLoginStatus = this.curentLoginStatusSource.asObservable();
        this.user = this.firebaseAuth.authState;
        // this.user.subscribe(
        //   (user) => {
        //     if (user) {
        //       this.userDetails = user;
        //       console.log(this.userDetails);
        //     } else {
        //       this.userDetails = null;
        //     }
        //   }
        // );
    }
    AuthService.prototype.updateLoginStatus = function (status) {
        this.curentLoginStatusSource.next(status);
    };
    AuthService.prototype.signup = function (email, password) {
        return this.firebaseAuth
            .auth
            .createUserWithEmailAndPassword(email, password);
    };
    AuthService.prototype.login = function (email, password) {
        return this.firebaseAuth
            .auth
            .signInWithEmailAndPassword(email, password);
    };
    AuthService.prototype.signInWithGoogle = function () {
        return this.firebaseAuth.auth.signInWithPopup(new firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"].GoogleAuthProvider());
    };
    AuthService.prototype.logout = function () {
        return this.firebaseAuth
            .auth
            .signOut();
    };
    AuthService.prototype.isLoggedIn = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.user.subscribe(function (user) {
                if (user) {
                    _this.userDetails = user;
                    console.log(_this.userDetails);
                    resolve(user);
                }
                else {
                    reject();
                }
            });
        });
    };
    AuthService.prototype.getUserDetails = function () {
        return this.user;
    };
    AuthService.prototype.updateProfile = function (name, url) {
        if (name === void 0) { name = null; }
        if (url === void 0) { url = null; }
        return firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"]().currentUser.updateProfile({
            displayName: name,
            photoURL: url,
        });
    };
    AuthService.prototype.resetPassword = function (email) {
        return this.firebaseAuth.auth.sendPasswordResetEmail(email);
    };
    AuthService.prototype.updatePassword = function (password) {
        return this.firebaseAuth.auth.currentUser.updatePassword(password);
    };
    AuthService.prototype.verifyPassword = function (password) {
        // return this.firebaseAuth.auth.
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/services/can-deactivate.guard.ts":
/*!**********************************************!*\
  !*** ./src/services/can-deactivate.guard.ts ***!
  \**********************************************/
/*! exports provided: CanDeactivateGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanDeactivateGuard", function() { return CanDeactivateGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CanDeactivateGuard = /** @class */ (function () {
    function CanDeactivateGuard() {
    }
    CanDeactivateGuard.prototype.canDeactivate = function (component) {
        return true;
    };
    CanDeactivateGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], CanDeactivateGuard);
    return CanDeactivateGuard;
}());



/***/ }),

/***/ "./src/services/dom.service.ts":
/*!*************************************!*\
  !*** ./src/services/dom.service.ts ***!
  \*************************************/
/*! exports provided: DomService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DomService", function() { return DomService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DomService = /** @class */ (function () {
    function DomService(componentFactoryResolver, appRef, injector) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.appRef = appRef;
        this.injector = injector;
    }
    DomService.prototype.appendComponentToBody = function (component) {
        var _this = this;
        // Create a component reference from the component
        var componentRef = this.componentFactoryResolver
            .resolveComponentFactory(component)
            .create(this.injector);
        // Attach component to the appRef so that it's inside the ng component tree
        this.appRef.attachView(componentRef.hostView);
        // Get DOM element from component
        var domElem = componentRef.hostView
            .rootNodes[0];
        // Append DOM element to the body
        document.body.appendChild(domElem);
        // Wait some time and remove it from the component tree and from the DOM
        setTimeout(function () {
            _this.appRef.detachView(componentRef.hostView);
            componentRef.destroy();
        }, 3000);
    };
    DomService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]])
    ], DomService);
    return DomService;
}());



/***/ }),

/***/ "./src/services/json-resume.service.ts":
/*!*********************************************!*\
  !*** ./src/services/json-resume.service.ts ***!
  \*********************************************/
/*! exports provided: JsonResumeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JsonResumeService", function() { return JsonResumeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var angularfire2_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/storage */ "./node_modules/angularfire2/storage/index.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/services/auth.service.ts");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var medium_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! medium-editor */ "./node_modules/medium-editor/dist/js/medium-editor.js");
/* harmony import */ var medium_editor__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(medium_editor__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var medium_editor_colorpicker_buttons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! medium-editor-colorpicker-buttons */ "./node_modules/medium-editor-colorpicker-buttons/dist/medium-editor-colorpicker-buttons.min.js");
/* harmony import */ var medium_editor_colorpicker_buttons__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(medium_editor_colorpicker_buttons__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_observable_forkJoin__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/add/observable/forkJoin */ "./node_modules/rxjs-compat/_esm5/add/observable/forkJoin.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};










var JsonResumeService = /** @class */ (function () {
    function JsonResumeService(afStorage, authService, afDatabase, http) {
        var _this = this;
        this.afStorage = afStorage;
        this.authService = authService;
        this.afDatabase = afDatabase;
        this.http = http;
        this.isPage2 = true;
        this.ResumeJsonSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.ResumeJson);
        this.currentResumeJson = this.ResumeJsonSource.asObservable();
        this.CoverJsonSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.CoverJson);
        this.currentCoverJson = this.CoverJsonSource.asObservable();
        this.onEditorStateSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
        this.currentEditorState = this.onEditorStateSource.asObservable();
        this.curentSectionEditingSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('');
        this.curentSectionEditing = this.curentSectionEditingSource.asObservable();
        this.authService.getUserDetails().subscribe(function (user) { return __awaiter(_this, void 0, void 0, function () {
            var ResumeJsonPromise_1, _a;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!user) return [3 /*break*/, 3];
                        console.log(user);
                        return [4 /*yield*/, new Promise(function (resolve, reject) {
                                _this.getResumeJsonRef(user.uid)
                                    .valueChanges().subscribe(function (result) {
                                    resolve(result);
                                    if (result) {
                                        _this.updateResumeJson(result);
                                    }
                                });
                            })];
                    case 1:
                        ResumeJsonPromise_1 = _b.sent();
                        _a = this;
                        return [4 /*yield*/, new Promise(function (resolve, reject) {
                                _this.getCoverJsonRef(user.uid)
                                    .valueChanges().subscribe(function (result) {
                                    if (result) {
                                        resolve(result);
                                        _this.updateCoverJson(result);
                                    }
                                    else {
                                        reject();
                                        var jsonResume = ResumeJsonPromise_1;
                                        _this.CoverJson = {
                                            name: jsonResume.basic.name,
                                            jobTitle: jsonResume.basic.jobtitle,
                                            date: _this.DateNow,
                                            email: jsonResume.basic.email,
                                            phone: jsonResume.basic.phone
                                        };
                                        _this.updateCoverJson(_this.CoverJson);
                                    }
                                });
                            })];
                    case 2:
                        _a.CoverJson = _b.sent();
                        _b.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        }); });
    }
    JsonResumeService.prototype.updateResumeJson = function (json) {
        this.ResumeJsonSource.next(json);
    };
    JsonResumeService.prototype.updateCoverJson = function (json) {
        this.CoverJsonSource.next(json);
    };
    JsonResumeService.prototype.getResumeJson = function () {
        return this.currentResumeJson;
    };
    JsonResumeService.prototype.getCoverJson = function () {
        return this.currentCoverJson;
    };
    JsonResumeService.prototype.setTemplate = function (template) {
        this.ResumeJson.template = template;
    };
    JsonResumeService.prototype.getTemplate = function () {
        return this.ResumeJson.template;
    };
    JsonResumeService.prototype.getCurrentStateEditor = function () {
        return this.currentEditorState;
    };
    JsonResumeService.prototype.getCurrentSectionEditing = function () {
        return this.curentSectionEditing;
    };
    JsonResumeService.prototype.setActiveStateEditor = function (state) {
        this.onEditorStateSource.next(state);
    };
    JsonResumeService.prototype.setCurrentSectionEditing = function (section) {
        this.curentSectionEditingSource.next(section);
    };
    JsonResumeService.prototype.doUpload = function (file) {
        // create a random id
        var randomId = Math.random().toString(36).substring(2);
        // create a reference to the storage bucket location
        this.ref = this.afStorage.ref(randomId);
        // the put method creates an AngularFireUploadTask
        // and kicks off the upload
        return this.ref.put(file);
    };
    JsonResumeService.prototype.uploadImage = function (file) {
        var randomId = Math.random().toString(36).substring(2);
        var filepath = 'profiles/' + randomId;
        this.ref = this.afStorage.ref(filepath);
        return this.afStorage.upload(filepath, file);
    };
    JsonResumeService.prototype.getRef = function () {
        return this.ref;
    };
    JsonResumeService.prototype.getResumeJsonRef = function (uid) {
        return this.afDatabase.object('/resumes/' + uid + '/resume');
    };
    JsonResumeService.prototype.getCoverJsonRef = function (uid) {
        return this.afDatabase.object('/resumes/' + uid + '/cover');
    };
    JsonResumeService.prototype.getResumeJsonRefByList = function (uid) {
        return this.afDatabase.list('/resumes/' + uid + '/resume');
    };
    JsonResumeService.prototype.getResumeJsonRefAccount = function (uid) {
        return this.afDatabase.object('/resumes/' + uid + '/account');
    };
    Object.defineProperty(JsonResumeService.prototype, "DateNow", {
        get: function () {
            var dateObj = new Date();
            var month = dateObj.toLocaleString('en-us', { month: 'long' });
            var day = dateObj.getUTCDate();
            var year = dateObj.getUTCFullYear();
            return day + " " + month + ", " + year;
        },
        enumerable: true,
        configurable: true
    });
    JsonResumeService.prototype.activateEditor = function () {
        var mediumEditorColorButtons = medium_editor_colorpicker_buttons__WEBPACK_IMPORTED_MODULE_6__["get"](medium_editor__WEBPACK_IMPORTED_MODULE_5__);
        var TextColorButtonClass = mediumEditorColorButtons.TextColorButtonClass;
        var editbleElements = document.querySelectorAll('.editable');
        var editor = new medium_editor__WEBPACK_IMPORTED_MODULE_5__(editbleElements, {
            toolbar: {
                buttons: [
                    'bold', 'textcolor', 'fontname', 'fontsize', 'justifyLeft', 'justifyCenter',
                    'justifyRight', 'italic', 'underline', 'anchor', 'h1', 'h2', 'h3'
                ]
            },
            placeholder: false,
            extensions: {
                textcolor: new TextColorButtonClass( /* options? */)
            }
        });
    };
    JsonResumeService.prototype.getAllSkills = function () {
        return this.http.get('./assets/csv/skills.csv');
    };
    JsonResumeService.prototype.getAllJobs = function () {
        return this.http.get('./assets/csv/job_titles.csv');
    };
    JsonResumeService.prototype.getAllJobDescriptions = function () {
        return this.http.get('./assets/csv/job_descriptions.csv');
    };
    JsonResumeService.prototype.getAllProfessionalSummary = function () {
        return this.http.get('./assets/csv/professional_summary_all.csv');
    };
    JsonResumeService.prototype.sendResumeByEmail = function (data) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_7__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost/sendgrid-php/index.php', { data: { to: data.to, attachement: data.attachement } }, {
            headers: headers
        });
    };
    JsonResumeService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [angularfire2_storage__WEBPACK_IMPORTED_MODULE_2__["AngularFireStorage"],
            _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            angularfire2_database__WEBPACK_IMPORTED_MODULE_4__["AngularFireDatabase"],
            _angular_http__WEBPACK_IMPORTED_MODULE_7__["Http"]])
    ], JsonResumeService);
    return JsonResumeService;
}());



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\iphitech\AngularProjects\ResumeBuilder\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map