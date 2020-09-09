(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["template-slip-template-slip-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/hr/payroll/pengaturan/template-slip/add/add.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/hr/payroll/pengaturan/template-slip/add/add.component.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"air__utils__heading card-header-flex\">\r\n        <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n            <h5 class=\"mb-0\">New Template</h5>\r\n        </div>\r\n    </div>\r\n    <div class=\"card\">\r\n        <div class=\"card-body\">\r\n            <form nz-form [formGroup]=\"print\" (ngSubmit)=\"simpan()\">\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Nama Template</nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input placeholder=\"\" formControlName=\"nama_template\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Module</nz-form-label>\r\n                            <nz-form-control>\r\n                                <nz-select formControlName=\"module\" nzAllowClear nzPlaceHolder=\"Choose\">\r\n                                    <nz-option nzValue=\"payroll\" nzLabel=\"Payroll\"></nz-option>\r\n                                    <nz-option nzValue=\"thr\" nzLabel=\"THR\"></nz-option>\r\n                                    <nz-option nzValue=\"bonus\" nzLabel=\"Bonus\"></nz-option>\r\n                                </nz-select>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n\r\n                </div>\r\n            </form>\r\n\r\n            <div nz-row nzGutter=\"8\" style=\"background-color:darkgray; padding: 5px;\" *ngIf=\"if_add\">\r\n                <div nz-col nzSpan=\"22\">\r\n                    <h5>Add Item Group</h5>\r\n                </div>\r\n                <div nz-col nzSpan=\"2\">\r\n                    <a (click)=\"if_add=false\">close</a>\r\n                </div>\r\n\r\n                <div nz-col nzSpan=\"6\">\r\n                    <nz-form-item>\r\n                        <nz-form-label>Nama Group</nz-form-label>\r\n                        <nz-form-control>\r\n                            <input nz-input placeholder=\"\" [(ngModel)]=\"formItem.nama_group\" />\r\n                        </nz-form-control>\r\n                    </nz-form-item>\r\n                </div>\r\n\r\n                <div nz-col nzSpan=\"3\">\r\n                    <nz-form-item>\r\n                        <nz-form-label>Jenis</nz-form-label>\r\n                        <nz-form-control>\r\n                            <nz-select style=\"width: 100%;\" (ngModelChange)=\"getListKomponenPerusahaan(formItem.jenis)\" [(ngModel)]=\"formItem.jenis\" nzAllowClear nzPlaceHolder=\"Choose\">\r\n                                <nz-option nzValue=\"plus\" nzLabel=\"Plus\"></nz-option>\r\n                                <nz-option nzValue=\"minus\" nzLabel=\"Minus\"></nz-option>\r\n                            </nz-select>\r\n                        </nz-form-control>\r\n                    </nz-form-item>\r\n                </div>\r\n                <div nz-col nzSpan=\"3\">\r\n                    <nz-form-item>\r\n                        <nz-form-label>Order Group</nz-form-label>\r\n                        <nz-form-control>\r\n                            <nz-input-number nz-input placeholder=\"\" [(ngModel)]=\"formItem.order_by\"></nz-input-number>\r\n                        </nz-form-control>\r\n                    </nz-form-item>\r\n                </div>\r\n\r\n                <div nz-col nzSpan=\"9\">\r\n                    <nz-form-item>\r\n                        <nz-form-label>Komponen</nz-form-label>\r\n                        <nz-form-control>\r\n                            <nz-select style=\"width: 100%;\" [(ngModel)]=\"selectIdKomponen\" [nzSize]=\"'default'\" nzMode=\"multiple\" nzPlaceHolder=\"Please select\">\r\n                                <nz-option *ngFor=\"let option of listKomponenPerusahaan\" [nzLabel]=\"option.kode_komponen\" [nzValue]=\"option.id_komponen_perusahaan\"></nz-option>\r\n                            </nz-select>\r\n                        </nz-form-control>\r\n                    </nz-form-item>\r\n                </div>\r\n                <div nz-col nzSpan=\"3\">\r\n                    <nz-form-item>\r\n                        <nz-form-label>.</nz-form-label>\r\n                        <nz-form-control>\r\n                            <button (click)=\"simpanItem()\" nz-button nzType=\"primary\">Save</button>\r\n                        </nz-form-control>\r\n                    </nz-form-item>\r\n                </div>\r\n\r\n            </div>\r\n\r\n            <div class=\"air__utils__heading card-header-flex\">\r\n                <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n                    <h6 class=\"mb-0\">Template Item</h6>\r\n                </div>\r\n                <div class=\"d-flex flex-column justify-content-center\">\r\n                    <a class=\"btn btn-primary\" (click)=\"if_add=true\">\r\n                        Add\r\n                    </a>\r\n                </div>\r\n            </div>\r\n\r\n\r\n            <nz-table #basicTable [nzData]=\"ListItem\" [nzShowPagination]=\"false\" class=\"air__utils__scrollTable mb-4\">\r\n                <thead>\r\n                    <tr>\r\n                        <th class=\"bg-transparent\">No</th>\r\n                        <th class=\"bg-transparent\">Nama Group</th>\r\n                        <th class=\"bg-transparent\">Jenis</th>\r\n                        <th class=\"bg-transparent\">Order</th>\r\n                        <th class=\"bg-transparent\">Gabungan Dari</th>\r\n                        <th class=\"bg-transparent  text-right\">#</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor=\"let data of basicTable.data; let i=index\">\r\n                        <td>\r\n                            {{i+1}}\r\n                        </td>\r\n                        <td *ngIf=\"data.is_edit==false\">{{data.nama_group}}</td>\r\n                        <td *ngIf=\"data.is_edit==true\"><input nz-input placeholder=\"\" [(ngModel)]=\"data.nama_group\" /></td>\r\n\r\n                        <td>{{data.jenis}}</td>\r\n                        <td *ngIf=\"data.is_edit==false\">{{data.order_by}}</td>\r\n                        <td *ngIf=\"data.is_edit==false\">\r\n                            <p *ngFor=\"let komponen of data.item\"><b>-{{komponen.kode_komponen}}</b>->{{komponen.komponen}}</p>\r\n                        </td>\r\n\r\n\r\n\r\n                        <td *ngIf=\"data.is_edit==true\">\r\n                            <nz-input-number nz-input placeholder=\"\" [(ngModel)]=\"data.order_by\"></nz-input-number>\r\n                        </td>\r\n\r\n                        <td *ngIf=\"data.is_edit==true\">\r\n                            <nz-form-control>\r\n                                <nz-select style=\"width: 100%;\" [(ngModel)]=\"selectIdKomponen\" [nzSize]=\"'default'\" nzMode=\"multiple\" nzPlaceHolder=\"Please select\">\r\n                                    <nz-option *ngFor=\"let option of listKomponenPerusahaan\" [nzLabel]=\"option.kode_komponen\" [nzValue]=\"option.id_komponen_perusahaan\"></nz-option>\r\n                                </nz-select>\r\n                            </nz-form-control>\r\n                        </td>\r\n\r\n\r\n                        <td class=\"text-right\" *ngIf=\"data.is_edit==true\">\r\n                            <button (click)=\"simpanEdit(data)\" nz-button nzType=\"primary\">Save</button>\r\n                        </td>\r\n                        <td class=\"text-right\" *ngIf=\"data.is_edit==false\">\r\n                            <a nz-dropdown [nzDropdownMenu]=\"menu\" nzTrigger=\"click\" nzPlacement=\"bottomRight\">\r\n                                <i class=\"fe fe-more-vertical\"></i>\r\n                            </a>\r\n                            <nz-dropdown-menu #menu=\"nzDropdownMenu\">\r\n                                <ul nz-menu>\r\n                                    <li nz-menu-item>\r\n                                        <a nz-popconfirm nzPopconfirmTitle=\"Are you sure delete this this?\" nzPopconfirmPlacement=\"bottom\" (nzOnConfirm)=\"delete(data.id_print_template_detail)\">Delete</a>\r\n                                    </li>\r\n                                    <li nz-menu-item>\r\n                                        <a nz-popconfirm nzPopconfirmTitle=\"Are you sure edit this this?\" nzPopconfirmPlacement=\"bottom\" (nzOnConfirm)=\"edit(i)\">Edit</a>\r\n                                    </li>\r\n                                </ul>\r\n                            </nz-dropdown-menu>\r\n                        </td>\r\n                    </tr>\r\n                </tbody>\r\n            </nz-table>\r\n\r\n\r\n\r\n\r\n            <div class=\"footer\">\r\n                <button type=\"button\" (click)=\"goToBack()\" class=\"ant-btn\" style=\"margin-right: 8px;\"><span>Cancel</span></button>\r\n                <button type=\"submit\" (click)=\"simpan()\" class=\"ant-btn ant-btn-primary\"><span>Submit</span></button>\r\n            </div>\r\n\r\n\r\n\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/hr/payroll/pengaturan/template-slip/edit/edit.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/hr/payroll/pengaturan/template-slip/edit/edit.component.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>edit works!</p>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/hr/payroll/pengaturan/template-slip/list/list.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/hr/payroll/pengaturan/template-slip/list/list.component.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n\r\n    <div class=\"air__utils__heading card-header-flex\">\r\n        <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n            <h5 class=\"mb-0\">Template PaySlip</h5>\r\n        </div>\r\n        <div class=\"d-flex flex-column justify-content-center\">\r\n            <a class=\"btn btn-primary\" [routerLink]=\"['../add']\" routerLinkActive=\"router-link-active\" routerLinkActive=\"router-link-active\">\r\n                        Add\r\n                    </a>\r\n        </div>\r\n\r\n    </div>\r\n    <div class=\"\">\r\n\r\n        <nz-table #basicTable [nzData]=\"listTemplate\" [nzShowPagination]=\"false\">\r\n            <thead>\r\n                <tr>\r\n                    <th>Nama Template</th>\r\n                    <th>Module</th>\r\n                    <th class=\" text-right\">#</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr *ngFor=\"let data of basicTable.data\">\r\n                    <td>{{data.nama_template}}</td>\r\n                    <td>{{data.module}}</td>\r\n                    <td class=\"text-right\">\r\n                        <a nz-dropdown [nzDropdownMenu]=\"menu\" nzTrigger=\"click\" nzPlacement=\"bottomRight\">\r\n                            <i class=\"fe fe-more-vertical\"></i>\r\n                        </a>\r\n                        <nz-dropdown-menu #menu=\"nzDropdownMenu\">\r\n                            <ul nz-menu>\r\n                                <li nz-menu-item>\r\n                                    <a nz-popconfirm nzPopconfirmTitle=\"Are you sure delete this this?\" nzPopconfirmPlacement=\"bottom\" (nzOnConfirm)=\"delete(data.id_print_template)\">Delete</a>\r\n                                </li>\r\n                                <li nz-menu-divider></li>\r\n                                <li nz-menu-item><a [routerLink]=\"['../edit',data.id_print_template]\" routerLinkActive=\"router-link-active\" href=\"javascript:;\">Edit</a></li>\r\n                            </ul>\r\n                        </nz-dropdown-menu>\r\n                    </td>\r\n                </tr>\r\n            </tbody>\r\n        </nz-table>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/hr/payroll/pengaturan/template-slip/add/add.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/hr/payroll/pengaturan/template-slip/add/add.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hyL3BheXJvbGwvcGVuZ2F0dXJhbi90ZW1wbGF0ZS1zbGlwL2FkZC9hZGQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/hr/payroll/pengaturan/template-slip/add/add.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/pages/hr/payroll/pengaturan/template-slip/add/add.component.ts ***!
  \********************************************************************************/
/*! exports provided: AddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddComponent", function() { return AddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_sdk_payroll_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sdk/payroll/services */ "./src/app/sdk/payroll/services.ts");
/* harmony import */ var src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/angular-reactive-forms-helper */ "./src/app/services/angular-reactive-forms-helper.ts");
/* harmony import */ var src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/tool/pesan.service */ "./src/app/services/tool/pesan.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");








var AddComponent = /** @class */ (function () {
    function AddComponent(fb, pesan, activatedRoute, payrollPrintTemplateService, payrollPrintTemplateDetailService, payrollPrintTemplateDetailKomponenService, spinner, router) {
        this.fb = fb;
        this.pesan = pesan;
        this.activatedRoute = activatedRoute;
        this.payrollPrintTemplateService = payrollPrintTemplateService;
        this.payrollPrintTemplateDetailService = payrollPrintTemplateDetailService;
        this.payrollPrintTemplateDetailKomponenService = payrollPrintTemplateDetailKomponenService;
        this.spinner = spinner;
        this.router = router;
        this.jenis_print = '';
        this.id_print_template = '';
        this.if_add = false;
        this.formItem = {};
        //List Komponen
        this.ListItem = [];
        this.listKomponenPerusahaan = [];
        this.selectIdKomponen = [];
    }
    AddComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.form();
        this.payrollPrintTemplateService.postPayrollPrintTemplates().subscribe(function (data) {
            _this.id_print_template = data.data.id_print_template;
            _this.print.setValue(data.data);
            _this.getListItem();
        });
    };
    AddComponent.prototype.form = function () {
        this.print = this.fb.group({
            id_print_template: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]),
            module: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]),
            nama_template: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]),
            validasi: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            id_user: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            created_at: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            updated_at: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('')
        });
    };
    AddComponent.prototype.getValueForm = function (fild, compare) {
        if (this.print.get(fild).value == compare) {
            return true;
        }
        return false;
    };
    AddComponent.prototype.simpan = function () {
        var _this = this;
        this.spinner.show();
        if (this.print.invalid) {
            console.log(this.print.invalid);
            this.pesan.pesanWarningForm('Form Tidak Valid');
            this.spinner.hide();
            return;
        }
        this.print.patchValue({ validasi: 1 });
        this.payrollPrintTemplateService.putPayrollPrintTemplatesId({ id: this.id_print_template, body: this.print.value }).subscribe(function (data) {
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
        this.router.navigate(['/hr/payroll/module/pengaturan/template-slip']);
    };
    AddComponent.prototype.getListItem = function () {
        var _this = this;
        this.spinner.show();
        this.payrollPrintTemplateDetailService.getPayrollPrintTemplateDetails(JSON.stringify({ id_print_template: this.id_print_template })).subscribe(function (data) {
            _this.spinner.hide();
            _this.ListItem = data.data;
            _this.ListItem.forEach(function (item, i) {
                _this.ListItem[i].is_edit = false;
            });
        });
    };
    AddComponent.prototype.getListKomponenPerusahaan = function (untuk) {
        var _this = this;
        if (untuk === void 0) { untuk = null; }
        setTimeout(function () {
            console.log(_this.formItem);
            _this.formItem.id_componen = [];
            _this.spinner.show();
            _this.payrollPrintTemplateDetailKomponenService.getPayrollPrintTemplateDetailKomponens(JSON.stringify({
                jenis: _this.formItem.jenis,
                id_print_template: _this.id_print_template,
                selectIdKomponen: _this.selectIdKomponen
            })).subscribe(function (data) {
                _this.spinner.hide();
                _this.listKomponenPerusahaan = data.data;
            });
        }, 400);
    };
    AddComponent.prototype.simpanItem = function () {
        var _this = this;
        this.spinner.show();
        if (this.formItem.nama_group == null || this.formItem.jenis == null || this.selectIdKomponen.length < 1) {
            this.pesan.pesanWarningForm('Form Tidak Valid');
            this.spinner.hide();
            return;
        }
        this.formItem.id_print_template = this.id_print_template;
        this.formItem.id_komponen = this.selectIdKomponen;
        this.payrollPrintTemplateDetailService.postPayrollPrintTemplateDetails(this.formItem).subscribe(function (data) {
            _this.spinner.hide();
            _this.selectIdKomponen = [];
            _this.getListItem();
        }, function (err) {
            _this.pesan.pesanWarningForm('Gagal di simpan, mohon cek Kode Komponen');
            _this.spinner.hide();
        }, function () {
            console.log('HTTP request completed.');
        });
    };
    AddComponent.prototype.edit = function (i) {
        var _this = this;
        console.log(i);
        this.selectIdKomponen = [];
        this.ListItem[i].is_edit = true;
        this.formItem.jenis = this.ListItem[i].jenis;
        this.ListItem[i].item.forEach(function (item) {
            _this.selectIdKomponen.push(item.id_komponen_perusahaan);
        });
        this.getListKomponenPerusahaan();
    };
    AddComponent.prototype.simpanEdit = function (param) {
        var _this = this;
        this.spinner.show();
        param.id_komponen = this.selectIdKomponen;
        this.payrollPrintTemplateDetailService.putPayrollPrintTemplateDetailsId({ id: '00', body: param }).subscribe(function (data) {
            _this.spinner.hide();
            _this.getListItem();
        });
    };
    AddComponent.prototype.delete = function (id_print_template_detail) {
        var _this = this;
        this.spinner.show();
        this.payrollPrintTemplateDetailService.deletePayrollPrintTemplateDetailsId(id_print_template_detail).subscribe(function (data) {
            _this.spinner.hide();
            _this.getListItem();
        });
    };
    AddComponent.ctorParameters = function () { return [
        { type: src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_3__["FormBuilderTypeSafe"] },
        { type: src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_4__["PesanService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
        { type: src_app_sdk_payroll_services__WEBPACK_IMPORTED_MODULE_2__["PayrollPrintTemplateService"] },
        { type: src_app_sdk_payroll_services__WEBPACK_IMPORTED_MODULE_2__["PayrollPrintTemplateDetailService"] },
        { type: src_app_sdk_payroll_services__WEBPACK_IMPORTED_MODULE_2__["PayrollPrintTemplateDetailKomponenService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
    ]; };
    AddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add',
            template: __webpack_require__(/*! raw-loader!./add.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/hr/payroll/pengaturan/template-slip/add/add.component.html"),
            styles: [__webpack_require__(/*! ./add.component.scss */ "./src/app/pages/hr/payroll/pengaturan/template-slip/add/add.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_3__["FormBuilderTypeSafe"],
            src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_4__["PesanService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            src_app_sdk_payroll_services__WEBPACK_IMPORTED_MODULE_2__["PayrollPrintTemplateService"],
            src_app_sdk_payroll_services__WEBPACK_IMPORTED_MODULE_2__["PayrollPrintTemplateDetailService"],
            src_app_sdk_payroll_services__WEBPACK_IMPORTED_MODULE_2__["PayrollPrintTemplateDetailKomponenService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], AddComponent);
    return AddComponent;
}());



/***/ }),

/***/ "./src/app/pages/hr/payroll/pengaturan/template-slip/edit/edit.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/pages/hr/payroll/pengaturan/template-slip/edit/edit.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hyL3BheXJvbGwvcGVuZ2F0dXJhbi90ZW1wbGF0ZS1zbGlwL2VkaXQvZWRpdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/hr/payroll/pengaturan/template-slip/edit/edit.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/hr/payroll/pengaturan/template-slip/edit/edit.component.ts ***!
  \**********************************************************************************/
/*! exports provided: EditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditComponent", function() { return EditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EditComponent = /** @class */ (function () {
    function EditComponent() {
    }
    EditComponent.prototype.ngOnInit = function () {
    };
    EditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit',
            template: __webpack_require__(/*! raw-loader!./edit.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/hr/payroll/pengaturan/template-slip/edit/edit.component.html"),
            styles: [__webpack_require__(/*! ./edit.component.scss */ "./src/app/pages/hr/payroll/pengaturan/template-slip/edit/edit.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EditComponent);
    return EditComponent;
}());



/***/ }),

/***/ "./src/app/pages/hr/payroll/pengaturan/template-slip/list/list.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/pages/hr/payroll/pengaturan/template-slip/list/list.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hyL3BheXJvbGwvcGVuZ2F0dXJhbi90ZW1wbGF0ZS1zbGlwL2xpc3QvbGlzdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/hr/payroll/pengaturan/template-slip/list/list.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/hr/payroll/pengaturan/template-slip/list/list.component.ts ***!
  \**********************************************************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_sdk_payroll_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sdk/payroll/services */ "./src/app/sdk/payroll/services.ts");
/* harmony import */ var src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/tool/pesan.service */ "./src/app/services/tool/pesan.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");






var ListComponent = /** @class */ (function () {
    function ListComponent(pesan, activatedRoute, payrollPrintTemplateService, spinner, router) {
        this.pesan = pesan;
        this.activatedRoute = activatedRoute;
        this.payrollPrintTemplateService = payrollPrintTemplateService;
        this.spinner = spinner;
        this.router = router;
        this.listTemplate = [];
    }
    ListComponent.prototype.ngOnInit = function () {
        this.getList();
    };
    ListComponent.prototype.getList = function () {
        var _this = this;
        this.spinner.show();
        this.payrollPrintTemplateService.getPayrollPrintTemplates().subscribe(function (data) {
            _this.listTemplate = data.data;
            _this.spinner.hide();
        });
    };
    ListComponent.prototype.delete = function (id) {
        var _this = this;
        this.spinner.show();
        this.payrollPrintTemplateService.deletePayrollPrintTemplatesId(id).subscribe(function (data) {
            _this.pesan.pesanBerhasilForm(data.message);
            _this.getList();
        }, function (err) {
            _this.pesan.pesanWarningForm('Template Ini Sudah digunakan!');
            _this.spinner.hide();
        });
    };
    ListComponent.ctorParameters = function () { return [
        { type: src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_3__["PesanService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: src_app_sdk_payroll_services__WEBPACK_IMPORTED_MODULE_2__["PayrollPrintTemplateService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
    ]; };
    ListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list',
            template: __webpack_require__(/*! raw-loader!./list.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/hr/payroll/pengaturan/template-slip/list/list.component.html"),
            styles: [__webpack_require__(/*! ./list.component.scss */ "./src/app/pages/hr/payroll/pengaturan/template-slip/list/list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_3__["PesanService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            src_app_sdk_payroll_services__WEBPACK_IMPORTED_MODULE_2__["PayrollPrintTemplateService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "./src/app/pages/hr/payroll/pengaturan/template-slip/template-slip-routing.module.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/hr/payroll/pengaturan/template-slip/template-slip-routing.module.ts ***!
  \*******************************************************************************************/
/*! exports provided: TemplateSlipRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplateSlipRoutingModule", function() { return TemplateSlipRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list/list.component */ "./src/app/pages/hr/payroll/pengaturan/template-slip/list/list.component.ts");
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add/add.component */ "./src/app/pages/hr/payroll/pengaturan/template-slip/add/add.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/pages/hr/payroll/pengaturan/template-slip/edit/edit.component.ts");






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
        path: 'edit/:id_print_template',
        component: _edit_edit_component__WEBPACK_IMPORTED_MODULE_5__["EditComponent"]
    }
];
var TemplateSlipRoutingModule = /** @class */ (function () {
    function TemplateSlipRoutingModule() {
    }
    TemplateSlipRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], TemplateSlipRoutingModule);
    return TemplateSlipRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/hr/payroll/pengaturan/template-slip/template-slip.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/hr/payroll/pengaturan/template-slip/template-slip.module.ts ***!
  \***********************************************************************************/
/*! exports provided: TemplateSlipModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplateSlipModule", function() { return TemplateSlipModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _template_slip_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./template-slip-routing.module */ "./src/app/pages/hr/payroll/pengaturan/template-slip/template-slip-routing.module.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list/list.component */ "./src/app/pages/hr/payroll/pengaturan/template-slip/list/list.component.ts");
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add/add.component */ "./src/app/pages/hr/payroll/pengaturan/template-slip/add/add.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/pages/hr/payroll/pengaturan/template-slip/edit/edit.component.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/angular-reactive-forms-helper */ "./src/app/services/angular-reactive-forms-helper.ts");










var TemplateSlipModule = /** @class */ (function () {
    function TemplateSlipModule() {
    }
    TemplateSlipModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_list_list_component__WEBPACK_IMPORTED_MODULE_4__["ListComponent"], _add_add_component__WEBPACK_IMPORTED_MODULE_5__["AddComponent"], _edit_edit_component__WEBPACK_IMPORTED_MODULE_6__["EditComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _template_slip_routing_module__WEBPACK_IMPORTED_MODULE_3__["TemplateSlipRoutingModule"],
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__["NzSelectModule"],
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__["NgZorroAntdModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"]
            ],
            providers: [
                src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_9__["FormBuilderTypeSafe"]
            ]
        })
    ], TemplateSlipModule);
    return TemplateSlipModule;
}());



/***/ })

}]);
//# sourceMappingURL=template-slip-template-slip-module.js.map