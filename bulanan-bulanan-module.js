(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bulanan-bulanan-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/hr/payroll/laporan/bulanan/detail/detail.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/hr/payroll/laporan/bulanan/detail/detail.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"air__utils__heading card-header-flex\">\r\n        <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n            <h5 class=\"mb-0\">Periode / Pembetulan : {{masa_pajak }} /{{tahun_pajak }} /{{ pembetulan }} </h5>\r\n        </div>\r\n        <div class=\"d-flex flex-column justify-content-center\">\r\n            <a nz-dropdown [nzDropdownMenu]=\"menu\">\r\n                More\r\n                <i nz-icon nzType=\"down\"></i>\r\n            </a>\r\n            <nz-dropdown-menu #menu=\"nzDropdownMenu\">\r\n                <ul nz-menu nzSelectable>\r\n                    <li nz-menu-item (click)=\"downloadReportPajak()\">Download 1721 Bulanan</li>\r\n                    <!-- <li nz-menu-item (click)=\"downloadReport()\">Download PDF</li> -->\r\n                </ul>\r\n            </nz-dropdown-menu>\r\n        </div>\r\n\r\n\r\n    </div>\r\n\r\n    <div class=\"card\" *ngFor=\"let itemdepartement of departement\">\r\n\r\n        <div class=\"card-header\">\r\n            <h4>{{itemdepartement.kode_departemen}} {{itemdepartement.nama_departemen}}</h4>\r\n        </div>\r\n        <div class=\"card-body\">\r\n\r\n\r\n            <table class=\"table table-bordered\">\r\n                <thead>\r\n                    <tr>\r\n                        <th rowspan=\"2\">Employe</th>\r\n                        <th rowspan=\"2\">Bruto</th>\r\n                        <th rowspan=\"2\">Pph</th>\r\n                        <th colspan=\"2\">Payroll</th>\r\n                        <th colspan=\"2\">THR</th>\r\n                        <th colspan=\"2\">Bonus</th>\r\n                        <th colspan=\"2\">Onduty</th>\r\n                        <th colspan=\"2\">Pilot</th>\r\n                        <th rowspan=\"2\" nzWidth=\"60px\" nzRight=\"0px\">Action</th>\r\n                    </tr>\r\n                    <tr>\r\n                        <th>Bruto</th>\r\n                        <th>pph</th>\r\n                        <th>Bruto</th>\r\n                        <th>pph</th>\r\n                        <th>Bruto</th>\r\n                        <th>pph</th>\r\n                        <th>Bruto</th>\r\n                        <th>pph</th>\r\n                        <th>Bruto</th>\r\n                        <th>pph</th>\r\n                    </tr>\r\n\r\n                    <tr *ngFor=\"let data of itemdepartement['rekap']\" style=\"background-color:beige;\">\r\n                        <th>Rekap</th>\r\n                        <th>{{data.bruto | currency:'Rp'}}</th>\r\n                        <th>{{data.pph | currency:'Rp'}}</th>\r\n                        <th></th>\r\n                        <th></th>\r\n                        <th></th>\r\n                        <th></th>\r\n                        <th></th>\r\n                        <th></th>\r\n                        <th></th>\r\n                        <th></th>\r\n                        <th></th>\r\n                        <th></th>\r\n                        <th nzWidth=\"60px\" nzRight=\"0px\">-</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n\r\n                    <tr *ngFor=\"let data of itemdepartement['list']; let index=index;\">\r\n                        <td>\r\n                            <div class=\"d-flex\">\r\n                                <div class=\"mr-auto pl-2\">\r\n                                    <a nz-dropdown [nzDropdownMenu]=\"menu2\">\r\n                                        {{data.nama}}\r\n\r\n                                        <br>\r\n                                        {{ data.no_induk }}\r\n\r\n                                    </a>\r\n                                    <nz-dropdown-menu #menu2=\"nzDropdownMenu\">\r\n                                        <ul nz-menu nzSelectable>\r\n\r\n                                            <li nz-menu-item>\r\n                                                <a target=\"_blank\"\r\n                                                    [routerLink]=\"['/hr/direktori/employee/pegawai-detail',data.id_pegawai,'payroll','komponen','list']\">\r\n                                                    Componet Payroll</a>\r\n                                            </li>\r\n                                            <li nz-menu-item>\r\n                                                <a target=\"_blank\"\r\n                                                    [routerLink]=\"['/hr/direktori/employee/pegawai-detail',data.id_pegawai,'payroll','thr','list']\">\r\n                                                    Componet THR </a>\r\n                                            </li>\r\n\r\n                                        </ul>\r\n                                    </nz-dropdown-menu>\r\n\r\n                                </div>\r\n                            </div>\r\n                        </td>\r\n\r\n                        <th>{{data.bruto | number}}</th>\r\n                        <th>{{data.pph | number}}</th>\r\n\r\n                        <th>{{data.bruto_payroll | number}}</th>\r\n                        <th>{{data.pph_payroll | number}}</th>\r\n\r\n                        <th>{{data.bruto_thr | number}}</th>\r\n                        <th>{{data.pph_thr | number}}</th>\r\n\r\n                        <th>{{data.bruto_bonus | number}}</th>\r\n                        <th>{{data.pph_bonus | number}}</th>\r\n\r\n                        <th>{{data.bruto_onduty | number}}</th>\r\n                        <th>{{data.pph_onduty | number}}</th>\r\n\r\n                        <th>{{data.bruto_pilot | number}}</th>\r\n                        <th>{{data.pph_pilot | number}}</th>\r\n\r\n\r\n                        <td nzRight=\"0px\">\r\n\r\n                            <button title=\"View\" nz-button [nzType]=\"'dashed'\" nzSize=\"small\"\r\n                                (click)=\"detailPerPegawai(data.id_pegawai_payroll)\">\r\n                                <i nz-icon nzType=\"eye\" nzTheme=\"outline\"></i>\r\n                            </button>\r\n                        </td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/hr/payroll/laporan/bulanan/list/list.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/hr/payroll/laporan/bulanan/list/list.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"air__utils__heading card-header-flex\">\r\n        <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n            <h5 class=\"mb-0\">Payroll Recapitulation </h5>\r\n        </div>\r\n        <div class=\"d-flex flex-column justify-content-center\">\r\n            <a class=\"btn btn-primary\" [routerLink]=\"['../rekap']\" routerLinkActive=\"router-link-active\">\r\n                <i nz-icon nzType=\"plus\" nzTheme=\"outline\"></i> Process\r\n            </a>\r\n        </div>\r\n    </div>\r\n\r\n</div>\r\n\r\n<div class=\"card\">\r\n    <div class=\"card-body\">\r\n\r\n\r\n        <nz-table #ajaxTable nzShowSizeChanger [nzFrontPagination]=\"false\" [nzData]=\"listOfData\">\r\n            <thead nzSingleSort>\r\n                <tr>\r\n                    <th nzShowSort nzSortKey=\"status\">Status</th>\r\n                    <th nzShowSort nzSortKey=\"tahun_pajak\">Tahun</th>\r\n                    <th nzShowSort nzSortKey=\"masa_pajak\">masa</th>\r\n                    <th nzShowSort nzSortKey=\"pembetulan\">Pembetulan</th>\r\n                    <th nzShowSort nzSortKey=\"total_pegawai\">Employe</th>\r\n                    <th nzShowSort nzSortKey=\"bruto\">Bruto</th>\r\n                    <th nzShowSort nzSortKey=\"pph\">pph</th>\r\n                    <th>#</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr *ngFor=\"let data of ajaxTable.data\">\r\n\r\n                    <td>\r\n                        <nz-tag style=\"float: right;\" [nzColor]=\"data.status | status\">\r\n                            {{ data.status | titlecase }}\r\n                        </nz-tag>\r\n                    </td>\r\n                    <td>{{ data.tahun_pajak }} </td>\r\n                    <td>{{ data.masa_pajak }} </td>\r\n                    <td>{{ data.pembetulan }} </td>\r\n                    <td>{{ data.total_pegawai }} </td>\r\n                    <td>{{ data.bruto | currency:'Rp,' }}</td>\r\n                    <td>{{ data.pph | currency:'Rp,' }}</td>\r\n                    <td>\r\n                        <a nz-dropdown [nzDropdownMenu]=\"menu\">\r\n                            <i nz-icon nzType=\"more\" nzTheme=\"outline\"></i>\r\n                        </a>\r\n                        <nz-dropdown-menu #menu=\"nzDropdownMenu\">\r\n                            <ul nz-menu nzSelectable>\r\n                                <li nz-menu-item>\r\n                                    <a\r\n                                        [routerLink]=\"['../detail',data.tahun_pajak,data.masa_pajak,data.pembetulan]\">Detail</a>\r\n                                </li>\r\n                                <!-- <li nz-menu-item>Download 1721 Bulanan</li> -->\r\n                            </ul>\r\n                        </nz-dropdown-menu>\r\n                    </td>\r\n                </tr>\r\n            </tbody>\r\n        </nz-table>\r\n\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/hr/payroll/laporan/bulanan/bulanan-routing.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/pages/hr/payroll/laporan/bulanan/bulanan-routing.module.ts ***!
  \****************************************************************************/
/*! exports provided: BulananRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BulananRoutingModule", function() { return BulananRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list/list.component */ "./src/app/pages/hr/payroll/laporan/bulanan/list/list.component.ts");
/* harmony import */ var _detail_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./detail/detail.component */ "./src/app/pages/hr/payroll/laporan/bulanan/detail/detail.component.ts");





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
        path: 'rekap',
        loadChildren: function () { return __webpack_require__.e(/*! import() | rekap-rekap-module */ "rekap-rekap-module").then(__webpack_require__.bind(null, /*! ./rekap/rekap.module */ "./src/app/pages/hr/payroll/laporan/bulanan/rekap/rekap.module.ts")).then(function (m) { return m.RekapModule; }); }
    },
    {
        path: 'detail/:tahun_pajak/:masa_pajak/:pembetulan',
        component: _detail_detail_component__WEBPACK_IMPORTED_MODULE_4__["DetailComponent"]
    }
];
var BulananRoutingModule = /** @class */ (function () {
    function BulananRoutingModule() {
    }
    BulananRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], BulananRoutingModule);
    return BulananRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/hr/payroll/laporan/bulanan/bulanan.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/hr/payroll/laporan/bulanan/bulanan.module.ts ***!
  \********************************************************************/
/*! exports provided: BulananModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BulananModule", function() { return BulananModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _bulanan_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bulanan-routing.module */ "./src/app/pages/hr/payroll/laporan/bulanan/bulanan-routing.module.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var src_app_pipe_pipe_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/pipe/pipe.module */ "./src/app/pipe/pipe.module.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./list/list.component */ "./src/app/pages/hr/payroll/laporan/bulanan/list/list.component.ts");
/* harmony import */ var _detail_detail_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./detail/detail.component */ "./src/app/pages/hr/payroll/laporan/bulanan/detail/detail.component.ts");










var BulananModule = /** @class */ (function () {
    function BulananModule() {
    }
    BulananModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_list_list_component__WEBPACK_IMPORTED_MODULE_8__["ListComponent"], _detail_detail_component__WEBPACK_IMPORTED_MODULE_9__["DetailComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _bulanan_routing_module__WEBPACK_IMPORTED_MODULE_3__["BulananRoutingModule"],
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzSelectModule"],
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NgZorroAntdModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                src_app_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                src_app_pipe_pipe_module__WEBPACK_IMPORTED_MODULE_7__["PipeModule"]
            ]
        })
    ], BulananModule);
    return BulananModule;
}());



/***/ }),

/***/ "./src/app/pages/hr/payroll/laporan/bulanan/detail/detail.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/hr/payroll/laporan/bulanan/detail/detail.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".table thead th {\n  vertical-align: middle;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaHIvcGF5cm9sbC9sYXBvcmFuL2J1bGFuYW4vZGV0YWlsL0U6XFxQUk9KRUtcXERFUkFaT05BXFxkZXZldGVrLWVycC9zcmNcXGFwcFxccGFnZXNcXGhyXFxwYXlyb2xsXFxsYXBvcmFuXFxidWxhbmFuXFxkZXRhaWxcXGRldGFpbC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvaHIvcGF5cm9sbC9sYXBvcmFuL2J1bGFuYW4vZGV0YWlsL2RldGFpbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHNCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9oci9wYXlyb2xsL2xhcG9yYW4vYnVsYW5hbi9kZXRhaWwvZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRhYmxlIHRoZWFkIHRoIHtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuIiwiLnRhYmxlIHRoZWFkIHRoIHtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/hr/payroll/laporan/bulanan/detail/detail.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/hr/payroll/laporan/bulanan/detail/detail.component.ts ***!
  \*****************************************************************************/
/*! exports provided: DetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailComponent", function() { return DetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var src_app_sdk_payroll_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/sdk/payroll/services */ "./src/app/sdk/payroll/services.ts");
/* harmony import */ var src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/tool/pesan.service */ "./src/app/services/tool/pesan.service.ts");
/* harmony import */ var _shared_detail_payroll_detail_payroll_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/detail-payroll/detail-payroll.component */ "./src/app/pages/hr/payroll/shared/detail-payroll/detail-payroll.component.ts");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! xlsx */ "./node_modules/xlsx/xlsx.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/sdk/hr/services */ "./src/app/sdk/hr/services.ts");











var EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
var DetailComponent = /** @class */ (function () {
    function DetailComponent(spinner, activatedRoute, payrollPayrollRekapService, companyDepartemenService, pesan, notification, drawerService) {
        this.spinner = spinner;
        this.activatedRoute = activatedRoute;
        this.payrollPayrollRekapService = payrollPayrollRekapService;
        this.companyDepartemenService = companyDepartemenService;
        this.pesan = pesan;
        this.notification = notification;
        this.drawerService = drawerService;
        this.departement = [];
        this.listData = [];
        // PREVIEW
        this.id_pegawai_payroll = '';
    }
    DetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.paramMap.subscribe(function (data) {
            if (data.get('tahun_pajak')) {
                _this.tahun_pajak = data.get('tahun_pajak');
                _this.masa_pajak = data.get('masa_pajak');
                _this.pembetulan = data.get('pembetulan');
                _this.getData();
            }
        });
    };
    DetailComponent.prototype.getData = function () {
        var _this = this;
        this.companyDepartemenService.getCompanyDepartemens().subscribe(function (data) {
            _this.departement = data.data;
            _this.departement.forEach(function (item, index) {
                _this.departement[index]['rekap'] = [];
                _this.departement[index]['list'] = [];
                _this.getRekap(index, item.id_departemen);
            });
            console.log(_this.departement);
        });
    };
    DetailComponent.prototype.getRekap = function (index, id_departement) {
        var _this = this;
        this.spinner.show();
        var param = {
            tahun_pajak: this.tahun_pajak,
            masa_pajak: this.masa_pajak,
            id_departement: id_departement,
            pembetulan: this.pembetulan,
        };
        this.payrollPayrollRekapService.getPayrollPayrollRekapBulanans(JSON.stringify(param)).subscribe(function (data) {
            _this.departement[index]['rekap'] = data.data['rekap'];
            _this.departement[index]['list'] = data.data['list'];
            _this.spinner.hide();
        });
    };
    DetailComponent.prototype.downloadReportPajak = function () {
        var _this = this;
        //download / export ke excl
        this.spinner.show();
        this.payrollPayrollRekapService.getPayrollPayrollRekapBulanans(JSON.stringify({ pajak: true, masa_pajak: this.masa_pajak, tahun_pajak: this.tahun_pajak, pembetulan: this.pembetulan })).subscribe(function (data) {
            var worksheet = xlsx__WEBPACK_IMPORTED_MODULE_8__["utils"].json_to_sheet(data.data);
            var workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
            var excelBuffer = xlsx__WEBPACK_IMPORTED_MODULE_8__["write"](workbook, { bookType: 'xlsx', type: 'array' });
            _this.saveAsExcelFile(excelBuffer, '1721 bulanan ' + _this.masa_pajak + ' ' + _this.tahun_pajak);
            _this.spinner.hide();
        });
    };
    DetailComponent.prototype.saveAsExcelFile = function (buffer, fileName) {
        var data = new Blob([buffer], { type: EXCEL_TYPE });
        file_saver__WEBPACK_IMPORTED_MODULE_9__["saveAs"](data, fileName + '_export_' + new Date().getTime() + '.xlsx');
    };
    DetailComponent.prototype.detailPerPegawai = function (id_pegawai_payroll) {
        this.id_pegawai_payroll = id_pegawai_payroll;
        this.openComponent();
    };
    DetailComponent.prototype.openComponent = function () {
        var _this = this;
        var drawerRef = this.drawerService.create({
            nzTitle: 'Detail Payroll',
            nzContent: _shared_detail_payroll_detail_payroll_component__WEBPACK_IMPORTED_MODULE_7__["DetailPayrollComponent"],
            nzWidth: '800px',
            nzContentParams: {
                value: this.id_pegawai_payroll
            }
        });
        drawerRef.afterOpen.subscribe(function () {
            console.log('Drawer(Component) open');
        });
        drawerRef.afterClose.subscribe(function (data) {
            console.log(data);
            if (typeof data === 'string') {
                _this.id_pegawai_payroll = data;
            }
        });
    };
    DetailComponent.ctorParameters = function () { return [
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: src_app_sdk_payroll_services__WEBPACK_IMPORTED_MODULE_5__["PayrollPayrollRekapBulananService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_10__["CompanyDepartemenService"] },
        { type: src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_6__["PesanService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzNotificationService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzDrawerService"] }
    ]; };
    DetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-detail',
            template: __webpack_require__(/*! raw-loader!./detail.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/hr/payroll/laporan/bulanan/detail/detail.component.html"),
            styles: [__webpack_require__(/*! ./detail.component.scss */ "./src/app/pages/hr/payroll/laporan/bulanan/detail/detail.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            src_app_sdk_payroll_services__WEBPACK_IMPORTED_MODULE_5__["PayrollPayrollRekapBulananService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_10__["CompanyDepartemenService"],
            src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_6__["PesanService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzNotificationService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzDrawerService"]])
    ], DetailComponent);
    return DetailComponent;
}());



/***/ }),

/***/ "./src/app/pages/hr/payroll/laporan/bulanan/list/list.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/pages/hr/payroll/laporan/bulanan/list/list.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hyL3BheXJvbGwvbGFwb3Jhbi9idWxhbmFuL2xpc3QvbGlzdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/hr/payroll/laporan/bulanan/list/list.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/hr/payroll/laporan/bulanan/list/list.component.ts ***!
  \*************************************************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var src_app_sdk_payroll_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/sdk/payroll/services */ "./src/app/sdk/payroll/services.ts");





var ListComponent = /** @class */ (function () {
    function ListComponent(payrollPayrollRekapService, nzMessageService, spinner) {
        this.payrollPayrollRekapService = payrollPayrollRekapService;
        this.nzMessageService = nzMessageService;
        this.spinner = spinner;
        this.listOfData = [];
    }
    ListComponent.prototype.ngOnInit = function () {
        this.getData();
    };
    ListComponent.prototype.getData = function () {
        var _this = this;
        this.spinner.show();
        this.payrollPayrollRekapService.getPayrollPayrollRekapBulanans(JSON.stringify({ rekap: true })).subscribe(function (data) {
            _this.listOfData = data.data;
            _this.spinner.hide();
        });
    };
    ListComponent.ctorParameters = function () { return [
        { type: src_app_sdk_payroll_services__WEBPACK_IMPORTED_MODULE_4__["PayrollPayrollRekapBulananService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzMessageService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"] }
    ]; };
    ListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list',
            template: __webpack_require__(/*! raw-loader!./list.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/hr/payroll/laporan/bulanan/list/list.component.html"),
            styles: [__webpack_require__(/*! ./list.component.scss */ "./src/app/pages/hr/payroll/laporan/bulanan/list/list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_sdk_payroll_services__WEBPACK_IMPORTED_MODULE_4__["PayrollPayrollRekapBulananService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzMessageService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"]])
    ], ListComponent);
    return ListComponent;
}());



/***/ })

}]);
//# sourceMappingURL=bulanan-bulanan-module.js.map