(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["healthcare-healthcare-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/helpdesk/healthcare/bpjs/bpjs.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/helpdesk/healthcare/bpjs/bpjs.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"air__utils__heading card-header-flex\">\r\n        <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n            <h5 class=\"mb-0\">BPJS {{jenis_bpjs}}</h5>\r\n        </div>\r\n    </div>\r\n    <div class=\"card\">\r\n        <div class=\"card-body\">\r\n            <nav class=\"navbar\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-8\">\r\n                        <input class=\"form-control\" type=\"text\" name=\"search\" [(ngModel)]=\"search\">\r\n                    </div>\r\n                    <div class=\"col-md-4\">\r\n                        <button nz-button nzType=\"primary\" (click)=\"searchData()\">Search</button>\r\n                    </div>\r\n                </div>\r\n            </nav>\r\n            <nz-table #ajaxTable nzShowSizeChanger [nzFrontPagination]=\"false\" [nzData]=\"listOfData\"\r\n                [nzLoading]=\"loading\" [nzTotal]=\"total\" [(nzPageIndex)]=\"pageIndex\" [(nzPageSize)]=\"pageSize\"\r\n                (nzPageIndexChange)=\"searchData()\" (nzPageSizeChange)=\"searchData(true)\">\r\n                <thead (nzSortChange)=\"sort($event)\" nzSingleSort>\r\n                    <tr>\r\n                        <th nzShowSort nzSortKey=\"nama_depan\">Pegawai</th>\r\n                        <th nzShowSort nzSortKey=\"periode\">Periode</th>\r\n                        <th nzShowSort nzSortKey=\"nama_kebijakan\">Nama Kebijakan</th>\r\n                        <th nzShowSort nzSortKey=\"perusahaan\">Company Obligation </th>\r\n                        <th nzShowSort nzSortKey=\"pegawai\">Employee Obligation</th>\r\n                        <!-- <th class=\"text-right\">Action</th> -->\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor=\"let data of ajaxTable.data\">\r\n                        <td>{{ data.nama_depan }} {{ data.nama_belakang }}</td>\r\n                        <td>{{ data.periode }}</td>\r\n                        <td>{{ data.nama_kebijakan }}</td>\r\n                        <td>{{ data.perusahaan | currency: 'Rp' }}</td>\r\n                        <td>{{ data.pegawai | currency: 'Rp' }}</td>\r\n                        <!-- <td class=\"text-right\">\r\n                            <a nz-dropdown [nzDropdownMenu]=\"menu\" nzPlacement=\"bottomRight\">\r\n                                <i nz-icon nzType=\"more\" nzTheme=\"outline\"></i>\r\n                            </a>\r\n                            <nz-dropdown-menu #menu=\"nzDropdownMenu\">\r\n                                <ul nz-menu nzSelectable>\r\n                                    <li nz-menu-item (click)=\"delete(data.id_pegawai_bpjs)\">Delete\r\n                                    </li>\r\n                                </ul>\r\n                            </nz-dropdown-menu>\r\n                        </td> -->\r\n                    </tr>\r\n                </tbody>\r\n            </nz-table>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/helpdesk/healthcare/detail-klaim/detail-klaim.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/helpdesk/healthcare/detail-klaim/detail-klaim.component.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"air__utils__heading card-header-flex\">\r\n        <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n            <h5 class=\"mb-0\">Detail Claim</h5>\r\n        </div>\r\n        <div class=\"d-flex flex-column justify-content-center \">\r\n            <span style=\"margin-right: 15px;\">\r\n                {{dataKlaim.nomor | titlecase}}\r\n            </span>\r\n        </div>\r\n        <div class=\"d-flex flex-column justify-content-center\">\r\n            <button nz-button nzType=\"primary\" style=\"margin-right: 15px;\"><i nz-icon\r\n                    nzType=\"printer\"></i>Print</button>\r\n        </div>\r\n        <div class=\"d-flex flex-column justify-content-center\">\r\n\r\n            {{dataKlaim.status | titlecase}}\r\n        </div>\r\n    </div>\r\n    <div nz-row nzGutter=\"8\">\r\n        <div nz-col nzSpan=\"16\">\r\n            <div class=\"card\">\r\n                <div class=\"card-body\">\r\n                    <table class=\"table table-borderless\">\r\n                        <tbody>\r\n                            <div nz-row nzGutter=\"8\">\r\n                                <div nz-col nzSpan=\"12\">\r\n                                    <tr>\r\n                                        <td class=\"text-gray-6 pl-0\">Nama Pegawai</td>\r\n                                        <td class=\"pr-0 text-left text-dark\">: {{dataPegawai.nama_depan}}\r\n                                            {{dataPegawai.nama_belakang}}</td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td class=\"text-gray-6 pl-0\">NIK</td>\r\n                                        <td class=\"pr-0 text-left text-dark\">: {{dataPegawai.no_induk}}</td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td class=\"text-gray-6 pl-0\">Jabatan</td>\r\n                                        <td class=\"pr-0 text-left text-dark\">: {{dataPosisi.nama_jabatan}}\r\n                                            {{dataPosisi.nama_divisi}}</td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td class=\"text-gray-6 pl-0\">Kantor</td>\r\n                                        <td class=\"pr-0 text-left text-dark\">: {{dataPosisi.nama_kantor}}</td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td class=\"text-gray-6 pl-0\">Nama Pasien</td>\r\n                                        <td class=\"pr-0 text-left text-dark\">: {{DataKeluarga.nama_keluarga}}</td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td class=\"text-gray-6 pl-0\">Klaim ketegori</td>\r\n                                        <td class=\"pr-0 text-left text-dark\">: {{dataKategori.nama_kategori}}</td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td class=\"text-gray-6 pl-0\">Total</td>\r\n                                        <td class=\"pr-0 text-left text-dark\">: {{dataKlaim.nilai| currency: 'Rp.'}}</td>\r\n                                    </tr>\r\n                                </div>\r\n                                <div nz-col nzSpan=\"12\">\r\n                                    <tr>\r\n                                        <td class=\"text-gray-6 pl-0\">Rumah sakit</td>\r\n                                        <td class=\"pr-0 text-left text-dark\">: {{dataKlaim.nama_rumah_sakit}}</td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td class=\"text-gray-6 pl-0\">Alamat rumah sakit</td>\r\n                                        <td class=\"pr-0 text-left text-dark\">: {{dataKlaim.alamat_rumah_sakit}}</td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td class=\"text-gray-6 pl-0\">Tanggal berobat</td>\r\n                                        <td class=\"pr-0 text-left text-dark\">: {{dataKlaim.tanggal_berobat | date}}</td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td class=\"text-gray-6 pl-0\">Tanggal pengajuan</td>\r\n                                        <td class=\"pr-0 text-left text-dark\">: {{dataKlaim.created_at | date}}\r\n                                        </td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td class=\"text-gray-6 pl-0\">Deskripsi</td>\r\n                                        <td class=\"pr-0 text-left text-dark\">: {{dataKlaim.keterangan_klaim}}\r\n                                        </td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td class=\"text-gray-6 pl-0\">File</td>\r\n                                        <td class=\"pr-0 text-left text-dark\">\r\n                                            <erp-download-mode1 [type]=\"'full'\" [formoduleid]=\"dataKlaim.id_dokumen\">\r\n                                            </erp-download-mode1>\r\n                                        </td>\r\n                                    </tr>\r\n\r\n                                </div>\r\n                            </div>\r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n            <div class=\"card\">\r\n                <div class=\"card-header card-header-flex\">\r\n                    <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n                        <h6 class=\"mb=0\">Rincian Klaim</h6>\r\n                    </div>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <nz-table #basicTable [nzData]=\"dataItem\" [nzShowPagination]=\"false\"\r\n                        class=\"air__utils__scrollTable mb-4\">\r\n                        <thead>\r\n                            <tr>\r\n                                <th class=\"bg-transparent text-sentencase\">Nama Item</th>\r\n                                <th class=\"bg-transparent text-sentencase\">Nilai</th>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                            <tr *ngFor=\"let data of basicTable.data\">\r\n                                <td>{{data.nama_plafon}}</td>\r\n                                <td>{{data.nilai| currency: 'Rp.'}}</td>\r\n                            </tr>\r\n                        </tbody>\r\n                    </nz-table>\r\n                    <div class=\"footer\">\r\n                        <div class=\"row\">\r\n                            <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n                                <button nz-button nzType=\"default\" (click)=\"goToBack()\"\r\n                                    style=\"margin-right: 8px;\">Back</button>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div nz-col nzSpan=\"8\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <erp-approval-standar></erp-approval-standar>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <strong>Log History</strong><br><br>\r\n                    <nz-timeline nzMode=\"left\">\r\n                        <nz-timeline-item *ngFor=\"let item of listLog\">{{item.status}} oleh {{item.nama_depan}}\r\n                            <b>{{item.sebagai}}</b> {{item.created_at | date:'mediumDate' }} </nz-timeline-item>\r\n                    </nz-timeline>\r\n                    <ng-template #dotTemplate>\r\n                        <i nz-icon nzType=\"clock-circle-o\" style=\"font-size: 16px;\"></i>\r\n                    </ng-template>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/helpdesk/healthcare/healthcare.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/helpdesk/healthcare/healthcare.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nz-layout>\r\n    <nz-sider [nzWidth]=\"'auto'\">\r\n        <app-menu-module></app-menu-module>\r\n    </nz-sider>\r\n    <nz-content>\r\n        <div class=\"air__utils__content\">\r\n            <div>\r\n                <router-outlet #outletModule=\"outlet\"></router-outlet>\r\n            </div>\r\n        </div>\r\n    </nz-content>\r\n</nz-layout>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/helpdesk/healthcare/klaim/klaim.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/helpdesk/healthcare/klaim/klaim.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"air__utils__heading card-header-flex\">\r\n        <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n            <h5 class=\"mb-0\">Claim</h5>\r\n        </div>\r\n    </div>\r\n    <div class=\"card\">\r\n        <div class=\"card-body\">\r\n            <nav class=\"navbar\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-8\">\r\n                        <input class=\"form-control\" type=\"text\" name=\"search\" [(ngModel)]=\"search\">\r\n                    </div>\r\n                    <div class=\"col-md-4\">\r\n                        <button nz-button nzType=\"primary\" (click)=\"searchData()\">Search</button>\r\n                    </div>\r\n                </div>\r\n            </nav>\r\n            <nz-table #ajaxTable nzShowSizeChanger [nzFrontPagination]=\"false\" [nzData]=\"listOfData\"\r\n                [nzLoading]=\"loading\" [nzTotal]=\"total\" [(nzPageIndex)]=\"pageIndex\" [(nzPageSize)]=\"pageSize\"\r\n                (nzPageIndexChange)=\"searchData()\" (nzPageSizeChange)=\"searchData(true)\">\r\n                <thead (nzSortChange)=\"sort($event)\" nzSingleSort>\r\n                    <tr>\r\n                        <th nzShowSort nzSortKey=\"status\">Status</th>\r\n                        <th nzShowSort nzSortKey=\"nomor\">Nomor</th>\r\n                        <th nzShowSort nzSortKey=\"nama_depan\">Pegawai</th>\r\n                        <th nzShowSort nzSortKey=\"status\">Tanggal pengajuan</th>\r\n                        <th nzShowSort nzSortKey=\"status\">Tanggal Berobat</th>\r\n                        <th nzShowSort nzSortKey=\"status\">Nilai </th>\r\n                        <th>File </th>\r\n                        <th class=\"text-right\">Action</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor=\"let data of ajaxTable.data\">\r\n                        <td>\r\n                            <nz-tag [nzColor]=\"data.status | status\">{{data.status | titlecase}}</nz-tag>\r\n                        </td>\r\n                        <td>{{ data.nomor }}</td>\r\n                        <td>{{ data.nama_depan }} {{ data.nama_belakang }}</td>\r\n                        <td>{{ data.created_at |date }}</td>\r\n                        <td>{{ data.tanggal_berobat }}</td>\r\n                        <td>{{ data.nilai | currency: 'Rp.'}}</td>\r\n                        <td>\r\n                            <erp-download-mode1 [formoduleid]=\"data.id_dokumen\"></erp-download-mode1>\r\n                        </td>\r\n                        <td class=\"text-right\">\r\n                            <a nz-dropdown [nzDropdownMenu]=\"menu\" nzPlacement=\"bottomRight\">\r\n                                <i nz-icon nzType=\"more\" nzTheme=\"outline\"></i>\r\n                            </a>\r\n                            <nz-dropdown-menu #menu=\"nzDropdownMenu\">\r\n                                <ul nz-menu nzSelectable>\r\n                                    <li nz-menu-item [routerLink]=\"['../detail-klaim',data.id_klaim_pengajuan]\"><i nz-icon nzType=\"search\" nzTheme=\"outline\"></i>View\r\n                                    </li>\r\n                                </ul>\r\n                            </nz-dropdown-menu>\r\n                        </td>\r\n                    </tr>\r\n                </tbody>\r\n            </nz-table>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/helpdesk/healthcare/bpjs/bpjs.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/pages/helpdesk/healthcare/bpjs/bpjs.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hlbHBkZXNrL2hlYWx0aGNhcmUvYnBqcy9icGpzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/helpdesk/healthcare/bpjs/bpjs.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/helpdesk/healthcare/bpjs/bpjs.component.ts ***!
  \******************************************************************/
/*! exports provided: BpjsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BpjsComponent", function() { return BpjsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_sdk_payroll_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sdk/payroll/services */ "./src/app/sdk/payroll/services.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");






var BpjsComponent = /** @class */ (function () {
    function BpjsComponent(payrollPegawaiBpjsService, nzMessageService, spinner, activeRoute, router) {
        this.payrollPegawaiBpjsService = payrollPegawaiBpjsService;
        this.nzMessageService = nzMessageService;
        this.spinner = spinner;
        this.activeRoute = activeRoute;
        this.router = router;
        this.jenis_bpjs = '';
        this.pageIndex = 1;
        this.pageSize = 10;
        this.total = 1;
        this.listOfData = [];
        this.loading = true;
        this.sortValue = null;
        this.sortKey = null;
        this.filterGender = [{ text: 'male', value: 'male' }, { text: 'female', value: 'female' }];
        this.search = '';
    }
    BpjsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activeRoute.paramMap.subscribe(function (data) {
            if (data.get('jenis_bpjs')) {
                _this.jenis_bpjs = data.get('jenis_bpjs');
                _this.searchData();
            }
        });
    };
    BpjsComponent.prototype.sort = function (sort) {
        this.sortKey = sort.key;
        this.sortValue = sort.value;
        this.searchData();
    };
    BpjsComponent.prototype.searchData = function (reset) {
        var _this = this;
        if (reset === void 0) { reset = false; }
        if (reset) {
            this.pageIndex = 1;
        }
        this.loading = true;
        this.payrollPegawaiBpjsService
            .getPayrollPegawaiBpjs(JSON.stringify({
            pageIndex: this.pageIndex, pageSize: this.pageSize, sortKey: this.sortKey, sortValue: this.sortValue, search: this.search, jenis_bpjs: this.jenis_bpjs
        }))
            .subscribe(function (data) {
            _this.loading = false;
            _this.total = data.data.total;
            _this.listOfData = data.data.data;
        });
    };
    BpjsComponent.prototype.updateFilter = function (value) {
        this.search = value;
        this.searchData(true);
    };
    BpjsComponent.prototype.delete = function (id) {
        var _this = this;
        this.spinner.show();
        this.payrollPegawaiBpjsService.deletePayrollPegawaiBpjsId(id).subscribe(function (data) {
            _this.searchData();
            _this.spinner.hide();
        });
    };
    BpjsComponent.prototype.batalDelete = function () {
        this.nzMessageService.info('click cancel');
    };
    BpjsComponent.ctorParameters = function () { return [
        { type: src_app_sdk_payroll_services__WEBPACK_IMPORTED_MODULE_2__["PayrollPegawaiBpjsService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzMessageService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    BpjsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-bpjs',
            template: __webpack_require__(/*! raw-loader!./bpjs.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/helpdesk/healthcare/bpjs/bpjs.component.html"),
            styles: [__webpack_require__(/*! ./bpjs.component.scss */ "./src/app/pages/helpdesk/healthcare/bpjs/bpjs.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_sdk_payroll_services__WEBPACK_IMPORTED_MODULE_2__["PayrollPegawaiBpjsService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzMessageService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], BpjsComponent);
    return BpjsComponent;
}());



/***/ }),

/***/ "./src/app/pages/helpdesk/healthcare/detail-klaim/detail-klaim.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/pages/helpdesk/healthcare/detail-klaim/detail-klaim.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hlbHBkZXNrL2hlYWx0aGNhcmUvZGV0YWlsLWtsYWltL2RldGFpbC1rbGFpbS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/helpdesk/healthcare/detail-klaim/detail-klaim.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/helpdesk/healthcare/detail-klaim/detail-klaim.component.ts ***!
  \**********************************************************************************/
/*! exports provided: DetailKlaimComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailKlaimComponent", function() { return DetailKlaimComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_components_approval_standar_standar_approval_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/components/approval/standar/standar-approval.service */ "./src/app/components/approval/standar/standar-approval.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/sdk/hr/services */ "./src/app/sdk/hr/services.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_sdk_user_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/sdk/user/services */ "./src/app/sdk/user/services.ts");







var DetailKlaimComponent = /** @class */ (function () {
    function DetailKlaimComponent(gaKlaimItemService, gaKlaimKategoriService, gaKlaimPengajuanService, toolsLogFlowService, direktoriVPegawaiPosisiService, direktoriPegawaiKeluargalistService, spinner, routerActive, router, direktoriPegawaiService, standarApprovalService) {
        this.gaKlaimItemService = gaKlaimItemService;
        this.gaKlaimKategoriService = gaKlaimKategoriService;
        this.gaKlaimPengajuanService = gaKlaimPengajuanService;
        this.toolsLogFlowService = toolsLogFlowService;
        this.direktoriVPegawaiPosisiService = direktoriVPegawaiPosisiService;
        this.direktoriPegawaiKeluargalistService = direktoriPegawaiKeluargalistService;
        this.spinner = spinner;
        this.routerActive = routerActive;
        this.router = router;
        this.direktoriPegawaiService = direktoriPegawaiService;
        this.standarApprovalService = standarApprovalService;
        this.id_klaim_pengajuan = '';
        this.dataKlaim = {};
        this.dataPegawai = {};
        this.dataPosisi = {};
        this.dataKategori = {};
        this.DataKeluarga = {};
        this.dataItem = [];
        this.params = null;
        this.id_data_flow = '';
        this.listLog = [];
    }
    DetailKlaimComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.routerActive.paramMap.subscribe(function (params) {
            if (params.get('id_klaim_pengajuan')) {
                _this.id_klaim_pengajuan = params.get('id_klaim_pengajuan');
            }
            _this.getDetailKlaim();
            _this.getKlaimItem();
            _this.getLog();
        });
        this.standarApprovalService.isreload.next(false);
        this.standarApprovalService.getisreload().subscribe(function (data) {
            if (data) {
                _this.getDetailKlaim();
                _this.getKlaimItem();
                _this.getLog();
            }
        });
    };
    DetailKlaimComponent.prototype.getDetailKlaim = function () {
        var _this = this;
        this.spinner.show();
        this.gaKlaimPengajuanService.getGaKlaimPengajuansId(this.id_klaim_pengajuan).subscribe(function (data) {
            _this.dataKlaim = data.data;
            _this.getPegawai(data.data.id_pegawai);
            _this.getPosisi(data.data.id_pegawai);
            _this.getKeluarga(data.data.id_pegawai_keluarga);
            _this.params = {
                id: data.data.id_klaim_pengajuan,
                id_data_flow_detail: data.data.id_data_flow_detail,
                id_data_flow: data.data.id_data_flow,
                next_status: null,
                primary_key: "id_klaim_pengajuan"
            };
            _this.standarApprovalService.param.next(_this.params);
            _this.spinner.hide();
        });
    };
    DetailKlaimComponent.prototype.getPegawai = function (id_pegawai) {
        var _this = this;
        this.direktoriPegawaiService.getDirektoriPegawaisId(id_pegawai).subscribe(function (data) {
            _this.dataPegawai = data.data;
            _this.getKlaimKategori(data.data.id_klaim_kategori);
        });
    };
    DetailKlaimComponent.prototype.getKlaimKategori = function (id_klaim_kategori) {
        var _this = this;
        this.gaKlaimKategoriService.getGaKlaimKategorisId(id_klaim_kategori).subscribe(function (data) {
            _this.dataKategori = data.data;
        });
    };
    DetailKlaimComponent.prototype.getPosisi = function (id_pegawai) {
        var _this = this;
        this.direktoriVPegawaiPosisiService.getDirektoriVPegawaiPosisisId(id_pegawai).subscribe(function (data) {
            _this.dataPosisi = data.data;
        });
    };
    DetailKlaimComponent.prototype.getKeluarga = function (id_pegawai_keluarga) {
        var _this = this;
        this.direktoriPegawaiKeluargalistService.getDirektoriPegawaiKeluargalistsId(id_pegawai_keluarga).subscribe(function (data) {
            _this.DataKeluarga = data.data;
        });
    };
    DetailKlaimComponent.prototype.getKlaimItem = function () {
        var _this = this;
        this.gaKlaimItemService.getGaKlaimItems(JSON.stringify({ id_klaim_pengajuan: this.id_klaim_pengajuan })).subscribe(function (res) {
            _this.dataItem = res.data;
            _this.spinner.hide();
        });
    };
    DetailKlaimComponent.prototype.getLog = function () {
        var _this = this;
        this.spinner.show();
        this.toolsLogFlowService.getToolsLogFlows(JSON.stringify({ for_module_id: this.id_klaim_pengajuan })).subscribe(function (data) {
            _this.listLog = data.data;
            _this.spinner.hide();
        });
    };
    DetailKlaimComponent.prototype.goToBack = function () {
        this.router.navigate(['/helpdesk/healthcare/klaim']);
    };
    DetailKlaimComponent.ctorParameters = function () { return [
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_3__["GaKlaimItemService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_3__["GaKlaimKategoriService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_3__["GaKlaimPengajuanService"] },
        { type: src_app_sdk_user_services__WEBPACK_IMPORTED_MODULE_6__["ToolsLogFlowService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_3__["DirektoriVPegawaiPosisiService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_3__["DirektoriPegawaiKeluargalistService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_3__["DirektoriPegawaiService"] },
        { type: src_app_components_approval_standar_standar_approval_service__WEBPACK_IMPORTED_MODULE_1__["StandarApprovalService"] }
    ]; };
    DetailKlaimComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-detail-klaim',
            template: __webpack_require__(/*! raw-loader!./detail-klaim.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/helpdesk/healthcare/detail-klaim/detail-klaim.component.html"),
            styles: [__webpack_require__(/*! ./detail-klaim.component.scss */ "./src/app/pages/helpdesk/healthcare/detail-klaim/detail-klaim.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_3__["GaKlaimItemService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_3__["GaKlaimKategoriService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_3__["GaKlaimPengajuanService"],
            src_app_sdk_user_services__WEBPACK_IMPORTED_MODULE_6__["ToolsLogFlowService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_3__["DirektoriVPegawaiPosisiService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_3__["DirektoriPegawaiKeluargalistService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_3__["DirektoriPegawaiService"],
            src_app_components_approval_standar_standar_approval_service__WEBPACK_IMPORTED_MODULE_1__["StandarApprovalService"]])
    ], DetailKlaimComponent);
    return DetailKlaimComponent;
}());



/***/ }),

/***/ "./src/app/pages/helpdesk/healthcare/healthcare-routing.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/pages/helpdesk/healthcare/healthcare-routing.module.ts ***!
  \************************************************************************/
/*! exports provided: HealthcareRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HealthcareRoutingModule", function() { return HealthcareRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _klaim_klaim_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./klaim/klaim.component */ "./src/app/pages/helpdesk/healthcare/klaim/klaim.component.ts");
/* harmony import */ var _healthcare_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./healthcare.component */ "./src/app/pages/helpdesk/healthcare/healthcare.component.ts");
/* harmony import */ var _bpjs_bpjs_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bpjs/bpjs.component */ "./src/app/pages/helpdesk/healthcare/bpjs/bpjs.component.ts");
/* harmony import */ var _detail_klaim_detail_klaim_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./detail-klaim/detail-klaim.component */ "./src/app/pages/helpdesk/healthcare/detail-klaim/detail-klaim.component.ts");







var routes = [
    {
        path: '',
        component: _healthcare_component__WEBPACK_IMPORTED_MODULE_4__["HealthcareComponent"],
        children: [
            {
                path: 'klaim',
                component: _klaim_klaim_component__WEBPACK_IMPORTED_MODULE_3__["KlaimComponent"]
            },
            {
                path: 'detail-klaim/:id_klaim_pengajuan',
                component: _detail_klaim_detail_klaim_component__WEBPACK_IMPORTED_MODULE_6__["DetailKlaimComponent"]
            },
            {
                path: 'bpjs/:jenis_bpjs',
                component: _bpjs_bpjs_component__WEBPACK_IMPORTED_MODULE_5__["BpjsComponent"]
            },
        ]
    }
];
var HealthcareRoutingModule = /** @class */ (function () {
    function HealthcareRoutingModule() {
    }
    HealthcareRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], HealthcareRoutingModule);
    return HealthcareRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/helpdesk/healthcare/healthcare.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/pages/helpdesk/healthcare/healthcare.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hlbHBkZXNrL2hlYWx0aGNhcmUvaGVhbHRoY2FyZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/helpdesk/healthcare/healthcare.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/helpdesk/healthcare/healthcare.component.ts ***!
  \*******************************************************************/
/*! exports provided: HealthcareComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HealthcareComponent", function() { return HealthcareComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var src_app_services_menu_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/menu.service */ "./src/app/services/menu.service.ts");
/* harmony import */ var _profile_service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../profile/service/pegawai-detail.service */ "./src/app/pages/profile/service/pegawai-detail.service.ts");
/* harmony import */ var src_app_store_reducers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/store/reducers */ "./src/app/store/reducers.ts");






var HealthcareComponent = /** @class */ (function () {
    function HealthcareComponent(store, menuService, pegawaiDetailService) {
        var _this = this;
        this.store = store;
        this.menuService = menuService;
        this.pegawaiDetailService = pegawaiDetailService;
        this.id_pegawai = '28fd0999-a842-4a79-9103-497f2545eb26';
        this.menuData = [];
        this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(src_app_store_reducers__WEBPACK_IMPORTED_MODULE_5__["getSettings"])).subscribe(function (state) {
            _this.menuLayoutType = state.menuLayoutType;
            _this.isContentNoMaxWidth = state.isContentNoMaxWidth;
            _this.isAppMaxWidth = state.isAppMaxWidth;
            _this.isGrayBackground = state.isGrayBackground;
            _this.isSquaredBorders = state.isSquaredBorders;
            _this.isCardShadow = state.isCardShadow;
            _this.isBorderless = state.isBorderless;
            _this.isTopbarFixed = state.isTopbarFixed;
            _this.isGrayTopbar = state.isGrayTopbar;
            _this.routerAnimation = state.routerAnimation;
        });
    }
    HealthcareComponent.prototype.ngOnInit = function () {
        this.pegawaiDetailService.setIdpegawai(this.id_pegawai);
        this.menuData = [
            {
                title: 'Outpatient',
                key: 'klaim',
                icon: 'fe fe-heart',
                url: 'klaim',
            },
            {
                title: 'BPJS',
                key: 'bpjs',
                icon: 'fe fe-user',
                children: [
                    {
                        title: 'JKK',
                        key: 'bpjs',
                        icon: 'fe fe-bookmark',
                        url: 'bpjs/JKK',
                    },
                    {
                        title: 'JKM',
                        key: 'bpjs',
                        icon: 'fe fe-bookmark',
                        url: 'bpjs/JKM',
                    },
                    {
                        title: 'JHT',
                        key: 'bpjs',
                        icon: 'fe fe-bookmark',
                        url: 'bpjs/JHT',
                    },
                    {
                        title: 'JP',
                        key: 'bpjs',
                        icon: 'fe fe-bookmark',
                        url: 'bpjs/JP',
                    },
                    {
                        title: 'Kesehatan',
                        key: 'bpjs',
                        icon: 'fe fe-bookmark',
                        url: 'bpjs/Kesehatan',
                    },
                ]
            },
        ];
        this.menuService.menu.next(this.menuData);
        this.menuService.subBar_info.next({ parent: 'HR', child: 'Kalender' });
    };
    HealthcareComponent.prototype.routeAnimation = function (outlet, animation) {
        if (animation === this.routerAnimation) {
            return outlet.isActivated && outlet.activatedRoute.routeConfig.path;
        }
    };
    HealthcareComponent.ctorParameters = function () { return [
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] },
        { type: src_app_services_menu_service__WEBPACK_IMPORTED_MODULE_3__["MenuService"] },
        { type: _profile_service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_4__["PegawaiDetailService"] }
    ]; };
    HealthcareComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-healthcare',
            template: __webpack_require__(/*! raw-loader!./healthcare.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/helpdesk/healthcare/healthcare.component.html"),
            styles: [__webpack_require__(/*! ./healthcare.component.scss */ "./src/app/pages/helpdesk/healthcare/healthcare.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"],
            src_app_services_menu_service__WEBPACK_IMPORTED_MODULE_3__["MenuService"],
            _profile_service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_4__["PegawaiDetailService"]])
    ], HealthcareComponent);
    return HealthcareComponent;
}());



/***/ }),

/***/ "./src/app/pages/helpdesk/healthcare/healthcare.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/helpdesk/healthcare/healthcare.module.ts ***!
  \****************************************************************/
/*! exports provided: HealthcareModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HealthcareModule", function() { return HealthcareModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _healthcare_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./healthcare-routing.module */ "./src/app/pages/helpdesk/healthcare/healthcare-routing.module.ts");
/* harmony import */ var _healthcare_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./healthcare.component */ "./src/app/pages/helpdesk/healthcare/healthcare.component.ts");
/* harmony import */ var _klaim_klaim_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./klaim/klaim.component */ "./src/app/pages/helpdesk/healthcare/klaim/klaim.component.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var src_app_components_document_document_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/components/document/document.module */ "./src/app/components/document/document.module.ts");
/* harmony import */ var src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/angular-reactive-forms-helper */ "./src/app/services/angular-reactive-forms-helper.ts");
/* harmony import */ var src_app_components_widgets_widgets_components_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/components/widgets/widgets-components.module */ "./src/app/components/widgets/widgets-components.module.ts");
/* harmony import */ var src_app_components_layout_layout_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/components/layout/layout.module */ "./src/app/components/layout/layout.module.ts");
/* harmony import */ var _bpjs_bpjs_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./bpjs/bpjs.component */ "./src/app/pages/helpdesk/healthcare/bpjs/bpjs.component.ts");
/* harmony import */ var src_app_pipe_pipe_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/pipe/pipe.module */ "./src/app/pipe/pipe.module.ts");
/* harmony import */ var _detail_klaim_detail_klaim_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./detail-klaim/detail-klaim.component */ "./src/app/pages/helpdesk/healthcare/detail-klaim/detail-klaim.component.ts");
/* harmony import */ var src_app_components_approval_approval_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/components/approval/approval.module */ "./src/app/components/approval/approval.module.ts");

















var HealthcareModule = /** @class */ (function () {
    function HealthcareModule() {
    }
    HealthcareModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_healthcare_component__WEBPACK_IMPORTED_MODULE_4__["HealthcareComponent"], _klaim_klaim_component__WEBPACK_IMPORTED_MODULE_5__["KlaimComponent"], _bpjs_bpjs_component__WEBPACK_IMPORTED_MODULE_13__["BpjsComponent"], _detail_klaim_detail_klaim_component__WEBPACK_IMPORTED_MODULE_15__["DetailKlaimComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _healthcare_routing_module__WEBPACK_IMPORTED_MODULE_3__["HealthcareRoutingModule"],
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__["NgZorroAntdModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8__["PerfectScrollbarModule"],
                src_app_components_document_document_module__WEBPACK_IMPORTED_MODULE_9__["DocumentModule"],
                src_app_components_widgets_widgets_components_module__WEBPACK_IMPORTED_MODULE_11__["WidgetsComponentsModule"],
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__["NzLayoutModule"],
                src_app_components_layout_layout_module__WEBPACK_IMPORTED_MODULE_12__["LayoutModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__["NzRadioModule"],
                src_app_components_approval_approval_module__WEBPACK_IMPORTED_MODULE_16__["ApprovalModule"],
                src_app_pipe_pipe_module__WEBPACK_IMPORTED_MODULE_14__["PipeModule"]
            ],
            providers: [
                src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_10__["FormBuilderTypeSafe"]
            ]
        })
    ], HealthcareModule);
    return HealthcareModule;
}());



/***/ }),

/***/ "./src/app/pages/helpdesk/healthcare/klaim/klaim.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/pages/helpdesk/healthcare/klaim/klaim.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hlbHBkZXNrL2hlYWx0aGNhcmUva2xhaW0va2xhaW0uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/helpdesk/healthcare/klaim/klaim.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/helpdesk/healthcare/klaim/klaim.component.ts ***!
  \********************************************************************/
/*! exports provided: KlaimComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KlaimComponent", function() { return KlaimComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sdk/hr/services */ "./src/app/sdk/hr/services.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");





var KlaimComponent = /** @class */ (function () {
    function KlaimComponent(gaKlaimPengajuanService, spinner, nzMessageService) {
        this.gaKlaimPengajuanService = gaKlaimPengajuanService;
        this.spinner = spinner;
        this.nzMessageService = nzMessageService;
        this.pageIndex = 1;
        this.pageSize = 10;
        this.total = 1;
        this.listOfData = [];
        this.loading = true;
        this.sortValue = null;
        this.sortKey = null;
        this.search = '';
    }
    KlaimComponent.prototype.ngOnInit = function () {
        this.searchData();
    };
    KlaimComponent.prototype.sort = function (sort) {
        this.sortKey = sort.key;
        this.sortValue = sort.value;
        this.searchData();
    };
    KlaimComponent.prototype.searchData = function (reset) {
        var _this = this;
        if (reset === void 0) { reset = false; }
        if (reset) {
            this.pageIndex = 1;
        }
        this.loading = true;
        this.gaKlaimPengajuanService
            .getGaKlaimPengajuans(JSON.stringify({
            pageIndex: this.pageIndex,
            pageSize: this.pageSize,
            sortKey: this.sortKey,
            sortValue: this.sortValue,
            search: this.search,
        }))
            .subscribe(function (data) {
            _this.loading = false;
            _this.total = data.data.total;
            _this.listOfData = data.data.data;
            console.log(data.data);
        });
    };
    KlaimComponent.prototype.updateFilter = function (value) {
        this.search = value;
        this.searchData(true);
    };
    KlaimComponent.ctorParameters = function () { return [
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["GaKlaimPengajuanService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzMessageService"] }
    ]; };
    KlaimComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-klaim',
            template: __webpack_require__(/*! raw-loader!./klaim.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/helpdesk/healthcare/klaim/klaim.component.html"),
            styles: [__webpack_require__(/*! ./klaim.component.scss */ "./src/app/pages/helpdesk/healthcare/klaim/klaim.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["GaKlaimPengajuanService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzMessageService"]])
    ], KlaimComponent);
    return KlaimComponent;
}());



/***/ })

}]);
//# sourceMappingURL=healthcare-healthcare-module.js.map