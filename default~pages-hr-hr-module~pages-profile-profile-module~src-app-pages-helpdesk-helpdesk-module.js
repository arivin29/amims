(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-hr-hr-module~pages-profile-profile-module~src-app-pages-helpdesk-helpdesk-module"],{

/***/ "./src/app/sdk/payroll/api-configuration.ts":
/*!**************************************************!*\
  !*** ./src/app/sdk/payroll/api-configuration.ts ***!
  \**************************************************/
/*! exports provided: ApiConfiguration */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiConfiguration", function() { return ApiConfiguration; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

/* tslint:disable */

/**
 * Global configuration for Api services
 */
var ApiConfiguration = /** @class */ (function () {
    function ApiConfiguration() {
        this.rootUrl = '/api';
    }
    ApiConfiguration = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        })
    ], ApiConfiguration);
    return ApiConfiguration;
}());



/***/ }),

/***/ "./src/app/sdk/payroll/api.module.ts":
/*!*******************************************!*\
  !*** ./src/app/sdk/payroll/api.module.ts ***!
  \*******************************************/
/*! exports provided: ApiModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiModule", function() { return ApiModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _api_configuration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api-configuration */ "./src/app/sdk/payroll/api-configuration.ts");
/* harmony import */ var _services_file_dokumen_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/file-dokumen.service */ "./src/app/sdk/payroll/services/file-dokumen.service.ts");
/* harmony import */ var _services_payroll_bank_account_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/payroll-bank-account.service */ "./src/app/sdk/payroll/services/payroll-bank-account.service.ts");
/* harmony import */ var _services_payroll_bank_out_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/payroll-bank-out.service */ "./src/app/sdk/payroll/services/payroll-bank-out.service.ts");
/* harmony import */ var _services_payroll_bonus_komponen_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/payroll-bonus-komponen.service */ "./src/app/sdk/payroll/services/payroll-bonus-komponen.service.ts");
/* harmony import */ var _services_payroll_bpjs_jenis_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/payroll-bpjs-jenis.service */ "./src/app/sdk/payroll/services/payroll-bpjs-jenis.service.ts");
/* harmony import */ var _services_payroll_bpjs_tk_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/payroll-bpjs-tk.service */ "./src/app/sdk/payroll/services/payroll-bpjs-tk.service.ts");
/* harmony import */ var _services_payroll_kehadiran_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/payroll-kehadiran.service */ "./src/app/sdk/payroll/services/payroll-kehadiran.service.ts");
/* harmony import */ var _services_payroll_kelompok_komponen_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/payroll-kelompok-komponen.service */ "./src/app/sdk/payroll/services/payroll-kelompok-komponen.service.ts");
/* harmony import */ var _services_payroll_komponen_perusahaan_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/payroll-komponen-perusahaan.service */ "./src/app/sdk/payroll/services/payroll-komponen-perusahaan.service.ts");
/* harmony import */ var _services_payroll_payroll_rekap_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/payroll-payroll-rekap.service */ "./src/app/sdk/payroll/services/payroll-payroll-rekap.service.ts");
/* harmony import */ var _services_payroll_payroll_rekap_bulanan_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/payroll-payroll-rekap-bulanan.service */ "./src/app/sdk/payroll/services/payroll-payroll-rekap-bulanan.service.ts");
/* harmony import */ var _services_payroll_pegawai_bonus_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/payroll-pegawai-bonus.service */ "./src/app/sdk/payroll/services/payroll-pegawai-bonus.service.ts");
/* harmony import */ var _services_payroll_pegawai_bpjs_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/payroll-pegawai-bpjs.service */ "./src/app/sdk/payroll/services/payroll-pegawai-bpjs.service.ts");
/* harmony import */ var _services_payroll_pegawai_komponen_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/payroll-pegawai-komponen.service */ "./src/app/sdk/payroll/services/payroll-pegawai-komponen.service.ts");
/* harmony import */ var _services_payroll_pegawai_onduty_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./services/payroll-pegawai-onduty.service */ "./src/app/sdk/payroll/services/payroll-pegawai-onduty.service.ts");
/* harmony import */ var _services_payroll_pegawai_onduty_detail_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./services/payroll-pegawai-onduty-detail.service */ "./src/app/sdk/payroll/services/payroll-pegawai-onduty-detail.service.ts");
/* harmony import */ var _services_payroll_pegawai_onduty_pkp_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./services/payroll-pegawai-onduty-pkp.service */ "./src/app/sdk/payroll/services/payroll-pegawai-onduty-pkp.service.ts");
/* harmony import */ var _services_payroll_pegawai_payroll_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./services/payroll-pegawai-payroll.service */ "./src/app/sdk/payroll/services/payroll-pegawai-payroll.service.ts");
/* harmony import */ var _services_payroll_pegawai_pilot_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./services/payroll-pegawai-pilot.service */ "./src/app/sdk/payroll/services/payroll-pegawai-pilot.service.ts");
/* harmony import */ var _services_payroll_pegawai_pilot_detail_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./services/payroll-pegawai-pilot-detail.service */ "./src/app/sdk/payroll/services/payroll-pegawai-pilot-detail.service.ts");
/* harmony import */ var _services_payroll_pegawai_pilot_pkp_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./services/payroll-pegawai-pilot-pkp.service */ "./src/app/sdk/payroll/services/payroll-pegawai-pilot-pkp.service.ts");
/* harmony import */ var _services_payroll_pegawai_thr_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./services/payroll-pegawai-thr.service */ "./src/app/sdk/payroll/services/payroll-pegawai-thr.service.ts");
/* harmony import */ var _services_payroll_pegawai_thr_pkp_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./services/payroll-pegawai-thr-pkp.service */ "./src/app/sdk/payroll/services/payroll-pegawai-thr-pkp.service.ts");
/* harmony import */ var _services_payroll_pengaturan_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./services/payroll-pengaturan.service */ "./src/app/sdk/payroll/services/payroll-pengaturan.service.ts");
/* harmony import */ var _services_payroll_perubahan_payroll_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./services/payroll-perubahan-payroll.service */ "./src/app/sdk/payroll/services/payroll-perubahan-payroll.service.ts");
/* harmony import */ var _services_payroll_perubahan_payroll_detail_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./services/payroll-perubahan-payroll-detail.service */ "./src/app/sdk/payroll/services/payroll-perubahan-payroll-detail.service.ts");
/* harmony import */ var _services_payroll_perusahaan_service__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./services/payroll-perusahaan.service */ "./src/app/sdk/payroll/services/payroll-perusahaan.service.ts");
/* harmony import */ var _services_payroll_perusahaanp_service__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./services/payroll-perusahaanp.service */ "./src/app/sdk/payroll/services/payroll-perusahaanp.service.ts");
/* harmony import */ var _services_payroll_pkp_service__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./services/payroll-pkp.service */ "./src/app/sdk/payroll/services/payroll-pkp.service.ts");
/* harmony import */ var _services_payroll_print_template_service__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./services/payroll-print-template.service */ "./src/app/sdk/payroll/services/payroll-print-template.service.ts");
/* harmony import */ var _services_payroll_print_template_detail_service__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./services/payroll-print-template-detail.service */ "./src/app/sdk/payroll/services/payroll-print-template-detail.service.ts");
/* harmony import */ var _services_payroll_print_template_detail_komponen_service__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./services/payroll-print-template-detail-komponen.service */ "./src/app/sdk/payroll/services/payroll-print-template-detail-komponen.service.ts");
/* harmony import */ var _services_payroll_ptkp_service__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./services/payroll-ptkp.service */ "./src/app/sdk/payroll/services/payroll-ptkp.service.ts");
/* harmony import */ var _services_payroll_report_pajak_service__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./services/payroll-report-pajak.service */ "./src/app/sdk/payroll/services/payroll-report-pajak.service.ts");
/* harmony import */ var _services_payroll_report_pegawai_onduty_service__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./services/payroll-report-pegawai-onduty.service */ "./src/app/sdk/payroll/services/payroll-report-pegawai-onduty.service.ts");
/* harmony import */ var _services_payroll_report_pegawai_payroll_service__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./services/payroll-report-pegawai-payroll.service */ "./src/app/sdk/payroll/services/payroll-report-pegawai-payroll.service.ts");
/* harmony import */ var _services_payroll_report_pegawai_thr_service__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./services/payroll-report-pegawai-thr.service */ "./src/app/sdk/payroll/services/payroll-report-pegawai-thr.service.ts");
/* harmony import */ var _services_payroll_tanda_tangan_service__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./services/payroll-tanda-tangan.service */ "./src/app/sdk/payroll/services/payroll-tanda-tangan.service.ts");
/* harmony import */ var _services_payroll_thr_komponen_service__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./services/payroll-thr-komponen.service */ "./src/app/sdk/payroll/services/payroll-thr-komponen.service.ts");
/* harmony import */ var _services_payroll_utang_jenis_service__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./services/payroll-utang-jenis.service */ "./src/app/sdk/payroll/services/payroll-utang-jenis.service.ts");
/* harmony import */ var _services_payroll_utang_jenis_periode_service__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./services/payroll-utang-jenis-periode.service */ "./src/app/sdk/payroll/services/payroll-utang-jenis-periode.service.ts");
/* harmony import */ var _services_payroll_template_komponen_service__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./services/payroll-template-komponen.service */ "./src/app/sdk/payroll/services/payroll-template-komponen.service.ts");
/* harmony import */ var _services_payroll_derazona_absensi_service__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./services/payroll-derazona-absensi.service */ "./src/app/sdk/payroll/services/payroll-derazona-absensi.service.ts");
/* harmony import */ var _services_payroll_derazona_pegawai_derazona_service__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./services/payroll-derazona-pegawai-derazona.service */ "./src/app/sdk/payroll/services/payroll-derazona-pegawai-derazona.service.ts");
/* harmony import */ var _services_payroll_derazona_pegawai_ron_pay_service__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./services/payroll-derazona-pegawai-ron-pay.service */ "./src/app/sdk/payroll/services/payroll-derazona-pegawai-ron-pay.service.ts");
/* harmony import */ var _services_payroll_derazona_pekerjaan_service__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./services/payroll-derazona-pekerjaan.service */ "./src/app/sdk/payroll/services/payroll-derazona-pekerjaan.service.ts");
/* harmony import */ var _services_payroll_derazona_rate_pilot_service__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./services/payroll-derazona-rate-pilot.service */ "./src/app/sdk/payroll/services/payroll-derazona-rate-pilot.service.ts");
/* harmony import */ var _services_payroll_derazona_ron_group_service__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./services/payroll-derazona-ron-group.service */ "./src/app/sdk/payroll/services/payroll-derazona-ron-group.service.ts");
/* harmony import */ var _services_payroll_derazona_dvr_service__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./services/payroll-derazona-dvr.service */ "./src/app/sdk/payroll/services/payroll-derazona-dvr.service.ts");
/* harmony import */ var _services_payroll_derazona_ron_group_detail_service__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./services/payroll-derazona-ron-group-detail.service */ "./src/app/sdk/payroll/services/payroll-derazona-ron-group-detail.service.ts");

/* tslint:disable */





















































/**
 * Provider for all Api services, plus ApiConfiguration
 */
var ApiModule = /** @class */ (function () {
    function ApiModule() {
    }
    ApiModule_1 = ApiModule;
    ApiModule.forRoot = function (customParams) {
        return {
            ngModule: ApiModule_1,
            providers: [
                {
                    provide: _api_configuration__WEBPACK_IMPORTED_MODULE_3__["ApiConfiguration"],
                    useValue: { rootUrl: customParams.rootUrl }
                }
            ]
        };
    };
    var ApiModule_1;
    ApiModule = ApiModule_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]
            ],
            exports: [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]
            ],
            declarations: [],
            providers: [
                _api_configuration__WEBPACK_IMPORTED_MODULE_3__["ApiConfiguration"],
                _services_file_dokumen_service__WEBPACK_IMPORTED_MODULE_4__["FileDokumenService"],
                _services_payroll_bank_account_service__WEBPACK_IMPORTED_MODULE_5__["PayrollBankAccountService"],
                _services_payroll_bank_out_service__WEBPACK_IMPORTED_MODULE_6__["PayrollBankOutService"],
                _services_payroll_bonus_komponen_service__WEBPACK_IMPORTED_MODULE_7__["PayrollBonusKomponenService"],
                _services_payroll_bpjs_jenis_service__WEBPACK_IMPORTED_MODULE_8__["PayrollBpjsJenisService"],
                _services_payroll_bpjs_tk_service__WEBPACK_IMPORTED_MODULE_9__["PayrollBpjsTkService"],
                _services_payroll_kehadiran_service__WEBPACK_IMPORTED_MODULE_10__["PayrollKehadiranService"],
                _services_payroll_kelompok_komponen_service__WEBPACK_IMPORTED_MODULE_11__["PayrollKelompokKomponenService"],
                _services_payroll_komponen_perusahaan_service__WEBPACK_IMPORTED_MODULE_12__["PayrollKomponenPerusahaanService"],
                _services_payroll_payroll_rekap_service__WEBPACK_IMPORTED_MODULE_13__["PayrollPayrollRekapService"],
                _services_payroll_payroll_rekap_bulanan_service__WEBPACK_IMPORTED_MODULE_14__["PayrollPayrollRekapBulananService"],
                _services_payroll_pegawai_bonus_service__WEBPACK_IMPORTED_MODULE_15__["PayrollPegawaiBonusService"],
                _services_payroll_pegawai_bpjs_service__WEBPACK_IMPORTED_MODULE_16__["PayrollPegawaiBpjsService"],
                _services_payroll_pegawai_komponen_service__WEBPACK_IMPORTED_MODULE_17__["PayrollPegawaiKomponenService"],
                _services_payroll_pegawai_onduty_service__WEBPACK_IMPORTED_MODULE_18__["PayrollPegawaiOndutyService"],
                _services_payroll_pegawai_onduty_detail_service__WEBPACK_IMPORTED_MODULE_19__["PayrollPegawaiOndutyDetailService"],
                _services_payroll_pegawai_onduty_pkp_service__WEBPACK_IMPORTED_MODULE_20__["PayrollPegawaiOndutyPkpService"],
                _services_payroll_pegawai_payroll_service__WEBPACK_IMPORTED_MODULE_21__["PayrollPegawaiPayrollService"],
                _services_payroll_pegawai_pilot_service__WEBPACK_IMPORTED_MODULE_22__["PayrollPegawaiPilotService"],
                _services_payroll_pegawai_pilot_detail_service__WEBPACK_IMPORTED_MODULE_23__["PayrollPegawaiPilotDetailService"],
                _services_payroll_pegawai_pilot_pkp_service__WEBPACK_IMPORTED_MODULE_24__["PayrollPegawaiPilotPkpService"],
                _services_payroll_pegawai_thr_service__WEBPACK_IMPORTED_MODULE_25__["PayrollPegawaiThrService"],
                _services_payroll_pegawai_thr_pkp_service__WEBPACK_IMPORTED_MODULE_26__["PayrollPegawaiThrPkpService"],
                _services_payroll_pengaturan_service__WEBPACK_IMPORTED_MODULE_27__["PayrollPengaturanService"],
                _services_payroll_perubahan_payroll_service__WEBPACK_IMPORTED_MODULE_28__["PayrollPerubahanPayrollService"],
                _services_payroll_perubahan_payroll_detail_service__WEBPACK_IMPORTED_MODULE_29__["PayrollPerubahanPayrollDetailService"],
                _services_payroll_perusahaan_service__WEBPACK_IMPORTED_MODULE_30__["PayrollPerusahaanService"],
                _services_payroll_perusahaanp_service__WEBPACK_IMPORTED_MODULE_31__["PayrollPerusahaanpService"],
                _services_payroll_pkp_service__WEBPACK_IMPORTED_MODULE_32__["PayrollPkpService"],
                _services_payroll_print_template_service__WEBPACK_IMPORTED_MODULE_33__["PayrollPrintTemplateService"],
                _services_payroll_print_template_detail_service__WEBPACK_IMPORTED_MODULE_34__["PayrollPrintTemplateDetailService"],
                _services_payroll_print_template_detail_komponen_service__WEBPACK_IMPORTED_MODULE_35__["PayrollPrintTemplateDetailKomponenService"],
                _services_payroll_ptkp_service__WEBPACK_IMPORTED_MODULE_36__["PayrollPtkpService"],
                _services_payroll_report_pajak_service__WEBPACK_IMPORTED_MODULE_37__["PayrollReportPajakService"],
                _services_payroll_report_pegawai_onduty_service__WEBPACK_IMPORTED_MODULE_38__["PayrollReportPegawaiOndutyService"],
                _services_payroll_report_pegawai_payroll_service__WEBPACK_IMPORTED_MODULE_39__["PayrollReportPegawaiPayrollService"],
                _services_payroll_report_pegawai_thr_service__WEBPACK_IMPORTED_MODULE_40__["PayrollReportPegawaiThrService"],
                _services_payroll_tanda_tangan_service__WEBPACK_IMPORTED_MODULE_41__["PayrollTandaTanganService"],
                _services_payroll_thr_komponen_service__WEBPACK_IMPORTED_MODULE_42__["PayrollThrKomponenService"],
                _services_payroll_utang_jenis_service__WEBPACK_IMPORTED_MODULE_43__["PayrollUtangJenisService"],
                _services_payroll_utang_jenis_periode_service__WEBPACK_IMPORTED_MODULE_44__["PayrollUtangJenisPeriodeService"],
                _services_payroll_template_komponen_service__WEBPACK_IMPORTED_MODULE_45__["PayrollTemplateKomponenService"],
                _services_payroll_derazona_absensi_service__WEBPACK_IMPORTED_MODULE_46__["PayrollDerazonaAbsensiService"],
                _services_payroll_derazona_pegawai_derazona_service__WEBPACK_IMPORTED_MODULE_47__["PayrollDerazonaPegawaiDerazonaService"],
                _services_payroll_derazona_pegawai_ron_pay_service__WEBPACK_IMPORTED_MODULE_48__["PayrollDerazonaPegawaiRonPayService"],
                _services_payroll_derazona_pekerjaan_service__WEBPACK_IMPORTED_MODULE_49__["PayrollDerazonaPekerjaanService"],
                _services_payroll_derazona_rate_pilot_service__WEBPACK_IMPORTED_MODULE_50__["PayrollDerazonaRatePilotService"],
                _services_payroll_derazona_ron_group_service__WEBPACK_IMPORTED_MODULE_51__["PayrollDerazonaRonGroupService"],
                _services_payroll_derazona_dvr_service__WEBPACK_IMPORTED_MODULE_52__["PayrollDerazonaDvrService"],
                _services_payroll_derazona_ron_group_detail_service__WEBPACK_IMPORTED_MODULE_53__["PayrollDerazonaRonGroupDetailService"]
            ],
        })
    ], ApiModule);
    return ApiModule;
}());



/***/ }),

/***/ "./src/app/sdk/payroll/base-service.ts":
/*!*********************************************!*\
  !*** ./src/app/sdk/payroll/base-service.ts ***!
  \*********************************************/
/*! exports provided: BaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseService", function() { return BaseService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _api_configuration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api-configuration */ "./src/app/sdk/payroll/api-configuration.ts");
/* tslint:disable */


/**
 * Custom parameter codec to correctly handle the plus sign in parameter
 * values. See https://github.com/angular/angular/issues/18261
 */
var ParameterCodec = /** @class */ (function () {
    function ParameterCodec() {
    }
    ParameterCodec.prototype.encodeKey = function (key) {
        return encodeURIComponent(key);
    };
    ParameterCodec.prototype.encodeValue = function (value) {
        return encodeURIComponent(value);
    };
    ParameterCodec.prototype.decodeKey = function (key) {
        return decodeURIComponent(key);
    };
    ParameterCodec.prototype.decodeValue = function (value) {
        return decodeURIComponent(value);
    };
    return ParameterCodec;
}());
var PARAMETER_CODEC = new ParameterCodec();
/**
 * Base class for API services
 */
var BaseService = /** @class */ (function () {
    function BaseService(config, http) {
        this.config = config;
        this.http = http;
        this._rootUrl = '';
    }
    Object.defineProperty(BaseService.prototype, "rootUrl", {
        /**
         * Returns the root url for API operations. If not set directly in this
         * service, will fallback to ApiConfiguration.rootUrl.
         */
        get: function () {
            return this._rootUrl || this.config.rootUrl;
        },
        /**
         * Sets the root URL for API operations in this service.
         */
        set: function (rootUrl) {
            this._rootUrl = rootUrl;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Creates a new `HttpParams` with the correct codec
     */
    BaseService.prototype.newParams = function () {
        return new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]({
            encoder: PARAMETER_CODEC
        });
    };
    BaseService.ctorParameters = function () { return [
        { type: _api_configuration__WEBPACK_IMPORTED_MODULE_1__["ApiConfiguration"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }
    ]; };
    return BaseService;
}());



/***/ }),

/***/ "./src/app/sdk/payroll/services/file-dokumen.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/sdk/payroll/services/file-dokumen.service.ts ***!
  \**************************************************************/
/*! exports provided: FileDokumenService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileDokumenService", function() { return FileDokumenService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base-service */ "./src/app/sdk/payroll/base-service.ts");
/* harmony import */ var _api_configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api-configuration */ "./src/app/sdk/payroll/api-configuration.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");

/* tslint:disable */





var FileDokumenService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](FileDokumenService, _super);
    function FileDokumenService(config, http) {
        return _super.call(this, config, http) || this;
    }
    /**
     * Get all dokumens
     * @param filter PurchaseRequest that should be stored
     * @return successful operation
     */
    FileDokumenService.prototype.getFileDokumensResponse = function (filter) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        if (filter != null)
            __params = __params.set('filter', filter.toString());
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/file/dokumens", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Get all dokumens
     * @param filter PurchaseRequest that should be stored
     * @return successful operation
     */
    FileDokumenService.prototype.getFileDokumens = function (filter) {
        return this.getFileDokumensResponse(filter).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * Store dokumen
     * @param body dokumen that should be stored
     * @return successful operation
     */
    FileDokumenService.prototype.postFileDokumensResponse = function (body) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        __body = body;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/file/dokumens", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Store dokumen
     * @param body dokumen that should be stored
     * @return successful operation
     */
    FileDokumenService.prototype.postFileDokumens = function (body) {
        return this.postFileDokumensResponse(body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * Get dokumen
     * @param id id of dokumen
     * @return successful operation
     */
    FileDokumenService.prototype.getFileDokumensIdResponse = function (id) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + ("/file/dokumens/" + id), __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Get dokumen
     * @param id id of dokumen
     * @return successful operation
     */
    FileDokumenService.prototype.getFileDokumensId = function (id) {
        return this.getFileDokumensIdResponse(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * Update dokumen
     * @param params The `FileDokumenService.PutFileDokumensIdParams` containing the following parameters:
     *
     * - `id`: id of dokumen
     *
     * - `body`: dokumen that should be updated
     *
     * @return successful operation
     */
    FileDokumenService.prototype.putFileDokumensIdResponse = function (params) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        __body = params.body;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('PUT', this.rootUrl + ("/file/dokumens/" + params.id), __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Update dokumen
     * @param params The `FileDokumenService.PutFileDokumensIdParams` containing the following parameters:
     *
     * - `id`: id of dokumen
     *
     * - `body`: dokumen that should be updated
     *
     * @return successful operation
     */
    FileDokumenService.prototype.putFileDokumensId = function (params) {
        return this.putFileDokumensIdResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * Delete dokumen
     * @param id id of dokumen
     * @return successful operation
     */
    FileDokumenService.prototype.deleteFileDokumensIdResponse = function (id) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('DELETE', this.rootUrl + ("/file/dokumens/" + id), __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Delete dokumen
     * @param id id of dokumen
     * @return successful operation
     */
    FileDokumenService.prototype.deleteFileDokumensId = function (id) {
        return this.deleteFileDokumensIdResponse(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    FileDokumenService.getFileDokumensPath = '/file/dokumens';
    FileDokumenService.postFileDokumensPath = '/file/dokumens';
    FileDokumenService.getFileDokumensIdPath = '/file/dokumens/{id}';
    FileDokumenService.putFileDokumensIdPath = '/file/dokumens/{id}';
    FileDokumenService.deleteFileDokumensIdPath = '/file/dokumens/{id}';
    FileDokumenService.ctorParameters = function () { return [
        { type: _api_configuration__WEBPACK_IMPORTED_MODULE_4__["ApiConfiguration"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    FileDokumenService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_configuration__WEBPACK_IMPORTED_MODULE_4__["ApiConfiguration"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], FileDokumenService);
    return FileDokumenService;
}(_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"]));



/***/ }),

/***/ "./src/app/sdk/payroll/services/payroll-bank-account.service.ts":
/*!**********************************************************************!*\
  !*** ./src/app/sdk/payroll/services/payroll-bank-account.service.ts ***!
  \**********************************************************************/
/*! exports provided: PayrollBankAccountService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PayrollBankAccountService", function() { return PayrollBankAccountService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base-service */ "./src/app/sdk/payroll/base-service.ts");
/* harmony import */ var _api_configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api-configuration */ "./src/app/sdk/payroll/api-configuration.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");

/* tslint:disable */





var PayrollBankAccountService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](PayrollBankAccountService, _super);
    function PayrollBankAccountService(config, http) {
        return _super.call(this, config, http) || this;
    }
    /**
     * Get all Bank_accounts
     * @param filter PurchaseRequest that should be stored
     * @return successful operation
     */
    PayrollBankAccountService.prototype.getPayrollBankAccountsResponse = function (filter) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        if (filter != null)
            __params = __params.set('filter', filter.toString());
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/payroll/bank_accounts", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Get all Bank_accounts
     * @param filter PurchaseRequest that should be stored
     * @return successful operation
     */
    PayrollBankAccountService.prototype.getPayrollBankAccounts = function (filter) {
        return this.getPayrollBankAccountsResponse(filter).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * Store Bank_account
     * @param body Bank_account that should be stored
     * @return successful operation
     */
    PayrollBankAccountService.prototype.postPayrollBankAccountsResponse = function (body) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        __body = body;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/payroll/bank_accounts", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Store Bank_account
     * @param body Bank_account that should be stored
     * @return successful operation
     */
    PayrollBankAccountService.prototype.postPayrollBankAccounts = function (body) {
        return this.postPayrollBankAccountsResponse(body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * Get Bank_account
     * @param id id of Bank_account
     * @return successful operation
     */
    PayrollBankAccountService.prototype.getPayrollBankAccountsIdResponse = function (id) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + ("/payroll/bank_accounts/" + id), __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Get Bank_account
     * @param id id of Bank_account
     * @return successful operation
     */
    PayrollBankAccountService.prototype.getPayrollBankAccountsId = function (id) {
        return this.getPayrollBankAccountsIdResponse(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * Update Bank_account
     * @param params The `PayrollBankAccountService.PutPayrollBankAccountsIdParams` containing the following parameters:
     *
     * - `id`: id of Bank_account
     *
     * - `body`: Bank_account that should be updated
     *
     * @return successful operation
     */
    PayrollBankAccountService.prototype.putPayrollBankAccountsIdResponse = function (params) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        __body = params.body;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('PUT', this.rootUrl + ("/payroll/bank_accounts/" + params.id), __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Update Bank_account
     * @param params The `PayrollBankAccountService.PutPayrollBankAccountsIdParams` containing the following parameters:
     *
     * - `id`: id of Bank_account
     *
     * - `body`: Bank_account that should be updated
     *
     * @return successful operation
     */
    PayrollBankAccountService.prototype.putPayrollBankAccountsId = function (params) {
        return this.putPayrollBankAccountsIdResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * Delete Bank_account
     * @param id id of Bank_account
     * @return successful operation
     */
    PayrollBankAccountService.prototype.deletePayrollBankAccountsIdResponse = function (id) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('DELETE', this.rootUrl + ("/payroll/bank_accounts/" + id), __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Delete Bank_account
     * @param id id of Bank_account
     * @return successful operation
     */
    PayrollBankAccountService.prototype.deletePayrollBankAccountsId = function (id) {
        return this.deletePayrollBankAccountsIdResponse(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    PayrollBankAccountService.getPayrollBankAccountsPath = '/payroll/bank_accounts';
    PayrollBankAccountService.postPayrollBankAccountsPath = '/payroll/bank_accounts';
    PayrollBankAccountService.getPayrollBankAccountsIdPath = '/payroll/bank_accounts/{id}';
    PayrollBankAccountService.putPayrollBankAccountsIdPath = '/payroll/bank_accounts/{id}';
    PayrollBankAccountService.deletePayrollBankAccountsIdPath = '/payroll/bank_accounts/{id}';
    PayrollBankAccountService.ctorParameters = function () { return [
        { type: _api_configuration__WEBPACK_IMPORTED_MODULE_4__["ApiConfiguration"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    PayrollBankAccountService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_configuration__WEBPACK_IMPORTED_MODULE_4__["ApiConfiguration"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PayrollBankAccountService);
    return PayrollBankAccountService;
}(_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"]));



/***/ }),

/***/ "./src/app/sdk/payroll/services/payroll-bank-out.service.ts":
/*!******************************************************************!*\
  !*** ./src/app/sdk/payroll/services/payroll-bank-out.service.ts ***!
  \******************************************************************/
/*! exports provided: PayrollBankOutService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PayrollBankOutService", function() { return PayrollBankOutService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base-service */ "./src/app/sdk/payroll/base-service.ts");
/* harmony import */ var _api_configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api-configuration */ "./src/app/sdk/payroll/api-configuration.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");

/* tslint:disable */





var PayrollBankOutService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](PayrollBankOutService, _super);
    function PayrollBankOutService(config, http) {
        return _super.call(this, config, http) || this;
    }
    /**
     * Get all Bank_outs
     * @param filter PurchaseRequest that should be stored
     * @return successful operation
     */
    PayrollBankOutService.prototype.getPayrollBankOutsResponse = function (filter) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        if (filter != null)
            __params = __params.set('filter', filter.toString());
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/payroll/bank_outs", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Get all Bank_outs
     * @param filter PurchaseRequest that should be stored
     * @return successful operation
     */
    PayrollBankOutService.prototype.getPayrollBankOuts = function (filter) {
        return this.getPayrollBankOutsResponse(filter).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * Store Bank_out
     * @param body Bank_out that should be stored
     * @return successful operation
     */
    PayrollBankOutService.prototype.postPayrollBankOutsResponse = function (body) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        __body = body;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/payroll/bank_outs", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Store Bank_out
     * @param body Bank_out that should be stored
     * @return successful operation
     */
    PayrollBankOutService.prototype.postPayrollBankOuts = function (body) {
        return this.postPayrollBankOutsResponse(body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * Get Bank_out
     * @param id id of Bank_out
     * @return successful operation
     */
    PayrollBankOutService.prototype.getPayrollBankOutsIdResponse = function (id) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + ("/payroll/bank_outs/" + id), __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Get Bank_out
     * @param id id of Bank_out
     * @return successful operation
     */
    PayrollBankOutService.prototype.getPayrollBankOutsId = function (id) {
        return this.getPayrollBankOutsIdResponse(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * Update Bank_out
     * @param params The `PayrollBankOutService.PutPayrollBankOutsIdParams` containing the following parameters:
     *
     * - `id`: id of Bank_out
     *
     * - `body`: Bank_out that should be updated
     *
     * @return successful operation
     */
    PayrollBankOutService.prototype.putPayrollBankOutsIdResponse = function (params) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        __body = params.body;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('PUT', this.rootUrl + ("/payroll/bank_outs/" + params.id), __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Update Bank_out
     * @param params The `PayrollBankOutService.PutPayrollBankOutsIdParams` containing the following parameters:
     *
     * - `id`: id of Bank_out
     *
     * - `body`: Bank_out that should be updated
     *
     * @return successful operation
     */
    PayrollBankOutService.prototype.putPayrollBankOutsId = function (params) {
        return this.putPayrollBankOutsIdResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * Delete Bank_out
     * @param id id of Bank_out
     * @return successful operation
     */
    PayrollBankOutService.prototype.deletePayrollBankOutsIdResponse = function (id) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('DELETE', this.rootUrl + ("/payroll/bank_outs/" + id), __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Delete Bank_out
     * @param id id of Bank_out
     * @return successful operation
     */
    PayrollBankOutService.prototype.deletePayrollBankOutsId = function (id) {
        return this.deletePayrollBankOutsIdResponse(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    PayrollBankOutService.getPayrollBankOutsPath = '/payroll/bank_outs';
    PayrollBankOutService.postPayrollBankOutsPath = '/payroll/bank_outs';
    PayrollBankOutService.getPayrollBankOutsIdPath = '/payroll/bank_outs/{id}';
    PayrollBankOutService.putPayrollBankOutsIdPath = '/payroll/bank_outs/{id}';
    PayrollBankOutService.deletePayrollBankOutsIdPath = '/payroll/bank_outs/{id}';
    PayrollBankOutService.ctorParameters = function () { return [
        { type: _api_configuration__WEBPACK_IMPORTED_MODULE_4__["ApiConfiguration"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    PayrollBankOutService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_configuration__WEBPACK_IMPORTED_MODULE_4__["ApiConfiguration"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PayrollBankOutService);
    return PayrollBankOutService;
}(_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"]));



/***/ }),

/***/ "./src/app/sdk/payroll/services/payroll-bonus-komponen.service.ts":
/*!************************************************************************!*\
  !*** ./src/app/sdk/payroll/services/payroll-bonus-komponen.service.ts ***!
  \************************************************************************/
/*! exports provided: PayrollBonusKomponenService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PayrollBonusKomponenService", function() { return PayrollBonusKomponenService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base-service */ "./src/app/sdk/payroll/base-service.ts");
/* harmony import */ var _api_configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api-configuration */ "./src/app/sdk/payroll/api-configuration.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");

/* tslint:disable */





var PayrollBonusKomponenService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](PayrollBonusKomponenService, _super);
    function PayrollBonusKomponenService(config, http) {
        return _super.call(this, config, http) || this;
    }
    /**
     * Get all Bonus_komponens
     * @param filter PurchaseRequest that should be stored
     * @return successful operation
     */
    PayrollBonusKomponenService.prototype.getPayrollBonusKomponensResponse = function (filter) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        if (filter != null)
            __params = __params.set('filter', filter.toString());
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/payroll/bonus_komponens", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Get all Bonus_komponens
     * @param filter PurchaseRequest that should be stored
     * @return successful operation
     */
    PayrollBonusKomponenService.prototype.getPayrollBonusKomponens = function (filter) {
        return this.getPayrollBonusKomponensResponse(filter).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * Store Bonus_komponen
     * @param body Bonus_komponen that should be stored
     * @return successful operation
     */
    PayrollBonusKomponenService.prototype.postPayrollBonusKomponensResponse = function (body) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        __body = body;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/payroll/bonus_komponens", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Store Bonus_komponen
     * @param body Bonus_komponen that should be stored
     * @return successful operation
     */
    PayrollBonusKomponenService.prototype.postPayrollBonusKomponens = function (body) {
        return this.postPayrollBonusKomponensResponse(body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * Get Bonus_komponen
     * @param id id of Bonus_komponen
     * @return successful operation
     */
    PayrollBonusKomponenService.prototype.getPayrollBonusKomponensIdResponse = function (id) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + ("/payroll/bonus_komponens/" + id), __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Get Bonus_komponen
     * @param id id of Bonus_komponen
     * @return successful operation
     */
    PayrollBonusKomponenService.prototype.getPayrollBonusKomponensId = function (id) {
        return this.getPayrollBonusKomponensIdResponse(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * Update Bonus_komponen
     * @param params The `PayrollBonusKomponenService.PutPayrollBonusKomponensIdParams` containing the following parameters:
     *
     * - `id`: id of Bonus_komponen
     *
     * - `body`: Bonus_komponen that should be updated
     *
     * @return successful operation
     */
    PayrollBonusKomponenService.prototype.putPayrollBonusKomponensIdResponse = function (params) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        __body = params.body;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('PUT', this.rootUrl + ("/payroll/bonus_komponens/" + params.id), __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Update Bonus_komponen
     * @param params The `PayrollBonusKomponenService.PutPayrollBonusKomponensIdParams` containing the following parameters:
     *
     * - `id`: id of Bonus_komponen
     *
     * - `body`: Bonus_komponen that should be updated
     *
     * @return successful operation
     */
    PayrollBonusKomponenService.prototype.putPayrollBonusKomponensId = function (params) {
        return this.putPayrollBonusKomponensIdResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * Delete Bonus_komponen
     * @param id id of Bonus_komponen
     * @return successful operation
     */
    PayrollBonusKomponenService.prototype.deletePayrollBonusKomponensIdResponse = function (id) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('DELETE', this.rootUrl + ("/payroll/bonus_komponens/" + id), __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Delete Bonus_komponen
     * @param id id of Bonus_komponen
     * @return successful operation
     */
    PayrollBonusKomponenService.prototype.deletePayrollBonusKomponensId = function (id) {
        return this.deletePayrollBonusKomponensIdResponse(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    PayrollBonusKomponenService.getPayrollBonusKomponensPath = '/payroll/bonus_komponens';
    PayrollBonusKomponenService.postPayrollBonusKomponensPath = '/payroll/bonus_komponens';
    PayrollBonusKomponenService.getPayrollBonusKomponensIdPath = '/payroll/bonus_komponens/{id}';
    PayrollBonusKomponenService.putPayrollBonusKomponensIdPath = '/payroll/bonus_komponens/{id}';
    PayrollBonusKomponenService.deletePayrollBonusKomponensIdPath = '/payroll/bonus_komponens/{id}';
    PayrollBonusKomponenService.ctorParameters = function () { return [
        { type: _api_configuration__WEBPACK_IMPORTED_MODULE_4__["ApiConfiguration"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    PayrollBonusKomponenService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_configuration__WEBPACK_IMPORTED_MODULE_4__["ApiConfiguration"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PayrollBonusKomponenService);
    return PayrollBonusKomponenService;
}(_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"]));



/***/ }),

/***/ "./src/app/sdk/payroll/services/payroll-bpjs-jenis.service.ts":
/*!********************************************************************!*\
  !*** ./src/app/sdk/payroll/services/payroll-bpjs-jenis.service.ts ***!
  \********************************************************************/
/*! exports provided: PayrollBpjsJenisService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PayrollBpjsJenisService", function() { return PayrollBpjsJenisService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base-service */ "./src/app/sdk/payroll/base-service.ts");
/* harmony import */ var _api_configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api-configuration */ "./src/app/sdk/payroll/api-configuration.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");

/* tslint:disable */





var PayrollBpjsJenisService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](PayrollBpjsJenisService, _super);
    function PayrollBpjsJenisService(config, http) {
        return _super.call(this, config, http) || this;
    }
    /**
     * Get all Bpjs_jenis
     * @param filter PurchaseRequest that should be stored
     * @return successful operation
     */
    PayrollBpjsJenisService.prototype.getPayrollBpjsJenisResponse = function (filter) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        if (filter != null)
            __params = __params.set('filter', filter.toString());
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/payroll/bpjs_jenis", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Get all Bpjs_jenis
     * @param filter PurchaseRequest that should be stored
     * @return successful operation
     */
    PayrollBpjsJenisService.prototype.getPayrollBpjsJenis = function (filter) {
        return this.getPayrollBpjsJenisResponse(filter).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * Store Bpjs_jenis
     * @param body Bpjs_jenis that should be stored
     * @return successful operation
     */
    PayrollBpjsJenisService.prototype.postPayrollBpjsJenisResponse = function (body) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        __body = body;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/payroll/bpjs_jenis", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Store Bpjs_jenis
     * @param body Bpjs_jenis that should be stored
     * @return successful operation
     */
    PayrollBpjsJenisService.prototype.postPayrollBpjsJenis = function (body) {
        return this.postPayrollBpjsJenisResponse(body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * Get Bpjs_jenis
     * @param id id of Bpjs_jenis
     * @return successful operation
     */
    PayrollBpjsJenisService.prototype.getPayrollBpjsJenisIdResponse = function (id) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + ("/payroll/bpjs_jenis/" + id), __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Get Bpjs_jenis
     * @param id id of Bpjs_jenis
     * @return successful operation
     */
    PayrollBpjsJenisService.prototype.getPayrollBpjsJenisId = function (id) {
        return this.getPayrollBpjsJenisIdResponse(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * Update Bpjs_jenis
     * @param params The `PayrollBpjsJenisService.PutPayrollBpjsJenisIdParams` containing the following parameters:
     *
     * - `id`: id of Bpjs_jenis
     *
     * - `body`: Bpjs_jenis that should be updated
     *
     * @return successful operation
     */
    PayrollBpjsJenisService.prototype.putPayrollBpjsJenisIdResponse = function (params) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        __body = params.body;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('PUT', this.rootUrl + ("/payroll/bpjs_jenis/" + params.id), __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Update Bpjs_jenis
     * @param params The `PayrollBpjsJenisService.PutPayrollBpjsJenisIdParams` containing the following parameters:
     *
     * - `id`: id of Bpjs_jenis
     *
     * - `body`: Bpjs_jenis that should be updated
     *
     * @return successful operation
     */
    PayrollBpjsJenisService.prototype.putPayrollBpjsJenisId = function (params) {
        return this.putPayrollBpjsJenisIdResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * Delete Bpjs_jenis
     * @param id id of Bpjs_jenis
     * @return successful operation
     */
    PayrollBpjsJenisService.prototype.deletePayrollBpjsJenisIdResponse = function (id) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('DELETE', this.rootUrl + ("/payroll/bpjs_jenis/" + id), __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Delete Bpjs_jenis
     * @param id id of Bpjs_jenis
     * @return successful operation
     */
    PayrollBpjsJenisService.prototype.deletePayrollBpjsJenisId = function (id) {
        return this.deletePayrollBpjsJenisIdResponse(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    PayrollBpjsJenisService.getPayrollBpjsJenisPath = '/payroll/bpjs_jenis';
    PayrollBpjsJenisService.postPayrollBpjsJenisPath = '/payroll/bpjs_jenis';
    PayrollBpjsJenisService.getPayrollBpjsJenisIdPath = '/payroll/bpjs_jenis/{id}';
    PayrollBpjsJenisService.putPayrollBpjsJenisIdPath = '/payroll/bpjs_jenis/{id}';
    PayrollBpjsJenisService.deletePayrollBpjsJenisIdPath = '/payroll/bpjs_jenis/{id}';
    PayrollBpjsJenisService.ctorParameters = function () { return [
        { type: _api_configuration__WEBPACK_IMPORTED_MODULE_4__["ApiConfiguration"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    PayrollBpjsJenisService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_configuration__WEBPACK_IMPORTED_MODULE_4__["ApiConfiguration"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PayrollBpjsJenisService);
    return PayrollBpjsJenisService;
}(_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"]));



/***/ }),

/***/ "./src/app/sdk/payroll/services/payroll-bpjs-tk.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/sdk/payroll/services/payroll-bpjs-tk.service.ts ***!
  \*****************************************************************/
/*! exports provided: PayrollBpjsTkService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PayrollBpjsTkService", function() { return PayrollBpjsTkService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base-service */ "./src/app/sdk/payroll/base-service.ts");
/* harmony import */ var _api_configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api-configuration */ "./src/app/sdk/payroll/api-configuration.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");

/* tslint:disable */





var PayrollBpjsTkService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](PayrollBpjsTkService, _super);
    function PayrollBpjsTkService(config, http) {
        return _super.call(this, config, http) || this;
    }
    /**
     * Get all Bpjs_tks
     * @param filter PurchaseRequest that should be stored
     * @return successful operation
     */
    PayrollBpjsTkService.prototype.getPayrollBpjsTksResponse = function (filter) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        if (filter != null)
            __params = __params.set('filter', filter.toString());
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/payroll/bpjs_tks", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Get all Bpjs_tks
     * @param filter PurchaseRequest that should be stored
     * @return successful operation
     */
    PayrollBpjsTkService.prototype.getPayrollBpjsTks = function (filter) {
        return this.getPayrollBpjsTksResponse(filter).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * Store Bpjs_tk
     * @param body Bpjs_tk that should be stored
     * @return successful operation
     */
    PayrollBpjsTkService.prototype.postPayrollBpjsTksResponse = function (body) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        __body = body;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/payroll/bpjs_tks", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Store Bpjs_tk
     * @param body Bpjs_tk that should be stored
     * @return successful operation
     */
    PayrollBpjsTkService.prototype.postPayrollBpjsTks = function (body) {
        return this.postPayrollBpjsTksResponse(body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * Get Bpjs_tk
     * @param id id of Bpjs_tk
     * @return successful operation
     */
    PayrollBpjsTkService.prototype.getPayrollBpjsTksIdResponse = function (id) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + ("/payroll/bpjs_tks/" + id), __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Get Bpjs_tk
     * @param id id of Bpjs_tk
     * @return successful operation
     */
    PayrollBpjsTkService.prototype.getPayrollBpjsTksId = function (id) {
        return this.getPayrollBpjsTksIdResponse(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * Update Bpjs_tk
     * @param params The `PayrollBpjsTkService.PutPayrollBpjsTksIdParams` containing the following parameters:
     *
     * - `id`: id of Bpjs_tk
     *
     * - `body`: Bpjs_tk that should be updated
     *
     * @return successful operation
     */
    PayrollBpjsTkService.prototype.putPayrollBpjsTksIdResponse = function (params) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        __body = params.body;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('PUT', this.rootUrl + ("/payroll/bpjs_tks/" + params.id), __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Update Bpjs_tk
     * @param params The `PayrollBpjsTkService.PutPayrollBpjsTksIdParams` containing the following parameters:
     *
     * - `id`: id of Bpjs_tk
     *
     * - `body`: Bpjs_tk that should be updated
     *
     * @return successful operation
     */
    PayrollBpjsTkService.prototype.putPayrollBpjsTksId = function (params) {
        return this.putPayrollBpjsTksIdResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * Delete Bpjs_tk
     * @param id id of Bpjs_tk
     * @return successful operation
     */
    PayrollBpjsTkService.prototype.deletePayrollBpjsTksIdResponse = function (id) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('DELETE', this.rootUrl + ("/payroll/bpjs_tks/" + id), __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Delete Bpjs_tk
     * @param id id of Bpjs_tk
     * @return successful operation
     */
    PayrollBpjsTkService.prototype.deletePayrollBpjsTksId = function (id) {
        return this.deletePayrollBpjsTksIdResponse(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    PayrollBpjsTkService.getPayrollBpjsTksPath = '/payroll/bpjs_tks';
    PayrollBpjsTkService.postPayrollBpjsTksPath = '/payroll/bpjs_tks';
    PayrollBpjsTkService.getPayrollBpjsTksIdPath = '/payroll/bpjs_tks/{id}';
    PayrollBpjsTkService.putPayrollBpjsTksIdPath = '/payroll/bpjs_tks/{id}';
    PayrollBpjsTkService.deletePayrollBpjsTksIdPath = '/payroll/bpjs_tks/{id}';
    PayrollBpjsTkService.ctorParameters = function () { return [
        { type: _api_configuration__WEBPACK_IMPORTED_MODULE_4__["ApiConfiguration"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    PayrollBpjsTkService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_configuration__WEBPACK_IMPORTED_MODULE_4__["ApiConfiguration"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PayrollBpjsTkService);
    return PayrollBpjsTkService;
}(_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"]));



/***/ }),

/***/ "./src/app/sdk/payroll/services/payroll-derazona-absensi.service.ts":
/*!**************************************************************************!*\
  !*** ./src/app/sdk/payroll/services/payroll-derazona-absensi.service.ts ***!
  \**************************************************************************/
/*! exports provided: PayrollDerazonaAbsensiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PayrollDerazonaAbsensiService", function() { return PayrollDerazonaAbsensiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base-service */ "./src/app/sdk/payroll/base-service.ts");
/* harmony import */ var _api_configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api-configuration */ "./src/app/sdk/payroll/api-configuration.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");

/* tslint:disable */





var PayrollDerazonaAbsensiService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](PayrollDerazonaAbsensiService, _super);
    function PayrollDerazonaAbsensiService(config, http) {
        return _super.call(this, config, http) || this;
    }
    /**
     * Get all Absensis
     * @param filter PurchaseRequest that should be stored
     * @return successful operation
     */
    PayrollDerazonaAbsensiService.prototype.getPayrollDerazonaAbsensisResponse = function (filter) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        if (filter != null)
            __params = __params.set('filter', filter.toString());
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/payrollDerazona/absensis", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Get all Absensis
     * @param filter PurchaseRequest that should be stored
     * @return successful operation
     */
    PayrollDerazonaAbsensiService.prototype.getPayrollDerazonaAbsensis = function (filter) {
        return this.getPayrollDerazonaAbsensisResponse(filter).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * Store Absensi
     * @param body Absensi that should be stored
     * @return successful operation
     */
    PayrollDerazonaAbsensiService.prototype.postPayrollDerazonaAbsensisResponse = function (body) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        __body = body;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/payrollDerazona/absensis", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Store Absensi
     * @param body Absensi that should be stored
     * @return successful operation
     */
    PayrollDerazonaAbsensiService.prototype.postPayrollDerazonaAbsensis = function (body) {
        return this.postPayrollDerazonaAbsensisResponse(body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * Get Absensi
     * @param id id of Absensi
     * @return successful operation
     */
    PayrollDerazonaAbsensiService.prototype.getPayrollDerazonaAbsensisIdResponse = function (id) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + ("/payrollDerazona/absensis/" + id), __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Get Absensi
     * @param id id of Absensi
     * @return successful operation
     */
    PayrollDerazonaAbsensiService.prototype.getPayrollDerazonaAbsensisId = function (id) {
        return this.getPayrollDerazonaAbsensisIdResponse(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * Update Absensi
     * @param params The `PayrollDerazonaAbsensiService.PutPayrollDerazonaAbsensisIdParams` containing the following parameters:
     *
     * - `id`: id of Absensi
     *
     * - `body`: Absensi that should be updated
     *
     * @return successful operation
     */
    PayrollDerazonaAbsensiService.prototype.putPayrollDerazonaAbsensisIdResponse = function (params) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        __body = params.body;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('PUT', this.rootUrl + ("/payrollDerazona/absensis/" + params.id), __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Update Absensi
     * @param params The `PayrollDerazonaAbsensiService.PutPayrollDerazonaAbsensisIdParams` containing the following parameters:
     *
     * - `id`: id of Absensi
     *
     * - `body`: Absensi that should be updated
     *
     * @return successful operation
     */
    PayrollDerazonaAbsensiService.prototype.putPayrollDerazonaAbsensisId = function (params) {
        return this.putPayrollDerazonaAbsensisIdResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * Delete Absensi
     * @param id id of Absensi
     * @return successful operation
     */
    PayrollDerazonaAbsensiService.prototype.deletePayrollDerazonaAbsensisIdResponse = function (id) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('DELETE', this.rootUrl + ("/payrollDerazona/absensis/" + id), __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Delete Absensi
     * @param id id of Absensi
     * @return successful operation
     */
    PayrollDerazonaAbsensiService.prototype.deletePayrollDerazonaAbsensisId = function (id) {
        return this.deletePayrollDerazonaAbsensisIdResponse(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    PayrollDerazonaAbsensiService.getPayrollDerazonaAbsensisPath = '/payrollDerazona/absensis';
    PayrollDerazonaAbsensiService.postPayrollDerazonaAbsensisPath = '/payrollDerazona/absensis';
    PayrollDerazonaAbsensiService.getPayrollDerazonaAbsensisIdPath = '/payrollDerazona/absensis/{id}';
    PayrollDerazonaAbsensiService.putPayrollDerazonaAbsensisIdPath = '/payrollDerazona/absensis/{id}';
    PayrollDerazonaAbsensiService.deletePayrollDerazonaAbsensisIdPath = '/payrollDerazona/absensis/{id}';
    PayrollDerazonaAbsensiService.ctorParameters = function () { return [
        { type: _api_configuration__WEBPACK_IMPORTED_MODULE_4__["ApiConfiguration"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    PayrollDerazonaAbsensiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_configuration__WEBPACK_IMPORTED_MODULE_4__["ApiConfiguration"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PayrollDerazonaAbsensiService);
    return PayrollDerazonaAbsensiService;
}(_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"]));



/***/ }),

/***/ "./src/app/sdk/payroll/services/payroll-derazona-dvr.service.ts":
/*!**********************************************************************!*\
  !*** ./src/app/sdk/payroll/services/payroll-derazona-dvr.service.ts ***!
  \**********************************************************************/
/*! exports provided: PayrollDerazonaDvrService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PayrollDerazonaDvrService", function() { return PayrollDerazonaDvrService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base-service */ "./src/app/sdk/payroll/base-service.ts");
/* harmony import */ var _api_configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api-configuration */ "./src/app/sdk/payroll/api-configuration.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");

/* tslint:disable */





var PayrollDerazonaDvrService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](PayrollDerazonaDvrService, _super);
    function PayrollDerazonaDvrService(config, http) {
        return _super.call(this, config, http) || this;
    }
    /**
     * Get all dvrs
     * @param filter PurchaseRequest that should be stored
     * @return successful operation
     */
    PayrollDerazonaDvrService.prototype.getPayrollDerazonaDvrsResponse = function (filter) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        if (filter != null)
            __params = __params.set('filter', filter.toString());
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/payrollDerazona/dvrs", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Get all dvrs
     * @param filter PurchaseRequest that should be stored
     * @return successful operation
     */
    PayrollDerazonaDvrService.prototype.getPayrollDerazonaDvrs = function (filter) {
        return this.getPayrollDerazonaDvrsResponse(filter).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * Store dvr
     * @param body dvr that should be stored
     * @return successful operation
     */
    PayrollDerazonaDvrService.prototype.postPayrollDerazonaDvrsResponse = function (body) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        __body = body;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/payrollDerazona/dvrs", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Store dvr
     * @param body dvr that should be stored
     * @return successful operation
     */
    PayrollDerazonaDvrService.prototype.postPayrollDerazonaDvrs = function (body) {
        return this.postPayrollDerazonaDvrsResponse(body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * Get dvr
     * @param id id of dvr
     * @return successful operation
     */
    PayrollDerazonaDvrService.prototype.getPayrollDerazonaDvrsIdResponse = function (id) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + ("/payrollDerazona/dvrs/" + id), __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Get dvr
     * @param id id of dvr
     * @return successful operation
     */
    PayrollDerazonaDvrService.prototype.getPayrollDerazonaDvrsId = function (id) {
        return this.getPayrollDerazonaDvrsIdResponse(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * Update dvr
     * @param params The `PayrollDerazonaDvrService.PutPayrollDerazonaDvrsIdParams` containing the following parameters:
     *
     * - `id`: id of dvr
     *
     * - `body`: dvr that should be updated
     *
     * @return successful operation
     */
    PayrollDerazonaDvrService.prototype.putPayrollDerazonaDvrsIdResponse = function (params) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        __body = params.body;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('PUT', this.rootUrl + ("/payrollDerazona/dvrs/" + params.id), __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Update dvr
     * @param params The `PayrollDerazonaDvrService.PutPayrollDerazonaDvrsIdParams` containing the following parameters:
     *
     * - `id`: id of dvr
     *
     * - `body`: dvr that should be updated
     *
     * @return successful operation
     */
    PayrollDerazonaDvrService.prototype.putPayrollDerazonaDvrsId = function (params) {
        return this.putPayrollDerazonaDvrsIdResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * Delete dvr
     * @param id id of dvr
     * @return successful operation
     */
    PayrollDerazonaDvrService.prototype.deletePayrollDerazonaDvrsIdResponse = function (id) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('DELETE', this.rootUrl + ("/payrollDerazona/dvrs/" + id), __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Delete dvr
     * @param id id of dvr
     * @return successful operation
     */
    PayrollDerazonaDvrService.prototype.deletePayrollDerazonaDvrsId = function (id) {
        return this.deletePayrollDerazonaDvrsIdResponse(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    PayrollDerazonaDvrService.getPayrollDerazonaDvrsPath = '/payrollDerazona/dvrs';
    PayrollDerazonaDvrService.postPayrollDerazonaDvrsPath = '/payrollDerazona/dvrs';
    PayrollDerazonaDvrService.getPayrollDerazonaDvrsIdPath = '/payrollDerazona/dvrs/{id}';
    PayrollDerazonaDvrService.putPayrollDerazonaDvrsIdPath = '/payrollDerazona/dvrs/{id}';
    PayrollDerazonaDvrService.deletePayrollDerazonaDvrsIdPath = '/payrollDerazona/dvrs/{id}';
    PayrollDerazonaDvrService.ctorParameters = function () { return [
        { type: _api_configuration__WEBPACK_IMPORTED_MODULE_4__["ApiConfiguration"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    PayrollDerazonaDvrService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_configuration__WEBPACK_IMPORTED_MODULE_4__["ApiConfiguration"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PayrollDerazonaDvrService);
    return PayrollDerazonaDvrService;
}(_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"]));



/***/ }),

/***/ "./src/app/sdk/payroll/services/payroll-derazona-pegawai-derazona.service.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/sdk/payroll/services/payroll-derazona-pegawai-derazona.service.ts ***!
  \***********************************************************************************/
/*! exports provided: PayrollDerazonaPegawaiDerazonaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PayrollDerazonaPegawaiDerazonaService", function() { return PayrollDerazonaPegawaiDerazonaService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base-service */ "./src/app/sdk/payroll/base-service.ts");
/* harmony import */ var _api_configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api-configuration */ "./src/app/sdk/payroll/api-configuration.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");

/* tslint:disable */





var PayrollDerazonaPegawaiDerazonaService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](PayrollDerazonaPegawaiDerazonaService, _super);
    function PayrollDerazonaPegawaiDerazonaService(config, http) {
        return _super.call(this, config, http) || this;
    }
    /**
     * Get all Pegawai_derazonas
     * @param filter PurchaseRequest that should be stored
     * @return successful operation
     */
    PayrollDerazonaPegawaiDerazonaService.prototype.getPayrollDerazonaPegawaiDerazonasResponse = function (filter) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        if (filter != null)
            __params = __params.set('filter', filter.toString());
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/payrollDerazona/pegawai_derazonas", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Get all Pegawai_derazonas
     * @param filter PurchaseRequest that should be stored
     * @return successful operation
     */
    PayrollDerazonaPegawaiDerazonaService.prototype.getPayrollDerazonaPegawaiDerazonas = function (filter) {
        return this.getPayrollDerazonaPegawaiDerazonasResponse(filter).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * Store Pegawai_derazona
     * @param body Pegawai_derazona that should be stored
     * @return successful operation
     */
    PayrollDerazonaPegawaiDerazonaService.prototype.postPayrollDerazonaPegawaiDerazonasResponse = function (body) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        __body = body;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/payrollDerazona/pegawai_derazonas", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Store Pegawai_derazona
     * @param body Pegawai_derazona that should be stored
     * @return successful operation
     */
    PayrollDerazonaPegawaiDerazonaService.prototype.postPayrollDerazonaPegawaiDerazonas = function (body) {
        return this.postPayrollDerazonaPegawaiDerazonasResponse(body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * Get Pegawai_derazona
     * @param id id of Pegawai_derazona
     * @return successful operation
     */
    PayrollDerazonaPegawaiDerazonaService.prototype.getPayrollDerazonaPegawaiDerazonasIdResponse = function (id) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + ("/payrollDerazona/pegawai_derazonas/" + id), __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Get Pegawai_derazona
     * @param id id of Pegawai_derazona
     * @return successful operation
     */
    PayrollDerazonaPegawaiDerazonaService.prototype.getPayrollDerazonaPegawaiDerazonasId = function (id) {
        return this.getPayrollDerazonaPegawaiDerazonasIdResponse(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * Update Pegawai_derazona
     * @param params The `PayrollDerazonaPegawaiDerazonaService.PutPayrollDerazonaPegawaiDerazonasIdParams` containing the following parameters:
     *
     * - `id`: id of Pegawai_derazona
     *
     * - `body`: Pegawai_derazona that should be updated
     *
     * @return successful operation
     */
    PayrollDerazonaPegawaiDerazonaService.prototype.putPayrollDerazonaPegawaiDerazonasIdResponse = function (params) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        __body = params.body;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('PUT', this.rootUrl + ("/payrollDerazona/pegawai_derazonas/" + params.id), __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Update Pegawai_derazona
     * @param params The `PayrollDerazonaPegawaiDerazonaService.PutPayrollDerazonaPegawaiDerazonasIdParams` containing the following parameters:
     *
     * - `id`: id of Pegawai_derazona
     *
     * - `body`: Pegawai_derazona that should be updated
     *
     * @return successful operation
     */
    PayrollDerazonaPegawaiDerazonaService.prototype.putPayrollDerazonaPegawaiDerazonasId = function (params) {
        return this.putPayrollDerazonaPegawaiDerazonasIdResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * Delete Pegawai_derazona
     * @param id id of Pegawai_derazona
     * @return successful operation
     */
    PayrollDerazonaPegawaiDerazonaService.prototype.deletePayrollDerazonaPegawaiDerazonasIdResponse = function (id) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('DELETE', this.rootUrl + ("/payrollDerazona/pegawai_derazonas/" + id), __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Delete Pegawai_derazona
     * @param id id of Pegawai_derazona
     * @return successful operation
     */
    PayrollDerazonaPegawaiDerazonaService.prototype.deletePayrollDerazonaPegawaiDerazonasId = function (id) {
        return this.deletePayrollDerazonaPegawaiDerazonasIdResponse(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    PayrollDerazonaPegawaiDerazonaService.getPayrollDerazonaPegawaiDerazonasPath = '/payrollDerazona/pegawai_derazonas';
    PayrollDerazonaPegawaiDerazonaService.postPayrollDerazonaPegawaiDerazonasPath = '/payrollDerazona/pegawai_derazonas';
    PayrollDerazonaPegawaiDerazonaService.getPayrollDerazonaPegawaiDerazonasIdPath = '/payrollDerazona/pegawai_derazonas/{id}';
    PayrollDerazonaPegawaiDerazonaService.putPayrollDerazonaPegawaiDerazonasIdPath = '/payrollDerazona/pegawai_derazonas/{id}';
    PayrollDerazonaPegawaiDerazonaService.deletePayrollDerazonaPegawaiDerazonasIdPath = '/payrollDerazona/pegawai_derazonas/{id}';
    PayrollDerazonaPegawaiDerazonaService.ctorParameters = function () { return [
        { type: _api_configuration__WEBPACK_IMPORTED_MODULE_4__["ApiConfiguration"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    PayrollDerazonaPegawaiDerazonaService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_configuration__WEBPACK_IMPORTED_MODULE_4__["ApiConfiguration"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PayrollDerazonaPegawaiDerazonaService);
    return PayrollDerazonaPegawaiDerazonaService;
}(_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"]));



/***/ }),

/***/ "./src/app/sdk/payroll/services/payroll-derazona-pegawai-ron-pay.service.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/sdk/payroll/services/payroll-derazona-pegawai-ron-pay.service.ts ***!
  \**********************************************************************************/
/*! exports provided: PayrollDerazonaPegawaiRonPayService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PayrollDerazonaPegawaiRonPayService", function() { return PayrollDerazonaPegawaiRonPayService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base-service */ "./src/app/sdk/payroll/base-service.ts");
/* harmony import */ var _api_configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api-configuration */ "./src/app/sdk/payroll/api-configuration.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");

/* tslint:disable */





var PayrollDerazonaPegawaiRonPayService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](PayrollDerazonaPegawaiRonPayService, _super);
    function PayrollDerazonaPegawaiRonPayService(config, http) {
        return _super.call(this, config, http) || this;
    }
    /**
     * Get all Pegawai_ron_pays
     * @param filter PurchaseRequest that should be stored
     * @return successful operation
     */
    PayrollDerazonaPegawaiRonPayService.prototype.getPayrollDerazonaPegawaiRonPaysResponse = function (filter) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        if (filter != null)
            __params = __params.set('filter', filter.toString());
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/payrollDerazona/pegawai_ron_pays", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Get all Pegawai_ron_pays
     * @param filter PurchaseRequest that should be stored
     * @return successful operation
     */
    PayrollDerazonaPegawaiRonPayService.prototype.getPayrollDerazonaPegawaiRonPays = function (filter) {
        return this.getPayrollDerazonaPegawaiRonPaysResponse(filter).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * Store Pegawai_ron_pay
     * @param body Pegawai_ron_pay that should be stored
     * @return successful operation
     */
    PayrollDerazonaPegawaiRonPayService.prototype.postPayrollDerazonaPegawaiRonPaysResponse = function (body) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        __body = body;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/payrollDerazona/pegawai_ron_pays", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Store Pegawai_ron_pay
     * @param body Pegawai_ron_pay that should be stored
     * @return successful operation
     */
    PayrollDerazonaPegawaiRonPayService.prototype.postPayrollDerazonaPegawaiRonPays = function (body) {
        return this.postPayrollDerazonaPegawaiRonPaysResponse(body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * Get Pegawai_ron_pay
     * @param id id of Pegawai_ron_pay
     * @return successful operation
     */
    PayrollDerazonaPegawaiRonPayService.prototype.getPayrollDerazonaPegawaiRonPaysIdResponse = function (id) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + ("/payrollDerazona/pegawai_ron_pays/" + id), __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Get Pegawai_ron_pay
     * @param id id of Pegawai_ron_pay
     * @return successful operation
     */
    PayrollDerazonaPegawaiRonPayService.prototype.getPayrollDerazonaPegawaiRonPaysId = function (id) {
        return this.getPayrollDerazonaPegawaiRonPaysIdResponse(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * Update Pegawai_ron_pay
     * @param params The `PayrollDerazonaPegawaiRonPayService.PutPayrollDerazonaPegawaiRonPaysIdParams` containing the following parameters:
     *
     * - `id`: id of Pegawai_ron_pay
     *
     * - `body`: Pegawai_ron_pay that should be updated
     *
     * @return successful operation
     */
    PayrollDerazonaPegawaiRonPayService.prototype.putPayrollDerazonaPegawaiRonPaysIdResponse = function (params) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        __body = params.body;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('PUT', this.rootUrl + ("/payrollDerazona/pegawai_ron_pays/" + params.id), __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Update Pegawai_ron_pay
     * @param params The `PayrollDerazonaPegawaiRonPayService.PutPayrollDerazonaPegawaiRonPaysIdParams` containing the following parameters:
     *
     * - `id`: id of Pegawai_ron_pay
     *
     * - `body`: Pegawai_ron_pay that should be updated
     *
     * @return successful operation
     */
    PayrollDerazonaPegawaiRonPayService.prototype.putPayrollDerazonaPegawaiRonPaysId = function (params) {
        return this.putPayrollDerazonaPegawaiRonPaysIdResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * Delete Pegawai_ron_pay
     * @param id id of Pegawai_ron_pay
     * @return successful operation
     */
    PayrollDerazonaPegawaiRonPayService.prototype.deletePayrollDerazonaPegawaiRonPaysIdResponse = function (id) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('DELETE', this.rootUrl + ("/payrollDerazona/pegawai_ron_pays/" + id), __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Delete Pegawai_ron_pay
     * @param id id of Pegawai_ron_pay
     * @return successful operation
     */
    PayrollDerazonaPegawaiRonPayService.prototype.deletePayrollDerazonaPegawaiRonPaysId = function (id) {
        return this.deletePayrollDerazonaPegawaiRonPaysIdResponse(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    PayrollDerazonaPegawaiRonPayService.getPayrollDerazonaPegawaiRonPaysPath = '/payrollDerazona/pegawai_ron_pays';
    PayrollDerazonaPegawaiRonPayService.postPayrollDerazonaPegawaiRonPaysPath = '/payrollDerazona/pegawai_ron_pays';
    PayrollDerazonaPegawaiRonPayService.getPayrollDerazonaPegawaiRonPaysIdPath = '/payrollDerazona/pegawai_ron_pays/{id}';
    PayrollDerazonaPegawaiRonPayService.putPayrollDerazonaPegawaiRonPaysIdPath = '/payrollDerazona/pegawai_ron_pays/{id}';
    PayrollDerazonaPegawaiRonPayService.deletePayrollDerazonaPegawaiRonPaysIdPath = '/payrollDerazona/pegawai_ron_pays/{id}';
    PayrollDerazonaPegawaiRonPayService.ctorParameters = function () { return [
        { type: _api_configuration__WEBPACK_IMPORTED_MODULE_4__["ApiConfiguration"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    PayrollDerazonaPegawaiRonPayService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_configuration__WEBPACK_IMPORTED_MODULE_4__["ApiConfiguration"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PayrollDerazonaPegawaiRonPayService);
    return PayrollDerazonaPegawaiRonPayService;
}(_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"]));



/***/ }),

/***/ "./src/app/sdk/payroll/services/payroll-derazona-pekerjaan.service.ts":
/*!****************************************************************************!*\
  !*** ./src/app/sdk/payroll/services/payroll-derazona-pekerjaan.service.ts ***!
  \****************************************************************************/
/*! exports provided: PayrollDerazonaPekerjaanService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PayrollDerazonaPekerjaanService", function() { return PayrollDerazonaPekerjaanService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base-service */ "./src/app/sdk/payroll/base-service.ts");
/* harmony import */ var _api_configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api-configuration */ "./src/app/sdk/payroll/api-configuration.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");

/* tslint:disable */





var PayrollDerazonaPekerjaanService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](PayrollDerazonaPekerjaanService, _super);
    function PayrollDerazonaPekerjaanService(config, http) {
        return _super.call(this, config, http) || this;
    }
    /**
     * Get all Pekerjaans
     * @param filter PurchaseRequest that should be stored
     * @return successful operation
     */
    PayrollDerazonaPekerjaanService.prototype.getPayrollDerazonaPekerjaansResponse = function (filter) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        if (filter != null)
            __params = __params.set('filter', filter.toString());
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/payrollDerazona/pekerjaans", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Get all Pekerjaans
     * @param filter PurchaseRequest that should be stored
     * @return successful operation
     */
    PayrollDerazonaPekerjaanService.prototype.getPayrollDerazonaPekerjaans = function (filter) {
        return this.getPayrollDerazonaPekerjaansResponse(filter).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * Store Pekerjaan
     * @param body Pekerjaan that should be stored
     * @return successful operation
     */
    PayrollDerazonaPekerjaanService.prototype.postPayrollDerazonaPekerjaansResponse = function (body) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        __body = body;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/payrollDerazona/pekerjaans", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Store Pekerjaan
     * @param body Pekerjaan that should be stored
     * @return successful operation
     */
    PayrollDerazonaPekerjaanService.prototype.postPayrollDerazonaPekerjaans = function (body) {
        return this.postPayrollDerazonaPekerjaansResponse(body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * Get Pekerjaan
     * @param id id of Pekerjaan
     * @return successful operation
     */
    PayrollDerazonaPekerjaanService.prototype.getPayrollDerazonaPekerjaansIdResponse = function (id) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + ("/payrollDerazona/pekerjaans/" + id), __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Get Pekerjaan
     * @param id id of Pekerjaan
     * @return successful operation
     */
    PayrollDerazonaPekerjaanService.prototype.getPayrollDerazonaPekerjaansId = function (id) {
        return this.getPayrollDerazonaPekerjaansIdResponse(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * Update Pekerjaan
     * @param params The `PayrollDerazonaPekerjaanService.PutPayrollDerazonaPekerjaansIdParams` containing the following parameters:
     *
     * - `id`: id of Pekerjaan
     *
     * - `body`: Pekerjaan that should be updated
     *
     * @return successful operation
     */
    PayrollDerazonaPekerjaanService.prototype.putPayrollDerazonaPekerjaansIdResponse = function (params) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        __body = params.body;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('PUT', this.rootUrl + ("/payrollDerazona/pekerjaans/" + params.id), __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Update Pekerjaan
     * @param params The `PayrollDerazonaPekerjaanService.PutPayrollDerazonaPekerjaansIdParams` containing the following parameters:
     *
     * - `id`: id of Pekerjaan
     *
     * - `body`: Pekerjaan that should be updated
     *
     * @return successful operation
     */
    PayrollDerazonaPekerjaanService.prototype.putPayrollDerazonaPekerjaansId = function (params) {
        return this.putPayrollDerazonaPekerjaansIdResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * Delete Pekerjaan
     * @param id id of Pekerjaan
     * @return successful operation
     */
    PayrollDerazonaPekerjaanService.prototype.deletePayrollDerazonaPekerjaansIdResponse = function (id) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('DELETE', this.rootUrl + ("/payrollDerazona/pekerjaans/" + id), __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Delete Pekerjaan
     * @param id id of Pekerjaan
     * @return successful operation
     */
    PayrollDerazonaPekerjaanService.prototype.deletePayrollDerazonaPekerjaansId = function (id) {
        return this.deletePayrollDerazonaPekerjaansIdResponse(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    PayrollDerazonaPekerjaanService.getPayrollDerazonaPekerjaansPath = '/payrollDerazona/pekerjaans';
    PayrollDerazonaPekerjaanService.postPayrollDerazonaPekerjaansPath = '/payrollDerazona/pekerjaans';
    PayrollDerazonaPekerjaanService.getPayrollDerazonaPekerjaansIdPath = '/payrollDerazona/pekerjaans/{id}';
    PayrollDerazonaPekerjaanService.putPayrollDerazonaPekerjaansIdPath = '/payrollDerazona/pekerjaans/{id}';
    PayrollDerazonaPekerjaanService.deletePayrollDerazonaPekerjaansIdPath = '/payrollDerazona/pekerjaans/{id}';
    PayrollDerazonaPekerjaanService.ctorParameters = function () { return [
        { type: _api_configuration__WEBPACK_IMPORTED_MODULE_4__["ApiConfiguration"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    PayrollDerazonaPekerjaanService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_configuration__WEBPACK_IMPORTED_MODULE_4__["ApiConfiguration"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PayrollDerazonaPekerjaanService);
    return PayrollDerazonaPekerjaanService;
}(_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"]));



/***/ }),

/***/ "./src/app/sdk/payroll/services/payroll-derazona-rate-pilot.service.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/sdk/payroll/services/payroll-derazona-rate-pilot.service.ts ***!
  \*****************************************************************************/
/*! exports provided: PayrollDerazonaRatePilotService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PayrollDerazonaRatePilotService", function() { return PayrollDerazonaRatePilotService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base-service */ "./src/app/sdk/payroll/base-service.ts");
/* harmony import */ var _api_configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api-configuration */ "./src/app/sdk/payroll/api-configuration.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");

/* tslint:disable */





var PayrollDerazonaRatePilotService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](PayrollDerazonaRatePilotService, _super);
    function PayrollDerazonaRatePilotService(config, http) {
        return _super.call(this, config, http) || this;
    }
    /**
     * Get all Rate_pilots
     * @param filter PurchaseRequest that should be stored
     * @return successful operation
     */
    PayrollDerazonaRatePilotService.prototype.getPayrollDerazonaRatePilotsResponse = function (filter) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        if (filter != null)
            __params = __params.set('filter', filter.toString());
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/payrollDerazona/rate_pilots", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Get all Rate_pilots
     * @param filter PurchaseRequest that should be stored
     * @return successful operation
     */
    PayrollDerazonaRatePilotService.prototype.getPayrollDerazonaRatePilots = function (filter) {
        return this.getPayrollDerazonaRatePilotsResponse(filter).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * Store Rate_pilot
     * @param body Rate_pilot that should be stored
     * @return successful operation
     */
    PayrollDerazonaRatePilotService.prototype.postPayrollDerazonaRatePilotsResponse = function (body) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        __body = body;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/payrollDerazona/rate_pilots", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Store Rate_pilot
     * @param body Rate_pilot that should be stored
     * @return successful operation
     */
    PayrollDerazonaRatePilotService.prototype.postPayrollDerazonaRatePilots = function (body) {
        return this.postPayrollDerazonaRatePilotsResponse(body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * Get Rate_pilot
     * @param id id of Rate_pilot
     * @return successful operation
     */
    PayrollDerazonaRatePilotService.prototype.getPayrollDerazonaRatePilotsIdResponse = function (id) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + ("/payrollDerazona/rate_pilots/" + id), __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Get Rate_pilot
     * @param id id of Rate_pilot
     * @return successful operation
     */
    PayrollDerazonaRatePilotService.prototype.getPayrollDerazonaRatePilotsId = function (id) {
        return this.getPayrollDerazonaRatePilotsIdResponse(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * Update Rate_pilot
     * @param params The `PayrollDerazonaRatePilotService.PutPayrollDerazonaRatePilotsIdParams` containing the following parameters:
     *
     * - `id`: id of Rate_pilot
     *
     * - `body`: Rate_pilot that should be updated
     *
     * @return successful operation
     */
    PayrollDerazonaRatePilotService.prototype.putPayrollDerazonaRatePilotsIdResponse = function (params) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        __body = params.body;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('PUT', this.rootUrl + ("/payrollDerazona/rate_pilots/" + params.id), __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Update Rate_pilot
     * @param params The `PayrollDerazonaRatePilotService.PutPayrollDerazonaRatePilotsIdParams` containing the following parameters:
     *
     * - `id`: id of Rate_pilot
     *
     * - `body`: Rate_pilot that should be updated
     *
     * @return successful operation
     */
    PayrollDerazonaRatePilotService.prototype.putPayrollDerazonaRatePilotsId = function (params) {
        return this.putPayrollDerazonaRatePilotsIdResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * Delete Rate_pilot
     * @param id id of Rate_pilot
     * @return successful operation
     */
    PayrollDerazonaRatePilotService.prototype.deletePayrollDerazonaRatePilotsIdResponse = function (id) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('DELETE', this.rootUrl + ("/payrollDerazona/rate_pilots/" + id), __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Delete Rate_pilot
     * @param id id of Rate_pilot
     * @return successful operation
     */
    PayrollDerazonaRatePilotService.prototype.deletePayrollDerazonaRatePilotsId = function (id) {
        return this.deletePayrollDerazonaRatePilotsIdResponse(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    PayrollDerazonaRatePilotService.getPayrollDerazonaRatePilotsPath = '/payrollDerazona/rate_pilots';
    PayrollDerazonaRatePilotService.postPayrollDerazonaRatePilotsPath = '/payrollDerazona/rate_pilots';
    PayrollDerazonaRatePilotService.getPayrollDerazonaRatePilotsIdPath = '/payrollDerazona/rate_pilots/{id}';
    PayrollDerazonaRatePilotService.putPayrollDerazonaRatePilotsIdPath = '/payrollDerazona/rate_pilots/{id}';
    PayrollDerazonaRatePilotService.deletePayrollDerazonaRatePilotsIdPath = '/payrollDerazona/rate_pilots/{id}';
    PayrollDerazonaRatePilotService.ctorParameters = function () { return [
        { type: _api_configuration__WEBPACK_IMPORTED_MODULE_4__["ApiConfiguration"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    PayrollDerazonaRatePilotService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_configuration__WEBPACK_IMPORTED_MODULE_4__["ApiConfiguration"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PayrollDerazonaRatePilotService);
    return PayrollDerazonaRatePilotService;
}(_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"]));



/***/ }),

/***/ "./src/app/sdk/payroll/services/payroll-derazona-ron-group-detail.service.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/sdk/payroll/services/payroll-derazona-ron-group-detail.service.ts ***!
  \***********************************************************************************/
/*! exports provided: PayrollDerazonaRonGroupDetailService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PayrollDerazonaRonGroupDetailService", function() { return PayrollDerazonaRonGroupDetailService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base-service */ "./src/app/sdk/payroll/base-service.ts");
/* harmony import */ var _api_configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api-configuration */ "./src/app/sdk/payroll/api-configuration.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");

/* tslint:disable */





var PayrollDerazonaRonGroupDetailService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](PayrollDerazonaRonGroupDetailService, _super);
    function PayrollDerazonaRonGroupDetailService(config, http) {
        return _super.call(this, config, http) || this;
    }
    /**
     * Get all ron_group_details
     * @param filter PurchaseRequest that should be stored
     * @return successful operation
     */
    PayrollDerazonaRonGroupDetailService.prototype.getPayrollDerazonaRonGroupDetailsResponse = function (filter) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        if (filter != null)
            __params = __params.set('filter', filter.toString());
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/payrollDerazona/ron_group_details", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Get all ron_group_details
     * @param filter PurchaseRequest that should be stored
     * @return successful operation
     */
    PayrollDerazonaRonGroupDetailService.prototype.getPayrollDerazonaRonGroupDetails = function (filter) {
        return this.getPayrollDerazonaRonGroupDetailsResponse(filter).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * Store ron_group_detail
     * @param body ron_group_detail that should be stored
     * @return successful operation
     */
    PayrollDerazonaRonGroupDetailService.prototype.postPayrollDerazonaRonGroupDetailsResponse = function (body) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        __body = body;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/payrollDerazona/ron_group_details", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Store ron_group_detail
     * @param body ron_group_detail that should be stored
     * @return successful operation
     */
    PayrollDerazonaRonGroupDetailService.prototype.postPayrollDerazonaRonGroupDetails = function (body) {
        return this.postPayrollDerazonaRonGroupDetailsResponse(body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * Get ron_group_detail
     * @param id id of ron_group_detail
     * @return successful operation
     */
    PayrollDerazonaRonGroupDetailService.prototype.getPayrollDerazonaRonGroupDetailsIdResponse = function (id) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + ("/payrollDerazona/ron_group_details/" + id), __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Get ron_group_detail
     * @param id id of ron_group_detail
     * @return successful operation
     */
    PayrollDerazonaRonGroupDetailService.prototype.getPayrollDerazonaRonGroupDetailsId = function (id) {
        return this.getPayrollDerazonaRonGroupDetailsIdResponse(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * Update ron_group_detail
     * @param params The `PayrollDerazonaRonGroupDetailService.PutPayrollDerazonaRonGroupDetailsIdParams` containing the following parameters:
     *
     * - `id`: id of ron_group_detail
     *
     * - `body`: ron_group_detail that should be updated
     *
     * @return successful operation
     */
    PayrollDerazonaRonGroupDetailService.prototype.putPayrollDerazonaRonGroupDetailsIdResponse = function (params) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        __body = params.body;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('PUT', this.rootUrl + ("/payrollDerazona/ron_group_details/" + params.id), __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Update ron_group_detail
     * @param params The `PayrollDerazonaRonGroupDetailService.PutPayrollDerazonaRonGroupDetailsIdParams` containing the following parameters:
     *
     * - `id`: id of ron_group_detail
     *
     * - `body`: ron_group_detail that should be updated
     *
     * @return successful operation
     */
    PayrollDerazonaRonGroupDetailService.prototype.putPayrollDerazonaRonGroupDetailsId = function (params) {
        return this.putPayrollDerazonaRonGroupDetailsIdResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * Delete ron_group_detail
     * @param id id of ron_group_detail
     * @return successful operation
     */
    PayrollDerazonaRonGroupDetailService.prototype.deletePayrollDerazonaRonGroupDetailsIdResponse = function (id) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('DELETE', this.rootUrl + ("/payrollDerazona/ron_group_details/" + id), __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Delete ron_group_detail
     * @param id id of ron_group_detail
     * @return successful operation
     */
    PayrollDerazonaRonGroupDetailService.prototype.deletePayrollDerazonaRonGroupDetailsId = function (id) {
        return this.deletePayrollDerazonaRonGroupDetailsIdResponse(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    PayrollDerazonaRonGroupDetailService.getPayrollDerazonaRonGroupDetailsPath = '/payrollDerazona/ron_group_details';
    PayrollDerazonaRonGroupDetailService.postPayrollDerazonaRonGroupDetailsPath = '/payrollDerazona/ron_group_details';
    PayrollDerazonaRonGroupDetailService.getPayrollDerazonaRonGroupDetailsIdPath = '/payrollDerazona/ron_group_details/{id}';
    PayrollDerazonaRonGroupDetailService.putPayrollDerazonaRonGroupDetailsIdPath = '/payrollDerazona/ron_group_details/{id}';
    PayrollDerazonaRonGroupDetailService.deletePayrollDerazonaRonGroupDetailsIdPath = '/payrollDerazona/ron_group_details/{id}';
    PayrollDerazonaRonGroupDetailService.ctorParameters = function () { return [
        { type: _api_configuration__WEBPACK_IMPORTED_MODULE_4__["ApiConfiguration"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    PayrollDerazonaRonGroupDetailService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_configuration__WEBPACK_IMPORTED_MODULE_4__["ApiConfiguration"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PayrollDerazonaRonGroupDetailService);
    return PayrollDerazonaRonGroupDetailService;
}(_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"]));



/***/ }),

/***/ "./src/app/sdk/payroll/services/payroll-derazona-ron-group.service.ts":
/*!****************************************************************************!*\
  !*** ./src/app/sdk/payroll/services/payroll-derazona-ron-group.service.ts ***!
  \****************************************************************************/
/*! exports provided: PayrollDerazonaRonGroupService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PayrollDerazonaRonGroupService", function() { return PayrollDerazonaRonGroupService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base-service */ "./src/app/sdk/payroll/base-service.ts");
/* harmony import */ var _api_configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api-configuration */ "./src/app/sdk/payroll/api-configuration.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");

/* tslint:disable */





var PayrollDerazonaRonGroupService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](PayrollDerazonaRonGroupService, _super);
    function PayrollDerazonaRonGroupService(config, http) {
        return _super.call(this, config, http) || this;
    }
    /**
     * Get all Ron_groups
     * @param filter PurchaseRequest that should be stored
     * @return successful operation
     */
    PayrollDerazonaRonGroupService.prototype.getPayrollDerazonaRonGroupsResponse = function (filter) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        if (filter != null)
            __params = __params.set('filter', filter.toString());
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/payrollDerazona/ron_groups", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Get all Ron_groups
     * @param filter PurchaseRequest that should be stored
     * @return successful operation
     */
    PayrollDerazonaRonGroupService.prototype.getPayrollDerazonaRonGroups = function (filter) {
        return this.getPayrollDerazonaRonGroupsResponse(filter).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * Store Ron_group
     * @param body Ron_group that should be stored
     * @return successful operation
     */
    PayrollDerazonaRonGroupService.prototype.postPayrollDerazonaRonGroupsResponse = function (body) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        __body = body;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/payrollDerazona/ron_groups", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Store Ron_group
     * @param body Ron_group that should be stored
     * @return successful operation
     */
    PayrollDerazonaRonGroupService.prototype.postPayrollDerazonaRonGroups = function (body) {
        return this.postPayrollDerazonaRonGroupsResponse(body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * Get Ron_group
     * @param id id of Ron_group
     * @return successful operation
     */
    PayrollDerazonaRonGroupService.prototype.getPayrollDerazonaRonGroupsIdResponse = function (id) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + ("/payrollDerazona/ron_groups/" + id), __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Get Ron_group
     * @param id id of Ron_group
     * @return successful operation
     */
    PayrollDerazonaRonGroupService.prototype.getPayrollDerazonaRonGroupsId = function (id) {
        return this.getPayrollDerazonaRonGroupsIdResponse(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * Update Ron_group
     * @param params The `PayrollDerazonaRonGroupService.PutPayrollDerazonaRonGroupsIdParams` containing the following parameters:
     *
     * - `id`: id of Ron_group
     *
     * - `body`: Ron_group that should be updated
     *
     * @return successful operation
     */
    PayrollDerazonaRonGroupService.prototype.putPayrollDerazonaRonGroupsIdResponse = function (params) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        __body = params.body;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('PUT', this.rootUrl + ("/payrollDerazona/ron_groups/" + params.id), __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Update Ron_group
     * @param params The `PayrollDerazonaRonGroupService.PutPayrollDerazonaRonGroupsIdParams` containing the following parameters:
     *
     * - `id`: id of Ron_group
     *
     * - `body`: Ron_group that should be updated
     *
     * @return successful operation
     */
    PayrollDerazonaRonGroupService.prototype.putPayrollDerazonaRonGroupsId = function (params) {
        return this.putPayrollDerazonaRonGroupsIdResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * Delete Ron_group
     * @param id id of Ron_group
     * @return successful operation
     */
    PayrollDerazonaRonGroupService.prototype.deletePayrollDerazonaRonGroupsIdResponse = function (id) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('DELETE', this.rootUrl + ("/payrollDerazona/ron_groups/" + id), __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Delete Ron_group
     * @param id id of Ron_group
     * @return successful operation
     */
    PayrollDerazonaRonGroupService.prototype.deletePayrollDerazonaRonGroupsId = function (id) {
        return this.deletePayrollDerazonaRonGroupsIdResponse(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    PayrollDerazonaRonGroupService.getPayrollDerazonaRonGroupsPath = '/payrollDerazona/ron_groups';
    PayrollDerazonaRonGroupService.postPayrollDerazonaRonGroupsPath = '/payrollDerazona/ron_groups';
    PayrollDerazonaRonGroupService.getPayrollDerazonaRonGroupsIdPath = '/payrollDerazona/ron_groups/{id}';
    PayrollDerazonaRonGroupService.putPayrollDerazonaRonGroupsIdPath = '/payrollDerazona/ron_groups/{id}';
    PayrollDerazonaRonGroupService.deletePayrollDerazonaRonGroupsIdPath = '/payrollDerazona/ron_groups/{id}';
    PayrollDerazonaRonGroupService.ctorParameters = function () { return [
        { type: _api_configuration__WEBPACK_IMPORTED_MODULE_4__["ApiConfiguration"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    PayrollDerazonaRonGroupService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_configuration__WEBPACK_IMPORTED_MODULE_4__["ApiConfiguration"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PayrollDerazonaRonGroupService);
    return PayrollDerazonaRonGroupService;
}(_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"]));



/***/ }),

/***/ "./src/app/sdk/payroll/services/payroll-kehadiran.service.ts":
/*!*******************************************************************!*\
  !*** ./src/app/sdk/payroll/services/payroll-kehadiran.service.ts ***!
  \*******************************************************************/
/*! exports provided: PayrollKehadiranService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PayrollKehadiranService", function() { return PayrollKehadiranService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base-service */ "./src/app/sdk/payroll/base-service.ts");
/* harmony import */ var _api_configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api-configuration */ "./src/app/sdk/payroll/api-configuration.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");

/* tslint:disable */





var PayrollKehadiranService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](PayrollKehadiranService, _super);
    function PayrollKehadiranService(config, http) {
        return _super.call(this, config, http) || this;
    }
    /**
     * Get all Kehadirans
     * @param filter PurchaseRequest that should be stored
     * @return successful operation
     */
    PayrollKehadiranService.prototype.getPayrollKehadiransResponse = function (filter) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        if (filter != null)
            __params = __params.set('filter', filter.toString());
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/payroll/kehadirans", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Get all Kehadirans
     * @param filter PurchaseRequest that should be stored
     * @return successful operation
     */
    PayrollKehadiranService.prototype.getPayrollKehadirans = function (filter) {
        return this.getPayrollKehadiransResponse(filter).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * Store Kehadiran
     * @param body Kehadiran that should be stored
     * @return successful operation
     */
    PayrollKehadiranService.prototype.postPayrollKehadiransResponse = function (body) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        __body = body;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/payroll/kehadirans", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Store Kehadiran
     * @param body Kehadiran that should be stored
     * @return successful operation
     */
    PayrollKehadiranService.prototype.postPayrollKehadirans = function (body) {
        return this.postPayrollKehadiransResponse(body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * Get Kehadiran
     * @param id id of Kehadiran
     * @return successful operation
     */
    PayrollKehadiranService.prototype.getPayrollKehadiransIdResponse = function (id) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + ("/payroll/kehadirans/" + id), __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Get Kehadiran
     * @param id id of Kehadiran
     * @return successful operation
     */
    PayrollKehadiranService.prototype.getPayrollKehadiransId = function (id) {
        return this.getPayrollKehadiransIdResponse(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * Update Kehadiran
     * @param params The `PayrollKehadiranService.PutPayrollKehadiransIdParams` containing the following parameters:
     *
     * - `id`: id of Kehadiran
     *
     * - `body`: Kehadiran that should be updated
     *
     * @return successful operation
     */
    PayrollKehadiranService.prototype.putPayrollKehadiransIdResponse = function (params) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        __body = params.body;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('PUT', this.rootUrl + ("/payroll/kehadirans/" + params.id), __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Update Kehadiran
     * @param params The `PayrollKehadiranService.PutPayrollKehadiransIdParams` containing the following parameters:
     *
     * - `id`: id of Kehadiran
     *
     * - `body`: Kehadiran that should be updated
     *
     * @return successful operation
     */
    PayrollKehadiranService.prototype.putPayrollKehadiransId = function (params) {
        return this.putPayrollKehadiransIdResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * Delete Kehadiran
     * @param id id of Kehadiran
     * @return successful operation
     */
    PayrollKehadiranService.prototype.deletePayrollKehadiransIdResponse = function (id) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('DELETE', this.rootUrl + ("/payroll/kehadirans/" + id), __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Delete Kehadiran
     * @param id id of Kehadiran
     * @return successful operation
     */
    PayrollKehadiranService.prototype.deletePayrollKehadiransId = function (id) {
        return this.deletePayrollKehadiransIdResponse(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    PayrollKehadiranService.getPayrollKehadiransPath = '/payroll/kehadirans';
    PayrollKehadiranService.postPayrollKehadiransPath = '/payroll/kehadirans';
    PayrollKehadiranService.getPayrollKehadiransIdPath = '/payroll/kehadirans/{id}';
    PayrollKehadiranService.putPayrollKehadiransIdPath = '/payroll/kehadirans/{id}';
    PayrollKehadiranService.deletePayrollKehadiransIdPath = '/payroll/kehadirans/{id}';
    PayrollKehadiranService.ctorParameters = function () { return [
        { type: _api_configuration__WEBPACK_IMPORTED_MODULE_4__["ApiConfiguration"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    PayrollKehadiranService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_configuration__WEBPACK_IMPORTED_MODULE_4__["ApiConfiguration"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PayrollKehadiranService);
    return PayrollKehadiranService;
}(_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"]));



/***/ }),

/***/ "./src/app/sdk/payroll/services/payroll-kelompok-komponen.service.ts":
/*!***************************************************************************!*\
  !*** ./src/app/sdk/payroll/services/payroll-kelompok-komponen.service.ts ***!
  \***************************************************************************/
/*! exports provided: PayrollKelompokKomponenService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PayrollKelompokKomponenService", function() { return PayrollKelompokKomponenService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base-service */ "./src/app/sdk/payroll/base-service.ts");
/* harmony import */ var _api_configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api-configuration */ "./src/app/sdk/payroll/api-configuration.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");

/* tslint:disable */





var PayrollKelompokKomponenService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](PayrollKelompokKomponenService, _super);
    function PayrollKelompokKomponenService(config, http) {
        return _super.call(this, config, http) || this;
    }
    /**
     * Get all Kelompok_komponens
     * @param filter PurchaseRequest that should be stored
     * @return successful operation
     */
    PayrollKelompokKomponenService.prototype.getPayrollKelompokKomponensResponse = function (filter) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        if (filter != null)
            __params = __params.set('filter', filter.toString());
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/payroll/kelompok_komponens", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Get all Kelompok_komponens
     * @param filter PurchaseRequest that should be stored
     * @return successful operation
     */
    PayrollKelompokKomponenService.prototype.getPayrollKelompokKomponens = function (filter) {
        return this.getPayrollKelompokKomponensResponse(filter).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * Store Kelompok_komponen
     * @param body Kelompok_komponen that should be stored
     * @return successful operation
     */
    PayrollKelompokKomponenService.prototype.postPayrollKelompokKomponensResponse = function (body) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        __body = body;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/payroll/kelompok_komponens", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Store Kelompok_komponen
     * @param body Kelompok_komponen that should be stored
     * @return successful operation
     */
    PayrollKelompokKomponenService.prototype.postPayrollKelompokKomponens = function (body) {
        return this.postPayrollKelompokKomponensResponse(body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * Get Kelompok_komponen
     * @param id id of Kelompok_komponen
     * @return successful operation
     */
    PayrollKelompokKomponenService.prototype.getPayrollKelompokKomponensIdResponse = function (id) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + ("/payroll/kelompok_komponens/" + id), __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Get Kelompok_komponen
     * @param id id of Kelompok_komponen
     * @return successful operation
     */
    PayrollKelompokKomponenService.prototype.getPayrollKelompokKomponensId = function (id) {
        return this.getPayrollKelompokKomponensIdResponse(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * Update Kelompok_komponen
     * @param params The `PayrollKelompokKomponenService.PutPayrollKelompokKomponensIdParams` containing the following parameters:
     *
     * - `id`: id of Kelompok_komponen
     *
     * - `body`: Kelompok_komponen that should be updated
     *
     * @return successful operation
     */
    PayrollKelompokKomponenService.prototype.putPayrollKelompokKomponensIdResponse = function (params) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        __body = params.body;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('PUT', this.rootUrl + ("/payroll/kelompok_komponens/" + params.id), __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Update Kelompok_komponen
     * @param params The `PayrollKelompokKomponenService.PutPayrollKelompokKomponensIdParams` containing the following parameters:
     *
     * - `id`: id of Kelompok_komponen
     *
     * - `body`: Kelompok_komponen that should be updated
     *
     * @return successful operation
     */
    PayrollKelompokKomponenService.prototype.putPayrollKelompokKomponensId = function (params) {
        return this.putPayrollKelompokKomponensIdResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * Delete Kelompok_komponen
     * @param id id of Kelompok_komponen
     * @return successful operation
     */
    PayrollKelompokKomponenService.prototype.deletePayrollKelompokKomponensIdResponse = function (id) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('DELETE', this.rootUrl + ("/payroll/kelompok_komponens/" + id), __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Delete Kelompok_komponen
     * @param id id of Kelompok_komponen
     * @return successful operation
     */
    PayrollKelompokKomponenService.prototype.deletePayrollKelompokKomponensId = function (id) {
        return this.deletePayrollKelompokKomponensIdResponse(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    PayrollKelompokKomponenService.getPayrollKelompokKomponensPath = '/payroll/kelompok_komponens';
    PayrollKelompokKomponenService.postPayrollKelompokKomponensPath = '/payroll/kelompok_komponens';
    PayrollKelompokKomponenService.getPayrollKelompokKomponensIdPath = '/payroll/kelompok_komponens/{id}';
    PayrollKelompokKomponenService.putPayrollKelompokKomponensIdPath = '/payroll/kelompok_komponens/{id}';
    PayrollKelompokKomponenService.deletePayrollKelompokKomponensIdPath = '/payroll/kelompok_komponens/{id}';
    PayrollKelompokKomponenService.ctorParameters = function () { return [
        { type: _api_configuration__WEBPACK_IMPORTED_MODULE_4__["ApiConfiguration"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    PayrollKelompokKomponenService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_configuration__WEBPACK_IMPORTED_MODULE_4__["ApiConfiguration"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PayrollKelompokKomponenService);
    return PayrollKelompokKomponenService;
}(_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"]));



/***/ }),

/***/ "./src/app/sdk/payroll/services/payroll-komponen-perusahaan.service.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/sdk/payroll/services/payroll-komponen-perusahaan.service.ts ***!
  \*****************************************************************************/
/*! exports provided: PayrollKomponenPerusahaanService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PayrollKomponenPerusahaanService", function() { return PayrollKomponenPerusahaanService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base-service */ "./src/app/sdk/payroll/base-service.ts");
/* harmony import */ var _api_configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api-configuration */ "./src/app/sdk/payroll/api-configuration.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");

/* tslint:disable */





var PayrollKomponenPerusahaanService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](PayrollKomponenPerusahaanService, _super);
    function PayrollKomponenPerusahaanService(config, http) {
        return _super.call(this, config, http) || this;
    }
    /**
     * Get all Komponen_perusahaans
     * @param filter PurchaseRequest that should be stored
     * @return successful operation
     */
    PayrollKomponenPerusahaanService.prototype.getPayrollKomponenPerusahaansResponse = function (filter) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        if (filter != null)
            __params = __params.set('filter', filter.toString());
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/payroll/komponen_perusahaans", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Get all Komponen_perusahaans
     * @param filter PurchaseRequest that should be stored
     * @return successful operation
     */
    PayrollKomponenPerusahaanService.prototype.getPayrollKomponenPerusahaans = function (filter) {
        return this.getPayrollKomponenPerusahaansResponse(filter).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * Store Komponen_perusahaan
     * @param body Komponen_perusahaan that should be stored
     * @return successful operation
     */
    PayrollKomponenPerusahaanService.prototype.postPayrollKomponenPerusahaansResponse = function (body) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        __body = body;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/payroll/komponen_perusahaans", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Store Komponen_perusahaan
     * @param body Komponen_perusahaan that should be stored
     * @return successful operation
     */
    PayrollKomponenPerusahaanService.prototype.postPayrollKomponenPerusahaans = function (body) {
        return this.postPayrollKomponenPerusahaansResponse(body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * Get Komponen_perusahaan
     * @param id id of Komponen_perusahaan
     * @return successful operation
     */
    PayrollKomponenPerusahaanService.prototype.getPayrollKomponenPerusahaansIdResponse = function (id) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + ("/payroll/komponen_perusahaans/" + id), __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Get Komponen_perusahaan
     * @param id id of Komponen_perusahaan
     * @return successful operation
     */
    PayrollKomponenPerusahaanService.prototype.getPayrollKomponenPerusahaansId = function (id) {
        return this.getPayrollKomponenPerusahaansIdResponse(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * Update Komponen_perusahaan
     * @param params The `PayrollKomponenPerusahaanService.PutPayrollKomponenPerusahaansIdParams` containing the following parameters:
     *
     * - `id`: id of Komponen_perusahaan
     *
     * - `body`: Komponen_perusahaan that should be updated
     *
     * @return successful operation
     */
    PayrollKomponenPerusahaanService.prototype.putPayrollKomponenPerusahaansIdResponse = function (params) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        __body = params.body;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('PUT', this.rootUrl + ("/payroll/komponen_perusahaans/" + params.id), __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Update Komponen_perusahaan
     * @param params The `PayrollKomponenPerusahaanService.PutPayrollKomponenPerusahaansIdParams` containing the following parameters:
     *
     * - `id`: id of Komponen_perusahaan
     *
     * - `body`: Komponen_perusahaan that should be updated
     *
     * @return successful operation
     */
    PayrollKomponenPerusahaanService.prototype.putPayrollKomponenPerusahaansId = function (params) {
        return this.putPayrollKomponenPerusahaansIdResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * Delete Komponen_perusahaan
     * @param id id of Komponen_perusahaan
     * @return successful operation
     */
    PayrollKomponenPerusahaanService.prototype.deletePayrollKomponenPerusahaansIdResponse = function (id) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('DELETE', this.rootUrl + ("/payroll/komponen_perusahaans/" + id), __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Delete Komponen_perusahaan
     * @param id id of Komponen_perusahaan
     * @return successful operation
     */
    PayrollKomponenPerusahaanService.prototype.deletePayrollKomponenPerusahaansId = function (id) {
        return this.deletePayrollKomponenPerusahaansIdResponse(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    PayrollKomponenPerusahaanService.getPayrollKomponenPerusahaansPath = '/payroll/komponen_perusahaans';
    PayrollKomponenPerusahaanService.postPayrollKomponenPerusahaansPath = '/payroll/komponen_perusahaans';
    PayrollKomponenPerusahaanService.getPayrollKomponenPerusahaansIdPath = '/payroll/komponen_perusahaans/{id}';
    PayrollKomponenPerusahaanService.putPayrollKomponenPerusahaansIdPath = '/payroll/komponen_perusahaans/{id}';
    PayrollKomponenPerusahaanService.deletePayrollKomponenPerusahaansIdPath = '/payroll/komponen_perusahaans/{id}';
    PayrollKomponenPerusahaanService.ctorParameters = function () { return [
        { type: _api_configuration__WEBPACK_IMPORTED_MODULE_4__["ApiConfiguration"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    PayrollKomponenPerusahaanService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_configuration__WEBPACK_IMPORTED_MODULE_4__["ApiConfiguration"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PayrollKomponenPerusahaanService);
    return PayrollKomponenPerusahaanService;
}(_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"]));



/***/ }),

/***/ "./src/app/sdk/payroll/services/payroll-payroll-rekap-bulanan.service.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/sdk/payroll/services/payroll-payroll-rekap-bulanan.service.ts ***!
  \*******************************************************************************/
/*! exports provided: PayrollPayrollRekapBulananService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PayrollPayrollRekapBulananService", function() { return PayrollPayrollRekapBulananService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base-service */ "./src/app/sdk/payroll/base-service.ts");
/* harmony import */ var _api_configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api-configuration */ "./src/app/sdk/payroll/api-configuration.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");

/* tslint:disable */





var PayrollPayrollRekapBulananService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](PayrollPayrollRekapBulananService, _super);
    function PayrollPayrollRekapBulananService(config, http) {
        return _super.call(this, config, http) || this;
    }
    /**
     * Get all Payroll_rekap_bulanans
     * @param filter PurchaseRequest that should be stored
     * @return successful operation
     */
    PayrollPayrollRekapBulananService.prototype.getPayrollPayrollRekapBulanansResponse = function (filter) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        if (filter != null)
            __params = __params.set('filter', filter.toString());
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/payroll/payroll_rekap_bulanans", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Get all Payroll_rekap_bulanans
     * @param filter PurchaseRequest that should be stored
     * @return successful operation
     */
    PayrollPayrollRekapBulananService.prototype.getPayrollPayrollRekapBulanans = function (filter) {
        return this.getPayrollPayrollRekapBulanansResponse(filter).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * Store Payroll_rekap_bulanan
     * @param body Payroll_rekap_bulanan that should be stored
     * @return successful operation
     */
    PayrollPayrollRekapBulananService.prototype.postPayrollPayrollRekapBulanansResponse = function (body) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        __body = body;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/payroll/payroll_rekap_bulanans", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Store Payroll_rekap_bulanan
     * @param body Payroll_rekap_bulanan that should be stored
     * @return successful operation
     */
    PayrollPayrollRekapBulananService.prototype.postPayrollPayrollRekapBulanans = function (body) {
        return this.postPayrollPayrollRekapBulanansResponse(body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * Get Payroll_rekap_bulanan
     * @param id id of Payroll_rekap_bulanan
     * @return successful operation
     */
    PayrollPayrollRekapBulananService.prototype.getPayrollPayrollRekapBulanansIdResponse = function (id) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + ("/payroll/payroll_rekap_bulanans/" + id), __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Get Payroll_rekap_bulanan
     * @param id id of Payroll_rekap_bulanan
     * @return successful operation
     */
    PayrollPayrollRekapBulananService.prototype.getPayrollPayrollRekapBulanansId = function (id) {
        return this.getPayrollPayrollRekapBulanansIdResponse(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * Update Payroll_rekap_bulanan
     * @param params The `PayrollPayrollRekapBulananService.PutPayrollPayrollRekapBulanansIdParams` containing the following parameters:
     *
     * - `id`: id of Payroll_rekap_bulanan
     *
     * - `body`: Payroll_rekap_bulanan that should be updated
     *
     * @return successful operation
     */
    PayrollPayrollRekapBulananService.prototype.putPayrollPayrollRekapBulanansIdResponse = function (params) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        __body = params.body;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('PUT', this.rootUrl + ("/payroll/payroll_rekap_bulanans/" + params.id), __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Update Payroll_rekap_bulanan
     * @param params The `PayrollPayrollRekapBulananService.PutPayrollPayrollRekapBulanansIdParams` containing the following parameters:
     *
     * - `id`: id of Payroll_rekap_bulanan
     *
     * - `body`: Payroll_rekap_bulanan that should be updated
     *
     * @return successful operation
     */
    PayrollPayrollRekapBulananService.prototype.putPayrollPayrollRekapBulanansId = function (params) {
        return this.putPayrollPayrollRekapBulanansIdResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * Delete Payroll_rekap_bulanan
     * @param id id of Payroll_rekap_bulanan
     * @return successful operation
     */
    PayrollPayrollRekapBulananService.prototype.deletePayrollPayrollRekapBulanansIdResponse = function (id) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('DELETE', this.rootUrl + ("/payroll/payroll_rekap_bulanans/" + id), __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Delete Payroll_rekap_bulanan
     * @param id id of Payroll_rekap_bulanan
     * @return successful operation
     */
    PayrollPayrollRekapBulananService.prototype.deletePayrollPayrollRekapBulanansId = function (id) {
        return this.deletePayrollPayrollRekapBulanansIdResponse(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    PayrollPayrollRekapBulananService.getPayrollPayrollRekapBulanansPath = '/payroll/payroll_rekap_bulanans';
    PayrollPayrollRekapBulananService.postPayrollPayrollRekapBulanansPath = '/payroll/payroll_rekap_bulanans';
    PayrollPayrollRekapBulananService.getPayrollPayrollRekapBulanansIdPath = '/payroll/payroll_rekap_bulanans/{id}';
    PayrollPayrollRekapBulananService.putPayrollPayrollRekapBulanansIdPath = '/payroll/payroll_rekap_bulanans/{id}';
    PayrollPayrollRekapBulananService.deletePayrollPayrollRekapBulanansIdPath = '/payroll/payroll_rekap_bulanans/{id}';
    PayrollPayrollRekapBulananService.ctorParameters = function () { return [
        { type: _api_configuration__WEBPACK_IMPORTED_MODULE_4__["ApiConfiguration"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    PayrollPayrollRekapBulananService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_configuration__WEBPACK_IMPORTED_MODULE_4__["ApiConfiguration"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PayrollPayrollRekapBulananService);
    return PayrollPayrollRekapBulananService;
}(_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"]));



/***/ }),

/***/ "./src/app/sdk/payroll/services/payroll-payroll-rekap.service.ts":
/*!***********************************************************************!*\
  !*** ./src/app/sdk/payroll/services/payroll-payroll-rekap.service.ts ***!
  \***********************************************************************/
/*! exports provided: PayrollPayrollRekapService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PayrollPayrollRekapService", function() { return PayrollPayrollRekapService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base-service */ "./src/app/sdk/payroll/base-service.ts");
/* harmony import */ var _api_configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api-configuration */ "./src/app/sdk/payroll/api-configuration.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");

/* tslint:disable */





var PayrollPayrollRekapService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](PayrollPayrollRekapService, _super);
    function PayrollPayrollRekapService(config, http) {
        return _super.call(this, config, http) || this;
    }
    /**
     * Get all Payroll_rekaps
     * @param filter PurchaseRequest that should be stored
     * @return successful operation
     */
    PayrollPayrollRekapService.prototype.getPayrollPayrollRekapsResponse = function (filter) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        if (filter != null)
            __params = __params.set('filter', filter.toString());
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/payroll/payroll_rekaps", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Get all Payroll_rekaps
     * @param filter PurchaseRequest that should be stored
     * @return successful operation
     */
    PayrollPayrollRekapService.prototype.getPayrollPayrollRekaps = function (filter) {
        return this.getPayrollPayrollRekapsResponse(filter).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * Store Payroll_rekap
     * @param body Payroll_rekap that should be stored
     * @return successful operation
     */
    PayrollPayrollRekapService.prototype.postPayrollPayrollRekapsResponse = function (body) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        __body = body;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/payroll/payroll_rekaps", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Store Payroll_rekap
     * @param body Payroll_rekap that should be stored
     * @return successful operation
     */
    PayrollPayrollRekapService.prototype.postPayrollPayrollRekaps = function (body) {
        return this.postPayrollPayrollRekapsResponse(body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * Get Payroll_rekap
     * @param id id of Payroll_rekap
     * @return successful operation
     */
    PayrollPayrollRekapService.prototype.getPayrollPayrollRekapsIdResponse = function (id) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + ("/payroll/payroll_rekaps/" + id), __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Get Payroll_rekap
     * @param id id of Payroll_rekap
     * @return successful operation
     */
    PayrollPayrollRekapService.prototype.getPayrollPayrollRekapsId = function (id) {
        return this.getPayrollPayrollRekapsIdResponse(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * Update Payroll_rekap
     * @param params The `PayrollPayrollRekapService.PutPayrollPayrollRekapsIdParams` containing the following parameters:
     *
     * - `id`: id of Payroll_rekap
     *
     * - `body`: Payroll_rekap that should be updated
     *
     * @return successful operation
     */
    PayrollPayrollRekapService.prototype.putPayrollPayrollRekapsIdResponse = function (params) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        __body = params.body;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('PUT', this.rootUrl + ("/payroll/payroll_rekaps/" + params.id), __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Update Payroll_rekap
     * @param params The `PayrollPayrollRekapService.PutPayrollPayrollRekapsIdParams` containing the following parameters:
     *
     * - `id`: id of Payroll_rekap
     *
     * - `body`: Payroll_rekap that should be updated
     *
     * @return successful operation
     */
    PayrollPayrollRekapService.prototype.putPayrollPayrollRekapsId = function (params) {
        return this.putPayrollPayrollRekapsIdResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * Delete Payroll_rekap
     * @param id id of Payroll_rekap
     * @return successful operation
     */
    PayrollPayrollRekapService.prototype.deletePayrollPayrollRekapsIdResponse = function (id) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('DELETE', this.rootUrl + ("/payroll/payroll_rekaps/" + id), __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Delete Payroll_rekap
     * @param id id of Payroll_rekap
     * @return successful operation
     */
    PayrollPayrollRekapService.prototype.deletePayrollPayrollRekapsId = function (id) {
        return this.deletePayrollPayrollRekapsIdResponse(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    PayrollPayrollRekapService.getPayrollPayrollRekapsPath = '/payroll/payroll_rekaps';
    PayrollPayrollRekapService.postPayrollPayrollRekapsPath = '/payroll/payroll_rekaps';
    PayrollPayrollRekapService.getPayrollPayrollRekapsIdPath = '/payroll/payroll_rekaps/{id}';
    PayrollPayrollRekapService.putPayrollPayrollRekapsIdPath = '/payroll/payroll_rekaps/{id}';
    PayrollPayrollRekapService.deletePayrollPayrollRekapsIdPath = '/payroll/payroll_rekaps/{id}';
    PayrollPayrollRekapService.ctorParameters = function () { return [
        { type: _api_configuration__WEBPACK_IMPORTED_MODULE_4__["ApiConfiguration"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    PayrollPayrollRekapService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_configuration__WEBPACK_IMPORTED_MODULE_4__["ApiConfiguration"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PayrollPayrollRekapService);
    return PayrollPayrollRekapService;
}(_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"]));



/***/ }),

/***/ "./src/app/sdk/payroll/services/payroll-pegawai-bonus.service.ts":
/*!***********************************************************************!*\
  !*** ./src/app/sdk/payroll/services/payroll-pegawai-bonus.service.ts ***!
  \***********************************************************************/
/*! exports provided: PayrollPegawaiBonusService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PayrollPegawaiBonusService", function() { return PayrollPegawaiBonusService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base-service */ "./src/app/sdk/payroll/base-service.ts");
/* harmony import */ var _api_configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api-configuration */ "./src/app/sdk/payroll/api-configuration.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");

/* tslint:disable */





var PayrollPegawaiBonusService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](PayrollPegawaiBonusService, _super);
    function PayrollPegawaiBonusService(config, http) {
        return _super.call(this, config, http) || this;
    }
    /**
     * Get all Pegawai_bonuses
     * @param filter PurchaseRequest that should be stored
     * @return successful operation
     */
    PayrollPegawaiBonusService.prototype.getPayrollPegawaiBonusesResponse = function (filter) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        if (filter != null)
            __params = __params.set('filter', filter.toString());
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/payroll/pegawai_bonuses", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Get all Pegawai_bonuses
     * @param filter PurchaseRequest that should be stored
     * @return successful operation
     */
    PayrollPegawaiBonusService.prototype.getPayrollPegawaiBonuses = function (filter) {
        return this.getPayrollPegawaiBonusesResponse(filter).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * Store Pegawai_bonus
     * @param body Pegawai_bonus that should be stored
     * @return successful operation
     */
    PayrollPegawaiBonusService.prototype.postPayrollPegawaiBonusesResponse = function (body) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        __body = body;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/payroll/pegawai_bonuses", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Store Pegawai_bonus
     * @param body Pegawai_bonus that should be stored
     * @return successful operation
     */
    PayrollPegawaiBonusService.prototype.postPayrollPegawaiBonuses = function (body) {
        return this.postPayrollPegawaiBonusesResponse(body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * Get Pegawai_bonus
     * @param id id of Pegawai_bonus
     * @return successful operation
     */
    PayrollPegawaiBonusService.prototype.getPayrollPegawaiBonusesIdResponse = function (id) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + ("/payroll/pegawai_bonuses/" + id), __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Get Pegawai_bonus
     * @param id id of Pegawai_bonus
     * @return successful operation
     */
    PayrollPegawaiBonusService.prototype.getPayrollPegawaiBonusesId = function (id) {
        return this.getPayrollPegawaiBonusesIdResponse(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * Update Pegawai_bonus
     * @param params The `PayrollPegawaiBonusService.PutPayrollPegawaiBonusesIdParams` containing the following parameters:
     *
     * - `id`: id of Pegawai_bonus
     *
     * - `body`: Pegawai_bonus that should be updated
     *
     * @return successful operation
     */
    PayrollPegawaiBonusService.prototype.putPayrollPegawaiBonusesIdResponse = function (params) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        __body = params.body;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('PUT', this.rootUrl + ("/payroll/pegawai_bonuses/" + params.id), __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Update Pegawai_bonus
     * @param params The `PayrollPegawaiBonusService.PutPayrollPegawaiBonusesIdParams` containing the following parameters:
     *
     * - `id`: id of Pegawai_bonus
     *
     * - `body`: Pegawai_bonus that should be updated
     *
     * @return successful operation
     */
    PayrollPegawaiBonusService.prototype.putPayrollPegawaiBonusesId = function (params) {
        return this.putPayrollPegawaiBonusesIdResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * Delete Pegawai_bonus
     * @param id id of Pegawai_bonus
     * @return successful operation
     */
    PayrollPegawaiBonusService.prototype.deletePayrollPegawaiBonusesIdResponse = function (id) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('DELETE', this.rootUrl + ("/payroll/pegawai_bonuses/" + id), __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Delete Pegawai_bonus
     * @param id id of Pegawai_bonus
     * @return successful operation
     */
    PayrollPegawaiBonusService.prototype.deletePayrollPegawaiBonusesId = function (id) {
        return this.deletePayrollPegawaiBonusesIdResponse(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    PayrollPegawaiBonusService.getPayrollPegawaiBonusesPath = '/payroll/pegawai_bonuses';
    PayrollPegawaiBonusService.postPayrollPegawaiBonusesPath = '/payroll/pegawai_bonuses';
    PayrollPegawaiBonusService.getPayrollPegawaiBonusesIdPath = '/payroll/pegawai_bonuses/{id}';
    PayrollPegawaiBonusService.putPayrollPegawaiBonusesIdPath = '/payroll/pegawai_bonuses/{id}';
    PayrollPegawaiBonusService.deletePayrollPegawaiBonusesIdPath = '/payroll/pegawai_bonuses/{id}';
    PayrollPegawaiBonusService.ctorParameters = function () { return [
        { type: _api_configuration__WEBPACK_IMPORTED_MODULE_4__["ApiConfiguration"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    PayrollPegawaiBonusService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_configuration__WEBPACK_IMPORTED_MODULE_4__["ApiConfiguration"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PayrollPegawaiBonusService);
    return PayrollPegawaiBonusService;
}(_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"]));



/***/ }),

/***/ "./src/app/sdk/payroll/services/payroll-pegawai-bpjs.service.ts":
/*!**********************************************************************!*\
  !*** ./src/app/sdk/payroll/services/payroll-pegawai-bpjs.service.ts ***!
  \**********************************************************************/
/*! exports provided: PayrollPegawaiBpjsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PayrollPegawaiBpjsService", function() { return PayrollPegawaiBpjsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base-service */ "./src/app/sdk/payroll/base-service.ts");
/* harmony import */ var _api_configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api-configuration */ "./src/app/sdk/payroll/api-configuration.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");

/* tslint:disable */





var PayrollPegawaiBpjsService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](PayrollPegawaiBpjsService, _super);
    function PayrollPegawaiBpjsService(config, http) {
        return _super.call(this, config, http) || this;
    }
    /**
     * Get all Pegawai_bpjs
     * @param filter PurchaseRequest that should be stored
     * @return successful operation
     */
    PayrollPegawaiBpjsService.prototype.getPayrollPegawaiBpjsResponse = function (filter) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        if (filter != null)
            __params = __params.set('filter', filter.toString());
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/payroll/pegawai_bpjs", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Get all Pegawai_bpjs
     * @param filter PurchaseRequest that should be stored
     * @return successful operation
     */
    PayrollPegawaiBpjsService.prototype.getPayrollPegawaiBpjs = function (filter) {
        return this.getPayrollPegawaiBpjsResponse(filter).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * Store Pegawai_bpjs
     * @param body Pegawai_bpjs that should be stored
     * @return successful operation
     */
    PayrollPegawaiBpjsService.prototype.postPayrollPegawaiBpjsResponse = function (body) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        __body = body;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/payroll/pegawai_bpjs", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Store Pegawai_bpjs
     * @param body Pegawai_bpjs that should be stored
     * @return successful operation
     */
    PayrollPegawaiBpjsService.prototype.postPayrollPegawaiBpjs = function (body) {
        return this.postPayrollPegawaiBpjsResponse(body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * Get Pegawai_bpjs
     * @param id id of Pegawai_bpjs
     * @return successful operation
     */
    PayrollPegawaiBpjsService.prototype.getPayrollPegawaiBpjsIdResponse = function (id) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + ("/payroll/pegawai_bpjs/" + id), __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Get Pegawai_bpjs
     * @param id id of Pegawai_bpjs
     * @return successful operation
     */
    PayrollPegawaiBpjsService.prototype.getPayrollPegawaiBpjsId = function (id) {
        return this.getPayrollPegawaiBpjsIdResponse(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * Update Pegawai_bpjs
     * @param params The `PayrollPegawaiBpjsService.PutPayrollPegawaiBpjsIdParams` containing the following parameters:
     *
     * - `id`: id of Pegawai_bpjs
     *
     * - `body`: Pegawai_bpjs that should be updated
     *
     * @return successful operation
     */
    PayrollPegawaiBpjsService.prototype.putPayrollPegawaiBpjsIdResponse = function (params) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        __body = params.body;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('PUT', this.rootUrl + ("/payroll/pegawai_bpjs/" + params.id), __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Update Pegawai_bpjs
     * @param params The `PayrollPegawaiBpjsService.PutPayrollPegawaiBpjsIdParams` containing the following parameters:
     *
     * - `id`: id of Pegawai_bpjs
     *
     * - `body`: Pegawai_bpjs that should be updated
     *
     * @return successful operation
     */
    PayrollPegawaiBpjsService.prototype.putPayrollPegawaiBpjsId = function (params) {
        return this.putPayrollPegawaiBpjsIdResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * Delete Pegawai_bpjs
     * @param id id of Pegawai_bpjs
     * @return successful operation
     */
    PayrollPegawaiBpjsService.prototype.deletePayrollPegawaiBpjsIdResponse = function (id) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('DELETE', this.rootUrl + ("/payroll/pegawai_bpjs/" + id), __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Delete Pegawai_bpjs
     * @param id id of Pegawai_bpjs
     * @return successful operation
     */
    PayrollPegawaiBpjsService.prototype.deletePayrollPegawaiBpjsId = function (id) {
        return this.deletePayrollPegawaiBpjsIdResponse(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    PayrollPegawaiBpjsService.getPayrollPegawaiBpjsPath = '/payroll/pegawai_bpjs';
    PayrollPegawaiBpjsService.postPayrollPegawaiBpjsPath = '/payroll/pegawai_bpjs';
    PayrollPegawaiBpjsService.getPayrollPegawaiBpjsIdPath = '/payroll/pegawai_bpjs/{id}';
    PayrollPegawaiBpjsService.putPayrollPegawaiBpjsIdPath = '/payroll/pegawai_bpjs/{id}';
    PayrollPegawaiBpjsService.deletePayrollPegawaiBpjsIdPath = '/payroll/pegawai_bpjs/{id}';
    PayrollPegawaiBpjsService.ctorParameters = function () { return [
        { type: _api_configuration__WEBPACK_IMPORTED_MODULE_4__["ApiConfiguration"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    PayrollPegawaiBpjsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_configuration__WEBPACK_IMPORTED_MODULE_4__["ApiConfiguration"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PayrollPegawaiBpjsService);
    return PayrollPegawaiBpjsService;
}(_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"]));



/***/ }),

/***/ "./src/app/sdk/payroll/services/payroll-pegawai-komponen.service.ts":
/*!**************************************************************************!*\
  !*** ./src/app/sdk/payroll/services/payroll-pegawai-komponen.service.ts ***!
  \**************************************************************************/
/*! exports provided: PayrollPegawaiKomponenService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PayrollPegawaiKomponenService", function() { return PayrollPegawaiKomponenService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base-service */ "./src/app/sdk/payroll/base-service.ts");
/* harmony import */ var _api_configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api-configuration */ "./src/app/sdk/payroll/api-configuration.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");

/* tslint:disable */





var PayrollPegawaiKomponenService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](PayrollPegawaiKomponenService, _super);
    function PayrollPegawaiKomponenService(config, http) {
        return _super.call(this, config, http) || this;
    }
    /**
     * Get all Pegawai_komponens
     * @param filter PurchaseRequest that should be stored
     * @return successful operation
     */
    PayrollPegawaiKomponenService.prototype.getPayrollPegawaiKomponensResponse = function (filter) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        if (filter != null)
            __params = __params.set('filter', filter.toString());
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/payroll/pegawai_komponens", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Get all Pegawai_komponens
     * @param filter PurchaseRequest that should be stored
     * @return successful operation
     */
    PayrollPegawaiKomponenService.prototype.getPayrollPegawaiKomponens = function (filter) {
        return this.getPayrollPegawaiKomponensResponse(filter).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * Store Pegawai_komponen
     * @param body Pegawai_komponen that should be stored
     * @return successful operation
     */
    PayrollPegawaiKomponenService.prototype.postPayrollPegawaiKomponensResponse = function (body) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        __body = body;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/payroll/pegawai_komponens", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Store Pegawai_komponen
     * @param body Pegawai_komponen that should be stored
     * @return successful operation
     */
    PayrollPegawaiKomponenService.prototype.postPayrollPegawaiKomponens = function (body) {
        return this.postPayrollPegawaiKomponensResponse(body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * Get Pegawai_komponen
     * @param id id of Pegawai_komponen
     * @return successful operation
     */
    PayrollPegawaiKomponenService.prototype.getPayrollPegawaiKomponensIdResponse = function (id) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + ("/payroll/pegawai_komponens/" + id), __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Get Pegawai_komponen
     * @param id id of Pegawai_komponen
     * @return successful operation
     */
    PayrollPegawaiKomponenService.prototype.getPayrollPegawaiKomponensId = function (id) {
        return this.getPayrollPegawaiKomponensIdResponse(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * Update Pegawai_komponen
     * @param params The `PayrollPegawaiKomponenService.PutPayrollPegawaiKomponensIdParams` containing the following parameters:
     *
     * - `id`: id of Pegawai_komponen
     *
     * - `body`: Pegawai_komponen that should be updated
     *
     * @return successful operation
     */
    PayrollPegawaiKomponenService.prototype.putPayrollPegawaiKomponensIdResponse = function (params) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        __body = params.body;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('PUT', this.rootUrl + ("/payroll/pegawai_komponens/" + params.id), __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Update Pegawai_komponen
     * @param params The `PayrollPegawaiKomponenService.PutPayrollPegawaiKomponensIdParams` containing the following parameters:
     *
     * - `id`: id of Pegawai_komponen
     *
     * - `body`: Pegawai_komponen that should be updated
     *
     * @return successful operation
     */
    PayrollPegawaiKomponenService.prototype.putPayrollPegawaiKomponensId = function (params) {
        return this.putPayrollPegawaiKomponensIdResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * Delete Pegawai_komponen
     * @param id id of Pegawai_komponen
     * @return successful operation
     */
    PayrollPegawaiKomponenService.prototype.deletePayrollPegawaiKomponensIdResponse = function (id) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('DELETE', this.rootUrl + ("/payroll/pegawai_komponens/" + id), __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Delete Pegawai_komponen
     * @param id id of Pegawai_komponen
     * @return successful operation
     */
    PayrollPegawaiKomponenService.prototype.deletePayrollPegawaiKomponensId = function (id) {
        return this.deletePayrollPegawaiKomponensIdResponse(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    PayrollPegawaiKomponenService.getPayrollPegawaiKomponensPath = '/payroll/pegawai_komponens';
    PayrollPegawaiKomponenService.postPayrollPegawaiKomponensPath = '/payroll/pegawai_komponens';
    PayrollPegawaiKomponenService.getPayrollPegawaiKomponensIdPath = '/payroll/pegawai_komponens/{id}';
    PayrollPegawaiKomponenService.putPayrollPegawaiKomponensIdPath = '/payroll/pegawai_komponens/{id}';
    PayrollPegawaiKomponenService.deletePayrollPegawaiKomponensIdPath = '/payroll/pegawai_komponens/{id}';
    PayrollPegawaiKomponenService.ctorParameters = function () { return [
        { type: _api_configuration__WEBPACK_IMPORTED_MODULE_4__["ApiConfiguration"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    PayrollPegawaiKomponenService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_configuration__WEBPACK_IMPORTED_MODULE_4__["ApiConfiguration"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PayrollPegawaiKomponenService);
    return PayrollPegawaiKomponenService;
}(_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"]));



/***/ }),

/***/ "./src/app/sdk/payroll/services/payroll-pegawai-onduty-detail.service.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/sdk/payroll/services/payroll-pegawai-onduty-detail.service.ts ***!
  \*******************************************************************************/
/*! exports provided: PayrollPegawaiOndutyDetailService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PayrollPegawaiOndutyDetailService", function() { return PayrollPegawaiOndutyDetailService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base-service */ "./src/app/sdk/payroll/base-service.ts");
/* harmony import */ var _api_configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api-configuration */ "./src/app/sdk/payroll/api-configuration.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");

/* tslint:disable */





var PayrollPegawaiOndutyDetailService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](PayrollPegawaiOndutyDetailService, _super);
    function PayrollPegawaiOndutyDetailService(config, http) {
        return _super.call(this, config, http) || this;
    }
    /**
     * Get all Pegawai_onduty_details
     * @param filter PurchaseRequest that should be stored
     * @return successful operation
     */
    PayrollPegawaiOndutyDetailService.prototype.getPayrollPegawaiOndutyDetailsResponse = function (filter) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        if (filter != null)
            __params = __params.set('filter', filter.toString());
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/payroll/pegawai_onduty_details", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Get all Pegawai_onduty_details
     * @param filter PurchaseRequest that should be stored
     * @return successful operation
     */
    PayrollPegawaiOndutyDetailService.prototype.getPayrollPegawaiOndutyDetails = function (filter) {
        return this.getPayrollPegawaiOndutyDetailsResponse(filter).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * Store Pegawai_onduty_detail
     * @param body Pegawai_onduty_detail that should be stored
     * @return successful operation
     */
    PayrollPegawaiOndutyDetailService.prototype.postPayrollPegawaiOndutyDetailsResponse = function (body) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        __body = body;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/payroll/pegawai_onduty_details", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Store Pegawai_onduty_detail
     * @param body Pegawai_onduty_detail that should be stored
     * @return successful operation
     */
    PayrollPegawaiOndutyDetailService.prototype.postPayrollPegawaiOndutyDetails = function (body) {
        return this.postPayrollPegawaiOndutyDetailsResponse(body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * Get Pegawai_onduty_detail
     * @param id id of Pegawai_onduty_detail
     * @return successful operation
     */
    PayrollPegawaiOndutyDetailService.prototype.getPayrollPegawaiOndutyDetailsIdResponse = function (id) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + ("/payroll/pegawai_onduty_details/" + id), __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Get Pegawai_onduty_detail
     * @param id id of Pegawai_onduty_detail
     * @return successful operation
     */
    PayrollPegawaiOndutyDetailService.prototype.getPayrollPegawaiOndutyDetailsId = function (id) {
        return this.getPayrollPegawaiOndutyDetailsIdResponse(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * Update Pegawai_onduty_detail
     * @param params The `PayrollPegawaiOndutyDetailService.PutPayrollPegawaiOndutyDetailsIdParams` containing the following parameters:
     *
     * - `id`: id of Pegawai_onduty_detail
     *
     * - `body`: Pegawai_onduty_detail that should be updated
     *
     * @return successful operation
     */
    PayrollPegawaiOndutyDetailService.prototype.putPayrollPegawaiOndutyDetailsIdResponse = function (params) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        __body = params.body;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('PUT', this.rootUrl + ("/payroll/pegawai_onduty_details/" + params.id), __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Update Pegawai_onduty_detail
     * @param params The `PayrollPegawaiOndutyDetailService.PutPayrollPegawaiOndutyDetailsIdParams` containing the following parameters:
     *
     * - `id`: id of Pegawai_onduty_detail
     *
     * - `body`: Pegawai_onduty_detail that should be updated
     *
     * @return successful operation
     */
    PayrollPegawaiOndutyDetailService.prototype.putPayrollPegawaiOndutyDetailsId = function (params) {
        return this.putPayrollPegawaiOndutyDetailsIdResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * Delete Pegawai_onduty_detail
     * @param id id of Pegawai_onduty_detail
     * @return successful operation
     */
    PayrollPegawaiOndutyDetailService.prototype.deletePayrollPegawaiOndutyDetailsIdResponse = function (id) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('DELETE', this.rootUrl + ("/payroll/pegawai_onduty_details/" + id), __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Delete Pegawai_onduty_detail
     * @param id id of Pegawai_onduty_detail
     * @return successful operation
     */
    PayrollPegawaiOndutyDetailService.prototype.deletePayrollPegawaiOndutyDetailsId = function (id) {
        return this.deletePayrollPegawaiOndutyDetailsIdResponse(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    PayrollPegawaiOndutyDetailService.getPayrollPegawaiOndutyDetailsPath = '/payroll/pegawai_onduty_details';
    PayrollPegawaiOndutyDetailService.postPayrollPegawaiOndutyDetailsPath = '/payroll/pegawai_onduty_details';
    PayrollPegawaiOndutyDetailService.getPayrollPegawaiOndutyDetailsIdPath = '/payroll/pegawai_onduty_details/{id}';
    PayrollPegawaiOndutyDetailService.putPayrollPegawaiOndutyDetailsIdPath = '/payroll/pegawai_onduty_details/{id}';
    PayrollPegawaiOndutyDetailService.deletePayrollPegawaiOndutyDetailsIdPath = '/payroll/pegawai_onduty_details/{id}';
    PayrollPegawaiOndutyDetailService.ctorParameters = function () { return [
        { type: _api_configuration__WEBPACK_IMPORTED_MODULE_4__["ApiConfiguration"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    PayrollPegawaiOndutyDetailService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_configuration__WEBPACK_IMPORTED_MODULE_4__["ApiConfiguration"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PayrollPegawaiOndutyDetailService);
    return PayrollPegawaiOndutyDetailService;
}(_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"]));



/***/ }),

/***/ "./src/app/sdk/payroll/services/payroll-pegawai-onduty-pkp.service.ts":
/*!****************************************************************************!*\
  !*** ./src/app/sdk/payroll/services/payroll-pegawai-onduty-pkp.service.ts ***!
  \****************************************************************************/
/*! exports provided: PayrollPegawaiOndutyPkpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PayrollPegawaiOndutyPkpService", function() { return PayrollPegawaiOndutyPkpService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base-service */ "./src/app/sdk/payroll/base-service.ts");
/* harmony import */ var _api_configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api-configuration */ "./src/app/sdk/payroll/api-configuration.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");

/* tslint:disable */





var PayrollPegawaiOndutyPkpService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](PayrollPegawaiOndutyPkpService, _super);
    function PayrollPegawaiOndutyPkpService(config, http) {
        return _super.call(this, config, http) || this;
    }
    /**
     * Get all Pegawai_onduty_pkps
     * @param filter PurchaseRequest that should be stored
     * @return successful operation
     */
    PayrollPegawaiOndutyPkpService.prototype.getPayrollPegawaiOndutyPkpsResponse = function (filter) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        if (filter != null)
            __params = __params.set('filter', filter.toString());
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/payroll/pegawai_onduty_pkps", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Get all Pegawai_onduty_pkps
     * @param filter PurchaseRequest that should be stored
     * @return successful operation
     */
    PayrollPegawaiOndutyPkpService.prototype.getPayrollPegawaiOndutyPkps = function (filter) {
        return this.getPayrollPegawaiOndutyPkpsResponse(filter).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * Store Pegawai_onduty_pkp
     * @param body Pegawai_onduty_pkp that should be stored
     * @return successful operation
     */
    PayrollPegawaiOndutyPkpService.prototype.postPayrollPegawaiOndutyPkpsResponse = function (body) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        __body = body;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/payroll/pegawai_onduty_pkps", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Store Pegawai_onduty_pkp
     * @param body Pegawai_onduty_pkp that should be stored
     * @return successful operation
     */
    PayrollPegawaiOndutyPkpService.prototype.postPayrollPegawaiOndutyPkps = function (body) {
        return this.postPayrollPegawaiOndutyPkpsResponse(body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * Get Pegawai_onduty_pkp
     * @param id id of Pegawai_onduty_pkp
     * @return successful operation
     */
    PayrollPegawaiOndutyPkpService.prototype.getPayrollPegawaiOndutyPkpsIdResponse = function (id) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + ("/payroll/pegawai_onduty_pkps/" + id), __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Get Pegawai_onduty_pkp
     * @param id id of Pegawai_onduty_pkp
     * @return successful operation
     */
    PayrollPegawaiOndutyPkpService.prototype.getPayrollPegawaiOndutyPkpsId = function (id) {
        return this.getPayrollPegawaiOndutyPkpsIdResponse(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * Update Pegawai_onduty_pkp
     * @param params The `PayrollPegawaiOndutyPkpService.PutPayrollPegawaiOndutyPkpsIdParams` containing the following parameters:
     *
     * - `id`: id of Pegawai_onduty_pkp
     *
     * - `body`: Pegawai_onduty_pkp that should be updated
     *
     * @return successful operation
     */
    PayrollPegawaiOndutyPkpService.prototype.putPayrollPegawaiOndutyPkpsIdResponse = function (params) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        __body = params.body;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('PUT', this.rootUrl + ("/payroll/pegawai_onduty_pkps/" + params.id), __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Update Pegawai_onduty_pkp
     * @param params The `PayrollPegawaiOndutyPkpService.PutPayrollPegawaiOndutyPkpsIdParams` containing the following parameters:
     *
     * - `id`: id of Pegawai_onduty_pkp
     *
     * - `body`: Pegawai_onduty_pkp that should be updated
     *
     * @return successful operation
     */
    PayrollPegawaiOndutyPkpService.prototype.putPayrollPegawaiOndutyPkpsId = function (params) {
        return this.putPayrollPegawaiOndutyPkpsIdResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * Delete Pegawai_onduty_pkp
     * @param id id of Pegawai_onduty_pkp
     * @return successful operation
     */
    PayrollPegawaiOndutyPkpService.prototype.deletePayrollPegawaiOndutyPkpsIdResponse = function (id) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('DELETE', this.rootUrl + ("/payroll/pegawai_onduty_pkps/" + id), __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Delete Pegawai_onduty_pkp
     * @param id id of Pegawai_onduty_pkp
     * @return successful operation
     */
    PayrollPegawaiOndutyPkpService.prototype.deletePayrollPegawaiOndutyPkpsId = function (id) {
        return this.deletePayrollPegawaiOndutyPkpsIdResponse(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    PayrollPegawaiOndutyPkpService.getPayrollPegawaiOndutyPkpsPath = '/payroll/pegawai_onduty_pkps';
    PayrollPegawaiOndutyPkpService.postPayrollPegawaiOndutyPkpsPath = '/payroll/pegawai_onduty_pkps';
    PayrollPegawaiOndutyPkpService.getPayrollPegawaiOndutyPkpsIdPath = '/payroll/pegawai_onduty_pkps/{id}';
    PayrollPegawaiOndutyPkpService.putPayrollPegawaiOndutyPkpsIdPath = '/payroll/pegawai_onduty_pkps/{id}';
    PayrollPegawaiOndutyPkpService.deletePayrollPegawaiOndutyPkpsIdPath = '/payroll/pegawai_onduty_pkps/{id}';
    PayrollPegawaiOndutyPkpService.ctorParameters = function () { return [
        { type: _api_configuration__WEBPACK_IMPORTED_MODULE_4__["ApiConfiguration"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    PayrollPegawaiOndutyPkpService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_configuration__WEBPACK_IMPORTED_MODULE_4__["ApiConfiguration"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PayrollPegawaiOndutyPkpService);
    return PayrollPegawaiOndutyPkpService;
}(_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"]));



/***/ }),

/***/ "./src/app/sdk/payroll/services/payroll-pegawai-onduty.service.ts":
/*!************************************************************************!*\
  !*** ./src/app/sdk/payroll/services/payroll-pegawai-onduty.service.ts ***!
  \************************************************************************/
/*! exports provided: PayrollPegawaiOndutyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PayrollPegawaiOndutyService", function() { return PayrollPegawaiOndutyService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base-service */ "./src/app/sdk/payroll/base-service.ts");
/* harmony import */ var _api_configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api-configuration */ "./src/app/sdk/payroll/api-configuration.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");

/* tslint:disable */





var PayrollPegawaiOndutyService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](PayrollPegawaiOndutyService, _super);
    function PayrollPegawaiOndutyService(config, http) {
        return _super.call(this, config, http) || this;
    }
    /**
     * Get all Pegawai_onduties
     * @param filter PurchaseRequest that should be stored
     * @return successful operation
     */
    PayrollPegawaiOndutyService.prototype.getPayrollPegawaiOndutiesResponse = function (filter) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        if (filter != null)
            __params = __params.set('filter', filter.toString());
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/payroll/pegawai_onduties", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Get all Pegawai_onduties
     * @param filter PurchaseRequest that should be stored
     * @return successful operation
     */
    PayrollPegawaiOndutyService.prototype.getPayrollPegawaiOnduties = function (filter) {
        return this.getPayrollPegawaiOndutiesResponse(filter).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * Store Pegawai_onduty
     * @param body Pegawai_onduty that should be stored
     * @return successful operation
     */
    PayrollPegawaiOndutyService.prototype.postPayrollPegawaiOndutiesResponse = function (body) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        __body = body;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/payroll/pegawai_onduties", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Store Pegawai_onduty
     * @param body Pegawai_onduty that should be stored
     * @return successful operation
     */
    PayrollPegawaiOndutyService.prototype.postPayrollPegawaiOnduties = function (body) {
        return this.postPayrollPegawaiOndutiesResponse(body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * Get Pegawai_onduty
     * @param id id of Pegawai_onduty
     * @return successful operation
     */
    PayrollPegawaiOndutyService.prototype.getPayrollPegawaiOndutiesIdResponse = function (id) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + ("/payroll/pegawai_onduties/" + id), __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Get Pegawai_onduty
     * @param id id of Pegawai_onduty
     * @return successful operation
     */
    PayrollPegawaiOndutyService.prototype.getPayrollPegawaiOndutiesId = function (id) {
        return this.getPayrollPegawaiOndutiesIdResponse(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * Update Pegawai_onduty
     * @param params The `PayrollPegawaiOndutyService.PutPayrollPegawaiOndutiesIdParams` containing the following parameters:
     *
     * - `id`: id of Pegawai_onduty
     *
     * - `body`: Pegawai_onduty that should be updated
     *
     * @return successful operation
     */
    PayrollPegawaiOndutyService.prototype.putPayrollPegawaiOndutiesIdResponse = function (params) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        __body = params.body;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('PUT', this.rootUrl + ("/payroll/pegawai_onduties/" + params.id), __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Update Pegawai_onduty
     * @param params The `PayrollPegawaiOndutyService.PutPayrollPegawaiOndutiesIdParams` containing the following parameters:
     *
     * - `id`: id of Pegawai_onduty
     *
     * - `body`: Pegawai_onduty that should be updated
     *
     * @return successful operation
     */
    PayrollPegawaiOndutyService.prototype.putPayrollPegawaiOndutiesId = function (params) {
        return this.putPayrollPegawaiOndutiesIdResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * Delete Pegawai_onduty
     * @param id id of Pegawai_onduty
     * @return successful operation
     */
    PayrollPegawaiOndutyService.prototype.deletePayrollPegawaiOndutiesIdResponse = function (id) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('DELETE', this.rootUrl + ("/payroll/pegawai_onduties/" + id), __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Delete Pegawai_onduty
     * @param id id of Pegawai_onduty
     * @return successful operation
     */
    PayrollPegawaiOndutyService.prototype.deletePayrollPegawaiOndutiesId = function (id) {
        return this.deletePayrollPegawaiOndutiesIdResponse(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    PayrollPegawaiOndutyService.getPayrollPegawaiOndutiesPath = '/payroll/pegawai_onduties';
    PayrollPegawaiOndutyService.postPayrollPegawaiOndutiesPath = '/payroll/pegawai_onduties';
    PayrollPegawaiOndutyService.getPayrollPegawaiOndutiesIdPath = '/payroll/pegawai_onduties/{id}';
    PayrollPegawaiOndutyService.putPayrollPegawaiOndutiesIdPath = '/payroll/pegawai_onduties/{id}';
    PayrollPegawaiOndutyService.deletePayrollPegawaiOndutiesIdPath = '/payroll/pegawai_onduties/{id}';
    PayrollPegawaiOndutyService.ctorParameters = function () { return [
        { type: _api_configuration__WEBPACK_IMPORTED_MODULE_4__["ApiConfiguration"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    PayrollPegawaiOndutyService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_configuration__WEBPACK_IMPORTED_MODULE_4__["ApiConfiguration"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PayrollPegawaiOndutyService);
    return PayrollPegawaiOndutyService;
}(_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"]));



/***/ }),

/***/ "./src/app/sdk/payroll/services/payroll-pegawai-payroll.service.ts":
/*!*************************************************************************!*\
  !*** ./src/app/sdk/payroll/services/payroll-pegawai-payroll.service.ts ***!
  \*************************************************************************/
/*! exports provided: PayrollPegawaiPayrollService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PayrollPegawaiPayrollService", function() { return PayrollPegawaiPayrollService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base-service */ "./src/app/sdk/payroll/base-service.ts");
/* harmony import */ var _api_configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api-configuration */ "./src/app/sdk/payroll/api-configuration.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");

/* tslint:disable */





var PayrollPegawaiPayrollService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](PayrollPegawaiPayrollService, _super);
    function PayrollPegawaiPayrollService(config, http) {
        return _super.call(this, config, http) || this;
    }
    /**
     * Get all Pegawai_payrolls
     * @param filter PurchaseRequest that should be stored
     * @return successful operation
     */
    PayrollPegawaiPayrollService.prototype.getPayrollPegawaiPayrollsResponse = function (filter) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        if (filter != null)
            __params = __params.set('filter', filter.toString());
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/payroll/pegawai_payrolls", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Get all Pegawai_payrolls
     * @param filter PurchaseRequest that should be stored
     * @return successful operation
     */
    PayrollPegawaiPayrollService.prototype.getPayrollPegawaiPayrolls = function (filter) {
        return this.getPayrollPegawaiPayrollsResponse(filter).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * Store Pegawai_payroll
     * @param body Pegawai_payroll that should be stored
     * @return successful operation
     */
    PayrollPegawaiPayrollService.prototype.postPayrollPegawaiPayrollsResponse = function (body) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        __body = body;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/payroll/pegawai_payrolls", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Store Pegawai_payroll
     * @param body Pegawai_payroll that should be stored
     * @return successful operation
     */
    PayrollPegawaiPayrollService.prototype.postPayrollPegawaiPayrolls = function (body) {
        return this.postPayrollPegawaiPayrollsResponse(body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * Get Pegawai_payroll
     * @param id id of Pegawai_payroll
     * @return successful operation
     */
    PayrollPegawaiPayrollService.prototype.getPayrollPegawaiPayrollsIdResponse = function (id) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + ("/payroll/pegawai_payrolls/" + id), __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Get Pegawai_payroll
     * @param id id of Pegawai_payroll
     * @return successful operation
     */
    PayrollPegawaiPayrollService.prototype.getPayrollPegawaiPayrollsId = function (id) {
        return this.getPayrollPegawaiPayrollsIdResponse(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * Update Pegawai_payroll
     * @param params The `PayrollPegawaiPayrollService.PutPayrollPegawaiPayrollsIdParams` containing the following parameters:
     *
     * - `id`: id of Pegawai_payroll
     *
     * - `body`: Pegawai_payroll that should be updated
     *
     * @return successful operation
     */
    PayrollPegawaiPayrollService.prototype.putPayrollPegawaiPayrollsIdResponse = function (params) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        __body = params.body;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('PUT', this.rootUrl + ("/payroll/pegawai_payrolls/" + params.id), __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Update Pegawai_payroll
     * @param params The `PayrollPegawaiPayrollService.PutPayrollPegawaiPayrollsIdParams` containing the following parameters:
     *
     * - `id`: id of Pegawai_payroll
     *
     * - `body`: Pegawai_payroll that should be updated
     *
     * @return successful operation
     */
    PayrollPegawaiPayrollService.prototype.putPayrollPegawaiPayrollsId = function (params) {
        return this.putPayrollPegawaiPayrollsIdResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * Delete Pegawai_payroll
     * @param id id of Pegawai_payroll
     * @return successful operation
     */
    PayrollPegawaiPayrollService.prototype.deletePayrollPegawaiPayrollsIdResponse = function (id) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('DELETE', this.rootUrl + ("/payroll/pegawai_payrolls/" + id), __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Delete Pegawai_payroll
     * @param id id of Pegawai_payroll
     * @return successful operation
     */
    PayrollPegawaiPayrollService.prototype.deletePayrollPegawaiPayrollsId = function (id) {
        return this.deletePayrollPegawaiPayrollsIdResponse(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    PayrollPegawaiPayrollService.getPayrollPegawaiPayrollsPath = '/payroll/pegawai_payrolls';
    PayrollPegawaiPayrollService.postPayrollPegawaiPayrollsPath = '/payroll/pegawai_payrolls';
    PayrollPegawaiPayrollService.getPayrollPegawaiPayrollsIdPath = '/payroll/pegawai_payrolls/{id}';
    PayrollPegawaiPayrollService.putPayrollPegawaiPayrollsIdPath = '/payroll/pegawai_payrolls/{id}';
    PayrollPegawaiPayrollService.deletePayrollPegawaiPayrollsIdPath = '/payroll/pegawai_payrolls/{id}';
    PayrollPegawaiPayrollService.ctorParameters = function () { return [
        { type: _api_configuration__WEBPACK_IMPORTED_MODULE_4__["ApiConfiguration"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    PayrollPegawaiPayrollService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_configuration__WEBPACK_IMPORTED_MODULE_4__["ApiConfiguration"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PayrollPegawaiPayrollService);
    return PayrollPegawaiPayrollService;
}(_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"]));



/***/ }),

/***/ "./src/app/sdk/payroll/services/payroll-pegawai-pilot-detail.service.ts":
/*!******************************************************************************!*\
  !*** ./src/app/sdk/payroll/services/payroll-pegawai-pilot-detail.service.ts ***!
  \******************************************************************************/
/*! exports provided: PayrollPegawaiPilotDetailService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PayrollPegawaiPilotDetailService", function() { return PayrollPegawaiPilotDetailService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base-service */ "./src/app/sdk/payroll/base-service.ts");
/* harmony import */ var _api_configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api-configuration */ "./src/app/sdk/payroll/api-configuration.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");

/* tslint:disable */





var PayrollPegawaiPilotDetailService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](PayrollPegawaiPilotDetailService, _super);
    function PayrollPegawaiPilotDetailService(config, http) {
        return _super.call(this, config, http) || this;
    }
    /**
     * Get all Pegawai_pilot_details
     * @param filter PurchaseRequest that should be stored
     * @return successful operation
     */
    PayrollPegawaiPilotDetailService.prototype.getPayrollPegawaiPilotDetailsResponse = function (filter) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        if (filter != null)
            __params = __params.set('filter', filter.toString());
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/payroll/pegawai_pilot_details", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Get all Pegawai_pilot_details
     * @param filter PurchaseRequest that should be stored
     * @return successful operation
     */
    PayrollPegawaiPilotDetailService.prototype.getPayrollPegawaiPilotDetails = function (filter) {
        return this.getPayrollPegawaiPilotDetailsResponse(filter).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * Store Pegawai_pilot_detail
     * @param body Pegawai_pilot_detail that should be stored
     * @return successful operation
     */
    PayrollPegawaiPilotDetailService.prototype.postPayrollPegawaiPilotDetailsResponse = function (body) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        __body = body;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/payroll/pegawai_pilot_details", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Store Pegawai_pilot_detail
     * @param body Pegawai_pilot_detail that should be stored
     * @return successful operation
     */
    PayrollPegawaiPilotDetailService.prototype.postPayrollPegawaiPilotDetails = function (body) {
        return this.postPayrollPegawaiPilotDetailsResponse(body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * Get Pegawai_pilot_detail
     * @param id id of Pegawai_pilot_detail
     * @return successful operation
     */
    PayrollPegawaiPilotDetailService.prototype.getPayrollPegawaiPilotDetailsIdResponse = function (id) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + ("/payroll/pegawai_pilot_details/" + id), __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Get Pegawai_pilot_detail
     * @param id id of Pegawai_pilot_detail
     * @return successful operation
     */
    PayrollPegawaiPilotDetailService.prototype.getPayrollPegawaiPilotDetailsId = function (id) {
        return this.getPayrollPegawaiPilotDetailsIdResponse(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * Update Pegawai_pilot_detail
     * @param params The `PayrollPegawaiPilotDetailService.PutPayrollPegawaiPilotDetailsIdParams` containing the following parameters:
     *
     * - `id`: id of Pegawai_pilot_detail
     *
     * - `body`: Pegawai_pilot_detail that should be updated
     *
     * @return successful operation
     */
    PayrollPegawaiPilotDetailService.prototype.putPayrollPegawaiPilotDetailsIdResponse = function (params) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        __body = params.body;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('PUT', this.rootUrl + ("/payroll/pegawai_pilot_details/" + params.id), __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Update Pegawai_pilot_detail
     * @param params The `PayrollPegawaiPilotDetailService.PutPayrollPegawaiPilotDetailsIdParams` containing the following parameters:
     *
     * - `id`: id of Pegawai_pilot_detail
     *
     * - `body`: Pegawai_pilot_detail that should be updated
     *
     * @return successful operation
     */
    PayrollPegawaiPilotDetailService.prototype.putPayrollPegawaiPilotDetailsId = function (params) {
        return this.putPayrollPegawaiPilotDetailsIdResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * Delete Pegawai_pilot_detail
     * @param id id of Pegawai_pilot_detail
     * @return successful operation
     */
    PayrollPegawaiPilotDetailService.prototype.deletePayrollPegawaiPilotDetailsIdResponse = function (id) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('DELETE', this.rootUrl + ("/payroll/pegawai_pilot_details/" + id), __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Delete Pegawai_pilot_detail
     * @param id id of Pegawai_pilot_detail
     * @return successful operation
     */
    PayrollPegawaiPilotDetailService.prototype.deletePayrollPegawaiPilotDetailsId = function (id) {
        return this.deletePayrollPegawaiPilotDetailsIdResponse(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    PayrollPegawaiPilotDetailService.getPayrollPegawaiPilotDetailsPath = '/payroll/pegawai_pilot_details';
    PayrollPegawaiPilotDetailService.postPayrollPegawaiPilotDetailsPath = '/payroll/pegawai_pilot_details';
    PayrollPegawaiPilotDetailService.getPayrollPegawaiPilotDetailsIdPath = '/payroll/pegawai_pilot_details/{id}';
    PayrollPegawaiPilotDetailService.putPayrollPegawaiPilotDetailsIdPath = '/payroll/pegawai_pilot_details/{id}';
    PayrollPegawaiPilotDetailService.deletePayrollPegawaiPilotDetailsIdPath = '/payroll/pegawai_pilot_details/{id}';
    PayrollPegawaiPilotDetailService.ctorParameters = function () { return [
        { type: _api_configuration__WEBPACK_IMPORTED_MODULE_4__["ApiConfiguration"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    PayrollPegawaiPilotDetailService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_configuration__WEBPACK_IMPORTED_MODULE_4__["ApiConfiguration"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PayrollPegawaiPilotDetailService);
    return PayrollPegawaiPilotDetailService;
}(_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"]));



/***/ }),

/***/ "./src/app/sdk/payroll/services/payroll-pegawai-pilot-pkp.service.ts":
/*!***************************************************************************!*\
  !*** ./src/app/sdk/payroll/services/payroll-pegawai-pilot-pkp.service.ts ***!
  \***************************************************************************/
/*! exports provided: PayrollPegawaiPilotPkpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PayrollPegawaiPilotPkpService", function() { return PayrollPegawaiPilotPkpService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base-service */ "./src/app/sdk/payroll/base-service.ts");
/* harmony import */ var _api_configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api-configuration */ "./src/app/sdk/payroll/api-configuration.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");

/* tslint:disable */





var PayrollPegawaiPilotPkpService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](PayrollPegawaiPilotPkpService, _super);
    function PayrollPegawaiPilotPkpService(config, http) {
        return _super.call(this, config, http) || this;
    }
    /**
     * Get all Pegawai_pilot_pkps
     * @param filter PurchaseRequest that should be stored
     * @return successful operation
     */
    PayrollPegawaiPilotPkpService.prototype.getPayrollPegawaiPilotPkpsResponse = function (filter) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        if (filter != null)
            __params = __params.set('filter', filter.toString());
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/payroll/pegawai_pilot_pkps", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Get all Pegawai_pilot_pkps
     * @param filter PurchaseRequest that should be stored
     * @return successful operation
     */
    PayrollPegawaiPilotPkpService.prototype.getPayrollPegawaiPilotPkps = function (filter) {
        return this.getPayrollPegawaiPilotPkpsResponse(filter).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * Store Pegawai_pilot_pkp
     * @param body Pegawai_pilot_pkp that should be stored
     * @return successful operation
     */
    PayrollPegawaiPilotPkpService.prototype.postPayrollPegawaiPilotPkpsResponse = function (body) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        __body = body;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/payroll/pegawai_pilot_pkps", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Store Pegawai_pilot_pkp
     * @param body Pegawai_pilot_pkp that should be stored
     * @return successful operation
     */
    PayrollPegawaiPilotPkpService.prototype.postPayrollPegawaiPilotPkps = function (body) {
        return this.postPayrollPegawaiPilotPkpsResponse(body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * Get Pegawai_pilot_pkp
     * @param id id of Pegawai_pilot_pkp
     * @return successful operation
     */
    PayrollPegawaiPilotPkpService.prototype.getPayrollPegawaiPilotPkpsIdResponse = function (id) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + ("/payroll/pegawai_pilot_pkps/" + id), __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Get Pegawai_pilot_pkp
     * @param id id of Pegawai_pilot_pkp
     * @return successful operation
     */
    PayrollPegawaiPilotPkpService.prototype.getPayrollPegawaiPilotPkpsId = function (id) {
        return this.getPayrollPegawaiPilotPkpsIdResponse(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * Update Pegawai_pilot_pkp
     * @param params The `PayrollPegawaiPilotPkpService.PutPayrollPegawaiPilotPkpsIdParams` containing the following parameters:
     *
     * - `id`: id of Pegawai_pilot_pkp
     *
     * - `body`: Pegawai_pilot_pkp that should be updated
     *
     * @return successful operation
     */
    PayrollPegawaiPilotPkpService.prototype.putPayrollPegawaiPilotPkpsIdResponse = function (params) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        __body = params.body;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('PUT', this.rootUrl + ("/payroll/pegawai_pilot_pkps/" + params.id), __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Update Pegawai_pilot_pkp
     * @param params The `PayrollPegawaiPilotPkpService.PutPayrollPegawaiPilotPkpsIdParams` containing the following parameters:
     *
     * - `id`: id of Pegawai_pilot_pkp
     *
     * - `body`: Pegawai_pilot_pkp that should be updated
     *
     * @return successful operation
     */
    PayrollPegawaiPilotPkpService.prototype.putPayrollPegawaiPilotPkpsId = function (params) {
        return this.putPayrollPegawaiPilotPkpsIdResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * Delete Pegawai_pilot_pkp
     * @param id id of Pegawai_pilot_pkp
     * @return successful operation
     */
    PayrollPegawaiPilotPkpService.prototype.deletePayrollPegawaiPilotPkpsIdResponse = function (id) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('DELETE', this.rootUrl + ("/payroll/pegawai_pilot_pkps/" + id), __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Delete Pegawai_pilot_pkp
     * @param id id of Pegawai_pilot_pkp
     * @return successful operation
     */
    PayrollPegawaiPilotPkpService.prototype.deletePayrollPegawaiPilotPkpsId = function (id) {
        return this.deletePayrollPegawaiPilotPkpsIdResponse(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    PayrollPegawaiPilotPkpService.getPayrollPegawaiPilotPkpsPath = '/payroll/pegawai_pilot_pkps';
    PayrollPegawaiPilotPkpService.postPayrollPegawaiPilotPkpsPath = '/payroll/pegawai_pilot_pkps';
    PayrollPegawaiPilotPkpService.getPayrollPegawaiPilotPkpsIdPath = '/payroll/pegawai_pilot_pkps/{id}';
    PayrollPegawaiPilotPkpService.putPayrollPegawaiPilotPkpsIdPath = '/payroll/pegawai_pilot_pkps/{id}';
    PayrollPegawaiPilotPkpService.deletePayrollPegawaiPilotPkpsIdPath = '/payroll/pegawai_pilot_pkps/{id}';
    PayrollPegawaiPilotPkpService.ctorParameters = function () { return [
        { type: _api_configuration__WEBPACK_IMPORTED_MODULE_4__["ApiConfiguration"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    PayrollPegawaiPilotPkpService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_configuration__WEBPACK_IMPORTED_MODULE_4__["ApiConfiguration"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PayrollPegawaiPilotPkpService);
    return PayrollPegawaiPilotPkpService;
}(_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"]));



/***/ }),

/***/ "./src/app/sdk/payroll/services/payroll-pegawai-pilot.service.ts":
/*!***********************************************************************!*\
  !*** ./src/app/sdk/payroll/services/payroll-pegawai-pilot.service.ts ***!
  \***********************************************************************/
/*! exports provided: PayrollPegawaiPilotService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PayrollPegawaiPilotService", function() { return PayrollPegawaiPilotService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base-service */ "./src/app/sdk/payroll/base-service.ts");
/* harmony import */ var _api_configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api-configuration */ "./src/app/sdk/payroll/api-configuration.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");

/* tslint:disable */





var PayrollPegawaiPilotService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](PayrollPegawaiPilotService, _super);
    function PayrollPegawaiPilotService(config, http) {
        return _super.call(this, config, http) || this;
    }
    /**
     * Get all Pegawai_pilots
     * @param filter PurchaseRequest that should be stored
     * @return successful operation
     */
    PayrollPegawaiPilotService.prototype.getPayrollPegawaiPilotsResponse = function (filter) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        if (filter != null)
            __params = __params.set('filter', filter.toString());
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/payroll/pegawai_pilots", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Get all Pegawai_pilots
     * @param filter PurchaseRequest that should be stored
     * @return successful operation
     */
    PayrollPegawaiPilotService.prototype.getPayrollPegawaiPilots = function (filter) {
        return this.getPayrollPegawaiPilotsResponse(filter).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * Store Pegawai_pilot
     * @param body Pegawai_pilot that should be stored
     * @return successful operation
     */
    PayrollPegawaiPilotService.prototype.postPayrollPegawaiPilotsResponse = function (body) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        __body = body;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/payroll/pegawai_pilots", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Store Pegawai_pilot
     * @param body Pegawai_pilot that should be stored
     * @return successful operation
     */
    PayrollPegawaiPilotService.prototype.postPayrollPegawaiPilots = function (body) {
        return this.postPayrollPegawaiPilotsResponse(body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * Get Pegawai_pilot
     * @param id id of Pegawai_pilot
     * @return successful operation
     */
    PayrollPegawaiPilotService.prototype.getPayrollPegawaiPilotsIdResponse = function (id) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + ("/payroll/pegawai_pilots/" + id), __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Get Pegawai_pilot
     * @param id id of Pegawai_pilot
     * @return successful operation
     */
    PayrollPegawaiPilotService.prototype.getPayrollPegawaiPilotsId = function (id) {
        return this.getPayrollPegawaiPilotsIdResponse(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * Update Pegawai_pilot
     * @param params The `PayrollPegawaiPilotService.PutPayrollPegawaiPilotsIdParams` containing the following parameters:
     *
     * - `id`: id of Pegawai_pilot
     *
     * - `body`: Pegawai_pilot that should be updated
     *
     * @return successful operation
     */
    PayrollPegawaiPilotService.prototype.putPayrollPegawaiPilotsIdResponse = function (params) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        __body = params.body;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('PUT', this.rootUrl + ("/payroll/pegawai_pilots/" + params.id), __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Update Pegawai_pilot
     * @param params The `PayrollPegawaiPilotService.PutPayrollPegawaiPilotsIdParams` containing the following parameters:
     *
     * - `id`: id of Pegawai_pilot
     *
     * - `body`: Pegawai_pilot that should be updated
     *
     * @return successful operation
     */
    PayrollPegawaiPilotService.prototype.putPayrollPegawaiPilotsId = function (params) {
        return this.putPayrollPegawaiPilotsIdResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * Delete Pegawai_pilot
     * @param id id of Pegawai_pilot
     * @return successful operation
     */
    PayrollPegawaiPilotService.prototype.deletePayrollPegawaiPilotsIdResponse = function (id) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('DELETE', this.rootUrl + ("/payroll/pegawai_pilots/" + id), __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Delete Pegawai_pilot
     * @param id id of Pegawai_pilot
     * @return successful operation
     */
    PayrollPegawaiPilotService.prototype.deletePayrollPegawaiPilotsId = function (id) {
        return this.deletePayrollPegawaiPilotsIdResponse(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    PayrollPegawaiPilotService.getPayrollPegawaiPilotsPath = '/payroll/pegawai_pilots';
    PayrollPegawaiPilotService.postPayrollPegawaiPilotsPath = '/payroll/pegawai_pilots';
    PayrollPegawaiPilotService.getPayrollPegawaiPilotsIdPath = '/payroll/pegawai_pilots/{id}';
    PayrollPegawaiPilotService.putPayrollPegawaiPilotsIdPath = '/payroll/pegawai_pilots/{id}';
    PayrollPegawaiPilotService.deletePayrollPegawaiPilotsIdPath = '/payroll/pegawai_pilots/{id}';
    PayrollPegawaiPilotService.ctorParameters = function () { return [
        { type: _api_configuration__WEBPACK_IMPORTED_MODULE_4__["ApiConfiguration"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    PayrollPegawaiPilotService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_configuration__WEBPACK_IMPORTED_MODULE_4__["ApiConfiguration"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PayrollPegawaiPilotService);
    return PayrollPegawaiPilotService;
}(_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"]));



/***/ }),

/***/ "./src/app/sdk/payroll/services/payroll-pegawai-thr-pkp.service.ts":
/*!*************************************************************************!*\
  !*** ./src/app/sdk/payroll/services/payroll-pegawai-thr-pkp.service.ts ***!
  \*************************************************************************/
/*! exports provided: PayrollPegawaiThrPkpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PayrollPegawaiThrPkpService", function() { return PayrollPegawaiThrPkpService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base-service */ "./src/app/sdk/payroll/base-service.ts");
/* harmony import */ var _api_configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api-configuration */ "./src/app/sdk/payroll/api-configuration.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");

/* tslint:disable */





var PayrollPegawaiThrPkpService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](PayrollPegawaiThrPkpService, _super);
    function PayrollPegawaiThrPkpService(config, http) {
        return _super.call(this, config, http) || this;
    }
    /**
     * Get all Pegawai_thr_pkps
     * @param filter PurchaseRequest that should be stored
     * @return successful operation
     */
    PayrollPegawaiThrPkpService.prototype.getPayrollPegawaiThrPkpsResponse = function (filter) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        if (filter != null)
            __params = __params.set('filter', filter.toString());
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/payroll/pegawai_thr_pkps", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Get all Pegawai_thr_pkps
     * @param filter PurchaseRequest that should be stored
     * @return successful operation
     */
    PayrollPegawaiThrPkpService.prototype.getPayrollPegawaiThrPkps = function (filter) {
        return this.getPayrollPegawaiThrPkpsResponse(filter).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * Store Pegawai_thr_pkp
     * @param body Pegawai_thr_pkp that should be stored
     * @return successful operation
     */
    PayrollPegawaiThrPkpService.prototype.postPayrollPegawaiThrPkpsResponse = function (body) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        __body = body;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/payroll/pegawai_thr_pkps", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Store Pegawai_thr_pkp
     * @param body Pegawai_thr_pkp that should be stored
     * @return successful operation
     */
    PayrollPegawaiThrPkpService.prototype.postPayrollPegawaiThrPkps = function (body) {
        return this.postPayrollPegawaiThrPkpsResponse(body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * Get Pegawai_thr_pkp
     * @param id id of Pegawai_thr_pkp
     * @return successful operation
     */
    PayrollPegawaiThrPkpService.prototype.getPayrollPegawaiThrPkpsIdResponse = function (id) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + ("/payroll/pegawai_thr_pkps/" + id), __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Get Pegawai_thr_pkp
     * @param id id of Pegawai_thr_pkp
     * @return successful operation
     */
    PayrollPegawaiThrPkpService.prototype.getPayrollPegawaiThrPkpsId = function (id) {
        return this.getPayrollPegawaiThrPkpsIdResponse(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * Update Pegawai_thr_pkp
     * @param params The `PayrollPegawaiThrPkpService.PutPayrollPegawaiThrPkpsIdParams` containing the following parameters:
     *
     * - `id`: id of Pegawai_thr_pkp
     *
     * - `body`: Pegawai_thr_pkp that should be updated
     *
     * @return successful operation
     */
    PayrollPegawaiThrPkpService.prototype.putPayrollPegawaiThrPkpsIdResponse = function (params) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        __body = params.body;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('PUT', this.rootUrl + ("/payroll/pegawai_thr_pkps/" + params.id), __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Update Pegawai_thr_pkp
     * @param params The `PayrollPegawaiThrPkpService.PutPayrollPegawaiThrPkpsIdParams` containing the following parameters:
     *
     * - `id`: id of Pegawai_thr_pkp
     *
     * - `body`: Pegawai_thr_pkp that should be updated
     *
     * @return successful operation
     */
    PayrollPegawaiThrPkpService.prototype.putPayrollPegawaiThrPkpsId = function (params) {
        return this.putPayrollPegawaiThrPkpsIdResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * Delete Pegawai_thr_pkp
     * @param id id of Pegawai_thr_pkp
     * @return successful operation
     */
    PayrollPegawaiThrPkpService.prototype.deletePayrollPegawaiThrPkpsIdResponse = function (id) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('DELETE', this.rootUrl + ("/payroll/pegawai_thr_pkps/" + id), __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Delete Pegawai_thr_pkp
     * @param id id of Pegawai_thr_pkp
     * @return successful operation
     */
    PayrollPegawaiThrPkpService.prototype.deletePayrollPegawaiThrPkpsId = function (id) {
        return this.deletePayrollPegawaiThrPkpsIdResponse(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    PayrollPegawaiThrPkpService.getPayrollPegawaiThrPkpsPath = '/payroll/pegawai_thr_pkps';
    PayrollPegawaiThrPkpService.postPayrollPegawaiThrPkpsPath = '/payroll/pegawai_thr_pkps';
    PayrollPegawaiThrPkpService.getPayrollPegawaiThrPkpsIdPath = '/payroll/pegawai_thr_pkps/{id}';
    PayrollPegawaiThrPkpService.putPayrollPegawaiThrPkpsIdPath = '/payroll/pegawai_thr_pkps/{id}';
    PayrollPegawaiThrPkpService.deletePayrollPegawaiThrPkpsIdPath = '/payroll/pegawai_thr_pkps/{id}';
    PayrollPegawaiThrPkpService.ctorParameters = function () { return [
        { type: _api_configuration__WEBPACK_IMPORTED_MODULE_4__["ApiConfiguration"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    PayrollPegawaiThrPkpService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_configuration__WEBPACK_IMPORTED_MODULE_4__["ApiConfiguration"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PayrollPegawaiThrPkpService);
    return PayrollPegawaiThrPkpService;
}(_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"]));



/***/ }),

/***/ "./src/app/sdk/payroll/services/payroll-pegawai-thr.service.ts":
/*!*********************************************************************!*\
  !*** ./src/app/sdk/payroll/services/payroll-pegawai-thr.service.ts ***!
  \*********************************************************************/
/*! exports provided: PayrollPegawaiThrService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PayrollPegawaiThrService", function() { return PayrollPegawaiThrService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base-service */ "./src/app/sdk/payroll/base-service.ts");
/* harmony import */ var _api_configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api-configuration */ "./src/app/sdk/payroll/api-configuration.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");

/* tslint:disable */





var PayrollPegawaiThrService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](PayrollPegawaiThrService, _super);
    function PayrollPegawaiThrService(config, http) {
        return _super.call(this, config, http) || this;
    }
    /**
     * Get all Pegawai_thrs
     * @param filter PurchaseRequest that should be stored
     * @return successful operation
     */
    PayrollPegawaiThrService.prototype.getPayrollPegawaiThrsResponse = function (filter) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        if (filter != null)
            __params = __params.set('filter', filter.toString());
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/payroll/pegawai_thrs", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Get all Pegawai_thrs
     * @param filter PurchaseRequest that should be stored
     * @return successful operation
     */
    PayrollPegawaiThrService.prototype.getPayrollPegawaiThrs = function (filter) {
        return this.getPayrollPegawaiThrsResponse(filter).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * Store Pegawai_thr
     * @param body Pegawai_thr that should be stored
     * @return successful operation
     */
    PayrollPegawaiThrService.prototype.postPayrollPegawaiThrsResponse = function (body) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        __body = body;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/payroll/pegawai_thrs", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Store Pegawai_thr
     * @param body Pegawai_thr that should be stored
     * @return successful operation
     */
    PayrollPegawaiThrService.prototype.postPayrollPegawaiThrs = function (body) {
        return this.postPayrollPegawaiThrsResponse(body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * Get Pegawai_thr
     * @param id id of Pegawai_thr
     * @return successful operation
     */
    PayrollPegawaiThrService.prototype.getPayrollPegawaiThrsIdResponse = function (id) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + ("/payroll/pegawai_thrs/" + id), __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Get Pegawai_thr
     * @param id id of Pegawai_thr
     * @return successful operation
     */
    PayrollPegawaiThrService.prototype.getPayrollPegawaiThrsId = function (id) {
        return this.getPayrollPegawaiThrsIdResponse(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * Update Pegawai_thr
     * @param params The `PayrollPegawaiThrService.PutPayrollPegawaiThrsIdParams` containing the following parameters:
     *
     * - `id`: id of Pegawai_thr
     *
     * - `body`: Pegawai_thr that should be updated
     *
     * @return successful operation
     */
    PayrollPegawaiThrService.prototype.putPayrollPegawaiThrsIdResponse = function (params) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        __body = params.body;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('PUT', this.rootUrl + ("/payroll/pegawai_thrs/" + params.id), __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Update Pegawai_thr
     * @param params The `PayrollPegawaiThrService.PutPayrollPegawaiThrsIdParams` containing the following parameters:
     *
     * - `id`: id of Pegawai_thr
     *
     * - `body`: Pegawai_thr that should be updated
     *
     * @return successful operation
     */
    PayrollPegawaiThrService.prototype.putPayrollPegawaiThrsId = function (params) {
        return this.putPayrollPegawaiThrsIdResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * Delete Pegawai_thr
     * @param id id of Pegawai_thr
     * @return successful operation
     */
    PayrollPegawaiThrService.prototype.deletePayrollPegawaiThrsIdResponse = function (id) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('DELETE', this.rootUrl + ("/payroll/pegawai_thrs/" + id), __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Delete Pegawai_thr
     * @param id id of Pegawai_thr
     * @return successful operation
     */
    PayrollPegawaiThrService.prototype.deletePayrollPegawaiThrsId = function (id) {
        return this.deletePayrollPegawaiThrsIdResponse(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    PayrollPegawaiThrService.getPayrollPegawaiThrsPath = '/payroll/pegawai_thrs';
    PayrollPegawaiThrService.postPayrollPegawaiThrsPath = '/payroll/pegawai_thrs';
    PayrollPegawaiThrService.getPayrollPegawaiThrsIdPath = '/payroll/pegawai_thrs/{id}';
    PayrollPegawaiThrService.putPayrollPegawaiThrsIdPath = '/payroll/pegawai_thrs/{id}';
    PayrollPegawaiThrService.deletePayrollPegawaiThrsIdPath = '/payroll/pegawai_thrs/{id}';
    PayrollPegawaiThrService.ctorParameters = function () { return [
        { type: _api_configuration__WEBPACK_IMPORTED_MODULE_4__["ApiConfiguration"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    PayrollPegawaiThrService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_configuration__WEBPACK_IMPORTED_MODULE_4__["ApiConfiguration"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PayrollPegawaiThrService);
    return PayrollPegawaiThrService;
}(_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"]));



/***/ }),

/***/ "./src/app/sdk/payroll/services/payroll-pengaturan.service.ts":
/*!********************************************************************!*\
  !*** ./src/app/sdk/payroll/services/payroll-pengaturan.service.ts ***!
  \********************************************************************/
/*! exports provided: PayrollPengaturanService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PayrollPengaturanService", function() { return PayrollPengaturanService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base-service */ "./src/app/sdk/payroll/base-service.ts");
/* harmony import */ var _api_configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api-configuration */ "./src/app/sdk/payroll/api-configuration.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");

/* tslint:disable */





var PayrollPengaturanService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](PayrollPengaturanService, _super);
    function PayrollPengaturanService(config, http) {
        return _super.call(this, config, http) || this;
    }
    /**
     * Get all Pengaturans
     * @param filter PurchaseRequest that should be stored
     * @return successful operation
     */
    PayrollPengaturanService.prototype.getPayrollPengaturansResponse = function (filter) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        if (filter != null)
            __params = __params.set('filter', filter.toString());
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/payroll/pengaturans", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Get all Pengaturans
     * @param filter PurchaseRequest that should be stored
     * @return successful operation
     */
    PayrollPengaturanService.prototype.getPayrollPengaturans = function (filter) {
        return this.getPayrollPengaturansResponse(filter).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * Store Pengaturan
     * @param body Pengaturan that should be stored
     * @return successful operation
     */
    PayrollPengaturanService.prototype.postPayrollPengaturansResponse = function (body) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        __body = body;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/payroll/pengaturans", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Store Pengaturan
     * @param body Pengaturan that should be stored
     * @return successful operation
     */
    PayrollPengaturanService.prototype.postPayrollPengaturans = function (body) {
        return this.postPayrollPengaturansResponse(body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * Get Pengaturan
     * @param id id of Pengaturan
     * @return successful operation
     */
    PayrollPengaturanService.prototype.getPayrollPengaturansIdResponse = function (id) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + ("/payroll/pengaturans/" + id), __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Get Pengaturan
     * @param id id of Pengaturan
     * @return successful operation
     */
    PayrollPengaturanService.prototype.getPayrollPengaturansId = function (id) {
        return this.getPayrollPengaturansIdResponse(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * Update Pengaturan
     * @param params The `PayrollPengaturanService.PutPayrollPengaturansIdParams` containing the following parameters:
     *
     * - `id`: id of Pengaturan
     *
     * - `body`: Pengaturan that should be updated
     *
     * @return successful operation
     */
    PayrollPengaturanService.prototype.putPayrollPengaturansIdResponse = function (params) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        __body = params.body;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('PUT', this.rootUrl + ("/payroll/pengaturans/" + params.id), __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Update Pengaturan
     * @param params The `PayrollPengaturanService.PutPayrollPengaturansIdParams` containing the following parameters:
     *
     * - `id`: id of Pengaturan
     *
     * - `body`: Pengaturan that should be updated
     *
     * @return successful operation
     */
    PayrollPengaturanService.prototype.putPayrollPengaturansId = function (params) {
        return this.putPayrollPengaturansIdResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * Delete Pengaturan
     * @param id id of Pengaturan
     * @return successful operation
     */
    PayrollPengaturanService.prototype.deletePayrollPengaturansIdResponse = function (id) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('DELETE', this.rootUrl + ("/payroll/pengaturans/" + id), __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Delete Pengaturan
     * @param id id of Pengaturan
     * @return successful operation
     */
    PayrollPengaturanService.prototype.deletePayrollPengaturansId = function (id) {
        return this.deletePayrollPengaturansIdResponse(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    PayrollPengaturanService.getPayrollPengaturansPath = '/payroll/pengaturans';
    PayrollPengaturanService.postPayrollPengaturansPath = '/payroll/pengaturans';
    PayrollPengaturanService.getPayrollPengaturansIdPath = '/payroll/pengaturans/{id}';
    PayrollPengaturanService.putPayrollPengaturansIdPath = '/payroll/pengaturans/{id}';
    PayrollPengaturanService.deletePayrollPengaturansIdPath = '/payroll/pengaturans/{id}';
    PayrollPengaturanService.ctorParameters = function () { return [
        { type: _api_configuration__WEBPACK_IMPORTED_MODULE_4__["ApiConfiguration"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    PayrollPengaturanService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_configuration__WEBPACK_IMPORTED_MODULE_4__["ApiConfiguration"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PayrollPengaturanService);
    return PayrollPengaturanService;
}(_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"]));



/***/ }),

/***/ "./src/app/sdk/payroll/services/payroll-perubahan-payroll-detail.service.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/sdk/payroll/services/payroll-perubahan-payroll-detail.service.ts ***!
  \**********************************************************************************/
/*! exports provided: PayrollPerubahanPayrollDetailService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PayrollPerubahanPayrollDetailService", function() { return PayrollPerubahanPayrollDetailService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base-service */ "./src/app/sdk/payroll/base-service.ts");
/* harmony import */ var _api_configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api-configuration */ "./src/app/sdk/payroll/api-configuration.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");

/* tslint:disable */





var PayrollPerubahanPayrollDetailService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](PayrollPerubahanPayrollDetailService, _super);
    function PayrollPerubahanPayrollDetailService(config, http) {
        return _super.call(this, config, http) || this;
    }
    /**
     * Get all Perubahan_payroll_details
     * @param filter PurchaseRequest that should be stored
     * @return successful operation
     */
    PayrollPerubahanPayrollDetailService.prototype.getPayrollPerubahanPayrollDetailsResponse = function (filter) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        if (filter != null)
            __params = __params.set('filter', filter.toString());
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/payroll/perubahan_payroll_details", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Get all Perubahan_payroll_details
     * @param filter PurchaseRequest that should be stored
     * @return successful operation
     */
    PayrollPerubahanPayrollDetailService.prototype.getPayrollPerubahanPayrollDetails = function (filter) {
        return this.getPayrollPerubahanPayrollDetailsResponse(filter).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * Store Perubahan_payroll_detail
     * @param body Perubahan_payroll_detail that should be stored
     * @return successful operation
     */
    PayrollPerubahanPayrollDetailService.prototype.postPayrollPerubahanPayrollDetailsResponse = function (body) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        __body = body;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/payroll/perubahan_payroll_details", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Store Perubahan_payroll_detail
     * @param body Perubahan_payroll_detail that should be stored
     * @return successful operation
     */
    PayrollPerubahanPayrollDetailService.prototype.postPayrollPerubahanPayrollDetails = function (body) {
        return this.postPayrollPerubahanPayrollDetailsResponse(body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * Get Perubahan_payroll_detail
     * @param id id of Perubahan_payroll_detail
     * @return successful operation
     */
    PayrollPerubahanPayrollDetailService.prototype.getPayrollPerubahanPayrollDetailsIdResponse = function (id) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + ("/payroll/perubahan_payroll_details/" + id), __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Get Perubahan_payroll_detail
     * @param id id of Perubahan_payroll_detail
     * @return successful operation
     */
    PayrollPerubahanPayrollDetailService.prototype.getPayrollPerubahanPayrollDetailsId = function (id) {
        return this.getPayrollPerubahanPayrollDetailsIdResponse(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * Update Perubahan_payroll_detail
     * @param params The `PayrollPerubahanPayrollDetailService.PutPayrollPerubahanPayrollDetailsIdParams` containing the following parameters:
     *
     * - `id`: id of Perubahan_payroll_detail
     *
     * - `body`: Perubahan_payroll_detail that should be updated
     *
     * @return successful operation
     */
    PayrollPerubahanPayrollDetailService.prototype.putPayrollPerubahanPayrollDetailsIdResponse = function (params) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        __body = params.body;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('PUT', this.rootUrl + ("/payroll/perubahan_payroll_details/" + params.id), __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Update Perubahan_payroll_detail
     * @param params The `PayrollPerubahanPayrollDetailService.PutPayrollPerubahanPayrollDetailsIdParams` containing the following parameters:
     *
     * - `id`: id of Perubahan_payroll_detail
     *
     * - `body`: Perubahan_payroll_detail that should be updated
     *
     * @return successful operation
     */
    PayrollPerubahanPayrollDetailService.prototype.putPayrollPerubahanPayrollDetailsId = function (params) {
        return this.putPayrollPerubahanPayrollDetailsIdResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * Delete Perubahan_payroll_detail
     * @param id id of Perubahan_payroll_detail
     * @return successful operation
     */
    PayrollPerubahanPayrollDetailService.prototype.deletePayrollPerubahanPayrollDetailsIdResponse = function (id) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('DELETE', this.rootUrl + ("/payroll/perubahan_payroll_details/" + id), __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Delete Perubahan_payroll_detail
     * @param id id of Perubahan_payroll_detail
     * @return successful operation
     */
    PayrollPerubahanPayrollDetailService.prototype.deletePayrollPerubahanPayrollDetailsId = function (id) {
        return this.deletePayrollPerubahanPayrollDetailsIdResponse(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    PayrollPerubahanPayrollDetailService.getPayrollPerubahanPayrollDetailsPath = '/payroll/perubahan_payroll_details';
    PayrollPerubahanPayrollDetailService.postPayrollPerubahanPayrollDetailsPath = '/payroll/perubahan_payroll_details';
    PayrollPerubahanPayrollDetailService.getPayrollPerubahanPayrollDetailsIdPath = '/payroll/perubahan_payroll_details/{id}';
    PayrollPerubahanPayrollDetailService.putPayrollPerubahanPayrollDetailsIdPath = '/payroll/perubahan_payroll_details/{id}';
    PayrollPerubahanPayrollDetailService.deletePayrollPerubahanPayrollDetailsIdPath = '/payroll/perubahan_payroll_details/{id}';
    PayrollPerubahanPayrollDetailService.ctorParameters = function () { return [
        { type: _api_configuration__WEBPACK_IMPORTED_MODULE_4__["ApiConfiguration"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    PayrollPerubahanPayrollDetailService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_configuration__WEBPACK_IMPORTED_MODULE_4__["ApiConfiguration"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PayrollPerubahanPayrollDetailService);
    return PayrollPerubahanPayrollDetailService;
}(_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"]));



/***/ }),

/***/ "./src/app/sdk/payroll/services/payroll-perubahan-payroll.service.ts":
/*!***************************************************************************!*\
  !*** ./src/app/sdk/payroll/services/payroll-perubahan-payroll.service.ts ***!
  \***************************************************************************/
/*! exports provided: PayrollPerubahanPayrollService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PayrollPerubahanPayrollService", function() { return PayrollPerubahanPayrollService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base-service */ "./src/app/sdk/payroll/base-service.ts");
/* harmony import */ var _api_configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api-configuration */ "./src/app/sdk/payroll/api-configuration.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");

/* tslint:disable */





var PayrollPerubahanPayrollService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](PayrollPerubahanPayrollService, _super);
    function PayrollPerubahanPayrollService(config, http) {
        return _super.call(this, config, http) || this;
    }
    /**
     * Get all Perubahan_payrolls
     * @param filter PurchaseRequest that should be stored
     * @return successful operation
     */
    PayrollPerubahanPayrollService.prototype.getPayrollPerubahanPayrollsResponse = function (filter) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        if (filter != null)
            __params = __params.set('filter', filter.toString());
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/payroll/perubahan_payrolls", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Get all Perubahan_payrolls
     * @param filter PurchaseRequest that should be stored
     * @return successful operation
     */
    PayrollPerubahanPayrollService.prototype.getPayrollPerubahanPayrolls = function (filter) {
        return this.getPayrollPerubahanPayrollsResponse(filter).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * Store Perubahan_payroll
     * @param body Perubahan_payroll that should be stored
     * @return successful operation
     */
    PayrollPerubahanPayrollService.prototype.postPayrollPerubahanPayrollsResponse = function (body) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        __body = body;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/payroll/perubahan_payrolls", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Store Perubahan_payroll
     * @param body Perubahan_payroll that should be stored
     * @return successful operation
     */
    PayrollPerubahanPayrollService.prototype.postPayrollPerubahanPayrolls = function (body) {
        return this.postPayrollPerubahanPayrollsResponse(body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * Get Perubahan_payroll
     * @param id id of Perubahan_payroll
     * @return successful operation
     */
    PayrollPerubahanPayrollService.prototype.getPayrollPerubahanPayrollsIdResponse = function (id) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + ("/payroll/perubahan_payrolls/" + id), __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Get Perubahan_payroll
     * @param id id of Perubahan_payroll
     * @return successful operation
     */
    PayrollPerubahanPayrollService.prototype.getPayrollPerubahanPayrollsId = function (id) {
        return this.getPayrollPerubahanPayrollsIdResponse(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * Update Perubahan_payroll
     * @param params The `PayrollPerubahanPayrollService.PutPayrollPerubahanPayrollsIdParams` containing the following parameters:
     *
     * - `id`: id of Perubahan_payroll
     *
     * - `body`: Perubahan_payroll that should be updated
     *
     * @return successful operation
     */
    PayrollPerubahanPayrollService.prototype.putPayrollPerubahanPayrollsIdResponse = function (params) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        __body = params.body;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('PUT', this.rootUrl + ("/payroll/perubahan_payrolls/" + params.id), __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Update Perubahan_payroll
     * @param params The `PayrollPerubahanPayrollService.PutPayrollPerubahanPayrollsIdParams` containing the following parameters:
     *
     * - `id`: id of Perubahan_payroll
     *
     * - `body`: Perubahan_payroll that should be updated
     *
     * @return successful operation
     */
    PayrollPerubahanPayrollService.prototype.putPayrollPerubahanPayrollsId = function (params) {
        return this.putPayrollPerubahanPayrollsIdResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * Delete Perubahan_payroll
     * @param id id of Perubahan_payroll
     * @return successful operation
     */
    PayrollPerubahanPayrollService.prototype.deletePayrollPerubahanPayrollsIdResponse = function (id) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('DELETE', this.rootUrl + ("/payroll/perubahan_payrolls/" + id), __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Delete Perubahan_payroll
     * @param id id of Perubahan_payroll
     * @return successful operation
     */
    PayrollPerubahanPayrollService.prototype.deletePayrollPerubahanPayrollsId = function (id) {
        return this.deletePayrollPerubahanPayrollsIdResponse(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    PayrollPerubahanPayrollService.getPayrollPerubahanPayrollsPath = '/payroll/perubahan_payrolls';
    PayrollPerubahanPayrollService.postPayrollPerubahanPayrollsPath = '/payroll/perubahan_payrolls';
    PayrollPerubahanPayrollService.getPayrollPerubahanPayrollsIdPath = '/payroll/perubahan_payrolls/{id}';
    PayrollPerubahanPayrollService.putPayrollPerubahanPayrollsIdPath = '/payroll/perubahan_payrolls/{id}';
    PayrollPerubahanPayrollService.deletePayrollPerubahanPayrollsIdPath = '/payroll/perubahan_payrolls/{id}';
    PayrollPerubahanPayrollService.ctorParameters = function () { return [
        { type: _api_configuration__WEBPACK_IMPORTED_MODULE_4__["ApiConfiguration"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    PayrollPerubahanPayrollService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_configuration__WEBPACK_IMPORTED_MODULE_4__["ApiConfiguration"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PayrollPerubahanPayrollService);
    return PayrollPerubahanPayrollService;
}(_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"]));



/***/ }),

/***/ "./src/app/sdk/payroll/services/payroll-perusahaan.service.ts":
/*!********************************************************************!*\
  !*** ./src/app/sdk/payroll/services/payroll-perusahaan.service.ts ***!
  \********************************************************************/
/*! exports provided: PayrollPerusahaanService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PayrollPerusahaanService", function() { return PayrollPerusahaanService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base-service */ "./src/app/sdk/payroll/base-service.ts");
/* harmony import */ var _api_configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api-configuration */ "./src/app/sdk/payroll/api-configuration.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");

/* tslint:disable */





var PayrollPerusahaanService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](PayrollPerusahaanService, _super);
    function PayrollPerusahaanService(config, http) {
        return _super.call(this, config, http) || this;
    }
    /**
     * Get all Perusahaans
     * @param filter PurchaseRequest that should be stored
     * @return successful operation
     */
    PayrollPerusahaanService.prototype.getPayrollPerusahaansResponse = function (filter) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        if (filter != null)
            __params = __params.set('filter', filter.toString());
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/payroll/perusahaans", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Get all Perusahaans
     * @param filter PurchaseRequest that should be stored
     * @return successful operation
     */
    PayrollPerusahaanService.prototype.getPayrollPerusahaans = function (filter) {
        return this.getPayrollPerusahaansResponse(filter).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * Store Perusahaan
     * @param body Perusahaan that should be stored
     * @return successful operation
     */
    PayrollPerusahaanService.prototype.postPayrollPerusahaansResponse = function (body) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        __body = body;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/payroll/perusahaans", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Store Perusahaan
     * @param body Perusahaan that should be stored
     * @return successful operation
     */
    PayrollPerusahaanService.prototype.postPayrollPerusahaans = function (body) {
        return this.postPayrollPerusahaansResponse(body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * Get Perusahaan
     * @param id id of Perusahaan
     * @return successful operation
     */
    PayrollPerusahaanService.prototype.getPayrollPerusahaansIdResponse = function (id) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + ("/payroll/perusahaans/" + id), __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Get Perusahaan
     * @param id id of Perusahaan
     * @return successful operation
     */
    PayrollPerusahaanService.prototype.getPayrollPerusahaansId = function (id) {
        return this.getPayrollPerusahaansIdResponse(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * Update Perusahaan
     * @param params The `PayrollPerusahaanService.PutPayrollPerusahaansIdParams` containing the following parameters:
     *
     * - `id`: id of Perusahaan
     *
     * - `body`: Perusahaan that should be updated
     *
     * @return successful operation
     */
    PayrollPerusahaanService.prototype.putPayrollPerusahaansIdResponse = function (params) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        __body = params.body;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('PUT', this.rootUrl + ("/payroll/perusahaans/" + params.id), __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Update Perusahaan
     * @param params The `PayrollPerusahaanService.PutPayrollPerusahaansIdParams` containing the following parameters:
     *
     * - `id`: id of Perusahaan
     *
     * - `body`: Perusahaan that should be updated
     *
     * @return successful operation
     */
    PayrollPerusahaanService.prototype.putPayrollPerusahaansId = function (params) {
        return this.putPayrollPerusahaansIdResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * Delete Perusahaan
     * @param id id of Perusahaan
     * @return successful operation
     */
    PayrollPerusahaanService.prototype.deletePayrollPerusahaansIdResponse = function (id) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('DELETE', this.rootUrl + ("/payroll/perusahaans/" + id), __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Delete Perusahaan
     * @param id id of Perusahaan
     * @return successful operation
     */
    PayrollPerusahaanService.prototype.deletePayrollPerusahaansId = function (id) {
        return this.deletePayrollPerusahaansIdResponse(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    PayrollPerusahaanService.getPayrollPerusahaansPath = '/payroll/perusahaans';
    PayrollPerusahaanService.postPayrollPerusahaansPath = '/payroll/perusahaans';
    PayrollPerusahaanService.getPayrollPerusahaansIdPath = '/payroll/perusahaans/{id}';
    PayrollPerusahaanService.putPayrollPerusahaansIdPath = '/payroll/perusahaans/{id}';
    PayrollPerusahaanService.deletePayrollPerusahaansIdPath = '/payroll/perusahaans/{id}';
    PayrollPerusahaanService.ctorParameters = function () { return [
        { type: _api_configuration__WEBPACK_IMPORTED_MODULE_4__["ApiConfiguration"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    PayrollPerusahaanService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_configuration__WEBPACK_IMPORTED_MODULE_4__["ApiConfiguration"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PayrollPerusahaanService);
    return PayrollPerusahaanService;
}(_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"]));



/***/ }),

/***/ "./src/app/sdk/payroll/services/payroll-perusahaanp.service.ts":
/*!*********************************************************************!*\
  !*** ./src/app/sdk/payroll/services/payroll-perusahaanp.service.ts ***!
  \*********************************************************************/
/*! exports provided: PayrollPerusahaanpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PayrollPerusahaanpService", function() { return PayrollPerusahaanpService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base-service */ "./src/app/sdk/payroll/base-service.ts");
/* harmony import */ var _api_configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api-configuration */ "./src/app/sdk/payroll/api-configuration.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");

/* tslint:disable */





var PayrollPerusahaanpService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](PayrollPerusahaanpService, _super);
    function PayrollPerusahaanpService(config, http) {
        return _super.call(this, config, http) || this;
    }
    /**
     * Get all Perusahaanps
     * @param filter PurchaseRequest that should be stored
     * @return successful operation
     */
    PayrollPerusahaanpService.prototype.getPayrollPerusahaanpsResponse = function (filter) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        if (filter != null)
            __params = __params.set('filter', filter.toString());
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/payroll/perusahaanps", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Get all Perusahaanps
     * @param filter PurchaseRequest that should be stored
     * @return successful operation
     */
    PayrollPerusahaanpService.prototype.getPayrollPerusahaanps = function (filter) {
        return this.getPayrollPerusahaanpsResponse(filter).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * Store Perusahaanp
     * @param body Perusahaanp that should be stored
     * @return successful operation
     */
    PayrollPerusahaanpService.prototype.postPayrollPerusahaanpsResponse = function (body) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        __body = body;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/payroll/perusahaanps", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Store Perusahaanp
     * @param body Perusahaanp that should be stored
     * @return successful operation
     */
    PayrollPerusahaanpService.prototype.postPayrollPerusahaanps = function (body) {
        return this.postPayrollPerusahaanpsResponse(body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * Get Perusahaanp
     * @param id id of Perusahaanp
     * @return successful operation
     */
    PayrollPerusahaanpService.prototype.getPayrollPerusahaanpsIdResponse = function (id) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + ("/payroll/perusahaanps/" + id), __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Get Perusahaanp
     * @param id id of Perusahaanp
     * @return successful operation
     */
    PayrollPerusahaanpService.prototype.getPayrollPerusahaanpsId = function (id) {
        return this.getPayrollPerusahaanpsIdResponse(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * Update Perusahaanp
     * @param params The `PayrollPerusahaanpService.PutPayrollPerusahaanpsIdParams` containing the following parameters:
     *
     * - `id`: id of Perusahaanp
     *
     * - `body`: Perusahaanp that should be updated
     *
     * @return successful operation
     */
    PayrollPerusahaanpService.prototype.putPayrollPerusahaanpsIdResponse = function (params) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        __body = params.body;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('PUT', this.rootUrl + ("/payroll/perusahaanps/" + params.id), __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Update Perusahaanp
     * @param params The `PayrollPerusahaanpService.PutPayrollPerusahaanpsIdParams` containing the following parameters:
     *
     * - `id`: id of Perusahaanp
     *
     * - `body`: Perusahaanp that should be updated
     *
     * @return successful operation
     */
    PayrollPerusahaanpService.prototype.putPayrollPerusahaanpsId = function (params) {
        return this.putPayrollPerusahaanpsIdResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * Delete Perusahaanp
     * @param id id of Perusahaanp
     * @return successful operation
     */
    PayrollPerusahaanpService.prototype.deletePayrollPerusahaanpsIdResponse = function (id) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('DELETE', this.rootUrl + ("/payroll/perusahaanps/" + id), __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Delete Perusahaanp
     * @param id id of Perusahaanp
     * @return successful operation
     */
    PayrollPerusahaanpService.prototype.deletePayrollPerusahaanpsId = function (id) {
        return this.deletePayrollPerusahaanpsIdResponse(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    PayrollPerusahaanpService.getPayrollPerusahaanpsPath = '/payroll/perusahaanps';
    PayrollPerusahaanpService.postPayrollPerusahaanpsPath = '/payroll/perusahaanps';
    PayrollPerusahaanpService.getPayrollPerusahaanpsIdPath = '/payroll/perusahaanps/{id}';
    PayrollPerusahaanpService.putPayrollPerusahaanpsIdPath = '/payroll/perusahaanps/{id}';
    PayrollPerusahaanpService.deletePayrollPerusahaanpsIdPath = '/payroll/perusahaanps/{id}';
    PayrollPerusahaanpService.ctorParameters = function () { return [
        { type: _api_configuration__WEBPACK_IMPORTED_MODULE_4__["ApiConfiguration"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    PayrollPerusahaanpService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_configuration__WEBPACK_IMPORTED_MODULE_4__["ApiConfiguration"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PayrollPerusahaanpService);
    return PayrollPerusahaanpService;
}(_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"]));



/***/ }),

/***/ "./src/app/sdk/payroll/services/payroll-pkp.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/sdk/payroll/services/payroll-pkp.service.ts ***!
  \*************************************************************/
/*! exports provided: PayrollPkpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PayrollPkpService", function() { return PayrollPkpService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base-service */ "./src/app/sdk/payroll/base-service.ts");
/* harmony import */ var _api_configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api-configuration */ "./src/app/sdk/payroll/api-configuration.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");

/* tslint:disable */





var PayrollPkpService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](PayrollPkpService, _super);
    function PayrollPkpService(config, http) {
        return _super.call(this, config, http) || this;
    }
    /**
     * Get all Pkps
     * @param filter PurchaseRequest that should be stored
     * @return successful operation
     */
    PayrollPkpService.prototype.getPayrollPkpsResponse = function (filter) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        if (filter != null)
            __params = __params.set('filter', filter.toString());
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/payroll/pkps", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Get all Pkps
     * @param filter PurchaseRequest that should be stored
     * @return successful operation
     */
    PayrollPkpService.prototype.getPayrollPkps = function (filter) {
        return this.getPayrollPkpsResponse(filter).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * Store Pkp
     * @param body Pkp that should be stored
     * @return successful operation
     */
    PayrollPkpService.prototype.postPayrollPkpsResponse = function (body) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        __body = body;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/payroll/pkps", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Store Pkp
     * @param body Pkp that should be stored
     * @return successful operation
     */
    PayrollPkpService.prototype.postPayrollPkps = function (body) {
        return this.postPayrollPkpsResponse(body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * Get Pkp
     * @param id id of Pkp
     * @return successful operation
     */
    PayrollPkpService.prototype.getPayrollPkpsIdResponse = function (id) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + ("/payroll/pkps/" + id), __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Get Pkp
     * @param id id of Pkp
     * @return successful operation
     */
    PayrollPkpService.prototype.getPayrollPkpsId = function (id) {
        return this.getPayrollPkpsIdResponse(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * Update Pkp
     * @param params The `PayrollPkpService.PutPayrollPkpsIdParams` containing the following parameters:
     *
     * - `id`: id of Pkp
     *
     * - `body`: Pkp that should be updated
     *
     * @return successful operation
     */
    PayrollPkpService.prototype.putPayrollPkpsIdResponse = function (params) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        __body = params.body;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('PUT', this.rootUrl + ("/payroll/pkps/" + params.id), __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Update Pkp
     * @param params The `PayrollPkpService.PutPayrollPkpsIdParams` containing the following parameters:
     *
     * - `id`: id of Pkp
     *
     * - `body`: Pkp that should be updated
     *
     * @return successful operation
     */
    PayrollPkpService.prototype.putPayrollPkpsId = function (params) {
        return this.putPayrollPkpsIdResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * Delete Pkp
     * @param id id of Pkp
     * @return successful operation
     */
    PayrollPkpService.prototype.deletePayrollPkpsIdResponse = function (id) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('DELETE', this.rootUrl + ("/payroll/pkps/" + id), __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Delete Pkp
     * @param id id of Pkp
     * @return successful operation
     */
    PayrollPkpService.prototype.deletePayrollPkpsId = function (id) {
        return this.deletePayrollPkpsIdResponse(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    PayrollPkpService.getPayrollPkpsPath = '/payroll/pkps';
    PayrollPkpService.postPayrollPkpsPath = '/payroll/pkps';
    PayrollPkpService.getPayrollPkpsIdPath = '/payroll/pkps/{id}';
    PayrollPkpService.putPayrollPkpsIdPath = '/payroll/pkps/{id}';
    PayrollPkpService.deletePayrollPkpsIdPath = '/payroll/pkps/{id}';
    PayrollPkpService.ctorParameters = function () { return [
        { type: _api_configuration__WEBPACK_IMPORTED_MODULE_4__["ApiConfiguration"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    PayrollPkpService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_configuration__WEBPACK_IMPORTED_MODULE_4__["ApiConfiguration"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PayrollPkpService);
    return PayrollPkpService;
}(_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"]));



/***/ }),

/***/ "./src/app/sdk/payroll/services/payroll-print-template-detail-komponen.service.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/sdk/payroll/services/payroll-print-template-detail-komponen.service.ts ***!
  \****************************************************************************************/
/*! exports provided: PayrollPrintTemplateDetailKomponenService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PayrollPrintTemplateDetailKomponenService", function() { return PayrollPrintTemplateDetailKomponenService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base-service */ "./src/app/sdk/payroll/base-service.ts");
/* harmony import */ var _api_configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api-configuration */ "./src/app/sdk/payroll/api-configuration.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");

/* tslint:disable */





var PayrollPrintTemplateDetailKomponenService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](PayrollPrintTemplateDetailKomponenService, _super);
    function PayrollPrintTemplateDetailKomponenService(config, http) {
        return _super.call(this, config, http) || this;
    }
    /**
     * Get all Print_template_detail_komponens
     * @param filter PurchaseRequest that should be stored
     * @return successful operation
     */
    PayrollPrintTemplateDetailKomponenService.prototype.getPayrollPrintTemplateDetailKomponensResponse = function (filter) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        if (filter != null)
            __params = __params.set('filter', filter.toString());
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/payroll/print_template_detail_komponens", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Get all Print_template_detail_komponens
     * @param filter PurchaseRequest that should be stored
     * @return successful operation
     */
    PayrollPrintTemplateDetailKomponenService.prototype.getPayrollPrintTemplateDetailKomponens = function (filter) {
        return this.getPayrollPrintTemplateDetailKomponensResponse(filter).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * Store Print_template_detail_komponen
     * @param body Print_template_detail_komponen that should be stored
     * @return successful operation
     */
    PayrollPrintTemplateDetailKomponenService.prototype.postPayrollPrintTemplateDetailKomponensResponse = function (body) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        __body = body;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/payroll/print_template_detail_komponens", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Store Print_template_detail_komponen
     * @param body Print_template_detail_komponen that should be stored
     * @return successful operation
     */
    PayrollPrintTemplateDetailKomponenService.prototype.postPayrollPrintTemplateDetailKomponens = function (body) {
        return this.postPayrollPrintTemplateDetailKomponensResponse(body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * Get Print_template_detail_komponen
     * @param id id of Print_template_detail_komponen
     * @return successful operation
     */
    PayrollPrintTemplateDetailKomponenService.prototype.getPayrollPrintTemplateDetailKomponensIdResponse = function (id) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + ("/payroll/print_template_detail_komponens/" + id), __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Get Print_template_detail_komponen
     * @param id id of Print_template_detail_komponen
     * @return successful operation
     */
    PayrollPrintTemplateDetailKomponenService.prototype.getPayrollPrintTemplateDetailKomponensId = function (id) {
        return this.getPayrollPrintTemplateDetailKomponensIdResponse(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * Update Print_template_detail_komponen
     * @param params The `PayrollPrintTemplateDetailKomponenService.PutPayrollPrintTemplateDetailKomponensIdParams` containing the following parameters:
     *
     * - `id`: id of Print_template_detail_komponen
     *
     * - `body`: Print_template_detail_komponen that should be updated
     *
     * @return successful operation
     */
    PayrollPrintTemplateDetailKomponenService.prototype.putPayrollPrintTemplateDetailKomponensIdResponse = function (params) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        __body = params.body;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('PUT', this.rootUrl + ("/payroll/print_template_detail_komponens/" + params.id), __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Update Print_template_detail_komponen
     * @param params The `PayrollPrintTemplateDetailKomponenService.PutPayrollPrintTemplateDetailKomponensIdParams` containing the following parameters:
     *
     * - `id`: id of Print_template_detail_komponen
     *
     * - `body`: Print_template_detail_komponen that should be updated
     *
     * @return successful operation
     */
    PayrollPrintTemplateDetailKomponenService.prototype.putPayrollPrintTemplateDetailKomponensId = function (params) {
        return this.putPayrollPrintTemplateDetailKomponensIdResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * Delete Print_template_detail_komponen
     * @param id id of Print_template_detail_komponen
     * @return successful operation
     */
    PayrollPrintTemplateDetailKomponenService.prototype.deletePayrollPrintTemplateDetailKomponensIdResponse = function (id) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('DELETE', this.rootUrl + ("/payroll/print_template_detail_komponens/" + id), __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Delete Print_template_detail_komponen
     * @param id id of Print_template_detail_komponen
     * @return successful operation
     */
    PayrollPrintTemplateDetailKomponenService.prototype.deletePayrollPrintTemplateDetailKomponensId = function (id) {
        return this.deletePayrollPrintTemplateDetailKomponensIdResponse(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    PayrollPrintTemplateDetailKomponenService.getPayrollPrintTemplateDetailKomponensPath = '/payroll/print_template_detail_komponens';
    PayrollPrintTemplateDetailKomponenService.postPayrollPrintTemplateDetailKomponensPath = '/payroll/print_template_detail_komponens';
    PayrollPrintTemplateDetailKomponenService.getPayrollPrintTemplateDetailKomponensIdPath = '/payroll/print_template_detail_komponens/{id}';
    PayrollPrintTemplateDetailKomponenService.putPayrollPrintTemplateDetailKomponensIdPath = '/payroll/print_template_detail_komponens/{id}';
    PayrollPrintTemplateDetailKomponenService.deletePayrollPrintTemplateDetailKomponensIdPath = '/payroll/print_template_detail_komponens/{id}';
    PayrollPrintTemplateDetailKomponenService.ctorParameters = function () { return [
        { type: _api_configuration__WEBPACK_IMPORTED_MODULE_4__["ApiConfiguration"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    PayrollPrintTemplateDetailKomponenService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_configuration__WEBPACK_IMPORTED_MODULE_4__["ApiConfiguration"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PayrollPrintTemplateDetailKomponenService);
    return PayrollPrintTemplateDetailKomponenService;
}(_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"]));



/***/ }),

/***/ "./src/app/sdk/payroll/services/payroll-print-template-detail.service.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/sdk/payroll/services/payroll-print-template-detail.service.ts ***!
  \*******************************************************************************/
/*! exports provided: PayrollPrintTemplateDetailService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PayrollPrintTemplateDetailService", function() { return PayrollPrintTemplateDetailService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base-service */ "./src/app/sdk/payroll/base-service.ts");
/* harmony import */ var _api_configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api-configuration */ "./src/app/sdk/payroll/api-configuration.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");

/* tslint:disable */





var PayrollPrintTemplateDetailService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](PayrollPrintTemplateDetailService, _super);
    function PayrollPrintTemplateDetailService(config, http) {
        return _super.call(this, config, http) || this;
    }
    /**
     * Get all Print_template_details
     * @param filter PurchaseRequest that should be stored
     * @return successful operation
     */
    PayrollPrintTemplateDetailService.prototype.getPayrollPrintTemplateDetailsResponse = function (filter) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        if (filter != null)
            __params = __params.set('filter', filter.toString());
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/payroll/print_template_details", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Get all Print_template_details
     * @param filter PurchaseRequest that should be stored
     * @return successful operation
     */
    PayrollPrintTemplateDetailService.prototype.getPayrollPrintTemplateDetails = function (filter) {
        return this.getPayrollPrintTemplateDetailsResponse(filter).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * Store Print_template_detail
     * @param body Print_template_detail that should be stored
     * @return successful operation
     */
    PayrollPrintTemplateDetailService.prototype.postPayrollPrintTemplateDetailsResponse = function (body) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        __body = body;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/payroll/print_template_details", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Store Print_template_detail
     * @param body Print_template_detail that should be stored
     * @return successful operation
     */
    PayrollPrintTemplateDetailService.prototype.postPayrollPrintTemplateDetails = function (body) {
        return this.postPayrollPrintTemplateDetailsResponse(body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * Get Print_template_detail
     * @param id id of Print_template_detail
     * @return successful operation
     */
    PayrollPrintTemplateDetailService.prototype.getPayrollPrintTemplateDetailsIdResponse = function (id) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + ("/payroll/print_template_details/" + id), __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Get Print_template_detail
     * @param id id of Print_template_detail
     * @return successful operation
     */
    PayrollPrintTemplateDetailService.prototype.getPayrollPrintTemplateDetailsId = function (id) {
        return this.getPayrollPrintTemplateDetailsIdResponse(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * Update Print_template_detail
     * @param params The `PayrollPrintTemplateDetailService.PutPayrollPrintTemplateDetailsIdParams` containing the following parameters:
     *
     * - `id`: id of Print_template_detail
     *
     * - `body`: Print_template_detail that should be updated
     *
     * @return successful operation
     */
    PayrollPrintTemplateDetailService.prototype.putPayrollPrintTemplateDetailsIdResponse = function (params) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        __body = params.body;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('PUT', this.rootUrl + ("/payroll/print_template_details/" + params.id), __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Update Print_template_detail
     * @param params The `PayrollPrintTemplateDetailService.PutPayrollPrintTemplateDetailsIdParams` containing the following parameters:
     *
     * - `id`: id of Print_template_detail
     *
     * - `body`: Print_template_detail that should be updated
     *
     * @return successful operation
     */
    PayrollPrintTemplateDetailService.prototype.putPayrollPrintTemplateDetailsId = function (params) {
        return this.putPayrollPrintTemplateDetailsIdResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * Delete Print_template_detail
     * @param id id of Print_template_detail
     * @return successful operation
     */
    PayrollPrintTemplateDetailService.prototype.deletePayrollPrintTemplateDetailsIdResponse = function (id) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('DELETE', this.rootUrl + ("/payroll/print_template_details/" + id), __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Delete Print_template_detail
     * @param id id of Print_template_detail
     * @return successful operation
     */
    PayrollPrintTemplateDetailService.prototype.deletePayrollPrintTemplateDetailsId = function (id) {
        return this.deletePayrollPrintTemplateDetailsIdResponse(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    PayrollPrintTemplateDetailService.getPayrollPrintTemplateDetailsPath = '/payroll/print_template_details';
    PayrollPrintTemplateDetailService.postPayrollPrintTemplateDetailsPath = '/payroll/print_template_details';
    PayrollPrintTemplateDetailService.getPayrollPrintTemplateDetailsIdPath = '/payroll/print_template_details/{id}';
    PayrollPrintTemplateDetailService.putPayrollPrintTemplateDetailsIdPath = '/payroll/print_template_details/{id}';
    PayrollPrintTemplateDetailService.deletePayrollPrintTemplateDetailsIdPath = '/payroll/print_template_details/{id}';
    PayrollPrintTemplateDetailService.ctorParameters = function () { return [
        { type: _api_configuration__WEBPACK_IMPORTED_MODULE_4__["ApiConfiguration"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    PayrollPrintTemplateDetailService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_configuration__WEBPACK_IMPORTED_MODULE_4__["ApiConfiguration"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PayrollPrintTemplateDetailService);
    return PayrollPrintTemplateDetailService;
}(_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"]));



/***/ }),

/***/ "./src/app/sdk/payroll/services/payroll-print-template.service.ts":
/*!************************************************************************!*\
  !*** ./src/app/sdk/payroll/services/payroll-print-template.service.ts ***!
  \************************************************************************/
/*! exports provided: PayrollPrintTemplateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PayrollPrintTemplateService", function() { return PayrollPrintTemplateService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base-service */ "./src/app/sdk/payroll/base-service.ts");
/* harmony import */ var _api_configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api-configuration */ "./src/app/sdk/payroll/api-configuration.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");

/* tslint:disable */





var PayrollPrintTemplateService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](PayrollPrintTemplateService, _super);
    function PayrollPrintTemplateService(config, http) {
        return _super.call(this, config, http) || this;
    }
    /**
     * Get all Print_templates
     * @param filter PurchaseRequest that should be stored
     * @return successful operation
     */
    PayrollPrintTemplateService.prototype.getPayrollPrintTemplatesResponse = function (filter) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        if (filter != null)
            __params = __params.set('filter', filter.toString());
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/payroll/print_templates", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Get all Print_templates
     * @param filter PurchaseRequest that should be stored
     * @return successful operation
     */
    PayrollPrintTemplateService.prototype.getPayrollPrintTemplates = function (filter) {
        return this.getPayrollPrintTemplatesResponse(filter).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * Store Print_template
     * @param body Print_template that should be stored
     * @return successful operation
     */
    PayrollPrintTemplateService.prototype.postPayrollPrintTemplatesResponse = function (body) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        __body = body;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/payroll/print_templates", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Store Print_template
     * @param body Print_template that should be stored
     * @return successful operation
     */
    PayrollPrintTemplateService.prototype.postPayrollPrintTemplates = function (body) {
        return this.postPayrollPrintTemplatesResponse(body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * Get Print_template
     * @param id id of Print_template
     * @return successful operation
     */
    PayrollPrintTemplateService.prototype.getPayrollPrintTemplatesIdResponse = function (id) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + ("/payroll/print_templates/" + id), __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Get Print_template
     * @param id id of Print_template
     * @return successful operation
     */
    PayrollPrintTemplateService.prototype.getPayrollPrintTemplatesId = function (id) {
        return this.getPayrollPrintTemplatesIdResponse(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * Update Print_template
     * @param params The `PayrollPrintTemplateService.PutPayrollPrintTemplatesIdParams` containing the following parameters:
     *
     * - `id`: id of Print_template
     *
     * - `body`: Print_template that should be updated
     *
     * @return successful operation
     */
    PayrollPrintTemplateService.prototype.putPayrollPrintTemplatesIdResponse = function (params) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        __body = params.body;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('PUT', this.rootUrl + ("/payroll/print_templates/" + params.id), __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Update Print_template
     * @param params The `PayrollPrintTemplateService.PutPayrollPrintTemplatesIdParams` containing the following parameters:
     *
     * - `id`: id of Print_template
     *
     * - `body`: Print_template that should be updated
     *
     * @return successful operation
     */
    PayrollPrintTemplateService.prototype.putPayrollPrintTemplatesId = function (params) {
        return this.putPayrollPrintTemplatesIdResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * Delete Print_template
     * @param id id of Print_template
     * @return successful operation
     */
    PayrollPrintTemplateService.prototype.deletePayrollPrintTemplatesIdResponse = function (id) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('DELETE', this.rootUrl + ("/payroll/print_templates/" + id), __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Delete Print_template
     * @param id id of Print_template
     * @return successful operation
     */
    PayrollPrintTemplateService.prototype.deletePayrollPrintTemplatesId = function (id) {
        return this.deletePayrollPrintTemplatesIdResponse(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    PayrollPrintTemplateService.getPayrollPrintTemplatesPath = '/payroll/print_templates';
    PayrollPrintTemplateService.postPayrollPrintTemplatesPath = '/payroll/print_templates';
    PayrollPrintTemplateService.getPayrollPrintTemplatesIdPath = '/payroll/print_templates/{id}';
    PayrollPrintTemplateService.putPayrollPrintTemplatesIdPath = '/payroll/print_templates/{id}';
    PayrollPrintTemplateService.deletePayrollPrintTemplatesIdPath = '/payroll/print_templates/{id}';
    PayrollPrintTemplateService.ctorParameters = function () { return [
        { type: _api_configuration__WEBPACK_IMPORTED_MODULE_4__["ApiConfiguration"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    PayrollPrintTemplateService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_configuration__WEBPACK_IMPORTED_MODULE_4__["ApiConfiguration"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PayrollPrintTemplateService);
    return PayrollPrintTemplateService;
}(_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"]));



/***/ }),

/***/ "./src/app/sdk/payroll/services/payroll-ptkp.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/sdk/payroll/services/payroll-ptkp.service.ts ***!
  \**************************************************************/
/*! exports provided: PayrollPtkpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PayrollPtkpService", function() { return PayrollPtkpService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base-service */ "./src/app/sdk/payroll/base-service.ts");
/* harmony import */ var _api_configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api-configuration */ "./src/app/sdk/payroll/api-configuration.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");

/* tslint:disable */





var PayrollPtkpService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](PayrollPtkpService, _super);
    function PayrollPtkpService(config, http) {
        return _super.call(this, config, http) || this;
    }
    /**
     * Get all Ptkps
     * @param filter PurchaseRequest that should be stored
     * @return successful operation
     */
    PayrollPtkpService.prototype.getPayrollPtkpsResponse = function (filter) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        if (filter != null)
            __params = __params.set('filter', filter.toString());
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/payroll/ptkps", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Get all Ptkps
     * @param filter PurchaseRequest that should be stored
     * @return successful operation
     */
    PayrollPtkpService.prototype.getPayrollPtkps = function (filter) {
        return this.getPayrollPtkpsResponse(filter).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * Store Ptkp
     * @param body Ptkp that should be stored
     * @return successful operation
     */
    PayrollPtkpService.prototype.postPayrollPtkpsResponse = function (body) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        __body = body;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/payroll/ptkps", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Store Ptkp
     * @param body Ptkp that should be stored
     * @return successful operation
     */
    PayrollPtkpService.prototype.postPayrollPtkps = function (body) {
        return this.postPayrollPtkpsResponse(body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * Get Ptkp
     * @param id id of Ptkp
     * @return successful operation
     */
    PayrollPtkpService.prototype.getPayrollPtkpsIdResponse = function (id) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + ("/payroll/ptkps/" + id), __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Get Ptkp
     * @param id id of Ptkp
     * @return successful operation
     */
    PayrollPtkpService.prototype.getPayrollPtkpsId = function (id) {
        return this.getPayrollPtkpsIdResponse(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * Update Ptkp
     * @param params The `PayrollPtkpService.PutPayrollPtkpsIdParams` containing the following parameters:
     *
     * - `id`: id of Ptkp
     *
     * - `body`: Ptkp that should be updated
     *
     * @return successful operation
     */
    PayrollPtkpService.prototype.putPayrollPtkpsIdResponse = function (params) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        __body = params.body;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('PUT', this.rootUrl + ("/payroll/ptkps/" + params.id), __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Update Ptkp
     * @param params The `PayrollPtkpService.PutPayrollPtkpsIdParams` containing the following parameters:
     *
     * - `id`: id of Ptkp
     *
     * - `body`: Ptkp that should be updated
     *
     * @return successful operation
     */
    PayrollPtkpService.prototype.putPayrollPtkpsId = function (params) {
        return this.putPayrollPtkpsIdResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * Delete Ptkp
     * @param id id of Ptkp
     * @return successful operation
     */
    PayrollPtkpService.prototype.deletePayrollPtkpsIdResponse = function (id) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('DELETE', this.rootUrl + ("/payroll/ptkps/" + id), __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Delete Ptkp
     * @param id id of Ptkp
     * @return successful operation
     */
    PayrollPtkpService.prototype.deletePayrollPtkpsId = function (id) {
        return this.deletePayrollPtkpsIdResponse(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    PayrollPtkpService.getPayrollPtkpsPath = '/payroll/ptkps';
    PayrollPtkpService.postPayrollPtkpsPath = '/payroll/ptkps';
    PayrollPtkpService.getPayrollPtkpsIdPath = '/payroll/ptkps/{id}';
    PayrollPtkpService.putPayrollPtkpsIdPath = '/payroll/ptkps/{id}';
    PayrollPtkpService.deletePayrollPtkpsIdPath = '/payroll/ptkps/{id}';
    PayrollPtkpService.ctorParameters = function () { return [
        { type: _api_configuration__WEBPACK_IMPORTED_MODULE_4__["ApiConfiguration"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    PayrollPtkpService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_configuration__WEBPACK_IMPORTED_MODULE_4__["ApiConfiguration"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PayrollPtkpService);
    return PayrollPtkpService;
}(_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"]));



/***/ }),

/***/ "./src/app/sdk/payroll/services/payroll-report-pajak.service.ts":
/*!**********************************************************************!*\
  !*** ./src/app/sdk/payroll/services/payroll-report-pajak.service.ts ***!
  \**********************************************************************/
/*! exports provided: PayrollReportPajakService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PayrollReportPajakService", function() { return PayrollReportPajakService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base-service */ "./src/app/sdk/payroll/base-service.ts");
/* harmony import */ var _api_configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api-configuration */ "./src/app/sdk/payroll/api-configuration.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");

/* tslint:disable */





var PayrollReportPajakService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](PayrollReportPajakService, _super);
    function PayrollReportPajakService(config, http) {
        return _super.call(this, config, http) || this;
    }
    /**
     * Get all Report_pajaks
     * @param filter PurchaseRequest that should be stored
     * @return successful operation
     */
    PayrollReportPajakService.prototype.getPayrollReportPajaksResponse = function (filter) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        if (filter != null)
            __params = __params.set('filter', filter.toString());
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/payroll/report_pajaks", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Get all Report_pajaks
     * @param filter PurchaseRequest that should be stored
     * @return successful operation
     */
    PayrollReportPajakService.prototype.getPayrollReportPajaks = function (filter) {
        return this.getPayrollReportPajaksResponse(filter).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * Store Report_pajak
     * @param body Report_pajak that should be stored
     * @return successful operation
     */
    PayrollReportPajakService.prototype.postPayrollReportPajaksResponse = function (body) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        __body = body;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/payroll/report_pajaks", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Store Report_pajak
     * @param body Report_pajak that should be stored
     * @return successful operation
     */
    PayrollReportPajakService.prototype.postPayrollReportPajaks = function (body) {
        return this.postPayrollReportPajaksResponse(body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * Get Report_pajak
     * @param id id of Report_pajak
     * @return successful operation
     */
    PayrollReportPajakService.prototype.getPayrollReportPajaksIdResponse = function (id) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + ("/payroll/report_pajaks/" + id), __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Get Report_pajak
     * @param id id of Report_pajak
     * @return successful operation
     */
    PayrollReportPajakService.prototype.getPayrollReportPajaksId = function (id) {
        return this.getPayrollReportPajaksIdResponse(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * Update Report_pajak
     * @param params The `PayrollReportPajakService.PutPayrollReportPajaksIdParams` containing the following parameters:
     *
     * - `id`: id of Report_pajak
     *
     * - `body`: Report_pajak that should be updated
     *
     * @return successful operation
     */
    PayrollReportPajakService.prototype.putPayrollReportPajaksIdResponse = function (params) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        __body = params.body;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('PUT', this.rootUrl + ("/payroll/report_pajaks/" + params.id), __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Update Report_pajak
     * @param params The `PayrollReportPajakService.PutPayrollReportPajaksIdParams` containing the following parameters:
     *
     * - `id`: id of Report_pajak
     *
     * - `body`: Report_pajak that should be updated
     *
     * @return successful operation
     */
    PayrollReportPajakService.prototype.putPayrollReportPajaksId = function (params) {
        return this.putPayrollReportPajaksIdResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * Delete Report_pajak
     * @param id id of Report_pajak
     * @return successful operation
     */
    PayrollReportPajakService.prototype.deletePayrollReportPajaksIdResponse = function (id) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('DELETE', this.rootUrl + ("/payroll/report_pajaks/" + id), __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Delete Report_pajak
     * @param id id of Report_pajak
     * @return successful operation
     */
    PayrollReportPajakService.prototype.deletePayrollReportPajaksId = function (id) {
        return this.deletePayrollReportPajaksIdResponse(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    PayrollReportPajakService.getPayrollReportPajaksPath = '/payroll/report_pajaks';
    PayrollReportPajakService.postPayrollReportPajaksPath = '/payroll/report_pajaks';
    PayrollReportPajakService.getPayrollReportPajaksIdPath = '/payroll/report_pajaks/{id}';
    PayrollReportPajakService.putPayrollReportPajaksIdPath = '/payroll/report_pajaks/{id}';
    PayrollReportPajakService.deletePayrollReportPajaksIdPath = '/payroll/report_pajaks/{id}';
    PayrollReportPajakService.ctorParameters = function () { return [
        { type: _api_configuration__WEBPACK_IMPORTED_MODULE_4__["ApiConfiguration"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    PayrollReportPajakService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_configuration__WEBPACK_IMPORTED_MODULE_4__["ApiConfiguration"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PayrollReportPajakService);
    return PayrollReportPajakService;
}(_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"]));



/***/ }),

/***/ "./src/app/sdk/payroll/services/payroll-report-pegawai-onduty.service.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/sdk/payroll/services/payroll-report-pegawai-onduty.service.ts ***!
  \*******************************************************************************/
/*! exports provided: PayrollReportPegawaiOndutyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PayrollReportPegawaiOndutyService", function() { return PayrollReportPegawaiOndutyService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base-service */ "./src/app/sdk/payroll/base-service.ts");
/* harmony import */ var _api_configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api-configuration */ "./src/app/sdk/payroll/api-configuration.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");

/* tslint:disable */





var PayrollReportPegawaiOndutyService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](PayrollReportPegawaiOndutyService, _super);
    function PayrollReportPegawaiOndutyService(config, http) {
        return _super.call(this, config, http) || this;
    }
    /**
     * Get all Report_pegawai_onduties
     * @param filter PurchaseRequest that should be stored
     * @return successful operation
     */
    PayrollReportPegawaiOndutyService.prototype.getPayrollReportPegawaiOndutiesResponse = function (filter) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        if (filter != null)
            __params = __params.set('filter', filter.toString());
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/payroll/report_pegawai_onduties", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Get all Report_pegawai_onduties
     * @param filter PurchaseRequest that should be stored
     * @return successful operation
     */
    PayrollReportPegawaiOndutyService.prototype.getPayrollReportPegawaiOnduties = function (filter) {
        return this.getPayrollReportPegawaiOndutiesResponse(filter).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * Store Report_pegawai_onduty
     * @param body Report_pegawai_onduty that should be stored
     * @return successful operation
     */
    PayrollReportPegawaiOndutyService.prototype.postPayrollReportPegawaiOndutiesResponse = function (body) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        __body = body;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/payroll/report_pegawai_onduties", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Store Report_pegawai_onduty
     * @param body Report_pegawai_onduty that should be stored
     * @return successful operation
     */
    PayrollReportPegawaiOndutyService.prototype.postPayrollReportPegawaiOnduties = function (body) {
        return this.postPayrollReportPegawaiOndutiesResponse(body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * Get Report_pegawai_onduty
     * @param id id of Report_pegawai_onduty
     * @return successful operation
     */
    PayrollReportPegawaiOndutyService.prototype.getPayrollReportPegawaiOndutiesIdResponse = function (id) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + ("/payroll/report_pegawai_onduties/" + id), __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Get Report_pegawai_onduty
     * @param id id of Report_pegawai_onduty
     * @return successful operation
     */
    PayrollReportPegawaiOndutyService.prototype.getPayrollReportPegawaiOndutiesId = function (id) {
        return this.getPayrollReportPegawaiOndutiesIdResponse(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * Update Report_pegawai_onduty
     * @param params The `PayrollReportPegawaiOndutyService.PutPayrollReportPegawaiOndutiesIdParams` containing the following parameters:
     *
     * - `id`: id of Report_pegawai_onduty
     *
     * - `body`: Report_pegawai_onduty that should be updated
     *
     * @return successful operation
     */
    PayrollReportPegawaiOndutyService.prototype.putPayrollReportPegawaiOndutiesIdResponse = function (params) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        __body = params.body;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('PUT', this.rootUrl + ("/payroll/report_pegawai_onduties/" + params.id), __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Update Report_pegawai_onduty
     * @param params The `PayrollReportPegawaiOndutyService.PutPayrollReportPegawaiOndutiesIdParams` containing the following parameters:
     *
     * - `id`: id of Report_pegawai_onduty
     *
     * - `body`: Report_pegawai_onduty that should be updated
     *
     * @return successful operation
     */
    PayrollReportPegawaiOndutyService.prototype.putPayrollReportPegawaiOndutiesId = function (params) {
        return this.putPayrollReportPegawaiOndutiesIdResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * Delete Report_pegawai_onduty
     * @param id id of Report_pegawai_onduty
     * @return successful operation
     */
    PayrollReportPegawaiOndutyService.prototype.deletePayrollReportPegawaiOndutiesIdResponse = function (id) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('DELETE', this.rootUrl + ("/payroll/report_pegawai_onduties/" + id), __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Delete Report_pegawai_onduty
     * @param id id of Report_pegawai_onduty
     * @return successful operation
     */
    PayrollReportPegawaiOndutyService.prototype.deletePayrollReportPegawaiOndutiesId = function (id) {
        return this.deletePayrollReportPegawaiOndutiesIdResponse(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    PayrollReportPegawaiOndutyService.getPayrollReportPegawaiOndutiesPath = '/payroll/report_pegawai_onduties';
    PayrollReportPegawaiOndutyService.postPayrollReportPegawaiOndutiesPath = '/payroll/report_pegawai_onduties';
    PayrollReportPegawaiOndutyService.getPayrollReportPegawaiOndutiesIdPath = '/payroll/report_pegawai_onduties/{id}';
    PayrollReportPegawaiOndutyService.putPayrollReportPegawaiOndutiesIdPath = '/payroll/report_pegawai_onduties/{id}';
    PayrollReportPegawaiOndutyService.deletePayrollReportPegawaiOndutiesIdPath = '/payroll/report_pegawai_onduties/{id}';
    PayrollReportPegawaiOndutyService.ctorParameters = function () { return [
        { type: _api_configuration__WEBPACK_IMPORTED_MODULE_4__["ApiConfiguration"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    PayrollReportPegawaiOndutyService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_configuration__WEBPACK_IMPORTED_MODULE_4__["ApiConfiguration"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PayrollReportPegawaiOndutyService);
    return PayrollReportPegawaiOndutyService;
}(_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"]));



/***/ }),

/***/ "./src/app/sdk/payroll/services/payroll-report-pegawai-payroll.service.ts":
/*!********************************************************************************!*\
  !*** ./src/app/sdk/payroll/services/payroll-report-pegawai-payroll.service.ts ***!
  \********************************************************************************/
/*! exports provided: PayrollReportPegawaiPayrollService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PayrollReportPegawaiPayrollService", function() { return PayrollReportPegawaiPayrollService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base-service */ "./src/app/sdk/payroll/base-service.ts");
/* harmony import */ var _api_configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api-configuration */ "./src/app/sdk/payroll/api-configuration.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");

/* tslint:disable */





var PayrollReportPegawaiPayrollService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](PayrollReportPegawaiPayrollService, _super);
    function PayrollReportPegawaiPayrollService(config, http) {
        return _super.call(this, config, http) || this;
    }
    /**
     * Get all Report_pegawai_payrolls
     * @param filter PurchaseRequest that should be stored
     * @return successful operation
     */
    PayrollReportPegawaiPayrollService.prototype.getPayrollReportPegawaiPayrollsResponse = function (filter) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        if (filter != null)
            __params = __params.set('filter', filter.toString());
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/payroll/report_pegawai_payrolls", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Get all Report_pegawai_payrolls
     * @param filter PurchaseRequest that should be stored
     * @return successful operation
     */
    PayrollReportPegawaiPayrollService.prototype.getPayrollReportPegawaiPayrolls = function (filter) {
        return this.getPayrollReportPegawaiPayrollsResponse(filter).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * Store Report_pegawai_payroll
     * @param body Report_pegawai_payroll that should be stored
     * @return successful operation
     */
    PayrollReportPegawaiPayrollService.prototype.postPayrollReportPegawaiPayrollsResponse = function (body) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        __body = body;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/payroll/report_pegawai_payrolls", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Store Report_pegawai_payroll
     * @param body Report_pegawai_payroll that should be stored
     * @return successful operation
     */
    PayrollReportPegawaiPayrollService.prototype.postPayrollReportPegawaiPayrolls = function (body) {
        return this.postPayrollReportPegawaiPayrollsResponse(body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * Get Report_pegawai_payroll
     * @param id id of Report_pegawai_payroll
     * @return successful operation
     */
    PayrollReportPegawaiPayrollService.prototype.getPayrollReportPegawaiPayrollsIdResponse = function (id) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + ("/payroll/report_pegawai_payrolls/" + id), __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Get Report_pegawai_payroll
     * @param id id of Report_pegawai_payroll
     * @return successful operation
     */
    PayrollReportPegawaiPayrollService.prototype.getPayrollReportPegawaiPayrollsId = function (id) {
        return this.getPayrollReportPegawaiPayrollsIdResponse(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * Update Report_pegawai_payroll
     * @param params The `PayrollReportPegawaiPayrollService.PutPayrollReportPegawaiPayrollsIdParams` containing the following parameters:
     *
     * - `id`: id of Report_pegawai_payroll
     *
     * - `body`: Report_pegawai_payroll that should be updated
     *
     * @return successful operation
     */
    PayrollReportPegawaiPayrollService.prototype.putPayrollReportPegawaiPayrollsIdResponse = function (params) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        __body = params.body;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('PUT', this.rootUrl + ("/payroll/report_pegawai_payrolls/" + params.id), __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Update Report_pegawai_payroll
     * @param params The `PayrollReportPegawaiPayrollService.PutPayrollReportPegawaiPayrollsIdParams` containing the following parameters:
     *
     * - `id`: id of Report_pegawai_payroll
     *
     * - `body`: Report_pegawai_payroll that should be updated
     *
     * @return successful operation
     */
    PayrollReportPegawaiPayrollService.prototype.putPayrollReportPegawaiPayrollsId = function (params) {
        return this.putPayrollReportPegawaiPayrollsIdResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * Delete Report_pegawai_payroll
     * @param id id of Report_pegawai_payroll
     * @return successful operation
     */
    PayrollReportPegawaiPayrollService.prototype.deletePayrollReportPegawaiPayrollsIdResponse = function (id) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('DELETE', this.rootUrl + ("/payroll/report_pegawai_payrolls/" + id), __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Delete Report_pegawai_payroll
     * @param id id of Report_pegawai_payroll
     * @return successful operation
     */
    PayrollReportPegawaiPayrollService.prototype.deletePayrollReportPegawaiPayrollsId = function (id) {
        return this.deletePayrollReportPegawaiPayrollsIdResponse(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    PayrollReportPegawaiPayrollService.getPayrollReportPegawaiPayrollsPath = '/payroll/report_pegawai_payrolls';
    PayrollReportPegawaiPayrollService.postPayrollReportPegawaiPayrollsPath = '/payroll/report_pegawai_payrolls';
    PayrollReportPegawaiPayrollService.getPayrollReportPegawaiPayrollsIdPath = '/payroll/report_pegawai_payrolls/{id}';
    PayrollReportPegawaiPayrollService.putPayrollReportPegawaiPayrollsIdPath = '/payroll/report_pegawai_payrolls/{id}';
    PayrollReportPegawaiPayrollService.deletePayrollReportPegawaiPayrollsIdPath = '/payroll/report_pegawai_payrolls/{id}';
    PayrollReportPegawaiPayrollService.ctorParameters = function () { return [
        { type: _api_configuration__WEBPACK_IMPORTED_MODULE_4__["ApiConfiguration"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    PayrollReportPegawaiPayrollService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_configuration__WEBPACK_IMPORTED_MODULE_4__["ApiConfiguration"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PayrollReportPegawaiPayrollService);
    return PayrollReportPegawaiPayrollService;
}(_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"]));



/***/ }),

/***/ "./src/app/sdk/payroll/services/payroll-report-pegawai-thr.service.ts":
/*!****************************************************************************!*\
  !*** ./src/app/sdk/payroll/services/payroll-report-pegawai-thr.service.ts ***!
  \****************************************************************************/
/*! exports provided: PayrollReportPegawaiThrService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PayrollReportPegawaiThrService", function() { return PayrollReportPegawaiThrService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base-service */ "./src/app/sdk/payroll/base-service.ts");
/* harmony import */ var _api_configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api-configuration */ "./src/app/sdk/payroll/api-configuration.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");

/* tslint:disable */





var PayrollReportPegawaiThrService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](PayrollReportPegawaiThrService, _super);
    function PayrollReportPegawaiThrService(config, http) {
        return _super.call(this, config, http) || this;
    }
    /**
     * Get all Report_pegawai_thrs
     * @param filter PurchaseRequest that should be stored
     * @return successful operation
     */
    PayrollReportPegawaiThrService.prototype.getPayrollReportPegawaiThrsResponse = function (filter) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        if (filter != null)
            __params = __params.set('filter', filter.toString());
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/payroll/report_pegawai_thrs", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Get all Report_pegawai_thrs
     * @param filter PurchaseRequest that should be stored
     * @return successful operation
     */
    PayrollReportPegawaiThrService.prototype.getPayrollReportPegawaiThrs = function (filter) {
        return this.getPayrollReportPegawaiThrsResponse(filter).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * Store Report_pegawai_thr
     * @param body Report_pegawai_thr that should be stored
     * @return successful operation
     */
    PayrollReportPegawaiThrService.prototype.postPayrollReportPegawaiThrsResponse = function (body) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        __body = body;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/payroll/report_pegawai_thrs", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Store Report_pegawai_thr
     * @param body Report_pegawai_thr that should be stored
     * @return successful operation
     */
    PayrollReportPegawaiThrService.prototype.postPayrollReportPegawaiThrs = function (body) {
        return this.postPayrollReportPegawaiThrsResponse(body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * Get Report_pegawai_thr
     * @param id id of Report_pegawai_thr
     * @return successful operation
     */
    PayrollReportPegawaiThrService.prototype.getPayrollReportPegawaiThrsIdResponse = function (id) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + ("/payroll/report_pegawai_thrs/" + id), __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Get Report_pegawai_thr
     * @param id id of Report_pegawai_thr
     * @return successful operation
     */
    PayrollReportPegawaiThrService.prototype.getPayrollReportPegawaiThrsId = function (id) {
        return this.getPayrollReportPegawaiThrsIdResponse(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * Update Report_pegawai_thr
     * @param params The `PayrollReportPegawaiThrService.PutPayrollReportPegawaiThrsIdParams` containing the following parameters:
     *
     * - `id`: id of Report_pegawai_thr
     *
     * - `body`: Report_pegawai_thr that should be updated
     *
     * @return successful operation
     */
    PayrollReportPegawaiThrService.prototype.putPayrollReportPegawaiThrsIdResponse = function (params) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        __body = params.body;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('PUT', this.rootUrl + ("/payroll/report_pegawai_thrs/" + params.id), __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Update Report_pegawai_thr
     * @param params The `PayrollReportPegawaiThrService.PutPayrollReportPegawaiThrsIdParams` containing the following parameters:
     *
     * - `id`: id of Report_pegawai_thr
     *
     * - `body`: Report_pegawai_thr that should be updated
     *
     * @return successful operation
     */
    PayrollReportPegawaiThrService.prototype.putPayrollReportPegawaiThrsId = function (params) {
        return this.putPayrollReportPegawaiThrsIdResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * Delete Report_pegawai_thr
     * @param id id of Report_pegawai_thr
     * @return successful operation
     */
    PayrollReportPegawaiThrService.prototype.deletePayrollReportPegawaiThrsIdResponse = function (id) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('DELETE', this.rootUrl + ("/payroll/report_pegawai_thrs/" + id), __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Delete Report_pegawai_thr
     * @param id id of Report_pegawai_thr
     * @return successful operation
     */
    PayrollReportPegawaiThrService.prototype.deletePayrollReportPegawaiThrsId = function (id) {
        return this.deletePayrollReportPegawaiThrsIdResponse(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    PayrollReportPegawaiThrService.getPayrollReportPegawaiThrsPath = '/payroll/report_pegawai_thrs';
    PayrollReportPegawaiThrService.postPayrollReportPegawaiThrsPath = '/payroll/report_pegawai_thrs';
    PayrollReportPegawaiThrService.getPayrollReportPegawaiThrsIdPath = '/payroll/report_pegawai_thrs/{id}';
    PayrollReportPegawaiThrService.putPayrollReportPegawaiThrsIdPath = '/payroll/report_pegawai_thrs/{id}';
    PayrollReportPegawaiThrService.deletePayrollReportPegawaiThrsIdPath = '/payroll/report_pegawai_thrs/{id}';
    PayrollReportPegawaiThrService.ctorParameters = function () { return [
        { type: _api_configuration__WEBPACK_IMPORTED_MODULE_4__["ApiConfiguration"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    PayrollReportPegawaiThrService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_configuration__WEBPACK_IMPORTED_MODULE_4__["ApiConfiguration"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PayrollReportPegawaiThrService);
    return PayrollReportPegawaiThrService;
}(_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"]));



/***/ }),

/***/ "./src/app/sdk/payroll/services/payroll-tanda-tangan.service.ts":
/*!**********************************************************************!*\
  !*** ./src/app/sdk/payroll/services/payroll-tanda-tangan.service.ts ***!
  \**********************************************************************/
/*! exports provided: PayrollTandaTanganService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PayrollTandaTanganService", function() { return PayrollTandaTanganService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base-service */ "./src/app/sdk/payroll/base-service.ts");
/* harmony import */ var _api_configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api-configuration */ "./src/app/sdk/payroll/api-configuration.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");

/* tslint:disable */





var PayrollTandaTanganService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](PayrollTandaTanganService, _super);
    function PayrollTandaTanganService(config, http) {
        return _super.call(this, config, http) || this;
    }
    /**
     * Get all Tanda_tangans
     * @param filter PurchaseRequest that should be stored
     * @return successful operation
     */
    PayrollTandaTanganService.prototype.getPayrollTandaTangansResponse = function (filter) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        if (filter != null)
            __params = __params.set('filter', filter.toString());
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/payroll/tanda_tangans", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Get all Tanda_tangans
     * @param filter PurchaseRequest that should be stored
     * @return successful operation
     */
    PayrollTandaTanganService.prototype.getPayrollTandaTangans = function (filter) {
        return this.getPayrollTandaTangansResponse(filter).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * Store Tanda_tangan
     * @param body Tanda_tangan that should be stored
     * @return successful operation
     */
    PayrollTandaTanganService.prototype.postPayrollTandaTangansResponse = function (body) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        __body = body;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/payroll/tanda_tangans", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Store Tanda_tangan
     * @param body Tanda_tangan that should be stored
     * @return successful operation
     */
    PayrollTandaTanganService.prototype.postPayrollTandaTangans = function (body) {
        return this.postPayrollTandaTangansResponse(body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * Get Tanda_tangan
     * @param id id of Tanda_tangan
     * @return successful operation
     */
    PayrollTandaTanganService.prototype.getPayrollTandaTangansIdResponse = function (id) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + ("/payroll/tanda_tangans/" + id), __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Get Tanda_tangan
     * @param id id of Tanda_tangan
     * @return successful operation
     */
    PayrollTandaTanganService.prototype.getPayrollTandaTangansId = function (id) {
        return this.getPayrollTandaTangansIdResponse(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * Update Tanda_tangan
     * @param params The `PayrollTandaTanganService.PutPayrollTandaTangansIdParams` containing the following parameters:
     *
     * - `id`: id of Tanda_tangan
     *
     * - `body`: Tanda_tangan that should be updated
     *
     * @return successful operation
     */
    PayrollTandaTanganService.prototype.putPayrollTandaTangansIdResponse = function (params) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        __body = params.body;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('PUT', this.rootUrl + ("/payroll/tanda_tangans/" + params.id), __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Update Tanda_tangan
     * @param params The `PayrollTandaTanganService.PutPayrollTandaTangansIdParams` containing the following parameters:
     *
     * - `id`: id of Tanda_tangan
     *
     * - `body`: Tanda_tangan that should be updated
     *
     * @return successful operation
     */
    PayrollTandaTanganService.prototype.putPayrollTandaTangansId = function (params) {
        return this.putPayrollTandaTangansIdResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * Delete Tanda_tangan
     * @param id id of Tanda_tangan
     * @return successful operation
     */
    PayrollTandaTanganService.prototype.deletePayrollTandaTangansIdResponse = function (id) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('DELETE', this.rootUrl + ("/payroll/tanda_tangans/" + id), __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Delete Tanda_tangan
     * @param id id of Tanda_tangan
     * @return successful operation
     */
    PayrollTandaTanganService.prototype.deletePayrollTandaTangansId = function (id) {
        return this.deletePayrollTandaTangansIdResponse(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    PayrollTandaTanganService.getPayrollTandaTangansPath = '/payroll/tanda_tangans';
    PayrollTandaTanganService.postPayrollTandaTangansPath = '/payroll/tanda_tangans';
    PayrollTandaTanganService.getPayrollTandaTangansIdPath = '/payroll/tanda_tangans/{id}';
    PayrollTandaTanganService.putPayrollTandaTangansIdPath = '/payroll/tanda_tangans/{id}';
    PayrollTandaTanganService.deletePayrollTandaTangansIdPath = '/payroll/tanda_tangans/{id}';
    PayrollTandaTanganService.ctorParameters = function () { return [
        { type: _api_configuration__WEBPACK_IMPORTED_MODULE_4__["ApiConfiguration"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    PayrollTandaTanganService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_configuration__WEBPACK_IMPORTED_MODULE_4__["ApiConfiguration"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PayrollTandaTanganService);
    return PayrollTandaTanganService;
}(_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"]));



/***/ }),

/***/ "./src/app/sdk/payroll/services/payroll-template-komponen.service.ts":
/*!***************************************************************************!*\
  !*** ./src/app/sdk/payroll/services/payroll-template-komponen.service.ts ***!
  \***************************************************************************/
/*! exports provided: PayrollTemplateKomponenService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PayrollTemplateKomponenService", function() { return PayrollTemplateKomponenService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base-service */ "./src/app/sdk/payroll/base-service.ts");
/* harmony import */ var _api_configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api-configuration */ "./src/app/sdk/payroll/api-configuration.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");

/* tslint:disable */





var PayrollTemplateKomponenService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](PayrollTemplateKomponenService, _super);
    function PayrollTemplateKomponenService(config, http) {
        return _super.call(this, config, http) || this;
    }
    /**
     * Get all template_komponens
     * @param filter PurchaseRequest that should be stored
     * @return successful operation
     */
    PayrollTemplateKomponenService.prototype.getPayrollTemplateKomponensResponse = function (filter) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        if (filter != null)
            __params = __params.set('filter', filter.toString());
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/payroll/template_komponens", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Get all template_komponens
     * @param filter PurchaseRequest that should be stored
     * @return successful operation
     */
    PayrollTemplateKomponenService.prototype.getPayrollTemplateKomponens = function (filter) {
        return this.getPayrollTemplateKomponensResponse(filter).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * Store template_komponen
     * @param body template_komponen that should be stored
     * @return successful operation
     */
    PayrollTemplateKomponenService.prototype.postPayrollTemplateKomponensResponse = function (body) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        __body = body;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/payroll/template_komponens", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Store template_komponen
     * @param body template_komponen that should be stored
     * @return successful operation
     */
    PayrollTemplateKomponenService.prototype.postPayrollTemplateKomponens = function (body) {
        return this.postPayrollTemplateKomponensResponse(body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * Get template_komponen
     * @param id id of template_komponen
     * @return successful operation
     */
    PayrollTemplateKomponenService.prototype.getPayrollTemplateKomponensIdResponse = function (id) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + ("/payroll/template_komponens/" + id), __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Get template_komponen
     * @param id id of template_komponen
     * @return successful operation
     */
    PayrollTemplateKomponenService.prototype.getPayrollTemplateKomponensId = function (id) {
        return this.getPayrollTemplateKomponensIdResponse(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * Update template_komponen
     * @param params The `PayrollTemplateKomponenService.PutPayrollTemplateKomponensIdParams` containing the following parameters:
     *
     * - `id`: id of template_komponen
     *
     * - `body`: template_komponen that should be updated
     *
     * @return successful operation
     */
    PayrollTemplateKomponenService.prototype.putPayrollTemplateKomponensIdResponse = function (params) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        __body = params.body;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('PUT', this.rootUrl + ("/payroll/template_komponens/" + params.id), __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Update template_komponen
     * @param params The `PayrollTemplateKomponenService.PutPayrollTemplateKomponensIdParams` containing the following parameters:
     *
     * - `id`: id of template_komponen
     *
     * - `body`: template_komponen that should be updated
     *
     * @return successful operation
     */
    PayrollTemplateKomponenService.prototype.putPayrollTemplateKomponensId = function (params) {
        return this.putPayrollTemplateKomponensIdResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * Delete template_komponen
     * @param id id of template_komponen
     * @return successful operation
     */
    PayrollTemplateKomponenService.prototype.deletePayrollTemplateKomponensIdResponse = function (id) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('DELETE', this.rootUrl + ("/payroll/template_komponens/" + id), __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Delete template_komponen
     * @param id id of template_komponen
     * @return successful operation
     */
    PayrollTemplateKomponenService.prototype.deletePayrollTemplateKomponensId = function (id) {
        return this.deletePayrollTemplateKomponensIdResponse(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    PayrollTemplateKomponenService.getPayrollTemplateKomponensPath = '/payroll/template_komponens';
    PayrollTemplateKomponenService.postPayrollTemplateKomponensPath = '/payroll/template_komponens';
    PayrollTemplateKomponenService.getPayrollTemplateKomponensIdPath = '/payroll/template_komponens/{id}';
    PayrollTemplateKomponenService.putPayrollTemplateKomponensIdPath = '/payroll/template_komponens/{id}';
    PayrollTemplateKomponenService.deletePayrollTemplateKomponensIdPath = '/payroll/template_komponens/{id}';
    PayrollTemplateKomponenService.ctorParameters = function () { return [
        { type: _api_configuration__WEBPACK_IMPORTED_MODULE_4__["ApiConfiguration"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    PayrollTemplateKomponenService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_configuration__WEBPACK_IMPORTED_MODULE_4__["ApiConfiguration"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PayrollTemplateKomponenService);
    return PayrollTemplateKomponenService;
}(_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"]));



/***/ }),

/***/ "./src/app/sdk/payroll/services/payroll-thr-komponen.service.ts":
/*!**********************************************************************!*\
  !*** ./src/app/sdk/payroll/services/payroll-thr-komponen.service.ts ***!
  \**********************************************************************/
/*! exports provided: PayrollThrKomponenService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PayrollThrKomponenService", function() { return PayrollThrKomponenService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base-service */ "./src/app/sdk/payroll/base-service.ts");
/* harmony import */ var _api_configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api-configuration */ "./src/app/sdk/payroll/api-configuration.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");

/* tslint:disable */





var PayrollThrKomponenService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](PayrollThrKomponenService, _super);
    function PayrollThrKomponenService(config, http) {
        return _super.call(this, config, http) || this;
    }
    /**
     * Get all Thr_komponens
     * @param filter PurchaseRequest that should be stored
     * @return successful operation
     */
    PayrollThrKomponenService.prototype.getPayrollThrKomponensResponse = function (filter) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        if (filter != null)
            __params = __params.set('filter', filter.toString());
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/payroll/thr_komponens", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Get all Thr_komponens
     * @param filter PurchaseRequest that should be stored
     * @return successful operation
     */
    PayrollThrKomponenService.prototype.getPayrollThrKomponens = function (filter) {
        return this.getPayrollThrKomponensResponse(filter).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * Store Thr_komponen
     * @param body Thr_komponen that should be stored
     * @return successful operation
     */
    PayrollThrKomponenService.prototype.postPayrollThrKomponensResponse = function (body) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        __body = body;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/payroll/thr_komponens", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Store Thr_komponen
     * @param body Thr_komponen that should be stored
     * @return successful operation
     */
    PayrollThrKomponenService.prototype.postPayrollThrKomponens = function (body) {
        return this.postPayrollThrKomponensResponse(body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * Get Thr_komponen
     * @param id id of Thr_komponen
     * @return successful operation
     */
    PayrollThrKomponenService.prototype.getPayrollThrKomponensIdResponse = function (id) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + ("/payroll/thr_komponens/" + id), __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Get Thr_komponen
     * @param id id of Thr_komponen
     * @return successful operation
     */
    PayrollThrKomponenService.prototype.getPayrollThrKomponensId = function (id) {
        return this.getPayrollThrKomponensIdResponse(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * Update Thr_komponen
     * @param params The `PayrollThrKomponenService.PutPayrollThrKomponensIdParams` containing the following parameters:
     *
     * - `id`: id of Thr_komponen
     *
     * - `body`: Thr_komponen that should be updated
     *
     * @return successful operation
     */
    PayrollThrKomponenService.prototype.putPayrollThrKomponensIdResponse = function (params) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        __body = params.body;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('PUT', this.rootUrl + ("/payroll/thr_komponens/" + params.id), __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Update Thr_komponen
     * @param params The `PayrollThrKomponenService.PutPayrollThrKomponensIdParams` containing the following parameters:
     *
     * - `id`: id of Thr_komponen
     *
     * - `body`: Thr_komponen that should be updated
     *
     * @return successful operation
     */
    PayrollThrKomponenService.prototype.putPayrollThrKomponensId = function (params) {
        return this.putPayrollThrKomponensIdResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * Delete Thr_komponen
     * @param id id of Thr_komponen
     * @return successful operation
     */
    PayrollThrKomponenService.prototype.deletePayrollThrKomponensIdResponse = function (id) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('DELETE', this.rootUrl + ("/payroll/thr_komponens/" + id), __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Delete Thr_komponen
     * @param id id of Thr_komponen
     * @return successful operation
     */
    PayrollThrKomponenService.prototype.deletePayrollThrKomponensId = function (id) {
        return this.deletePayrollThrKomponensIdResponse(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    PayrollThrKomponenService.getPayrollThrKomponensPath = '/payroll/thr_komponens';
    PayrollThrKomponenService.postPayrollThrKomponensPath = '/payroll/thr_komponens';
    PayrollThrKomponenService.getPayrollThrKomponensIdPath = '/payroll/thr_komponens/{id}';
    PayrollThrKomponenService.putPayrollThrKomponensIdPath = '/payroll/thr_komponens/{id}';
    PayrollThrKomponenService.deletePayrollThrKomponensIdPath = '/payroll/thr_komponens/{id}';
    PayrollThrKomponenService.ctorParameters = function () { return [
        { type: _api_configuration__WEBPACK_IMPORTED_MODULE_4__["ApiConfiguration"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    PayrollThrKomponenService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_configuration__WEBPACK_IMPORTED_MODULE_4__["ApiConfiguration"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PayrollThrKomponenService);
    return PayrollThrKomponenService;
}(_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"]));



/***/ }),

/***/ "./src/app/sdk/payroll/services/payroll-utang-jenis-periode.service.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/sdk/payroll/services/payroll-utang-jenis-periode.service.ts ***!
  \*****************************************************************************/
/*! exports provided: PayrollUtangJenisPeriodeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PayrollUtangJenisPeriodeService", function() { return PayrollUtangJenisPeriodeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base-service */ "./src/app/sdk/payroll/base-service.ts");
/* harmony import */ var _api_configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api-configuration */ "./src/app/sdk/payroll/api-configuration.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");

/* tslint:disable */





var PayrollUtangJenisPeriodeService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](PayrollUtangJenisPeriodeService, _super);
    function PayrollUtangJenisPeriodeService(config, http) {
        return _super.call(this, config, http) || this;
    }
    /**
     * Get all Utang_jenis_periodes
     * @param filter PurchaseRequest that should be stored
     * @return successful operation
     */
    PayrollUtangJenisPeriodeService.prototype.getPayrollUtangJenisPeriodesResponse = function (filter) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        if (filter != null)
            __params = __params.set('filter', filter.toString());
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/payroll/utang_jenis_periodes", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Get all Utang_jenis_periodes
     * @param filter PurchaseRequest that should be stored
     * @return successful operation
     */
    PayrollUtangJenisPeriodeService.prototype.getPayrollUtangJenisPeriodes = function (filter) {
        return this.getPayrollUtangJenisPeriodesResponse(filter).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * Store Utang_jenis_periode
     * @param body Utang_jenis_periode that should be stored
     * @return successful operation
     */
    PayrollUtangJenisPeriodeService.prototype.postPayrollUtangJenisPeriodesResponse = function (body) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        __body = body;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/payroll/utang_jenis_periodes", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Store Utang_jenis_periode
     * @param body Utang_jenis_periode that should be stored
     * @return successful operation
     */
    PayrollUtangJenisPeriodeService.prototype.postPayrollUtangJenisPeriodes = function (body) {
        return this.postPayrollUtangJenisPeriodesResponse(body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * Get Utang_jenis_periode
     * @param id id of Utang_jenis_periode
     * @return successful operation
     */
    PayrollUtangJenisPeriodeService.prototype.getPayrollUtangJenisPeriodesIdResponse = function (id) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + ("/payroll/utang_jenis_periodes/" + id), __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Get Utang_jenis_periode
     * @param id id of Utang_jenis_periode
     * @return successful operation
     */
    PayrollUtangJenisPeriodeService.prototype.getPayrollUtangJenisPeriodesId = function (id) {
        return this.getPayrollUtangJenisPeriodesIdResponse(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * Update Utang_jenis_periode
     * @param params The `PayrollUtangJenisPeriodeService.PutPayrollUtangJenisPeriodesIdParams` containing the following parameters:
     *
     * - `id`: id of Utang_jenis_periode
     *
     * - `body`: Utang_jenis_periode that should be updated
     *
     * @return successful operation
     */
    PayrollUtangJenisPeriodeService.prototype.putPayrollUtangJenisPeriodesIdResponse = function (params) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        __body = params.body;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('PUT', this.rootUrl + ("/payroll/utang_jenis_periodes/" + params.id), __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Update Utang_jenis_periode
     * @param params The `PayrollUtangJenisPeriodeService.PutPayrollUtangJenisPeriodesIdParams` containing the following parameters:
     *
     * - `id`: id of Utang_jenis_periode
     *
     * - `body`: Utang_jenis_periode that should be updated
     *
     * @return successful operation
     */
    PayrollUtangJenisPeriodeService.prototype.putPayrollUtangJenisPeriodesId = function (params) {
        return this.putPayrollUtangJenisPeriodesIdResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * Delete Utang_jenis_periode
     * @param id id of Utang_jenis_periode
     * @return successful operation
     */
    PayrollUtangJenisPeriodeService.prototype.deletePayrollUtangJenisPeriodesIdResponse = function (id) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('DELETE', this.rootUrl + ("/payroll/utang_jenis_periodes/" + id), __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Delete Utang_jenis_periode
     * @param id id of Utang_jenis_periode
     * @return successful operation
     */
    PayrollUtangJenisPeriodeService.prototype.deletePayrollUtangJenisPeriodesId = function (id) {
        return this.deletePayrollUtangJenisPeriodesIdResponse(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    PayrollUtangJenisPeriodeService.getPayrollUtangJenisPeriodesPath = '/payroll/utang_jenis_periodes';
    PayrollUtangJenisPeriodeService.postPayrollUtangJenisPeriodesPath = '/payroll/utang_jenis_periodes';
    PayrollUtangJenisPeriodeService.getPayrollUtangJenisPeriodesIdPath = '/payroll/utang_jenis_periodes/{id}';
    PayrollUtangJenisPeriodeService.putPayrollUtangJenisPeriodesIdPath = '/payroll/utang_jenis_periodes/{id}';
    PayrollUtangJenisPeriodeService.deletePayrollUtangJenisPeriodesIdPath = '/payroll/utang_jenis_periodes/{id}';
    PayrollUtangJenisPeriodeService.ctorParameters = function () { return [
        { type: _api_configuration__WEBPACK_IMPORTED_MODULE_4__["ApiConfiguration"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    PayrollUtangJenisPeriodeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_configuration__WEBPACK_IMPORTED_MODULE_4__["ApiConfiguration"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PayrollUtangJenisPeriodeService);
    return PayrollUtangJenisPeriodeService;
}(_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"]));



/***/ }),

/***/ "./src/app/sdk/payroll/services/payroll-utang-jenis.service.ts":
/*!*********************************************************************!*\
  !*** ./src/app/sdk/payroll/services/payroll-utang-jenis.service.ts ***!
  \*********************************************************************/
/*! exports provided: PayrollUtangJenisService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PayrollUtangJenisService", function() { return PayrollUtangJenisService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base-service */ "./src/app/sdk/payroll/base-service.ts");
/* harmony import */ var _api_configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api-configuration */ "./src/app/sdk/payroll/api-configuration.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");

/* tslint:disable */





var PayrollUtangJenisService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](PayrollUtangJenisService, _super);
    function PayrollUtangJenisService(config, http) {
        return _super.call(this, config, http) || this;
    }
    /**
     * Get all Utang_jenis
     * @param filter PurchaseRequest that should be stored
     * @return successful operation
     */
    PayrollUtangJenisService.prototype.getPayrollUtangJenisResponse = function (filter) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        if (filter != null)
            __params = __params.set('filter', filter.toString());
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/payroll/utang_jenis", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Get all Utang_jenis
     * @param filter PurchaseRequest that should be stored
     * @return successful operation
     */
    PayrollUtangJenisService.prototype.getPayrollUtangJenis = function (filter) {
        return this.getPayrollUtangJenisResponse(filter).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * Store Utang_jenis
     * @param body Utang_jenis that should be stored
     * @return successful operation
     */
    PayrollUtangJenisService.prototype.postPayrollUtangJenisResponse = function (body) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        __body = body;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/payroll/utang_jenis", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Store Utang_jenis
     * @param body Utang_jenis that should be stored
     * @return successful operation
     */
    PayrollUtangJenisService.prototype.postPayrollUtangJenis = function (body) {
        return this.postPayrollUtangJenisResponse(body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * Get Utang_jenis
     * @param id id of Utang_jenis
     * @return successful operation
     */
    PayrollUtangJenisService.prototype.getPayrollUtangJenisIdResponse = function (id) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + ("/payroll/utang_jenis/" + id), __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Get Utang_jenis
     * @param id id of Utang_jenis
     * @return successful operation
     */
    PayrollUtangJenisService.prototype.getPayrollUtangJenisId = function (id) {
        return this.getPayrollUtangJenisIdResponse(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * Update Utang_jenis
     * @param params The `PayrollUtangJenisService.PutPayrollUtangJenisIdParams` containing the following parameters:
     *
     * - `id`: id of Utang_jenis
     *
     * - `body`: Utang_jenis that should be updated
     *
     * @return successful operation
     */
    PayrollUtangJenisService.prototype.putPayrollUtangJenisIdResponse = function (params) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        __body = params.body;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('PUT', this.rootUrl + ("/payroll/utang_jenis/" + params.id), __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Update Utang_jenis
     * @param params The `PayrollUtangJenisService.PutPayrollUtangJenisIdParams` containing the following parameters:
     *
     * - `id`: id of Utang_jenis
     *
     * - `body`: Utang_jenis that should be updated
     *
     * @return successful operation
     */
    PayrollUtangJenisService.prototype.putPayrollUtangJenisId = function (params) {
        return this.putPayrollUtangJenisIdResponse(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * Delete Utang_jenis
     * @param id id of Utang_jenis
     * @return successful operation
     */
    PayrollUtangJenisService.prototype.deletePayrollUtangJenisIdResponse = function (id) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('DELETE', this.rootUrl + ("/payroll/utang_jenis/" + id), __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * Delete Utang_jenis
     * @param id id of Utang_jenis
     * @return successful operation
     */
    PayrollUtangJenisService.prototype.deletePayrollUtangJenisId = function (id) {
        return this.deletePayrollUtangJenisIdResponse(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    PayrollUtangJenisService.getPayrollUtangJenisPath = '/payroll/utang_jenis';
    PayrollUtangJenisService.postPayrollUtangJenisPath = '/payroll/utang_jenis';
    PayrollUtangJenisService.getPayrollUtangJenisIdPath = '/payroll/utang_jenis/{id}';
    PayrollUtangJenisService.putPayrollUtangJenisIdPath = '/payroll/utang_jenis/{id}';
    PayrollUtangJenisService.deletePayrollUtangJenisIdPath = '/payroll/utang_jenis/{id}';
    PayrollUtangJenisService.ctorParameters = function () { return [
        { type: _api_configuration__WEBPACK_IMPORTED_MODULE_4__["ApiConfiguration"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    PayrollUtangJenisService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_configuration__WEBPACK_IMPORTED_MODULE_4__["ApiConfiguration"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PayrollUtangJenisService);
    return PayrollUtangJenisService;
}(_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"]));



/***/ })

}]);
//# sourceMappingURL=default~pages-hr-hr-module~pages-profile-profile-module~src-app-pages-helpdesk-helpdesk-module.js.map