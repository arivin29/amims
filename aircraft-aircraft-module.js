(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["aircraft-aircraft-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/hr/payroll/pengaturan/aircraft/add/add.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/hr/payroll/pengaturan/aircraft/add/add.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n        <div class=\"air__utils__heading card-header-flex\">\r\n            <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n                <h5 class=\"mb-0\">New Aircraft</h5>\r\n            </div>\r\n        </div>\r\n        <div class=\"card\" style=\"width: 50%\">\r\n            <div class=\"card-body\">\r\n                <form nz-form [formGroup]=\"komponen\" (ngSubmit)=\"simpan()\">\r\n                    <div nz-row nzGutter=\"8\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Serial Number</nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input formControlName=\"sn\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-row nzGutter=\"8\">\r\n                            <nz-form-item>\r\n                                <nz-form-label>Registration Number</nz-form-label>\r\n                                <nz-form-control>\r\n                                        <input nz-input formControlName=\"registration_number\" />\r\n                                </nz-form-control>\r\n                            </nz-form-item>\r\n                    </div>\r\n\r\n                    <div class=\"footer\">\r\n                        <button type=\"button\" (click)=\"goToBack()\" class=\"ant-btn\"\r\n                            style=\"margin-right: 8px;\"><span>Cancel</span></button>\r\n                        <button type=\"submit\" class=\"ant-btn ant-btn-primary\"><span>Submit</span></button>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/hr/payroll/pengaturan/aircraft/edit/edit.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/hr/payroll/pengaturan/aircraft/edit/edit.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n        <div class=\"air__utils__heading card-header-flex\">\r\n            <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n                <h5 class=\"mb-0\">Edit Aircraft</h5>\r\n            </div>\r\n        </div>\r\n        <div class=\"card\" style=\"width: 50%\">\r\n            <div class=\"card-body\">\r\n                <form nz-form [formGroup]=\"komponen\" (ngSubmit)=\"simpan()\">\r\n                    <div nz-row nzGutter=\"8\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Serial Number</nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input formControlName=\"sn\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-row nzGutter=\"8\">\r\n                            <nz-form-item>\r\n                                <nz-form-label>Registration Number</nz-form-label>\r\n                                <nz-form-control>\r\n                                        <input nz-input formControlName=\"registration_number\" />\r\n                                </nz-form-control>\r\n                            </nz-form-item>\r\n                    </div>\r\n\r\n                    <div class=\"footer\">\r\n                        <button type=\"button\" (click)=\"goToBack()\" class=\"ant-btn\"\r\n                            style=\"margin-right: 8px;\"><span>Cancel</span></button>\r\n                        <button type=\"submit\" class=\"ant-btn ant-btn-primary\"><span>Submit</span></button>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/hr/payroll/pengaturan/aircraft/list/list.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/hr/payroll/pengaturan/aircraft/list/list.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n        <div class=\"air__utils__heading card-header-flex\">\r\n            <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n                <h5 class=\"mb-0\">Aircraft</h5>\r\n            </div>\r\n            <div class=\"d-flex flex-column justify-content-center\">\r\n                <a class=\"btn btn-primary\" [routerLink]=\"['../add']\" routerLinkActive=\"router-link-active\">\r\n                    <i nz-icon nzType=\"plus\" nzTheme=\"outline\"></i> Add\r\n                </a>\r\n            </div>\r\n        </div>\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <nav class=\"navbar\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-8\">\r\n                            <input class=\"form-control\" type=\"text\" name=\"search\" [(ngModel)]=\"searchValue\">\r\n                        </div>\r\n                        <div class=\"col-md-4\">\r\n                            <button nz-button nzType=\"primary\" (click)=\"search()\">Search</button>\r\n                        </div>\r\n                    </div>\r\n                </nav>\r\n\r\n                <nz-table #middleTable nzSize=\"middle\" [nzData]=\"listOfDisplayData\">\r\n                    <thead (nzSortChange)=\"sort($event)\" nzSingleSort>\r\n                        <tr>\r\n                            <th nzShowSort nzSortKey=\"name\">Serial Number</th>\r\n                            <th>Registration Number</th>\r\n                            <th class=\"text-right\">Action</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr *ngFor=\"let data of middleTable.data\">\r\n                            <td>{{ data.sn }}</td>\r\n                            <td>{{ data.registration_number }}</td>\r\n                            <td class=\"text-right\">\r\n                                <a nz-dropdown [nzDropdownMenu]=\"menu\" nzPlacement=\"bottomRight\">\r\n                                    <i nz-icon nzType=\"more\" nzTheme=\"outline\"></i>\r\n                                </a>\r\n                                <nz-dropdown-menu #menu=\"nzDropdownMenu\">\r\n                                    <ul nz-menu nzSelectable>\r\n                                        <li nz-menu-item [routerLink]=\"['../edit/',data.id_aircraft]\"><i nz-icon nzType=\"edit\" nzTheme=\"outline\"></i> Edit\r\n                                        </li>\r\n                                        <li nz-menu-item *ngIf=\"data.is_lock=='tidak'\">\r\n                                            <a nz-popconfirm nzPopconfirmTitle=\"Are you sure delete this task?\"\r\n                                                nzPopconfirmPlacement=\"bottom\" (nzOnConfirm)=\"delete(data.id_aircraft)\"\r\n                                                (nzOnCancel)=\"batalDelete()\"><i nz-icon nzType=\"delete\" nzTheme=\"outline\"></i> Delete</a>\r\n                                        </li>\r\n                                    </ul>\r\n                                </nz-dropdown-menu>\r\n                            </td>\r\n                        </tr>\r\n                    </tbody>\r\n                </nz-table>\r\n            </div>\r\n        </div>\r\n    </div>\r\n"

/***/ }),

/***/ "./src/app/pages/hr/payroll/pengaturan/aircraft/add/add.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/hr/payroll/pengaturan/aircraft/add/add.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hyL3BheXJvbGwvcGVuZ2F0dXJhbi9haXJjcmFmdC9hZGQvYWRkLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/hr/payroll/pengaturan/aircraft/add/add.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/hr/payroll/pengaturan/aircraft/add/add.component.ts ***!
  \***************************************************************************/
/*! exports provided: AddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddComponent", function() { return AddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_sdk_hr_services_absensi_pilot_aircraft_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/sdk/hr/services/absensi-pilot-aircraft.service */ "./src/app/sdk/hr/services/absensi-pilot-aircraft.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/angular-reactive-forms-helper */ "./src/app/services/angular-reactive-forms-helper.ts");
/* harmony import */ var src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/tool/pesan.service */ "./src/app/services/tool/pesan.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");








var AddComponent = /** @class */ (function () {
    function AddComponent(fb, pesan, absensiPilotAircraftService, spinner, router) {
        this.fb = fb;
        this.pesan = pesan;
        this.absensiPilotAircraftService = absensiPilotAircraftService;
        this.spinner = spinner;
        this.router = router;
    }
    AddComponent.prototype.ngOnInit = function () {
        this.form();
    };
    AddComponent.prototype.form = function () {
        this.komponen = this.fb.group({
            sn: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]),
            registration_number: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required])
        });
    };
    AddComponent.prototype.getValueForm = function (fild, compare) {
        if (this.komponen.get(fild).value == compare) {
            return true;
        }
        return false;
    };
    AddComponent.prototype.simpan = function () {
        var _this = this;
        this.spinner.show();
        if (this.komponen.invalid) {
            console.log(this.komponen.invalid);
            this.pesan.pesanWarningForm('Form Tidak Valid');
            this.spinner.hide();
            return;
        }
        this.absensiPilotAircraftService.postAbsensiPilotAircrafts(this.komponen.value).subscribe(function (data) {
            _this.goToBack();
            _this.spinner.hide();
        }, function (err) {
            _this.pesan.pesanWarningForm('Gagal di simpan, mohon cek Kode Komponen');
            _this.spinner.hide();
        }, function () {
            console.log('HTTP request completed.');
        });
    };
    AddComponent.prototype.goToBack = function () {
        this.router.navigate(['/hr/payroll/module/pengaturan/aircraft/list']);
    };
    AddComponent.ctorParameters = function () { return [
        { type: src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_3__["FormBuilderTypeSafe"] },
        { type: src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_4__["PesanService"] },
        { type: src_app_sdk_hr_services_absensi_pilot_aircraft_service__WEBPACK_IMPORTED_MODULE_1__["AbsensiPilotAircraftService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
    ]; };
    AddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-add',
            template: __webpack_require__(/*! raw-loader!./add.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/hr/payroll/pengaturan/aircraft/add/add.component.html"),
            styles: [__webpack_require__(/*! ./add.component.scss */ "./src/app/pages/hr/payroll/pengaturan/aircraft/add/add.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_3__["FormBuilderTypeSafe"],
            src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_4__["PesanService"],
            src_app_sdk_hr_services_absensi_pilot_aircraft_service__WEBPACK_IMPORTED_MODULE_1__["AbsensiPilotAircraftService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
    ], AddComponent);
    return AddComponent;
}());



/***/ }),

/***/ "./src/app/pages/hr/payroll/pengaturan/aircraft/aircraft-routing.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/hr/payroll/pengaturan/aircraft/aircraft-routing.module.ts ***!
  \*********************************************************************************/
/*! exports provided: AircraftRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AircraftRoutingModule", function() { return AircraftRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list/list.component */ "./src/app/pages/hr/payroll/pengaturan/aircraft/list/list.component.ts");
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add/add.component */ "./src/app/pages/hr/payroll/pengaturan/aircraft/add/add.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/pages/hr/payroll/pengaturan/aircraft/edit/edit.component.ts");






var routes = [
    {
        path: '',
        redirectTo: 'list'
    },
    {
        path: 'list',
        component: _list_list_component__WEBPACK_IMPORTED_MODULE_3__["ListComponent"]
    },
    {
        path: 'add',
        component: _add_add_component__WEBPACK_IMPORTED_MODULE_4__["AddComponent"]
    },
    {
        path: 'edit/:id_aircraft',
        component: _edit_edit_component__WEBPACK_IMPORTED_MODULE_5__["EditComponent"]
    }
];
var AircraftRoutingModule = /** @class */ (function () {
    function AircraftRoutingModule() {
    }
    AircraftRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AircraftRoutingModule);
    return AircraftRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/hr/payroll/pengaturan/aircraft/aircraft.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/hr/payroll/pengaturan/aircraft/aircraft.module.ts ***!
  \*************************************************************************/
/*! exports provided: AircraftModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AircraftModule", function() { return AircraftModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _aircraft_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./aircraft-routing.module */ "./src/app/pages/hr/payroll/pengaturan/aircraft/aircraft-routing.module.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/pages/hr/payroll/pengaturan/aircraft/edit/edit.component.ts");
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add/add.component */ "./src/app/pages/hr/payroll/pengaturan/aircraft/add/add.component.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list/list.component */ "./src/app/pages/hr/payroll/pengaturan/aircraft/list/list.component.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/angular-reactive-forms-helper */ "./src/app/services/angular-reactive-forms-helper.ts");










var AircraftModule = /** @class */ (function () {
    function AircraftModule() {
    }
    AircraftModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_edit_edit_component__WEBPACK_IMPORTED_MODULE_4__["EditComponent"], _add_add_component__WEBPACK_IMPORTED_MODULE_5__["AddComponent"], _list_list_component__WEBPACK_IMPORTED_MODULE_6__["ListComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _aircraft_routing_module__WEBPACK_IMPORTED_MODULE_3__["AircraftRoutingModule"],
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__["NzSelectModule"],
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__["NgZorroAntdModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"]
            ],
            providers: [
                src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_9__["FormBuilderTypeSafe"]
            ]
        })
    ], AircraftModule);
    return AircraftModule;
}());



/***/ }),

/***/ "./src/app/pages/hr/payroll/pengaturan/aircraft/edit/edit.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/hr/payroll/pengaturan/aircraft/edit/edit.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hyL3BheXJvbGwvcGVuZ2F0dXJhbi9haXJjcmFmdC9lZGl0L2VkaXQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/hr/payroll/pengaturan/aircraft/edit/edit.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/hr/payroll/pengaturan/aircraft/edit/edit.component.ts ***!
  \*****************************************************************************/
/*! exports provided: EditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditComponent", function() { return EditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_sdk_hr_services_absensi_pilot_aircraft_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/sdk/hr/services/absensi-pilot-aircraft.service */ "./src/app/sdk/hr/services/absensi-pilot-aircraft.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/angular-reactive-forms-helper */ "./src/app/services/angular-reactive-forms-helper.ts");
/* harmony import */ var src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/tool/pesan.service */ "./src/app/services/tool/pesan.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");








var EditComponent = /** @class */ (function () {
    function EditComponent(fb, pesan, absensiPilotAircraftService, spinner, router, activatedRoute) {
        this.fb = fb;
        this.pesan = pesan;
        this.absensiPilotAircraftService = absensiPilotAircraftService;
        this.spinner = spinner;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.id_aircraft = '';
    }
    EditComponent.prototype.ngOnInit = function () {
        this.id_aircraft = this.activatedRoute.snapshot.paramMap.get('id_aircraft');
        this.form();
        this.getData();
    };
    EditComponent.prototype.getData = function () {
        var _this = this;
        this.absensiPilotAircraftService.getAbsensiPilotAircraftsId(this.id_aircraft).subscribe(function (data) {
            _this.komponen.setValue(data.data);
        });
    };
    EditComponent.prototype.form = function () {
        this.komponen = this.fb.group({
            sn: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]),
            registration_number: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]),
            id_aircraft: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            created_at: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            updated_at: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
        });
    };
    EditComponent.prototype.getValueForm = function (fild, compare) {
        if (this.komponen.get(fild).value == compare) {
            return true;
        }
        return false;
    };
    EditComponent.prototype.simpan = function () {
        var _this = this;
        this.spinner.show();
        if (this.komponen.invalid) {
            console.log(this.komponen.invalid);
            this.pesan.pesanWarningForm('Form Tidak Valid');
            this.spinner.hide();
            return;
        }
        this.absensiPilotAircraftService.putAbsensiPilotAircraftsId({ id: this.id_aircraft, body: this.komponen.value }).subscribe(function (data) {
            _this.goToBack();
            _this.spinner.hide();
        }, function (err) {
            _this.pesan.pesanWarningForm('Gagal di simpan, mohon cek Kode Komponen');
            _this.spinner.hide();
        }, function () {
            console.log('HTTP request completed.');
        });
    };
    EditComponent.prototype.goToBack = function () {
        this.router.navigate(['/hr/payroll/module/pengaturan/aircraft/list']);
    };
    EditComponent.ctorParameters = function () { return [
        { type: src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_3__["FormBuilderTypeSafe"] },
        { type: src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_4__["PesanService"] },
        { type: src_app_sdk_hr_services_absensi_pilot_aircraft_service__WEBPACK_IMPORTED_MODULE_1__["AbsensiPilotAircraftService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] }
    ]; };
    EditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-edit',
            template: __webpack_require__(/*! raw-loader!./edit.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/hr/payroll/pengaturan/aircraft/edit/edit.component.html"),
            styles: [__webpack_require__(/*! ./edit.component.scss */ "./src/app/pages/hr/payroll/pengaturan/aircraft/edit/edit.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_3__["FormBuilderTypeSafe"],
            src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_4__["PesanService"],
            src_app_sdk_hr_services_absensi_pilot_aircraft_service__WEBPACK_IMPORTED_MODULE_1__["AbsensiPilotAircraftService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]])
    ], EditComponent);
    return EditComponent;
}());



/***/ }),

/***/ "./src/app/pages/hr/payroll/pengaturan/aircraft/list/list.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/hr/payroll/pengaturan/aircraft/list/list.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hyL3BheXJvbGwvcGVuZ2F0dXJhbi9haXJjcmFmdC9saXN0L2xpc3QuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/hr/payroll/pengaturan/aircraft/list/list.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/hr/payroll/pengaturan/aircraft/list/list.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_sdk_hr_services_absensi_pilot_aircraft_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/sdk/hr/services/absensi-pilot-aircraft.service */ "./src/app/sdk/hr/services/absensi-pilot-aircraft.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_filter_fuction_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/filter-fuction.service */ "./src/app/services/filter-fuction.service.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");






var ListComponent = /** @class */ (function () {
    function ListComponent(filterFuctionService, nzMessageService, spinner, absensiPilotAircraftService) {
        this.filterFuctionService = filterFuctionService;
        this.nzMessageService = nzMessageService;
        this.spinner = spinner;
        this.absensiPilotAircraftService = absensiPilotAircraftService;
        this.listOfDisplayData = [];
        this.listOfData = [];
        this.sortName = null;
        this.sortValue = null;
        this.searchValue = "";
    }
    ListComponent.prototype.ngOnInit = function () {
        this.getData();
    };
    ListComponent.prototype.getData = function () {
        var _this = this;
        this.absensiPilotAircraftService.getAbsensiPilotAircrafts().subscribe(function (data) {
            _this.listOfDisplayData = data.data;
            _this.listOfData = data.data;
        });
    };
    ListComponent.prototype.reset = function () {
        this.searchValue = '';
        this.search();
    };
    ListComponent.prototype.sort = function (sort) {
        this.sortName = sort.key;
        this.sortValue = sort.value;
        this.search();
    };
    ListComponent.prototype.search = function () {
        var _this = this;
        var data = this.listOfData.filter(function (item) { return _this.filterFuctionService.filterFunc(item, _this.searchValue); });
        /** sort data **/
        if (this.sortName && this.sortValue) {
            this.listOfDisplayData = data.sort(function (a, b) {
                return _this.sortValue === 'ascend'
                    ? a[_this.sortName] > b[_this.sortName]
                        ? 1
                        : -1
                    : b[_this.sortName] > a[_this.sortName]
                        ? 1
                        : -1;
            });
        }
        else {
            this.listOfDisplayData = data;
        }
    };
    ListComponent.prototype.delete = function (id) {
        var _this = this;
        this.spinner.show();
        this.absensiPilotAircraftService.deleteAbsensiPilotAircraftsId(id).subscribe(function (data) {
            _this.getData();
            _this.spinner.hide();
        });
    };
    ListComponent.prototype.batalDelete = function () {
        this.nzMessageService.info('click cancel');
    };
    ListComponent.ctorParameters = function () { return [
        { type: src_app_services_filter_fuction_service__WEBPACK_IMPORTED_MODULE_3__["FilterFuctionService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzMessageService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"] },
        { type: src_app_sdk_hr_services_absensi_pilot_aircraft_service__WEBPACK_IMPORTED_MODULE_1__["AbsensiPilotAircraftService"] }
    ]; };
    ListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-list',
            template: __webpack_require__(/*! raw-loader!./list.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/hr/payroll/pengaturan/aircraft/list/list.component.html"),
            styles: [__webpack_require__(/*! ./list.component.scss */ "./src/app/pages/hr/payroll/pengaturan/aircraft/list/list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_filter_fuction_service__WEBPACK_IMPORTED_MODULE_3__["FilterFuctionService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzMessageService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"],
            src_app_sdk_hr_services_absensi_pilot_aircraft_service__WEBPACK_IMPORTED_MODULE_1__["AbsensiPilotAircraftService"]])
    ], ListComponent);
    return ListComponent;
}());



/***/ })

}]);
//# sourceMappingURL=aircraft-aircraft-module.js.map