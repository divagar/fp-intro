webpackJsonp(["main"],{

/***/ "../../../../../config.json":
/***/ (function(module, exports) {

module.exports = {"gist":{"apiUrl":"https://gist.githubusercontent.com/divagar/"},"jsEditorOptions":{"theme":"vs-dark","language":"javascript","autoIndent":true,"fontSize":"20px","fontWeight":400,"lineNumbers":"off","minimap":{"enabled":false},"scrollbar":{"vertical":"hidden","verticalScrollbarSize":"1px"}},"htmlEditorOptions":{"theme":"vs-dark","language":"html","autoIndent":true,"fontSize":"20px","fontWeight":400,"lineNumbers":"off","minimap":{"enabled":false},"scrollbar":{"vertical":"hidden","verticalScrollbarSize":"1px"}}}

/***/ }),

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".slide_intro img {\r\n    width: 200px;\r\n    height: 175px;\r\n    background: none !important;\r\n    border: none !important;\r\n    margin-top: 10px !important;\r\n}\r\n.slide_intro div p {\r\n    text-align: right;\r\n    font-style: italic;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"reveal\">\n  <div class=\"slides\">\n\n    <section class=\"slide_intro\">\n      <div class='intro'>\n        <img src=\"assets/images/fp_js.jpg\">\n      </div>\n      <div>\n        <h3>Introduction to Functional Programming</h3>\n        <br/>\n        <p>Divagar & Jenny</p>\n      </div>\n    </section>\n\n    <section>\n      <div>\n        <h3 class='yellow'>Composition\n          <br/>Abstraction</h3>\n      </div>\n    </section>\n\n    <section app-paradigm class='slide_paradigm'>\n    </section>\n\n    <section>\n      <div>\n        <h3 class='yellow'>Theoretical Models of\n          <br/>Funcational Programming</h3>\n        <p>Lambda Calculus & Category Theory</p>\n      </div>\n    </section>\n\n    <section app-lambda data-state='slide_lambda' class='slide_lambda'>\n    </section>\n\n    <section app-cat data-state='slide_cat' class='slide_cat'>\n    </section>\n\n    <section app-fn data-state='slide_fn' class='slide_fn'>\n    </section>\n\n    <section app-pf class='slide_pf'>\n    </section>\n\n    <section app-hof class='slide_hof'>\n    </section>\n\n    <section app-mr class='slide_mr'>\n    </section>\n\n    <section app-curry class='slide_curry'>\n    </section>\n\n    <section app-com class='slide_com'>\n    </section>\n\n    <section>\n      <div>\n        <h3 class='yellow'>Type Composition</h3>\n        <p>\n          We will learn this via FP design pattern like Functor, Applicative and Monad\n        </p>\n      </div>\n    </section>\n\n    <section app-functor class='slide_functor'>\n    </section>\n\n    <section app-applicative class='slide_applicative'>\n    </section>\n\n    <section app-monad class='slide_monad'>\n    </section>\n\n    <section>\n      <p>Funcational programming offers higher order abstraction, which drive significantly greater re-use and clean code.\n      </p>\n      <h3 class='yellow'>The development world is becoming more functional. Learn it.</h3>\n    </section>\n\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_http_service__ = __webpack_require__("../../../../../src/app/app.http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_reveal_js__ = __webpack_require__("../../../../reveal.js/js/reveal.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_reveal_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_reveal_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config_json__ = __webpack_require__("../../../../../config.json");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__config_json__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = (function () {
    function AppComponent(httpService) {
        this.httpService = httpService;
        this.gistUrl = __WEBPACK_IMPORTED_MODULE_3__config_json__["gist"].apiUrl;
    }
    AppComponent.prototype.ngOnInit = function () {
        __WEBPACK_IMPORTED_MODULE_2_reveal_js__["initialize"]({
            controls: false,
            progress: true,
            history: true,
            center: true,
            transition: 'concave',
            transitionSpeed: 'fast'
        });
        this.getConsoleCode();
    };
    AppComponent.prototype.getConsoleCode = function () {
        var url = this.gistUrl + 'b4458e960e2cde5d54e3337b54601126' + '/raw';
        this.httpService.get(url).subscribe(function (val) { eval(val); }, function (err) { console.log(err); });
    };
    AppComponent.prototype.fpEval = function (code) {
        var _this = this;
        var url = this.gistUrl + 'b4458e960e2cde5d54e3337b54601126' + '/raw';
        return new Promise(function (resolve, reject) {
            _this.httpService.get(url).subscribe(function (val) { resolve(eval(val + code)); }, function (err) { reject(err); });
        });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__app_http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__app_http_service__["a" /* HttpService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.http.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_ls_service__ = __webpack_require__("../../../../../src/app/app.ls.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HttpService = (function () {
    function HttpService(http, lsService) {
        this.http = http;
        this.lsService = lsService;
    }
    HttpService.prototype.get = function (url) {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */](function (observer) {
            //try to get from ls
            var lsVal = _this.lsService.retrieve(url);
            if (lsVal == null) {
                _this.http.get(url, { responseType: 'text' }).subscribe(function (val) {
                    _this.lsService.store(url, val);
                    observer.next(val);
                }, function (err) {
                    observer.error("Error occured. " + err);
                }, function () {
                    observer.complete();
                });
            }
            else {
                observer.next(lsVal);
                observer.complete();
            }
        });
    };
    return HttpService;
}());
HttpService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__app_ls_service__["a" /* LSService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__app_ls_service__["a" /* LSService */]) === "function" && _b || Object])
], HttpService);

var _a, _b;
//# sourceMappingURL=app.http.service.js.map

/***/ }),

/***/ "../../../../../src/app/app.ls.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LSService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LSService = (function () {
    function LSService() {
    }
    LSService.prototype.store = function (key, val) {
        localStorage.setItem(key, JSON.stringify(val));
    };
    LSService.prototype.retrieve = function (key) {
        var val = JSON.parse(localStorage.getItem(key));
        //if (!val) throw 'No value found!';
        return val;
    };
    return LSService;
}());
LSService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], LSService);

//# sourceMappingURL=app.ls.service.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_monaco_editor__ = __webpack_require__("../../../../ngx-monaco-editor/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_http_service__ = __webpack_require__("../../../../../src/app/app.http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_ls_service__ = __webpack_require__("../../../../../src/app/app.ls.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__slides_paradigm_component__ = __webpack_require__("../../../../../src/app/slides/paradigm.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__slides_lambda_component__ = __webpack_require__("../../../../../src/app/slides/lambda.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__slides_category_component__ = __webpack_require__("../../../../../src/app/slides/category.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__slides_function_component__ = __webpack_require__("../../../../../src/app/slides/function.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__slides_pure_functions_component__ = __webpack_require__("../../../../../src/app/slides/pure.functions.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__slides_hof_component__ = __webpack_require__("../../../../../src/app/slides/hof.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__slides_mapreduce_component__ = __webpack_require__("../../../../../src/app/slides/mapreduce.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__slides_currying_component__ = __webpack_require__("../../../../../src/app/slides/currying.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__slides_compose_component__ = __webpack_require__("../../../../../src/app/slides/compose.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__slides_functors_component__ = __webpack_require__("../../../../../src/app/slides/functors.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__slides_applicatives_component__ = __webpack_require__("../../../../../src/app/slides/applicatives.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__slides_monads_component__ = __webpack_require__("../../../../../src/app/slides/monads.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_8__slides_paradigm_component__["a" /* ParadigmComponent */],
            __WEBPACK_IMPORTED_MODULE_9__slides_lambda_component__["a" /* LambdaComponent */],
            __WEBPACK_IMPORTED_MODULE_10__slides_category_component__["a" /* CategoryComponent */],
            __WEBPACK_IMPORTED_MODULE_11__slides_function_component__["a" /* FunctionComponent */],
            __WEBPACK_IMPORTED_MODULE_12__slides_pure_functions_component__["a" /* PureFunctionsComponent */],
            __WEBPACK_IMPORTED_MODULE_13__slides_hof_component__["a" /* HOFComponent */],
            __WEBPACK_IMPORTED_MODULE_14__slides_mapreduce_component__["a" /* MRComponent */],
            __WEBPACK_IMPORTED_MODULE_15__slides_currying_component__["a" /* CurryingComponent */],
            __WEBPACK_IMPORTED_MODULE_16__slides_compose_component__["a" /* ComposeComponent */],
            __WEBPACK_IMPORTED_MODULE_17__slides_functors_component__["a" /* FunctorComponent */],
            __WEBPACK_IMPORTED_MODULE_18__slides_applicatives_component__["a" /* ApplicativeComponent */],
            __WEBPACK_IMPORTED_MODULE_19__slides_monads_component__["a" /* MonadComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_4_ngx_monaco_editor__["a" /* MonacoEditorModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_5__app_http_service__["a" /* HttpService */],
            __WEBPACK_IMPORTED_MODULE_6__app_ls_service__["a" /* LSService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/slides/applicatives.component.html":
/***/ (function(module, exports) {

module.exports = "<section>\r\n    <div>\r\n        <h3 class='yellow'>Applicatives</h3>\r\n        <p>\r\n            Applicatives apply a wrapped function to a wrapped value\r\n        </p>\r\n    </div>\r\n</section>\r\n\r\n<section>\r\n    <div>\r\n        <p>Our values are wrapped in a container, just like Functors\r\n            <br> and our functions are wrapped in a container too!</p>\r\n        <div class='applicativeWrapper'>\r\n            <div class='fnBox'>\r\n                <img src=\"assets/images/functor_value_wrapper.png\">\r\n            </div>\r\n            <div class='fnBox'>\r\n                <img src=\"assets/images/applicative_fn_wrapper.png\">\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n\r\n<section>\r\n    <div>\r\n        <p>Applicatives | Behind the scenes</p>\r\n        <img class='functorImg' src=\"assets/images/applicative_in_action.png\">\r\n    </div>\r\n</section>\r\n\r\n<section data-state='slide_applicative'>\r\n    <div>\r\n        <h3></h3>\r\n        <p class='yellow'>Applicatives | Example</p>\r\n    </div>\r\n    <div class=\"eWrapper\">\r\n        <div class=\"eBox\">\r\n            <ngx-monaco-editor class=\"mEditor\" [options]=\"jsEditorOptions\" [(ngModel)]=\"mainCode\">\r\n            </ngx-monaco-editor>\r\n            <button type=\"button\" class=\"btn btn-success run\" (click)=\"run()\">Run</button>\r\n            <br/>\r\n        </div>\r\n        <div class=\"eBox\">\r\n            <ngx-monaco-editor class=\"mEditorOut\" [options]=\"htmlEditorOptions\" [(ngModel)]=\"consoleOutput\">\r\n            </ngx-monaco-editor>\r\n        </div>\r\n    </div>\r\n</section>"

/***/ }),

/***/ "../../../../../src/app/slides/applicatives.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApplicativeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_http_service__ = __webpack_require__("../../../../../src/app/app.http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_reveal_js__ = __webpack_require__("../../../../reveal.js/js/reveal.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_reveal_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_reveal_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config_json__ = __webpack_require__("../../../../../config.json");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__config_json__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ApplicativeComponent = (function () {
    function ApplicativeComponent(httpService, appCom) {
        this.httpService = httpService;
        this.appCom = appCom;
        this.jsEditorOptions = {};
        this.htmlEditorOptions = {};
        this.gistUrl = __WEBPACK_IMPORTED_MODULE_4__config_json__["gist"].apiUrl;
        this.initEditor();
    }
    ApplicativeComponent.prototype.ngOnInit = function () {
        var that = this;
        __WEBPACK_IMPORTED_MODULE_3_reveal_js__["addEventListener"]('slide_applicative', function () {
            that.initEditor();
            that.getCode('40ff93efe1cbcf320e36be46d4fb7bff').then(function (val) { return that.mainCode = String(val); });
        }, false);
    };
    ApplicativeComponent.prototype.initEditor = function () {
        this.jsEditorOptions = Object.assign({}, __WEBPACK_IMPORTED_MODULE_4__config_json__["jsEditorOptions"]);
        this.htmlEditorOptions = Object.assign({}, __WEBPACK_IMPORTED_MODULE_4__config_json__["htmlEditorOptions"]);
    };
    ApplicativeComponent.prototype.getCode = function (gistId) {
        var _this = this;
        var url = this.gistUrl + gistId + '/raw';
        return new Promise(function (resolve, reject) {
            _this.httpService.get(url).subscribe(function (val) { resolve(val); }, function (err) { reject(err); });
        });
    };
    ApplicativeComponent.prototype.run = function () {
        var _this = this;
        this.appCom.fpEval(this.mainCode).then(function (val) { return _this.consoleOutput = String(val); });
    };
    return ApplicativeComponent;
}());
ApplicativeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: '[app-applicative]',
        template: __webpack_require__("../../../../../src/app/slides/applicatives.component.html"),
        styles: [__webpack_require__("../../../../../src/app/slides/slides.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__app_http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__app_http_service__["a" /* HttpService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__app_component__["a" /* AppComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__app_component__["a" /* AppComponent */]) === "function" && _b || Object])
], ApplicativeComponent);

var _a, _b;
//# sourceMappingURL=applicatives.component.js.map

/***/ }),

/***/ "../../../../../src/app/slides/category.component.html":
/***/ (function(module, exports) {

module.exports = "<section>\r\n    <div>\r\n        <h3 class='yellow'>Category Theory</h3>\r\n        <p>\r\n            How\r\n            <i>things</i> compose\r\n        </p>\r\n    </div>\r\n</section>\r\n\r\n<section>\r\n    <div>\r\n        <h3 class='yellow'>What is category ?</h3>\r\n        <img class='categoryImg' src=\"assets/images/category_1.png\">\r\n    </div>\r\n</section>\r\n\r\n<section>\r\n    <div>\r\n        <h3 class='yellow'>Category' Rules</h3>\r\n        <ul>Identity</ul>\r\n        <ul>Composition</ul>\r\n        <ul>Associativity</ul>\r\n    </div>\r\n</section>\r\n\r\n<section>\r\n    <div>\r\n        <h3 class='yellow'>Identity</h3>\r\n        <img class='categoryImgI' src=\"assets/images/category_identity.png\">\r\n    </div>\r\n</section>\r\n\r\n<section>\r\n    <div>\r\n        <h3 class='yellow'>Composition</h3>\r\n        <img class='categoryImgC' src=\"assets/images/category_composition.png\">\r\n    </div>\r\n</section>\r\n\r\n<section>\r\n    <div>\r\n        <h3 class='yellow'>Associativity</h3>\r\n        <img class='categoryImgA' src=\"assets/images/category_associativity.png\">\r\n    </div>\r\n</section>"

/***/ }),

/***/ "../../../../../src/app/slides/category.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CategoryComponent = (function () {
    function CategoryComponent() {
    }
    return CategoryComponent;
}());
CategoryComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: '[app-cat]',
        template: __webpack_require__("../../../../../src/app/slides/category.component.html"),
        styles: [__webpack_require__("../../../../../src/app/slides/slides.component.css")]
    })
], CategoryComponent);

//# sourceMappingURL=category.component.js.map

/***/ }),

/***/ "../../../../../src/app/slides/compose.component.html":
/***/ (function(module, exports) {

module.exports = "<section>\r\n    <div>\r\n        <h3 class='yellow'>Function Composition</h3>\r\n    </div>\r\n</section>\r\n\r\n<section>\r\n    <div>\r\n        <p class='yellow'>Function composition is simply stringing functions together. We feed the result of one function to the input of another.</p>\r\n        <img class='pfImg' src=\"assets/images/fun_comp.png\">\r\n    </div>\r\n</section>\r\n\r\n<section data-state='slide_com'>\r\n    <div>\r\n        <p class='yellow'>Function Composition | Example</p>\r\n    </div>\r\n    <div class=\"eWrapper\">\r\n        <div class=\"eBox\">\r\n            <ngx-monaco-editor class=\"mEditor\" [options]=\"jsEditorOptions\" [(ngModel)]=\"mainCode\">\r\n            </ngx-monaco-editor>\r\n            <button type=\"button\" class=\"btn btn-success run\" (click)=\"run()\">Run</button>\r\n            <br/>\r\n        </div>\r\n        <div class=\"eBox\">\r\n            <ngx-monaco-editor class=\"mEditorOut\" [options]=\"htmlEditorOptions\" [(ngModel)]=\"consoleOutput\">\r\n            </ngx-monaco-editor>\r\n        </div>\r\n    </div>\r\n</section>"

/***/ }),

/***/ "../../../../../src/app/slides/compose.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComposeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_http_service__ = __webpack_require__("../../../../../src/app/app.http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_reveal_js__ = __webpack_require__("../../../../reveal.js/js/reveal.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_reveal_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_reveal_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config_json__ = __webpack_require__("../../../../../config.json");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__config_json__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ComposeComponent = (function () {
    function ComposeComponent(httpService, appCom) {
        this.httpService = httpService;
        this.appCom = appCom;
        this.jsEditorOptions = {};
        this.htmlEditorOptions = {};
        this.gistUrl = __WEBPACK_IMPORTED_MODULE_4__config_json__["gist"].apiUrl;
        this.initEditor();
    }
    ComposeComponent.prototype.ngOnInit = function () {
        var that = this;
        __WEBPACK_IMPORTED_MODULE_3_reveal_js__["addEventListener"]('slide_com', function () {
            that.initEditor();
            that.getCode('4c3b68f11e404db9431bafca17644e7d').then(function (val) { return that.mainCode = String(val); });
        }, false);
    };
    ComposeComponent.prototype.initEditor = function () {
        this.jsEditorOptions = Object.assign({}, __WEBPACK_IMPORTED_MODULE_4__config_json__["jsEditorOptions"]);
        this.htmlEditorOptions = Object.assign({}, __WEBPACK_IMPORTED_MODULE_4__config_json__["htmlEditorOptions"]);
    };
    ComposeComponent.prototype.getCode = function (gistId) {
        var _this = this;
        var url = this.gistUrl + gistId + '/raw';
        return new Promise(function (resolve, reject) {
            _this.httpService.get(url).subscribe(function (val) { resolve(val); }, function (err) { reject(err); });
        });
    };
    ComposeComponent.prototype.run = function () {
        var _this = this;
        this.appCom.fpEval(this.mainCode).then(function (val) { return _this.consoleOutput = String(val); });
    };
    return ComposeComponent;
}());
ComposeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: '[app-com]',
        template: __webpack_require__("../../../../../src/app/slides/compose.component.html"),
        styles: [__webpack_require__("../../../../../src/app/slides/slides.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__app_http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__app_http_service__["a" /* HttpService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__app_component__["a" /* AppComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__app_component__["a" /* AppComponent */]) === "function" && _b || Object])
], ComposeComponent);

var _a, _b;
//# sourceMappingURL=compose.component.js.map

/***/ }),

/***/ "../../../../../src/app/slides/currying.component.html":
/***/ (function(module, exports) {

module.exports = "<section>\r\n    <div>\r\n        <h3 class='yellow'>Curried Function</h3>\r\n    </div>\r\n</section>\r\n\r\n<section data-state='slide_curry'>\r\n    <div>\r\n        <h3></h3>\r\n        <p class='yellow'>A function that will return a new function until it receives all its arguments</p>\r\n    </div>\r\n    <div class=\"eWrapper\">\r\n        <div class=\"eBox\">\r\n            <ngx-monaco-editor class=\"mEditor\" [options]=\"jsEditorOptions\" [(ngModel)]=\"mainCode\">\r\n            </ngx-monaco-editor>\r\n            <button type=\"button\" class=\"btn btn-success run\" (click)=\"run()\">Run</button>\r\n            <br/>\r\n        </div>\r\n        <div class=\"eBox\">\r\n            <ngx-monaco-editor class=\"mEditorOut\" [options]=\"htmlEditorOptions\" [(ngModel)]=\"consoleOutput\">\r\n            </ngx-monaco-editor>\r\n        </div>\r\n    </div>\r\n</section>"

/***/ }),

/***/ "../../../../../src/app/slides/currying.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CurryingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_http_service__ = __webpack_require__("../../../../../src/app/app.http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_reveal_js__ = __webpack_require__("../../../../reveal.js/js/reveal.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_reveal_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_reveal_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config_json__ = __webpack_require__("../../../../../config.json");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__config_json__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CurryingComponent = (function () {
    function CurryingComponent(httpService, appCom) {
        this.httpService = httpService;
        this.appCom = appCom;
        this.jsEditorOptions = {};
        this.htmlEditorOptions = {};
        this.gistUrl = __WEBPACK_IMPORTED_MODULE_4__config_json__["gist"].apiUrl;
        this.initEditor();
    }
    CurryingComponent.prototype.ngOnInit = function () {
        var that = this;
        __WEBPACK_IMPORTED_MODULE_3_reveal_js__["addEventListener"]('slide_curry', function () {
            that.initEditor();
            that.getCode('67ae60ff62f34216b3a88b01623ba291').then(function (val) { return that.mainCode = String(val); });
        }, false);
    };
    CurryingComponent.prototype.initEditor = function () {
        this.jsEditorOptions = Object.assign({}, __WEBPACK_IMPORTED_MODULE_4__config_json__["jsEditorOptions"]);
        this.htmlEditorOptions = Object.assign({}, __WEBPACK_IMPORTED_MODULE_4__config_json__["htmlEditorOptions"]);
    };
    CurryingComponent.prototype.getCode = function (gistId) {
        var _this = this;
        var url = this.gistUrl + gistId + '/raw';
        return new Promise(function (resolve, reject) {
            _this.httpService.get(url).subscribe(function (val) { resolve(val); }, function (err) { reject(err); });
        });
    };
    CurryingComponent.prototype.run = function () {
        var _this = this;
        this.appCom.fpEval(this.mainCode).then(function (val) { return _this.consoleOutput = String(val); });
    };
    return CurryingComponent;
}());
CurryingComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: '[app-curry]',
        template: __webpack_require__("../../../../../src/app/slides/currying.component.html"),
        styles: [__webpack_require__("../../../../../src/app/slides/slides.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__app_http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__app_http_service__["a" /* HttpService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]) === "function" && _b || Object])
], CurryingComponent);

var _a, _b;
//# sourceMappingURL=currying.component.js.map

/***/ }),

/***/ "../../../../../src/app/slides/function.component.html":
/***/ (function(module, exports) {

module.exports = "<section>\r\n    <div>\r\n        <h3 class='yellow'>What is a Function ?</h3>\r\n    </div>\r\n</section>\r\n\r\n<section>\r\n    <div>\r\n        <h3>Math definition</h3>\r\n        <p class='yellow'>A function relates each element of a set with exactly one element of another set and is denoted as f: X -> Y\r\n        </p>\r\n    </div>\r\n    <div class='fn'>\r\n        <img src=\"assets/images/function-sets.svg\">\r\n    </div>\r\n\r\n    <div>\r\n        <p>'One-to-many' is not allowed, but 'many-to-one' is allowed</p>\r\n        <div class='fnWrapper'>\r\n            <div class='fnBox'>\r\n                <img src=\"assets/images/function-sets-1-2.gif\">\r\n            </div>\r\n            <div class='fnBox'>\r\n                <img src=\"assets/images/function-sets-2-1.gif\">\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>"

/***/ }),

/***/ "../../../../../src/app/slides/function.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FunctionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FunctionComponent = (function () {
    function FunctionComponent() {
    }
    return FunctionComponent;
}());
FunctionComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: '[app-fn]',
        template: __webpack_require__("../../../../../src/app/slides/function.component.html"),
        styles: [__webpack_require__("../../../../../src/app/slides/slides.component.css")]
    })
], FunctionComponent);

//# sourceMappingURL=function.component.js.map

/***/ }),

/***/ "../../../../../src/app/slides/functors.component.html":
/***/ (function(module, exports) {

module.exports = "<section>\r\n    <div>\r\n        <h3 class='yellow'>Functors</h3>\r\n        <p>\r\n            A functor is a <i>type</i> you can map over.<br/>\r\n            Functors apply a function to a wrapped value\r\n        </p>\r\n    </div>\r\n</section>\r\n\r\n<section>\r\n    <div>\r\n        <p>Let' take a simple value</p>\r\n        <img class='functorImg' src=\"assets/images/functor_value.png\">\r\n    </div>\r\n</section>\r\n\r\n<section>\r\n    <div>\r\n        <p>We know how to apply a function to this value</p>\r\n        <img class='functorImg' src=\"assets/images/functor_value_fun.png\">\r\n    </div>\r\n</section>\r\n\r\n<section>\r\n    <div>\r\n        <p>Introducing container</p>\r\n        <img class='functorImg' src=\"assets/images/functor_value_wrapper.png\">\r\n    </div>\r\n</section>\r\n\r\n<section>\r\n    <div>\r\n        <p>You can’t apply a normal function to the container</p>\r\n        <img class='functorImg' src=\"assets/images/functor_value_wrapper_normal_fun.png\">\r\n    </div>\r\n</section>\r\n\r\n<section>\r\n    <div>\r\n        <p>You need Map function</p>\r\n        <img class='functorImg' src=\"assets/images/functor_value_wrapper_map.png\">\r\n    </div>\r\n</section>\r\n\r\n<section>\r\n    <div>\r\n        <p>Map | Behind the scenes</p>\r\n        <img class='functorImg' src=\"assets/images/functor_value_wrapper_map_in_detail.png\">\r\n    </div>\r\n</section>\r\n\r\n<section data-state='slide_functor'>\r\n    <div>\r\n        <h3></h3>\r\n        <p class='yellow'>Functors | Example</p>\r\n    </div>\r\n    <div class=\"eWrapper\">\r\n        <div class=\"eBox\">\r\n            <ngx-monaco-editor class=\"mEditor\" [options]=\"jsEditorOptions\" [(ngModel)]=\"mainCode\">\r\n            </ngx-monaco-editor>\r\n            <button type=\"button\" class=\"btn btn-success run\" (click)=\"run()\">Run</button>\r\n            <br/>\r\n        </div>\r\n        <div class=\"eBox\">\r\n            <ngx-monaco-editor class=\"mEditorOut\" [options]=\"htmlEditorOptions\" [(ngModel)]=\"consoleOutput\">\r\n            </ngx-monaco-editor>\r\n        </div>\r\n    </div>\r\n</section>"

/***/ }),

/***/ "../../../../../src/app/slides/functors.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FunctorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_http_service__ = __webpack_require__("../../../../../src/app/app.http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_reveal_js__ = __webpack_require__("../../../../reveal.js/js/reveal.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_reveal_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_reveal_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config_json__ = __webpack_require__("../../../../../config.json");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__config_json__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FunctorComponent = (function () {
    function FunctorComponent(httpService, appCom) {
        this.httpService = httpService;
        this.appCom = appCom;
        this.jsEditorOptions = {};
        this.htmlEditorOptions = {};
        this.gistUrl = __WEBPACK_IMPORTED_MODULE_4__config_json__["gist"].apiUrl;
        this.initEditor();
    }
    FunctorComponent.prototype.ngOnInit = function () {
        var that = this;
        __WEBPACK_IMPORTED_MODULE_3_reveal_js__["addEventListener"]('slide_functor', function () {
            that.initEditor();
            that.getCode('acb11e073f0270d8cd2be5a931dfe23a').then(function (val) { return that.mainCode = String(val); });
        }, false);
    };
    FunctorComponent.prototype.initEditor = function () {
        this.jsEditorOptions = Object.assign({}, __WEBPACK_IMPORTED_MODULE_4__config_json__["jsEditorOptions"]);
        this.htmlEditorOptions = Object.assign({}, __WEBPACK_IMPORTED_MODULE_4__config_json__["htmlEditorOptions"]);
    };
    FunctorComponent.prototype.getCode = function (gistId) {
        var _this = this;
        var url = this.gistUrl + gistId + '/raw';
        return new Promise(function (resolve, reject) {
            _this.httpService.get(url).subscribe(function (val) { resolve(val); }, function (err) { reject(err); });
        });
    };
    FunctorComponent.prototype.run = function () {
        var _this = this;
        this.appCom.fpEval(this.mainCode).then(function (val) { return _this.consoleOutput = String(val); });
    };
    return FunctorComponent;
}());
FunctorComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: '[app-functor]',
        template: __webpack_require__("../../../../../src/app/slides/functors.component.html"),
        styles: [__webpack_require__("../../../../../src/app/slides/slides.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__app_http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__app_http_service__["a" /* HttpService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__app_component__["a" /* AppComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__app_component__["a" /* AppComponent */]) === "function" && _b || Object])
], FunctorComponent);

var _a, _b;
//# sourceMappingURL=functors.component.js.map

/***/ }),

/***/ "../../../../../src/app/slides/hof.component.html":
/***/ (function(module, exports) {

module.exports = "<section>\r\n    <div>\r\n        <h3 class='yellow'>Higher Order Function</h3>\r\n    </div>\r\n</section>\r\n\r\n<section data-state='slide_hof'>\r\n    <div>\r\n        <p class='yellow'>Functions which take functions as input or return functions as output</p>\r\n    </div>\r\n    <div class=\"eWrapper\">\r\n        <div class=\"eBox\">\r\n            <ngx-monaco-editor class=\"mEditor\" [options]=\"jsEditorOptions\" [(ngModel)]=\"mainCode\">\r\n            </ngx-monaco-editor>\r\n            <button type=\"button\" class=\"btn btn-success run\" (click)=\"run()\">Run</button>\r\n            <br/>\r\n        </div>\r\n        <div class=\"eBox\">\r\n            <ngx-monaco-editor class=\"mEditorOut\" [options]=\"htmlEditorOptions\" [(ngModel)]=\"consoleOutput\">\r\n            </ngx-monaco-editor>\r\n        </div>\r\n    </div>\r\n</section>"

/***/ }),

/***/ "../../../../../src/app/slides/hof.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HOFComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_http_service__ = __webpack_require__("../../../../../src/app/app.http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_reveal_js__ = __webpack_require__("../../../../reveal.js/js/reveal.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_reveal_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_reveal_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config_json__ = __webpack_require__("../../../../../config.json");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__config_json__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HOFComponent = (function () {
    function HOFComponent(httpService, appCom) {
        this.httpService = httpService;
        this.appCom = appCom;
        this.jsEditorOptions = {};
        this.htmlEditorOptions = {};
        this.gistUrl = __WEBPACK_IMPORTED_MODULE_4__config_json__["gist"].apiUrl;
        this.initEditor();
    }
    HOFComponent.prototype.ngOnInit = function () {
        var that = this;
        __WEBPACK_IMPORTED_MODULE_3_reveal_js__["addEventListener"]('slide_hof', function () {
            that.initEditor();
            that.getCode('124de8bf19269466819dccc6c11fec75').then(function (val) { return that.mainCode = String(val); });
        }, false);
    };
    HOFComponent.prototype.initEditor = function () {
        this.jsEditorOptions = Object.assign({}, __WEBPACK_IMPORTED_MODULE_4__config_json__["jsEditorOptions"]);
        this.htmlEditorOptions = Object.assign({}, __WEBPACK_IMPORTED_MODULE_4__config_json__["htmlEditorOptions"]);
    };
    HOFComponent.prototype.getCode = function (gistId) {
        var _this = this;
        var url = this.gistUrl + gistId + '/raw';
        return new Promise(function (resolve, reject) {
            _this.httpService.get(url).subscribe(function (val) { resolve(val); }, function (err) { reject(err); });
        });
    };
    HOFComponent.prototype.run = function () {
        var _this = this;
        this.appCom.fpEval(this.mainCode).then(function (val) { return _this.consoleOutput = String(val); });
    };
    return HOFComponent;
}());
HOFComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: '[app-hof]',
        template: __webpack_require__("../../../../../src/app/slides/hof.component.html"),
        styles: [__webpack_require__("../../../../../src/app/slides/slides.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__app_http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__app_http_service__["a" /* HttpService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__app_component__["a" /* AppComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__app_component__["a" /* AppComponent */]) === "function" && _b || Object])
], HOFComponent);

var _a, _b;
//# sourceMappingURL=hof.component.js.map

/***/ }),

/***/ "../../../../../src/app/slides/lambda.component.html":
/***/ (function(module, exports) {

module.exports = "<section>\r\n    <div>\r\n        <h3 class='yellow'>Lambda Calculus λ</h3>\r\n        <p>\r\n            Universal model of computation based on function application\r\n        </p>\r\n    </div>\r\n</section>\r\n\r\n<section>\r\n    <div>\r\n        <h3 class='yellow'>Lambda Calculus features <br/> Functions are first-class</h3>\r\n        <p>functions can be used as inputs to other functions, and functions can return functions</p>\r\n    </div>\r\n</section>\r\n\r\n<section>\r\n    <div>\r\n        <h3 class='yellow'>Lambda Calculus features <br/> Anonymous Functions</h3>\r\n        <p>Functions are always anonymous</p>\r\n        <pre><code class=\"javascript\">\r\n            let add2 = (x) => x + 2;</code></pre>\r\n    </div>\r\n</section>\r\n\r\n<section>\r\n    <div>\r\n        <h3 class='yellow'>Lambda Calculus features <br/> Unary Functions</h3>\r\n        <p>Functions in lambda calculus only accept a single input.\r\n            <br/> If you need more than one parameter, the function will take one input and return a new function that takes the\r\n            next.\r\n        </p>\r\n        <pre><code class=\"javascript\">\r\n                (x, y) => x + y;\r\n                (x) => (y) => x + y;\r\n            </code></pre>\r\n    </div>\r\n</section>"

/***/ }),

/***/ "../../../../../src/app/slides/lambda.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LambdaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var LambdaComponent = (function () {
    function LambdaComponent() {
    }
    return LambdaComponent;
}());
LambdaComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: '[app-lambda]',
        template: __webpack_require__("../../../../../src/app/slides/lambda.component.html"),
        styles: [__webpack_require__("../../../../../src/app/slides/slides.component.css")]
    })
], LambdaComponent);

//# sourceMappingURL=lambda.component.js.map

/***/ }),

/***/ "../../../../../src/app/slides/mapreduce.component.html":
/***/ (function(module, exports) {

module.exports = "<section data-state='slide_mr'>\r\n    <div>\r\n        <p class='yellow'>Higher Order Function | Example</p>\r\n    </div>\r\n    <ngx-monaco-editor class=\"mEditor\" [options]=\"jsEditorOptions\" [(ngModel)]=\"mainCode\">\r\n    </ngx-monaco-editor>\r\n</section>\r\n\r\n<section data-state='slide_mr_1'>\r\n    <div>\r\n        <p class='yellow'>Using a for-loop we would write something like this</p>\r\n    </div>\r\n    <div class=\"eWrapper\">\r\n        <div class=\"eBox\">\r\n            <ngx-monaco-editor class=\"mEditor\" [options]=\"jsEditorOptions\" [(ngModel)]=\"mainCode_1\">\r\n            </ngx-monaco-editor>\r\n            <button type=\"button\" class=\"btn btn-success run\" (click)=\"run_1()\">Run</button>\r\n            <br/>\r\n        </div>\r\n        <div class=\"eBox\">\r\n            <ngx-monaco-editor class=\"mEditorOut\" [options]=\"htmlEditorOptions\" [(ngModel)]=\"consoleOutput_1\">\r\n            </ngx-monaco-editor>\r\n        </div>\r\n    </div>\r\n</section>\r\n\r\n<section>\r\n    <div>\r\n        <h3>Map</h3>\r\n        <p class='yellow'>A map fn takes a list and a function as input. The function is applied to every element of the list generating an\r\n            output list.\r\n        </p>\r\n    </div>\r\n</section>\r\n<section>\r\n    <div class=\"mrWrapper\">\r\n        <div class=\"mrBox\">\r\n            <img src=\"assets/images/pomegranate.png\">\r\n        </div>\r\n        <div class=\"mrBox\">\r\n            <img src=\"assets/images/orange.png\">\r\n        </div>\r\n        <div class=\"mrBox\">\r\n            <img src=\"assets/images/watermelon.png\">\r\n        </div>\r\n        <div class=\"mrBox\">\r\n            <img src=\"assets/images/lemon.png\">\r\n        </div>\r\n    </div>\r\n</section>\r\n<section>\r\n    <div class=\"mrWrapper\">\r\n        <div class=\"mrBox\">\r\n            <img src=\"assets/images/pomegranate.png\">\r\n        </div>\r\n        <div class=\"mrBox\">\r\n            <img src=\"assets/images/orange.png\">\r\n        </div>\r\n        <div class=\"mrBox\">\r\n            <img src=\"assets/images/watermelon.png\">\r\n        </div>\r\n        <div class=\"mrBox\">\r\n            <img src=\"assets/images/lemon.png\">\r\n        </div>\r\n    </div>\r\n    <div class=\"mrWrapper\">\r\n        <div class=\"mrBox\">\r\n            <img src=\"assets/images/map.png\">\r\n        </div>\r\n        <div class=\"mrBox\">\r\n            <img src=\"assets/images/map.png\">\r\n        </div>\r\n        <div class=\"mrBox\">\r\n            <img src=\"assets/images/map.png\">\r\n        </div>\r\n        <div class=\"mrBox\">\r\n            <img src=\"assets/images/map.png\">\r\n        </div>\r\n    </div>\r\n</section>\r\n<section>\r\n    <div class=\"mrWrapper\">\r\n        <div class=\"mrBox\">\r\n            <img src=\"assets/images/pomegranate.png\">\r\n        </div>\r\n        <div class=\"mrBox\">\r\n            <img src=\"assets/images/orange.png\">\r\n        </div>\r\n        <div class=\"mrBox\">\r\n            <img src=\"assets/images/watermelon.png\">\r\n        </div>\r\n        <div class=\"mrBox\">\r\n            <img src=\"assets/images/lemon.png\">\r\n        </div>\r\n    </div>\r\n    <div class=\"mrWrapper\">\r\n        <div class=\"mrBox\">\r\n            <img src=\"assets/images/map.png\">\r\n        </div>\r\n        <div class=\"mrBox\">\r\n            <img src=\"assets/images/map.png\">\r\n        </div>\r\n        <div class=\"mrBox\">\r\n            <img src=\"assets/images/map.png\">\r\n        </div>\r\n        <div class=\"mrBox\">\r\n            <img src=\"assets/images/map.png\">\r\n        </div>\r\n    </div>\r\n    <div class=\"mrWrapper\">\r\n        <div class=\"mrBox\">\r\n            <img src=\"assets/images/pomegranate_1.png\">\r\n        </div>\r\n        <div class=\"mrBox\">\r\n            <img src=\"assets/images/orange_1.png\">\r\n        </div>\r\n        <div class=\"mrBox\">\r\n            <img src=\"assets/images/watermelon_1.png\">\r\n        </div>\r\n        <div class=\"mrBox\">\r\n            <img src=\"assets/images/lemon_1.png\">\r\n        </div>\r\n    </div>\r\n</section>\r\n\r\n\r\n<section>\r\n    <div>\r\n        <h3>Reduce (fold)</h3>\r\n        <p class='yellow'>A reduce fn takes a list, an initial value and a fn as input and The function is applied to every element accumulating\r\n            the output in each step.\r\n        </p>\r\n    </div>\r\n</section>\r\n<section>\r\n    <div class=\"mrWrapper\">\r\n        <div class=\"mrBox\">\r\n            <img src=\"assets/images/pomegranate.png\">\r\n        </div>\r\n        <div class=\"mrBox\">\r\n            <img src=\"assets/images/orange.png\">\r\n        </div>\r\n        <div class=\"mrBox\">\r\n            <img src=\"assets/images/watermelon.png\">\r\n        </div>\r\n        <div class=\"mrBox\">\r\n            <img src=\"assets/images/lemon.png\">\r\n        </div>\r\n    </div>\r\n</section>\r\n<section>\r\n    <div class=\"mrWrapper\">\r\n        <div class=\"mrBox\">\r\n            <img src=\"assets/images/pomegranate.png\">\r\n        </div>\r\n        <div class=\"mrBox\">\r\n            <img src=\"assets/images/orange.png\">\r\n        </div>\r\n        <div class=\"mrBox\">\r\n            <img src=\"assets/images/watermelon.png\">\r\n        </div>\r\n        <div class=\"mrBox\">\r\n            <img src=\"assets/images/lemon.png\">\r\n        </div>\r\n    </div>\r\n    <div class=\"mrWrapperReducefn\">\r\n        <div class=\"mrBox\">\r\n            <img src=\"assets/images/fruit-bowl.png\">\r\n        </div>\r\n        <div class=\"mrBox\">\r\n            <img src=\"assets/images/reduce.png\">\r\n        </div>\r\n    </div>\r\n</section>\r\n<section>\r\n    <div class=\"mrWrapper\">\r\n        <div class=\"mrBox\">\r\n            <img src=\"assets/images/pomegranate.png\">\r\n        </div>\r\n        <div class=\"mrBox\">\r\n            <img src=\"assets/images/orange.png\">\r\n        </div>\r\n        <div class=\"mrBox\">\r\n            <img src=\"assets/images/watermelon.png\">\r\n        </div>\r\n        <div class=\"mrBox\">\r\n            <img src=\"assets/images/lemon.png\">\r\n        </div>\r\n    </div>\r\n    <div class=\"mrWrapperReducefn\">\r\n        <div class=\"mrBox\">\r\n            <img src=\"assets/images/fruit-bowl.png\">\r\n        </div>\r\n        <div class=\"mrBox\">\r\n            <img src=\"assets/images/reduce.png\">\r\n        </div>\r\n    </div>\r\n    <div class=\"mrWrapperReducefnOut\">\r\n        <div class=\"mrBox\">\r\n        </div>\r\n        <div class=\"mrBox\">\r\n            <img src=\"assets/images/fruit-salad.png\">\r\n        </div>\r\n    </div>\r\n</section>\r\n\r\n<section data-state='slide_mr_2'>\r\n    <div>\r\n        <p class='yellow'>Using a Higher Order Functions like Map and Reduce</p>\r\n    </div>\r\n    <div class=\"eWrapper\">\r\n        <div class=\"eBox\">\r\n            <ngx-monaco-editor class=\"mEditor\" [options]=\"jsEditorOptions\" [(ngModel)]=\"mainCode_2\">\r\n            </ngx-monaco-editor>\r\n            <button type=\"button\" class=\"btn btn-success run\" (click)=\"run_2()\">Run</button>\r\n            <br/>\r\n        </div>\r\n        <div class=\"eBox\">\r\n            <ngx-monaco-editor class=\"mEditorOut\" [options]=\"htmlEditorOptions\" [(ngModel)]=\"consoleOutput_2\">\r\n            </ngx-monaco-editor>\r\n        </div>\r\n    </div>\r\n</section>"

/***/ }),

/***/ "../../../../../src/app/slides/mapreduce.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MRComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_http_service__ = __webpack_require__("../../../../../src/app/app.http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_reveal_js__ = __webpack_require__("../../../../reveal.js/js/reveal.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_reveal_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_reveal_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config_json__ = __webpack_require__("../../../../../config.json");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__config_json__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MRComponent = (function () {
    function MRComponent(httpService, appCom) {
        this.httpService = httpService;
        this.appCom = appCom;
        this.jsEditorOptions = {};
        this.htmlEditorOptions = {};
        this.gistUrl = __WEBPACK_IMPORTED_MODULE_4__config_json__["gist"].apiUrl;
        this.initEditor();
    }
    MRComponent.prototype.ngOnInit = function () {
        var that = this;
        __WEBPACK_IMPORTED_MODULE_3_reveal_js__["addEventListener"]('slide_mr', function () {
            that.initEditor();
            that.getCode('962e76ccef7dd8703c1365fa9388124e').then(function (val) { return that.mainCode = String(val); });
        }, false);
        __WEBPACK_IMPORTED_MODULE_3_reveal_js__["addEventListener"]('slide_mr_1', function () {
            that.initEditor();
            that.getCode('db012916dd89f58fdc032e4cb3ed898b').then(function (val) { return that.mainCode_1 = String(val); });
        }, false);
        __WEBPACK_IMPORTED_MODULE_3_reveal_js__["addEventListener"]('slide_mr_2', function () {
            that.initEditor();
            that.getCode('deb73a0eddceaa84f2d7502ba44520ba').then(function (val) { return that.mainCode_2 = String(val); });
        }, false);
    };
    MRComponent.prototype.initEditor = function () {
        this.jsEditorOptions = Object.assign({}, __WEBPACK_IMPORTED_MODULE_4__config_json__["jsEditorOptions"]);
        this.htmlEditorOptions = Object.assign({}, __WEBPACK_IMPORTED_MODULE_4__config_json__["htmlEditorOptions"]);
    };
    MRComponent.prototype.getCode = function (gistId) {
        var _this = this;
        var url = this.gistUrl + gistId + '/raw';
        return new Promise(function (resolve, reject) {
            _this.httpService.get(url).subscribe(function (val) { resolve(val); }, function (err) { reject(err); });
        });
    };
    MRComponent.prototype.run = function () {
        var _this = this;
        this.appCom.fpEval(this.mainCode).then(function (val) { return _this.consoleOutput = String(val); });
    };
    MRComponent.prototype.run_1 = function () {
        var _this = this;
        this.appCom.fpEval(this.mainCode_1).then(function (val) { return _this.consoleOutput_1 = String(val); });
    };
    MRComponent.prototype.run_2 = function () {
        var _this = this;
        this.appCom.fpEval(this.mainCode_2).then(function (val) { return _this.consoleOutput_2 = String(val); });
    };
    return MRComponent;
}());
MRComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: '[app-mr]',
        template: __webpack_require__("../../../../../src/app/slides/mapreduce.component.html"),
        styles: [__webpack_require__("../../../../../src/app/slides/slides.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__app_http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__app_http_service__["a" /* HttpService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]) === "function" && _b || Object])
], MRComponent);

var _a, _b;
//# sourceMappingURL=mapreduce.component.js.map

/***/ }),

/***/ "../../../../../src/app/slides/monads.component.html":
/***/ (function(module, exports) {

module.exports = "<section>\r\n    <div>\r\n        <h3 class='yellow'>Monads</h3>\r\n        <p>\r\n            Monads apply a function that returns a wrapped value to a wrapped value.\r\n        </p>\r\n    </div>\r\n</section>\r\n\r\n<section>\r\n    <div>\r\n        <p>Let's see an example. Maybe monad</p>\r\n        <img class='functorImg' src=\"assets/images/monad_maybe.png\">\r\n    </div>\r\n</section>\r\n\r\n<section>\r\n    <div>\r\n        <p>\r\n            <i>half</i> is a function that only works on even numbers</p>\r\n        <img src=\"assets/images/monad_half_1.png\">\r\n    </div>\r\n</section>\r\n\r\n<section>\r\n    <div>\r\n        <p>If we feed it a wrapped value?</p>\r\n        <img src=\"assets/images/monad_half_2.png\">\r\n    </div>\r\n</section>\r\n\r\n<section>\r\n    <div>\r\n        <p>You need FlatMap a.k.a Bind function</p>\r\n        <img class='monadImg' src=\"assets/images/monad_in_action.png\">\r\n    </div>\r\n</section>\r\n\r\n<section>\r\n    <div>\r\n        <p>We can chain these calls</p>\r\n        <img class='monadImg1' src=\"assets/images/monad_example.png\">\r\n    </div>\r\n</section>\r\n\r\n<section data-state='slide_monad'>\r\n    <div>\r\n        <h3></h3>\r\n        <p class='yellow'>Monads | Example</p>\r\n    </div>\r\n    <div class=\"eWrapper\">\r\n        <div class=\"eBox\">\r\n            <ngx-monaco-editor class=\"mEditor\" [options]=\"jsEditorOptions\" [(ngModel)]=\"mainCode\">\r\n            </ngx-monaco-editor>\r\n            <button type=\"button\" class=\"btn btn-success run\" (click)=\"run()\">Run</button>\r\n            <br/>\r\n        </div>\r\n        <div class=\"eBox\">\r\n            <ngx-monaco-editor class=\"mEditorOut\" [options]=\"htmlEditorOptions\" [(ngModel)]=\"consoleOutput\">\r\n            </ngx-monaco-editor>\r\n        </div>\r\n    </div>\r\n</section>"

/***/ }),

/***/ "../../../../../src/app/slides/monads.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MonadComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_http_service__ = __webpack_require__("../../../../../src/app/app.http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_reveal_js__ = __webpack_require__("../../../../reveal.js/js/reveal.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_reveal_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_reveal_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config_json__ = __webpack_require__("../../../../../config.json");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__config_json__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MonadComponent = (function () {
    function MonadComponent(httpService, appCom) {
        this.httpService = httpService;
        this.appCom = appCom;
        this.jsEditorOptions = {};
        this.htmlEditorOptions = {};
        this.gistUrl = __WEBPACK_IMPORTED_MODULE_4__config_json__["gist"].apiUrl;
        this.initEditor();
    }
    MonadComponent.prototype.ngOnInit = function () {
        var that = this;
        __WEBPACK_IMPORTED_MODULE_3_reveal_js__["addEventListener"]('slide_monad', function () {
            that.initEditor();
            that.getCode('ba3f8af8219debfa364a7c6a2fedba94').then(function (val) { return that.mainCode = String(val); });
        }, false);
    };
    MonadComponent.prototype.initEditor = function () {
        this.jsEditorOptions = Object.assign({}, __WEBPACK_IMPORTED_MODULE_4__config_json__["jsEditorOptions"]);
        this.htmlEditorOptions = Object.assign({}, __WEBPACK_IMPORTED_MODULE_4__config_json__["htmlEditorOptions"]);
    };
    MonadComponent.prototype.getCode = function (gistId) {
        var _this = this;
        var url = this.gistUrl + gistId + '/raw';
        return new Promise(function (resolve, reject) {
            _this.httpService.get(url).subscribe(function (val) { resolve(val); }, function (err) { reject(err); });
        });
    };
    MonadComponent.prototype.run = function () {
        var _this = this;
        this.appCom.fpEval(this.mainCode).then(function (val) { return _this.consoleOutput = String(val); });
    };
    return MonadComponent;
}());
MonadComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: '[app-monad]',
        template: __webpack_require__("../../../../../src/app/slides/monads.component.html"),
        styles: [__webpack_require__("../../../../../src/app/slides/slides.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__app_http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__app_http_service__["a" /* HttpService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__app_component__["a" /* AppComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__app_component__["a" /* AppComponent */]) === "function" && _b || Object])
], MonadComponent);

var _a, _b;
//# sourceMappingURL=monads.component.js.map

/***/ }),

/***/ "../../../../../src/app/slides/paradigm.component.html":
/***/ (function(module, exports) {

module.exports = "<section>\r\n    <div>\r\n        <h3 class='yellow'>Programming Paradigm</h3>\r\n    </div>\r\n</section>\r\n\r\n<section>\r\n    <div>\r\n        <p class='yellow'>Classification of various paradigms\r\n            <br/> is based a particular style of programming</p>\r\n        <img class='pfImg' src=\"assets/images/paradigm.png\">\r\n    </div>\r\n</section>\r\n\r\n<section>\r\n    <div>\r\n        <h3 class='yellow'>Imperative Programming Paradigm</h3>\r\n        <p>\r\n            A programming style where computation is expressed as a sequence of statements which change state\r\n        </p>\r\n    </div>\r\n</section>\r\n\r\n<section>\r\n    <div>\r\n        <h3 class='yellow'>Imperative Programming Paradigm</h3>\r\n        <p>\r\n            Based on Von Neumann machine with registers and modifiable memory. The memory is manipulated by the program through variables\r\n            and assignments\r\n        </p>\r\n    </div>\r\n</section>\r\n\r\n<section>\r\n    <div>\r\n        <h3 class='yellow'>Imperative Programming Paradigm</h3>\r\n        <p>\r\n            Order of execution is important and primary control flow are loops, conditions, function (sub-routine or method) calls\r\n        </p>\r\n    </div>\r\n</section>\r\n\r\n<section>\r\n    <div>\r\n        <h3 class='yellow'>Object-Oriented Programming Paradigm</h3>\r\n        <p>\r\n            A programming style where computation is expressed as a composition of objects which combine data and code\r\n        </p>\r\n    </div>\r\n</section>\r\n\r\n<section>\r\n    <div>\r\n        <h3 class='yellow'>Declarative Programming Paradigm</h3>\r\n        <p>\r\n            A computational model where the problem is described in terms of ‘what’ and not ‘how’\r\n        </p>\r\n    </div>\r\n</section>\r\n\r\n<section>\r\n    <div>\r\n        <h3 class='yellow'>Funcational Programming Paradigm</h3>\r\n        <p>\r\n            A programming style where evaluation of expressions are emphasized over execution of commands. <br/>Mutable state is mostly avoided\r\n        </p>\r\n    </div>\r\n</section>"

/***/ }),

/***/ "../../../../../src/app/slides/paradigm.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParadigmComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_http_service__ = __webpack_require__("../../../../../src/app/app.http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_reveal_js__ = __webpack_require__("../../../../reveal.js/js/reveal.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_reveal_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_reveal_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config_json__ = __webpack_require__("../../../../../config.json");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__config_json__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ParadigmComponent = (function () {
    function ParadigmComponent(httpService, appCom) {
        this.httpService = httpService;
        this.appCom = appCom;
        this.jsEditorOptions = {};
        this.htmlEditorOptions = {};
        this.gistUrl = __WEBPACK_IMPORTED_MODULE_4__config_json__["gist"].apiUrl;
        this.initEditor();
    }
    ParadigmComponent.prototype.ngOnInit = function () {
        var that = this;
        __WEBPACK_IMPORTED_MODULE_3_reveal_js__["addEventListener"]('slide_paradigm', function () {
            that.initEditor();
            that.getCode('4c3b68f11e404db9431bafca17644e7d').then(function (val) { return that.mainCode = String(val); });
        }, false);
    };
    ParadigmComponent.prototype.initEditor = function () {
        this.jsEditorOptions = Object.assign({}, __WEBPACK_IMPORTED_MODULE_4__config_json__["jsEditorOptions"]);
        this.htmlEditorOptions = Object.assign({}, __WEBPACK_IMPORTED_MODULE_4__config_json__["htmlEditorOptions"]);
    };
    ParadigmComponent.prototype.getCode = function (gistId) {
        var _this = this;
        var url = this.gistUrl + gistId + '/raw';
        return new Promise(function (resolve, reject) {
            _this.httpService.get(url).subscribe(function (val) { resolve(val); }, function (err) { reject(err); });
        });
    };
    ParadigmComponent.prototype.run = function () {
        var _this = this;
        this.appCom.fpEval(this.mainCode).then(function (val) { return _this.consoleOutput = String(val); });
    };
    ParadigmComponent.prototype.codeHgl = function () {
        jQuery('pre code').each(function (i, block) {
            hljs.highlightBlock(block);
        });
    };
    return ParadigmComponent;
}());
ParadigmComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: '[app-paradigm]',
        template: __webpack_require__("../../../../../src/app/slides/paradigm.component.html"),
        styles: [__webpack_require__("../../../../../src/app/slides/slides.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__app_http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__app_http_service__["a" /* HttpService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__app_component__["a" /* AppComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__app_component__["a" /* AppComponent */]) === "function" && _b || Object])
], ParadigmComponent);

var _a, _b;
//# sourceMappingURL=paradigm.component.js.map

/***/ }),

/***/ "../../../../../src/app/slides/pure.functions.component.html":
/***/ (function(module, exports) {

module.exports = "<section>\r\n    <div>\r\n        <h3 class='yellow'>Pure Function</h3>\r\n    </div>\r\n</section>\r\n\r\n<section>\r\n    <div>\r\n        <p class='yellow'>A function that, given the same input, will always return the same output and does not have any observable side effect.</p>\r\n        <img class='pfImg' src=\"assets/images/pf.png\">\r\n    </div>\r\n</section>\r\n\r\n<section data-state='slide_pf'>\r\n    <div>\r\n        <p class='yellow'>Pure Function | Example</p>\r\n    </div>\r\n    <div class=\"eWrapper\">\r\n        <div class=\"eBox\">\r\n            <ngx-monaco-editor class=\"mEditor\" [options]=\"jsEditorOptions\" [(ngModel)]=\"mainCode\">\r\n            </ngx-monaco-editor>\r\n            <button type=\"button\" class=\"btn btn-success run\" (click)=\"run()\">Run</button>\r\n            <br/>\r\n        </div>\r\n        <div class=\"eBox\">\r\n            <ngx-monaco-editor class=\"mEditorOut\" [options]=\"htmlEditorOptions\" [(ngModel)]=\"consoleOutput\">\r\n            </ngx-monaco-editor>\r\n        </div>\r\n    </div>\r\n</section>"

/***/ }),

/***/ "../../../../../src/app/slides/pure.functions.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PureFunctionsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_http_service__ = __webpack_require__("../../../../../src/app/app.http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_reveal_js__ = __webpack_require__("../../../../reveal.js/js/reveal.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_reveal_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_reveal_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config_json__ = __webpack_require__("../../../../../config.json");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__config_json__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PureFunctionsComponent = (function () {
    function PureFunctionsComponent(httpService, appCom) {
        this.httpService = httpService;
        this.appCom = appCom;
        this.jsEditorOptions = {};
        this.htmlEditorOptions = {};
        this.gistUrl = __WEBPACK_IMPORTED_MODULE_4__config_json__["gist"].apiUrl;
        this.initEditor();
    }
    PureFunctionsComponent.prototype.ngOnInit = function () {
        var that = this;
        __WEBPACK_IMPORTED_MODULE_3_reveal_js__["addEventListener"]('slide_pf', function () {
            that.initEditor();
            that.getCode('e2b30c282780abaa7d3d3c3cbe4fee17').then(function (val) { return that.mainCode = String(val); });
        }, false);
    };
    PureFunctionsComponent.prototype.initEditor = function () {
        this.jsEditorOptions = Object.assign({}, __WEBPACK_IMPORTED_MODULE_4__config_json__["jsEditorOptions"]);
        this.htmlEditorOptions = Object.assign({}, __WEBPACK_IMPORTED_MODULE_4__config_json__["htmlEditorOptions"]);
    };
    PureFunctionsComponent.prototype.getCode = function (gistId) {
        var _this = this;
        var url = this.gistUrl + gistId + '/raw';
        return new Promise(function (resolve, reject) {
            _this.httpService.get(url).subscribe(function (val) { resolve(val); }, function (err) { reject(err); });
        });
    };
    PureFunctionsComponent.prototype.run = function () {
        var _this = this;
        this.appCom.fpEval(this.mainCode).then(function (val) { return _this.consoleOutput = String(val); });
    };
    return PureFunctionsComponent;
}());
PureFunctionsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: '[app-pf]',
        template: __webpack_require__("../../../../../src/app/slides/pure.functions.component.html"),
        styles: [__webpack_require__("../../../../../src/app/slides/slides.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__app_http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__app_http_service__["a" /* HttpService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]) === "function" && _b || Object])
], PureFunctionsComponent);

var _a, _b;
//# sourceMappingURL=pure.functions.component.js.map

/***/ }),

/***/ "../../../../../src/app/slides/slides.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mEditor {\r\n    height: 400px;\r\n    text-align: left;\r\n    font-size: 40px;\r\n    overflow: hidden;\r\n}\r\n.mEditorOut {\r\n    height: 400px;\r\n    text-align: left;\r\n    font-size: 40px;\r\n    overflow: hidden;\r\n}\r\n.monaco-editor { overflow: hidden; }\r\n\r\n.btn.run {\r\n    float: left;\r\n    margin-left: 10px;\r\n    margin-top: 10px;\r\n}\r\n\r\n.yellow {\r\n    color: #F8DC3D;\r\n}\r\n\r\nsection img {\r\n    background: none !important;\r\n    border: none !important;\r\n    margin-top: 10px !important;\r\n}\r\n\r\n.eWrapper {\r\n    display: -ms-grid;\r\n    display: grid;\r\n    -ms-grid-columns: 2fr 1fr;\r\n        grid-template-columns: 2fr 1fr;\r\n    grid-gap: 5px;\r\n}\r\n\r\n.eBox {\r\n    padding: 5px;\r\n}\r\n\r\n.mrWrapper {\r\n    display: -ms-grid;\r\n    display: grid;\r\n    -ms-grid-columns: (1fr)[4];\r\n        grid-template-columns: repeat(4, 1fr);\r\n    grid-auto-rows: 200px;\r\n}\r\n.mrWrapperReducefn {\r\n    display: -ms-grid;\r\n    display: grid;\r\n    -ms-grid-columns: 1fr 3fr;\r\n        grid-template-columns: 1fr 3fr;\r\n    grid-auto-rows: 200px; \r\n}\r\n.mrWrapperReducefnOut {\r\n    display: -ms-grid;\r\n    display: grid;\r\n    -ms-grid-columns: 3fr 1fr;\r\n        grid-template-columns: 3fr 1fr;\r\n    grid-auto-rows: 200px; \r\n}\r\n.mrBox {\r\n    padding: 1px;\r\n}\r\n.mrBox img {\r\n    width: 100px;\r\n    height: 100px;\r\n}\r\n.mrWrapperReducefn img {\r\n    width: auto !important;\r\n}\r\n\r\n.fnWrapper {\r\n    display: -ms-grid;\r\n    display: grid;\r\n    -ms-grid-columns: (1fr)[2];\r\n        grid-template-columns: repeat(2, 1fr);\r\n    grid-auto-rows: 100px;\r\n}\r\n.fn img {\r\n    width: 300px;\r\n    height: 190px;\r\n}\r\n.fnBox img {\r\n    width: 200px;\r\n    height: 190px;\r\n}\r\n\r\n.categoryImg {\r\n    height: 250px;\r\n}\r\n.categoryImgI {\r\n    height: 300px;\r\n}\r\n.categoryImgC {\r\n    height: 350px;\r\n}\r\n.categoryImgA {\r\n    height: 500px;\r\n}\r\n.pfImg {\r\n    height: 500px;\r\n}\r\n.functorImg {\r\n    height: 300px;\r\n}\r\n.monadImg {\r\n    height: 410px;\r\n}\r\n.monadImg1 {\r\n    height: 510px;\r\n}\r\n.applicativeWrapper {\r\n    display: -ms-grid;\r\n    display: grid;\r\n    -ms-grid-columns: (1fr)[2];\r\n        grid-template-columns: repeat(2, 1fr);\r\n    grid-auto-rows: 300px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map