(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["komponen-komponen-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/hr/direktori/employee/pegawi-detail/payroll/komponen/edit/edit.component.html":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/hr/direktori/employee/pegawi-detail/payroll/komponen/edit/edit.component.html ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"py-4 border-bottom\">\r\n    <div class=\"font-weight-bold mb-2\">Basic</div>\r\n    <div>\r\n        <table class=\"table table-borderless text-gray-6 mb-0\">\r\n            <tbody>\r\n                <tr>\r\n                    <td>General</td>\r\n                    <td class=\"text-right\">\r\n                        <strong>* (Multiply), / (Divide), - (Subtract) , + (Add)</strong>\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <td>Comparison</td>\r\n                    <td class=\"text-right\">\r\n                        <strong> > , < ,=</strong>\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <td>Logic</td>\r\n                    <td class=\"text-right\">\r\n                        <strong>if( x Comparison, True, False)</strong>\r\n                    </td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"py-4 border-bottom\">\r\n    <div class=\"font-weight-bold mb-2\">Company Component</div>\r\n    <div>\r\n        <table class=\"table table-borderless text-gray-6 mb-0\">\r\n            <tbody>\r\n                <tr>\r\n                    <td>Basic Salary [number]</td>\r\n                    <td class=\"text-right\">\r\n                        <strong>gapok</strong>\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <td>The value of the component itself [number]</td>\r\n                    <td class=\"text-right\">\r\n                        <strong>nilai</strong>\r\n                    </td>\r\n                </tr>\r\n                <!-- <tr>\r\n                    <td>UMR [number]</td>\r\n                    <td class=\"text-right\">\r\n                        <strong>umr</strong>\r\n                    </td>\r\n                </tr> -->\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"py-4 border-bottom\">\r\n    <div class=\"font-weight-bold mb-2\">Components of Leave</div>\r\n    <div>\r\n        <table class=\"table table-borderless text-gray-6 mb-0\">\r\n            <tbody>\r\n                <tr *ngFor=\"let item of list_lembuer_param\">\r\n                    <td>{{item.lembur_pengaturan}}</td>\r\n                    <td class=\"text-right\">\r\n                        <strong>{{item.kode_lembur}}</strong>\r\n                    </td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n\r\n</div>\r\n\r\n<div class=\"py-4 border-bottom\">\r\n    <div class=\"font-weight-bold mb-2\">Components of Attendance</div>\r\n    <div>\r\n        <table class=\"table table-borderless text-gray-6 mb-0\">\r\n            <tbody>\r\n                <tr>\r\n                    <td>Late [number]</td>\r\n                    <td class=\"text-right\">\r\n                        <strong>telat</strong>\r\n                    </td>\r\n                </tr>\r\n\r\n                <tr>\r\n                    <td>Absent [number]</td>\r\n                    <td class=\"text-right\">\r\n                        <strong>alfa</strong>\r\n                    </td>\r\n                </tr>\r\n\r\n                <tr>\r\n                    <td>Present [number]</td>\r\n                    <td class=\"text-right\">\r\n                        <strong>hadir</strong>\r\n                    </td>\r\n                </tr>\r\n\r\n                <tr>\r\n                    <td>Total Leave [number]</td>\r\n                    <td class=\"text-right\">\r\n                        <strong>cuti</strong>\r\n                    </td>\r\n                </tr>\r\n\r\n                <tr>\r\n                    <td>Early [number]</td>\r\n                    <td class=\"text-right\">\r\n                        <strong>cabut</strong>\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <td>Prorate [boolean]</td>\r\n                    <td class=\"text-right\">\r\n                        <strong>prorate(ya,tidak)</strong>\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <td>Tax ? [boolean]</td>\r\n                    <td class=\"text-right\">\r\n                        <strong>is_pajak (ya,tidak)</strong>\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <td>Holiday? [boolean]</td>\r\n                    <td class=\"text-right\">\r\n                        <strong>is_holiday (ya,tidak)</strong>\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <td>22 Working Days [number]</td>\r\n                    <td class=\"text-right\">\r\n                        <strong>hari_kerja22 (22)</strong>\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <td>Actual Working Day [number]</td>\r\n                    <td class=\"text-right\">\r\n                        <strong>hari_kerja_real</strong>\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <td>Calendar Days [number]</td>\r\n                    <td class=\"text-right\">\r\n                        <strong>hari_kalender</strong>\r\n                    </td>\r\n                </tr>\r\n\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n</div>\r\n\r\n\r\n<div class=\"py-4 border-bottom\">\r\n    <div class=\"font-weight-bold mb-2\">Components of Leave</div>\r\n    <div>\r\n        <table class=\"table table-borderless text-gray-6 mb-0\">\r\n            <tbody>\r\n                <tr *ngFor=\"let item of list_cuti_param\">\r\n                    <td>{{item.nama_cuti}}</td>\r\n                    <td class=\"text-right\">\r\n                        <strong>{{item.kode}}</strong>\r\n                    </td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/hr/direktori/employee/pegawi-detail/payroll/komponen/list/list.component.html":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/hr/direktori/employee/pegawi-detail/payroll/komponen/list/list.component.html ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n\r\n    <div class=\"air__utils__heading card-header-flex\">\r\n        <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n            <h5 class=\"mb-0\">Komponen Peraturan Perusahaan</h5>\r\n        </div>\r\n    </div>\r\n    <div class=\"\">\r\n\r\n        <div class=\"card air__utils__cardMarked air__utils__cardMarked--primary\"\r\n            *ngFor=\"let item of listKomponen; let i = index\">\r\n            <div class=\"card-header card-header-flex\">\r\n                <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n                    <div>\r\n\r\n                    </div>\r\n                    <h5 class=\"mb-0\">\r\n                        [ <b>{{item.kode_komponen}}</b>] {{item.komponen}} <i *ngIf=\"item.is_lock=='ya'\" nz-icon\r\n                            nzType=\"lock\" nzTheme=\"outline\"></i>\r\n                    </h5>\r\n                </div>\r\n                <div class=\"d-flex flex-column justify-content-center\">\r\n                    <div>\r\n                        <nz-switch nzSize=\"small\" [(ngModel)]=\"item.enable\"\r\n                            (ngModelChange)=\"gantiModeEnable(item.enable,item.id_komponen_perusahaan)\"></nz-switch>\r\n                        Enable\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"card-body\" *ngIf=\"item.enable\">\r\n                <div>\r\n                    <div class=\"mb-3\">\r\n\r\n                        <div class=\"table-responsive\">\r\n                            <table class=\"table table-borderless text-gray-6 mb-0\">\r\n                                <tbody>\r\n                                    <tr>\r\n                                        <td>Payroll Component Method</td>\r\n                                        <td class=\"text-right\">\r\n                                            <strong>{{item.metode}}</strong>\r\n                                        </td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td>This Payroll Component will be Applied Prorate?</td>\r\n                                        <td class=\"text-right\">\r\n                                            <strong>{{item.prorate}}</strong>\r\n                                        </td>\r\n                                    </tr>\r\n                                    <!-- <tr>\r\n                                                                    <td>apakah perhitungan nilai fix?</td>\r\n                                                                    <td class=\"text-right\">\r\n                                                                        <strong>{{item.is_nilai}}</strong>\r\n                                                                    </td>\r\n                                                                </tr> -->\r\n                                    <tr>\r\n                                        <td>Value</td>\r\n                                        <td class=\"text-right\">\r\n                                            <strong>{{item.nilai | currency:'Rp '}}</strong>\r\n                                        </td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td>Calculation Formulas</td>\r\n                                        <td class=\"text-right\">\r\n                                            <strong>{{item.rumus}}</strong>\r\n                                        </td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td>Types of Payroll Components</td>\r\n                                        <td class=\"text-right\">\r\n                                            <strong>{{item.jenis}}</strong>\r\n                                        </td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td>This Component is Taxed?</td>\r\n                                        <td class=\"text-right\">\r\n                                            <strong>{{item.is_pajak}}</strong>\r\n                                        </td>\r\n                                    </tr>\r\n\r\n\r\n                                </tbody>\r\n                            </table>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\" *ngIf=\"item.enable\">\r\n                        <div class=\"col-md-6 mb-4\">\r\n                            <div class=\"bg-gray-1 text-gray-6 text-uppercase px-3 py-1 mb-2\">Default</div>\r\n                            <div class=\"table-responsive\">\r\n                                <table class=\"table table-borderless text-muted mb-0\">\r\n                                    <tbody>\r\n                                        <tr>\r\n                                            <td><b>Value</b></td>\r\n                                        </tr>\r\n                                        <tr>\r\n                                            <td>{{item.nilai | currency:'Rp '}}</td>\r\n                                        </tr>\r\n                                        <tr>\r\n                                            <td><b>Formula</b></td>\r\n                                        </tr>\r\n                                        <tr>\r\n                                            <td>{{item.rumus}}</td>\r\n                                        </tr>\r\n                                    </tbody>\r\n                                </table>\r\n                            </div>\r\n                        </div>\r\n\r\n\r\n                        <!-- jika di kunci -->\r\n                        <div class=\"col-md-6 mb-4\" *ngIf=\"!item.default && item.is_lock=='tidak'\">\r\n                            <div class=\"bg-info text-white text-uppercase px-3 py-1 mb-2\">\r\n                                <a (click)=\"gantiModeDefault(true,item.item.id_pegawai_komponen)\" class=\"pointer-event\">\r\n                                    set to custom >>\r\n                                </a>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"col-md-6 mb-4\" *ngIf=\"item.is_lock=='ya'\">\r\n                            <div class=\"bg-gray-1 text-gray-6 text-uppercase px-3 py-1 mb-2\">PSN</div>\r\n                            <div class=\"table-responsive\">\r\n                                <table class=\"table table-borderless text-muted mb-0\">\r\n                                    <tbody>\r\n                                        <tr>\r\n                                            <td><b>Value</b></td>\r\n                                        </tr>\r\n                                        <tr>\r\n                                            <td>{{item.item.nilai | currency:'Rp '}}</td>\r\n                                        </tr>\r\n                                        <tr>\r\n                                            <td><b>Formula</b></td>\r\n                                        </tr>\r\n                                        <tr>\r\n                                            <td>{{item.item.rumus}}</td>\r\n                                        </tr>\r\n                                    </tbody>\r\n                                </table>\r\n                            </div>\r\n                        </div>\r\n\r\n\r\n                        <!-- jika di kunci -->\r\n                        <div class=\"col-md-6 mb-4\" *ngIf=\"item.default && item.is_lock=='tidak'\">\r\n                            <div class=\"bg-gray-1 text-gray-6  px-3 py-1 mb-2\">\r\n                                Custom\r\n                                <a style=\"float: right;\"\r\n                                    (click)=\"updatePegawaiKomponen(i, item.item.id_pegawai_komponen)\"\r\n                                    class=\"pointer-event\">\r\n                                    update >\r\n                                </a>\r\n                            </div>\r\n                            <div class=\"table-responsive\" *ngIf=\"!item.on_editable\">\r\n                                <table class=\"table table-borderless text-muted mb-0\">\r\n                                    <tbody>\r\n                                        <tr>\r\n                                            <td><b>Nilai</b></td>\r\n                                        </tr>\r\n                                        <tr>\r\n                                            <td>{{item.item.nilai | currency:'Rp '}}</td>\r\n                                        </tr>\r\n                                        <tr>\r\n                                            <td><b>Rumus</b></td>\r\n                                        </tr>\r\n                                        <tr>\r\n                                            <td>{{item.item.rumus}}</td>\r\n                                        </tr>\r\n                                    </tbody>\r\n                                </table>\r\n                            </div>\r\n\r\n                            <div class=\"table-responsive\" *ngIf=\"item.on_editable\">\r\n                                <table class=\"table table-borderless text-muted mb-0\">\r\n                                    <tbody>\r\n                                        <tr>\r\n                                            <td>\r\n                                                <b>Enable Custom Formula</b>\r\n                                            </td>\r\n                                        </tr>\r\n                                        <tr>\r\n                                            <td>\r\n                                                <nz-radio-group [(ngModel)]=\"item.item.is_default\">\r\n                                                    <label nz-radio nzValue=\"ya\">Yes</label>\r\n                                                    <label nz-radio nzValue=\"tidak\">No</label>\r\n                                                </nz-radio-group>\r\n                                            </td>\r\n                                        </tr>\r\n                                        <tr>\r\n                                            <td>\r\n                                                <b>Nilai</b>\r\n                                                <span class=\"float-right\">{{item.item.nilai | currency:'Rp.'}}</span>\r\n                                            </td>\r\n                                        </tr>\r\n                                        <tr>\r\n                                            <td>\r\n                                                <nz-input-group nzAddOnBefore=\"Rp\">\r\n                                                    <input nz-input [disabled]=\"item.item.is_default=='tidak'\"\r\n                                                        name=\"item.item.nilai\" [(ngModel)]=\"item.item.nilai\"\r\n                                                        type=\"number\">\r\n                                                </nz-input-group>\r\n                                            </td>\r\n                                        </tr>\r\n                                        <tr>\r\n                                            <td style=\"padding-top: 10px;\"> Rumus <i clas=\"text-right\"\r\n                                                    style=\"cursor: pointer; float: right;\" (click)=\"open()\">Info</i>\r\n                                            </td>\r\n                                        </tr>\r\n                                        <tr>\r\n                                            <td><textarea nz-input [disabled]=\"item.item.is_default=='tidak'\"\r\n                                                    [(ngModel)]=\"item.item.rumus\"></textarea></td>\r\n                                        </tr>\r\n                                        <tr>\r\n                                            <td>\r\n\r\n                                                <button nz-button nzType=\"primary\"\r\n                                                    (click)=\"simpanPegawaiKomponen(item.item.id_pegawai_komponen,item.item)\"><i\r\n                                                        nz-icon nzType=\"upload\"></i>Update</button>\r\n                                            </td>\r\n                                        </tr>\r\n                                    </tbody>\r\n                                </table>\r\n                            </div>\r\n\r\n                        </div>\r\n\r\n\r\n\r\n                    </div>\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<nz-drawer [nzClosable]=\"false\" [nzVisible]=\"visible\" nzPlacement=\"right\" [nzWidth]=\"520\" nzTitle=\"Basic Rumus\"\r\n    (nzOnClose)=\"close()\">\r\n    <app-edit></app-edit>\r\n</nz-drawer>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/profile/payroll/komponen/edit/edit.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/profile/payroll/komponen/edit/edit.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"py-4 border-bottom\">\r\n    <div class=\"font-weight-bold mb-2\">Basic</div>\r\n    <div>\r\n        <table class=\"table table-borderless text-gray-6 mb-0\">\r\n            <tbody>\r\n                <tr>\r\n                    <td>Umum</td>\r\n                    <td class=\"text-right\">\r\n                        <strong>* (kali), / (bagi), - (kurang) , + (tambah)</strong>\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <td>Pembanding</td>\r\n                    <td class=\"text-right\">\r\n                        <strong> > , < , =</strong>\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <td>Logika</td>\r\n                    <td class=\"text-right\">\r\n                        <strong>if( x pembanding, benar, salah)</strong>\r\n                    </td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n</div>\r\n<div class=\"py-4 border-bottom\">\r\n    <div class=\"font-weight-bold mb-2\">Komponen Perusahaan</div>\r\n    <div>\r\n        <table class=\"table table-borderless text-gray-6 mb-0\">\r\n            <tbody>\r\n                <tr>\r\n                    <td>Gaji Pokok [number]</td>\r\n                    <td class=\"text-right\">\r\n                        <strong>gapok</strong>\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <td>Nilai komponen itu sensiri [number]</td>\r\n                    <td class=\"text-right\">\r\n                        <strong>nilai</strong>\r\n                    </td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n</div>\r\n<div class=\"py-4 border-bottom\">\r\n    <div class=\"font-weight-bold mb-2\">Komponen Absensi</div>\r\n    <div>\r\n        <table class=\"table table-borderless text-gray-6 mb-0\">\r\n            <tbody>\r\n                <tr>\r\n                    <td>Terlambat [number]</td>\r\n                    <td class=\"text-right\">\r\n                        <strong>telat</strong>\r\n                    </td>\r\n                </tr>\r\n\r\n                <tr>\r\n                    <td>Tidak Hadir [number]</td>\r\n                    <td class=\"text-right\">\r\n                        <strong>alfa</strong>\r\n                    </td>\r\n                </tr>\r\n\r\n                <tr>\r\n                    <td>Hadir [number]</td>\r\n                    <td class=\"text-right\">\r\n                        <strong>hadir</strong>\r\n                    </td>\r\n                </tr>\r\n\r\n                <tr>\r\n                    <td>Cuti [number]</td>\r\n                    <td class=\"text-right\">\r\n                        <strong>cuti</strong>\r\n                    </td>\r\n                </tr>\r\n\r\n                <tr>\r\n                    <td>Pulang Awal [number]</td>\r\n                    <td class=\"text-right\">\r\n                        <strong>cabut</strong>\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <td>Pro rate [boolean]</td>\r\n                    <td class=\"text-right\">\r\n                        <strong>prorate(ya,tidak)</strong>\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <td>Pajak ? [boolean]</td>\r\n                    <td class=\"text-right\">\r\n                        <strong>is_pajak (ya,tidak)</strong>\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <td>Hari libur? [boolean]</td>\r\n                    <td class=\"text-right\">\r\n                        <strong>is_holiday (ya,tidak)</strong>\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <td>Hari kerja 22 hari [number]</td>\r\n                    <td class=\"text-right\">\r\n                        <strong>hari_kerja22 (22)</strong>\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <td>Hari kerja real [number]</td>\r\n                    <td class=\"text-right\">\r\n                        <strong>hari_kerja_real</strong>\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <td>Hari kalender [number]</td>\r\n                    <td class=\"text-right\">\r\n                        <strong>hari_kalender</strong>\r\n                    </td>\r\n                </tr>\r\n\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/profile/payroll/komponen/list/list.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/profile/payroll/komponen/list/list.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n\r\n    <div class=\"air__utils__heading card-header-flex\">\r\n        <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n            <h5 class=\"mb-0\">Komponen Peraturan Perusahaan</h5>\r\n        </div>\r\n    </div>\r\n    <div class=\"\">\r\n\r\n        <div class=\"card air__utils__cardMarked air__utils__cardMarked--primary\" *ngFor=\"let item of listKomponen; let i = index\">\r\n            <div class=\"card-header card-header-flex\">\r\n                <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n                    <div>\r\n\r\n                    </div>\r\n                    <h5 class=\"mb-0\">\r\n                        [ <b>{{item.kode_komponen}}</b>] {{item.komponen}}\r\n                    </h5>\r\n                </div>\r\n                <div class=\"d-flex flex-column justify-content-center\">\r\n                    <div>\r\n                        <nz-switch nzSize=\"small\" [(ngModel)]=\"item.enable\" (ngModelChange)=\"gantiModeEnable(item.enable,item.id_komponen_perusahaan)\"></nz-switch>\r\n                        Enable\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"card-body\">\r\n                <div>\r\n                    <div class=\"mb-3\">\r\n\r\n                        <div class=\"table-responsive\">\r\n                            <table class=\"table table-borderless text-gray-6 mb-0\">\r\n                                <tbody>\r\n                                    <tr>\r\n                                        <td>Metode komponen payroll</td>\r\n                                        <td class=\"text-right\">\r\n                                            <strong>{{item.metode}}</strong>\r\n                                        </td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td>Komponen payroll ini akan diberlakukan prorate</td>\r\n                                        <td class=\"text-right\">\r\n                                            <strong>{{item.prorate}}</strong>\r\n                                        </td>\r\n                                    </tr>\r\n                                    <!-- <tr>\r\n                                    <td>apakah perhitungan nilai fix?</td>\r\n                                    <td class=\"text-right\">\r\n                                        <strong>{{item.is_nilai}}</strong>\r\n                                    </td>\r\n                                </tr> -->\r\n                                    <!-- <tr>\r\n                                        <td>Nilai</td>\r\n                                        <td class=\"text-right\">\r\n                                            <strong>{{item.nilai | currency:'Rp '}}</strong>\r\n                                        </td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td>Rumus Perhitungan</td>\r\n                                        <td class=\"text-right\">\r\n                                            <strong>{{item.rumus}}</strong>\r\n                                        </td>\r\n                                    </tr> -->\r\n                                    <tr>\r\n                                        <td>Jenis komponen payroll</td>\r\n                                        <td class=\"text-right\">\r\n                                            <strong>{{item.jenis}}</strong>\r\n                                        </td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td>Komponen dikenakan pajak?</td>\r\n                                        <td class=\"text-right\">\r\n                                            <strong>{{item.is_pajak}}</strong>\r\n                                        </td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td>Keterangan</td>\r\n                                        <td class=\"text-right\">\r\n                                            <strong>{{item.keterangan_komponen}}</strong>\r\n                                        </td>\r\n                                    </tr>\r\n\r\n                                </tbody>\r\n                            </table>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\" *ngIf=\"item.enable\">\r\n                        <div class=\"col-md-6 mb-4\">\r\n                            <div class=\"bg-gray-1 text-gray-6 text-uppercase px-3 py-1 mb-2\">Default</div>\r\n                            <div class=\"table-responsive\">\r\n                                <table class=\"table table-borderless text-muted mb-0\">\r\n                                    <tbody>\r\n                                        <tr>\r\n                                            <td><b>Nilai</b></td>\r\n                                        </tr>\r\n                                        <tr>\r\n                                            <td>{{item.nilai | currency:'Rp '}}</td>\r\n                                        </tr>\r\n                                        <tr>\r\n                                            <td><b>Rumus</b></td>\r\n                                        </tr>\r\n                                        <tr>\r\n                                            <td>{{item.rumus}}</td>\r\n                                        </tr>\r\n                                    </tbody>\r\n                                </table>\r\n                            </div>\r\n                        </div>\r\n\r\n\r\n                        <!-- jika di kunci -->\r\n                        <div class=\"col-md-6 mb-4\" *ngIf=\"!item.default && item.is_lock=='tidak'\">\r\n                            <div class=\"bg-info text-white text-uppercase px-3 py-1 mb-2\">\r\n                                <a (click)=\"gantiModeDefault(true,item.item.id_pegawai_komponen)\" class=\"pointer-event\">\r\n                                    set to custom >>\r\n                                </a>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"col-md-6 mb-4\" *ngIf=\"item.is_lock=='ya'\">\r\n                            <div class=\"bg-gray-1 text-gray-6 text-uppercase px-3 py-1 mb-2\">PSN</div>\r\n                            <div class=\"table-responsive\">\r\n                                <table class=\"table table-borderless text-muted mb-0\">\r\n                                    <tbody>\r\n                                        <tr>\r\n                                            <td><b>Nilai</b></td>\r\n                                        </tr>\r\n                                        <tr>\r\n                                            <td>{{item.item.nilai | currency:'Rp '}}</td>\r\n                                        </tr>\r\n                                        <tr>\r\n                                            <td><b>Rumus</b></td>\r\n                                        </tr>\r\n                                        <tr>\r\n                                            <td>{{item.item.rumus}}</td>\r\n                                        </tr>\r\n                                    </tbody>\r\n                                </table>\r\n                            </div>\r\n                        </div>\r\n\r\n\r\n                        <!-- jika di kunci -->\r\n                        <div class=\"col-md-6 mb-4\" *ngIf=\"item.default && item.is_lock=='tidak'\">\r\n                            <div class=\"bg-gray-1 text-gray-6  px-3 py-1 mb-2\">\r\n                                Custom\r\n                                <a style=\"float: right;\" (click)=\"updatePegawaiKomponen(i, item.item.id_pegawai_komponen)\" class=\"pointer-event\">\r\n                                    update >\r\n                                </a>\r\n                            </div>\r\n                            <div class=\"table-responsive\" *ngIf=\"!item.on_editable\">\r\n                                <table class=\"table table-borderless text-muted mb-0\">\r\n                                    <tbody>\r\n                                        <tr>\r\n                                            <td><b>Nilai</b></td>\r\n                                        </tr>\r\n                                        <tr>\r\n                                            <td>{{item.item.nilai | currency:'Rp '}}</td>\r\n                                        </tr>\r\n                                        <tr>\r\n                                            <td><b>Rumus</b></td>\r\n                                        </tr>\r\n                                        <tr>\r\n                                            <td>{{item.item.rumus}}</td>\r\n                                        </tr>\r\n                                    </tbody>\r\n                                </table>\r\n                            </div>\r\n\r\n                            <div class=\"table-responsive\" *ngIf=\"item.on_editable\">\r\n                                <table class=\"table table-borderless text-muted mb-0\">\r\n                                    <tbody>\r\n                                        <tr>\r\n                                            <td>\r\n                                                <b>Enable Custom Formula</b>\r\n                                            </td>\r\n                                        </tr>\r\n                                        <tr>\r\n                                            <td>\r\n                                                <nz-radio-group [(ngModel)]=\"item.item.is_default\">\r\n                                                    <label nz-radio nzValue=\"ya\">Yes</label>\r\n                                                    <label nz-radio nzValue=\"tidak\">No</label>\r\n                                                </nz-radio-group>\r\n                                            </td>\r\n                                        </tr>\r\n                                        <tr>\r\n                                            <td>\r\n                                                <b>Nilai</b>\r\n                                                <span class=\"float-right\">{{item.item.nilai | currency:'Rp.'}}</span>\r\n                                            </td>\r\n                                        </tr>\r\n                                        <tr>\r\n                                            <td>\r\n                                                <nz-input-group nzAddOnBefore=\"Rp\">\r\n                                                    <input nz-input [disabled]=\"item.item.is_default=='tidak'\" name=\"item.item.nilai\" [(ngModel)]=\"item.item.nilai\" type=\"number\">\r\n                                                </nz-input-group>\r\n                                            </td>\r\n                                        </tr>\r\n                                        <tr>\r\n                                            <td style=\"padding-top: 10px;\"> Rumus <i clas=\"text-right\" style=\"cursor: pointer; float: right;\" (click)=\"open()\">Info</i> </td>\r\n                                        </tr>\r\n                                        <tr>\r\n                                            <td><textarea nz-input [disabled]=\"item.item.is_default=='tidak'\" [(ngModel)]=\"item.item.rumus\"></textarea></td>\r\n                                        </tr>\r\n                                        <tr>\r\n                                            <td>\r\n\r\n                                                <button nz-button nzType=\"primary\" (click)=\"simpanPegawaiKomponen(item.item.id_pegawai_komponen,item.item)\"><i\r\n                                                        nz-icon nzType=\"upload\"></i>Update</button>\r\n                                            </td>\r\n                                        </tr>\r\n                                    </tbody>\r\n                                </table>\r\n                            </div>\r\n\r\n                        </div>\r\n\r\n\r\n\r\n                    </div>\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<nz-drawer [nzClosable]=\"false\" [nzVisible]=\"visible\" nzPlacement=\"right\" [nzWidth]=\"520\" nzTitle=\"Basic Rumus\" (nzOnClose)=\"close()\">\r\n    <app-edit></app-edit>\r\n</nz-drawer>"

/***/ }),

/***/ "./src/app/pages/hr/direktori/employee/pegawi-detail/payroll/komponen/edit/edit.component.scss":
/*!*****************************************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/employee/pegawi-detail/payroll/komponen/edit/edit.component.scss ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".table td,\n.table th {\n  padding: 3px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaHIvZGlyZWt0b3JpL2VtcGxveWVlL3BlZ2F3aS1kZXRhaWwvcGF5cm9sbC9rb21wb25lbi9lZGl0L0U6XFxQUk9KRUtcXERFUkFaT05BXFxkZXZldGVrLWVycC9zcmNcXGFwcFxccGFnZXNcXGhyXFxkaXJla3RvcmlcXGVtcGxveWVlXFxwZWdhd2ktZGV0YWlsXFxwYXlyb2xsXFxrb21wb25lblxcZWRpdFxcZWRpdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvaHIvZGlyZWt0b3JpL2VtcGxveWVlL3BlZ2F3aS1kZXRhaWwvcGF5cm9sbC9rb21wb25lbi9lZGl0L2VkaXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUksWUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaHIvZGlyZWt0b3JpL2VtcGxveWVlL3BlZ2F3aS1kZXRhaWwvcGF5cm9sbC9rb21wb25lbi9lZGl0L2VkaXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFibGUgdGQsXHJcbi50YWJsZSB0aCB7XHJcbiAgICBwYWRkaW5nOiAzcHg7XHJcbn1cclxuIiwiLnRhYmxlIHRkLFxuLnRhYmxlIHRoIHtcbiAgcGFkZGluZzogM3B4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/hr/direktori/employee/pegawi-detail/payroll/komponen/edit/edit.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/employee/pegawi-detail/payroll/komponen/edit/edit.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: EditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditComponent", function() { return EditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sdk/hr/services */ "./src/app/sdk/hr/services.ts");



var EditComponent = /** @class */ (function () {
    function EditComponent(kalenderLemburPengaturanService, kalenderCutiPengaturanService) {
        this.kalenderLemburPengaturanService = kalenderLemburPengaturanService;
        this.kalenderCutiPengaturanService = kalenderCutiPengaturanService;
        this.list_lembuer_param = [];
        this.list_cuti_param = [];
    }
    EditComponent.prototype.ngOnInit = function () {
        this.getParamaterLembur();
        this.getParamaterCuti();
    };
    EditComponent.prototype.getParamaterLembur = function () {
        var _this = this;
        this.kalenderLemburPengaturanService.getKalenderLemburPengaturans().subscribe(function (data) {
            _this.list_lembuer_param = data.data;
        });
    };
    EditComponent.prototype.getParamaterCuti = function () {
        var _this = this;
        this.kalenderCutiPengaturanService.getKalenderCutiPengaturans().subscribe(function (data) {
            _this.list_cuti_param = data.data;
        });
    };
    EditComponent.ctorParameters = function () { return [
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["KalenderLemburPengaturanService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["KalenderCutiPengaturanService"] }
    ]; };
    EditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit',
            template: __webpack_require__(/*! raw-loader!./edit.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/hr/direktori/employee/pegawi-detail/payroll/komponen/edit/edit.component.html"),
            styles: [__webpack_require__(/*! ./edit.component.scss */ "./src/app/pages/hr/direktori/employee/pegawi-detail/payroll/komponen/edit/edit.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["KalenderLemburPengaturanService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["KalenderCutiPengaturanService"]])
    ], EditComponent);
    return EditComponent;
}());



/***/ }),

/***/ "./src/app/pages/hr/direktori/employee/pegawi-detail/payroll/komponen/komponen-routing.module.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/employee/pegawi-detail/payroll/komponen/komponen-routing.module.ts ***!
  \*******************************************************************************************************/
/*! exports provided: KomponenRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KomponenRoutingModule", function() { return KomponenRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list/list.component */ "./src/app/pages/hr/direktori/employee/pegawi-detail/payroll/komponen/list/list.component.ts");




var routes = [
    {
        path: '',
        redirectTo: 'list'
    },
    {
        path: 'list',
        component: _list_list_component__WEBPACK_IMPORTED_MODULE_3__["ListComponent"]
    }
];
var KomponenRoutingModule = /** @class */ (function () {
    function KomponenRoutingModule() {
    }
    KomponenRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], KomponenRoutingModule);
    return KomponenRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/hr/direktori/employee/pegawi-detail/payroll/komponen/komponen.module.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/employee/pegawi-detail/payroll/komponen/komponen.module.ts ***!
  \***********************************************************************************************/
/*! exports provided: KomponenModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KomponenModule", function() { return KomponenModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _komponen_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./komponen-routing.module */ "./src/app/pages/hr/direktori/employee/pegawi-detail/payroll/komponen/komponen-routing.module.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list/list.component */ "./src/app/pages/hr/direktori/employee/pegawi-detail/payroll/komponen/list/list.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/pages/hr/direktori/employee/pegawi-detail/payroll/komponen/edit/edit.component.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/angular-reactive-forms-helper */ "./src/app/services/angular-reactive-forms-helper.ts");









var KomponenModule = /** @class */ (function () {
    function KomponenModule() {
    }
    KomponenModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_list_list_component__WEBPACK_IMPORTED_MODULE_4__["ListComponent"], _edit_edit_component__WEBPACK_IMPORTED_MODULE_5__["EditComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _komponen_routing_module__WEBPACK_IMPORTED_MODULE_3__["KomponenRoutingModule"],
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__["NgZorroAntdModule"],
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__["NzSelectModule"],
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__["NgZorroAntdModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"]
            ],
            providers: [
                src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_8__["FormBuilderTypeSafe"]
            ]
        })
    ], KomponenModule);
    return KomponenModule;
}());



/***/ }),

/***/ "./src/app/pages/hr/direktori/employee/pegawi-detail/payroll/komponen/list/list.component.scss":
/*!*****************************************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/employee/pegawi-detail/payroll/komponen/list/list.component.scss ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".table td,\n.table th {\n  padding: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaHIvZGlyZWt0b3JpL2VtcGxveWVlL3BlZ2F3aS1kZXRhaWwvcGF5cm9sbC9rb21wb25lbi9saXN0L0U6XFxQUk9KRUtcXERFUkFaT05BXFxkZXZldGVrLWVycC9zcmNcXGFwcFxccGFnZXNcXGhyXFxkaXJla3RvcmlcXGVtcGxveWVlXFxwZWdhd2ktZGV0YWlsXFxwYXlyb2xsXFxrb21wb25lblxcbGlzdFxcbGlzdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvaHIvZGlyZWt0b3JpL2VtcGxveWVlL3BlZ2F3aS1kZXRhaWwvcGF5cm9sbC9rb21wb25lbi9saXN0L2xpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUksWUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaHIvZGlyZWt0b3JpL2VtcGxveWVlL3BlZ2F3aS1kZXRhaWwvcGF5cm9sbC9rb21wb25lbi9saXN0L2xpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFibGUgdGQsXHJcbi50YWJsZSB0aCB7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbn0iLCIudGFibGUgdGQsXG4udGFibGUgdGgge1xuICBwYWRkaW5nOiAwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/hr/direktori/employee/pegawi-detail/payroll/komponen/list/list.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/employee/pegawi-detail/payroll/komponen/list/list.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../service/pegawai-detail.service */ "./src/app/pages/hr/direktori/employee/pegawi-detail/service/pegawai-detail.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_sdk_payroll_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/sdk/payroll/services */ "./src/app/sdk/payroll/services.ts");
/* harmony import */ var src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/tool/pesan.service */ "./src/app/services/tool/pesan.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");







var ListComponent = /** @class */ (function () {
    function ListComponent(pesan, activatedRoute, payrollPegawaiKomponenService, spinner, router, pegawaiDetailService) {
        this.pesan = pesan;
        this.activatedRoute = activatedRoute;
        this.payrollPegawaiKomponenService = payrollPegawaiKomponenService;
        this.spinner = spinner;
        this.router = router;
        this.pegawaiDetailService = pegawaiDetailService;
        this.id_pegawai = '';
        this.listKomponen = [];
        this.pegawai_komponen = {};
        //DRAWER
        this.visible = false;
    }
    ListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pegawaiDetailService.getIdPegawai().subscribe(function (data) {
            _this.id_pegawai = data;
            _this.getList();
        });
    };
    ListComponent.prototype.getList = function () {
        var _this = this;
        this.spinner.show();
        this.payrollPegawaiKomponenService.getPayrollPegawaiKomponens(JSON.stringify({ id_pegawai: this.id_pegawai })).subscribe(function (data) {
            _this.listKomponen = data.data;
            _this.spinner.hide();
        });
    };
    ListComponent.prototype.gantiModeEnable = function (status, id_komponen_perusahaan) {
        var _this = this;
        console.log(status);
        this.spinner.show();
        this.payrollPegawaiKomponenService.postPayrollPegawaiKomponens({
            is_enable: status,
            id_pegawai: this.id_pegawai,
            id_komponen_perusahaan: id_komponen_perusahaan
        }).subscribe(function (data) {
            _this.getList();
            _this.spinner.hide();
        });
    };
    ListComponent.prototype.gantiModeDefault = function (is_default, id_pegawai_komponen) {
        var _this = this;
        console.log(is_default);
        this.spinner.show();
        this.payrollPegawaiKomponenService.postPayrollPegawaiKomponens({
            is_default: is_default,
            id_pegawai: this.id_pegawai,
            id_pegawai_komponen: id_pegawai_komponen
        }).subscribe(function (data) {
            _this.getList();
            _this.spinner.hide();
        });
    };
    ListComponent.prototype.updatePegawaiKomponen = function (index, id_pegawai_komponen) {
        var _this = this;
        this.listKomponen.forEach(function (element, i) {
            _this.listKomponen[i].on_editable = false;
        });
        this.spinner.show();
        this.payrollPegawaiKomponenService.getPayrollPegawaiKomponensId(id_pegawai_komponen).subscribe(function (data) {
            _this.pegawai_komponen = data.data;
            _this.listKomponen[index].on_editable = true;
            _this.spinner.hide();
        });
    };
    ListComponent.prototype.simpanPegawaiKomponen = function (id_pegawai_komponen, param) {
        var _this = this;
        if (param.rumus == '' || param.rumus == null) {
            this.pesan.pesanWarningForm('rumus tidak boleh kosong');
            return false;
        }
        this.spinner.show();
        this.payrollPegawaiKomponenService.putPayrollPegawaiKomponensId({ id: id_pegawai_komponen, body: param }).subscribe(function (data) {
            _this.getList();
            _this.spinner.hide();
            _this.pesan.pesanBerhasilForm('Berhasil di perbarui');
        });
    };
    ListComponent.prototype.open = function () {
        this.visible = true;
    };
    ListComponent.prototype.close = function () {
        this.visible = false;
    };
    ListComponent.ctorParameters = function () { return [
        { type: src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_4__["PesanService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
        { type: src_app_sdk_payroll_services__WEBPACK_IMPORTED_MODULE_3__["PayrollPegawaiKomponenService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_1__["PegawaiDetailService"] }
    ]; };
    ListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-list',
            template: __webpack_require__(/*! raw-loader!./list.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/hr/direktori/employee/pegawi-detail/payroll/komponen/list/list.component.html"),
            styles: [__webpack_require__(/*! ./list.component.scss */ "./src/app/pages/hr/direktori/employee/pegawi-detail/payroll/komponen/list/list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_4__["PesanService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            src_app_sdk_payroll_services__WEBPACK_IMPORTED_MODULE_3__["PayrollPegawaiKomponenService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_1__["PegawaiDetailService"]])
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "./src/app/pages/profile/payroll/komponen/edit/edit.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/pages/profile/payroll/komponen/edit/edit.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2ZpbGUvcGF5cm9sbC9rb21wb25lbi9lZGl0L2VkaXQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/profile/payroll/komponen/edit/edit.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/profile/payroll/komponen/edit/edit.component.ts ***!
  \***********************************************************************/
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
            template: __webpack_require__(/*! raw-loader!./edit.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/profile/payroll/komponen/edit/edit.component.html"),
            styles: [__webpack_require__(/*! ./edit.component.scss */ "./src/app/pages/profile/payroll/komponen/edit/edit.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EditComponent);
    return EditComponent;
}());



/***/ }),

/***/ "./src/app/pages/profile/payroll/komponen/komponen-routing.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/profile/payroll/komponen/komponen-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: KomponenRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KomponenRoutingModule", function() { return KomponenRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list/list.component */ "./src/app/pages/profile/payroll/komponen/list/list.component.ts");




var routes = [
    {
        path: '',
        redirectTo: 'list'
    },
    {
        path: 'list',
        component: _list_list_component__WEBPACK_IMPORTED_MODULE_3__["ListComponent"]
    }
];
var KomponenRoutingModule = /** @class */ (function () {
    function KomponenRoutingModule() {
    }
    KomponenRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], KomponenRoutingModule);
    return KomponenRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/profile/payroll/komponen/komponen.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/profile/payroll/komponen/komponen.module.ts ***!
  \*******************************************************************/
/*! exports provided: KomponenModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KomponenModule", function() { return KomponenModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _komponen_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./komponen-routing.module */ "./src/app/pages/profile/payroll/komponen/komponen-routing.module.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list/list.component */ "./src/app/pages/profile/payroll/komponen/list/list.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/pages/profile/payroll/komponen/edit/edit.component.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/angular-reactive-forms-helper */ "./src/app/services/angular-reactive-forms-helper.ts");









var KomponenModule = /** @class */ (function () {
    function KomponenModule() {
    }
    KomponenModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_list_list_component__WEBPACK_IMPORTED_MODULE_4__["ListComponent"], _edit_edit_component__WEBPACK_IMPORTED_MODULE_5__["EditComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _komponen_routing_module__WEBPACK_IMPORTED_MODULE_3__["KomponenRoutingModule"],
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__["NgZorroAntdModule"],
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__["NzSelectModule"],
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__["NgZorroAntdModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"]
            ],
            providers: [
                src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_8__["FormBuilderTypeSafe"]
            ]
        })
    ], KomponenModule);
    return KomponenModule;
}());



/***/ }),

/***/ "./src/app/pages/profile/payroll/komponen/list/list.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/pages/profile/payroll/komponen/list/list.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".table td,\n.table th {\n  padding: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvZmlsZS9wYXlyb2xsL2tvbXBvbmVuL2xpc3QvRTpcXFBST0pFS1xcREVSQVpPTkFcXGRldmV0ZWstZXJwL3NyY1xcYXBwXFxwYWdlc1xccHJvZmlsZVxccGF5cm9sbFxca29tcG9uZW5cXGxpc3RcXGxpc3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3Byb2ZpbGUvcGF5cm9sbC9rb21wb25lbi9saXN0L2xpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUksWUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcHJvZmlsZS9wYXlyb2xsL2tvbXBvbmVuL2xpc3QvbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50YWJsZSB0ZCxcclxuLnRhYmxlIHRoIHtcclxuICAgIHBhZGRpbmc6IDBweDtcclxufSIsIi50YWJsZSB0ZCxcbi50YWJsZSB0aCB7XG4gIHBhZGRpbmc6IDBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/profile/payroll/komponen/list/list.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/profile/payroll/komponen/list/list.component.ts ***!
  \***********************************************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../service/pegawai-detail.service */ "./src/app/pages/profile/service/pegawai-detail.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_sdk_payroll_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/sdk/payroll/services */ "./src/app/sdk/payroll/services.ts");
/* harmony import */ var src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/tool/pesan.service */ "./src/app/services/tool/pesan.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");







var ListComponent = /** @class */ (function () {
    function ListComponent(pesan, activatedRoute, payrollPegawaiKomponenService, spinner, router, pegawaiDetailService) {
        this.pesan = pesan;
        this.activatedRoute = activatedRoute;
        this.payrollPegawaiKomponenService = payrollPegawaiKomponenService;
        this.spinner = spinner;
        this.router = router;
        this.pegawaiDetailService = pegawaiDetailService;
        this.id_pegawai = '';
        this.listKomponen = [];
        this.pegawai_komponen = {};
        //DRAWER
        this.visible = false;
    }
    ListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pegawaiDetailService.getIdPegawai().subscribe(function (data) {
            _this.id_pegawai = data;
            _this.getList();
        });
    };
    ListComponent.prototype.getList = function () {
        var _this = this;
        this.spinner.show();
        this.payrollPegawaiKomponenService.getPayrollPegawaiKomponens(JSON.stringify({ id_pegawai: this.id_pegawai })).subscribe(function (data) {
            _this.listKomponen = data.data;
            _this.spinner.hide();
        });
    };
    ListComponent.prototype.gantiModeEnable = function (status, id_komponen_perusahaan) {
        var _this = this;
        console.log(status);
        this.spinner.show();
        this.payrollPegawaiKomponenService.postPayrollPegawaiKomponens({
            is_enable: status,
            id_pegawai: this.id_pegawai,
            id_komponen_perusahaan: id_komponen_perusahaan
        }).subscribe(function (data) {
            _this.getList();
            _this.spinner.hide();
        });
    };
    ListComponent.prototype.gantiModeDefault = function (is_default, id_pegawai_komponen) {
        var _this = this;
        console.log(is_default);
        this.spinner.show();
        this.payrollPegawaiKomponenService.postPayrollPegawaiKomponens({
            is_default: is_default,
            id_pegawai: this.id_pegawai,
            id_pegawai_komponen: id_pegawai_komponen
        }).subscribe(function (data) {
            _this.getList();
            _this.spinner.hide();
        });
    };
    ListComponent.prototype.updatePegawaiKomponen = function (index, id_pegawai_komponen) {
        var _this = this;
        this.listKomponen.forEach(function (element, i) {
            _this.listKomponen[i].on_editable = false;
        });
        this.spinner.show();
        this.payrollPegawaiKomponenService.getPayrollPegawaiKomponensId(id_pegawai_komponen).subscribe(function (data) {
            _this.pegawai_komponen = data.data;
            _this.listKomponen[index].on_editable = true;
            _this.spinner.hide();
        });
    };
    ListComponent.prototype.simpanPegawaiKomponen = function (id_pegawai_komponen, param) {
        var _this = this;
        if (param.rumus == '' || param.rumus == null) {
            this.pesan.pesanWarningForm('rumus tidak boleh kosong');
            return false;
        }
        this.spinner.show();
        this.payrollPegawaiKomponenService.putPayrollPegawaiKomponensId({ id: id_pegawai_komponen, body: param }).subscribe(function (data) {
            _this.getList();
            _this.spinner.hide();
            _this.pesan.pesanBerhasilForm('Berhasil di perbarui');
        });
    };
    ListComponent.prototype.open = function () {
        this.visible = true;
    };
    ListComponent.prototype.close = function () {
        this.visible = false;
    };
    ListComponent.ctorParameters = function () { return [
        { type: src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_4__["PesanService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
        { type: src_app_sdk_payroll_services__WEBPACK_IMPORTED_MODULE_3__["PayrollPegawaiKomponenService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_1__["PegawaiDetailService"] }
    ]; };
    ListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-list',
            template: __webpack_require__(/*! raw-loader!./list.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/profile/payroll/komponen/list/list.component.html"),
            styles: [__webpack_require__(/*! ./list.component.scss */ "./src/app/pages/profile/payroll/komponen/list/list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_4__["PesanService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            src_app_sdk_payroll_services__WEBPACK_IMPORTED_MODULE_3__["PayrollPegawaiKomponenService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_1__["PegawaiDetailService"]])
    ], ListComponent);
    return ListComponent;
}());



/***/ })

}]);
//# sourceMappingURL=komponen-komponen-module.js.map