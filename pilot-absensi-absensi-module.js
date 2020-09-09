(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pilot-absensi-absensi-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/hr/kalender/pilot/absensi/detail/detail.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/hr/kalender/pilot/absensi/detail/detail.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br />\r\n<br />\r\n<nz-table #basicTable [nzData]=\"listParameter\" [nzFrontPagination]=\"false\">\r\n    <thead>\r\n        <tr>\r\n            <th>Paremeter</th>\r\n            <th *ngFor=\"let item of listJadwakType\" nzWidth=\"200px\">{{item.jam_masuk | date}}</th>\r\n        </tr>\r\n    </thead>\r\n    <tbody>\r\n\r\n        <tr *ngFor=\"let data of basicTable.data\">\r\n            <td>{{ data.val }} </td>\r\n            <td *ngFor=\"let item of listJadwakType\">\r\n\r\n                <label *ngIf=\"data.key=='status_jadwal'\" nz-checkbox [(ngModel)]=\"item.status_jadwal\"\r\n                    (ngModelChange)=\"updateDetailJadwal(item.id_jadwal_pegawai,item)\">{{item.hari}} </label>\r\n\r\n                <label *ngIf=\"data.key=='extra_duty'\" nz-checkbox [(ngModel)]=\"item.extra_duty\"\r\n                    (ngModelChange)=\"updateDetailJadwalDetail(item.id_jadwal_pegawai,item)\">{{item.extra_duty==true ? 'Yes' : 'No'}}\r\n                </label>\r\n\r\n                <nz-select *ngIf=\"data.key=='extra_duty_vanue' && item.extra_duty\" [(ngModel)]=\"item.extra_duty_vanue\"\r\n                    nzAllowClear nzPlaceHolder=\"Choose\"\r\n                    (ngModelChange)=\"updateDetailJadwalDetail(item.id_jadwal_pegawai,item)\">\r\n                    <nz-option nzValue=\"ya\" nzLabel=\"Yes\"></nz-option>\r\n                    <nz-option nzValue=\"tidak\" nzLabel=\"No\"></nz-option>\r\n                </nz-select>\r\n\r\n\r\n                <nz-input-group *ngIf=\"data.key=='jam_masuk'\" nzAddOnBefore=\"\">\r\n                    <nz-time-picker [nzDisabled]=\"!item.status_jadwal\" [(ngModel)]=\"item.jam_masuk\" nzFormat=\"HH:mm\"\r\n                        (ngModelChange)=\"updateDetailJadwal(item.id_jadwal_pegawai,item)\"></nz-time-picker>\r\n                </nz-input-group>\r\n\r\n                <nz-input-group *ngIf=\"data.key=='lama_kerja'\" nzAddOnAfter=\"H\">\r\n                    <nz-input-number [nzDisabled]=\"!item.status_jadwal\" [(ngModel)]=\"item.lama_kerja\"\r\n                        (ngModelChange)=\"updateDetailJadwal(item.id_jadwal_pegawai,item)\" [nzMin]=\"1\" [nzStep]=\"1\">\r\n                    </nz-input-number>\r\n                </nz-input-group>\r\n\r\n\r\n                <nz-input-group *ngIf=\"data.key=='lama_istirahat'\" nzAddOnAfter=\"m\">\r\n                    <input nz-input [disabled]=\"!item.status_jadwal\" [(ngModel)]=\"item.lama_istirahat\"\r\n                        (ngModelChange)=\"updateDetailJadwal(item.id_jadwal_pegawai,item)\" />\r\n                </nz-input-group>\r\n\r\n\r\n                <nz-input-group *ngIf=\"data.key=='toleransi_telat'\" nzAddOnAfter=\"m\">\r\n                    <input nz-input [disabled]=\"!item.status_jadwal\" [(ngModel)]=\"item.toleransi_telat\"\r\n                        (ngModelChange)=\"updateDetailJadwal(item.id_jadwal_pegawai,item)\" />\r\n                </nz-input-group>\r\n\r\n                <nz-input-group *ngIf=\"data.key=='toleransi_cabut'\" nzAddOnAfter=\"m\">\r\n                    <input nz-input [disabled]=\"!item.status_jadwal\" [(ngModel)]=\"item.toleransi_cabut\"\r\n                        (ngModelChange)=\"updateDetailJadwal(item.id_jadwal_pegawai,item)\" />\r\n                </nz-input-group>\r\n\r\n                <!-- aircraft -->\r\n                <nz-select [nzDisabled]=\"!item.status_jadwal\" style=\"width: 100%;\" *ngIf=\"data.key=='warna'\"\r\n                    [(ngModel)]=\"item.warna\" nzAllowClear nzPlaceHolder=\"Choose\"\r\n                    (ngModelChange)=\"updateDetailJadwalDetail(item.id_jadwal_pegawai,item)\">\r\n                    <nz-option *ngFor=\"let item of listWarna\" [nzValue]=\"item.color\" [nzLabel]=\"item.warna\"></nz-option>\r\n                </nz-select>\r\n\r\n                <nz-select [nzDisabled]=\"!item.status_jadwal\" style=\"width: 100%;\" *ngIf=\"data.key=='id_ron_kode'\"\r\n                    [(ngModel)]=\"item.id_ron_kode\" nzAllowClear nzPlaceHolder=\"Choose\"\r\n                    (ngModelChange)=\"updateDetailJadwalDetail(item.id_jadwal_pegawai,item)\">\r\n                    <nz-option *ngFor=\"let item of ron\" [nzValue]=\"item.id_ron\" [nzLabel]=\"item.ron\"></nz-option>\r\n                </nz-select>\r\n\r\n                <nz-select [nzDisabled]=\"!item.status_jadwal\" style=\"width: 100%;\" *ngIf=\"data.key=='id_aircraft'\"\r\n                    [(ngModel)]=\"item.id_aircraft\" nzAllowClear nzPlaceHolder=\"Choose\"\r\n                    (ngModelChange)=\"updateDetailJadwalDetail(item.id_jadwal_pegawai,item)\">\r\n                    <nz-option *ngFor=\"let item of aircraft\" [nzValue]=\"item.id_aircraft\" [nzLabel]=\"item.sn\">\r\n                    </nz-option>\r\n                </nz-select>\r\n\r\n                <nz-input-group *ngIf=\"data.key=='rencana_terbang'\" nzAddOnAfter=\"H\">\r\n                    <nz-input-number [nzDisabled]=\"!item.status_jadwal\" [(ngModel)]=\"item.rencana_terbang\"\r\n                        (ngModelChange)=\"updateDetailJadwalDetail(item.id_jadwal_pegawai,item)\" [nzMin]=\"1\"\r\n                        [nzStep]=\"1\">\r\n                    </nz-input-number>\r\n                </nz-input-group>\r\n\r\n                <textarea [disabled]=\"!item.status_jadwal\" *ngIf=\"data.key=='keterangan'\" nz-input\r\n                    [(ngModel)]=\"item.keterangan\"\r\n                    (ngModelChange)=\"updateDetailJadwalDetail(item.id_jadwal_pegawai,item)\"\r\n                    [nzAutosize]=\"{ minRows: 2, maxRows: 6 }\"></textarea>\r\n\r\n            </td>\r\n        </tr>\r\n\r\n    </tbody>\r\n</nz-table>\r\n\r\n<button nzType=\"primary\" (click)=\"close()\" nz-button>Close</button>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/hr/kalender/pilot/absensi/list/list.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/hr/kalender/pilot/absensi/list/list.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"air__utils__heading card-header-flex\">\r\n        <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n            <h5 class=\"mb-0\">ON Duty {{type}} {{bulan}}/{{tahun}}</h5>\r\n        </div>\r\n        <div class=\"d-flex flex-column justify-content-center\">\r\n\r\n            <nz-month-picker [(ngModel)]=\"hari_ini\" (ngModelChange)=\"onChange($event)\" nzPlaceHolder=\"Select month\">\r\n            </nz-month-picker>\r\n\r\n        </div>\r\n    </div>\r\n\r\n\r\n\r\n    <nz-table #nestedTable nzBordered [nzData]=\"listData\" [nzPageSize]=\"10\">\r\n        <thead>\r\n            <tr>\r\n                <th>Nama</th>\r\n                <th>NIK</th>\r\n                <th>Rekap</th>\r\n                <th *ngFor=\"let item of jumlah_hari\">{{item}}</th>\r\n            </tr>\r\n        </thead>\r\n\r\n        <tbody>\r\n            <ng-template ngFor let-data [ngForOf]=\"nestedTable.data\">\r\n                <tr>\r\n                    <td>\r\n                        <a nz-dropdown nzTrigger=\"click\" [nzDropdownMenu]=\"menu\">\r\n                            {{data.nama_depan}} {{data.nama_belakang}}\r\n                        </a>\r\n                        <nz-dropdown-menu #menu=\"nzDropdownMenu\">\r\n                            <ul nz-menu nzSelectable>\r\n                                <li nz-menu-item\r\n                                    [routerLink]=\"['/hr/direktori/employee/pegawai-detail',data.id_pegawai]\">\r\n                                    Detail\r\n                                    Pegawai\r\n                                </li>\r\n                                <li nz-menu-item>\r\n                                    <a target=\"_blank\"\r\n                                        href=\"#/hr/direktori/employee/pegawai-detail/{{data.id_pegawai}}/pengaturan-absensi/view\">Absensi</a>\r\n                                </li>\r\n\r\n                            </ul>\r\n                        </nz-dropdown-menu>\r\n                    </td>\r\n                    <td>{{data.no_induk}}</td>\r\n                    <td>{{data['item'].total_schedule}}</td>\r\n                    <!-- <td colspan=\"30\" [hidden]=\"data['item'].length < 1\">Absensi belum di atur</td> -->\r\n                    <td *ngFor=\"let item of jumlah_hari\" [hidden]=\"data['item'].length < 1\"\r\n                        [ngStyle]=\"{ 'cursor': 'pointer', 'background-color': data['item']['tgl'+ item +'_warna'] , 'border-bottom': (data['item']['tgl'+ item +'_extra_duty']=='ya' ? '3px solid blue':'1px solid #e8e8e8') }\">\r\n\r\n                        <a nz-dropdown nzTrigger=\"click\" [nzDropdownMenu]=\"menu2\">\r\n                            <span\r\n                                *ngIf='data[\"item\"][\"tgl\"+ item +\"_ron_code\"]'>{{data[\"item\"][\"tgl\"+ item +\"_ron_code\"]}}</span>\r\n                            <span *ngIf='!data[\"item\"][\"tgl\"+ item +\"_ron_code\"]'>-</span>\r\n                        </a>\r\n                        <nz-dropdown-menu #menu2=\"nzDropdownMenu\">\r\n                            <ul nz-menu nzSelectable>\r\n                                <li nz-menu-item *ngIf=\"!data['item']['tgl'+ item +'_id_jadwal_pegawai']\">\r\n                                    <a\r\n                                        href=\"#/hr/direktori/employee/pegawai-detail/{{data.id_pegawai}}/pengaturan-absensi/view\">Setting\r\n                                        Jadwal</a>\r\n                                </li>\r\n\r\n                                <li *ngIf=\"data['item']['tgl'+ item +'_id_jadwal_pegawai']\" nz-menu-item\r\n                                    (click)=\"getDetail(data['item']['tgl'+ item +'_id_jadwal_pegawai'])\">\r\n                                    <i nz-icon nzType=\"form\" nzTheme=\"outline\"></i> Update Jadwal\r\n                                </li>\r\n\r\n\r\n                                <li *ngIf='data[\"item\"][\"tgl\"+ item +\"_id_jadwal_pegawai\"]' nz-menu-item\r\n                                    (click)=\"verifikasi(data['item']['tgl'+ item +'_id_jadwal_pegawai'])\"> <i nz-icon\r\n                                        nzType=\"check\" nzTheme=\"outline\"></i> Verifikasi</li>\r\n\r\n                            </ul>\r\n                        </nz-dropdown-menu>\r\n                    </td>\r\n\r\n                </tr>\r\n\r\n                <!-- # Extra Duty -->\r\n                <tr class=\"expan\">\r\n                    <td></td>\r\n                    <td>Extra Duty</td>\r\n                    <td>{{data['item'].total_extra_duty}}</td>\r\n                    <td *ngFor=\"let item of jumlah_hari\">\r\n                        <!-- [ngStyle]=\"{ 'cursor': 'pointer', 'background-color': (data['item']['tgl'+ item +'_id_pegawai_ron_pay'] ? 'blue': '#fff' ) }\"> -->\r\n\r\n\r\n                        <span class=\"\" *ngIf='data[\"item\"][\"tgl\"+ item +\"_extra_duty\"]==\"ya\"'><i nz-icon nzType=\"check\"\r\n                                nzTheme=\"outline\"></i></span>\r\n\r\n                    </td>\r\n                </tr>\r\n\r\n                <!-- # Pay -->\r\n                <tr [nzExpand]=\"data.item\" class=\"expan\">\r\n                    <td></td>\r\n                    <td>Verifikasi</td>\r\n                    <td>{{data['item'].total_verifikasi}}</td>\r\n                    <td *ngFor=\"let item of jumlah_hari\">\r\n                        <!-- [ngStyle]=\"{ 'cursor': 'pointer', 'background-color': (data['item']['tgl'+ item +'_id_pegawai_ron_pay'] ? 'blue': '#fff' ) }\"> -->\r\n\r\n\r\n                        <span class=\"\" *ngIf='data[\"item\"][\"tgl\"+ item +\"_id_pegawai_ron_pay\"]'><i nz-icon\r\n                                nzType=\"check\" nzTheme=\"outline\"></i></span>\r\n\r\n                    </td>\r\n                </tr>\r\n\r\n                <!-- # PC -->\r\n                <tr [nzExpand]=\"data.item\" class=\"expan\" *ngIf=\"type=='hash_pilot'\">\r\n                    <td></td>\r\n                    <td>PC</td>\r\n                    <td>\r\n                        <b class=\"sub-td\">\r\n                            <i>{{data[\"item\"]['total_pc']}}</i>\r\n                        </b>\r\n                    </td>\r\n                    <td *ngFor=\"let item of jumlah_hari\">\r\n\r\n                        <span class=\"sub-td\">\r\n                            <i>{{ crop(data[\"item\"][\"tgl\"+ item +\"_jam_terbang\"],0)}}</i>\r\n                        </span>\r\n                    </td>\r\n                </tr>\r\n                <!-- # SC -->\r\n                <tr [nzExpand]=\"data.item\" class=\"expan\" *ngIf=\"type=='hash_pilot'\">\r\n                    <td></td>\r\n                    <td>SC</td>\r\n                    <td>\r\n                        <b class=\"sub-td\">\r\n                            <i>{{data[\"item\"]['total_sc']}}</i>\r\n                        </b>\r\n                    </td>\r\n                    <td *ngFor=\"let item of jumlah_hari\">\r\n\r\n                        <span class=\"sub-td\">\r\n                            <i>{{ crop(data[\"item\"][\"tgl\"+ item +\"_jam_terbang\"],1)}}</i>\r\n                        </span>\r\n                    </td>\r\n                </tr>\r\n\r\n                <!-- # EL -->\r\n                <tr [nzExpand]=\"data.item\" class=\"expan\" *ngIf=\"type=='hash_pilot'\">\r\n                    <td></td>\r\n                    <td>EL</td>\r\n                    <td>\r\n                        <b class=\"sub-td\">\r\n                            <i>{{data[\"item\"]['total_el']}}</i>\r\n                        </b>\r\n                    </td>\r\n                    <td *ngFor=\"let item of jumlah_hari\">\r\n\r\n                        <span class=\"sub-td\">\r\n                            <i>{{ crop(data[\"item\"][\"tgl\"+ item +\"_jam_terbang\"],2)}}</i>\r\n                        </span>\r\n                    </td>\r\n                </tr>\r\n\r\n                <!-- # Othere -->\r\n                <tr [nzExpand]=\"data.item\" class=\"expan\" *ngIf=\"type=='hash_pilot'\">\r\n                    <td></td>\r\n                    <td>Othere</td>\r\n                    <td>\r\n                        <b class=\"sub-td\">\r\n                            <i>{{data[\"item\"]['total_othere']}}</i>\r\n                        </b>\r\n                    </td>\r\n                    <td *ngFor=\"let item of jumlah_hari\">\r\n\r\n                        <span class=\"sub-td\">\r\n                            <i>{{ crop(data[\"item\"][\"tgl\"+ item +\"_jam_terbang\"],3)}}</i>\r\n                        </span>\r\n                    </td>\r\n                </tr>\r\n\r\n            </ng-template>\r\n        </tbody>\r\n\r\n    </nz-table>\r\n\r\n\r\n    <!-- OLD -->\r\n    <!-- <table class=\"table table-bordered\">\r\n        <tr>\r\n            <th>No</th>\r\n            <th>Nama</th>\r\n            <th>NIK</th>\r\n            <th *ngFor=\"let item of jumlah_hari\">{{item}}</th>\r\n        </tr>\r\n\r\n        <tr *ngFor=\"let data of listData; let i =index\">\r\n            <td>{{i+1}}</td>\r\n            <td>\r\n                <a nz-dropdown [nzDropdownMenu]=\"menu\" nzPlacement=\"bottomRight\">\r\n                    {{data.nama_depan}} {{data.nama_belakang}}\r\n                </a>\r\n                <nz-dropdown-menu #menu=\"nzDropdownMenu\">\r\n                    <ul nz-menu nzSelectable>\r\n                        <li nz-menu-item [routerLink]=\"['/hr/direktori/employee/pegawai-detail',data.id_pegawai]\">Detail\r\n                            Pegawai\r\n                        </li>\r\n                        <li nz-menu-item>\r\n                            <a target=\"_blank\"\r\n                                href=\"#/hr/direktori/employee/pegawai-detail/{{data.id_pegawai}}/pengaturan-absensi/view\">Absensi</a>\r\n                        </li>\r\n\r\n                    </ul>\r\n                </nz-dropdown-menu>\r\n            </td>\r\n            <td>{{data.no_induk}}</td>\r\n            <td *ngFor=\"let item of jumlah_hari\"\r\n                [ngStyle]=\"{ 'cursor': 'pointer', 'background-color': data['item']['tgl'+ item +'_warna'] }\">\r\n\r\n<<<<<<< HEAD\r\n                <a nz-dropdown [nzDropdownMenu]=\"menu\" nzPlacement=\"bottomRight\">\r\n                    <span class=\"\" *ngIf='data[\"tgl\"+ item +\"_id_pegawai_ron_pay\"]'><i nz-icon nzType=\"check\"\r\n=======\r\n                <a nz-dropdown [nzDropdownMenu]=\"menu\">\r\n                    <span class=\"\" *ngIf='data[\"item\"][\"tgl\"+ item +\"_id_pegawai_ron_pay\"]'><i nz-icon nzType=\"check\"\r\n>>>>>>> 06a4962ae1f00304b8c86a85655b44d61a5c942a\r\n                            nzTheme=\"outline\"></i></span>\r\n\r\n                    <span *ngIf='data[\"item\"][\"tgl\"+ item +\"_ron_code\"]'>{{data[\"item\"][\"tgl\"+ item +\"_ron_code\"]}}</span>\r\n                    <span *ngIf='!data[\"item\"][\"tgl\"+ item +\"_ron_code\"]'>-</span>\r\n\r\n\r\n                    <p class=\"sub-td\" *ngFor='let jam_terbang of data[\"item\"][\"tgl\"+ item +\"_jam_terbang\"]'>\r\n                        {{jam_terbang?.type_rate | uppercase}}:{{jam_terbang?.jam_terbang}}\r\n                    </p>\r\n                </a>\r\n                <nz-dropdown-menu #menu=\"nzDropdownMenu\">\r\n                    <ul nz-menu nzSelectable>\r\n                        <li nz-menu-item (click)=\"getDetail(data['item']['tgl'+ item +'_id_jadwal_pegawai'])\"> <i nz-icon\r\n                                nzType=\"form\" nzTheme=\"outline\"></i> Update Jadwal</li>\r\n                        <li *ngIf='data[\"item\"][\"tgl\"+ item +\"_id_jadwal_pegawai\"]' nz-menu-item\r\n                            (click)=\"verifikasi(data['item']['tgl'+ item +'_id_jadwal_pegawai'])\"> <i nz-icon nzType=\"check\"\r\n                                nzTheme=\"outline\"></i> Verifikasi</li>\r\n\r\n                    </ul>\r\n                </nz-dropdown-menu>\r\n            </td>\r\n        </tr>\r\n\r\n    </table>\r\n -->\r\n\r\n\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/hr/kalender/pilot/absensi/verifikasi/verifikasi.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/hr/kalender/pilot/absensi/verifikasi/verifikasi.component.html ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4 *ngIf=\"!pengaturan.id_ron_group\" style=\"color: red;\"> Ron grou pegwai abelum di atur <a\n        [routerLink]=\"['/hr/payroll/module/pengaturan/pegawai']\">Open</a> </h4>\n\n<table class=\"table\">\n    <tr>\n        <td>Schedule Ron</td>\n        <td>{{listData?.ron?.ron}}</td>\n    </tr>\n    <tr>\n        <td>Tanggal</td>\n        <td>{{listData?.jam_masuk | date}}</td>\n    </tr>\n    <tr *ngIf=\"listData.extra_duty !='ya'\">\n        <td>autty_allow</td>\n        <td>\n            <nz-input-number style=\"width: 300px;\" [(ngModel)]=\"ron_pay.autty_allow\"></nz-input-number>\n        </td>\n        <td>\n            {{ron_pay.autty_allow | currency: 'Rp.' }}\n        </td>\n    </tr>\n    <tr>\n        <td>ovt_java</td>\n        <td>\n            <nz-input-number style=\"width: 300px;\" [(ngModel)]=\"ron_pay.ovt_java\"></nz-input-number>\n        </td>\n        <td>\n            {{ron_pay.ovt_java | currency: 'Rp.' }},\n        </td>\n    </tr>\n    <tr>\n        <td>meal</td>\n        <td>\n            <nz-input-number style=\"width: 300px;\" [(ngModel)]=\"ron_pay.meal\"></nz-input-number>\n        </td>\n        <td>\n            {{ron_pay.meal | currency: 'Rp.' }},\n        </td>\n    </tr>\n    <tr>\n        <td>hardship</td>\n        <td>\n            <nz-input-number style=\"width: 300px;\" [(ngModel)]=\"ron_pay.hardship\"></nz-input-number>\n        </td>\n        <td>\n            {{ron_pay.hardship | currency: 'Rp.' }},\n        </td>\n    </tr>\n    <tr *ngIf=\"listData.extra_duty=='ya' &&  listData.extra_duty_vanue=='ya'\">\n        <td>extra_duty</td>\n        <td>\n            <nz-input-number style=\"width: 300px;\" [(ngModel)]=\"ron_pay.extra_duty\"></nz-input-number>\n        </td>\n        <td>\n            {{ron_pay.extra_duty | currency: 'Rp.' }},\n        </td>\n    </tr>\n    <tr *ngIf=\"listData.extra_duty=='ya' &&  listData.extra_duty_vanue !='ya'\">\n        <td>Extra dutty Non Revenue</td>\n        <td>\n            <nz-input-number style=\"width: 300px;\" [(ngModel)]=\"ron_pay.o_1\"></nz-input-number>\n        </td>\n        <td>\n            {{ron_pay.o_1 | currency: 'Rp.' }},\n        </td>\n    </tr>\n    <tr>\n        <td>o_2</td>\n        <td>\n            <nz-input-number style=\"width: 300px;\" [(ngModel)]=\"ron_pay.o_2\"></nz-input-number>\n        </td>\n        <td>\n            {{ron_pay.o_2 | currency: 'Rp.' }},\n        </td>\n    </tr>\n    <tr>\n        <td>o_3</td>\n        <td>\n            <nz-input-number style=\"width: 300px;\" [(ngModel)]=\"ron_pay.o_3\"></nz-input-number>\n        </td>\n        <td>\n            {{ron_pay.o_3 | currency: 'Rp.' }},\n        </td>\n    </tr>\n</table>\n\n<b style=\"color: red;\">{{pesan_text}}*</b>\n\n<nz-skeleton *ngIf=\"is_loading_pree\"></nz-skeleton>\n\n\n<div class=\"footer\">\n    <button type=\"button\" (click)=\"close()\" class=\"ant-btn\" style=\"margin-right: 8px;\"><span>Cancel</span></button>\n    <button type=\"button\" *ngIf=\"pengaturan.id_ron_group\" class=\"ant-btn ant-btn-primary\"\n        (click)=\"simpan()\"><span>Submit</span></button>\n    <button type=\"button\" *ngIf=\"!pengaturan.id_ron_group\" class=\"ant-btn ant-btn-disable\"\n        disabled><span>Submit</span></button>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/hr/kalender/pilot/absensi/absensi-routing.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/hr/kalender/pilot/absensi/absensi-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: AbsensiRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbsensiRoutingModule", function() { return AbsensiRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list/list.component */ "./src/app/pages/hr/kalender/pilot/absensi/list/list.component.ts");




var routes = [
    {
        path: '',
        redirectTo: 'list'
    },
    {
        path: 'list/:type',
        component: _list_list_component__WEBPACK_IMPORTED_MODULE_3__["ListComponent"]
    }
];
var AbsensiRoutingModule = /** @class */ (function () {
    function AbsensiRoutingModule() {
    }
    AbsensiRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AbsensiRoutingModule);
    return AbsensiRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/hr/kalender/pilot/absensi/absensi.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/hr/kalender/pilot/absensi/absensi.module.ts ***!
  \*******************************************************************/
/*! exports provided: AbsensiModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbsensiModule", function() { return AbsensiModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _absensi_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./absensi-routing.module */ "./src/app/pages/hr/kalender/pilot/absensi/absensi-routing.module.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list/list.component */ "./src/app/pages/hr/kalender/pilot/absensi/list/list.component.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/angular-reactive-forms-helper */ "./src/app/services/angular-reactive-forms-helper.ts");
/* harmony import */ var _detail_detail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./detail/detail.component */ "./src/app/pages/hr/kalender/pilot/absensi/detail/detail.component.ts");
/* harmony import */ var _verifikasi_verifikasi_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./verifikasi/verifikasi.component */ "./src/app/pages/hr/kalender/pilot/absensi/verifikasi/verifikasi.component.ts");










var AbsensiModule = /** @class */ (function () {
    function AbsensiModule() {
    }
    AbsensiModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_list_list_component__WEBPACK_IMPORTED_MODULE_4__["ListComponent"], _detail_detail_component__WEBPACK_IMPORTED_MODULE_8__["DetailComponent"], _verifikasi_verifikasi_component__WEBPACK_IMPORTED_MODULE_9__["VerifikasiComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _absensi_routing_module__WEBPACK_IMPORTED_MODULE_3__["AbsensiRoutingModule"],
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NgZorroAntdModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzRadioModule"],
            ],
            providers: [src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_7__["FormBuilderTypeSafe"]],
            entryComponents: [_detail_detail_component__WEBPACK_IMPORTED_MODULE_8__["DetailComponent"], _verifikasi_verifikasi_component__WEBPACK_IMPORTED_MODULE_9__["VerifikasiComponent"]]
        })
    ], AbsensiModule);
    return AbsensiModule;
}());



/***/ }),

/***/ "./src/app/pages/hr/kalender/pilot/absensi/detail/detail.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/pages/hr/kalender/pilot/absensi/detail/detail.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hyL2thbGVuZGVyL3BpbG90L2Fic2Vuc2kvZGV0YWlsL2RldGFpbC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/hr/kalender/pilot/absensi/detail/detail.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/pages/hr/kalender/pilot/absensi/detail/detail.component.ts ***!
  \****************************************************************************/
/*! exports provided: DetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailComponent", function() { return DetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/tool/pesan.service */ "./src/app/services/tool/pesan.service.ts");
/* harmony import */ var src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/sdk/hr/services */ "./src/app/sdk/hr/services.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");







var DetailComponent = /** @class */ (function () {
    function DetailComponent(drawerRef, spinner, pesan, absensiJadwalPegawaiTerjadwalService, router, absensiPilotAircraftService, absensiPilotRonService, absensiPilotJadwalDetailService) {
        this.drawerRef = drawerRef;
        this.spinner = spinner;
        this.pesan = pesan;
        this.absensiJadwalPegawaiTerjadwalService = absensiJadwalPegawaiTerjadwalService;
        this.router = router;
        this.absensiPilotAircraftService = absensiPilotAircraftService;
        this.absensiPilotRonService = absensiPilotRonService;
        this.absensiPilotJadwalDetailService = absensiPilotJadwalDetailService;
        this.tahun = '';
        this.bulan = '';
        this.id_jadwal_pegawai = '';
        //Derazona khusus --------------------------------------
        this.ron = [];
        this.aircraft = [];
        //Derazona khusus --------------------------------------
        this.listJadwakType = [];
        this.numberToHari = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
        this.listWarna = [{ warna: 'WHITE	', color: '#fff' },
            { warna: 'SILVER	', color: '#C0C0C0' },
            { warna: 'GRAY	', color: '#808080' },
            { warna: 'BLACK	', color: '#000000' },
            { warna: 'RED	', color: '#FF0000' },
            { warna: 'MAROON	', color: '#800000' },
            { warna: 'YELLOW	', color: '#FFFF00' },
            { warna: 'OLIVE	', color: '#808000' },
            { warna: 'LIME	', color: '#00FF00' },
            { warna: 'GREEN	', color: '#008000' },
            { warna: 'AQUA	', color: '#00FFFF' },
            { warna: 'TEAL	', color: '#008080' },
            { warna: 'BLUE	', color: '#0000FF' },
            { warna: 'NAVY	', color: '#000080' },
            { warna: 'FUCHSIA	', color: '#FF00FF' },
            { warna: 'PURPLE	', color: '#800080' }];
        this.listParameter = [
            { key: 'status_jadwal', val: 'Status' },
            { key: 'extra_duty', val: 'Extra Duty' },
            { key: 'extra_duty_vanue', val: 'Extra Duty Vanue' },
            { key: 'jam_masuk', val: 'Masuk' },
            { key: 'lama_kerja', val: 'Kerja' },
            { key: 'lama_istirahat', val: 'Istirahat' },
            { key: 'toleransi_telat', val: 'Toleransi T' },
            { key: 'toleransi_cabut', val: 'Toleransi c' },
            { key: 'id_ron_kode', val: 'RON' },
            { key: 'rencana_terbang', val: 'Rencana terbang' },
            { key: 'warna', val: 'warna' },
            { key: 'id_aircraft', val: 'aircraft' },
            { key: 'keterangan', val: 'keterangan' }
        ];
        this.width = '0px';
    }
    DetailComponent.prototype.ngOnInit = function () {
        console.log(this.id_jadwal_pegawai);
        this.getJadwalKerja();
        this.getRon();
        this.getAircraft();
    };
    DetailComponent.prototype.getRon = function () {
        var _this = this;
        this.absensiPilotRonService.getAbsensiPilotRons().subscribe(function (data) {
            _this.ron = data.data;
        });
    };
    DetailComponent.prototype.getAircraft = function () {
        var _this = this;
        this.absensiPilotAircraftService.getAbsensiPilotAircrafts().subscribe(function (data) {
            _this.aircraft = data.data;
        });
    };
    DetailComponent.prototype.close = function () {
        this.drawerRef.close(true);
    };
    DetailComponent.prototype.getJadwalKerja = function () {
        var _this = this;
        // this.spinner.show()
        var query = {
            id_jadwal_pegawai: this.id_jadwal_pegawai
        };
        this.absensiJadwalPegawaiTerjadwalService.getAbsensiJadwalPegawaiTerjadwals(JSON.stringify(query)).subscribe(function (data) {
            var out = [];
            data.data.forEach(function (item) {
                var param = item;
                param['hari'] = _this.numberToHari[parseInt(item['hari']) - 1];
                param.jam_masuk = new Date(item.jam_masuk);
                if (param.status_jadwal == 'ya') {
                    param.status_jadwal = true;
                }
                else
                    (param.status_jadwal = false);
                if (param.extra_duty == 'ya') {
                    param.extra_duty = true;
                }
                else
                    (param.extra_duty = false);
                out.push(param);
                console.log(param);
            });
            _this.listJadwakType = out;
            _this.width = (200 + (out.length * 200)) + 'px';
            // this.spinner.hide()
        });
    };
    DetailComponent.prototype.getJadwalPilot = function () {
    };
    //untuk derazona pilot
    DetailComponent.prototype.updateDetailJadwalDetail = function (id_jadwal_pegawai, data) {
        console.log(data);
        if (data.extra_duty == true) {
            data.extra_duty = 'ya';
        }
        else {
            data.extra_duty = 'tidak';
        }
        this.absensiPilotJadwalDetailService.putAbsensiPilotJadwalDetailsId({
            id: id_jadwal_pegawai,
            body: {
                id_jadwal_detail: id_jadwal_pegawai,
                id_ron_kode: data.id_ron_kode,
                id_aircraft: data.id_aircraft,
                rencana_terbang: data.rencana_terbang,
                keterangan: data.keterangan,
                extra_duty: data.extra_duty,
                extra_duty_vanue: data.extra_duty_vanue,
                warna: data.warna
            }
        }).subscribe(function (data) {
        });
        if (data.extra_duty == 'ya') {
            data.extra_duty = true;
        }
        else {
            data.extra_duty = false;
        }
    };
    DetailComponent.prototype.updateDetailJadwal = function (id_jadwal_pegawai, data) {
        var _this = this;
        if (data.status_jadwal == true) {
            data.status_jadwal = 'ya';
        }
        else {
            data.status_jadwal = 'tidak';
        }
        var param = {
            jam_masuk: data.jam_masuk,
            jam_keluar: data.jam_keluar,
            lama_kerja: data.lama_kerja,
            toleransi_telat: data.toleransi_telat,
            toleransi_cabut: data.toleransi_cabut,
            lama_istirahat: data.lama_istirahat,
            status_jadwal: data.status_jadwal
        };
        this.spinner.show();
        this.absensiJadwalPegawaiTerjadwalService.putAbsensiJadwalPegawaiTerjadwalsId({
            id: id_jadwal_pegawai,
            body: param
        }).subscribe(function (data) {
            _this.spinner.hide();
        }, function (err) {
            _this.spinner.hide();
            _this.pesan.pesanWarningForm('gagal di update');
        });
        if (data.status_jadwal == 'ya') {
            data.status_jadwal = true;
        }
        else {
            data.status_jadwal = false;
        }
    };
    DetailComponent.ctorParameters = function () { return [
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzDrawerRef"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"] },
        { type: src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_4__["PesanService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_5__["AbsensiJadwalPegawaiTerjadwalService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_5__["AbsensiPilotAircraftService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_5__["AbsensiPilotRonService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_5__["AbsensiPilotJadwalDetailService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DetailComponent.prototype, "tahun", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DetailComponent.prototype, "bulan", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DetailComponent.prototype, "id_jadwal_pegawai", void 0);
    DetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-detail',
            template: __webpack_require__(/*! raw-loader!./detail.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/hr/kalender/pilot/absensi/detail/detail.component.html"),
            styles: [__webpack_require__(/*! ./detail.component.scss */ "./src/app/pages/hr/kalender/pilot/absensi/detail/detail.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzDrawerRef"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"],
            src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_4__["PesanService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_5__["AbsensiJadwalPegawaiTerjadwalService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_5__["AbsensiPilotAircraftService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_5__["AbsensiPilotRonService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_5__["AbsensiPilotJadwalDetailService"]])
    ], DetailComponent);
    return DetailComponent;
}());



/***/ }),

/***/ "./src/app/pages/hr/kalender/pilot/absensi/list/list.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/pages/hr/kalender/pilot/absensi/list/list.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".table td,\n.table th {\n  padding: 4px;\n}\n\n.table td,\n.table th {\n  border-color: #e4e9f0;\n  padding-right: 10px !important;\n}\n\n.sudah-verifikasi {\n  background: #1b55e3;\n  border-radius: 0px 0px 0px 20px;\n  height: 10px;\n  width: 10px;\n  border-left: 1px solid #dee2e6;\n  border-bottom: 1px solid #dee2e6;\n}\n\np {\n  margin: 0;\n}\n\ntr.expan td {\n  padding: 4px;\n  font-size: 13px;\n  font-style: italic;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaHIva2FsZW5kZXIvcGlsb3QvYWJzZW5zaS9saXN0L0U6XFxQUk9KRUtcXERFUkFaT05BXFxkZXZldGVrLWVycC9zcmNcXGFwcFxccGFnZXNcXGhyXFxrYWxlbmRlclxccGlsb3RcXGFic2Vuc2lcXGxpc3RcXGxpc3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2hyL2thbGVuZGVyL3BpbG90L2Fic2Vuc2kvbGlzdC9saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVJLFlBQUE7QUNDSjs7QURFQTs7RUFFSSxxQkFBQTtFQUNBLDhCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxtQkFBQTtFQUdBLCtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSw4QkFBQTtFQUNBLGdDQUFBO0FDQUo7O0FERUE7RUFDSSxTQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9oci9rYWxlbmRlci9waWxvdC9hYnNlbnNpL2xpc3QvbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50YWJsZSB0ZCxcclxuLnRhYmxlIHRoIHtcclxuICAgIHBhZGRpbmc6IDRweDtcclxufVxyXG5cclxuLnRhYmxlIHRkLFxyXG4udGFibGUgdGgge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZTRlOWYwO1xyXG4gICAgcGFkZGluZy1yaWdodDogMTBweCAhaW1wb3J0YW50O1xyXG59XHJcbi5zdWRhaC12ZXJpZmlrYXNpIHtcclxuICAgIGJhY2tncm91bmQ6ICMxYjU1ZTM7XHJcbiAgICAvLyBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAvLyB0b3A6IDUxcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDBweCAyMHB4O1xyXG4gICAgaGVpZ2h0OiAxMHB4O1xyXG4gICAgd2lkdGg6IDEwcHg7XHJcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNkZWUyZTY7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RlZTJlNjtcclxufVxyXG5wIHtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG5cclxudHIuZXhwYW4gdGQge1xyXG4gICAgcGFkZGluZzogNHB4O1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG59XHJcbiIsIi50YWJsZSB0ZCxcbi50YWJsZSB0aCB7XG4gIHBhZGRpbmc6IDRweDtcbn1cblxuLnRhYmxlIHRkLFxuLnRhYmxlIHRoIHtcbiAgYm9yZGVyLWNvbG9yOiAjZTRlOWYwO1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5zdWRhaC12ZXJpZmlrYXNpIHtcbiAgYmFja2dyb3VuZDogIzFiNTVlMztcbiAgYm9yZGVyLXJhZGl1czogMHB4IDBweCAwcHggMjBweDtcbiAgaGVpZ2h0OiAxMHB4O1xuICB3aWR0aDogMTBweDtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZGVlMmU2O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RlZTJlNjtcbn1cblxucCB7XG4gIG1hcmdpbjogMDtcbn1cblxudHIuZXhwYW4gdGQge1xuICBwYWRkaW5nOiA0cHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/hr/kalender/pilot/absensi/list/list.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/pages/hr/kalender/pilot/absensi/list/list.component.ts ***!
  \************************************************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var src_app_sdk_payroll_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/sdk/payroll/services */ "./src/app/sdk/payroll/services.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _detail_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../detail/detail.component */ "./src/app/pages/hr/kalender/pilot/absensi/detail/detail.component.ts");
/* harmony import */ var _verifikasi_verifikasi_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../verifikasi/verifikasi.component */ "./src/app/pages/hr/kalender/pilot/absensi/verifikasi/verifikasi.component.ts");








var ListComponent = /** @class */ (function () {
    function ListComponent(payrollDerazonaAbsensiService, spinner, nzMessageService, activeRouter, drawerService) {
        this.payrollDerazonaAbsensiService = payrollDerazonaAbsensiService;
        this.spinner = spinner;
        this.nzMessageService = nzMessageService;
        this.activeRouter = activeRouter;
        this.drawerService = drawerService;
        this.type = '';
        this.tahun = null;
        this.bulan = null;
        this.hari_ini = null;
        this.listData = [];
        this.jumlah_hari = [];
        this.value_out = false;
    }
    ListComponent.prototype.ngOnInit = function () {
        var _this = this;
        var hari_ini = new Date();
        this.tahun = hari_ini.getFullYear();
        this.bulan = hari_ini.getMonth() + 1;
        this.activeRouter.paramMap.subscribe(function (data) {
            if (data.get('type')) {
                _this.type = data.get('type');
                _this.getData();
            }
        });
    };
    ListComponent.prototype.getData = function () {
        var _this = this;
        this.spinner.show();
        this.payrollDerazonaAbsensiService.getPayrollDerazonaAbsensis(JSON.stringify({ type: this.type, tahun: this.tahun, bulan: this.bulan }))
            .subscribe(function (data) {
            _this.spinner.hide();
            _this.listData = data.data['absensi'];
            _this.jumlah_hari = data.data['jumlah_hari'];
            // this.listData.forEach((item, index) => {
            //     this.jumlah_hari.forEach(nomor => {
            //         this.listData[index]['expand'] = true;
            //         if (item['tgl' + (nomor) + '_jam_terbang']) {
            //             this.listData[index]['tgl' + (nomor) + '_jam_terbang'] = JSON.parse(item['tgl' + (nomor) + '_jam_terbang'])
            //         }
            //         else {
            //             this.listData[index]['tgl' + (nomor) + '_jam_terbang'] = []
            //         }
            //     })
            //     if (item.jam_terbang_rekap) {
            //         this.listData[index].jam_terbang_rekap = JSON.parse(item.jam_terbang_rekap)
            //     }
            // })
        });
    };
    ListComponent.prototype.crop = function (data, index) {
        if (data.length > 0) {
            var x = data.split(',');
            return x[index];
        }
        return "";
    };
    ListComponent.prototype.converToObject = function (data, key) {
        var out = {};
        if (data) {
            out = JSON.parse(data);
            out.forEach(function (element) {
                if (element['type_rate'] == key) {
                    console.log(element['jam_terbang']);
                    return element['jam_terbang'];
                }
            });
        }
        // console.log(out)
        // return 0;
    };
    ListComponent.prototype.onChange = function (e) {
        this.tahun = this.hari_ini.getFullYear();
        this.bulan = this.hari_ini.getMonth() + 1;
        this.getData();
    };
    ListComponent.prototype.getDetail = function (id_jadwal_pegawai) {
        var _this = this;
        var drawerRef = this.drawerService.create({
            nzTitle: 'Schedule Update',
            nzWidth: '700px',
            nzMaskClosable: false,
            nzContent: _detail_detail_component__WEBPACK_IMPORTED_MODULE_6__["DetailComponent"],
            nzContentParams: {
                id_jadwal_pegawai: id_jadwal_pegawai,
                tahun: this.tahun,
                bulan: this.bulan,
            }
        });
        drawerRef.afterOpen.subscribe(function () {
            console.log('Drawer(Component) open');
        });
        drawerRef.afterClose.subscribe(function (data) {
            console.log(data);
            _this.value_out = data;
            if (_this.value_out == true) {
                _this.getData();
                _this.value_out = false;
            }
        });
    };
    ListComponent.prototype.verifikasi = function (id_jadwal_pegawai) {
        var _this = this;
        var drawerRef = this.drawerService.create({
            nzTitle: 'Verifikasi',
            nzWidth: '700px',
            nzMaskClosable: false,
            nzContent: _verifikasi_verifikasi_component__WEBPACK_IMPORTED_MODULE_7__["VerifikasiComponent"],
            nzContentParams: {
                id_jadwal_pegawai: id_jadwal_pegawai
            }
        });
        drawerRef.afterOpen.subscribe(function () {
            console.log('Drawer(Component) open');
        });
        drawerRef.afterClose.subscribe(function (data) {
            console.log(data);
            _this.value_out = data;
            if (_this.value_out == true) {
                _this.getData();
                _this.value_out = false;
            }
        });
    };
    ListComponent.ctorParameters = function () { return [
        { type: src_app_sdk_payroll_services__WEBPACK_IMPORTED_MODULE_4__["PayrollDerazonaAbsensiService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzMessageService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzDrawerService"] }
    ]; };
    ListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list',
            template: __webpack_require__(/*! raw-loader!./list.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/hr/kalender/pilot/absensi/list/list.component.html"),
            styles: [__webpack_require__(/*! ./list.component.scss */ "./src/app/pages/hr/kalender/pilot/absensi/list/list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_sdk_payroll_services__WEBPACK_IMPORTED_MODULE_4__["PayrollDerazonaAbsensiService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzMessageService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzDrawerService"]])
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "./src/app/pages/hr/kalender/pilot/absensi/verifikasi/verifikasi.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/pages/hr/kalender/pilot/absensi/verifikasi/verifikasi.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "footer {\n  position: absolute;\n  bottom: 0px;\n  width: 100%;\n  border-top: 1px solid #e8e8e8;\n  padding: 10px 16px;\n  text-align: right;\n  left: 0px;\n  background: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaHIva2FsZW5kZXIvcGlsb3QvYWJzZW5zaS92ZXJpZmlrYXNpL0U6XFxQUk9KRUtcXERFUkFaT05BXFxkZXZldGVrLWVycC9zcmNcXGFwcFxccGFnZXNcXGhyXFxrYWxlbmRlclxccGlsb3RcXGFic2Vuc2lcXHZlcmlmaWthc2lcXHZlcmlmaWthc2kuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2hyL2thbGVuZGVyL3BpbG90L2Fic2Vuc2kvdmVyaWZpa2FzaS92ZXJpZmlrYXNpLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLDZCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaHIva2FsZW5kZXIvcGlsb3QvYWJzZW5zaS92ZXJpZmlrYXNpL3ZlcmlmaWthc2kuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJmb290ZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2IoMjMyLCAyMzIsIDIzMik7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDE2cHg7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIGxlZnQ6IDBweDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbn1cclxuIiwiZm9vdGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZThlOGU4O1xuICBwYWRkaW5nOiAxMHB4IDE2cHg7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBsZWZ0OiAwcHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/hr/kalender/pilot/absensi/verifikasi/verifikasi.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/pages/hr/kalender/pilot/absensi/verifikasi/verifikasi.component.ts ***!
  \************************************************************************************/
/*! exports provided: VerifikasiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerifikasiComponent", function() { return VerifikasiComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/tool/pesan.service */ "./src/app/services/tool/pesan.service.ts");
/* harmony import */ var src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/sdk/hr/services */ "./src/app/sdk/hr/services.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_sdk_payroll_services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/sdk/payroll/services */ "./src/app/sdk/payroll/services.ts");
/* harmony import */ var src_app_sdk_payroll_services_payroll_derazona_pegawai_ron_pay_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/sdk/payroll/services/payroll-derazona-pegawai-ron-pay.service */ "./src/app/sdk/payroll/services/payroll-derazona-pegawai-ron-pay.service.ts");









var VerifikasiComponent = /** @class */ (function () {
    function VerifikasiComponent(drawerRef, spinner, pesan, absensiJadwalPegawaiTerjadwalService, payrollDerazonaPegawaiDerazonaService, payrollDerazonaPegawaiRonPayService, router, absensiPilotRonService) {
        this.drawerRef = drawerRef;
        this.spinner = spinner;
        this.pesan = pesan;
        this.absensiJadwalPegawaiTerjadwalService = absensiJadwalPegawaiTerjadwalService;
        this.payrollDerazonaPegawaiDerazonaService = payrollDerazonaPegawaiDerazonaService;
        this.payrollDerazonaPegawaiRonPayService = payrollDerazonaPegawaiRonPayService;
        this.router = router;
        this.absensiPilotRonService = absensiPilotRonService;
        this.id_jadwal_pegawai = '';
        this.listData = {};
        this.id_pegawai = null;
        this.pengaturan = {};
        this.pesan_text = '';
        this.ron_pay = {};
        this.is_loading_pree = true;
    }
    VerifikasiComponent.prototype.ngOnInit = function () {
        console.log(this.id_jadwal_pegawai);
        this.getJadwalKerja();
    };
    VerifikasiComponent.prototype.getJadwalKerja = function () {
        var _this = this;
        // this.spinner.show()
        var query = {
            id_jadwal_pegawai: this.id_jadwal_pegawai
        };
        this.absensiJadwalPegawaiTerjadwalService.getAbsensiJadwalPegawaiTerjadwals(JSON.stringify(query)).subscribe(function (data) {
            var out = [];
            data.data.forEach(function (item) {
                _this.listData = item;
                _this.id_pegawai = item.id_pegawai;
                _this.getRonGroupPegawai(item.id_pegawai);
                _this.getNamaRon(item['id_ron_kode']);
            });
        });
    };
    VerifikasiComponent.prototype.getRonGroupPegawai = function (id_pegawai) {
        var _this = this;
        this.pesan_text = '';
        this.spinner.show();
        this.payrollDerazonaPegawaiDerazonaService.getPayrollDerazonaPegawaiDerazonasId(id_pegawai).subscribe(function (data) {
            _this.spinner.hide();
            _this.pengaturan = data.data;
            if (_this.pengaturan.id_ron_group) {
                _this.preeCreate();
            }
            else {
                _this.pesan_text = 'Belum ada setingan RON GROUP';
                _this.pesan.pesanWarningForm(_this.pesan_text);
            }
        });
    };
    VerifikasiComponent.prototype.getNamaRon = function (id_ron) {
        var _this = this;
        this.absensiPilotRonService.getAbsensiPilotRonsId(id_ron).subscribe(function (data) {
            _this.listData['ron'] = data.data;
        });
    };
    VerifikasiComponent.prototype.close = function () {
        this.drawerRef.close(true);
    };
    VerifikasiComponent.prototype.preeCreate = function () {
        var _this = this;
        this.is_loading_pree = true;
        var param = {
            id_jadwal_pegawai: this.id_jadwal_pegawai,
            id_pegawai: this.id_pegawai,
            tanggal: this.listData.jam_masuk,
            id_ron: this.listData.id_ron_kode,
            id_ron_group: this.pengaturan.id_ron_group,
            verifikasi: 0
        };
        this.payrollDerazonaPegawaiRonPayService.postPayrollDerazonaPegawaiRonPays(param).subscribe(function (data) {
            _this.ron_pay = data.data;
            _this.is_loading_pree = false;
            if (_this.listData.extra_duty != 'ya') {
                _this.ron_pay.extra_duty = 0;
                _this.ron_pay.o_1 = 0;
            }
            else {
                _this.ron_pay.autty_allow = 0;
                if (_this.listData.extra_duty_vanue != 'ya') {
                    _this.ron_pay.extra_duty = 0;
                }
                else {
                    _this.ron_pay.o_1 = 0;
                }
            }
        });
    };
    VerifikasiComponent.prototype.simpan = function () {
        var _this = this;
        this.spinner.show();
        this.ron_pay.verifikasi = 1;
        this.payrollDerazonaPegawaiRonPayService.putPayrollDerazonaPegawaiRonPaysId({
            id: this.ron_pay.id_pegawai_ron_pay,
            body: this.ron_pay
        }).subscribe(function (data) {
            _this.spinner.hide();
            _this.close();
        });
    };
    VerifikasiComponent.ctorParameters = function () { return [
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzDrawerRef"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"] },
        { type: src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_4__["PesanService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_5__["AbsensiJadwalPegawaiTerjadwalService"] },
        { type: src_app_sdk_payroll_services__WEBPACK_IMPORTED_MODULE_7__["PayrollDerazonaPegawaiDerazonaService"] },
        { type: src_app_sdk_payroll_services_payroll_derazona_pegawai_ron_pay_service__WEBPACK_IMPORTED_MODULE_8__["PayrollDerazonaPegawaiRonPayService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_5__["AbsensiPilotRonService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], VerifikasiComponent.prototype, "id_jadwal_pegawai", void 0);
    VerifikasiComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-verifikasi',
            template: __webpack_require__(/*! raw-loader!./verifikasi.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/hr/kalender/pilot/absensi/verifikasi/verifikasi.component.html"),
            styles: [__webpack_require__(/*! ./verifikasi.component.scss */ "./src/app/pages/hr/kalender/pilot/absensi/verifikasi/verifikasi.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzDrawerRef"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"],
            src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_4__["PesanService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_5__["AbsensiJadwalPegawaiTerjadwalService"],
            src_app_sdk_payroll_services__WEBPACK_IMPORTED_MODULE_7__["PayrollDerazonaPegawaiDerazonaService"],
            src_app_sdk_payroll_services_payroll_derazona_pegawai_ron_pay_service__WEBPACK_IMPORTED_MODULE_8__["PayrollDerazonaPegawaiRonPayService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_5__["AbsensiPilotRonService"]])
    ], VerifikasiComponent);
    return VerifikasiComponent;
}());



/***/ })

}]);
//# sourceMappingURL=pilot-absensi-absensi-module.js.map