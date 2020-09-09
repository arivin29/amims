(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["perubahan-perubahan-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/hr/direktori/employee/pegawi-detail/payroll/perubahan/add/add.component.html":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/hr/direktori/employee/pegawi-detail/payroll/perubahan/add/add.component.html ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"air__utils__heading card-header-flex\">\r\n        <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n            <h5 class=\"mb-0\">Add Perubahaan (PSN)</h5>\r\n        </div>\r\n    </div>\r\n    <div class=\"card\">\r\n        <div class=\"card-body\">\r\n            <div nz-row nzGutter=\"8\">\r\n\r\n                <div nz-col nzSpan=\"12\">\r\n                    <nz-form-item>\r\n                        <nz-form-label>Efective Date</nz-form-label>\r\n                        <nz-form-control>\r\n                            <nz-date-picker [(ngModel)]=\"perubahan.start_periode\"></nz-date-picker>\r\n                        </nz-form-control>\r\n                    </nz-form-item>\r\n                </div>\r\n                <div nz-col nzSpan=\"12\">\r\n                    <nz-form-item>\r\n                        <nz-form-label>ref number</nz-form-label>\r\n                        <nz-form-control>\r\n                            <input nz-input placeholder=\"input number\" [(ngModel)]=\"perubahan.ref_nomor_sk\" />\r\n                        </nz-form-control>\r\n                    </nz-form-item>\r\n                </div>\r\n            </div>\r\n            <div nz-row nzGutter=\"8\">\r\n                <nz-table>\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Kode</th>\r\n                            <th>Komponen</th>\r\n                            <th>Nilai</th>\r\n                            <th>Rupiah</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr *ngFor=\"let item of perubahan_detail; let i = index\">\r\n                            <td>{{item.kode_komponen}}</td>\r\n                            <td>{{item.nama_komponen}}</td>\r\n                            <td>\r\n                                <input nz-input placeholder=\"\" [(ngModel)]=\"item.menjadi\" />\r\n                            </td>\r\n                            <td>{{item.menjadi | currency: 'Rp. '}}</td>\r\n\r\n                        </tr>\r\n                    </tbody>\r\n                </nz-table>\r\n            </div>\r\n\r\n            <div class=\"footer\">\r\n                <button type=\"button\" (click)=\"goToBack()\" class=\"ant-btn\" style=\"margin-right: 8px;\"><span>Cancel</span></button>\r\n                <button (click)=\"simpan()\" class=\"ant-btn ant-btn-primary\"><span>Submit</span></button>\r\n            </div>\r\n\r\n\r\n\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/hr/direktori/employee/pegawi-detail/payroll/perubahan/edit/edit.component.html":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/hr/direktori/employee/pegawi-detail/payroll/perubahan/edit/edit.component.html ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"air__utils__heading card-header-flex\">\r\n        <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n            <h5 class=\"mb-0\">Edit Perubahaan (PSN)</h5>\r\n        </div>\r\n    </div>\r\n    <div class=\"card\">\r\n        <div class=\"card-body\">\r\n            <div nz-row nzGutter=\"8\">\r\n\r\n                <div nz-col nzSpan=\"12\">\r\n                    <nz-form-item>\r\n                        <nz-form-label>Efective Date</nz-form-label>\r\n                        <nz-form-control>\r\n                            <nz-date-picker [(ngModel)]=\"perubahan.start_periode\"></nz-date-picker>\r\n                        </nz-form-control>\r\n                    </nz-form-item>\r\n                </div>\r\n                <div nz-col nzSpan=\"12\">\r\n                    <nz-form-item>\r\n                        <nz-form-label>ref number</nz-form-label>\r\n                        <nz-form-control>\r\n                            <input nz-input placeholder=\"input number\" [(ngModel)]=\"perubahan.ref_nomor_sk\" />\r\n                        </nz-form-control>\r\n                    </nz-form-item>\r\n                </div>\r\n            </div>\r\n            <div nz-row nzGutter=\"8\">\r\n                <nz-table>\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Kode</th>\r\n                            <th>Komponen</th>\r\n                            <th>Nilai</th>\r\n                            <th>Rupiah</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr *ngFor=\"let item of perubahan_detail; let i = index\">\r\n                            <td>{{item.kode_komponen}}</td>\r\n                            <td>{{item.nama_komponen}}</td>\r\n                            <td>\r\n                                <input nz-input placeholder=\"\" [(ngModel)]=\"item.menjadi\" />\r\n                            </td>\r\n                            <td>{{item.menjadi | currency: 'Rp. '}}</td>\r\n\r\n                        </tr>\r\n                    </tbody>\r\n                </nz-table>\r\n            </div>\r\n\r\n            <div class=\"footer\">\r\n                <button type=\"button\" (click)=\"goToBack()\" class=\"ant-btn\" style=\"margin-right: 8px;\"><span>Cancel</span></button>\r\n                <button (click)=\"simpan()\" class=\"ant-btn ant-btn-primary\"><span>Submit</span></button>\r\n            </div>\r\n\r\n\r\n\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/hr/direktori/employee/pegawi-detail/payroll/perubahan/list/list.component.html":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/hr/direktori/employee/pegawi-detail/payroll/perubahan/list/list.component.html ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"air__utils__heading card-header-flex\">\r\n        <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n            <h5 class=\"mb-0\">Perubahaan (PSN)</h5>\r\n\r\n        </div>\r\n        <div class=\"d-flex flex-column justify-content-center\">\r\n            <a class=\"btn btn-primary\" [routerLink]=\"['../add']\" routerLinkActive=\"router-link-active\">\r\n                New\r\n            </a>\r\n        </div>\r\n\r\n    </div>\r\n    <div class=\"card\">\r\n        <div class=\"card-body\">\r\n\r\n\r\n            <nz-table #ajaxTable nzShowSizeChanger [nzFrontPagination]=\"false\" [nzData]=\"listOfData\" [nzLoading]=\"loading\" [nzTotal]=\"total\" [(nzPageIndex)]=\"pageIndex\" [(nzPageSize)]=\"pageSize\" (nzPageIndexChange)=\"searchData()\" (nzPageSizeChange)=\"searchData(true)\">\r\n                <thead (nzSortChange)=\"sort($event)\" nzSingleSort>\r\n                    <tr>\r\n                        <th nzShowSort nzSortKey=\"start_periode\">Effective Date</th>\r\n                        <th *ngFor=\"let item of induk\">{{item.komponen}}</th>\r\n                        <th>Checked by</th>\r\n                        <th>Ref</th>\r\n                        <th>status</th>\r\n                        <th class=\"text-right\">Action</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor=\"let data of ajaxTable.data\">\r\n                        <td>{{ data.start_periode | date}}</td>\r\n                        <td *ngFor=\"let item of induk\">{{ data[item.kode_komponen] | currency: 'Rp.' }}</td>\r\n                        <td>{{ data.id_pegawai_approval }}</td>\r\n                        <td>{{ data.ref_nomor_sk }}</td>\r\n                        <td>{{ data.status }}</td>\r\n                        <td class=\"text-right\">\r\n                            <a nz-dropdown [nzDropdownMenu]=\"menu\" nzPlacement=\"bottomRight\">\r\n                                <i nz-icon nzType=\"more\" nzTheme=\"outline\"></i>\r\n                            </a>\r\n                            <nz-dropdown-menu #menu=\"nzDropdownMenu\">\r\n                                <ul nz-menu nzSelectable>\r\n                                    <li *ngIf=\"data.status=='open'\" nz-menu-item [routerLink]=\"['../edit/',data.id_perubahan_payroll]\">Edit </li>\r\n                                    <li *ngIf=\"data.status=='open'\" nz-menu-item (click)=\"approve(data.id_perubahan_payroll)\">Approv </li>\r\n\r\n                                    <li nz-menu-item *ngIf=\"data.status=='open'\">\r\n                                        <a nz-popconfirm nzPopconfirmTitle=\"Are you sure delete this ?\" nzPopconfirmPlacement=\"bottom\" (nzOnConfirm)=\"delete(data.id_perubahan_payroll)\" (nzOnCancel)=\"batalDelete()\">Delete</a>\r\n                                    </li>\r\n                                </ul>\r\n                            </nz-dropdown-menu>\r\n                        </td>\r\n                    </tr>\r\n                </tbody>\r\n            </nz-table>\r\n\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/profile/payroll/perubahan/add/add.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/profile/payroll/perubahan/add/add.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"air__utils__heading card-header-flex\">\r\n        <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n            <h5 class=\"mb-0\">Add Perubahaan (PSN)</h5>\r\n        </div>\r\n    </div>\r\n    <div class=\"card\">\r\n        <div class=\"card-body\">\r\n            <div nz-row nzGutter=\"8\">\r\n\r\n                <div nz-col nzSpan=\"12\">\r\n                    <nz-form-item>\r\n                        <nz-form-label>Efective Date</nz-form-label>\r\n                        <nz-form-control>\r\n                            <nz-date-picker [(ngModel)]=\"perubahan.start_periode\"></nz-date-picker>\r\n                        </nz-form-control>\r\n                    </nz-form-item>\r\n                </div>\r\n                <div nz-col nzSpan=\"12\">\r\n                    <nz-form-item>\r\n                        <nz-form-label>ref number</nz-form-label>\r\n                        <nz-form-control>\r\n                            <input nz-input placeholder=\"input number\" [(ngModel)]=\"perubahan.ref_nomor_sk\" />\r\n                        </nz-form-control>\r\n                    </nz-form-item>\r\n                </div>\r\n            </div>\r\n            <div nz-row nzGutter=\"8\">\r\n                <nz-table>\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Kode</th>\r\n                            <th>Komponen</th>\r\n                            <th>Nilai</th>\r\n                            <th>Rupiah</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr *ngFor=\"let item of perubahan_detail; let i = index\">\r\n                            <td>{{item.kode_komponen}}</td>\r\n                            <td>{{item.nama_komponen}}</td>\r\n                            <td>\r\n                                <input nz-input placeholder=\"\" [(ngModel)]=\"item.menjadi\" />\r\n                            </td>\r\n                            <td>{{item.menjadi | currency: 'Rp. '}}</td>\r\n\r\n                        </tr>\r\n                    </tbody>\r\n                </nz-table>\r\n            </div>\r\n\r\n            <div class=\"footer\">\r\n                <button type=\"button\" (click)=\"goToBack()\" class=\"ant-btn\" style=\"margin-right: 8px;\"><span>Cancel</span></button>\r\n                <button (click)=\"simpan()\" class=\"ant-btn ant-btn-primary\"><span>Submit</span></button>\r\n            </div>\r\n\r\n\r\n\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/profile/payroll/perubahan/edit/edit.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/profile/payroll/perubahan/edit/edit.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"air__utils__heading card-header-flex\">\r\n        <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n            <h5 class=\"mb-0\">Edit Perubahaan (PSN)</h5>\r\n        </div>\r\n    </div>\r\n    <div class=\"card\">\r\n        <div class=\"card-body\">\r\n            <div nz-row nzGutter=\"8\">\r\n\r\n                <div nz-col nzSpan=\"12\">\r\n                    <nz-form-item>\r\n                        <nz-form-label>Efective Date</nz-form-label>\r\n                        <nz-form-control>\r\n                            <nz-date-picker [(ngModel)]=\"perubahan.start_periode\"></nz-date-picker>\r\n                        </nz-form-control>\r\n                    </nz-form-item>\r\n                </div>\r\n                <div nz-col nzSpan=\"12\">\r\n                    <nz-form-item>\r\n                        <nz-form-label>ref number</nz-form-label>\r\n                        <nz-form-control>\r\n                            <input nz-input placeholder=\"input number\" [(ngModel)]=\"perubahan.ref_nomor_sk\" />\r\n                        </nz-form-control>\r\n                    </nz-form-item>\r\n                </div>\r\n            </div>\r\n            <div nz-row nzGutter=\"8\">\r\n                <nz-table>\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Kode</th>\r\n                            <th>Komponen</th>\r\n                            <th>Nilai</th>\r\n                            <th>Rupiah</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr *ngFor=\"let item of perubahan_detail; let i = index\">\r\n                            <td>{{item.kode_komponen}}</td>\r\n                            <td>{{item.nama_komponen}}</td>\r\n                            <td>\r\n                                <input nz-input placeholder=\"\" [(ngModel)]=\"item.menjadi\" />\r\n                            </td>\r\n                            <td>{{item.menjadi | currency: 'Rp. '}}</td>\r\n\r\n                        </tr>\r\n                    </tbody>\r\n                </nz-table>\r\n            </div>\r\n\r\n            <div class=\"footer\">\r\n                <button type=\"button\" (click)=\"goToBack()\" class=\"ant-btn\" style=\"margin-right: 8px;\"><span>Cancel</span></button>\r\n                <button (click)=\"simpan()\" class=\"ant-btn ant-btn-primary\"><span>Submit</span></button>\r\n            </div>\r\n\r\n\r\n\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/profile/payroll/perubahan/list/list.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/profile/payroll/perubahan/list/list.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"air__utils__heading card-header-flex\">\r\n        <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n            <h5 class=\"mb-0\">Perubahaan (PSN)</h5>\r\n\r\n        </div>\r\n        <div class=\"d-flex flex-column justify-content-center\">\r\n            <a class=\"btn btn-primary\" [routerLink]=\"['../add']\" routerLinkActive=\"router-link-active\">\r\n                New\r\n            </a>\r\n        </div>\r\n\r\n    </div>\r\n    <div class=\"card\">\r\n        <div class=\"card-body\">\r\n\r\n\r\n            <nz-table #ajaxTable nzShowSizeChanger [nzFrontPagination]=\"false\" [nzData]=\"listOfData\" [nzLoading]=\"loading\" [nzTotal]=\"total\" [(nzPageIndex)]=\"pageIndex\" [(nzPageSize)]=\"pageSize\" (nzPageIndexChange)=\"searchData()\" (nzPageSizeChange)=\"searchData(true)\">\r\n                <thead (nzSortChange)=\"sort($event)\" nzSingleSort>\r\n                    <tr>\r\n                        <th nzShowSort nzSortKey=\"start_periode\">Effective Date</th>\r\n                        <th *ngFor=\"let item of induk\">{{item.komponen}}</th>\r\n                        <th>Checked by</th>\r\n                        <th>Ref</th>\r\n                        <th>status</th>\r\n                        <th class=\"text-right\">Action</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor=\"let data of ajaxTable.data\">\r\n                        <td>{{ data.start_periode | date}}</td>\r\n                        <td *ngFor=\"let item of induk\">{{ data[item.kode_komponen] | currency: 'Rp.' }}</td>\r\n                        <td>{{ data.id_pegawai_approval }}</td>\r\n                        <td>{{ data.ref_nomor_sk }}</td>\r\n                        <td>{{ data.status }}</td>\r\n                        <td class=\"text-right\">\r\n                            <a nz-dropdown [nzDropdownMenu]=\"menu\" nzPlacement=\"bottomRight\">\r\n                                <i nz-icon nzType=\"more\" nzTheme=\"outline\"></i>\r\n                            </a>\r\n                            <nz-dropdown-menu #menu=\"nzDropdownMenu\">\r\n                                <ul nz-menu nzSelectable>\r\n                                    <li *ngIf=\"data.status=='open'\" nz-menu-item [routerLink]=\"['../edit/',data.id_perubahan_payroll]\">Edit </li>\r\n                                    <li *ngIf=\"data.status=='open'\" nz-menu-item (click)=\"approve(data.id_perubahan_payroll)\">Approv </li>\r\n\r\n                                    <li nz-menu-item *ngIf=\"data.status=='open'\">\r\n                                        <a nz-popconfirm nzPopconfirmTitle=\"Are you sure delete this ?\" nzPopconfirmPlacement=\"bottom\" (nzOnConfirm)=\"delete(data.id_perubahan_payroll)\" (nzOnCancel)=\"batalDelete()\">Delete</a>\r\n                                    </li>\r\n                                </ul>\r\n                            </nz-dropdown-menu>\r\n                        </td>\r\n                    </tr>\r\n                </tbody>\r\n            </nz-table>\r\n\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/hr/direktori/employee/pegawi-detail/payroll/perubahan/add/add.component.scss":
/*!****************************************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/employee/pegawi-detail/payroll/perubahan/add/add.component.scss ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hyL2RpcmVrdG9yaS9lbXBsb3llZS9wZWdhd2ktZGV0YWlsL3BheXJvbGwvcGVydWJhaGFuL2FkZC9hZGQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/hr/direktori/employee/pegawi-detail/payroll/perubahan/add/add.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/employee/pegawi-detail/payroll/perubahan/add/add.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: AddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddComponent", function() { return AddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_sdk_payroll_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sdk/payroll/services */ "./src/app/sdk/payroll/services.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/tool/pesan.service */ "./src/app/services/tool/pesan.service.ts");
/* harmony import */ var _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../service/pegawai-detail.service */ "./src/app/pages/hr/direktori/employee/pegawi-detail/service/pegawai-detail.service.ts");







var AddComponent = /** @class */ (function () {
    function AddComponent(payrollPerubahanPayrollService, payrollPerubahanPayrollDetailService, payrollKomponenPerusahaanService, spinner, pesan, router, pegawaiDetailService, activatedRoute) {
        this.payrollPerubahanPayrollService = payrollPerubahanPayrollService;
        this.payrollPerubahanPayrollDetailService = payrollPerubahanPayrollDetailService;
        this.payrollKomponenPerusahaanService = payrollKomponenPerusahaanService;
        this.spinner = spinner;
        this.pesan = pesan;
        this.router = router;
        this.pegawaiDetailService = pegawaiDetailService;
        this.activatedRoute = activatedRoute;
        this.id_pegawai = '';
        this.perubahan = {};
        this.perubahan_detail = [];
        this.induk = [];
    }
    AddComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pegawaiDetailService.getIdPegawai().subscribe(function (data) {
            _this.id_pegawai = data;
        });
        this.getPreeData();
    };
    AddComponent.prototype.getPreeData = function () {
        var _this = this;
        this.payrollKomponenPerusahaanService.getPayrollKomponenPerusahaans(JSON.stringify({ is_lock: 'ya' }))
            .subscribe(function (data) {
            data.data.forEach(function (element) {
                if (element.is_lock == 'ya') {
                    _this.perubahan_detail.push({ nama_komponen: element.komponen, kode_komponen: element.kode_komponen, id_komponen_perusahaan: element.id_komponen_perusahaan });
                    _this.induk.push(element);
                }
            });
        });
        this.perubahan_detail.reverse();
    };
    AddComponent.prototype.simpan = function () {
        var _this = this;
        this.spinner.show();
        this.perubahan.id_pegawai = this.id_pegawai;
        var param = {
            perubahaan: this.perubahan,
            perubahan_detail: this.perubahan_detail
        };
        this.payrollPerubahanPayrollService
            .postPayrollPerubahanPayrolls(param)
            .subscribe(function (data) {
            _this.goToBack();
            _this.spinner.hide();
        }, function (err) {
            _this.pesan.pesanWarningForm('Gagal di simpan');
            _this.spinner.hide();
        }, function () {
            console.log('HTTP request completed.');
        });
    };
    AddComponent.prototype.goToBack = function () {
        this.router.navigate(['/hr/direktori/pegawai-detail', this.id_pegawai, 'payroll', 'perubahaan', 'list']);
    };
    AddComponent.ctorParameters = function () { return [
        { type: src_app_sdk_payroll_services__WEBPACK_IMPORTED_MODULE_2__["PayrollPerubahanPayrollService"] },
        { type: src_app_sdk_payroll_services__WEBPACK_IMPORTED_MODULE_2__["PayrollPerubahanPayrollDetailService"] },
        { type: src_app_sdk_payroll_services__WEBPACK_IMPORTED_MODULE_2__["PayrollKomponenPerusahaanService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"] },
        { type: src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_5__["PesanService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_6__["PegawaiDetailService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
    ]; };
    AddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add',
            template: __webpack_require__(/*! raw-loader!./add.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/hr/direktori/employee/pegawi-detail/payroll/perubahan/add/add.component.html"),
            styles: [__webpack_require__(/*! ./add.component.scss */ "./src/app/pages/hr/direktori/employee/pegawi-detail/payroll/perubahan/add/add.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_sdk_payroll_services__WEBPACK_IMPORTED_MODULE_2__["PayrollPerubahanPayrollService"],
            src_app_sdk_payroll_services__WEBPACK_IMPORTED_MODULE_2__["PayrollPerubahanPayrollDetailService"],
            src_app_sdk_payroll_services__WEBPACK_IMPORTED_MODULE_2__["PayrollKomponenPerusahaanService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"],
            src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_5__["PesanService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_6__["PegawaiDetailService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], AddComponent);
    return AddComponent;
}());



/***/ }),

/***/ "./src/app/pages/hr/direktori/employee/pegawi-detail/payroll/perubahan/edit/edit.component.scss":
/*!******************************************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/employee/pegawi-detail/payroll/perubahan/edit/edit.component.scss ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hyL2RpcmVrdG9yaS9lbXBsb3llZS9wZWdhd2ktZGV0YWlsL3BheXJvbGwvcGVydWJhaGFuL2VkaXQvZWRpdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/hr/direktori/employee/pegawi-detail/payroll/perubahan/edit/edit.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/employee/pegawi-detail/payroll/perubahan/edit/edit.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: EditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditComponent", function() { return EditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_sdk_payroll_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sdk/payroll/services */ "./src/app/sdk/payroll/services.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/tool/pesan.service */ "./src/app/services/tool/pesan.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../service/pegawai-detail.service */ "./src/app/pages/hr/direktori/employee/pegawi-detail/service/pegawai-detail.service.ts");







var EditComponent = /** @class */ (function () {
    function EditComponent(payrollPerubahanPayrollService, payrollPerubahanPayrollDetailService, payrollKomponenPerusahaanService, spinner, pesan, router, pegawaiDetailService, activatedRoute) {
        this.payrollPerubahanPayrollService = payrollPerubahanPayrollService;
        this.payrollPerubahanPayrollDetailService = payrollPerubahanPayrollDetailService;
        this.payrollKomponenPerusahaanService = payrollKomponenPerusahaanService;
        this.spinner = spinner;
        this.pesan = pesan;
        this.router = router;
        this.pegawaiDetailService = pegawaiDetailService;
        this.activatedRoute = activatedRoute;
        this.id_pegawai = '';
        this.perubahan = {};
        this.perubahan_detail = [];
        this.id_perubahaan_payroll = '';
    }
    EditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pegawaiDetailService.getIdPegawai().subscribe(function (data) {
            _this.id_pegawai = data;
        });
        this.activatedRoute.paramMap.subscribe(function (data) {
            if (data.get('id')) {
                _this.id_perubahaan_payroll = data.get('id');
                _this.getPreeData();
            }
        });
    };
    EditComponent.prototype.getPreeData = function () {
        var _this = this;
        this.payrollPerubahanPayrollService.getPayrollPerubahanPayrollsId(this.id_perubahaan_payroll)
            .subscribe(function (data) {
            _this.perubahan = data.data;
        });
        this.payrollPerubahanPayrollDetailService.getPayrollPerubahanPayrollDetails(JSON.stringify({ id_perubahan_payroll: this.id_perubahaan_payroll }))
            .subscribe(function (data) {
            _this.perubahan_detail = data.data;
        });
    };
    EditComponent.prototype.simpan = function () {
        var _this = this;
        this.spinner.show();
        this.perubahan.id_pegawai = this.id_pegawai;
        var param = {
            perubahaan: this.perubahan,
            perubahan_detail: this.perubahan_detail
        };
        this.payrollPerubahanPayrollService
            .putPayrollPerubahanPayrollsId({ id: '0', body: param })
            .subscribe(function (data) {
            _this.goToBack();
            _this.spinner.hide();
        }, function (err) {
            _this.pesan.pesanWarningForm('Gagal di simpan');
            _this.spinner.hide();
        }, function () {
            console.log('HTTP request completed.');
        });
    };
    EditComponent.prototype.goToBack = function () {
        this.router.navigate(['/hr/direktori/pegawai-detail', this.id_pegawai, 'payroll', 'perubahaan', 'list']);
    };
    EditComponent.ctorParameters = function () { return [
        { type: src_app_sdk_payroll_services__WEBPACK_IMPORTED_MODULE_2__["PayrollPerubahanPayrollService"] },
        { type: src_app_sdk_payroll_services__WEBPACK_IMPORTED_MODULE_2__["PayrollPerubahanPayrollDetailService"] },
        { type: src_app_sdk_payroll_services__WEBPACK_IMPORTED_MODULE_2__["PayrollKomponenPerusahaanService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"] },
        { type: src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_4__["PesanService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_6__["PegawaiDetailService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }
    ]; };
    EditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit',
            template: __webpack_require__(/*! raw-loader!./edit.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/hr/direktori/employee/pegawi-detail/payroll/perubahan/edit/edit.component.html"),
            styles: [__webpack_require__(/*! ./edit.component.scss */ "./src/app/pages/hr/direktori/employee/pegawi-detail/payroll/perubahan/edit/edit.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_sdk_payroll_services__WEBPACK_IMPORTED_MODULE_2__["PayrollPerubahanPayrollService"],
            src_app_sdk_payroll_services__WEBPACK_IMPORTED_MODULE_2__["PayrollPerubahanPayrollDetailService"],
            src_app_sdk_payroll_services__WEBPACK_IMPORTED_MODULE_2__["PayrollKomponenPerusahaanService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"],
            src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_4__["PesanService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_6__["PegawaiDetailService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])
    ], EditComponent);
    return EditComponent;
}());



/***/ }),

/***/ "./src/app/pages/hr/direktori/employee/pegawi-detail/payroll/perubahan/list/list.component.scss":
/*!******************************************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/employee/pegawi-detail/payroll/perubahan/list/list.component.scss ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hyL2RpcmVrdG9yaS9lbXBsb3llZS9wZWdhd2ktZGV0YWlsL3BheXJvbGwvcGVydWJhaGFuL2xpc3QvbGlzdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/hr/direktori/employee/pegawi-detail/payroll/perubahan/list/list.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/employee/pegawi-detail/payroll/perubahan/list/list.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_sdk_payroll_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sdk/payroll/services */ "./src/app/sdk/payroll/services.ts");
/* harmony import */ var src_app_services_filter_fuction_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/filter-fuction.service */ "./src/app/services/filter-fuction.service.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../service/pegawai-detail.service */ "./src/app/pages/hr/direktori/employee/pegawi-detail/service/pegawai-detail.service.ts");







var ListComponent = /** @class */ (function () {
    function ListComponent(payrollPerubahanPayrollService, payrollPerubahanPayrollDetailService, filterFuctionService, nzMessageService, spinner, pegawaiDetailService) {
        this.payrollPerubahanPayrollService = payrollPerubahanPayrollService;
        this.payrollPerubahanPayrollDetailService = payrollPerubahanPayrollDetailService;
        this.filterFuctionService = filterFuctionService;
        this.nzMessageService = nzMessageService;
        this.spinner = spinner;
        this.pegawaiDetailService = pegawaiDetailService;
        this.pageIndex = 1;
        this.pageSize = 10;
        this.total = 1;
        this.listOfData = [];
        this.induk = [];
        this.loading = true;
        this.sortValue = null;
        this.sortKey = null;
        this.search = '';
        this.id_pegawai = '';
    }
    ListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pegawaiDetailService.getIdPegawai().subscribe(function (data) {
            _this.id_pegawai = data;
            _this.searchData();
        });
    };
    ListComponent.prototype.sort = function (sort) {
        this.sortKey = sort.key;
        this.sortValue = sort.value;
        this.searchData();
    };
    ListComponent.prototype.searchData = function (reset) {
        var _this = this;
        if (reset === void 0) { reset = false; }
        if (reset) {
            this.pageIndex = 1;
        }
        this.loading = true;
        this.payrollPerubahanPayrollService
            .getPayrollPerubahanPayrolls(JSON.stringify({
            id_pegawai: this.id_pegawai,
            pageIndex: this.pageIndex, pageSize: this.pageSize, sortKey: this.sortKey, sortValue: this.sortValue, search: this.search
        }))
            .subscribe(function (data) {
            _this.loading = false;
            _this.total = data.data.total;
            _this.listOfData = data.data.data;
            _this.induk = data.data.induk;
        });
    };
    ListComponent.prototype.updateFilter = function (value) {
        this.search = value;
        this.searchData(true);
    };
    ListComponent.prototype.delete = function (id) {
        var _this = this;
        this.spinner.show();
        this.payrollPerubahanPayrollService.deletePayrollPerubahanPayrollsId(id).subscribe(function (data) {
            _this.searchData();
            _this.spinner.hide();
        }, function (err) {
            _this.spinner.hide();
            alert('disable');
        });
    };
    ListComponent.prototype.approve = function (id) {
        var _this = this;
        this.spinner.show();
        this.payrollPerubahanPayrollService.putPayrollPerubahanPayrollsId({ id: '00z', body: { id_perubahan_payroll: id } }).subscribe(function (data) {
            _this.searchData();
            _this.spinner.hide();
        }, function (err) {
            _this.spinner.hide();
            alert('disable');
        });
    };
    ListComponent.prototype.batalDelete = function () {
        this.nzMessageService.info('click cancel');
    };
    ListComponent.ctorParameters = function () { return [
        { type: src_app_sdk_payroll_services__WEBPACK_IMPORTED_MODULE_2__["PayrollPerubahanPayrollService"] },
        { type: src_app_sdk_payroll_services__WEBPACK_IMPORTED_MODULE_2__["PayrollPerubahanPayrollDetailService"] },
        { type: src_app_services_filter_fuction_service__WEBPACK_IMPORTED_MODULE_3__["FilterFuctionService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzMessageService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"] },
        { type: _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_6__["PegawaiDetailService"] }
    ]; };
    ListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list',
            template: __webpack_require__(/*! raw-loader!./list.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/hr/direktori/employee/pegawi-detail/payroll/perubahan/list/list.component.html"),
            styles: [__webpack_require__(/*! ./list.component.scss */ "./src/app/pages/hr/direktori/employee/pegawi-detail/payroll/perubahan/list/list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_sdk_payroll_services__WEBPACK_IMPORTED_MODULE_2__["PayrollPerubahanPayrollService"],
            src_app_sdk_payroll_services__WEBPACK_IMPORTED_MODULE_2__["PayrollPerubahanPayrollDetailService"],
            src_app_services_filter_fuction_service__WEBPACK_IMPORTED_MODULE_3__["FilterFuctionService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzMessageService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"],
            _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_6__["PegawaiDetailService"]])
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "./src/app/pages/hr/direktori/employee/pegawi-detail/payroll/perubahan/perubahan-routing.module.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/employee/pegawi-detail/payroll/perubahan/perubahan-routing.module.ts ***!
  \*********************************************************************************************************/
/*! exports provided: PerubahanRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerubahanRoutingModule", function() { return PerubahanRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list/list.component */ "./src/app/pages/hr/direktori/employee/pegawi-detail/payroll/perubahan/list/list.component.ts");
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add/add.component */ "./src/app/pages/hr/direktori/employee/pegawi-detail/payroll/perubahan/add/add.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/pages/hr/direktori/employee/pegawi-detail/payroll/perubahan/edit/edit.component.ts");






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
        path: 'edit/:id',
        component: _edit_edit_component__WEBPACK_IMPORTED_MODULE_5__["EditComponent"]
    }
];
var PerubahanRoutingModule = /** @class */ (function () {
    function PerubahanRoutingModule() {
    }
    PerubahanRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], PerubahanRoutingModule);
    return PerubahanRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/hr/direktori/employee/pegawi-detail/payroll/perubahan/perubahan.module.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/employee/pegawi-detail/payroll/perubahan/perubahan.module.ts ***!
  \*************************************************************************************************/
/*! exports provided: PerubahanModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerubahanModule", function() { return PerubahanModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _perubahan_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./perubahan-routing.module */ "./src/app/pages/hr/direktori/employee/pegawi-detail/payroll/perubahan/perubahan-routing.module.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list/list.component */ "./src/app/pages/hr/direktori/employee/pegawi-detail/payroll/perubahan/list/list.component.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/angular-reactive-forms-helper */ "./src/app/services/angular-reactive-forms-helper.ts");
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./add/add.component */ "./src/app/pages/hr/direktori/employee/pegawi-detail/payroll/perubahan/add/add.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/pages/hr/direktori/employee/pegawi-detail/payroll/perubahan/edit/edit.component.ts");










var PerubahanModule = /** @class */ (function () {
    function PerubahanModule() {
    }
    PerubahanModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_list_list_component__WEBPACK_IMPORTED_MODULE_4__["ListComponent"], _add_add_component__WEBPACK_IMPORTED_MODULE_8__["AddComponent"], _edit_edit_component__WEBPACK_IMPORTED_MODULE_9__["EditComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _perubahan_routing_module__WEBPACK_IMPORTED_MODULE_3__["PerubahanRoutingModule"],
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NgZorroAntdModule"],
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzSelectModule"],
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NgZorroAntdModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"]
            ],
            providers: [
                src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_7__["FormBuilderTypeSafe"]
            ]
        })
    ], PerubahanModule);
    return PerubahanModule;
}());



/***/ }),

/***/ "./src/app/pages/profile/payroll/perubahan/add/add.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/pages/profile/payroll/perubahan/add/add.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2ZpbGUvcGF5cm9sbC9wZXJ1YmFoYW4vYWRkL2FkZC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/profile/payroll/perubahan/add/add.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/profile/payroll/perubahan/add/add.component.ts ***!
  \**********************************************************************/
/*! exports provided: AddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddComponent", function() { return AddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_sdk_payroll_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sdk/payroll/services */ "./src/app/sdk/payroll/services.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/tool/pesan.service */ "./src/app/services/tool/pesan.service.ts");
/* harmony import */ var _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../service/pegawai-detail.service */ "./src/app/pages/profile/service/pegawai-detail.service.ts");







var AddComponent = /** @class */ (function () {
    function AddComponent(payrollPerubahanPayrollService, payrollPerubahanPayrollDetailService, payrollKomponenPerusahaanService, spinner, pesan, router, pegawaiDetailService, activatedRoute) {
        this.payrollPerubahanPayrollService = payrollPerubahanPayrollService;
        this.payrollPerubahanPayrollDetailService = payrollPerubahanPayrollDetailService;
        this.payrollKomponenPerusahaanService = payrollKomponenPerusahaanService;
        this.spinner = spinner;
        this.pesan = pesan;
        this.router = router;
        this.pegawaiDetailService = pegawaiDetailService;
        this.activatedRoute = activatedRoute;
        this.id_pegawai = '';
        this.perubahan = {};
        this.perubahan_detail = [];
        this.induk = [];
    }
    AddComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pegawaiDetailService.getIdPegawai().subscribe(function (data) {
            _this.id_pegawai = data;
        });
        this.getPreeData();
    };
    AddComponent.prototype.getPreeData = function () {
        var _this = this;
        this.payrollKomponenPerusahaanService.getPayrollKomponenPerusahaans(JSON.stringify({ is_lock: 'ya' }))
            .subscribe(function (data) {
            data.data.forEach(function (element) {
                if (element.is_lock == 'ya') {
                    _this.perubahan_detail.push({ nama_komponen: element.komponen, kode_komponen: element.kode_komponen, id_komponen_perusahaan: element.id_komponen_perusahaan });
                    _this.induk.push(element);
                }
            });
        });
        this.perubahan_detail.reverse();
    };
    AddComponent.prototype.simpan = function () {
        var _this = this;
        this.spinner.show();
        this.perubahan.id_pegawai = this.id_pegawai;
        var param = {
            perubahaan: this.perubahan,
            perubahan_detail: this.perubahan_detail
        };
        this.payrollPerubahanPayrollService
            .postPayrollPerubahanPayrolls(param)
            .subscribe(function (data) {
            _this.goToBack();
            _this.spinner.hide();
        }, function (err) {
            _this.pesan.pesanWarningForm('Gagal di simpan');
            _this.spinner.hide();
        }, function () {
            console.log('HTTP request completed.');
        });
    };
    AddComponent.prototype.goToBack = function () {
        this.router.navigate(['/hr/direktori/pegawai-detail', this.id_pegawai, 'payroll', 'perubahaan', 'list']);
    };
    AddComponent.ctorParameters = function () { return [
        { type: src_app_sdk_payroll_services__WEBPACK_IMPORTED_MODULE_2__["PayrollPerubahanPayrollService"] },
        { type: src_app_sdk_payroll_services__WEBPACK_IMPORTED_MODULE_2__["PayrollPerubahanPayrollDetailService"] },
        { type: src_app_sdk_payroll_services__WEBPACK_IMPORTED_MODULE_2__["PayrollKomponenPerusahaanService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"] },
        { type: src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_5__["PesanService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_6__["PegawaiDetailService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
    ]; };
    AddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add',
            template: __webpack_require__(/*! raw-loader!./add.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/profile/payroll/perubahan/add/add.component.html"),
            styles: [__webpack_require__(/*! ./add.component.scss */ "./src/app/pages/profile/payroll/perubahan/add/add.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_sdk_payroll_services__WEBPACK_IMPORTED_MODULE_2__["PayrollPerubahanPayrollService"],
            src_app_sdk_payroll_services__WEBPACK_IMPORTED_MODULE_2__["PayrollPerubahanPayrollDetailService"],
            src_app_sdk_payroll_services__WEBPACK_IMPORTED_MODULE_2__["PayrollKomponenPerusahaanService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"],
            src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_5__["PesanService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_6__["PegawaiDetailService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], AddComponent);
    return AddComponent;
}());



/***/ }),

/***/ "./src/app/pages/profile/payroll/perubahan/edit/edit.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/pages/profile/payroll/perubahan/edit/edit.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2ZpbGUvcGF5cm9sbC9wZXJ1YmFoYW4vZWRpdC9lZGl0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/profile/payroll/perubahan/edit/edit.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/pages/profile/payroll/perubahan/edit/edit.component.ts ***!
  \************************************************************************/
/*! exports provided: EditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditComponent", function() { return EditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_sdk_payroll_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sdk/payroll/services */ "./src/app/sdk/payroll/services.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/tool/pesan.service */ "./src/app/services/tool/pesan.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../service/pegawai-detail.service */ "./src/app/pages/profile/service/pegawai-detail.service.ts");







var EditComponent = /** @class */ (function () {
    function EditComponent(payrollPerubahanPayrollService, payrollPerubahanPayrollDetailService, payrollKomponenPerusahaanService, spinner, pesan, router, pegawaiDetailService, activatedRoute) {
        this.payrollPerubahanPayrollService = payrollPerubahanPayrollService;
        this.payrollPerubahanPayrollDetailService = payrollPerubahanPayrollDetailService;
        this.payrollKomponenPerusahaanService = payrollKomponenPerusahaanService;
        this.spinner = spinner;
        this.pesan = pesan;
        this.router = router;
        this.pegawaiDetailService = pegawaiDetailService;
        this.activatedRoute = activatedRoute;
        this.id_pegawai = '';
        this.perubahan = {};
        this.perubahan_detail = [];
        this.id_perubahaan_payroll = '';
    }
    EditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pegawaiDetailService.getIdPegawai().subscribe(function (data) {
            _this.id_pegawai = data;
        });
        this.activatedRoute.paramMap.subscribe(function (data) {
            if (data.get('id')) {
                _this.id_perubahaan_payroll = data.get('id');
                _this.getPreeData();
            }
        });
    };
    EditComponent.prototype.getPreeData = function () {
        var _this = this;
        this.payrollPerubahanPayrollService.getPayrollPerubahanPayrollsId(this.id_perubahaan_payroll)
            .subscribe(function (data) {
            _this.perubahan = data.data;
        });
        this.payrollPerubahanPayrollDetailService.getPayrollPerubahanPayrollDetails(JSON.stringify({ id_perubahan_payroll: this.id_perubahaan_payroll }))
            .subscribe(function (data) {
            _this.perubahan_detail = data.data;
        });
    };
    EditComponent.prototype.simpan = function () {
        var _this = this;
        this.spinner.show();
        this.perubahan.id_pegawai = this.id_pegawai;
        var param = {
            perubahaan: this.perubahan,
            perubahan_detail: this.perubahan_detail
        };
        this.payrollPerubahanPayrollService
            .putPayrollPerubahanPayrollsId({ id: '0', body: param })
            .subscribe(function (data) {
            _this.goToBack();
            _this.spinner.hide();
        }, function (err) {
            _this.pesan.pesanWarningForm('Gagal di simpan');
            _this.spinner.hide();
        }, function () {
            console.log('HTTP request completed.');
        });
    };
    EditComponent.prototype.goToBack = function () {
        this.router.navigate(['/hr/direktori/pegawai-detail', this.id_pegawai, 'payroll', 'perubahaan', 'list']);
    };
    EditComponent.ctorParameters = function () { return [
        { type: src_app_sdk_payroll_services__WEBPACK_IMPORTED_MODULE_2__["PayrollPerubahanPayrollService"] },
        { type: src_app_sdk_payroll_services__WEBPACK_IMPORTED_MODULE_2__["PayrollPerubahanPayrollDetailService"] },
        { type: src_app_sdk_payroll_services__WEBPACK_IMPORTED_MODULE_2__["PayrollKomponenPerusahaanService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"] },
        { type: src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_4__["PesanService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_6__["PegawaiDetailService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }
    ]; };
    EditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit',
            template: __webpack_require__(/*! raw-loader!./edit.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/profile/payroll/perubahan/edit/edit.component.html"),
            styles: [__webpack_require__(/*! ./edit.component.scss */ "./src/app/pages/profile/payroll/perubahan/edit/edit.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_sdk_payroll_services__WEBPACK_IMPORTED_MODULE_2__["PayrollPerubahanPayrollService"],
            src_app_sdk_payroll_services__WEBPACK_IMPORTED_MODULE_2__["PayrollPerubahanPayrollDetailService"],
            src_app_sdk_payroll_services__WEBPACK_IMPORTED_MODULE_2__["PayrollKomponenPerusahaanService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"],
            src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_4__["PesanService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_6__["PegawaiDetailService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])
    ], EditComponent);
    return EditComponent;
}());



/***/ }),

/***/ "./src/app/pages/profile/payroll/perubahan/list/list.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/pages/profile/payroll/perubahan/list/list.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2ZpbGUvcGF5cm9sbC9wZXJ1YmFoYW4vbGlzdC9saXN0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/profile/payroll/perubahan/list/list.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/pages/profile/payroll/perubahan/list/list.component.ts ***!
  \************************************************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_sdk_payroll_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sdk/payroll/services */ "./src/app/sdk/payroll/services.ts");
/* harmony import */ var src_app_services_filter_fuction_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/filter-fuction.service */ "./src/app/services/filter-fuction.service.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../service/pegawai-detail.service */ "./src/app/pages/profile/service/pegawai-detail.service.ts");







var ListComponent = /** @class */ (function () {
    function ListComponent(payrollPerubahanPayrollService, payrollPerubahanPayrollDetailService, filterFuctionService, nzMessageService, spinner, pegawaiDetailService) {
        this.payrollPerubahanPayrollService = payrollPerubahanPayrollService;
        this.payrollPerubahanPayrollDetailService = payrollPerubahanPayrollDetailService;
        this.filterFuctionService = filterFuctionService;
        this.nzMessageService = nzMessageService;
        this.spinner = spinner;
        this.pegawaiDetailService = pegawaiDetailService;
        this.pageIndex = 1;
        this.pageSize = 10;
        this.total = 1;
        this.listOfData = [];
        this.induk = [];
        this.loading = true;
        this.sortValue = null;
        this.sortKey = null;
        this.search = '';
        this.id_pegawai = '';
    }
    ListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pegawaiDetailService.getIdPegawai().subscribe(function (data) {
            _this.id_pegawai = data;
            _this.searchData();
        });
    };
    ListComponent.prototype.sort = function (sort) {
        this.sortKey = sort.key;
        this.sortValue = sort.value;
        this.searchData();
    };
    ListComponent.prototype.searchData = function (reset) {
        var _this = this;
        if (reset === void 0) { reset = false; }
        if (reset) {
            this.pageIndex = 1;
        }
        this.loading = true;
        this.payrollPerubahanPayrollService
            .getPayrollPerubahanPayrolls(JSON.stringify({
            id_pegawai: this.id_pegawai,
            pageIndex: this.pageIndex, pageSize: this.pageSize, sortKey: this.sortKey, sortValue: this.sortValue, search: this.search
        }))
            .subscribe(function (data) {
            _this.loading = false;
            _this.total = data.data.total;
            _this.listOfData = data.data.data;
            _this.induk = data.data.induk;
        });
    };
    ListComponent.prototype.updateFilter = function (value) {
        this.search = value;
        this.searchData(true);
    };
    ListComponent.prototype.delete = function (id) {
        var _this = this;
        this.spinner.show();
        this.payrollPerubahanPayrollService.deletePayrollPerubahanPayrollsId(id).subscribe(function (data) {
            _this.searchData();
            _this.spinner.hide();
        }, function (err) {
            _this.spinner.hide();
            alert('disable');
        });
    };
    ListComponent.prototype.approve = function (id) {
        var _this = this;
        this.spinner.show();
        this.payrollPerubahanPayrollService.putPayrollPerubahanPayrollsId({ id: '00z', body: { id_perubahan_payroll: id } }).subscribe(function (data) {
            _this.searchData();
            _this.spinner.hide();
        }, function (err) {
            _this.spinner.hide();
            alert('disable');
        });
    };
    ListComponent.prototype.batalDelete = function () {
        this.nzMessageService.info('click cancel');
    };
    ListComponent.ctorParameters = function () { return [
        { type: src_app_sdk_payroll_services__WEBPACK_IMPORTED_MODULE_2__["PayrollPerubahanPayrollService"] },
        { type: src_app_sdk_payroll_services__WEBPACK_IMPORTED_MODULE_2__["PayrollPerubahanPayrollDetailService"] },
        { type: src_app_services_filter_fuction_service__WEBPACK_IMPORTED_MODULE_3__["FilterFuctionService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzMessageService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"] },
        { type: _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_6__["PegawaiDetailService"] }
    ]; };
    ListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list',
            template: __webpack_require__(/*! raw-loader!./list.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/profile/payroll/perubahan/list/list.component.html"),
            styles: [__webpack_require__(/*! ./list.component.scss */ "./src/app/pages/profile/payroll/perubahan/list/list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_sdk_payroll_services__WEBPACK_IMPORTED_MODULE_2__["PayrollPerubahanPayrollService"],
            src_app_sdk_payroll_services__WEBPACK_IMPORTED_MODULE_2__["PayrollPerubahanPayrollDetailService"],
            src_app_services_filter_fuction_service__WEBPACK_IMPORTED_MODULE_3__["FilterFuctionService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzMessageService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"],
            _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_6__["PegawaiDetailService"]])
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "./src/app/pages/profile/payroll/perubahan/perubahan-routing.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/profile/payroll/perubahan/perubahan-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: PerubahanRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerubahanRoutingModule", function() { return PerubahanRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list/list.component */ "./src/app/pages/profile/payroll/perubahan/list/list.component.ts");
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add/add.component */ "./src/app/pages/profile/payroll/perubahan/add/add.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/pages/profile/payroll/perubahan/edit/edit.component.ts");






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
        path: 'edit/:id',
        component: _edit_edit_component__WEBPACK_IMPORTED_MODULE_5__["EditComponent"]
    }
];
var PerubahanRoutingModule = /** @class */ (function () {
    function PerubahanRoutingModule() {
    }
    PerubahanRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], PerubahanRoutingModule);
    return PerubahanRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/profile/payroll/perubahan/perubahan.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/profile/payroll/perubahan/perubahan.module.ts ***!
  \*********************************************************************/
/*! exports provided: PerubahanModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerubahanModule", function() { return PerubahanModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _perubahan_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./perubahan-routing.module */ "./src/app/pages/profile/payroll/perubahan/perubahan-routing.module.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list/list.component */ "./src/app/pages/profile/payroll/perubahan/list/list.component.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/angular-reactive-forms-helper */ "./src/app/services/angular-reactive-forms-helper.ts");
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./add/add.component */ "./src/app/pages/profile/payroll/perubahan/add/add.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/pages/profile/payroll/perubahan/edit/edit.component.ts");










var PerubahanModule = /** @class */ (function () {
    function PerubahanModule() {
    }
    PerubahanModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_list_list_component__WEBPACK_IMPORTED_MODULE_4__["ListComponent"], _add_add_component__WEBPACK_IMPORTED_MODULE_8__["AddComponent"], _edit_edit_component__WEBPACK_IMPORTED_MODULE_9__["EditComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _perubahan_routing_module__WEBPACK_IMPORTED_MODULE_3__["PerubahanRoutingModule"],
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NgZorroAntdModule"],
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzSelectModule"],
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NgZorroAntdModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"]
            ],
            providers: [
                src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_7__["FormBuilderTypeSafe"]
            ]
        })
    ], PerubahanModule);
    return PerubahanModule;
}());



/***/ })

}]);
//# sourceMappingURL=perubahan-perubahan-module.js.map