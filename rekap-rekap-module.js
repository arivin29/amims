(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["rekap-rekap-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/hr/payroll/laporan/bulanan/rekap/tahap-confirm/tahap-confirm.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/hr/payroll/laporan/bulanan/rekap/tahap-confirm/tahap-confirm.component.html ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h5 *ngIf=\"!is_confirm\">Are you sure you want to complete this task?</h5>\r\n\r\n<button *ngIf=\"!is_confirm\" nz-button (click)=\"confirm()\" nzType=\"primary\" [nzSize]=\"'large'\" nzShape=\"round\">\r\n      <i nz-icon nzType=\"download\"></i>Confirm\r\n    </button>\r\n\r\n<h5 *ngIf=\"is_confirm\">Bonus calculations have been saved, follow the next step \"Click the Done button\"</h5>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/hr/payroll/laporan/bulanan/rekap/tahap-template/tahap-template.component.html":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/hr/payroll/laporan/bulanan/rekap/tahap-template/tahap-template.component.html ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"p-3 text-left\">\r\n    <div class=\"text-right\">\r\n        <button *ngIf=\"is_on_update\" nz-button nzType=\"primary\" nz-popconfirm nzShape=\"round\"\r\n            nzPopconfirmTitle=\"Are you sure excecute this task?\" nzPopconfirmPlacement=\"bottom\"\r\n            (nzOnConfirm)=\"prosessRekap()\">\r\n            <i nz-icon nzType=\"play-circle\" nzTheme=\"outline\"></i>Exceute\r\n        </button>\r\n        <button nz-button nzType=\"default\" nz-popconfirm nzShape=\"round\"\r\n            nzPopconfirmTitle=\"Are you sure reload this task?\" nzPopconfirmPlacement=\"bottom\"\r\n            (nzOnConfirm)=\"getRekap(true)\">\r\n            <i nz-icon nzType=\"reload\" nzTheme=\"outline\"></i>Reload\r\n        </button>\r\n    </div>\r\n    <br>\r\n\r\n\r\n    <div class=\"card \" *ngFor=\"let item of listData; let index=index; \">\r\n        <div class=\"card-body \">\r\n            <div class=\"d-flex flex-nowrap align-items-start pt-4 \">\r\n\r\n                <div class=\"flex-grow-1 \">\r\n                    <div class=\"border-bottom \">\r\n                        <div class=\"d-flex flex-wrap mb-2 \">\r\n                            <div class=\"mr-auto \">\r\n                                <div class=\"text-gray-6 \">\r\n                                    <span class=\"text-dark font-weight-bold \">\r\n                                        {{item.nama}}</span>\r\n                                </div>\r\n                                <!-- <div>{{item.nama_jabatan}}</div> -->\r\n                            </div>\r\n                            <div class=\"nav-item \">\r\n\r\n                                <button *ngIf=\"!cek_edit(index)\" nz-button nzType=\"primary\" nz-popconfirm\r\n                                    nzShape=\"round\" nzPopconfirmTitle=\"Are you sure Update?\"\r\n                                    nzPopconfirmPlacement=\"bottom\"\r\n                                    (nzOnConfirm)=\"togleUpdate(item.id_payroll_rekap_bulanan)\">\r\n                                    <i nz-icon nzType=\"edit\" nzTheme=\"outline\"></i>Edit\r\n                                </button>\r\n                                <button *ngIf=\"cek_edit(index)\" nz-button nzType=\"primary\" nz-popconfirm nzShape=\"round\"\r\n                                    nzPopconfirmTitle=\"Are you sure Update?\" nzPopconfirmPlacement=\"bottom\"\r\n                                    (nzOnConfirm)=\"updateDate(item)\">\r\n                                    <i nz-icon nzType=\"save\" nzTheme=\"outline\"></i>Update\r\n                                </button>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"mb-3 \">\r\n\r\n                            <div class=\"row\">\r\n\r\n                                <div class=\"col-md-6\">\r\n\r\n                                    <table class=\"table\">\r\n\r\n                                        <tr>\r\n                                            <td>NPWP</td>\r\n                                            <td>\r\n                                                <input nz-input [disabled]=\"!cek_edit(index)\" [(ngModel)]=\"item.npwp\" />\r\n                                            </td>\r\n                                        </tr>\r\n\r\n                                        <tr>\r\n                                            <td>Kode Negara</td>\r\n                                            <td>\r\n                                                <input nz-input [disabled]=\"!cek_edit(index)\"\r\n                                                    [(ngModel)]=\"item.kode_negara\" />\r\n                                            </td>\r\n                                        </tr>\r\n\r\n                                        <tr>\r\n                                            <td>Masa Pajak</td>\r\n                                            <td>\r\n                                                ({{item.masa_pajak}})\r\n                                            </td>\r\n                                        </tr>\r\n                                        <tr>\r\n                                            <td>Tahun Pajak</td>\r\n                                            <td>\r\n                                                ({{item.tahun_pajak}})\r\n                                            </td>\r\n                                        </tr>\r\n\r\n                                    </table>\r\n\r\n                                </div>\r\n\r\n                                <div class=\"col-md-6\">\r\n                                    <table class=\"table\">\r\n\r\n                                        <tr>\r\n                                            <td colspan=\"2\"><b>Total</b></td>\r\n                                        </tr>\r\n                                        <tr>\r\n                                            <td> Bruto ({{item.bruto | currency: 'Rp' }})</td>\r\n                                            <td>\r\n                                                <input [disabled]=\"true\" nz-input [(ngModel)]=\"item.bruto\" />\r\n                                            </td>\r\n                                        </tr>\r\n                                        <tr>\r\n                                            <td> Pph ({{item.pph_payroll | currency: 'Rp' }})</td>\r\n                                            <td>\r\n                                                <input [disabled]=\"true\" nz-input [(ngModel)]=\"item.pph\" />\r\n                                            </td>\r\n                                        </tr>\r\n                                        <tr>\r\n                                            <td> Tanggal Rekap </td>\r\n                                            <td>\r\n                                                {{item.created_at | date}}\r\n                                            </td>\r\n                                        </tr>\r\n\r\n\r\n                                    </table>\r\n\r\n                                </div>\r\n\r\n\r\n                                <div class=\"col-md-4\">\r\n                                    <table class=\"table\">\r\n\r\n                                        <tr>\r\n                                            <td colspan=\"2\"><b>Payroll bulanan</b></td>\r\n                                        </tr>\r\n                                        <tr>\r\n                                            <td> Bruto ({{item.bruto_payroll | currency: 'Rp' }})</td>\r\n                                            <td>\r\n                                                <input [disabled]=\"true\" nz-input [(ngModel)]=\"item.bruto_payroll\" />\r\n                                            </td>\r\n                                        </tr>\r\n                                        <tr>\r\n                                            <td> Pph ({{item.pph_payroll | currency: 'Rp' }})</td>\r\n                                            <td>\r\n                                                <input [disabled]=\"true\" nz-input [(ngModel)]=\"item.pph_payroll\" />\r\n                                            </td>\r\n                                        </tr>\r\n                                        <tr>\r\n                                            <td> Tanggal Rekap </td>\r\n                                            <td>\r\n                                                {{item.date_payroll | date}}\r\n                                            </td>\r\n                                        </tr>\r\n\r\n                                        <tr>\r\n                                            <td colspan=\"2\"><b>THR bulanan ini</b></td>\r\n                                        </tr>\r\n                                        <tr>\r\n                                            <td> Bruto ({{item.bruto_thr | currency: 'Rp' }})</td>\r\n                                            <td>\r\n                                                <input [disabled]=\"!cek_edit(index)\" nz-input\r\n                                                    [(ngModel)]=\"item.bruto_thr\" />\r\n                                            </td>\r\n                                        </tr>\r\n                                        <tr>\r\n                                            <td> Pph ({{item.pph_thr | currency: 'Rp' }})</td>\r\n                                            <td>\r\n                                                <input [disabled]=\"!cek_edit(index)\" nz-input\r\n                                                    [(ngModel)]=\"item.pph_thr\" />\r\n                                            </td>\r\n                                        </tr>\r\n                                        <tr>\r\n                                            <td> Tanggal Rekap </td>\r\n                                            <td>\r\n                                                {{item.date_thr | date}}\r\n                                            </td>\r\n                                        </tr>\r\n\r\n\r\n                                    </table>\r\n\r\n                                </div>\r\n\r\n                                <div class=\"col-md-4\">\r\n                                    <table class=\"table\">\r\n\r\n                                        <tr>\r\n                                            <td colspan=\"2\"><b>Onduty</b></td>\r\n                                        </tr>\r\n                                        <tr>\r\n                                            <td> Bruto ({{item.bruto_onduty | currency: 'Rp' }})</td>\r\n                                            <td>\r\n                                                <input [disabled]=\"!cek_edit(index)\" nz-input\r\n                                                    [(ngModel)]=\"item.bruto_onduty\" />\r\n                                            </td>\r\n                                        </tr>\r\n                                        <tr>\r\n                                            <td> Pph ({{item.pph_onduty | currency: 'Rp' }})</td>\r\n                                            <td>\r\n                                                <input [disabled]=\"!cek_edit(index)\" nz-input\r\n                                                    [(ngModel)]=\"item.pph_onduty\" />\r\n                                            </td>\r\n                                        </tr>\r\n                                        <tr>\r\n                                            <td> Tanggal Rekap </td>\r\n                                            <td>\r\n                                                {{item.date_onduty | date}}\r\n                                            </td>\r\n                                        </tr>\r\n\r\n                                        <tr>\r\n                                            <td colspan=\"2\"><b>Pilot</b></td>\r\n                                        </tr>\r\n                                        <tr>\r\n                                            <td> Bruto ({{item.bruto_pilot | currency: 'Rp' }})</td>\r\n                                            <td>\r\n                                                <input [disabled]=\"!cek_edit(index)\" nz-input\r\n                                                    [(ngModel)]=\"item.bruto_pilot\" />\r\n                                            </td>\r\n                                        </tr>\r\n                                        <tr>\r\n                                            <td> Pph ({{item.pph_pilot | currency: 'Rp' }})</td>\r\n                                            <td>\r\n                                                <input [disabled]=\"!cek_edit(index)\" nz-input\r\n                                                    [(ngModel)]=\"item.pph_pilot\" />\r\n                                            </td>\r\n                                        </tr>\r\n                                        <tr>\r\n                                            <td> Tanggal Rekap </td>\r\n                                            <td>\r\n                                                {{item.date_pilot | date}}\r\n                                            </td>\r\n                                        </tr>\r\n\r\n\r\n                                    </table>\r\n\r\n                                </div>\r\n\r\n                                <div class=\"col-md-4\">\r\n                                    <table class=\"table\">\r\n\r\n                                        <tr>\r\n                                            <td colspan=\"2\"><b>Bonus</b></td>\r\n                                        </tr>\r\n                                        <tr>\r\n                                            <td> Bruto ({{item.bruto_bonus | currency: 'Rp' }})</td>\r\n                                            <td>\r\n                                                <input [disabled]=\"!cek_edit(index)\" nz-input\r\n                                                    [(ngModel)]=\"item.bruto_bonus\" />\r\n                                            </td>\r\n                                        </tr>\r\n                                        <tr>\r\n                                            <td> Pph ({{item.pph_bonus | currency: 'Rp' }})</td>\r\n                                            <td>\r\n                                                <input [disabled]=\"!cek_edit(index)\" nz-input\r\n                                                    [(ngModel)]=\"item.pph_bonus\" />\r\n                                            </td>\r\n                                        </tr>\r\n                                        <tr>\r\n                                            <td> Tanggal Rekap </td>\r\n                                            <td>\r\n                                                {{item.date_bonus | date}}\r\n                                            </td>\r\n                                        </tr>\r\n\r\n\r\n\r\n\r\n                                    </table>\r\n\r\n                                </div>\r\n\r\n\r\n                            </div>\r\n\r\n\r\n\r\n                        </div>\r\n\r\n                    </div>\r\n\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/hr/payroll/laporan/bulanan/rekap/tahap/tahap.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/hr/payroll/laporan/bulanan/rekap/tahap/tahap.component.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"current==0\" style=\"width: 900px;\">\r\n    <div nz-col nzSpan=\"5\">\r\n        <nz-form-label>recapitalisation process</nz-form-label>\r\n    </div>\r\n\r\n    <div nz-col nzSpan=\"8\">\r\n        &nbsp;&nbsp;Pembetulan<input nz-input placeholder=\"Pembetulan\" [(ngModel)]=\"pembetulan\"\r\n            (ngModelChange)=\"ngModelChange()\" />\r\n    </div>\r\n\r\n</div>\r\n\r\n<nz-steps [nzCurrent]=\"current\">\r\n    <nz-step nzTitle=\"Periode\"></nz-step>\r\n    <nz-step nzTitle=\"Formula\"></nz-step>\r\n    <nz-step nzTitle=\"Finishing\"></nz-step>\r\n</nz-steps>\r\n\r\n\r\n\r\n<div class=\"steps-content\">\r\n\r\n    <div *ngIf=\"current==0\">\r\n        <nz-form-label>Select Period</nz-form-label>\r\n        <nz-month-picker [nzFormat]=\"'MMMM-yyyy'\" [(ngModel)]=\"periode\" (ngModelChange)=\"ngModelChange()\">\r\n        </nz-month-picker>\r\n    </div>\r\n\r\n    <div *ngIf=\"current==1\">\r\n        <app-tahap-template></app-tahap-template>\r\n    </div>\r\n\r\n\r\n    <div *ngIf=\"current==2\">\r\n        <app-tahap-confirm></app-tahap-confirm>\r\n    </div>\r\n\r\n\r\n</div>\r\n<div class=\"steps-action\">\r\n    <button nz-button nzType=\"default\" (click)=\"pre()\" *ngIf=\"current > 0\">\r\n        <span>Previous</span>\r\n    </button>\r\n    <button nz-button nzType=\"default\" (click)=\"next()\" *ngIf=\"current < 2\">\r\n        <span>Next</span>\r\n    </button>\r\n    <button nz-button nzType=\"primary\" (click)=\"done()\" *ngIf=\"current === 2\">\r\n        <span>Done</span>\r\n    </button>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/hr/payroll/laporan/tahunan/rekap/tahap-confirm/tahap-confirm.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/hr/payroll/laporan/tahunan/rekap/tahap-confirm/tahap-confirm.component.html ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h5 *ngIf=\"!is_confirm\">Are you sure you want to complete this task?</h5>\r\n\r\n<button *ngIf=\"!is_confirm\" nz-button (click)=\"confirm()\" nzType=\"primary\" [nzSize]=\"'large'\" nzShape=\"round\">\r\n      <i nz-icon nzType=\"download\"></i>Confirm\r\n    </button>\r\n\r\n<h5 *ngIf=\"is_confirm\">Bonus calculations have been saved, follow the next step \"Click the Done button\"</h5>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/hr/payroll/laporan/tahunan/rekap/tahap-komponen/tahap-komponen.component.html":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/hr/payroll/laporan/tahunan/rekap/tahap-komponen/tahap-komponen.component.html ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"p-3 text-left\">\r\n    <div class=\"text-right\">\r\n        <button nz-button nzType=\"primary\" nz-popconfirm nzShape=\"round\"\r\n            nzPopconfirmTitle=\"Are you sure excecute this task?\" nzPopconfirmPlacement=\"bottom\"\r\n            (nzOnConfirm)=\"prosessRekap()\">\r\n            <i nz-icon nzType=\"play-circle\" nzTheme=\"outline\"></i>Exceute\r\n        </button>\r\n        <button nz-button nzType=\"default\" nz-popconfirm nzShape=\"round\"\r\n            nzPopconfirmTitle=\"Are you sure reload this task?\" nzPopconfirmPlacement=\"bottom\"\r\n            (nzOnConfirm)=\"getRekap(true)\">\r\n            <i nz-icon nzType=\"reload\" nzTheme=\"outline\"></i>Reload\r\n        </button>\r\n    </div>\r\n    <br>\r\n\r\n\r\n    <div class=\"card\" *ngFor=\"let item of listData\">\r\n        <div class=\"card-body\">\r\n            <div class=\"d-flex flex-nowrap align-items-start pt-4\">\r\n\r\n                <div class=\"flex-grow-1\">\r\n                    <div class=\"border-bottom\">\r\n                        <div class=\"d-flex flex-wrap mb-2 \">\r\n                            <div class=\"mr-auto \">\r\n                                <div class=\"text-gray-6 \">\r\n                                    <span class=\"text-dark font-weight-bold \">{{item.nama_depan}}\r\n                                        {{item.nama_belakang}}</span>\r\n                                </div>\r\n                                <div>{{item.nama_divisi}} / {{item.nama_jabatan}}/ {{item.nama_kantor}}</div>\r\n                            </div>\r\n                            <div class=\"\">\r\n                                {{item.no_induk}}\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"mb-3\">\r\n\r\n                            <div>\r\n\r\n                                <nz-table #colSpanTable [nzData]=\"item.item\" nzBordered>\r\n                                    <thead>\r\n\r\n                                        <tr>\r\n                                            <th>No</th>\r\n                                            <th>Code</th>\r\n                                            <th>Component</th>\r\n                                            <th>Basic</th>\r\n                                            <th>Value</th>\r\n                                            <th>Multiplier</th>\r\n                                            <th>Total</th>\r\n                                        </tr>\r\n                                    </thead>\r\n\r\n                                    <tbody>\r\n                                        <tr *ngFor=\"let x of colSpanTable.data; let i=index;\">\r\n                                            <td>{{i+1}}</td>\r\n                                            <td>{{x.kode_komponen}}</td>\r\n                                            <td>{{x.nama_komponen}}</td>\r\n                                            <td>{{x.nilai_fix > 0 ? 'Nilai Fix' : 'Komponen Gaji'}}</td>\r\n                                            <td class=\"text-right\">\r\n                                                <i *ngIf=\"x.nilai_fix > 0 \">{{x.nilai | currency:'Rp '}}</i>\r\n                                                <i *ngIf=\"x.nilai_fix < 1\">{{x.nilai_default | currency:'Rp '}}</i>\r\n                                            </td>\r\n\r\n                                            <td class=\"text-right\">\r\n                                                <i>{{x.rumus_bonus}}</i>\r\n                                            </td>\r\n                                            <td class=\"text-right\">\r\n                                                <strong>{{x.nilai_akhir | currency:'Rp.'}}</strong>\r\n                                            </td>\r\n                                        </tr>\r\n\r\n                                    </tbody>\r\n                                </nz-table>\r\n\r\n\r\n                            </div>\r\n\r\n\r\n\r\n                        </div>\r\n\r\n                    </div>\r\n\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/hr/payroll/laporan/tahunan/rekap/tahap-review/tahap-review.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/hr/payroll/laporan/tahunan/rekap/tahap-review/tahap-review.component.html ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"p-3 text-left\">\r\n    <div class=\"text-right\">\r\n        <button nz-button nzType=\"primary\" nz-popconfirm nzShape=\"round\"\r\n            nzPopconfirmTitle=\"Are you sure excecute this task?\" nzPopconfirmPlacement=\"bottom\"\r\n            (nzOnConfirm)=\"prosessRekap()\">\r\n            <i nz-icon nzType=\"play-circle\" nzTheme=\"outline\"></i>Exceute\r\n        </button>\r\n        <button nz-button nzType=\"default\" nz-popconfirm nzShape=\"round\"\r\n            nzPopconfirmTitle=\"Are you sure reload this task?\" nzPopconfirmPlacement=\"bottom\"\r\n            (nzOnConfirm)=\"getRekap()\">\r\n            <i nz-icon nzType=\"reload\" nzTheme=\"outline\"></i>Reload\r\n        </button>\r\n    </div>\r\n    <br>\r\n    <br />\r\n    <br />\r\n    <table class=\"table table-bordered\">\r\n        <thead>\r\n            <tr>\r\n                <th>Employer</th>\r\n                <th>Index</th>\r\n                <th>Bonus</th>\r\n                <th>Tax</th>\r\n                <th>Net</th>\r\n                <th width=\"60px\" nzRight=\"0px\">Action</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody>\r\n            <tr *ngFor=\"let data of listData; let index=index;\">\r\n                <td>\r\n                    <div class=\"d-flex\">\r\n                        <div class=\"p-1\">\r\n                            <nz-avatar *ngIf=\"data.foto\" nzIcon=\"user\" nzSize=\"large\"\r\n                                nzSrc=\"http://erp-document.vm.devetek.com/download?id_document={{data.foto}}\">\r\n                            </nz-avatar>\r\n                            <nz-avatar *ngIf=\"!data.foto\" nzSize=\"large\" nzIcon=\"user\"></nz-avatar>\r\n                        </div>\r\n                        <div class=\"mr-auto pl-2\">\r\n                            <a nz-dropdown [nzDropdownMenu]=\"menu2\">\r\n                                {{data.nama_pegawai}}\r\n\r\n                                <br>\r\n                                {{ data.no_induk }}\r\n\r\n                            </a>\r\n                            <nz-dropdown-menu #menu2=\"nzDropdownMenu\">\r\n                                <ul nz-menu nzSelectable>\r\n\r\n                                    <li nz-menu-item\r\n                                        [routerLink]=\"['/hr/direktori/employee/pegawai-detail',data.id_pegawai,'payroll','komponen','list']\">\r\n                                        Componet Payroll\r\n                                    </li>\r\n                                    <li nz-menu-item\r\n                                        [routerLink]=\"['/hr/direktori/employee/pegawai-detail',data.id_pegawai,'payroll','thr','list']\">\r\n                                        Componet THR\r\n                                    </li>\r\n\r\n                                </ul>\r\n                            </nz-dropdown-menu>\r\n\r\n                        </div>\r\n                    </div>\r\n                </td>\r\n                <td>{{index}} </td>\r\n                <td>{{data.bersih | number}}</td>\r\n                <td>{{data.pajak | number}}</td>\r\n                <td>{{data.bersih | number}}</td>\r\n                <td>\r\n                    <button title=\"Reload\" nz-button [nzType]=\"'dashed'\" nzSize=\"small\"\r\n                        (click)=\"prosessRekapOneByOne(data.id_pegawai_bonus)\">\r\n                        <i nz-icon nzType=\"reload\" nzTheme=\"outline\"></i>\r\n                    </button>\r\n                    <button title=\"View\" nz-button [nzType]=\"'dashed'\" nzSize=\"small\"\r\n                        (click)=\"viewDetail(data.id_pegawai_bonus)\">\r\n                        <i nz-icon nzType=\"monitor\" nzTheme=\"outline\"></i>\r\n                    </button>\r\n                </td>\r\n            </tr>\r\n        </tbody>\r\n    </table>\r\n\r\n\r\n    <nz-drawer [nzClosable]=\"false\" [nzVisible]=\"visible\" nzPlacement=\"right\" nzTitle=\"Detail Payroll\"\r\n        (nzOnClose)=\"close()\" [nzWidth]=\"720\">\r\n        <p>Some contents...</p>\r\n        <p>Some contents...</p>\r\n        <p>Some contents...</p>\r\n    </nz-drawer>\r\n\r\n\r\n    <!-- <div class=\"card\">\r\n        <div class=\"card-body\">\r\n            <div class=\"\">\r\n\r\n                <nz-table #virtualTable2 [nzData]=\"listData\" nzBordered nzVirtualScroll [nzVirtualItemSize]=\"54\"\r\n                    [nzData]=\"listOfData\" [nzVirtualForTrackBy]=\"trackByIndex\" [nzFrontPagination]=\"false\"\r\n                    [nzShowPagination]=\"false\" [nzScroll]=\"{ x: '600px', y: '240px' }\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th width=\"50px\" nzLeft=\"0px\">No</th>\r\n                            <th width=\"100px\" nzLeft=\"200px\">NIK</th>\r\n                            <th width=\"100px\">Nama</th>\r\n                            <th width=\"100px\">gapok</th>\r\n                            <th width=\"100px\">tunjangan</th>\r\n                            <th width=\"100px\">potongan</th>\r\n                            <th width=\"100px\">kotor</th>\r\n                            <th width=\"100px\">pajak</th>\r\n                            <th width=\"100px\">bersih</th>\r\n                            <th width=\"100px\">tunjangan_thp</th>\r\n                            <th width=\"100px\">potongan_thp</th>\r\n                            <th width=\"100px\">Utang</th>\r\n                            <th width=\"100px\">THP</th>\r\n                            <th width=\"50px\" nzRight=\"0px\">#</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <ng-template nz-virtual-scroll let-data let-index=\"index\">\r\n                            <tr>\r\n\r\n                                <td nzWidth=\"50px\" nzLeft=\"0px\">{{index+1}}</td>\r\n                                <td nzWidth=\"100px\" nzLeft=\"200px\">{{data.no_induk}}</td>\r\n                                <td nzWidth=\"100px\">{{data.nama_pegawai}} </td>\r\n                                <td nzWidth=\"100px\">{{data.gapok | number}}</td>\r\n                                <td nzWidth=\"100px\">{{data.tunjangan | number}}</td>\r\n                                <td nzWidth=\"100px\">{{data.potongan | number}}</td>\r\n                                <td nzWidth=\"100px\">{{data.kotor | number}}</td>\r\n                                <td nzWidth=\"100px\">{{data.pajak | number}}</td>\r\n                                <td nzWidth=\"100px\">{{data.bersih | number}}</td>\r\n                                <td nzWidth=\"100px\">{{data.tunjangan_thp | number}}</td>\r\n                                <td nzWidth=\"100px\">{{data.potongan_thp | number}}</td>\r\n                                <td nzWidth=\"100px\">{{data.utang | currency:'Rp'}}</td>\r\n                                <td nzWidth=\"100px\">{{data.pembulatan | currency:'Rp'}}</td>\r\n                                <td nzWidth=\"50\" nzRight=\"0px\">\r\n                                    <button title=\"Reload\" nz-button bu [nzType]=\"'dashed'\" nzSize=\"small\"\r\n                                        (click)=\"prosessRekapOneByOne(data.id_pegawai_bonus)\">\r\n                                        <i nz-icon nzType=\"reload\" nzTheme=\"outline\"></i>\r\n                                    </button>\r\n                                </td>\r\n\r\n                            </tr>\r\n                        </ng-template>\r\n                    </tbody>\r\n                </nz-table>\r\n\r\n            </div>\r\n        </div>\r\n    </div> -->\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/hr/payroll/laporan/tahunan/rekap/tahap-template/tahap-template.component.html":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/hr/payroll/laporan/tahunan/rekap/tahap-template/tahap-template.component.html ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"p-3 text-left\">\r\n    <div class=\"text-right\">\r\n        <button *ngIf=\"is_on_update\" nz-button nzType=\"primary\" nz-popconfirm nzShape=\"round\"\r\n            nzPopconfirmTitle=\"Are you sure excecute this task?\" nzPopconfirmPlacement=\"bottom\"\r\n            (nzOnConfirm)=\"prosessRekap()\">\r\n            <i nz-icon nzType=\"play-circle\" nzTheme=\"outline\"></i>Exceute\r\n        </button>\r\n        <button nz-button nzType=\"default\" nz-popconfirm nzShape=\"round\"\r\n            nzPopconfirmTitle=\"Are you sure reload this task?\" nzPopconfirmPlacement=\"bottom\"\r\n            (nzOnConfirm)=\"getRekap(true)\">\r\n            <i nz-icon nzType=\"reload\" nzTheme=\"outline\"></i>Reload\r\n        </button>\r\n    </div>\r\n    <br>\r\n\r\n\r\n    <div class=\"card \" *ngFor=\"let item of listData; let index=index; \">\r\n        <div class=\"card-body \">\r\n            <div class=\"d-flex flex-nowrap align-items-start pt-4 \">\r\n\r\n                <div class=\"flex-grow-1 \">\r\n                    <div class=\"border-bottom \">\r\n                        <div class=\"d-flex flex-wrap mb-2 \">\r\n                            <div class=\"mr-auto \">\r\n                                <div class=\"text-gray-6 \">\r\n                                    <span class=\"text-dark font-weight-bold \">\r\n                                        {{item.nama}}</span>\r\n                                </div>\r\n                                <div>{{item.nama_jabatan}}</div>\r\n                            </div>\r\n                            <div class=\"nav-item \">\r\n\r\n                                <button *ngIf=\"!cek_edit(index)\" nz-button nzType=\"primary\" nz-popconfirm\r\n                                    nzShape=\"round\" nzPopconfirmTitle=\"Are you sure Update?\"\r\n                                    nzPopconfirmPlacement=\"bottom\" (nzOnConfirm)=\"togleUpdate(item.id_payroll_rekap)\">\r\n                                    <i nz-icon nzType=\"edit\" nzTheme=\"outline\"></i>Edit\r\n                                </button>\r\n                                <button *ngIf=\"cek_edit(index)\" nz-button nzType=\"primary\" nz-popconfirm nzShape=\"round\"\r\n                                    nzPopconfirmTitle=\"Are you sure Update?\" nzPopconfirmPlacement=\"bottom\"\r\n                                    (nzOnConfirm)=\"updateDate(item)\">\r\n                                    <i nz-icon nzType=\"save\" nzTheme=\"outline\"></i>Update\r\n                                </button>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"mb-3 \">\r\n\r\n                            <div class=\"row\">\r\n\r\n                                <div class=\"col-md-6\">\r\n\r\n                                    <table class=\"table\">\r\n                                        <tr>\r\n                                            <td>Nomor</td>\r\n                                            <td>\r\n                                                <input nz-input [disabled]=\"!cek_edit(index)\"\r\n                                                    [(ngModel)]=\"item.nomor_bukti_potong\" />\r\n                                            </td>\r\n                                        </tr>\r\n                                        <tr>\r\n                                            <td>NPWP</td>\r\n                                            <td>\r\n                                                <input nz-input [disabled]=\"!cek_edit(index)\" [(ngModel)]=\"item.npwp\" />\r\n                                            </td>\r\n                                        </tr>\r\n                                        <tr>\r\n                                            <td>NIK</td>\r\n                                            <td>\r\n                                                <input nz-input [disabled]=\"!cek_edit(index)\" [(ngModel)]=\"item.nik\" />\r\n                                            </td>\r\n                                        </tr>\r\n                                        <tr>\r\n                                            <td>Alamat</td>\r\n                                            <td>\r\n                                                <input nz-input [disabled]=\"!cek_edit(index)\"\r\n                                                    [(ngModel)]=\"item.alamat\" />\r\n                                            </td>\r\n                                        </tr>\r\n                                        <tr>\r\n                                            <td>Jenis Kelamin</td>\r\n                                            <td>\r\n                                                <input nz-input [disabled]=\"!cek_edit(index)\"\r\n                                                    [(ngModel)]=\"item.jenis_kelamin\" />\r\n                                            </td>\r\n                                        </tr>\r\n                                        <tr>\r\n                                            <td>Kode Negara</td>\r\n                                            <td>\r\n                                                <input nz-input [disabled]=\"!cek_edit(index)\"\r\n                                                    [(ngModel)]=\"item.kode_negara\" />\r\n                                            </td>\r\n                                        </tr>\r\n\r\n                                    </table>\r\n\r\n                                </div>\r\n\r\n                                <div class=\"col-md-6\">\r\n\r\n                                    <table class=\"table\">\r\n\r\n                                        <tr>\r\n                                            <td>Masa Periode</td>\r\n                                            <td>\r\n                                                {{item.masa_perolehan_awal}} ~ {{item.masa_periode_akhir}}\r\n                                                ({{item.masa_pajak}})\r\n                                            </td>\r\n                                        </tr>\r\n                                        <tr>\r\n                                            <td>PTKP</td>\r\n                                            <td>\r\n                                                <input nz-input [disabled]=\"!cek_edit(index)\" [(ngModel)]=\"item.ptkp\" />\r\n                                            </td>\r\n                                        </tr>\r\n                                        <tr>\r\n                                            <td>Status PTKP</td>\r\n                                            <td>\r\n                                                <input [disabled]=\"!cek_edit(index)\" nz-input\r\n                                                    [(ngModel)]=\"item.status_ptkp\" />\r\n                                            </td>\r\n                                        </tr>\r\n                                        <tr>\r\n                                            <td>Tanggungan</td>\r\n                                            <td>\r\n                                                <input nz-input [disabled]=\"!cek_edit(index)\"\r\n                                                    [(ngModel)]=\"item.jumlah_tangungan\" />\r\n                                            </td>\r\n                                        </tr>\r\n                                        <tr>\r\n                                            <td>Nama Jabatan</td>\r\n                                            <td>\r\n                                                <input nz-input [disabled]=\"!cek_edit(index)\"\r\n                                                    [(ngModel)]=\"item.nama_jabatan\" />\r\n                                            </td>\r\n                                        </tr>\r\n                                        <tr>\r\n                                            <td>Karyawan Asing</td>\r\n                                            <td>\r\n                                                <input nz-input [disabled]=\"!cek_edit(index)\"\r\n                                                    [(ngModel)]=\"item.wp_luar_negri\" />\r\n                                            </td>\r\n                                        </tr>\r\n\r\n                                    </table>\r\n\r\n                                </div>\r\n\r\n                                <!-- KOMPONEN Gaji -->\r\n\r\n                                <div class=\"col-md-6\">\r\n                                    <table class=\"table\">\r\n\r\n                                        <tr>\r\n                                            <td colspan=\"2\"><b>Penghasilan Bruto</b></td>\r\n                                        </tr>\r\n                                        <tr>\r\n                                            <td>1. Gaji/Pensiun atau THT/JHT ({{item.gaji_01 | currency: 'Rp' }})</td>\r\n                                            <td>\r\n                                                <input [disabled]=\"!cek_edit(index)\" nz-input\r\n                                                    [(ngModel)]=\"item.gaji_01\" />\r\n                                            </td>\r\n                                        </tr>\r\n                                        <tr>\r\n                                            <td>2. Tunjangan PPh ({{item.tunjangan_pph_02 | currency: 'Rp' }})</td>\r\n                                            <td>\r\n                                                <input disabled type=\"number\" nz-input\r\n                                                    [(ngModel)]=\"item.tunjangan_pph_02\" />\r\n                                            </td>\r\n                                        </tr>\r\n                                        <tr>\r\n                                            <td>3. Tunjangan Lainnya, Uang Lembur, dan sebagainya\r\n                                                ({{item.tunjangan_lain_03 | currency: 'Rp' }})</td>\r\n                                            <td>\r\n                                                <input [disabled]=\"!cek_edit(index)\" nz-input\r\n                                                    [(ngModel)]=\"item.tunjangan_lain_03\" />\r\n                                            </td>\r\n                                        </tr>\r\n                                        <tr>\r\n                                            <td>4. Honorarium dan Imbalan Lainnya Sejenisnya\r\n                                                ({{item.honorium_04 | currency: 'Rp' }})</td>\r\n                                            <td>\r\n                                                <input [disabled]=\"!cek_edit(index)\" nz-input\r\n                                                    [(ngModel)]=\"item.honorium_04\" />\r\n                                            </td>\r\n                                        </tr>\r\n                                        <tr>\r\n                                            <td>5. Premi Asuransi yang dibayar Pemberi\r\n                                                Kerja({{item.premi_asuransi_05 | currency: 'Rp' }})</td>\r\n                                            <td>\r\n                                                <input [disabled]=\"!cek_edit(index)\" nz-input\r\n                                                    [(ngModel)]=\"item.premi_asuransi_05\" />\r\n                                            </td>\r\n                                        </tr>\r\n                                        <tr>\r\n                                            <td>6. Natura dan Kenikmatan Lainnya({{item.natuna_06 | currency: 'Rp' }})\r\n                                            </td>\r\n                                            <td>\r\n                                                <input [disabled]=\"!cek_edit(index)\" nz-input\r\n                                                    [(ngModel)]=\"item.natuna_06\" />\r\n                                            </td>\r\n                                        </tr>\r\n                                        <tr>\r\n                                            <td>7. Tantiem, Bonus, Gratifikasi, Jasa Produksi dan\r\n                                                THR({{item.bonus_thr_07 | currency: 'Rp' }})</td>\r\n                                            <td>\r\n                                                <input [disabled]=\"!cek_edit(index)\" nz-input\r\n                                                    [(ngModel)]=\"item.bonus_thr_07\" />\r\n                                            </td>\r\n                                        </tr>\r\n                                        <tr>\r\n                                            <td>8. Penghasilan Bruto </td>\r\n                                            <td>\r\n                                                {{( item.gaji_01 + item.tunjangan_pph_02 + item.tunjangan_lain_03 + item.honorium_04 + item.premi_asuransi_05 + item.natuna_06 + item.bonus_thr_07 ) | currency: 'Rp' }}\r\n                                            </td>\r\n                                        </tr>\r\n                                        <tr>\r\n                                            <td colspan=\"2\"><b>Pengurang</b></td>\r\n                                        </tr>\r\n                                        <tr>\r\n                                            <td>9. Biaya Jabatan</td>\r\n                                            <td>\r\n                                                {{item.biaya_jabatan_09 | currency: 'Rp' }}\r\n                                            </td>\r\n                                        </tr>\r\n                                        <tr>\r\n                                            <td>10. Iuran Pensiun atau Iuran\r\n                                                THT/JHT({{item.iuran_pensiun_10 | currency: 'Rp' }})</td>\r\n                                            <td>\r\n                                                <input [disabled]=\"!cek_edit(index)\" nz-input\r\n                                                    [(ngModel)]=\"item.iuran_pensiun_10\" />\r\n                                            </td>\r\n                                        </tr>\r\n                                        <tr>\r\n                                            <td>11. Jumlah Pengurang </td>\r\n                                            <td>\r\n                                                {{( item.biaya_jabatan_09 + item.iuran_pensiun_10) | currency: 'Rp' }}\r\n                                            </td>\r\n                                        </tr>\r\n\r\n                                    </table>\r\n\r\n                                </div>\r\n\r\n                                <!-- //total -->\r\n\r\n                                <div class=\"col-md-6\">\r\n                                    <table class=\"table\">\r\n\r\n                                        <tr>\r\n                                            <td colspan=\"2\"><b>Penghitungan Pph pasal 21</b></td>\r\n                                        </tr>\r\n                                        <tr>\r\n                                            <td>12. Penghasilan Netto </td>\r\n                                            <td>\r\n                                                ({{item.netto | currency: 'Rp' }})\r\n                                            </td>\r\n                                        </tr>\r\n                                        <tr>\r\n                                            <td>13. Masa Sebelumnya ({{item.masa_sebelumnya | currency: 'Rp' }})</td>\r\n                                            <td>\r\n                                                <input disabled type=\"number\" nz-input\r\n                                                    [(ngModel)]=\"item.masa_sebelumnya\" />\r\n                                            </td>\r\n                                        </tr>\r\n                                        <tr>\r\n                                            <td>14. Netto disetahunkan </td>\r\n                                            <td>\r\n                                                ({{item.netto_u_pph | currency: 'Rp' }})\r\n                                            </td>\r\n                                        </tr>\r\n                                        <tr>\r\n                                            <td>15. Pengasilan Tidak kena Pajak </td>\r\n                                            <td>\r\n                                                ({{item.ptkp | currency: 'Rp' }})\r\n                                            </td>\r\n                                        </tr>\r\n                                        <tr>\r\n                                            <td>16. Pengasilan kena Pajak </td>\r\n                                            <td>\r\n                                                ({{item.pkp | currency: 'Rp' }})\r\n                                            </td>\r\n                                        </tr>\r\n                                        <tr>\r\n                                            <td>17. Pph 21 </td>\r\n                                            <td>\r\n                                                ({{item.pph | currency: 'Rp' }})\r\n                                            </td>\r\n                                        </tr>\r\n                                        <tr>\r\n                                            <td>18. Pph 21 yang telah di potong sebelumnya </td>\r\n                                            <td>\r\n                                                ({{item.masa_sebelumnya | currency: 'Rp' }})\r\n                                            </td>\r\n                                        </tr>\r\n                                        <tr>\r\n                                            <td>19. Pph 21 yang terutang </td>\r\n                                            <td>\r\n                                                ({{item.pph_terutang | currency: 'Rp' }})\r\n                                            </td>\r\n                                        </tr>\r\n                                        <tr>\r\n                                            <td>20. Pph 21 yang Dipotong dan Dilunasi</td>\r\n                                            <td>\r\n                                                ({{item.pph_dipotong_dilunasi | currency: 'Rp' }})\r\n                                            </td>\r\n                                        </tr>\r\n                                    </table>\r\n                                </div>\r\n\r\n                            </div>\r\n\r\n\r\n\r\n                        </div>\r\n\r\n                    </div>\r\n\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/hr/payroll/laporan/tahunan/rekap/tahap/tahap.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/hr/payroll/laporan/tahunan/rekap/tahap/tahap.component.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"current==0\" style=\"width: 900px;\">\r\n    <div nz-col nzSpan=\"5\">\r\n        <nz-form-label>recapitalisation process</nz-form-label>\r\n    </div>\r\n    <div nz-col nzSpan=\"8\">\r\n        <input nz-input placeholder=\"Pembetulan\" [(ngModel)]=\"pembetulan\" (ngModelChange)=\"ngModelChange()\" />\r\n    </div>\r\n</div>\r\n\r\n<nz-steps [nzCurrent]=\"current\">\r\n    <nz-step nzTitle=\"Periode\"></nz-step>\r\n    <nz-step nzTitle=\"Formula\"></nz-step>\r\n    <nz-step nzTitle=\"Finishing\"></nz-step>\r\n</nz-steps>\r\n\r\n\r\n\r\n<div class=\"steps-content\">\r\n\r\n    <div *ngIf=\"current==0\">\r\n        <nz-form-label>Select Period</nz-form-label>\r\n        <nz-year-picker [nzFormat]=\"'yyyy'\" [(ngModel)]=\"periode\" (ngModelChange)=\"ngModelChange()\"></nz-year-picker>\r\n    </div>\r\n\r\n    <div *ngIf=\"current==1\">\r\n        <app-tahap-template></app-tahap-template>\r\n    </div>\r\n\r\n\r\n    <div *ngIf=\"current==2\">\r\n        <app-tahap-confirm></app-tahap-confirm>\r\n    </div>\r\n\r\n\r\n</div>\r\n<div class=\"steps-action\">\r\n    <button nz-button nzType=\"default\" (click)=\"pre()\" *ngIf=\"current > 0\">\r\n        <span>Previous</span>\r\n    </button>\r\n    <button nz-button nzType=\"default\" (click)=\"next()\" *ngIf=\"current < 2\">\r\n        <span>Next</span>\r\n    </button>\r\n    <button nz-button nzType=\"primary\" (click)=\"done()\" *ngIf=\"current === 2\">\r\n        <span>Done</span>\r\n    </button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/hr/payroll/laporan/bulanan/rekap/rekap-routing.module.ts":
/*!********************************************************************************!*\
  !*** ./src/app/pages/hr/payroll/laporan/bulanan/rekap/rekap-routing.module.ts ***!
  \********************************************************************************/
/*! exports provided: RekapRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RekapRoutingModule", function() { return RekapRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _tahap_tahap_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tahap/tahap.component */ "./src/app/pages/hr/payroll/laporan/bulanan/rekap/tahap/tahap.component.ts");




var routes = [
    {
        path: '',
        redirectTo: 'tahap'
    },
    {
        path: 'tahap',
        component: _tahap_tahap_component__WEBPACK_IMPORTED_MODULE_3__["TahapComponent"]
    }
];
var RekapRoutingModule = /** @class */ (function () {
    function RekapRoutingModule() {
    }
    RekapRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], RekapRoutingModule);
    return RekapRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/hr/payroll/laporan/bulanan/rekap/rekap.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/pages/hr/payroll/laporan/bulanan/rekap/rekap.module.ts ***!
  \************************************************************************/
/*! exports provided: RekapModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RekapModule", function() { return RekapModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _rekap_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rekap-routing.module */ "./src/app/pages/hr/payroll/laporan/bulanan/rekap/rekap-routing.module.ts");
/* harmony import */ var _tahap_template_tahap_template_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tahap-template/tahap-template.component */ "./src/app/pages/hr/payroll/laporan/bulanan/rekap/tahap-template/tahap-template.component.ts");
/* harmony import */ var _tahap_confirm_tahap_confirm_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tahap-confirm/tahap-confirm.component */ "./src/app/pages/hr/payroll/laporan/bulanan/rekap/tahap-confirm/tahap-confirm.component.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _tahap_tahap_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tahap/tahap.component */ "./src/app/pages/hr/payroll/laporan/bulanan/rekap/tahap/tahap.component.ts");









var RekapModule = /** @class */ (function () {
    function RekapModule() {
    }
    RekapModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_tahap_tahap_component__WEBPACK_IMPORTED_MODULE_8__["TahapComponent"], _tahap_template_tahap_template_component__WEBPACK_IMPORTED_MODULE_4__["TahapTemplateComponent"], _tahap_confirm_tahap_confirm_component__WEBPACK_IMPORTED_MODULE_5__["TahapConfirmComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _rekap_routing_module__WEBPACK_IMPORTED_MODULE_3__["RekapRoutingModule"],
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__["NzStepsModule"],
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__["NzSelectModule"],
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__["NgZorroAntdModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__["NzPopconfirmModule"]
            ]
        })
    ], RekapModule);
    return RekapModule;
}());



/***/ }),

/***/ "./src/app/pages/hr/payroll/laporan/bulanan/rekap/tahap-confirm/tahap-confirm.component.scss":
/*!***************************************************************************************************!*\
  !*** ./src/app/pages/hr/payroll/laporan/bulanan/rekap/tahap-confirm/tahap-confirm.component.scss ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hyL3BheXJvbGwvbGFwb3Jhbi9idWxhbmFuL3Jla2FwL3RhaGFwLWNvbmZpcm0vdGFoYXAtY29uZmlybS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/hr/payroll/laporan/bulanan/rekap/tahap-confirm/tahap-confirm.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/pages/hr/payroll/laporan/bulanan/rekap/tahap-confirm/tahap-confirm.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: TahapConfirmComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TahapConfirmComponent", function() { return TahapConfirmComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _tahap_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tahap.service */ "./src/app/pages/hr/payroll/laporan/bulanan/rekap/tahap.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var src_app_sdk_payroll_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/sdk/payroll/services */ "./src/app/sdk/payroll/services.ts");
/* harmony import */ var src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/tool/pesan.service */ "./src/app/services/tool/pesan.service.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");







var TahapConfirmComponent = /** @class */ (function () {
    function TahapConfirmComponent(tahapService, spinner, payrollPayrollRekapService, pesan, notification) {
        this.tahapService = tahapService;
        this.spinner = spinner;
        this.payrollPayrollRekapService = payrollPayrollRekapService;
        this.pesan = pesan;
        this.notification = notification;
        this.periode = new Date();
        this.pembetulan = '';
        this.is_confirm = false;
    }
    TahapConfirmComponent.prototype.ngOnInit = function () {
        this.periode = this.tahapService.periode;
        this.pembetulan = this.tahapService.pembetulan;
        this.tahapService.next.next(false);
    };
    TahapConfirmComponent.prototype.confirm = function () {
        var _this = this;
        var param = {
            masa_pajak: this.periode.getMonth() + 1,
            tahun_pajak: this.periode.getFullYear(),
            pembetulan: this.pembetulan,
            confirm: true
        };
        this.payrollPayrollRekapService.putPayrollPayrollRekapBulanansId({ id: 'confirm', body: param }).subscribe(function (data) {
            _this.spinner.hide();
            _this.is_confirm = true;
            _this.tahapService.next.next(true);
        });
    };
    TahapConfirmComponent.ctorParameters = function () { return [
        { type: _tahap_service__WEBPACK_IMPORTED_MODULE_2__["TahapService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"] },
        { type: src_app_sdk_payroll_services__WEBPACK_IMPORTED_MODULE_4__["PayrollPayrollRekapBulananService"] },
        { type: src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_5__["PesanService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__["NzNotificationService"] }
    ]; };
    TahapConfirmComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tahap-confirm',
            template: __webpack_require__(/*! raw-loader!./tahap-confirm.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/hr/payroll/laporan/bulanan/rekap/tahap-confirm/tahap-confirm.component.html"),
            styles: [__webpack_require__(/*! ./tahap-confirm.component.scss */ "./src/app/pages/hr/payroll/laporan/bulanan/rekap/tahap-confirm/tahap-confirm.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_tahap_service__WEBPACK_IMPORTED_MODULE_2__["TahapService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"],
            src_app_sdk_payroll_services__WEBPACK_IMPORTED_MODULE_4__["PayrollPayrollRekapBulananService"],
            src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_5__["PesanService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__["NzNotificationService"]])
    ], TahapConfirmComponent);
    return TahapConfirmComponent;
}());



/***/ }),

/***/ "./src/app/pages/hr/payroll/laporan/bulanan/rekap/tahap-template/tahap-template.component.scss":
/*!*****************************************************************************************************!*\
  !*** ./src/app/pages/hr/payroll/laporan/bulanan/rekap/tahap-template/tahap-template.component.scss ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hyL3BheXJvbGwvbGFwb3Jhbi9idWxhbmFuL3Jla2FwL3RhaGFwLXRlbXBsYXRlL3RhaGFwLXRlbXBsYXRlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/hr/payroll/laporan/bulanan/rekap/tahap-template/tahap-template.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/pages/hr/payroll/laporan/bulanan/rekap/tahap-template/tahap-template.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: TahapTemplateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TahapTemplateComponent", function() { return TahapTemplateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _tahap_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tahap.service */ "./src/app/pages/hr/payroll/laporan/bulanan/rekap/tahap.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var src_app_sdk_payroll_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/sdk/payroll/services */ "./src/app/sdk/payroll/services.ts");
/* harmony import */ var src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/tool/pesan.service */ "./src/app/services/tool/pesan.service.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/sdk/hr/services */ "./src/app/sdk/hr/services.ts");








var TahapTemplateComponent = /** @class */ (function () {
    function TahapTemplateComponent(tahapService, spinner, payrollPayrollRekapService, pesan, kantorService, notification) {
        this.tahapService = tahapService;
        this.spinner = spinner;
        this.payrollPayrollRekapService = payrollPayrollRekapService;
        this.pesan = pesan;
        this.kantorService = kantorService;
        this.notification = notification;
        this.periode = new Date();
        this.pembetulan = '';
        this.listData = [];
        this.is_edit = [];
        this.is_on_update = false;
        this.listProsess = [];
    }
    TahapTemplateComponent.prototype.ngOnInit = function () {
        this.periode = this.tahapService.periode;
        this.pembetulan = this.tahapService.pembetulan;
        this.getRekap();
    };
    TahapTemplateComponent.prototype.getRekap = function (reload) {
        var _this = this;
        if (reload === void 0) { reload = false; }
        this.tahapService.next.next(true);
        this.is_edit = [];
        this.listData = [];
        var param = {
            tahun_pajak: this.periode.getFullYear(),
            masa_pajak: this.periode.getMonth() + 1,
            pembetulan: this.pembetulan,
            reload: reload
        };
        this.payrollPayrollRekapService.postPayrollPayrollRekapBulanans(param).subscribe(function (data) {
            var datas = data.data;
            datas.forEach(function (item, index) {
                var l = item;
                l.nomor_bukti_potong = "1.1-" + (item['masa_pajak']) + "." + ((_this.periode.toString()).substring(2, 4)) + "-" + (index + 1).toString().padStart(7, "0");
                _this.listData.push(l);
                _this.is_edit.push({
                    id_payroll_rekap_bulanan: item.id_payroll_rekap_bulanan,
                    is_edit: false
                });
            });
            _this.spinner.hide();
        });
    };
    TahapTemplateComponent.prototype.togleUpdate = function (id_payroll_rekap_bulanan) {
        var _this = this;
        this.is_edit.forEach(function (item, index) {
            if (item.id_payroll_rekap_bulanan == id_payroll_rekap_bulanan) {
                _this.is_edit[index].is_edit = true;
            }
            else {
                _this.is_edit[index].is_edit = false;
            }
        });
    };
    TahapTemplateComponent.prototype.cek_edit = function (index) {
        return this.is_edit[index].is_edit;
    };
    TahapTemplateComponent.prototype.updateDate = function (item) {
        var _this = this;
        this.spinner.show();
        this.payrollPayrollRekapService.putPayrollPayrollRekapBulanansId({ id: 'update', body: item }).subscribe(function (data) {
            _this.spinner.hide();
            _this.getRekap();
        });
    };
    TahapTemplateComponent.prototype.prosessRekap = function () {
        var _this = this;
        this.listProsess = [];
        this.is_edit.forEach(function (element) {
            if (element.id_payroll_rekap_bulanan) {
                _this.prosessRekapOneByOne(element.id_payroll_rekap_bulanan);
            }
            else {
                _this.listProsess.push(1);
            }
        });
    };
    TahapTemplateComponent.prototype.prosessRekapOneByOne = function (id_payroll_rekap_bulanan, action) {
        var _this = this;
        if (action === void 0) { action = true; }
        this.spinner.show();
        var params = {
            id_payroll_rekap_bulanan: id_payroll_rekap_bulanan,
        };
        this.payrollPayrollRekapService.putPayrollPayrollRekapBulanansId({ id: "proses", body: params }).subscribe(function (data) {
            if (action == true) {
                _this.listProsess.push(1);
                console.log(_this.listProsess.length);
                if (_this.listProsess.length == _this.is_edit.length) {
                    _this.spinner.hide();
                    _this.notification.create('success', 'Berhasil di proses', 'semua komponen berhasil di prosess');
                    _this.getRekap();
                }
            }
            else {
                _this.spinner.hide();
                _this.getRekap();
            }
        }, function (error) {
            // this.spinner.hide();
            // alert('error pada ' + error)
            _this.notification.create('warning', 'Gagal di proses', error.message);
            // this.getRekap()
            _this.listProsess.push(1);
            if (_this.listProsess.length == _this.is_edit.length) {
                _this.spinner.hide();
                _this.getRekap();
            }
        });
    };
    TahapTemplateComponent.ctorParameters = function () { return [
        { type: _tahap_service__WEBPACK_IMPORTED_MODULE_2__["TahapService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"] },
        { type: src_app_sdk_payroll_services__WEBPACK_IMPORTED_MODULE_4__["PayrollPayrollRekapBulananService"] },
        { type: src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_5__["PesanService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_7__["CompanyKantorService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__["NzNotificationService"] }
    ]; };
    TahapTemplateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tahap-template',
            template: __webpack_require__(/*! raw-loader!./tahap-template.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/hr/payroll/laporan/bulanan/rekap/tahap-template/tahap-template.component.html"),
            styles: [__webpack_require__(/*! ./tahap-template.component.scss */ "./src/app/pages/hr/payroll/laporan/bulanan/rekap/tahap-template/tahap-template.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_tahap_service__WEBPACK_IMPORTED_MODULE_2__["TahapService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"],
            src_app_sdk_payroll_services__WEBPACK_IMPORTED_MODULE_4__["PayrollPayrollRekapBulananService"],
            src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_5__["PesanService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_7__["CompanyKantorService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__["NzNotificationService"]])
    ], TahapTemplateComponent);
    return TahapTemplateComponent;
}());



/***/ }),

/***/ "./src/app/pages/hr/payroll/laporan/bulanan/rekap/tahap.service.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/hr/payroll/laporan/bulanan/rekap/tahap.service.ts ***!
  \*************************************************************************/
/*! exports provided: TahapService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TahapService", function() { return TahapService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var TahapService = /** @class */ (function () {
    function TahapService() {
        this.periode = new Date();
        this.next = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](true);
        this.pembetulan = "0";
    }
    TahapService.prototype.getNext = function () {
        return this.next.asObservable();
    };
    TahapService.prototype.getNamaBonus = function () {
        return this.pembetulan;
    };
    TahapService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TahapService);
    return TahapService;
}());



/***/ }),

/***/ "./src/app/pages/hr/payroll/laporan/bulanan/rekap/tahap/tahap.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/hr/payroll/laporan/bulanan/rekap/tahap/tahap.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".steps-content {\n  margin-top: 16px;\n  border: 1px dashed #e9e9e9;\n  border-radius: 6px;\n  background-color: #fafafa;\n  min-height: 200px;\n  text-align: center;\n  padding-top: 10px;\n}\n\n.steps-action {\n  margin-top: 24px;\n}\n\nbutton {\n  margin-right: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaHIvcGF5cm9sbC9sYXBvcmFuL2J1bGFuYW4vcmVrYXAvdGFoYXAvRTpcXFBST0pFS1xcREVSQVpPTkFcXGRldmV0ZWstZXJwL3NyY1xcYXBwXFxwYWdlc1xcaHJcXHBheXJvbGxcXGxhcG9yYW5cXGJ1bGFuYW5cXHJla2FwXFx0YWhhcFxcdGFoYXAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2hyL3BheXJvbGwvbGFwb3Jhbi9idWxhbmFuL3Jla2FwL3RhaGFwL3RhaGFwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURFQTtFQUNJLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxpQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaHIvcGF5cm9sbC9sYXBvcmFuL2J1bGFuYW4vcmVrYXAvdGFoYXAvdGFoYXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3RlcHMtY29udGVudCB7XHJcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xyXG4gICAgYm9yZGVyOiAxcHggZGFzaGVkICNlOWU5ZTk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xyXG4gICAgbWluLWhlaWdodDogMjAwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxufVxyXG5cclxuLnN0ZXBzLWFjdGlvbiB7XHJcbiAgICBtYXJnaW4tdG9wOiAyNHB4O1xyXG59XHJcblxyXG5idXR0b24ge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbn0iLCIuc3RlcHMtY29udGVudCB7XG4gIG1hcmdpbi10b3A6IDE2cHg7XG4gIGJvcmRlcjogMXB4IGRhc2hlZCAjZTllOWU5O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XG4gIG1pbi1oZWlnaHQ6IDIwMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xufVxuXG4uc3RlcHMtYWN0aW9uIHtcbiAgbWFyZ2luLXRvcDogMjRweDtcbn1cblxuYnV0dG9uIHtcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/hr/payroll/laporan/bulanan/rekap/tahap/tahap.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/hr/payroll/laporan/bulanan/rekap/tahap/tahap.component.ts ***!
  \*********************************************************************************/
/*! exports provided: TahapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TahapComponent", function() { return TahapComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/tool/pesan.service */ "./src/app/services/tool/pesan.service.ts");
/* harmony import */ var _tahap_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../tahap.service */ "./src/app/pages/hr/payroll/laporan/bulanan/rekap/tahap.service.ts");
/* harmony import */ var src_app_sdk_payroll_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/sdk/payroll/services */ "./src/app/sdk/payroll/services.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");







var TahapComponent = /** @class */ (function () {
    function TahapComponent(tahapService, payrollPayrollRekapService, router, spinner, pesan) {
        this.tahapService = tahapService;
        this.payrollPayrollRekapService = payrollPayrollRekapService;
        this.router = router;
        this.spinner = spinner;
        this.pesan = pesan;
        this.periode = new Date();
        this.pembetulan = '0';
        this.index = 'First-content';
        this.current = 0;
        this.if_next = true;
    }
    TahapComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.tahapService.periode = this.periode;
        this.tahapService.pembetulan = this.pembetulan;
        this.tahapService.getNext().subscribe(function (data) {
            _this.if_next = data;
        });
    };
    TahapComponent.prototype.ngModelChange = function () {
        this.tahapService.periode = this.periode;
        this.tahapService.pembetulan = (this.pembetulan);
        console.log(this.pembetulan);
        this.cekApakahPeriodeAvaible();
    };
    TahapComponent.prototype.cekApakahPeriodeAvaible = function () {
        var _this = this;
        this.spinner.show();
        var param = {
            tahun_pajak: this.periode.getFullYear(),
            masa_pajak: this.periode.getMonth() + 1,
            cek_data: this.periode,
            pembetulan: this.pembetulan
        };
        this.payrollPayrollRekapService.getPayrollPayrollRekapBulanans(JSON.stringify(param)).subscribe(function (data) {
            _this.spinner.hide();
            if (data.data['total'] > 0) {
                _this.pesan.pesanWarningForm('Periode ini sudah digunakan, gunakan tanggal Lain');
                _this.if_next = false;
            }
            else {
                _this.if_next = true;
                console.log(_this.if_next);
            }
        }, function (err) {
            _this.spinner.hide();
        });
    };
    TahapComponent.prototype.pre = function () {
        this.if_next = true;
        this.current -= 1;
        this.changeContent();
    };
    TahapComponent.prototype.next = function () {
        var _this = this;
        if (this.current == 0) {
            this.spinner.show();
            var param = {
                tahun_pajak: this.periode.getFullYear(),
                masa_pajak: this.periode.getMonth() + 1,
                cek_data: this.periode,
                pembetulan: this.pembetulan
            };
            this.payrollPayrollRekapService.getPayrollPayrollRekapBulanans(JSON.stringify(param)).subscribe(function (data) {
                console.log(data.data);
                _this.spinner.hide();
                if (data.data['total'] > 0) {
                    _this.pesan.pesanWarningForm('Periode ini sudah digunakan, gunakan tanggal Lain');
                    _this.if_next = false;
                    return false;
                }
                else {
                    _this.if_next = true;
                    _this.current += 1;
                    _this.changeContent();
                }
            }, function (err) {
                _this.spinner.hide();
            });
        }
        else {
            if (this.if_next) {
                this.current += 1;
                this.changeContent();
            }
            else {
                this.pesan.pesanWarningForm('mohon selesaikan tahap ini!');
            }
        }
    };
    TahapComponent.prototype.done = function () {
        if (this.if_next) {
            this.current += 1;
            this.router.navigate(['/hr/payroll/module/laporan/bulanan/list']);
        }
        else {
            this.pesan.pesanWarningForm('mohon selesaikan tahap ini!');
        }
    };
    TahapComponent.prototype.changeContent = function () {
        switch (this.current) {
            case 0: {
                this.index = 'First-content';
                break;
            }
            case 1: {
                this.index = 'Second-content';
                break;
            }
            case 2: {
                this.index = 'third-content';
                break;
            }
            default: {
                this.index = 'error';
            }
        }
    };
    TahapComponent.ctorParameters = function () { return [
        { type: _tahap_service__WEBPACK_IMPORTED_MODULE_4__["TahapService"] },
        { type: src_app_sdk_payroll_services__WEBPACK_IMPORTED_MODULE_5__["PayrollPayrollRekapBulananService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"] },
        { type: src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_3__["PesanService"] }
    ]; };
    TahapComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tahap',
            template: __webpack_require__(/*! raw-loader!./tahap.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/hr/payroll/laporan/bulanan/rekap/tahap/tahap.component.html"),
            styles: [__webpack_require__(/*! ./tahap.component.scss */ "./src/app/pages/hr/payroll/laporan/bulanan/rekap/tahap/tahap.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_tahap_service__WEBPACK_IMPORTED_MODULE_4__["TahapService"],
            src_app_sdk_payroll_services__WEBPACK_IMPORTED_MODULE_5__["PayrollPayrollRekapBulananService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"],
            src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_3__["PesanService"]])
    ], TahapComponent);
    return TahapComponent;
}());



/***/ }),

/***/ "./src/app/pages/hr/payroll/laporan/tahunan/rekap/rekap-routing.module.ts":
/*!********************************************************************************!*\
  !*** ./src/app/pages/hr/payroll/laporan/tahunan/rekap/rekap-routing.module.ts ***!
  \********************************************************************************/
/*! exports provided: RekapRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RekapRoutingModule", function() { return RekapRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _tahap_tahap_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tahap/tahap.component */ "./src/app/pages/hr/payroll/laporan/tahunan/rekap/tahap/tahap.component.ts");




var routes = [
    {
        path: '',
        redirectTo: 'tahap'
    },
    {
        path: 'tahap',
        component: _tahap_tahap_component__WEBPACK_IMPORTED_MODULE_3__["TahapComponent"]
    }
];
var RekapRoutingModule = /** @class */ (function () {
    function RekapRoutingModule() {
    }
    RekapRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], RekapRoutingModule);
    return RekapRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/hr/payroll/laporan/tahunan/rekap/rekap.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/pages/hr/payroll/laporan/tahunan/rekap/rekap.module.ts ***!
  \************************************************************************/
/*! exports provided: RekapModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RekapModule", function() { return RekapModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _rekap_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rekap-routing.module */ "./src/app/pages/hr/payroll/laporan/tahunan/rekap/rekap-routing.module.ts");
/* harmony import */ var _tahap_tahap_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tahap/tahap.component */ "./src/app/pages/hr/payroll/laporan/tahunan/rekap/tahap/tahap.component.ts");
/* harmony import */ var _tahap_template_tahap_template_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tahap-template/tahap-template.component */ "./src/app/pages/hr/payroll/laporan/tahunan/rekap/tahap-template/tahap-template.component.ts");
/* harmony import */ var _tahap_confirm_tahap_confirm_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tahap-confirm/tahap-confirm.component */ "./src/app/pages/hr/payroll/laporan/tahunan/rekap/tahap-confirm/tahap-confirm.component.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _tahap_komponen_tahap_komponen_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./tahap-komponen/tahap-komponen.component */ "./src/app/pages/hr/payroll/laporan/tahunan/rekap/tahap-komponen/tahap-komponen.component.ts");
/* harmony import */ var _tahap_review_tahap_review_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./tahap-review/tahap-review.component */ "./src/app/pages/hr/payroll/laporan/tahunan/rekap/tahap-review/tahap-review.component.ts");











var RekapModule = /** @class */ (function () {
    function RekapModule() {
    }
    RekapModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_tahap_tahap_component__WEBPACK_IMPORTED_MODULE_4__["TahapComponent"], _tahap_template_tahap_template_component__WEBPACK_IMPORTED_MODULE_5__["TahapTemplateComponent"], _tahap_komponen_tahap_komponen_component__WEBPACK_IMPORTED_MODULE_9__["TahapKomponenComponent"], _tahap_review_tahap_review_component__WEBPACK_IMPORTED_MODULE_10__["TahapReviewComponent"], _tahap_confirm_tahap_confirm_component__WEBPACK_IMPORTED_MODULE_6__["TahapConfirmComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _rekap_routing_module__WEBPACK_IMPORTED_MODULE_3__["RekapRoutingModule"],
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__["NzStepsModule"],
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__["NzSelectModule"],
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__["NgZorroAntdModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__["NzPopconfirmModule"]
            ]
        })
    ], RekapModule);
    return RekapModule;
}());



/***/ }),

/***/ "./src/app/pages/hr/payroll/laporan/tahunan/rekap/tahap-confirm/tahap-confirm.component.scss":
/*!***************************************************************************************************!*\
  !*** ./src/app/pages/hr/payroll/laporan/tahunan/rekap/tahap-confirm/tahap-confirm.component.scss ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hyL3BheXJvbGwvbGFwb3Jhbi90YWh1bmFuL3Jla2FwL3RhaGFwLWNvbmZpcm0vdGFoYXAtY29uZmlybS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/hr/payroll/laporan/tahunan/rekap/tahap-confirm/tahap-confirm.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/pages/hr/payroll/laporan/tahunan/rekap/tahap-confirm/tahap-confirm.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: TahapConfirmComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TahapConfirmComponent", function() { return TahapConfirmComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _tahap_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tahap.service */ "./src/app/pages/hr/payroll/laporan/tahunan/rekap/tahap.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var src_app_sdk_payroll_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/sdk/payroll/services */ "./src/app/sdk/payroll/services.ts");
/* harmony import */ var src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/tool/pesan.service */ "./src/app/services/tool/pesan.service.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");







var TahapConfirmComponent = /** @class */ (function () {
    function TahapConfirmComponent(tahapService, spinner, payrollPayrollRekapService, pesan, notification) {
        this.tahapService = tahapService;
        this.spinner = spinner;
        this.payrollPayrollRekapService = payrollPayrollRekapService;
        this.pesan = pesan;
        this.notification = notification;
        this.periode = 0;
        this.pembetulan = '';
        this.is_confirm = false;
    }
    TahapConfirmComponent.prototype.ngOnInit = function () {
        this.periode = this.tahapService.periode;
        this.pembetulan = this.tahapService.pembetulan;
        this.tahapService.next.next(false);
    };
    TahapConfirmComponent.prototype.confirm = function () {
        var _this = this;
        var param = {
            periode: this.periode,
            pembetulan: this.pembetulan,
            confirm: true
        };
        this.payrollPayrollRekapService.putPayrollPayrollRekapsId({ id: 'confirm', body: param }).subscribe(function (data) {
            _this.spinner.hide();
            _this.is_confirm = true;
            _this.tahapService.next.next(true);
        });
    };
    TahapConfirmComponent.ctorParameters = function () { return [
        { type: _tahap_service__WEBPACK_IMPORTED_MODULE_2__["TahapService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"] },
        { type: src_app_sdk_payroll_services__WEBPACK_IMPORTED_MODULE_4__["PayrollPayrollRekapService"] },
        { type: src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_5__["PesanService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__["NzNotificationService"] }
    ]; };
    TahapConfirmComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tahap-confirm',
            template: __webpack_require__(/*! raw-loader!./tahap-confirm.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/hr/payroll/laporan/tahunan/rekap/tahap-confirm/tahap-confirm.component.html"),
            styles: [__webpack_require__(/*! ./tahap-confirm.component.scss */ "./src/app/pages/hr/payroll/laporan/tahunan/rekap/tahap-confirm/tahap-confirm.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_tahap_service__WEBPACK_IMPORTED_MODULE_2__["TahapService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"],
            src_app_sdk_payroll_services__WEBPACK_IMPORTED_MODULE_4__["PayrollPayrollRekapService"],
            src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_5__["PesanService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__["NzNotificationService"]])
    ], TahapConfirmComponent);
    return TahapConfirmComponent;
}());



/***/ }),

/***/ "./src/app/pages/hr/payroll/laporan/tahunan/rekap/tahap-komponen/tahap-komponen.component.scss":
/*!*****************************************************************************************************!*\
  !*** ./src/app/pages/hr/payroll/laporan/tahunan/rekap/tahap-komponen/tahap-komponen.component.scss ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hyL3BheXJvbGwvbGFwb3Jhbi90YWh1bmFuL3Jla2FwL3RhaGFwLWtvbXBvbmVuL3RhaGFwLWtvbXBvbmVuLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/hr/payroll/laporan/tahunan/rekap/tahap-komponen/tahap-komponen.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/pages/hr/payroll/laporan/tahunan/rekap/tahap-komponen/tahap-komponen.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: TahapKomponenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TahapKomponenComponent", function() { return TahapKomponenComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _tahap_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tahap.service */ "./src/app/pages/hr/payroll/laporan/tahunan/rekap/tahap.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var src_app_sdk_payroll_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/sdk/payroll/services */ "./src/app/sdk/payroll/services.ts");
/* harmony import */ var src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/tool/pesan.service */ "./src/app/services/tool/pesan.service.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");







var TahapKomponenComponent = /** @class */ (function () {
    function TahapKomponenComponent(tahapService, spinner, payrollTemplateKomponenService, pesan, notification) {
        this.tahapService = tahapService;
        this.spinner = spinner;
        this.payrollTemplateKomponenService = payrollTemplateKomponenService;
        this.pesan = pesan;
        this.notification = notification;
        this.periode = 0;
        this.listData = [];
        this.listDataKomponen = [];
        this.cek_status = true;
        this.listProsess = [];
    }
    TahapKomponenComponent.prototype.ngOnInit = function () {
        this.periode = this.tahapService.periode;
        this.getRekap();
        this.tahapService.next.next(false);
    };
    TahapKomponenComponent.prototype.getRekap = function (reload) {
        var _this = this;
        if (reload === void 0) { reload = false; }
        this.cek_status = true;
        var param = {
            periode: this.periode,
            for_module: 'bonus',
            reload: reload
        };
        this.payrollTemplateKomponenService.postPayrollTemplateKomponens(param).subscribe(function (data) {
            var datas = data.data['pegawai'];
            _this.listDataKomponen = data.data['komponen'];
            var komponens = data.data['komponen'];
            datas.forEach(function (item, index) {
                var id_pegawai = item.id_pegawai;
                var cek = komponens.filter(function (kom) {
                    if (kom.id_pegawai == id_pegawai) {
                        return true;
                    }
                    if (kom.nilai_akhir == null && kom.id_template != null) {
                        _this.cek_status = false;
                    }
                });
                datas[index]['item'] = cek;
            });
            _this.listData = datas;
            _this.spinner.hide();
            console.log(_this.cek_status);
            if (!_this.cek_status) {
                _this.tahapService.next.next(false);
            }
            else {
                _this.tahapService.next.next(true);
            }
        });
    };
    TahapKomponenComponent.prototype.prosessRekap = function () {
        var _this = this;
        this.listProsess = [];
        this.spinner.show();
        this.listDataKomponen.forEach(function (element) {
            if (element.id_template) {
                _this.prosessRekapOneByOne(element.id_template, element.id_pegawai, true);
            }
            else {
                _this.listProsess.push(1);
            }
        });
    };
    TahapKomponenComponent.prototype.prosessRekapOneByOne = function (id_template, id_pegawai, action) {
        var _this = this;
        if (action === void 0) { action = false; }
        var params = {
            periode: this.periode,
            for_module: 'bonus',
            id_pegawai: id_pegawai,
        };
        this.payrollTemplateKomponenService.putPayrollTemplateKomponensId({ id: id_template, body: params }).subscribe(function (data) {
            if (action == true) {
                _this.listProsess.push(1);
                console.log(_this.listProsess.length);
                console.log('xx' + _this.listDataKomponen);
                if (_this.listProsess.length == _this.listDataKomponen.length) {
                    _this.spinner.hide();
                    _this.notification.create('success', 'Berhasil di proses', 'semua komponen berhasil di prosess');
                    _this.getRekap();
                }
            }
            else {
                _this.spinner.hide();
                _this.getRekap();
            }
        }, function (error) {
            // this.spinner.hide();
            // alert('error pada ' + error)
            _this.notification.create('warning', 'Gagal di proses', error.message);
            // this.getRekap()
            _this.listProsess.push(1);
            if (_this.listProsess.length == _this.listDataKomponen.length) {
                _this.spinner.hide();
                _this.getRekap();
            }
        });
    };
    TahapKomponenComponent.ctorParameters = function () { return [
        { type: _tahap_service__WEBPACK_IMPORTED_MODULE_2__["TahapService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"] },
        { type: src_app_sdk_payroll_services__WEBPACK_IMPORTED_MODULE_4__["PayrollTemplateKomponenService"] },
        { type: src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_5__["PesanService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__["NzNotificationService"] }
    ]; };
    TahapKomponenComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tahap-komponen',
            template: __webpack_require__(/*! raw-loader!./tahap-komponen.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/hr/payroll/laporan/tahunan/rekap/tahap-komponen/tahap-komponen.component.html"),
            styles: [__webpack_require__(/*! ./tahap-komponen.component.scss */ "./src/app/pages/hr/payroll/laporan/tahunan/rekap/tahap-komponen/tahap-komponen.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_tahap_service__WEBPACK_IMPORTED_MODULE_2__["TahapService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"],
            src_app_sdk_payroll_services__WEBPACK_IMPORTED_MODULE_4__["PayrollTemplateKomponenService"],
            src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_5__["PesanService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__["NzNotificationService"]])
    ], TahapKomponenComponent);
    return TahapKomponenComponent;
}());



/***/ }),

/***/ "./src/app/pages/hr/payroll/laporan/tahunan/rekap/tahap-review/tahap-review.component.scss":
/*!*************************************************************************************************!*\
  !*** ./src/app/pages/hr/payroll/laporan/tahunan/rekap/tahap-review/tahap-review.component.scss ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hyL3BheXJvbGwvbGFwb3Jhbi90YWh1bmFuL3Jla2FwL3RhaGFwLXJldmlldy90YWhhcC1yZXZpZXcuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/hr/payroll/laporan/tahunan/rekap/tahap-review/tahap-review.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/pages/hr/payroll/laporan/tahunan/rekap/tahap-review/tahap-review.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: TahapReviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TahapReviewComponent", function() { return TahapReviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _tahap_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tahap.service */ "./src/app/pages/hr/payroll/laporan/tahunan/rekap/tahap.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var src_app_sdk_payroll_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/sdk/payroll/services */ "./src/app/sdk/payroll/services.ts");
/* harmony import */ var src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/tool/pesan.service */ "./src/app/services/tool/pesan.service.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");







var TahapReviewComponent = /** @class */ (function () {
    function TahapReviewComponent(tahapService, spinner, payrollPegawaiBonusService, pesan, notification) {
        this.tahapService = tahapService;
        this.spinner = spinner;
        this.payrollPegawaiBonusService = payrollPegawaiBonusService;
        this.pesan = pesan;
        this.notification = notification;
        this.periode = 0;
        this.listData = [];
        this.rekap = [];
        this.cek_status = true;
        this.listProsess = [];
        this.visible = false;
    }
    TahapReviewComponent.prototype.ngOnInit = function () {
        this.periode = this.tahapService.periode;
        this.getRekap();
        this.tahapService.next.next(false);
    };
    TahapReviewComponent.prototype.getRekap = function () {
        var _this = this;
        this.cek_status = true;
        this.spinner.show();
        var param = {
            periode: this.periode,
        };
        this.payrollPegawaiBonusService.getPayrollPegawaiBonuses(JSON.stringify(param)).subscribe(function (data) {
            var datas = data.data;
            _this.listData = datas.list;
            _this.rekap = datas.rekap;
            _this.spinner.hide();
            _this.listData.forEach(function (item) {
                if (item.bersih == null) {
                    _this.cek_status = false;
                }
            });
            console.log(_this.cek_status);
            if (!_this.cek_status) {
                _this.tahapService.next.next(false);
            }
            else {
                _this.tahapService.next.next(true);
            }
        });
    };
    TahapReviewComponent.prototype.prosessRekap = function () {
        var _this = this;
        this.listProsess = [];
        this.spinner.show();
        this.listData.forEach(function (element) {
            _this.prosessRekapOneByOne(element.id_pegawai_bonus, true);
        });
    };
    TahapReviewComponent.prototype.prosessRekapOneByOne = function (id_pegawai_bonus, action) {
        var _this = this;
        if (action === void 0) { action = false; }
        var params = {
            periode: this.periode,
            id_pegawai_bonus: id_pegawai_bonus,
        };
        this.spinner.show();
        this.payrollPegawaiBonusService.putPayrollPegawaiBonusesId({ id: id_pegawai_bonus, body: params }).subscribe(function (data) {
            if (action == true) {
                _this.listProsess.push(1);
                console.log(_this.listProsess.length);
                console.log('xx' + _this.listData);
                if (_this.listProsess.length == _this.listData.length) {
                    _this.spinner.hide();
                    _this.notification.create('success', 'Berhasil di proses', 'semua komponen berhasil di prosess');
                    _this.getRekap();
                }
            }
            else {
                _this.spinner.hide();
                _this.getRekap();
            }
        }, function (error) {
            // this.spinner.hide();
            // alert('error pada ' + error)
            _this.notification.create('warning', 'Gagal di proses', error.message);
            // this.getRekap()
            _this.listProsess.push(1);
            if (_this.listProsess.length == _this.listData.length) {
                _this.spinner.hide();
                _this.getRekap();
            }
        });
    };
    TahapReviewComponent.prototype.viewDetail = function (id_pegawai_bonus) {
        this.visible = true;
    };
    TahapReviewComponent.prototype.close = function () {
        this.visible = false;
    };
    TahapReviewComponent.ctorParameters = function () { return [
        { type: _tahap_service__WEBPACK_IMPORTED_MODULE_2__["TahapService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"] },
        { type: src_app_sdk_payroll_services__WEBPACK_IMPORTED_MODULE_4__["PayrollPegawaiBonusService"] },
        { type: src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_5__["PesanService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__["NzNotificationService"] }
    ]; };
    TahapReviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tahap-review',
            template: __webpack_require__(/*! raw-loader!./tahap-review.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/hr/payroll/laporan/tahunan/rekap/tahap-review/tahap-review.component.html"),
            styles: [__webpack_require__(/*! ./tahap-review.component.scss */ "./src/app/pages/hr/payroll/laporan/tahunan/rekap/tahap-review/tahap-review.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_tahap_service__WEBPACK_IMPORTED_MODULE_2__["TahapService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"],
            src_app_sdk_payroll_services__WEBPACK_IMPORTED_MODULE_4__["PayrollPegawaiBonusService"],
            src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_5__["PesanService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__["NzNotificationService"]])
    ], TahapReviewComponent);
    return TahapReviewComponent;
}());



/***/ }),

/***/ "./src/app/pages/hr/payroll/laporan/tahunan/rekap/tahap-template/tahap-template.component.scss":
/*!*****************************************************************************************************!*\
  !*** ./src/app/pages/hr/payroll/laporan/tahunan/rekap/tahap-template/tahap-template.component.scss ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hyL3BheXJvbGwvbGFwb3Jhbi90YWh1bmFuL3Jla2FwL3RhaGFwLXRlbXBsYXRlL3RhaGFwLXRlbXBsYXRlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/hr/payroll/laporan/tahunan/rekap/tahap-template/tahap-template.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/pages/hr/payroll/laporan/tahunan/rekap/tahap-template/tahap-template.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: TahapTemplateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TahapTemplateComponent", function() { return TahapTemplateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _tahap_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tahap.service */ "./src/app/pages/hr/payroll/laporan/tahunan/rekap/tahap.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var src_app_sdk_payroll_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/sdk/payroll/services */ "./src/app/sdk/payroll/services.ts");
/* harmony import */ var src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/tool/pesan.service */ "./src/app/services/tool/pesan.service.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/sdk/hr/services */ "./src/app/sdk/hr/services.ts");








var TahapTemplateComponent = /** @class */ (function () {
    function TahapTemplateComponent(tahapService, spinner, payrollPayrollRekapService, pesan, kantorService, notification) {
        this.tahapService = tahapService;
        this.spinner = spinner;
        this.payrollPayrollRekapService = payrollPayrollRekapService;
        this.pesan = pesan;
        this.kantorService = kantorService;
        this.notification = notification;
        this.pembetulan = '';
        this.listData = [];
        this.is_edit = [];
        this.is_on_update = false;
        this.listProsess = [];
    }
    TahapTemplateComponent.prototype.ngOnInit = function () {
        this.periode = this.tahapService.periode;
        this.pembetulan = this.tahapService.pembetulan;
        this.getRekap();
    };
    TahapTemplateComponent.prototype.getRekap = function (reload) {
        var _this = this;
        if (reload === void 0) { reload = false; }
        this.tahapService.next.next(true);
        this.is_edit = [];
        this.listData = [];
        var param = {
            periode: this.periode,
            pembetulan: this.pembetulan,
            reload: reload
        };
        this.payrollPayrollRekapService.postPayrollPayrollRekaps(param).subscribe(function (data) {
            var datas = data.data;
            datas.forEach(function (item, index) {
                var l = item;
                l.nomor_bukti_potong = "1.1-" + (item['masa_pajak']) + "." + ((_this.periode.toString()).substring(2, 4)) + "-" + (index + 1).toString().padStart(7, "0");
                _this.listData.push(l);
                _this.is_edit.push({
                    id_payroll_rekap: item.id_payroll_rekap,
                    is_edit: false
                });
                if (item.netto < 1 || _this.is_on_update) {
                    console.log(item.netto);
                    _this.is_on_update = true;
                    _this.tahapService.next.next(false);
                }
            });
            _this.spinner.hide();
        });
    };
    TahapTemplateComponent.prototype.togleUpdate = function (id_payroll_rekap) {
        var _this = this;
        this.is_edit.forEach(function (item, index) {
            if (item.id_payroll_rekap == id_payroll_rekap) {
                _this.is_edit[index].is_edit = true;
            }
            else {
                _this.is_edit[index].is_edit = false;
            }
        });
    };
    TahapTemplateComponent.prototype.cek_edit = function (index) {
        return this.is_edit[index].is_edit;
    };
    TahapTemplateComponent.prototype.updateDate = function (item) {
        var _this = this;
        this.spinner.show();
        this.payrollPayrollRekapService.putPayrollPayrollRekapsId({ id: 'update', body: item }).subscribe(function (data) {
            _this.spinner.hide();
            _this.is_on_update = true;
            _this.getRekap();
        });
    };
    TahapTemplateComponent.prototype.prosessRekap = function () {
        var _this = this;
        this.listProsess = [];
        this.is_edit.forEach(function (element) {
            if (element.id_payroll_rekap) {
                _this.prosessRekapOneByOne(element.id_payroll_rekap);
            }
            else {
                _this.listProsess.push(1);
            }
        });
    };
    TahapTemplateComponent.prototype.prosessRekapOneByOne = function (id_payroll_rekap, action) {
        var _this = this;
        if (action === void 0) { action = true; }
        this.spinner.show();
        var params = {
            id_payroll_rekap: id_payroll_rekap,
        };
        this.payrollPayrollRekapService.putPayrollPayrollRekapsId({ id: "proses", body: params }).subscribe(function (data) {
            if (action == true) {
                _this.listProsess.push(1);
                console.log(_this.listProsess.length);
                if (_this.listProsess.length == _this.is_edit.length) {
                    _this.spinner.hide();
                    _this.notification.create('success', 'Berhasil di proses', 'semua komponen berhasil di prosess');
                    _this.getRekap();
                }
            }
            else {
                _this.spinner.hide();
                _this.getRekap();
            }
        }, function (error) {
            // this.spinner.hide();
            // alert('error pada ' + error)
            _this.notification.create('warning', 'Gagal di proses', error.message);
            // this.getRekap()
            _this.listProsess.push(1);
            if (_this.listProsess.length == _this.is_edit.length) {
                _this.spinner.hide();
                _this.getRekap();
            }
        });
    };
    TahapTemplateComponent.ctorParameters = function () { return [
        { type: _tahap_service__WEBPACK_IMPORTED_MODULE_2__["TahapService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"] },
        { type: src_app_sdk_payroll_services__WEBPACK_IMPORTED_MODULE_4__["PayrollPayrollRekapService"] },
        { type: src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_5__["PesanService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_7__["CompanyKantorService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__["NzNotificationService"] }
    ]; };
    TahapTemplateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tahap-template',
            template: __webpack_require__(/*! raw-loader!./tahap-template.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/hr/payroll/laporan/tahunan/rekap/tahap-template/tahap-template.component.html"),
            styles: [__webpack_require__(/*! ./tahap-template.component.scss */ "./src/app/pages/hr/payroll/laporan/tahunan/rekap/tahap-template/tahap-template.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_tahap_service__WEBPACK_IMPORTED_MODULE_2__["TahapService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"],
            src_app_sdk_payroll_services__WEBPACK_IMPORTED_MODULE_4__["PayrollPayrollRekapService"],
            src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_5__["PesanService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_7__["CompanyKantorService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__["NzNotificationService"]])
    ], TahapTemplateComponent);
    return TahapTemplateComponent;
}());



/***/ }),

/***/ "./src/app/pages/hr/payroll/laporan/tahunan/rekap/tahap.service.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/hr/payroll/laporan/tahunan/rekap/tahap.service.ts ***!
  \*************************************************************************/
/*! exports provided: TahapService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TahapService", function() { return TahapService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var TahapService = /** @class */ (function () {
    function TahapService() {
        this.periode = (new Date()).getFullYear();
        this.next = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](true);
        this.pembetulan = "0";
    }
    TahapService.prototype.getNext = function () {
        return this.next.asObservable();
    };
    TahapService.prototype.getNamaBonus = function () {
        return this.pembetulan;
    };
    TahapService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TahapService);
    return TahapService;
}());



/***/ }),

/***/ "./src/app/pages/hr/payroll/laporan/tahunan/rekap/tahap/tahap.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/hr/payroll/laporan/tahunan/rekap/tahap/tahap.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".steps-content {\n  margin-top: 16px;\n  border: 1px dashed #e9e9e9;\n  border-radius: 6px;\n  background-color: #fafafa;\n  min-height: 200px;\n  text-align: center;\n  padding-top: 10px;\n}\n\n.steps-action {\n  margin-top: 24px;\n}\n\nbutton {\n  margin-right: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaHIvcGF5cm9sbC9sYXBvcmFuL3RhaHVuYW4vcmVrYXAvdGFoYXAvRTpcXFBST0pFS1xcREVSQVpPTkFcXGRldmV0ZWstZXJwL3NyY1xcYXBwXFxwYWdlc1xcaHJcXHBheXJvbGxcXGxhcG9yYW5cXHRhaHVuYW5cXHJla2FwXFx0YWhhcFxcdGFoYXAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2hyL3BheXJvbGwvbGFwb3Jhbi90YWh1bmFuL3Jla2FwL3RhaGFwL3RhaGFwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURFQTtFQUNJLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxpQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaHIvcGF5cm9sbC9sYXBvcmFuL3RhaHVuYW4vcmVrYXAvdGFoYXAvdGFoYXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3RlcHMtY29udGVudCB7XHJcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xyXG4gICAgYm9yZGVyOiAxcHggZGFzaGVkICNlOWU5ZTk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xyXG4gICAgbWluLWhlaWdodDogMjAwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxufVxyXG5cclxuLnN0ZXBzLWFjdGlvbiB7XHJcbiAgICBtYXJnaW4tdG9wOiAyNHB4O1xyXG59XHJcblxyXG5idXR0b24ge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbn0iLCIuc3RlcHMtY29udGVudCB7XG4gIG1hcmdpbi10b3A6IDE2cHg7XG4gIGJvcmRlcjogMXB4IGRhc2hlZCAjZTllOWU5O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XG4gIG1pbi1oZWlnaHQ6IDIwMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xufVxuXG4uc3RlcHMtYWN0aW9uIHtcbiAgbWFyZ2luLXRvcDogMjRweDtcbn1cblxuYnV0dG9uIHtcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/hr/payroll/laporan/tahunan/rekap/tahap/tahap.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/hr/payroll/laporan/tahunan/rekap/tahap/tahap.component.ts ***!
  \*********************************************************************************/
/*! exports provided: TahapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TahapComponent", function() { return TahapComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/tool/pesan.service */ "./src/app/services/tool/pesan.service.ts");
/* harmony import */ var _tahap_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../tahap.service */ "./src/app/pages/hr/payroll/laporan/tahunan/rekap/tahap.service.ts");
/* harmony import */ var src_app_sdk_payroll_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/sdk/payroll/services */ "./src/app/sdk/payroll/services.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");







var TahapComponent = /** @class */ (function () {
    function TahapComponent(tahapService, payrollPayrollRekapService, router, spinner, pesan) {
        this.tahapService = tahapService;
        this.payrollPayrollRekapService = payrollPayrollRekapService;
        this.router = router;
        this.spinner = spinner;
        this.pesan = pesan;
        this.periode = new Date();
        this.pembetulan = '0';
        this.index = 'First-content';
        this.current = 0;
        this.if_next = true;
    }
    TahapComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.tahapService.periode = this.periode.getFullYear();
        this.tahapService.pembetulan = this.pembetulan;
        this.tahapService.getNext().subscribe(function (data) {
            _this.if_next = data;
        });
    };
    TahapComponent.prototype.ngModelChange = function () {
        this.tahapService.periode = this.periode.getFullYear();
        this.tahapService.pembetulan = (this.pembetulan);
        this.cekApakahPeriodeAvaible();
    };
    TahapComponent.prototype.cekApakahPeriodeAvaible = function () {
        var _this = this;
        this.spinner.show();
        var param = {
            periode: this.periode.getFullYear(),
            cek_data: this.periode,
            pembetulan: this.pembetulan
        };
        this.payrollPayrollRekapService.getPayrollPayrollRekaps(JSON.stringify(param)).subscribe(function (data) {
            _this.spinner.hide();
            if (data.data['total'] > 0) {
                _this.pesan.pesanWarningForm('Periode ini sudah digunakan, gunakan tanggal Lain');
                _this.if_next = false;
            }
            else {
                _this.if_next = true;
                console.log(_this.if_next);
            }
        }, function (err) {
            _this.spinner.hide();
        });
    };
    TahapComponent.prototype.pre = function () {
        this.if_next = true;
        this.current -= 1;
        this.changeContent();
    };
    TahapComponent.prototype.next = function () {
        var _this = this;
        if (this.current == 0) {
            this.spinner.show();
            var param = {
                periode: this.periode.getFullYear(),
                cek_data: this.periode,
                pembetulan: this.pembetulan
            };
            this.payrollPayrollRekapService.getPayrollPayrollRekaps(JSON.stringify(param)).subscribe(function (data) {
                console.log(data.data);
                _this.spinner.hide();
                if (data.data['total'] > 0) {
                    _this.pesan.pesanWarningForm('Periode ini sudah digunakan, gunakan tanggal Lain');
                    _this.if_next = false;
                    return false;
                }
                else {
                    _this.if_next = true;
                    _this.current += 1;
                    _this.changeContent();
                }
            }, function (err) {
                _this.spinner.hide();
            });
        }
        else {
            if (this.if_next) {
                this.current += 1;
                this.changeContent();
            }
            else {
                this.pesan.pesanWarningForm('mohon selesaikan tahap ini!');
            }
        }
    };
    TahapComponent.prototype.done = function () {
        if (this.if_next) {
            this.current += 1;
            this.router.navigate(['/hr/payroll/module/laporan/tahunan/list']);
        }
        else {
            this.pesan.pesanWarningForm('mohon selesaikan tahap ini!');
        }
    };
    TahapComponent.prototype.changeContent = function () {
        switch (this.current) {
            case 0: {
                this.index = 'First-content';
                break;
            }
            case 1: {
                this.index = 'Second-content';
                break;
            }
            case 2: {
                this.index = 'third-content';
                break;
            }
            default: {
                this.index = 'error';
            }
        }
    };
    TahapComponent.ctorParameters = function () { return [
        { type: _tahap_service__WEBPACK_IMPORTED_MODULE_4__["TahapService"] },
        { type: src_app_sdk_payroll_services__WEBPACK_IMPORTED_MODULE_5__["PayrollPayrollRekapService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"] },
        { type: src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_3__["PesanService"] }
    ]; };
    TahapComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tahap',
            template: __webpack_require__(/*! raw-loader!./tahap.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/hr/payroll/laporan/tahunan/rekap/tahap/tahap.component.html"),
            styles: [__webpack_require__(/*! ./tahap.component.scss */ "./src/app/pages/hr/payroll/laporan/tahunan/rekap/tahap/tahap.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_tahap_service__WEBPACK_IMPORTED_MODULE_4__["TahapService"],
            src_app_sdk_payroll_services__WEBPACK_IMPORTED_MODULE_5__["PayrollPayrollRekapService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"],
            src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_3__["PesanService"]])
    ], TahapComponent);
    return TahapComponent;
}());



/***/ })

}]);
//# sourceMappingURL=rekap-rekap-module.js.map