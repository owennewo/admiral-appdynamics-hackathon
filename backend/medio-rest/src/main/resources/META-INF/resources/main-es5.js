(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
        /***/ "./$$_lazy_route_resource lazy recursive": 
        /*!******************************************************!*\
          !*** ./$$_lazy_route_resource lazy namespace object ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function () {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }
            webpackEmptyAsyncContext.keys = function () { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": 
        /*!**************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n<router-outlet></router-outlet>\n<!-- <app-patientui></app-patientui> -->");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/frontend/patient_ui/patientui/patientui.component.html": 
        /*!**************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/frontend/patient_ui/patientui/patientui.component.html ***!
          \**************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<mat-card class=\"example-card\" style=\"text-align: center;\">\n    <mat-card-header>\n        <div mat-card-avatar class=\"example-header-image\"><img src=\"assets/RWhite.png\" height=\"100%\"></div>\n        <mat-card-title>Med.io</mat-card-title>\n        <mat-card-subtitle>\n            DispenseR\n        </mat-card-subtitle>\n    </mat-card-header>\n\n    <div class=\"home-tab-content\" *ngIf=\"homeTab\">\n\n        <div *ngIf=\"!questionaireActive\">\n            <circle-progress [animation]=false\n                [percent]=\"100 - (prescription.nextPrescriptionSeconds / prescription.intervalSeconds * 100)\"\n                [radius]=\"100\" [outerStrokeWidth]=\"16\" [innerStrokeWidth]=\"8\" [outerStrokeColor]=\"getRingColour()\"\n                [innerStrokeColor]=\"'#C7E596'\" [renderOnClick]=\"false\"\n                [title]=\" + prescription.nextPrescriptionSeconds + ' s'\" [titleFontSize]=\"50\"\n                [subtitle]=\"'time to next dose'\" [titleColor]=\"'white'\">\n            </circle-progress>\n\n            <button class=\"dispense-button\" *ngIf=\"takeButtonVisible()\" mat-button (click)=dispenseButtonClick($event)>\n                DISPENSE</button>\n        </div>\n        <div style=\"margin-bottom: 5%; margin-top: 5%;\" *ngIf=\"questionaireActive\">\n            How are you feeling?\n\n            <button mat-button (click)=questionaireHappyResult($event)> <img src=\"assets/happy_face.png\" height=\"150px;\"></button>\n            <button mat-button (click)=questionaireBadResult($event)> <img src=\"assets/sick_face.png\" height=\"150px;\"> </button>\n        </div>\n    </div>\n    \n     \n    <div *ngIf=\"prescriptionTab\">\n        <p> Course Duration: {{this.prescription.courseDurationDays}} days</p>\n        <p style=\"margin-bottom: 30%;\"></p>\n    </div>\n\n\n    <div *ngIf=\"infoTab\">\n        <p style=\"margin-bottom: 30%;\"> Info and things!</p>\n    </div>ß\n\n    <div *ngIf=\"contactGPTab\">\n        <h3> If you are experiencing any side effects please contact your GP </h3>\n        <p> Name: {{this.prescription.doctorName}} </p>\n        <p style=\"margin-bottom: 15%;\"> Contact: {{this.prescription.doctorNumber}} </p>\n    </div>\n\n\n\n    <div *ngIf=\"aboutTab\">\n        <div mat-card-avatar style=\"margin-left: 10%; margin-top: 10%;\"> <img src=\"assets/meddotioWhite.png\"\n                height=\"50%\"></div>\n        <div mat-card-avatar style=\"margin-left: 10%;\"><img src=\"assets/DispensRWhite.png\" height=\"200%%\"></div>\n        <p style=\"margin: 10%;\"> Version: 0.000001 </p>\n    </div>\n\n    <mat-card-footer>\n        <mat-card-actions align=\"center\" style=\"font-size: 50;\">\n            <button mat-button (click)=homeButtonClick($event)>HOME</button>\n            <button mat-button (click)=prescriptionButtonClick($event)>PRESCRIPTION</button>\n            <button mat-button (click)=infoButtonClick($event)>MORE INFO</button>\n            <button mat-button (click)=contactButtonClick($event)>CONTACT GP</button>\n            <button mat-button (click)=aboutButtonClick($event)>ABOUT</button>\n        </mat-card-actions>\n    </mat-card-footer>\n</mat-card>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pod/pod.component.html": 
        /*!******************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pod/pod.component.html ***!
          \******************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<mat-card class=\"example-card\" style=\"text-align: center;\">\n        <mat-card-header>\n            <div mat-card-avatar class=\"example-header-image\"><img src=\"assets/RWhite.png\" height=\"100%\"></div>\n            <mat-card-title>Med.io</mat-card-title>\n            <mat-card-subtitle>\n                DispenseR\n            </mat-card-subtitle>\n        </mat-card-header>\n    \n        <div *ngIf=\"prescription\" >\n            <table>\n                <tr><td>Patient: </td><td>{{prescription.patientName}}</td></tr>\n                <tr><td>Course duration:: </td><td>{{prescription.courseDurationDays}}</td></tr>\n                <tr><td>instructions: </td><td>{{prescription.instructions}}</td></tr>\n                <tr><td>medication: </td><td>{{prescription.medication}}</td></tr>\n                <tr><td>sideEffects: </td><td>{{prescription.sideEffects}}</td></tr>\n            </table>\n                    \n        </div>\n    \n        <mat-card-footer>\n            <mat-card-actions align=\"center\" style=\"font-size: 50;\">\n                <button mat-raised-button color=\"primary\" (click)=load()>LOAD</button>\n                \n            </mat-card-actions>\n        </mat-card-footer>\n    </mat-card>\n");
            /***/ 
        }),
        /***/ "./node_modules/tslib/tslib.es6.js": 
        /*!*****************************************!*\
          !*** ./node_modules/tslib/tslib.es6.js ***!
          \*****************************************/
        /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function () { return __extends; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function () { return __assign; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function () { return __rest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function () { return __decorate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function () { return __param; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function () { return __metadata; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function () { return __awaiter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function () { return __generator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function () { return __exportStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function () { return __values; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function () { return __read; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function () { return __spread; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () { return __spreadArrays; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function () { return __await; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () { return __asyncGenerator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () { return __asyncDelegator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function () { return __asyncValues; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () { return __makeTemplateObject; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function () { return __importStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function () { return __importDefault; });
            /*! *****************************************************************************
            Copyright (c) Microsoft Corporation. All rights reserved.
            Licensed under the Apache License, Version 2.0 (the "License"); you may not use
            this file except in compliance with the License. You may obtain a copy of the
            License at http://www.apache.org/licenses/LICENSE-2.0
            
            THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
            KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
            WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
            MERCHANTABLITY OR NON-INFRINGEMENT.
            
            See the Apache Version 2.0 License for specific language governing permissions
            and limitations under the License.
            ***************************************************************************** */
            /* global Reflect, Promise */
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b)
                        if (b.hasOwnProperty(p))
                            d[p] = b[p]; };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            var __assign = function () {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            function __rest(s, e) {
                var t = {};
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                        t[p] = s[p];
                if (s != null && typeof Object.getOwnPropertySymbols === "function")
                    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                            t[p[i]] = s[p[i]];
                    }
                return t;
            }
            function __decorate(decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __param(paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            }
            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(metadataKey, metadataValue);
            }
            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }
            function __generator(thisArg, body) {
                var _ = { label: 0, sent: function () { if (t[0] & 1)
                        throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f)
                        throw new TypeError("Generator is already executing.");
                    while (_)
                        try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                return t;
                            if (y = 0, t)
                                op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
                                case 5:
                                    _.label++;
                                    y = op[1];
                                    op = [0];
                                    continue;
                                case 7:
                                    op = _.ops.pop();
                                    _.trys.pop();
                                    continue;
                                default:
                                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                        _ = 0;
                                        continue;
                                    }
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                        _.label = op[1];
                                        break;
                                    }
                                    if (op[0] === 6 && _.label < t[1]) {
                                        _.label = t[1];
                                        t = op;
                                        break;
                                    }
                                    if (t && _.label < t[2]) {
                                        _.label = t[2];
                                        _.ops.push(op);
                                        break;
                                    }
                                    if (t[2])
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        }
                        catch (e) {
                            op = [6, e];
                            y = 0;
                        }
                        finally {
                            f = t = 0;
                        }
                    if (op[0] & 5)
                        throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            }
            function __exportStar(m, exports) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p))
                        exports[p] = m[p];
            }
            function __values(o) {
                var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
                if (m)
                    return m.call(o);
                return {
                    next: function () {
                        if (o && i >= o.length)
                            o = void 0;
                        return { value: o && o[i++], done: !o };
                    }
                };
            }
            function __read(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m)
                    return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                        ar.push(r.value);
                }
                catch (error) {
                    e = { error: error };
                }
                finally {
                    try {
                        if (r && !r.done && (m = i["return"]))
                            m.call(i);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                return ar;
            }
            function __spread() {
                for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                return ar;
            }
            function __spreadArrays() {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++)
                    s += arguments[i].length;
                for (var r = Array(s), k = 0, i = 0; i < il; i++)
                    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                        r[k] = a[j];
                return r;
            }
            ;
            function __await(v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
            }
            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
                function verb(n) { if (g[n])
                    i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
                function resume(n, v) { try {
                    step(g[n](v));
                }
                catch (e) {
                    settle(q[0][3], e);
                } }
                function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
                function fulfill(value) { resume("next", value); }
                function reject(value) { resume("throw", value); }
                function settle(f, v) { if (f(v), q.shift(), q.length)
                    resume(q[0][0], q[0][1]); }
            }
            function __asyncDelegator(o) {
                var i, p;
                return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
                function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
            }
            function __asyncValues(o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator], i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
                function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
                function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
            }
            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) {
                    Object.defineProperty(cooked, "raw", { value: raw });
                }
                else {
                    cooked.raw = raw;
                }
                return cooked;
            }
            ;
            function __importStar(mod) {
                if (mod && mod.__esModule)
                    return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod)
                        if (Object.hasOwnProperty.call(mod, k))
                            result[k] = mod[k];
                result.default = mod;
                return result;
            }
            function __importDefault(mod) {
                return (mod && mod.__esModule) ? mod : { default: mod };
            }
            /***/ 
        }),
        /***/ "./src/app/app-routing.module.ts": 
        /*!***************************************!*\
          !*** ./src/app/app-routing.module.ts ***!
          \***************************************/
        /*! exports provided: AppRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () { return AppRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _frontend_patient_ui_patientui_patientui_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./frontend/patient_ui/patientui/patientui.component */ "./src/app/frontend/patient_ui/patientui/patientui.component.ts");
            /* harmony import */ var _pod_pod_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pod/pod.component */ "./src/app/pod/pod.component.ts");
            var routes = [
                {
                    path: '', component: _frontend_patient_ui_patientui_patientui_component__WEBPACK_IMPORTED_MODULE_3__["PatientuiComponent"],
                },
                {
                    path: 'pod', component: _pod_pod_component__WEBPACK_IMPORTED_MODULE_4__["PodComponent"],
                }
            ];
            var AppRoutingModule = /** @class */ (function () {
                function AppRoutingModule() {
                }
                return AppRoutingModule;
            }());
            AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], AppRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/app.component.css": 
        /*!***********************************!*\
          !*** ./src/app/app.component.css ***!
          \***********************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/app.component.ts": 
        /*!**********************************!*\
          !*** ./src/app/app.component.ts ***!
          \**********************************/
        /*! exports provided: AppComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function () { return AppComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var AppComponent = /** @class */ (function () {
                function AppComponent() {
                    this.title = 'medio-ui';
                }
                return AppComponent;
            }());
            AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-root',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
                })
            ], AppComponent);
            /***/ 
        }),
        /***/ "./src/app/app.module.ts": 
        /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
        /*! exports provided: AppModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function () { return AppModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
            /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
            /* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
            /* harmony import */ var _frontend_patient_ui_patientui_patientui_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./frontend/patient_ui/patientui/patientui.module */ "./src/app/frontend/patient_ui/patientui/patientui.module.ts");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _pod_pod_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pod/pod.component */ "./src/app/pod/pod.component.ts");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            var AppModule = /** @class */ (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
                    declarations: [
                        _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                        _pod_pod_component__WEBPACK_IMPORTED_MODULE_8__["PodComponent"],
                    ],
                    imports: [
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                        _frontend_patient_ui_patientui_patientui_module__WEBPACK_IMPORTED_MODULE_6__["PatientuiModule"],
                        _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"]
                    ],
                    providers: [],
                    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
                })
            ], AppModule);
            /***/ 
        }),
        /***/ "./src/app/frontend/patient_ui/patientui/patientui.component.css": 
        /*!***********************************************************************!*\
          !*** ./src/app/frontend/patient_ui/patientui/patientui.component.css ***!
          \***********************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\nmat-card {\n    margin: 50px;\n    border-radius: 25px;\n    min-height: 50%;\n\n\n}\n\nmat-card-header {\n    padding-left: 3%;\n}\n\nmat-card-content {\n    display: flex;\n    justify-items: center;\n    align-items: center;\n}\n\n.dispense-button {\n\n   \n}\n\nhome-tab-content {\n    \n    display:inline-block;\n    justify-items: center;\n    align-items: center;\n\n}\n\nmat-button {\n    background-color: white;\n}\n\ncircle-wrapper {\n    display: flex;\n    margin: 0 Auto;\n\n}\n\ntspan {\n    font-size: 80 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZnJvbnRlbmQvcGF0aWVudF91aS9wYXRpZW50dWkvcGF0aWVudHVpLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixlQUFlOzs7QUFHbkI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBQ0E7SUFDSSxhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLG1CQUFtQjtBQUN2Qjs7QUFHQTs7O0FBR0E7O0FBRUE7O0lBRUksb0JBQW9CO0lBQ3BCLHFCQUFxQjtJQUNyQixtQkFBbUI7O0FBRXZCOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGNBQWM7O0FBRWxCOztBQUVBO0lBQ0ksd0JBQXdCO0FBQzVCIiwiZmlsZSI6InNyYy9hcHAvZnJvbnRlbmQvcGF0aWVudF91aS9wYXRpZW50dWkvcGF0aWVudHVpLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbm1hdC1jYXJkIHtcbiAgICBtYXJnaW46IDUwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICBtaW4taGVpZ2h0OiA1MCU7XG5cblxufVxuXG5tYXQtY2FyZC1oZWFkZXIge1xuICAgIHBhZGRpbmctbGVmdDogMyU7XG59XG5tYXQtY2FyZC1jb250ZW50IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5cbi5kaXNwZW5zZS1idXR0b24ge1xuXG4gICBcbn1cblxuaG9tZS10YWItY29udGVudCB7XG4gICAgXG4gICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbn1cblxubWF0LWJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbmNpcmNsZS13cmFwcGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG1hcmdpbjogMCBBdXRvO1xuXG59XG5cbnRzcGFuIHtcbiAgICBmb250LXNpemU6IDgwICFpbXBvcnRhbnQ7XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/frontend/patient_ui/patientui/patientui.component.ts": 
        /*!**********************************************************************!*\
          !*** ./src/app/frontend/patient_ui/patientui/patientui.component.ts ***!
          \**********************************************************************/
        /*! exports provided: PatientuiComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientuiComponent", function () { return PatientuiComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_service_prescription_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/prescription.service */ "./src/app/service/prescription.service.ts");
            var PatientuiComponent = /** @class */ (function () {
                function PatientuiComponent(prescriptionService) {
                    this.prescriptionService = prescriptionService;
                    // prescription : Prescription =    { 
                    // conditions: [],
                    // courseDurationDays: 20,
                    // doctorName: "Dr. Bob Smith",
                    // doctorNumber: "01945 411411",
                    // instructions: ["Take one twice a day", "Put tablet under tongue"],
                    // intervalSeconds: 5,
                    // medication: ["2x Polo, twice daily", "1x Smarties, 5 times daily"],
                    // nextPrescriptionSeconds: 10,
                    // perDay: 3,
                    // quantityRemaining: 4,
                    // quantityTotal: 7,
                    // sideEffects: ["Contains Laxatives", "Bad side effect"],
                    // patientEmail:"foo",
                    // patientName: 'bar'
                    // }
                    //Tabs
                    this.homeTab = true;
                    this.prescriptionTab = false;
                    this.infoTab = false;
                    this.contactGPTab = false;
                    this.aboutTab = false;
                    // Questionaire
                    this.questionaireActive = false;
                    // Colors
                    this.goodColor = '#78C000';
                    this.errorColor = '#FF0000';
                }
                PatientuiComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.sub = this.prescriptionService.currentPrescription.subscribe(function (prescription) {
                        _this.prescription = prescription;
                    });
                };
                PatientuiComponent.prototype.getRingColour = function () {
                    if (this.prescription != null) {
                        if (this.prescription.nextPrescriptionSeconds < 0) {
                            return this.errorColor;
                        }
                        else {
                            return this.goodColor;
                        }
                    }
                    else {
                        return this.goodColor;
                    }
                };
                PatientuiComponent.prototype.ngOnDestroy = function () {
                    this.sub.unsubscribe();
                };
                PatientuiComponent.prototype.questionaireHappyResult = function () {
                    this.questionaireActive = false;
                };
                PatientuiComponent.prototype.questionaireBadResult = function () {
                    // Do something with google duo 
                };
                PatientuiComponent.prototype.takeButtonVisible = function () {
                    if (this.prescription != null) {
                        if (this.prescription.nextPrescriptionSeconds < 0) {
                            return true;
                        }
                        else {
                            return false;
                        }
                    }
                    else {
                        return false;
                    }
                };
                PatientuiComponent.prototype.dispenseButtonClick = function (event) {
                    this.prescriptionService.takePrescription();
                    if (this.prescription.quantityRemaining >= 1) {
                        if (this.prescription.quantityRemaining <= (this.prescription.quantityTotal / 2)) {
                            this.questionaireActive = true;
                        }
                    }
                };
                PatientuiComponent.prototype.homeButtonClick = function (event) {
                    this.homeTab = true;
                    this.prescriptionTab = false;
                    this.infoTab = false;
                    this.contactGPTab = false;
                    this.aboutTab = false;
                };
                PatientuiComponent.prototype.prescriptionButtonClick = function (event) {
                    this.homeTab = false;
                    this.prescriptionTab = true;
                    this.infoTab = false;
                    this.contactGPTab = false;
                    this.aboutTab = false;
                };
                PatientuiComponent.prototype.infoButtonClick = function (event) {
                    this.homeTab = false;
                    this.prescriptionTab = false;
                    this.infoTab = true;
                    this.contactGPTab = false;
                    this.aboutTab = false;
                };
                PatientuiComponent.prototype.contactButtonClick = function (event) {
                    this.homeTab = false;
                    this.prescriptionTab = false;
                    this.infoTab = false;
                    this.contactGPTab = true;
                    this.aboutTab = false;
                };
                PatientuiComponent.prototype.aboutButtonClick = function (event) {
                    this.homeTab = false;
                    this.prescriptionTab = false;
                    this.infoTab = false;
                    this.contactGPTab = false;
                    this.aboutTab = true;
                };
                return PatientuiComponent;
            }());
            PatientuiComponent.ctorParameters = function () { return [
                { type: src_app_service_prescription_service__WEBPACK_IMPORTED_MODULE_2__["PrescriptionService"] }
            ]; };
            PatientuiComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-patientui',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./patientui.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/frontend/patient_ui/patientui/patientui.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./patientui.component.css */ "./src/app/frontend/patient_ui/patientui/patientui.component.css")).default]
                })
            ], PatientuiComponent);
            /***/ 
        }),
        /***/ "./src/app/frontend/patient_ui/patientui/patientui.module.ts": 
        /*!*******************************************************************!*\
          !*** ./src/app/frontend/patient_ui/patientui/patientui.module.ts ***!
          \*******************************************************************/
        /*! exports provided: PatientuiModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientuiModule", function () { return PatientuiModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _patientui_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./patientui.component */ "./src/app/frontend/patient_ui/patientui/patientui.component.ts");
            /* harmony import */ var ng_circle_progress__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-circle-progress */ "./node_modules/ng-circle-progress/fesm2015/ng-circle-progress.js");
            // Import ng-circle-progress
            var PatientuiModule = /** @class */ (function () {
                function PatientuiModule() {
                }
                return PatientuiModule;
            }());
            PatientuiModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [
                        _patientui_component__WEBPACK_IMPORTED_MODULE_4__["PatientuiComponent"]
                    ],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                        // Specify ng-circle-progress as an import
                        ng_circle_progress__WEBPACK_IMPORTED_MODULE_5__["NgCircleProgressModule"].forRoot({
                            // set defaults here
                            radius: 100,
                            outerStrokeWidth: 16,
                            innerStrokeWidth: 8,
                            outerStrokeColor: "#78C000",
                            innerStrokeColor: "#C7E596",
                            animationDuration: 300,
                        })
                    ],
                    exports: [
                        _patientui_component__WEBPACK_IMPORTED_MODULE_4__["PatientuiComponent"]
                    ]
                })
            ], PatientuiModule);
            /***/ 
        }),
        /***/ "./src/app/pod/pod.component.css": 
        /*!***************************************!*\
          !*** ./src/app/pod/pod.component.css ***!
          \***************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("td {\n    text-align: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9kL3BvZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvcG9kL3BvZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGQge1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/pod/pod.component.ts": 
        /*!**************************************!*\
          !*** ./src/app/pod/pod.component.ts ***!
          \**************************************/
        /*! exports provided: PodComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PodComponent", function () { return PodComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _service_prescription_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/prescription.service */ "./src/app/service/prescription.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var PodComponent = /** @class */ (function () {
                function PodComponent(prescriptionServive, router) {
                    this.prescriptionServive = prescriptionServive;
                    this.router = router;
                }
                PodComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.prescriptionServive.getPrescription().subscribe(function (prescription) {
                        _this.prescription = prescription;
                    });
                };
                PodComponent.prototype.load = function () {
                    var _this = this;
                    this.prescriptionServive.loadPrescription("1").subscribe(function (prescription) {
                        _this.router.navigate(["/"]);
                    });
                };
                return PodComponent;
            }());
            PodComponent.ctorParameters = function () { return [
                { type: _service_prescription_service__WEBPACK_IMPORTED_MODULE_2__["PrescriptionService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
            ]; };
            PodComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-pod',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./pod.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pod/pod.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./pod.component.css */ "./src/app/pod/pod.component.css")).default]
                })
            ], PodComponent);
            /***/ 
        }),
        /***/ "./src/app/service/prescription.service.ts": 
        /*!*************************************************!*\
          !*** ./src/app/service/prescription.service.ts ***!
          \*************************************************/
        /*! exports provided: PrescriptionService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrescriptionService", function () { return PrescriptionService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            var PrescriptionService = /** @class */ (function () {
                function PrescriptionService(http) {
                    var _this = this;
                    // this.loadPrescription();
                    // this.takePrescription();
                    this.http = http;
                    this.poll = true;
                    this.currentPrescription = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
                    // this.getPrescription("1").subscribe((pre)=>console.log(pre));
                    // this.resetPrescription();
                    // this.loadPrescription();
                    console.log("starting timer");
                    Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["timer"])(0, 2000).subscribe(function () {
                        if (_this.poll) {
                            console.log("Polling...");
                            _this.broadcastCurrentPrescription();
                        }
                        else {
                            console.log("Polling skipped...");
                        }
                    });
                }
                PrescriptionService.prototype.startPolling = function () {
                    this.poll = true;
                };
                PrescriptionService.prototype.stopPolling = function () {
                    this.poll = false;
                };
                PrescriptionService.prototype.broadcastCurrentPrescription = function () {
                    var _this = this;
                    this.http.get("/medio/prescription/current").subscribe(function (prescription) {
                        // this can be null!
                        _this.currentPrescription.next(prescription);
                    });
                };
                PrescriptionService.prototype.loadPrescription = function (id) {
                    if (id === void 0) { id = "1"; }
                    return this.http.put("/medio/prescription/" + id + "/load", {});
                };
                PrescriptionService.prototype.getPrescription = function (id) {
                    if (id === void 0) { id = "1"; }
                    return this.http.get("/medio/prescription/" + id, {}).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (pre) { return pre; }));
                };
                PrescriptionService.prototype.takePrescription = function (id) {
                    var _this = this;
                    if (id === void 0) { id = "1"; }
                    this.http.put("/medio/prescription/current/take", {}).subscribe(function (prescription) {
                        // this can be null!
                        _this.currentPrescription.next(prescription);
                    });
                };
                PrescriptionService.prototype.resetPrescription = function (id) {
                    var _this = this;
                    if (id === void 0) { id = "1"; }
                    this.http.put("/medio/prescription/reset", {}).subscribe(function () {
                        // this can be null!
                        _this.currentPrescription.next(undefined);
                    });
                };
                return PrescriptionService;
            }());
            PrescriptionService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }
            ]; };
            PrescriptionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], PrescriptionService);
            /***/ 
        }),
        /***/ "./src/environments/environment.ts": 
        /*!*****************************************!*\
          !*** ./src/environments/environment.ts ***!
          \*****************************************/
        /*! exports provided: environment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
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
            /***/ 
        }),
        /***/ "./src/main.ts": 
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
        /*! no exports provided */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
            /* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
            }
            Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
                .catch(function (err) { return console.error(err); });
            /***/ 
        }),
        /***/ 0: 
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! /home/williao/dev/hackathon/frontend/medio-ui/src/main.ts */ "./src/main.ts");
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map