(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pengaturan-pengaturan-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/hr/direktori/pengaturan/pengaturan.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/hr/direktori/pengaturan/pengaturan.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nz-layout>\r\n    <nz-sider [nzWidth]=\"'auto'\">\r\n        <app-menu-module></app-menu-module>\r\n    </nz-sider>\r\n    <nz-content>\r\n        <div class=\"air__utils__content\">\r\n            <div>\r\n                <router-outlet #outletModule=\"outlet\"></router-outlet>\r\n            </div>\r\n        </div>\r\n    </nz-content>\r\n</nz-layout>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/hr/payroll/pengaturan/core-edit/core-edit.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/hr/payroll/pengaturan/core-edit/core-edit.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"air__utils__heading card-header-flex\">\r\n        <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n            <h5 class=\"mb-0\">Edit Payroll Settings</h5>\r\n        </div>\r\n    </div>\r\n    <div class=\"card\">\r\n        <div class=\"card-body\">\r\n            <form nz-form [formGroup]=\"pengaturan\">\r\n                <div class=\"py-4 border-bottom\">\r\n                    <div class=\"font-weight-bold mb-2\">rate_usd</div>\r\n                    <div>\r\n                        <input nz-input placeholder=\"rupiah\" formControlName=\"rate_usd\" />\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"py-4 border-bottom\">\r\n                    <div class=\"font-weight-bold mb-2\">Prorate Salary </div>\r\n                    <div> Calculation of the prorated salary for staff entering or leaving before the cut off date\r\n                    </div>\r\n\r\n                    <nz-form-control>\r\n                        <nz-radio-group formControlName=\"prorate_gaji\">\r\n                            <label nz-radio nzValue=\"ya\">Yes</label>\r\n                            <label nz-radio nzValue=\"tidak\">No</label>\r\n                        </nz-radio-group>\r\n                    </nz-form-control>\r\n\r\n                </div>\r\n                <div class=\"py-4 border-bottom\" *ngIf=\"getValueForm('prorate_gaji','ya')\">\r\n                    <div class=\"font-weight-bold mb-2\">Prorated Salary Calculation Method</div>\r\n                    <div>\r\n                        <nz-select formControlName=\"prorate_gaji_metode\" nzAllowClear nzplaceholder=\"please select\">\r\n                            <nz-option nzValue=\"hari_kerja22\" nzLabel=\"hari_kerja22\"></nz-option>\r\n                            <nz-option nzValue=\"hari_kalender30\" nzLabel=\"hari_kalender30\"></nz-option>\r\n                            <nz-option nzValue=\"kari_kerja_absensi\" nzLabel=\"kari_kerja_absensi\"></nz-option>\r\n                        </nz-select>\r\n                    </div>\r\n                </div>\r\n                <div class=\"py-4 border-bottom\">\r\n                    <div class=\"font-weight-bold mb-2\">Cut Off Payroll (Date)</div>\r\n                    <div>\r\n                        <nz-select formControlName=\"cut_of_payroll\" nzAllowClear nzplaceholder=\"please select\">\r\n                            <nz-option *ngFor=\"let item of tgl\" [nzValue]=\"item\" nzLabel=\"{{item}}\"></nz-option>\r\n                        </nz-select>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"py-4 border-bottom\">\r\n                    <div class=\"font-weight-bold mb-2\">Cut Off Attendance (Date)</div>\r\n                    <div>\r\n                        <nz-select formControlName=\"cut_of_absensi\" nzAllowClear nzplaceholder=\"please select\">\r\n                            <nz-option *ngFor=\"let item of tgl\" [nzValue]=\"item\" nzLabel=\"{{item}}\"></nz-option>\r\n                        </nz-select>\r\n                    </div>\r\n                </div>\r\n                <div class=\"py-4 border-bottom\">\r\n                    <div class=\"font-weight-bold mb-2\">Payroll Processing Date</div>\r\n                    <div>\r\n                        <nz-select formControlName=\"tanggal_proses_payroll\" nzAllowClear nzplaceholder=\"please select\">\r\n                            <nz-option *ngFor=\"let item of tgl\" [nzValue]=\"item\" nzLabel=\"{{item}}\"></nz-option>\r\n                        </nz-select>\r\n                    </div>\r\n                </div>\r\n                <div class=\"py-4 border-bottom\">\r\n                    <div class=\"font-weight-bold mb-2\">New Employee Get THR After (Month)</div>\r\n                    <div>\r\n                        <nz-select formControlName=\"thr_start\" nzAllowClear nzplaceholder=\"please select\">\r\n                            <nz-option *ngFor=\"let item of bulan\" [nzValue]=\"item\" nzLabel=\"{{item}}\"></nz-option>\r\n                        </nz-select>\r\n                    </div>\r\n                </div>\r\n                <div class=\"py-4 border-bottom\">\r\n                    <div class=\"font-weight-bold mb-2\">Round Up of the Work Period</div>\r\n                    <div>\r\n                        <nz-form-control>\r\n                            <nz-radio-group formControlName=\"thr_pembulatan_masa_kerja\">\r\n                                <label nz-radio nzValue=\"ya\">Yes</label>\r\n                                <label nz-radio nzValue=\"tidak\">No</label>\r\n                            </nz-radio-group>\r\n                        </nz-form-control>\r\n                    </div>\r\n                </div>\r\n                <div class=\"py-4 border-bottom\">\r\n                    <div class=\"font-weight-bold mb-2\">Round Up of the Work Period will be Equivalent to 1 Month if more\r\n                        than</div>\r\n                    <div>\r\n                        <nz-select formControlName=\"thr_pembulatan_masa_kerja_ya\" nzAllowClear\r\n                            nzplaceholder=\"please select\">\r\n                            <nz-option *ngFor=\"let item of tgl\" [nzValue]=\"item\" nzLabel=\"{{item}}\"></nz-option>\r\n                        </nz-select>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"py-4 border-bottom\">\r\n                    <div class=\"font-weight-bold mb-2\">Payslip Print Template</div>\r\n\r\n                    <div class=\"py-4 border-bottom\">\r\n                        <div class=\"font-weight-bold mb-2\">Payroll</div>\r\n                        <div>\r\n                            <nz-select formControlName=\"template_payroll\" nzAllowClear nzplaceholder=\"please select\">\r\n                                <nz-option *ngFor=\"let item of listTemplate['payroll']\"\r\n                                    [nzValue]=\"item.id_print_template\" [nzLabel]=\"item.nama_template\"></nz-option>\r\n                            </nz-select>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"py-4 border-bottom\">\r\n                        <div class=\"font-weight-bold mb-2\">THR</div>\r\n                        <div>\r\n                            <nz-select formControlName=\"template_thr\" nzAllowClear nzplaceholder=\"please select\">\r\n                                <nz-option *ngFor=\"let item of listTemplate['thr']\" [nzValue]=\"item.id_print_template\"\r\n                                    [nzLabel]=\"item.nama_template\"></nz-option>\r\n                            </nz-select>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"py-4 border-bottom\">\r\n                        <div class=\"font-weight-bold mb-2\">Bonus</div>\r\n                        <div>\r\n                            <nz-select formControlName=\"template_bonus\" nzAllowClear nzplaceholder=\"please select\">\r\n                                <nz-option *ngFor=\"let item of listTemplate['bonus']\" [nzValue]=\"item.id_print_template\"\r\n                                    [nzLabel]=\"item.nama_template\"></nz-option>\r\n                            </nz-select>\r\n                        </div>\r\n                    </div>\r\n\r\n                </div>\r\n\r\n\r\n            </form>\r\n\r\n\r\n\r\n\r\n            <div class=\"footer\">\r\n                <button type=\"button\" (click)=\"goToBack()\" class=\"ant-btn\"\r\n                    style=\"margin-right: 8px;\"><span>Cancel</span></button>\r\n                <button type=\"button\" (click)=\"simpan()\" class=\"ant-btn ant-btn-primary\"><span>Submit</span></button>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/hr/payroll/pengaturan/core/core.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/hr/payroll/pengaturan/core/core.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n\r\n    <div class=\"air__utils__heading card-header-flex\">\r\n        <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n            <h5 class=\"mb-0\">Payroll Settings</h5>\r\n        </div>\r\n        <div class=\"d-flex flex-column justify-content-center\">\r\n            <a class=\"btn btn-primary\" [routerLink]=\"['../payroll-edit',pengaturan.id_pengaturan]\"\r\n                routerLinkActive=\"router-link-active\">\r\n                <i nz-icon nzType=\"edit\" nzTheme=\"outline\"></i> Edit\r\n            </a>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"\">\r\n\r\n        <div class=\"py-4 border-bottom\">\r\n            <div class=\"font-weight-bold mb-2\">rate_usd</div>\r\n            <div> <b>{{pengaturan.rate_usd | currency:'Rp'}}</b>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"py-4 border-bottom\">\r\n            <div class=\"font-weight-bold mb-2\">Prorate Salary </div>\r\n            <div> <b>{{pengaturan.prorate_gaji}}</b> (Calculation of the prorated salary for staff entering or leaving\r\n                before the cut off date)\r\n            </div>\r\n        </div>\r\n        <div class=\"py-4 border-bottom\">\r\n            <div class=\"font-weight-bold mb-2\">Prorated Salary Calculation Method</div>\r\n            <div>{{pengaturan.prorate_gaji_metode}}</div>\r\n        </div>\r\n        <div class=\"py-4 border-bottom\">\r\n            <div class=\"font-weight-bold mb-2\">Cut Off Payroll</div>\r\n            <div>{{pengaturan.cut_of_payroll}} th</div>\r\n        </div>\r\n        <div class=\"py-4 border-bottom\">\r\n            <div class=\"font-weight-bold mb-2\">Cut Off Attendance</div>\r\n            <div>{{pengaturan.cut_of_absensi}} th</div>\r\n        </div>\r\n        <div class=\"py-4 border-bottom\">\r\n            <div class=\"font-weight-bold mb-2\">Payroll Processing Date</div>\r\n            <div>{{pengaturan.tanggal_proses_payroll}} th</div>\r\n        </div>\r\n        <div class=\"py-4 border-bottom\">\r\n            <div class=\"font-weight-bold mb-2\">New Employee Get THR After</div>\r\n            <div>{{pengaturan.thr_start}} Months</div>\r\n        </div>\r\n        <div class=\"py-4 border-bottom\">\r\n            <div class=\"font-weight-bold mb-2\">Round Up of the Work Period</div>\r\n            <div>{{pengaturan.thr_pembulatan_masa_kerja == 'ya' ? 'Yes': 'No'}}</div>\r\n        </div>\r\n        <div class=\"py-4 border-bottom\">\r\n            <div class=\"font-weight-bold mb-2\">Round Up of the Work Period will be Equivalent to 1 Month if more than\r\n            </div>\r\n            <div>{{pengaturan.thr_pembulatan_masa_kerja_ya}}</div>\r\n        </div>\r\n        <div class=\"py-4 border-bottom\">\r\n            <div class=\"font-weight-bold mb-2\">Payroll Template</div>\r\n            <div>{{pengaturan.template_payroll}}</div>\r\n        </div>\r\n        <div class=\"py-4 border-bottom\">\r\n            <div class=\"font-weight-bold mb-2\">THR Template</div>\r\n            <div>{{pengaturan.template_thr}}</div>\r\n        </div>\r\n        <div class=\"py-4 border-bottom\">\r\n            <div class=\"font-weight-bold mb-2\">Bonus Template</div>\r\n            <div>{{pengaturan.template_bonus}}</div>\r\n        </div>\r\n\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/hr/payroll/pengaturan/ketentuan-pemerintah/ketentuan-pemerintah.component.html":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/hr/payroll/pengaturan/ketentuan-pemerintah/ketentuan-pemerintah.component.html ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n\r\n    <div class=\"air__utils__heading card-header-flex\">\r\n        <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n            <h5 class=\"mb-0\">Government Provisions</h5>\r\n        </div>\r\n        <div class=\"d-flex flex-column justify-content-center\">\r\n            <a class=\"btn btn-primary\" (click)=\"simpan()\" routerLinkActive=\"router-link-active\">\r\n                <i nz-icon nzType=\"sync\" nzTheme=\"outline\"></i> Update\r\n            </a>\r\n        </div>\r\n    </div>\r\n    <div class=\"\">\r\n\r\n\r\n        <div class=\"row\">\r\n            <div class=\"col-xl-6 col-lg-12\">\r\n                <div class=\"card\">\r\n                    <div class=\"card-body\">\r\n                        <div>\r\n                            <div class=\"text-dark font-size-18 font-weight-bold mb-1\">PTKP (Non-taxable income)</div>\r\n                            <div class=\"text-gray-6 mb-2\">Per Year</div>\r\n\r\n                            <nz-form-item *ngFor=\"let item of ptkp\">\r\n                                <nz-form-label [nzSm]=\"6\" [nzXs]=\"24\" nzRequired nzFor=\"{{item.jenis_tk}}\">\r\n                                    {{item.jenis_tk}}\r\n                                </nz-form-label>\r\n                                <nz-form-control [nzSm]=\"14\" [nzXs]=\"24\">\r\n                                    <nz-input-number [(ngModel)]=\"item.tk_value\" id=\"{{item.jenis_tk}}\"></nz-input-number>\r\n                                    {{item.tk_value | currency: 'Rp.'}}\r\n                                </nz-form-control>\r\n                            </nz-form-item>\r\n\r\n                        </div>\r\n\r\n                    </div>\r\n                </div>\r\n                <h5 class=\"text-dark mb-4\">Position Allowance</h5>\r\n                <div class=\"card\">\r\n                    <div class=\"card-body\">\r\n                        <form nz-form [formGroup]=\"pengaturan\">\r\n                            <nz-form-item>\r\n                                <nz-form-label [nzSm]=\"16\" [nzXs]=\"24\" nzRequired>\r\n                                    Position Allowance\r\n                                </nz-form-label>\r\n                                <nz-input-group nzAddOnAfter=\"%\">\r\n                                    <input type=\"text\" nz-input formControlName=\"biaya_jabatan\" />\r\n                                </nz-input-group>\r\n                            </nz-form-item>\r\n\r\n                            <nz-form-item>\r\n                                <nz-form-label [nzSm]=\"16\" [nzXs]=\"24\" nzRequired>\r\n                                    Position Allowance Limit\r\n                                </nz-form-label>\r\n                                <nz-input-group nzAddOnBefore=\"Rp\">\r\n                                    <input type=\"number\" nz-input formControlName=\"biaya_jabatan_max\" />\r\n                                </nz-input-group>\r\n                            </nz-form-item>\r\n\r\n                        </form>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-xl-6 col-lg-12\">\r\n                <div class=\"card\">\r\n                    <div class=\"card-body\">\r\n                        <div>\r\n                            <div class=\"text-dark font-size-18 font-weight-bold mb-1\">PKP (Taxable Companies/Entrepreneur)</div>\r\n                            <div class=\"text-gray-6 mb-2\">Per Year</div>\r\n\r\n                            <nz-form-item *ngFor=\"let item of pkp\">\r\n                                <nz-form-label [nzSm]=\"16\" [nzXs]=\"24\" nzRequired nzFor=\"{{item.id_pkp}}\">\r\n                                    {{item.range_pkp_awal | currency:'Rp'}} - {{item.range_pkp_akhir | currency:'Rp'}}\r\n                                </nz-form-label>\r\n                                <nz-form-control [nzSm]=\"6\" [nzXs]=\"24\">\r\n                                    <nz-input-group nzAddOnAfter=\"%\">\r\n                                        <input nz-input [(ngModel)]=\"item.value_pkp\" id=\"{{item.id_pkp}}\" />\r\n                                    </nz-input-group>\r\n\r\n                                </nz-form-control>\r\n                            </nz-form-item>\r\n\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n\r\n\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/hr/payroll/pengaturan/ketentuan-perusahaan/add/add.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/hr/payroll/pengaturan/ketentuan-perusahaan/add/add.component.html ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form nz-form [formGroup]=\"komponen\" (ngSubmit)=\"simpan()\">\r\n\r\n    <div class=\"card air__utils__cardMarked air__utils__cardMarked--primary\">\r\n        <div class=\"card-header card-header-flex\">\r\n            <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n                <h5 class=\"mb-0\">New Component </h5>\r\n            </div>\r\n            <div class=\"d-flex flex-column justify-content-center\">\r\n                <button type=\"button\" (click)=\"goToBack()\" class=\"ant-btn\"\r\n                    style=\"margin-right: 8px;\"><span>Back</span></button>\r\n            </div>\r\n        </div>\r\n        <div class=\"card-body\">\r\n            <div>\r\n                <div class=\"mb-3\">\r\n\r\n                    <div class=\"table-responsive\">\r\n                        <table class=\"table table-borderless text-gray-6 mb-0\">\r\n                            <tbody>\r\n                                <tr>\r\n                                    <td>Component Name</td>\r\n                                    <td class=\"text-right\">\r\n                                        <nz-form-control>\r\n                                            <input nz-input formControlName=\"komponen\" />\r\n                                        </nz-form-control>\r\n                                    </td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>Component Code</td>\r\n                                    <td class=\"text-right\">\r\n                                        <nz-form-control>\r\n                                            <input nz-input formControlName=\"kode_komponen\" />\r\n                                            <p><i>Must be unique with no spacing. Ex: payroll001</i></p>\r\n                                        </nz-form-control>\r\n                                    </td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>Payroll Component Method</td>\r\n                                    <td class=\"text-right\">\r\n                                        <nz-form-control>\r\n                                            <nz-select formControlName=\"metode\" nzAllowClear\r\n                                                nzplaceholder=\"please select\">\r\n                                                <nz-option nzValue=\"bulanan\" nzLabel=\"Per Month\"></nz-option>\r\n                                                <nz-option nzValue=\"tahunan\" nzLabel=\"Per Year\"></nz-option>\r\n                                                <!-- <nz-option nzValue=\"sekali\" nzLabel=\"Tidak Tetap\"></nz-option> -->\r\n                                            </nz-select>\r\n                                        </nz-form-control>\r\n                                    </td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>This Payroll Component will be Applied Prorate?</td>\r\n                                    <td class=\"text-right\">\r\n                                        <nz-radio-group formControlName=\"prorate\">\r\n                                            <label nz-radio nzValue=\"ya\">Yes</label>\r\n                                            <label nz-radio nzValue=\"tidak\">No</label>\r\n                                        </nz-radio-group>\r\n                                    </td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>Payroll component is fixed?</td>\r\n                                    <td class=\"text-right\">\r\n                                        <nz-radio-group formControlName=\"is_tetap\">\r\n                                            <label nz-radio nzValue=\"ya\">Yes</label>\r\n                                            <label nz-radio nzValue=\"tidak\">No</label>\r\n                                        </nz-radio-group>\r\n                                    </td>\r\n                                </tr>\r\n                                <!-- <tr>\r\n                                    <td>apakah perhitungan nilai fix?</td>\r\n                                    <td class=\"text-right\">\r\n                                        <nz-radio-group formControlName=\"is_nilai\">\r\n                                            <label nz-radio nzValue=\"ya\">Ya</label>\r\n                                            <label nz-radio nzValue=\"tidak\">Tidak</label>\r\n                                        </nz-radio-group>\r\n                                    </td>\r\n                                </tr> -->\r\n                                <tr>\r\n                                    <td>Value</td>\r\n                                    <td class=\"text-right\">\r\n                                        <nz-input-group nzAddOnBefore=\"Rp\">\r\n                                            <input type=\"number\" nz-input formControlName=\"nilai\" />\r\n                                        </nz-input-group>\r\n                                    </td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>Calculation Formulas</td>\r\n                                    <td class=\"text-right\">\r\n                                        <textarea nz-input placeholder=\"Fill in the formula with the existing value\"\r\n                                            formControlName=\"rumus\"\r\n                                            [nzAutosize]=\"{ minRows: 2, maxRows: 6 }\"></textarea>\r\n                                    </td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>Types of Payroll Components</td>\r\n                                    <td class=\"text-right\">\r\n                                        <nz-radio-group formControlName=\"jenis\">\r\n                                            <label nz-radio nzValue=\"plus\">Add</label>\r\n                                            <label nz-radio nzValue=\"minus\">Subtract</label>\r\n                                        </nz-radio-group>\r\n                                    </td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>This Component is Taxed?</td>\r\n                                    <td class=\"text-right\">\r\n                                        <!-- <nz-radio-group formControlName=\"is_pajak\">\r\n                                            <label nz-radio nzValue=\"ya\">Yes</label>\r\n                                            <label nz-radio nzValue=\"tidak\">No</label>\r\n                                        </nz-radio-group> -->\r\n\r\n                                        <nz-select formControlName=\"is_pajak\" nzAllowClear\r\n                                            nzplaceholder=\"please select\">\r\n                                            <nz-option nzValue=\"tidak\" nzLabel=\"No\"></nz-option>\r\n                                            <nz-option *ngFor=\"let item of list_kelompok\"\r\n                                                [nzValue]=\"item.id_kelompok_komponen\" nzLabel=\"{{item.nama_kelompok}}\">\r\n                                            </nz-option>\r\n                                            <!-- <nz-option nzValue=\"sekali\" nzLabel=\"Tidak Tetap\"></nz-option> -->\r\n                                        </nz-select>\r\n                                    </td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>This Component BPJS</td>\r\n                                    <td class=\"text-right\">\r\n                                        <!-- <nz-radio-group formControlName=\"is_pajak\">\r\n                                            <label nz-radio nzValue=\"ya\">Yes</label>\r\n                                            <label nz-radio nzValue=\"tidak\">No</label>\r\n                                        </nz-radio-group> -->\r\n\r\n                                        <nz-select formControlName=\"is_bpjs\" nzAllowClear nzplaceholder=\"please select\">\r\n                                            <nz-option nzValue=\"tidak\" nzLabel=\"No\"></nz-option>\r\n                                            <nz-option *ngFor=\"let item of bpjs\" [nzValue]=\"item.for_fild\"\r\n                                                nzLabel=\"{{item.bpjs_jenis}}\"></nz-option>\r\n                                            <!-- <nz-option nzValue=\"sekali\" nzLabel=\"Tidak Tetap\"></nz-option> -->\r\n                                        </nz-select>\r\n                                    </td>\r\n                                </tr>\r\n\r\n                            </tbody>\r\n                        </table>\r\n                    </div>\r\n\r\n                </div>\r\n                <div>\r\n                    <div class=\"table-responsive\">\r\n                        Description\r\n                        <table class=\"table table-borderless text-muted mb-0\">\r\n                            <tbody>\r\n                                <tr>\r\n                                    <td>\r\n                                        <textarea nz-input placeholder=\"Fill in the formula with the existing value\"\r\n                                            formControlName=\"keterangan_komponen\"\r\n                                            [nzAutosize]=\"{ minRows: 2, maxRows: 6 }\"></textarea>\r\n                                    </td>\r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n        <div class=\"card-footer\">\r\n            <button type=\"button\" (click)=\"goToBack()\" class=\"ant-btn\"\r\n                style=\"margin-right: 8px;\"><span>Cancel</span></button>\r\n            <button type=\"submit\" class=\"ant-btn ant-btn-primary\"><span>Submit</span></button>\r\n        </div>\r\n    </div>\r\n</form>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/hr/payroll/pengaturan/ketentuan-perusahaan/edit/edit.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/hr/payroll/pengaturan/ketentuan-perusahaan/edit/edit.component.html ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form nz-form [formGroup]=\"komponen\" (ngSubmit)=\"simpan()\">\r\n\r\n    <div class=\"card air__utils__cardMarked air__utils__cardMarked--primary\">\r\n        <div class=\"card-header card-header-flex\">\r\n            <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n                <h5 class=\"mb-0\">Edit Component</h5>\r\n            </div>\r\n            <div class=\"d-flex flex-column justify-content-center\">\r\n                <button type=\"button\" (click)=\"goToBack()\" class=\"ant-btn\"\r\n                    style=\"margin-right: 8px;\"><span>Back</span></button>\r\n            </div>\r\n        </div>\r\n        <div class=\"card-body\">\r\n            <div>\r\n                <div class=\"mb-3\">\r\n\r\n                    <div class=\"table-responsive\">\r\n                        <table class=\"table table-borderless text-gray-6 mb-0\">\r\n                            <tbody>\r\n                                <tr>\r\n                                    <td>Component Name</td>\r\n                                    <td class=\"text-right\">\r\n                                        <nz-form-control>\r\n                                            <input nz-input formControlName=\"komponen\" />\r\n                                        </nz-form-control>\r\n                                    </td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>Component Code</td>\r\n                                    <td class=\"text-right\">\r\n                                        <nz-form-control>\r\n                                            <input nz-input formControlName=\"kode_komponen\" [disabled]=\"true\" />\r\n                                        </nz-form-control>\r\n                                    </td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>Payroll Component Method</td>\r\n                                    <td class=\"text-right\">\r\n                                        <nz-form-control>\r\n                                            <nz-select formControlName=\"metode\" nzAllowClear\r\n                                                nzplaceholder=\"please select\">\r\n                                                <nz-option nzValue=\"bulanan\" nzLabel=\"Per Month\"></nz-option>\r\n                                                <nz-option nzValue=\"tahunan\" nzLabel=\"Per Year\"></nz-option>\r\n                                                <!-- <nz-option nzValue=\"sekali\" nzLabel=\"Tidak Tetap\"></nz-option> -->\r\n                                            </nz-select>\r\n                                        </nz-form-control>\r\n                                    </td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>This Payroll Component will be Applied Prorate?</td>\r\n                                    <td class=\"text-right\">\r\n                                        <nz-radio-group formControlName=\"prorate\">\r\n                                            <label nz-radio nzValue=\"ya\">Yes</label>\r\n                                            <label nz-radio nzValue=\"tidak\">No</label>\r\n                                        </nz-radio-group>\r\n                                    </td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>Payroll component is fixed?</td>\r\n                                    <td class=\"text-right\">\r\n                                        <nz-radio-group formControlName=\"is_tetap\">\r\n                                            <label nz-radio nzValue=\"ya\">Yes</label>\r\n                                            <label nz-radio nzValue=\"tidak\">No</label>\r\n                                        </nz-radio-group>\r\n                                    </td>\r\n                                </tr>\r\n                                <!-- <tr>\r\n                                        <td>apakah perhitungan nilai fix?</td>\r\n                                        <td class=\"text-right\">\r\n                                            <nz-radio-group formControlName=\"is_nilai\">\r\n                                                <label nz-radio nzValue=\"ya\">Ya</label>\r\n                                                <label nz-radio nzValue=\"tidak\">Tidak</label>\r\n                                            </nz-radio-group>\r\n                                        </td>\r\n                                    </tr> -->\r\n                                <tr>\r\n                                    <td>Value</td>\r\n                                    <td class=\"text-right\">\r\n                                        <nz-input-group nzAddOnBefore=\"Rp\">\r\n                                            <input type=\"number\" nz-input formControlName=\"nilai\" />\r\n                                        </nz-input-group>\r\n                                    </td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>Calculation Formulas</td>\r\n                                    <td class=\"text-right\">\r\n                                        <textarea nz-input placeholder=\"Fill in the formula with the existing value\"\r\n                                            formControlName=\"rumus\"\r\n                                            [nzAutosize]=\"{ minRows: 2, maxRows: 6 }\"></textarea>\r\n                                    </td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>Types of Payroll Components</td>\r\n                                    <td class=\"text-right\">\r\n                                        <nz-radio-group formControlName=\"jenis\">\r\n                                            <label nz-radio nzValue=\"plus\">Add</label>\r\n                                            <label nz-radio nzValue=\"minus\">Subtract</label>\r\n                                        </nz-radio-group>\r\n                                    </td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>This Component is Taxed?</td>\r\n                                    <td class=\"text-right\">\r\n\r\n                                        <nz-select formControlName=\"is_pajak\" nzAllowClear\r\n                                            nzplaceholder=\"please select\">\r\n                                            <nz-option nzValue=\"tidak\" nzLabel=\"No\"></nz-option>\r\n                                            <nz-option *ngFor=\"let item of list_kelompok\"\r\n                                                [nzValue]=\"item.id_kelompok_komponen\" nzLabel=\"{{item.nama_kelompok}}\">\r\n                                            </nz-option>\r\n                                            <!-- <nz-option nzValue=\"sekali\" nzLabel=\"Tidak Tetap\"></nz-option> -->\r\n                                        </nz-select>\r\n\r\n                                        <!-- <nz-radio-group formControlName=\"is_pajak\">\r\n                                            <label nz-radio nzValue=\"ya\">Yes</label>\r\n                                            <label nz-radio nzValue=\"tidak\">No</label>\r\n                                        </nz-radio-group> -->\r\n                                    </td>\r\n                                </tr>\r\n\r\n                                <tr>\r\n                                    <td>This Component BPJS</td>\r\n                                    <td class=\"text-right\">\r\n                                        <!-- <nz-radio-group formControlName=\"is_pajak\">\r\n                                                                            <label nz-radio nzValue=\"ya\">Yes</label>\r\n                                                                            <label nz-radio nzValue=\"tidak\">No</label>\r\n                                                                        </nz-radio-group> -->\r\n\r\n                                        <nz-select formControlName=\"is_bpjs\" nzAllowClear nzplaceholder=\"please select\">\r\n                                            <nz-option nzValue=\"tidak\" nzLabel=\"No\"></nz-option>\r\n                                            <nz-option *ngFor=\"let item of bpjs\" [nzValue]=\"item.for_fild\"\r\n                                                nzLabel=\"{{item.bpjs_jenis}}\"></nz-option>\r\n                                            <!-- <nz-option nzValue=\"sekali\" nzLabel=\"Tidak Tetap\"></nz-option> -->\r\n                                        </nz-select>\r\n                                    </td>\r\n                                </tr>\r\n\r\n                            </tbody>\r\n                        </table>\r\n                    </div>\r\n\r\n                </div>\r\n                <div>\r\n                    <div class=\"table-responsive\">\r\n                        Description\r\n                        <table class=\"table table-borderless text-muted mb-0\">\r\n                            <tbody>\r\n                                <tr>\r\n                                    <td>\r\n                                        <textarea nz-input placeholder=\"Fill in the formula with the existing value\"\r\n                                            formControlName=\"keterangan_komponen\"\r\n                                            [nzAutosize]=\"{ minRows: 2, maxRows: 6 }\"></textarea>\r\n                                    </td>\r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n        <div class=\"card-footer\">\r\n            <button type=\"button\" (click)=\"goToBack()\" class=\"ant-btn\"\r\n                style=\"margin-right: 8px;\"><span>Cancel</span></button>\r\n            <button type=\"submit\" class=\"ant-btn ant-btn-primary\"><span>Submit</span></button>\r\n        </div>\r\n    </div>\r\n</form>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/hr/payroll/pengaturan/ketentuan-perusahaan/ketentuan-perusahaan.component.html":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/hr/payroll/pengaturan/ketentuan-perusahaan/ketentuan-perusahaan.component.html ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n\r\n    <div class=\"air__utils__heading card-header-flex\">\r\n        <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n            <h5 class=\"mb-0\">Company Policy</h5>\r\n        </div>\r\n        <div class=\"d-flex flex-column justify-content-center\">\r\n            <a class=\"btn btn-primary\" [routerLink]=\"['add']\" routerLinkActive=\"router-link-active\" routerLinkActive=\"router-link-active\">\r\n                <i nz-icon nzType=\"plus\" nzTheme=\"outline\"></i> Add\r\n            </a>\r\n        </div>\r\n    </div>\r\n    <div class=\"\">\r\n\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-9\">\r\n                <div class=\"align-items-start mb-3\">\r\n\r\n\r\n                    <router-outlet></router-outlet>\r\n\r\n                </div>\r\n\r\n            </div>\r\n            <div class=\"col-lg-3\">\r\n                <app-widget></app-widget>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/hr/payroll/pengaturan/ketentuan-perusahaan/list/list.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/hr/payroll/pengaturan/ketentuan-perusahaan/list/list.component.html ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card air__utils__cardMarked air__utils__cardMarked--primary\" *ngFor=\"let item of listKomponen\">\r\n    <div class=\"card-header card-header-flex\">\r\n        <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n            <h5 class=\"mb-0\">[<b>{{item.kode_komponen}}</b>] {{item.komponen}} <i *ngIf=\"item.is_lock=='ya'\" nz-icon\r\n                    nzType=\"lock\" nzTheme=\"outline\"></i></h5>\r\n        </div>\r\n        <div class=\"d-flex flex-column justify-content-center\" *ngIf=\"item.is_lock !='ya'\">\r\n            <button type=\"button\" class=\"btn btn-light\" nz-dropdown [nzDropdownMenu]=\"menu\" nzTrigger=\"click\"\r\n                nzPlacement=\"bottomRight\">\r\n                <i class=\"fe fe-more-vertical\"></i>\r\n            </button>\r\n            <nz-dropdown-menu #menu=\"nzDropdownMenu\">\r\n                <ul nz-menu>\r\n                    <!-- <li nz-menu-item><a href=\"javascript:;\">Link Pegawai</a></li> -->\r\n                    <li nz-menu-item *ngIf=\"item.is_lock =='tidak'\" (click)=\"delete(item.id_komponen_perusahaan)\"><a\r\n                            href=\"javascript:;\">Delete</a></li>\r\n                    <li nz-menu-divider></li>\r\n                    <li nz-menu-item *ngIf=\"item.is_lock =='tidak'\"><a\r\n                            [routerLink]=\"['../edit',item.id_komponen_perusahaan]\" routerLinkActive=\"router-link-active\"\r\n                            href=\"javascript:;\">Edit</a></li>\r\n                </ul>\r\n            </nz-dropdown-menu>\r\n        </div>\r\n    </div>\r\n    <div class=\"card-body\">\r\n        <div>\r\n            <div class=\"mb-3\">\r\n\r\n                <div class=\"table-responsive\">\r\n                    <table class=\"table table-borderless text-gray-6 mb-0\">\r\n                        <tbody>\r\n                            <tr>\r\n                                <td>Payroll Component Method</td>\r\n                                <td class=\"text-right\">\r\n                                    <strong>{{item.metode}}</strong>\r\n                                </td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>This Payroll Component will be Applied Prorate?</td>\r\n                                <td class=\"text-right\">\r\n                                    <strong>{{item.prorate}}</strong>\r\n                                </td>\r\n                            </tr>\r\n                            <!-- <tr>\r\n                                <td>apakah perhitungan nilai fix?</td>\r\n                                <td class=\"text-right\">\r\n                                    <strong>{{item.is_nilai}}</strong>\r\n                                </td>\r\n                            </tr> -->\r\n                            <tr>\r\n                                <td>Value</td>\r\n                                <td class=\"text-right\">\r\n                                    <strong>{{item.nilai | currency:'Rp '}}</strong>\r\n                                </td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>Calculation Formulas</td>\r\n                                <td class=\"text-right\">\r\n                                    <strong>{{item.rumus}}</strong>\r\n                                </td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>Types of Payroll Components</td>\r\n                                <td class=\"text-right\">\r\n                                    <strong>{{item.jenis}}</strong>\r\n                                </td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>This Component is Taxed?</td>\r\n                                <td class=\"text-right\">\r\n                                    <strong>{{item.is_pajak}}</strong>\r\n                                </td>\r\n                            </tr>\r\n\r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n            <div>\r\n                <div class=\"bg-gray-1 text-gray-6 text-uppercase px-3 py-1 mb-2\">{{item.rumus}}</div>\r\n                <div class=\"table-responsive\">\r\n                    <table class=\"table table-borderless text-muted mb-0\">\r\n                        <tbody>\r\n                            <tr>\r\n                                <td>{{item.keterangan_komponen}}</td>\r\n                            </tr>\r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/hr/payroll/pengaturan/ketentuan-perusahaan/widget/widget.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/hr/payroll/pengaturan/ketentuan-perusahaan/widget/widget.component.html ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"py-4 border-bottom\">\r\n    <div class=\"font-weight-bold mb-2\">Basic</div>\r\n    <div>\r\n        <table class=\"table table-borderless text-gray-6 mb-0\">\r\n            <tbody>\r\n                <tr>\r\n                    <td>General</td>\r\n                    <td class=\"text-right\">\r\n                        <strong>* (Multiply), / (Divide), - (Subtract) , + (Add)</strong>\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <td>Comparison</td>\r\n                    <td class=\"text-right\">\r\n                        <strong> > , < ,=</strong>\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <td>Logic</td>\r\n                    <td class=\"text-right\">\r\n                        <strong>if( x Comparison, True, False)</strong>\r\n                    </td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"py-4 border-bottom\">\r\n    <div class=\"font-weight-bold mb-2\">Company Component</div>\r\n    <div>\r\n        <table class=\"table table-borderless text-gray-6 mb-0\">\r\n            <tbody>\r\n                <tr>\r\n                    <td>Basic Salary [number]</td>\r\n                    <td class=\"text-right\">\r\n                        <strong>gapok</strong>\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <td>The value of the component itself [number]</td>\r\n                    <td class=\"text-right\">\r\n                        <strong>nilai</strong>\r\n                    </td>\r\n                </tr>\r\n                <!-- <tr>\r\n                    <td>UMR [number]</td>\r\n                    <td class=\"text-right\">\r\n                        <strong>umr</strong>\r\n                    </td>\r\n                </tr> -->\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"py-4 border-bottom\">\r\n    <div class=\"font-weight-bold mb-2\">Components of Leave</div>\r\n    <div>\r\n        <table class=\"table table-borderless text-gray-6 mb-0\">\r\n            <tbody>\r\n                <tr *ngFor=\"let item of list_lembuer_param\">\r\n                    <td>{{item.lembur_pengaturan}}</td>\r\n                    <td class=\"text-right\">\r\n                        <strong>{{item.kode_lembur}}</strong>\r\n                    </td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n\r\n</div>\r\n\r\n<div class=\"py-4 border-bottom\">\r\n    <div class=\"font-weight-bold mb-2\">Components of Attendance</div>\r\n    <div>\r\n        <table class=\"table table-borderless text-gray-6 mb-0\">\r\n            <tbody>\r\n                <tr>\r\n                    <td>Late [number]</td>\r\n                    <td class=\"text-right\">\r\n                        <strong>telat</strong>\r\n                    </td>\r\n                </tr>\r\n\r\n                <tr>\r\n                    <td>Absent [number]</td>\r\n                    <td class=\"text-right\">\r\n                        <strong>alfa</strong>\r\n                    </td>\r\n                </tr>\r\n\r\n                <tr>\r\n                    <td>Present [number]</td>\r\n                    <td class=\"text-right\">\r\n                        <strong>hadir</strong>\r\n                    </td>\r\n                </tr>\r\n\r\n                <tr>\r\n                    <td>Total Leave [number]</td>\r\n                    <td class=\"text-right\">\r\n                        <strong>cuti</strong>\r\n                    </td>\r\n                </tr>\r\n\r\n                <tr>\r\n                    <td>Early [number]</td>\r\n                    <td class=\"text-right\">\r\n                        <strong>cabut</strong>\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <td>Prorate [boolean]</td>\r\n                    <td class=\"text-right\">\r\n                        <strong>prorate(ya,tidak)</strong>\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <td>Tax ? [boolean]</td>\r\n                    <td class=\"text-right\">\r\n                        <strong>is_pajak (ya,tidak)</strong>\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <td>Holiday? [boolean]</td>\r\n                    <td class=\"text-right\">\r\n                        <strong>is_holiday (ya,tidak)</strong>\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <td>22 Working Days [number]</td>\r\n                    <td class=\"text-right\">\r\n                        <strong>hari_kerja22 (22)</strong>\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <td>Actual Working Day [number]</td>\r\n                    <td class=\"text-right\">\r\n                        <strong>hari_kerja_real</strong>\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <td>Calendar Days [number]</td>\r\n                    <td class=\"text-right\">\r\n                        <strong>hari_kalender</strong>\r\n                    </td>\r\n                </tr>\r\n\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"py-4 border-bottom\">\r\n    <div class=\"font-weight-bold mb-2\">Components of Leave</div>\r\n    <div>\r\n        <table class=\"table table-borderless text-gray-6 mb-0\">\r\n            <tbody>\r\n                <tr *ngFor=\"let item of list_cuti_param\">\r\n                    <td>{{item.nama_cuti}}</td>\r\n                    <td class=\"text-right\">\r\n                        <strong>{{item.kode}}</strong>\r\n                    </td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/hr/payroll/pengaturan/pegawaii/detail/detail.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/hr/payroll/pengaturan/pegawaii/detail/detail.component.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table class=\"table table-borderless\">\r\n    <tbody>\r\n        <tr>\r\n            <td class=\"text-gray-6 pl-0\">Name</td>\r\n            <td class=\"pr-0 text-right text-dark\"> {{pegawai.nama_pegawai}}</td>\r\n        </tr>\r\n        <tr>\r\n            <td class=\"text-gray-6 pl-0\">NIK</td>\r\n            <td class=\"pr-0 text-right text-dark\"> {{pegawai.nik}}</td>\r\n        </tr>\r\n        <tr>\r\n            <td class=\"text-gray-6 pl-0\">Born</td>\r\n            <td class=\"pr-0 text-right text-dark\"> {{pegawai.tempat_lahir}} / {{pegawai.tanggal_lahir | date}}</td>\r\n        </tr>\r\n        <tr>\r\n            <td class=\"text-gray-6 pl-0\">NPWP</td>\r\n            <td class=\"pr-0 text-right text-dark\">{{pegawai.npwp}}</td>\r\n        </tr>\r\n\r\n        <tr>\r\n            <td class=\"text-gray-6 pl-0\">Registerd Date</td>\r\n            <td class=\"pr-0 text-right text-dark\"> {{pegawai.tanggal_terdaftar | date}}</td>\r\n        </tr>\r\n        <tr>\r\n            <td class=\"text-gray-6 pl-0\">Date noted</td>\r\n            <td class=\"pr-0 text-right text-dark\"> {{pegawai.tanggal_milik_npwp | date}}</td>\r\n        </tr>\r\n        <tr>\r\n            <td class=\"text-gray-6 pl-0\">Address</td>\r\n            <td class=\"pr-0 text-right text-dark\">{{pegawai.alamat_tinggal}}</td>\r\n        </tr>\r\n        <tr>\r\n            <td class=\"text-gray-6 pl-0\">Tax Address</td>\r\n            <td class=\"pr-0 text-right text-dark\"> {{pegawai.alamat_pajak}}</td>\r\n        </tr>\r\n        <tr>\r\n            <td class=\"text-gray-6 pl-0\">Email</td>\r\n            <td class=\"pr-0 text-right text-dark\"> {{pegawai.email}}</td>\r\n        </tr>\r\n\r\n\r\n        <tr>\r\n            <td class=\"text-gray-6 pl-0\">Join date</td>\r\n            <td class=\"pr-0 text-right text-dark\"> {{pegawai.tanggal_masuk |date}}</td>\r\n        </tr>\r\n        <tr>\r\n            <td class=\"text-gray-6 pl-0\">Resign date</td>\r\n            <td class=\"pr-0 text-right text-dark\"> {{pegawai.tanggal_berhenti | date}}</td>\r\n        </tr>\r\n        <tr>\r\n            <td class=\"text-gray-6 pl-0\">Period of income</td>\r\n            <td class=\"pr-0 text-right text-dark\"> {{pegawai.tanggal_penghasilan_mulai | date:'MMMM'}} to\r\n                {{pegawai.tanggal_penghasilan_selesai | date:'MMMM'}}</td>\r\n        </tr>\r\n        <tr>\r\n            <td class=\"text-gray-6 pl-0\">Status In</td>\r\n            <td class=\"pr-0 text-right text-dark\"> {{pegawai.status_masuk}}</td>\r\n        </tr>\r\n        <tr>\r\n            <td class=\"text-gray-6 pl-0\">Status Out</td>\r\n            <td class=\"pr-0 text-right text-dark\"> {{pegawai.status_berhenti}}</td>\r\n        </tr>\r\n        <tr>\r\n            <td class=\"text-gray-6 pl-0\">Resignation reason</td>\r\n            <td class=\"pr-0 text-right text-dark\"> {{pegawai.alasan_resign}}</td>\r\n        </tr>\r\n        <tr>\r\n            <td class=\"text-gray-6 pl-0\">Employee type</td>\r\n            <td class=\"pr-0 text-right text-dark\"> {{pegawai.jenis_pegawai}}</td>\r\n        </tr>\r\n        <tr>\r\n            <td class=\"text-gray-6 pl-0\">Gender</td>\r\n            <td class=\"pr-0 text-right text-dark\"> {{pegawai.jenis_kelamin}}</td>\r\n        </tr>\r\n        <tr>\r\n            <td class=\"text-gray-6 pl-0\">Nationality</td>\r\n            <td class=\"pr-0 text-right text-dark\"> {{pegawai.kebangsaan}}</td>\r\n        </tr>\r\n        <tr>\r\n            <td class=\"text-gray-6 pl-0\">Country Code</td>\r\n            <td class=\"pr-0 text-right text-dark\"> {{pegawai.kode_negara}}</td>\r\n        </tr>\r\n        <tr>\r\n            <td class=\"text-gray-6 pl-0\">Tax Position</td>\r\n            <td class=\"pr-0 text-right text-dark\"> {{pegawai.jabatan_pajak}}</td>\r\n        </tr>\r\n        <tr>\r\n            <td class=\"text-gray-6 pl-0\">Tax Martial Status</td>\r\n            <td class=\"pr-0 text-right text-dark\"> {{pegawai.status_perkawinan}}</td>\r\n        </tr>\r\n        <tr>\r\n            <td class=\"text-gray-6 pl-0\">PTKP</td>\r\n            <td class=\"pr-0 text-right text-dark\"> {{pegawai.jumlah_tanggungan}}</td>\r\n        </tr>\r\n        <tr>\r\n            <td class=\"text-gray-6 pl-0\">Metode Pajak </td>\r\n            <td class=\"pr-0 text-right text-dark\"> {{pegawai.metode_pajak}}</td>\r\n        </tr>\r\n        <tr>\r\n            <td class=\"text-gray-6 pl-0\">Previous income </td>\r\n            <td class=\"pr-0 text-right text-dark\"> {{pegawai.penghasilan_sebelumnya}}</td>\r\n        </tr>\r\n        <tr>\r\n            <td class=\"text-gray-6 pl-0\">Previous PPH </td>\r\n            <td class=\"pr-0 text-right text-dark\"> {{pegawai.pph_dipot_sebelumnya}}</td>\r\n        </tr>\r\n        <tr>\r\n            <td class=\"text-gray-6 pl-0\">Previous Income Periode </td>\r\n            <td class=\"pr-0 text-right text-dark\"> {{pegawai.masa_penghasilan_sebelumnya}} mounth</td>\r\n        </tr>\r\n        <tr>\r\n            <td class=\"text-gray-6 pl-0\">Jamsostek Numb </td>\r\n            <td class=\"pr-0 text-right text-dark\"> {{pegawai.no_jamsostek}}</td>\r\n        </tr>\r\n        <tr>\r\n            <td class=\"text-gray-6 pl-0\">Jamsostek Join </td>\r\n            <td class=\"pr-0 text-right text-dark\"> {{pegawai.tanggal_masuk_jst | date}} to\r\n                {{pegawai.tanggal_berkahir_jst | date}}</td>\r\n        </tr>\r\n        <tr>\r\n            <td class=\"text-gray-6 pl-0\">biological mother's </td>\r\n            <td class=\"pr-0 text-right text-dark\"> {{pegawai.nama_ibu_kandung}}</td>\r\n        </tr>\r\n\r\n        <tr>\r\n            <td class=\"text-gray-6 pl-0\">Description </td>\r\n            <td class=\"pr-0 text-right text-dark\"> {{pegawai.keterangan}}</td>\r\n        </tr>\r\n    </tbody>\r\n</table>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/hr/payroll/pengaturan/pegawaii/edit-pegawai/edit-pegawai.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/hr/payroll/pengaturan/pegawaii/edit-pegawai/edit-pegawai.component.html ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form nz-form [formGroup]=\"dataForm\" (ngSubmit)=\"simpan()\">\r\n\r\n    <div nz-row nzGutter=\"8\">\r\n        <div nz-col nzSpan=\"16\">\r\n            <nz-form-item>\r\n                <nz-form-label>Name</nz-form-label>\r\n                <nz-form-control>\r\n                    <input nz-input placeholder=\"\" disabled formControlName=\"nama_pegawai\" />\r\n                </nz-form-control>\r\n            </nz-form-item>\r\n        </div>\r\n        <div nz-col nzSpan=\"8\">\r\n            <nz-form-item>\r\n                <nz-form-label>Employee ID</nz-form-label>\r\n                <nz-form-control>\r\n                    <input nz-input placeholder=\"Employee ID\" disabled formControlName=\"nik\" />\r\n                </nz-form-control>\r\n            </nz-form-item>\r\n        </div>\r\n    </div>\r\n    <div nz-row nzGutter=\"8\">\r\n        <div nz-col nzSpan=\"16\">\r\n            <nz-form-item>\r\n                <nz-form-label>Place of Birth </nz-form-label>\r\n                <nz-form-control>\r\n                    <input nz-input disabled placeholder=\"Place of Birth\" formControlName=\"tempat_lahir\" />\r\n                </nz-form-control>\r\n            </nz-form-item>\r\n        </div>\r\n        <div nz-col nzSpan=\"8\">\r\n            <nz-form-item>\r\n                <nz-form-label>Birth of Date </nz-form-label>\r\n                <nz-form-control>\r\n                    <input nz-input disabled placeholder=\"Place of Birth\" formControlName=\"tanggal_lahir\" />\r\n\r\n                </nz-form-control>\r\n            </nz-form-item>\r\n        </div>\r\n    </div>\r\n    <div nz-row nzGutter=\"8\">\r\n        <nz-form-item>\r\n            <nz-form-label>NPWP </nz-form-label>\r\n            <nz-form-control>\r\n                <input nz-input placeholder=\"\" formControlName=\"npwp\" />\r\n            </nz-form-control>\r\n        </nz-form-item>\r\n    </div>\r\n    <div nz-row nzGutter=\"8\">\r\n        <div nz-col nzSpan=\"12\">\r\n            <nz-form-item>\r\n                <nz-form-label>Registerd Date</nz-form-label>\r\n                <nz-form-control>\r\n                    <nz-date-picker nzShowTime nzFormat=\"yyyy-MM-dd\" nzPlaceHolder=\"\"\r\n                        formControlName=\"tanggal_terdaftar\"></nz-date-picker>\r\n                </nz-form-control>\r\n            </nz-form-item>\r\n        </div>\r\n        <div nz-col nzSpan=\"12\">\r\n            <nz-form-item>\r\n                <nz-form-label>Date noted</nz-form-label>\r\n                <nz-form-control>\r\n                    <nz-date-picker nzShowTime nzFormat=\"yyyy-MM-dd\" nzPlaceHolder=\"\"\r\n                        formControlName=\"tanggal_milik_npwp\"></nz-date-picker>\r\n                </nz-form-control>\r\n            </nz-form-item>\r\n        </div>\r\n    </div>\r\n    <div nz-row nzGutter=\"8\">\r\n        <div nz-col nzSpan=\"12\">\r\n            <nz-form-item>\r\n                <nz-form-label>Address</nz-form-label>\r\n                <nz-form-control>\r\n                    <textarea nz-input placeholder=\"\" formControlName=\"alamat_tinggal\"\r\n                        [nzAutosize]=\"{ minRows: 4, maxRows: 4 }\"></textarea>\r\n                </nz-form-control>\r\n            </nz-form-item>\r\n        </div>\r\n        <div nz-col nzSpan=\"12\">\r\n            <nz-form-item>\r\n                <nz-form-label>Tax Address</nz-form-label>\r\n                <nz-form-control>\r\n                    <textarea nz-input placeholder=\"\" formControlName=\"alamat_pajak\"\r\n                        [nzAutosize]=\"{ minRows: 4, maxRows: 4 }\"></textarea>\r\n                </nz-form-control>\r\n            </nz-form-item>\r\n        </div>\r\n    </div>\r\n    <div nz-row nzGutter=\"8\">\r\n        <div nz-col nzSpan=\"12\">\r\n            <nz-form-item>\r\n                <nz-form-label>Email</nz-form-label>\r\n                <nz-form-control>\r\n                    <input nz-input placeholder=\"Email Address\" formControlName=\"email\" />\r\n                </nz-form-control>\r\n            </nz-form-item>\r\n        </div>\r\n        <div nz-col nzSpan=\"12\">\r\n            <nz-form-item>\r\n                <nz-form-label>Phone </nz-form-label>\r\n                <nz-form-control>\r\n                    <input nz-input type=\"number\" placeholder=\"Phone\" formControlName=\"telp\" />\r\n                </nz-form-control>\r\n            </nz-form-item>\r\n        </div>\r\n    </div>\r\n\r\n\r\n    <div nz-row nzGutter=\"8\">\r\n        <div nz-col nzSpan=\"12\">\r\n            <nz-form-item>\r\n                <nz-form-label> Join date</nz-form-label>\r\n                <nz-form-control>\r\n                    <nz-date-picker nzPlaceHolder=\"Select date\" formControlName=\"tanggal_masuk\">\r\n                    </nz-date-picker>\r\n                </nz-form-control>\r\n            </nz-form-item>\r\n        </div>\r\n        <div nz-col nzSpan=\"12\">\r\n            <nz-form-item>\r\n                <nz-form-label>Resign date</nz-form-label>\r\n                <nz-form-control>\r\n                    <nz-date-picker nzPlaceHolder=\"Select date\" formControlName=\"tanggal_berhenti\">\r\n                    </nz-date-picker>\r\n                </nz-form-control>\r\n            </nz-form-item>\r\n        </div>\r\n    </div>\r\n    <div nz-row nzGutter=\"8\">\r\n        <div nz-col nzSpan=\"12\">\r\n            <div nz-row nzGutter=\"8\">\r\n                <div nz-col nzSpan=\"12\">\r\n                    <nz-form-item>\r\n                        <nz-form-label> period of income</nz-form-label>\r\n                        <nz-form-control>\r\n                            <nz-month-picker nzPlaceHolder=\"Select month\" formControlName=\"tanggal_penghasilan_mulai\">\r\n                            </nz-month-picker>\r\n                        </nz-form-control>\r\n                    </nz-form-item>\r\n                </div>\r\n                <div nz-col nzSpan=\"12\">\r\n                    <nz-form-item>\r\n                        <nz-form-label>Until</nz-form-label>\r\n                        <nz-form-control>\r\n                            <nz-month-picker nzPlaceHolder=\"Select month\" formControlName=\"tanggal_penghasilan_selesai\">\r\n                            </nz-month-picker>\r\n                        </nz-form-control>\r\n                    </nz-form-item>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div nz-col nzSpan=\"12\">\r\n            <div nz-row nzGutter=\"8\">\r\n                <div nz-col nzSpan=\"12\">\r\n                    <nz-form-item>\r\n                        <nz-form-label> Status In</nz-form-label>\r\n                        <nz-form-control>\r\n                            <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"Select a person\"\r\n                                formControlName=\"status_masuk\">\r\n                                <nz-option nzLabel=\"Permanent\" nzValue=\"Permanent\"></nz-option>\r\n                                <nz-option nzLabel=\"Contract\" nzValue=\"Contract\"></nz-option>\r\n                            </nz-select>\r\n                        </nz-form-control>\r\n                    </nz-form-item>\r\n                </div>\r\n                <div nz-col nzSpan=\"12\">\r\n                    <nz-form-item>\r\n                        <nz-form-label>Status Out</nz-form-label>\r\n                        <nz-form-control>\r\n                            <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"Select a person\"\r\n                                formControlName=\"status_berhenti\">\r\n                                <nz-option nzLabel=\"Permanent\" nzValue=\"Permanent\"></nz-option>\r\n                                <nz-option nzLabel=\"Contract\" nzValue=\"Contract\"></nz-option>\r\n                            </nz-select>\r\n                        </nz-form-control>\r\n                    </nz-form-item>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div nz-row nzGutter=\"8\">\r\n        <nz-form-item>\r\n            <nz-form-label>Resignation reason</nz-form-label>\r\n            <nz-form-control>\r\n                <input nz-input placeholder=\"\" formControlName=\"alasan_resign\" />\r\n            </nz-form-control>\r\n        </nz-form-item>\r\n    </div>\r\n    <!-- <div nz-row nzGutter=\"8\">\r\n        <div nz-col nzSpan=\"12\">\r\n            <nz-form-item>\r\n                <nz-form-label>Employee Type</nz-form-label>\r\n                <nz-form-control>\r\n                    <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"Select a person\"\r\n                        formControlName=\"jenis_pegawai\">\r\n                        <nz-option nzLabel=\"Permanent\" nzValue=\"Permanent\"></nz-option>\r\n                        <nz-option nzLabel=\"Contract\" nzValue=\"Contract\"></nz-option>\r\n                    </nz-select>\r\n                </nz-form-control>\r\n            </nz-form-item>\r\n        </div>\r\n        <div nz-col nzSpan=\"12\">\r\n            <nz-form-item>\r\n                <nz-form-label>Gender</nz-form-label>\r\n                <nz-form-control>\r\n                    <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"Gender\" formControlName=\"jenis_kelamin\">\r\n                        <nz-option nzLabel=\"Male\" nzValue=\"laki-laki\"></nz-option>\r\n                        <nz-option nzLabel=\"Female\" nzValue=\"wanita\"></nz-option>\r\n                    </nz-select>\r\n                </nz-form-control>\r\n            </nz-form-item>\r\n        </div>\r\n    </div> -->\r\n    <div nz-row nzGutter=\"8\">\r\n        <div nz-col nzSpan=\"12\">\r\n            <nz-form-item>\r\n                <nz-form-label>Nationality</nz-form-label>\r\n                <nz-form-control>\r\n                    <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"Nationality\" formControlName=\"kebangsaan\">\r\n                        <nz-option nzLabel=\"Indonesian Citizens (WNI)\" nzValue=\"wni\"></nz-option>\r\n                        <nz-option nzLabel=\"Foreign Nationals (WNA)\" nzValue=\"wna\"></nz-option>\r\n                    </nz-select>\r\n                </nz-form-control>\r\n            </nz-form-item>\r\n        </div>\r\n\r\n    </div>\r\n    <div nz-row nzGutter=\"8\">\r\n        <div nz-col nzSpan=\"12\">\r\n            <nz-form-item>\r\n                <nz-form-label>Tax Position</nz-form-label>\r\n                <nz-form-control>\r\n                    <input nz-input placeholder=\"\" formControlName=\"jabatan_pajak\" />\r\n                </nz-form-control>\r\n            </nz-form-item>\r\n        </div>\r\n        <div nz-col nzSpan=\"12\">\r\n            <nz-form-item>\r\n                <nz-form-label>Tax Martial Status</nz-form-label>\r\n                <nz-form-control>\r\n                    <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"Martial Status\"\r\n                        formControlName=\"status_perkawinan\">\r\n                        <nz-option nzLabel=\"Single\" nzValue=\"Single\"></nz-option>\r\n                        <nz-option nzLabel=\"Married\" nzValue=\"Menikah\"></nz-option>\r\n                        <nz-option nzLabel=\"M/1\" nzValue=\"m1\"></nz-option>\r\n                        <nz-option nzLabel=\"M/2\" nzValue=\"m2\"></nz-option>\r\n                        <nz-option nzLabel=\"M/3\" nzValue=\"m3\"></nz-option>\r\n                        <nz-option nzLabel=\"M/4\" nzValue=\"m4\"></nz-option>\r\n                        <nz-option nzLabel=\"M/5\" nzValue=\"m5\"></nz-option>\r\n                        <nz-option nzLabel=\"M/6\" nzValue=\"m6\"></nz-option>\r\n                        <nz-option nzLabel=\"M/7\" nzValue=\"m7\"></nz-option>\r\n                        <nz-option nzLabel=\"M/8\" nzValue=\"m8\"></nz-option>\r\n                        <nz-option nzLabel=\"M/9\" nzValue=\"m9\"></nz-option>\r\n                        <nz-option nzLabel=\"Widower\" nzValue=\"Widower\"></nz-option>\r\n                        <nz-option nzLabel=\"Widow\" nzValue=\"Widow\"></nz-option>\r\n                    </nz-select>\r\n                </nz-form-control>\r\n            </nz-form-item>\r\n        </div>\r\n    </div>\r\n    <div nz-row nzGutter=\"8\">\r\n        <div nz-col nzSpan=\"12\">\r\n            <nz-form-item>\r\n                <nz-form-label>PTKP</nz-form-label>\r\n                <nz-form-control>\r\n                    <nz-select formControlName=\"jumlah_tanggungan\" nzAllowClear nzPlaceHolder=\"PTKP Code\">\r\n                        <nz-option *ngFor=\"let item of listPTKP\" nzValue=\"{{item.id_ptkp}}\" nzLabel=\"{{item.jenis_tk}}\">\r\n                        </nz-option>\r\n                    </nz-select>\r\n                </nz-form-control>\r\n            </nz-form-item>\r\n        </div>\r\n        <!-- <div nz-col nzSpan=\"12\">\r\n            <nz-form-item>\r\n                <nz-form-label>Metode Pajak </nz-form-label>\r\n                <nz-form-control>\r\n                    <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"Martial Status\" formControlName=\"metode_pajak\">\r\n                        <nz-option nzLabel=\"Metode Gross (Gaji Kotor Tanpa Tunjangan Pajak)\"\r\n                            nzValue=\"Metode Gross (Gaji Kotor Tanpa Tunjangan Pajak)\"></nz-option>\r\n                        <nz-option nzLabel=\" Metode Gross-Up (Gaji Bersih dengan Tunjangan Pajak)\"\r\n                            nzValue=\" Metode Gross-Up (Gaji Bersih dengan Tunjangan Pajak)\"></nz-option>\r\n                        <nz-option nzLabel=\"Metode Net (Gaji Bersih dengan Pajak Ditanggung Perusahaan)\"\r\n                            nzValue=\"Metode Net (Gaji Bersih dengan Pajak Ditanggung Perusahaan)\">\r\n                        </nz-option>\r\n                    </nz-select>\r\n                </nz-form-control>\r\n            </nz-form-item>\r\n        </div> -->\r\n    </div>\r\n    <!-- <div nz-row nzGutter=\"8\">\r\n        <h5>Jika pindah dari kantor pusat/cabang/lainnya</h5>\r\n    </div>\r\n    <div nz-row nzGutter=\"8\">\r\n        <div nz-col nzSpan=\"12\">\r\n            <nz-form-item>\r\n                <nz-form-label> Previous income </nz-form-label>\r\n                <nz-form-control>\r\n                    <input nz-input type=\"number\" placeholder=\"\" formControlName=\"penghasilan_sebelumnya\" />\r\n                </nz-form-control>\r\n            </nz-form-item>\r\n        </div>\r\n        <div nz-col nzSpan=\"12\">\r\n            <nz-form-item>\r\n                <nz-form-label>Previous PPH</nz-form-label>\r\n                <nz-form-control>\r\n                    <input nz-input placeholder=\"\" formControlName=\"pph_dipot_sebelumnya\" />\r\n                </nz-form-control>\r\n            </nz-form-item>\r\n        </div>\r\n    </div> -->\r\n    <div nz-row nzGutter=\"8\">\r\n        <div nz-col nzSpan=\"12\">\r\n            <nz-form-item>\r\n                <nz-form-label>Previous Income Periode</nz-form-label>\r\n                <nz-form-control>\r\n                    <nz-input-group nzAddOnAfter=\"mounth\">\r\n                        <input nz-input type=\"number\" placeholder=\"Number\"\r\n                            formControlName=\"masa_penghasilan_sebelumnya\" />\r\n                    </nz-input-group>\r\n                </nz-form-control>\r\n            </nz-form-item>\r\n        </div>\r\n        <div nz-col nzSpan=\"12\">\r\n            <nz-form-item>\r\n                <nz-form-label>Jamsostek Numb</nz-form-label>\r\n                <nz-form-control>\r\n                    <input nz-input placeholder=\"Number\" formControlName=\"no_jamsostek\" />\r\n                </nz-form-control>\r\n            </nz-form-item>\r\n        </div>\r\n    </div>\r\n    <div nz-row nzGutter=\"8\">\r\n        <div nz-col nzSpan=\"12\">\r\n            <div nz-row nzGutter=\"8\">\r\n                <div nz-col nzSpan=\"12\">\r\n                    <nz-form-item>\r\n                        <nz-form-label>Jamsostek Join</nz-form-label>\r\n                        <nz-form-control>\r\n                            <nz-date-picker nzFormat=\"yyyy-MM-dd\" nzPlaceHolder=\"From\"\r\n                                formControlName=\"tanggal_masuk_jst\">\r\n                            </nz-date-picker>\r\n                        </nz-form-control>\r\n                    </nz-form-item>\r\n                </div>\r\n                <div nz-col nzSpan=\"12\">\r\n                    <nz-form-item>\r\n                        <nz-form-label></nz-form-label>\r\n                        <nz-form-control>\r\n                            <nz-date-picker nzFormat=\"yyyy-MM-dd\" nzPlaceHolder=\"Until\"\r\n                                formControlName=\"tanggal_berkahir_jst\">\r\n                            </nz-date-picker>\r\n                        </nz-form-control>\r\n                    </nz-form-item>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div nz-col nzSpan=\"12\">\r\n            <nz-form-item>\r\n                <nz-form-label>Biological mother's </nz-form-label>\r\n                <nz-form-control>\r\n                    <input nz-input placeholder=\"\" formControlName=\"nama_ibu_kandung\" />\r\n                </nz-form-control>\r\n            </nz-form-item>\r\n        </div>\r\n    </div>\r\n\r\n    <div nz-row nzGutter=\"8\">\r\n        <nz-form-item>\r\n            <nz-form-label>Description</nz-form-label>\r\n            <nz-form-control>\r\n                <textarea nz-input placeholder=\"Description\" formControlName=\"keterangan\"\r\n                    [nzAutosize]=\"{ minRows: 4, maxRows: 4 }\"></textarea>\r\n            </nz-form-control>\r\n        </nz-form-item>\r\n    </div>\r\n\r\n    <div class=\"footer\">\r\n        <button type=\"submit\" class=\"ant-btn ant-btn-primary\"><span>Submit</span></button>\r\n    </div>\r\n</form>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/hr/payroll/pengaturan/pegawaii/pegawai/pegawai.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/hr/payroll/pengaturan/pegawaii/pegawai/pegawai.component.html ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"air__utils__heading card-header-flex\">\r\n        <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n            <h5 class=\"mb-0\">Employee Management</h5>\r\n        </div>\r\n\r\n    </div>\r\n    <div class=\"card\">\r\n        <div class=\"card-body\">\r\n            <nav class=\"navbar\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-8\">\r\n                        <input class=\"form-control\" type=\"text\" name=\"search\" [(ngModel)]=\"searchValue\">\r\n                    </div>\r\n                    <div class=\"col-md-4\">\r\n                        <button nz-button nzType=\"primary\" (click)=\"search()\">Search</button>\r\n                    </div>\r\n                </div>\r\n            </nav>\r\n\r\n            <nz-table #middleTable nzSize=\"middle\" [nzFrontPagination]=\"false\" [nzData]=\"listOfDisplayData\">\r\n                <thead (nzSortChange)=\"sort($event)\" nzSingleSort>\r\n                    <tr>\r\n                        <th nzShowSort nzSortKey=\"nama_depan\">Name\r\n                        </th>\r\n                        <th>ID</th>\r\n                        <th>Emp.</th>\r\n                        <th>MNT</th>\r\n                        <th>OPS</th>\r\n                        <th>Pilot</th>\r\n                        <th>Attendance</th>\r\n                        <th>RON</th>\r\n\r\n                        <th class=\"text-right\">Action</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor=\"let data of middleTable.data\">\r\n                        <td>\r\n\r\n                            <div class=\"d-flex\">\r\n                                <div class=\"p-1\">\r\n                                    <nz-avatar *ngIf=\"data.foto\" nzIcon=\"user\" nzSize=\"large\"\r\n                                        nzSrc=\"http://erp-document.vm.devetek.com/download?id_document={{data.foto}}\">\r\n                                    </nz-avatar>\r\n                                    <nz-avatar *ngIf=\"!data.foto\" nzSize=\"large\" nzIcon=\"user\"></nz-avatar>\r\n                                </div>\r\n                                <div class=\"mr-auto pl-2\">\r\n                                    <a nz-dropdown [nzDropdownMenu]=\"menu2\">\r\n                                        {{data.nama_depan}} {{data.nama_belakang}}\r\n                                        <b>{{ data.nama_depan }} {{ data.nama_belakang }}</b>\r\n\r\n                                        <br>\r\n                                        {{ data.nama_jabatan }} / {{ data.nama_departemen }}\r\n\r\n                                    </a>\r\n                                    <nz-dropdown-menu #menu2=\"nzDropdownMenu\">\r\n                                        <ul nz-menu nzSelectable>\r\n                                            <!-- <li nz-menu-item (click)=\"detailPegawai(data.id_pegawai)\">\r\n                                                Employee Detail\r\n                                            </li>\r\n                                            <li nz-menu-item (click)=\"editPegawai(data.id_pegawai)\">\r\n                                                Employee Edit\r\n                                            </li> -->\r\n                                            <li nz-menu-item>\r\n\r\n                                                <a target=\"_blank\"\r\n                                                    [routerLink]=\"['/hr/direktori/employee/pegawai-detail',data.id_pegawai,'data-pegawai','detail']\">\r\n                                                    Detail</a>\r\n                                            </li>\r\n                                            <li nz-menu-item>\r\n\r\n                                                <a target=\"_blank\"\r\n                                                    [routerLink]=\"['/hr/direktori/employee/pegawai-detail',data.id_pegawai,'payroll','komponen','list']\">\r\n                                                    Componet Payroll</a>\r\n                                            </li>\r\n                                            <li nz-menu-item>\r\n                                                <a target=\"_blank\"\r\n                                                    [routerLink]=\"['/hr/direktori/employee/pegawai-detail',data.id_pegawai,'payroll','thr','list']\">\r\n                                                    Componet THR </a>\r\n                                            </li>\r\n                                            <li nz-menu-item>\r\n                                                <a target=\"_blank\"\r\n                                                    href=\"#/hr/direktori/employee/pegawai-detail/{{data.id_pegawai}}/pengaturan-absensi/view\">Attendance</a>\r\n                                            </li>\r\n\r\n                                        </ul>\r\n                                    </nz-dropdown-menu>\r\n\r\n                                </div>\r\n                            </div>\r\n\r\n\r\n\r\n                        </td>\r\n                        <td>{{ data.no_induk }}</td>\r\n                        <td>\r\n                            <label nz-checkbox [(ngModel)]=\"data.hash_employee\"> {{ data.hash_employee }} </label>\r\n                        </td>\r\n                        <td>\r\n                            <label nz-checkbox [(ngModel)]=\"data.hash_maintenance\"> {{ data.hash_maintenance }} </label>\r\n                        </td>\r\n                        <td>\r\n                            <label nz-checkbox [(ngModel)]=\"data.hash_operation\"> {{ data.hash_operation }} </label>\r\n                        </td>\r\n                        <td>\r\n                            <label nz-checkbox [(ngModel)]=\"data.hash_pilot\"> {{ data.hash_pilot }} </label>\r\n                        </td>\r\n                        <td>\r\n                            <label nz-checkbox [(ngModel)]=\"data.hash_absensi\"> {{ data.hash_absensi }} </label>\r\n                        </td>\r\n                        <td>\r\n                            <nz-select style=\"width: 150px;\" [(ngModel)]=\"data.id_ron_group\" nzAllowClear\r\n                                nzPlaceHolder=\"Choose\">\r\n                                <nz-option *ngFor=\"let item of ron_group\" [nzValue]=\"item.id_ron_group\"\r\n                                    [nzLabel]=\"item.name_group\"></nz-option>\r\n                            </nz-select>\r\n                        </td>\r\n\r\n                        <td class=\"text-right\">\r\n                            <a nz-dropdown [nzDropdownMenu]=\"menu\" nzPlacement=\"bottomRight\">\r\n                                <i nz-icon nzType=\"more\" nzTheme=\"outline\"></i>\r\n                            </a>\r\n                            <nz-dropdown-menu #menu=\"nzDropdownMenu\">\r\n                                <ul nz-menu nzSelectable>\r\n                                    <li nz-menu-item>\r\n                                        <a nz-popconfirm nzPopconfirmTitle=\"Are you sure process this task?\"\r\n                                            nzPopconfirmPlacement=\"bottom\" (nzOnConfirm)=\"update(data)\">Update</a>\r\n                                    </li>\r\n\r\n                                </ul>\r\n                            </nz-dropdown-menu>\r\n                        </td>\r\n                    </tr>\r\n                </tbody>\r\n            </nz-table>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<nz-dropdown-menu #menu=\"nzDropdownMenu\">\r\n    <div class=\"search-box\">\r\n        <input type=\"text\" nz-input placeholder=\"Search name\" [(ngModel)]=\"searchValue\" />\r\n        <button nz-button nzSize=\"small\" nzType=\"primary\" (click)=\"search()\" class=\"search-button\">\r\n            Search\r\n        </button>\r\n        <button nz-button nzSize=\"small\" (click)=\"reset()\">Reset</button>\r\n    </div>\r\n</nz-dropdown-menu>\r\n"

/***/ }),

/***/ "./src/app/pages/hr/direktori/pengaturan/pengaturan-routing.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/pengaturan/pengaturan-routing.module.ts ***!
  \****************************************************************************/
/*! exports provided: PengaturanRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PengaturanRoutingModule", function() { return PengaturanRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pengaturan_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pengaturan.component */ "./src/app/pages/hr/direktori/pengaturan/pengaturan.component.ts");




var routes = [
    {
        path: '',
        component: _pengaturan_component__WEBPACK_IMPORTED_MODULE_3__["PengaturanComponent"],
        children: [
            {
                path: 'status',
                loadChildren: function () { return __webpack_require__.e(/*! import() | status-status-module */ "status-status-module").then(__webpack_require__.bind(null, /*! ./status/status.module */ "./src/app/pages/hr/direktori/pengaturan/status/status.module.ts")).then(function (mo) { return mo.StatusModule; }); }
            },
            {
                path: 'tipe-pegawai',
                loadChildren: function () { return __webpack_require__.e(/*! import() | tipe-pegawai-tipe-pegawai-module */ "tipe-pegawai-tipe-pegawai-module").then(__webpack_require__.bind(null, /*! ./tipe-pegawai/tipe-pegawai.module */ "./src/app/pages/hr/direktori/pengaturan/tipe-pegawai/tipe-pegawai.module.ts")).then(function (mo) { return mo.TipePegawaiModule; }); }
            },
            {
                path: 'sp',
                loadChildren: function () { return __webpack_require__.e(/*! import() | sp-sp-module */ "sp-sp-module").then(__webpack_require__.bind(null, /*! ./sp/sp.module */ "./src/app/pages/hr/direktori/pengaturan/sp/sp.module.ts")).then(function (mo) { return mo.SpModule; }); }
            },
            {
                path: 'jlisensi',
                loadChildren: function () { return __webpack_require__.e(/*! import() | jlisensi-jlisensi-module */ "jlisensi-jlisensi-module").then(__webpack_require__.bind(null, /*! ./jlisensi/jlisensi.module */ "./src/app/pages/hr/direktori/pengaturan/jlisensi/jlisensi.module.ts")).then(function (mo) { return mo.JlisensiModule; }); }
            },
        ]
    }
];
var PengaturanRoutingModule = /** @class */ (function () {
    function PengaturanRoutingModule() {
    }
    PengaturanRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], PengaturanRoutingModule);
    return PengaturanRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/hr/direktori/pengaturan/pengaturan.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/pengaturan/pengaturan.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hyL2RpcmVrdG9yaS9wZW5nYXR1cmFuL3BlbmdhdHVyYW4uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/hr/direktori/pengaturan/pengaturan.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/hr/direktori/pengaturan/pengaturan.component.ts ***!
  \***********************************************************************/
/*! exports provided: PengaturanComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PengaturanComponent", function() { return PengaturanComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_store_reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/store/reducers */ "./src/app/store/reducers.ts");
/* harmony import */ var src_app_layouts_App_router_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/layouts/App/router-animations */ "./src/app/layouts/App/router-animations.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var src_app_services_menu_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/menu.service */ "./src/app/services/menu.service.ts");






var PengaturanComponent = /** @class */ (function () {
    function PengaturanComponent(store, menuService) {
        var _this = this;
        this.store = store;
        this.menuService = menuService;
        this.menuData = [];
        this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["select"])(src_app_store_reducers__WEBPACK_IMPORTED_MODULE_2__["getSettings"])).subscribe(function (state) {
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
    PengaturanComponent.prototype.ngOnInit = function () {
        this.menuData = [
            {
                title: 'Employee status',
                key: 'status',
                icon: 'fe fe-bookmark',
                url: 'status',
            },
            {
                title: 'Employee type',
                key: 'status',
                icon: 'fe fe-bookmark',
                url: 'tipe-pegawai',
            },
            {
                title: 'warning',
                key: 'sp',
                icon: 'fe fe-bookmark',
                url: 'sp',
            },
            {
                title: 'license',
                key: 'jlisensi',
                icon: 'fe fe-bookmark',
                url: 'jlisensi',
            }
        ];
        this.menuService.menu.next(this.menuData);
        this.menuService.subBar_info.next({ parent: 'HRD', child: 'Pengaturan' });
    };
    PengaturanComponent.prototype.routeAnimation = function (outlet, animation) {
        if (animation === this.routerAnimation) {
            return outlet.isActivated && outlet.activatedRoute.routeConfig.path;
        }
    };
    PengaturanComponent.ctorParameters = function () { return [
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"] },
        { type: src_app_services_menu_service__WEBPACK_IMPORTED_MODULE_5__["MenuService"] }
    ]; };
    PengaturanComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pengaturan',
            template: __webpack_require__(/*! raw-loader!./pengaturan.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/hr/direktori/pengaturan/pengaturan.component.html"),
            animations: [src_app_layouts_App_router_animations__WEBPACK_IMPORTED_MODULE_3__["slideFadeinUp"], src_app_layouts_App_router_animations__WEBPACK_IMPORTED_MODULE_3__["slideFadeinRight"], src_app_layouts_App_router_animations__WEBPACK_IMPORTED_MODULE_3__["zoomFadein"], src_app_layouts_App_router_animations__WEBPACK_IMPORTED_MODULE_3__["fadein"]],
            styles: [__webpack_require__(/*! ./pengaturan.component.scss */ "./src/app/pages/hr/direktori/pengaturan/pengaturan.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"], src_app_services_menu_service__WEBPACK_IMPORTED_MODULE_5__["MenuService"]])
    ], PengaturanComponent);
    return PengaturanComponent;
}());



/***/ }),

/***/ "./src/app/pages/hr/direktori/pengaturan/pengaturan.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/hr/direktori/pengaturan/pengaturan.module.ts ***!
  \********************************************************************/
/*! exports provided: PengaturanModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PengaturanModule", function() { return PengaturanModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _pengaturan_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pengaturan-routing.module */ "./src/app/pages/hr/direktori/pengaturan/pengaturan-routing.module.ts");
/* harmony import */ var _pengaturan_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pengaturan.component */ "./src/app/pages/hr/direktori/pengaturan/pengaturan.component.ts");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var src_app_components_widgets_widgets_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/components/widgets/widgets-components.module */ "./src/app/components/widgets/widgets-components.module.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var src_app_components_layout_layout_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/components/layout/layout.module */ "./src/app/components/layout/layout.module.ts");









var PengaturanModule = /** @class */ (function () {
    function PengaturanModule() {
    }
    PengaturanModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_pengaturan_component__WEBPACK_IMPORTED_MODULE_4__["PengaturanComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _pengaturan_routing_module__WEBPACK_IMPORTED_MODULE_3__["PengaturanRoutingModule"],
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__["PerfectScrollbarModule"],
                src_app_components_widgets_widgets_components_module__WEBPACK_IMPORTED_MODULE_6__["WidgetsComponentsModule"],
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__["NzLayoutModule"],
                src_app_components_layout_layout_module__WEBPACK_IMPORTED_MODULE_8__["LayoutModule"],
            ]
        })
    ], PengaturanModule);
    return PengaturanModule;
}());



/***/ }),

/***/ "./src/app/pages/hr/payroll/pengaturan/core-edit/core-edit.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/pages/hr/payroll/pengaturan/core-edit/core-edit.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "nz-select {\n  margin-right: 8px;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaHIvcGF5cm9sbC9wZW5nYXR1cmFuL2NvcmUtZWRpdC9FOlxcUFJPSkVLXFxERVJBWk9OQVxcZGV2ZXRlay1lcnAvc3JjXFxhcHBcXHBhZ2VzXFxoclxccGF5cm9sbFxccGVuZ2F0dXJhblxcY29yZS1lZGl0XFxjb3JlLWVkaXQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2hyL3BheXJvbGwvcGVuZ2F0dXJhbi9jb3JlLWVkaXQvY29yZS1lZGl0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7RUFDQSxXQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9oci9wYXlyb2xsL3BlbmdhdHVyYW4vY29yZS1lZGl0L2NvcmUtZWRpdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm56LXNlbGVjdCB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDhweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59Iiwibnotc2VsZWN0IHtcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gIHdpZHRoOiAxMDAlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/hr/payroll/pengaturan/core-edit/core-edit.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/pages/hr/payroll/pengaturan/core-edit/core-edit.component.ts ***!
  \******************************************************************************/
/*! exports provided: CoreEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreEditComponent", function() { return CoreEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_sdk_payroll_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/sdk/payroll/services */ "./src/app/sdk/payroll/services.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/tool/pesan.service */ "./src/app/services/tool/pesan.service.ts");
/* harmony import */ var src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/angular-reactive-forms-helper */ "./src/app/services/angular-reactive-forms-helper.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");









var CoreEditComponent = /** @class */ (function () {
    function CoreEditComponent(fb, pesan, activatedRoute, payrollPengaturanService, nzNotificationService, spinner, router, payrollPrintTemplateService) {
        this.fb = fb;
        this.pesan = pesan;
        this.activatedRoute = activatedRoute;
        this.payrollPengaturanService = payrollPengaturanService;
        this.nzNotificationService = nzNotificationService;
        this.spinner = spinner;
        this.router = router;
        this.payrollPrintTemplateService = payrollPrintTemplateService;
        this.id_pengaturan = '';
        this.tgl = [];
        this.bulan = [];
        this.listThr_komponen = [];
        this.selectedValueThrComponent = '';
        this.listTemplate = {};
    }
    CoreEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.paramMap.subscribe(function (params) {
            _this.id_pengaturan = params.get("id_pengaturan");
        });
        this.form();
        for (var i = 1; i <= 31; i++) {
            this.tgl.push(i);
        }
        for (var i = 1; i <= 12; i++) {
            this.bulan.push(i);
        }
        this.getDetailPengaturan();
        this.getTemplatePayslip('payroll');
        this.getTemplatePayslip('thr');
        this.getTemplatePayslip('bonus');
    };
    CoreEditComponent.prototype.getTemplatePayslip = function (module) {
        var _this = this;
        this.payrollPrintTemplateService.getPayrollPrintTemplates(JSON.stringify({ module: module })).subscribe(function (data) {
            _this.listTemplate[module] = data.data;
        });
    };
    CoreEditComponent.prototype.getDetailPengaturan = function () {
        var _this = this;
        this.payrollPengaturanService.getPayrollPengaturansId(this.id_pengaturan).subscribe(function (data) {
            _this.pengaturan.setValue(data.data);
        });
    };
    CoreEditComponent.prototype.form = function () {
        this.pengaturan = this.fb.group({
            id_pengaturan: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]),
            id_perusahaan: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]),
            prorate_gaji: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]),
            prorate_gaji_metode: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]),
            cut_of_payroll: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]),
            cut_of_absensi: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]),
            tanggal_proses_payroll: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]),
            thr_start: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]),
            thr_pembulatan_masa_kerja: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]),
            thr_pembulatan_masa_kerja_ya: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]),
            thr_komponen: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]),
            thr_komponen_old: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]),
            biaya_jabatan: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]),
            biaya_jabatan_max: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]),
            template_payroll: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            template_thr: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            template_bonus: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            created_at: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            updated_at: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            rate_usd: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            id_user: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('')
        });
    };
    CoreEditComponent.prototype.getValueForm = function (fild, compare) {
        if (this.pengaturan.get(fild).value == compare) {
            return true;
        }
        return false;
    };
    CoreEditComponent.prototype.simpan = function () {
        var _this = this;
        this.spinner.show();
        if (this.pengaturan.invalid) {
            console.log(this.pengaturan.invalid);
            this.pesan.pesanWarningForm('Form Tidak Valid');
            this.spinner.hide();
            return;
        }
        this.payrollPengaturanService.putPayrollPengaturansId({
            id: this.id_pengaturan,
            body: this.pengaturan.value
        }).subscribe(function (data) {
            _this.goToBack();
            _this.spinner.hide();
        }, function (err) {
            _this.pesan.pesanWarningForm('Gagal di simpan');
            _this.spinner.hide();
        }, function () {
            console.log('HTTP request completed.');
        });
    };
    CoreEditComponent.prototype.goToBack = function () {
        this.router.navigate(['/hr/payroll/module/pengaturan/payroll']);
    };
    CoreEditComponent.ctorParameters = function () { return [
        { type: src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_7__["FormBuilderTypeSafe"] },
        { type: src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_6__["PesanService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: src_app_sdk_payroll_services__WEBPACK_IMPORTED_MODULE_4__["PayrollPengaturanService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzNotificationService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_1__["NgxSpinnerService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: src_app_sdk_payroll_services__WEBPACK_IMPORTED_MODULE_4__["PayrollPrintTemplateService"] }
    ]; };
    CoreEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-core-edit',
            template: __webpack_require__(/*! raw-loader!./core-edit.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/hr/payroll/pengaturan/core-edit/core-edit.component.html"),
            styles: [__webpack_require__(/*! ./core-edit.component.scss */ "./src/app/pages/hr/payroll/pengaturan/core-edit/core-edit.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_7__["FormBuilderTypeSafe"],
            src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_6__["PesanService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            src_app_sdk_payroll_services__WEBPACK_IMPORTED_MODULE_4__["PayrollPengaturanService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzNotificationService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_1__["NgxSpinnerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            src_app_sdk_payroll_services__WEBPACK_IMPORTED_MODULE_4__["PayrollPrintTemplateService"]])
    ], CoreEditComponent);
    return CoreEditComponent;
}());



/***/ }),

/***/ "./src/app/pages/hr/payroll/pengaturan/core/core.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/pages/hr/payroll/pengaturan/core/core.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hyL3BheXJvbGwvcGVuZ2F0dXJhbi9jb3JlL2NvcmUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/hr/payroll/pengaturan/core/core.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/hr/payroll/pengaturan/core/core.component.ts ***!
  \********************************************************************/
/*! exports provided: CoreComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreComponent", function() { return CoreComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_sdk_payroll_services_payroll_pengaturan_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sdk/payroll/services/payroll-pengaturan.service */ "./src/app/sdk/payroll/services/payroll-pengaturan.service.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");




var CoreComponent = /** @class */ (function () {
    function CoreComponent(payrollPengaturanService, nzNotificationService) {
        this.payrollPengaturanService = payrollPengaturanService;
        this.nzNotificationService = nzNotificationService;
        this.pengaturan = {};
    }
    CoreComponent.prototype.ngOnInit = function () {
        this.getPengaturan();
    };
    CoreComponent.prototype.getPengaturan = function () {
        var _this = this;
        this.payrollPengaturanService.getPayrollPengaturans().subscribe(function (res) {
            if (res.data.length < 1) {
                _this.nzNotificationService.create('warning', 'Pengaturan tidak ditemukan', 'Harap hubungi database administaror!');
                return false;
            }
            _this.pengaturan = res.data[0];
            _this.pengaturan.thr_komponen = JSON.parse(_this.pengaturan.thr_komponen);
        });
    };
    CoreComponent.ctorParameters = function () { return [
        { type: src_app_sdk_payroll_services_payroll_pengaturan_service__WEBPACK_IMPORTED_MODULE_2__["PayrollPengaturanService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzNotificationService"] }
    ]; };
    CoreComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-core',
            template: __webpack_require__(/*! raw-loader!./core.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/hr/payroll/pengaturan/core/core.component.html"),
            styles: [__webpack_require__(/*! ./core.component.scss */ "./src/app/pages/hr/payroll/pengaturan/core/core.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_sdk_payroll_services_payroll_pengaturan_service__WEBPACK_IMPORTED_MODULE_2__["PayrollPengaturanService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzNotificationService"]])
    ], CoreComponent);
    return CoreComponent;
}());



/***/ }),

/***/ "./src/app/pages/hr/payroll/pengaturan/ketentuan-pemerintah/ketentuan-pemerintah.component.scss":
/*!******************************************************************************************************!*\
  !*** ./src/app/pages/hr/payroll/pengaturan/ketentuan-pemerintah/ketentuan-pemerintah.component.scss ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ant-form-item-label {\n  text-align: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaHIvcGF5cm9sbC9wZW5nYXR1cmFuL2tldGVudHVhbi1wZW1lcmludGFoL0U6XFxQUk9KRUtcXERFUkFaT05BXFxkZXZldGVrLWVycC9zcmNcXGFwcFxccGFnZXNcXGhyXFxwYXlyb2xsXFxwZW5nYXR1cmFuXFxrZXRlbnR1YW4tcGVtZXJpbnRhaFxca2V0ZW50dWFuLXBlbWVyaW50YWguY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2hyL3BheXJvbGwvcGVuZ2F0dXJhbi9rZXRlbnR1YW4tcGVtZXJpbnRhaC9rZXRlbnR1YW4tcGVtZXJpbnRhaC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9oci9wYXlyb2xsL3BlbmdhdHVyYW4va2V0ZW50dWFuLXBlbWVyaW50YWgva2V0ZW50dWFuLXBlbWVyaW50YWguY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYW50LWZvcm0taXRlbS1sYWJlbCB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59IiwiLmFudC1mb3JtLWl0ZW0tbGFiZWwge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/hr/payroll/pengaturan/ketentuan-pemerintah/ketentuan-pemerintah.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/pages/hr/payroll/pengaturan/ketentuan-pemerintah/ketentuan-pemerintah.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: KetentuanPemerintahComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KetentuanPemerintahComponent", function() { return KetentuanPemerintahComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/angular-reactive-forms-helper */ "./src/app/services/angular-reactive-forms-helper.ts");
/* harmony import */ var src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/tool/pesan.service */ "./src/app/services/tool/pesan.service.ts");
/* harmony import */ var src_app_sdk_payroll_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/sdk/payroll/services */ "./src/app/sdk/payroll/services.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");








var KetentuanPemerintahComponent = /** @class */ (function () {
    function KetentuanPemerintahComponent(fb, pesan, payrollPengaturanService, spinner, router, payrollPkpService, payrollPtkpService) {
        this.fb = fb;
        this.pesan = pesan;
        this.payrollPengaturanService = payrollPengaturanService;
        this.spinner = spinner;
        this.router = router;
        this.payrollPkpService = payrollPkpService;
        this.payrollPtkpService = payrollPtkpService;
        this.id_pengaturan = '';
        this.selectedValueThrComponent = '';
        this.ptkp = [];
        this.pkp = [];
    }
    KetentuanPemerintahComponent.prototype.ngOnInit = function () {
        this.formPengaturan();
        this.getDetailPengaturan();
        this.getPkp();
        this.getPtkp();
    };
    KetentuanPemerintahComponent.prototype.getDetailPengaturan = function () {
        var _this = this;
        this.payrollPengaturanService.getPayrollPengaturans().subscribe(function (data) {
            _this.pengaturan.setValue(data.data[0]);
            _this.id_pengaturan = data.data[0].id_pengaturan;
        });
    };
    KetentuanPemerintahComponent.prototype.getPtkp = function () {
        var _this = this;
        this.payrollPtkpService.getPayrollPtkps().subscribe(function (data) {
            _this.ptkp = data.data;
        });
    };
    KetentuanPemerintahComponent.prototype.getPkp = function () {
        var _this = this;
        this.payrollPkpService.getPayrollPkps().subscribe(function (data) {
            _this.pkp = data.data;
        });
    };
    KetentuanPemerintahComponent.prototype.formPengaturan = function () {
        this.pengaturan = this.fb.group({
            id_pengaturan: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]),
            id_perusahaan: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]),
            prorate_gaji: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]),
            prorate_gaji_metode: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]),
            cut_of_payroll: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]),
            cut_of_absensi: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]),
            tanggal_proses_payroll: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]),
            thr_start: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]),
            thr_pembulatan_masa_kerja: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]),
            thr_pembulatan_masa_kerja_ya: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]),
            thr_komponen: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]),
            thr_komponen_old: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]),
            biaya_jabatan: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]),
            biaya_jabatan_max: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]),
            created_at: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            template_payroll: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            template_thr: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            template_bonus: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            updated_at: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            id_user: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('')
        });
    };
    KetentuanPemerintahComponent.prototype.getValueForm = function (fild, compare) {
        if (this.pengaturan.get(fild).value == compare) {
            return true;
        }
        return false;
    };
    KetentuanPemerintahComponent.prototype.simpan = function () {
        var _this = this;
        this.spinner.show();
        if (this.pengaturan.invalid) {
            console.log(this.pengaturan.invalid);
            this.pesan.pesanWarningForm('Form Biaya jabatan Tidak Valid');
            this.spinner.hide();
            return;
        }
        this.payrollPengaturanService.putPayrollPengaturansId({
            id: this.id_pengaturan,
            body: this.pengaturan.value
        }).subscribe(function (data) {
            _this.payrollPkpService.putPayrollPkpsId({ id: '1', body: _this.pkp }).subscribe(function (respkp) {
            });
            _this.payrollPtkpService.putPayrollPtkpsId({ id: '1', body: _this.ptkp }).subscribe(function (respkp) {
            });
            _this.pesan.pesanBerhasilForm('Berhasil di simpan');
            // this.goToBack()
            _this.spinner.hide();
        }, function (err) {
            _this.pesan.pesanWarningForm('Gagal di simpan');
            _this.spinner.hide();
        }, function () {
            console.log('HTTP request completed.');
        });
    };
    KetentuanPemerintahComponent.prototype.goToBack = function () {
        this.router.navigate(['/hr/payroll/module/pengaturan/pengaturan_pemerintah']);
    };
    KetentuanPemerintahComponent.ctorParameters = function () { return [
        { type: src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_2__["FormBuilderTypeSafe"] },
        { type: src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_3__["PesanService"] },
        { type: src_app_sdk_payroll_services__WEBPACK_IMPORTED_MODULE_4__["PayrollPengaturanService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
        { type: src_app_sdk_payroll_services__WEBPACK_IMPORTED_MODULE_4__["PayrollPkpService"] },
        { type: src_app_sdk_payroll_services__WEBPACK_IMPORTED_MODULE_4__["PayrollPtkpService"] }
    ]; };
    KetentuanPemerintahComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ketentuan-pemerintah',
            template: __webpack_require__(/*! raw-loader!./ketentuan-pemerintah.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/hr/payroll/pengaturan/ketentuan-pemerintah/ketentuan-pemerintah.component.html"),
            styles: [__webpack_require__(/*! ./ketentuan-pemerintah.component.scss */ "./src/app/pages/hr/payroll/pengaturan/ketentuan-pemerintah/ketentuan-pemerintah.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_2__["FormBuilderTypeSafe"],
            src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_3__["PesanService"],
            src_app_sdk_payroll_services__WEBPACK_IMPORTED_MODULE_4__["PayrollPengaturanService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            src_app_sdk_payroll_services__WEBPACK_IMPORTED_MODULE_4__["PayrollPkpService"],
            src_app_sdk_payroll_services__WEBPACK_IMPORTED_MODULE_4__["PayrollPtkpService"]])
    ], KetentuanPemerintahComponent);
    return KetentuanPemerintahComponent;
}());



/***/ }),

/***/ "./src/app/pages/hr/payroll/pengaturan/ketentuan-perusahaan/add/add.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/hr/payroll/pengaturan/ketentuan-perusahaan/add/add.component.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hyL3BheXJvbGwvcGVuZ2F0dXJhbi9rZXRlbnR1YW4tcGVydXNhaGFhbi9hZGQvYWRkLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/hr/payroll/pengaturan/ketentuan-perusahaan/add/add.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/hr/payroll/pengaturan/ketentuan-perusahaan/add/add.component.ts ***!
  \***************************************************************************************/
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
    function AddComponent(fb, pesan, activatedRoute, payrollKomponenPerusahaanService, payrollKelompokKomponenService, spinner, payrollBpjsJenisService, router) {
        this.fb = fb;
        this.pesan = pesan;
        this.activatedRoute = activatedRoute;
        this.payrollKomponenPerusahaanService = payrollKomponenPerusahaanService;
        this.payrollKelompokKomponenService = payrollKelompokKomponenService;
        this.spinner = spinner;
        this.payrollBpjsJenisService = payrollBpjsJenisService;
        this.router = router;
        this.bpjs = [];
        this.list_kelompok = [];
        this.id_komponen_perusahaan = '';
    }
    AddComponent.prototype.ngOnInit = function () {
        this.form();
        this.getPreeKomponen();
        this.getKelompok();
        this.getBpjs();
    };
    AddComponent.prototype.getBpjs = function () {
        var _this = this;
        this.payrollBpjsJenisService.getPayrollBpjsJenis().subscribe(function (data) {
            _this.bpjs = data.data;
        });
    };
    AddComponent.prototype.getKelompok = function () {
        var _this = this;
        this.payrollKelompokKomponenService.getPayrollKelompokKomponens().subscribe(function (data) {
            _this.list_kelompok = data.data;
        });
    };
    AddComponent.prototype.getPreeKomponen = function () {
        var _this = this;
        this.payrollKomponenPerusahaanService.postPayrollKomponenPerusahaans().subscribe(function (data) {
            _this.komponen.setValue(data.data);
            _this.id_komponen_perusahaan = data.data.id_komponen_perusahaan;
        });
    };
    AddComponent.prototype.form = function () {
        this.komponen = this.fb.group({
            id_komponen_perusahaan: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]),
            id_perusahaan: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]),
            komponen: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]),
            rumus: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            kode_komponen: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]),
            keterangan_komponen: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            metode: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('bulanan', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]),
            prorate: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('ya', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]),
            is_pajak: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('ya', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]),
            is_tetap: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('ya', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]),
            is_nilai: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('ya', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]),
            is_lock: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('tidak', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]),
            is_bpjs: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('tidak', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]),
            jenis: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('plus', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]),
            nilai: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('0'),
            validasi: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('1'),
            old_rumus: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            created_at: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            updated_at: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            id_user: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('')
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
        this.komponen.patchValue({ validasi: 1 });
        this.payrollKomponenPerusahaanService.putPayrollKomponenPerusahaansId({
            id: this.id_komponen_perusahaan,
            body: this.komponen.value
        }).subscribe(function (data) {
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
        this.router.navigate(['/hr/payroll/module/pengaturan/ketentuan_perusahaan']);
    };
    AddComponent.ctorParameters = function () { return [
        { type: src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_3__["FormBuilderTypeSafe"] },
        { type: src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_4__["PesanService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
        { type: src_app_sdk_payroll_services__WEBPACK_IMPORTED_MODULE_2__["PayrollKomponenPerusahaanService"] },
        { type: src_app_sdk_payroll_services__WEBPACK_IMPORTED_MODULE_2__["PayrollKelompokKomponenService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"] },
        { type: src_app_sdk_payroll_services__WEBPACK_IMPORTED_MODULE_2__["PayrollBpjsJenisService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
    ]; };
    AddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add',
            template: __webpack_require__(/*! raw-loader!./add.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/hr/payroll/pengaturan/ketentuan-perusahaan/add/add.component.html"),
            styles: [__webpack_require__(/*! ./add.component.scss */ "./src/app/pages/hr/payroll/pengaturan/ketentuan-perusahaan/add/add.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_3__["FormBuilderTypeSafe"],
            src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_4__["PesanService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            src_app_sdk_payroll_services__WEBPACK_IMPORTED_MODULE_2__["PayrollKomponenPerusahaanService"],
            src_app_sdk_payroll_services__WEBPACK_IMPORTED_MODULE_2__["PayrollKelompokKomponenService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"],
            src_app_sdk_payroll_services__WEBPACK_IMPORTED_MODULE_2__["PayrollBpjsJenisService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], AddComponent);
    return AddComponent;
}());



/***/ }),

/***/ "./src/app/pages/hr/payroll/pengaturan/ketentuan-perusahaan/edit/edit.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/hr/payroll/pengaturan/ketentuan-perusahaan/edit/edit.component.scss ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hyL3BheXJvbGwvcGVuZ2F0dXJhbi9rZXRlbnR1YW4tcGVydXNhaGFhbi9lZGl0L2VkaXQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/hr/payroll/pengaturan/ketentuan-perusahaan/edit/edit.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/hr/payroll/pengaturan/ketentuan-perusahaan/edit/edit.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: EditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditComponent", function() { return EditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/angular-reactive-forms-helper */ "./src/app/services/angular-reactive-forms-helper.ts");
/* harmony import */ var src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/tool/pesan.service */ "./src/app/services/tool/pesan.service.ts");
/* harmony import */ var src_app_sdk_payroll_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/sdk/payroll/services */ "./src/app/sdk/payroll/services.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");








var EditComponent = /** @class */ (function () {
    function EditComponent(fb, pesan, activatedRoute, payrollKomponenPerusahaanService, payrollKelompokKomponenService, spinner, payrollBpjsJenisService, router) {
        this.fb = fb;
        this.pesan = pesan;
        this.activatedRoute = activatedRoute;
        this.payrollKomponenPerusahaanService = payrollKomponenPerusahaanService;
        this.payrollKelompokKomponenService = payrollKelompokKomponenService;
        this.spinner = spinner;
        this.payrollBpjsJenisService = payrollBpjsJenisService;
        this.router = router;
        this.bpjs = [];
        this.list_kelompok = [];
        this.id_komponen_perusahaan = '';
    }
    EditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.paramMap.subscribe(function (data) {
            if (data.get('id_komponen_perusahaan')) {
                _this.id_komponen_perusahaan = data.get('id_komponen_perusahaan');
                _this.form();
                _this.getPreeKomponen();
                _this.getKelompok();
                _this.getBpjs();
            }
        });
    };
    EditComponent.prototype.getBpjs = function () {
        var _this = this;
        this.payrollBpjsJenisService.getPayrollBpjsJenis().subscribe(function (data) {
            _this.bpjs = data.data;
        });
    };
    EditComponent.prototype.getKelompok = function () {
        var _this = this;
        this.payrollKelompokKomponenService.getPayrollKelompokKomponens().subscribe(function (data) {
            _this.list_kelompok = data.data;
        });
    };
    EditComponent.prototype.getPreeKomponen = function () {
        var _this = this;
        this.payrollKomponenPerusahaanService.getPayrollKomponenPerusahaansId(this.id_komponen_perusahaan).subscribe(function (data) {
            _this.komponen.setValue(data.data);
            _this.id_komponen_perusahaan = data.data.id_komponen_perusahaan;
        });
    };
    EditComponent.prototype.form = function () {
        this.komponen = this.fb.group({
            id_komponen_perusahaan: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]),
            id_perusahaan: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]),
            komponen: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]),
            rumus: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]),
            kode_komponen: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]),
            keterangan_komponen: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            metode: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('bulanan', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]),
            prorate: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('ya', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]),
            is_pajak: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('ya', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]),
            is_tetap: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('ya', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]),
            is_nilai: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('ya', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]),
            is_lock: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('tidak', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]),
            is_bpjs: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('tidak', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]),
            jenis: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('plus', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]),
            nilai: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('0'),
            validasi: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('1'),
            old_rumus: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            created_at: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            updated_at: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            id_user: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('')
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
        this.komponen.patchValue({ validasi: 1 });
        this.payrollKomponenPerusahaanService.putPayrollKomponenPerusahaansId({
            id: this.id_komponen_perusahaan,
            body: this.komponen.value
        }).subscribe(function (data) {
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
        this.router.navigate(['/hr/payroll/module/pengaturan/ketentuan_perusahaan']);
    };
    EditComponent.ctorParameters = function () { return [
        { type: src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_3__["FormBuilderTypeSafe"] },
        { type: src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_4__["PesanService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: src_app_sdk_payroll_services__WEBPACK_IMPORTED_MODULE_5__["PayrollKomponenPerusahaanService"] },
        { type: src_app_sdk_payroll_services__WEBPACK_IMPORTED_MODULE_5__["PayrollKelompokKomponenService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"] },
        { type: src_app_sdk_payroll_services__WEBPACK_IMPORTED_MODULE_5__["PayrollBpjsJenisService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
    ]; };
    EditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-edit',
            template: __webpack_require__(/*! raw-loader!./edit.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/hr/payroll/pengaturan/ketentuan-perusahaan/edit/edit.component.html"),
            styles: [__webpack_require__(/*! ./edit.component.scss */ "./src/app/pages/hr/payroll/pengaturan/ketentuan-perusahaan/edit/edit.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_3__["FormBuilderTypeSafe"],
            src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_4__["PesanService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            src_app_sdk_payroll_services__WEBPACK_IMPORTED_MODULE_5__["PayrollKomponenPerusahaanService"],
            src_app_sdk_payroll_services__WEBPACK_IMPORTED_MODULE_5__["PayrollKelompokKomponenService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"],
            src_app_sdk_payroll_services__WEBPACK_IMPORTED_MODULE_5__["PayrollBpjsJenisService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], EditComponent);
    return EditComponent;
}());



/***/ }),

/***/ "./src/app/pages/hr/payroll/pengaturan/ketentuan-perusahaan/ketentuan-perusahaan.component.scss":
/*!******************************************************************************************************!*\
  !*** ./src/app/pages/hr/payroll/pengaturan/ketentuan-perusahaan/ketentuan-perusahaan.component.scss ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hyL3BheXJvbGwvcGVuZ2F0dXJhbi9rZXRlbnR1YW4tcGVydXNhaGFhbi9rZXRlbnR1YW4tcGVydXNhaGFhbi5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/hr/payroll/pengaturan/ketentuan-perusahaan/ketentuan-perusahaan.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/pages/hr/payroll/pengaturan/ketentuan-perusahaan/ketentuan-perusahaan.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: KetentuanPerusahaanComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KetentuanPerusahaanComponent", function() { return KetentuanPerusahaanComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var KetentuanPerusahaanComponent = /** @class */ (function () {
    function KetentuanPerusahaanComponent() {
    }
    KetentuanPerusahaanComponent.prototype.ngOnInit = function () {
    };
    KetentuanPerusahaanComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ketentuan-perusahaan',
            template: __webpack_require__(/*! raw-loader!./ketentuan-perusahaan.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/hr/payroll/pengaturan/ketentuan-perusahaan/ketentuan-perusahaan.component.html"),
            styles: [__webpack_require__(/*! ./ketentuan-perusahaan.component.scss */ "./src/app/pages/hr/payroll/pengaturan/ketentuan-perusahaan/ketentuan-perusahaan.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], KetentuanPerusahaanComponent);
    return KetentuanPerusahaanComponent;
}());



/***/ }),

/***/ "./src/app/pages/hr/payroll/pengaturan/ketentuan-perusahaan/list/list.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/hr/payroll/pengaturan/ketentuan-perusahaan/list/list.component.scss ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hyL3BheXJvbGwvcGVuZ2F0dXJhbi9rZXRlbnR1YW4tcGVydXNhaGFhbi9saXN0L2xpc3QuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/hr/payroll/pengaturan/ketentuan-perusahaan/list/list.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/hr/payroll/pengaturan/ketentuan-perusahaan/list/list.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_sdk_payroll_services_payroll_komponen_perusahaan_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sdk/payroll/services/payroll-komponen-perusahaan.service */ "./src/app/sdk/payroll/services/payroll-komponen-perusahaan.service.ts");
/* harmony import */ var src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/tool/pesan.service */ "./src/app/services/tool/pesan.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");







var ListComponent = /** @class */ (function () {
    function ListComponent(pesan, activatedRoute, payrollKomponenPerusahaanService, nzNotificationService, spinner, router) {
        this.pesan = pesan;
        this.activatedRoute = activatedRoute;
        this.payrollKomponenPerusahaanService = payrollKomponenPerusahaanService;
        this.nzNotificationService = nzNotificationService;
        this.spinner = spinner;
        this.router = router;
        this.listKomponen = [];
    }
    ListComponent.prototype.ngOnInit = function () {
        this.getList();
    };
    ListComponent.prototype.getList = function () {
        var _this = this;
        this.spinner.show();
        this.payrollKomponenPerusahaanService.getPayrollKomponenPerusahaans().subscribe(function (data) {
            _this.listKomponen = data.data;
            _this.spinner.hide();
        });
    };
    ListComponent.prototype.delete = function (id) {
        var _this = this;
        this.spinner.show();
        this.payrollKomponenPerusahaanService.deletePayrollKomponenPerusahaansId(id).subscribe(function (data) {
            _this.getList();
            _this.spinner.hide();
        });
    };
    ListComponent.ctorParameters = function () { return [
        { type: src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_3__["PesanService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: src_app_sdk_payroll_services_payroll_komponen_perusahaan_service__WEBPACK_IMPORTED_MODULE_2__["PayrollKomponenPerusahaanService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzNotificationService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
    ]; };
    ListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list',
            template: __webpack_require__(/*! raw-loader!./list.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/hr/payroll/pengaturan/ketentuan-perusahaan/list/list.component.html"),
            styles: [__webpack_require__(/*! ./list.component.scss */ "./src/app/pages/hr/payroll/pengaturan/ketentuan-perusahaan/list/list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_3__["PesanService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            src_app_sdk_payroll_services_payroll_komponen_perusahaan_service__WEBPACK_IMPORTED_MODULE_2__["PayrollKomponenPerusahaanService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzNotificationService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "./src/app/pages/hr/payroll/pengaturan/ketentuan-perusahaan/widget/widget.component.scss":
/*!***********************************************************************************************!*\
  !*** ./src/app/pages/hr/payroll/pengaturan/ketentuan-perusahaan/widget/widget.component.scss ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".table td,\n.table th {\n  padding: 3px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaHIvcGF5cm9sbC9wZW5nYXR1cmFuL2tldGVudHVhbi1wZXJ1c2FoYWFuL3dpZGdldC9FOlxcUFJPSkVLXFxERVJBWk9OQVxcZGV2ZXRlay1lcnAvc3JjXFxhcHBcXHBhZ2VzXFxoclxccGF5cm9sbFxccGVuZ2F0dXJhblxca2V0ZW50dWFuLXBlcnVzYWhhYW5cXHdpZGdldFxcd2lkZ2V0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9oci9wYXlyb2xsL3BlbmdhdHVyYW4va2V0ZW50dWFuLXBlcnVzYWhhYW4vd2lkZ2V0L3dpZGdldC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFSSxZQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9oci9wYXlyb2xsL3BlbmdhdHVyYW4va2V0ZW50dWFuLXBlcnVzYWhhYW4vd2lkZ2V0L3dpZGdldC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50YWJsZSB0ZCxcclxuLnRhYmxlIHRoIHtcclxuICAgIHBhZGRpbmc6IDNweDtcclxufVxyXG4iLCIudGFibGUgdGQsXG4udGFibGUgdGgge1xuICBwYWRkaW5nOiAzcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/hr/payroll/pengaturan/ketentuan-perusahaan/widget/widget.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/hr/payroll/pengaturan/ketentuan-perusahaan/widget/widget.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: WidgetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetComponent", function() { return WidgetComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_sdk_hr_services_kalender_lembur_pengaturan_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sdk/hr/services/kalender-lembur-pengaturan.service */ "./src/app/sdk/hr/services/kalender-lembur-pengaturan.service.ts");
/* harmony import */ var src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/sdk/hr/services */ "./src/app/sdk/hr/services.ts");




var WidgetComponent = /** @class */ (function () {
    function WidgetComponent(kalenderLemburPengaturanService, kalenderCutiPengaturanService) {
        this.kalenderLemburPengaturanService = kalenderLemburPengaturanService;
        this.kalenderCutiPengaturanService = kalenderCutiPengaturanService;
        this.list_lembuer_param = [];
        this.list_cuti_param = [];
    }
    WidgetComponent.prototype.ngOnInit = function () {
        this.getParamaterLembur();
        this.getParamaterCuti();
    };
    WidgetComponent.prototype.getParamaterLembur = function () {
        var _this = this;
        this.kalenderLemburPengaturanService.getKalenderLemburPengaturans().subscribe(function (data) {
            _this.list_lembuer_param = data.data;
        });
    };
    WidgetComponent.prototype.getParamaterCuti = function () {
        var _this = this;
        this.kalenderCutiPengaturanService.getKalenderCutiPengaturans().subscribe(function (data) {
            _this.list_cuti_param = data.data;
        });
    };
    WidgetComponent.ctorParameters = function () { return [
        { type: src_app_sdk_hr_services_kalender_lembur_pengaturan_service__WEBPACK_IMPORTED_MODULE_2__["KalenderLemburPengaturanService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_3__["KalenderCutiPengaturanService"] }
    ]; };
    WidgetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-widget',
            template: __webpack_require__(/*! raw-loader!./widget.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/hr/payroll/pengaturan/ketentuan-perusahaan/widget/widget.component.html"),
            styles: [__webpack_require__(/*! ./widget.component.scss */ "./src/app/pages/hr/payroll/pengaturan/ketentuan-perusahaan/widget/widget.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_sdk_hr_services_kalender_lembur_pengaturan_service__WEBPACK_IMPORTED_MODULE_2__["KalenderLemburPengaturanService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_3__["KalenderCutiPengaturanService"]])
    ], WidgetComponent);
    return WidgetComponent;
}());



/***/ }),

/***/ "./src/app/pages/hr/payroll/pengaturan/pegawaii/detail/detail.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/hr/payroll/pengaturan/pegawaii/detail/detail.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hyL3BheXJvbGwvcGVuZ2F0dXJhbi9wZWdhd2FpaS9kZXRhaWwvZGV0YWlsLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/hr/payroll/pengaturan/pegawaii/detail/detail.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/hr/payroll/pengaturan/pegawaii/detail/detail.component.ts ***!
  \*********************************************************************************/
/*! exports provided: DetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailComponent", function() { return DetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_sdk_payroll_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sdk/payroll/services */ "./src/app/sdk/payroll/services.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var DetailComponent = /** @class */ (function () {
    function DetailComponent(drawerRef, router, PayrollDerazonaPegawaiDerazonaService, nzMessageService) {
        this.drawerRef = drawerRef;
        this.router = router;
        this.PayrollDerazonaPegawaiDerazonaService = PayrollDerazonaPegawaiDerazonaService;
        this.nzMessageService = nzMessageService;
        this.id_pegawai = '';
        this.pegawai = {};
        this.id_pegawai_biodata = '';
    }
    DetailComponent.prototype.ngOnInit = function () {
        this.getPegawai();
    };
    DetailComponent.prototype.getPegawai = function () {
        var _this = this;
        this.PayrollDerazonaPegawaiDerazonaService.getPayrollDerazonaPegawaiDerazonasId(this.id_pegawai).subscribe(function (data) {
            _this.pegawai = data.data;
        });
    };
    DetailComponent.ctorParameters = function () { return [
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzDrawerRef"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: src_app_sdk_payroll_services__WEBPACK_IMPORTED_MODULE_2__["PayrollDerazonaPegawaiDerazonaService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzMessageService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DetailComponent.prototype, "id_pegawai", void 0);
    DetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-detail',
            template: __webpack_require__(/*! raw-loader!./detail.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/hr/payroll/pengaturan/pegawaii/detail/detail.component.html"),
            styles: [__webpack_require__(/*! ./detail.component.scss */ "./src/app/pages/hr/payroll/pengaturan/pegawaii/detail/detail.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzDrawerRef"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            src_app_sdk_payroll_services__WEBPACK_IMPORTED_MODULE_2__["PayrollDerazonaPegawaiDerazonaService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzMessageService"]])
    ], DetailComponent);
    return DetailComponent;
}());



/***/ }),

/***/ "./src/app/pages/hr/payroll/pengaturan/pegawaii/edit-pegawai/edit-pegawai.component.scss":
/*!***********************************************************************************************!*\
  !*** ./src/app/pages/hr/payroll/pengaturan/pegawaii/edit-pegawai/edit-pegawai.component.scss ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hyL3BheXJvbGwvcGVuZ2F0dXJhbi9wZWdhd2FpaS9lZGl0LXBlZ2F3YWkvZWRpdC1wZWdhd2FpLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/hr/payroll/pengaturan/pegawaii/edit-pegawai/edit-pegawai.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/hr/payroll/pengaturan/pegawaii/edit-pegawai/edit-pegawai.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: EditPegawaiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditPegawaiComponent", function() { return EditPegawaiComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var src_app_sdk_payroll_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/sdk/payroll/services */ "./src/app/sdk/payroll/services.ts");
/* harmony import */ var src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/angular-reactive-forms-helper */ "./src/app/services/angular-reactive-forms-helper.ts");
/* harmony import */ var src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/tool/pesan.service */ "./src/app/services/tool/pesan.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");








var EditPegawaiComponent = /** @class */ (function () {
    function EditPegawaiComponent(drawerRef, payrollDerazonaPegawaiDerazonaService, fb, pesan, payrollPtkpService, router) {
        this.drawerRef = drawerRef;
        this.payrollDerazonaPegawaiDerazonaService = payrollDerazonaPegawaiDerazonaService;
        this.fb = fb;
        this.pesan = pesan;
        this.payrollPtkpService = payrollPtkpService;
        this.router = router;
        this.id_pegawai = '';
        this.listPTKP = [];
        this.data = {};
        this.pegawai = {};
    }
    EditPegawaiComponent.prototype.ngOnInit = function () {
        this.form();
        this.getData();
    };
    EditPegawaiComponent.prototype.getData = function () {
        var _this = this;
        this.payrollDerazonaPegawaiDerazonaService.getPayrollDerazonaPegawaiDerazonasId(this.id_pegawai).subscribe(function (data) {
            _this.dataForm.setValue(data.data);
        });
        this.payrollPtkpService.getPayrollPtkps().subscribe(function (data) {
            _this.listPTKP = data.data;
        });
    };
    EditPegawaiComponent.prototype.form = function () {
        this.dataForm = this.fb.group({
            nama_pegawai: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]),
            nik: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            tanggal_berhenti: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            tanggal_berkahir_jst: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            tanggal_lahir: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            tanggal_masuk: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            id_pegawai: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            id_ron_group: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            tanggal_masuk_jst: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            tanggal_milik_npwp: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            tanggal_terdaftar: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            telp: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            tempat_lahir: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            tinggi: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            total_jam: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            hash_absensi: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            hash_employee: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            hash_maintenance: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            hash_operation: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            hash_pilot: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            npwp: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            derazona_jam: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            nama_ibu_kandung: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            no_jamsostek: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            no_ktp: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            no_peserta_asuransi: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            alamat_pajak: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            alamat_tinggal: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            alasan_resign: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            kode_negara: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            pendidikan_terakhir: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            tanggal_penghasilan_mulai: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            penghasilan_sebelumnya: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            tanggal_penghasilan_selesai: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            pph_dipot_sebelumnya: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            agama: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            berat_badan: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            kebangsaan: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            keterangan: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            jabatan_pajak: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            jenis_kelamin: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            jenis_pegawai: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            jumlah_tanggungan: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            masa_penghasilan_sebelumnya: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            metode_pajak: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            status_berhenti: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            status_masuk: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            status_perkawinan: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            level_akses: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            created_at: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            updated_at: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
        });
    };
    EditPegawaiComponent.prototype.simpan = function () {
        var _this = this;
        if (this.dataForm.invalid) {
            this.pesan.pesanWarningForm('Form Tidak Valid');
            return;
        }
        if (this.dataForm.value.hash_absensi == 'tidak') {
            this.dataForm.patchValue({ hash_absensi: 'false' });
        }
        else {
            this.dataForm.patchValue({ hash_absensi: 'true' });
        }
        if (this.dataForm.value.hash_employee == 'tidak') {
            this.dataForm.patchValue({ hash_employee: 'false' });
        }
        else {
            this.dataForm.patchValue({ hash_employee: 'true' });
        }
        if (this.dataForm.value.hash_operation == 'tidak') {
            this.dataForm.patchValue({ hash_operation: 'false' });
        }
        else {
            this.dataForm.patchValue({ hash_operation: 'true' });
        }
        if (this.dataForm.value.hash_maintenance == 'tidak') {
            this.dataForm.patchValue({ hash_maintenance: 'false' });
        }
        else {
            this.dataForm.patchValue({ hash_maintenance: 'true' });
        }
        if (this.dataForm.value.hash_pilot == 'tidak') {
            this.dataForm.patchValue({ hash_pilot: 'false' });
        }
        else {
            this.dataForm.patchValue({ hash_pilot: 'true' });
        }
        this.data = this.dataForm.value;
        this.payrollDerazonaPegawaiDerazonaService.putPayrollDerazonaPegawaiDerazonasId({ id: this.id_pegawai, body: this.data }).subscribe(function (data) {
            _this.close();
        }, function (err) {
            _this.pesan.pesanWarningForm('Gagal di simpan');
        }, function () {
            console.log('HTTP request completed.');
        });
    };
    EditPegawaiComponent.prototype.close = function () {
        this.drawerRef.close();
    };
    EditPegawaiComponent.ctorParameters = function () { return [
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzDrawerRef"] },
        { type: src_app_sdk_payroll_services__WEBPACK_IMPORTED_MODULE_3__["PayrollDerazonaPegawaiDerazonaService"] },
        { type: src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_4__["FormBuilderTypeSafe"] },
        { type: src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_5__["PesanService"] },
        { type: src_app_sdk_payroll_services__WEBPACK_IMPORTED_MODULE_3__["PayrollPtkpService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], EditPegawaiComponent.prototype, "id_pegawai", void 0);
    EditPegawaiComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-pegawai',
            template: __webpack_require__(/*! raw-loader!./edit-pegawai.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/hr/payroll/pengaturan/pegawaii/edit-pegawai/edit-pegawai.component.html"),
            styles: [__webpack_require__(/*! ./edit-pegawai.component.scss */ "./src/app/pages/hr/payroll/pengaturan/pegawaii/edit-pegawai/edit-pegawai.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzDrawerRef"],
            src_app_sdk_payroll_services__WEBPACK_IMPORTED_MODULE_3__["PayrollDerazonaPegawaiDerazonaService"],
            src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_4__["FormBuilderTypeSafe"],
            src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_5__["PesanService"],
            src_app_sdk_payroll_services__WEBPACK_IMPORTED_MODULE_3__["PayrollPtkpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
    ], EditPegawaiComponent);
    return EditPegawaiComponent;
}());



/***/ }),

/***/ "./src/app/pages/hr/payroll/pengaturan/pegawaii/pegawai/pegawai.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/hr/payroll/pengaturan/pegawaii/pegawai/pegawai.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".search-box {\n  padding: 8px;\n}\n\n.search-box input {\n  width: 188px;\n  margin-bottom: 8px;\n  display: block;\n}\n\n.search-box button {\n  width: 90px;\n}\n\n.search-button {\n  margin-right: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaHIvcGF5cm9sbC9wZW5nYXR1cmFuL3BlZ2F3YWlpL3BlZ2F3YWkvRTpcXFBST0pFS1xcREVSQVpPTkFcXGRldmV0ZWstZXJwL3NyY1xcYXBwXFxwYWdlc1xcaHJcXHBheXJvbGxcXHBlbmdhdHVyYW5cXHBlZ2F3YWlpXFxwZWdhd2FpXFxwZWdhd2FpLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9oci9wYXlyb2xsL3BlbmdhdHVyYW4vcGVnYXdhaWkvcGVnYXdhaS9wZWdhd2FpLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtBQ0NKOztBREVBO0VBQ0ksaUJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hyL3BheXJvbGwvcGVuZ2F0dXJhbi9wZWdhd2FpaS9wZWdhd2FpL3BlZ2F3YWkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VhcmNoLWJveCB7XHJcbiAgICBwYWRkaW5nOiA4cHg7XHJcbn1cclxuXHJcbi5zZWFyY2gtYm94IGlucHV0IHtcclxuICAgIHdpZHRoOiAxODhweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDhweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4uc2VhcmNoLWJveCBidXR0b24ge1xyXG4gICAgd2lkdGg6IDkwcHg7XHJcbn1cclxuXHJcbi5zZWFyY2gtYnV0dG9uIHtcclxuICAgIG1hcmdpbi1yaWdodDogOHB4O1xyXG59IiwiLnNlYXJjaC1ib3gge1xuICBwYWRkaW5nOiA4cHg7XG59XG5cbi5zZWFyY2gtYm94IGlucHV0IHtcbiAgd2lkdGg6IDE4OHB4O1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uc2VhcmNoLWJveCBidXR0b24ge1xuICB3aWR0aDogOTBweDtcbn1cblxuLnNlYXJjaC1idXR0b24ge1xuICBtYXJnaW4tcmlnaHQ6IDhweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/hr/payroll/pengaturan/pegawaii/pegawai/pegawai.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/hr/payroll/pengaturan/pegawaii/pegawai/pegawai.component.ts ***!
  \***********************************************************************************/
/*! exports provided: PegawaiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PegawaiComponent", function() { return PegawaiComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_sdk_payroll_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sdk/payroll/services */ "./src/app/sdk/payroll/services.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var src_app_services_filter_fuction_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/filter-fuction.service */ "./src/app/services/filter-fuction.service.ts");
/* harmony import */ var _edit_pegawai_edit_pegawai_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../edit-pegawai/edit-pegawai.component */ "./src/app/pages/hr/payroll/pengaturan/pegawaii/edit-pegawai/edit-pegawai.component.ts");
/* harmony import */ var _detail_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../detail/detail.component */ "./src/app/pages/hr/payroll/pengaturan/pegawaii/detail/detail.component.ts");








var PegawaiComponent = /** @class */ (function () {
    function PegawaiComponent(payrollDerazonaPegawaiDerazonaService, spinner, filterFuctionService, nzMessageService, drawerService, payrollDerazonaRonGroupService) {
        this.payrollDerazonaPegawaiDerazonaService = payrollDerazonaPegawaiDerazonaService;
        this.spinner = spinner;
        this.filterFuctionService = filterFuctionService;
        this.nzMessageService = nzMessageService;
        this.drawerService = drawerService;
        this.payrollDerazonaRonGroupService = payrollDerazonaRonGroupService;
        this.listOfDisplayData = [];
        this.listOfData = [];
        this.ron_group = [];
        this.searchValue = '';
        this.sortName = null;
        this.sortValue = null;
    }
    PegawaiComponent.prototype.ngOnInit = function () {
        this.getData();
    };
    PegawaiComponent.prototype.getData = function () {
        var _this = this;
        this.payrollDerazonaRonGroupService.getPayrollDerazonaRonGroups().subscribe(function (data) {
            _this.ron_group = data.data;
        });
        this.payrollDerazonaPegawaiDerazonaService.getPayrollDerazonaPegawaiDerazonas().subscribe(function (data) {
            _this.listOfDisplayData = data.data;
            _this.listOfData = data.data;
            data.data.forEach(function (element, index) {
                _this.listOfData[index].hash_absensi = (element.hash_absensi == 'ya' ? true : false);
                _this.listOfData[index].hash_employee = (element.hash_employee == 'ya' ? true : false);
                _this.listOfData[index].hash_pilot = (element.hash_pilot == 'ya' ? true : false);
                _this.listOfData[index].hash_maintenance = (element.hash_maintenance == 'ya' ? true : false);
                _this.listOfData[index].hash_operation = (element.hash_operation == 'ya' ? true : false);
            });
        });
    };
    PegawaiComponent.prototype.reset = function () {
        this.searchValue = '';
        this.search();
        this.listOfDisplayData = this.listOfData;
    };
    PegawaiComponent.prototype.sort = function (sort) {
        this.sortName = sort.key;
        this.sortValue = sort.value;
        this.search();
    };
    PegawaiComponent.prototype.search = function () {
        var _this = this;
        var data = this.listOfData.filter(function (item) { return _this.filterFuctionService.filterFunc(item, _this.searchValue); });
        console.log(data);
        this.listOfDisplayData = data.sort(function (a, b) {
            return _this.sortValue === 'ascend'
                ? a[_this.sortName] > b[_this.sortName]
                    ? 1
                    : -1
                : b[_this.sortName] > a[_this.sortName]
                    ? 1
                    : -1;
        });
    };
    PegawaiComponent.prototype.update = function (data) {
        var _this = this;
        this.spinner.show();
        this.payrollDerazonaPegawaiDerazonaService.putPayrollDerazonaPegawaiDerazonasId({ id: data.id_pegawai, body: data }).subscribe(function (data) {
            _this.spinner.hide();
        });
    };
    PegawaiComponent.prototype.editPegawai = function (id_pegawai) {
        var _this = this;
        var drawerRef = this.drawerService.create({
            nzTitle: 'Edit Pegawai',
            nzContent: _edit_pegawai_edit_pegawai_component__WEBPACK_IMPORTED_MODULE_6__["EditPegawaiComponent"],
            nzWidth: '700px',
            nzContentParams: {
                id_pegawai: id_pegawai
            }
        });
        drawerRef.afterOpen.subscribe(function () {
            console.log('Drawer(Component) open');
        });
        drawerRef.afterClose.subscribe(function (data) {
            _this.getData();
            console.log(data);
            if (typeof data === 'string') {
            }
        });
    };
    PegawaiComponent.prototype.detailPegawai = function (id_pegawai) {
        var _this = this;
        var drawerRef = this.drawerService.create({
            nzTitle: 'Edit Pegawai',
            nzContent: _detail_detail_component__WEBPACK_IMPORTED_MODULE_7__["DetailComponent"],
            nzWidth: '500px',
            nzContentParams: {
                id_pegawai: id_pegawai
            }
        });
        drawerRef.afterOpen.subscribe(function () {
            console.log('Drawer(Component) open');
        });
        drawerRef.afterClose.subscribe(function (data) {
            _this.getData();
            console.log(data);
            if (typeof data === 'string') {
            }
        });
    };
    PegawaiComponent.ctorParameters = function () { return [
        { type: src_app_sdk_payroll_services__WEBPACK_IMPORTED_MODULE_2__["PayrollDerazonaPegawaiDerazonaService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"] },
        { type: src_app_services_filter_fuction_service__WEBPACK_IMPORTED_MODULE_5__["FilterFuctionService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzMessageService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzDrawerService"] },
        { type: src_app_sdk_payroll_services__WEBPACK_IMPORTED_MODULE_2__["PayrollDerazonaRonGroupService"] }
    ]; };
    PegawaiComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pegawai',
            template: __webpack_require__(/*! raw-loader!./pegawai.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/hr/payroll/pengaturan/pegawaii/pegawai/pegawai.component.html"),
            styles: [__webpack_require__(/*! ./pegawai.component.scss */ "./src/app/pages/hr/payroll/pengaturan/pegawaii/pegawai/pegawai.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_sdk_payroll_services__WEBPACK_IMPORTED_MODULE_2__["PayrollDerazonaPegawaiDerazonaService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"],
            src_app_services_filter_fuction_service__WEBPACK_IMPORTED_MODULE_5__["FilterFuctionService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzMessageService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzDrawerService"],
            src_app_sdk_payroll_services__WEBPACK_IMPORTED_MODULE_2__["PayrollDerazonaRonGroupService"]])
    ], PegawaiComponent);
    return PegawaiComponent;
}());



/***/ }),

/***/ "./src/app/pages/hr/payroll/pengaturan/pengaturan-routing.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/hr/payroll/pengaturan/pengaturan-routing.module.ts ***!
  \**************************************************************************/
/*! exports provided: PengaturanRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PengaturanRoutingModule", function() { return PengaturanRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ketentuan_perusahaan_ketentuan_perusahaan_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ketentuan-perusahaan/ketentuan-perusahaan.component */ "./src/app/pages/hr/payroll/pengaturan/ketentuan-perusahaan/ketentuan-perusahaan.component.ts");
/* harmony import */ var _ketentuan_pemerintah_ketentuan_pemerintah_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ketentuan-pemerintah/ketentuan-pemerintah.component */ "./src/app/pages/hr/payroll/pengaturan/ketentuan-pemerintah/ketentuan-pemerintah.component.ts");
/* harmony import */ var _core_edit_core_edit_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core-edit/core-edit.component */ "./src/app/pages/hr/payroll/pengaturan/core-edit/core-edit.component.ts");
/* harmony import */ var _core_core_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/core.component */ "./src/app/pages/hr/payroll/pengaturan/core/core.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ketentuan_perusahaan_list_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ketentuan-perusahaan/list/list.component */ "./src/app/pages/hr/payroll/pengaturan/ketentuan-perusahaan/list/list.component.ts");
/* harmony import */ var _ketentuan_perusahaan_add_add_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ketentuan-perusahaan/add/add.component */ "./src/app/pages/hr/payroll/pengaturan/ketentuan-perusahaan/add/add.component.ts");
/* harmony import */ var _ketentuan_perusahaan_edit_edit_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ketentuan-perusahaan/edit/edit.component */ "./src/app/pages/hr/payroll/pengaturan/ketentuan-perusahaan/edit/edit.component.ts");
/* harmony import */ var _pegawaii_pegawai_pegawai_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pegawaii/pegawai/pegawai.component */ "./src/app/pages/hr/payroll/pengaturan/pegawaii/pegawai/pegawai.component.ts");











var routes = [
    {
        path: 'payroll',
        component: _core_core_component__WEBPACK_IMPORTED_MODULE_4__["CoreComponent"]
    },
    {
        path: 'pegawai',
        component: _pegawaii_pegawai_pegawai_component__WEBPACK_IMPORTED_MODULE_10__["PegawaiComponent"]
    },
    {
        path: 'payroll-edit/:id_pengaturan',
        component: _core_edit_core_edit_component__WEBPACK_IMPORTED_MODULE_3__["CoreEditComponent"]
    },
    {
        path: 'ketentuan_pemerintah',
        component: _ketentuan_pemerintah_ketentuan_pemerintah_component__WEBPACK_IMPORTED_MODULE_2__["KetentuanPemerintahComponent"]
    },
    {
        path: 'template-slip',
        loadChildren: function () { return __webpack_require__.e(/*! import() | template-slip-template-slip-module */ "template-slip-template-slip-module").then(__webpack_require__.bind(null, /*! ./template-slip/template-slip.module */ "./src/app/pages/hr/payroll/pengaturan/template-slip/template-slip.module.ts")).then(function (m) { return m.TemplateSlipModule; }); }
    },
    {
        path: 'ketentuan_perusahaan',
        component: _ketentuan_perusahaan_ketentuan_perusahaan_component__WEBPACK_IMPORTED_MODULE_1__["KetentuanPerusahaanComponent"],
        children: [
            {
                path: '',
                redirectTo: 'list'
            },
            {
                path: 'list',
                component: _ketentuan_perusahaan_list_list_component__WEBPACK_IMPORTED_MODULE_7__["ListComponent"]
            },
            {
                path: 'add',
                component: _ketentuan_perusahaan_add_add_component__WEBPACK_IMPORTED_MODULE_8__["AddComponent"]
            },
            {
                path: 'edit/:id_komponen_perusahaan',
                component: _ketentuan_perusahaan_edit_edit_component__WEBPACK_IMPORTED_MODULE_9__["EditComponent"]
            }
        ]
    },
    {
        path: 'perusahaan',
        loadChildren: function () { return Promise.all(/*! import() | perusahaan-perusahaan-module */[__webpack_require__.e("default~healthcare-healthcare-module~payroll-payroll-module~pengaturan-pengaturan-module~perusahaan-~7bae2d24"), __webpack_require__.e("perusahaan-perusahaan-module")]).then(__webpack_require__.bind(null, /*! ./perusahaan/perusahaan.module */ "./src/app/pages/hr/payroll/pengaturan/perusahaan/perusahaan.module.ts")).then(function (m) { return m.PerusahaanModule; }); }
    },
    {
        path: 'utang',
        loadChildren: function () { return __webpack_require__.e(/*! import() | utang-utang-module */ "utang-utang-module").then(__webpack_require__.bind(null, /*! ./utang/utang.module */ "./src/app/pages/hr/payroll/pengaturan/utang/utang.module.ts")).then(function (m) { return m.UtangModule; }); }
    },
    {
        path: 'tanda-tangan',
        loadChildren: function () { return __webpack_require__.e(/*! import() | tanda-tangan-tanda-tangan-module */ "tanda-tangan-tanda-tangan-module").then(__webpack_require__.bind(null, /*! ./tanda-tangan/tanda-tangan.module */ "./src/app/pages/hr/payroll/pengaturan/tanda-tangan/tanda-tangan.module.ts")).then(function (m) { return m.TandaTanganModule; }); }
    },
    {
        path: 'komponen',
        loadChildren: function () { return __webpack_require__.e(/*! import() | kelompok-komponen-kelompok-komponen-module */ "kelompok-komponen-kelompok-komponen-module").then(__webpack_require__.bind(null, /*! ./kelompok-komponen/kelompok-komponen.module */ "./src/app/pages/hr/payroll/pengaturan/kelompok-komponen/kelompok-komponen.module.ts")).then(function (m) { return m.KelompokKomponenModule; }); }
    },
    {
        path: 'aircraft',
        loadChildren: function () { return __webpack_require__.e(/*! import() | aircraft-aircraft-module */ "aircraft-aircraft-module").then(__webpack_require__.bind(null, /*! ./aircraft/aircraft.module */ "./src/app/pages/hr/payroll/pengaturan/aircraft/aircraft.module.ts")).then(function (m) { return m.AircraftModule; }); }
    },
    {
        path: 'pekerjaan',
        loadChildren: function () { return __webpack_require__.e(/*! import() | pekerjaan-pekerjaan-module */ "pekerjaan-pekerjaan-module").then(__webpack_require__.bind(null, /*! ./pekerjaan/pekerjaan.module */ "./src/app/pages/hr/payroll/pengaturan/pekerjaan/pekerjaan.module.ts")).then(function (m) { return m.PekerjaanModule; }); }
    },
    {
        path: 'ron',
        loadChildren: function () { return __webpack_require__.e(/*! import() | ron-ron-module */ "ron-ron-module").then(__webpack_require__.bind(null, /*! ./ron/ron.module */ "./src/app/pages/hr/payroll/pengaturan/ron/ron.module.ts")).then(function (m) { return m.RonModule; }); }
    },
    {
        path: 'ron-group',
        loadChildren: function () { return __webpack_require__.e(/*! import() | ron-group-ron-group-module */ "ron-group-ron-group-module").then(__webpack_require__.bind(null, /*! ./ron-group/ron-group.module */ "./src/app/pages/hr/payroll/pengaturan/ron-group/ron-group.module.ts")).then(function (m) { return m.RonGroupModule; }); }
    },
];
var PengaturanRoutingModule = /** @class */ (function () {
    function PengaturanRoutingModule() {
    }
    PengaturanRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"]]
        })
    ], PengaturanRoutingModule);
    return PengaturanRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/hr/payroll/pengaturan/pengaturan.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/hr/payroll/pengaturan/pengaturan.module.ts ***!
  \******************************************************************/
/*! exports provided: PengaturanModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PengaturanModule", function() { return PengaturanModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _pengaturan_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pengaturan-routing.module */ "./src/app/pages/hr/payroll/pengaturan/pengaturan-routing.module.ts");
/* harmony import */ var _core_core_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/core.component */ "./src/app/pages/hr/payroll/pengaturan/core/core.component.ts");
/* harmony import */ var _ketentuan_pemerintah_ketentuan_pemerintah_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ketentuan-pemerintah/ketentuan-pemerintah.component */ "./src/app/pages/hr/payroll/pengaturan/ketentuan-pemerintah/ketentuan-pemerintah.component.ts");
/* harmony import */ var _ketentuan_perusahaan_ketentuan_perusahaan_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ketentuan-perusahaan/ketentuan-perusahaan.component */ "./src/app/pages/hr/payroll/pengaturan/ketentuan-perusahaan/ketentuan-perusahaan.component.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _core_edit_core_edit_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./core-edit/core-edit.component */ "./src/app/pages/hr/payroll/pengaturan/core-edit/core-edit.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/angular-reactive-forms-helper */ "./src/app/services/angular-reactive-forms-helper.ts");
/* harmony import */ var _ketentuan_perusahaan_widget_widget_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ketentuan-perusahaan/widget/widget.component */ "./src/app/pages/hr/payroll/pengaturan/ketentuan-perusahaan/widget/widget.component.ts");
/* harmony import */ var _ketentuan_perusahaan_list_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ketentuan-perusahaan/list/list.component */ "./src/app/pages/hr/payroll/pengaturan/ketentuan-perusahaan/list/list.component.ts");
/* harmony import */ var _ketentuan_perusahaan_add_add_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ketentuan-perusahaan/add/add.component */ "./src/app/pages/hr/payroll/pengaturan/ketentuan-perusahaan/add/add.component.ts");
/* harmony import */ var _ketentuan_perusahaan_edit_edit_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./ketentuan-perusahaan/edit/edit.component */ "./src/app/pages/hr/payroll/pengaturan/ketentuan-perusahaan/edit/edit.component.ts");
/* harmony import */ var _pegawaii_edit_pegawai_edit_pegawai_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pegawaii/edit-pegawai/edit-pegawai.component */ "./src/app/pages/hr/payroll/pengaturan/pegawaii/edit-pegawai/edit-pegawai.component.ts");
/* harmony import */ var _pegawaii_pegawai_pegawai_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pegawaii/pegawai/pegawai.component */ "./src/app/pages/hr/payroll/pengaturan/pegawaii/pegawai/pegawai.component.ts");
/* harmony import */ var _pegawaii_detail_detail_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pegawaii/detail/detail.component */ "./src/app/pages/hr/payroll/pengaturan/pegawaii/detail/detail.component.ts");


















var PengaturanModule = /** @class */ (function () {
    function PengaturanModule() {
    }
    PengaturanModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_core_core_component__WEBPACK_IMPORTED_MODULE_4__["CoreComponent"], _ketentuan_pemerintah_ketentuan_pemerintah_component__WEBPACK_IMPORTED_MODULE_5__["KetentuanPemerintahComponent"], _ketentuan_perusahaan_ketentuan_perusahaan_component__WEBPACK_IMPORTED_MODULE_6__["KetentuanPerusahaanComponent"], _core_edit_core_edit_component__WEBPACK_IMPORTED_MODULE_8__["CoreEditComponent"], _ketentuan_perusahaan_widget_widget_component__WEBPACK_IMPORTED_MODULE_11__["WidgetComponent"], _ketentuan_perusahaan_list_list_component__WEBPACK_IMPORTED_MODULE_12__["ListComponent"], _ketentuan_perusahaan_add_add_component__WEBPACK_IMPORTED_MODULE_13__["AddComponent"], _ketentuan_perusahaan_edit_edit_component__WEBPACK_IMPORTED_MODULE_14__["EditComponent"], _pegawaii_pegawai_pegawai_component__WEBPACK_IMPORTED_MODULE_16__["PegawaiComponent"], _pegawaii_edit_pegawai_edit_pegawai_component__WEBPACK_IMPORTED_MODULE_15__["EditPegawaiComponent"], _pegawaii_detail_detail_component__WEBPACK_IMPORTED_MODULE_17__["DetailComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _pengaturan_routing_module__WEBPACK_IMPORTED_MODULE_3__["PengaturanRoutingModule"],
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__["NzSelectModule"],
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__["NgZorroAntdModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"]
            ],
            providers: [
                src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_10__["FormBuilderTypeSafe"]
            ],
            entryComponents: [
                _pegawaii_edit_pegawai_edit_pegawai_component__WEBPACK_IMPORTED_MODULE_15__["EditPegawaiComponent"], _pegawaii_detail_detail_component__WEBPACK_IMPORTED_MODULE_17__["DetailComponent"]
            ]
        })
    ], PengaturanModule);
    return PengaturanModule;
}());



/***/ })

}]);
//# sourceMappingURL=pengaturan-pengaturan-module.js.map