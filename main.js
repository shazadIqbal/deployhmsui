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

/***/ "./src/app/Component/facilities/facilities.component.css":
/*!***************************************************************!*\
  !*** ./src/app/Component/facilities/facilities.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudC9mYWNpbGl0aWVzL2ZhY2lsaXRpZXMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/Component/facilities/facilities.component.html":
/*!****************************************************************!*\
  !*** ./src/app/Component/facilities/facilities.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p-card [style]=\"{marginTop:'10px'}\" header=\"Selected Facilities\">\r\n\r\n<!-- <ol style=\"margin-top:20px\">\r\n  <li style=\"margin:10px\" *ngFor=\"let facility of facilities\">{{facility}}</li>\r\n</ol> -->\r\n<p style=\"margin:10px\" [hidden]=\"facilities.length\">No Facility selected!</p>\r\n<p-table [hidden]=\"!facilities.length\" [ngStyle]=\"{textAlign:'center'}\" [value]=\"facilities\">\r\n  <ng-template pTemplate=\"header\">\r\n      <tr>\r\n          <th [ngStyle]=\"{textAlign:'center'}\" *ngFor=\"let col of cols\">\r\n              {{col.header}}\r\n          </th>\r\n      </tr>\r\n  </ng-template>\r\n  <ng-template pTemplate=\"body\" let-car>\r\n      <tr>\r\n          <td *ngFor=\"let col of cols\">\r\n                  {{car[col.field]}}\r\n          </td>\r\n      </tr>\r\n  </ng-template>\r\n</p-table>\r\n  <button pButton type=\"button\" label=\"Add new Faciity\" (click)=\"routeToEr()\" class=\"ui-button-success\"></button>\r\n</p-card>"

/***/ }),

/***/ "./src/app/Component/facilities/facilities.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/Component/facilities/facilities.component.ts ***!
  \**************************************************************/
/*! exports provided: FacilitiesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacilitiesComponent", function() { return FacilitiesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var FacilitiesComponent = /** @class */ (function () {
    function FacilitiesComponent(route) {
        this.route = route;
    }
    FacilitiesComponent.prototype.ngOnChanges = function (changes) {
        this.facilities = changes["facilities"].currentValue;
        this.cols = [
            { field: 'name', header: 'Facility' },
            { field: 'price', header: 'Price' }
        ];
        console.log(this.facilities);
    };
    FacilitiesComponent.prototype.routeToEr = function () {
        this.route.navigate(['adder']);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FacilitiesComponent.prototype, "facilities", void 0);
    FacilitiesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-facilities',
            template: __webpack_require__(/*! ./facilities.component.html */ "./src/app/Component/facilities/facilities.component.html"),
            styles: [__webpack_require__(/*! ./facilities.component.css */ "./src/app/Component/facilities/facilities.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], FacilitiesComponent);
    return FacilitiesComponent;
}());



/***/ }),

/***/ "./src/app/Services/NavBarService.ts":
/*!*******************************************!*\
  !*** ./src/app/Services/NavBarService.ts ***!
  \*******************************************/
/*! exports provided: NavBarService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarService", function() { return NavBarService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavBarService = /** @class */ (function () {
    function NavBarService() {
        this.visible = false;
    }
    NavBarService.prototype.hide = function () { this.visible = false; };
    NavBarService.prototype.show = function () { this.visible = true; };
    NavBarService.prototype.toggle = function () { this.visible = !this.visible; };
    NavBarService.prototype.doSomethingElseUseful = function () { };
    NavBarService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavBarService);
    return NavBarService;
}());



/***/ }),

/***/ "./src/app/Services/admission.service.ts":
/*!***********************************************!*\
  !*** ./src/app/Services/admission.service.ts ***!
  \***********************************************/
/*! exports provided: AdmissionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdmissionService", function() { return AdmissionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




var AdmissionService = /** @class */ (function () {
    function AdmissionService(http) {
        this.http = http;
    }
    // tslint:disable-next-line: ban-typesp
    AdmissionService.prototype.saveAdmission = function (admission) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + "/api/bed/", admission);
    };
    AdmissionService.prototype.getAvailableBeds = function () {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + "/api/bed/");
    };
    AdmissionService.prototype.getBedsForSelectBedType = function (bedType) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + '/api/bed/selectbedtype/' + bedType);
    };
    AdmissionService.prototype.savedOpdAdmit = function (admit) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + "/api/opdadmit/", admit);
    };
    AdmissionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AdmissionService);
    return AdmissionService;
}());



/***/ }),

/***/ "./src/app/Services/appointment-service.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/Services/appointment-service.service.ts ***!
  \*********************************************************/
/*! exports provided: AppointmentServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppointmentServiceService", function() { return AppointmentServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




var AppointmentServiceService = /** @class */ (function () {
    function AppointmentServiceService(http) {
        this.http = http;
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + "/api/appoinment/";
        this.urlDone = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + "/api/appoinment/complete/";
        this.statusUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + "/api/appoinment/filterbystatus/";
        this.dateUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + "/api/appoinment/filter/";
    }
    AppointmentServiceService.prototype.saveAppointment = function (appointment) {
        return this.http.post(this.url, appointment);
    };
    AppointmentServiceService.prototype.getAppointment = function () {
        return this.http.get(this.url);
    };
    AppointmentServiceService.prototype.deleteById = function (no) {
        return this.http.delete(this.url + no);
    };
    AppointmentServiceService.prototype.doneById = function (no) {
        return this.http.patch(this.urlDone + no, null);
    };
    AppointmentServiceService.prototype.saveStatus = function (status) {
        return this.http.post(this.statusUrl + status, status);
    };
    AppointmentServiceService.prototype.getStatus = function (status) {
        return this.http.get(this.statusUrl + status);
    };
    AppointmentServiceService.prototype.saveDate = function (date) {
        console.log(date);
        return this.http.post(this.dateUrl + date, date);
    };
    AppointmentServiceService.prototype.getDate = function (date) {
        return this.http.get(this.dateUrl + date);
    };
    AppointmentServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AppointmentServiceService);
    return AppointmentServiceService;
}());



/***/ }),

/***/ "./src/app/Services/erservice.service.ts":
/*!***********************************************!*\
  !*** ./src/app/Services/erservice.service.ts ***!
  \***********************************************/
/*! exports provided: ErserviceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErserviceService", function() { return ErserviceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");




var ErserviceService = /** @class */ (function () {
    function ErserviceService(http) {
        this.http = http;
    }
    // tslint:disable-next-line: ban-types
    ErserviceService.prototype.saveEr = function (er) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + 'api/er/', er);
    };
    ErserviceService.prototype.getEr = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + 'api/er/');
    };
    ErserviceService.prototype.deleteById = function (no) {
        return this.http.delete(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + 'api/er/' + no);
    };
    // ER FACILITY
    ErserviceService.prototype.saveErFacility = function (facility) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + 'api/facility/', facility);
    };
    ErserviceService.prototype.getErFacility = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + 'api/facility/');
    };
    ErserviceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ErserviceService);
    return ErserviceService;
}());



/***/ }),

/***/ "./src/app/Services/my-service.service.ts":
/*!************************************************!*\
  !*** ./src/app/Services/my-service.service.ts ***!
  \************************************************/
/*! exports provided: MyServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyServiceService", function() { return MyServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MyServiceService = /** @class */ (function () {
    function MyServiceService() {
    }
    MyServiceService.prototype.checkUserandPass = function (uname, pwd) {
        if (uname == 'admin' && pwd == 'admin') {
            sessionStorage.setItem('username', 'admin');
            // localStorage.setItem('username', 'admin');
            return true;
        }
        else {
            return false;
        }
    };
    MyServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MyServiceService);
    return MyServiceService;
}());



/***/ }),

/***/ "./src/app/Services/opd-er.service.ts":
/*!********************************************!*\
  !*** ./src/app/Services/opd-er.service.ts ***!
  \********************************************/
/*! exports provided: OpdErService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpdErService", function() { return OpdErService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var OpdErService = /** @class */ (function () {
    function OpdErService(http) {
        this.http = http;
    }
    OpdErService.prototype.saveOpdEr = function (opdEr) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + "api/opder/", opdEr);
    };
    OpdErService.prototype.getOpdEr = function () {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + "api/opder/");
    };
    OpdErService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], OpdErService);
    return OpdErService;
}());



/***/ }),

/***/ "./src/app/Services/opd-gyny.service.ts":
/*!**********************************************!*\
  !*** ./src/app/Services/opd-gyny.service.ts ***!
  \**********************************************/
/*! exports provided: OpdGynyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpdGynyService", function() { return OpdGynyService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




var OpdGynyService = /** @class */ (function () {
    function OpdGynyService(http) {
        this.http = http;
    }
    //method for posting opd service
    OpdGynyService.prototype.saveOpdGyny = function (opdGyny) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + 'api/opdGyny/', opdGyny);
    };
    OpdGynyService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], OpdGynyService);
    return OpdGynyService;
}());



/***/ }),

/***/ "./src/app/Services/opd-lab-test.service.ts":
/*!**************************************************!*\
  !*** ./src/app/Services/opd-lab-test.service.ts ***!
  \**************************************************/
/*! exports provided: OpdLabTestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpdLabTestService", function() { return OpdLabTestService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var OpdLabTestService = /** @class */ (function () {
    function OpdLabTestService(http) {
        this.http = http;
    }
    OpdLabTestService.prototype.saveOpdEr = function (labtest) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + "api/opdlabtest/", labtest);
    };
    OpdLabTestService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], OpdLabTestService);
    return OpdLabTestService;
}());



/***/ }),

/***/ "./src/app/Services/opd.service.ts":
/*!*****************************************!*\
  !*** ./src/app/Services/opd.service.ts ***!
  \*****************************************/
/*! exports provided: OpdService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpdService", function() { return OpdService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var OpdService = /** @class */ (function () {
    function OpdService(http) {
        this.http = http;
    }
    // tslint:disable-next-line: ban-types
    OpdService.prototype.saveOPD = function (opd) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + 'api/opdconsultancy/', opd);
    };
    OpdService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], OpdService);
    return OpdService;
}());



/***/ }),

/***/ "./src/app/Services/package-service.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/Services/package-service.service.ts ***!
  \*****************************************************/
/*! exports provided: PackageServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PackageServiceService", function() { return PackageServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");




var PackageServiceService = /** @class */ (function () {
    function PackageServiceService(http) {
        this.http = http;
    }
    PackageServiceService.prototype.getPackages = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + '/api/addpackage/');
    };
    PackageServiceService.prototype.postPackage = function (obj) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + '/api/addpackage/', obj);
    };
    PackageServiceService.prototype.deletePackage = function (id) {
        return this.http.delete(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + '/api/addpackage/' + id);
    };
    PackageServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PackageServiceService);
    return PackageServiceService;
}());



/***/ }),

/***/ "./src/app/Services/patient-observation.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/Services/patient-observation.service.ts ***!
  \*********************************************************/
/*! exports provided: PatientObservationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientObservationService", function() { return PatientObservationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var PatientObservationService = /** @class */ (function () {
    function PatientObservationService(http) {
        this.http = http;
    }
    PatientObservationService.prototype.savePatientObservation = function (obs) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + 'api/opdobservation/', obs);
    };
    PatientObservationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], PatientObservationService);
    return PatientObservationService;
}());



/***/ }),

/***/ "./src/app/Services/patient-transactions.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/Services/patient-transactions.service.ts ***!
  \**********************************************************/
/*! exports provided: PatientTransactionsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientTransactionsService", function() { return PatientTransactionsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");




var PatientTransactionsService = /** @class */ (function () {
    function PatientTransactionsService(http) {
        this.http = http;
    }
    PatientTransactionsService.prototype.getPatientTransactions = function (id) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + 'api/patienttransactions/' + id);
    };
    PatientTransactionsService.prototype.deletePatientTransaction = function (id) {
        return this.http.delete(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + 'api/patienttransactions/' + id);
    };
    PatientTransactionsService.prototype.updatePatientTransactionById = function (id, transactionObj) {
        return this.http.put(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + 'api/patienttransactions/' + id, transactionObj);
    };
    PatientTransactionsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PatientTransactionsService);
    return PatientTransactionsService;
}());



/***/ }),

/***/ "./src/app/about-page/about-page.component.css":
/*!*****************************************************!*\
  !*** ./src/app/about-page/about-page.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0LXBhZ2UvYWJvdXQtcGFnZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/about-page/about-page.component.html":
/*!******************************************************!*\
  !*** ./src/app/about-page/about-page.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>{{ heading }}</h1>\r\n<button class=\"btn btn primary\" (click)=\"onclick(input.value)\"></button>\r\n<input type=\"text\" #input />\r\n"

/***/ }),

/***/ "./src/app/about-page/about-page.component.ts":
/*!****************************************************!*\
  !*** ./src/app/about-page/about-page.component.ts ***!
  \****************************************************/
/*! exports provided: AboutPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPageComponent", function() { return AboutPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutPageComponent = /** @class */ (function () {
    function AboutPageComponent() {
        this.heading = "my practice if event binding ";
    }
    AboutPageComponent.prototype.ngOnInit = function () {
    };
    AboutPageComponent.prototype.onclick = function (value) {
        alert(value);
    };
    AboutPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about-page',
            template: __webpack_require__(/*! ./about-page.component.html */ "./src/app/about-page/about-page.component.html"),
            styles: [__webpack_require__(/*! ./about-page.component.css */ "./src/app/about-page/about-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AboutPageComponent);
    return AboutPageComponent;
}());



/***/ }),

/***/ "./src/app/add-appoinment-list/SelectStatus.ts":
/*!*****************************************************!*\
  !*** ./src/app/add-appoinment-list/SelectStatus.ts ***!
  \*****************************************************/
/*! exports provided: Status */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Status", function() { return Status; });
var Status = /** @class */ (function () {
    function Status() {
    }
    return Status;
}());



/***/ }),

/***/ "./src/app/add-appoinment-list/add-appoinment-list.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/add-appoinment-list/add-appoinment-list.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkZC1hcHBvaW5tZW50LWxpc3QvYWRkLWFwcG9pbm1lbnQtbGlzdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/add-appoinment-list/add-appoinment-list.component.html":
/*!************************************************************************!*\
  !*** ./src/app/add-appoinment-list/add-appoinment-list.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g\">\r\n    <div class=\"ui-g-4 ui-lg-4 ui-sm-12\">\r\n        <button pButton type=\"button\" class=\"backBtnStyle\" (click)=\"backToMain()\" style=\"width:80%;margin-left:10%;  height:40px;\" label=\"Back\"></button>\r\n    </div>\r\n    <div class=\"ui-g-4 ui-lg-4 ui-sm-12\">\r\n        <button pButton type=\"button\" (click)=\"existingPatient()\" style=\"width:80%;margin-left:10%;  height:40px;\" label=\"Existing Patient Appointment\" class=\"backBtnStyle\"></button>\r\n    </div>\r\n    <div class=\"ui-g-4 ui-lg-4 ui-sm-12\">\r\n        <button pButton type=\"button\" (click)=\"newPatient()\" style=\"width:80%;margin-left:10%; height: 40px;\" label=\"New Patient Appointment\" class=\"backBtnStyle\"></button>\r\n    </div>\r\n</div>\r\n<p-card header=\"APPOINTMENT LIST\" [style]=\"{  width: '100%',\r\n    'font-size': '16px',\r\n    'text-align': 'center',\r\n    color: 'green'\r\n    }\">\r\n\r\n\r\n\r\n    <!-- <h2 style=\"color: #3EB650; text-align: center; font-weight: bold;\">APPOINTMENT LIST</h2> -->\r\n\r\n    <!-- <hr />\r\n        <div class=\"row\" style=\"text-align: center;\">\r\n            <button pButton type=\"button\" label=\"Existing Patient Appointment\" class=\" ui-button-success\" (click)=\"existingPatient()\" style=\"margin-right: 5%; width: 30%;\"></button>\r\n            <button pButton type=\"button\" label=\"New Patient Appointment\" class=\" ui-button-success\" (click)=\"newPatient()\" style=\" width: 30%\"></button>\r\n        </div>\r\n        <hr /> -->\r\n    <div class=\"row\" style=\"margin-left: 20%;\">\r\n        <!-- <p-dropdown [options]=\"SelectStatus\" required name=\"status\" [style]=\"{'width':'300px'}\"\r\n            placeholder=\"Select Status\" placeholder=\"Filter By Status\" style=\"margin: 0 1% 1% 0;\">\r\n        </p-dropdown> -->\r\n\r\n        <div class=\"ui-inputgroup col-md-5 col-lg-5 col-sm-12\" style=\"margin-bottom: 10px\">\r\n            <span class=\"ui-inputgroup-addon\">Filter By Status</span>\r\n\r\n            <p-dropdown [options]=\"SelectStatus\" required name=\"status\" [style]=\"{ width: '200px' }\" placeholder=\"Select Status\" placeholder=\"Filter By Status\" [(ngModel)]=\"_status.status\" (onChange)=\"statusOnClick()\">\r\n            </p-dropdown>\r\n        </div>\r\n\r\n        <div class=\"ui-inputgroup  col-md-5 col-lg-5 col-sm-12\" style=\"margin-bottom: 10px\">\r\n\r\n            <span class=\"ui-inputgroup-addon\">Filter By Date</span>\r\n            <p-calendar name=\"filterByDate\" required [(ngModel)]=\"datefilter\" (onSelect)=\"dateOnClick()\" placeholder=\"Filter By Date\">\r\n            </p-calendar>\r\n        </div>\r\n    </div>\r\n    <p-table #dt [columns]=\"cols\" [value]=\"_existingPatient\" [paginator]=\"true\" [rows]=\"10\" [totalRecords]=\"totalrecords\">\r\n        <ng-template pTemplate=\"caption\">\r\n            <div style=\"text-align: right\">\r\n                <i class=\"fa fa-search\" style=\"margin:4px 4px 0 0\"></i>\r\n                <input type=\"text\" pInputText size=\"50\" placeholder=\"Global Filter\" (input)=\"dt.filterGlobal($event.target.value, 'contains')\" style=\"width:auto\" />\r\n            </div>\r\n        </ng-template>\r\n        <ng-template pTemplate=\"header\" let-columns>\r\n            <tr>\r\n                <th *ngFor=\"let col of columns\">\r\n                    {{ col.header }}\r\n                </th>\r\n                <th style=\"text-align: center;\">\r\n                    Actions\r\n                </th>\r\n            </tr>\r\n \r\n\r\n            <div *ngIf=\"showLoading\" style=\"margin-left:235%;\">\r\n\r\n                <p-progressSpinner></p-progressSpinner>\r\n            </div>\r\n        </ng-template>\r\n\r\n        <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\r\n            <tr [pSelectableRow]=\"rowData\">\r\n                <td *ngFor=\"let col of columns\" style=\"overflow: auto;\">\r\n                    {{ rowData[col.field] }}\r\n                </td>\r\n                <td>\r\n                    <div class=\"ui-g-12\" style=\"margin-left: 10%;\">\r\n                        <div class=\"ui-g-12 ui-md-5 ui-sm-12 ui-g-fluid\">\r\n                            <!-- Done button -->\r\n\r\n                            <div *ngIf=\"show\">\r\n                                <button pButton type=\"button\" class=\"ui-button-success\" style=\"height: 50px; margin-left:30%;\" (click)=\"doneAppointmentByID(rowData['id'])\">\r\n                <img src=\"https://img.icons8.com/color/48/000000/ok.png\" />\r\n              </button>\r\n                            </div>\r\n                            <p-toast position=\"top-center\"></p-toast>\r\n                        </div>\r\n                        <div *ngIf=\"showInactive\" class=\"ui-g-12 ui-md-3 ui-sm-12 ui-g-fluid\">\r\n                            <button pButton type=\"button\" (click)=\"deleteAppointmentByID(rowData['id'])\" class=\"ui-button-danger\" style=\"height: 50px; margin-left: 30%;\">\r\n                <img src=\"https://img.icons8.com/color/48/000000/cancel.png\" />\r\n              </button>\r\n                            <p-toast position=\"top-center\"></p-toast>\r\n                        </div>\r\n                    </div>\r\n                </td>\r\n            </tr>\r\n        </ng-template>\r\n    </p-table>\r\n</p-card>"

/***/ }),

/***/ "./src/app/add-appoinment-list/add-appoinment-list.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/add-appoinment-list/add-appoinment-list.component.ts ***!
  \**********************************************************************/
/*! exports provided: AddAppoinmentListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddAppoinmentListComponent", function() { return AddAppoinmentListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Services_appointment_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Services/appointment-service.service */ "./src/app/Services/appointment-service.service.ts");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _SelectStatus__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SelectStatus */ "./src/app/add-appoinment-list/SelectStatus.ts");
/* harmony import */ var _dateModel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dateModel */ "./src/app/add-appoinment-list/dateModel.ts");







var AddAppoinmentListComponent = /** @class */ (function () {
    function AddAppoinmentListComponent(router, appointmentService, messageService) {
        this.router = router;
        this.appointmentService = appointmentService;
        this.messageService = messageService;
        this.showInactive = true;
        this._status = new _SelectStatus__WEBPACK_IMPORTED_MODULE_5__["Status"]();
        this.date = new _dateModel__WEBPACK_IMPORTED_MODULE_6__["_dateClass"]();
        this.show = true;
        this.SelectStatus = [
            { label: 'Active', value: 'active' },
            { label: 'Inactive', value: 'inactive' },
            { label: 'Done', value: 'done' }
        ];
    }
    AddAppoinmentListComponent.prototype.ngOnInit = function () {
        this.showTable();
    };
    AddAppoinmentListComponent.prototype.showStatus = function () {
        var _this = this;
        this.showLoading = true;
        this.show = true;
        this.showInactive = true;
        this.appointmentService.getStatus(this._status.status).subscribe(function (Response) {
            if (_this._status.status === "done") {
                _this.show = false;
            }
            else if (_this._status.status == "inactive") {
                _this.show = false;
                _this.showInactive = false;
            }
            console.log('response is here', Response);
            _this.showLoading = false;
            for (var i in Response) {
                _this._existingPatient.push({
                    id: Response[i].id,
                    selectDoctor: Response[i].selectDoctor,
                    patientName: Response[i].patientName,
                    phoneNo: Response[i].phoneNo,
                    appoinmentDate: new Date(Response[i].appoinmentDate).toDateString(),
                    time: Response[i].time
                });
            }
        });
        this.cols = [
            { field: 'id', header: 'MR Number' },
            { field: 'selectDoctor', header: 'Doctor Name' },
            { field: 'patientName', header: 'Patient Name' },
            { field: 'phoneNo', header: 'patient Number' },
            { field: 'appoinmentDate', header: 'Appointment Date' },
            { field: 'time', header: 'Time' }
        ];
        this._existingPatient = [];
    };
    AddAppoinmentListComponent.prototype.showDate = function (d) {
        var _this = this;
        this.showLoading = true;
        this.appointmentService.getDate(d).subscribe(function (Response) {
            console.log('response is here', Response);
            _this.showLoading = false;
            for (var i in Response) {
                _this._existingPatient.push({
                    id: Response[i].id,
                    selectDoctor: Response[i].selectDoctor,
                    patientName: Response[i].patientName,
                    phoneNo: Response[i].phoneNo,
                    appoinmentDate: new Date(Response[i].appoinmentDate).toDateString(),
                    time: Response[i].time
                });
            }
        });
        this.cols = [
            { field: 'id', header: 'MR Number' },
            { field: 'selectDoctor', header: 'Doctor Name' },
            { field: 'patientName', header: 'Patient Name' },
            { field: 'phoneNo', header: 'Phone No.' },
            { field: 'appoinmentDate', header: 'Appointment Date' },
            { field: 'time', header: 'Time' }
        ];
        this._existingPatient = [];
    };
    AddAppoinmentListComponent.prototype.showTable = function () {
        var _this = this;
        this.showLoading = true;
        this.appointmentService.getAppointment().subscribe(function (Response) {
            console.log('response is here', Response);
            _this.showLoading = false;
            for (var i in Response) {
                _this._existingPatient.push({
                    id: Response[i].id,
                    selectDoctor: Response[i].selectDoctor,
                    patientName: Response[i].patientName,
                    phoneNo: Response[i].phoneNo,
                    appoinmentDate: new Date(Response[i].appoinmentDate).toDateString(),
                    time: Response[i].time
                });
            }
        });
        this.cols = [
            { field: 'id', header: 'MR Number' },
            { field: 'selectDoctor', header: 'Doctor Name' },
            { field: 'patientName', header: 'Patient Name' },
            { field: 'phoneNo', header: 'Phone Number' },
            { field: 'appoinmentDate', header: 'Appointment Date' },
            { field: 'time', header: 'Time' }
        ];
        this._existingPatient = [];
    };
    AddAppoinmentListComponent.prototype.backToMain = function () {
        this.router.navigate(['/mainscreen']);
    };
    AddAppoinmentListComponent.prototype.existingPatient = function () {
        this.router.navigate(['/existingPatient']);
    };
    AddAppoinmentListComponent.prototype.newPatient = function () {
        this.router.navigate(['/patientform']);
    };
    AddAppoinmentListComponent.prototype.deleteAppointmentByID = function (rowData) {
        var _this = this;
        this.messageService.add({
            severity: 'error',
            summary: 'Status',
            detail: 'Successfully Deleted'
        });
        console.log(rowData);
        this.appointmentService.deleteById(rowData).subscribe(function (data) {
            _this.appointmentService.getAppointment().subscribe(function (data) { });
            _this.showTable();
            console.log(data);
        }, function (error) {
            console.log(error);
        });
    };
    AddAppoinmentListComponent.prototype.doneAppointmentByID = function (rowData) {
        var _this = this;
        this.messageService.add({
            severity: 'successfull',
            summary: 'Status',
            detail: 'Appointment Done'
        });
        console.log(rowData);
        this.appointmentService.doneById(rowData).subscribe(function (data) {
            _this.appointmentService.getAppointment().subscribe(function (data) { });
            _this.showTable();
            console.log(data);
        }, function (error) {
            console.log(error);
        });
    };
    AddAppoinmentListComponent.prototype.saveStatus = function () {
        this._existingPatient = [];
        this.appointmentService.saveStatus(this._status.status).subscribe(function (data) {
            console.log(data);
        }, function (error) {
            console.log(error);
        });
        this.showStatus();
    };
    // saveDate(){
    //   this._existingPatient = [];
    //   this._appointmentService.saveDate(this._date).subscribe((data) =>{
    //     console.log(data);
    // }, error=>{
    //  console.log(error);
    // })
    // this.showDate();
    // }
    AddAppoinmentListComponent.prototype.statusOnClick = function () {
        this.showStatus();
    };
    AddAppoinmentListComponent.prototype.dateOnClick = function () {
        console.log(this.datefilter);
        var d = this.datefilter.getFullYear() +
            '-' +
            (this.datefilter.getMonth() + 1) +
            '-' +
            this.datefilter.getDate();
        console.log(d);
        this.showDate(d);
    };
    AddAppoinmentListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-appoinment-list',
            template: __webpack_require__(/*! ./add-appoinment-list.component.html */ "./src/app/add-appoinment-list/add-appoinment-list.component.html"),
            styles: [__webpack_require__(/*! ./add-appoinment-list.component.css */ "./src/app/add-appoinment-list/add-appoinment-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _Services_appointment_service_service__WEBPACK_IMPORTED_MODULE_3__["AppointmentServiceService"],
            primeng_api__WEBPACK_IMPORTED_MODULE_4__["MessageService"]])
    ], AddAppoinmentListComponent);
    return AddAppoinmentListComponent;
}());



/***/ }),

/***/ "./src/app/add-appoinment-list/dateModel.ts":
/*!**************************************************!*\
  !*** ./src/app/add-appoinment-list/dateModel.ts ***!
  \**************************************************/
/*! exports provided: _dateClass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_dateClass", function() { return _dateClass; });
var _dateClass = /** @class */ (function () {
    function _dateClass() {
    }
    return _dateClass;
}());



/***/ }),

/***/ "./src/app/add-directory/add-directory.component.css":
/*!***********************************************************!*\
  !*** ./src/app/add-directory/add-directory.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkZC1kaXJlY3RvcnkvYWRkLWRpcmVjdG9yeS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/add-directory/add-directory.component.html":
/*!************************************************************!*\
  !*** ./src/app/add-directory/add-directory.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"z-index:3; position: absolute;top:70%;\" class=\"ui-g-12\" *ngIf=\"delete\">\r\n    <p-progressSpinner [style]=\"{ 'margin-left': '45%' }\"></p-progressSpinner>\r\n</div>\r\n<div class=\"ui-g\">\r\n    <p-toast></p-toast>\r\n    <div class=\"ui-lg-2 ui-md-2 ui-sm-0\"></div>\r\n    <div class=\"ui-g-4 ui-lg-4 ui-sm-12\">\r\n        <button pButton type=\"button\" class=\"backBtnStyle\" (click)=\"back()\" style=\"width:80%;margin-left:10%;  height:40px;\" label=\"Back\"></button>\r\n    </div>\r\n    <div class=\"ui-g-4 ui-lg-4 ui-sm-12\">\r\n        <button pButton type=\"button\" (click)=\"routeDirectoryForm()\" style=\"width:80%;margin-left:10%;  height:40px;\" label=\"Add Directory\" class=\"backBtnStyle\"></button>\r\n    </div>\r\n\r\n</div>\r\n<p-card header=\"DIRECTORY LIST\" [style]=\"{  width: '100%',\r\n'font-size': '26px',\r\n'text-align': 'center',\r\ncolor: 'green'\r\n}\">\r\n    <hr />\r\n\r\n    <p-table style=\"word-wrap:break-word;\" #dt [totalRecords]=\"totalRecords\" [paginator]=\"true\" [value]=\"tests\" [rows]=\"10\" [style]=\"{ 'margin-top': '50px', width: '100%'}\" [columns]=\"cols\">\r\n        <ng-template pTemplate=\"caption\">\r\n\r\n            <div style=\"text-align: right\">\r\n                <i class=\"fa fa-search\" style=\"margin:4px 4px 0 0\"></i>\r\n                <input type=\"text\" pInputText size=\"30\" placeholder=\"Global Filter\" (input)=\"dt.filterGlobal($event.target.value, 'contains')\" style=\"width:auto;margin-right:14px;\" />\r\n            </div>\r\n        </ng-template>\r\n        <ng-template pTemplate=\"header\" let-columns>\r\n            <tr>\r\n                <th style=\"text-align:center\" *ngFor=\"let col of columns\">\r\n                    {{ col.header }}\r\n                </th>\r\n                <th style=\"text-align:center\">Actions</th>\r\n            </tr>\r\n        </ng-template>\r\n\r\n        <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\r\n            <tr>\r\n                <td style=\"text-align:center\" *ngFor=\"let col of columns\">\r\n                    {{ rowData[col.field] }}\r\n                </td>\r\n                <td>\r\n                    <button pButton style=\"width:60%;margin-left:20%;background-color: rgb(211, 56, 56);\" type=\"button\" label=\"Delete\" (click)=\"inactive(rowData['id'], rowData['name'])\"></button>\r\n                </td>\r\n            </tr>\r\n        </ng-template>\r\n    </p-table>\r\n</p-card>\r\n<div class=\"ui-g-12\" *ngIf=\"loader\">\r\n    <p-progressSpinner [style]=\"{ 'margin-left': '45%' }\"></p-progressSpinner>\r\n</div>\r\n\r\n<div class=\"ui-g-12\" *ngIf=\"empty\">\r\n    <p style=\"text-align:center;\">No Data to show!</p>\r\n</div>"

/***/ }),

/***/ "./src/app/add-directory/add-directory.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/add-directory/add-directory.component.ts ***!
  \**********************************************************/
/*! exports provided: AddDirectoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddDirectoryComponent", function() { return AddDirectoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_directory_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/directory.service */ "./src/app/services/directory.service.ts");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_4__);





var AddDirectoryComponent = /** @class */ (function () {
    function AddDirectoryComponent(route, directoryService, messageService) {
        this.route = route;
        this.directoryService = directoryService;
        this.messageService = messageService;
        this.tests = [];
        this.loader = true;
        this.empty = false;
    }
    AddDirectoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cols = [
            { field: 'id', header: 'ID' },
            { field: 'name', header: 'Full Name' },
            { field: 'number', header: 'Phone Number' },
            { field: 'address', header: 'Address' },
            { field: 'erNo', header: 'Emergency No' }
        ];
        this.directoryService.getDirectory().subscribe(function (response) {
            _this.tests = [];
            _this.loader = false;
            response.length ? (_this.empty = false) : (_this.empty = true);
            response.map(function (value) {
                _this.tests.push({
                    id: value.id,
                    name: value.name,
                    number: value.number,
                    address: value.address,
                    erNo: value.erNo
                });
            });
        }, function (error) {
            console.log(error);
            _this.loader = false;
        });
    };
    AddDirectoryComponent.prototype.back = function () {
        this.route.navigate(['mainscreen']);
    };
    AddDirectoryComponent.prototype.inactive = function (a) {
        var _this = this;
        console.log(a);
        this.directoryService.deleteDirectory(a).subscribe(function (response) {
            _this.tests = [];
            response.length ? (_this.empty = false) : (_this.empty = true);
            response.map(function (value) {
                _this.tests.push({
                    id: value.id,
                    name: value.name,
                    number: value.number,
                    address: value.address,
                    erNo: value.erNo
                });
            });
            _this.messageService.add({
                severity: 'success',
                summary: 'Service Message',
                detail: 'Successfully Deleted!'
            });
        }, function (error) {
            _this.messageService.add({
                severity: 'error',
                summary: 'Service Message',
                detail: 'Enable to delete!'
            });
        });
    };
    AddDirectoryComponent.prototype.routeDirectoryForm = function () {
        this.route.navigate(['directoryform']);
    };
    AddDirectoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-directory',
            template: __webpack_require__(/*! ./add-directory.component.html */ "./src/app/add-directory/add-directory.component.html"),
            styles: [__webpack_require__(/*! ./add-directory.component.css */ "./src/app/add-directory/add-directory.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_directory_service__WEBPACK_IMPORTED_MODULE_3__["DirectoryService"],
            primeng_api__WEBPACK_IMPORTED_MODULE_4__["MessageService"]])
    ], AddDirectoryComponent);
    return AddDirectoryComponent;
}());



/***/ }),

/***/ "./src/app/add-er/Add-er.ts":
/*!**********************************!*\
  !*** ./src/app/add-er/Add-er.ts ***!
  \**********************************/
/*! exports provided: AddEmergency */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEmergency", function() { return AddEmergency; });
var AddEmergency = /** @class */ (function () {
    function AddEmergency() {
    }
    return AddEmergency;
}());



/***/ }),

/***/ "./src/app/add-er/add-er.component.css":
/*!*********************************************!*\
  !*** ./src/app/add-er/add-er.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkZC1lci9hZGQtZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/add-er/add-er.component.html":
/*!**********************************************!*\
  !*** ./src/app/add-er/add-er.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g\">\r\n    <div class=\"ui-lg-2 ui-md-2 ui-sm-0\"></div>\r\n    <div class=\"ui-g-4 ui-lg-4 ui-sm-12\">\r\n        <button pButton type=\"button\" class=\"backBtnStyle\" (click)=\"back()\" style=\"width:80%;margin-left:10%;  height:40px;\" label=\"Back\"></button>\r\n    </div>\r\n  \r\n</div>\r\n<!-- <div style=\"position: absolute;top:70%;\" class=\"ui-g-12\" *ngIf=\"loader\">\r\n  <p-progressSpinner [style]=\"{ 'margin-left': '45%' }\"></p-progressSpinner>\r\n</div> -->\r\n\r\n<div class=\"ui-g-12\">\r\n  <p-toast></p-toast>\r\n\r\n  <p-card\r\n    header=\"ADD EMERGENCY SERVICE\"\r\n    [style]=\"{\r\n      width: '80%',\r\n      'font-size': '26px',\r\n      'margin-left': '10%',\r\n      'text-align': 'center',\r\n      color: 'green'\r\n    }\"\r\n  >\r\n    <div class=\"ui-g ui-fluid\">\r\n      <hr style=\"height:2px;width:100%;background-color:green;\" />\r\n      <form\r\n        style=\"width:100%;\"\r\n        #myForm=\"ngForm\"\r\n        (ngSubmit)=\"submitErService(myForm.value); myForm.reset()\"\r\n      >\r\n        <!--Emergency Service Name  -->\r\n        <div class=\"ui-g\">\r\n          <div class=\"ui-md-2 ui-lg-2\"></div>\r\n          <div class=\"ui-md-8 ui-lg-8 ui-sm-12\">\r\n            <div class=\"ui-inputgroup\">\r\n              <span\r\n                class=\"ui-inputgroup-addon\"\r\n                style=\"width:45%;font-size:15px;\"\r\n                >Emergency Service Name<i style=\"color: red\">*</i></span\r\n              >\r\n              <input\r\n                type=\"text\"\r\n                required\r\n                name=\"name\"\r\n                #esr=\"ngModel\"\r\n                pInputText\r\n                ngModel\r\n                [(ngModel)]=\"addEmergency.name\"\r\n              />\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!-- Service Resources here -->\r\n        <div class=\"ui-g\">\r\n          <div class=\"ui-md-2 ui-lg-2\"></div>\r\n          <div class=\"ui-md-8 ui-lg-8 ui-sm-12\">\r\n            <div class=\"ui-inputgroup\">\r\n              <span\r\n                class=\"ui-inputgroup-addon\"\r\n                style=\"width:45%;font-size:15px;\"\r\n                >Service Resources:</span\r\n              >\r\n              <!-- Enter description here -->\r\n              <textarea\r\n                [rows]=\"3\"\r\n                maxlength=\"110\"\r\n                [cols]=\"30\"\r\n                name=\"resources\"\r\n                pInputTextarea\r\n                placeholder=\"Enter Description here...\"\r\n                #dosr=\"ngModel\"\r\n                ngModel\r\n                [(ngModel)]=\"addEmergency.resources\"\r\n              ></textarea>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!-- Select Facility -->\r\n        <div class=\"ui-g\">\r\n          <div class=\"ui-md-2 ui-lg-2\"></div>\r\n          <div class=\"ui-md-8 ui-lg-8 ui-sm-12\">\r\n            <div class=\"ui-inputgroup\">\r\n              <span\r\n                class=\"ui-inputgroup-addon\"\r\n                style=\"width:37%;font-size:15px;\"\r\n                >Select Facility<i style=\"color: red\">*</i></span\r\n              >\r\n              <p-multiSelect\r\n\r\n                name=\"facilities\"\r\n                [options]=\"multidropdown\"\r\n                [virtualScroll]=\"true\"\r\n                [itemSize]=\"34\"\r\n                (onChange)=\"onChangeFacility()\"\r\n                [filter]=\"true\"\r\n                [style]=\"{ width: '100%', height: '100%' }\"\r\n                [ngStyle]=\"{ width: '80%' }\"\r\n                [(ngModel)]=\"addEmergency.facilities\"\r\n              ></p-multiSelect>\r\n            </div>\r\n          </div>\r\n          <div class=\"ui-md-2 ui-lg-2 ui-sm-12\">\r\n            <div class=\"ui-inputgroup\">\r\n              <!-- Dailouge box code here -->\r\n              <p-dialog\r\n                header=\"Add Facility\"\r\n                [modal]=\"true\"\r\n                [responsive]=\"true\"\r\n                [style]=\"{ width: '500px', minWidth: '200px' }\"\r\n                [minY]=\"70\"\r\n                [maximizable]=\"true\"\r\n                [baseZIndex]=\"10000\"\r\n                [(visible)]=\"display\"\r\n              >\r\n                <form #addFacility=\"ngForm\">\r\n                  <div class=\"ui-g-12\">\r\n                    <input\r\n                      type=\"text\"\r\n                      pInputText\r\n                      placeholder=\"Add Facility\"\r\n                      name=\"name\"\r\n                      required\r\n                      ngModel\r\n                      />\r\n                    </div>\r\n                    <div class=\"ui-g-12\">\r\n                      <input\r\n                      type=\"text\"\r\n                      pInputText\r\n                      placeholder=\"Price $$\"\r\n                      name=\"price\"\r\n                      required\r\n                      (keypress)=\"numberOnly($event)\"\r\n                      [(ngModel)]=\"addEmergency.price\"\r\n                    />\r\n                  </div>\r\n\r\n                  <p-footer>\r\n                    <button\r\n                      type=\"submit\"\r\n                      pButton\r\n                      icon=\"pi pi-check\"\r\n                      class=\"ui-button-success\"\r\n                      label=\"Save\"\r\n                      [disabled]=\"addFacility.invalid\"\r\n                      (click)=\"\r\n                        saveFacility(addFacility.value); addFacility.reset()\r\n                      \"\r\n                    ></button>\r\n                    <button\r\n                      type=\"button\"\r\n                      pButton\r\n                      icon=\"pi pi-close\"\r\n                      (click)=\"display = false\"\r\n                      label=\"Cancel\"\r\n                      class=\"ui-button-secondary\"\r\n                    ></button>\r\n                  </p-footer>\r\n                </form>\r\n              </p-dialog>\r\n              <button\r\n                type=\"button\"\r\n                class=\"ui-button-success\"\r\n                pButton\r\n                (click)=\"showDialog()\"\r\n                icon=\"pi pi-info-circle\"\r\n                label=\"ADD\"\r\n                style=\"width: 100%;margin-top:5px;text-align: center\"\r\n              ></button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!-- Price field here -->\r\n        <div class=\"ui-g\">\r\n          <div class=\"ui-md-2 ui-lg-2\"></div>\r\n          <div class=\"ui-md-8 ui-lg-8 ui-sm-12\">\r\n            <div class=\"ui-inputgroup\">\r\n              <span\r\n                class=\"ui-inputgroup-addon\"\r\n                style=\"width:45%;font-size:15px;\"\r\n                >Price</span\r\n              >\r\n              <input\r\n                type=\"text\"\r\n                name=\"price\"\r\n                pInputText\r\n                ngModel\r\n                required\r\n                [(ngModel)]=\"addEmergency.price\"\r\n                [readOnly]=\"true\"\r\n              />\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"ui-g\">\r\n          <div class=\"ui-md-2 ui-lg-2\"></div>\r\n          <div class=\"ui-md-8 ui-lg-8 ui-sm-12\">\r\n            <div class=\"ui-inputgroup\">\r\n              <span\r\n                class=\"ui-inputgroup-addon\"\r\n                style=\"width:45%;font-size:15px;\"\r\n                >Extra Charges $$</span\r\n              >\r\n              <input\r\n                type=\"number\"\r\n                required\r\n                name=\"extraCharges\"\r\n                pInputText\r\n                ngModel\r\n                placeholder=\"0\"\r\n                [(ngModel)]=\"addEmergency.extraCharges\"\r\n                (input)=\"getSum(addEmergency.extraCharges)\"\r\n\r\n              />\r\n              <!-- (input)=\"getSum($event.target.value)\" -->\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"ui-g\">\r\n          <div class=\"ui-md-2 ui-lg-2\"></div>\r\n          <div class=\"ui-md-8 ui-lg-8 ui-sm-12\">\r\n            <div class=\"ui-inputgroup\">\r\n              <span\r\n                class=\"ui-inputgroup-addon\"\r\n                style=\"width:45%;font-size:15px;font-weight: bold;\"\r\n                >Total Amount</span\r\n              >\r\n              <input\r\n              type=\"number\"\r\n              pInputText\r\n              name=\"total\"\r\n              ngModel\r\n              [readOnly]=\"true\"\r\n              [(ngModel)]=\"addEmergency.total\"\r\n              />\r\n\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"ui-g\" style=\"margin-top:-20px !important;\">\r\n          <div class=\"ui-md-2 ui-lg-2\"></div>\r\n          <div class=\"ui-md-8 ui-lg-8 ui-sm-12\">\r\n            <button\r\n              pButton\r\n              type=\"submit\"\r\n              label=\"SUBMIT\"\r\n              [disabled]=\"myForm.form.invalid\"\r\n              style=\"margin-top: 0px; background-color:green;width:100%;\"\r\n            ></button>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </p-card>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/add-er/add-er.component.ts":
/*!********************************************!*\
  !*** ./src/app/add-er/add-er.component.ts ***!
  \********************************************/
/*! exports provided: AddErComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddErComponent", function() { return AddErComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_erservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../services/erservice.service */ "./src/app/services/erservice.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Add_er__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Add-er */ "./src/app/add-er/Add-er.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");







var AddErComponent = /** @class */ (function () {
    function AddErComponent(router, erService, messageService, location) {
        this.router = router;
        this.erService = erService;
        this.messageService = messageService;
        this.location = location;
        this.display = false;
        this.addEmergency = new _Add_er__WEBPACK_IMPORTED_MODULE_5__["AddEmergency"](); // creating instance so we can store values in variables
    }
    AddErComponent.prototype.ngOnInit = function () {
        this.getFacilityDropdown();
        this.addEmergency.price = 0;
        this.addEmergency.total = 0;
    };
    AddErComponent.prototype.back = function () {
        this.location.back();
    };
    AddErComponent.prototype.showDialog = function () {
        this.display = true;
    };
    AddErComponent.prototype.submitErService = function (formdata) {
        var _this = this;
        this.erService.saveEr(formdata).subscribe(function (data) {
            console.log(formdata);
            _this.messageService.add({
                severity: "success",
                summary: "Added Succesfully",
                detail: "Emergency Service Added"
            });
        }, function (error) {
            console.log(error);
            _this.messageService.add({
                severity: "error",
                summary: "Error Found",
                detail: "Something went wrong check your internet connection "
            });
        });
    };
    AddErComponent.prototype.onChangeFacility = function () {
        var _this = this;
        //let price;
        console.log("hloo", this.addEmergency.facilities);
        this.addEmergency.price = 0; //it will also work for the negative
        this.addEmergency.total = 0;
        this.addEmergency.extraCharges = 0;
        this.addEmergency.facilities.map(function (f) {
            _this.addEmergency.price = _this.addEmergency.price + parseInt(f["price"]);
            _this.addEmergency.total = _this.addEmergency.price + _this.addEmergency.extraCharges;
        });
    };
    // function for save/add facility
    AddErComponent.prototype.saveFacility = function (fields) {
        var _this = this;
        this.display = false;
        console.log(fields);
        this.erService.saveErFacility(fields).subscribe(function (data) {
            _this.messageService.add({
                severity: "success",
                summary: "Added Succesfully",
                detail: "Facility Service Added"
            });
            console.log(data);
            _this.getFacilityDropdown();
        }, function (error) {
            console.log(error);
            _this.messageService.add({
                severity: "error",
                summary: "Error Found",
                detail: "Something went wrong check your internet connection "
            });
        });
    };
    // show values in the dropdown
    AddErComponent.prototype.getFacilityDropdown = function () {
        var _this = this;
        console.log("hey");
        this.multidropdown = [];
        this.erService.getErFacility().subscribe(function (data) {
            console.log(data);
            data.map(function (p) {
                _this.multidropdown.push({
                    label: p.name,
                    value: p
                });
            });
        }, function (error) {
            console.log("error agya yar");
        });
    };
    // Function for total
    AddErComponent.prototype.getSum = function (value) {
        this.addEmergency.extraCharges = 0;
        console.log(value);
        this.addEmergency.extraCharges = value;
        this.addEmergency.total =
            this.addEmergency.price + this.addEmergency.extraCharges;
    };
    AddErComponent.prototype.numberOnly = function (event) {
        var charCode = event.which ? event.which : event.keyCode;
        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
            return false;
        }
        return true;
    };
    AddErComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: "app-add-er",
            template: __webpack_require__(/*! ./add-er.component.html */ "./src/app/add-er/add-er.component.html"),
            styles: [__webpack_require__(/*! ./add-er.component.css */ "./src/app/add-er/add-er.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _services_erservice_service__WEBPACK_IMPORTED_MODULE_2__["ErserviceService"],
            primeng_api__WEBPACK_IMPORTED_MODULE_1__["MessageService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"]])
    ], AddErComponent);
    return AddErComponent;
}());



/***/ }),

/***/ "./src/app/add-lab-test/add-lab-cat/add-lab-cat.component.css":
/*!********************************************************************!*\
  !*** ./src/app/add-lab-test/add-lab-cat/add-lab-cat.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkZC1sYWItdGVzdC9hZGQtbGFiLWNhdC9hZGQtbGFiLWNhdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/add-lab-test/add-lab-cat/add-lab-cat.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/add-lab-test/add-lab-cat/add-lab-cat.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g-12\">\r\n    <div class=\"ui-lg-5 ui-md-5 ui-sm-12\">\r\n        <button pButton type=\"button\" class=\"backBtnStyle\" (click)=\"back()\" style=\"width:45%;margin-left:30% \" label=\"Back\"></button>\r\n    </div>\r\n</div>\r\n<div style=\"position: absolute;top:60%;\" class=\"ui-g-12\" *ngIf=\"loader\">\r\n    <p-progressSpinner [style]=\"{ 'margin-left': '45%' }\"></p-progressSpinner>\r\n</div>\r\n<div class=\"ui-g-12\">\r\n    <p-toast></p-toast>\r\n    <p-panel class=\"ui-panel\" header=\"ADD LAB CATEGORY\">\r\n        <form style=\"width:100%;\" #categoryForm=\"ngForm\" (ngSubmit)=\"submitCategory(categoryForm.value); categoryForm.reset()\">\r\n            <div class=\"ui-g ui-fluid\">\r\n                <div class=\"ui-g-12 ui-md-12\">\r\n                    <div style=\"margin-left:20%;width:60%;\" class=\"ui-inputgroup\">\r\n                        <span class=\"ui-inputgroup-addon\"><i class=\"fa fa-user\"></i></span>\r\n                        <input style=\"height:40px;height:40px;\" required [(ngModel)]=\"category\" name=\"category\" type=\"text\" pInputText placeholder=\"Add Lab Category\" />\r\n                    </div>\r\n                </div>\r\n                <div class=\"ui-g-12 ui-md-12\">\r\n                    <div class=\"ui-g-12 ui-lg-12  ui-sm-12\">\r\n                        <button pButton type=\"submit\" [disabled]=\"categoryForm.form.invalid\" style=\"width:30%;margin-left:35%;\" label=\"Add Lab Category\" class=\"colorSetAllButtons\"></button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </form>\r\n    </p-panel>\r\n</div>"

/***/ }),

/***/ "./src/app/add-lab-test/add-lab-cat/add-lab-cat.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/add-lab-test/add-lab-cat/add-lab-cat.component.ts ***!
  \*******************************************************************/
/*! exports provided: AddLabCatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddLabCatComponent", function() { return AddLabCatComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _labtest_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../labtest-service.service */ "./src/app/add-lab-test/labtest-service.service.ts");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");






var AddLabCatComponent = /** @class */ (function () {
    function AddLabCatComponent(labServ, messageService, route, _location) {
        this.labServ = labServ;
        this.messageService = messageService;
        this.route = route;
        this._location = _location;
        this.loader = false;
    }
    AddLabCatComponent.prototype.ngOnInit = function () {
        this.labServ.getcategory().subscribe(function (d) { return console.log(d); }, function (error) { return console.log(error); });
    };
    AddLabCatComponent.prototype.submitCategory = function (data) {
        var _this = this;
        this.loader = true;
        data.category = data.category.toUpperCase();
        this.labServ.postcategory(data).subscribe(function (d) {
            if (Object.keys(d)[0] !== "Already exsist") {
                _this.loader = false;
                _this.messageService.add({ severity: 'success', summary: 'Service Message', detail: Object.keys(d)[0] });
            }
            else {
                _this.loader = false;
                _this.messageService.add({ severity: 'error', summary: 'Service Message', detail: Object.keys(d)[0] });
            }
        }, function (error) {
            console.log(error);
            _this.messageService.add({ severity: 'warning', summary: 'Service Message', detail: error });
        });
    };
    AddLabCatComponent.prototype.back = function () {
        this._location.back();
    };
    AddLabCatComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-lab-cat',
            template: __webpack_require__(/*! ./add-lab-cat.component.html */ "./src/app/add-lab-test/add-lab-cat/add-lab-cat.component.html"),
            styles: [__webpack_require__(/*! ./add-lab-cat.component.css */ "./src/app/add-lab-test/add-lab-cat/add-lab-cat.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_labtest_service_service__WEBPACK_IMPORTED_MODULE_2__["LabtestServiceService"], primeng_api__WEBPACK_IMPORTED_MODULE_3__["MessageService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]])
    ], AddLabCatComponent);
    return AddLabCatComponent;
}());



/***/ }),

/***/ "./src/app/add-lab-test/add-lab-test.component.css":
/*!*********************************************************!*\
  !*** ./src/app/add-lab-test/add-lab-test.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@-webkit-keyframes ui-progress-spinner-color {\r\n    100%,\r\n    0% {\r\n        stroke: #ada9a9;\r\n    }\r\n    40% {\r\n        stroke: #080808;\r\n    }\r\n    66% {\r\n        stroke: #a3a3a3;\r\n    }\r\n    80%,\r\n    90% {\r\n        stroke: #131312;\r\n    }\r\n}\r\n@keyframes ui-progress-spinner-color {\r\n    100%,\r\n    0% {\r\n        stroke: #ada9a9;\r\n    }\r\n    40% {\r\n        stroke: #080808;\r\n    }\r\n    66% {\r\n        stroke: #a3a3a3;\r\n    }\r\n    80%,\r\n    90% {\r\n        stroke: #131312;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkLWxhYi10ZXN0L2FkZC1sYWItdGVzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0k7O1FBRUksZUFBZTtJQUNuQjtJQUNBO1FBQ0ksZUFBZTtJQUNuQjtJQUNBO1FBQ0ksZUFBZTtJQUNuQjtJQUNBOztRQUVJLGVBQWU7SUFDbkI7QUFDSjtBQWZBO0lBQ0k7O1FBRUksZUFBZTtJQUNuQjtJQUNBO1FBQ0ksZUFBZTtJQUNuQjtJQUNBO1FBQ0ksZUFBZTtJQUNuQjtJQUNBOztRQUVJLGVBQWU7SUFDbkI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2FkZC1sYWItdGVzdC9hZGQtbGFiLXRlc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBrZXlmcmFtZXMgdWktcHJvZ3Jlc3Mtc3Bpbm5lci1jb2xvciB7XHJcbiAgICAxMDAlLFxyXG4gICAgMCUge1xyXG4gICAgICAgIHN0cm9rZTogI2FkYTlhOTtcclxuICAgIH1cclxuICAgIDQwJSB7XHJcbiAgICAgICAgc3Ryb2tlOiAjMDgwODA4O1xyXG4gICAgfVxyXG4gICAgNjYlIHtcclxuICAgICAgICBzdHJva2U6ICNhM2EzYTM7XHJcbiAgICB9XHJcbiAgICA4MCUsXHJcbiAgICA5MCUge1xyXG4gICAgICAgIHN0cm9rZTogIzEzMTMxMjtcclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/add-lab-test/add-lab-test.component.html":
/*!**********************************************************!*\
  !*** ./src/app/add-lab-test/add-lab-test.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g\">\r\n\r\n    <div class=\"ui-g-4 ui-lg-4 ui-sm-12\">\r\n        <button pButton type=\"button\" class=\"backBtnStyle\" (click)=\"backtomain()\" style=\"width:80%;margin-left:10%;  height:40px;\" label=\"Back\"></button>\r\n    </div>\r\n\r\n    <div style=\"z-index:3; position: absolute;top:70%;\" class=\"ui-g-12\" *ngIf=\"delete\">\r\n        <p-progressSpinner [style]=\"{ 'margin-left': '45%' }\"></p-progressSpinner>\r\n    </div>\r\n\r\n    <p-toast></p-toast>\r\n    <div class=\"ui-g-4 ui-lg-4 ui-sm-12\">\r\n        <button pButton type=\"button\" (click)=\"addlabtest()\" style=\"width:80%;margin-left:10%;  height:40px;\" label=\"Add Lab Test\" class=\"backBtnStyle\"></button>\r\n    </div>\r\n    <div class=\"ui-g-4 ui-lg-4 ui-sm-12\">\r\n        <button pButton type=\"button\" (click)=\"addlabcat()\" style=\"width:80%;margin-left:10%; height: 40px;\" label=\"Add Lab Test Category\" class=\"backBtnStyle\"></button>\r\n    </div>\r\n    <p-card header=\"LAB TESTS LIST\" [style]=\"{  width: '100%',\r\n    'font-size': '26px',\r\n    'text-align': 'center',\r\n    color: 'green'\r\n    }\">\r\n        <hr />\r\n        <p-table style=\"word-wrap:break-word;\" [totalRecords]=\"totalRecords\" #dt [paginator]=\"true\" [value]=\"tests\" [rows]=\"10\" [style]=\"{ 'margin-top': '50px', width: '100%'}\" [columns]=\"cols\">\r\n            <ng-template pTemplate=\"caption\">\r\n\r\n                <div style=\"text-align: right\">\r\n                    <i class=\"fa fa-search\" style=\"margin:4px 4px 0 0\"></i>\r\n                    <input type=\"text\" pInputText size=\"50\" placeholder=\"Global Filter\" (input)=\"dt.filterGlobal($event.target.value, 'contains')\" style=\"width:auto\" />\r\n                </div>\r\n            </ng-template>\r\n            <ng-template pTemplate=\"header\" let-columns>\r\n                <tr>\r\n                    <th style=\"text-align:center\" *ngFor=\"let col of columns\">\r\n                        {{ col.header }}\r\n                    </th>\r\n                    <th style=\"text-align:center\">Actions</th>\r\n                </tr>\r\n            </ng-template>\r\n            <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\r\n                <tr>\r\n                    <td style=\"text-align:center\" *ngFor=\"let col of columns\">\r\n                        {{ rowData[col.field] }}\r\n                    </td>\r\n                    <td>\r\n                        <button pButton style=\"width:60%;margin-left:20%;background-color: rgb(211, 56, 56);\" type=\"button\" label=\"Delete\" (click)=\"inactive(rowData['id'], rowData['testname'])\"></button>\r\n                    </td>\r\n                </tr>\r\n            </ng-template>\r\n        </p-table>\r\n    </p-card>\r\n    <div class=\"ui-g-12\" *ngIf=\"loader\">\r\n        <p-progressSpinner [style]=\"{ 'margin-left': '45%' }\"></p-progressSpinner>\r\n    </div>\r\n    <div class=\"ui-g-12\" *ngIf=\"empty\">\r\n        <p style=\"text-align:center;\">No Lab test to show!</p>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/add-lab-test/add-lab-test.component.ts":
/*!********************************************************!*\
  !*** ./src/app/add-lab-test/add-lab-test.component.ts ***!
  \********************************************************/
/*! exports provided: AddLabTestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddLabTestComponent", function() { return AddLabTestComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _labtest_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./labtest-service.service */ "./src/app/add-lab-test/labtest-service.service.ts");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_4__);





var AddLabTestComponent = /** @class */ (function () {
    function AddLabTestComponent(route, labServ, messageService) {
        this.route = route;
        this.labServ = labServ;
        this.messageService = messageService;
        this.cols = [];
        this.loader = true;
        this.empty = false;
        this.delete = false;
    }
    AddLabTestComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.labServ.getlabtest().subscribe(function (data) {
            _this.loader = false;
            _this.tests = [];
            !data.length ? _this.empty = true : "";
            data.map(function (value) {
                _this.tests.push({
                    'id': value.id,
                    'category': value.category,
                    'testname': value.name,
                    'testprice': value.price,
                    'testdetails': value.details
                });
            });
        }, function (error) { console.log(error); });
        this.cols = [
            { field: 'id', header: "ID" },
            { field: 'category', header: 'Test Category' },
            { field: 'testname', header: 'Test Name' },
            { field: 'testprice', header: 'Test Price' },
            { field: 'testdetails', header: 'Test Details' }
        ];
    };
    AddLabTestComponent.prototype.inactive = function (id, name) {
        var _this = this;
        this.delete = true;
        this.labServ.deletelabtest(id).subscribe(function (response) {
            console.log(response);
            _this.tests = [];
            !response.length ? _this.empty = true : "";
            _this.delete = false;
            response.map(function (value) {
                _this.tests.push({
                    'id': value.id,
                    'category': value.category,
                    'testname': value.name,
                    'testprice': value.price,
                    'testdetails': value.details
                });
            });
            _this.messageService.add({ severity: 'success', summary: 'Service Message', detail: name + ' successfully deleted!' });
        }, function (error) {
            console.log(error);
            _this.delete = false;
            _this.messageService.add({ severity: 'error', summary: 'Service Message', detail: 'Error deleting Lab Test!' });
        });
    };
    AddLabTestComponent.prototype.addlabtest = function () {
        this.route.navigate(['/addlab']);
    };
    AddLabTestComponent.prototype.addlabcat = function () {
        this.route.navigate(['/addlabcat']);
    };
    AddLabTestComponent.prototype.backtomain = function () {
        this.route.navigate(['mainscreen']);
    };
    AddLabTestComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-lab-test',
            template: __webpack_require__(/*! ./add-lab-test.component.html */ "./src/app/add-lab-test/add-lab-test.component.html"),
            styles: [__webpack_require__(/*! ./add-lab-test.component.css */ "./src/app/add-lab-test/add-lab-test.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _labtest_service_service__WEBPACK_IMPORTED_MODULE_3__["LabtestServiceService"], primeng_api__WEBPACK_IMPORTED_MODULE_4__["MessageService"]])
    ], AddLabTestComponent);
    return AddLabTestComponent;
}());



/***/ }),

/***/ "./src/app/add-lab-test/add-test/Add-test.ts":
/*!***************************************************!*\
  !*** ./src/app/add-lab-test/add-test/Add-test.ts ***!
  \***************************************************/
/*! exports provided: Addtest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Addtest", function() { return Addtest; });
var Addtest = /** @class */ (function () {
    function Addtest() {
    }
    return Addtest;
}());



/***/ }),

/***/ "./src/app/add-lab-test/add-test/add-test.component.css":
/*!**************************************************************!*\
  !*** ./src/app/add-lab-test/add-test/add-test.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkZC1sYWItdGVzdC9hZGQtdGVzdC9hZGQtdGVzdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/add-lab-test/add-test/add-test.component.html":
/*!***************************************************************!*\
  !*** ./src/app/add-lab-test/add-test/add-test.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g-12\">\r\n    <div class=\"ui-lg-5 ui-md-5 ui-sm-12\">\r\n        <button pButton type=\"button\" class=\"backBtnStyle\" (click)=\"back()\" style=\"width:45%;margin-left:30% \" label=\"Back\"></button>\r\n    </div>\r\n</div>\r\n<div style=\"position: absolute;top:70%;\" class=\"ui-g-12\" *ngIf=\"loader\">\r\n    <p-progressSpinner [style]=\"{ 'margin-left': '45%' }\"></p-progressSpinner>\r\n</div>\r\n\r\n<div class=\"ui-g-12\">\r\n    <p-toast></p-toast>\r\n\r\n    <p-card header=\"ADD TEST\" [style]=\"{\r\n      width: '80%',\r\n      'font-size': '26px',\r\n      'margin-left': '10%',\r\n      'text-align': 'center',\r\n      color: 'green'\r\n    }\">\r\n        <div class=\"ui-g ui-fluid\">\r\n            <hr style=\"height:2px;width:100%;background-color:green;\" />\r\n            <form style=\"width:100%;\" #myForm=\"ngForm\" (ngSubmit)=\"submitlab(); myForm.reset()\">\r\n                <div class=\"ui-g\">\r\n                    <div class=\"ui-md-3 ui-lg-3\"></div>\r\n                    <div class=\"ui-g-12 ui-md-5\">\r\n                        <div class=\"ui-inputgroup\">\r\n                            <span class=\"ui-inputgroup-addon\" style=\"width:100%;font-size:15px;height:2.2em;margin-top:5px\">\r\n                Lab Test Category: <i style=\"color: red\">*</i></span\r\n              >\r\n              <p-dropdown required [options]=\"cities1\" [(ngModel)]=\"selectedCity1\" name=\"dropdown\">\r\n              </p-dropdown>\r\n            </div>\r\n          </div>\r\n          <!-- button grid -->\r\n          <div class=\"ui-lg-1 ui-sm-12 ui-md-1\">\r\n            <div class=\"ui-inputgroup\">\r\n              <button\r\n                pButton\r\n                type=\"button\"\r\n                label=\"ADD\"\r\n                style=\"width:100%; margin-top: 4px;background-color: #479761 !important;\"\r\n                class=\"ui-button-success\"\r\n                (click)=\"toAddLabCat()\"\r\n              ></button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"ui-g\">\r\n          <div class=\"ui-md-3 ui-lg-3\"></div>\r\n          <div class=\"ui-md-6 ui-lg-6 ui-sm-12\">\r\n            <div class=\"ui-inputgroup\">\r\n              <span class=\"ui-inputgroup-addon\" style=\"width:40%;font-size:15px;\"\r\n                >Test Name: <i style=\"color: red\">*</i></span\r\n              >\r\n              <input type=\"text\" required [(ngModel)]=\"test.name\" name=\"testname\" pInputText />\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"ui-g\">\r\n          <div class=\"ui-md-3 ui-lg-3\"></div>\r\n          <div class=\"ui-md-6 ui-lg-6 ui-sm-12\">\r\n            <div class=\"ui-inputgroup\">\r\n              <span class=\"ui-inputgroup-addon\" style=\"width:40%;font-size:15px;\"\r\n                >Test Price: <i style=\"color: red\">*</i></span\r\n              >\r\n              <input\r\n                type=\"text\"\r\n                (keypress)=\"numberOnly($event)\"\r\n                required\r\n                [(ngModel)]=\"test.price\"\r\n                name=\"price\"\r\n                pInputText\r\n              />\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"ui-g\">\r\n          <div class=\"ui-md-3 ui-lg-3\"></div>\r\n          <div class=\"ui-md-6 ui-lg-6 ui-sm-12\">\r\n            <div class=\"ui-inputgroup\">\r\n              <span class=\"ui-inputgroup-addon\" style=\"width:40%;font-size:15px;\"\r\n                >Test Detail:</span\r\n              >\r\n              <!-- <input type=\"text\" required [(ngModel)]=\"test.details\" name=\"details\" pInputText> -->\r\n              <textarea\r\n                [rows]=\"3\"\r\n                maxlength=\"110\"\r\n                [cols]=\"30\"\r\n                [(ngModel)]=\"test.details\"\r\n                name=\"details\"\r\n                pInputTextarea\r\n              ></textarea>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"ui-g\" style=\"margin-top:-20px !important;\">\r\n          <div class=\"ui-md-3 ui-lg-3\"></div>\r\n          <div class=\"ui-md-6 ui-lg-6 ui-sm-12\">\r\n            <button\r\n              pButton\r\n              type=\"submit\"\r\n              label=\"SUBMIT\"\r\n              [disabled]=\"myForm.form.invalid\"\r\n              style=\"margin-top: 0px; background-color:green;width:100%;\"\r\n              class=\"colorSetAllButtons\"\r\n            ></button>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </p-card>\r\n</div>"

/***/ }),

/***/ "./src/app/add-lab-test/add-test/add-test.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/add-lab-test/add-test/add-test.component.ts ***!
  \*************************************************************/
/*! exports provided: AddTestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTestComponent", function() { return AddTestComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Add_test__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Add-test */ "./src/app/add-lab-test/add-test/Add-test.ts");
/* harmony import */ var _labtest_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../labtest-service.service */ "./src/app/add-lab-test/labtest-service.service.ts");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var AddTestComponent = /** @class */ (function () {
    function AddTestComponent(labservice, messageService, route) {
        this.labservice = labservice;
        this.messageService = messageService;
        this.route = route;
        this.cities1 = [];
        this.loader = false;
        this.test = new _Add_test__WEBPACK_IMPORTED_MODULE_2__["Addtest"]();
        this.cities1 = [{ label: 'Categories', value: null }];
    }
    AddTestComponent.prototype.numberOnly = function (event) {
        var charCode = event.which ? event.which : event.keyCode;
        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
            return false;
        }
        return true;
    };
    AddTestComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.labservice.getcategory().subscribe(function (data) {
            console.log(data);
            data.map(function (v) {
                var obj = {
                    label: v.category,
                    value: v.category
                };
                _this.cities1.push(obj);
            });
        });
    };
    AddTestComponent.prototype.back = function () {
        this.route.navigate(['/addlabtest']);
    };
    AddTestComponent.prototype.submitlab = function () {
        var _this = this;
        this.loader = true;
        this.test.category = this.selectedCity1;
        console.log(this.test);
        this.labservice.postlabtest(this.test).subscribe(function (d) {
            _this.loader = false;
            _this.messageService.add({
                severity: 'success',
                summary: 'Service Message',
                detail: Object.keys(d)[0]
            });
            console.log(d);
        }, function (error) {
            _this.loader = false;
            console.log(error);
        });
    };
    AddTestComponent.prototype.toAddLabCat = function () {
        this.route.navigate(['/addlabcat']);
    };
    AddTestComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-test',
            template: __webpack_require__(/*! ./add-test.component.html */ "./src/app/add-lab-test/add-test/add-test.component.html"),
            styles: [__webpack_require__(/*! ./add-test.component.css */ "./src/app/add-lab-test/add-test/add-test.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_labtest_service_service__WEBPACK_IMPORTED_MODULE_3__["LabtestServiceService"],
            primeng_api__WEBPACK_IMPORTED_MODULE_4__["MessageService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], AddTestComponent);
    return AddTestComponent;
}());



/***/ }),

/***/ "./src/app/add-lab-test/labtest-service.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/add-lab-test/labtest-service.service.ts ***!
  \*********************************************************/
/*! exports provided: LabtestServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LabtestServiceService", function() { return LabtestServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");




var LabtestServiceService = /** @class */ (function () {
    function LabtestServiceService(http) {
        this.http = http;
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + "/api/labtest";
    }
    LabtestServiceService.prototype.getcategory = function () {
        return this.http.get(this.url + "/category");
    };
    LabtestServiceService.prototype.postcategory = function (category) {
        return this.http.post(this.url + "/category", category);
    };
    LabtestServiceService.prototype.getlabtest = function () {
        return this.http.get(this.url + "/");
    };
    LabtestServiceService.prototype.postlabtest = function (test) {
        return this.http.post(this.url + "/", test);
    };
    LabtestServiceService.prototype.deletelabtest = function (id) {
        return this.http.delete(this.url + "/" + id);
    };
    LabtestServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], LabtestServiceService);
    return LabtestServiceService;
}());



/***/ }),

/***/ "./src/app/adddoctor/adddoctor.component.css":
/*!***************************************************!*\
  !*** ./src/app/adddoctor/adddoctor.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".visually-hidden {\r\n  position: absolute;\r\n  width: 1px;\r\n  height: 1px;\r\n  left: -10000px;\r\n  overflow: hidden;\r\n}\r\n\r\n.control, fieldset {\r\n  margin: 6px 0;\r\n}\r\n\r\nlabel {\r\n  display: inline-block;\r\n  width: 120px;\r\n  vertical-align: top;\r\n}\r\n\r\n.required {\r\n  color: red;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkZG9jdG9yL2FkZGRvY3Rvci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixXQUFXO0VBQ1gsY0FBYztFQUNkLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsVUFBVTtBQUNaIiwiZmlsZSI6InNyYy9hcHAvYWRkZG9jdG9yL2FkZGRvY3Rvci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnZpc3VhbGx5LWhpZGRlbiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAxcHg7XHJcbiAgaGVpZ2h0OiAxcHg7XHJcbiAgbGVmdDogLTEwMDAwcHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLmNvbnRyb2wsIGZpZWxkc2V0IHtcclxuICBtYXJnaW46IDZweCAwO1xyXG59XHJcblxyXG5sYWJlbCB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHdpZHRoOiAxMjBweDtcclxuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG59XHJcblxyXG4ucmVxdWlyZWQge1xyXG4gIGNvbG9yOiByZWQ7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/adddoctor/adddoctor.component.html":
/*!****************************************************!*\
  !*** ./src/app/adddoctor/adddoctor.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g-12\">\r\n    <div class=\"ui-lg-5 ui-md-5 ui-sm-12\">\r\n        <button pButton type=\"button\" class=\"backBtnStyle\" (click)=\"routePage()\" style=\"width:45%;margin-left:30% \" label=\"Back\"></button>\r\n    </div>\r\n</div>\r\n<div class=\"ui-g-12 ui-fluid \">\r\n    <div class=\"ui-g-12 ui-md-12\">\r\n        <div class=\"container\">\r\n            <p-card header=\"ADD DOCTOR\" [style]=\"{\r\n          width: '100%',\r\n          'margin-top': '5px !important',\r\n          color: '#3EB650',\r\n          'text-align': 'center',\r\n          height: '30% !important'\r\n        }\">\r\n                <hr />\r\n                <form #myForm=\"ngForm\">\r\n                    <div class=\"ui-g ui-fluid\">\r\n                        <div class=\"ui-g-12 ui-sm-12 ui-md-4\">\r\n                            <div class=\"ui-inputgroup\">\r\n                                <span class=\"ui-inputgroup-addon\" style=\"width: 30%\">FullName<i style=\"color: red\">*</i>\r\n                </span>\r\n                                <input style=\"width:100%;\" type=\"text\" required #abc=\"ngModel\" pInputText placeholder=\"Full Name\" [(ngModel)]=\"doctor.fullName\" name=\"fullName\" ngModel />\r\n                            </div>\r\n                            <div style=\"padding:0px;margin-bottom:4px\" [hidden]=\"abc.valid || abc.pristine\" class=\"alert alert-danger\">\r\n                                Please Enter a fullName\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"ui-g-12 ui-sm-12 ui-md-4\">\r\n                            <div class=\"ui-inputgroup\">\r\n                                <span style=\"width:30%;\" class=\"ui-inputgroup-addon\">Gender<i style=\"color: red\">*</i></span\r\n                >\r\n                <p-dropdown\r\n                  [autoWidth]=\"false\"\r\n                  [ngStyle]=\"{ width: '100%' }\"\r\n                  [options]=\"gender\"\r\n                  name=\"gender\"\r\n                  [(ngModel)]=\"doctor.gender\"\r\n                  placeholder=\"Select Gender\"\r\n                >\r\n                </p-dropdown>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"ui-g-12 ui-sm-12 ui-md-4\">\r\n              <div class=\"ui-inputgroup\">\r\n                <span style=\"width:20%\" class=\"ui-inputgroup-addon\">DOB</span>\r\n                                <p-calendar [ngStyle]=\"{ width: '100%' }\" [(ngModel)]=\"doctor.dateOfbirth\" [monthNavigator]=\"true\" [yearNavigator]=\"true\" yearRange=\"1947:2090\" name=\"DateOfBirth\" showButtonBar=\"true\" dateFormat=\"dd/mm/yy\">\r\n                                </p-calendar>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"ui-g-12 ui-sm-12 ui-md-4\">\r\n                            <div class=\"ui-inputgroup\">\r\n                                <span style=\"width:20%;\" class=\"ui-inputgroup-addon\">Mobile<i style=\"color: red\">*</i></span\r\n                >\r\n                <input\r\n                  type=\"text\"\r\n                  required\r\n                  pInputText\r\n                  placeholder=\"Mobile\"\r\n                  (keypress)=\"numberOnly($event)\"\r\n                  #abd=\"ngModel\"\r\n                  name=\"mobile\"\r\n                  [(ngModel)]=\"doctor.mobile\"\r\n                  ngModel\r\n                />\r\n              </div>\r\n\r\n              <div\r\n                style=\"padding:0px;margin-bottom:4px\"\r\n                [hidden]=\"abd.valid || abd.pristine\"\r\n                class=\"alert alert-danger\"\r\n              >\r\n                Please Enter a MobileNo\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"ui-g-12 ui-sm-12 ui-md-4\">\r\n              <div class=\"ui-inputgroup\">\r\n                <span style=\"width:20%;\" class=\"ui-inputgroup-addon\"\r\n                  >EMR<i style=\"color: red\">*</i></span\r\n                >\r\n                <input\r\n                  style=\"width:100%;\"\r\n                  type=\"text\"\r\n                  required\r\n                  pInputText\r\n                  (keypress)=\"numberOnly($event)\"\r\n                  #abe=\"ngModel\"\r\n                  [(ngModel)]=\"doctor.emrNo\"\r\n                  name=\"emrno\"\r\n                  placeholder=\"EMR NO\"\r\n                  ngModel\r\n                />\r\n              </div>\r\n\r\n              <div\r\n                style=\"padding:0px;margin-bottom:4px\"\r\n                [hidden]=\"abe.valid || abe.pristine\"\r\n                class=\"alert alert-danger\"\r\n              >\r\n                Please Enter an emr no\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"ui-g-12 ui-sm-12 ui-md-4\">\r\n              <div class=\"ui-inputgroup\">\r\n                <span style=\"width:45%;\" class=\"ui-inputgroup-addon\"\r\n                  >Nationality</span\r\n                >\r\n                <input\r\n                  style=\"width:100%;\"\r\n                  type=\"text\"\r\n                  [(ngModel)]=\"doctor.nationality\"\r\n                  pInputText\r\n                  placeholder=\"Nationality\"\r\n                  #abn=\"ngModel\"\r\n                  name=\"nationality\"\r\n                  ngModel\r\n                />\r\n              </div>\r\n              <div\r\n                style=\"padding:0px;margin-bottom:4px\"\r\n                [hidden]=\"abn.valid || abn.pristine\"\r\n                class=\"alert alert-danger\"\r\n              >\r\n                Please Enter your nationality\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"ui-g-6 ui-sm-12 ui-md-4\">\r\n              <div class=\"ui-inputgroup\">\r\n                <span style=\"width:30%;\" class=\"ui-inputgroup-addon\"\r\n                  >Address<i style=\"color: red\">*</i></span\r\n                >\r\n                <input\r\n                  type=\"text\"\r\n                  pInputText\r\n                  required\r\n                  placeholder=\"Address\"\r\n                  name=\"Address\"\r\n                  #abg=\"ngModel\"\r\n                  [(ngModel)]=\"doctor.address\"\r\n                  ngModel\r\n                />\r\n              </div>\r\n              <div\r\n                style=\"padding:0px;margin-bottom:4px\"\r\n                [hidden]=\"abg.valid || abg.pristine\"\r\n                class=\"alert alert-danger\"\r\n              >\r\n                Please Enter your address\r\n              </div>\r\n            </div>\r\n            <div class=\"ui-g-6 ui-sm-12 ui-md-4\">\r\n              <div class=\"ui-inputgroup\">\r\n                <span class=\"ui-inputgroup-addon\"\r\n                  >Fees<i style=\"color: red\">*</i></span\r\n                >\r\n                <input\r\n                  type=\"text\"\r\n                  pInputText\r\n                  required\r\n                  placeholder=\"Fees\"\r\n                  name=\"Fees\"\r\n                  (keypress)=\"numberOnly($event)\"\r\n                  #abf=\"ngModel\"\r\n                  [(ngModel)]=\"doctor.fees\"\r\n                  ngModel\r\n                />\r\n              </div>\r\n              <div\r\n                style=\"padding:0px;margin-bottom:4px\"\r\n                [hidden]=\"abf.valid || abf.pristine\"\r\n                class=\"alert alert-danger\"\r\n              >\r\n                Please Enter your Fees\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"ui-g-12 ui-sm-12 ui-md-4\">\r\n              <div class=\"ui-inputgroup\">\r\n                <span style=\"width:20%;\" class=\"ui-inputgroup-addon\"\r\n                  >Share<i style=\"color: red\">*</i></span\r\n                >\r\n                <input\r\n                  ngModel\r\n                  type=\"text\"\r\n                  [min]=\"0\"\r\n                  [max]=\"100\"\r\n                  pInputText\r\n                  required\r\n                  (keypress)=\"numberOnly($event)\"\r\n                  placeholder=\"Share %\"\r\n                  #abSahre=\"ngModel\"\r\n                  name=\"share\"\r\n                  [(ngModel)]=\"doctor.share\"\r\n                  (ngModelChange)=\"discounter($event)\"\r\n                />\r\n              </div>\r\n              <div\r\n                style=\"padding:0px;margin-bottom:4px\"\r\n                [hidden]=\"shareCheck\"\r\n                class=\"alert alert-danger\"\r\n              >\r\n                Please Enter a correct share\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"ui-g-12 ui-sm-12 ui-md-4\">\r\n              <div class=\"ui-inputgroup\">\r\n                <span class=\"ui-inputgroup-addon\" style=\"width:30%\"\r\n                  >TimeIN</span\r\n                >\r\n                <p-calendar\r\n                  [ngStyle]=\"{ width: '100%', textAlign: 'center' }\"\r\n                  dataType=\"string\"\r\n                  [timeOnly]=\"true\"\r\n                  showTime=\"true\"\r\n                  hourFormat=\"24\"\r\n                  [(ngModel)]=\"doctor.timeIn\"\r\n                  name=\"TimeIn\"\r\n                >\r\n                </p-calendar>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"ui-g-12 ui-sm-12 ui-md-4\">\r\n              <div class=\"ui-inputgroup\">\r\n                <span class=\"ui-inputgroup-addon\" style=\"width:30%;\"\r\n                  >Timeout</span\r\n                >\r\n                <p-calendar\r\n                  [ngStyle]=\"{ width: '100%', textAlign: 'center' }\"\r\n                  [timeOnly]=\"true\"\r\n                  [(ngModel)]=\"doctor.timeOut\"\r\n                  showTime=\"true\"\r\n                  hourFormat=\"24\"\r\n                  dataType=\"string\"\r\n                  name=\"TimeOut\"\r\n                ></p-calendar>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"ui-g-12 ui-sm-12 ui-md-4\">\r\n              <div class=\"ui-inputgroup\">\r\n                <span style=\"width:20%;\" class=\"ui-inputgroup-addon\"\r\n                  >Service</span\r\n                >\r\n                <p-toast key=\"s\" [showTransitionOptions]=\"'2ms'\"></p-toast>\r\n                <input\r\n                  type=\"text\"\r\n                  pInputText\r\n                  placeholder=\"daysservice/week\"\r\n                  name=\"daysservice\"\r\n                  #abh=\"ngModel\"\r\n                  [(ngModel)]=\"doctor.daysservice\"\r\n                  ngModel\r\n                />\r\n              </div>\r\n              <div\r\n                style=\"padding:0px;margin-bottom:4px\"\r\n                [hidden]=\"abh.valid || abh.pristine\"\r\n                class=\"alert alert-danger\"\r\n              >\r\n                Please Enter days of service\r\n              </div>\r\n            </div>\r\n            <div class=\"ui-g-12 ui-sm-12 ui-md-4\">\r\n              <div class=\"ui-inputgroup\">\r\n                <span style=\"width:20%;\" class=\"ui-inputgroup-addon\">CNIC</span>\r\n                                <input type=\"text\" pInputText #abi=\"ngModel\" (keypress)=\"numberOnly($event)\" placeholder=\"CNIC\" name=\"cnic\" [(ngModel)]=\"doctor.cnic\" ngModel />\r\n                            </div>\r\n                            <div style=\"padding:0px;margin-bottom:4px\" [hidden]=\"abi.valid || abi.pristine\" class=\"alert alert-danger\">\r\n                                Please Enter your cnic\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"ui-g-12 ui-sm-12 ui-md-4\">\r\n                            <div class=\"ui-inputgroup\">\r\n                                <span style=\"width:20%;\" class=\"ui-inputgroup-addon\">Email</span\r\n                >\r\n                <input\r\n                  type=\"text\"\r\n                  pInputText\r\n                  placeholder=\"EMAIL\"\r\n                  name=\"email\"\r\n                  #abj=\"ngModel\"\r\n                  [(ngModel)]=\"doctor.email\"\r\n                  ngModel\r\n                />\r\n              </div>\r\n              <div\r\n                style=\"padding:0px;margin-bottom:4px\"\r\n                [hidden]=\"abj.valid || abj.pristine\"\r\n                class=\"alert alert-danger\"\r\n              >\r\n                Please Enter your email\r\n              </div>\r\n            </div>\r\n            <div class=\"ui-g-12 ui-sm-12 ui-md-4\">\r\n              <div class=\"ui-inputgroup\">\r\n                <span style=\"width:25%;\" class=\"ui-inputgroup-addon\"\r\n                  >Speciality</span\r\n                >\r\n                <input\r\n                  type=\"text\"\r\n                  pInputText\r\n                  placeholder=\"Speciality\"\r\n                  #abk=\"ngModel\"\r\n                  name=\"speciality\"\r\n                  [(ngModel)]=\"doctor.speciality\"\r\n                  ngModel\r\n                />\r\n              </div>\r\n              <div\r\n                style=\"padding:0px;margin-bottom:4px\"\r\n                [hidden]=\"abk.valid || abk.pristine\"\r\n                class=\"alert alert-danger\"\r\n              >\r\n                Please Enter speciality\r\n              </div>\r\n            </div>\r\n            <div class=\"ui-g-12 ui-sm-12 ui-md-4\">\r\n              <div class=\"ui-inputgroup\">\r\n                <span style=\"width:35%;\" class=\"ui-inputgroup-addon\"\r\n                  >Qualification</span\r\n                >\r\n                <input\r\n                  type=\"text\"\r\n                  pInputText\r\n                  placeholder=\"Qualification\"\r\n                  #abl=\"ngModel\"\r\n                  name=\"qualification\"\r\n                  [(ngModel)]=\"doctor.qualification\"\r\n                  ngModel\r\n                />\r\n              </div>\r\n              <div\r\n                style=\"padding:0px;margin-bottom:4px\"\r\n                [hidden]=\"abl.valid || abl.pristine\"\r\n                class=\"alert alert-danger\"\r\n              >\r\n                Please Enter qualification\r\n              </div>\r\n            </div>\r\n            <div class=\"ui-g-12 ui-sm-12 ui-md-4\">\r\n              <div class=\"ui-inputgroup\">\r\n                <span style=\"width:30%;\" class=\"ui-inputgroup-addon\"\r\n                  >Hours/day</span\r\n                >\r\n                <input\r\n                  ngModel\r\n                  type=\"text\"\r\n                  pInputText\r\n                  placeholder=\"Hours/day\"\r\n                  #abm=\"ngModel\"\r\n                  name=\"hoursday\"\r\n                  [(ngModel)]=\"doctor.hoursday\"\r\n                />\r\n              </div>\r\n              <div\r\n                style=\"padding:0px;margin-bottom:4px\"\r\n                [hidden]=\"abm.valid || abm.pristine\"\r\n                class=\"alert alert-danger\"\r\n              >\r\n                Please Enter hours/day\r\n              </div>\r\n            </div>\r\n            <div class=\"ui-g-12 ui-sm-12 ui-md-4\">\r\n              <div class=\"ui-inputgroup\">\r\n                <span style=\"width:25%;\" class=\"ui-inputgroup-addon\"\r\n                  >Position</span\r\n                >\r\n                <input\r\n                  ngModel\r\n                  type=\"text\"\r\n                  pInputText\r\n                  placeholder=\"Position\"\r\n                  name=\"position\"\r\n                  #abn=\"ngModel\"\r\n                  [(ngModel)]=\"doctor.position\"\r\n                />\r\n              </div>\r\n              <div\r\n                style=\"padding:0px;margin-bottom:4px\"\r\n                [hidden]=\"abn.valid || abn.pristine\"\r\n                class=\"alert alert-danger\"\r\n              >\r\n                Please Enter position\r\n              </div>\r\n            </div>\r\n            <div class=\"ui-g-12 ui-sm-12 ui-md-4\">\r\n              <div class=\"ui-inputgroup\">\r\n                <span style=\"width:25%;\" class=\"ui-inputgroup-addon\"\r\n                  >Religion</span\r\n                >\r\n                <input\r\n                  ngModel\r\n                  type=\"text\"\r\n                  pInputText\r\n                  placeholder=\"Religion\"\r\n                  [(ngModel)]=\"doctor.religion\"\r\n                  name=\"religion\"\r\n                  #abo=\"ngModel\"\r\n                />\r\n              </div>\r\n              <div\r\n                style=\"padding:0px;margin-bottom:4px\"\r\n                [hidden]=\"abo.valid || abo.pristine\"\r\n                class=\"alert alert-danger\"\r\n              >\r\n                Please Enter religion\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"ui-g-12 ui-sm-12 ui-md-4\">\r\n              <div class=\"ui-inputgroup\">\r\n                <span style=\"width:20%;\" class=\"ui-inputgroup-addon\"\r\n                  >Salary</span\r\n                >\r\n                <input\r\n                  ngModel\r\n                  type=\"text\"\r\n                  pInputText\r\n                  (keypress)=\"numberOnly($event)\"\r\n                  placeholder=\"Salary\"\r\n                  #abp=\"ngModel\"\r\n                  name=\"sallary\"\r\n                  [(ngModel)]=\"doctor.sallary\"\r\n                />\r\n              </div>\r\n              <div\r\n                style=\"padding:0px;margin-bottom:4px\"\r\n                [hidden]=\"abp.valid || abp.pristine\"\r\n                class=\"alert alert-danger\"\r\n              >\r\n                Please Enter sallary\r\n              </div>\r\n            </div>\r\n            <div class=\"ui-g-12 ui-sm-12 ui-md-4\">\r\n              <div class=\"ui-inputgroup\">\r\n                <span style=\"width:35%;\" class=\"ui-inputgroup-addon\"\r\n                  >Description</span\r\n                >\r\n                <textarea\r\n                  maxlength=\"70\"\r\n                  rows=\"2\"\r\n                  cols=\"30\"\r\n                  pInputTextarea\r\n                  autoResize=\"autoResize\"\r\n                  placeholder=\"Description\"\r\n                  name=\"Description\"\r\n                ></textarea>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"ui-g-12 \">\r\n              <div class=\"ui-g ui-fluid\">\r\n                <!-- Submit button -->\r\n                <div class=\"ui-g-12 ui-md-12\">\r\n\r\n                    <button\r\n                      type=\"button\"\r\n                      (click)=\"save(); myForm.resetForm()\"\r\n                      [disabled]=\"myForm.invalid || !shareCheck\"\r\n                      class=\"btn btn-success btn-block\"\r\n                    >\r\n                      Submit\r\n                    </button>\r\n\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </form>\r\n        <p-toast key=\"u\" [showTransitionOptions]=\"'3ms'\"></p-toast>\r\n      </p-card>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/adddoctor/adddoctor.component.ts":
/*!**************************************************!*\
  !*** ./src/app/adddoctor/adddoctor.component.ts ***!
  \**************************************************/
/*! exports provided: AdddoctorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdddoctorComponent", function() { return AdddoctorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _doctor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./doctor */ "./src/app/adddoctor/doctor.ts");
/* harmony import */ var _doctor_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./doctor.service */ "./src/app/adddoctor/doctor.service.ts");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






// import {CalendarModule} from 'primeng/calendar';
var AdddoctorComponent = /** @class */ (function () {
    function AdddoctorComponent(drservice, router, mesgService, activatedRoute) {
        this.drservice = drservice;
        this.router = router;
        this.mesgService = mesgService;
        this.activatedRoute = activatedRoute;
        this.doctor = new _doctor__WEBPACK_IMPORTED_MODULE_2__["Doctor"]();
        this.shareCheck = true;
        this.gender = [
            { label: 'Male', value: 'Male ' },
            { label: 'Female', value: 'Female' }
        ];
    }
    AdddoctorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = this.activatedRoute.snapshot.params.id;
        console.log('This is id ' + this.id);
        if (this.id) {
            this.drservice.getDoctorById(this.id).subscribe(function (doc) {
                console.log(doc);
                // tslint:disable-next-line: no-string-literal
                _this.doctor.fullName = doc.fullName;
                _this.doctor.mobile = doc.mobile;
                _this.doctor.sallary = doc.sallary;
                _this.doctor.fees = doc.fees;
                _this.doctor.gender = doc.gender;
                _this.doctor.email = doc.email;
                _this.doctor.hoursday = doc.hoursday;
                _this.doctor.nationality = doc.nationality;
                _this.doctor.position = doc.position;
                _this.doctor.religion = doc.religion;
                _this.doctor.qualification = doc.qualification;
                _this.doctor.address = doc.address;
                _this.doctor.cnic = doc.cnic;
                _this.doctor.daysservice = doc.daysservice;
                _this.doctor.speciality = doc.speciality;
                _this.doctor.dateOfbirth = new Date(doc.dateOfbirth);
                _this.doctor.daysservice = doc.daysservice;
                _this.doctor.timeIn = doc.timeIn;
                _this.doctor.timeOut = doc.timeOut;
                _this.doctor.emrNo = doc.emrNo;
                _this.doctor.share = doc.share;
                _this.oldPhoneNo = _this.doctor.mobile;
                console.log(_this.oldPhoneNo);
            });
        }
    };
    AdddoctorComponent.prototype.numberOnly = function (event) {
        var charCode = event.which ? event.which : event.keyCode;
        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
            return false;
        }
        return true;
    };
    AdddoctorComponent.prototype.save = function () {
        var _this = this;
        console.log(this.doctor);
        // Update an existing doctor
        if (this.id != 0 && this.id != null) {
            this.drservice.updateDoctorById(this.id, this.oldPhoneNo, this.doctor).subscribe(function (response) {
                _this.mesgService.add({
                    key: 'u',
                    severity: 'info',
                    summary: 'Doctor Updated Successfully',
                    detail: 'Added'
                });
                console.log(response);
            }, function (error) {
                _this.mesgService.add({
                    key: 'u',
                    severity: 'error',
                    summary: 'Failed',
                    detail: 'Something went wrong check your internet connection '
                });
                console.log(error);
            });
        }
        else {
            console.log(this.doctor);
            this.drservice.savedoctor(this.doctor).subscribe(function (data) {
                _this.mesgService.add({
                    key: 's',
                    severity: 'success',
                    summary: 'Doctor Added Successfully',
                    detail: 'Added'
                });
            }, function (error) {
                _this.mesgService.add({
                    key: 's',
                    severity: 'error',
                    summary: 'Failed',
                    detail: 'Unable to Add A New Doctor'
                });
            });
        }
    };
    AdddoctorComponent.prototype.onclick = function () {
        this.save();
    };
    AdddoctorComponent.prototype.routePage = function () {
        this.router.navigate(['doctorlist']);
    };
    AdddoctorComponent.prototype.discounter = function (value) {
        var tempShare = value;
        tempShare >= 0 && tempShare <= 100 ? this.shareCheck = true : this.shareCheck = false;
        this.doctor.share = tempShare;
        console.log(this.doctor.share);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('myfrom'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], AdddoctorComponent.prototype, "formRef", void 0);
    AdddoctorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-adddoctor',
            template: __webpack_require__(/*! ./adddoctor.component.html */ "./src/app/adddoctor/adddoctor.component.html"),
            styles: [__webpack_require__(/*! ./adddoctor.component.css */ "./src/app/adddoctor/adddoctor.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_doctor_service__WEBPACK_IMPORTED_MODULE_3__["DoctorService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            primeng_api__WEBPACK_IMPORTED_MODULE_4__["MessageService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])
    ], AdddoctorComponent);
    return AdddoctorComponent;
}());



/***/ }),

/***/ "./src/app/adddoctor/doctor.service.ts":
/*!*********************************************!*\
  !*** ./src/app/adddoctor/doctor.service.ts ***!
  \*********************************************/
/*! exports provided: DoctorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoctorService", function() { return DoctorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");




var DoctorService = /** @class */ (function () {
    function DoctorService(http) {
        this.http = http;
    }
    //  '/api/doctor/';
    DoctorService.prototype.savedoctor = function (doctor) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + 'api/doctor/', doctor);
    };
    DoctorService.prototype.getdoctors = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + 'api/doctor/');
    };
    DoctorService.prototype.getDoctorById = function (mrNo) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + 'api/doctor/' + mrNo);
    };
    DoctorService.prototype.updateDoctorById = function (mrNo, oldPhoneNo, doc) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + 'api/doctor/' + mrNo + '/' + oldPhoneNo, doc);
    };
    DoctorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], DoctorService);
    return DoctorService;
}());



/***/ }),

/***/ "./src/app/adddoctor/doctor.ts":
/*!*************************************!*\
  !*** ./src/app/adddoctor/doctor.ts ***!
  \*************************************/
/*! exports provided: Doctor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Doctor", function() { return Doctor; });
var Doctor = /** @class */ (function () {
    function Doctor() {
    }
    return Doctor;
}());



/***/ }),

/***/ "./src/app/addpackage/addpackage.component.css":
/*!*****************************************************!*\
  !*** ./src/app/addpackage/addpackage.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkZHBhY2thZ2UvYWRkcGFja2FnZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/addpackage/addpackage.component.html":
/*!******************************************************!*\
  !*** ./src/app/addpackage/addpackage.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p-toast position=\"top-right\"></p-toast>\r\n\r\n<div class=\"ui-g\">\r\n  <div class=\"ui-lg-2 ui-md-2 ui-sm-0\"></div>\r\n  <div class=\"ui-g-4 ui-lg-4 ui-sm-12\">\r\n    <button pButton type=\"button\" class=\"backBtnStyle\" (click)=\"backtoPackageList()\"\r\n      style=\"width:80%;margin-left:10%;  height:40px;\" label=\"Back\"></button>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"ui-g-12\" style=\"width: 80%;\r\n      font-size: 26px;\r\n      margin-left: 10%;\r\n      text-align: center;\r\n      color: green;\">\r\n  <p-card header=\"Add Package\">\r\n    <div class=\"ui-g ui-fluid\">\r\n      <hr style=\"height:2px;width:100%;background-color:green;\" />\r\n      <form style=\"width:100%;\" #myForm=\"ngForm\" (ngSubmit)=\"submitPackage(); myForm.reset()\">\r\n        <div class=\"ui-g\">\r\n          <div class=\"ui-md-3 ui-lg-3\"></div>\r\n          <div class=\"ui-md-6 ui-lg-6 ui-sm-12\">\r\n            <div class=\"ui-inputgroup\">\r\n              <span class=\"ui-inputgroup-addon\" style=\"width:50%;font-size:15px; font-weight: bold;\">Package Name <i\r\n                  style=\"color: red\">*</i></span>\r\n              <input type=\"text\" [(ngModel)]=\"package.pName\" required name=\"packageName\" pInputText />\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"ui-g\">\r\n          <div class=\"ui-md-3 ui-lg-3\"></div>\r\n          <div class=\"ui-md-6 ui-lg-6 ui-sm-12\">\r\n            <div class=\"ui-inputgroup\">\r\n              <span class=\"ui-inputgroup-addon\" style=\"width: 170px;font-size:13px; font-weight: bold;\">Package Facility\r\n                <i style=\"color: red\">*</i></span>\r\n              <p-dropdown [options]=\"facilitydrop\" [(ngModel)]=\"package.pFacility\" required name=\"facility\"\r\n                [style]=\"{ width: '335px' }\" placeholder=\"Select Facility\">\r\n              </p-dropdown>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"ui-g\">\r\n          <div class=\"ui-md-3 ui-lg-3\"></div>\r\n          <div class=\"ui-md-6 ui-lg-6 ui-sm-12\">\r\n            <div class=\"ui-inputgroup\">\r\n              <span class=\"ui-inputgroup-addon\" style=\"width:50%;font-size:15px; font-weight: bold;\">Package Price <i\r\n                  style=\"color: red\">*</i></span>\r\n              <input type=\"text\" [(ngModel)]=\"package.pPrice\" (keypress)=\"numberOnly($event)\" required\r\n                name=\"packageDuration\" pInputText />\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"ui-g\">\r\n          <div class=\"ui-md-3 ui-lg-3\"></div>\r\n          <div class=\"ui-md-6 ui-lg-6 ui-sm-12\">\r\n            <div class=\"ui-inputgroup\">\r\n              <span class=\"ui-inputgroup-addon\" style=\"width:50%;font-size:15px; font-weight: bold;\">Package Sponsor <i\r\n                  style=\"color: red\">*</i></span>\r\n              <input type=\"text\" [(ngModel)]=\"package.pSponsor\" required name=\"packageSponsor\" pInputText />\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"ui-g\">\r\n          <div class=\"ui-md-3 ui-lg-3\"></div>\r\n          <div class=\"ui-md-6 ui-lg-6 ui-sm-12\">\r\n            <button pButton type=\"submit\" label=\"Add Package\" [disabled]=\"myForm.form.invalid\"\r\n              style=\"margin-top: 0px; background-color:green;width:100%; font-weight: bold;\"></button>\r\n          </div>\r\n        </div>\r\n      </form>\r\n      <div class=\"ui-g-12\" *ngIf=\"loader\">\r\n        <p-progressSpinner></p-progressSpinner>\r\n      </div>\r\n    </div>\r\n  </p-card>\r\n</div>"

/***/ }),

/***/ "./src/app/addpackage/addpackage.component.ts":
/*!****************************************************!*\
  !*** ./src/app/addpackage/addpackage.component.ts ***!
  \****************************************************/
/*! exports provided: AddpackageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddpackageComponent", function() { return AddpackageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _package__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./package */ "./src/app/addpackage/package.ts");
/* harmony import */ var _Services_package_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Services/package-service.service */ "./src/app/Services/package-service.service.ts");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_5__);






var AddpackageComponent = /** @class */ (function () {
    function AddpackageComponent(router, messageService, packageServ) {
        this.router = router;
        this.messageService = messageService;
        this.packageServ = packageServ;
        this.packages = new _package__WEBPACK_IMPORTED_MODULE_3__["Package"]();
        this.cols = [];
        this.loader = false;
        this.facilitydrop = [
            { label: 'With Medication', value: 'with medication' },
            { label: 'Without Medication', value: 'without medication' }
        ];
    }
    AddpackageComponent.prototype.ngOnInit = function () {
        this.package = new _package__WEBPACK_IMPORTED_MODULE_3__["Package"]();
    };
    AddpackageComponent.prototype.backtoPackageList = function () {
        this.router.navigate(['packagelist']);
    };
    AddpackageComponent.prototype.submitPackage = function () {
        var _this = this;
        console.log('Add Package');
        this.loader = true;
        this.packageServ.postPackage(this.package).subscribe(function (response) {
            _this.loader = false;
            _this.messageService.add({
                severity: 'success',
                summary: 'Service Message',
                detail: Object.keys(response)[0]
            });
        }, function (error) {
            _this.loader = false;
            _this.messageService.add({
                severity: 'error',
                summary: 'Service Message',
                detail: 'Data adding failed!'
            });
        });
    };
    AddpackageComponent.prototype.numberOnly = function (event) {
        var charCode = event.which ? event.which : event.keyCode;
        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
            return false;
        }
        return true;
    };
    AddpackageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-addpackage',
            template: __webpack_require__(/*! ./addpackage.component.html */ "./src/app/addpackage/addpackage.component.html"),
            styles: [__webpack_require__(/*! ./addpackage.component.css */ "./src/app/addpackage/addpackage.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            primeng_api__WEBPACK_IMPORTED_MODULE_5__["MessageService"],
            _Services_package_service_service__WEBPACK_IMPORTED_MODULE_4__["PackageServiceService"]])
    ], AddpackageComponent);
    return AddpackageComponent;
}());



/***/ }),

/***/ "./src/app/addpackage/package.ts":
/*!***************************************!*\
  !*** ./src/app/addpackage/package.ts ***!
  \***************************************/
/*! exports provided: Package */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Package", function() { return Package; });
var Package = /** @class */ (function () {
    function Package() {
    }
    return Package;
}());



/***/ }),

/***/ "./src/app/addpanellist/addpanellist.component.css":
/*!*********************************************************!*\
  !*** ./src/app/addpanellist/addpanellist.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkZHBhbmVsbGlzdC9hZGRwYW5lbGxpc3QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/addpanellist/addpanellist.component.html":
/*!**********************************************************!*\
  !*** ./src/app/addpanellist/addpanellist.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g-6 ui-lg-6 ui-sm-12\">\r\n<button\r\n  pButton\r\n  type=\"button\"\r\n  class=\"ui-button-success\"\r\n  style=\"width:80%;margin-left:10%;  height:40px;\"\r\n  (click)=\"addpanel()\"\r\n  label= \"Back\"\r\n>\r\n</button>\r\n</div>\r\n<div class=\"ui-g-12 ui-fluid  \">\r\n  <div class=\"ui-g-12 ui-md-12\">\r\n    <div class=\"container\">\r\n      <p-card\r\n        header=\"ADD PANEL\"\r\n        [style]=\"{\r\n          width: '100%',\r\n          'margin-top': '5px !important',\r\n          color: '#3EB650',\r\n          'text-align': 'center',\r\n          height: '30% !important'\r\n        }\"\r\n      >\r\n        <hr />\r\n        <form (ngSubmit)=\"Onsubmit()\" #form=\"ngForm\">\r\n          <div class=\"ui-g ui-fluid\">\r\n            <div class=\"ui-g-12 ui-md-5\">\r\n              <div class=\"ui-inputgroup\">\r\n                <span class=\"ui-inputgroup-addon\"\r\n                  ><i class=\"fa fa-user\"><i style=\"color: red\">*</i></i></span\r\n                >\r\n\r\n                <input\r\n                  type=\"text\"\r\n                  required\r\n                  #abc=\"ngModel\"\r\n                  [(ngModel)]=\"panels.panelName\"\r\n                  pInputText\r\n                  placeholder=\"Panel Name\"\r\n                  name=\"panelName\"\r\n                  ngModel\r\n                />\r\n              </div>\r\n              <div\r\n                style=\"padding:0px;margin-bottom:4px\"\r\n                [hidden]=\"abc.valid || abc.pristine\"\r\n                class=\"alert alert-danger\"\r\n              >\r\n                Please Enter a Panel Name\r\n              </div>\r\n            </div>\r\n            <div class=\"ui-md-2\"></div>\r\n\r\n            <div class=\"ui-g-12 ui-md-5\">\r\n              <div class=\"ui-inputgroup\">\r\n                <span class=\"ui-inputgroup-addon\" style=\"width:50%;\"\r\n                  >PANEL TYPE<i style=\"color: red\">*</i></span\r\n                >\r\n\r\n                <p-dropdown\r\n                  [options]=\"paneldrop\"\r\n                  required\r\n                  name=\"panel\"\r\n                  [(ngModel)]=\"panels.panelType\"\r\n                  [style]=\"{ width: '300px' }\"\r\n                  placeholder=\"Select Panel\"\r\n                >\r\n                </p-dropdown>\r\n              </div>\r\n            </div>\r\n\r\n            <!-- <div class=\"ui-g-12 ui-md-3\">\r\n              <div class=\"ui-inputgroup\">\r\n                <span class=\"ui-inputgroup-addon\">DOB</span>\r\n                <p-calendar></p-calendar>\r\n              </div>\r\n\r\n            </div> -->\r\n\r\n            <div class=\"ui-g-12 ui-md-5\">\r\n              <div class=\"ui-inputgroup\">\r\n                <span class=\"ui-inputgroup-addon\" style=\"width:50%\"\r\n                  >Panel Start Date<i style=\"color: red\">*</i></span\r\n                >\r\n\r\n                <p-calendar\r\n                  [style]=\"{ width: '300px' }\"\r\n                  [(ngModel)]=\"panels.panelStartDate\"\r\n                  name=\"startdate\"\r\n                  required\r\n                >\r\n                </p-calendar>\r\n              </div>\r\n            </div>\r\n            <div class=\"ui-md-2\"></div>\r\n            <div class=\"ui-g-12 ui-md-5\">\r\n              <div class=\"ui-inputgroup\">\r\n                <span class=\"ui-inputgroup-addon\" style=\"width:50%\"\r\n                  >Panel End Date<i style=\"color: red\">*</i></span\r\n                >\r\n                <p-calendar\r\n                  [style]=\"{ width: '300px' }\"\r\n                  [(ngModel)]=\"panels.panelEndDate\"\r\n                  name=\"enddate\"\r\n                  required\r\n                >\r\n                </p-calendar>\r\n              </div>\r\n            </div>\r\n            <div class=\"ui-g-12 ui-md-5 \">\r\n              <div class=\"ui-inputgroup\">\r\n                <span class=\"ui-inputgroup-addon\" style=\"height:80%; width: 50%;\"\r\n                  >Panel Facility<i style=\"color: red\">*</i></span\r\n                >\r\n\r\n                <p-multiSelect\r\n                  [options]=\"multidropdown\"\r\n                  [(ngModel)]=\"panels.panelFacility\"\r\n                  [panelStyle]=\"{ minWidth: '12em' }\"\r\n                  name=\"pfacility\"\r\n                  [style]=\"{ width: '300px' }\"\r\n                ></p-multiSelect>\r\n\r\n                <!-- <p-multiSelect\r\n                  [options]=\"multidropdown\"\r\n                  (click)=\"OnClickInMulti()\"\r\n>>>>>>> master\r\n                  [panelStyle]=\"{ minWidth: '12em' }\"\r\n                  [(ngModel)]=\"panels.panelFacility\"\r\n                  [style]=\"{ width: '300px' }\"\r\n                  name=\"pfacility\"\r\n                  required\r\n\r\n                ></p-multiSelect> -->\r\n              </div>\r\n            </div>\r\n            <div class=\"ui-g-12 ui-md-5 \">\r\n              <div class=\"ui-inputgroup\">\r\n                <p-dialog\r\n                  header=\"Add Facility\"\r\n                  [(visible)]=\"display\"\r\n                  [modal]=\"true\"\r\n                  [responsive]=\"true\"\r\n                  [style]=\"{ width: '500px', minWidth: '200px' }\"\r\n                  [minY]=\"70\"\r\n                  [maximizable]=\"true\"\r\n                  [baseZIndex]=\"10000\"\r\n                >\r\n                  <form #addFacility=\"ngForm\">\r\n                    <!-- <span class=\"ui-inputgroup-addon\">Add Facility</span> -->\r\n                    <input\r\n                      type=\"text\"\r\n                      pInputText\r\n                      placeholder=\"Add Facility \"\r\n                      name=\"addFacility\"\r\n                      [(ngModel)]=\"facilityObj.facilityName\"\r\n                      required\r\n                      ngModel\r\n                    />\r\n\r\n                    <p-footer>\r\n                      <button\r\n                        type=\"submit\"\r\n                        pButton\r\n                        icon=\"pi pi-check\"\r\n                        class=\"ui-button-success\"\r\n                        label=\"Save\"\r\n                        [disabled]=\"addFacility.invalid\"\r\n                        (click)=\"OnFacilitysubmit(addFacility.value.addFacility)\"\r\n                        (click)=\"display = false\"\r\n                      ></button>\r\n                      <button\r\n                        type=\"button\"\r\n                        pButton\r\n                        icon=\"pi pi-close\"\r\n                        (click)=\"display = false\"\r\n                        label=\"Cancel\"\r\n                        class=\"ui-button-secondary\"\r\n                      ></button>\r\n                    </p-footer>\r\n                  </form>\r\n                </p-dialog>\r\n                <button\r\n                  type=\"button\"\r\n                  (click)=\"showDialog()\"\r\n                  class=\"ui-button-success\"\r\n                  pButton\r\n                  icon=\"pi pi-info-circle\"\r\n                  label=\"ADD\"\r\n                ></button>\r\n              </div>\r\n            </div>\r\n            <div class=\"ui-g-12 \">\r\n              <div class=\" ui-g-12 ui-md-4\">\r\n                <button\r\n                  pButton\r\n                  type=\"submit\"\r\n                  label=\"Save\"\r\n                  class=\" ui-button-success  one\"\r\n                  style=\"width:100%; margin-left:100% \"\r\n                  [disabled]=\"form.invalid\"\r\n                ></button>\r\n              </div>\r\n              <p-toast position=\"top-center\"></p-toast>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </p-card>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/addpanellist/addpanellist.component.ts":
/*!********************************************************!*\
  !*** ./src/app/addpanellist/addpanellist.component.ts ***!
  \********************************************************/
/*! exports provided: AddpanellistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddpanellistComponent", function() { return AddpanellistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _panel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./panel */ "./src/app/addpanellist/panel.ts");
/* harmony import */ var _addpanellistsevice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./addpanellistsevice.service */ "./src/app/addpanellist/addpanellistsevice.service.ts");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _facility__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./facility */ "./src/app/addpanellist/facility.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");







var AddpanellistComponent = /** @class */ (function () {
    function AddpanellistComponent(panelService, messageService, router) {
        this.panelService = panelService;
        this.messageService = messageService;
        this.router = router;
        this.panels = new _panel__WEBPACK_IMPORTED_MODULE_2__["Panel"]();
        this.multidropdown = [];
        this.display = false;
        this.facilityObj = new _facility__WEBPACK_IMPORTED_MODULE_5__["Facility"]();
        this.paneldrop = [
            { label: 'free', value: 'free' },
            { label: '50% Off', value: '50% Off' },
            { label: 'No panel', value: 'No panel' }
        ];
        this.cars = [
            { label: 'choose facilities', value: null },
            { label: 'Audi', value: 'Audi' },
            { label: 'BMW', value: 'BMW' },
            { label: 'Fiat', value: 'Fiat' },
            { label: 'Ford', value: 'Ford' },
            { label: 'Honda', value: 'Honda' },
            { label: 'Jaguar', value: 'Jaguar' },
            { label: 'Mercedes', value: 'Mercedes' },
            { label: 'Renault', value: 'Renault' },
            { label: 'VW', value: 'VW' },
            { label: 'Volvo', value: 'Volvo' }
        ];
    }
    AddpanellistComponent.prototype.ngOnInit = function () {
        this.getFcilityInIt();
    };
    AddpanellistComponent.prototype.getFcilityInIt = function () {
        var _this = this;
        this.multidropdown = [];
        this.panelService.getFacility().subscribe(function (response) {
            console.log('response is here', response);
            response.forEach(function (e) {
                _this.multidropdown.push({
                    label: e.facilityName,
                    value: e.facilityName
                });
            });
        });
    };
    AddpanellistComponent.prototype.save = function () {
        var _this = this;
        this.panelService.savePanel(this.panels).subscribe(function (data) {
            console.log(data);
            _this.messageService.add({ severity: 'success', summary: 'Status', detail: 'Successfull' });
        }, function (error) {
            console.log(error);
            _this.messageService.add({ severity: 'success', summary: 'Status', detail: 'Successfull' });
        });
    };
    AddpanellistComponent.prototype.Onsubmit = function () {
        this.save();
    };
    AddpanellistComponent.prototype.numberOnly = function (event) {
        var charCode = event.which ? event.which : event.keyCode;
        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
            return false;
        }
        return true;
    };
    AddpanellistComponent.prototype.showDialog = function () {
        this.display = true;
    };
    AddpanellistComponent.prototype.onTest = function (value) {
        console.log('test value ', value);
    };
    AddpanellistComponent.prototype.OnFacilitysubmit = function (value) {
        var _this = this;
        console.log('in facility');
        this.multidropdown = [];
        this.panels.panelFacility = [];
        this.facilityObj.facilityName = this.facilityObj.facilityName.toUpperCase();
        this.panelService.saveFacility(this.facilityObj).subscribe(function (data) {
            console.log(data);
            var stat = Object.keys(data);
            // tslint:disable-next-line: triple-equals
            if (stat[0] != 'Already Exsist') {
                _this.messageService.add({
                    severity: 'success',
                    summary: 'Status',
                    detail: 'Successfull'
                });
                _this.getFcilityInIt();
            }
            else {
                _this.messageService.add({
                    severity: 'error',
                    summary: 'Status',
                    detail: 'Already Exsist'
                });
            }
        }, function (error) {
            console.log(error);
            _this.messageService.add({ severity: 'error', summary: 'Failed', detail: 'Failed' });
        });
        this.getFcilityInIt();
    };
    // saveFacility(val:any){
    //     this.facilityObj.facilityName=val;
    AddpanellistComponent.prototype.OnClickInMulti = function () {
        this.getFcilityInIt();
    };
    AddpanellistComponent.prototype.addpanel = function () {
        console.log('jj');
        this.router.navigate(['panellist']);
    };
    AddpanellistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-addpanellist',
            template: __webpack_require__(/*! ./addpanellist.component.html */ "./src/app/addpanellist/addpanellist.component.html"),
            styles: [__webpack_require__(/*! ./addpanellist.component.css */ "./src/app/addpanellist/addpanellist.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_addpanellistsevice_service__WEBPACK_IMPORTED_MODULE_3__["AddpanellistseviceService"], primeng_api__WEBPACK_IMPORTED_MODULE_4__["MessageService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
    ], AddpanellistComponent);
    return AddpanellistComponent;
}());



/***/ }),

/***/ "./src/app/addpanellist/addpanellistsevice.service.ts":
/*!************************************************************!*\
  !*** ./src/app/addpanellist/addpanellistsevice.service.ts ***!
  \************************************************************/
/*! exports provided: AddpanellistseviceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddpanellistseviceService", function() { return AddpanellistseviceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");




var AddpanellistseviceService = /** @class */ (function () {
    function AddpanellistseviceService(http) {
        this.http = http;
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + 'api/panel/';
        this.facilityurl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + 'api/panel/panelfacility/';
    }
    AddpanellistseviceService.prototype.savePanel = function (panel) {
        return this.http.post("" + this.url, panel);
    };
    AddpanellistseviceService.prototype.getPanel = function () {
        return this.http.get("" + this.url);
    };
    AddpanellistseviceService.prototype.deleteById = function (no) {
        return this.http.delete(this.url + no);
    };
    AddpanellistseviceService.prototype.saveFacility = function (facility) {
        return this.http.post("" + this.facilityurl, facility);
    };
    AddpanellistseviceService.prototype.getFacility = function () {
        return this.http.get("" + this.facilityurl);
    };
    AddpanellistseviceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AddpanellistseviceService);
    return AddpanellistseviceService;
}());



/***/ }),

/***/ "./src/app/addpanellist/facility.ts":
/*!******************************************!*\
  !*** ./src/app/addpanellist/facility.ts ***!
  \******************************************/
/*! exports provided: Facility */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Facility", function() { return Facility; });
var Facility = /** @class */ (function () {
    function Facility() {
    }
    return Facility;
}());



/***/ }),

/***/ "./src/app/addpanellist/panel.ts":
/*!***************************************!*\
  !*** ./src/app/addpanellist/panel.ts ***!
  \***************************************/
/*! exports provided: Panel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Panel", function() { return Panel; });
var Panel = /** @class */ (function () {
    function Panel() {
    }
    return Panel;
}());



/***/ }),

/***/ "./src/app/admission/admission.component.css":
/*!***************************************************!*\
  !*** ./src/app/admission/admission.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".loading-indicator {\r\n  position: fixed;\r\n  z-index: 999;\r\n  height: 2em;\r\n  width: 2em;\r\n  overflow: visible;\r\n  margin: auto;\r\n  top: 0;\r\n  left: 0;\r\n  bottom: 0;\r\n  right: 0;\r\n  content: '';\r\n  display: block;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background-color: rgba(0,0,0,0.53);\r\n  }\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaXNzaW9uL2FkbWlzc2lvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7RUFDWixXQUFXO0VBQ1gsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osTUFBTTtFQUNOLE9BQU87RUFDUCxTQUFTO0VBQ1QsUUFBUTtFQUNSLFdBQVc7RUFDWCxjQUFjO0VBQ2QsTUFBTTtFQUNOLE9BQU87RUFDUCxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtDQUFrQztFQUNsQyIsImZpbGUiOiJzcmMvYXBwL2FkbWlzc2lvbi9hZG1pc3Npb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2FkaW5nLWluZGljYXRvciB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHotaW5kZXg6IDk5OTtcclxuICBoZWlnaHQ6IDJlbTtcclxuICB3aWR0aDogMmVtO1xyXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICBib3R0b206IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgY29udGVudDogJyc7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC41Myk7XHJcbiAgfVxyXG5cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/admission/admission.component.html":
/*!****************************************************!*\
  !*** ./src/app/admission/admission.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Back Button -->\r\n<div class=\"ui-g\">\r\n    <div class=\"ui-lg-1 ui-sm-0 ui-md-1\"></div>\r\n    <div class=\"ui-g-4 ui-lg-4 ui-sm-12\">\r\n        <button pButton type=\"button\" class=\"backBtnStyle\" (click)=\"back()\" style=\"width:60%;margin-left:10%;  height:40px;\" label=\"Back\"></button>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"ui-g-12\">\r\n    <p-toast></p-toast>\r\n    <p-card header=\"ADD NEW BEDS\" [style]=\"{\r\n    width: '80%',\r\n    'font-size': '26px',\r\n    'margin-left': '10%',\r\n    'text-align': 'center',\r\n    color: 'green'\r\n  }\">\r\n\r\n        <div class=\"ui-g ui-fluid\">\r\n            <hr style=\"height:2px;width:100%;background-color:green;\" />\r\n            <form style=\"width:100%;\" #myForm=\"ngForm\" (ngSubmit)=\"submitAdmission(); myForm.reset()\">\r\n                <!-- Add Bed Type dropdwon -->\r\n                <div class=\"ui-g\">\r\n                    <div class=\"ui-md-2 ui-lg-2\"></div>\r\n                    <div class=\"ui-md-8 ui-lg-8 ui-sm-12\">\r\n                        <div class=\"ui-inputgroup\">\r\n                            <span class=\"ui-inputgroup-addon\" style=\"width:37%;font-size:15px;font-weight:bold;\">BED TYPE<i style=\"color: red\">*</i></span\r\n          >\r\n          <p-dropdown\r\n          placeholder=\"Select bed type\"\r\n          [showClear]=\"true\"\r\n          (onChange)=\"bedsDropdown()\"\r\n          [options]=\"bedType\"\r\n          name=\"bedType\"\r\n          [filter]=\"true\"\r\n          [style]=\"{ width: '100%', height: '100%', 'font-size': '20px' }\"\r\n          [ngStyle]=\"{ width: '80%', 'font-size': '20px' }\"\r\n          required\r\n          [(ngModel)]=\"_admission.bedType\"\r\n          ></p-dropdown>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- no of beds Field -->\r\n    <div class=\"ui-g\">\r\n      <div class=\"ui-md-2 ui-lg-2\"></div>\r\n      <div class=\"ui-md-8 ui-lg-8 ui-sm-12\">\r\n        <div class=\"ui-inputgroup\">\r\n          <span\r\n          class=\"ui-inputgroup-addon\"\r\n          style=\"width:45%;font-size:15px;font-weight: bold;\"\r\n          >Enter Quantity<i style=\"color: red\">*</i></span\r\n          >\r\n          <input\r\n                placeholder=\"    Please Enter no of beds\"\r\n                type=\"number\"\r\n                name=\"bedsQuantity\"\r\n                pInputText\r\n                ngModel\r\n                required\r\n                style=\"text-align: center\"\r\n                [min]=\"0\"\r\n                [(ngModel)]=\"_admission.bedsQuantity\"\r\n              />\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"ui-g\">\r\n          <div class=\"ui-md-2 ui-lg-2\"></div>\r\n          <div class=\"ui-md-8 ui-lg-8 ui-sm-12\">\r\n            <div class=\"ui-inputgroup\">\r\n              <span\r\n              class=\"ui-inputgroup-addon\"\r\n              style=\"width:45%;font-size:15px;font-weight: bold;\"\r\n              >Enter Price<i style=\"color: red\">*</i></span\r\n              >\r\n              <input\r\n                    placeholder=\"Select Bed Type Price\"\r\n                    type=\"number\"\r\n                    name=\"price\"\r\n                    pInputText\r\n                    ngModel\r\n                    required\r\n                    style=\"text-align: center\"\r\n                    [min]=\"0\"\r\n                    [(ngModel)]=\"_admission.price\"\r\n                  />\r\n                </div>\r\n              </div>\r\n            </div>\r\n        <div class=\"ui-g\">\r\n          <div class=\"ui-md-2 ui-lg-2\"></div>\r\n          <div class=\"ui-md-8 ui-lg-8 ui-sm-12\">\r\n            <button\r\n              [disabled]=\"myForm.invalid\"\r\n              pButton\r\n              type=\"submit\"\r\n              label=\"SAVE\"\r\n              style=\"margin-top: 0px; background-color:green;width:100%;\"\r\n            ></button>\r\n          </div>\r\n        </div>\r\n\r\n            <!-- <p-progressSpinner class=\"loading-indicator\"></p-progressSpinner> -->\r\n\r\n      </form>\r\n    </div>\r\n  </p-card>\r\n</div>"

/***/ }),

/***/ "./src/app/admission/admission.component.ts":
/*!**************************************************!*\
  !*** ./src/app/admission/admission.component.ts ***!
  \**************************************************/
/*! exports provided: AdmissionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdmissionComponent", function() { return AdmissionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Services_admission_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../Services/admission.service */ "./src/app/Services/admission.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _admission__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./admission */ "./src/app/admission/admission.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");







var AdmissionComponent = /** @class */ (function () {
    function AdmissionComponent(router, admissionSer, messageService, location) {
        this.router = router;
        this.admissionSer = admissionSer;
        this.messageService = messageService;
        this.location = location;
        // SelectedBed: string;
        this._admission = new _admission__WEBPACK_IMPORTED_MODULE_5__["Admission"](); //instance of the model file
    }
    AdmissionComponent.prototype.ngOnInit = function () {
        this.bedsDropdown();
        this.ProgressSpinnerDlg = true;
    };
    AdmissionComponent.prototype.back = function () {
        this.location.back();
    };
    AdmissionComponent.prototype.bedsDropdown = function () {
        this.bedType = [
            { label: "General bed", value: "general" },
            { label: "Special bed", value: "special" }
        ];
    };
    AdmissionComponent.prototype.submitAdmission = function () {
        var _this = this;
        console.log(this._admission);
        this.admissionSer.saveAdmission(this._admission).subscribe(function (data) {
            console.log(data);
            _this.messageService.add({
                severity: "success",
                summary: "Succesfully",
                detail: "Beds added successsfully"
            });
        }, function (error) {
            _this.messageService.add({
                severity: "error",
                summary: "Error occured,Please Reload Your Page"
            });
            console.log(error);
        });
        this.admissionSer.getAvailableBeds().subscribe(function (data) {
            // tslint:disable-next-line: forin
            for (var i in data) {
                console.log(data[i]);
            }
        });
        this.admissionSer.getBedsForSelectBedType(this._admission.bedType).subscribe(function (data) {
            console.log(data);
        });
    };
    AdmissionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: "app-admission",
            template: __webpack_require__(/*! ./admission.component.html */ "./src/app/admission/admission.component.html"),
            styles: [__webpack_require__(/*! ./admission.component.css */ "./src/app/admission/admission.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _Services_admission_service__WEBPACK_IMPORTED_MODULE_1__["AdmissionService"],
            primeng_api__WEBPACK_IMPORTED_MODULE_4__["MessageService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"]])
    ], AdmissionComponent);
    return AdmissionComponent;
}());



/***/ }),

/***/ "./src/app/admission/admission.ts":
/*!****************************************!*\
  !*** ./src/app/admission/admission.ts ***!
  \****************************************/
/*! exports provided: Admission */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Admission", function() { return Admission; });
var Admission = /** @class */ (function () {
    function Admission() {
    }
    return Admission;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _patient_slip_patient_payment_patient_payment_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./patient-slip/patient-payment/patient-payment.component */ "./src/app/patient-slip/patient-payment/patient-payment.component.ts");
/* harmony import */ var _admission_admission_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admission/admission.component */ "./src/app/admission/admission.component.ts");
/* harmony import */ var _add_er_add_er_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-er/add-er.component */ "./src/app/add-er/add-er.component.ts");
/* harmony import */ var _er_er_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./er/er.component */ "./src/app/er/er.component.ts");
/* harmony import */ var _patientform_patientform_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./patientform/patientform.component */ "./src/app/patientform/patientform.component.ts");
/* harmony import */ var _patient_patient_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./patient/patient.component */ "./src/app/patient/patient.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _contact_page_contact_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./contact-page/contact-page.component */ "./src/app/contact-page/contact-page.component.ts");
/* harmony import */ var _main_screen_main_screen_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./main-screen/main-screen.component */ "./src/app/main-screen/main-screen.component.ts");
/* harmony import */ var _doctor_list_doctor_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./doctor-list/doctor-list.component */ "./src/app/doctor-list/doctor-list.component.ts");
/* harmony import */ var _adddoctor_adddoctor_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./adddoctor/adddoctor.component */ "./src/app/adddoctor/adddoctor.component.ts");
/* harmony import */ var _add_lab_test_add_lab_test_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./add-lab-test/add-lab-test.component */ "./src/app/add-lab-test/add-lab-test.component.ts");
/* harmony import */ var _add_lab_test_add_test_add_test_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./add-lab-test/add-test/add-test.component */ "./src/app/add-lab-test/add-test/add-test.component.ts");
/* harmony import */ var _add_lab_test_add_lab_cat_add_lab_cat_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./add-lab-test/add-lab-cat/add-lab-cat.component */ "./src/app/add-lab-test/add-lab-cat/add-lab-cat.component.ts");
/* harmony import */ var _panel_list_panel_list_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./panel-list/panel-list.component */ "./src/app/panel-list/panel-list.component.ts");
/* harmony import */ var _addpanellist_addpanellist_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./addpanellist/addpanellist.component */ "./src/app/addpanellist/addpanellist.component.ts");
/* harmony import */ var _add_appoinment_list_add_appoinment_list_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./add-appoinment-list/add-appoinment-list.component */ "./src/app/add-appoinment-list/add-appoinment-list.component.ts");
/* harmony import */ var _existing_patient_existing_patient_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./existing-patient/existing-patient.component */ "./src/app/existing-patient/existing-patient.component.ts");
/* harmony import */ var _add_directory_add_directory_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./add-directory/add-directory.component */ "./src/app/add-directory/add-directory.component.ts");
/* harmony import */ var _opd_emergency_opd_emergency_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./opd-emergency/opd-emergency.component */ "./src/app/opd-emergency/opd-emergency.component.ts");
/* harmony import */ var _directory_form_directory_form_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./directory-form/directory-form.component */ "./src/app/directory-form/directory-form.component.ts");
/* harmony import */ var _hmslandingpage_hmslandingpage_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./hmslandingpage/hmslandingpage.component */ "./src/app/hmslandingpage/hmslandingpage.component.ts");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./auth.guard */ "./src/app/auth.guard.ts");
/* harmony import */ var _addpackage_addpackage_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./addpackage/addpackage.component */ "./src/app/addpackage/addpackage.component.ts");
/* harmony import */ var _package_list_package_list_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./package-list/package-list.component */ "./src/app/package-list/package-list.component.ts");
/* harmony import */ var _opdconsultancy_opdconsultancy_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./opdconsultancy/opdconsultancy.component */ "./src/app/opdconsultancy/opdconsultancy.component.ts");
/* harmony import */ var _monitor_screen_monitor_screen_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./monitor-screen/monitor-screen.component */ "./src/app/monitor-screen/monitor-screen.component.ts");
/* harmony import */ var _patient_observation_patient_observation_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./patient-observation/patient-observation.component */ "./src/app/patient-observation/patient-observation.component.ts");
/* harmony import */ var _opd_gyny_opd_gyny_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./opd-gyny/opd-gyny.component */ "./src/app/opd-gyny/opd-gyny.component.ts");
/* harmony import */ var _patient_admit_patient_admit_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./patient-admit/patient-admit.component */ "./src/app/patient-admit/patient-admit.component.ts");
/* harmony import */ var _patient_transaction_history_patient_transaction_history_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./patient-transaction-history/patient-transaction-history.component */ "./src/app/patient-transaction-history/patient-transaction-history.component.ts");
/* harmony import */ var _opd_labtest_opd_labtest_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./opd-labtest/opd-labtest.component */ "./src/app/opd-labtest/opd-labtest.component.ts");
/* harmony import */ var _patient_transactions_patient_transactions_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./patient-transactions/patient-transactions.component */ "./src/app/patient-transactions/patient-transactions.component.ts");
/* harmony import */ var _gyny_obs_list_gyny_obs_list_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./gyny-obs-list/gyny-obs-list.component */ "./src/app/gyny-obs-list/gyny-obs-list.component.ts");










// import  { MainScreenComponent } from './main-screen/main-screen.component';

















// import { MonitorScreenComponent } from './monitor-screen/,monitor-screen.component';









// import { NewcompComponent } from "./newcomp/newcomp.component";
var routes = [
    { path: "", component: _hmslandingpage_hmslandingpage_component__WEBPACK_IMPORTED_MODULE_23__["HmslandingpageComponent"] },
    {
        path: "doctorlist",
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_24__["AuthGuard"]],
        component: _doctor_list_doctor_list_component__WEBPACK_IMPORTED_MODULE_11__["DoctorListComponent"]
    },
    {
        path: "contact",
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_24__["AuthGuard"]],
        component: _contact_page_contact_page_component__WEBPACK_IMPORTED_MODULE_9__["ContactPageComponent"]
    },
    {
        path: "adddoctor",
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_24__["AuthGuard"]],
        component: _adddoctor_adddoctor_component__WEBPACK_IMPORTED_MODULE_12__["AdddoctorComponent"]
    },
    {
        path: "panellist",
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_24__["AuthGuard"]],
        component: _panel_list_panel_list_component__WEBPACK_IMPORTED_MODULE_16__["PanelListComponent"]
    },
    {
        path: "addpanellist",
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_24__["AuthGuard"]],
        component: _addpanellist_addpanellist_component__WEBPACK_IMPORTED_MODULE_17__["AddpanellistComponent"]
    },
    {
        path: "mainscreen",
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_24__["AuthGuard"]],
        component: _main_screen_main_screen_component__WEBPACK_IMPORTED_MODULE_10__["MainScreenComponent"]
    },
    {
        path: "addpackage",
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_24__["AuthGuard"]],
        component: _addpackage_addpackage_component__WEBPACK_IMPORTED_MODULE_25__["AddpackageComponent"]
    },
    {
        path: "packagelist",
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_24__["AuthGuard"]],
        component: _package_list_package_list_component__WEBPACK_IMPORTED_MODULE_26__["PackageListComponent"]
    },
    {
        path: "addlabtest",
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_24__["AuthGuard"]],
        component: _add_lab_test_add_lab_test_component__WEBPACK_IMPORTED_MODULE_13__["AddLabTestComponent"]
    },
    { path: "addlab", canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_24__["AuthGuard"]], component: _add_lab_test_add_test_add_test_component__WEBPACK_IMPORTED_MODULE_14__["AddTestComponent"] },
    {
        path: "addlabcat",
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_24__["AuthGuard"]],
        component: _add_lab_test_add_lab_cat_add_lab_cat_component__WEBPACK_IMPORTED_MODULE_15__["AddLabCatComponent"]
    },
    { path: "patient", canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_24__["AuthGuard"]], component: _patient_patient_component__WEBPACK_IMPORTED_MODULE_6__["PatientComponent"] },
    {
        path: "patientform",
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_24__["AuthGuard"]],
        component: _patientform_patientform_component__WEBPACK_IMPORTED_MODULE_5__["PatientformComponent"]
    },
    {
        path: "monitor/:id",
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_24__["AuthGuard"]],
        component: _monitor_screen_monitor_screen_component__WEBPACK_IMPORTED_MODULE_28__["MonitorScreenComponent"]
    },
    {
        path: "adddirectory",
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_24__["AuthGuard"]],
        component: _add_directory_add_directory_component__WEBPACK_IMPORTED_MODULE_20__["AddDirectoryComponent"]
    },
    {
        path: "directoryform",
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_24__["AuthGuard"]],
        component: _directory_form_directory_form_component__WEBPACK_IMPORTED_MODULE_22__["DirectoryFormComponent"]
    },
    { path: "er", canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_24__["AuthGuard"]], component: _er_er_component__WEBPACK_IMPORTED_MODULE_4__["ErComponent"] },
    { path: "adder", canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_24__["AuthGuard"]], component: _add_er_add_er_component__WEBPACK_IMPORTED_MODULE_3__["AddErComponent"] },
    {
        path: "appoinmentList",
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_24__["AuthGuard"]],
        component: _add_appoinment_list_add_appoinment_list_component__WEBPACK_IMPORTED_MODULE_18__["AddAppoinmentListComponent"]
    },
    {
        path: "existingPatient",
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_24__["AuthGuard"]],
        component: _existing_patient_existing_patient_component__WEBPACK_IMPORTED_MODULE_19__["ExistingPatientComponent"]
    },
    {
        path: "patientobservation/:id",
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_24__["AuthGuard"]],
        component: _patient_observation_patient_observation_component__WEBPACK_IMPORTED_MODULE_29__["PatientObservationComponent"]
    },
    { path: "opdEmergency/:id", canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_24__["AuthGuard"]], component: _opd_emergency_opd_emergency_component__WEBPACK_IMPORTED_MODULE_21__["OpdEmergencyComponent"] },
    { path: "opdconsultancy/:id", canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_24__["AuthGuard"]], component: _opdconsultancy_opdconsultancy_component__WEBPACK_IMPORTED_MODULE_27__["OpdconsultancyComponent"] },
    { path: "history/:id", canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_24__["AuthGuard"]], component: _patient_transaction_history_patient_transaction_history_component__WEBPACK_IMPORTED_MODULE_32__["PatientTransactionHistoryComponent"] },
    { path: "opdGyny/:id", canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_24__["AuthGuard"]], component: _opd_gyny_opd_gyny_component__WEBPACK_IMPORTED_MODULE_30__["OpdGynyComponent"] },
    { path: "opdlabtest/:id", canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_24__["AuthGuard"]], component: _opd_labtest_opd_labtest_component__WEBPACK_IMPORTED_MODULE_33__["OpdLabtestComponent"] },
    { path: "patienttransactions/:id", canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_24__["AuthGuard"]], component: _patient_transactions_patient_transactions_component__WEBPACK_IMPORTED_MODULE_34__["PatientTransactionsComponent"] },
    {
        path: "admission",
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_24__["AuthGuard"]],
        component: _admission_admission_component__WEBPACK_IMPORTED_MODULE_2__["AdmissionComponent"]
    },
    {
        path: "patientadmit/:id",
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_24__["AuthGuard"]],
        component: _patient_admit_patient_admit_component__WEBPACK_IMPORTED_MODULE_31__["PatientAdmitComponent"]
    },
    { path: "gynObsList/:id", canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_24__["AuthGuard"]], component: _gyny_obs_list_gyny_obs_list_component__WEBPACK_IMPORTED_MODULE_35__["GynyObsListComponent"] },
    { path: "gynObsList", canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_24__["AuthGuard"]], component: _gyny_obs_list_gyny_obs_list_component__WEBPACK_IMPORTED_MODULE_35__["GynyObsListComponent"] },
    { path: "patientFormWithId/:id", canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_24__["AuthGuard"]], component: _patientform_patientform_component__WEBPACK_IMPORTED_MODULE_5__["PatientformComponent"] },
    {
        path: "patientadmit/:id",
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_24__["AuthGuard"]],
        component: _patient_admit_patient_admit_component__WEBPACK_IMPORTED_MODULE_31__["PatientAdmitComponent"]
    },
    {
        path: "adddoctor/:id",
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_24__["AuthGuard"]],
        component: _adddoctor_adddoctor_component__WEBPACK_IMPORTED_MODULE_12__["AdddoctorComponent"]
    }, { path: '**', canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_24__["AuthGuard"]], component: _patient_slip_patient_payment_patient_payment_component__WEBPACK_IMPORTED_MODULE_1__["PatientPaymentComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".context-dark, .bg-gray-dark, .bg-primary {\r\n    color: rgba(255, 255, 255, 0.8);\r\n}\r\n\r\n.footer-classic a, .footer-classic a:focus, .footer-classic a:active {\r\n    color: #ffffff;\r\n}\r\n\r\n.nav-list li {\r\n    padding-top: 5px;\r\n    padding-bottom: 5px;\r\n}\r\n\r\n.nav-list li a:hover:before {\r\n    margin-left: 0;\r\n    opacity: 1;\r\n    visibility: visible;\r\n}\r\n\r\nul, ol {\r\n    list-style: none;\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\n.social-inner {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    width: 100%;\r\n    padding: 23px;\r\n    font: 900 13px/1 \"Lato\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif;\r\n    text-transform: uppercase;\r\n    color: rgba(255, 255, 255, 0.5);\r\n}\r\n\r\n.social-container .col {\r\n    border: 1px solid rgba(255, 255, 255, 0.1);\r\n}\r\n\r\n.nav-list li a:before {\r\n    content: \"\\f14f\";\r\n    font: 400 21px/1 \"Material Design Icons\";\r\n    color: #4d6de6;\r\n    display: inline-block;\r\n    vertical-align: baseline;\r\n    margin-left: -28px;\r\n    margin-right: 7px;\r\n    opacity: 0;\r\n    visibility: hidden;\r\n    transition: .22s ease;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwrQkFBK0I7QUFDbkM7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxVQUFVO0lBQ1YsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFVBQVU7SUFDVixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsYUFBYTtJQUNiLG1IQUFtSDtJQUNuSCx5QkFBeUI7SUFDekIsK0JBQStCO0FBQ25DOztBQUNBO0lBQ0ksMENBQTBDO0FBQzlDOztBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHdDQUF3QztJQUN4QyxjQUFjO0lBQ2QscUJBQXFCO0lBQ3JCLHdCQUF3QjtJQUN4QixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIscUJBQXFCO0FBQ3pCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGV4dC1kYXJrLCAuYmctZ3JheS1kYXJrLCAuYmctcHJpbWFyeSB7XHJcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xyXG59XHJcblxyXG4uZm9vdGVyLWNsYXNzaWMgYSwgLmZvb3Rlci1jbGFzc2ljIGE6Zm9jdXMsIC5mb290ZXItY2xhc3NpYyBhOmFjdGl2ZSB7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxufVxyXG4ubmF2LWxpc3QgbGkge1xyXG4gICAgcGFkZGluZy10b3A6IDVweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbn1cclxuXHJcbi5uYXYtbGlzdCBsaSBhOmhvdmVyOmJlZm9yZSB7XHJcbiAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG59XHJcblxyXG51bCwgb2wge1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi5zb2NpYWwtaW5uZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAyM3B4O1xyXG4gICAgZm9udDogOTAwIDEzcHgvMSBcIkxhdG9cIiwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIlNlZ29lIFVJXCIsIFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xyXG59XHJcbi5zb2NpYWwtY29udGFpbmVyIC5jb2wge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xyXG59XHJcbi5uYXYtbGlzdCBsaSBhOmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiBcIlxcZjE0ZlwiO1xyXG4gICAgZm9udDogNDAwIDIxcHgvMSBcIk1hdGVyaWFsIERlc2lnbiBJY29uc1wiO1xyXG4gICAgY29sb3I6ICM0ZDZkZTY7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XHJcbiAgICBtYXJnaW4tbGVmdDogLTI4cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDdweDtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICB0cmFuc2l0aW9uOiAuMjJzIGVhc2U7XHJcbn1cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav-bar>\r\n</app-nav-bar>\r\n<router-outlet>\r\n</router-outlet>\r\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
        this.es = {
            firstDayOfWeek: 1,
            dayNames: ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"],
            dayNamesShort: ["dom", "lun", "mar", "mié", "jue", "vie", "sáb"],
            dayNamesMin: ["D", "L", "M", "X", "J", "V", "S"],
            monthNames: ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"],
            monthNamesShort: ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"],
            today: 'Hoy',
            clear: 'Borrar'
        };
        this.tr = {
            firstDayOfWeek: 1
        };
        var today = new Date();
        var month = today.getMonth();
        var year = today.getFullYear();
        var prevMonth = (month === 0) ? 11 : month - 1;
        var prevYear = (prevMonth === 11) ? year - 1 : year;
        var nextMonth = (month === 11) ? 0 : month + 1;
        var nextYear = (nextMonth === 0) ? year + 1 : year;
        this.minDate = new Date();
        this.minDate.setMonth(prevMonth);
        this.minDate.setFullYear(prevYear);
        this.maxDate = new Date();
        this.maxDate.setMonth(nextMonth);
        this.maxDate.setFullYear(nextYear);
        var invalidDate = new Date();
        invalidDate.setDate(today.getDate() - 1);
        this.invalidDates = [today, invalidDate];
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'asad',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/dropdown */ "./node_modules/primeng/dropdown.js");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(primeng_dropdown__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _main_screen_add_panel_add_panel_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main-screen/add-panel/add-panel.component */ "./src/app/main-screen/add-panel/add-panel.component.ts");
/* harmony import */ var _searchbar_searchbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./searchbar/searchbar.component */ "./src/app/searchbar/searchbar.component.ts");
/* harmony import */ var _modal_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modal/modal.component */ "./src/app/modal/modal.component.ts");
/* harmony import */ var primeng_accordion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/accordion */ "./node_modules/primeng/accordion.js");
/* harmony import */ var primeng_accordion__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(primeng_accordion__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/button */ "./node_modules/primeng/button.js");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(primeng_button__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/card */ "./node_modules/primeng/card.js");
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(primeng_card__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/table.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(primeng_table__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var primeng_tabmenu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/tabmenu */ "./node_modules/primeng/tabmenu.js");
/* harmony import */ var primeng_tabmenu__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(primeng_tabmenu__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var primeng_panel__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/panel */ "./node_modules/primeng/panel.js");
/* harmony import */ var primeng_panel__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(primeng_panel__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/inputtext */ "./node_modules/primeng/inputtext.js");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(primeng_inputtext__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/dialog */ "./node_modules/primeng/dialog.js");
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(primeng_dialog__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/toast */ "./node_modules/primeng/toast.js");
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(primeng_toast__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _patient_slip_patient_slip_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./patient-slip/patient-slip.component */ "./src/app/patient-slip/patient-slip.component.ts");
/* harmony import */ var _patient_slip_patient_input_patient_input_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./patient-slip/patient-input/patient-input.component */ "./src/app/patient-slip/patient-input/patient-input.component.ts");
/* harmony import */ var _patient_slip_patient_card_patient_card_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./patient-slip/patient-card/patient-card.component */ "./src/app/patient-slip/patient-card/patient-card.component.ts");
/* harmony import */ var _patient_slip_buttons_buttons_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./patient-slip/buttons/buttons.component */ "./src/app/patient-slip/buttons/buttons.component.ts");
/* harmony import */ var _patient_slip_master_table_master_table_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./patient-slip/master-table/master-table.component */ "./src/app/patient-slip/master-table/master-table.component.ts");
/* harmony import */ var _patient_slip_child_table_child_table_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./patient-slip/child-table/child-table.component */ "./src/app/patient-slip/child-table/child-table.component.ts");
/* harmony import */ var _patient_slip_patient_payment_patient_payment_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./patient-slip/patient-payment/patient-payment.component */ "./src/app/patient-slip/patient-payment/patient-payment.component.ts");
/* harmony import */ var _table_table_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./table/table.component */ "./src/app/table/table.component.ts");
/* harmony import */ var _doctor_list_doctor_list_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./doctor-list/doctor-list.component */ "./src/app/doctor-list/doctor-list.component.ts");
/* harmony import */ var _adddoctor_adddoctor_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./adddoctor/adddoctor.component */ "./src/app/adddoctor/adddoctor.component.ts");
/* harmony import */ var _add_lab_test_add_lab_test_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./add-lab-test/add-lab-test.component */ "./src/app/add-lab-test/add-lab-test.component.ts");
/* harmony import */ var _add_lab_test_add_test_add_test_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./add-lab-test/add-test/add-test.component */ "./src/app/add-lab-test/add-test/add-test.component.ts");
/* harmony import */ var _add_lab_test_add_lab_cat_add_lab_cat_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./add-lab-test/add-lab-cat/add-lab-cat.component */ "./src/app/add-lab-test/add-lab-cat/add-lab-cat.component.ts");
/* harmony import */ var _patient_patient_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./patient/patient.component */ "./src/app/patient/patient.component.ts");
/* harmony import */ var _patientform_patientform_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./patientform/patientform.component */ "./src/app/patientform/patientform.component.ts");
/* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! primeng/inputtextarea */ "./node_modules/primeng/inputtextarea.js");
/* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _adddoctor_doctor_service__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./adddoctor/doctor.service */ "./src/app/adddoctor/doctor.service.ts");
/* harmony import */ var _panel_list_panel_list_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./panel-list/panel-list.component */ "./src/app/panel-list/panel-list.component.ts");
/* harmony import */ var _addpanellist_addpanellist_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./addpanellist/addpanellist.component */ "./src/app/addpanellist/addpanellist.component.ts");
/* harmony import */ var primeng_multiselect__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! primeng/multiselect */ "./node_modules/primeng/multiselect.js");
/* harmony import */ var primeng_multiselect__WEBPACK_IMPORTED_MODULE_36___default = /*#__PURE__*/__webpack_require__.n(primeng_multiselect__WEBPACK_IMPORTED_MODULE_36__);
/* harmony import */ var _addpanellist_addpanellistsevice_service__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./addpanellist/addpanellistsevice.service */ "./src/app/addpanellist/addpanellistsevice.service.ts");
/* harmony import */ var primeng_progressspinner__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! primeng/progressspinner */ "./node_modules/primeng/progressspinner.js");
/* harmony import */ var primeng_progressspinner__WEBPACK_IMPORTED_MODULE_38___default = /*#__PURE__*/__webpack_require__.n(primeng_progressspinner__WEBPACK_IMPORTED_MODULE_38__);
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! primeng/calendar */ "./node_modules/primeng/calendar.js");
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_39___default = /*#__PURE__*/__webpack_require__.n(primeng_calendar__WEBPACK_IMPORTED_MODULE_39__);
/* harmony import */ var _Services_NavBarService__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./Services/NavBarService */ "./src/app/Services/NavBarService.ts");
/* harmony import */ var _er_er_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./er/er.component */ "./src/app/er/er.component.ts");
/* harmony import */ var _add_er_add_er_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./add-er/add-er.component */ "./src/app/add-er/add-er.component.ts");
/* harmony import */ var _add_directory_add_directory_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./add-directory/add-directory.component */ "./src/app/add-directory/add-directory.component.ts");
/* harmony import */ var _directory_form_directory_form_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./directory-form/directory-form.component */ "./src/app/directory-form/directory-form.component.ts");
/* harmony import */ var _monitor_screen_monitor_screen_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./monitor-screen/monitor-screen.component */ "./src/app/monitor-screen/monitor-screen.component.ts");
/* harmony import */ var _monitor_screen_patient_monitor_patient_monitor_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./monitor-screen/patient-monitor/patient-monitor.component */ "./src/app/monitor-screen/patient-monitor/patient-monitor.component.ts");
/* harmony import */ var _monitor_screen_patient_panel_patient_panel_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./monitor-screen/patient-panel/patient-panel.component */ "./src/app/monitor-screen/patient-panel/patient-panel.component.ts");
/* harmony import */ var _main_screen_mr_component_mr_component_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./main-screen/mr-component/mr-component.component */ "./src/app/main-screen/mr-component/mr-component.component.ts");
/* harmony import */ var _add_appoinment_list_add_appoinment_list_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./add-appoinment-list/add-appoinment-list.component */ "./src/app/add-appoinment-list/add-appoinment-list.component.ts");
/* harmony import */ var _existing_patient_existing_patient_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./existing-patient/existing-patient.component */ "./src/app/existing-patient/existing-patient.component.ts");
/* harmony import */ var _opd_emergency_opd_emergency_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./opd-emergency/opd-emergency.component */ "./src/app/opd-emergency/opd-emergency.component.ts");
/* harmony import */ var ngx_print__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ngx-print */ "./node_modules/ngx-print/fesm5/ngx-print.js");
/* harmony import */ var _hmslandingpage_hmslandingpage_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./hmslandingpage/hmslandingpage.component */ "./src/app/hmslandingpage/hmslandingpage.component.ts");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./auth.guard */ "./src/app/auth.guard.ts");
/* harmony import */ var _addpackage_addpackage_component__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./addpackage/addpackage.component */ "./src/app/addpackage/addpackage.component.ts");
/* harmony import */ var _package_list_package_list_component__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./package-list/package-list.component */ "./src/app/package-list/package-list.component.ts");
/* harmony import */ var _opdconsultancy_opdconsultancy_component__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./opdconsultancy/opdconsultancy.component */ "./src/app/opdconsultancy/opdconsultancy.component.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ./nav-bar/nav-bar.component */ "./src/app/nav-bar/nav-bar.component.ts");
/* harmony import */ var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ./home-page/home-page.component */ "./src/app/home-page/home-page.component.ts");
/* harmony import */ var _about_page_about_page_component__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ./about-page/about-page.component */ "./src/app/about-page/about-page.component.ts");
/* harmony import */ var _contact_page_contact_page_component__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! ./contact-page/contact-page.component */ "./src/app/contact-page/contact-page.component.ts");
/* harmony import */ var _login_form_login_form_component__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! ./login-form/login-form.component */ "./src/app/login-form/login-form.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _main_screen_main_screen_component__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! ./main-screen/main-screen.component */ "./src/app/main-screen/main-screen.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _opd_gyny_opd_gyny_component__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(/*! ./opd-gyny/opd-gyny.component */ "./src/app/opd-gyny/opd-gyny.component.ts");
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(/*! primeng/checkbox */ "./node_modules/primeng/checkbox.js");
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_72___default = /*#__PURE__*/__webpack_require__.n(primeng_checkbox__WEBPACK_IMPORTED_MODULE_72__);
/* harmony import */ var _admission_admission_component__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(/*! ./admission/admission.component */ "./src/app/admission/admission.component.ts");
/* harmony import */ var _patient_admit_patient_admit_component__WEBPACK_IMPORTED_MODULE_74__ = __webpack_require__(/*! ./patient-admit/patient-admit.component */ "./src/app/patient-admit/patient-admit.component.ts");
/* harmony import */ var _Services_admission_service__WEBPACK_IMPORTED_MODULE_75__ = __webpack_require__(/*! ./Services/admission.service */ "./src/app/Services/admission.service.ts");
/* harmony import */ var _patient_transaction_history_patient_transaction_history_component__WEBPACK_IMPORTED_MODULE_76__ = __webpack_require__(/*! ./patient-transaction-history/patient-transaction-history.component */ "./src/app/patient-transaction-history/patient-transaction-history.component.ts");
/* harmony import */ var _patient_observation_patient_observation_component__WEBPACK_IMPORTED_MODULE_77__ = __webpack_require__(/*! ./patient-observation/patient-observation.component */ "./src/app/patient-observation/patient-observation.component.ts");
/* harmony import */ var _opd_labtest_opd_labtest_component__WEBPACK_IMPORTED_MODULE_78__ = __webpack_require__(/*! ./opd-labtest/opd-labtest.component */ "./src/app/opd-labtest/opd-labtest.component.ts");
/* harmony import */ var _patient_transactions_patient_transactions_component__WEBPACK_IMPORTED_MODULE_79__ = __webpack_require__(/*! ./patient-transactions/patient-transactions.component */ "./src/app/patient-transactions/patient-transactions.component.ts");
/* harmony import */ var _Component_facilities_facilities_component__WEBPACK_IMPORTED_MODULE_80__ = __webpack_require__(/*! ./Component/facilities/facilities.component */ "./src/app/Component/facilities/facilities.component.ts");
/* harmony import */ var _gyny_obs_list_gyny_obs_list_component__WEBPACK_IMPORTED_MODULE_81__ = __webpack_require__(/*! ./gyny-obs-list/gyny-obs-list.component */ "./src/app/gyny-obs-list/gyny-obs-list.component.ts");
/* harmony import */ var _monitorquickview_monitorquickview_component__WEBPACK_IMPORTED_MODULE_82__ = __webpack_require__(/*! ./monitorquickview/monitorquickview.component */ "./src/app/monitorquickview/monitorquickview.component.ts");
/* harmony import */ var _transaction_edit_transaction_edit_component__WEBPACK_IMPORTED_MODULE_83__ = __webpack_require__(/*! ./transaction-edit/transaction-edit.component */ "./src/app/transaction-edit/transaction-edit.component.ts");









// import { CalendarModule } from 'primeng/calendar';







// import { CheckboxModule, Checkbox } from 'primeng/checkbox';




























































// import { AdmissionService } from './Services/admission.service';








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_70__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_61__["AppComponent"],
                _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_62__["NavBarComponent"],
                _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_63__["HomePageComponent"],
                _about_page_about_page_component__WEBPACK_IMPORTED_MODULE_64__["AboutPageComponent"],
                _contact_page_contact_page_component__WEBPACK_IMPORTED_MODULE_65__["ContactPageComponent"],
                _login_form_login_form_component__WEBPACK_IMPORTED_MODULE_66__["LoginFormComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_67__["FooterComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_68__["HeaderComponent"],
                _main_screen_main_screen_component__WEBPACK_IMPORTED_MODULE_69__["MainScreenComponent"],
                _main_screen_mr_component_mr_component_component__WEBPACK_IMPORTED_MODULE_48__["MrComponentComponent"],
                _main_screen_add_panel_add_panel_component__WEBPACK_IMPORTED_MODULE_2__["AddPanelComponent"],
                _searchbar_searchbar_component__WEBPACK_IMPORTED_MODULE_3__["SearchbarComponent"],
                //  PatientSlipComponent, PatientInputComponent, PatientCardComponent, ButtonsComponent, MasterTableComponent, ChildTableComponent, PatientPaymentComponent, TableComponent, DoctorListComponent, AdddoctorComponent, AddLabTestComponent, AddTestComponent, AddLabCatComponent
                _modal_modal_component__WEBPACK_IMPORTED_MODULE_4__["ModalComponent"],
                _patient_slip_patient_slip_component__WEBPACK_IMPORTED_MODULE_16__["PatientSlipComponent"],
                _patient_slip_patient_input_patient_input_component__WEBPACK_IMPORTED_MODULE_17__["PatientInputComponent"],
                _patient_slip_patient_card_patient_card_component__WEBPACK_IMPORTED_MODULE_18__["PatientCardComponent"],
                _patient_slip_buttons_buttons_component__WEBPACK_IMPORTED_MODULE_19__["ButtonsComponent"],
                _patient_slip_master_table_master_table_component__WEBPACK_IMPORTED_MODULE_20__["MasterTableComponent"],
                _patient_slip_child_table_child_table_component__WEBPACK_IMPORTED_MODULE_21__["ChildTableComponent"],
                _patient_slip_patient_payment_patient_payment_component__WEBPACK_IMPORTED_MODULE_22__["PatientPaymentComponent"],
                _table_table_component__WEBPACK_IMPORTED_MODULE_23__["TableComponent"],
                _doctor_list_doctor_list_component__WEBPACK_IMPORTED_MODULE_24__["DoctorListComponent"],
                _adddoctor_adddoctor_component__WEBPACK_IMPORTED_MODULE_25__["AdddoctorComponent"],
                _panel_list_panel_list_component__WEBPACK_IMPORTED_MODULE_34__["PanelListComponent"],
                _addpanellist_addpanellist_component__WEBPACK_IMPORTED_MODULE_35__["AddpanellistComponent"],
                _add_lab_test_add_lab_test_component__WEBPACK_IMPORTED_MODULE_26__["AddLabTestComponent"],
                _add_lab_test_add_test_add_test_component__WEBPACK_IMPORTED_MODULE_27__["AddTestComponent"],
                _add_lab_test_add_lab_cat_add_lab_cat_component__WEBPACK_IMPORTED_MODULE_28__["AddLabCatComponent"],
                _patient_patient_component__WEBPACK_IMPORTED_MODULE_29__["PatientComponent"],
                _patientform_patientform_component__WEBPACK_IMPORTED_MODULE_30__["PatientformComponent"],
                _add_directory_add_directory_component__WEBPACK_IMPORTED_MODULE_43__["AddDirectoryComponent"],
                _directory_form_directory_form_component__WEBPACK_IMPORTED_MODULE_44__["DirectoryFormComponent"],
                _monitor_screen_monitor_screen_component__WEBPACK_IMPORTED_MODULE_45__["MonitorScreenComponent"],
                _monitor_screen_patient_monitor_patient_monitor_component__WEBPACK_IMPORTED_MODULE_46__["PatientMonitorComponent"],
                _monitor_screen_patient_panel_patient_panel_component__WEBPACK_IMPORTED_MODULE_47__["PatientPanelComponent"],
                _existing_patient_existing_patient_component__WEBPACK_IMPORTED_MODULE_50__["ExistingPatientComponent"],
                _add_appoinment_list_add_appoinment_list_component__WEBPACK_IMPORTED_MODULE_49__["AddAppoinmentListComponent"],
                _er_er_component__WEBPACK_IMPORTED_MODULE_41__["ErComponent"],
                _add_er_add_er_component__WEBPACK_IMPORTED_MODULE_42__["AddErComponent"],
                _hmslandingpage_hmslandingpage_component__WEBPACK_IMPORTED_MODULE_53__["HmslandingpageComponent"],
                _addpackage_addpackage_component__WEBPACK_IMPORTED_MODULE_55__["AddpackageComponent"],
                _package_list_package_list_component__WEBPACK_IMPORTED_MODULE_56__["PackageListComponent"],
                _opd_emergency_opd_emergency_component__WEBPACK_IMPORTED_MODULE_51__["OpdEmergencyComponent"],
                _opdconsultancy_opdconsultancy_component__WEBPACK_IMPORTED_MODULE_57__["OpdconsultancyComponent"],
                _patient_transaction_history_patient_transaction_history_component__WEBPACK_IMPORTED_MODULE_76__["PatientTransactionHistoryComponent"],
                _admission_admission_component__WEBPACK_IMPORTED_MODULE_73__["AdmissionComponent"],
                _patient_admit_patient_admit_component__WEBPACK_IMPORTED_MODULE_74__["PatientAdmitComponent"],
                _opd_labtest_opd_labtest_component__WEBPACK_IMPORTED_MODULE_78__["OpdLabtestComponent"],
                _patient_transactions_patient_transactions_component__WEBPACK_IMPORTED_MODULE_79__["PatientTransactionsComponent"],
                _opd_gyny_opd_gyny_component__WEBPACK_IMPORTED_MODULE_71__["OpdGynyComponent"],
                _patient_observation_patient_observation_component__WEBPACK_IMPORTED_MODULE_77__["PatientObservationComponent"],
                _Component_facilities_facilities_component__WEBPACK_IMPORTED_MODULE_80__["FacilitiesComponent"],
                //obsAndGynyRegistration-branch,
                _gyny_obs_list_gyny_obs_list_component__WEBPACK_IMPORTED_MODULE_81__["GynyObsListComponent"],
                _monitorquickview_monitorquickview_component__WEBPACK_IMPORTED_MODULE_82__["MonitorquickviewComponent"],
                _transaction_edit_transaction_edit_component__WEBPACK_IMPORTED_MODULE_83__["TransactionEditComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_58__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_59__["FormsModule"],
                primeng_progressspinner__WEBPACK_IMPORTED_MODULE_38__["ProgressSpinnerModule"],
                ngx_print__WEBPACK_IMPORTED_MODULE_52__["NgxPrintModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_60__["AppRoutingModule"],
                primeng_accordion__WEBPACK_IMPORTED_MODULE_5__["AccordionModule"],
                primeng_button__WEBPACK_IMPORTED_MODULE_6__["ButtonModule"],
                primeng_card__WEBPACK_IMPORTED_MODULE_7__["CardModule"],
                primeng_table__WEBPACK_IMPORTED_MODULE_8__["TableModule"],
                primeng_calendar__WEBPACK_IMPORTED_MODULE_39__["CalendarModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_32__["HttpClientModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_32__["HttpClientXsrfModule"].disable(),
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
                primeng_tabmenu__WEBPACK_IMPORTED_MODULE_10__["TabMenuModule"],
                primeng_panel__WEBPACK_IMPORTED_MODULE_12__["PanelModule"],
                primeng_inputtext__WEBPACK_IMPORTED_MODULE_13__["InputTextModule"],
                primeng_dialog__WEBPACK_IMPORTED_MODULE_14__["DialogModule"],
                primeng_toast__WEBPACK_IMPORTED_MODULE_15__["ToastModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_59__["ReactiveFormsModule"],
                primeng_dropdown__WEBPACK_IMPORTED_MODULE_1__["DropdownModule"],
                primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_31__["InputTextareaModule"],
                primeng_multiselect__WEBPACK_IMPORTED_MODULE_36__["MultiSelectModule"],
                primeng_progressspinner__WEBPACK_IMPORTED_MODULE_38__["ProgressSpinnerModule"],
                ngx_print__WEBPACK_IMPORTED_MODULE_52__["NgxPrintModule"],
                primeng_checkbox__WEBPACK_IMPORTED_MODULE_72__["CheckboxModule"]
            ],
            providers: [_adddoctor_doctor_service__WEBPACK_IMPORTED_MODULE_33__["DoctorService"], _addpanellist_addpanellistsevice_service__WEBPACK_IMPORTED_MODULE_37__["AddpanellistseviceService"], primeng_api__WEBPACK_IMPORTED_MODULE_11__["MessageService"], _Services_NavBarService__WEBPACK_IMPORTED_MODULE_40__["NavBarService"], _auth_guard__WEBPACK_IMPORTED_MODULE_54__["AuthGuard"], _patient_transactions_patient_transactions_component__WEBPACK_IMPORTED_MODULE_79__["PatientTransactionsComponent"],
                _add_er_add_er_component__WEBPACK_IMPORTED_MODULE_42__["AddErComponent"], _Services_admission_service__WEBPACK_IMPORTED_MODULE_75__["AdmissionService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_61__["AppComponent"]],
            exports: [_angular_forms__WEBPACK_IMPORTED_MODULE_59__["FormsModule"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth.guard.ts":
/*!*******************************!*\
  !*** ./src/app/auth.guard.ts ***!
  \*******************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var AuthGuard = /** @class */ (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        if (sessionStorage.getItem('username') != null) {
            return true;
        }
        else {
            this.router.navigate(['']);
            return false;
        }
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/contact-page/contact-page.component.css":
/*!*********************************************************!*\
  !*** ./src/app/contact-page/contact-page.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body{\r\n\t\tbackground-color: #25274d;\r\n\t}\r\n\t.contact{\r\n\t\tpadding: 4%;\r\n\t\theight: 400px;\r\n\t}\r\n\t.col-md-3{\r\n\t\tbackground: #ff9b00;\r\n\t\tpadding: 4%;\r\n\t\tborder-top-left-radius: 0.5rem;\r\n\t\tborder-bottom-left-radius: 0.5rem;\r\n\t}\r\n\t.contact-info{\r\n\t\tmargin-top:10%;\r\n\t}\r\n\t.contact-info img{\r\n\t\tmargin-bottom: 15%;\r\n\t}\r\n\t.contact-info h2{\r\n\t\tmargin-bottom: 10%;\r\n\t}\r\n\t.col-md-9{\r\n\t\tbackground: #fff;\r\n\t\tpadding: 3%;\r\n\t\tborder-top-right-radius: 0.5rem;\r\n\t\tborder-bottom-right-radius: 0.5rem;\r\n\t}\r\n\t.contact-form label{\r\n\t\tfont-weight:600;\r\n\t}\r\n\t.contact-form button{\r\n\t\tbackground: #25274d;\r\n\t\tcolor: #fff;\r\n\t\tfont-weight: 600;\r\n\t\twidth: 25%;\r\n\t}\r\n\t.contact-form button:focus{\r\n\t\tbox-shadow:none;\r\n\t}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC1wYWdlL2NvbnRhY3QtcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQXlCO0NBQzFCO0NBQ0E7RUFDQyxXQUFXO0VBQ1gsYUFBYTtDQUNkO0NBQ0E7RUFDQyxtQkFBbUI7RUFDbkIsV0FBVztFQUNYLDhCQUE4QjtFQUM5QixpQ0FBaUM7Q0FDbEM7Q0FDQTtFQUNDLGNBQWM7Q0FDZjtDQUNBO0VBQ0Msa0JBQWtCO0NBQ25CO0NBQ0E7RUFDQyxrQkFBa0I7Q0FDbkI7Q0FDQTtFQUNDLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsK0JBQStCO0VBQy9CLGtDQUFrQztDQUNuQztDQUNBO0VBQ0MsZUFBZTtDQUNoQjtDQUNBO0VBQ0MsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsVUFBVTtDQUNYO0NBQ0E7RUFDQyxlQUFlO0NBQ2hCIiwiZmlsZSI6InNyYy9hcHAvY29udGFjdC1wYWdlL2NvbnRhY3QtcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keXtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICMyNTI3NGQ7XHJcblx0fVxyXG5cdC5jb250YWN0e1xyXG5cdFx0cGFkZGluZzogNCU7XHJcblx0XHRoZWlnaHQ6IDQwMHB4O1xyXG5cdH1cclxuXHQuY29sLW1kLTN7XHJcblx0XHRiYWNrZ3JvdW5kOiAjZmY5YjAwO1xyXG5cdFx0cGFkZGluZzogNCU7XHJcblx0XHRib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwLjVyZW07XHJcblx0XHRib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwLjVyZW07XHJcblx0fVxyXG5cdC5jb250YWN0LWluZm97XHJcblx0XHRtYXJnaW4tdG9wOjEwJTtcclxuXHR9XHJcblx0LmNvbnRhY3QtaW5mbyBpbWd7XHJcblx0XHRtYXJnaW4tYm90dG9tOiAxNSU7XHJcblx0fVxyXG5cdC5jb250YWN0LWluZm8gaDJ7XHJcblx0XHRtYXJnaW4tYm90dG9tOiAxMCU7XHJcblx0fVxyXG5cdC5jb2wtbWQtOXtcclxuXHRcdGJhY2tncm91bmQ6ICNmZmY7XHJcblx0XHRwYWRkaW5nOiAzJTtcclxuXHRcdGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwLjVyZW07XHJcblx0XHRib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMC41cmVtO1xyXG5cdH1cclxuXHQuY29udGFjdC1mb3JtIGxhYmVse1xyXG5cdFx0Zm9udC13ZWlnaHQ6NjAwO1xyXG5cdH1cclxuXHQuY29udGFjdC1mb3JtIGJ1dHRvbntcclxuXHRcdGJhY2tncm91bmQ6ICMyNTI3NGQ7XHJcblx0XHRjb2xvcjogI2ZmZjtcclxuXHRcdGZvbnQtd2VpZ2h0OiA2MDA7XHJcblx0XHR3aWR0aDogMjUlO1xyXG5cdH1cclxuXHQuY29udGFjdC1mb3JtIGJ1dHRvbjpmb2N1c3tcclxuXHRcdGJveC1zaGFkb3c6bm9uZTtcclxuXHR9Il19 */"

/***/ }),

/***/ "./src/app/contact-page/contact-page.component.html":
/*!**********************************************************!*\
  !*** ./src/app/contact-page/contact-page.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container contact\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-3\">\r\n        <div class=\"contact-info\">\r\n          <img src=\"https://image.ibb.co/kUASdV/contact-image.png\" alt=\"image\"/>\r\n          <h2>Contact Us</h2>\r\n          <h4>We would love to hear from you !</h4>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-9\">\r\n        <div class=\"contact-form\">\r\n          <div class=\"form-group\">\r\n            <label class=\"control-label col-sm-2\" for=\"fname\">First Name:</label>\r\n            <div class=\"col-sm-10\">          \r\n            <input type=\"text\" class=\"form-control\" id=\"fname\" placeholder=\"Enter First Name\" name=\"fname\">\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label class=\"control-label col-sm-2\" for=\"lname\">Last Name:</label>\r\n            <div class=\"col-sm-10\">          \r\n            <input type=\"text\" class=\"form-control\" id=\"lname\" placeholder=\"Enter Last Name\" name=\"lname\">\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label class=\"control-label col-sm-2\" for=\"email\">Email:</label>\r\n            <div class=\"col-sm-10\">\r\n            <input type=\"email\" class=\"form-control\" id=\"email\" placeholder=\"Enter email\" name=\"email\">\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label class=\"control-label col-sm-2\" for=\"comment\">Comment:</label>\r\n            <div class=\"col-sm-10\">\r\n            <textarea class=\"form-control\" rows=\"5\" id=\"comment\"></textarea>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group\">        \r\n            <div class=\"col-sm-offset-2 col-sm-10\">\r\n            <button type=\"submit\" class=\"btn btn-default\">Submit</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  \r\n"

/***/ }),

/***/ "./src/app/contact-page/contact-page.component.ts":
/*!********************************************************!*\
  !*** ./src/app/contact-page/contact-page.component.ts ***!
  \********************************************************/
/*! exports provided: ContactPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactPageComponent", function() { return ContactPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContactPageComponent = /** @class */ (function () {
    function ContactPageComponent() {
    }
    ContactPageComponent.prototype.ngOnInit = function () {
    };
    ContactPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact-page',
            template: __webpack_require__(/*! ./contact-page.component.html */ "./src/app/contact-page/contact-page.component.html"),
            styles: [__webpack_require__(/*! ./contact-page.component.css */ "./src/app/contact-page/contact-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ContactPageComponent);
    return ContactPageComponent;
}());



/***/ }),

/***/ "./src/app/directory-form/directory-form.component.css":
/*!*************************************************************!*\
  !*** ./src/app/directory-form/directory-form.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RpcmVjdG9yeS1mb3JtL2RpcmVjdG9yeS1mb3JtLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/directory-form/directory-form.component.html":
/*!**************************************************************!*\
  !*** ./src/app/directory-form/directory-form.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g\">\r\n    <div class=\"ui-lg-2 ui-md-2 ui-sm-0\"></div>\r\n    <div class=\"ui-g-4 ui-lg-4 ui-sm-12\">\r\n        <button pButton type=\"button\" class=\"backBtnStyle\" (click)=\"back()\" style=\"width:80%;margin-left:10%;  height:40px;\" label=\"Back\"></button>\r\n    </div>\r\n \r\n</div>\r\n\r\n<div class=\"ui-g-12\">\r\n  <p-toast></p-toast>\r\n\r\n  <p-card\r\n    header=\"ADD DIRECTORY\"\r\n    [style]=\"{\r\n      width: '80%',\r\n      'font-size': '26px',\r\n      'margin-left': '10%',\r\n      'text-align': 'center',\r\n      color: 'green'\r\n    }\"\r\n  >\r\n    <div class=\"ui-g ui-fluid\">\r\n      <hr style=\"height:2px;width:100%;background-color:green;\" />\r\n      <form style=\"width:100%;\" #myForm=\"ngForm\" (ngSubmit)=\"submitDirectory(); myForm.reset()\">\r\n        <div class=\"ui-g\">\r\n          <div class=\"ui-md-2 ui-lg-2\"></div>\r\n          <div class=\"ui-md-8 ui-lg-8 ui-sm-12\">\r\n            <div class=\"ui-inputgroup\">\r\n              <span class=\"ui-inputgroup-addon\" style=\"width:45%;font-size:15px;\">Full Name<i style=\"color: red\">*</i></span>\r\n              <input type=\"text\" [(ngModel)]=\"directory.name\" required name=\"name\" pInputText />\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"ui-g\">\r\n          <div class=\"ui-md-2 ui-lg-2\"></div>\r\n          <div class=\"ui-md-8 ui-lg-8 ui-sm-12\">\r\n            <div class=\"ui-inputgroup\">\r\n              <span class=\"ui-inputgroup-addon\" style=\"width:45%;font-size:15px;\"\r\n                >Phone Number<i style=\"color: red\">*</i></span\r\n              >\r\n\r\n              <input\r\n                type=\"text\"\r\n                (keypress)=\"numberOnly($event)\"\r\n                [(ngModel)]=\"directory.number\"\r\n                required\r\n                name=\"phone number\"\r\n                pInputText\r\n              />\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"ui-g\">\r\n          <div class=\"ui-md-2 ui-lg-2\"></div>\r\n          <div class=\"ui-md-8 ui-lg-8 ui-sm-12\">\r\n            <div class=\"ui-inputgroup\">\r\n              <span class=\"ui-inputgroup-addon\" style=\"width:45%;font-size:15px;\"\r\n                >Emergency Number<i style=\"color: red\">*</i></span\r\n              >\r\n              <input\r\n                type=\"text\"\r\n                (keypress)=\"numberOnly($event)\"\r\n                [(ngModel)]=\"directory.erNo\"\r\n                required\r\n                name=\"ERnumber\"\r\n                pInputText\r\n              />\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"ui-g\">\r\n          <div class=\"ui-md-2 ui-lg-2\"></div>\r\n          <div class=\"ui-md-8 ui-lg-8 ui-sm-12\">\r\n            <div class=\"ui-inputgroup\">\r\n              <span class=\"ui-inputgroup-addon\" style=\"width:45%;font-size:16px;line-height:20px;\"\r\n                >Address</span\r\n              >\r\n\r\n              <textarea\r\n                [rows]=\"3\"\r\n                maxlength=\"110\"\r\n                [(ngModel)]=\"directory.address\"\r\n                [cols]=\"30\"\r\n                name=\"address\"\r\n                pInputTextarea\r\n              ></textarea>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"ui-g\" style=\"margin-top:-20px !important;\">\r\n          <div class=\"ui-md-2 ui-lg-2\"></div>\r\n          <div class=\"ui-md-8 ui-lg-8 ui-sm-12\">\r\n            <button\r\n              pButton\r\n              type=\"submit\"\r\n              label=\"SUBMIT\"\r\n              [disabled]=\"myForm.form.invalid\"\r\n              style=\"margin-top: 0px; background-color:green;width:100%;\"\r\n            ></button>\r\n          </div>\r\n        </div>\r\n      </form>\r\n      <div class=\"ui-g-12\" *ngIf=\"loader\">\r\n        <p-progressSpinner></p-progressSpinner>\r\n      </div>\r\n    </div>\r\n  </p-card>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/directory-form/directory-form.component.ts":
/*!************************************************************!*\
  !*** ./src/app/directory-form/directory-form.component.ts ***!
  \************************************************************/
/*! exports provided: DirectoryFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DirectoryFormComponent", function() { return DirectoryFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _directory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./directory */ "./src/app/directory-form/directory.ts");
/* harmony import */ var _services_directory_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/directory.service */ "./src/app/services/directory.service.ts");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_5__);






var DirectoryFormComponent = /** @class */ (function () {
    function DirectoryFormComponent(route, directoryServ, messageService) {
        this.route = route;
        this.directoryServ = directoryServ;
        this.messageService = messageService;
        this.cols = [];
        this.loader = false;
    }
    DirectoryFormComponent.prototype.ngOnInit = function () {
        this.directory = new _directory__WEBPACK_IMPORTED_MODULE_3__["Directory"]();
    };
    DirectoryFormComponent.prototype.back = function () {
        this.route.navigate(['adddirectory']);
    };
    DirectoryFormComponent.prototype.submitDirectory = function () {
        var _this = this;
        console.log('submit directory');
        this.loader = true;
        this.directoryServ.postDirectory(this.directory).subscribe(function (response) {
            _this.loader = false;
            _this.messageService.add({
                severity: 'success',
                summary: 'Service Message',
                detail: Object.keys(response)[0]
            });
        }, function (error) {
            _this.loader = false;
            _this.messageService.add({
                severity: 'error',
                summary: 'Service Message',
                detail: 'Data adding failed!'
            });
        });
    };
    DirectoryFormComponent.prototype.numberOnly = function (event) {
        var charCode = event.which ? event.which : event.keyCode;
        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
            return false;
        }
        return true;
    };
    DirectoryFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-directory-form',
            template: __webpack_require__(/*! ./directory-form.component.html */ "./src/app/directory-form/directory-form.component.html"),
            styles: [__webpack_require__(/*! ./directory-form.component.css */ "./src/app/directory-form/directory-form.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_directory_service__WEBPACK_IMPORTED_MODULE_4__["DirectoryService"],
            primeng_api__WEBPACK_IMPORTED_MODULE_5__["MessageService"]])
    ], DirectoryFormComponent);
    return DirectoryFormComponent;
}());



/***/ }),

/***/ "./src/app/directory-form/directory.ts":
/*!*********************************************!*\
  !*** ./src/app/directory-form/directory.ts ***!
  \*********************************************/
/*! exports provided: Directory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Directory", function() { return Directory; });
var Directory = /** @class */ (function () {
    function Directory() {
    }
    return Directory;
}());



/***/ }),

/***/ "./src/app/doctor-list/doctor-list.component.css":
/*!*******************************************************!*\
  !*** ./src/app/doctor-list/doctor-list.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ui-card-title {\r\n    text-align: center !important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZG9jdG9yLWxpc3QvZG9jdG9yLWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDZCQUE2QjtBQUNqQyIsImZpbGUiOiJzcmMvYXBwL2RvY3Rvci1saXN0L2RvY3Rvci1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudWktY2FyZC10aXRsZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/doctor-list/doctor-list.component.html":
/*!********************************************************!*\
  !*** ./src/app/doctor-list/doctor-list.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g\">\r\n    <div class=\"ui-sm-0 ui-lg-2 ui-md-2\"></div>\r\n    <div class=\"ui-g-4 ui-lg-4 ui-sm-12\">\r\n        <button pButton type=\"button\" class=\"backBtnStyle\" (click)=\"backToMain()\" style=\"width:80%;margin-left:10%;  height:40px;\" label=\"Back\"></button>\r\n    </div>\r\n    <div class=\"ui-g-4 ui-lg-4 ui-sm-12\">\r\n        <button pButton type=\"button\" (click)=\"adddoctor()\" style=\"width:80%;margin-left:10%;  height:40px;\" label=\"Add Doctor\" class=\"backBtnStyle\"></button>\r\n    </div>\r\n</div>\r\n\r\n\r\n<p-card header=\"Doctor List\" [style]=\"{\r\n  width: '100%',\r\n    'font-size': '26px',\r\n    'text-align': 'center',\r\n    color: 'green'\r\n  }\">\r\n    <hr />\r\n\r\n    <hr />\r\n    <p-table #dt [columns]=\"cols\" [value]=\"doctors\" [totalRecords]=\"totalRecords\" [paginator]=\"true\" [rows]=\"10\">\r\n        <ng-template pTemplate=\"caption\">\r\n            <div style=\"text-align: right\">\r\n                <i class=\"fa fa-search\" style=\"margin:4px 4px 0 0\"></i>\r\n                <input type=\"text\" pInputText size=\"50\" placeholder=\"Global Filter\" (input)=\"dt.filterGlobal($event.target.value, 'contains')\" style=\"width:auto\" />\r\n            </div>\r\n        </ng-template>\r\n        <ng-template pTemplate=\"header\" let-columns>\r\n            <tr>\r\n                <th *ngFor=\"let col of columns\">\r\n                    {{ col.header }}\r\n                </th>\r\n                <th style=\"text-align: center;\">\r\n                    Actions\r\n                </th>\r\n            </tr>\r\n            <div *ngIf=\"showLoading\" style=\"margin-left: 325%;\">\r\n                <p-progressSpinner></p-progressSpinner>\r\n                <h2 style=\"color: black\">Getting Doctors...</h2>\r\n            </div>\r\n        </ng-template>\r\n        <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\r\n            <tr [pSelectableRow]=\"rowData\">\r\n                <td *ngFor=\"let col of columns\">\r\n                    {{ rowData[col.field] }}\r\n                </td>\r\n                <td>\r\n                    <button pButton type=\"button\" (click)=\"editDoctorById(rowData['mrNo'])\" class=\"ui-button-info\" style=\"height: 30px;width:45% ;margin-left: 30%; \">\r\n            <span style=\"font-size: 20px;\">EDIT</span>\r\n\r\n\r\n          </button>\r\n                </td>\r\n            </tr>\r\n        </ng-template>\r\n    </p-table>\r\n</p-card>"

/***/ }),

/***/ "./src/app/doctor-list/doctor-list.component.ts":
/*!******************************************************!*\
  !*** ./src/app/doctor-list/doctor-list.component.ts ***!
  \******************************************************/
/*! exports provided: DoctorListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoctorListComponent", function() { return DoctorListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _adddoctor_doctor_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../adddoctor/doctor.service */ "./src/app/adddoctor/doctor.service.ts");




var DoctorListComponent = /** @class */ (function () {
    function DoctorListComponent(router, doctorService, activatedRoute) {
        this.router = router;
        this.doctorService = doctorService;
        this.activatedRoute = activatedRoute;
    }
    DoctorListComponent.prototype.ngOnInit = function () {
        this.showLoading = true;
        this.showTable();
    };
    DoctorListComponent.prototype.showTable = function () {
        var _this = this;
        this.showLoading = true;
        this.doctorService.getdoctors().subscribe(function (response) {
            console.log('ye agaya response server se ', response);
            // this.showLoading = false;
            if (response) {
                _this.showLoading = false;
                _this.doctors = response;
            }
            // this.showLoading = true;
        });
        this.cols = [
            { field: 'mrNo', header: 'DOCTOR ID' },
            { field: 'fullName', header: 'FULL NAME' },
            { field: 'gender', header: 'GENDER' },
            { field: 'fees', header: 'FEES' },
            { field: 'mobile', header: 'MOBILE PHONE' },
            { field: 'address', header: 'ADDRESS' }
        ];
        this.doctors = [];
    };
    DoctorListComponent.prototype.adddoctor = function () {
        this.router.navigate(['/adddoctor/']);
    };
    DoctorListComponent.prototype.backToMain = function () {
        this.router.navigate(['mainscreen']);
    };
    DoctorListComponent.prototype.editDoctorById = function (rowData) {
        this.router.navigate(['/adddoctor/' + rowData]);
    };
    DoctorListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-doctor-list',
            template: __webpack_require__(/*! ./doctor-list.component.html */ "./src/app/doctor-list/doctor-list.component.html"),
            styles: [__webpack_require__(/*! ./doctor-list.component.css */ "./src/app/doctor-list/doctor-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _adddoctor_doctor_service__WEBPACK_IMPORTED_MODULE_3__["DoctorService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], DoctorListComponent);
    return DoctorListComponent;
}());



/***/ }),

/***/ "./src/app/er/er.component.css":
/*!*************************************!*\
  !*** ./src/app/er/er.component.css ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VyL2VyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/er/er.component.html":
/*!**************************************!*\
  !*** ./src/app/er/er.component.html ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div\r\n  style=\"z-index:3; position: absolute;top:70%;\"\r\n  class=\"ui-g-12\"\r\n  *ngIf=\"delete\"\r\n>\r\n  <p-progressSpinner [style]=\"{ 'margin-left': '45%' }\"></p-progressSpinner> -->\r\n<!-- </div> -->\r\n<div class=\"ui-g\">\r\n    <p-toast></p-toast>\r\n    <div class=\"ui-lg-2 ui-md-2 ui-sm-0\"></div>\r\n    <div class=\"ui-g-4 ui-lg-4 ui-sm-12\">\r\n        <button pButton type=\"button\" class=\"backBtnStyle\" (click)=\"back()\" style=\"width:80%;margin-left:10%;  height:40px;\" label=\"Back\"></button>\r\n    </div>\r\n    <div class=\"ui-g-4 ui-lg-4 ui-sm-12\">\r\n        <button pButton type=\"button\" (click)=\"gotoErService()\" style=\"width:80%;margin-left:10%;  height:40px;\" label=\"Add Lab Test\" class=\"backBtnStyle\"></button>\r\n    </div>\r\n    <p-card header=\"EMERGENCY LIST\" [style]=\"{  width: '100%',\r\n'font-size': '26px',\r\n'text-align': 'center',\r\ncolor: 'green'\r\n}\">\r\n        <hr />\r\n        <p-table style=\"word-wrap:break-word;\" #dt [columns]=\"cols\" [paginator]=\"true\" [rows]=\"10\" [style]=\"{ 'margin-top': '50px', width: '100%' }\" [totalRecords]=\"totalRecords\" [value]=\"erArray\">\r\n            <ng-template pTemplate=\"caption\">\r\n                <div style=\"text-align: right\">\r\n                    <i class=\"fa fa-search\" style=\"margin:4px 4px 0 0\"></i>\r\n                    <input type=\"text\" pInputText size=\"35\" placeholder=\"Global Filter\" (input)=\"dt.filterGlobal($event.target.value, 'contains')\" style=\"width:auto;margin-right:14px\" />\r\n                </div>\r\n            </ng-template>\r\n            <ng-template pTemplate=\"header\" let-columns>\r\n                <tr>\r\n                    <th style=\"text-align:center\" *ngFor=\"let col of columns\">\r\n                        {{ col.header }}\r\n                    </th>\r\n                    <th style=\"text-align:center\">Actions</th>\r\n                </tr>\r\n                <div *ngIf=\"loading\" style=\"margin-left: 325%;\">\r\n                    <p-progressSpinner></p-progressSpinner>\r\n                </div>\r\n            </ng-template>\r\n            <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\r\n                <tr>\r\n                    <td style=\"text-align:center\" *ngFor=\"let col of columns\">\r\n                        {{ rowData[col.field] }}\r\n                    </td>\r\n                    <td>\r\n                        <button pButton style=\"width:60%;margin-left:20%;background-color: rgb(211, 56, 56);\" type=\"button\" label=\"Delete\" (click)=\"deleteErByID(rowData['id'])\"></button>\r\n                    </td>\r\n                </tr>\r\n            </ng-template>\r\n        </p-table>\r\n    </p-card>\r\n\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/er/er.component.ts":
/*!************************************!*\
  !*** ./src/app/er/er.component.ts ***!
  \************************************/
/*! exports provided: ErComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErComponent", function() { return ErComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_erservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../services/erservice.service */ "./src/app/services/erservice.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_4__);

// import { AddErComponent } from "./../add-er/add-er.component";




var ErComponent = /** @class */ (function () {
    function ErComponent(router, erService, messageService) {
        this.router = router;
        this.erService = erService;
        this.messageService = messageService;
        this.delete = false; //flag for delete
        this.loading = true; // loader or progress bar status
        this.totalRecords = 0;
        this.datasource = [];
        this.cols = [
            { field: "name", header: "Emergency Service Name" },
            { field: "resources", header: "Service Resources" },
            { field: "facilities", header: "Facility" },
            { field: "price", header: "Price" },
            { field: "extraCharges", header: "Extra Charges" },
            { field: "total", header: "Total Ammount" }
        ];
    }
    ErComponent.prototype.ngOnInit = function () {
        this.showTable(); //ngonit will load the whole data
    };
    ErComponent.prototype.deleteErByID = function (id) {
        var _this = this;
        console.log(id);
        this.loading = true;
        this.erService.deleteById(id).subscribe(function (data) {
            _this.loading = false;
            if (data) {
                _this.messageService.add({
                    severity: "success",
                    summary: "Deleted",
                    detail: "Patient deleted SuccesFully"
                });
                _this.showTable();
                // this.patientService.getPatients().subscribe((data: any) => {});
                console.log(data);
            }
            else {
                _this.loading = true;
                _this.messageService.add({
                    severity: "error",
                    summary: "Can't delete",
                    detail: "You are not authorized for this action"
                });
                // tslint:disable-next-line: triple-equals
                if (_this.loading == true) {
                    _this.loading = false;
                }
            }
        }, function (error) {
            _this.loading = false;
            _this.messageService.add({
                severity: "error",
                summary: "Cant not delete",
                detail: "You are not authorized for this action"
            });
            console.log(error);
        });
    };
    ErComponent.prototype.showTable = function () {
        var _this = this;
        this.erArray = [];
        this.loading = true;
        this.totalRecords = 0;
        this.erService.getEr().subscribe(function (data) {
            _this.datasource = [];
            _this.datasource = data;
            _this.totalRecords = _this.datasource.length;
            console.log(_this.datasource);
            console.log("here is the table data", data);
            data.map(function (p) {
                _this.erArray.push({
                    id: p.id,
                    name: p.name,
                    resources: p.resources,
                    facilities: p.facilities.map(function (f) { return f.name; }),
                    price: p.price,
                    extraCharges: p.extraCharges,
                    total: p.total
                });
            });
            _this.loading = false;
        });
    };
    ErComponent.prototype.back = function () {
        this.router.navigate(["/mainscreen"]);
    };
    ErComponent.prototype.gotoErService = function () {
        this.router.navigate(["/adder"]);
    };
    ErComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: "app-er",
            template: __webpack_require__(/*! ./er.component.html */ "./src/app/er/er.component.html"),
            styles: [__webpack_require__(/*! ./er.component.css */ "./src/app/er/er.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_erservice_service__WEBPACK_IMPORTED_MODULE_1__["ErserviceService"],
            primeng_api__WEBPACK_IMPORTED_MODULE_4__["MessageService"]])
    ], ErComponent);
    return ErComponent;
}());



/***/ }),

/***/ "./src/app/existing-patient/Appointment.ts":
/*!*************************************************!*\
  !*** ./src/app/existing-patient/Appointment.ts ***!
  \*************************************************/
/*! exports provided: Appointment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Appointment", function() { return Appointment; });
var Appointment = /** @class */ (function () {
    function Appointment() {
    }
    return Appointment;
}());



/***/ }),

/***/ "./src/app/existing-patient/existing-patient.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/existing-patient/existing-patient.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V4aXN0aW5nLXBhdGllbnQvZXhpc3RpbmctcGF0aWVudC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/existing-patient/existing-patient.component.html":
/*!******************************************************************!*\
  !*** ./src/app/existing-patient/existing-patient.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g\">\r\n  <div class=\"ui-lg-1 ui-md-1 ui-sm-0\"></div>\r\n  <div class=\"ui-g-4 ui-lg-4 ui-md-1 ui-sm-12\">\r\n    <button pButton type=\"button\" class=\"backBtnStyle\" (click)=\"addPanelList()\"\r\n      style=\"width:80%;margin-left:10%;  height:40px;\" label=\"Back\"></button>\r\n  </div>\r\n  <div class=\"ui-lg-2 ui-md-2\"></div>\r\n  <div class=\"ui-lg-5 ui-sm-12 ui-md-7\" >\r\n    <label style=\"color:rgb(67, 139, 78); font-size: 18px;\">Patient Lookup\r\n    </label>\r\n    &nbsp;\r\n    <app-searchbar> </app-searchbar>\r\n  </div>\r\n</div>\r\n<div class=\"ui-g-12 ui-fluid  \">\r\n  <div class=\"ui-g-12 ui-md-12\">\r\n    <div class=\"container\">\r\n      <p-card header=\"EXISTING PATIENT\" [style]=\"{\r\n          width: '100%',\r\n          'margin-top': '5px !important',\r\n          color: '#3EB650',\r\n          'text-align': 'center',\r\n          height: '30% !important'\r\n        }\">\r\n        <hr />\r\n        <form (ngSubmit)=\"Onsubmit(form.value); form.reset()\" #form=\"ngForm\">\r\n          <div class=\"ui-g ui-fluid\">\r\n            <div class=\"ui-g-12 ui-md-12 ui-lg-5\">\r\n              <div class=\"ui-inputgroup\">\r\n                <span class=\"ui-inputgroup-addon\" style=\"width:50%;\">MR.NO<i style=\"color: red\">*</i></span>\r\n                <input type=\"text\" required  (keypress)=\"numberOnly($event)\" #mrNo=\"ngModel\" pInputText placeholder=\"MR Number\" name=\"mrNo\" ngModel\r\n                  [(ngModel)]=\"appointments.id\" />\r\n              </div>\r\n              <div style=\"padding:0px;margin-bottom:4px\" [hidden]=\"mrNo.valid || mrNo.pristine\"\r\n                class=\"alert alert-danger\">\r\n                Please Enter a MR Number\r\n              </div>\r\n            </div>\r\n            <div class=\"ui-md-2\"></div>\r\n\r\n            <div class=\"ui-g-12 ui-md-12 ui-lg-5\">\r\n              <div class=\"ui-inputgroup\">\r\n                <span class=\"ui-inputgroup-addon\" style=\"width:50%;  font-size: 11px; line-height: 15px;\">SELECT\r\n                  DOCTOR<i style=\"color: red\">*</i></span>\r\n                <p-dropdown [options]=\"_selectDoctor\" required name=\"doctor\" [style]=\"{ width: '300px' }\"\r\n                  placeholder=\"Select Doctor\" [(ngModel)]=\"appointments.selectDoctor\">\r\n                </p-dropdown>\r\n              </div>\r\n            </div>\r\n\r\n            <!-- <div class=\"ui-g-12 ui-md-3\">\r\n              <div class=\"ui-inputgroup\">\r\n                <span class=\"ui-inputgroup-addon\">DOB</span>\r\n                <p-calendar></p-calendar>\r\n              </div>\r\n\r\n            </div> -->\r\n\r\n            <div class=\"ui-g-12 ui-md-12 ui-lg-5 ui-sm-12\">\r\n              <div class=\"ui-inputgroup\">\r\n                <span class=\"ui-inputgroup-addon\" style=\"width:50%;  font-size: 11px;\">APPOINTMENT DATE<i\r\n                    style=\"color: red\">*</i></span>\r\n                <p-calendar [style]=\"{ width: '300px' }\" name=\"appoinmentDate\" required\r\n                  placeholder=\"Enter Appointment Date here\" [(ngModel)]=\"appointments.appoinmentDate\">\r\n                </p-calendar>\r\n              </div>\r\n            </div>\r\n            <div class=\"ui-md-2\"></div>\r\n            <div class=\"ui-g-12 ui-md-12 ui-lg-5\">\r\n              <div class=\"ui-inputgroup\">\r\n                <span class=\"ui-inputgroup-addon\" style=\"width:50%;\">TIME<i style=\"color: red\">*</i></span>\r\n                <p-calendar [style]=\"{ width: '300px' }\" name=\"time\" required placeholder=\"Enter Time here\"\r\n                  [timeOnly]=\"true\" [(ngModel)]=\"appointmentTime\">\r\n                </p-calendar>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"ui-g-12 \">\r\n              <div class=\" ui-g-12 ui-md-12 ui-lg-12 ui-sm-12\">\r\n                <button pButton type=\"submit\" label=\"Save\" class=\" ui-button-success  one\" style=\"width:100%;\"\r\n                  [disabled]=\"form.invalid\"></button>\r\n              </div>\r\n              <p-toast position=\"top-center\"></p-toast>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </p-card>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/existing-patient/existing-patient.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/existing-patient/existing-patient.component.ts ***!
  \****************************************************************/
/*! exports provided: ExistingPatientComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExistingPatientComponent", function() { return ExistingPatientComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Appointment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Appointment */ "./src/app/existing-patient/Appointment.ts");
/* harmony import */ var _Services_appointment_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Services/appointment-service.service */ "./src/app/Services/appointment-service.service.ts");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _adddoctor_doctor_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../adddoctor/doctor.service */ "./src/app/adddoctor/doctor.service.ts");







var ExistingPatientComponent = /** @class */ (function () {
    function ExistingPatientComponent(router, _appointmentService, messageService, _doctorService) {
        this.router = router;
        this._appointmentService = _appointmentService;
        this.messageService = messageService;
        this._doctorService = _doctorService;
        this.appointments = new _Appointment__WEBPACK_IMPORTED_MODULE_3__["Appointment"]();
        this._selectDoctor = [];
    }
    ExistingPatientComponent.prototype.ngOnInit = function () {
        console.log("Hello");
        this.getDoctorsInDropdown();
    };
    ExistingPatientComponent.prototype.getDoctorsInDropdown = function () {
        var _this = this;
        //this.selectDoctor=[];
        this._doctorService.getdoctors().subscribe(function (Response) {
            console.log("response is here", Response);
            Response.forEach(function (e) {
                _this._selectDoctor.push({
                    label: e.fullName,
                    value: e.fullName
                });
            });
        });
    };
    ExistingPatientComponent.prototype._saveAppointment = function () {
        var _this = this;
        // this.appointmentDate=this.appointments.time;
        this.appointments.time = this.appointmentTime.toLocaleTimeString();
        // this.appointmentDateTs = this.appointments.appoinmentDate;
        // this.appointments.appoinmentDate =  this.appointmentDateTs.toLocaleDateString();
        console.log(this.appointments);
        //  console.log(this.appointments.time);
        this._appointmentService.saveAppointment(this.appointments).subscribe(function (data) {
            console.log(data);
            _this.messageService.add({ severity: 'success', summary: 'Status', detail: 'Successfull' });
        }, function (error) {
            console.log(error);
            _this.messageService.add({ severity: 'error', summary: 'Status', detail: 'Unsuccessfull' });
        });
    };
    ExistingPatientComponent.prototype.Onsubmit = function (value) {
        console.log(value);
        this._saveAppointment();
    };
    ExistingPatientComponent.prototype.addPanelList = function () {
        this.router.navigate(['/appoinmentList']);
    };
    ExistingPatientComponent.prototype.OnChangeInDoctors = function () {
        this.getDoctorsInDropdown();
    };
    ExistingPatientComponent.prototype.numberOnly = function (event) {
        var charCode = event.which ? event.which : event.keyCode;
        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
            return false;
        }
        return true;
    };
    ExistingPatientComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-existing-patient',
            template: __webpack_require__(/*! ./existing-patient.component.html */ "./src/app/existing-patient/existing-patient.component.html"),
            styles: [__webpack_require__(/*! ./existing-patient.component.css */ "./src/app/existing-patient/existing-patient.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _Services_appointment_service_service__WEBPACK_IMPORTED_MODULE_4__["AppointmentServiceService"], primeng_api__WEBPACK_IMPORTED_MODULE_5__["MessageService"], _adddoctor_doctor_service__WEBPACK_IMPORTED_MODULE_6__["DoctorService"]])
    ], ExistingPatientComponent);
    return ExistingPatientComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n@import url('https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');\n/* Footer */\nsection {\r\n    padding: 60px 0;\r\n}\nsection .section-title {\r\n    text-align: center;\r\n    color: #007b5e;\r\n    margin-bottom: 50px;\r\n    text-transform: uppercase;\r\n}\n#footer {\r\n    background: #007b5e !important;\r\n}\n#footer h5{\r\n\tpadding-left: 10px;\r\n    border-left: 3px solid #eeeeee;\r\n    padding-bottom: 6px;\r\n    margin-bottom: 20px;\r\n    color:#ffffff;\r\n}\n#footer a {\r\n    color: #ffffff;\r\n    text-decoration: none !important;\r\n    background-color: transparent;\r\n    -webkit-text-decoration-skip: objects;\r\n}\n#footer ul.social li{\r\n\tpadding: 3px 0;\r\n}\n#footer ul.social li a i {\r\n    margin-right: 5px;\r\n\tfont-size:25px;\r\n\ttransition: .5s all ease;\r\n}\n#footer ul.social li:hover a i {\r\n\tfont-size:30px;\r\n\tmargin-top:-10px;\r\n}\n#footer ul.social li a,\r\n#footer ul.quick-links li a{\r\n\tcolor:#ffffff;\r\n}\n#footer ul.social li a:hover{\r\n\tcolor:#eeeeee;\r\n}\n#footer ul.quick-links li{\r\n\tpadding: 3px 0;\r\n\ttransition: .5s all ease;\r\n}\n#footer ul.quick-links li:hover{\r\n\tpadding: 3px 0;\r\n\tmargin-left:5px;\r\n\tfont-weight:700;\r\n}\n#footer ul.quick-links li a i{\r\n\tmargin-right: 5px;\r\n}\n#footer ul.quick-links li:hover a i {\r\n    font-weight: 700;\r\n}\n@media (max-width:767px){\r\n\t#footer h5 {\r\n    padding-left: 0;\r\n    border-left: transparent;\r\n    padding-bottom: 0px;\r\n    margin-bottom: 10px;\r\n}\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSwwRkFBMEY7QUFEMUYsV0FBVztBQUVYO0lBQ0ksZUFBZTtBQUNuQjtBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSw4QkFBOEI7QUFDbEM7QUFDQTtDQUNDLGtCQUFrQjtJQUNmLDhCQUE4QjtJQUM5QixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLGFBQWE7QUFDakI7QUFDQTtJQUNJLGNBQWM7SUFDZCxnQ0FBZ0M7SUFDaEMsNkJBQTZCO0lBQzdCLHFDQUFxQztBQUN6QztBQUNBO0NBQ0MsY0FBYztBQUNmO0FBQ0E7SUFDSSxpQkFBaUI7Q0FDcEIsY0FBYztDQUdkLHdCQUF3QjtBQUN6QjtBQUNBO0NBQ0MsY0FBYztDQUNkLGdCQUFnQjtBQUNqQjtBQUNBOztDQUVDLGFBQWE7QUFDZDtBQUNBO0NBQ0MsYUFBYTtBQUNkO0FBQ0E7Q0FDQyxjQUFjO0NBR2Qsd0JBQXdCO0FBQ3pCO0FBQ0E7Q0FDQyxjQUFjO0NBQ2QsZUFBZTtDQUNmLGVBQWU7QUFDaEI7QUFDQTtDQUNDLGlCQUFpQjtBQUNsQjtBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBRUE7Q0FDQztJQUNHLGVBQWU7SUFDZix3QkFBd0I7SUFDeEIsbUJBQW1CO0lBQ25CLG1CQUFtQjtBQUN2QjtBQUNBIiwiZmlsZSI6InNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogRm9vdGVyICovXHJcbkBpbXBvcnQgdXJsKCdodHRwczovL21heGNkbi5ib290c3RyYXBjZG4uY29tL2ZvbnQtYXdlc29tZS80LjcuMC9jc3MvZm9udC1hd2Vzb21lLm1pbi5jc3MnKTtcclxuc2VjdGlvbiB7XHJcbiAgICBwYWRkaW5nOiA2MHB4IDA7XHJcbn1cclxuXHJcbnNlY3Rpb24gLnNlY3Rpb24tdGl0bGUge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICMwMDdiNWU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG4jZm9vdGVyIHtcclxuICAgIGJhY2tncm91bmQ6ICMwMDdiNWUgIWltcG9ydGFudDtcclxufVxyXG4jZm9vdGVyIGg1e1xyXG5cdHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgIGJvcmRlci1sZWZ0OiAzcHggc29saWQgI2VlZWVlZTtcclxuICAgIHBhZGRpbmctYm90dG9tOiA2cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgY29sb3I6I2ZmZmZmZjtcclxufVxyXG4jZm9vdGVyIGEge1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmUgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgLXdlYmtpdC10ZXh0LWRlY29yYXRpb24tc2tpcDogb2JqZWN0cztcclxufVxyXG4jZm9vdGVyIHVsLnNvY2lhbCBsaXtcclxuXHRwYWRkaW5nOiAzcHggMDtcclxufVxyXG4jZm9vdGVyIHVsLnNvY2lhbCBsaSBhIGkge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcblx0Zm9udC1zaXplOjI1cHg7XHJcblx0LXdlYmtpdC10cmFuc2l0aW9uOiAuNXMgYWxsIGVhc2U7XHJcblx0LW1vei10cmFuc2l0aW9uOiAuNXMgYWxsIGVhc2U7XHJcblx0dHJhbnNpdGlvbjogLjVzIGFsbCBlYXNlO1xyXG59XHJcbiNmb290ZXIgdWwuc29jaWFsIGxpOmhvdmVyIGEgaSB7XHJcblx0Zm9udC1zaXplOjMwcHg7XHJcblx0bWFyZ2luLXRvcDotMTBweDtcclxufVxyXG4jZm9vdGVyIHVsLnNvY2lhbCBsaSBhLFxyXG4jZm9vdGVyIHVsLnF1aWNrLWxpbmtzIGxpIGF7XHJcblx0Y29sb3I6I2ZmZmZmZjtcclxufVxyXG4jZm9vdGVyIHVsLnNvY2lhbCBsaSBhOmhvdmVye1xyXG5cdGNvbG9yOiNlZWVlZWU7XHJcbn1cclxuI2Zvb3RlciB1bC5xdWljay1saW5rcyBsaXtcclxuXHRwYWRkaW5nOiAzcHggMDtcclxuXHQtd2Via2l0LXRyYW5zaXRpb246IC41cyBhbGwgZWFzZTtcclxuXHQtbW96LXRyYW5zaXRpb246IC41cyBhbGwgZWFzZTtcclxuXHR0cmFuc2l0aW9uOiAuNXMgYWxsIGVhc2U7XHJcbn1cclxuI2Zvb3RlciB1bC5xdWljay1saW5rcyBsaTpob3ZlcntcclxuXHRwYWRkaW5nOiAzcHggMDtcclxuXHRtYXJnaW4tbGVmdDo1cHg7XHJcblx0Zm9udC13ZWlnaHQ6NzAwO1xyXG59XHJcbiNmb290ZXIgdWwucXVpY2stbGlua3MgbGkgYSBpe1xyXG5cdG1hcmdpbi1yaWdodDogNXB4O1xyXG59XHJcbiNmb290ZXIgdWwucXVpY2stbGlua3MgbGk6aG92ZXIgYSBpIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOjc2N3B4KXtcclxuXHQjZm9vdGVyIGg1IHtcclxuICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgIGJvcmRlci1sZWZ0OiB0cmFuc3BhcmVudDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"footer\">\r\n\t\t<div class=\"container\">\r\n\t\t\t<div class=\"row text-center text-xs-center text-sm-left text-md-left\">\r\n\t\t\t\t<div class=\"col-xs-12 col-sm-4 col-md-4\">\r\n\t\t\t\t\t<h5>Quick links</h5>\r\n\t\t\t\t\t<ul class=\"list-unstyled quick-links\">\r\n\t\t\t\t\t\t<li><a href=\"javascript:void();\"><i class=\"fa fa-angle-double-right\"></i>Home</a></li>\r\n\t\t\t\t\t\t<li><a href=\"javascript:void();\"><i class=\"fa fa-angle-double-right\"></i>About</a></li>\r\n\t\t\t\t\t\t<li><a href=\"javascript:void();\"><i class=\"fa fa-angle-double-right\"></i>FAQ</a></li>\r\n\t\t\t\t\t\t<li><a href=\"javascript:void();\"><i class=\"fa fa-angle-double-right\"></i>Get Started</a></li>\r\n\t\t\t\t\t\t<li><a href=\"javascript:void();\"><i class=\"fa fa-angle-double-right\"></i>Videos</a></li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-xs-12 col-sm-4 col-md-4\">\r\n\t\t\t\t\t<h5>Quick links</h5>\r\n\t\t\t\t\t<ul class=\"list-unstyled quick-links\">\r\n\t\t\t\t\t\t<li><a href=\"javascript:void();\"><i class=\"fa fa-angle-double-right\"></i>Home</a></li>\r\n\t\t\t\t\t\t<li><a href=\"javascript:void();\"><i class=\"fa fa-angle-double-right\"></i>About</a></li>\r\n\t\t\t\t\t\t<li><a href=\"javascript:void();\"><i class=\"fa fa-angle-double-right\"></i>FAQ</a></li>\r\n\t\t\t\t\t\t<li><a href=\"javascript:void();\"><i class=\"fa fa-angle-double-right\"></i>Get Started</a></li>\r\n\t\t\t\t\t\t<li><a href=\"javascript:void();\"><i class=\"fa fa-angle-double-right\"></i>Videos</a></li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-xs-12 col-sm-4 col-md-4\">\r\n\t\t\t\t\t<h5>Quick links</h5>\r\n\t\t\t\t\t<ul class=\"list-unstyled quick-links\">\r\n\t\t\t\t\t\t<li><a href=\"javascript:void();\"><i class=\"fa fa-angle-double-right\"></i>Home</a></li>\r\n\t\t\t\t\t\t<li><a href=\"javascript:void();\"><i class=\"fa fa-angle-double-right\"></i>About</a></li>\r\n\t\t\t\t\t\t<li><a href=\"javascript:void();\"><i class=\"fa fa-angle-double-right\"></i>FAQ</a></li>\r\n\t\t\t\t\t\t<li><a href=\"javascript:void();\"><i class=\"fa fa-angle-double-right\"></i>Get Started</a></li>\r\n\t\t\t\t\t\t<li><a href=\"https://wwwe.sunlimetech.com\" title=\"Design and developed by\"><i class=\"fa fa-angle-double-right\"></i>Imprint</a></li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t<div class=\"col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5\">\r\n\t\t\t\t\t<ul class=\"list-unstyled list-inline social text-center\">\r\n\t\t\t\t\t\t<li class=\"list-inline-item\"><a href=\"javascript:void();\"><i class=\"fa fa-facebook\"></i></a></li>\r\n\t\t\t\t\t\t<li class=\"list-inline-item\"><a href=\"javascript:void();\"><i class=\"fa fa-twitter\"></i></a></li>\r\n\t\t\t\t\t\t<li class=\"list-inline-item\"><a href=\"javascript:void();\"><i class=\"fa fa-instagram\"></i></a></li>\r\n\t\t\t\t\t\t<li class=\"list-inline-item\"><a href=\"javascript:void();\"><i class=\"fa fa-google-plus\"></i></a></li>\r\n\t\t\t\t\t\t<li class=\"list-inline-item\"><a href=\"javascript:void();\" target=\"_blank\"><i class=\"fa fa-envelope\"></i></a></li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</div>\r\n\t\t\t\t\r\n\t\t\t</div>\t\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t<div class=\"col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white\">\r\n\t\t\t\t\t<p><u><a href=\"https://www.nationaltransaction.com/\">National Transaction Corporation</a></u> is a Registered MSP/ISO of Elavon, Inc. Georgia [a wholly owned subsidiary of U.S. Bancorp, Minneapolis, MN]</p>\r\n\t\t\t\t\t<p class=\"h6\">&copy All right Reversed.<a class=\"text-green ml-2\" href=\"https://www.sunlimetech.com\" target=\"_blank\">Sunlimetech</a></p>\r\n\t\t\t\t</div>\r\n\t\t\t\t\r\n"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/gyny-obs-list/gyny-obs-list.component.css":
/*!***********************************************************!*\
  !*** ./src/app/gyny-obs-list/gyny-obs-list.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2d5bnktb2JzLWxpc3QvZ3lueS1vYnMtbGlzdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/gyny-obs-list/gyny-obs-list.component.html":
/*!************************************************************!*\
  !*** ./src/app/gyny-obs-list/gyny-obs-list.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g\">\r\n    <div class=\"ui-lg-2 ui-md-2 ui-sm-0\"></div>\r\n    <div class=\"ui-g-4 ui-lg-4 ui-sm-12\">\r\n        <button pButton type=\"button\" class=\"backBtnStyle\" (click)=\"backToMain()\" style=\"width:80%;margin-left:10%;  height:40px;\" label=\"Back\"></button>\r\n    </div>\r\n    <div class=\"ui-g-4 ui-lg-4 ui-sm-12\">\r\n        <button pButton type=\"button\" (click)=\"toAddPatient()\" style=\"width:80%;margin-left:10%;  height:40px;\" label=\"Add Gyny/Obs\" class=\"backBtnStyle\"></button>\r\n    </div>\r\n</div>\r\n\r\n<p-card header=\"GYNY/OBS LIST\" [style]=\"{  width: '100%',\r\n'font-size': '26px',\r\n'text-align': 'center',\r\ncolor: 'green'\r\n}\">\r\n    <hr />\r\n\r\n    <p-table #dt [columns]=\"cols\" [value]=\"patient\" [paginator]=\"true\" [scrollable]=\"true\" [rows]=\"10\" [totalRecords]=\"totalRecords\" scrollHeight=\"200px\" [style]=\"{ 'margin-top': '50px', width: '100%' }\">\r\n        <ng-template pTemplate=\"caption\">\r\n            <div style=\"text-align: right\">\r\n                <i class=\"fa fa-search\" style=\"margin:4px 4px 0 0\"></i>\r\n                <input type=\"text\" pInputText size=\"50\" placeholder=\"Global Filter\" (input)=\"dt.filterGlobal($event.target.value, 'contains')\" style=\"width:auto\" />\r\n            </div>\r\n        </ng-template>\r\n\r\n        <ng-template pTemplate=\"header\" let-columns>\r\n            <tr>\r\n                <th *ngFor=\"let col of columns\" style=\"text-align:center;\">\r\n                    {{ col.header }}\r\n                </th>\r\n                <!-- <th style=\"text-align: center;\">\r\n            Actions\r\n          </th> -->\r\n            </tr>\r\n        </ng-template>\r\n        <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\" style=\"word-wrap: break-word;\">\r\n            <tr [pSelectableRow]=\"rowData\">\r\n                <td *ngFor=\"let col of columns\">\r\n                    {{ rowData[col.field] }}\r\n                </td>\r\n                <!-- <td>\r\n              <button pButton type=\"button\" label=\"Edit\" class=\"ui-button-warning\" (click)=routeToPatientForm()></button>\r\n          </td> -->\r\n            </tr>\r\n        </ng-template>\r\n    </p-table>\r\n</p-card>\r\n<div *ngIf=\"loading\" class=\"loading-indicator\">\r\n    <p-progressSpinner></p-progressSpinner>\r\n</div>"

/***/ }),

/***/ "./src/app/gyny-obs-list/gyny-obs-list.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/gyny-obs-list/gyny-obs-list.component.ts ***!
  \**********************************************************/
/*! exports provided: GynyObsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GynyObsListComponent", function() { return GynyObsListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _patientservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../patientservice.service */ "./src/app/patientservice.service.ts");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_4__);





var GynyObsListComponent = /** @class */ (function () {
    function GynyObsListComponent(router, patientService, mesgService) {
        this.router = router;
        this.patientService = patientService;
        this.mesgService = mesgService;
        this.display = false;
        this.loading = false;
    }
    GynyObsListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.datasource = this.patient = [];
        this.patient = [];
        this.loading = true;
        this.display = true;
        this.totalRecords = 0;
        this.patientService.getAllGynyObsPatients().subscribe(function (data) {
            _this.datasource = [];
            _this.datasource = data;
            _this.totalRecords = _this.datasource.length;
            console.log(typeof (data.cnic));
            console.log(data);
            for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                var p = data_1[_i];
                _this.patient.push({
                    id: p.id,
                    name: p.name,
                    phoneNo: p.phoneNo,
                    address: p.address,
                    gender: p.gender,
                    cnic: p.cnic,
                    status: p.status,
                    age: p.age,
                    husbandOfAndFatherOf: p.husbandOfAndFatherOf,
                    registrationDate: new Date(p.registrationDate).toDateString()
                });
            }
            _this.loading = false;
        });
        this.cols = [
            { field: 'id', header: 'Mr No' },
            { field: 'name', header: 'NAME' },
            { field: 'age', header: 'AGE' },
            { field: 'address', header: 'ADDRESS' },
            { field: 'phoneNo', header: 'Phone No' },
            { field: 'gender', header: 'Gender' },
            { field: 'cnic', header: 'CnicNo' },
            { field: 'status', header: 'Status' },
            { field: 'husbandOfAndFatherOf', header: 'Father/ Husband Name' },
            { field: 'registrationDate', header: 'Registration Date' }
        ];
    };
    GynyObsListComponent.prototype.toAddPatient = function () {
        this.router.navigate(['/patientform']);
    };
    GynyObsListComponent.prototype.backToMain = function () {
        this.router.navigate(['/mainscreen']);
    };
    GynyObsListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-gyny-obs-list',
            template: __webpack_require__(/*! ./gyny-obs-list.component.html */ "./src/app/gyny-obs-list/gyny-obs-list.component.html"),
            styles: [__webpack_require__(/*! ./gyny-obs-list.component.css */ "./src/app/gyny-obs-list/gyny-obs-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _patientservice_service__WEBPACK_IMPORTED_MODULE_3__["PatientserviceService"],
            primeng_api__WEBPACK_IMPORTED_MODULE_4__["MessageService"]])
    ], GynyObsListComponent);
    return GynyObsListComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav *ngIf=\"nav.visible\" style=\"background-color:#5cb85c \" class=\"navbar navbar-inverse\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"navbar-header\">\r\n      <a\r\n        style=\"color:whitesmoke!important ; font-size:20px; font-style:italic; text-decoration: underline;\"\r\n        class=\"navbar-brand\"\r\n        href=\"#\"\r\n        >HmS</a\r\n      >\r\n    </div>\r\n    <ul class=\"nav navbar-nav\"></ul>\r\n    <ul class=\"nav navbar-nav navbar-right\">\r\n      <li>\r\n        <a\r\n          style=\"color:whitesmoke !important; font: size 17px;font-style:italic; text-decoration: underline;\"\r\n          href=\"#\"\r\n          ><span class=\"glyphicon glyphicon-user\"></span> Sign Up</a\r\n        >\r\n      </li>\r\n      <li>\r\n        <a\r\n          style=\"color:whitesmoke !important ;  font-size:17px;font-style:italic; text-decoration: underline;\"\r\n          href=\"#\"\r\n          ><span class=\"glyphicon glyphicon-log-in\"></span> Login</a\r\n        >\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Services_NavBarService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Services/NavBarService */ "./src/app/Services/NavBarService.ts");



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(nav) {
        this.nav = nav;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.items1 = [
            { label: 'Stats', icon: 'fa fa-fw fa-bar-chart' },
            { label: 'Calendar', icon: 'fa fa-fw fa-calendar' },
            { label: 'Documentation', icon: 'fa fa-fw fa-book' },
            { label: 'Support', icon: 'fa fa-fw fa-support' },
            { label: 'Social', icon: 'fa fa-fw fa-twitter' }
        ];
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_Services_NavBarService__WEBPACK_IMPORTED_MODULE_2__["NavBarService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/hmslandingpage/hmslandingpage.component.css":
/*!*************************************************************!*\
  !*** ./src/app/hmslandingpage/hmslandingpage.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ui-g-12 {\r\n    margin-top: 5%;\r\n}\r\n\r\n.wrap {\r\n    height: 100vh !important;\r\n    background-size: cover;\r\n    background-position: center center;\r\n    background-image: url('hospital2.jpg')\r\n}\r\n\r\nbody {\r\n    font-family: 'Mukta', sans-serif;\r\n}\r\n\r\n.card-signin {\r\n    border: 0;\r\n    border-radius: 0px;\r\n    background-color: rgb(255, 255, 255);\r\n    height: 350px !important;\r\n    box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.8);\r\n}\r\n\r\n.card-signin .card-title {\r\n    margin-bottom: 2rem;\r\n    font-weight: 300;\r\n    font-size: 1.5rem;\r\n    text-align: center;\r\n}\r\n\r\n.card-signin .card-body {\r\n    padding: 2rem;\r\n}\r\n\r\n.form-signin {\r\n    width: 100%;\r\n}\r\n\r\n.form-signin .btn {\r\n    font-size: 80%;\r\n    border-radius: 5rem;\r\n    letter-spacing: .1rem;\r\n    font-weight: bold;\r\n    padding: 1rem;\r\n    transition: all 0.2s;\r\n}\r\n\r\n.form-label-group {\r\n    position: relative;\r\n    margin-bottom: 2rem;\r\n}\r\n\r\n.form-label-group input {\r\n    height: auto;\r\n    border-radius: 0px;\r\n}\r\n\r\n#login {\r\n    background-color: rgb(95, 196, 95);\r\n}\r\n\r\n.input-group {\r\n    margin-bottom: 26px !important;\r\n}\r\n\r\n.form-label-group>label {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    display: block;\r\n    width: 100%;\r\n    margin-bottom: 0;\r\n    /* Override default `<label>` margin */\r\n    line-height: 1.5;\r\n    color: #495057;\r\n    border: 1px solid transparent;\r\n    border-radius: .25rem;\r\n    transition: all .1s ease-in-out;\r\n}\r\n\r\n#loginForm {\r\n    margin-top: 98px;\r\n}\r\n\r\nbutton:hover {\r\n    border-color: rgb(0, 162, 255);\r\n    box-shadow: inset 0 2px 2px rgba(58, 153, 190, 0.075), 0 0 8px rgba(70, 131, 209, 0.6);\r\n    font-size: 18px !important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG1zbGFuZGluZ3BhZ2UvaG1zbGFuZGluZ3BhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsc0JBQXNCO0lBQ3RCLGtDQUFrQztJQUNsQztBQUNKOztBQUVBO0lBQ0ksZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksU0FBUztJQUNULGtCQUFrQjtJQUNsQixvQ0FBb0M7SUFDcEMsd0JBQXdCO0lBQ3hCLDhDQUE4QztBQUNsRDs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQixpQkFBaUI7SUFDakIsYUFBYTtJQUNiLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0NBQWtDO0FBQ3RDOztBQUVBO0lBQ0ksOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1AsY0FBYztJQUNkLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsc0NBQXNDO0lBQ3RDLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsNkJBQTZCO0lBQzdCLHFCQUFxQjtJQUNyQiwrQkFBK0I7QUFDbkM7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSw4QkFBOEI7SUFDOUIsc0ZBQXNGO0lBQ3RGLDBCQUEwQjtBQUM5QiIsImZpbGUiOiJzcmMvYXBwL2htc2xhbmRpbmdwYWdlL2htc2xhbmRpbmdwYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudWktZy0xMiB7XHJcbiAgICBtYXJnaW4tdG9wOiA1JTtcclxufVxyXG5cclxuLndyYXAge1xyXG4gICAgaGVpZ2h0OiAxMDB2aCAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvaG9zcGl0YWwyLmpwZ1wiKVxyXG59XHJcblxyXG5ib2R5IHtcclxuICAgIGZvbnQtZmFtaWx5OiAnTXVrdGEnLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uY2FyZC1zaWduaW4ge1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gICAgaGVpZ2h0OiAzNTBweCAhaW1wb3J0YW50O1xyXG4gICAgYm94LXNoYWRvdzogMCAwLjVyZW0gMXJlbSAwIHJnYmEoMCwgMCwgMCwgMC44KTtcclxufVxyXG5cclxuLmNhcmQtc2lnbmluIC5jYXJkLXRpdGxlIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jYXJkLXNpZ25pbiAuY2FyZC1ib2R5IHtcclxuICAgIHBhZGRpbmc6IDJyZW07XHJcbn1cclxuXHJcbi5mb3JtLXNpZ25pbiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmZvcm0tc2lnbmluIC5idG4ge1xyXG4gICAgZm9udC1zaXplOiA4MCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cmVtO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IC4xcmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XHJcbn1cclxuXHJcbi5mb3JtLWxhYmVsLWdyb3VwIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbn1cclxuXHJcbi5mb3JtLWxhYmVsLWdyb3VwIGlucHV0IHtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcclxufVxyXG5cclxuI2xvZ2luIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig5NSwgMTk2LCA5NSk7XHJcbn1cclxuXHJcbi5pbnB1dC1ncm91cCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyNnB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5mb3JtLWxhYmVsLWdyb3VwPmxhYmVsIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIC8qIE92ZXJyaWRlIGRlZmF1bHQgYDxsYWJlbD5gIG1hcmdpbiAqL1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICAgIGNvbG9yOiAjNDk1MDU3O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAuMjVyZW07XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjFzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4jbG9naW5Gb3JtIHtcclxuICAgIG1hcmdpbi10b3A6IDk4cHg7XHJcbn1cclxuXHJcbmJ1dHRvbjpob3ZlciB7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYigwLCAxNjIsIDI1NSk7XHJcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDJweCAycHggcmdiYSg1OCwgMTUzLCAxOTAsIDAuMDc1KSwgMCAwIDhweCByZ2JhKDcwLCAxMzEsIDIwOSwgMC42KTtcclxuICAgIGZvbnQtc2l6ZTogMThweCAhaW1wb3J0YW50O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/hmslandingpage/hmslandingpage.component.html":
/*!**************************************************************!*\
  !*** ./src/app/hmslandingpage/hmslandingpage.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p-toast></p-toast>\r\n<div class=\"wrap\">\r\n\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-10 offset-sm-1 col-md-6 offset-md-3 offset-lg-3 col-lg-6\" id=\"loginForm\">\r\n                <div class=\"card card-signin my-5\">\r\n                    <div class=\"card-body\">\r\n                        <h2 style=\"text-align: center;font-weight:bold;color:rgb(132, 190, 132);\">SIGN IN</h2>\r\n                        <hr style=\" border: 1px solid rgb(118, 192, 116);\" />\r\n                        <form class=\"form-signin\">\r\n                            <div class=\"input-group\">\r\n                                <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-user\"></i></span>\r\n                                <input type=\"text\" name=\"Username\" #u1 style=\"text-align: center !important; height: 44px;font-size:22px !important;\" id=\"inputEmail\" class=\"form-control\" placeholder=\"Username\">\r\n\r\n                            </div>\r\n\r\n                            <div class=\"input-group\">\r\n                                <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-lock\"></i></span>\r\n                                <input type=\"password\" #p2 name=\"password\" style=\"text-align: center !important; height: 44px;font-size:22px !important;\" id=\"inputPassword\" class=\"form-control\" placeholder=\"Password\">\r\n\r\n                            </div>\r\n\r\n\r\n                            <button id=\"login\" (click)=\"check(u1.value, p2.value)\" class=\"btn btn-lg btn-primary btn-block text-uppercase\" type=\"submit\">Sign in</button>\r\n                            <hr class=\"my-4\">\r\n                        </form>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n\r\n<!-- <div class=\"bg\">\r\n  <div class=\"ui-g-12\" style=\"width: 80%;\r\n      font-size: 26px;\r\n      margin-left: 10%;\r\n      text-align: center;\r\n      color: green;\">\r\n    <p-card header=\"Login\">\r\n      <div class=\"ui-g ui-fluid\">\r\n        <hr style=\"height:2px;width:100%;background-color:green;\" />\r\n        <form style=\"width:100%;\">\r\n          <div class=\"ui-g\">\r\n            <div class=\"ui-md-3 ui-lg-3\"></div>\r\n            <div class=\"ui-md-6 ui-lg-6 ui-sm-12\">\r\n              <div class=\"ui-inputgroup\">\r\n                <span class=\"ui-inputgroup-addon\" style=\"width:30%;font-size:15px; font-weight: bold;\">Username</span>\r\n                <input type=\"text\" #u1 required name=\"Username\" pInputText />\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"ui-g\">\r\n            <div class=\"ui-md-3 ui-lg-3\"></div>\r\n            <div class=\"ui-md-6 ui-lg-6 ui-sm-12\">\r\n              <div class=\"ui-inputgroup\">\r\n                <span class=\"ui-inputgroup-addon\" style=\"width:30%;font-size:15px; font-weight: bold;\">Password</span>\r\n                <input type=\"password\" #p2 name=\"password\" pInputText />\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"ui-g\">\r\n            <div class=\"ui-md-3 ui-lg-3\"></div>\r\n            <div class=\"ui-md-6 ui-lg-6 ui-sm-12\">\r\n              <button pButton type=\"submit\" label=\"Log In\"\r\n                style=\"margin-top: 0px; background-color:green;width:100%; font-weight: bold;\"\r\n                (click)=\"check(u1.value, p2.value)\"></button>\r\n            </div>\r\n          </div>\r\n          <span>{{msg}}</span>\r\n        </form>\r\n      </div>\r\n    </p-card>\r\n  </div>\r\n</div> -->"

/***/ }),

/***/ "./src/app/hmslandingpage/hmslandingpage.component.ts":
/*!************************************************************!*\
  !*** ./src/app/hmslandingpage/hmslandingpage.component.ts ***!
  \************************************************************/
/*! exports provided: HmslandingpageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HmslandingpageComponent", function() { return HmslandingpageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Services_NavBarService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Services/NavBarService */ "./src/app/Services/NavBarService.ts");
/* harmony import */ var _Services_my_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Services/my-service.service */ "./src/app/Services/my-service.service.ts");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_5__);






var HmslandingpageComponent = /** @class */ (function () {
    function HmslandingpageComponent(router, nav, messageService, service) {
        this.router = router;
        this.nav = nav;
        this.messageService = messageService;
        this.service = service;
    }
    HmslandingpageComponent.prototype.ngOnInit = function () {
        this.nav.hide();
    };
    HmslandingpageComponent.prototype.check = function (uname, p) {
        var _this = this;
        var output = this.service.checkUserandPass(uname, p);
        if (output == true) {
            this.messageService.add({ severity: 'success', summary: 'Service Message', detail: 'Login Succesful' });
            setTimeout(function () {
                _this.router.navigate(['mainscreen']);
            }, 1000);
        }
        else {
            this.messageService.add({ severity: 'error', summary: 'Service Message', detail: 'Invalid Username or Password' });
        }
    };
    HmslandingpageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-hmslandingpage',
            template: __webpack_require__(/*! ./hmslandingpage.component.html */ "./src/app/hmslandingpage/hmslandingpage.component.html"),
            providers: [_Services_my_service_service__WEBPACK_IMPORTED_MODULE_4__["MyServiceService"]],
            styles: [__webpack_require__(/*! ./hmslandingpage.component.css */ "./src/app/hmslandingpage/hmslandingpage.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _Services_NavBarService__WEBPACK_IMPORTED_MODULE_3__["NavBarService"], primeng_api__WEBPACK_IMPORTED_MODULE_5__["MessageService"], _Services_my_service_service__WEBPACK_IMPORTED_MODULE_4__["MyServiceService"]])
    ], HmslandingpageComponent);
    return HmslandingpageComponent;
}());



/***/ }),

/***/ "./src/app/home-page/home-page.component.css":
/*!***************************************************!*\
  !*** ./src/app/home-page/home-page.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUtcGFnZS9ob21lLXBhZ2UuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/home-page/home-page.component.html":
/*!****************************************************!*\
  !*** ./src/app/home-page/home-page.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"container\">\r\n    <h2>Carousel Example</h2>  \r\n    <div id=\"myCarousel\" class=\"carousel slide\" data-ride=\"carousel\">\r\n      <!-- Indicators -->\r\n      <ol class=\"carousel-indicators\">\r\n        <li data-target=\"#myCarousel\" data-slide-to=\"0\" class=\"active\"></li>\r\n        <li data-target=\"#myCarousel\" data-slide-to=\"1\"></li>\r\n        <li data-target=\"#myCarousel\" data-slide-to=\"2\"></li>\r\n      </ol>\r\n  \r\n      <!-- Wrapper for slides -->\r\n      <div class=\"carousel-inner\">\r\n        <div class=\"item active\">\r\n          <img src=\"https://cdn.motivationgrid.com/wp-content/uploads/2015/02/20.jpg\" alt=\"Los Angeles\" style=\"width:100%;\">\r\n        </div>\r\n  \r\n        <div class=\"item\">\r\n          <img src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvUWhMpJSutT1Yzzctfgaz1Ae5In4UH21NuuL9b8oujO9ly-JH\" alt=\"Chicago\" style=\"width:100%;\">\r\n        </div>\r\n      \r\n        <div class=\"item\">\r\n          <img src=\"https://images.unsplash.com/photo-1494178270175-e96de2971df9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80\" alt=\"New york\" style=\"width:100%;\">\r\n        </div>\r\n      </div>\r\n  \r\n      <!-- Left and right controls -->\r\n      <a class=\"left carousel-control\" href=\"#myCarousel\" data-slide=\"prev\">\r\n        <span class=\"glyphicon glyphicon-chevron-left\"></span>\r\n        <span class=\"sr-only\">Previous</span>\r\n      </a>\r\n      <a class=\"right carousel-control\" href=\"#myCarousel\" data-slide=\"next\">\r\n        <span class=\"glyphicon glyphicon-chevron-right\"></span>\r\n        <span class=\"sr-only\">Next</span>\r\n      </a>\r\n    </div>\r\n  </div>\r\n  "

/***/ }),

/***/ "./src/app/home-page/home-page.component.ts":
/*!**************************************************!*\
  !*** ./src/app/home-page/home-page.component.ts ***!
  \**************************************************/
/*! exports provided: HomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageComponent", function() { return HomePageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomePageComponent = /** @class */ (function () {
    function HomePageComponent() {
    }
    HomePageComponent.prototype.ngOnInit = function () {
    };
    HomePageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home-page',
            template: __webpack_require__(/*! ./home-page.component.html */ "./src/app/home-page/home-page.component.html"),
            styles: [__webpack_require__(/*! ./home-page.component.css */ "./src/app/home-page/home-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomePageComponent);
    return HomePageComponent;
}());



/***/ }),

/***/ "./src/app/login-form/login-form.component.css":
/*!*****************************************************!*\
  !*** ./src/app/login-form/login-form.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luLWZvcm0vbG9naW4tZm9ybS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/login-form/login-form.component.html":
/*!******************************************************!*\
  !*** ./src/app/login-form/login-form.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"container\">\r\n    <h1> FORM DATA </h1>\r\n    <form #userform=\"ngForm\" (ngSubmit)=\"click(userform.value)\">\r\n        <div class=\"form-group\">\r\n            <label> name </label>\r\n            <input type=\"text\" class=\"form-control\" name=\"username\" ngModel> \r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label> EMAIL </label>\r\n            <input type=\"text\" class=\"form-control\" name=\"email\" ngModel> \r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label> STREET </label>\r\n            <input type=\"text\" class=\"form-control\" name=\"street\" ngModel> \r\n\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label> CITY </label>\r\n            <input type=\"text\" class=\"form-control\" name=\"city\"  ngModel> \r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label> POSTAL CODE </label>\r\n            <input type=\"text\" class=\"form-control\" name=\"pscode\"  ngModel> \r\n        </div>\r\n        <button type=\"submit\" class=\"btn btn-primary\"> submit </button>\r\n        </form>\r\n</div> -->\r\n<div class=\"container\">\r\n        <table class=\"table table-striped\">\r\n           <tbody>\r\n              <tr>\r\n                 <td colspan=\"1\">\r\n                    <form class=\"well form-horizontal\">\r\n                       <fieldset>\r\n                          <div class=\"form-group\">\r\n                             <label class=\"col-md-4 control-label\">Full Name</label>\r\n                             <div class=\"col-md-8 inputGroupContainer\">\r\n                                    <span class=\"ui-float-label\">\r\n                                            <input id=\"float-input\" type=\"text\" size=\"30\" pInputText> \r\n                                            <label for=\"float-input\">Username</label>\r\n                                        </span>\r\n                             </div>\r\n                          </div>\r\n                          <div class=\"form-group\">\r\n                             <label class=\"col-md-4 control-label\">Address Line 1</label>\r\n                             <div class=\"col-md-8 inputGroupContainer\">\r\n                                    <span class=\"ui-float-label\">\r\n                                            <input id=\"float-input\" type=\"text\" size=\"30\" pInputText> \r\n                                            <label for=\"float-input\">Username</label>\r\n                                        </span>\r\n                             </div>\r\n                          </div>\r\n                          <div class=\"form-group\">\r\n                             <label class=\"col-md-4 control-label\">Address Line 2</label>\r\n                             <div class=\"col-md-8 inputGroupContainer\">\r\n                                    <span class=\"ui-float-label\">\r\n                                            <input id=\"float-input\" type=\"text\" size=\"30\" pInputText> \r\n                                            <label for=\"float-input\">Username</label>\r\n                                        </span>\r\n                             </div>\r\n                          </div>\r\n                          <div class=\"form-group\">\r\n                             <label class=\"col-md-4 control-label\">City</label>\r\n                             <div class=\"col-md-8 inputGroupContainer\">\r\n                                    <span class=\"ui-float-label\">\r\n                                            <input id=\"float-input\" type=\"text\" size=\"30\" pInputText> \r\n                                            <label for=\"float-input\">Username</label>\r\n                                        </span>\r\n                             </div>\r\n                          </div>\r\n                          <div class=\"form-group\">\r\n                             <label class=\"col-md-4 control-label\">State/Province/Region</label>\r\n                             <div class=\"col-md-8 inputGroupContainer\">\r\n                                    <span class=\"ui-float-label\">\r\n                                            <input id=\"float-input\" type=\"text\" size=\"30\" pInputText> \r\n                                            <label for=\"float-input\">Username</label>\r\n                                        </span>\r\n                             </div>\r\n                          </div>\r\n                          <div class=\"form-group\">\r\n                             <label class=\"col-md-4 control-label\">Postal Code/ZIP</label>\r\n                             <div class=\"col-md-8 inputGroupContainer\">\r\n                                    <span class=\"ui-float-label\">\r\n                                            <input id=\"float-input\" type=\"text\" size=\"30\" pInputText> \r\n                                            <label for=\"float-input\">Username</label>\r\n                                        </span>\r\n                             </div>\r\n                          </div>\r\n                          <div class=\"form-group\">\r\n                             <label class=\"col-md-4 control-label\">Country</label>\r\n                             <div class=\"col-md-8 inputGroupContainer\">\r\n                                <div class=\"input-group\">\r\n                                        <span class=\"ui-float-label\">\r\n                                                <input id=\"float-input\" type=\"text\" size=\"30\" pInputText> \r\n                                                <label for=\"float-input\">Username</label>\r\n                                            </span>\r\n                                </div>\r\n                             </div>\r\n                          </div>\r\n                          <div class=\"form-group\">\r\n                             <label class=\"col-md-4 control-label\">Email</label>\r\n                             <div class=\"col-md-8 inputGroupContainer\">\r\n                                    <span class=\"ui-float-label\">\r\n                                            <input id=\"float-input\" type=\"text\" size=\"30\" pInputText> \r\n                                            <label for=\"float-input\">Username</label>\r\n                                        </span>\r\n                             </div>\r\n                          </div>\r\n                          <div class=\"form-group\">\r\n                             <label class=\"col-md-4 control-label\">Phone Number</label>\r\n                             <div class=\"col-md-8 inputGroupContainer\">\r\n                                    <span class=\"ui-float-label\">\r\n                                            <input id=\"float-input\" type=\"text\" size=\"30\" pInputText> \r\n                                            <label for=\"float-input\">Username</label>\r\n                                        </span>\r\n                             </div>\r\n                          </div>\r\n                       </fieldset>\r\n                    </form>\r\n                 </td>\r\n                 <td colspan=\"1\">\r\n                    <form class=\"well form-horizontal\">\r\n                       <fieldset>\r\n                          <div class=\"form-group\">\r\n                             <label class=\"col-md-4 control-label\">Full Name</label>\r\n                             <div class=\"col-md-8 inputGroupContainer\">\r\n                                    <span class=\"ui-float-label\">\r\n                                            <input id=\"float-input\" type=\"text\" size=\"30\" pInputText> \r\n                                            <label for=\"float-input\">Username</label>\r\n                                        </span>\r\n                             </div>\r\n                          </div>\r\n                          <div class=\"form-group\">\r\n                             <label class=\"col-md-4 control-label\">Address Line 1</label>\r\n                             <div class=\"col-md-8 inputGroupContainer\">\r\n                                    <span class=\"ui-float-label\">\r\n                                            <input id=\"float-input\" type=\"text\" size=\"30\" pInputText> \r\n                                            <label for=\"float-input\">Username</label>\r\n                                        </span>\r\n                             </div>\r\n                          </div>\r\n                          <div class=\"form-group\">\r\n                             <label class=\"col-md-4 control-label\">Address Line 2</label>\r\n                             <div class=\"col-md-8 inputGroupContainer\">\r\n                                    <span class=\"ui-float-label\">\r\n                                            <input id=\"float-input\" type=\"text\" size=\"30\" pInputText> \r\n                                            <label for=\"float-input\">Username</label>\r\n                                        </span>\r\n                             </div>\r\n                          </div>\r\n                          <div class=\"form-group\">\r\n                             <label class=\"col-md-4 control-label\">City</label>\r\n                             <div class=\"col-md-8 inputGroupContainer\">\r\n                                    <span class=\"ui-float-label\">\r\n                                            <input id=\"float-input\" type=\"text\" size=\"30\" pInputText> \r\n                                            <label for=\"float-input\">Username</label>\r\n                                        </span>\r\n                             </div>\r\n                          </div>\r\n                          <div class=\"form-group\">\r\n                             <label class=\"col-md-4 control-label\">State/Province/Region</label>\r\n                             <div class=\"col-md-8 inputGroupContainer\">\r\n                                    <span class=\"ui-float-label\">\r\n                                            <input id=\"float-input\" type=\"text\" size=\"30\" pInputText> \r\n                                            <label for=\"float-input\">Username</label>\r\n                                        </span>\r\n                             </div>\r\n                          </div>\r\n                          <div class=\"form-group\">\r\n                             <label class=\"col-md-4 control-label\">Postal Code/ZIP</label>\r\n                             <div class=\"col-md-8 inputGroupContainer\">\r\n                                    <span class=\"ui-float-label\">\r\n                                            <input id=\"float-input\" type=\"text\" size=\"30\" pInputText> \r\n                                            <label for=\"float-input\">Username</label>\r\n                                        </span>\r\n                             </div>\r\n                          </div>\r\n                          <div class=\"form-group\">\r\n                             <label class=\"col-md-4 control-label\">Country</label>\r\n                             <div class=\"col-md-8 inputGroupContainer\">\r\n                                <div class=\"input-group\">\r\n                                        <span class=\"ui-float-label\">\r\n                                                <input id=\"float-input\" type=\"text\" size=\"30\" pInputText> \r\n                                                <label for=\"float-input\">enter </label>\r\n                                            </span>\r\n                                </div>\r\n                             </div>\r\n                          </div>\r\n                          <div class=\"form-group\">\r\n                             <label class=\"col-md-4 control-label\">Email</label>\r\n                             <div class=\"col-md-8 inputGroupContainer\">\r\n                                    <span class=\"ui-float-label\">\r\n                                            <input id=\"float-input\" type=\"text\" size=\"30\" pInputText> \r\n                                            <label for=\"float-input\">enter Email</label>\r\n                                        </span>\r\n                             </div>\r\n                          </div>\r\n                          <div class=\"form-group\">\r\n                             <label class=\"col-md-4 control-label\">Phone Number</label>\r\n                             <div class=\"col-md-8 inputGroupContainer\">\r\n                                    <span class=\"ui-float-label\">\r\n                                            <input id=\"float-input\" type=\"text\" size=\"30\" pInputText> \r\n                                            <label for=\"float-input\">Enter phone no</label>\r\n                                        </span>\r\n                             </div>\r\n                          </div>\r\n                          \r\n\r\n\r\n\r\n                          <button type=\"button\" pButton (click)=\"showTopCenter()\" label=\"Top Center\" class=\"ui-button-info\"></button>\r\n\r\n                         \r\n                          \r\n                          <p-toast [style]=\"{marginTop: '80px'}\" position=\"top-center\" key=\"tc\"></p-toast>\r\n                          \r\n\r\n                       </fieldset>\r\n                    </form>\r\n                 </td>\r\n              </tr>\r\n           </tbody>\r\n        </table>\r\n     </div>\r\n\r\n"

/***/ }),

/***/ "./src/app/login-form/login-form.component.ts":
/*!****************************************************!*\
  !*** ./src/app/login-form/login-form.component.ts ***!
  \****************************************************/
/*! exports provided: LoginFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginFormComponent", function() { return LoginFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_2__);



var LoginFormComponent = /** @class */ (function () {
    function LoginFormComponent(messageService) {
        this.messageService = messageService;
    }
    LoginFormComponent.prototype.ngOnInit = function () {
    };
    LoginFormComponent.prototype.click = function (value) {
        console.log(value);
    };
    LoginFormComponent.prototype.showTopCenter = function () {
        this.messageService.add({ key: 'tc', severity: 'warn', summary: 'Info Message', detail: 'PrimeNG rocks' });
    };
    LoginFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login-form',
            template: __webpack_require__(/*! ./login-form.component.html */ "./src/app/login-form/login-form.component.html"),
            providers: [primeng_api__WEBPACK_IMPORTED_MODULE_2__["MessageService"]],
            styles: [__webpack_require__(/*! ./login-form.component.css */ "./src/app/login-form/login-form.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [primeng_api__WEBPACK_IMPORTED_MODULE_2__["MessageService"]])
    ], LoginFormComponent);
    return LoginFormComponent;
}());



/***/ }),

/***/ "./src/app/main-screen/add-panel/add-panel.component.css":
/*!***************************************************************!*\
  !*** ./src/app/main-screen/add-panel/add-panel.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4tc2NyZWVuL2FkZC1wYW5lbC9hZGQtcGFuZWwuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/main-screen/add-panel/add-panel.component.html":
/*!****************************************************************!*\
  !*** ./src/app/main-screen/add-panel/add-panel.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <p-card\r\n    header=\"\"\r\n    [style]=\"{ width: '100%', color: '#3EB650', 'text-align': 'left' }\"\r\n  >\r\n    <h3>ADD PANEL</h3>\r\n    <hr />\r\n\r\n    <div class=\"ui-g\">\r\n      <div class=\"ui-lg-2  ui-g-12 ui-md-6 ui-sm-12\"></div>\r\n      <div class=\"ui-lg-2 ui-g-12 ui-md-6 ui-sm-12 \">\r\n        <button\r\n          pButton\r\n          type=\"button\"\r\n          (click)=\"doctorList()\"\r\n          label=\"Add Doctor\"\r\n          class=\"ui-button-raised ui-button-success\"\r\n          style=\"width:100%;\"\r\n        >\r\n          <img\r\n            src=\"https://img.icons8.com/color/48/000000/medical-doctor.png\"\r\n          />\r\n        </button>\r\n      </div>\r\n\r\n      <div class=\"ui-lg-2 ui-g-12 ui-md-6 ui-sm-12 \">\r\n        <button\r\n          pButton\r\n          type=\"button\"\r\n          (click)=\"addlabtest()\"\r\n          label=\" Add lab-test \"\r\n          class=\"ui-button-raised ui-button-success\"\r\n          style=\"width:100%;\"\r\n        >\r\n          <img src=\"https://img.icons8.com/color/48/000000/test-tube.png\" />\r\n        </button>\r\n      </div>\r\n\r\n      <div class=\"ui-lg-2 ui-g-12 ui-md-6 ui-sm-12 \">\r\n        <button\r\n          pButton\r\n          type=\"button\"\r\n          (click)=\"panelList()\"\r\n          label=\"Add Panel\"\r\n          class=\"ui-button-raised ui-button-success\"\r\n          style=\"width:100%;\"\r\n        >\r\n          <img src=\"https://img.icons8.com/color/48/000000/hospital.png\" />\r\n        </button>\r\n      </div>\r\n      <div class=\"ui-lg-2 ui-g-12 ui-md-6 ui-sm-12 \">\r\n        <button\r\n          pButton\r\n          type=\"button\"\r\n          (click)=\"erList()\"\r\n          label=\"Add Er service\"\r\n          class=\"ui-button-raised ui-button-success\"\r\n          style=\"width:100;\"\r\n        >\r\n          <img src=\"https://img.icons8.com/color/48/000000/ambulance.png\" />\r\n        </button>\r\n      </div>\r\n    </div>\r\n    <div class=\"ui-g\">\r\n      <div class=\"ui-lg-2 ui-g-12 ui-md-6 ui-sm-12 \">\r\n        <button\r\n          pButton\r\n          type=\"button\"\r\n          label=\" Add Package\"\r\n          class=\"ui-button-raised ui-button-success\"\r\n          style=\"width:100%;\"\r\n        >\r\n          <img src=\"https://img.icons8.com/color/48/000000/cash-in-hand.png\" />\r\n        </button>\r\n      </div>\r\n      <div class=\"ui-lg-2 ui-g-12 ui-md-6 ui-sm-12 \">\r\n        <button\r\n          pButton\r\n          type=\"button\"\r\n          label=\"Add Reports\"\r\n          class=\"ui-button-raised ui-button-success\"\r\n          style=\"width:100%;\"\r\n        >\r\n          <img src=\"https://img.icons8.com/color/48/000000/combo-chart.png\" />\r\n        </button>\r\n      </div>\r\n      <div class=\"ui-lg-2 ui-g-12 ui-md-6 ui-sm-12 \">\r\n        <button\r\n          pButton\r\n          type=\"button\"\r\n          (click)=\"addDirectory()\"\r\n          label=\" Add  Directory\"\r\n          class=\"ui-button-raised ui-button-success\"\r\n          style=\"width:100%;\"\r\n        >\r\n          <img src=\"https://img.icons8.com/color/48/000000/user-folder.png\" />\r\n        </button>\r\n      </div>\r\n      <div class=\"ui-lg-2 ui-g-12 ui-md-6 ui-sm-12 \">\r\n        <button\r\n          pButton\r\n          type=\"button\"\r\n          label=\"Add CashFlow\"\r\n          class=\"ui-button-raised ui-button-success\"\r\n          style=\"width:100%;\"\r\n        >\r\n          <img src=\"https://img.icons8.com/color/48/000000/receipt.png\" />\r\n        </button>\r\n      </div>\r\n      <div class=\"ui-g\">\r\n        <div class=\"ui-lg-1 ui-g-12 ui-md-6 ui-sm-12\"></div>\r\n        <div class=\"ui-lg-2 ui-g-12 ui-md-6 ui-sm-12 \">\r\n          <button\r\n            pButton\r\n            type=\"button\"\r\n            label=\" Add Package\"\r\n            class=\"ui-button-raised ui-button-success\"\r\n            style=\"width:100;\"\r\n          >\r\n            <img\r\n              src=\"https://img.icons8.com/color/48/000000/cash-in-hand.png\"\r\n            />\r\n          </button>\r\n        </div>\r\n        <div class=\"ui-lg-2 ui-g-12 ui-md-6 ui-sm-12 \">\r\n          <button\r\n            pButton\r\n            type=\"button\"\r\n            label=\"Add Reports\"\r\n            class=\"ui-button-raised ui-button-success\"\r\n            style=\"width:100;\"\r\n          >\r\n            <img src=\"https://img.icons8.com/color/48/000000/combo-chart.png\" />\r\n          </button>\r\n        </div>\r\n        <div class=\"ui-lg-2 ui-g-12 ui-md-6 ui-sm-12 \">\r\n          <button\r\n            pButton\r\n            type=\"button\"\r\n            label=\" Add  Directory\"\r\n            class=\"ui-button-raised ui-button-success\"\r\n            style=\"width:100;\"\r\n          >\r\n            <img src=\"https://img.icons8.com/color/48/000000/user-folder.png\" />\r\n          </button>\r\n        </div>\r\n        <div class=\"ui-lg-2 ui-g-12 ui-md-6 ui-sm-12 \">\r\n          <button\r\n            pButton\r\n            type=\"button\"\r\n            label=\"Add CashFlow\"\r\n            class=\"ui-button-raised ui-button-success\"\r\n            style=\"width:100;\"\r\n          >\r\n            <img src=\"https://img.icons8.com/color/48/000000/receipt.png\" />\r\n          </button>\r\n        </div>\r\n\r\n        <div class=\"ui-lg-2 ui-g-12 ui-md-4 ui-sm-12 \">\r\n          <button\r\n            pButton\r\n            type=\"button\"\r\n            label=\" Add Appoinment\"\r\n            class=\"ui-button-raised ui-button-success\"\r\n            style=\"width:100;\"\r\n          >\r\n            <img src=\"https://img.icons8.com/color/48/000000/calendar.png\" />\r\n          </button>\r\n        </div>\r\n      </div>\r\n      \r\n      <div class=\"ui-lg-2 ui-g-12 ui-md-6 ui-sm-12 \">\r\n        <button\r\n          pButton\r\n          type=\"button\"\r\n          label=\" Add Appoinment\"\r\n          class=\"ui-button-raised ui-button-success\"\r\n          style=\"width:100;\"\r\n          (click)=\"appoinmentList()\"\r\n        >\r\n          <img src=\"https://img.icons8.com/color/48/000000/calendar.png\" />\r\n        </button>\r\n      </div>\r\n      \r\n    </div>\r\n  </p-card>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/main-screen/add-panel/add-panel.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/main-screen/add-panel/add-panel.component.ts ***!
  \**************************************************************/
/*! exports provided: AddPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPanelComponent", function() { return AddPanelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var AddPanelComponent = /** @class */ (function () {
    function AddPanelComponent(router) {
        this.router = router;
    }
    AddPanelComponent.prototype.ngOnInit = function () {
    };
    AddPanelComponent.prototype.doctorList = function () {
        this.router.navigate(['/doctorlist']);
    };
    AddPanelComponent.prototype.panelList = function () {
        this.router.navigate(['/panellist']);
    };
    AddPanelComponent.prototype.erList = function () {
        this.router.navigate(['/er']);
    };
    AddPanelComponent.prototype.addDirectory = function () {
        this.router.navigate(['adddirectory']);
    };
    AddPanelComponent.prototype.addlabtest = function () {
    };
    AddPanelComponent.prototype.appoinmentList = function () {
        this.router.navigate(['/appoinmentList']);
    };
    AddPanelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-panel',
            template: __webpack_require__(/*! ./add-panel.component.html */ "./src/app/main-screen/add-panel/add-panel.component.html"),
            styles: [__webpack_require__(/*! ./add-panel.component.css */ "./src/app/main-screen/add-panel/add-panel.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AddPanelComponent);
    return AddPanelComponent;
}());



/***/ }),

/***/ "./src/app/main-screen/main-screen.component.css":
/*!*******************************************************!*\
  !*** ./src/app/main-screen/main-screen.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* .colorSetAllButtons {\r\n        background-color: #479761 !important;\r\n        box-shadow: 5px 5px grey;\r\n    } */\r\n\r\nbody,\r\nhtml .backgroundImage {\r\n    background: url('back.jpg');\r\n    background-size: cover;\r\n    background-repeat: repeat-y;\r\n    height: 94vh;\r\n    /* overflow: hidden; */\r\n    width: 100%;\r\n    background-position: center;\r\n}\r\n\r\n.shadowPanel {\r\n    box-shadow: 5px 5px 20px 0px #c8c8c8;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi1zY3JlZW4vbWFpbi1zY3JlZW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O09BR087O0FBRVA7O0lBRUksMkJBQXdDO0lBQ3hDLHNCQUFzQjtJQUN0QiwyQkFBMkI7SUFDM0IsWUFBWTtJQUNaLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksb0NBQW9DO0FBQ3hDIiwiZmlsZSI6InNyYy9hcHAvbWFpbi1zY3JlZW4vbWFpbi1zY3JlZW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIC5jb2xvclNldEFsbEJ1dHRvbnMge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0Nzk3NjEgIWltcG9ydGFudDtcclxuICAgICAgICBib3gtc2hhZG93OiA1cHggNXB4IGdyZXk7XHJcbiAgICB9ICovXHJcblxyXG5ib2R5LFxyXG5odG1sIC5iYWNrZ3JvdW5kSW1hZ2Uge1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi9hc3NldHMvYmFjay5qcGcnKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXk7XHJcbiAgICBoZWlnaHQ6IDk0dmg7XHJcbiAgICAvKiBvdmVyZmxvdzogaGlkZGVuOyAqL1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5zaGFkb3dQYW5lbCB7XHJcbiAgICBib3gtc2hhZG93OiA1cHggNXB4IDIwcHggMHB4ICNjOGM4Yzg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/main-screen/main-screen.component.html":
/*!********************************************************!*\
  !*** ./src/app/main-screen/main-screen.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\r\n<html lang=\"en\">\r\n\r\n<head>\r\n    <meta charset=\"UTF-8\">\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n    <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\r\n    <title>Mainscreen</title>\r\n</head>\r\n\r\n<body>\r\n    <div class=\"backgroundImage\">\r\n        <div class=\"container\">\r\n            <div class=\"ui-g ui-fluid\">\r\n                <div class=\"ui-g-12 shadowPanel\">\r\n                    <p-panel header=\"Patient Lookup\" [style]=\"{ 'margin-bottom': '20px','background-color':'transparent' }\">\r\n                        <div class=\"ui-lg-12 ui-md-12 ui-sm-12 \">\r\n                            <input style=\"display:inline\" (keypress)=\"numberOnly($event)\" id=\"input\" required style=\"height:35px;margin-left:25%;width:50%; text-align: center;\" #mr=\"ngModel\" placeholder=\"Enter MR NO:\" type=\"text\" pInputText size=\"35%\" ngModel />\r\n\r\n                            <span style=\"margin-left: 1em;width:10px; margin-top: 0px !important;background-color: #479761 !important;\">\r\n              <app-searchbar></app-searchbar>\r\n            </span>\r\n                        </div>\r\n\r\n                        <div style=\"padding:0px;margin-bottom:0px;width:50%;margin-left:25%; text-align:center;\" class=\"alert alert-danger\" [hidden]=\"mr.valid || mr.pristine\">\r\n                            Provide Mr no:\r\n                        </div>\r\n\r\n                        <div class=\"ui-md-12 ui-lg-12 ui-sm-12\">\r\n                            <button pButton type=\"button\" label=\"OK\" style=\"margin-left:40%;width:20%\" (click)=\"check(mr.value)\" class=\"colorSetAllButtons\"></button>\r\n                            <p-toast [style]=\"{ marginTop: '40px' }\" position=\"top-right\" life=\"3000\"> </p-toast>\r\n                        </div>\r\n                    </p-panel>\r\n                </div>\r\n                <!-- <p-progressSpinner></p-progressSpinner> -->\r\n\r\n                <div class=\"ui-g-12 shadowPanel\">\r\n                    <p-panel header=\"Add Panel\" [style]=\"{ 'margin-bottom': '20px' }\">\r\n                        <div class=\"ui-g\">\r\n                            <div class=\"ui-g-3 ui-sm-12\">\r\n                                <!-- <span class=\"icon1\"> -->\r\n\r\n                                <button pButton type=\"image\" label=\"Add Doctor\" class=\"colorSetAllButtons\" (click)=\"doctorList()\">\r\n                <img src=\"../../assets/doctor.png\" height=\"48\" width=\"48\" />\r\n              </button>\r\n                                <!-- </span> -->\r\n                            </div>\r\n                            <div class=\"ui-g-3 ui-sm-12\">\r\n                                <button pButton type=\"button\" label=\"Add Panel\" (click)=\"panelList()\" class=\"colorSetAllButtons\">\r\n                <img src=\"../../assets/panel.png\" height=\"48\" width=\"48\" />\r\n              </button>\r\n                            </div>\r\n                            <div class=\"ui-g-3 ui-sm-12\">\r\n                                <button pButton type=\"button\" label=\"Add Lab Test\" (click)=\"addlabtest()\" class=\"colorSetAllButtons\">\r\n\r\n                <img src=\"../../assets/test.png\" height=\"48\" width=\"48\" />\r\n              </button>\r\n                            </div>\r\n                            <div class=\"ui-g-3 ui-sm-12\">\r\n                                <button pButton type=\"button\" label=\"Package\" class=\"colorSetAllButtons\" (click)=\"toPackageList()\" id=\"btnPackage\">\r\n\r\n                <img src=\"../../assets/package.png\" height=\"48\" width=\"48\" />\r\n\r\n              </button>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"ui-g\">\r\n                            <div class=\"ui-g-3 ui-sm-12\">\r\n                                <button pButton type=\"button\" label=\"Admission \" (click)=\"gotoAdmission()\" class=\"colorSetAllButtons\">\r\n                <img src=\"../../assets/admission.png\" height=\"48\" width=\"48\" />\r\n              </button>\r\n                            </div>\r\n                            <div class=\"ui-g-3 ui-sm-12\">\r\n                                <button pButton type=\"button\" label=\"Emergency Service\" (click)=\"gotoErService()\" class=\"colorSetAllButtons\">\r\n                <img src=\"../../assets/emergency.png\" height=\"48\" width=\"48\" />\r\n              </button>\r\n                            </div>\r\n                            <div class=\"ui-g-3 ui-sm-12\">\r\n                                <button pButton type=\"button\" (click)=\"addDirectory()\" label=\"Directory\" class=\"colorSetAllButtons\">\r\n                <img src=\"../../assets/diretctory.png\" />\r\n              </button>\r\n                            </div>\r\n                            <div class=\"ui-g-3 ui-sm-12\">\r\n                                <button pButton type=\"button\" label=\"CashFlow\" class=\"colorSetAllButtons\">\r\n                <img src=\"../../assets/cashflow.png\" height=\"48\" width=\"48\" />\r\n              </button>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"ui-g\">\r\n                            <div class=\"ui-lg-3 ui-sm-3 ui-md-3\"></div>\r\n                            <div class=\"ui-g-3 ui-sm-12\">\r\n                                <button pButton type=\"button\" label=\"Appointment\" class=\"colorSetAllButtons\" (click)=\"addAppointment()\">\r\n                <img src=\"../../assets/appointment.png\" height=\"48\" width=\"48\" />\r\n              </button>\r\n                            </div>\r\n                            <div class=\"ui-g-3 ui-sm-12\">\r\n                                <button pButton type=\"button\" label=\"Gyny and Obs\" class=\"colorSetAllButtons\" (click)=\"gotoGynyObsList()\">\r\n                <img src=\"../../assets/gyny.png\" height=\"48\" width=\"48\" />\r\n              </button>\r\n                            </div>\r\n                        </div>\r\n                    </p-panel>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</body>\r\n\r\n</html>"

/***/ }),

/***/ "./src/app/main-screen/main-screen.component.ts":
/*!******************************************************!*\
  !*** ./src/app/main-screen/main-screen.component.ts ***!
  \******************************************************/
/*! exports provided: MainScreenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainScreenComponent", function() { return MainScreenComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _patientservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../patientservice.service */ "./src/app/patientservice.service.ts");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Services_NavBarService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Services/NavBarService */ "./src/app/Services/NavBarService.ts");






var MainScreenComponent = /** @class */ (function () {
    function MainScreenComponent(router, patientService, mesgService, nav) {
        this.router = router;
        this.patientService = patientService;
        this.mesgService = mesgService;
        this.nav = nav;
        this.loading = false;
    }
    MainScreenComponent.prototype.ngOnInit = function () {
        this.nav.show();
    };
    MainScreenComponent.prototype.numberOnly = function (event) {
        var charCode = event.which ? event.which : event.keyCode;
        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
            return false;
        }
        return true;
    };
    MainScreenComponent.prototype.addDirectory = function () {
        this.router.navigate(['adddirectory']);
    };
    MainScreenComponent.prototype.addAppointment = function () {
        this.router.navigate(['appoinmentList']);
    };
    MainScreenComponent.prototype.check = function (mrNo) {
        var _this = this;
        this.loading = true;
        this.patientService.getPatientsByMRNO(mrNo).subscribe(function (data) {
            // tslint:disable-next-line: triple-equals
            if (data == null || mrNo == "") {
                console.log(data);
                // console.log(mrNo+"hello");
                console.log("patientDoesNoteExists");
                _this.mesgService.add({
                    severity: "error",
                    summary: "No Record Found",
                    detail: "Add a new Patient Please"
                });
                setTimeout(function () {
                    _this.router.navigate(['/patientform']);
                }, 2000);
            }
            else {
                _this.mesgService.add({
                    severity: 'success',
                    summary: 'SUCCESS',
                    detail: 'Patient Found'
                });
                console.log('patientExists');
                setTimeout(function () {
                    _this.router.navigate(['/monitor/', mrNo]);
                }, 2000);
            }
        }),
            // tslint:disable-next-line: no-unused-expression
            function (error) {
                _this.mesgService.add({
                    severity: 'error',
                    summary: 'FAILED',
                    detail: 'Please check your internet connection'
                });
            };
    };
    MainScreenComponent.prototype.onConfirm = function () {
        this.mesgService.clear("c");
    };
    MainScreenComponent.prototype.onReject = function () {
        this.mesgService.clear("c");
    };
    MainScreenComponent.prototype.doctorList = function () {
        this.router.navigate(["/doctorlist"]);
    };
    MainScreenComponent.prototype.panelList = function () {
        this.router.navigate(["/panellist"]);
    };
    MainScreenComponent.prototype.addlabtest = function () {
        this.router.navigate(["/addlabtest"]);
    };
    MainScreenComponent.prototype.gotoErService = function () {
        this.router.navigate(["/er"]);
    };
    MainScreenComponent.prototype.toPackageList = function () {
        this.router.navigate(["/packagelist"]);
    };
    MainScreenComponent.prototype.gotoAdmission = function () {
        this.router.navigate(["/admission"]);
    };
    MainScreenComponent.prototype.gotoGynyObsList = function () {
        this.router.navigate(["/gynObsList"]);
    };
    MainScreenComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-main-screen',
            template: __webpack_require__(/*! ./main-screen.component.html */ "./src/app/main-screen/main-screen.component.html"),
            styles: [__webpack_require__(/*! ./main-screen.component.css */ "./src/app/main-screen/main-screen.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _patientservice_service__WEBPACK_IMPORTED_MODULE_3__["PatientserviceService"],
            primeng_api__WEBPACK_IMPORTED_MODULE_4__["MessageService"],
            _Services_NavBarService__WEBPACK_IMPORTED_MODULE_5__["NavBarService"]])
    ], MainScreenComponent);
    return MainScreenComponent;
}());



/***/ }),

/***/ "./src/app/main-screen/mr-component/mr-component.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/main-screen/mr-component/mr-component.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4tc2NyZWVuL21yLWNvbXBvbmVudC9tci1jb21wb25lbnQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/main-screen/mr-component/mr-component.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/main-screen/mr-component/mr-component.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"container\">\r\n  <p-card\r\n    header=\"\"\r\n    [style]=\"{\r\n      width: '100%',\r\n      'margin-top': '5px',\r\n      color: '#3EB650',\r\n      'text-align': 'left',\r\n      height: '30% !important'\r\n    }\"\r\n  >\r\n    <h3>PATIENT LOOKUP</h3>\r\n    <hr />\r\n    <h4>Patient Mr</h4>\r\n    <div class=\"ui-g \">\r\n      <div class=\" ui-md- 6\" style=\"margin-bottom:2px; margin-right:4px; \">\r\n        <input\r\n\r\n          type=\"text\"\r\n          (keypress)=\"numberOnly($event)\"\r\n          ng-model=\"maxvalue\"\r\n          required\r\n          size=\"43%\"\r\n          pInputText\r\n          placeholder=\"Enter MR-NO\"\r\n          #mrNo=\"ngModel\"\r\n          ngModel\r\n        />\r\n        <div\r\n          [hidden]=\"mrNo.valid || mrNo.pristine\"\r\n          class=\"alert alert-danger\"\r\n          style=\"padding:0px;margin-bottom:0% \"\r\n        >\r\n          REQUIRED\r\n        </div>\r\n      </div>\r\n      <div class=\" ui-md- 6 \" style=\"margin-bottom:15px;\">\r\n        <app-searchbar> </app-searchbar>\r\n      </div>\r\n      <br />\r\n    </div>\r\n\r\n    <div class=\" ui-md- 6 \" style=\"margin-bottom:5px;\" >\r\n   <app-searchbar > </app-searchbar>\r\n   </div>\r\n  <br>\r\n\r\n\r\n    <div class= \"ui-g ui-fluid\">\r\n\r\n      <div class=\" ui-md-1 \">\r\n        <button\r\n          pButton\r\n          type=\"button\"\r\n          label=\"OK\"\r\n          (click)=\"check(mrNo.value)\"\r\n          class=\"ui-button-raised ui-button-success\"\r\n        ></button>\r\n        <!-- <p-toast position=\"center\" key=\"c\" (onClose)=\"onReject()\" [modal]=\"true\" [baseZIndex]=\"5000\">\r\n            <ng-template let-message pTemplate=\"message\">\r\n                <div style=\"text-align: center\">\r\n                    <i class=\"pi pi-exclamation-triangle\" style=\"font-size: 3em\"></i>\r\n                </div>\r\n                <div class=\"ui-g ui-fluid\">\r\n                    <div class=\"ui-g-6\">\r\n                        <button type=\"button\" pButton (click)=\"onConfirm()\" label=\"Yes\" class=\"ui-button-success\"></button>\r\n                    </div>\r\n                    <div class=\"ui-g-6\">\r\n                        <button type=\"button\" pButton (click)=\"onReject()\" label=\"No\" class=\"ui-button-secondary\"></button>\r\n                    </div>\r\n                </div>\r\n            </ng-template>\r\n        </p-toast> -->\r\n        <p-toast [style]=\"{ marginTop: '40px'}\" position=\"top-right\" life='3000'>\r\n        </p-toast>\r\n      </div>\r\n    </div>\r\n  </p-card>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/main-screen/mr-component/mr-component.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/main-screen/mr-component/mr-component.component.ts ***!
  \********************************************************************/
/*! exports provided: MrComponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MrComponentComponent", function() { return MrComponentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_patientservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/patientservice.service */ "./src/app/patientservice.service.ts");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_4__);





var MrComponentComponent = /** @class */ (function () {
    function MrComponentComponent(router, patientService, mesgService) {
        this.router = router;
        this.patientService = patientService;
        this.mesgService = mesgService;
    }
    MrComponentComponent.prototype.ngOnInit = function () { };
    MrComponentComponent.prototype.numberOnly = function (event) {
        var charCode = event.which ? event.which : event.keyCode;
        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
            return false;
        }
        return true;
    };
    MrComponentComponent.prototype.check = function (mrNo) {
        var _this = this;
        this.patientService.getPatientsByMRNO(mrNo).subscribe(function (data) {
            // tslint:disable-next-line: triple-equals
            if (data == null || mrNo == '') {
                console.log(data);
                // console.log(mrNo+"hello");
                console.log('patientDoesNoteExists');
                _this.mesgService.add({
                    severity: 'error',
                    summary: 'No Record Found',
                    detail: 'Add a new Patient Please'
                });
                setTimeout(function () {
                    _this.router.navigate(['/patientform']);
                }, 3000);
            }
            else {
                //  console.log(mrNo+"hello");
                _this.mesgService.add({
                    severity: 'success',
                    summary: 'SUCCESS',
                    detail: 'Patient Found'
                });
                console.log('patientExists');
                _this.router.navigate(['/patient']);
            }
        }),
            function (error) {
                _this.mesgService.add({
                    severity: 'error',
                    summary: 'FAILED',
                    detail: 'Please check your internet connection'
                });
            };
    };
    MrComponentComponent.prototype.onConfirm = function () {
        this.mesgService.clear('c');
    };
    MrComponentComponent.prototype.onReject = function () {
        this.mesgService.clear('c');
    };
    MrComponentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-mr-component',
            template: __webpack_require__(/*! ./mr-component.component.html */ "./src/app/main-screen/mr-component/mr-component.component.html"),
            styles: [__webpack_require__(/*! ./mr-component.component.css */ "./src/app/main-screen/mr-component/mr-component.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            src_app_patientservice_service__WEBPACK_IMPORTED_MODULE_3__["PatientserviceService"],
            primeng_api__WEBPACK_IMPORTED_MODULE_4__["MessageService"]])
    ], MrComponentComponent);
    return MrComponentComponent;
}());



/***/ }),

/***/ "./src/app/modal/modal.component.css":
/*!*******************************************!*\
  !*** ./src/app/modal/modal.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZGFsL21vZGFsLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/modal/modal.component.html":
/*!********************************************!*\
  !*** ./src/app/modal/modal.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal fade\" id=\"myModal\" role=\"dialog\">\r\n  <div class=\"modal-dialog\">\r\n  \r\n    <!-- Modal content-->\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n        <h4 class=\"modal-title\">patient list </h4>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        \r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\r\n      </div>\r\n    </div>\r\n    \r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/modal/modal.component.ts":
/*!******************************************!*\
  !*** ./src/app/modal/modal.component.ts ***!
  \******************************************/
/*! exports provided: ModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return ModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ModalComponent = /** @class */ (function () {
    function ModalComponent() {
    }
    ModalComponent.prototype.ngOnInit = function () {
    };
    ModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-modal',
            template: __webpack_require__(/*! ./modal.component.html */ "./src/app/modal/modal.component.html"),
            styles: [__webpack_require__(/*! ./modal.component.css */ "./src/app/modal/modal.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ModalComponent);
    return ModalComponent;
}());



/***/ }),

/***/ "./src/app/monitor-screen/monitor-screen.component.css":
/*!*************************************************************!*\
  !*** ./src/app/monitor-screen/monitor-screen.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".backgroundImage {\r\n    background: url('back.jpg');\r\n    background-size: cover;\r\n    background-repeat: repeat-y;\r\n    height: 94vh;\r\n    /* overflow: hidden; */\r\n    width: 100%;\r\n    background-position: center;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9uaXRvci1zY3JlZW4vbW9uaXRvci1zY3JlZW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDJCQUF3QztJQUN4QyxzQkFBc0I7SUFDdEIsMkJBQTJCO0lBQzNCLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsV0FBVztJQUNYLDJCQUEyQjtBQUMvQiIsImZpbGUiOiJzcmMvYXBwL21vbml0b3Itc2NyZWVuL21vbml0b3Itc2NyZWVuLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFja2dyb3VuZEltYWdlIHtcclxuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vYXNzZXRzL2JhY2suanBnJyk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC15O1xyXG4gICAgaGVpZ2h0OiA5NHZoO1xyXG4gICAgLyogb3ZlcmZsb3c6IGhpZGRlbjsgKi9cclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/monitor-screen/monitor-screen.component.html":
/*!**************************************************************!*\
  !*** ./src/app/monitor-screen/monitor-screen.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g \">\r\n    <div class=\"ui-g-12\">\r\n        <app-patient-monitor></app-patient-monitor>\r\n    </div>\r\n    <div class=\"ui-g-12\">\r\n        <app-patient-panel></app-patient-panel>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/monitor-screen/monitor-screen.component.ts":
/*!************************************************************!*\
  !*** ./src/app/monitor-screen/monitor-screen.component.ts ***!
  \************************************************************/
/*! exports provided: MonitorScreenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MonitorScreenComponent", function() { return MonitorScreenComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MonitorScreenComponent = /** @class */ (function () {
    function MonitorScreenComponent() {
    }
    MonitorScreenComponent.prototype.ngOnInit = function () {
    };
    MonitorScreenComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-monitor-screen',
            template: __webpack_require__(/*! ./monitor-screen.component.html */ "./src/app/monitor-screen/monitor-screen.component.html"),
            styles: [__webpack_require__(/*! ./monitor-screen.component.css */ "./src/app/monitor-screen/monitor-screen.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MonitorScreenComponent);
    return MonitorScreenComponent;
}());



/***/ }),

/***/ "./src/app/monitor-screen/patient-monitor/patient-monitor.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/monitor-screen/patient-monitor/patient-monitor.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vbml0b3Itc2NyZWVuL3BhdGllbnQtbW9uaXRvci9wYXRpZW50LW1vbml0b3IuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/monitor-screen/patient-monitor/patient-monitor.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/monitor-screen/patient-monitor/patient-monitor.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p-toast></p-toast>\r\n\r\n<button pButton type=\"button\" class=\"backBtnStyle\" style=\"margin-left:1%; margin-bottom: 1%; height:30px; width: 30%\" (click)=\"backToMain()\" label=\"Back\">\r\n\r\n</button>\r\n<p-panel header=\"Patient Data\">\r\n    <div class=\"ui-g\">\r\n        <div class=\"ui-lg-3 ui-md-3 ui-sm-12\">\r\n            <div id=\"img\">\r\n\r\n                <img style=\"height:220px;margin-left:15%;width:70%;padding:5px;border:1px solid black\" [src]=\"image || '../../assets/patient.jpg'\" alt=\"icon\">\r\n\r\n            </div>\r\n            <!-- https://cdn5.vectorstock.com/i/1000x1000/23/54/user-icon-man-human-profile-avatar-vector-10552354.jpg -->\r\n        </div>\r\n        <div class=\"ui-lg-9 ui-md-9 ui-sm-12\">\r\n            <p-card [ngStyle]=\"{ width: '100%' }\">\r\n                <div [hidden]=\"!isLoading\">\r\n                    <div class=\"ui-g\">\r\n                        <div class=\"ui-lg-12 ui-md-12 ui-sm-12\">\r\n                            <p-progressSpinner [ngStyle]=\"{ marginLeft: '40%' }\"></p-progressSpinner>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div [hidden]=\"isLoading\">\r\n                    <div class=\"ui-g\">\r\n                        <div class=\"ui-lg-4 ui-md-4 ui-sm-12\">\r\n                            <div class=\"ui-lg-12 ui-md-12 ui-sm-12\">\r\n                                <label style=\"color:rgb(127, 128, 126)\">Patient ID: <span style=\"color:rgb(17, 17, 17)\">{{ id }}</span></label\r\n                >\r\n              </div>\r\n              <div class=\"ui-lg-12 ui-md-12 ui-sm-12\">\r\n                <label style=\"color:rgb(127, 128, 126)\"\r\n                  >Patient Name: <span style=\"color:rgb(17, 17, 17)\">{{ name }}</span></label\r\n                >\r\n              </div>\r\n              <div class=\"ui-lg-12 ui-md-12 ui-sm-12\">\r\n                <label style=\"color:rgb(127, 128, 126)\"\r\n                  >Phone Number: <span style=\"color:rgb(17, 17, 17)\">{{ number }}</span>\r\n                </label>\r\n                            </div>\r\n\r\n\r\n                            <div class=\"ui-lg-12 ui-md-12 ui-sm-12\">\r\n                                <label style=\"color:rgb(127, 128, 126)\">Date:\r\n                  <span style=\"color:rgb(17, 17, 17)\">{{ date | date: 'short' }}</span></label\r\n\r\n                >\r\n              </div>\r\n              <div *ngIf=\"registration\">\r\n                <div class=\"ui-lg-12 ui-md-12 ui-sm-12\">\r\n                  <label style=\"color:rgb(127, 128, 126)\"\r\n                    >Registration:\r\n                    <span style=\"color:rgb(17, 17, 17)\">{{ gynAndObsRegistration }}</span></label\r\n                  >\r\n                </div>\r\n                <div class=\"ui-lg-12 ui-md-12 ui-sm-12\">\r\n                  <label style=\"color:rgb(127, 128, 126)\"\r\n                    >Registration Date:\r\n                    <span style=\"color:rgb(17, 17, 17)\">{{ registrationDate }}</span></label\r\n                  >\r\n                </div>\r\n                <div class=\"ui-lg-12 ui-md-12 ui-sm-12\">\r\n                  <label style=\"color:rgb(127, 128, 126)\"\r\n                    >Husband/Father Name:\r\n                    <span style=\"color:rgb(17, 17, 17)\">{{ husbandOfAndFatherOf }}</span></label\r\n                  >\r\n                </div>\r\n              </div>\r\n              <div *ngIf=\"admitLabel\">\r\n                <div class=\"ui-lg-12 ui-md-12 ui-sm-12\">\r\n                  <label style=\"color:rgb(127, 128, 126)\"\r\n                    >Admit:\r\n                    <span style=\"color:rgb(17, 17, 17)\">{{ admitLabel }}</span></label\r\n                  >\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"ui-lg-4 ui-md-4 ui-sm-12\">\r\n              <p-card>\r\n                <div class=\"ui-md-12 ui-lg-12  ui-sm-12\">\r\n                  <label style=\"color:rgb(127, 128, 126)\"\r\n                    >Patient Package:\r\n                    <span style=\"color:rgb(17, 17, 17)\">{{ package }}</span></label\r\n                  >\r\n                </div>\r\n                <div class=\"ui-md-12 ui-lg-12 ui-sm-12\">\r\n                  <label style=\"color:rgb(127, 128, 126)\"\r\n                    >OPD: <span style=\"color:rgb(17, 17, 17)\">{{ opd }}</span></label\r\n                  >\r\n                </div>\r\n                <div class=\"ui-md-12 ui-lg-12 ui-sm-12\">\r\n                  <label style=\"color:rgb(127, 128, 126)\"\r\n                    >Lab: <span style=\"color:rgb(17, 17, 17)\">{{ lab }}</span></label\r\n                  >\r\n                </div>\r\n                <div class=\"ui-md-12 ui-lg-12 ui-sm-12\">\r\n                  <label style=\"color:rgb(127, 128, 126)\"\r\n                    >Admit: <span style=\"color:rgb(17, 17, 17)\">{{ admit }}</span></label\r\n                  >\r\n                </div>\r\n                <div class=\"ui-md-12 ui-lg-12 ui-sm-12\">\r\n                  <label style=\"color:rgb(127, 128, 126)\"\r\n                    >Obs: <span style=\"color:rgb(17, 17, 17)\">{{ obs }}</span></label\r\n                  >\r\n                </div>\r\n              </p-card>\r\n            </div>\r\n\r\n            <div class=\"ui-lg-4 ui-md-4 ui-sm-12\">\r\n              <p-card [ngStyle]=\"{ width: '100%' }\">\r\n                <div class=\"ui-md-12 ui-lg-12 ui-sm-12\">\r\n                  <label style=\"color:rgb(127, 128, 126)\">\r\n                    Dues: <span style=\"color:rgb(17, 17, 17)\">{{ dues }}</span>\r\n                  </label>\r\n                            </div>\r\n                            <div class=\"ui-md-12 ui-lg-12 ui-sm-12\">\r\n                                <label style=\"color:rgb(127, 128, 126)\">ER: <span style=\"color:rgb(17, 17, 17)\">{{ er }}</span></label\r\n                  >\r\n                </div>\r\n\r\n                <div class=\"ui-md-12 ui-lg-12 ui-sm-12\">\r\n                  <label style=\"color:rgb(127, 128, 126)\"\r\n                    >Gyne: <span style=\"color:rgb(17, 17, 17)\">{{ gyne }}</span></label\r\n                  >\r\n                </div>\r\n\r\n                <div class=\"ui-md-12 ui-lg-12 ui-sm-12\">\r\n                  <label style=\"color:rgb(127, 128, 126)\">\r\n                    Total <span style=\"color:rgb(17, 17, 17)\">{{ total }}</span></label\r\n                  >\r\n                </div>\r\n              </p-card>\r\n              <div class=\"ui-md-12 ui-lg-12 ui-sm-12\">\r\n                <button\r\n                  class=\"ui-button-danger\"\r\n                  pButton\r\n                  type=\"button\"\r\n                  label=\"DISCHARGE\"\r\n                  (click)=\"dischargePatient()\"\r\n                  style=\"margin-top:20px;\"\r\n                ></button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </p-card>\r\n    </div>\r\n  </div>\r\n</p-panel>"

/***/ }),

/***/ "./src/app/monitor-screen/patient-monitor/patient-monitor.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/monitor-screen/patient-monitor/patient-monitor.component.ts ***!
  \*****************************************************************************/
/*! exports provided: PatientMonitorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientMonitorComponent", function() { return PatientMonitorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_monitor_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/monitor.service */ "./src/app/services/monitor.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_patient_transaction_history_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/patient-transaction-history.service */ "./src/app/services/patient-transaction-history.service.ts");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");








var PatientMonitorComponent = /** @class */ (function () {
    function PatientMonitorComponent(patient, messageService, historyService, route, activateRoute, _location, router) {
        this.patient = patient;
        this.messageService = messageService;
        this.historyService = historyService;
        this.route = route;
        this.activateRoute = activateRoute;
        this._location = _location;
        this.router = router;
        this.registration = false;
    }
    PatientMonitorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isLoading = true;
        console.log('hello');
        var id = this.activateRoute.snapshot.params.id;
        this.patient.getPatientMonitor(id).subscribe(function (response) {
            if (response.id == id) {
                _this.isLoading = false;
                console.log(response);
                _this.id = response.id;
                _this.name = response.name;
                _this.number = response.number;
                _this.gynAndObsRegistration = response.gynAndObsRegistration || 'Not registered';
                _this.date = new Date(response.date).toLocaleString();
                _this.opd = response.opd;
                _this.lab = response.lab;
                _this.image = response.image;
                _this.er = response.er;
                _this.dues = response.dues;
                _this.package = response.package || 'No';
                _this.total = response.total;
                _this.registrationDate = new Date(response.registrationDate).toDateString();
                _this.husbandOfAndFatherOf = response.husbandOfAndFatherOf || 'None';
                _this.registration = response.gynAndObsRegistration;
                _this.admit = response.admit;
                _this.gyne = response.gyne;
                _this.obs = response.obs;
                _this.admitLabel = response.admitLabel;
            }
            else {
                _this.route.navigate(['/mainscreen']);
            }
        }, function (error) {
            _this.isLoading = false;
            console.log(error);
        });
    };
    PatientMonitorComponent.prototype.backToMain = function () {
        this.router.navigate(['/mainscreen/']);
    };
    PatientMonitorComponent.prototype.dischargePatient = function () {
        var _this = this;
        var id = this.activateRoute.snapshot.params.id;
        this.historyService.addPatientTransactionHistory(id).subscribe(function (success) {
            console.log(success);
            _this.messageService.add({ severity: 'success', summary: 'Service Message', detail: 'Patient Discharge Succesful!' });
        }, function (error) {
            console.log(error);
            _this.messageService.add({ severity: 'error', summary: 'Service Message', detail: 'Something went wrong!' });
        });
    };
    PatientMonitorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-patient-monitor',
            template: __webpack_require__(/*! ./patient-monitor.component.html */ "./src/app/monitor-screen/patient-monitor/patient-monitor.component.html"),
            styles: [__webpack_require__(/*! ./patient-monitor.component.css */ "./src/app/monitor-screen/patient-monitor/patient-monitor.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_monitor_service__WEBPACK_IMPORTED_MODULE_2__["MonitorService"], primeng_api__WEBPACK_IMPORTED_MODULE_5__["MessageService"], _services_patient_transaction_history_service__WEBPACK_IMPORTED_MODULE_4__["PatientTransactionHistoryService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], PatientMonitorComponent);
    return PatientMonitorComponent;
}());



/***/ }),

/***/ "./src/app/monitor-screen/patient-panel/patient-panel.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/monitor-screen/patient-panel/patient-panel.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vbml0b3Itc2NyZWVuL3BhdGllbnQtcGFuZWwvcGF0aWVudC1wYW5lbC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/monitor-screen/patient-panel/patient-panel.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/monitor-screen/patient-panel/patient-panel.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p-panel header=\"Patient Panel\">\r\n    <div class=\"ui-g\">\r\n        <div style=\"padding:2px;\" class=\"ui-g-3 ui-sm-12\">\r\n\r\n            <button pButton style=\"width:100%;\" type=\"button\" label=\"OPD\" (click)=\"goToOPD()\" class=\"colorSetAllButtons\">\r\n        <img style=\"height:40px\" src=\"../../../assets/opd.png\" />\r\n      </button>\r\n        </div>\r\n        <div style=\"padding:2px;\" class=\"ui-g-3 ui-sm-12\">\r\n            <button pButton style=\"width:100%;\" type=\"button\" label=\"ER\" class=\"colorSetAllButtons\" (click)=\"gotoEr()\">\r\n        <img style=\"height:40px\" src=\"../../../assets/panel.png\" />\r\n\r\n      </button>\r\n        </div>\r\n        <div style=\"padding:2px;\" class=\"ui-g-3 ui-sm-12\">\r\n            <button pButton style=\"width:100%;\" type=\"button\" (click)=\"goTolab()\" label=\"Lab\" class=\"colorSetAllButtons\">\r\n        <img style=\"height:40px\" src=\"../../../assets/test.png\" />\r\n      </button>\r\n        </div>\r\n        <div style=\"padding:2px;\" class=\"ui-g-3 ui-sm-12\">\r\n            <button pButton style=\"width:100%;\" type=\"button\" label=\"Gyny\" (click)=\"gotoGyny()\" class=\"colorSetAllButtons\">\r\n\r\n        <img style=\"height:40px\" src=\"../../../assets/gyny.png\" />\r\n      </button>\r\n\r\n\r\n        </div>\r\n        <div style=\"padding:2px;\" class=\"ui-g-3 ui-sm-12\">\r\n            <!-- Beds -->\r\n            <button pButton style=\"width:100%;\" type=\"button\" label=\"Admit\" class=\"colorSetAllButtons\" (click)=\"gotoAdmit()\">\r\n        <img style=\"height:40px\" src=\"../../../assets/admit.png\" />\r\n      </button>\r\n        </div>\r\n\r\n        <div style=\"padding:2px;\" class=\"ui-g-3 ui-sm-12\">\r\n\r\n            <button pButton style=\"width:100%;\" type=\"button\" label=\"Obs\" (click)=\"gotoOBS()\" class=\"colorSetAllButtons\">\r\n        <img style=\"height:40px\" src=\"../../../assets/obs.png\" />\r\n\r\n      </button>\r\n        </div>\r\n        <div style=\"padding:2px;\" class=\"ui-g-3 ui-sm-12\">\r\n            <button pButton style=\"width:100%;\" type=\"button\" label=\"Report\" class=\"colorSetAllButtons\">\r\n        <img style=\"height:40px\" src=\"../../../assets/report.png\" />\r\n      </button>\r\n        </div>\r\n        <div style=\"padding:2px;\" class=\"ui-g-3 ui-sm-12\">\r\n            <button pButton style=\"width:100%;\" (click)=\"gotoHistory()\" type=\"button\" label=\"History\" class=\"colorSetAllButtons\">\r\n        <img style=\"height:40px\" src=\"../../../assets/history.png\" />\r\n      </button>\r\n        </div>\r\n        <div style=\"padding:2px;\" class=\"ui-g-12 ui-md-offset-4 ui-md-4  ui-lg-offset-4 ui-lg-4\">\r\n\r\n            <button pButton style=\"width:100%;\" type=\"button\" label=\"Patient Transactions\" class=\"colorSetAllButtons\" (click)=\"goToPatientTransactions()\">\r\n        <img style=\"height:40px\" src=\"../../../assets/services.png\" />\r\n      </button>\r\n\r\n\r\n        </div>\r\n    </div>\r\n</p-panel>"

/***/ }),

/***/ "./src/app/monitor-screen/patient-panel/patient-panel.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/monitor-screen/patient-panel/patient-panel.component.ts ***!
  \*************************************************************************/
/*! exports provided: PatientPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientPanelComponent", function() { return PatientPanelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var PatientPanelComponent = /** @class */ (function () {
    function PatientPanelComponent(router, activatedRout) {
        this.router = router;
        this.activatedRout = activatedRout;
    }
    PatientPanelComponent.prototype.ngOnInit = function () { };
    PatientPanelComponent.prototype.opdEr = function () { };
    PatientPanelComponent.prototype.gotoEr = function () {
        var id = this.activatedRout.snapshot.params['id'];
        this.router.navigate(['/opdEmergency/' + id]);
    };
    PatientPanelComponent.prototype.goToOPD = function () {
        var id = this.activatedRout.snapshot.params['id'];
        this.router.navigate(['/opdconsultancy/' + id]);
    };
    PatientPanelComponent.prototype.gotoOBS = function () {
        var id = this.activatedRout.snapshot.params['id'];
        this.router.navigate(['/patientobservation/' + id]);
    };
    PatientPanelComponent.prototype.gotoGyny = function () {
        var id = this.activatedRout.snapshot.params['id'];
        this.router.navigate(['/opdGyny/' + id]);
    };
    PatientPanelComponent.prototype.gotoHistory = function () {
        var id = this.activatedRout.snapshot.params['id'];
        this.router.navigate(['/history/' + id]);
    };
    PatientPanelComponent.prototype.goTolab = function () {
        var id = this.activatedRout.snapshot.params['id'];
        this.router.navigate(['opdlabtest/' + id]);
    };
    PatientPanelComponent.prototype.goToPatientTransactions = function () {
        var id = this.activatedRout.snapshot.params['id'];
        this.router.navigate(['patienttransactions/' + id]);
    };
    PatientPanelComponent.prototype.gotoAdmit = function () {
        var id = this.activatedRout.snapshot.params['id'];
        this.router.navigate(['/patientadmit/' + id]);
    };
    PatientPanelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-patient-panel',
            template: __webpack_require__(/*! ./patient-panel.component.html */ "./src/app/monitor-screen/patient-panel/patient-panel.component.html"),
            styles: [__webpack_require__(/*! ./patient-panel.component.css */ "./src/app/monitor-screen/patient-panel/patient-panel.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], PatientPanelComponent);
    return PatientPanelComponent;
}());



/***/ }),

/***/ "./src/app/monitorquickview/monitorquickview.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/monitorquickview/monitorquickview.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vbml0b3JxdWlja3ZpZXcvbW9uaXRvcnF1aWNrdmlldy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/monitorquickview/monitorquickview.component.html":
/*!******************************************************************!*\
  !*** ./src/app/monitorquickview/monitorquickview.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br />\r\n<p-card [style]=\"{\r\n    width: '90%',\r\n    marginLeft:'5%',\r\n    'font-size': '16px',\r\n    'text-align': 'center',\r\n    color: 'green',\r\n    'line-height': '0px'\r\n  }\">\r\n  <div class=\"ui-g ui-fluid\">\r\n    <div [hidden]=\"!isLoading\">\r\n      <div class=\"ui-g\">\r\n        <div  class=\"ui-lg-12 ui-md-3 ui-sm-12\">\r\n          <div [ngStyle]=\"{ marginLeft: '40%' }\">\r\n          <p-progressSpinner ></p-progressSpinner>\r\n        </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div [hidden]=\"isLoading\" style=\"width:100%;\">\r\n      <div class=\"ui-g\">\r\n        <div class=\"ui-lg-3 ui-md-6 ui-sm-12\">\r\n          \r\n          <label style=\"color:rgb(127, 128, 126)\">Patient ID:\r\n            <span style=\"color:rgb(17, 17, 17)\"> {{ id }}</span></label>\r\n         \r\n        </div>\r\n        <div class=\"ui-lg-3 ui-md-6 ui-sm-12\">\r\n         \r\n          <label style=\"color:rgb(127, 128, 126)\">Patient Name:\r\n            <span style=\"color:rgb(17, 17, 17)\"> {{ name | titlecase  }}</span></label>\r\n            \r\n        </div>\r\n        <div class=\"ui-lg-3 ui-md-6 ui-sm-12\">\r\n         \r\n          <label style=\"color:rgb(127, 128, 126)\">Phone Number: <span style=\"color:rgb(17, 17, 17)\"> {{ number }}</span>\r\n          </label>\r\n        \r\n        </div>\r\n        <div class=\"ui-lg-3 ui-md-6 ui-sm-12\">\r\n          \r\n          <label style=\"color:rgb(127, 128, 126)\">Registration: </label>\r\n          <span style=\"color:rgb(17, 17, 17);\">{{ registration }}</span>\r\n          \r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</p-card>"

/***/ }),

/***/ "./src/app/monitorquickview/monitorquickview.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/monitorquickview/monitorquickview.component.ts ***!
  \****************************************************************/
/*! exports provided: MonitorquickviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MonitorquickviewComponent", function() { return MonitorquickviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_monitor_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/monitor.service */ "./src/app/services/monitor.service.ts");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_patient_transaction_history_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/patient-transaction-history.service */ "./src/app/services/patient-transaction-history.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var MonitorquickviewComponent = /** @class */ (function () {
    function MonitorquickviewComponent(patient, messageService, historyService, route, activateRoute) {
        this.patient = patient;
        this.messageService = messageService;
        this.historyService = historyService;
        this.route = route;
        this.activateRoute = activateRoute;
    }
    MonitorquickviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isLoading = true;
        console.log("hello");
        var id = this.activateRoute.snapshot.params['id'];
        this.patient.getPatientMonitor(id).subscribe(function (response) {
            if (response.id) {
                _this.isLoading = false;
                console.log("yeh raha responcee", response);
                _this.id = response.id;
                _this.name = response.name;
                _this.number = response.number;
                if (response.registrationDate != null)
                    _this.registration = "yes";
                else
                    _this.registration = "No";
            }
            else {
                _this.route.navigate(['/mainscreen']);
            }
        }, function (error) {
            _this.isLoading = false;
            console.log(error);
        });
    };
    MonitorquickviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-monitorquickview',
            template: __webpack_require__(/*! ./monitorquickview.component.html */ "./src/app/monitorquickview/monitorquickview.component.html"),
            styles: [__webpack_require__(/*! ./monitorquickview.component.css */ "./src/app/monitorquickview/monitorquickview.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_monitor_service__WEBPACK_IMPORTED_MODULE_2__["MonitorService"], primeng_api__WEBPACK_IMPORTED_MODULE_3__["MessageService"], _services_patient_transaction_history_service__WEBPACK_IMPORTED_MODULE_4__["PatientTransactionHistoryService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])
    ], MonitorquickviewComponent);
    return MonitorquickviewComponent;
}());



/***/ }),

/***/ "./src/app/nav-bar/nav-bar.component.css":
/*!***********************************************!*\
  !*** ./src/app/nav-bar/nav-bar.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nav li {\r\n    padding: 0px;\r\n    display: inline;\r\n    color: white;\r\n    font-weight: bold;\r\n}\r\n\r\n.navbar-nav {\r\n    /* display: flex; */\r\n    flex-direction: row;\r\n}\r\n\r\n.navbarCss {\r\n    background-color: #479761 !important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2LWJhci9uYXYtYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osZUFBZTtJQUNmLFlBQVk7SUFDWixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksb0NBQW9DO0FBQ3hDIiwiZmlsZSI6InNyYy9hcHAvbmF2LWJhci9uYXYtYmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2IGxpIHtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIGRpc3BsYXk6IGlubGluZTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4ubmF2YmFyLW5hdiB7XHJcbiAgICAvKiBkaXNwbGF5OiBmbGV4OyAqL1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxufVxyXG5cclxuLm5hdmJhckNzcyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDc5NzYxICFpbXBvcnRhbnQ7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/nav-bar/nav-bar.component.html":
/*!************************************************!*\
  !*** ./src/app/nav-bar/nav-bar.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbarCss\" style=\"padding:0px;\">\r\n    <div class=\"container-fluid\" style=\"background-color:#479761\">\r\n        <div class=\"navbar-header\">\r\n            <a class=\"navbar-brand\" style=\"color:white;font-weight: bold\" href=\"#\">BARKHIA HOSPITAL</a>\r\n        </div>\r\n        <ul class=\"nav navbar-nav navbar-right\">\r\n            <a class=\"navbar-brand\" href=\"mainscreen\" routerLink=\"mainscreen\" routerLinkActive=\"active\">\r\n                <li>Main Screen</li>\r\n            </a>\r\n            <a class=\"navbar-brand\" href=\"#\">\r\n                <li>log out</li>\r\n            </a>\r\n        </ul>\r\n\r\n    </div>\r\n</nav>\r\n"

/***/ }),

/***/ "./src/app/nav-bar/nav-bar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/nav-bar/nav-bar.component.ts ***!
  \**********************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavBarComponent = /** @class */ (function () {
    function NavBarComponent() {
    }
    NavBarComponent.prototype.ngOnInit = function () {
    };
    NavBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nav-bar',
            template: __webpack_require__(/*! ./nav-bar.component.html */ "./src/app/nav-bar/nav-bar.component.html"),
            styles: [__webpack_require__(/*! ./nav-bar.component.css */ "./src/app/nav-bar/nav-bar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavBarComponent);
    return NavBarComponent;
}());



/***/ }),

/***/ "./src/app/opd-emergency/Emergency.ts":
/*!********************************************!*\
  !*** ./src/app/opd-emergency/Emergency.ts ***!
  \********************************************/
/*! exports provided: _EmergencyClass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_EmergencyClass", function() { return _EmergencyClass; });
var _EmergencyClass = /** @class */ (function () {
    function _EmergencyClass() {
    }
    return _EmergencyClass;
}());



/***/ }),

/***/ "./src/app/opd-emergency/opd-emergency.component.css":
/*!***********************************************************!*\
  !*** ./src/app/opd-emergency/opd-emergency.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29wZC1lbWVyZ2VuY3kvb3BkLWVtZXJnZW5jeS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/opd-emergency/opd-emergency.component.html":
/*!************************************************************!*\
  !*** ./src/app/opd-emergency/opd-emergency.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"container\"> -->\r\n<p-toast></p-toast>\r\n\r\n<div class=\"ui-g-12\">\r\n    <div class=\"ui-lg-5 ui-md-5 ui-sm-12\">\r\n        <button type=\"button\" class=\" backBtnStyle\" (click)=\"back()\" style=\"width:45%;margin-left:30%;padding:4px\">Back</button>\r\n    </div>\r\n</div>\r\n<div class=\"ui-g-12\">\r\n    <app-monitorquickview> </app-monitorquickview>\r\n</div>\r\n<div id=\"print-section\" [hidden]=true>\r\n    <!-- <div *ngIf=\"addEmergency.name !== undefined\"> -->\r\n\r\n    <h1 style=\"text-align: center; color:green;font-weight:bold;\">OPD EMERGENCY RECEIPT</h1>\r\n    <hr style=\"border: 2px solid black;\">\r\n    <div class=\"ui-g\">\r\n\r\n        <p style=\"font-size: 20px;\"> <b style=\"font-size: 20px;\"> MR No: </b> {{patientMrNo}}</p>\r\n        <p style=\"font-size: 20px;\"><b style=\"font-size: 20px;\"> Name: </b> {{patientName}}</p>\r\n        <p style=\"font-size: 20px;\"><b style=\"font-size: 20px;\"> Date: </b> {{date | date :'short'}}</p>\r\n\r\n\r\n       \r\n\r\n\r\n\r\n    <div>\r\n      <span style=\"font-weight:bold;\">Facility</span><span style=\"font-weight:bold;float: right;\">Price</span>\r\n      <hr style=\"border: 1px solid black;width:100%;\" />\r\n      <div *ngFor=\"let facility of facilitiesArray\">\r\n        <span>{{facility.name}}</span>\r\n        <span style=\"float: right;\">{{facility.price}}</span>\r\n        <hr style=\"width:100%;\" />\r\n      </div>\r\n      <div>\r\n        <span><b> Discount: </b> <span style=\"float: right;\"> {{addEmergency.discount}}</span></span>\r\n\r\n\r\n                <hr style=\"border:1px solid black;width:100%;\" />\r\n                <span><b> Total: </b> <span style=\"float:right;\">{{addEmergency.total}}</span></span>\r\n                <hr style=\"border:1px solid black;width:100%;\" />\r\n\r\n            \r\n        </div>\r\n\r\n\r\n\r\n\r\n\r\n    </div>\r\n\r\n\r\n</div>\r\n</div>\r\n\r\n\r\n\r\n<div style=\"margin-top:40px;\" [hidden]=\"!hidder\">\r\n    <p-card>\r\n\r\n        <p style=\"margin:20px;display:block;text-align: center;\">No Facility Added,Please add a facility</p>\r\n        <button style=\"width:40%;margin-left:30%\" pButton type=\"button\" label=\"Add new Faciity\" (click)=\"routeToEr()\" class=\"ui-button-success\"></button>\r\n\r\n    </p-card>\r\n</div>\r\n<div [hidden]=\"!show\" class=\"ui-g-12\">\r\n\r\n    <p-card header=\"OPD EMERGENCY SERVICE\" [style]=\"{\r\n        width: '100%',\r\n        'font-size': '26px',\r\n\r\n        'text-align': 'center',\r\n        color: 'green'\r\n\t  }\">\r\n\r\n\r\n\r\n    <div class=\"ui-g ui-fluid\">\r\n      <hr style=\"height:2px;width:100%;background-color:green; margin-top: 0px\" />\r\n\r\n\r\n            <div class=\"ui-lg-8 ui-md-8 ui-sm-12\">\r\n                <div *ngIf=\"showspinloading\">\r\n                    <p-progressSpinner></p-progressSpinner>\r\n                    <h2>{{showspinLoadingMessage}}</h2>\r\n                </div>\r\n                <form style=\"width:100%\" #myForm=\"ngForm\">\r\n\r\n\r\n                    <div *ngIf=\"show\">\r\n                        <!-- Doctor Names Field -->\r\n\r\n                        <div class=\"ui-g\">\r\n                            <div class=\"ui-md-2 ui-lg-2\"></div>\r\n                            <div class=\"ui-md-8 ui-lg-8 ui-sm-12\">\r\n                                <div class=\"ui-inputgroup\">\r\n                                    <span class=\"ui-inputgroup-addon\" style=\"height:37px;width:45%;font-size:15px;font-weight: bold;\">\r\n                    Select ER</span>\r\n\r\n                                    <p-multiSelect name=\"multiDropdown\" [options]=\"multiDropdown\" [(ngModel)]=\"addEmergency.facilities\" (onChange)=\"onChangeFacility()\" [ngStyle]=\"{width:'100%'}\" [style]=\"{height:'37px'}\" required>\r\n                                    </p-multiSelect>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <!-- price of facility field -->\r\n                        <div class=\"ui-g\">\r\n                            <div class=\"ui-md-2 ui-lg-2\"></div>\r\n                            <div class=\"ui-md-8 ui-lg-8 ui-sm-12\">\r\n                                <div class=\"ui-inputgroup\">\r\n                                    <span class=\"ui-inputgroup-addon\" style=\"width:37%;font-size:15px; font-weight: bold;\">\r\n                    Facility Price</span>\r\n                                    <input type=\"text\" name=\"price\" [(ngModel)]=\"addEmergency.price\" [readOnly]=\"true\" pInputText placeholder=\"$\" required>\r\n\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <!-- Cash Recieved Field -->\r\n                        <div class=\"ui-g\">\r\n                            <div class=\"ui-md-2 ui-lg-2\"></div>\r\n                            <div class=\"ui-md-8 ui-lg-8 ui-sm-12\">\r\n                                <div class=\"ui-inputgroup\">\r\n                                    <span class=\"ui-inputgroup-addon\" style=\"width:37%;font-size:15px; font-weight: bold;\">\r\n                    Cash Recieved</span>\r\n                                    <input type=\"text\" (keypress)=\"numberOnly($event)\" name=\"cashRecieve\" [(ngModel)]=\"addEmergency.cashRecieve\" pInputText placeholder=\"$\" required>\r\n\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <!-- Discount Field -->\r\n                        <div class=\"ui-g\">\r\n                            <div class=\"ui-md-2 ui-lg-2\"></div>\r\n                            <div class=\"ui-md-8 ui-lg-8 ui-sm-12\">\r\n                                <div class=\"ui-inputgroup\">\r\n                                    <span class=\"ui-inputgroup-addon\" style=\"width:37%;font-size:15px;font-weight: bold;\">\r\n                    Discount</span>\r\n\r\n\r\n                  <input type=\"text\" (keypress)=\"numberOnly($event)\" (ngModelChange)=\"discounter($event)\" min=\"0\"\r\n                    name=\"discount\" [(ngModel)]=\"addEmergency.discount\" pInputText placeholder=\"0\">\r\n\r\n\r\n\r\n\r\n                                </div>\r\n                                <div style=\"padding:0px !important;margin-bottom:0px !important;font-size: 16px; text-align:center;\" class=\"alert alert-danger\" [hidden]=\"discountCheck\">\r\n                                    discount is more than total price!\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <!-- Total Field -->\r\n                        <div class=\"ui-g\">\r\n                            <div class=\"ui-md-2 ui-lg-2\"></div>\r\n                            <div class=\"ui-md-8 ui-lg-8 ui-sm-12\">\r\n                                <div class=\"ui-inputgroup\">\r\n                                    <span class=\"ui-inputgroup-addon\" style=\"width:37%;font-size:15px;font-weight: bold;\">\r\n                    Total</span>\r\n                                    <input type=\"text\" pInputText name=\"total\" [(ngModel)]=\"addEmergency.total\" placeholder=\"Total Amount $$\" [readOnly]=\"true\" required>\r\n\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <!-- Save Button -->\r\n                        <div class=\"ui-g\">\r\n                            <div class=\"ui-md-2 ui-lg-2\"></div>\r\n                            <div class=\"ui-md-8 ui-lg-8 ui-sm-12\">\r\n                                <button pButton type=\"button\" (click)=\"saveOpdEmergency()\" label=\"SAVE\" class=\"ui-button-success\" [disabled]=\"myForm.invalid || !discountCheck\"></button>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"ui-g\">\r\n                        <div class=\"ui-md-2 ui-lg-2\"></div>\r\n                        <div class=\"ui-md-8 ui-lg-8 ui-sm-12\">\r\n                            <button pButton type=\"button\" [printStyle]=\"{h1 : {'color': 'red'}, h2 : {'border': 'solid 1px'}}\" label=\"PRINT\" class=\"ui-button-success\" printSectionId=\"print-section\" (click)=\"print()\" ngxPrint [disabled]=\"printer\"></button>\r\n                        </div>\r\n                    </div>\r\n\r\n\r\n\r\n                </form>\r\n            </div>\r\n            <div class=\"ui-lg-4 ui-md-4 ui-sm-12\">\r\n                <app-facilities [facilities]=\"facilitiesArray\"></app-facilities>\r\n            </div>\r\n        </div>\r\n\r\n\r\n  </p-card>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/opd-emergency/opd-emergency.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/opd-emergency/opd-emergency.component.ts ***!
  \**********************************************************/
/*! exports provided: OpdEmergencyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpdEmergencyComponent", function() { return OpdEmergencyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Services_erservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Services/erservice.service */ "./src/app/Services/erservice.service.ts");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Emergency__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Emergency */ "./src/app/opd-emergency/Emergency.ts");
/* harmony import */ var _patientservice_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../patientservice.service */ "./src/app/patientservice.service.ts");
/* harmony import */ var _Services_opd_er_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Services/opd-er.service */ "./src/app/Services/opd-er.service.ts");








var OpdEmergencyComponent = /** @class */ (function () {
    // id: number;
    // printStatus : boolean;
    //
    function OpdEmergencyComponent(patientService, activeRoute, router, erService, opdEr, messageService) {
        this.patientService = patientService;
        this.activeRoute = activeRoute;
        this.router = router;
        this.erService = erService;
        this.opdEr = opdEr;
        this.messageService = messageService;
        this.hidder = false;
        this.addEmergency = new _Emergency__WEBPACK_IMPORTED_MODULE_5__["_EmergencyClass"]();
        this.printFacilities = [];
        this.showprint = true;
        this.getStatus = true;
        this.showLoading = true;
        this.discountCheck = true;
        this.show = false;
        this.printer = true;
        this.showspinloading = true;
        this.showspinLoadingMessage = "Loading";
        this.facilitiesArray = [];
    }
    OpdEmergencyComponent.prototype.print = function () {
        this.facilitiesArray = [];
        this.addEmergency.discount = 0;
        this.addEmergency.cashRecieve = 0;
        this.addEmergency.total = 0;
        this.addEmergency.price = 0;
        this.addEmergency.facilities = [];
    };
    OpdEmergencyComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log(this.date);
        this.getfacilitiesInDropdown();
        // if(this.multiDropdown == []){
        //   this.show = true;
        //   this.showLoading = true;
        // }
        //this.showLoading=true
        this.cols = [
            { field: 'name', header: 'Facility' },
            { field: 'price', header: 'Price' }
        ];
        var id = this.activeRoute.snapshot.params['id'];
        this.addEmergency.id = id;
        this.addEmergency.price = 0;
        this.patientService.getPatientsByMRNO(id).subscribe(function (a) {
            console.log(a);
            _this.patientName = a.name;
            _this.patientMrNo = a.id;
        });
    };
    OpdEmergencyComponent.prototype.back = function () {
        this.router.navigate(['/monitor/' + this.addEmergency.id]);
    };
    OpdEmergencyComponent.prototype.showLoadingSpinnerAndHideForm = function (msg) {
        this.showspinloading = true;
        this.show = false;
        this.showspinLoadingMessage = msg;
    };
    OpdEmergencyComponent.prototype.hideLoadingSpinnerAndShowForm = function () {
        this.show = true;
        this.showspinloading = false;
    };
    OpdEmergencyComponent.prototype.onChangeFacility = function () {
        var _this = this;
        console.log("yeh id hai" + this.addEmergency.id);
        // for(var i in this.addEmergency.facilities)
        //   this.name = (this.addEmergency.facilities[i]["facilities"]);
        //   console.log(this.name);
        this.printFacilities = [];
        this.facilitiesArray = [];
        this.addEmergency.facilities.map(function (f) {
            _this.printFacilities.push(f["name"]);
            var obj = {
                name: f["name"],
                price: f["price"]
            };
            _this.facilitiesArray.push(obj);
        });
        this.date = new Date();
        this.printFacilities.join(',');
        ///let printfacilities = this.addEmergency.facilities.join(',')
        this.addEmergency.price = 0;
        this.addEmergency.total = 0;
        this.addEmergency.facilities.map(function (f) {
            _this.addEmergency.price = _this.addEmergency.price + parseInt(f["price"]);
            _this.addEmergency.total = _this.addEmergency.price;
        });
    };
    OpdEmergencyComponent.prototype.discounter = function (value) {
        var dis = value;
        this.addEmergency.total = this.addEmergency.price;
        dis > this.addEmergency.total ? this.discountCheck = false : this.discountCheck = true;
        dis ? 0 : dis;
        this.addEmergency.discount = dis;
        this.addEmergency.total = this.addEmergency.total - this.addEmergency.discount;
    };
    OpdEmergencyComponent.prototype.getfacilitiesInDropdown = function () {
        var _this = this;
        this.multiDropdown = [];
        // this.showLoading = true;
        this.showLoadingSpinnerAndHideForm("Getting facilities");
        this.erService.getErFacility().subscribe(function (data) {
            if (data.length) {
                _this.hidder = false;
                _this.hideLoadingSpinnerAndShowForm();
            }
            else {
                _this.showspinloading = false;
                _this.hidder = true;
            }
            data.forEach(function (e) {
                _this.multiDropdown.push({
                    label: e.name + ' / ' + e.price + 'Rs',
                    value: e
                });
            });
        }, function (error) {
            _this.showspinloading = false;
            console.log(error);
            console.log("error agya yar");
            _this.messageService.add({
                severity: "error",
                summary: "Error Found",
                detail: "Something went wrong check your internet connection "
            });
        });
    };
    OpdEmergencyComponent.prototype.numberOnly = function (event) {
        var charCode = event.which ? event.which : event.keyCode;
        if (charCode > 31 && (charCode < 48 || charCode > 57 || charCode < 44)) {
            return false;
        }
        return true;
    };
    OpdEmergencyComponent.prototype.saveOpdEmergency = function () {
        var _this = this;
        console.log(this.addEmergency);
        console.log(this.addEmergency.facilities);
        this.addEmergency.facilities = this.printFacilities;
        this.opdEr.saveOpdEr(this.addEmergency).subscribe(function (data) {
            // here is printer thing
            // this.printId = "print-section";
            //this.showprint = false;
            _this.printer = false;
            console.log(data);
            _this.messageService.add({
                severity: "success",
                summary: "Added Succesfully",
                detail: "Emergency Service Added"
            });
        }, function (error) {
            _this.printer = true;
            console.log(error);
            _this.messageService.add({
                severity: "error",
                summary: "Error Found",
                detail: "Something went wrong check your internet connection "
            });
        });
    };
    OpdEmergencyComponent.prototype.routeToEr = function () {
        this.router.navigate(['adder']);
    };
    OpdEmergencyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-opd-emergency',
            template: __webpack_require__(/*! ./opd-emergency.component.html */ "./src/app/opd-emergency/opd-emergency.component.html"),
            styles: [__webpack_require__(/*! ./opd-emergency.component.css */ "./src/app/opd-emergency/opd-emergency.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_patientservice_service__WEBPACK_IMPORTED_MODULE_6__["PatientserviceService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _Services_erservice_service__WEBPACK_IMPORTED_MODULE_3__["ErserviceService"], _Services_opd_er_service__WEBPACK_IMPORTED_MODULE_7__["OpdErService"], primeng_api__WEBPACK_IMPORTED_MODULE_4__["MessageService"]])
    ], OpdEmergencyComponent);
    return OpdEmergencyComponent;
}());



/***/ }),

/***/ "./src/app/opd-gyny/gyny.ts":
/*!**********************************!*\
  !*** ./src/app/opd-gyny/gyny.ts ***!
  \**********************************/
/*! exports provided: Gyny */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Gyny", function() { return Gyny; });
var Gyny = /** @class */ (function () {
    function Gyny() {
        this.pFacility = "NOPACKAGE";
    }
    return Gyny;
}());



/***/ }),

/***/ "./src/app/opd-gyny/opd-gyny.component.css":
/*!*************************************************!*\
  !*** ./src/app/opd-gyny/opd-gyny.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29wZC1neW55L29wZC1neW55LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/opd-gyny/opd-gyny.component.html":
/*!**************************************************!*\
  !*** ./src/app/opd-gyny/opd-gyny.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-g-12\">\r\n    <div class=\"ui-lg-5 ui-md-5 ui-sm-12\">\r\n        <button pButton type=\"button\" class=\"backBtnStyle\" (click)=\"backToMonitor()\" style=\"width:45%;margin-left:30% \" label=\"Back\"></button>\r\n    </div>\r\n\r\n</div>\r\n\r\n<app-monitorquickview> </app-monitorquickview>\r\n\r\n<div class=\"ui-g-12\">\r\n    <p-toast></p-toast>\r\n    <p-card header=\"OPD GYNY\" [style]=\"{\r\n      width: '80%',\r\n      'font-size': '26px',\r\n      'margin-left': '10%',\r\n      'text-align': 'center',\r\n      color: 'green'\r\n    }\">\r\n        <div class=\"ui-g ui-fluid\">\r\n            <hr style=\"height:2px;width:100%;background-color:green;\" />\r\n            <form style=\"width:100%;\" #myForm=\"ngForm\" (ngSubmit)=\"submitOpd(myForm.value)\">\r\n                <div *ngIf=\"checkStatus\">\r\n                    <p-progressSpinner></p-progressSpinner>\r\n                    <!-- here message from the server -->\r\n                    <h2>Server Failed</h2>\r\n                    <p>Please Reload The Page</p>\r\n                    <div class=\"ui-g\" style=\"margin-top:-20px !important;\">\r\n                        <div class=\"ui-md-3 ui-lg-3 ui-sm-0\"></div>\r\n                        <div class=\"ui-md-1 ui-lg-1 ui-sm-0\"></div>\r\n                        <br>\r\n                        <div class=\"ui-md-4 ui-lg-4 ui-sm-12\">\r\n                            <button pButton type=\"button\" label=\"Click to reload\" style=\"margin-top: 0px; background-color:green;width:100%;\" onclick=\"location.reload()\"></button>\r\n                        </div>\r\n                    </div>\r\n                    <hr style=\"height:2px;width:100%;background-color:green;\" />\r\n                </div>\r\n                <div [hidden]=\"show\">\r\n                    <!-- Add Doctor dropdwon -->\r\n                    <div class=\"ui-g\">\r\n                        <div class=\"ui-md-2 ui-lg-2\"></div>\r\n                        <div class=\"ui-md-8 ui-lg-8 ui-sm-12\">\r\n                            <div class=\"ui-inputgroup\">\r\n                                <span class=\"ui-inputgroup-addon\" style=\"width:37%;font-size:15px;font-weight:bold;\">Select Doctor<i\r\n                    style=\"color: red\">*</i></span>\r\n                                <p-dropdown (onChange)=\"doctorDropdown()\" [options]=\"doctors\" name=\"doctors\" [(ngModel)]=\"opdGynyObject.doctors\" [filter]=\"true\" [style]=\"{ width: '100%', height: '100%','font-size':'20px'}\" [ngStyle]=\"{ 'width': '80%','font-size':'20px'}\" required></p-dropdown>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <!-- Fees Field -->\r\n                    <div class=\"ui-g\">\r\n                        <div class=\"ui-md-2 ui-lg-2\"></div>\r\n                        <div class=\"ui-md-8 ui-lg-8 ui-sm-12\">\r\n                            <div class=\"ui-inputgroup\">\r\n                                <span class=\"ui-inputgroup-addon\" style=\"width:45%;font-size:15px;font-weight: bold;\">Fees</span>\r\n                                <input type=\"text\" name=\"fees\" pInputText ngModel required [(ngModel)]=\"opdGynyObject.fees\" [readOnly]=\"true\" />\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"ui-g\">\r\n                        <div class=\"ui-md-2 ui-lg-2\"></div>\r\n                        <div class=\"ui-md-8 ui-lg-8 ui-sm-12\">\r\n                            <div class=\"ui-inputgroup\">\r\n                                <span class=\"ui-inputgroup-addon\" style=\"width:45%;font-size:15px;font-weight: bold;\">Discount $$</span>\r\n                                <input type=\"number\" name=\"discount\" pInputText ngModel min=\"0\" (change)=\"onChangeDiscount()\" placeholder=\"0  %\" [(ngModel)]=\"opdGynyObject.discount\" />\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <!-- Cash Recvied -->\r\n                    <div class=\"ui-g\">\r\n                        <div class=\"ui-md-2 ui-lg-2\"></div>\r\n                        <div class=\"ui-md-8 ui-lg-8 ui-sm-12\">\r\n                            <div class=\"ui-inputgroup\">\r\n                                <span class=\"ui-inputgroup-addon\" style=\"width:45%;font-size:15px;font-weight: bold;\">Cash Recieved<i\r\n                    style=\"color: red\">*</i></span>\r\n                                <input type=\"text\" name=\"cashrecieved\" pInputText ngModel required placeholder=\"$$\" [(ngModel)]=\"opdGynyObject.cashRecieved\" (input)=\"getTotal(opdGynyObject.cashRecieved)\" />\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"ui-g\">\r\n                        <div class=\"ui-md-2 ui-lg-2\"></div>\r\n                        <div class=\"ui-md-8 ui-lg-8 ui-sm-12\">\r\n                            <div class=\"ui-inputgroup\">\r\n                                <span class=\"ui-inputgroup-addon\" style=\"width:45%;font-size:15px;font-weight: bold;\">Total\r\n                  Amount</span>\r\n                                <input required type=\"number\" pInputText name=\"total\" ngModel [readOnly]=\"true\" placeholder=\"Total Amount $\" [(ngModel)]=\"opdGynyObject.total\" />\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <!-- Registration checkbox here -->\r\n                    <!-- <h4>Registered or not?</h4> <p>{{checked}}</p>\r\n          <p-checkbox [(ngModel)]=\"checked\" binary=\"true\" name=\"registration\"></p-checkbox>\r\n          -->\r\n                    <div class=\"ui-g\">\r\n                        <div class=\"ui-md-2 ui-lg-2\"></div>\r\n                        <div class=\"ui-md-8 ui-lg-8 ui-sm-12\">\r\n                            <div class=\"ui-inputgroup\">\r\n                                <label style=\"margin-top: 1%; font-size: 25px;\"> Registration: </label> &nbsp;\r\n                                <p-checkbox [(ngModel)]=\"opdGynyObject.registration\" binary=\"true\" name=\"registration\"></p-checkbox>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"ui-g\" style=\"margin-top:-20px !important;\">\r\n                        <div class=\"ui-md-2 ui-lg-2\"></div>\r\n                        <div class=\"ui-md-8 ui-lg-8 ui-sm-12\">\r\n                            <button [disabled]=\"myForm.invalid\" pButton type=\"submit\" label=\"SAVE\" style=\"margin-top: 0px; background-color:green;width:100%;\"></button>\r\n                        </div>\r\n                    </div>\r\n                    <!-- PRINT BUTTON -->\r\n                    <div class=\"ui-g\" style=\"margin-top:-20px !important;\">\r\n                        <div class=\"ui-md-2 ui-lg-2\"></div>\r\n                        <div class=\"ui-md-8 ui-lg-8 ui-sm-12\">\r\n                            <button [disabled]=\"enable\" printSectionId=\"content\" ngxPrint pButton type=\"button\" label=\"PRINT\" style=\"margin-top: 0px; background-color:green;width:100%;\"></button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </p-card>\r\n    <p-toast></p-toast>\r\n</div>\r\n\r\n<!-- printing section -->\r\n<div *ngIf=\"opdGynyObject.doctors !== undefined\" id=\"content\" [hidden]=\"true\">\r\n    <!-- <div *ngIf=\"addEmergency.name !== undefined\"> -->\r\n\r\n    <h1 style=\"text-align: center; color:green;font-weight:bold;\">\r\n        OPD GYNY RECEIPT\r\n    </h1>\r\n    <hr style=\"border: 2px solid black;\" />\r\n    <h3 *ngIf=\"!patientRegistration\" style=\"color: crimson\">\r\n        Pregnant women must register first!\r\n    </h3>\r\n    <div class=\"ui-g\">\r\n        <p style=\"font-size: 20px;\">\r\n            <b style=\"font-size: 20px;\">Patient MR No: </b> {{ patientMrNo }}\r\n        </p>\r\n        <p style=\"font-size: 20px;\">\r\n            <b style=\"font-size: 20px;\">Patient Name: </b> {{ patientName }}\r\n        </p>\r\n\r\n        <p style=\"font-size: 20px;\">\r\n            <b style=\"font-size: 20px;\">Doctor Name: </b> {{ opdGynyObject.doctors[\"fullName\"] }}\r\n        </p>\r\n        <p style=\"font-size: 20px;\">\r\n            <b style=\"font-size: 20px;\"> Date: </b> {{ date | date: \"short\" }}\r\n        </p>\r\n\r\n        <div>\r\n            <hr style=\"width:100%;border:1px solid black;\" />\r\n            <div style=\"margin-bottom:5px;\">\r\n                <span><b> Cash Received: </b>\r\n          <span style=\"float: right;\">\r\n            {{ opdGynyObject.cashRecieved }}</span\r\n          ></span\r\n        >\r\n      </div>\r\n      <div style=\"margin-bottom:5px;\">\r\n        <span\r\n          ><b> Discount: </b>\r\n          <span style=\"float: right;\"> {{ opdGynyObject.discount }}</span></span>\r\n            </div>\r\n            <hr style=\"border:1px solid black;width:100%;\" />\r\n\r\n            <div style=\"margin-bottom:5px;\">\r\n                <span><b> Total: </b>\r\n          <span style=\"float:right;\">{{ opdGynyObject.total }}</span></span>\r\n            </div>\r\n            <hr style=\"border:1px solid black;width:100%;\" />\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/opd-gyny/opd-gyny.component.ts":
/*!************************************************!*\
  !*** ./src/app/opd-gyny/opd-gyny.component.ts ***!
  \************************************************/
/*! exports provided: OpdGynyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpdGynyComponent", function() { return OpdGynyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _adddoctor_doctor_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../adddoctor/doctor.service */ "./src/app/adddoctor/doctor.service.ts");
/* harmony import */ var _Services_opd_gyny_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Services/opd-gyny.service */ "./src/app/Services/opd-gyny.service.ts");
/* harmony import */ var _opd_gyny__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./opd-gyny */ "./src/app/opd-gyny/opd-gyny.ts");
/* harmony import */ var _patientservice_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../patientservice.service */ "./src/app/patientservice.service.ts");
/* harmony import */ var _addpackage_package__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../addpackage/package */ "./src/app/addpackage/package.ts");
/* harmony import */ var _Services_package_service_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Services/package-service.service */ "./src/app/Services/package-service.service.ts");
/* harmony import */ var _gyny__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./gyny */ "./src/app/opd-gyny/gyny.ts");











var OpdGynyComponent = /** @class */ (function () {
    function OpdGynyComponent(router, messageService, doctorService, opd_gynyService, activatedRoute, patientService, packageService) {
        //this.package.pFacility.push({label:'No Package',value:'NOPACKAGE'});
        this.router = router;
        this.messageService = messageService;
        this.doctorService = doctorService;
        this.opd_gynyService = opd_gynyService;
        this.activatedRoute = activatedRoute;
        this.patientService = patientService;
        this.packageService = packageService;
        // selectedDoctor : any;
        this.calDiscount = 0;
        //object of opd consultancy
        // opdGynyObject: OpdConsultancy = new OpdConsultancy();
        this.getStatus = true;
        this.checkStatus = false;
        this.show = false;
        this.checked = false;
        this.opdGynyObject = new _opd_gyny__WEBPACK_IMPORTED_MODULE_6__["opdGynyModel"]();
        //packages: Package = new Package();
        this.package = new _addpackage_package__WEBPACK_IMPORTED_MODULE_8__["Package"]();
        this.gyne = new _gyny__WEBPACK_IMPORTED_MODULE_10__["Gyny"]();
        this.disbaleSubmitButton = true;
    }
    OpdGynyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.enable = true;
        this.getDoctorsOption();
        this.getPackage();
        var id = this.activatedRoute.snapshot.params['id'];
        this.opdGynyObject.id = id;
        this.patientService.getPatientsByMRNO(id).subscribe(function (data) {
            _this.patientName = data.name;
            _this.patientMrNo = data.id;
            _this.patientRegistration = data.gynAndObsRegistration;
            console.log("this is data ", data);
            console.log("this is local variable in which data.name is assigned", _this.patientRegistration);
        });
    };
    OpdGynyComponent.prototype.getDoctorsOption = function () {
        var _this = this;
        var i = 0;
        this.opdGynyObject.fees = 0;
        this.doctors = [];
        this.doctorService.getdoctors().subscribe(function (data) {
            if (data) {
                _this.show = false;
                _this.checkStatus = false; //this is for form hide property
                console.log(data);
                data.forEach(function (e) {
                    console.log(e);
                    console.log("This is fees of every one" + e.fees);
                    console.log("This is doctors id " + e.mrNo);
                    _this.doctors.push({
                        label: e.fullName,
                        value: { mrNo: e.mrNo, fullName: e.fullName, fees: e.fees, registration: e.registration }
                    });
                    // console.log({id:this.opdGynyObject.doctors});
                });
            }
        }, function (error) {
            console.log("error agya yar");
            _this.show = true;
            _this.checkStatus = true;
            _this.messageService.add({
                severity: "error",
                summary: "Error Found",
                detail: "Something went wrong check your internet connection "
            });
        });
    };
    OpdGynyComponent.prototype.getPackage = function () {
        var _this = this;
        this.opdGynyObject.fees = 0;
        this.facilitydrop = [];
        this.facilitydrop.push({ label: 'No Package', value: 'NOPACKAGE' });
        //this.package.pFacility.push("hello");
        this.gyne.pFacility = "NOPACKAGE";
        this.packageService.getPackages().subscribe(function (data) {
            console.log("th", data);
            if (data) {
                data.forEach(function (e) {
                    _this.facilitydrop.push({
                        label: e.pName + " | " + e.pFacility,
                        value: { pName: e.pName, pFacility: e.pFacility, pSponsor: e.pSponsor, pPrice: e.pPrice }
                    });
                });
            }
        }, function (error) {
            console.log(error);
        });
    };
    OpdGynyComponent.prototype.packageFacilityDropdown = function (dropdown) {
        this.opdGynyObject.fees = 0; //it will also work for the negative
        this.opdGynyObject.total = 0;
        this.opdGynyObject.discount = 0;
        this.opdGynyObject.fees = this.gyne.pFacility["pPrice"];
        console.log(this.facilitydrop["pPrice"]);
        if (this.gyne.pFacility == "NOPACKAGE") {
            //this.opdGynyObject.doctors="no doc"; //console.log();
            dropdown.selectedOption = null;
        }
        this.opdGynyObject.total = this.gyne.pFacility["pPrice"];
        //this.opdGynyObject.fees = this.facilitydrop;
    };
    OpdGynyComponent.prototype.doctorDropdown = function () {
        // console.log(this.selectedDoctor);
        console.log(this.opdGynyObject.doctors["fullName"]);
        //it will also work for the negative
        this.opdGynyObject.total = 0;
        this.opdGynyObject.discount = 0;
        if (this.gyne.pFacility["pFacility"] == undefined) {
            this.opdGynyObject.fees = 0;
            this.opdGynyObject.fees = this.opdGynyObject.doctors["fees"] * 2;
        }
        console.log(this.opdGynyObject.fees);
        this.opdGynyObject.total = this.opdGynyObject.fees;
    };
    OpdGynyComponent.prototype.onGreaterDiscount = function () {
        if (this.opdGynyObject.discount > this.opdGynyObject.fees || this.opdGynyObject.discount > this.gyne.pFacility["pPrice"]) {
            this.disbaleSubmitButton = false;
        }
        else {
            this.disbaleSubmitButton = true;
        }
    };
    OpdGynyComponent.prototype.onChangeDiscount = function () {
        this.onGreaterDiscount();
        console.log("hello discount");
        var discount = this.opdGynyObject.discount;
        if (discount <= this.opdGynyObject.fees) {
            this.opdGynyObject.total = this.opdGynyObject.fees - discount;
        }
        else if (discount <= this.gyne.pFacility["pPrice"]) {
            this.opdGynyObject.total = this.gyne.pFacility["pPrice"] - discount;
        }
    };
    //FUNCTION FOR BACK BUTTON
    OpdGynyComponent.prototype.backToMonitor = function () {
        this.router.navigate(['/monitor/' + this.opdGynyObject.id]);
    };
    //FUNCTION FOR SUBMIT OPD CONSULTANCY
    OpdGynyComponent.prototype.submitOpd = function () {
        var _this = this;
        this.date = new Date();
        this.opd_gynyService.saveOpdGyny(this.opdGynyObject).subscribe(function (data) {
            console.log(_this.opdGynyObject);
            _this.messageService.add({
                severity: "success",
                summary: "Succesfully",
                detail: "Added successfully"
            });
            _this.enable = false;
        }, function (error) {
            console.log(error);
            _this.messageService.add({
                severity: "error",
                summary: "Error Found",
                detail: "Something went wrong check your internet connection "
            });
        });
        console.log(this.opdGynyObject);
    };
    //function for totalprice
    OpdGynyComponent.prototype.getTotal = function (value) {
        this.opdGynyObject.cashRecieved = 0;
        this.opdGynyObject.cashRecieved = value;
        this.opdGynyObject.total = this.opdGynyObject.total;
    };
    OpdGynyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-opd-gyny',
            template: __webpack_require__(/*! ./opd-gyny.component.html */ "./src/app/opd-gyny/opd-gyny.component.html"),
            styles: [__webpack_require__(/*! ./opd-gyny.component.css */ "./src/app/opd-gyny/opd-gyny.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            primeng_api__WEBPACK_IMPORTED_MODULE_2__["MessageService"],
            _adddoctor_doctor_service__WEBPACK_IMPORTED_MODULE_4__["DoctorService"],
            _Services_opd_gyny_service__WEBPACK_IMPORTED_MODULE_5__["OpdGynyService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _patientservice_service__WEBPACK_IMPORTED_MODULE_7__["PatientserviceService"],
            _Services_package_service_service__WEBPACK_IMPORTED_MODULE_9__["PackageServiceService"]])
    ], OpdGynyComponent);
    return OpdGynyComponent;
}());



/***/ }),

/***/ "./src/app/opd-gyny/opd-gyny.ts":
/*!**************************************!*\
  !*** ./src/app/opd-gyny/opd-gyny.ts ***!
  \**************************************/
/*! exports provided: opdGynyModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "opdGynyModel", function() { return opdGynyModel; });
var opdGynyModel = /** @class */ (function () {
    function opdGynyModel() {
    }
    return opdGynyModel;
}());



/***/ }),

/***/ "./src/app/opd-labtest/opd-labtest-model.ts":
/*!**************************************************!*\
  !*** ./src/app/opd-labtest/opd-labtest-model.ts ***!
  \**************************************************/
/*! exports provided: opdlabtest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "opdlabtest", function() { return opdlabtest; });
var opdlabtest = /** @class */ (function () {
    function opdlabtest() {
        this.discount = 0;
        this.total = 0;
    }
    return opdlabtest;
}());



/***/ }),

/***/ "./src/app/opd-labtest/opd-labtest.component.css":
/*!*******************************************************!*\
  !*** ./src/app/opd-labtest/opd-labtest.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29wZC1sYWJ0ZXN0L29wZC1sYWJ0ZXN0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/opd-labtest/opd-labtest.component.html":
/*!********************************************************!*\
  !*** ./src/app/opd-labtest/opd-labtest.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-ui-g-12\">\r\n    <div class=\"ui-lg-5 ui-sm-12 ui-md-5\">\r\n        <button pButton type=\"button\" class=\"backBtnStyle\" (click)=\"back()\" style=\"width:45%;margin-left:30% \" label=\"Back\"></button>\r\n    </div>\r\n</div>\r\n\r\n<div>\r\n    <app-monitorquickview> </app-monitorquickview>\r\n</div>\r\n<div id=\"print-section\" [hidden]=true>\r\n    <!-- <div *ngIf=\"addEmergency.name !== undefined\"> -->\r\n\r\n    <h1 style=\"text-align: center; color:green;font-weight:bold;\">OPD LABTEST RECEIPT</h1>\r\n    <hr style=\"border: 2px solid black;\">\r\n    <div class=\"ui-g\">\r\n\r\n        <p style=\"font-size: 20px;\"> <b style=\"font-size: 20px;\"> MR No: </b> {{patientMrNo}}</p>\r\n        <p style=\"font-size: 20px;\"><b style=\"font-size: 20px;\"> Name: </b> {{patientName}}</p>\r\n        <p style=\"font-size: 20px;\"><b style=\"font-size: 20px;\"> Date: </b> {{date | date :'short'}}</p>\r\n\r\n\r\n        <p style=\"font-size: 20px;\"><b style=\"font-size: 20px;\"> Labtests: </b></p>\r\n\r\n\r\n\r\n        <div>\r\n            <span style=\"font-weight:bold;\">Labtest</span><span style=\"font-weight:bold;float: right;\">Price</span>\r\n            <hr style=\"border: 1px solid black;width:100%;\" />\r\n            <div *ngFor=\"let lab of labtestArray\" style=\"margin: 5px\">\r\n                <span>{{lab.name}}</span>\r\n                <span style=\"float: right;\">{{lab.price}}</span>\r\n\r\n\r\n\r\n\r\n            </div>\r\n            <hr style=\"width:100%;\" />\r\n            <span><b> Discount: </b> <span style=\"float: right;\"> {{addLabTests.discount}}</span></span>\r\n            <hr style=\"border:1px solid black;width:100%;\" />\r\n\r\n            <span><b> Total: </b> <span style=\"float:right;\">{{addLabTests.total}}</span></span>\r\n            <hr style=\"border:1px solid black;width:100%;\" />\r\n        </div>\r\n\r\n\r\n\r\n\r\n\r\n    </div>\r\n</div>\r\n\r\n<div style=\"margin-top:40px;\" [hidden]=\"!hidder\">\r\n    <p-card>\r\n\r\n        <p style=\"margin:20px;display:block;text-align: center;\">No labtest Added,Please add a labtest</p>\r\n        <button style=\"width:40%;margin-left:30%\" pButton type=\"button\" label=\"Add new Labtest\" (click)=\"routeToAddLab()\" class=\"ui-button-success\"></button>\r\n\r\n    </p-card>\r\n</div>\r\n\r\n\r\n\r\n\r\n<div [hidden]=\"!show\" class=\"ui-g-12\">\r\n    <div class=\"ui-g-12\">\r\n        <p-toast></p-toast>\r\n        <p-card header=\"OPD LAB TEST\" [style]=\"{\r\n      width: '80%',\r\n      'font-size': '26px',\r\n      'margin-left': '10%',\r\n      'text-align': 'center',\r\n      color: 'green'\r\n  }\">\r\n\r\n            <div class=\"ui-g ui-fluid\">\r\n                <hr style=\"height:2px;width:100%;background-color:green; margin-top: 0px\" />\r\n                <form style=\"width:100%\" #myForm=\"ngForm\" (ngSubmit)=saveOpdLabTest();>\r\n                    <div *ngIf=\"showspinloading\">\r\n                        <p-progressSpinner></p-progressSpinner>\r\n                        <h2>{{showspinLoadingMessage}}</h2>\r\n                    </div>\r\n                    <div *ngIf=\"show\">\r\n                        <div class=\"ui-g\">\r\n                            <div class=\"ui-md-2 ui-lg-2\"></div>\r\n                            <div class=\"ui-md-8 ui-lg-8 ui-sm-12\">\r\n                                <div class=\"ui-inputgroup\">\r\n\r\n                                    <span class=\"ui-inputgroup-addon\" style=\"width:37%;font-size:15px;font-weight: bold;\">\r\n                    Select LabTest<i\r\n                    style=\"color: red\">*</i></span>\r\n\r\n\r\n                                    <p-multiSelect name=\"multiDropdown\" [options]=\"multiDropdown\" [(ngModel)]=\"addLabTests.labTests\" (onChange)=\"onChangeLabTest()\" [ngStyle]=\"{width:'100%'}\" [style]=\"{'height':'100%'}\" required>\r\n                                    </p-multiSelect>\r\n\r\n\r\n                                </div>\r\n\r\n                            </div>\r\n                            <div class=\"ui-md-2 ui-lg-2 ui-sm-12 \">\r\n                                <button pButton type=\"button\" label=\"ADD\" (click)=\"routeToAddLab()\" class=\"ui-button-success\" style=\"width:100%\"></button>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"ui-g\">\r\n                            <div class=\"ui-md-2 ui-lg-2\"></div>\r\n                            <div class=\"ui-md-8 ui-lg-8 ui-sm-12\">\r\n                                <div class=\"ui-inputgroup\">\r\n                                    <span class=\"ui-inputgroup-addon\" style=\"width:37%;font-size:15px; font-weight: bold;\">\r\n                    LabTest Price</span>\r\n                                    <input type=\"text\" name=\"price\" [(ngModel)]=\"addLabTests.price\" [readOnly]=\"true\" pInputText placeholder=\"$\" required>\r\n\r\n                                </div>\r\n                            </div>\r\n\r\n\r\n                        </div>\r\n\r\n\r\n\r\n                        <div class=\"ui-g\">\r\n                            <div class=\"ui-md-2 ui-lg-2\"></div>\r\n                            <div class=\"ui-md-8 ui-lg-8 ui-sm-12\">\r\n                                <div class=\"ui-inputgroup\">\r\n                                    <span class=\"ui-inputgroup-addon\" style=\"width:37%;font-size:15px; font-weight: bold;\">\r\n                    Cash Recieve<i\r\n                    style=\"color: red\">*</i></span>\r\n                                    <input type=\"text\" name=\"cashRecieve\" (keypress)=\"numberOnly($event)\" [(ngModel)]=\"addLabTests.cashRecieve\" pInputText placeholder=\"$\" required>\r\n\r\n\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"ui-g\">\r\n                            <div class=\"ui-md-2 ui-lg-2\"></div>\r\n                            <div class=\"ui-md-8 ui-lg-8 ui-sm-12\">\r\n                                <div class=\"ui-inputgroup\">\r\n                                    <span class=\"ui-inputgroup-addon\" style=\"width:37%;font-size:15px;font-weight: bold;\">\r\n                    Discount</span>\r\n                                    <input type=\"number\" min=\"0\" name=\"discount\" (ngModelChange)=\"discounter($event)\" (keypress)=\"numberOnly($event)\" [(ngModel)]=\"addLabTests.discount\" pInputText placeholder=\"0\">\r\n\r\n                                </div>\r\n                                <div style=\"padding:0px !important;margin-bottom:0px !important;font-size: 16px; text-align:center;\" class=\"alert alert-danger\" [hidden]=\"discountCheck\">\r\n                                    discount is more than price!\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"ui-g\">\r\n                            <div class=\"ui-md-2 ui-lg-2\"></div>\r\n                            <div class=\"ui-md-8 ui-lg-8 ui-sm-12\">\r\n                                <div class=\"ui-inputgroup\">\r\n                                    <span class=\"ui-inputgroup-addon\" style=\"width:37%;font-size:15px;font-weight: bold;\">\r\n                    Total</span>\r\n                                    <input type=\"text\" pInputText name=\"total\" [(ngModel)]=\"addLabTests.total\" placeholder=\"Total Amount $$\" [readOnly]=\"true\" required>\r\n\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"ui-g\">\r\n                            <div class=\"ui-md-2 ui-lg-2\"></div>\r\n                            <div class=\"ui-md-8 ui-lg-8 ui-sm-12\">\r\n                                <button pButton type=\"submit\" label=\"SAVE\" class=\"ui-button-success\" [disabled]=\"myForm.invalid || !discountCheck \"></button>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"ui-g\">\r\n                            <div class=\"ui-md-2 ui-lg-2\"></div>\r\n                            <div class=\"ui-md-8 ui-lg-8 ui-sm-12\">\r\n                                <button pButton type=\"button\" label=\"PRINT\" class=\"ui-button-success\" printSectionId=\"print-section\" ngxPrint [disabled]=\"printer\"></button>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                </form>\r\n\r\n            </div>\r\n        </p-card>\r\n\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/opd-labtest/opd-labtest.component.ts":
/*!******************************************************!*\
  !*** ./src/app/opd-labtest/opd-labtest.component.ts ***!
  \******************************************************/
/*! exports provided: OpdLabtestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpdLabtestComponent", function() { return OpdLabtestComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _opd_labtest_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./opd-labtest-model */ "./src/app/opd-labtest/opd-labtest-model.ts");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _add_lab_test_labtest_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../add-lab-test/labtest-service.service */ "./src/app/add-lab-test/labtest-service.service.ts");
/* harmony import */ var _Services_opd_lab_test_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Services/opd-lab-test.service */ "./src/app/Services/opd-lab-test.service.ts");
/* harmony import */ var _patientservice_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../patientservice.service */ "./src/app/patientservice.service.ts");








var OpdLabtestComponent = /** @class */ (function () {
    function OpdLabtestComponent(router, patientService, activeRoute, labtest, messageservice, labtestservice) {
        this.router = router;
        this.patientService = patientService;
        this.activeRoute = activeRoute;
        this.labtest = labtest;
        this.messageservice = messageservice;
        this.labtestservice = labtestservice;
        this.addLabTests = new _opd_labtest_model__WEBPACK_IMPORTED_MODULE_3__["opdlabtest"]();
        this.showLoading = true;
        this.hidder = false;
        this.show = false;
        this.showspinloading = true;
        this.showspinLoadingMessage = "Loading";
        this.printLabTest = [];
        this.printer = true;
        this.labtestArray = [];
        this.discountCheck = true;
    }
    OpdLabtestComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getfacilitiesInDropdown();
        // if(this.multiDropdown == []){
        //   this.show = true;
        //   this.showLoading = true;
        // }
        //this.showLoading=true
        var id = this.activeRoute.snapshot.params['id'];
        this.addLabTests.id = parseInt(id);
        this.addLabTests.price = 0;
        this.patientService.getPatientsByMRNO(id).subscribe(function (a) {
            console.log(a);
            _this.patientName = a.name;
            _this.patientMrNo = a.id;
        });
    };
    OpdLabtestComponent.prototype.back = function () {
        this.router.navigate(['/monitor/' + this.addLabTests.id]);
    };
    OpdLabtestComponent.prototype.showLoadingSpinnerAndHideForm = function (msg) {
        this.showspinloading = true;
        this.show = false;
        this.showspinLoadingMessage = msg;
    };
    OpdLabtestComponent.prototype.hideLoadingSpinnerAndShowForm = function () {
        this.show = true;
        this.showspinloading = false;
    };
    OpdLabtestComponent.prototype.onChangeLabTest = function () {
        var _this = this;
        console.log("yeh id hai" + this.addLabTests.id);
        // for(var i in this.addEmergency.facilities)
        //   this.name = (this.addEmergency.facilities[i]["facilities"]);
        //   console.log(this.name);
        this.printLabTest = [];
        this.labtestArray = [];
        this.addLabTests.labTests.map(function (f) {
            _this.printLabTest.push(f["name"]);
            var obj = {
                name: f["name"],
                price: f["price"]
            };
            _this.labtestArray.push(obj);
        });
        this.date = new Date();
        this.printLabTest.join(',');
        ///let printfacilities = this.addEmergency.facilities.join(',')
        console.log(this.printLabTest);
        this.addLabTests.price = 0;
        this.addLabTests.total = 0;
        this.addLabTests.discount = this.addLabTests.discount / 100;
        this.addLabTests.labTests.map(function (f) {
            _this.addLabTests.price = _this.addLabTests.price + parseInt(f["price"]);
            // this.addLabTests.cashRecieve-(this.addLabTests.discount*this.addLabTests.cashRecieve);
            console.log(_this.addLabTests.total);
        });
    };
    OpdLabtestComponent.prototype.onChangeDiscount = function () {
        console.log("hello discount");
        var discount = this.addLabTests.discount;
        var total = this.addLabTests.price - discount;
        this.addLabTests.total = this.addLabTests.price - this.addLabTests.discount;
    };
    OpdLabtestComponent.prototype.discounter = function (value) {
        var dis = value;
        this.addLabTests.total = this.addLabTests.price;
        dis > this.addLabTests.total ? this.discountCheck = false : this.discountCheck = true;
        dis ? 0 : dis;
        this.addLabTests.discount = dis;
        this.addLabTests.total = this.addLabTests.total - this.addLabTests.discount;
    };
    OpdLabtestComponent.prototype.getfacilitiesInDropdown = function () {
        var _this = this;
        this.multiDropdown = [];
        // this.showLoading = true;
        this.showLoadingSpinnerAndHideForm("Getting labtests");
        this.labtest.getlabtest().subscribe(function (data) {
            if (data.length) {
                _this.hidder = false;
                _this.hideLoadingSpinnerAndShowForm();
            }
            else {
                _this.showspinloading = false;
                _this.hidder = true;
            }
            // for (var keys in data){
            //   this.name.push((data[keys].facilities));
            //   // this.name.push((data[keys].price));
            //   console.log("men names honn"+name);
            // }
            // // console.log(data[0]);
            console.log("hello");
            data.map(function (e) {
                _this.multiDropdown.push({
                    label: e.name,
                    value: e
                });
            });
        }, function (error) {
            _this.show = false;
            console.log(error);
            _this.showspinloading = false;
            console.log("error agya yar");
            _this.messageservice.add({
                severity: "error",
                summary: "Error Found",
                detail: "Something went wrong check your internet connection "
            });
        });
    };
    OpdLabtestComponent.prototype.saveOpdLabTest = function () {
        var _this = this;
        console.log(this.addLabTests);
        console.log(this.addLabTests.labTests);
        this.addLabTests.labTests = this.printLabTest;
        console.log(this.addLabTests);
        this.labtestservice.saveOpdEr(this.addLabTests).subscribe(function (data) {
            // here is printer thing
            // this.printId = "print-section";
            //this.showprint = false;
            _this.printer = false;
            console.log(data);
            _this.messageservice.add({
                severity: "success",
                summary: "Added Succesfully",
                detail: "Emergency Service Added"
            });
        }, function (error) {
            _this.printer = true;
            console.log(error);
            _this.messageservice.add({
                severity: "error",
                summary: "Error Found",
                detail: "Something went wrong check your internet connection "
            });
        });
    };
    OpdLabtestComponent.prototype.routeToAddLab = function () {
        this.router.navigate(['addlab']);
    };
    OpdLabtestComponent.prototype.numberOnly = function (event) {
        var charCode = event.which ? event.which : event.keyCode;
        if (charCode > 31 && (charCode < 48 || charCode > 57 || charCode < 44)) {
            return false;
        }
        return true;
    };
    OpdLabtestComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-opd-labtest',
            template: __webpack_require__(/*! ./opd-labtest.component.html */ "./src/app/opd-labtest/opd-labtest.component.html"),
            styles: [__webpack_require__(/*! ./opd-labtest.component.css */ "./src/app/opd-labtest/opd-labtest.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _patientservice_service__WEBPACK_IMPORTED_MODULE_7__["PatientserviceService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _add_lab_test_labtest_service_service__WEBPACK_IMPORTED_MODULE_5__["LabtestServiceService"], primeng_api__WEBPACK_IMPORTED_MODULE_4__["MessageService"], _Services_opd_lab_test_service__WEBPACK_IMPORTED_MODULE_6__["OpdLabTestService"]])
    ], OpdLabtestComponent);
    return OpdLabtestComponent;
}());



/***/ }),

/***/ "./src/app/opdconsultancy/opdconsultancy.component.css":
/*!*************************************************************!*\
  !*** ./src/app/opdconsultancy/opdconsultancy.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ui-progress-spinner {\r\n  pointer-events: all;\r\n  z-index: 99999;\r\n  border: none;\r\n  margin: 0px;\r\n  padding: 0px;\r\n  width: 100%;\r\n  height: 100%;\r\n  top: 0px;\r\n  left: 0px;\r\n  cursor: wait;\r\n  position: fixed;\r\n  background-color: rgba(0, 0, 0, 0.6);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3BkY29uc3VsdGFuY3kvb3BkY29uc3VsdGFuY3kuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsWUFBWTtFQUNaLFdBQVc7RUFDWCxZQUFZO0VBQ1osV0FBVztFQUNYLFlBQVk7RUFDWixRQUFRO0VBQ1IsU0FBUztFQUNULFlBQVk7RUFDWixlQUFlO0VBQ2Ysb0NBQW9DO0FBQ3RDIiwiZmlsZSI6InNyYy9hcHAvb3BkY29uc3VsdGFuY3kvb3BkY29uc3VsdGFuY3kuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi51aS1wcm9ncmVzcy1zcGlubmVyIHtcclxuICBwb2ludGVyLWV2ZW50czogYWxsO1xyXG4gIHotaW5kZXg6IDk5OTk5O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBtYXJnaW46IDBweDtcclxuICBwYWRkaW5nOiAwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHRvcDogMHB4O1xyXG4gIGxlZnQ6IDBweDtcclxuICBjdXJzb3I6IHdhaXQ7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/opdconsultancy/opdconsultancy.component.html":
/*!**************************************************************!*\
  !*** ./src/app/opdconsultancy/opdconsultancy.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g-12\">\r\n    <div class=\"ui-lg-5 ui-md-5 ui-sm-12\">\r\n        <button pButton type=\"button\" class=\"backBtnStyle\" (click)=\"backToMonitor()\" style=\"width:45%;margin-left:30% \" label=\"Back\"></button>\r\n    </div>\r\n</div>\r\n<div class=\"ui-g-12\">\r\n    <app-monitorquickview> </app-monitorquickview>\r\n</div>\r\n\r\n<div class=\"ui-g-12\">\r\n    <p-toast></p-toast>\r\n\r\n    <p-card header=\"OPD CONSULTANCY\" [style]=\"{\r\n    width: '80%',\r\n    'font-size': '26px',\r\n    'margin-left': '10%',\r\n    'text-align': 'center',\r\n    color: 'green'\r\n  }\">\r\n        <div class=\"ui-g ui-fluid\">\r\n            <hr style=\"height:2px;width:100%;background-color:green;\" />\r\n            <form style=\"width:100%;\" #myForm=\"ngForm\" (ngSubmit)=\"submitOpd(myForm.value)\">\r\n\r\n                <div *ngIf=\"checkStatus\">\r\n                    <p-progressSpinner></p-progressSpinner>\r\n                    <!-- here message from the server -->\r\n                    <h2>Getting Doctors</h2>\r\n                    <p>Please Reload The Page</p>\r\n                    <div class=\"ui-g\" style=\"margin-top:-20px !important;\">\r\n                        <div class=\"ui-md-3 ui-lg-3 ui-sm-0\"></div>\r\n                        <div class=\"ui-md-1 ui-lg-1 ui-sm-0\"></div>\r\n\r\n                        <br>\r\n                        <div class=\"ui-md-4 ui-lg-4 ui-sm-12\">\r\n                            <button pButton type=\"button\" label=\"Click to reload\" style=\"margin-top: 0px; background-color:green;width:100%;\" onclick=\"location.reload()\"></button>\r\n\r\n                        </div>\r\n                    </div>\r\n                    <hr style=\"height:2px;width:100%;background-color:green;\" />\r\n                </div>\r\n\r\n\r\n                <!-- <hr style=\"height:2px;width:100%;background-color:green;\" /> -->\r\n\r\n                <div [hidden]=\"show\">\r\n\r\n                    <!-- panels dropdown -->\r\n                    <div class=\"ui-g\">\r\n                        <div class=\"ui-md-2 ui-lg-2\"></div>\r\n                        <div class=\"ui-md-8 ui-lg-8 ui-sm-12\">\r\n                            <div class=\"ui-inputgroup\">\r\n\r\n                                <span class=\"ui-inputgroup-addon\" style=\"width:37%;font-size:15px;font-weight:bold;\">Select panel<i\r\n                    style=\"color: red\">*</i></span>\r\n                                <p-dropdown (onChange)=\"panelsDropdown()\" [options]=\"panels\" name=\"panels\" [(ngModel)]=\"selectedPanel\" [filter]=\"true\" [style]=\"{ width: '100%', height: '100%','font-size':'20px'}\" [ngStyle]=\"{ 'width': '80%','font-size':'20px'}\"></p-dropdown>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n\r\n                    <!-- <span class=\"ui-inputgroup-addon\" style=\"width:37%;font-size:15px;font-weight:bold;\">Select panel</span>\r\n                                <p-dropdown (onChange)=\"panelsDropdown()\" [options]=\"panels\" name=\"panels\" [(ngModel)]=\"selectedPanel\" [filter]=\"true\" [style]=\"{ width: '100%', height: '100%','font-size':'20px'}\" [ngStyle]=\"{ 'width': '80%','font-size':'20px'}\"></p-dropdown>\r\n                            </div>\r\n                        </div>\r\n                    </div> -->\r\n\r\n\r\n\r\n                    <!-- Add Doctor dropdwon -->\r\n                    <div class=\"ui-g\">\r\n                        <div class=\"ui-md-2 ui-lg-2\"></div>\r\n                        <div class=\"ui-md-8 ui-lg-8 ui-sm-12\">\r\n                            <div class=\"ui-inputgroup\">\r\n                                <span class=\"ui-inputgroup-addon\" style=\"width:37%;font-size:15px;font-weight:bold;\">Select Doctor<i\r\n                    style=\"color: red\">*</i></span>\r\n                                <p-dropdown (onChange)=\"doctorDropdown()\" [options]=\"doctors\" name=\"doctors\" [(ngModel)]=\"opdObject.doctors\" [filter]=\"true\" [style]=\"{ width: '100%', height: '100%','font-size':'20px'}\" [ngStyle]=\"{ 'width': '80%','font-size':'20px'}\" required></p-dropdown>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n\r\n                <!-- Fees Field -->\r\n                <div class=\"ui-g\">\r\n                    <div class=\"ui-md-2 ui-lg-2\"></div>\r\n                    <div class=\"ui-md-8 ui-lg-8 ui-sm-12\">\r\n                        <div class=\"ui-inputgroup\">\r\n                            <span class=\"ui-inputgroup-addon\" style=\"width:45%;font-size:15px;font-weight: bold;\">Fees</span>\r\n                            <input type=\"text\" name=\"fees\" pInputText ngModel required [(ngModel)]=\"opdObject.fees\" [readOnly]=\"true\" />\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <!-- discount field -->\r\n                <div class=\"ui-g\">\r\n                    <div class=\"ui-md-2 ui-lg-2\"></div>\r\n                    <div class=\"ui-md-8 ui-lg-8 ui-sm-12\">\r\n                        <div class=\"ui-inputgroup\">\r\n                            <span class=\"ui-inputgroup-addon\" style=\"width:45%;font-size:15px;font-weight: bold;\">Discount $$</span>\r\n                            <input type=\"number\" name=\"discount\" pInputText ngModel min=\"0\" placeholder=\"Rs\" [readOnly]=\"editablediscountfield\" [(ngModel)]=\"opdObject.discount\" (ngModelChange)=\"discounter($event)\" />\r\n\r\n                        </div>\r\n                        <div style=\"padding:0px !important;margin-bottom:0px !important;font-size: 16px; text-align:center;\" class=\"alert alert-danger\" [hidden]=\"discountCheck\">\r\n                            discount is more than total price!\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <!-- Cash Recvied -->\r\n                <div class=\"ui-g\">\r\n                    <div class=\"ui-md-2 ui-lg-2\"></div>\r\n                    <div class=\"ui-md-8 ui-lg-8 ui-sm-12\">\r\n                        <div class=\"ui-inputgroup\">\r\n                            <span class=\"ui-inputgroup-addon\" style=\"width:45%;font-size:15px;font-weight: bold;\">Cash Recieved<i\r\n                  style=\"color: red\">*</i></span>\r\n\r\n                            <input type=\"text\" name=\"cashrecieved\" min=\"0\" (keypress)=\"numberOnly($event)\" pInputText ngModel required placeholder=\"0\" [(ngModel)]=\"opdObject.cashRecieved\" />\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"ui-g\">\r\n                    <div class=\"ui-md-2 ui-lg-2\"></div>\r\n                    <div class=\"ui-md-8 ui-lg-8 ui-sm-12\">\r\n                        <div class=\"ui-inputgroup\">\r\n                            <span class=\"ui-inputgroup-addon\" style=\"width:45%;font-size:15px;font-weight: bold;\">Total\r\n\r\n                Amount</span>\r\n                            <input required type=\"number\" pInputText name=\"total\" ngModel [readOnly]=\"true\" placeholder=\"Total Amount $\" [(ngModel)]=\"opdObject.total\" />\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"ui-g\" style=\"margin-top:-20px !important;\">\r\n                    <div class=\"ui-md-2 ui-lg-2\"></div>\r\n                    <div class=\"ui-md-8 ui-lg-8 ui-sm-12\">\r\n                        <button [disabled]=\"myForm.invalid  || !discountCheck\" pButton class=\"colorSetAllButtons\" type=\"submit\" label=\"SAVE\" style=\"margin-top: 0px;width:100%;\"></button>\r\n                    </div>\r\n                </div>\r\n                <!-- PRINT BUTTON -->\r\n                <div class=\"ui-g\" style=\"margin-top:-20px !important;\">\r\n                    <div class=\"ui-md-2 ui-lg-2\"></div>\r\n                    <div class=\"ui-md-8 ui-lg-8 ui-sm-12\">\r\n                        <button [disabled]=\"enable\" printSectionId=\"content\" class=\"colorSetAllButtons\" ngxPrint pButton type=\"button\" label=\"PRINT\" [printStyle]=\"{'height':'100vh'}\" style=\"margin-top: 0px; ;width:100%;\"></button>\r\n                    </div>\r\n                </div>\r\n\r\n\r\n            </form>\r\n        </div>\r\n    </p-card>\r\n    <p-toast></p-toast>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n<div *ngIf=\"opdObject.doctors !== undefined\" id=\"content\" [hidden]=\"true\" style=\"height:50px;\">\r\n    <!-- <div *ngIf=\"addEmergency.name !== undefined\"> -->\r\n\r\n    <h1 style=\"text-align: center; color:green;font-weight:bold;\"> OPD CONSULTANCY RECEIPT</h1>\r\n    <hr style=\"border: 2px solid black;\">\r\n    <div class=\"ui-g\">\r\n\r\n        <p style=\"font-size: 20px;\"> <b style=\"font-size: 20px;\">Patient MR No: </b> {{patientMrNo}}</p>\r\n        <p style=\"font-size: 20px;\"><b style=\"font-size: 20px;\">Patient Name: </b> {{patientName}}</p>\r\n\r\n        <p style=\"font-size: 20px;\"><b style=\"font-size: 20px;\">Doctor Name: </b> {{opdObject.doctors[\"fullName\"]}}</p>\r\n        <p style=\"font-size: 20px;\"><b style=\"font-size: 20px;\"> Date: </b> {{date | date :'short'}}</p>\r\n\r\n\r\n\r\n\r\n        <div>\r\n\r\n\r\n            <hr style=\"width:100%;border:1px solid black;\" />\r\n            <div style=\"margin-bottom:5px;\">\r\n                <span><b> Doctor Fees: </b> <span style=\"float: right;\">{{ opdObject.fees }}</span></span>\r\n\r\n            </div>\r\n\r\n            <div style=\"margin-bottom:5px;\">\r\n                <span><b> Cash Received: </b> <span style=\"float: right;\"> {{ opdObject.cashRecieved }}</span></span>\r\n            </div>\r\n\r\n            <div style=\"margin-bottom:5px;\">\r\n                <span><b> Discount: </b> <span style=\"float: right;\"> {{ opdObject.discount }}</span></span>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n    </div>"

/***/ }),

/***/ "./src/app/opdconsultancy/opdconsultancy.component.ts":
/*!************************************************************!*\
  !*** ./src/app/opdconsultancy/opdconsultancy.component.ts ***!
  \************************************************************/
/*! exports provided: OpdconsultancyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpdconsultancyComponent", function() { return OpdconsultancyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _addpanellist_addpanellistsevice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../addpanellist/addpanellistsevice.service */ "./src/app/addpanellist/addpanellistsevice.service.ts");
/* harmony import */ var _Services_opd_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../Services/opd.service */ "./src/app/Services/opd.service.ts");
/* harmony import */ var _adddoctor_doctor_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../adddoctor/doctor.service */ "./src/app/adddoctor/doctor.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _opdconsultancy__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./opdconsultancy */ "./src/app/opdconsultancy/opdconsultancy.ts");
/* harmony import */ var _patientservice_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../patientservice.service */ "./src/app/patientservice.service.ts");









var OpdconsultancyComponent = /** @class */ (function () {
    function OpdconsultancyComponent(patientService, router, messageService, doctorService, opd_Service, activatedRoute, panelservice) {
        this.patientService = patientService;
        this.router = router;
        this.messageService = messageService;
        this.doctorService = doctorService;
        this.opd_Service = opd_Service;
        this.activatedRoute = activatedRoute;
        this.panelservice = panelservice;
        this.discountCheck = true;
        // selectedDoctor : any;
        this.calDiscount = 0;
        //object of opd consultancy
        this.opdObject = new _opdconsultancy__WEBPACK_IMPORTED_MODULE_7__["OpdConsultancy"]();
        this.getStatus = true;
        this.checkStatus = false;
        this.show = false;
        this.editablediscountfield = false;
    }
    OpdconsultancyComponent.prototype.ngOnInit = function () {
        // this.show = true
        var _this = this;
        // this.opdObject.doctors.fees=0;
        this.getpanelsoption();
        this.enable = true;
        this.getDoctorsOption();
        console.log(this.opdObject, "opdddddddddddddddddddd");
        var id = this.activatedRoute.snapshot.params['id'];
        this.patientService.getPatientsByMRNO(id).subscribe(function (a) {
            console.log(a);
            _this.patientName = a.name;
            _this.patientMrNo = a.id;
        });
        this.opdObject.id = id;
        console.log("this is id" + this.opdObject.id);
    };
    OpdconsultancyComponent.prototype.getDoctorsOption = function () {
        var _this = this;
        var i = 0;
        this.opdObject.sallary = 0;
        this.doctors = [];
        this.doctorService.getdoctors().subscribe(function (data) {
            if (data) {
                _this.show = false;
                _this.checkStatus = false; //this is for form hide property
                console.log(data);
                data.forEach(function (e) {
                    console.log(e);
                    console.log("This is doctors id " + e.mrNo);
                    _this.doctors.push({
                        label: e.fullName,
                        value: {
                            mrNo: e.mrNo,
                            fullName: e.fullName,
                            fees: e.fees,
                            accountNo: e.accountNo,
                            share: e.share
                        }
                    });
                });
            }
        }, function (error) {
            console.log("error agya yar");
            _this.show = true;
            _this.checkStatus = true;
            _this.messageService.add({
                severity: "error",
                summary: "Error Found",
                detail: "Something went wrong check your internet connection "
            });
        });
    };
    OpdconsultancyComponent.prototype.doctorDropdown = function () {
        console.log(this.opdObject.doctors["fullName"]);
        console.log(this.doctors["fullName"]);
        this.opdObject.sallary = 0; //it will also work for the negative
        this.opdObject.total = 0;
        console.log(this.opdObject.doctors["fees"]);
        // if(this.opdObject.panels.values() == "free")
        //console.log("yeh hai panels",this.opdObject["opdObject"].panels);
        if (this.selectedPanel == "free") {
            this.opdObject.discount = (this.opdObject.doctors["fees"] * 2);
            this.opdObject.discount = this.opdObject.discount;
            this.opdObject.fees = (this.opdObject.doctors["fees"] * 2);
            this.opdObject.total = this.opdObject.fees - this.opdObject.discount;
            this.editablediscountfield = false;
        }
        else {
            this.opdObject.discount = this.opdObject.doctors["fees"];
            this.opdObject.fees = (this.opdObject.doctors["fees"] * 2);
            this.opdObject.total = this.opdObject.fees - this.opdObject.discount;
            this.editablediscountfield = true;
        }
        //console.log(this.opdObject.sallary)
        // this.opdObject.total = this.opdObject.fees - this.opdObject.discount;
    };
    //FUNCTION FOR BACK BUTTON
    OpdconsultancyComponent.prototype.backToMonitor = function () {
        this.router.navigate(["/monitor/" + this.opdObject.id]);
    };
    //FUNCTION FOR SUBMIT OPD CONSULTANCY
    OpdconsultancyComponent.prototype.submitOpd = function () {
        var _this = this;
        this.date = new Date();
        this.opd_Service.saveOPD(this.opdObject).subscribe(function (data) {
            console.log(_this.opdObject);
            _this.messageService.add({
                severity: "success",
                summary: "Succesfully"
            });
            _this.enable = false;
        }, function (error) {
            console.log(error);
            _this.messageService.add({
                severity: "error",
                summary: "Error Found",
                detail: "Something went wrong check your internet connection "
            });
        });
        console.log(this.opdObject);
    };
    //function for totalprice
    OpdconsultancyComponent.prototype.getTotal = function (value) {
        this.opdObject.cashRecieved = 0;
        console.log(value);
        this.opdObject.cashRecieved = value;
        this.opdObject.total = this.opdObject.fees - this.opdObject.discount;
    };
    OpdconsultancyComponent.prototype.getpanelsoption = function () {
        var _this = this;
        this.panels = [];
        this.panelservice.getPanel().subscribe(function (data) {
            console.log(data);
            if (data) {
                _this.show = false;
                _this.checkStatus = false; //this is for form hide property
                _this.panels.push({ label: 'No panel', value: 'No panel' });
                data.forEach(function (e) {
                    console.log(e);
                    _this.panels.push({
                        label: e.panelType,
                        value: e.panelType
                    });
                });
            }
            (function (error) {
                console.log("error agya yar");
                _this.show = true;
                _this.checkStatus = true;
                _this.messageService.add({
                    severity: "error",
                    summary: "Error Found",
                    detail: "Something went wrong check your internet connection "
                });
            });
            _this.selectedPanel = "No panel";
        });
    };
    OpdconsultancyComponent.prototype.panelsDropdown = function () {
        // console.log(this.selectedDoctor);
        console.log("hello", this.selectedPanel);
        if (!this.isEmpty(this.opdObject.doctors)) {
            if (this.selectedPanel == "free") {
                this.opdObject.discount = (this.opdObject.doctors["fees"] * 2);
                this.opdObject.total = this.opdObject.fees - this.opdObject.discount;
                this.editablediscountfield = false;
            }
            else {
                this.opdObject.discount = this.opdObject.doctors["fees"];
                this.opdObject.fees = (this.opdObject.doctors["fees"] * 2);
                this.opdObject.total = this.opdObject.fees - this.opdObject.discount;
                this.editablediscountfield = true;
            }
        }
    };
    OpdconsultancyComponent.prototype.onchangediscount = function () {
        this.opdObject.discount = this.opdObject.discount;
        this.opdObject.total = this.opdObject.fees - this.opdObject.discount;
    };
    OpdconsultancyComponent.prototype.discounter = function (value) {
        var dis = value;
        this.opdObject.total = this.opdObject.fees;
        dis > this.opdObject.total ? this.discountCheck = false : this.discountCheck = true;
        dis ? 0 : dis;
        this.opdObject.discount = dis;
        this.opdObject.total = this.opdObject.total - this.opdObject.discount;
    };
    OpdconsultancyComponent.prototype.isEmpty = function (obj) {
        for (var key in obj) {
            if (obj.hasOwnProperty(key))
                return false;
        }
        return true;
    };
    OpdconsultancyComponent.prototype.numberOnly = function (event) {
        var charCode = event.which ? event.which : event.keyCode;
        if (charCode > 31 && (charCode < 48 || charCode > 57 || charCode < 44)) {
            return false;
        }
        return true;
    };
    OpdconsultancyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
            selector: "app-opdconsultancy",
            template: __webpack_require__(/*! ./opdconsultancy.component.html */ "./src/app/opdconsultancy/opdconsultancy.component.html"),
            styles: [__webpack_require__(/*! ./opdconsultancy.component.css */ "./src/app/opdconsultancy/opdconsultancy.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_patientservice_service__WEBPACK_IMPORTED_MODULE_8__["PatientserviceService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            primeng_api__WEBPACK_IMPORTED_MODULE_6__["MessageService"],
            _adddoctor_doctor_service__WEBPACK_IMPORTED_MODULE_3__["DoctorService"],
            _Services_opd_service__WEBPACK_IMPORTED_MODULE_2__["OpdService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _addpanellist_addpanellistsevice_service__WEBPACK_IMPORTED_MODULE_1__["AddpanellistseviceService"]])
    ], OpdconsultancyComponent);
    return OpdconsultancyComponent;
}());



/***/ }),

/***/ "./src/app/opdconsultancy/opdconsultancy.ts":
/*!**************************************************!*\
  !*** ./src/app/opdconsultancy/opdconsultancy.ts ***!
  \**************************************************/
/*! exports provided: OpdConsultancy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpdConsultancy", function() { return OpdConsultancy; });
var OpdConsultancy = /** @class */ (function () {
    function OpdConsultancy() {
    }
    return OpdConsultancy;
}());



/***/ }),

/***/ "./src/app/package-list/package-list.component.css":
/*!*********************************************************!*\
  !*** ./src/app/package-list/package-list.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhY2thZ2UtbGlzdC9wYWNrYWdlLWxpc3QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/package-list/package-list.component.html":
/*!**********************************************************!*\
  !*** ./src/app/package-list/package-list.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"z-index:3; position: absolute;top:70%;\" class=\"ui-g-12\" *ngIf=\"delete\">\r\n    <p-progressSpinner [style]=\"{ 'margin-left': '45%' }\"></p-progressSpinner>\r\n</div>\r\n<div class=\"ui-g\">\r\n    <p-toast></p-toast>\r\n    <div class=\"ui-lg-2 ui-md-2 ui-sm-0\"></div>\r\n    <div class=\"ui-g-4 ui-lg-4 ui-sm-12\">\r\n        <button pButton type=\"button\" class=\"backBtnStyle\" (click)=\"backtoMain()\" style=\"width:80%;margin-left:10%;  height:40px;\" label=\"Back\"></button>\r\n    </div>\r\n    <div class=\"ui-g-4 ui-lg-4 ui-sm-12\">\r\n        <button pButton type=\"button\" (click)=\"toAddPackage()\" style=\"width:80%;margin-left:10%;  height:40px;\" label=\"Add Package Facility\" class=\"backBtnStyle\"></button>\r\n    </div>\r\n    <p-card header=\"PACKAGE LIST\" [style]=\"{  width: '100%',\r\n    'font-size': '26px',\r\n    'text-align': 'center',\r\n    color: 'green'\r\n    }\">\r\n        <hr />\r\n        <p-table style=\"word-wrap:break-word;\" [totalRecords]=\"totalRecords\" #dt [paginator]=\"true\" [value]=\"packages\" [rows]=\"10\" [style]=\"{ 'margin-top': '50px', width: '100%'}\" [columns]=\"cols\">\r\n            <ng-template pTemplate=\"caption\">\r\n\r\n\r\n                <div style=\"text-align: right\">\r\n                    <i class=\"fa fa-search\" style=\"margin:4px 4px 0 0\"></i>\r\n                    <input type=\"text\" pInputText size=\"30\" placeholder=\"Global Filter\" (input)=\"dt.filterGlobal($event.target.value, 'contains')\" style=\"width:auto;margin-right:14px;\" />\r\n                </div>\r\n            </ng-template>\r\n            <ng-template pTemplate=\"header\" let-columns>\r\n                <tr>\r\n                    <th style=\"text-align:center\" *ngFor=\"let col of columns\">\r\n                        {{ col.header }}\r\n                    </th>\r\n                    <th style=\"text-align:center\">Actions</th>\r\n                </tr>\r\n            </ng-template>\r\n\r\n\r\n            <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\r\n                <tr>\r\n                    <td style=\"text-align:center\" *ngFor=\"let col of columns\">\r\n                        {{ rowData[col.field] }}\r\n                    </td>\r\n                    <td>\r\n                        <button pButton style=\"width:60%;margin-left:20%;background-color: rgb(211, 56, 56);\" type=\"button\" label=\"Delete\" (click)=\"inactive(rowData['id'], rowData['name'])\"></button>\r\n                    </td>\r\n                </tr>\r\n            </ng-template>\r\n        </p-table>\r\n    </p-card>\r\n    <div class=\"ui-g-12\" *ngIf=\"loader\">\r\n        <p-progressSpinner [style]=\"{ 'margin-left': '45%' }\"></p-progressSpinner>\r\n    </div>\r\n\r\n    <div class=\"ui-g-12\" *ngIf=\"empty\">\r\n        <p style=\"text-align:center;\">No Data to show!</p>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/package-list/package-list.component.ts":
/*!********************************************************!*\
  !*** ./src/app/package-list/package-list.component.ts ***!
  \********************************************************/
/*! exports provided: PackageListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PackageListComponent", function() { return PackageListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_package_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/package-service.service */ "./src/app/services/package-service.service.ts");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_4__);





var PackageListComponent = /** @class */ (function () {
    function PackageListComponent(router, packageService, messageService) {
        this.router = router;
        this.packageService = packageService;
        this.messageService = messageService;
        this.packages = [];
        this.loader = true;
        this.empty = false;
    }
    PackageListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cols = [
            { field: 'id', header: 'ID' },
            { field: 'pName', header: 'Package Name' },
            { field: 'pFacility', header: 'Package Facility' },
            { field: 'pSponsor', header: 'Sponsor' },
            { field: 'pPrice', header: 'Package Price' }
        ];
        this.packageService.getPackages().subscribe(function (response) {
            _this.packages = [];
            _this.loader = false;
            response.length ? (_this.empty = false) : (_this.empty = true);
            response.map(function (value) {
                _this.packages.push({
                    id: value.id,
                    pName: value.pName,
                    pFacility: value.pFacility,
                    pSponsor: value.pSponsor,
                    pPrice: value.pPrice,
                });
            });
        }, function (error) {
            console.log(error);
            _this.loader = false;
        });
    };
    PackageListComponent.prototype.backtoMain = function () {
        this.router.navigate(['mainscreen']);
    };
    PackageListComponent.prototype.toAddPackage = function () {
        this.router.navigate(['addpackage']);
    };
    PackageListComponent.prototype.inactive = function (a) {
        var _this = this;
        console.log(a);
        this.packageService.deletePackage(a).subscribe(function (response) {
            _this.packages = [];
            response.length ? (_this.empty = false) : (_this.empty = true);
            response.map(function (value) {
                _this.packages.push({
                    id: value.id,
                    pName: value.pName,
                    pFacility: value.pFacility,
                    pStartDate: value.pStartDate,
                    pEndDate: value.pEndDate,
                    pSponsor: value.pSponsor,
                    pPrice: value.pPrice
                });
            });
            _this.messageService.add({
                severity: 'success',
                summary: 'Service Message',
                detail: 'Successfully Deleted!'
            });
        }, function (error) {
            _this.messageService.add({
                severity: 'error',
                summary: 'Service Message',
                detail: 'Enable to delete!'
            });
        });
    };
    PackageListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-package-list',
            template: __webpack_require__(/*! ./package-list.component.html */ "./src/app/package-list/package-list.component.html"),
            styles: [__webpack_require__(/*! ./package-list.component.css */ "./src/app/package-list/package-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_package_service_service__WEBPACK_IMPORTED_MODULE_3__["PackageServiceService"],
            primeng_api__WEBPACK_IMPORTED_MODULE_4__["MessageService"]])
    ], PackageListComponent);
    return PackageListComponent;
}());



/***/ }),

/***/ "./src/app/panel-list/panel-list.component.css":
/*!*****************************************************!*\
  !*** ./src/app/panel-list/panel-list.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@-webkit-keyframes ui-progress-spinner-color {\r\n    100%,\r\n    0% {\r\n        stroke: #d62d20;\r\n    }\r\n    40% {\r\n        stroke: #0057e7;\r\n    }\r\n    66% {\r\n        stroke: #008744;\r\n    }\r\n    80%,\r\n    90% {\r\n        stroke: #ffa700;\r\n    }\r\n}\r\n@keyframes ui-progress-spinner-color {\r\n    100%,\r\n    0% {\r\n        stroke: #d62d20;\r\n    }\r\n    40% {\r\n        stroke: #0057e7;\r\n    }\r\n    66% {\r\n        stroke: #008744;\r\n    }\r\n    80%,\r\n    90% {\r\n        stroke: #ffa700;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFuZWwtbGlzdC9wYW5lbC1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSTs7UUFFSSxlQUFlO0lBQ25CO0lBQ0E7UUFDSSxlQUFlO0lBQ25CO0lBQ0E7UUFDSSxlQUFlO0lBQ25CO0lBQ0E7O1FBRUksZUFBZTtJQUNuQjtBQUNKO0FBZkE7SUFDSTs7UUFFSSxlQUFlO0lBQ25CO0lBQ0E7UUFDSSxlQUFlO0lBQ25CO0lBQ0E7UUFDSSxlQUFlO0lBQ25CO0lBQ0E7O1FBRUksZUFBZTtJQUNuQjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvcGFuZWwtbGlzdC9wYW5lbC1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAa2V5ZnJhbWVzIHVpLXByb2dyZXNzLXNwaW5uZXItY29sb3Ige1xyXG4gICAgMTAwJSxcclxuICAgIDAlIHtcclxuICAgICAgICBzdHJva2U6ICNkNjJkMjA7XHJcbiAgICB9XHJcbiAgICA0MCUge1xyXG4gICAgICAgIHN0cm9rZTogIzAwNTdlNztcclxuICAgIH1cclxuICAgIDY2JSB7XHJcbiAgICAgICAgc3Ryb2tlOiAjMDA4NzQ0O1xyXG4gICAgfVxyXG4gICAgODAlLFxyXG4gICAgOTAlIHtcclxuICAgICAgICBzdHJva2U6ICNmZmE3MDA7XHJcbiAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/panel-list/panel-list.component.html":
/*!******************************************************!*\
  !*** ./src/app/panel-list/panel-list.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"ui-g\">\r\n    <div class=\"ui-sm-0 ui-lg-2 ui-md-2\"></div>\r\n    <div class=\"ui-g-4 ui-lg-4 ui-sm-12\">\r\n        <button pButton type=\"button\" class=\"backBtnStyle\" (click)=\"backToMain()\" style=\"width:80%;margin-left:10%;  height:40px;\" label=\"Back\"></button>\r\n    </div>\r\n    <div class=\"ui-g-4 ui-lg-4 ui-sm-12\">\r\n        <button pButton type=\"button\" (click)=\"addPanel()\" style=\"width:80%;margin-left:10%;  height:40px;\" label=\"Add Panel\" class=\"backBtnStyle\"></button>\r\n    </div>\r\n</div>\r\n<p-card header=\"PANEL LIST\" [style]=\"{  width: '100%',\r\n'font-size': '26px',\r\n'text-align': 'center',\r\ncolor: 'green'\r\n}\">\r\n    <hr />\r\n\r\n\r\n    <hr />\r\n    <p-table #dt [columns]=\"cols\" [value]=\"panels\" [paginator]=\"true\" [rows]=\"10\" [totalRecords]=\"totalRecords\">\r\n        <ng-template pTemplate=\"caption\">\r\n            <div style=\"text-align: right\">\r\n                <i class=\"fa fa-search\" style=\"margin:4px 4px 0 0\"></i>\r\n                <input type=\"text\" pInputText size=\"50\" placeholder=\"Global Filter\" (input)=\"dt.filterGlobal($event.target.value, 'contains')\" style=\"width:auto\" />\r\n            </div>\r\n        </ng-template>\r\n        <ng-template pTemplate=\"header\" let-columns>\r\n            <tr>\r\n                <th *ngFor=\"let col of columns\">\r\n                    {{ col.header }}\r\n                </th>\r\n                <th style=\"text-align: center;\">\r\n                    Actions\r\n                </th>\r\n            </tr>\r\n            <div *ngIf=\"showLoading\" style=\"margin-left: 325%;\">\r\n                <p-progressSpinner></p-progressSpinner>\r\n            </div>\r\n        </ng-template>\r\n\r\n        <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\r\n            <tr [pSelectableRow]=\"rowData\">\r\n                <td *ngFor=\"let col of columns\" style=\"overflow: auto;\">\r\n                    {{ rowData[col.field] }}\r\n                </td>\r\n                <td>\r\n                    <button pButton type=\"button\" (click)=\"deletePanelByID(rowData['id'])\" class=\"ui-button-danger\" style=\"height: 50px; margin-left: 40%; \">\r\n            <img src=\"https://img.icons8.com/color/48/000000/cancel.png\" />\r\n          </button>\r\n                </td>\r\n            </tr>\r\n        </ng-template>\r\n    </p-table>\r\n</p-card>"

/***/ }),

/***/ "./src/app/panel-list/panel-list.component.ts":
/*!****************************************************!*\
  !*** ./src/app/panel-list/panel-list.component.ts ***!
  \****************************************************/
/*! exports provided: PanelListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanelListComponent", function() { return PanelListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _addpanellist_addpanellistsevice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../addpanellist/addpanellistsevice.service */ "./src/app/addpanellist/addpanellistsevice.service.ts");




var PanelListComponent = /** @class */ (function () {
    function PanelListComponent(router, panelService) {
        this.router = router;
        this.panelService = panelService;
        this.showLoading = false;
    }
    PanelListComponent.prototype.ngOnInit = function () {
        this.showTable();
    };
    PanelListComponent.prototype.showTable = function () {
        var _this = this;
        this.showLoading = true;
        this.panelService.getPanel().subscribe(function (Response) {
            console.log("response is here", Response);
            _this.showLoading = false;
            _this.panels = Response;
        });
        this.cols = [
            { field: 'id', header: 'ID' },
            { field: 'panelName', header: 'Panel Name' },
            { field: 'panelType', header: 'Panel Type' },
            { field: 'panelStartDate', header: 'Panel Start Date' },
            { field: 'panelEndDate', header: 'Panel End Date' },
            { field: 'panelFacility', header: 'Panel Facility' }
        ];
        this.panels = [];
    };
    PanelListComponent.prototype.addPanel = function () {
        this.router.navigate(['/addpanellist']);
    };
    PanelListComponent.prototype.deletePanelByID = function (rowData) {
        var _this = this;
        console.log(rowData);
        //  this.indexFind = this.panels.findIndex(i => i.id === rowData);
        //   console.log(this.indexFind);
        //   this.panels.splice(this.indexFind,1);
        this.panelService.deleteById(rowData).subscribe(function (data) {
            _this.panelService.getPanel().subscribe(function (data) { });
            _this.showTable();
            console.log(data);
        }, function (error) {
            console.log(error);
        });
    };
    PanelListComponent.prototype.backToMain = function () {
        this.router.navigate(['mainscreen']);
    };
    PanelListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-panel-list',
            template: __webpack_require__(/*! ./panel-list.component.html */ "./src/app/panel-list/panel-list.component.html"),
            styles: [__webpack_require__(/*! ./panel-list.component.css */ "./src/app/panel-list/panel-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _addpanellist_addpanellistsevice_service__WEBPACK_IMPORTED_MODULE_3__["AddpanellistseviceService"]])
    ], PanelListComponent);
    return PanelListComponent;
}());



/***/ }),

/***/ "./src/app/patient-admit/patient-admit.component.css":
/*!***********************************************************!*\
  !*** ./src/app/patient-admit/patient-admit.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhdGllbnQtYWRtaXQvcGF0aWVudC1hZG1pdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/patient-admit/patient-admit.component.html":
/*!************************************************************!*\
  !*** ./src/app/patient-admit/patient-admit.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Back Button -->\r\n<div class=\"ui-g\">\r\n\r\n  <div class=\"ui-lg-5 ui-md-5 ui-sm-12\">\r\n    <button pButton type=\"button\" class=\"backBtnStyle\" (click)=\"backToMonitor()\"\r\n      style=\"width:45%;margin-left:30%;height:40px; \">Back</button>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"ui-g-12\">\r\n  <app-monitorquickview> </app-monitorquickview>\r\n\r\n</div>\r\n<div class=\"ui-g-12\">\r\n  <p-toast></p-toast>\r\n  <p-card header=\"SEARCH BEDS\" [style]=\"{\r\n      width: '80%',\r\n      'font-size': '26px',\r\n      'margin-left': '10%',\r\n      'text-align': 'center',\r\n      color: 'green'\r\n\r\n    }\">\r\n    <div class=\"ui-g ui-fluid\">\r\n      <hr style=\"height:2px;width:100%;background-color:green;\" />\r\n      <form style=\"width:100%;\" #myForm=\"ngForm\" (ngSubmit)=\"submitOpdPatientAdmit()\">\r\n        <div *ngIf=\"checkStatus\">\r\n          <p-progressSpinner></p-progressSpinner>\r\n          <!-- here message from the server -->\r\n          <h2>Getting Beds...</h2>\r\n          <p>Please Reload The Page</p>\r\n          <div class=\"ui-g\" style=\"margin-top:-20px !important;\">\r\n            <div class=\"ui-md-3 ui-lg-3 ui-sm-0\"></div>\r\n            <div class=\"ui-md-1 ui-lg-1 ui-sm-0\"></div>\r\n            <br />\r\n            <div class=\"ui-md-4 ui-lg-4 ui-sm-12\">\r\n              <button pButton type=\"button\" label=\"Click to reload\"\r\n                style=\"margin-top: 0px; background-color:green;width:100%;\" onclick=\"location.reload()\"></button>\r\n            </div>\r\n          </div>\r\n          <hr style=\"height:2px;width:100%;background-color:green;\" />\r\n        </div>\r\n\r\n        <div [hidden]=\"show\">\r\n          <!-- Add Bed Type dropdwon -->\r\n          <div class=\"ui-g\">\r\n            <div class=\"ui-md-2 ui-lg-2\"></div>\r\n            <div class=\"ui-md-8 ui-lg-8 ui-sm-12\">\r\n              <div class=\"ui-inputgroup\">\r\n                <span class=\"ui-inputgroup-addon\" style=\"width:37%;font-size:15px;font-weight:bold;\">BED TYPE<i\r\n                    style=\"color: red\">*</i></span>\r\n                <p-dropdown emptyFilterMessage=\"No bedType AVAILABLE\" placeholder=\"Select bed type\" [showClear]=\"true\"\r\n                  (onChange)=\"bedsDropdown()\" [options]=\"bedType\" name=\"bedType\" [filter]=\"true\" [style]=\"{\r\n                    width: '100%',\r\n                    height: '100%',\r\n                    'font-size': '20px'\r\n                  }\" [ngStyle]=\"{ width: '80%', 'font-size': '20px' }\" required [(ngModel)]=\"_opdPatientAdmit.bedType\">\r\n                </p-dropdown>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"ui-md-2 ui-lg-2 ui-sm-12\">\r\n              <div class=\"ui-inputgroup\">\r\n                <!-- <p-dialog\r\n                  header=\"Add New Beds\"\r\n                  [responsive]=\"true\"\r\n                  [style]=\"{ width: '60%', minWidth: '200px' }\"\r\n                  [minY]=\"60\"\r\n                  [maximizable]=\"true\"\r\n                  [baseZIndex]=\"10000\"\r\n                  [(visible)]=\"display\"\r\n                >\r\n                 Select for addding beds -->\r\n                <!-- <app-admission></app-admission> -->\r\n                <!-- </p-dialog>  -->\r\n                <button type=\"button\" class=\"ui-button-success\" pButton (click)=\"showDialog()\" icon=\"pi pi-info-circle\"\r\n                  label=\"ADD\" style=\"width: 100%;margin-top:0px;text-align: center\"></button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"ui-g\">\r\n            <div class=\"ui-md-2 ui-lg-2\"></div>\r\n            <div class=\"ui-md-8 ui-lg-8 ui-sm-12\">\r\n              <div class=\"ui-inputgroup\">\r\n                <span class=\"ui-inputgroup-addon\" style=\"width:37%;font-size:15px;font-weight:bold;\">SELECTED BEDS<i\r\n                    style=\"color: red\">*</i></span>\r\n                <p-dropdown emptyFilterMessage=\"No beds AVAILABLE\" placeholder=\"Select bed number\"\r\n                  (onChange)=\"showPrice()\" [options]=\"selectedBed\" name=\"selectedBedNumber\" [filter]=\"true\" [style]=\"{\r\n                    width: '100%',\r\n                    height: '100%',\r\n                    'font-size': '20px'\r\n                  }\" [ngStyle]=\"{ width: '80%', 'font-size': '20px' }\" [(ngModel)]=\"_opdPatientAdmit.selectedBed\"\r\n                  required></p-dropdown>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <!-- Pirce field -->\r\n          <div class=\"ui-g\">\r\n            <div class=\"ui-md-2 ui-lg-2\"></div>\r\n            <div class=\"ui-md-8 ui-lg-8 ui-sm-12\">\r\n              <div class=\"ui-inputgroup\">\r\n                <span class=\"ui-inputgroup-addon\" style=\"width:45%;font-size:15px;font-weight: bold;\">PRICE</span>\r\n                <input type=\"text\" name=\"price\" pInputText ngModel required [(ngModel)]=\"_opdPatientAdmit.price\"\r\n                  [readOnly]=\"true\" style=\"text-align:center\" />\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <!-- Pirce field -->\r\n          <div class=\"ui-g\">\r\n            <div class=\"ui-md-2 ui-lg-2\"></div>\r\n            <div class=\"ui-md-8 ui-lg-8 ui-sm-12\">\r\n              <div class=\"ui-inputgroup\">\r\n                <span class=\"ui-inputgroup-addon\" style=\"width:45%;font-size:15px;font-weight: bold;\">CASH RECIEVED<i\r\n                    style=\"color: red\">*</i></span>\r\n                <input type=\"text\" name=\"cashrecieved\" pInputText ngModel required (keypress)=\"numberOnly($event)\"\r\n                  [(ngModel)]=\"_opdPatientAdmit.cashRecieved\" [readOnly]=\"false\" style=\"text-align:center\" />\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"ui-g\">\r\n            <div class=\"ui-md-2 ui-lg-2\"></div>\r\n            <div class=\"ui-md-8 ui-lg-8 ui-sm-12\">\r\n              <button [disabled]=\"myForm.invalid\" pButton type=\"submit\" label=\"SAVE\"\r\n                style=\"margin-top: 0px; background-color:green;width:100%;\"></button>\r\n            </div>\r\n          </div>\r\n\r\n          <!-- print button -->\r\n          <div class=\"ui-g\" style=\"margin-top:-20px !important;\">\r\n            <div class=\"ui-md-2 ui-lg-2\"></div>\r\n            <div class=\"ui-md-8 ui-lg-8 ui-sm-12\">\r\n              <button [disabled]=\"enable\" printSectionId=\"content\" ngxPrint pButton type=\"button\" label=\"PRINT\"\r\n                style=\"margin-top: 0px; background-color:green;width:100%;\"></button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </p-card>\r\n</div>\r\n\r\n<!-- print Section -->\r\n\r\n\r\n\r\n\r\n\r\n\r\n<div *ngIf=\"_opdPatientAdmit.selectedBed !== undefined\" id=\"content\" [hidden]=\"true\">\r\n  <!-- <div *ngIf=\"addEmergency.name !== undefined\"> -->\r\n\r\n  <h1 style=\"text-align: center; color:green;font-weight:bold;\"> OPD ADMIT BED RECEIPT</h1>\r\n  <hr style=\"border: 2px solid black;\">\r\n  <div class=\"ui-g\">\r\n\r\n    <p style=\"font-size: 20px;\"> <b style=\"font-size: 20px;\">Patient MR No: </b> {{patientMrNo}}</p>\r\n    <p style=\"font-size: 20px;\"><b style=\"font-size: 20px;\">Patient Name: </b> {{patientName}}</p>\r\n\r\n    <p style=\"font-size: 20px;\"><b style=\"font-size: 20px;\">BED Type: </b> {{ _opdPatientAdmit.bedType }}</p>\r\n    <p style=\"font-size: 20px;\"><b style=\"font-size: 20px;\"> Date: </b> {{date |  date :'short'}}</p>\r\n\r\n\r\n\r\n\r\n    <div>\r\n\r\n\r\n      <hr style=\"width:100%;border:1px solid black;\" />\r\n      <div style=\"margin-bottom:5px;\">\r\n        <span><b> Bed Price: </b> <span style=\"float: right;\"> {{_opdPatientAdmit.price}}</span></span>\r\n\r\n\r\n      </div>\r\n      <div style=\"margin-bottom:5px;\">\r\n        <span><b> Cash Received: </b> <span style=\"float: right;\"> {{_opdPatientAdmit.cashRecieved}}</span></span>\r\n      </div>\r\n\r\n\r\n      <hr style=\"border:1px solid black;width:100%;\" />\r\n\r\n      <hr style=\"border:1px solid black;width:100%;\" />\r\n\r\n\r\n\r\n    </div>\r\n\r\n\r\n\r\n\r\n\r\n  </div>\r\n\r\n\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n<!-- Print Section -->\r\n<!-- <div\r\n  *ngIf=\"_opdPatientAdmit.selectedBed !== undefined\"\r\n  id=\"content\"\r\n  [hidden]=\"true\"\r\n>\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div\r\n        class=\"well col-xs-10 col-sm-10 col-md-6 col-xs-offset-1 col-sm-offset-1 col-md-offset-3\"\r\n      >\r\n        <div class=\"row\">\r\n          <span>\r\n            <div class=\"text-center ui-g-8\">\r\n              <h1 style=\"text-align: center;text-decoration-line: underline\">\r\n                OPD ADMIT BED RECEIPT\r\n              </h1>\r\n            </div>\r\n          </span>\r\n          <hr />\r\n        </div>\r\n        <br />\r\n        <div class=\"row\">\r\n          <span>\r\n            <div class=\"text-center ui-g-8\">\r\n              <h3 style=\"text-align: left;text-decoration-line: underline\">\r\n                Doctor Name :\r\n                {{ _opdPatientAdmit.bedType }}\r\n              </h3>\r\n            </div>\r\n          </span>\r\n        </div>\r\n        <div class=\"row\">\r\n          <span>\r\n            <div class=\"text-center ui-g-8\">\r\n              <h3 style=\"text-align: left;text-decoration-line: underline\">\r\n                Bed Fees :\r\n                {{ _opdPatientAdmit.price }}\r\n              </h3>\r\n            </div>\r\n          </span>\r\n        </div>\r\n        <br />\r\n\r\n        <br />\r\n        <div class=\"row\">\r\n          <span>\r\n            <div class=\"text-center ui-g-8\">\r\n              <h3 style=\"text-align: left;text-decoration-line: underline\">\r\n                CASH RECEVIED :\r\n                {{ _opdPatientAdmit.cashRecieved }}\r\n              </h3>\r\n            </div>\r\n          </span>\r\n        </div>\r\n        <br />\r\n\r\n        <br />\r\n        <div class=\"row\">\r\n          <span>\r\n            <div class=\"text-center ui-g-8\">\r\n              <h3 style=\"text-align: left;text-decoration-line: underline\">\r\n                RETURN :\r\n                {{ _opdPatientAdmit.cashRecieved }}\r\n              </h3>\r\n            </div>\r\n          </span>\r\n        </div>\r\n        <br />\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div> -->"

/***/ }),

/***/ "./src/app/patient-admit/patient-admit.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/patient-admit/patient-admit.component.ts ***!
  \**********************************************************/
/*! exports provided: PatientAdmitComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientAdmitComponent", function() { return PatientAdmitComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _patient_admit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./patient-admit */ "./src/app/patient-admit/patient-admit.ts");
/* harmony import */ var _Services_admission_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Services/admission.service */ "./src/app/Services/admission.service.ts");
/* harmony import */ var _patientservice_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../patientservice.service */ "./src/app/patientservice.service.ts");



// import { Router } from "@angular/router";





var PatientAdmitComponent = /** @class */ (function () {
    function PatientAdmitComponent(router, messageService, activatedRoute, admissionSer, patientService) {
        this.router = router;
        this.messageService = messageService;
        this.activatedRoute = activatedRoute;
        this.admissionSer = admissionSer;
        this.patientService = patientService;
        this._opdPatientAdmit = new _patient_admit__WEBPACK_IMPORTED_MODULE_4__["OpdPatientAdmit"](); //model for populating values in the fileds of html
        this._opdPatientToSend = new _patient_admit__WEBPACK_IMPORTED_MODULE_4__["OpdAdmitSend"](); //selected model to send
        this.display = false;
        this.checkStatus = false;
        this.show = false;
    }
    PatientAdmitComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = this.activatedRoute.snapshot.params["id"];
        this.patientService.getPatientsByMRNO(id).subscribe(function (a) {
            console.log(a);
            _this.patientName = a.name;
            _this.patientMrNo = a.id;
        });
        this.enable = true;
        this.bedsDropdown();
        // this.noOfBedsAvailable();
        this._opdPatientAdmit.patientID = this.activatedRoute.snapshot.params["id"]; //patientpatientID
        this._opdPatientToSend.patientID = this.activatedRoute.snapshot.params["id"]; //patientpatientID
        console.log("this is patientID " + this._opdPatientToSend.patientID);
    };
    PatientAdmitComponent.prototype.backToMonitor = function () {
        this.router.navigate(["/monitor/" + this._opdPatientAdmit.patientID]);
    };
    PatientAdmitComponent.prototype.bedsDropdown = function () {
        this._opdPatientAdmit.cashRecieved = 0;
        this._opdPatientToSend.cashRecieved = 0;
        this.bedType = [
            { label: "General bed", value: "general" },
            { label: "Special bed", value: "special" }
        ];
        this.noOfBedsAvailable();
    };
    PatientAdmitComponent.prototype.noOfBedsAvailable = function () {
        var _this = this;
        // let i = 0;
        this._opdPatientAdmit.price = 0;
        this.selectedBed = [];
        this.admissionSer
            .getBedsForSelectBedType(this._opdPatientAdmit.bedType)
            .subscribe(function (data) {
            _this.show = false;
            _this.checkStatus = false;
            console.log("selected bed type" + _this._opdPatientAdmit.bedType);
            data.forEach(function (e) {
                console.log(e);
                _this._opdPatientAdmit.bedID = e.id;
                console.log("This is bed id  ", _this._opdPatientAdmit.bedID);
                _this.selectedBed.push({
                    label: e.id,
                    value: { id: e.id, price: e.price }
                });
            });
        }, function (error) {
            console.log("Error occured");
            _this.show = true;
            _this.checkStatus = true;
            _this.messageService.add({
                severity: "error",
                summary: "Error Found",
                detail: "Something went wrong check your internet connection "
            });
        });
    };
    // getting price of the selected bed type
    PatientAdmitComponent.prototype.showPrice = function () {
        if (this._opdPatientAdmit.selectedBed["price"] == null) {
            console.log("error");
        }
        this._opdPatientAdmit.cashRecieved = 0;
        this._opdPatientAdmit.price = 0;
        this._opdPatientToSend.price = 0;
        this._opdPatientAdmit.price = this._opdPatientAdmit.selectedBed["price"];
        this._opdPatientAdmit.bedID = this._opdPatientAdmit.selectedBed["id"];
        this._opdPatientToSend.price = this._opdPatientAdmit.price;
        this._opdPatientToSend.bedType = this._opdPatientAdmit.bedType;
        console.log(this._opdPatientAdmit.price);
    };
    PatientAdmitComponent.prototype.submitOpdPatientAdmit = function () {
        var _this = this;
        // You can send only patient and bed patientID
        console.log("Patient admitted model ", this._opdPatientToSend);
        this._opdPatientToSend.price = this._opdPatientAdmit.price;
        this._opdPatientToSend.bedID = this._opdPatientAdmit.bedID;
        this._opdPatientToSend.patientID = this._opdPatientAdmit.patientID;
        this._opdPatientToSend.cashRecieved = this._opdPatientAdmit.cashRecieved;
        this.date = new Date();
        this.admissionSer.savedOpdAdmit(this._opdPatientToSend).subscribe(function (data) {
            if (data) {
                console.log(data);
                _this.messageService.add({
                    severity: "success",
                    summary: "OPD ADMIT SUCCESSFULL",
                    detail: "True"
                });
            }
            _this.enable = false;
        }, function (error) {
            _this.messageService.add({
                severity: "error",
                summary: "OPD ADMIT UNSUCCESSFULL",
                detail: "Something went wrong"
            });
        });
    };
    PatientAdmitComponent.prototype.showDialog = function () {
        // this.display = true;
        this.router.navigate(["/admission/"]);
    };
    PatientAdmitComponent.prototype.numberOnly = function (event) {
        var charCode = event.which ? event.which : event.keyCode;
        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
            return false;
        }
        return true;
    };
    PatientAdmitComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-patient-admit",
            template: __webpack_require__(/*! ./patient-admit.component.html */ "./src/app/patient-admit/patient-admit.component.html"),
            styles: [__webpack_require__(/*! ./patient-admit.component.css */ "./src/app/patient-admit/patient-admit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            primeng_api__WEBPACK_IMPORTED_MODULE_3__["MessageService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _Services_admission_service__WEBPACK_IMPORTED_MODULE_5__["AdmissionService"],
            _patientservice_service__WEBPACK_IMPORTED_MODULE_6__["PatientserviceService"]])
    ], PatientAdmitComponent);
    return PatientAdmitComponent;
}());



/***/ }),

/***/ "./src/app/patient-admit/patient-admit.ts":
/*!************************************************!*\
  !*** ./src/app/patient-admit/patient-admit.ts ***!
  \************************************************/
/*! exports provided: OpdPatientAdmit, OpdAdmitSend */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpdPatientAdmit", function() { return OpdPatientAdmit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpdAdmitSend", function() { return OpdAdmitSend; });
var OpdPatientAdmit = /** @class */ (function () {
    function OpdPatientAdmit() {
    }
    return OpdPatientAdmit;
}());

//we created this model so that we can send only those things we need
var OpdAdmitSend = /** @class */ (function () {
    function OpdAdmitSend() {
    }
    return OpdAdmitSend;
}());



/***/ }),

/***/ "./src/app/patient-observation/patient-observation.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/patient-observation/patient-observation.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ui-progress-spinner {\r\n  pointer-events: all;\r\n  z-index: 99999;\r\n  border: none;\r\n  margin: 0px;\r\n  padding: 0px;\r\n  width: 100%;\r\n  height: 100%;\r\n  top: 0px;\r\n  left: 0px;\r\n  cursor: wait;\r\n  position: fixed;\r\n  background-color: rgba(0, 0, 0, 0.6);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGF0aWVudC1vYnNlcnZhdGlvbi9wYXRpZW50LW9ic2VydmF0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBbUI7RUFDbkIsY0FBYztFQUNkLFlBQVk7RUFDWixXQUFXO0VBQ1gsWUFBWTtFQUNaLFdBQVc7RUFDWCxZQUFZO0VBQ1osUUFBUTtFQUNSLFNBQVM7RUFDVCxZQUFZO0VBQ1osZUFBZTtFQUNmLG9DQUFvQztBQUN0QyIsImZpbGUiOiJzcmMvYXBwL3BhdGllbnQtb2JzZXJ2YXRpb24vcGF0aWVudC1vYnNlcnZhdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnVpLXByb2dyZXNzLXNwaW5uZXIge1xyXG4gIHBvaW50ZXItZXZlbnRzOiBhbGw7XHJcbiAgei1pbmRleDogOTk5OTk7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIG1hcmdpbjogMHB4O1xyXG4gIHBhZGRpbmc6IDBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgdG9wOiAwcHg7XHJcbiAgbGVmdDogMHB4O1xyXG4gIGN1cnNvcjogd2FpdDtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/patient-observation/patient-observation.component.html":
/*!************************************************************************!*\
  !*** ./src/app/patient-observation/patient-observation.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-g-12\">\r\n\r\n  <div class=\"ui-lg-5 ui-md-5 ui-sm-12\">\r\n    <button pButton type=\"button\" class=\"backBtnStyle\" (click)=\"backToMonitor()\" style=\"width:45%;margin-left:30% \"\r\n      label=\"Back\"></button>\r\n  </div>\r\n\r\n</div>\r\n\r\n\r\n\r\n<div class=\"ui-g-12\">\r\n  <p-toast></p-toast>\r\n  <p-card header=\"OBSERVATION\" [style]=\"{\r\n          width: '80%',\r\n          'font-size': '26px',\r\n          'margin-left': '10%',\r\n          'text-align': 'center',\r\n          color: 'green'\r\n        }\">\r\n\r\n    <div class=\"ui-g ui-fluid\">\r\n      <hr style=\"height:2px;width:100%;background-color:green;\" />\r\n      <form style=\"width:100%;\" #myForm=\"ngForm\" (ngSubmit)=\"submitOpd(myForm.value)\">\r\n        <div *ngIf=\"checkStatus\">\r\n          <p-progressSpinner></p-progressSpinner>\r\n          <!-- here message from the server -->\r\n          <h2>Server Failed</h2>\r\n          <p>Please Reload The Page</p>\r\n          <div class=\"ui-g\" style=\"margin-top:-20px !important;\">\r\n            <div class=\"ui-md-3 ui-lg-3 ui-sm-0\"></div>\r\n            <div class=\"ui-md-1 ui-lg-1 ui-sm-0\"></div>\r\n            <br />\r\n            <div class=\"ui-md-4 ui-lg-4 ui-sm-12\">\r\n              <button pButton type=\"button\" label=\"Click to reload\"\r\n                style=\"margin-top: 0px; background-color:green;width:100%;\" onclick=\"location.reload()\"></button>\r\n            </div>\r\n          </div>\r\n          <hr style=\"height:2px;width:100%;background-color:green;\" />\r\n        </div>\r\n        <div [hidden]=\"show\">\r\n          <!-- Add Doctor dropdwon -->\r\n          <div class=\"ui-g\">\r\n            <div class=\"ui-md-2 ui-lg-2\"></div>\r\n            <div class=\"ui-md-8 ui-lg-8 ui-sm-12\">\r\n              <div class=\"ui-inputgroup\">\r\n                <span class=\"ui-inputgroup-addon\" style=\"width:37%;font-size:15px;font-weight:bold;\">Select\r\n                  Doctor</span>\r\n                <p-dropdown (onChange)=\"doctorDropdown()\" [options]=\"doctors\" name=\"doctors\"\r\n                  [(ngModel)]=\"patientObservationObject.doctors\" [filter]=\"true\"\r\n                  [style]=\"{ width: '100%', height: '100%', 'font-size': '20px' }\"\r\n                  [ngStyle]=\"{ width: '80%', 'font-size': '20px' }\" required></p-dropdown>\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n          <!-- Fees Field -->\r\n          <div class=\"ui-g\">\r\n            <div class=\"ui-md-2 ui-lg-2\"></div>\r\n            <div class=\"ui-md-8 ui-lg-8 ui-sm-12\">\r\n              <div class=\"ui-inputgroup\">\r\n                <span class=\"ui-inputgroup-addon\" style=\"width:45%;font-size:15px;font-weight: bold;\">Fees</span>\r\n                <input type=\"text\" name=\"fees\" pInputText ngModel required [(ngModel)]=\"patientObservationObject.fees\"\r\n                  [readOnly]=\"true\" />\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"ui-g\">\r\n            <div class=\"ui-md-2 ui-lg-2\"></div>\r\n            <div class=\"ui-md-8 ui-lg-8 ui-sm-12\">\r\n              <div class=\"ui-inputgroup\">\r\n                <span class=\"ui-inputgroup-addon\" style=\"width:45%;font-size:15px;font-weight: bold;\">Discount $$</span>\r\n                <input type=\"number\" name=\"discount\" pInputText ngModel min=\"0\" placeholder=\"0\"\r\n                  [(ngModel)]=\"patientObservationObject.discount\" (ngModelChange)=\"discounter($event)\"\r\n                  (keypress)=\"numberOnly($event)\" />\r\n              </div>\r\n              <div style=\"padding:0px !important;margin-bottom:0px !important;font-size: 16px; text-align:center;\"\r\n                class=\"alert alert-danger\" [hidden]=\"discountCheck\">\r\n                discount is more than total price!\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!-- Cash Recvied -->\r\n\r\n          <div class=\"ui-g\">\r\n            <div class=\"ui-md-2 ui-lg-2\"></div>\r\n            <div class=\"ui-md-8 ui-lg-8 ui-sm-12\">\r\n              <div class=\"ui-inputgroup\">\r\n\r\n\r\n                <span class=\"ui-inputgroup-addon\" style=\"width:45%;font-size:15px;font-weight: bold;\">Cash\r\n                  Recieved<i style=\"color: red\">*</i></span>\r\n                <input type=\"text\" name=\"cashrecieved\" pInputText ngModel required placeholder=\"Rps\"\r\n                  (keypress)=\"numberOnly($event)\" [(ngModel)]=\"patientObservationObject.cashRecieved\"\r\n                  (input)=\"getTotal(patientObservationObject.cashRecieved)\" />\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n\r\n          <!-- total-->\r\n\r\n          <div class=\"ui-g\">\r\n            <div class=\"ui-md-2 ui-lg-2\"></div>\r\n            <div class=\"ui-md-8 ui-lg-8 ui-sm-12\">\r\n              <div class=\"ui-inputgroup\">\r\n                <span class=\"ui-inputgroup-addon\" style=\"width:45%;font-size:15px;font-weight: bold;\">Total\r\n                  Amount</span>\r\n                <input required type=\"number\" pInputText name=\"total\" ngModel [readOnly]=\"true\"\r\n                  placeholder=\"Total Amount $\" [(ngModel)]=\"patientObservationObject.total\" />\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"ui-g\">\r\n            <div class=\"ui-md-2 ui-lg-2\"></div>\r\n            <div class=\"ui-md-8 ui-lg-8 ui-sm-12\">\r\n              <button [disabled]=\"myForm.invalid\" pButton type=\"submit\" label=\"SAVE\"\r\n                [disabled]=\"myForm.invalid || !discountCheck\"\r\n                style=\"margin-top: 0px; background-color:green;width:100%;\"></button>\r\n            </div>\r\n          </div>\r\n\r\n          <!-- PRINT BUTTON -->\r\n          <div class=\"ui-g\">\r\n\r\n            <div class=\"ui-md-2 ui-lg-2\"></div>\r\n            <div class=\"ui-md-8 ui-lg-8 ui-sm-12\">\r\n              <button [disabled]=\"enable\" printSectionId=\"content\" ngxPrint pButton type=\"button\" label=\"PRINT\"\r\n                style=\"margin-top: 0px; background-color:green;width:100%;\"></button>\r\n\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n\r\n\r\n\r\n        <!-- Print Section -->\r\n\r\n\r\n        <div *ngIf=\"patientObservationObject.doctors !== undefined\" id=\"content\" [hidden]=\"true\">\r\n\r\n          <!-- <div *ngIf=\"addEmergency.name !== undefined\"> -->\r\n\r\n          <h1 style=\"text-align: center; color:green;font-weight:bold;\">OPD OBSERVATION RECEIPT</h1>\r\n          <hr style=\"border: 2px solid black;\">\r\n          <div class=\"ui-g\">\r\n\r\n            <p style=\"font-size: 20px;\"> <b style=\"font-size: 20px;\"> MR No: </b> {{patientMrNo}}</p>\r\n            <p style=\"font-size: 20px;\"><b style=\"font-size: 20px;\"> Name: </b> {{patientName}}</p>\r\n            <p style=\"font-size: 20px;\"><b style=\"font-size: 20px;\"> Doctor Name: </b>\r\n              {{ patientObservationObject.doctors['fullName'] }}</p>\r\n            <p style=\"font-size: 20px;\"><b style=\"font-size: 20px;\"> Date: </b> {{date | date :'short'}}</p>\r\n\r\n\r\n\r\n\r\n\r\n            <hr style=\"border: 1px solid black;width:100%;\" />\r\n\r\n            <div>\r\n              <span>Doctor Fees</span>\r\n              <span style=\"float: right;\"> {{ patientObservationObject.fees }}</span>\r\n              <hr style=\"width:100%;\" />\r\n              <span><b> Discount: </b> <span style=\"float: right;\">\r\n                  {{ patientObservationObject.discount }}</span></span>\r\n\r\n              <hr style=\"border:1px solid black;width:100%;\" />\r\n              <span><b> Total Amount: </b> <span style=\"float:right;\">\r\n                  {{ patientObservationObject.total }}</span></span>\r\n              <hr style=\"border:1px solid black;width:100%;\" />\r\n            </div>\r\n          </div>\r\n        </div>"

/***/ }),

/***/ "./src/app/patient-observation/patient-observation.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/patient-observation/patient-observation.component.ts ***!
  \**********************************************************************/
/*! exports provided: PatientObservationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientObservationComponent", function() { return PatientObservationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _Services_patient_observation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../Services/patient-observation.service */ "./src/app/Services/patient-observation.service.ts");
/* harmony import */ var _adddoctor_doctor_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../adddoctor/doctor.service */ "./src/app/adddoctor/doctor.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _patientobservation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./patientobservation */ "./src/app/patient-observation/patientobservation.ts");
/* harmony import */ var _patientservice_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../patientservice.service */ "./src/app/patientservice.service.ts");









var PatientObservationComponent = /** @class */ (function () {
    function PatientObservationComponent(patientService, router, messageService, doctorService, patientObservationService, activatedRoute, _location) {
        this.patientService = patientService;
        this.router = router;
        this.messageService = messageService;
        this.doctorService = doctorService;
        this.patientObservationService = patientObservationService;
        this.activatedRoute = activatedRoute;
        this._location = _location;
        // selectedDoctor : any;
        this.calDiscount = 0;
        //object of opd consultancy
        this.patientObservationObject = new _patientobservation__WEBPACK_IMPORTED_MODULE_7__["patientobservation"]();
        this.getStatus = true;
        this.checkStatus = false;
        this.show = false;
        this.checked = false;
        this.discountCheck = true;
    }
    PatientObservationComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.show = true
        this.enable = true;
        this.getDoctorsOption();
        var id = this.activatedRoute.snapshot.params['id'];
        this.patientObservationObject.id = id;
        console.log('this is id' + this.patientObservationObject.id);
        this.patientService.getPatientsByMRNO(id).subscribe(function (a) {
            console.log(a);
            _this.patientName = a.name;
            _this.patientMrNo = a.id;
        });
    };
    PatientObservationComponent.prototype.getDoctorsOption = function () {
        var _this = this;
        var i = 0;
        this.patientObservationObject.fees = 0;
        this.doctors = [];
        this.doctorService.getdoctors().subscribe(function (data) {
            if (data) {
                _this.show = false;
                _this.checkStatus = false; //this is for form hide property
                console.log(data);
                data.forEach(function (e) {
                    console.log(e);
                    console.log('This is doctors id ' + e.mrNo);
                    _this.doctors.push({
                        label: e.fullName,
                        value: { mrNo: e.mrNo, fullName: e.fullName, fees: e.fees }
                    });
                    // console.log({id:this.patientObservationObject.doctors});
                });
            }
        }, function (error) {
            console.log('error agya yar');
            _this.show = true;
            _this.checkStatus = true;
            _this.messageService.add({
                severity: 'error',
                summary: 'Error Found',
                detail: 'Something went wrong check your internet connection '
            });
        });
    };
    //Getting Doctors'fees
    PatientObservationComponent.prototype.doctorDropdown = function () {
        this.date = new Date();
        // console.log(this.selectedDoctor);
        console.log(this.patientObservationObject.doctors['fullName']);
        this.patientObservationObject.fees = 0; //it will also work for the negative
        this.patientObservationObject.total = 0;
        this.patientObservationObject.discount = 0;
        this.patientObservationObject.fees = this.patientObservationObject.doctors['fees'];
        console.log(this.patientObservationObject.fees);
        this.patientObservationObject.total =
            this.patientObservationObject.fees + this.patientObservationObject.discount;
    };
    //FUNCTION FOR BACK BUTTON
    PatientObservationComponent.prototype.backToMonitor = function () {
        this._location.back();
    };
    //FUNCTION FOR SUBMIT OPD CONSULTANCY
    PatientObservationComponent.prototype.submitOpd = function () {
        var _this = this;
        this.patientObservationService.savePatientObservation(this.patientObservationObject).subscribe(function (data) {
            console.log(_this.patientObservationObject);
            console.log(data);
            _this.messageService.add({
                severity: 'success',
                summary: 'Succesfully'
            });
            _this.enable = false;
        }, function (error) {
            console.log(error);
            _this.messageService.add({
                severity: 'error',
                summary: 'Error Found',
                detail: 'Something went wrong check your internet connection '
            });
        });
        console.log(this.patientObservationObject);
    };
    //function for totalprice
    PatientObservationComponent.prototype.getTotal = function (value) {
        this.patientObservationObject.cashRecieved = 0;
        console.log(value);
        this.patientObservationObject.cashRecieved = value;
        this.patientObservationObject.total = this.patientObservationObject.fees - this.patientObservationObject.discount;
    };
    PatientObservationComponent.prototype.discounter = function (value) {
        var dis = value;
        this.patientObservationObject.total = this.patientObservationObject.fees;
        dis > this.patientObservationObject.total ? this.discountCheck = false : this.discountCheck = true;
        dis ? 0 : dis;
        this.patientObservationObject.discount = dis;
        this.patientObservationObject.total = this.patientObservationObject.total - this.patientObservationObject.discount;
    };
    PatientObservationComponent.prototype.numberOnly = function (event) {
        var charCode = event.which ? event.which : event.keyCode;
        if (charCode > 31 && (charCode < 48 || charCode > 57 || charCode < 44)) {
            return false;
        }
        return true;
    };
    PatientObservationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
            selector: 'app-patient-observation',
            template: __webpack_require__(/*! ./patient-observation.component.html */ "./src/app/patient-observation/patient-observation.component.html"),
            styles: [__webpack_require__(/*! ./patient-observation.component.css */ "./src/app/patient-observation/patient-observation.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_patientservice_service__WEBPACK_IMPORTED_MODULE_8__["PatientserviceService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            primeng_api__WEBPACK_IMPORTED_MODULE_6__["MessageService"],
            _adddoctor_doctor_service__WEBPACK_IMPORTED_MODULE_3__["DoctorService"],
            _Services_patient_observation_service__WEBPACK_IMPORTED_MODULE_2__["PatientObservationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]])
    ], PatientObservationComponent);
    return PatientObservationComponent;
}());



/***/ }),

/***/ "./src/app/patient-observation/patientobservation.ts":
/*!***********************************************************!*\
  !*** ./src/app/patient-observation/patientobservation.ts ***!
  \***********************************************************/
/*! exports provided: patientobservation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "patientobservation", function() { return patientobservation; });
var patientobservation = /** @class */ (function () {
    function patientobservation() {
    }
    return patientobservation;
}());



/***/ }),

/***/ "./src/app/patient-slip/buttons/buttons.component.css":
/*!************************************************************!*\
  !*** ./src/app/patient-slip/buttons/buttons.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhdGllbnQtc2xpcC9idXR0b25zL2J1dHRvbnMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/patient-slip/buttons/buttons.component.html":
/*!*************************************************************!*\
  !*** ./src/app/patient-slip/buttons/buttons.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  buttons works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/patient-slip/buttons/buttons.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/patient-slip/buttons/buttons.component.ts ***!
  \***********************************************************/
/*! exports provided: ButtonsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonsComponent", function() { return ButtonsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ButtonsComponent = /** @class */ (function () {
    function ButtonsComponent() {
    }
    ButtonsComponent.prototype.ngOnInit = function () {
    };
    ButtonsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-buttons',
            template: __webpack_require__(/*! ./buttons.component.html */ "./src/app/patient-slip/buttons/buttons.component.html"),
            styles: [__webpack_require__(/*! ./buttons.component.css */ "./src/app/patient-slip/buttons/buttons.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ButtonsComponent);
    return ButtonsComponent;
}());



/***/ }),

/***/ "./src/app/patient-slip/child-table/child-table.component.css":
/*!********************************************************************!*\
  !*** ./src/app/patient-slip/child-table/child-table.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhdGllbnQtc2xpcC9jaGlsZC10YWJsZS9jaGlsZC10YWJsZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/patient-slip/child-table/child-table.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/patient-slip/child-table/child-table.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  child-table works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/patient-slip/child-table/child-table.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/patient-slip/child-table/child-table.component.ts ***!
  \*******************************************************************/
/*! exports provided: ChildTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChildTableComponent", function() { return ChildTableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ChildTableComponent = /** @class */ (function () {
    function ChildTableComponent() {
    }
    ChildTableComponent.prototype.ngOnInit = function () {
    };
    ChildTableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-child-table',
            template: __webpack_require__(/*! ./child-table.component.html */ "./src/app/patient-slip/child-table/child-table.component.html"),
            styles: [__webpack_require__(/*! ./child-table.component.css */ "./src/app/patient-slip/child-table/child-table.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ChildTableComponent);
    return ChildTableComponent;
}());



/***/ }),

/***/ "./src/app/patient-slip/master-table/master-table.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/patient-slip/master-table/master-table.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhdGllbnQtc2xpcC9tYXN0ZXItdGFibGUvbWFzdGVyLXRhYmxlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/patient-slip/master-table/master-table.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/patient-slip/master-table/master-table.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  master-table works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/patient-slip/master-table/master-table.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/patient-slip/master-table/master-table.component.ts ***!
  \*********************************************************************/
/*! exports provided: MasterTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MasterTableComponent", function() { return MasterTableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MasterTableComponent = /** @class */ (function () {
    function MasterTableComponent() {
    }
    MasterTableComponent.prototype.ngOnInit = function () {
    };
    MasterTableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-master-table',
            template: __webpack_require__(/*! ./master-table.component.html */ "./src/app/patient-slip/master-table/master-table.component.html"),
            styles: [__webpack_require__(/*! ./master-table.component.css */ "./src/app/patient-slip/master-table/master-table.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MasterTableComponent);
    return MasterTableComponent;
}());



/***/ }),

/***/ "./src/app/patient-slip/patient-card/patient-card.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/patient-slip/patient-card/patient-card.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhdGllbnQtc2xpcC9wYXRpZW50LWNhcmQvcGF0aWVudC1jYXJkLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/patient-slip/patient-card/patient-card.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/patient-slip/patient-card/patient-card.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  patient-card works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/patient-slip/patient-card/patient-card.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/patient-slip/patient-card/patient-card.component.ts ***!
  \*********************************************************************/
/*! exports provided: PatientCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientCardComponent", function() { return PatientCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PatientCardComponent = /** @class */ (function () {
    function PatientCardComponent() {
    }
    PatientCardComponent.prototype.ngOnInit = function () {
    };
    PatientCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-patient-card',
            template: __webpack_require__(/*! ./patient-card.component.html */ "./src/app/patient-slip/patient-card/patient-card.component.html"),
            styles: [__webpack_require__(/*! ./patient-card.component.css */ "./src/app/patient-slip/patient-card/patient-card.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PatientCardComponent);
    return PatientCardComponent;
}());



/***/ }),

/***/ "./src/app/patient-slip/patient-input/patient-input.component.css":
/*!************************************************************************!*\
  !*** ./src/app/patient-slip/patient-input/patient-input.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".one{\r\n\r\n    background-color:#3EB650 !important;\r\n    border-color: #3EB650 !important;\r\n    \r\n    \r\n}\r\n.one:hover{\r\n    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19) !important;\r\n \r\n}\r\nspan{\r\n    color:#3EB650 !important;\r\n    background-color: white !important;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGF0aWVudC1zbGlwL3BhdGllbnQtaW5wdXQvcGF0aWVudC1pbnB1dC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLG1DQUFtQztJQUNuQyxnQ0FBZ0M7OztBQUdwQztBQUNBO0lBQ0ksa0ZBQWtGOztBQUV0RjtBQUNBO0lBQ0ksd0JBQXdCO0lBQ3hCLGtDQUFrQztBQUN0QyIsImZpbGUiOiJzcmMvYXBwL3BhdGllbnQtc2xpcC9wYXRpZW50LWlucHV0L3BhdGllbnQtaW5wdXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5vbmV7XHJcblxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojM0VCNjUwICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItY29sb3I6ICMzRUI2NTAgIWltcG9ydGFudDtcclxuICAgIFxyXG4gICAgXHJcbn1cclxuLm9uZTpob3ZlcntcclxuICAgIGJveC1zaGFkb3c6IDAgOHB4IDE2cHggMCByZ2JhKDAsMCwwLDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsMCwwLDAuMTkpICFpbXBvcnRhbnQ7XHJcbiBcclxufVxyXG5zcGFue1xyXG4gICAgY29sb3I6IzNFQjY1MCAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/patient-slip/patient-input/patient-input.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/patient-slip/patient-input/patient-input.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g-12 ui-fluid  \">\r\n    <div class=\"ui-g-12 ui-md-12\">\r\n    \r\n<div class=\"\">\r\n\r\n        <p-card header=\"PATIENT SLIP(OTHER SERVICES)\" [style]=\"{'width': '100%','margin-top':'5px !important','color':'#3EB650','text-align':'center','height':'30% !important'}\">\r\n            <hr>\r\n            <form #userform=\"ngForm\" (ngSubmit)=\"onclick(userform.value)\">\r\n            <div class=\"ui-g ui-fluid\">\r\n                <div class=\"ui-g-12 ui-md-4\">\r\n                    <div class=\"ui-inputgroup\">\r\n                        <span class=\"ui-inputgroup-addon\"><i class=\"fa fa-user\"></i></span>\r\n                        <input #abc=\"ngModel\" type=\"text\" required pInputText placeholder=\"PATIENT NO\" name=\"pn\"\r\n                            ngModel>\r\n\r\n                    </div>\r\n                    <div [hidden]=\"abc.valid || abc.pristine\" class=\"alert alert-danger\" style=\"padding:0px;margin-bottom:0% \">\r\n                        REQUIRED\r\n                    </div>\r\n                </div>\r\n                <div class=\"ui-md-1\">\r\n                </div>\r\n\r\n                <div class=\"ui-g-12 ui-md-7\">\r\n                    <div class=\"ui-inputgroup\">\r\n                        <span class=\"ui-inputgroup-addon\">DS</span>\r\n                        <input #aaa=\"ngModel\" type=\"text\" required pInputText placeholder=\"Depart Selection\" name=\"ds\"\r\n                            ngModel>\r\n\r\n                    </div>\r\n                    <div [hidden]=\"aaa.valid || aaa.pristine\" class=\"alert alert-danger\" style=\"padding:0px;margin-bottom:0% \">\r\n                        REQUIRED\r\n\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"ui-g-12 ui-md-12\">\r\n                    <div class=\"ui-inputgroup\">\r\n                        <span class=\"ui-inputgroup-addon\">PA</span>\r\n                        <input #tlp=\"ngModel\" type=\"text\" required pInputText placeholder=\"Panel\" name=\"pa\" ngModel>\r\n\r\n                    </div>\r\n                    <div [hidden]=\"tlp.valid || tlp.pristine\" class=\"alert alert-danger\"style=\"padding:0px;margin-bottom:0%; \">\r\n                        REQUIRED\r\n\r\n                    </div>\r\n\r\n                </div>\r\n\r\n                <div class=\"ui-g-12 ui-md-4\">\r\n                    <div class=\"ui-inputgroup\">\r\n                        <span class=\"ui-inputgroup-addon\">MB</span>\r\n                        <input #tlp2=\"ngModel\" type=\"text\" required pInputText placeholder=\"Mobile\" name=\"mb\" ngModel>\r\n\r\n                    </div>\r\n                    <div [hidden]=\"tlp2.valid || tlp2.pristine\" class=\"alert alert-danger\" style=\"padding:0px;margin-bottom:0% \">\r\n                        REQUIRED\r\n\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"ui-md-1\">\r\n                </div>\r\n\r\n\r\n                <div class=\"ui-g-12 ui-md-3\">\r\n                    <div class=\"ui-inputgroup\">\r\n                        <span class=\"ui-inputgroup-addon\">MR</span>\r\n                        <input #tlp3=\"ngModel\" type=\"text\" required pInputText placeholder=\"MR NO\" name=\"mno\" ngModel>\r\n\r\n                    </div>\r\n                    <div [hidden]=\"tlp3.valid || tlp3.pristine\" class=\"alert alert-danger\"style=\"padding:0px;margin-bottom:0% \">\r\n                        REQUIRED\r\n\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"ui-md-1\">\r\n                </div>\r\n\r\n                <div class=\"ui-g-12 ui-md-3\">\r\n                    <div class=\"ui-inputgroup\">\r\n                        <span class=\"ui-inputgroup-addon\">GR</span>\r\n                        <input #tlp4=\"ngModel\" type=\"text\" required pInputText placeholder=\"GENGER\" name=\"gn\" ngModel>\r\n\r\n                    </div>\r\n                    <div [hidden]=\"tlp4.valid || tlp4.pristine\" class=\"alert alert-danger\" style=\"padding:0px;margin-bottom:0% \">\r\n                        REQUIRED\r\n\r\n                    </div>\r\n                </div>\r\n\r\n\r\n                <div class=\"ui-g-12 ui-md-12\">\r\n                    <div class=\"ui-inputgroup\">\r\n                        <span class=\"ui-inputgroup-addon\">PN</span>\r\n                        <input #tlp5=\"ngModel\" type=\"text\" required pInputText placeholder=\"PATIENT NAME\" name=\"ppa\"\r\n                            ngModel>\r\n\r\n                    </div>\r\n                    <div [hidden]=\"tlp5.valid || tlp5.pristine\" class=\"alert alert-danger\" style=\"padding:0px;margin-bottom:0% \">\r\n                        REQUIRED\r\n\r\n                    </div>\r\n\r\n                </div>\r\n\r\n\r\n                <div class=\"ui-g-12 ui-md-7\">\r\n                    <div class=\"ui-inputgroup\">\r\n                        <span class=\"ui-inputgroup-addon\">AR</span>\r\n                        <input #tlp6=\"ngModel\" type=\"text\" required pInputText placeholder=\"AREA LOCATION \" name=\"al\"\r\n                            ngModel>\r\n\r\n                    </div>\r\n                    <div [hidden]=\"tlp6.valid || tlp6.pristine\" class=\"alert alert-danger\"style=\"padding:0px;margin-bottom:0%; \">\r\n                        REQUIRED\r\n\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"ui-md-1\">\r\n                </div>\r\n\r\n\r\n                <div class=\"ui-g-12 ui-md-4\">\r\n                    <div class=\"ui-inputgroup\">\r\n                        <span class=\"ui-inputgroup-addon\">AG</span>\r\n                        <input #tlp7=\"ngModel\" type=\"text\" required pInputText placeholder=\"AGE\" name=\"age\" ngModel>\r\n\r\n                    </div>\r\n                    <div [hidden]=\"tlp7.valid || tlp7.pristine\" class=\"alert alert-danger\" style=\"padding:0px;margin-bottom:0%; \">\r\n                        REQUIRED\r\n                    </div>\r\n                </div>\r\n\r\n\r\n\r\n\r\n                <div class=\"ui-g-12 ui-md-12\">\r\n                    <div class=\"ui-inputgroup\">\r\n                        <span class=\"ui-inputgroup-addon\">DN</span>\r\n                        <input #aab=\"ngModel\" type=\"text\" required  pInputText placeholder=\"DOCTORS NAME\" name=\"dnn\" ngModel >\r\n                            \r\n\r\n                    </div>\r\n                    <div [hidden]=\"aab.valid || aab.pristine\" class=\"alert alert-danger\"style=\"padding:0px;margin-bottom:0%\">\r\n                        REQUIRED\r\n\r\n                    </div>\r\n                </div>\r\n                <div class=\"ui-g-12 ui-md-7\">\r\n                    <div class=\"ui-inputgroup\">\r\n                        <span class=\"ui-inputgroup-addon\">SS</span>\r\n                        <input #aac=\"ngModel\" type=\"text\" required pInputText placeholder=\"SCEARCH SERVICES\" name=\"don1\"\r\n                            ngModel>\r\n\r\n\r\n\r\n\r\n                    </div>\r\n                    <div [hidden]=\"aac.valid || aac.pristine\" class=\"alert alert-danger\"style=\"padding:0px;margin-bottom:0%;\">\r\n                        REQUIRED\r\n\r\n                    </div>\r\n                </div>\r\n\r\n\r\n\r\n                <div class=\"ui-md-1\">\r\n                </div>\r\n\r\n                <div class=\"ui-g-12 ui-md-4\">\r\n                    <div class=\"ui-inputgroup\">\r\n                        <span class=\"ui-inputgroup-addon\">SS</span>\r\n                        <input #aad=\"ngModel\" type=\"text\" required pInputText placeholder=\"SHARE\" name=\"don2\" ngModel>\r\n\r\n\r\n\r\n\r\n                    </div>\r\n                    <div [hidden]=\"aad.valid || aad.pristine\" class=\"alert alert-danger\" style=\"padding:0px; margin-bottom:0%;\">\r\n                        REQUIRED\r\n\r\n                    </div>\r\n                </div>\r\n\r\n\r\n                <div class=\"ui-g-12 \">\r\n                    <div class=\" ui-g-12 ui-md-2\">\r\n                        <button pButton type=\"submit\" label=\"Save\" class=\" ui-button-raised  one\" style=\"width:100%; margin-bottom:0% \"></button></div>\r\n                    <div class=\" ui-g-12 ui-md-2\">\r\n                        <button pButton type=\"button\" label=\"Refresh\" class=\" ui-button-raised  one\"></button></div>\r\n                    <div class=\"ui-g-12 ui-md-2\">\r\n                        <button pButton type=\"button\" label=\"Print\" class=\" ui-button-raised  one\"></button></div>\r\n\r\n                        <div class=\"ui-g-12 ui-md-2\">\r\n                                <button pButton type=\"button\"  label=\"print view\" class=\" ui-button-raised  one\" ></button></div>\r\n                                <div class=\"ui-g-12 ui-md-2\">\r\n                                        <button pButton type=\"button\"  label=\"close\" class=\" ui-button-raised  one\" ></button></div>\r\n                                        <div class=\"ui-g-12 ui-md-1\">\r\n                                                <button pButton type=\"button\"  label=\"&lt;\" class=\" ui-button-raised  one\" ></button></div>\r\n                                                <div class=\"ui-g-12 ui-md-1\">\r\n                                                        <button pButton type=\"button\"  label=\">\" class=\" ui-button-raised one \" ></button></div>\r\n                                \r\n                \r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n                </div>\r\n\r\n\r\n\r\n            </div>\r\n\r\n\r\n        </form>\r\n    </p-card>\r\n</div>\r\n\r\n</div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/patient-slip/patient-input/patient-input.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/patient-slip/patient-input/patient-input.component.ts ***!
  \***********************************************************************/
/*! exports provided: PatientInputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientInputComponent", function() { return PatientInputComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PatientInputComponent = /** @class */ (function () {
    function PatientInputComponent() {
    }
    PatientInputComponent.prototype.ngOnInit = function () {
    };
    PatientInputComponent.prototype.onclick = function (value) {
        console.log(value);
    };
    PatientInputComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-patient-input',
            template: __webpack_require__(/*! ./patient-input.component.html */ "./src/app/patient-slip/patient-input/patient-input.component.html"),
            styles: ["input.ng-valid{border-right:4px solid green;} input.ng-invalid{border-right:4px solid red;}", __webpack_require__(/*! ./patient-input.component.css */ "./src/app/patient-slip/patient-input/patient-input.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PatientInputComponent);
    return PatientInputComponent;
}());



/***/ }),

/***/ "./src/app/patient-slip/patient-payment/patient-payment.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/patient-slip/patient-payment/patient-payment.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".center {\r\n    text-align: center;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    margin-bottom: auto;\r\n    margin-top: auto;\r\n}\r\n\r\n.errorPage {\r\n    background-color: #479761 !important;\r\n    color: white\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGF0aWVudC1zbGlwL3BhdGllbnQtcGF5bWVudC9wYXRpZW50LXBheW1lbnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEM7QUFDSiIsImZpbGUiOiJzcmMvYXBwL3BhdGllbnQtc2xpcC9wYXRpZW50LXBheW1lbnQvcGF0aWVudC1wYXltZW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2VudGVyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogYXV0bztcclxuICAgIG1hcmdpbi10b3A6IGF1dG87XHJcbn1cclxuXHJcbi5lcnJvclBhZ2Uge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ3OTc2MSAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6IHdoaXRlXHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/patient-slip/patient-payment/patient-payment.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/patient-slip/patient-payment/patient-payment.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<<div class=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\"span12\">\r\n            <div class=\"hero-unit center\">\r\n                <h1>Page Not Found <small><font face=\"Tahoma\" color=\"red\">Error 404</font></small></h1>\r\n                <br />\r\n                <p>The page you requested could not be found, either contact your webmaster or try again. Use your browsers <b>Back</b> button to navigate to the page you have prevously come from</p>\r\n                <p><b>Or you could just press this neat little button:</b></p>\r\n                <a href=\"#\" class=\"btn btn-large btn-block errorPage\"><i class=\"icon-home icon-white\"></i> Take Me Home</a>\r\n            </div>\r\n            <br />\r\n            <div class=\"thumbnail\">\r\n                <!-- <center>\r\n                    <h2>Recent Content :</h2>\r\n                </center> -->\r\n            </div>\r\n            <br />\r\n            <!--  -->\r\n            <br />\r\n            <p></p>\r\n            <!-- By ConnerT HTML & CSS Enthusiast -->\r\n        </div>\r\n    </div>\r\n    </div>"

/***/ }),

/***/ "./src/app/patient-slip/patient-payment/patient-payment.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/patient-slip/patient-payment/patient-payment.component.ts ***!
  \***************************************************************************/
/*! exports provided: PatientPaymentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientPaymentComponent", function() { return PatientPaymentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PatientPaymentComponent = /** @class */ (function () {
    function PatientPaymentComponent() {
    }
    PatientPaymentComponent.prototype.ngOnInit = function () {
    };
    PatientPaymentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-patient-payment',
            template: __webpack_require__(/*! ./patient-payment.component.html */ "./src/app/patient-slip/patient-payment/patient-payment.component.html"),
            styles: [__webpack_require__(/*! ./patient-payment.component.css */ "./src/app/patient-slip/patient-payment/patient-payment.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PatientPaymentComponent);
    return PatientPaymentComponent;
}());



/***/ }),

/***/ "./src/app/patient-slip/patient-slip.component.css":
/*!*********************************************************!*\
  !*** ./src/app/patient-slip/patient-slip.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhdGllbnQtc2xpcC9wYXRpZW50LXNsaXAuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/patient-slip/patient-slip.component.html":
/*!**********************************************************!*\
  !*** ./src/app/patient-slip/patient-slip.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <app-patient-input> </app-patient-input>\r\n"

/***/ }),

/***/ "./src/app/patient-slip/patient-slip.component.ts":
/*!********************************************************!*\
  !*** ./src/app/patient-slip/patient-slip.component.ts ***!
  \********************************************************/
/*! exports provided: PatientSlipComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientSlipComponent", function() { return PatientSlipComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PatientSlipComponent = /** @class */ (function () {
    function PatientSlipComponent() {
    }
    PatientSlipComponent.prototype.ngOnInit = function () {
    };
    PatientSlipComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-patient-slip',
            template: __webpack_require__(/*! ./patient-slip.component.html */ "./src/app/patient-slip/patient-slip.component.html"),
            styles: [__webpack_require__(/*! ./patient-slip.component.css */ "./src/app/patient-slip/patient-slip.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PatientSlipComponent);
    return PatientSlipComponent;
}());



/***/ }),

/***/ "./src/app/patient-transaction-history/patient-transaction-history.component.css":
/*!***************************************************************************************!*\
  !*** ./src/app/patient-transaction-history/patient-transaction-history.component.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhdGllbnQtdHJhbnNhY3Rpb24taGlzdG9yeS9wYXRpZW50LXRyYW5zYWN0aW9uLWhpc3RvcnkuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/patient-transaction-history/patient-transaction-history.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/patient-transaction-history/patient-transaction-history.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-g-12\">\r\n    <div class=\"ui-lg-5 ui-md-5 ui-sm-12\">\r\n        <button pButton type=\"button\" class=\"backBtnStyle\" style=\"margin-left:1%; margin-bottom: 1%; height:30px; width:45%;margin-left:30%\" (click)=\"back()\" label=\"Back\">\r\n</button>\r\n    </div>\r\n</div>\r\n<app-monitorquickview> </app-monitorquickview>\r\n\r\n<p-table style=\"text-align: center;\" #dt [scrollable]=\"true\" [resizableColumns]=\"true\"  [totalRecords]=\"totalRecords\" [paginator]=\"true\" [value]=\"transaction\" [rows]=\"10\" [style]=\"{ 'margin-top': '30px' }\" [columns]=\"cols\">\r\n    <ng-template pTemplate=\"caption\">\r\n        <div class=\"ui-g-12\">\r\n            <h1 style=\"font-weight:bold;color: green;\">PATIENT TRANSACTION HISTORY</h1>\r\n            <hr style=\"background-color:rgb(17, 17, 17);height:3px;\" />\r\n        </div>\r\n        <div style=\"text-align: right\">\r\n            <i class=\"fa fa-search\" style=\"margin:4px 4px 0 0\"></i>\r\n            <input type=\"text\" pInputText size=\"50\" placeholder=\"Global Filter\" (input)=\"dt.filterGlobal($event.target.value, 'contains')\" style=\"width:auto;margin-right:14px;\" />\r\n        </div>\r\n    </ng-template>\r\n    <ng-template pTemplate=\"header\" let-columns>\r\n        <tr>\r\n            <th style=\"text-align:center\" *ngFor=\"let col of columns\">\r\n                {{ col.header }}\r\n            </th>\r\n            <th style=\"text-align:center\">Actions</th>\r\n        </tr>\r\n    </ng-template>\r\n\r\n    <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\r\n        <tr>\r\n            <td style=\"overflow:auto;\" *ngFor=\"let col of columns\">\r\n                {{ rowData[col.field] }}\r\n            </td>\r\n            <td>\r\n                <button pButton style=\"width:90%;margin-left:5%;background-color: rgb(211, 56, 56);\" type=\"button\" label=\"Delete\" (click)=\"inactive(rowData['id'])\"></button>\r\n            </td>\r\n        </tr>\r\n    </ng-template>\r\n\r\n</p-table>"

/***/ }),

/***/ "./src/app/patient-transaction-history/patient-transaction-history.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/patient-transaction-history/patient-transaction-history.component.ts ***!
  \**************************************************************************************/
/*! exports provided: PatientTransactionHistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientTransactionHistoryComponent", function() { return PatientTransactionHistoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_patient_transaction_history_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/patient-transaction-history.service */ "./src/app/services/patient-transaction-history.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var PatientTransactionHistoryComponent = /** @class */ (function () {
    function PatientTransactionHistoryComponent(history, route, activateRoute) {
        this.history = history;
        this.route = route;
        this.activateRoute = activateRoute;
        this.totalRecords = 0;
        this.datasource = [];
        this.cols = [
            { field: 'id', header: 'ID' },
            { field: 'transactionDate', header: 'Transaction Date' },
            { field: 'receivedAmount', header: 'Received Amount' },
            { field: 'totalAmount', header: 'Total Amount' },
            { field: 'transactionType', header: 'Transaction Type' },
            { field: 'description', header: 'Description' },
            { field: 'currency', header: 'Currency' },
            { field: 'operationType', header: 'Operation Type' },
            { field: 'dues', header: 'Dues' }
        ];
    }
    PatientTransactionHistoryComponent.prototype.ngOnInit = function () {
        this.showTable();
    };
    PatientTransactionHistoryComponent.prototype.back = function () {
        var id = this.activateRoute.snapshot.params['id'];
        this.route.navigate(['/monitor/' + id]);
    };
    PatientTransactionHistoryComponent.prototype.showTable = function () {
        var _this = this;
        this.transaction = [];
        //this.loading = true;
        this.totalRecords = 0;
        var id = this.activateRoute.snapshot.params['id'];
        this.history.getPatientTransactionHistory(id).subscribe(function (data) {
            console.log("response is here", data);
            _this.datasource = [];
            _this.datasource = data;
            _this.totalRecords = _this.datasource.length;
            _this.transaction = data;
        });
    };
    // Zamar did'nt create the fucntion for delete
    PatientTransactionHistoryComponent.prototype.inactive = function (value) {
        console.log(value);
    };
    PatientTransactionHistoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-patient-transaction-history',
            template: __webpack_require__(/*! ./patient-transaction-history.component.html */ "./src/app/patient-transaction-history/patient-transaction-history.component.html"),
            styles: [__webpack_require__(/*! ./patient-transaction-history.component.css */ "./src/app/patient-transaction-history/patient-transaction-history.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_patient_transaction_history_service__WEBPACK_IMPORTED_MODULE_2__["PatientTransactionHistoryService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], PatientTransactionHistoryComponent);
    return PatientTransactionHistoryComponent;
}());



/***/ }),

/***/ "./src/app/patient-transactions/patient-transactions.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/patient-transactions/patient-transactions.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhdGllbnQtdHJhbnNhY3Rpb25zL3BhdGllbnQtdHJhbnNhY3Rpb25zLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/patient-transactions/patient-transactions.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/patient-transactions/patient-transactions.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p-toast></p-toast>\r\n<div class=\"ui-g-12\">\r\n    <div class=\"ui-lg-5 ui-md-5 ui-sm-12\">\r\n        <button pButton type=\"button\" class=\"backBtnStyle\" (click)=\"backToMonitor()\" style=\"width:45%;margin-left:30% \" label=\"Back\"></button>\r\n    </div>\r\n</div>\r\n<div class=\"ui-g-12\">\r\n    <app-monitorquickview> </app-monitorquickview>\r\n</div>\r\n\r\n\r\n<div class=\"ui-g-12\">\r\n\r\n\r\n    <p-table style=\"text-align: center;\"  [paginator]=\"true\" [rows]=\"10\" [style]=\"{ 'margin-top': '20px' }\"  [totalRecords]=\"totalRecords\" #dt [columns]=\"cols\" [value]=\"transaction\">\r\n\r\n\r\n        <ng-template pTemplate=\"caption\">\r\n            <div class=\"ui-g-12\">\r\n                <h1 style=\"font-weight:bold;color: green;\">PATIENT TRANSACTION</h1>\r\n                <hr style=\"background-color:rgb(17, 17, 17);height:3px;\" />\r\n            </div>\r\n            <div style=\"text-align: right\">\r\n                <i class=\"fa fa-search\" style=\"margin:4px 4px 0 0\"></i>\r\n                <input type=\"text\" pInputText size=\"50\" placeholder=\"Global Filter\" (input)=\"dt.filterGlobal($event.target.value, 'contains')\" style=\"width:auto\">\r\n            </div>\r\n\r\n        </ng-template>\r\n        <ng-template pTemplate=\"header\" let-columns>\r\n            <tr>\r\n                <th *ngFor=\"let col of columns\">\r\n                    {{col.header}}\r\n                </th>\r\n                <th style=\"text-align: center;\" pResizableColumn>\r\n                    Actions\r\n                </th>\r\n\r\n            </tr>\r\n            <!-- <div *ngIf=\"showLoading\" style=\"margin-left: 325%;\">\r\n              <p-progressSpinner></p-progressSpinner>\r\n          </div> -->\r\n        </ng-template>\r\n\r\n        <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\r\n\r\n            <tr [pSelectableRow]=\"rowData\">\r\n                <td *ngFor=\"let col of columns\" style=\"overflow: auto;\">\r\n                    {{rowData[col.field]}}\r\n                </td>\r\n                <td>\r\n\r\n\r\n                    <app-transaction-edit [dues]=\"rowData['dues']\" [receivedAmount]=\"rowData['receivedAmount']\" [transactionId]=\"rowData['id']\" [data]=\"datasource\"></app-transaction-edit>\r\n\r\n\r\n                    <button pButton [ngStyle]=\"{width:'80px',margin:'8px'}\" type=\"button\" label=\"Delete\" class=\"ui-button-error\" (click)=\"deletePatientTransaction(rowData['transactionRefId'])\"></button>\r\n                </td>\r\n\r\n            </tr>\r\n        </ng-template>\r\n    </p-table>\r\n</div>"

/***/ }),

/***/ "./src/app/patient-transactions/patient-transactions.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/patient-transactions/patient-transactions.component.ts ***!
  \************************************************************************/
/*! exports provided: PatientTransactionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientTransactionsComponent", function() { return PatientTransactionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Services_patient_transactions_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Services/patient-transactions.service */ "./src/app/Services/patient-transactions.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_5__);







var PatientTransactionsComponent = /** @class */ (function () {
    function PatientTransactionsComponent(messageService, transactionsService, route, location, activateRoute) {
        this.messageService = messageService;
        this.transactionsService = transactionsService;
        this.route = route;
        this.location = location;
        this.activateRoute = activateRoute;
        this.totalRecords = 0;
        this.datasource = [];
        this.cols = [
            { field: 'id', header: 'ID' },
            { field: 'transactionDate', header: 'Transaction Date' },
            { field: 'receivedAmount', header: 'Received Amount' },
            { field: 'totalAmount', header: 'Total Amount' },
            { field: 'transactionType', header: 'Transaction Type' },
            { field: 'description', header: 'Description' },
            { field: 'currency', header: 'Currency' },
            { field: 'operationType', header: 'Operation Type' },
            { field: 'dues', header: 'Dues' }
        ];
    }
    PatientTransactionsComponent.prototype.ngOnInit = function () {
        this.showTable();
    };
    PatientTransactionsComponent.prototype.backToMonitor = function () {
        this.location.back();
    };
    PatientTransactionsComponent.prototype.showTable = function () {
        var _this = this;
        this.transaction = [];
        //this.loading = true;
        this.totalRecords = 0;
        var id = this.activateRoute.snapshot.params['id'];
        this.transactionsService.getPatientTransactions(id).subscribe(function (data) {
            console.log('response is here', data);
            _this.datasource = [];
            _this.datasource = data;
            _this.totalRecords = _this.datasource.length;
            // data["transactionDate"] = new Date( data["transactionDate"]).toDateString()
            // this.transaction = data;
            var i = 1;
            data.map(function (p) {
                console.log(p);
                _this.transaction.push({
                    transactionRefId: p.transactionRefId,
                    id: p.id,
                    transactionDate: new Date(p.transactionDate).toDateString(),
                    receivedAmount: p.receivedAmount,
                    totalAmount: p.totalAmount,
                    transactionType: p.transactionType,
                    description: p.description,
                    currency: p.currency,
                    operationType: p.operationType,
                    dues: p.dues
                });
                i++;
            });
            //this.loading = false;
        });
    };
    PatientTransactionsComponent.prototype.editPatientTransaction = function (id) {
        console.log(id);
    };
    PatientTransactionsComponent.prototype.deletePatientTransaction = function (transactionRefId) {
        var _this = this;
        this.transactionsService.deletePatientTransaction(transactionRefId).subscribe(function (response) {
            _this.messageService.add({ severity: 'success', summary: 'Service Message', detail: response.message });
            console.log(response);
            _this.showTable();
        }, function (error) {
            _this.messageService.add({ severity: 'error', summary: 'Service Message', detail: error });
        });
    };
    PatientTransactionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-patient-transactions',
            template: __webpack_require__(/*! ./patient-transactions.component.html */ "./src/app/patient-transactions/patient-transactions.component.html"),
            styles: [__webpack_require__(/*! ./patient-transactions.component.css */ "./src/app/patient-transactions/patient-transactions.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [primeng_api__WEBPACK_IMPORTED_MODULE_5__["MessageService"],
            _Services_patient_transactions_service__WEBPACK_IMPORTED_MODULE_3__["PatientTransactionsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], PatientTransactionsComponent);
    return PatientTransactionsComponent;
}());



/***/ }),

/***/ "./src/app/patient/patient.component.css":
/*!***********************************************!*\
  !*** ./src/app/patient/patient.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhdGllbnQvcGF0aWVudC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/patient/patient.component.html":
/*!************************************************!*\
  !*** ./src/app/patient/patient.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>PATIENT FOUND SUCCUESSFULLY</h1>\r\n<p-toast [style]=\"{ marginTop: '40px'}\" position=\"top-right\">\r\n</p-toast>\r\n<!--  -->\r\n"

/***/ }),

/***/ "./src/app/patient/patient.component.ts":
/*!**********************************************!*\
  !*** ./src/app/patient/patient.component.ts ***!
  \**********************************************/
/*! exports provided: PatientComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientComponent", function() { return PatientComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var PatientComponent = /** @class */ (function () {
    function PatientComponent(mesgService) {
        this.mesgService = mesgService;
    }
    PatientComponent.prototype.ngOnInit = function () {
        this.mesgService.add({
            severity: 'Patinent  found',
            detail: 'How can i help you ?'
        });
    };
    PatientComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-patient',
            template: __webpack_require__(/*! ./patient.component.html */ "./src/app/patient/patient.component.html"),
            styles: [__webpack_require__(/*! ./patient.component.css */ "./src/app/patient/patient.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [primeng_api__WEBPACK_IMPORTED_MODULE_1__["MessageService"]])
    ], PatientComponent);
    return PatientComponent;
}());



/***/ }),

/***/ "./src/app/patientform/patient.ts":
/*!****************************************!*\
  !*** ./src/app/patientform/patient.ts ***!
  \****************************************/
/*! exports provided: Patient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Patient", function() { return Patient; });
var Patient = /** @class */ (function () {
    function Patient() {
    }
    return Patient;
}());



/***/ }),

/***/ "./src/app/patientform/patientform.component.css":
/*!*******************************************************!*\
  !*** ./src/app/patientform/patientform.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhdGllbnRmb3JtL3BhdGllbnRmb3JtLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/patientform/patientform.component.html":
/*!********************************************************!*\
  !*** ./src/app/patientform/patientform.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g-12\">\r\n    <div class=\"ui-lg-5 ui-md-5 ui-sm-12\">\r\n        <button pButton type=\"button\" class=\"backBtnStyle\" (click)=\"goBack()\" style=\"width:45%;margin-left:30% \" label=\"Back\"></button>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"container\">\r\n    <div class=\"ui-g-12\">\r\n        <p-card>\r\n            <!-- back button and heading div -->\r\n            <div class=\"ui-g ui-fluid\">\r\n                <!-- <div class=\"ui-g-4 ui-md-2 ui-lg-2\">\r\n            <button type=\"button\" class=\"btn-block colorSetAllButtons\" (click)=\"goBack()\">\r\n\r\n    Back\r\n    </button>\r\n        </div> -->\r\n                <div class=\"ui-g-12 ui-sm-12 ui-md-8 ui-lg-12\">\r\n                    <h3 style=\"text-align: center;font-weight: bold;color: green;\">\r\n                        ADD A NEW PATIENT\r\n                    </h3>\r\n                </div>\r\n                <!-- checkbox for registration of gyny and obs -->\r\n                <div class=\"ui-g-12\" style=\"float: left;\">\r\n                    <label style=\"color:rgb(67, 139, 78); font-size: 18px; \">Gyny/Obs\r\n    </label> &nbsp;\r\n                    <p-checkbox [(ngModel)]=\"isGynyObs\" (onChange)=\"isGynObsFn()\" binary=\"true\" name=\"GynyObs\"></p-checkbox>\r\n                </div>\r\n            </div>\r\n            <hr />\r\n            <!-- ADD PATIENT FORM -->\r\n            <form #userForm=\"ngForm\">\r\n                <!-- Row 1 -->\r\n                <div class=\"ui-g ui-fluid\">\r\n                    <div class=\"ui-g-12 ui-md-6\">\r\n                        <div class=\"ui-inputgroup\">\r\n                            <span style=\"width:30%;\" class=\"ui-inputgroup-addon\"><b>Full Name&ensp;<i style=\"color: red\">*</i></b><i></i></span>\r\n                            <!-- Full name -->\r\n\r\n                            <input type=\"text\" [(ngModel)]=\"patient.name\" #nameref=\"ngModel\" required pInputText placeholder=\"&ensp;Full Name\" style=\"width:100%;\" name=\"fullName\" />\r\n                            <span class=\"ui-inputgroup-addon\"></span>\r\n                        </div>\r\n                        <div style=\"padding:0px;margin-bottom:0px\" [hidden]=\"nameref.valid || nameref.pristine\" class=\"alert alert-danger\">\r\n                            Please Enter a Name\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"ui-md-1\"></div>\r\n                    <!-- cnic_n0 -->\r\n                    <div class=\"ui-g-12 ui-md-5\">\r\n                        <div class=\"ui-inputgroup\">\r\n\r\n                            <span style=\"width:30%;\" class=\"ui-inputgroup-addon\"><b>CNIC&ensp;</b><i></i></span>\r\n                            <input type=\"text\" (keypress)=\"numberOnly($event)\" #position=\"ngModel\" pInputText placeholder=\"&ensp;Cnic (Optional)\" name=\"position\" [(ngModel)]=\"patient.cnic\" ngModel />\r\n                            <span class=\"ui-inputgroup-addon\"></span>\r\n                        </div>\r\n\r\n                        <div [hidden]=\"position.valid || position.pristine\" style=\"padding:0px;margin-bottom:0px\" class=\"alert alert-danger\">\r\n                            ! required\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <!-- Row 2 -->\r\n                <div class=\"ui-g ui-fluid\">\r\n                    <!-- Age No -->\r\n                    <div class=\"ui-g-12 ui-md-6\">\r\n                        <div class=\"ui-inputgroup\">\r\n                            <span style=\"width:30%\" class=\"ui-inputgroup-addon\"><b>Age&ensp;<i style=\"color: red\">*</i></b><i></i></span>\r\n\r\n                            <input type=\"text\" (keypress)=\"numberOnly($event)\" #agRef=\"ngModel\" pInputText required placeholder=\"&ensp;Age\" name=\"age\" ngModel [(ngModel)]=\"patient.age\" />\r\n                            <span class=\"ui-inputgroup-addon\"></span>\r\n                        </div>\r\n                        <div style=\"padding:0px;margin-bottom:0px\" [hidden]=\"agRef.valid || agRef.pristine\" class=\"alert alert-danger\">\r\n                            !required\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"ui-md-1\"></div>\r\n                    <!-- Gender Dropdown -->\r\n                    <div class=\"ui-g-12 ui-md-5\">\r\n                        <div class=\"ui-inputgroup\">\r\n\r\n                            <span style=\"width: 30%\" class=\"ui-inputgroup-addon\"><b>GENDER&ensp;<i style=\"color: red\">*</i></b><i></i></span>\r\n\r\n\r\n\r\n                            <p-dropdown [options]=\"gender\" name=\"gender\" placeholder=\"Select Gender\" [(ngModel)]=\"patient.gender\" required #genderRef=\"ngModel\" [autoWidth]=\"false\" [ngStyle]=\"{ width: '100%' }\">\r\n                            </p-dropdown>\r\n\r\n                            <!-- <span class=\"ui-inputgroup-addon\"></span> -->\r\n                            <!-- <label style=\"margin-top:5px\">{{ patient.gender }}</label> -->\r\n                        </div>\r\n                        <div style=\"padding:0px;margin-bottom:0px\" [hidden]=\"genderRef.valid || genderRef.pristine\" class=\"alert alert-danger\">\r\n                            !required\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <!-- ROW 3 -->\r\n                <div class=\"ui-g ui-fluid\">\r\n                    <!-- Mobile No -->\r\n                    <div class=\"ui-g-12 ui-md-6\">\r\n                        <div class=\"ui-inputgroup\">\r\n                            <span style=\"width:30%\" class=\"ui-inputgroup-addon\"><b>Phone No&ensp;<i style=\"color: red\">*</i></b><i></i></span>\r\n                            <input type=\"text\" (keypress)=\"numberOnly($event)\" #TelRef=\"ngModel\" pInputText required placeholder=\"&ensp;PhoneNo\" name=\"MobileNo\" ngModel [(ngModel)]=\"patient.phoneNo\" />\r\n                            <span class=\"ui-inputgroup-addon\"></span>\r\n\r\n                        </div>\r\n                        <div style=\"padding:0px;margin-bottom:0px\" [hidden]=\"TelRef.valid || TelRef.pristine\" class=\"alert alert-danger\">\r\n                            Please Enter a Valid Mobile No.\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"ui-md-1\"></div>\r\n                    <!-- adionality -->\r\n                    <div class=\"ui-g-12 ui-md-5\">\r\n                        <div class=\"ui-inputgroup\">\r\n\r\n                            <span style=\"width:30%\" class=\"ui-inputgroup-addon\"><b>ADDRESS&ensp;</b><i></i></span>\r\n                            <input type=\"text\" #adRef=\"ngModel\" pInputText placeholder=\"&ensp;Address (Optional)\" name=\"Address\" ngModel autocomplete=\"off\" [(ngModel)]=\"patient.address\" />\r\n                            <span class=\"ui-inputgroup-addon\"></span>\r\n                        </div>\r\n                        <div style=\"padding:0px;margin-bottom:0px\" [hidden]=\"adRef.valid || adRef.pristine\" class=\"alert alert-danger\">\r\n                            !required\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <!-- Row 4 -->\r\n                <div *ngIf=\"isGynyObs\" class=\"ui-g ui-fluid\">\r\n                    <div class=\"ui-g-12 ui-md-6\">\r\n                        <div class=\"ui-inputgroup\">\r\n                            <span style=\"width:30%;\" class=\"ui-inputgroup-addon\"><b>Father/Husband Name&ensp;</b><i></i\r\n        ></span>\r\n                            <!-- Full name -->\r\n                            <input type=\"text\" [(ngModel)]=\"patient.husbandOfAndFatherOf\" #nameref=\"ngModel\" required pInputText placeholder=\"&ensp;Husband Name/Father Name\" style=\"width:100%;\" name=\"husbandOrFatherName\" />\r\n                            <!-- <span class=\"ui-inputgroup-addon\"></span> -->\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"ui-md-1\"></div>\r\n                    <!-- cnic_n0 -->\r\n                    <div class=\"ui-g-12 ui-md-5\">\r\n                        <div class=\"ui-inputgroup\">\r\n                            <span style=\"width:30%;\" class=\"ui-inputgroup-addon\"><b style=\"font-size: 11px;\">REGISTRATION DATE&ensp;</b><i></i\r\n        ></span>\r\n                            <p-calendar [(ngModel)]=\"patient.registrationDate\" name=\"calender\" required></p-calendar>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <!-- Row5  -->\r\n                <div class=\"ui-g ui-fluid\">\r\n                    <!-- Submit button -->\r\n                    <div class=\"ui-g-12 ui-md-12\">\r\n\r\n                        <button type=\"button\" (click)=\"showConfirm()\" [disabled]=\"userForm.invalid\" class=\"colorSetAllButtons\" style=\"width:100%;padding: 6px;\">\r\n        Submit\r\n    </button>\r\n\r\n                        <!-- Confirm wala toast -->\r\n                        <p-toast position=\"center\" key=\"c\" (onClose)=\"onReject()\" [modal]=\"true\" [baseZIndex]=\"5000\">\r\n                            <ng-template let-message pTemplate=\"message\">\r\n                                <div style=\"text-align: center\">\r\n                                    <i class=\"pi pi-exclamation-triangle\" style=\"font-size: 3em\"></i>\r\n                                    <h3>{{ message.summary }}</h3>\r\n                                    <p>{{ message.detail }}</p>\r\n                                </div>\r\n                                <div class=\"ui-g ui-fluid\">\r\n                                    <div class=\"ui-g-6\">\r\n                                        <button type=\"button\" pButton (click)=\"onConfirm();userForm.reset();\" label=\"Yes\" class=\"submitBtnStyle\"></button>\r\n                                    </div>\r\n                                    <div class=\"ui-g-6\">\r\n                                        <button type=\"button\" pButton (click)=\"onReject()\" label=\"No\" class=\"ui-button-secondary\"></button>\r\n                                    </div>\r\n                                </div>\r\n                            </ng-template>\r\n                        </p-toast>\r\n                        <p-toast key=\"p\" [showTransitionOptions]=\"'2ms'\"></p-toast>\r\n\r\n                    </div>\r\n                </div>\r\n            </form>\r\n        </p-card>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/patientform/patientform.component.ts":
/*!******************************************************!*\
  !*** ./src/app/patientform/patientform.component.ts ***!
  \******************************************************/
/*! exports provided: PatientformComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientformComponent", function() { return PatientformComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_app_patientservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/patientservice.service */ "./src/app/patientservice.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _patient__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./patient */ "./src/app/patientform/patient.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");







// import { Router } from '@angular/router';
// import { ViewChild, ElementRef } from '@angular/core'; //viewChild decorator is used to access refrence varibale outside the template  we can access id of any component using view child
var PatientformComponent = /** @class */ (function () {
    // @ViewChild('userForm') formRef: ElementRef; //view refrecne is called after ngAfterInit();
    function PatientformComponent(msgService, patientService, router, activeRoute, _location) {
        this.msgService = msgService;
        this.patientService = patientService;
        this.router = router;
        this.activeRoute = activeRoute;
        this._location = _location;
        this.gender = [];
        this.patient = new _patient__WEBPACK_IMPORTED_MODULE_4__["Patient"]();
        this.isGynyObs = false;
        this.gender = [{ label: 'Male', value: 'Male' }, { label: 'Female', value: 'Female' }];
    }
    PatientformComponent.prototype.ngOnInit = function () {
        console.log(this.isGynyObs);
        this.patientid = this.activeRoute.snapshot.params['id'];
        if (this.patientid) {
            this.gettingPatientById();
        }
    };
    PatientformComponent.prototype.isGynObsFn = function () {
        console.log(this.isGynyObs);
        this.patient.gynAndObsRegistration = this.isGynyObs;
        if (!this.isGynyObs) {
            this.patient.registrationDate = null;
            this.patient.husbandOfAndFatherOf = null;
        }
        console.log("mein gynu obs hon", this.patient.gynAndObsRegistration);
    };
    PatientformComponent.prototype.gettingPatientById = function () {
        var _this = this;
        this.patientService.getPatientsByMRNO(this.patientid).subscribe(function (data) {
            if (_this.patientid && data.gynAndObsRegistration == true) {
                _this.isGynyObs = true;
                _this.patient.name = data.name;
                _this.patient.cnic = data.cnic;
                _this.patient.age = data.age;
                _this.patient.address = data.address;
                _this.patient.gender = data.gender;
                _this.patient.phoneNo = data.phoneNo;
                _this.patient.husbandOfAndFatherOf = data.husbandOfAndFatherOf;
                _this.patient.registrationDate = new Date(data.registrationDate);
                console.log("if main hun");
            }
            else if (_this.patientid) {
                _this.patient.name = data.name;
                _this.patient.cnic = data.cnic;
                _this.patient.age = data.age;
                _this.patient.address = data.address;
                _this.patient.gender = data.gender;
                _this.patient.phoneNo = data.phoneNo;
                console.log("else if main hun");
            }
        });
    };
    // onSubmit() {
    // if(this.patientid != undefined){
    //   this.patientService.UpdatePatient(this.patientid,this.patient).subscribe(
    //     data =>{
    //       this.msgService.add({
    //         severity: 'info',
    //         summary: 'Service message',
    //         detail: 'Patient updated successfully!'
    //       });
    //     },
    //     error => {
    //       console.log(error);
    //       this.msgService.add({
    //         severity: 'error',
    //         summary: 'Error Found',
    //         detail: 'Something went wrong check your internet connection '
    //       });
    //     }
    //   );
    //   console.log("in update patient",this.patient);
    // }
    // else{
    //   console.log("Request payload",this.patient)
    PatientformComponent.prototype.showConfirm = function () {
        this.msgService.clear();
        this.msgService.add({ key: 'c', sticky: true, severity: 'warn', summary: 'Are you sure?', detail: 'Confirm to proceed' });
    };
    PatientformComponent.prototype.onConfirm = function () {
        var _this = this;
        this.msgService.clear('c');
        if (this.patientid) {
            this.patientService.UpdatePatient(this.patientid, this.patient).subscribe(function (data) {
                _this.msgService.add({
                    key: 'p',
                    severity: 'info',
                    summary: 'Service message',
                    detail: 'Patient updated successfully!'
                });
            }, function (error) {
                console.log(error);
                _this.msgService.add({
                    key: 'p',
                    severity: 'error',
                    summary: 'Error Found',
                    detail: 'Something went wrong check your internet connection '
                });
            });
            console.log("in update patient", this.patient);
        }
        // Agr new patient aya hay koi add hony toh
        else {
            console.log("Request payload", this.patient);
            this.patientService.postPatient(this.patient).subscribe(function (data) {
                if (data == "00") {
                    _this.msgService.add({
                        key: 'p',
                        severity: 'success',
                        summary: 'Patient Added',
                        detail: 'Added'
                    });
                }
                else {
                    _this.msgService.add({
                        key: 'p',
                        severity: 'warn',
                        summary: 'Paient Already Exists ',
                        detail: 'Failed'
                    });
                }
            }, function (error) {
                console.log(error);
                _this.msgService.add({
                    key: 'p',
                    severity: 'warn',
                    summary: 'Paient Already Exists ',
                    detail: 'Failed'
                });
            });
        }
    };
    PatientformComponent.prototype.onReject = function () {
        this.msgService.clear('c');
    };
    PatientformComponent.prototype.numberOnly = function (event) {
        var charCode = event.which ? event.which : event.keyCode;
        if (charCode > 31 && (charCode < 48 || charCode > 57 || charCode < 44)) {
            return false;
        }
        return true;
    };
    PatientformComponent.prototype.goBack = function () {
        this._location.back();
    };
    PatientformComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-patientform',
            template: __webpack_require__(/*! ./patientform.component.html */ "./src/app/patientform/patientform.component.html"),
            styles: [__webpack_require__(/*! ./patientform.component.css */ "./src/app/patientform/patientform.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [primeng_api__WEBPACK_IMPORTED_MODULE_1__["MessageService"],
            src_app_patientservice_service__WEBPACK_IMPORTED_MODULE_2__["PatientserviceService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"]])
    ], PatientformComponent);
    return PatientformComponent;
}());



/***/ }),

/***/ "./src/app/patientservice.service.ts":
/*!*******************************************!*\
  !*** ./src/app/patientservice.service.ts ***!
  \*******************************************/
/*! exports provided: PatientserviceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientserviceService", function() { return PatientserviceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




var PatientserviceService = /** @class */ (function () {
    function PatientserviceService(http) {
        this.http = http;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + "api/patient/";
    }
    PatientserviceService.prototype.getPatientsByMRNO = function (mrNo) {
        // const params = new HttpParams().set('id', mrNo.toString()); concatenation & params do the
        // same work
        return this.http.get(this.baseUrl + mrNo);
    };
    // tslint:disable-next-line: ban-types
    PatientserviceService.prototype.postPatient = function (patient) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        return this.http.post(this.baseUrl, patient, { headers: headers });
    };
    PatientserviceService.prototype.getPatients = function () {
        return this.http.get(this.baseUrl);
    };
    PatientserviceService.prototype.deletePatientByMRNO = function (mrNo) {
        return this.http.delete(this.baseUrl + mrNo);
    };
    PatientserviceService.prototype.UpdatePatient = function (id, patient) {
        return this.http.put(this.baseUrl + "/update/" + id, patient);
    };
    PatientserviceService.prototype.getAllGynyObsPatients = function () {
        return this.http.get(this.baseUrl + "allgynyobs");
    };
    PatientserviceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PatientserviceService);
    return PatientserviceService;
}());



/***/ }),

/***/ "./src/app/searchbar/searchbar.component.css":
/*!***************************************************!*\
  !*** ./src/app/searchbar/searchbar.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlYXJjaGJhci9zZWFyY2hiYXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/searchbar/searchbar.component.html":
/*!****************************************************!*\
  !*** ./src/app/searchbar/searchbar.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p-dialog header=\"Detail\" [(visible)]=\"display\" [modal]=\"true\" [responsive]=\"true\" [style]=\"{ width: '920px', minWidth: '200px', position: 'absolute' }\" [minX]=\"70\" [style]=\"{ float: 'top', 'overflow-wrap': 'break-word' }\" style=\"overflow-wrap: break-word\"\r\n    [positionTop]=\"null\" [maximizable]=\"true\" [baseZIndex]=\"10000\" [closeOnEscape]=\"true\" [closable]=\"true\">\r\n    <p-toast [style]=\"{ marginTop: '40px' }\" position=\"top-right\" life=\"3000\">\r\n    </p-toast>\r\n\r\n    <p-card header=\"\" [style]=\"{ width: '100%', color: '#3EB650', 'text-align': 'center' }\">\r\n        <p-table #dt [columns]=\"cols\" [value]=\"patient\" [paginator]=\"true\" [scrollable]=\"true\" [rows]=\"10\" [totalRecords]=\"totalRecords\" scrollHeight=\"200px\" [resizableColumns]=\"true\">\r\n            <ng-template pTemplate=\"caption\">\r\n                <div style=\"text-align: right\">\r\n                    <i class=\"fa fa-search\" style=\"margin:4px 4px 0 0\"></i>\r\n                    <input type=\"text\" pInputText size=\"50\" placeholder=\"Global Filter\" (input)=\"dt.filterGlobal($event.target.value, 'contains')\" style=\"width:auto\" />\r\n                </div>\r\n            </ng-template>\r\n\r\n            <ng-template pTemplate=\"header\" let-columns>\r\n                <tr>\r\n                    <th *ngFor=\"let col of columns\" style=\"text-align:center;\" pResizableColumn>\r\n                        {{ col.header }}\r\n                    </th>\r\n                    <th style=\"text-align: center;\" pResizableColumn>\r\n                        Actions\r\n                    </th>\r\n                </tr>\r\n            </ng-template>\r\n            <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\" style=\"word-wrap: break-word;\">\r\n                <tr [pSelectableRow]=\"rowData\">\r\n                    <td *ngFor=\"let col of columns\" class=\"ui-resizable-column\">\r\n                        {{ rowData[col.field] }}\r\n                    </td>\r\n                    <td>\r\n                        <button pButton type=\"button\" label=\"Edit\" class=\"ui-button-warning\" (click)=\"routeToPatientForm(rowData['id'])\"></button>\r\n                    </td>\r\n                </tr>\r\n            </ng-template>\r\n        </p-table>\r\n\r\n\r\n\r\n        <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\" style=\"word-wrap: break-word;\">\r\n            <tr [pSelectableRow]=\"rowData\">\r\n                <td *ngFor=\"let col of columns\" style=\"overflow: auto\">\r\n                    {{ rowData[col.field] }}\r\n                </td>\r\n                <td>\r\n                    <button pButton type=\"button\" label=\"Edit\" class=\"ui-button-warning\" (click)=\"routeToPatientForm(rowData['id'])\"></button>\r\n                </td>\r\n\r\n            </tr>\r\n        </ng-template>\r\n\r\n        <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\" style=\"word-wrap: break-word;\">\r\n            <tr [pSelectableRow]=\"rowData\">\r\n                <td *ngFor=\"let col of columns\" style=\"overflow: auto\">\r\n                    {{ rowData[col.field] }}\r\n                </td>\r\n                <td>\r\n                    <button pButton type=\"button\" label=\"Edit\" class=\"ui-button-warning\" (click)=\"routeToPatientForm(rowData['id'])\"></button>\r\n                </td>\r\n\r\n            </tr>\r\n        </ng-template>\r\n\r\n\r\n        <!-- Use the below code in order to resizeable table columns  -->\r\n\r\n\r\n        <!-- <p-table [columns]=\"cols\" [value]=\"patient\" [resizableColumns]=\"true\">\r\n        <ng-template pTemplate=\"header\" let-columns>\r\n            <tr>\r\n                <th *ngFor=\"let col of columns\" pResizableColumn>\r\n                    {{col.header}}\r\n                </th>\r\n            </tr>\r\n        </ng-template>\r\n        <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\r\n            <tr>\r\n                <td *ngFor=\"let col of columns\" class=\"ui-resizable-column\">\r\n                    {{rowData[col.field]}}\r\n                </td>hms\r\n            </tr\r\n        </ng-template>\r\n    </p-table> -->\r\n    </p-card>\r\n    <div *ngIf=\"loading\" class=\"loading-indicator\">\r\n        <p-progressSpinner></p-progressSpinner>\r\n    </div>\r\n</p-dialog>\r\n<button type=\"button\" style=\"width:40px; background-color: #479761 !important;\" (click)=\"showDialog()\" pButton icon=\"pi pi-search\"></button>"

/***/ }),

/***/ "./src/app/searchbar/searchbar.component.ts":
/*!**************************************************!*\
  !*** ./src/app/searchbar/searchbar.component.ts ***!
  \**************************************************/
/*! exports provided: SearchbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchbarComponent", function() { return SearchbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _patientform_patient__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../patientform/patient */ "./src/app/patientform/patient.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _patientservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../patientservice.service */ "./src/app/patientservice.service.ts");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var SearchbarComponent = /** @class */ (function () {
    function SearchbarComponent(router, patientService, mesgService, activeRoute) {
        this.router = router;
        this.patientService = patientService;
        this.mesgService = mesgService;
        this.activeRoute = activeRoute;
        this.display = false;
        this.loading = false;
        this.patientObject = new _patientform_patient__WEBPACK_IMPORTED_MODULE_1__["Patient"]();
    }
    SearchbarComponent.prototype.ngOnInit = function () {
        this.datasource = this.patient = [];
        this.patientObject.id = this.activeRoute.snapshot.params['id'];
    };
    SearchbarComponent.prototype.showDialog = function () {
        var _this = this;
        this.patient = [];
        this.loading = true;
        this.display = true;
        this.totalRecords = 0;
        this.patientService.getPatients().subscribe(function (data) {
            _this.datasource = [];
            _this.datasource = data;
            _this.totalRecords = _this.datasource.length;
            console.log(data);
            for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                var p = data_1[_i];
                _this.patient.push({
                    id: p.id,
                    name: p.name,
                    phoneNo: p.phoneNo,
                    address: p.address,
                    gender: p.gender,
                    cnic: p.cnic,
                    status: p.status,
                    age: p.age
                });
            }
            _this.loading = false;
        });
        this.cols = [
            { field: 'id', header: 'Mr No' },
            { field: 'name', header: 'NAME' },
            { field: 'age', header: 'AGE' },
            { field: 'address', header: 'ADDRESS' },
            { field: 'phoneNo', header: 'Phone No' },
            { field: 'gender', header: 'Gender' },
            // { field: 'cnic', header: 'CnicNo' },
            { field: 'status', header: 'Status' }
        ];
        // console.log(this.patient);
    };
    // deletePatientByID(rowData: any) {
    //   this.loading = true;
    //   console.log(rowData);
    //   //  this.indexFind = this.patient.findIndex(i => i.id === rowData);
    //   //   console.log(this.indexFind);
    //   // this.patient.splice(this.indexFind,1);
    //   this.patientService.deletePatientByMRNO(rowData).subscribe(
    //     data => {
    //       this.loading = false;
    //       if (data) {
    //         this.mesgService.add({
    //           severity: 'success',
    //           summary: 'Deleted',
    //           detail: 'Patient deleted SuccesFully'
    //         });
    //         this.showDialog();
    //         // this.patientService.getPatients().subscribe((data: any) => {});
    //         console.log(data);
    //       } else {
    //         this.loading = true;
    //         this.mesgService.add({
    //           severity: 'error',
    //           summary: 'Can\'t delete',
    //           detail: 'You are not authorized for this action'
    //         });
    // tslint:disable-next-line: triple-equals
    //     if (this.loading == true) {
    //       this.loading = false;
    //     }
    //   }
    // },
    //       error => {
    //         this.loading = false;
    //         this.mesgService.add({
    //           severity: 'error',
    //           summary: 'Cant not delete',
    //           detail: 'You are not authorized for this action'
    //         });
    //         console.log(error);
    //       }
    //     );
    //   }
    SearchbarComponent.prototype.routeToPatientForm = function (rowData) {
        console.log("yeh id hai ", rowData);
        this.router.navigate(['/patientFormWithId/' + rowData]);
    };
    SearchbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-searchbar',
            template: __webpack_require__(/*! ./searchbar.component.html */ "./src/app/searchbar/searchbar.component.html"),
            styles: [__webpack_require__(/*! ./searchbar.component.css */ "./src/app/searchbar/searchbar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _patientservice_service__WEBPACK_IMPORTED_MODULE_3__["PatientserviceService"],
            primeng_api__WEBPACK_IMPORTED_MODULE_4__["MessageService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])
    ], SearchbarComponent);
    return SearchbarComponent;
}());



/***/ }),

/***/ "./src/app/services/directory.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/directory.service.ts ***!
  \***********************************************/
/*! exports provided: DirectoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DirectoryService", function() { return DirectoryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");




var DirectoryService = /** @class */ (function () {
    function DirectoryService(http) {
        this.http = http;
    }
    DirectoryService.prototype.getDirectory = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + '/api/directory/');
    };
    DirectoryService.prototype.postDirectory = function (obj) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + '/api/directory/', obj);
    };
    DirectoryService.prototype.deleteDirectory = function (id) {
        return this.http.delete(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + '/api/directory/' + id);
    };
    DirectoryService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], DirectoryService);
    return DirectoryService;
}());



/***/ }),

/***/ "./src/app/services/erservice.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/erservice.service.ts ***!
  \***********************************************/
/*! exports provided: ErserviceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErserviceService", function() { return ErserviceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");




var ErserviceService = /** @class */ (function () {
    function ErserviceService(http) {
        this.http = http;
    }
    // tslint:disable-next-line: ban-types
    ErserviceService.prototype.saveEr = function (er) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + 'api/er/', er);
    };
    ErserviceService.prototype.getEr = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + 'api/er/');
    };
    ErserviceService.prototype.deleteById = function (no) {
        return this.http.delete(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + 'api/er/' + no);
    };
    // ER FACILITY
    ErserviceService.prototype.saveErFacility = function (facility) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + 'api/facility/', facility);
    };
    ErserviceService.prototype.getErFacility = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + 'api/facility/');
    };
    ErserviceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ErserviceService);
    return ErserviceService;
}());



/***/ }),

/***/ "./src/app/services/monitor.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/monitor.service.ts ***!
  \*********************************************/
/*! exports provided: MonitorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MonitorService", function() { return MonitorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var MonitorService = /** @class */ (function () {
    function MonitorService(http) {
        this.http = http;
    }
    MonitorService.prototype.getPatientMonitor = function (id) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + "api/monitor/" + id);
    };
    MonitorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], MonitorService);
    return MonitorService;
}());



/***/ }),

/***/ "./src/app/services/package-service.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/package-service.service.ts ***!
  \*****************************************************/
/*! exports provided: PackageServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PackageServiceService", function() { return PackageServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");




var PackageServiceService = /** @class */ (function () {
    function PackageServiceService(http) {
        this.http = http;
    }
    PackageServiceService.prototype.getPackages = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + '/api/addpackage/');
    };
    PackageServiceService.prototype.postPackage = function (obj) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + '/api/addpackage/', obj);
    };
    PackageServiceService.prototype.deletePackage = function (id) {
        return this.http.delete(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + '/api/addpackage/' + id);
    };
    PackageServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PackageServiceService);
    return PackageServiceService;
}());



/***/ }),

/***/ "./src/app/services/patient-transaction-history.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/services/patient-transaction-history.service.ts ***!
  \*****************************************************************/
/*! exports provided: PatientTransactionHistoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientTransactionHistoryService", function() { return PatientTransactionHistoryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");




var PatientTransactionHistoryService = /** @class */ (function () {
    function PatientTransactionHistoryService(http) {
        this.http = http;
    }
    PatientTransactionHistoryService.prototype.getPatientTransactionHistory = function (id) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + 'api/gethistory/' + id);
    };
    PatientTransactionHistoryService.prototype.addPatientTransactionHistory = function (id) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + 'api/addhistory/' + id);
    };
    PatientTransactionHistoryService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PatientTransactionHistoryService);
    return PatientTransactionHistoryService;
}());



/***/ }),

/***/ "./src/app/services/patient-transactions.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/services/patient-transactions.service.ts ***!
  \**********************************************************/
/*! exports provided: PatientTransactionsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientTransactionsService", function() { return PatientTransactionsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");




var PatientTransactionsService = /** @class */ (function () {
    function PatientTransactionsService(http) {
        this.http = http;
    }
    PatientTransactionsService.prototype.getPatientTransactions = function (id) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + 'api/patienttransactions/' + id);
    };
    PatientTransactionsService.prototype.deletePatientTransaction = function (id) {
        return this.http.delete(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + 'api/patienttransactions/' + id);
    };
    PatientTransactionsService.prototype.updatePatientTransactionById = function (id, transactionObj) {
        return this.http.put(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + 'api/patienttransactions/' + id, transactionObj);
    };
    PatientTransactionsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PatientTransactionsService);
    return PatientTransactionsService;
}());



/***/ }),

/***/ "./src/app/table/table.component.css":
/*!*******************************************!*\
  !*** ./src/app/table/table.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYmxlL3RhYmxlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/table/table.component.html":
/*!********************************************!*\
  !*** ./src/app/table/table.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  table works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/table/table.component.ts":
/*!******************************************!*\
  !*** ./src/app/table/table.component.ts ***!
  \******************************************/
/*! exports provided: TableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableComponent", function() { return TableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TableComponent = /** @class */ (function () {
    function TableComponent() {
    }
    TableComponent.prototype.ngOnInit = function () {
    };
    TableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-table',
            template: __webpack_require__(/*! ./table.component.html */ "./src/app/table/table.component.html"),
            styles: [__webpack_require__(/*! ./table.component.css */ "./src/app/table/table.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TableComponent);
    return TableComponent;
}());



/***/ }),

/***/ "./src/app/transaction-edit/transaction-edit.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/transaction-edit/transaction-edit.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RyYW5zYWN0aW9uLWVkaXQvdHJhbnNhY3Rpb24tZWRpdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/transaction-edit/transaction-edit.component.html":
/*!******************************************************************!*\
  !*** ./src/app/transaction-edit/transaction-edit.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p-toast></p-toast>\r\n<p-dialog [style]=\"{width:'600px'}\" [modal]=\"true\" [responsive]=\"true\" [baseZIndex]=\"10000\" [closeOnEscape]=\"true\"\r\n  [closable]=\"true\" [(visible)]=\"display\">\r\n\r\n  <div class=\"ui-g-12\">\r\n\r\n\r\n    <p-card header=\"EDIT DUES\" [style]=\"{\r\n        width: '100%',\r\n        'font-size': '24px',\r\n       \r\n        'text-align': 'center',\r\n        color: 'green'\r\n      }\">\r\n      <div class=\"ui-g ui-fluid\">\r\n        <hr style=\"height:2px;width:100%;background-color:green;\" />\r\n        <form style=\"width:100%;\" #myForm=\"ngForm\" (ngSubmit)=\"submitDirectory(); myForm.reset()\">\r\n          <div class=\"ui-g\">\r\n\r\n            <div class=\"ui-md-12 ui-lg-12 ui-sm-12\">\r\n              <div class=\"ui-inputgroup\">\r\n                <span class=\"ui-inputgroup-addon\"  [ngStyle]=\"{height:'40px'}\" style=\"width:100px;font-size:15px;\">Dues<i\r\n                    style=\"color: red\">*</i></span> <input (input)=\"onDuesChange()\" type=\"text\" [ngStyle]=\"{height:'40px'}\"\r\n                  (keypress)=\"numberOnly($event)\"  autocomplete=\"off\" #due=\"ngModel\" [(ngModel)]=\"dues\" required name=\"dues\" pInputText />\r\n              </div>\r\n              <div\r\n                style=\"padding:0px;margin-bottom:0px;font-size:14px;\"\r\n                [hidden]=\"due.valid || due.pristine\"\r\n                class=\"alert alert-danger\"\r\n              >\r\n                dues can't be null.\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"ui-g\">\r\n\r\n            <div class=\"ui-md-12 ui-lg-12 ui-sm-12\">\r\n              <div class=\"ui-inputgroup\">\r\n                <span class=\"ui-inputgroup-addon\" [ngStyle]=\"{height:'40px'}\"\r\n                  style=\"width:100px;font-size:15px;\">Received</span>\r\n                <input [disabled]=\"true\" autocomplete=\"off\"  [(ngModel)]=\"receivedAmount\" type=\"text\" [ngStyle]=\"{height:'40px'}\"\r\n                  required name=\"received amount\" pInputText />\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"ui-lg-12 ui-g-12 ui-md-12 ui-sm-12 \">\r\n            <button (click)=\"updateRecord()\" pButton type=\"button\" label=\"Update\" [disabled]=\"myForm.invalid || btnDisabler\" class=\"ui-button-raised ui-button-success\" style=\"width:100%;\">\r\n\r\n            </button>\r\n          </div>\r\n\r\n\r\n\r\n        </form>\r\n      </div>\r\n    </p-card>\r\n  </div>\r\n\r\n\r\n</p-dialog>\r\n<button (click)=\"showDialog()\" pButton [ngStyle]=\"{width:'80px'}\" type=\"button\" label=\"Edit\" class=\"ui-button-warning\">"

/***/ }),

/***/ "./src/app/transaction-edit/transaction-edit.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/transaction-edit/transaction-edit.component.ts ***!
  \****************************************************************/
/*! exports provided: TransactionEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionEditComponent", function() { return TransactionEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_patient_transactions_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/patient-transactions.service */ "./src/app/services/patient-transactions.service.ts");
/* harmony import */ var _patient_transactions_patient_transactions_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../patient-transactions/patient-transactions.component */ "./src/app/patient-transactions/patient-transactions.component.ts");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_4__);





var TransactionEditComponent = /** @class */ (function () {
    function TransactionEditComponent(messageService, patientService, patientTransactionCompo) {
        this.messageService = messageService;
        this.patientService = patientService;
        this.patientTransactionCompo = patientTransactionCompo;
        this.display = false;
        this.btnDisabler = false;
    }
    TransactionEditComponent.prototype.ngOnInit = function () {
        this.duesCpy = this.dues;
        this.receivedAmountCpy = this.receivedAmount;
    };
    TransactionEditComponent.prototype.numberOnly = function (event) {
        var charCode = event.which ? event.which : event.keyCode;
        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
            return false;
        }
        return true;
    };
    TransactionEditComponent.prototype.showDialog = function () {
        var _this = this;
        this.display = true;
        this.record = this.data.find(function (value) {
            return value.id == _this.transactionId;
        });
        console.log("recoooooooooooord", this.record);
        console.log(this.transactionId);
        this.receivedAmount = this.receivedAmountCpy;
        this.dues = this.duesCpy;
        console.log("dues======>>>>", this.dues);
        console.log("received====>>>>", this.receivedAmount);
    };
    TransactionEditComponent.prototype.onDuesChange = function () {
        console.log("received====>>>>", this.dues);
        //disabling update button if dues are increased
        this.btnDisabler = this.dues > this.duesCpy ? true : false;
        //if dues are set to null then it must be assigned to 0,NAN
        this.dues = this.dues ? this.dues : 0;
        //dues difference from before
        var diff = parseInt(this.duesCpy) - parseInt(this.dues);
        //adding the difference to the received amount
        this.receivedAmount = parseInt(this.receivedAmountCpy) + diff;
    };
    TransactionEditComponent.prototype.updateRecord = function () {
        var _this = this;
        this.record.dues = parseInt(this.dues);
        this.record.receivedAmount = parseInt(this.receivedAmount);
        console.log(this.record, "recoooooooooooooooooooooooor");
        this.patientService.updatePatientTransactionById(this.transactionId, this.record)
            .subscribe(function (response) {
            _this.messageService.add({ severity: 'success', summary: 'Service Message', detail: response.message });
            console.log("patient updated successfully", response);
            _this.display = false;
            _this.patientTransactionCompo.showTable();
        }, function (error) {
            _this.messageService.add({ severity: 'error', summary: 'Service Message', detail: error });
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TransactionEditComponent.prototype, "transactionId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TransactionEditComponent.prototype, "receivedAmount", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TransactionEditComponent.prototype, "dues", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TransactionEditComponent.prototype, "data", void 0);
    TransactionEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-transaction-edit',
            template: __webpack_require__(/*! ./transaction-edit.component.html */ "./src/app/transaction-edit/transaction-edit.component.html"),
            styles: [__webpack_require__(/*! ./transaction-edit.component.css */ "./src/app/transaction-edit/transaction-edit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [primeng_api__WEBPACK_IMPORTED_MODULE_4__["MessageService"], _services_patient_transactions_service__WEBPACK_IMPORTED_MODULE_2__["PatientTransactionsService"], _patient_transactions_patient_transactions_component__WEBPACK_IMPORTED_MODULE_3__["PatientTransactionsComponent"]])
    ], TransactionEditComponent);
    return TransactionEditComponent;
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
    production: false,
    baseUrl: 'http://localhost:8080/',
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

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\hms\hms-ui\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map