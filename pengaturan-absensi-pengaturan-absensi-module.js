(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pengaturan-absensi-pengaturan-absensi-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/hr/direktori/employee/pegawi-detail/pengaturan-absensi/detail-manual/detail-manual.component.html":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/hr/direktori/employee/pegawi-detail/pengaturan-absensi/detail-manual/detail-manual.component.html ***!
  \***************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div nz-row nzGutter=\"8\">\r\n\r\n    <!-- <table class=\"table table-bordered\">\r\n        <tr>\r\n            <th>Bulan</th>\r\n        </tr>\r\n        <tr>\r\n            <td>as</td>\r\n        </tr>\r\n    </table> -->\r\n\r\n    <button nz-button (click)=\"scrollToIndex(200)\">Scroll To Index 200</button>\r\n    <br />\r\n    <br />\r\n    <nz-table #virtualTable nzVirtualScroll [nzVirtualItemSize]=\"54\" [nzData]=\"listParameter\" [nzVirtualForTrackBy]=\"trackByIndex\" [nzFrontPagination]=\"false\" [nzShowPagination]=\"false\" [nzScroll]=\"{ x: width, y: '720px' }\">\r\n        <thead>\r\n            <tr>\r\n                <th nzWidth=\"200px\" nzLeft=\"0px\">Paremeter</th>\r\n                <th *ngFor=\"let item of listJadwakType\" nzWidth=\"200px\">{{item.jam_masuk | date}}</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody>\r\n            <ng-template nz-virtual-scroll let-data let-index=\"index\">\r\n                <tr>\r\n                    <td nzLeft=\"0px\">{{ data.val }} </td>\r\n                    <td *ngFor=\"let item of listJadwakType\" nzWidth=\"200px\">\r\n                        <label *ngIf=\"data.key=='status_jadwal'\" nz-checkbox [(ngModel)]=\"item.status_jadwal\" (ngModelChange)=\"updateDetailJadwal(item.id_jadwal_pegawai,item)\">{{item.hari}} </label>\r\n\r\n                        <nz-input-group *ngIf=\"data.key=='jam_masuk'\" nzAddOnBefore=\"\">\r\n                            <nz-time-picker [nzDisabled]=\"!item.status_jadwal\" [(ngModel)]=\"item.jam_masuk\" nzFormat=\"HH:mm\" (ngModelChange)=\"updateDetailJadwal(item.id_jadwal_pegawai,item)\"></nz-time-picker>\r\n                        </nz-input-group>\r\n\r\n                        <nz-input-group *ngIf=\"data.key=='lama_kerja'\" nzAddOnAfter=\"H\">\r\n                            <nz-input-number [nzDisabled]=\"!item.status_jadwal\" [(ngModel)]=\"item.lama_kerja\" (ngModelChange)=\"updateDetailJadwal(item.id_jadwal_pegawai,item)\" [nzMin]=\"1\" [nzStep]=\"1\">\r\n                            </nz-input-number>\r\n                        </nz-input-group>\r\n\r\n\r\n                        <nz-input-group *ngIf=\"data.key=='lama_istirahat'\" nzAddOnAfter=\"m\">\r\n                            <input nz-input [disabled]=\"!item.status_jadwal\" [(ngModel)]=\"item.lama_istirahat\" (ngModelChange)=\"updateDetailJadwal(item.id_jadwal_pegawai,item)\" />\r\n                        </nz-input-group>\r\n\r\n\r\n                        <nz-input-group *ngIf=\"data.key=='toleransi_telat'\" nzAddOnAfter=\"m\">\r\n                            <input nz-input [disabled]=\"!item.status_jadwal\" [(ngModel)]=\"item.toleransi_telat\" (ngModelChange)=\"updateDetailJadwal(item.id_jadwal_pegawai,item)\" />\r\n                        </nz-input-group>\r\n\r\n                        <nz-input-group *ngIf=\"data.key=='toleransi_cabut'\" nzAddOnAfter=\"m\">\r\n                            <input nz-input [disabled]=\"!item.status_jadwal\" [(ngModel)]=\"item.toleransi_cabut\" (ngModelChange)=\"updateDetailJadwal(item.id_jadwal_pegawai,item)\" />\r\n                        </nz-input-group>\r\n\r\n                        <!-- aircraft -->\r\n                        <nz-select [nzDisabled]=\"!item.status_jadwal\" style=\"width: 100%;\" *ngIf=\"data.key=='warna'\" [(ngModel)]=\"item.warna\" nzAllowClear nzPlaceHolder=\"Choose\" (ngModelChange)=\"updateDetailJadwalDetail(item.id_jadwal_pegawai,item)\">\r\n                            <nz-option *ngFor=\"let item of listWarna\" [nzValue]=\"item.color\" [nzLabel]=\"item.warna\"></nz-option>\r\n                        </nz-select>\r\n\r\n                        <nz-select [nzDisabled]=\"!item.status_jadwal\" style=\"width: 100%;\" *ngIf=\"data.key=='id_ron_kode'\" [(ngModel)]=\"item.id_ron_kode\" nzAllowClear nzPlaceHolder=\"Choose\" (ngModelChange)=\"updateDetailJadwalDetail(item.id_jadwal_pegawai,item)\">\r\n                            <nz-option *ngFor=\"let item of ron\" [nzValue]=\"item.id_ron\" [nzLabel]=\"item.ron\"></nz-option>\r\n                        </nz-select>\r\n\r\n                        <nz-select [nzDisabled]=\"!item.status_jadwal\" style=\"width: 100%;\" *ngIf=\"data.key=='id_aircraft'\" [(ngModel)]=\"item.id_aircraft\" nzAllowClear nzPlaceHolder=\"Choose\" (ngModelChange)=\"updateDetailJadwalDetail(item.id_jadwal_pegawai,item)\">\r\n                            <nz-option *ngFor=\"let item of aircraft\" [nzValue]=\"item.id_aircraft\" [nzLabel]=\"item.sn\"></nz-option>\r\n                        </nz-select>\r\n\r\n                        <nz-input-group *ngIf=\"data.key=='rencana_terbang'\" nzAddOnAfter=\"H\">\r\n                            <nz-input-number [nzDisabled]=\"!item.status_jadwal\" [(ngModel)]=\"item.rencana_terbang\" (ngModelChange)=\"updateDetailJadwalDetail(item.id_jadwal_pegawai,item)\" [nzMin]=\"1\" [nzStep]=\"1\">\r\n                            </nz-input-number>\r\n                        </nz-input-group>\r\n\r\n                        <textarea [disabled]=\"!item.status_jadwal\" *ngIf=\"data.key=='keterangan'\" nz-input [(ngModel)]=\"item.keterangan\" (ngModelChange)=\"updateDetailJadwalDetail(item.id_jadwal_pegawai,item)\" [nzAutosize]=\"{ minRows: 2, maxRows: 6 }\"></textarea>\r\n\r\n                    </td>\r\n\r\n\r\n                </tr>\r\n            </ng-template>\r\n        </tbody>\r\n    </nz-table>\r\n\r\n</div>\r\n\r\n<!--\r\n<div nz-row nzGutter=\"8\">\r\n    <div nz-col nzSpan=\"4\">\r\n        <nz-form-item> </nz-form-item>\r\n        <nz-form-label>kerja ?</nz-form-label>\r\n\r\n    </div>\r\n    <div nz-col nzSpan=\"8\">\r\n        <nz-form-item> </nz-form-item>\r\n        <nz-form-label>Jam</nz-form-label>\r\n\r\n    </div>\r\n    <div nz-col nzSpan=\"3\">\r\n        <nz-form-item> </nz-form-item>\r\n        <nz-form-label>Lama</nz-form-label>\r\n\r\n    </div>\r\n    <div nz-col nzSpan=\"3\">\r\n        <nz-form-item> </nz-form-item>\r\n        <nz-form-label>Istirahat</nz-form-label>\r\n\r\n    </div>\r\n    <div nz-col nzSpan=\"3\">\r\n        <nz-form-item> </nz-form-item>\r\n        <nz-form-label>T terlambat</nz-form-label>\r\n\r\n    </div>\r\n    <div nz-col nzSpan=\"3\">\r\n        <nz-form-item> </nz-form-item>\r\n        <nz-form-label>T cabut</nz-form-label>\r\n\r\n    </div>\r\n</div>\r\n<div nz-row nzGutter=\"8\" *ngFor=\"let item of listJadwakType\">\r\n    <div nz-col nzSpan=\"4\">\r\n        <nz-form-item>\r\n            <nz-form-control>\r\n                <label nz-checkbox [(ngModel)]=\"item.status_jadwal\" (ngModelChange)=\"updateDetailJadwal(item.id_jadwal_pegawai,item)\">{{item.hari}}</label>\r\n            </nz-form-control>\r\n        </nz-form-item>\r\n    </div>\r\n    <div nz-col nzSpan=\"8\">\r\n        <nz-form-item>\r\n            <nz-form-control>\r\n\r\n                <nz-input-group nzAddOnBefore=\"{{item.jam_masuk | date:'shortDate'}}\">\r\n                    <nz-time-picker [(ngModel)]=\"item.jam_masuk\" nzFormat=\"HH:mm\" (ngModelChange)=\"updateDetailJadwal(item.id_jadwal_pegawai,item)\"></nz-time-picker>\r\n                </nz-input-group>\r\n\r\n\r\n            </nz-form-control>\r\n        </nz-form-item>\r\n    </div>\r\n\r\n    <div nz-col nzSpan=\"3\">\r\n        <nz-form-item>\r\n            <nz-form-control>\r\n                <nz-input-group nzAddOnAfter=\"H\">\r\n                    <nz-input-number [(ngModel)]=\"item.lama_kerja\" (ngModelChange)=\"updateDetailJadwal(item.id_jadwal_pegawai,item)\" [nzMin]=\"1\" [nzStep]=\"1\">\r\n                    </nz-input-number>\r\n                </nz-input-group>\r\n            </nz-form-control>\r\n        </nz-form-item>\r\n    </div>\r\n\r\n    <div nz-col nzSpan=\"3\">\r\n        <nz-form-item>\r\n            <nz-form-control>\r\n                <nz-input-group nzAddOnAfter=\"m\">\r\n                    <input nz-input [(ngModel)]=\"item.lama_istirahat\" (ngModelChange)=\"updateDetailJadwal(item.id_jadwal_pegawai,item)\" />\r\n                </nz-input-group>\r\n            </nz-form-control>\r\n        </nz-form-item>\r\n\r\n    </div>\r\n\r\n    <div nz-col nzSpan=\"3\">\r\n        <nz-form-item>\r\n            <nz-form-control>\r\n                <nz-input-group nzAddOnAfter=\"m\">\r\n                    <input nz-input [(ngModel)]=\"item.toleransi_telat\" (ngModelChange)=\"updateDetailJadwal(item.id_jadwal_pegawai,item)\" />\r\n                </nz-input-group>\r\n            </nz-form-control>\r\n        </nz-form-item>\r\n\r\n    </div>\r\n    <div nz-col nzSpan=\"3\">\r\n\r\n        <nz-form-item>\r\n            <nz-form-control>\r\n                <nz-input-group nzAddOnAfter=\"m\">\r\n                    <input nz-input [(ngModel)]=\"item.toleransi_cabut\" (ngModelChange)=\"updateDetailJadwal(item.id_jadwal_pegawai,item)\" />\r\n                </nz-input-group>\r\n            </nz-form-control>\r\n        </nz-form-item>\r\n\r\n    </div>\r\n</div> -->\r\n\r\n<div class=\"footer\">\r\n    <button type=\"button\" nz-popconfirm nzPopconfirmTitle=\"Are you sure process this task?\" nzPopconfirmPlacement=\"bottom\" (nzOnConfirm)=\"reset()\" class=\"ant-btn ant-btn-primary\"><span>Reset</span></button>\r\n    <button type=\"button\" nz-popconfirm nzPopconfirmTitle=\"Are you sure process this task?\" nzPopconfirmPlacement=\"bottom\" (nzOnConfirm)=\"delete()\" nzType=\"danger\" class=\"ant-btn \"><span>Set Default</span></button>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/hr/direktori/employee/pegawi-detail/pengaturan-absensi/detail-tipe/detail-tipe.component.html":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/hr/direktori/employee/pegawi-detail/pengaturan-absensi/detail-tipe/detail-tipe.component.html ***!
  \***********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n    <div class=\"card-header-flex\">\r\n        <div class=\"d-flex flex-column justify-content-center mr-auto\" style=\"margin-left: 10px\">\r\n            <h6 class=\"mb-0\">{{pegawai.nama_depan}}\r\n                {{pegawai.nama_belakang}} applicable work hours with type {{jadwalTipe.tipe}}</h6>\r\n        </div>\r\n        <div class=\"d-flex flex-column justify-content-center\" style=\"margin-right: 10px\">\r\n            <a class=\"btn btn-primary\" [routerLink]=\"['../edit-tipe/',pegawai.id_pegawai]\"\r\n                routerLinkActive=\"router-link-active\">\r\n                Reset\r\n            </a>\r\n        </div>\r\n        <div class=\"d-flex flex-column justify-content-center\" style=\"margin-right: 10px\">\r\n            <a class=\"btn btn-primary\" [routerLink]=\"['../add']\" routerLinkActive=\"router-link-active\">\r\n                Set Manualy\r\n            </a>\r\n        </div>\r\n    </div>\r\n    <div class=\"card-body\">\r\n        <div nz-row nzGutter=\"8\">\r\n            <div nz-col nzSpan=\"4\">\r\n                <nz-form-item> </nz-form-item>\r\n                <nz-form-label>Work day</nz-form-label>\r\n\r\n            </div>\r\n            <div nz-col nzSpan=\"7\">\r\n                <nz-form-item> </nz-form-item>\r\n                <nz-form-label>Work hour</nz-form-label>\r\n\r\n            </div>\r\n            <div nz-col nzSpan=\"4\">\r\n                <nz-form-item> </nz-form-item>\r\n                <nz-form-label>Break duration</nz-form-label>\r\n\r\n            </div>\r\n            <div nz-col nzSpan=\"4\">\r\n                <nz-form-item> </nz-form-item>\r\n                <nz-form-label>Late tolerance</nz-form-label>\r\n\r\n            </div>\r\n            <div nz-col nzSpan=\"4\">\r\n                <nz-form-item> </nz-form-item>\r\n                <nz-form-label>Leave tolerance</nz-form-label>\r\n\r\n            </div>\r\n        </div>\r\n        <div nz-row nzGutter=\"8\" *ngFor=\"let item of listJadwakType\">\r\n            <div nz-col nzSpan=\"4\">\r\n                <nz-form-item>\r\n                    <nz-form-control>\r\n                        <label nz-checkbox [(ngModel)]=\"item.status_jadwal\">{{item.nama_hari}}</label>\r\n                    </nz-form-control>\r\n                </nz-form-item>\r\n            </div>\r\n            <div nz-col nzSpan=\"7\">\r\n                <nz-form-item>\r\n                    <nz-form-control>\r\n                        <div nz-row nzGutter=\"8\">\r\n                            <div nz-col nzSpan=\"10\">\r\n                                <input nz-input placeholder=\"\" [(ngModel)]=\"item.jam_masuk\" />\r\n                            </div>\r\n                            <div nz-col nzSpan=\"1\">\r\n                                -\r\n                            </div>\r\n                            <div nz-col nzSpan=\"10\">\r\n                                <input nz-input placeholder=\"\" [(ngModel)]=\"item.jam_keluar\" />\r\n                            </div>\r\n                        </div>\r\n                    </nz-form-control>\r\n                </nz-form-item>\r\n            </div>\r\n            <div nz-col nzSpan=\"4\">\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"18\">\r\n                        <nz-form-item>\r\n                            <nz-form-control>\r\n                                <nz-input-group nzAddOnAfter=\"menit\">\r\n                                    <input nz-input [(ngModel)]=\"item.jam_istirahat\" />\r\n                                </nz-input-group>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div nz-col nzSpan=\"4\">\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"18\">\r\n                        <nz-form-item>\r\n                            <nz-form-control>\r\n                                <nz-input-group nzAddOnAfter=\"menit\">\r\n                                    <input nz-input [(ngModel)]=\"item.toleransi_telat\" />\r\n                                </nz-input-group>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div nz-col nzSpan=\"4\">\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"18\">\r\n                        <nz-form-item>\r\n                            <nz-form-control>\r\n                                <nz-input-group nzAddOnAfter=\"menit\">\r\n                                    <input nz-input [(ngModel)]=\"item.toleransi_cabut\" />\r\n                                </nz-input-group>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/hr/direktori/employee/pegawi-detail/pengaturan-absensi/edit-manual/edit-manual.component.html":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/hr/direktori/employee/pegawi-detail/pengaturan-absensi/edit-manual/edit-manual.component.html ***!
  \***********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n    <div class=\"card-body\">\r\n        <div nz-row nzGutter=\"8\">\r\n            <div nz-col nzSpan=\"5\">\r\n                Period {{bulan}} /{{tahun}}\r\n            </div>\r\n            <div nz-col nzSpan=\"12\">\r\n                <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"Pilih tipe jadwal\" [(ngModel)]=\"id_jadwal_tipe\" style=\"width: 100%\">\r\n                    <nz-option *ngFor=\"let item of listTipe\" nzValue=\"{{item.id_jadwal_tipe}}\" nzLabel=\"{{item.tipe}}\">\r\n                    </nz-option>\r\n                </nz-select>\r\n            </div>\r\n            <div nz-col nzSpan=\"4\">\r\n                <button nz-button nzType=\"primary\" nz-popconfirm nzPopconfirmTitle=\"Are you sure process this task?\" nzPopconfirmPlacement=\"bottom\" (nzOnConfirm)=\"pilihTipe()\">Choose</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/hr/direktori/employee/pegawi-detail/pengaturan-absensi/edit-tipe/edit-tipe.component.html":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/hr/direktori/employee/pegawi-detail/pengaturan-absensi/edit-tipe/edit-tipe.component.html ***!
  \*******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"air__utils__heading card-header-flex\">\r\n        <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n            <h5 class=\"mb-0\">Edit Work hour type</h5>\r\n        </div>\r\n    </div>\r\n    <div class=\"card\">\r\n        <div class=\"card-body\">\r\n            <form nz-form [formGroup]=\"dataForm\" (ngSubmit)=\"simpan()\">\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Choose a type</nz-form-label>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                    </div>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-control>\r\n                            <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"Pilih tipe jadwal\"\r\n                                formControlName=\"id_jadwal_tipe\">\r\n                                <nz-option *ngFor=\"let item of listTipe\" nzValue=\"{{item.id_jadwal_tipe}}\"\r\n                                    nzLabel=\"{{item.tipe}}\"></nz-option>\r\n                            </nz-select>\r\n                        </nz-form-control>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <div class=\"footer\">\r\n                            <button type=\"button\" (click)=\"goToBack()\" class=\"ant-btn\"\r\n                                style=\"margin-right: 8px;\"><span>Cancel</span></button>\r\n                            <button type=\"submit\" class=\"ant-btn ant-btn-primary\"><span>Submit</span></button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/hr/direktori/employee/pegawi-detail/pengaturan-absensi/view/view.component.html":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/hr/direktori/employee/pegawi-detail/pengaturan-absensi/view/view.component.html ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n    <div class=\"card-header-flex\">\r\n        <div class=\"d-flex flex-column justify-content-center mr-auto\" style=\"margin-left: 10px\">\r\n            <h5 class=\"mb-0\">Attendance Settings</h5>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"card\">\r\n    <div class=\"card-header-flex\">\r\n        <div class=\"d-flex flex-column justify-content-center mr-auto\" style=\"margin-left: 10px\">\r\n            <h6 class=\"mb-0\">{{pegawai.nama_depan}} {{pegawai.nama_belakang}} applicable work hours with type <b>{{jadwalTipe.tipe}}</b></h6>\r\n        </div>\r\n        <div class=\"d-flex flex-column justify-content-center\" style=\"margin-right: 10px\">\r\n            <a class=\"btn btn-primary\" [routerLink]=\"['../edit-tipe/',pegawai.id_pegawai]\" routerLinkActive=\"router-link-active\">\r\n                Reset\r\n            </a>\r\n        </div>\r\n        <!-- <div class=\"d-flex flex-column justify-content-center\" style=\"margin-right: 10px\">\r\n            <a class=\"btn btn-primary\" [routerLink]=\"['../edit-manual']\" routerLinkActive=\"router-link-active\">\r\n                Atur Manual\r\n            </a>\r\n        </div> -->\r\n    </div>\r\n\r\n\r\n\r\n\r\n    <nz-table #basicTable [nzData]=\"datajadwalPegawai\" [nzFrontPagination]=\"false\" class=\"air__utils__scrollTable mb-4\">\r\n        <thead>\r\n            <tr>\r\n                <th class=\"bg-transparent text-uppercase\">Mounth</th>\r\n                <th class=\"bg-transparent text-uppercase\">Year</th>\r\n                <th class=\"bg-transparent text-uppercase\">Status</th>\r\n                <th class=\"bg-transparent text-uppercase text-right\">Action</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody>\r\n            <tr *ngFor=\"let data of basicTable.data\">\r\n                <td class=\"text-gray-6\">\r\n                    {{data.bulan}}\r\n                </td>\r\n                <td>\r\n                    <a href=\"javascript: void(0);\" class=\"text-blue\">\r\n                        {{data.tahun}}\r\n                    </a>\r\n                </td>\r\n                <td>\r\n                    {{data.tipe}}\r\n                </td>\r\n                <td class=\"font-weight-bold text-right\">\r\n                    <button [hidden]=\"data.tipe!='Schedule'\" nz-button nzType=\"primary\" (click)=\"openComponent(data.bulan_number,data.tahun)\"><i nz-icon nzType=\"check\"></i>View</button>\r\n                    <button [hidden]=\"data.tipe =='Schedule'\" nz-button nzType=\"default\" [routerLink]=\"['../edit-manual',data.bulan_number,data.tahun]\"><i nz-icon nzType=\"arrow-right\"></i>Set manual</button>\r\n                </td>\r\n            </tr>\r\n        </tbody>\r\n    </nz-table>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/profile/pengaturan-absensi/detail-manual/detail-manual.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/profile/pengaturan-absensi/detail-manual/detail-manual.component.html ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div nz-row nzGutter=\"8\">\r\n\r\n    <!-- <table class=\"table table-bordered\">\r\n        <tr>\r\n            <th>Bulan</th>\r\n        </tr>\r\n        <tr>\r\n            <td>as</td>\r\n        </tr>\r\n    </table> -->\r\n\r\n    <button nz-button (click)=\"scrollToIndex(200)\">Scroll To Index 200</button>\r\n    <br />\r\n    <br />\r\n    <nz-table #virtualTable nzVirtualScroll [nzVirtualItemSize]=\"54\" [nzData]=\"listParameter\" [nzVirtualForTrackBy]=\"trackByIndex\" [nzFrontPagination]=\"false\" [nzShowPagination]=\"false\" [nzScroll]=\"{ x: width, y: '720px' }\">\r\n        <thead>\r\n            <tr>\r\n                <th nzWidth=\"200px\" nzLeft=\"0px\">Paremeter</th>\r\n                <th *ngFor=\"let item of listJadwakType\" nzWidth=\"200px\">{{item.jam_masuk | date}}</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody>\r\n            <ng-template nz-virtual-scroll let-data let-index=\"index\">\r\n                <tr>\r\n                    <td nzLeft=\"0px\">{{ data.val }} </td>\r\n                    <td *ngFor=\"let item of listJadwakType\" nzWidth=\"200px\">\r\n                        <label *ngIf=\"data.key=='status_jadwal'\" nz-checkbox [(ngModel)]=\"item.status_jadwal\" (ngModelChange)=\"updateDetailJadwal(item.id_jadwal_pegawai,item)\">{{item.hari}} </label>\r\n\r\n                        <nz-input-group *ngIf=\"data.key=='jam_masuk'\" nzAddOnBefore=\"\">\r\n                            <nz-time-picker [nzDisabled]=\"!item.status_jadwal\" [(ngModel)]=\"item.jam_masuk\" nzFormat=\"HH:mm\" (ngModelChange)=\"updateDetailJadwal(item.id_jadwal_pegawai,item)\"></nz-time-picker>\r\n                        </nz-input-group>\r\n\r\n                        <nz-input-group *ngIf=\"data.key=='lama_kerja'\" nzAddOnAfter=\"H\">\r\n                            <nz-input-number [nzDisabled]=\"!item.status_jadwal\" [(ngModel)]=\"item.lama_kerja\" (ngModelChange)=\"updateDetailJadwal(item.id_jadwal_pegawai,item)\" [nzMin]=\"1\" [nzStep]=\"1\">\r\n                            </nz-input-number>\r\n                        </nz-input-group>\r\n\r\n\r\n                        <nz-input-group *ngIf=\"data.key=='lama_istirahat'\" nzAddOnAfter=\"m\">\r\n                            <input nz-input [disabled]=\"!item.status_jadwal\" [(ngModel)]=\"item.lama_istirahat\" (ngModelChange)=\"updateDetailJadwal(item.id_jadwal_pegawai,item)\" />\r\n                        </nz-input-group>\r\n\r\n\r\n                        <nz-input-group *ngIf=\"data.key=='toleransi_telat'\" nzAddOnAfter=\"m\">\r\n                            <input nz-input [disabled]=\"!item.status_jadwal\" [(ngModel)]=\"item.toleransi_telat\" (ngModelChange)=\"updateDetailJadwal(item.id_jadwal_pegawai,item)\" />\r\n                        </nz-input-group>\r\n\r\n                        <nz-input-group *ngIf=\"data.key=='toleransi_cabut'\" nzAddOnAfter=\"m\">\r\n                            <input nz-input [disabled]=\"!item.status_jadwal\" [(ngModel)]=\"item.toleransi_cabut\" (ngModelChange)=\"updateDetailJadwal(item.id_jadwal_pegawai,item)\" />\r\n                        </nz-input-group>\r\n\r\n                        <!-- aircraft -->\r\n                        <nz-select [nzDisabled]=\"!item.status_jadwal\" style=\"width: 100%;\" *ngIf=\"data.key=='warna'\" [(ngModel)]=\"item.warna\" nzAllowClear nzPlaceHolder=\"Choose\" (ngModelChange)=\"updateDetailJadwalDetail(item.id_jadwal_pegawai,item)\">\r\n                            <nz-option *ngFor=\"let item of listWarna\" [nzValue]=\"item.color\" [nzLabel]=\"item.warna\"></nz-option>\r\n                        </nz-select>\r\n\r\n                        <nz-select [nzDisabled]=\"!item.status_jadwal\" style=\"width: 100%;\" *ngIf=\"data.key=='id_ron_kode'\" [(ngModel)]=\"item.id_ron_kode\" nzAllowClear nzPlaceHolder=\"Choose\" (ngModelChange)=\"updateDetailJadwalDetail(item.id_jadwal_pegawai,item)\">\r\n                            <nz-option *ngFor=\"let item of ron\" [nzValue]=\"item.id_ron\" [nzLabel]=\"item.ron\"></nz-option>\r\n                        </nz-select>\r\n\r\n                        <nz-select [nzDisabled]=\"!item.status_jadwal\" style=\"width: 100%;\" *ngIf=\"data.key=='id_aircraft'\" [(ngModel)]=\"item.id_aircraft\" nzAllowClear nzPlaceHolder=\"Choose\" (ngModelChange)=\"updateDetailJadwalDetail(item.id_jadwal_pegawai,item)\">\r\n                            <nz-option *ngFor=\"let item of aircraft\" [nzValue]=\"item.id_aircraft\" [nzLabel]=\"item.sn\"></nz-option>\r\n                        </nz-select>\r\n\r\n                        <nz-input-group *ngIf=\"data.key=='rencana_terbang'\" nzAddOnAfter=\"H\">\r\n                            <nz-input-number [nzDisabled]=\"!item.status_jadwal\" [(ngModel)]=\"item.rencana_terbang\" (ngModelChange)=\"updateDetailJadwalDetail(item.id_jadwal_pegawai,item)\" [nzMin]=\"1\" [nzStep]=\"1\">\r\n                            </nz-input-number>\r\n                        </nz-input-group>\r\n\r\n                        <textarea [disabled]=\"!item.status_jadwal\" *ngIf=\"data.key=='keterangan'\" nz-input [(ngModel)]=\"item.keterangan\" (ngModelChange)=\"updateDetailJadwalDetail(item.id_jadwal_pegawai,item)\" [nzAutosize]=\"{ minRows: 2, maxRows: 6 }\"></textarea>\r\n\r\n                    </td>\r\n\r\n\r\n                </tr>\r\n            </ng-template>\r\n        </tbody>\r\n    </nz-table>\r\n\r\n</div>\r\n\r\n<!--\r\n<div nz-row nzGutter=\"8\">\r\n    <div nz-col nzSpan=\"4\">\r\n        <nz-form-item> </nz-form-item>\r\n        <nz-form-label>kerja ?</nz-form-label>\r\n\r\n    </div>\r\n    <div nz-col nzSpan=\"8\">\r\n        <nz-form-item> </nz-form-item>\r\n        <nz-form-label>Jam</nz-form-label>\r\n\r\n    </div>\r\n    <div nz-col nzSpan=\"3\">\r\n        <nz-form-item> </nz-form-item>\r\n        <nz-form-label>Lama</nz-form-label>\r\n\r\n    </div>\r\n    <div nz-col nzSpan=\"3\">\r\n        <nz-form-item> </nz-form-item>\r\n        <nz-form-label>Istirahat</nz-form-label>\r\n\r\n    </div>\r\n    <div nz-col nzSpan=\"3\">\r\n        <nz-form-item> </nz-form-item>\r\n        <nz-form-label>T terlambat</nz-form-label>\r\n\r\n    </div>\r\n    <div nz-col nzSpan=\"3\">\r\n        <nz-form-item> </nz-form-item>\r\n        <nz-form-label>T cabut</nz-form-label>\r\n\r\n    </div>\r\n</div>\r\n<div nz-row nzGutter=\"8\" *ngFor=\"let item of listJadwakType\">\r\n    <div nz-col nzSpan=\"4\">\r\n        <nz-form-item>\r\n            <nz-form-control>\r\n                <label nz-checkbox [(ngModel)]=\"item.status_jadwal\" (ngModelChange)=\"updateDetailJadwal(item.id_jadwal_pegawai,item)\">{{item.hari}}</label>\r\n            </nz-form-control>\r\n        </nz-form-item>\r\n    </div>\r\n    <div nz-col nzSpan=\"8\">\r\n        <nz-form-item>\r\n            <nz-form-control>\r\n\r\n                <nz-input-group nzAddOnBefore=\"{{item.jam_masuk | date:'shortDate'}}\">\r\n                    <nz-time-picker [(ngModel)]=\"item.jam_masuk\" nzFormat=\"HH:mm\" (ngModelChange)=\"updateDetailJadwal(item.id_jadwal_pegawai,item)\"></nz-time-picker>\r\n                </nz-input-group>\r\n\r\n\r\n            </nz-form-control>\r\n        </nz-form-item>\r\n    </div>\r\n\r\n    <div nz-col nzSpan=\"3\">\r\n        <nz-form-item>\r\n            <nz-form-control>\r\n                <nz-input-group nzAddOnAfter=\"H\">\r\n                    <nz-input-number [(ngModel)]=\"item.lama_kerja\" (ngModelChange)=\"updateDetailJadwal(item.id_jadwal_pegawai,item)\" [nzMin]=\"1\" [nzStep]=\"1\">\r\n                    </nz-input-number>\r\n                </nz-input-group>\r\n            </nz-form-control>\r\n        </nz-form-item>\r\n    </div>\r\n\r\n    <div nz-col nzSpan=\"3\">\r\n        <nz-form-item>\r\n            <nz-form-control>\r\n                <nz-input-group nzAddOnAfter=\"m\">\r\n                    <input nz-input [(ngModel)]=\"item.lama_istirahat\" (ngModelChange)=\"updateDetailJadwal(item.id_jadwal_pegawai,item)\" />\r\n                </nz-input-group>\r\n            </nz-form-control>\r\n        </nz-form-item>\r\n\r\n    </div>\r\n\r\n    <div nz-col nzSpan=\"3\">\r\n        <nz-form-item>\r\n            <nz-form-control>\r\n                <nz-input-group nzAddOnAfter=\"m\">\r\n                    <input nz-input [(ngModel)]=\"item.toleransi_telat\" (ngModelChange)=\"updateDetailJadwal(item.id_jadwal_pegawai,item)\" />\r\n                </nz-input-group>\r\n            </nz-form-control>\r\n        </nz-form-item>\r\n\r\n    </div>\r\n    <div nz-col nzSpan=\"3\">\r\n\r\n        <nz-form-item>\r\n            <nz-form-control>\r\n                <nz-input-group nzAddOnAfter=\"m\">\r\n                    <input nz-input [(ngModel)]=\"item.toleransi_cabut\" (ngModelChange)=\"updateDetailJadwal(item.id_jadwal_pegawai,item)\" />\r\n                </nz-input-group>\r\n            </nz-form-control>\r\n        </nz-form-item>\r\n\r\n    </div>\r\n</div> -->\r\n\r\n<div class=\"footer\">\r\n    <button type=\"button\" nz-popconfirm nzPopconfirmTitle=\"Are you sure process this task?\" nzPopconfirmPlacement=\"bottom\" (nzOnConfirm)=\"reset()\" class=\"ant-btn ant-btn-primary\"><span>Reset</span></button>\r\n    <button type=\"button\" nz-popconfirm nzPopconfirmTitle=\"Are you sure process this task?\" nzPopconfirmPlacement=\"bottom\" (nzOnConfirm)=\"delete()\" nzType=\"danger\" class=\"ant-btn \"><span>Set Default</span></button>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/profile/pengaturan-absensi/detail-tipe/detail-tipe.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/profile/pengaturan-absensi/detail-tipe/detail-tipe.component.html ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n    <div class=\"card-header-flex\">\r\n        <div class=\"d-flex flex-column justify-content-center mr-auto\" style=\"margin-left: 10px\">\r\n            <h6 class=\"mb-0\">{{pegawai.nama_depan}}\r\n                {{pegawai.nama_belakang}} applicable work hours with type {{jadwalTipe.tipe}}</h6>\r\n        </div>\r\n        <div class=\"d-flex flex-column justify-content-center\" style=\"margin-right: 10px\">\r\n            <a class=\"btn btn-primary\" [routerLink]=\"['../edit-tipe/',pegawai.id_pegawai]\"\r\n                routerLinkActive=\"router-link-active\">\r\n                Reset\r\n            </a>\r\n        </div>\r\n        <div class=\"d-flex flex-column justify-content-center\" style=\"margin-right: 10px\">\r\n            <a class=\"btn btn-primary\" [routerLink]=\"['../add']\" routerLinkActive=\"router-link-active\">\r\n                Set Manualy\r\n            </a>\r\n        </div>\r\n    </div>\r\n    <div class=\"card-body\">\r\n        <div nz-row nzGutter=\"8\">\r\n            <div nz-col nzSpan=\"4\">\r\n                <nz-form-item> </nz-form-item>\r\n                <nz-form-label>Work day</nz-form-label>\r\n\r\n            </div>\r\n            <div nz-col nzSpan=\"7\">\r\n                <nz-form-item> </nz-form-item>\r\n                <nz-form-label>Work hour</nz-form-label>\r\n\r\n            </div>\r\n            <div nz-col nzSpan=\"4\">\r\n                <nz-form-item> </nz-form-item>\r\n                <nz-form-label>Break duration</nz-form-label>\r\n\r\n            </div>\r\n            <div nz-col nzSpan=\"4\">\r\n                <nz-form-item> </nz-form-item>\r\n                <nz-form-label>Late tolerance</nz-form-label>\r\n\r\n            </div>\r\n            <div nz-col nzSpan=\"4\">\r\n                <nz-form-item> </nz-form-item>\r\n                <nz-form-label>Leave tolerance</nz-form-label>\r\n\r\n            </div>\r\n        </div>\r\n        <div nz-row nzGutter=\"8\" *ngFor=\"let item of listJadwakType\">\r\n            <div nz-col nzSpan=\"4\">\r\n                <nz-form-item>\r\n                    <nz-form-control>\r\n                        <label nz-checkbox [(ngModel)]=\"item.status_jadwal\">{{item.nama_hari}}</label>\r\n                    </nz-form-control>\r\n                </nz-form-item>\r\n            </div>\r\n            <div nz-col nzSpan=\"7\">\r\n                <nz-form-item>\r\n                    <nz-form-control>\r\n                        <div nz-row nzGutter=\"8\">\r\n                            <div nz-col nzSpan=\"10\">\r\n                                <input nz-input placeholder=\"\" [(ngModel)]=\"item.jam_masuk\" />\r\n                            </div>\r\n                            <div nz-col nzSpan=\"1\">\r\n                                -\r\n                            </div>\r\n                            <div nz-col nzSpan=\"10\">\r\n                                <input nz-input placeholder=\"\" [(ngModel)]=\"item.jam_keluar\" />\r\n                            </div>\r\n                        </div>\r\n                    </nz-form-control>\r\n                </nz-form-item>\r\n            </div>\r\n            <div nz-col nzSpan=\"4\">\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"18\">\r\n                        <nz-form-item>\r\n                            <nz-form-control>\r\n                                <nz-input-group nzAddOnAfter=\"menit\">\r\n                                    <input nz-input [(ngModel)]=\"item.jam_istirahat\" />\r\n                                </nz-input-group>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div nz-col nzSpan=\"4\">\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"18\">\r\n                        <nz-form-item>\r\n                            <nz-form-control>\r\n                                <nz-input-group nzAddOnAfter=\"menit\">\r\n                                    <input nz-input [(ngModel)]=\"item.toleransi_telat\" />\r\n                                </nz-input-group>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div nz-col nzSpan=\"4\">\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"18\">\r\n                        <nz-form-item>\r\n                            <nz-form-control>\r\n                                <nz-input-group nzAddOnAfter=\"menit\">\r\n                                    <input nz-input [(ngModel)]=\"item.toleransi_cabut\" />\r\n                                </nz-input-group>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/profile/pengaturan-absensi/edit-manual/edit-manual.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/profile/pengaturan-absensi/edit-manual/edit-manual.component.html ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n    <div class=\"card-body\">\r\n        <div nz-row nzGutter=\"8\">\r\n            <div nz-col nzSpan=\"5\">\r\n                Period {{bulan}} /{{tahun}}\r\n            </div>\r\n            <div nz-col nzSpan=\"12\">\r\n                <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"Pilih tipe jadwal\" [(ngModel)]=\"id_jadwal_tipe\" style=\"width: 100%\">\r\n                    <nz-option *ngFor=\"let item of listTipe\" nzValue=\"{{item.id_jadwal_tipe}}\" nzLabel=\"{{item.tipe}}\">\r\n                    </nz-option>\r\n                </nz-select>\r\n            </div>\r\n            <div nz-col nzSpan=\"4\">\r\n                <button nz-button nzType=\"primary\" nz-popconfirm nzPopconfirmTitle=\"Are you sure process this task?\" nzPopconfirmPlacement=\"bottom\" (nzOnConfirm)=\"pilihTipe()\">Choose</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/profile/pengaturan-absensi/edit-tipe/edit-tipe.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/profile/pengaturan-absensi/edit-tipe/edit-tipe.component.html ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"air__utils__heading card-header-flex\">\r\n        <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n            <h5 class=\"mb-0\">Edit Work hour type</h5>\r\n        </div>\r\n    </div>\r\n    <div class=\"card\">\r\n        <div class=\"card-body\">\r\n            <form nz-form [formGroup]=\"dataForm\" (ngSubmit)=\"simpan()\">\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Choose a type</nz-form-label>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                    </div>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-control>\r\n                            <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"Pilih tipe jadwal\"\r\n                                formControlName=\"id_jadwal_tipe\">\r\n                                <nz-option *ngFor=\"let item of listTipe\" nzValue=\"{{item.id_jadwal_tipe}}\"\r\n                                    nzLabel=\"{{item.tipe}}\"></nz-option>\r\n                            </nz-select>\r\n                        </nz-form-control>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <div class=\"footer\">\r\n                            <button type=\"button\" (click)=\"goToBack()\" class=\"ant-btn\"\r\n                                style=\"margin-right: 8px;\"><span>Cancel</span></button>\r\n                            <button type=\"submit\" class=\"ant-btn ant-btn-primary\"><span>Submit</span></button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/profile/pengaturan-absensi/view/view.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/profile/pengaturan-absensi/view/view.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n    <div class=\"card-header-flex\">\r\n        <div class=\"d-flex flex-column justify-content-center mr-auto\" style=\"margin-left: 10px\">\r\n            <h5 class=\"mb-0\">Attendance Settings</h5>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"card\">\r\n    <div class=\"card-header-flex\">\r\n        <div class=\"d-flex flex-column justify-content-center mr-auto\" style=\"margin-left: 10px\">\r\n            <h6 class=\"mb-0\">{{pegawai.nama_depan}} {{pegawai.nama_belakang}} applicable work hours with type <b>{{jadwalTipe.tipe}}</b></h6>\r\n        </div>\r\n        <div class=\"d-flex flex-column justify-content-center\" style=\"margin-right: 10px\">\r\n            <a class=\"btn btn-primary\" [routerLink]=\"['../edit-tipe/',pegawai.id_pegawai]\" routerLinkActive=\"router-link-active\">\r\n                Reset\r\n            </a>\r\n        </div>\r\n        <!-- <div class=\"d-flex flex-column justify-content-center\" style=\"margin-right: 10px\">\r\n            <a class=\"btn btn-primary\" [routerLink]=\"['../edit-manual']\" routerLinkActive=\"router-link-active\">\r\n                Atur Manual\r\n            </a>\r\n        </div> -->\r\n    </div>\r\n\r\n\r\n\r\n\r\n    <nz-table #basicTable [nzData]=\"datajadwalPegawai\" [nzFrontPagination]=\"false\" class=\"air__utils__scrollTable mb-4\">\r\n        <thead>\r\n            <tr>\r\n                <th class=\"bg-transparent text-uppercase\">Mounth</th>\r\n                <th class=\"bg-transparent text-uppercase\">Year</th>\r\n                <th class=\"bg-transparent text-uppercase\">Status</th>\r\n                <th class=\"bg-transparent text-uppercase text-right\">Action</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody>\r\n            <tr *ngFor=\"let data of basicTable.data\">\r\n                <td class=\"text-gray-6\">\r\n                    {{data.bulan}}\r\n                </td>\r\n                <td>\r\n                    <a href=\"javascript: void(0);\" class=\"text-blue\">\r\n                        {{data.tahun}}\r\n                    </a>\r\n                </td>\r\n                <td>\r\n                    {{data.tipe}}\r\n                </td>\r\n                <td class=\"font-weight-bold text-right\">\r\n                    <button [hidden]=\"data.tipe!='Schedule'\" nz-button nzType=\"primary\" (click)=\"openComponent(data.bulan_number,data.tahun)\"><i nz-icon nzType=\"check\"></i>View</button>\r\n                    <button [hidden]=\"data.tipe =='Schedule'\" nz-button nzType=\"default\" [routerLink]=\"['../edit-manual',data.bulan_number,data.tahun]\"><i nz-icon nzType=\"arrow-right\"></i>Set manual</button>\r\n                </td>\r\n            </tr>\r\n        </tbody>\r\n    </nz-table>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/hr/direktori/employee/pegawi-detail/pengaturan-absensi/detail-manual/detail-manual.component.scss":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/employee/pegawi-detail/pengaturan-absensi/detail-manual/detail-manual.component.scss ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer {\n  position: absolute;\n  bottom: 0px;\n  width: 100%;\n  border-top: 1px solid #e8e8e8;\n  padding: 10px 16px;\n  text-align: right;\n  left: 0px;\n  background: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaHIvZGlyZWt0b3JpL2VtcGxveWVlL3BlZ2F3aS1kZXRhaWwvcGVuZ2F0dXJhbi1hYnNlbnNpL2RldGFpbC1tYW51YWwvRTpcXFBST0pFS1xcREVSQVpPTkFcXGRldmV0ZWstZXJwL3NyY1xcYXBwXFxwYWdlc1xcaHJcXGRpcmVrdG9yaVxcZW1wbG95ZWVcXHBlZ2F3aS1kZXRhaWxcXHBlbmdhdHVyYW4tYWJzZW5zaVxcZGV0YWlsLW1hbnVhbFxcZGV0YWlsLW1hbnVhbC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvaHIvZGlyZWt0b3JpL2VtcGxveWVlL3BlZ2F3aS1kZXRhaWwvcGVuZ2F0dXJhbi1hYnNlbnNpL2RldGFpbC1tYW51YWwvZGV0YWlsLW1hbnVhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hyL2RpcmVrdG9yaS9lbXBsb3llZS9wZWdhd2ktZGV0YWlsL3BlbmdhdHVyYW4tYWJzZW5zaS9kZXRhaWwtbWFudWFsL2RldGFpbC1tYW51YWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9vdGVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiKDIzMiwgMjMyLCAyMzIpO1xyXG4gICAgcGFkZGluZzogMTBweCAxNnB4O1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBsZWZ0OiAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG59IiwiLmZvb3RlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2U4ZThlODtcbiAgcGFkZGluZzogMTBweCAxNnB4O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgbGVmdDogMHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/hr/direktori/employee/pegawi-detail/pengaturan-absensi/detail-manual/detail-manual.component.ts":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/employee/pegawi-detail/pengaturan-absensi/detail-manual/detail-manual.component.ts ***!
  \***********************************************************************************************************************/
/*! exports provided: DetailManualComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailManualComponent", function() { return DetailManualComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sdk/hr/services */ "./src/app/sdk/hr/services.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/tool/pesan.service */ "./src/app/services/tool/pesan.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_sdk_hr_services_absensi_pilot_aircraft_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/sdk/hr/services/absensi-pilot-aircraft.service */ "./src/app/sdk/hr/services/absensi-pilot-aircraft.service.ts");










var DetailManualComponent = /** @class */ (function () {
    function DetailManualComponent(drawerRef, spinner, pesan, absensiJadwalPegawaiTerjadwalService, router, absensiPilotAircraftService, absensiPilotRonService, absensiPilotJadwalDetailService) {
        this.drawerRef = drawerRef;
        this.spinner = spinner;
        this.pesan = pesan;
        this.absensiJadwalPegawaiTerjadwalService = absensiJadwalPegawaiTerjadwalService;
        this.router = router;
        this.absensiPilotAircraftService = absensiPilotAircraftService;
        this.absensiPilotRonService = absensiPilotRonService;
        this.absensiPilotJadwalDetailService = absensiPilotJadwalDetailService;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        this.listOfData = [];
        //--------------------------------------
        this.tahun = '';
        this.bulan = '';
        this.id_pegawai = '';
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
    DetailManualComponent.prototype.scrollToIndex = function (index) {
        this.nzTableComponent.cdkVirtualScrollViewport.scrollToIndex(index);
    };
    DetailManualComponent.prototype.trackByIndex = function (_, data) {
        return data.index;
    };
    DetailManualComponent.prototype.ngAfterViewInit = function () {
        this.nzTableComponent.cdkVirtualScrollViewport.scrolledIndexChange
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeUntil"])(this.destroy$))
            .subscribe(function (data) {
            console.log('scroll index to', data);
        });
    };
    DetailManualComponent.prototype.ngOnDestroy = function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    DetailManualComponent.prototype.ngOnInit = function () {
        console.log(this.tahun);
        this.getJadwalKerja();
        this.getRon();
        this.getAircraft();
    };
    DetailManualComponent.prototype.getRon = function () {
        var _this = this;
        this.absensiPilotRonService.getAbsensiPilotRons().subscribe(function (data) {
            _this.ron = data.data;
        });
    };
    DetailManualComponent.prototype.getAircraft = function () {
        var _this = this;
        this.absensiPilotAircraftService.getAbsensiPilotAircrafts().subscribe(function (data) {
            _this.aircraft = data.data;
        });
    };
    DetailManualComponent.prototype.close = function () {
        this.drawerRef.close(this.tahun);
    };
    DetailManualComponent.prototype.getJadwalKerja = function () {
        var _this = this;
        // this.spinner.show()
        var query = {
            id_pegawai: this.id_pegawai,
            tahun: this.tahun,
            bulan: this.bulan
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
                out.push(param);
            });
            _this.listJadwakType = out;
            _this.width = (200 + (out.length * 200)) + 'px';
            // this.spinner.hide()
        });
    };
    DetailManualComponent.prototype.getJadwalPilot = function () {
    };
    //untuk derazona pilot
    DetailManualComponent.prototype.updateDetailJadwalDetail = function (id_jadwal_pegawai, data) {
        this.absensiPilotJadwalDetailService.putAbsensiPilotJadwalDetailsId({
            id: id_jadwal_pegawai,
            body: {
                id_jadwal_detail: id_jadwal_pegawai,
                id_ron_kode: data.id_ron_kode,
                id_aircraft: data.id_aircraft,
                rencana_terbang: data.rencana_terbang,
                keterangan: data.keterangan,
                warna: data.warna
            }
        }).subscribe(function (data) {
        });
    };
    DetailManualComponent.prototype.updateDetailJadwal = function (id_jadwal_pegawai, data) {
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
    DetailManualComponent.prototype.reset = function () {
        this.router.navigate(['/hr/direktori/pegawai-detail', this.id_pegawai, 'pengaturan-absensi', 'edit-manual', this.bulan, this.tahun]);
        this.close();
    };
    DetailManualComponent.prototype.delete = function () {
        var _this = this;
        this.spinner.show();
        this.absensiJadwalPegawaiTerjadwalService.deleteAbsensiJadwalPegawaiTerjadwalsId(this.bulan + '-' + this.tahun + '-' + this.id_pegawai).subscribe(function (data) {
            _this.close();
            _this.spinner.hide();
        }, function (err) {
            _this.spinner.hide();
            _this.pesan.pesanWarningForm('gagal hapus');
        });
    };
    DetailManualComponent.ctorParameters = function () { return [
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzDrawerRef"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"] },
        { type: src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_6__["PesanService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["AbsensiJadwalPegawaiTerjadwalService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: src_app_sdk_hr_services_absensi_pilot_aircraft_service__WEBPACK_IMPORTED_MODULE_9__["AbsensiPilotAircraftService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["AbsensiPilotRonService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["AbsensiPilotJadwalDetailService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"])('virtualTable', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzTableComponent"])
    ], DetailManualComponent.prototype, "nzTableComponent", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DetailManualComponent.prototype, "tahun", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DetailManualComponent.prototype, "bulan", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DetailManualComponent.prototype, "id_pegawai", void 0);
    DetailManualComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
            selector: 'app-detail-manual',
            template: __webpack_require__(/*! raw-loader!./detail-manual.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/hr/direktori/employee/pegawi-detail/pengaturan-absensi/detail-manual/detail-manual.component.html"),
            styles: [__webpack_require__(/*! ./detail-manual.component.scss */ "./src/app/pages/hr/direktori/employee/pegawi-detail/pengaturan-absensi/detail-manual/detail-manual.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzDrawerRef"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"],
            src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_6__["PesanService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["AbsensiJadwalPegawaiTerjadwalService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            src_app_sdk_hr_services_absensi_pilot_aircraft_service__WEBPACK_IMPORTED_MODULE_9__["AbsensiPilotAircraftService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["AbsensiPilotRonService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["AbsensiPilotJadwalDetailService"]])
    ], DetailManualComponent);
    return DetailManualComponent;
}());



/***/ }),

/***/ "./src/app/pages/hr/direktori/employee/pegawi-detail/pengaturan-absensi/detail-tipe/detail-tipe.component.scss":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/employee/pegawi-detail/pengaturan-absensi/detail-tipe/detail-tipe.component.scss ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hyL2RpcmVrdG9yaS9lbXBsb3llZS9wZWdhd2ktZGV0YWlsL3BlbmdhdHVyYW4tYWJzZW5zaS9kZXRhaWwtdGlwZS9kZXRhaWwtdGlwZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/hr/direktori/employee/pegawi-detail/pengaturan-absensi/detail-tipe/detail-tipe.component.ts":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/employee/pegawi-detail/pengaturan-absensi/detail-tipe/detail-tipe.component.ts ***!
  \*******************************************************************************************************************/
/*! exports provided: DetailTipeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailTipeComponent", function() { return DetailTipeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sdk/hr/services */ "./src/app/sdk/hr/services.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../service/pegawai-detail.service */ "./src/app/pages/hr/direktori/employee/pegawi-detail/service/pegawai-detail.service.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");







var DetailTipeComponent = /** @class */ (function () {
    function DetailTipeComponent(direktoriPegawaiService, absensiJadwalTipeService, absensiJadwalPegawaiTerjadwalService, absensiJadwalTipeNormalDetailService, spinner, router, activatedRoute, pegawaiDetailService, nzMessageService) {
        this.direktoriPegawaiService = direktoriPegawaiService;
        this.absensiJadwalTipeService = absensiJadwalTipeService;
        this.absensiJadwalPegawaiTerjadwalService = absensiJadwalPegawaiTerjadwalService;
        this.absensiJadwalTipeNormalDetailService = absensiJadwalTipeNormalDetailService;
        this.spinner = spinner;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.pegawaiDetailService = pegawaiDetailService;
        this.nzMessageService = nzMessageService;
        this.id_pegawai = '';
        this.id_jadwal_tipe = '';
        this.pegawai = {};
        this.datajadwalPegawai = [];
        this.jadwalTipe = {};
        this.listJadwakType = [];
        this.numberToHari = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
    }
    DetailTipeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pegawaiDetailService.getIdPegawai().subscribe(function (data) {
            _this.id_pegawai = data;
            console.log('id pegawai paja tu ' + _this.id_pegawai);
        });
        this.getPegawai();
        this.getItem();
    };
    DetailTipeComponent.prototype.getPegawai = function () {
        var _this = this;
        this.spinner.show();
        this.direktoriPegawaiService.getDirektoriPegawaisId(this.id_pegawai)
            .subscribe(function (data) {
            _this.pegawai = data.data;
            _this.getTipeJamKerja(data.data.id_jadwal_tipe);
            _this.spinner.hide();
        });
    };
    DetailTipeComponent.prototype.getTipeJamKerja = function (id_jadwal_tipe) {
        var _this = this;
        this.absensiJadwalTipeService.getAbsensiJadwalTipesId(id_jadwal_tipe).subscribe(function (data) {
            _this.jadwalTipe = data.data;
        });
    };
    DetailTipeComponent.prototype.getItem = function () {
        var _this = this;
        var filter = {
            id_jadwal_tipe: this.id_jadwal_tipe,
        };
        this.absensiJadwalTipeNormalDetailService.getAbsensiJadwalTipeNormalDetails(JSON.stringify(filter)).subscribe(function (data) {
            var out = [];
            data.data.forEach(function (item) {
                var param = item;
                param['nama_hari'] = _this.numberToHari[parseInt(item.hari) - 1];
                if (param.status_jadwal == 'ya') {
                    param.status_jadwal = true;
                }
                else
                    (param.status_jadwal = false);
                out.push(param);
            });
            _this.listJadwakType = out;
        });
    };
    DetailTipeComponent.prototype.goToBack = function () {
        this.router.navigate(['/hr/direktori/pegawai-detail', this.id_pegawai, 'pengaturan-cuti', 'view']);
    };
    DetailTipeComponent.ctorParameters = function () { return [
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["DirektoriPegawaiService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["AbsensiJadwalTipeService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["AbsensiJadwalPegawaiTerjadwalService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["AbsensiJadwalTipeNormalDetailService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_5__["PegawaiDetailService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__["NzMessageService"] }
    ]; };
    DetailTipeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-detail-tipe',
            template: __webpack_require__(/*! raw-loader!./detail-tipe.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/hr/direktori/employee/pegawi-detail/pengaturan-absensi/detail-tipe/detail-tipe.component.html"),
            styles: [__webpack_require__(/*! ./detail-tipe.component.scss */ "./src/app/pages/hr/direktori/employee/pegawi-detail/pengaturan-absensi/detail-tipe/detail-tipe.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["DirektoriPegawaiService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["AbsensiJadwalTipeService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["AbsensiJadwalPegawaiTerjadwalService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["AbsensiJadwalTipeNormalDetailService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_5__["PegawaiDetailService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__["NzMessageService"]])
    ], DetailTipeComponent);
    return DetailTipeComponent;
}());



/***/ }),

/***/ "./src/app/pages/hr/direktori/employee/pegawi-detail/pengaturan-absensi/edit-manual/edit-manual.component.scss":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/employee/pegawi-detail/pengaturan-absensi/edit-manual/edit-manual.component.scss ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hyL2RpcmVrdG9yaS9lbXBsb3llZS9wZWdhd2ktZGV0YWlsL3BlbmdhdHVyYW4tYWJzZW5zaS9lZGl0LW1hbnVhbC9lZGl0LW1hbnVhbC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/hr/direktori/employee/pegawi-detail/pengaturan-absensi/edit-manual/edit-manual.component.ts":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/employee/pegawi-detail/pengaturan-absensi/edit-manual/edit-manual.component.ts ***!
  \*******************************************************************************************************************/
/*! exports provided: EditManualComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditManualComponent", function() { return EditManualComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sdk/hr/services */ "./src/app/sdk/hr/services.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/angular-reactive-forms-helper */ "./src/app/services/angular-reactive-forms-helper.ts");
/* harmony import */ var src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/tool/pesan.service */ "./src/app/services/tool/pesan.service.ts");
/* harmony import */ var _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../service/pegawai-detail.service */ "./src/app/pages/hr/direktori/employee/pegawi-detail/service/pegawai-detail.service.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");









var EditManualComponent = /** @class */ (function () {
    function EditManualComponent(absensiJadwalTipeService, absensiJadwalPegawaiTerjadwalService, spinner, router, activatedRoute, fb, pesan, pegawaiDetailService, nzMessageService) {
        this.absensiJadwalTipeService = absensiJadwalTipeService;
        this.absensiJadwalPegawaiTerjadwalService = absensiJadwalPegawaiTerjadwalService;
        this.spinner = spinner;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.fb = fb;
        this.pesan = pesan;
        this.pegawaiDetailService = pegawaiDetailService;
        this.nzMessageService = nzMessageService;
        this.id_pegawai = '';
        this.id_jadwal_tipe = null;
        this.listTipe = [];
        this.ListJadwal = {};
        this.bulan = null;
        this.tahun = null;
    }
    EditManualComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.paramMap.subscribe(function (data) {
            if (data.get('bulan')) {
                _this.bulan = data.get('bulan');
            }
            if (data.get('tahun')) {
                _this.tahun = data.get('tahun');
            }
        });
        this.pegawaiDetailService.getIdPegawai().subscribe(function (data) {
            _this.id_pegawai = data;
        });
        this.getPreeData();
    };
    EditManualComponent.prototype.getPreeData = function () {
        var _this = this;
        this.spinner.show();
        this.absensiJadwalTipeService.getAbsensiJadwalTipes().subscribe(function (data) {
            _this.listTipe = data.data;
            _this.spinner.hide();
        });
    };
    EditManualComponent.prototype.pilihTipe = function () {
        var _this = this;
        this.spinner.show();
        if (!this.id_jadwal_tipe) {
            this.pesan.pesanWarningForm("Jadwal tipe harus di pilih sebagai template dasar");
        }
        var param = {
            id_pegawai: this.id_pegawai,
            id_jadwal_tipe: this.id_jadwal_tipe,
            bulan: this.bulan,
            tahun: this.tahun
        };
        this.absensiJadwalPegawaiTerjadwalService.postAbsensiJadwalPegawaiTerjadwals(param).subscribe(function (data) {
            _this.goToBack();
            _this.pesan.pesanBerhasilForm("Berhasil di setting template, silahkan update pda menu View");
            _this.spinner.hide();
        }, function (err) {
            _this.pesan.pesanBerhasilForm("Gagal");
            _this.spinner.hide();
        });
    };
    EditManualComponent.prototype.goToBack = function () {
        this.router.navigate(['/hr/direktori/pegawai-detail', this.id_pegawai, 'pengaturan-absensi', 'view']);
    };
    EditManualComponent.ctorParameters = function () { return [
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["AbsensiJadwalTipeService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["AbsensiJadwalPegawaiTerjadwalService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_5__["FormBuilderTypeSafe"] },
        { type: src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_6__["PesanService"] },
        { type: _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_7__["PegawaiDetailService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_8__["NzMessageService"] }
    ]; };
    EditManualComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-manual',
            template: __webpack_require__(/*! raw-loader!./edit-manual.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/hr/direktori/employee/pegawi-detail/pengaturan-absensi/edit-manual/edit-manual.component.html"),
            styles: [__webpack_require__(/*! ./edit-manual.component.scss */ "./src/app/pages/hr/direktori/employee/pegawi-detail/pengaturan-absensi/edit-manual/edit-manual.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["AbsensiJadwalTipeService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["AbsensiJadwalPegawaiTerjadwalService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_5__["FormBuilderTypeSafe"],
            src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_6__["PesanService"],
            _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_7__["PegawaiDetailService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_8__["NzMessageService"]])
    ], EditManualComponent);
    return EditManualComponent;
}());



/***/ }),

/***/ "./src/app/pages/hr/direktori/employee/pegawi-detail/pengaturan-absensi/edit-tipe/edit-tipe.component.scss":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/employee/pegawi-detail/pengaturan-absensi/edit-tipe/edit-tipe.component.scss ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hyL2RpcmVrdG9yaS9lbXBsb3llZS9wZWdhd2ktZGV0YWlsL3BlbmdhdHVyYW4tYWJzZW5zaS9lZGl0LXRpcGUvZWRpdC10aXBlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/hr/direktori/employee/pegawi-detail/pengaturan-absensi/edit-tipe/edit-tipe.component.ts":
/*!***************************************************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/employee/pegawi-detail/pengaturan-absensi/edit-tipe/edit-tipe.component.ts ***!
  \***************************************************************************************************************/
/*! exports provided: EditTipeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditTipeComponent", function() { return EditTipeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sdk/hr/services */ "./src/app/sdk/hr/services.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../service/pegawai-detail.service */ "./src/app/pages/hr/direktori/employee/pegawi-detail/service/pegawai-detail.service.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/angular-reactive-forms-helper */ "./src/app/services/angular-reactive-forms-helper.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/tool/pesan.service */ "./src/app/services/tool/pesan.service.ts");










var EditTipeComponent = /** @class */ (function () {
    function EditTipeComponent(direktoriPegawaiService, absensiJadwalTipeService, spinner, router, activatedRoute, fb, pesan, pegawaiDetailService, nzMessageService) {
        this.direktoriPegawaiService = direktoriPegawaiService;
        this.absensiJadwalTipeService = absensiJadwalTipeService;
        this.spinner = spinner;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.fb = fb;
        this.pesan = pesan;
        this.pegawaiDetailService = pegawaiDetailService;
        this.nzMessageService = nzMessageService;
        this.id_pegawai = '';
        this.pegawai = {};
        this.listTipe = [];
    }
    EditTipeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pegawaiDetailService.getIdPegawai().subscribe(function (data) {
            _this.id_pegawai = data;
            console.log('id pegawai paja tu ' + _this.id_pegawai);
        });
        this.activatedRoute.paramMap.subscribe(function (data) {
            if (data.get('id_pegawai')) {
                _this.id_pegawai = data.get('id_pegawai');
                console.log(data.get('id_pegawai'));
                _this.getPreeData();
                _this.getData();
                _this.form();
            }
        });
    };
    EditTipeComponent.prototype.getPreeData = function () {
        var _this = this;
        this.absensiJadwalTipeService.getAbsensiJadwalTipes().subscribe(function (data) {
            _this.listTipe = data.data;
        });
    };
    EditTipeComponent.prototype.getData = function () {
        var _this = this;
        this.direktoriPegawaiService.getDirektoriPegawaisId(this.id_pegawai).subscribe(function (data) {
            _this.dataForm.setValue(data.data);
        });
    };
    EditTipeComponent.prototype.form = function () {
        this.dataForm = this.fb.group({
            no_induk: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            no_absensi: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            nama_belakang: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            nama_depan: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            jenis_kelamin: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            kewarganegaraan: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            type_pegawai: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            tanggal_masuk: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            hp: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            id_ptkp: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            id_jadwal_tipe: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            status_pegawai: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            id_pegawai: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            bpjs_jht: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            bpjs_jkk: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            bpjs_jkm: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            bpjs_jp: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            id_klaim_kategori: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            bpjs_kesehatan: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            id_user_create: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            created_at: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            updated_at: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            tanggal_keluar: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            foto: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('')
        });
    };
    EditTipeComponent.prototype.simpan = function () {
        var _this = this;
        this.spinner.show();
        if (this.dataForm.invalid) {
            this.pesan.pesanWarningForm('Form Tidak Valid');
            this.spinner.hide();
            return;
        }
        this.pegawai = this.dataForm.value;
        this.direktoriPegawaiService
            .putDirektoriPegawaisId({ id: this.id_pegawai, body: this.pegawai })
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
    EditTipeComponent.prototype.goToBack = function () {
        this.router.navigate(['/hr/direktori/pegawai-detail', this.id_pegawai, 'pengaturan-absensi', 'view']);
    };
    EditTipeComponent.ctorParameters = function () { return [
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["DirektoriPegawaiService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["AbsensiJadwalTipeService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_7__["FormBuilderTypeSafe"] },
        { type: src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_9__["PesanService"] },
        { type: _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_5__["PegawaiDetailService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__["NzMessageService"] }
    ]; };
    EditTipeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-tipe',
            template: __webpack_require__(/*! raw-loader!./edit-tipe.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/hr/direktori/employee/pegawi-detail/pengaturan-absensi/edit-tipe/edit-tipe.component.html"),
            styles: [__webpack_require__(/*! ./edit-tipe.component.scss */ "./src/app/pages/hr/direktori/employee/pegawi-detail/pengaturan-absensi/edit-tipe/edit-tipe.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["DirektoriPegawaiService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["AbsensiJadwalTipeService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_7__["FormBuilderTypeSafe"],
            src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_9__["PesanService"],
            _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_5__["PegawaiDetailService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__["NzMessageService"]])
    ], EditTipeComponent);
    return EditTipeComponent;
}());



/***/ }),

/***/ "./src/app/pages/hr/direktori/employee/pegawi-detail/pengaturan-absensi/pengaturan-absensi-routing.module.ts":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/employee/pegawi-detail/pengaturan-absensi/pengaturan-absensi-routing.module.ts ***!
  \*******************************************************************************************************************/
/*! exports provided: PengaturanAbsensiRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PengaturanAbsensiRoutingModule", function() { return PengaturanAbsensiRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _detail_manual_detail_manual_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./detail-manual/detail-manual.component */ "./src/app/pages/hr/direktori/employee/pegawi-detail/pengaturan-absensi/detail-manual/detail-manual.component.ts");
/* harmony import */ var _edit_manual_edit_manual_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit-manual/edit-manual.component */ "./src/app/pages/hr/direktori/employee/pegawi-detail/pengaturan-absensi/edit-manual/edit-manual.component.ts");
/* harmony import */ var _view_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view/view.component */ "./src/app/pages/hr/direktori/employee/pegawi-detail/pengaturan-absensi/view/view.component.ts");
/* harmony import */ var _edit_tipe_edit_tipe_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit-tipe/edit-tipe.component */ "./src/app/pages/hr/direktori/employee/pegawi-detail/pengaturan-absensi/edit-tipe/edit-tipe.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _detail_tipe_detail_tipe_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./detail-tipe/detail-tipe.component */ "./src/app/pages/hr/direktori/employee/pegawi-detail/pengaturan-absensi/detail-tipe/detail-tipe.component.ts");








var routes = [
    {
        path: '',
        redirectTo: 'list'
    },
    {
        path: 'edit-tipe/:id_pegawai',
        component: _edit_tipe_edit_tipe_component__WEBPACK_IMPORTED_MODULE_4__["EditTipeComponent"],
    },
    {
        path: 'detail-tipe',
        component: _detail_tipe_detail_tipe_component__WEBPACK_IMPORTED_MODULE_7__["DetailTipeComponent"],
    },
    {
        path: 'view',
        component: _view_view_component__WEBPACK_IMPORTED_MODULE_3__["ViewComponent"],
    },
    {
        path: 'edit-manual/:bulan/:tahun',
        component: _edit_manual_edit_manual_component__WEBPACK_IMPORTED_MODULE_2__["EditManualComponent"],
    },
    {
        path: 'detail-manual',
        component: _detail_manual_detail_manual_component__WEBPACK_IMPORTED_MODULE_1__["DetailManualComponent"],
    },
];
var PengaturanAbsensiRoutingModule = /** @class */ (function () {
    function PengaturanAbsensiRoutingModule() {
    }
    PengaturanAbsensiRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"]]
        })
    ], PengaturanAbsensiRoutingModule);
    return PengaturanAbsensiRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/hr/direktori/employee/pegawi-detail/pengaturan-absensi/pengaturan-absensi.module.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/employee/pegawi-detail/pengaturan-absensi/pengaturan-absensi.module.ts ***!
  \***********************************************************************************************************/
/*! exports provided: PengaturanAbsensiModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PengaturanAbsensiModule", function() { return PengaturanAbsensiModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _pengaturan_absensi_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pengaturan-absensi-routing.module */ "./src/app/pages/hr/direktori/employee/pegawi-detail/pengaturan-absensi/pengaturan-absensi-routing.module.ts");
/* harmony import */ var _view_view_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./view/view.component */ "./src/app/pages/hr/direktori/employee/pegawi-detail/pengaturan-absensi/view/view.component.ts");
/* harmony import */ var _edit_tipe_edit_tipe_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-tipe/edit-tipe.component */ "./src/app/pages/hr/direktori/employee/pegawi-detail/pengaturan-absensi/edit-tipe/edit-tipe.component.ts");
/* harmony import */ var _edit_manual_edit_manual_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit-manual/edit-manual.component */ "./src/app/pages/hr/direktori/employee/pegawi-detail/pengaturan-absensi/edit-manual/edit-manual.component.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/angular-reactive-forms-helper */ "./src/app/services/angular-reactive-forms-helper.ts");
/* harmony import */ var _detail_tipe_detail_tipe_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./detail-tipe/detail-tipe.component */ "./src/app/pages/hr/direktori/employee/pegawi-detail/pengaturan-absensi/detail-tipe/detail-tipe.component.ts");
/* harmony import */ var _detail_manual_detail_manual_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./detail-manual/detail-manual.component */ "./src/app/pages/hr/direktori/employee/pegawi-detail/pengaturan-absensi/detail-manual/detail-manual.component.ts");













var PengaturanAbsensiModule = /** @class */ (function () {
    function PengaturanAbsensiModule() {
    }
    PengaturanAbsensiModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_view_view_component__WEBPACK_IMPORTED_MODULE_4__["ViewComponent"], _edit_tipe_edit_tipe_component__WEBPACK_IMPORTED_MODULE_5__["EditTipeComponent"], _edit_manual_edit_manual_component__WEBPACK_IMPORTED_MODULE_6__["EditManualComponent"], _detail_tipe_detail_tipe_component__WEBPACK_IMPORTED_MODULE_11__["DetailTipeComponent"], _detail_manual_detail_manual_component__WEBPACK_IMPORTED_MODULE_12__["DetailManualComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _pengaturan_absensi_routing_module__WEBPACK_IMPORTED_MODULE_3__["PengaturanAbsensiRoutingModule"],
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__["NgZorroAntdModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_9__["PerfectScrollbarModule"],
            ],
            providers: [
                src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_10__["FormBuilderTypeSafe"]
            ],
        })
    ], PengaturanAbsensiModule);
    return PengaturanAbsensiModule;
}());



/***/ }),

/***/ "./src/app/pages/hr/direktori/employee/pegawi-detail/pengaturan-absensi/view/view.component.scss":
/*!*******************************************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/employee/pegawi-detail/pengaturan-absensi/view/view.component.scss ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hyL2RpcmVrdG9yaS9lbXBsb3llZS9wZWdhd2ktZGV0YWlsL3BlbmdhdHVyYW4tYWJzZW5zaS92aWV3L3ZpZXcuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/hr/direktori/employee/pegawi-detail/pengaturan-absensi/view/view.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/employee/pegawi-detail/pengaturan-absensi/view/view.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: ViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewComponent", function() { return ViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _detail_manual_detail_manual_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../detail-manual/detail-manual.component */ "./src/app/pages/hr/direktori/employee/pegawi-detail/pengaturan-absensi/detail-manual/detail-manual.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/sdk/hr/services */ "./src/app/sdk/hr/services.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../service/pegawai-detail.service */ "./src/app/pages/hr/direktori/employee/pegawi-detail/service/pegawai-detail.service.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");








var ViewComponent = /** @class */ (function () {
    function ViewComponent(direktoriPegawaiService, absensiJadwalTipeService, absensiJadwalPegawaiTerjadwalService, spinner, router, activatedRoute, pegawaiDetailService, nzMessageService, drawerService) {
        this.direktoriPegawaiService = direktoriPegawaiService;
        this.absensiJadwalTipeService = absensiJadwalTipeService;
        this.absensiJadwalPegawaiTerjadwalService = absensiJadwalPegawaiTerjadwalService;
        this.spinner = spinner;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.pegawaiDetailService = pegawaiDetailService;
        this.nzMessageService = nzMessageService;
        this.drawerService = drawerService;
        this.id_pegawai = '';
        this.pegawai = {};
        this.datajadwalPegawai = [];
        this.jadwalTipe = {};
        // ##update detail
        this.value = "";
    }
    ViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pegawaiDetailService.getIdPegawai().subscribe(function (data) {
            _this.id_pegawai = data;
            console.log('id pegawai paja tu ' + _this.id_pegawai);
        });
        this.getPegawai();
        this.getJadwalPegawai();
    };
    ViewComponent.prototype.getPegawai = function () {
        var _this = this;
        this.spinner.show();
        this.direktoriPegawaiService.getDirektoriPegawaisId(this.id_pegawai)
            .subscribe(function (data) {
            _this.pegawai = data.data;
            _this.getTipeJamKerja(data.data.id_jadwal_tipe);
            _this.spinner.hide();
        });
    };
    ViewComponent.prototype.getTipeJamKerja = function (id_jadwal_tipe) {
        var _this = this;
        this.absensiJadwalTipeService.getAbsensiJadwalTipesId(id_jadwal_tipe).subscribe(function (data) {
            _this.jadwalTipe = data.data;
        });
    };
    ViewComponent.prototype.getJadwalPegawai = function () {
        var _this = this;
        this.spinner.show();
        this.absensiJadwalPegawaiTerjadwalService.getAbsensiJadwalPegawaiTerjadwals(JSON.stringify({ id_pegawai: this.id_pegawai })).subscribe(function (data) {
            _this.datajadwalPegawai = data.data;
            _this.spinner.hide();
        });
    };
    ViewComponent.prototype.goToBack = function () {
        this.router.navigate(['/hr/direktori/pegawai-detail', this.id_pegawai, 'pengaturan-absensi', 'view']);
    };
    ViewComponent.prototype.openComponent = function (bulan, tahun) {
        var _this = this;
        var drawerRef = this.drawerService.create({
            nzTitle: 'Schedule Update',
            nzWidth: '1000px',
            nzContent: _detail_manual_detail_manual_component__WEBPACK_IMPORTED_MODULE_1__["DetailManualComponent"],
            nzContentParams: {
                bulan: bulan,
                id_pegawai: this.id_pegawai,
                tahun: tahun,
            }
        });
        drawerRef.afterOpen.subscribe(function () {
            console.log('Drawer(Component) open');
        });
        drawerRef.afterClose.subscribe(function (data) {
            console.log(data);
            if (typeof data === 'string') {
                _this.value = data;
            }
        });
    };
    ViewComponent.ctorParameters = function () { return [
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_3__["DirektoriPegawaiService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_3__["AbsensiJadwalTipeService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_3__["AbsensiJadwalPegawaiTerjadwalService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
        { type: _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_6__["PegawaiDetailService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__["NzMessageService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__["NzDrawerService"] }
    ]; };
    ViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-view',
            template: __webpack_require__(/*! raw-loader!./view.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/hr/direktori/employee/pegawi-detail/pengaturan-absensi/view/view.component.html"),
            styles: [__webpack_require__(/*! ./view.component.scss */ "./src/app/pages/hr/direktori/employee/pegawi-detail/pengaturan-absensi/view/view.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_3__["DirektoriPegawaiService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_3__["AbsensiJadwalTipeService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_3__["AbsensiJadwalPegawaiTerjadwalService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_6__["PegawaiDetailService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__["NzMessageService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__["NzDrawerService"]])
    ], ViewComponent);
    return ViewComponent;
}());



/***/ }),

/***/ "./src/app/pages/profile/pengaturan-absensi/detail-manual/detail-manual.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/profile/pengaturan-absensi/detail-manual/detail-manual.component.scss ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer {\n  position: absolute;\n  bottom: 0px;\n  width: 100%;\n  border-top: 1px solid #e8e8e8;\n  padding: 10px 16px;\n  text-align: right;\n  left: 0px;\n  background: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvZmlsZS9wZW5nYXR1cmFuLWFic2Vuc2kvZGV0YWlsLW1hbnVhbC9FOlxcUFJPSkVLXFxERVJBWk9OQVxcZGV2ZXRlay1lcnAvc3JjXFxhcHBcXHBhZ2VzXFxwcm9maWxlXFxwZW5nYXR1cmFuLWFic2Vuc2lcXGRldGFpbC1tYW51YWxcXGRldGFpbC1tYW51YWwuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3Byb2ZpbGUvcGVuZ2F0dXJhbi1hYnNlbnNpL2RldGFpbC1tYW51YWwvZGV0YWlsLW1hbnVhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2ZpbGUvcGVuZ2F0dXJhbi1hYnNlbnNpL2RldGFpbC1tYW51YWwvZGV0YWlsLW1hbnVhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb290ZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2IoMjMyLCAyMzIsIDIzMik7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDE2cHg7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIGxlZnQ6IDBweDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbn0iLCIuZm9vdGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZThlOGU4O1xuICBwYWRkaW5nOiAxMHB4IDE2cHg7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBsZWZ0OiAwcHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/profile/pengaturan-absensi/detail-manual/detail-manual.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/profile/pengaturan-absensi/detail-manual/detail-manual.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: DetailManualComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailManualComponent", function() { return DetailManualComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sdk/hr/services */ "./src/app/sdk/hr/services.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/tool/pesan.service */ "./src/app/services/tool/pesan.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_sdk_hr_services_absensi_pilot_aircraft_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/sdk/hr/services/absensi-pilot-aircraft.service */ "./src/app/sdk/hr/services/absensi-pilot-aircraft.service.ts");










var DetailManualComponent = /** @class */ (function () {
    function DetailManualComponent(drawerRef, spinner, pesan, absensiJadwalPegawaiTerjadwalService, router, absensiPilotAircraftService, absensiPilotRonService, absensiPilotJadwalDetailService) {
        this.drawerRef = drawerRef;
        this.spinner = spinner;
        this.pesan = pesan;
        this.absensiJadwalPegawaiTerjadwalService = absensiJadwalPegawaiTerjadwalService;
        this.router = router;
        this.absensiPilotAircraftService = absensiPilotAircraftService;
        this.absensiPilotRonService = absensiPilotRonService;
        this.absensiPilotJadwalDetailService = absensiPilotJadwalDetailService;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        this.listOfData = [];
        //--------------------------------------
        this.tahun = '';
        this.bulan = '';
        this.id_pegawai = '';
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
    DetailManualComponent.prototype.scrollToIndex = function (index) {
        this.nzTableComponent.cdkVirtualScrollViewport.scrollToIndex(index);
    };
    DetailManualComponent.prototype.trackByIndex = function (_, data) {
        return data.index;
    };
    DetailManualComponent.prototype.ngAfterViewInit = function () {
        this.nzTableComponent.cdkVirtualScrollViewport.scrolledIndexChange
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeUntil"])(this.destroy$))
            .subscribe(function (data) {
            console.log('scroll index to', data);
        });
    };
    DetailManualComponent.prototype.ngOnDestroy = function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    DetailManualComponent.prototype.ngOnInit = function () {
        console.log(this.tahun);
        this.getJadwalKerja();
        this.getRon();
        this.getAircraft();
    };
    DetailManualComponent.prototype.getRon = function () {
        var _this = this;
        this.absensiPilotRonService.getAbsensiPilotRons().subscribe(function (data) {
            _this.ron = data.data;
        });
    };
    DetailManualComponent.prototype.getAircraft = function () {
        var _this = this;
        this.absensiPilotAircraftService.getAbsensiPilotAircrafts().subscribe(function (data) {
            _this.aircraft = data.data;
        });
    };
    DetailManualComponent.prototype.close = function () {
        this.drawerRef.close(this.tahun);
    };
    DetailManualComponent.prototype.getJadwalKerja = function () {
        var _this = this;
        // this.spinner.show()
        var query = {
            id_pegawai: this.id_pegawai,
            tahun: this.tahun,
            bulan: this.bulan
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
                out.push(param);
            });
            _this.listJadwakType = out;
            _this.width = (200 + (out.length * 200)) + 'px';
            // this.spinner.hide()
        });
    };
    DetailManualComponent.prototype.getJadwalPilot = function () {
    };
    //untuk derazona pilot
    DetailManualComponent.prototype.updateDetailJadwalDetail = function (id_jadwal_pegawai, data) {
        this.absensiPilotJadwalDetailService.putAbsensiPilotJadwalDetailsId({
            id: id_jadwal_pegawai,
            body: {
                id_jadwal_detail: id_jadwal_pegawai,
                id_ron_kode: data.id_ron_kode,
                id_aircraft: data.id_aircraft,
                rencana_terbang: data.rencana_terbang,
                keterangan: data.keterangan,
                warna: data.warna
            }
        }).subscribe(function (data) {
        });
    };
    DetailManualComponent.prototype.updateDetailJadwal = function (id_jadwal_pegawai, data) {
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
    DetailManualComponent.prototype.reset = function () {
        this.router.navigate(['/hr/direktori/pegawai-detail', this.id_pegawai, 'pengaturan-absensi', 'edit-manual', this.bulan, this.tahun]);
        this.close();
    };
    DetailManualComponent.prototype.delete = function () {
        var _this = this;
        this.spinner.show();
        this.absensiJadwalPegawaiTerjadwalService.deleteAbsensiJadwalPegawaiTerjadwalsId(this.bulan + '-' + this.tahun + '-' + this.id_pegawai).subscribe(function (data) {
            _this.close();
            _this.spinner.hide();
        }, function (err) {
            _this.spinner.hide();
            _this.pesan.pesanWarningForm('gagal hapus');
        });
    };
    DetailManualComponent.ctorParameters = function () { return [
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzDrawerRef"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"] },
        { type: src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_6__["PesanService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["AbsensiJadwalPegawaiTerjadwalService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: src_app_sdk_hr_services_absensi_pilot_aircraft_service__WEBPACK_IMPORTED_MODULE_9__["AbsensiPilotAircraftService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["AbsensiPilotRonService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["AbsensiPilotJadwalDetailService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"])('virtualTable', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzTableComponent"])
    ], DetailManualComponent.prototype, "nzTableComponent", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DetailManualComponent.prototype, "tahun", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DetailManualComponent.prototype, "bulan", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DetailManualComponent.prototype, "id_pegawai", void 0);
    DetailManualComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
            selector: 'app-detail-manual',
            template: __webpack_require__(/*! raw-loader!./detail-manual.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/profile/pengaturan-absensi/detail-manual/detail-manual.component.html"),
            styles: [__webpack_require__(/*! ./detail-manual.component.scss */ "./src/app/pages/profile/pengaturan-absensi/detail-manual/detail-manual.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzDrawerRef"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"],
            src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_6__["PesanService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["AbsensiJadwalPegawaiTerjadwalService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            src_app_sdk_hr_services_absensi_pilot_aircraft_service__WEBPACK_IMPORTED_MODULE_9__["AbsensiPilotAircraftService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["AbsensiPilotRonService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["AbsensiPilotJadwalDetailService"]])
    ], DetailManualComponent);
    return DetailManualComponent;
}());



/***/ }),

/***/ "./src/app/pages/profile/pengaturan-absensi/detail-tipe/detail-tipe.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/profile/pengaturan-absensi/detail-tipe/detail-tipe.component.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2ZpbGUvcGVuZ2F0dXJhbi1hYnNlbnNpL2RldGFpbC10aXBlL2RldGFpbC10aXBlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/profile/pengaturan-absensi/detail-tipe/detail-tipe.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/profile/pengaturan-absensi/detail-tipe/detail-tipe.component.ts ***!
  \***************************************************************************************/
/*! exports provided: DetailTipeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailTipeComponent", function() { return DetailTipeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sdk/hr/services */ "./src/app/sdk/hr/services.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../service/pegawai-detail.service */ "./src/app/pages/profile/service/pegawai-detail.service.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");







var DetailTipeComponent = /** @class */ (function () {
    function DetailTipeComponent(direktoriPegawaiService, absensiJadwalTipeService, absensiJadwalPegawaiTerjadwalService, absensiJadwalTipeNormalDetailService, spinner, router, activatedRoute, pegawaiDetailService, nzMessageService) {
        this.direktoriPegawaiService = direktoriPegawaiService;
        this.absensiJadwalTipeService = absensiJadwalTipeService;
        this.absensiJadwalPegawaiTerjadwalService = absensiJadwalPegawaiTerjadwalService;
        this.absensiJadwalTipeNormalDetailService = absensiJadwalTipeNormalDetailService;
        this.spinner = spinner;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.pegawaiDetailService = pegawaiDetailService;
        this.nzMessageService = nzMessageService;
        this.id_pegawai = '';
        this.id_jadwal_tipe = '';
        this.pegawai = {};
        this.datajadwalPegawai = [];
        this.jadwalTipe = {};
        this.listJadwakType = [];
        this.numberToHari = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
    }
    DetailTipeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pegawaiDetailService.getIdPegawai().subscribe(function (data) {
            _this.id_pegawai = data;
            console.log('id pegawai paja tu ' + _this.id_pegawai);
        });
        this.getPegawai();
        this.getItem();
    };
    DetailTipeComponent.prototype.getPegawai = function () {
        var _this = this;
        this.spinner.show();
        this.direktoriPegawaiService.getDirektoriPegawaisId(this.id_pegawai)
            .subscribe(function (data) {
            _this.pegawai = data.data;
            _this.getTipeJamKerja(data.data.id_jadwal_tipe);
            _this.spinner.hide();
        });
    };
    DetailTipeComponent.prototype.getTipeJamKerja = function (id_jadwal_tipe) {
        var _this = this;
        this.absensiJadwalTipeService.getAbsensiJadwalTipesId(id_jadwal_tipe).subscribe(function (data) {
            _this.jadwalTipe = data.data;
        });
    };
    DetailTipeComponent.prototype.getItem = function () {
        var _this = this;
        var filter = {
            id_jadwal_tipe: this.id_jadwal_tipe,
        };
        this.absensiJadwalTipeNormalDetailService.getAbsensiJadwalTipeNormalDetails(JSON.stringify(filter)).subscribe(function (data) {
            var out = [];
            data.data.forEach(function (item) {
                var param = item;
                param['nama_hari'] = _this.numberToHari[parseInt(item.hari) - 1];
                if (param.status_jadwal == 'ya') {
                    param.status_jadwal = true;
                }
                else
                    (param.status_jadwal = false);
                out.push(param);
            });
            _this.listJadwakType = out;
        });
    };
    DetailTipeComponent.prototype.goToBack = function () {
        this.router.navigate(['/hr/direktori/pegawai-detail', this.id_pegawai, 'pengaturan-cuti', 'view']);
    };
    DetailTipeComponent.ctorParameters = function () { return [
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["DirektoriPegawaiService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["AbsensiJadwalTipeService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["AbsensiJadwalPegawaiTerjadwalService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["AbsensiJadwalTipeNormalDetailService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_5__["PegawaiDetailService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__["NzMessageService"] }
    ]; };
    DetailTipeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-detail-tipe',
            template: __webpack_require__(/*! raw-loader!./detail-tipe.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/profile/pengaturan-absensi/detail-tipe/detail-tipe.component.html"),
            styles: [__webpack_require__(/*! ./detail-tipe.component.scss */ "./src/app/pages/profile/pengaturan-absensi/detail-tipe/detail-tipe.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["DirektoriPegawaiService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["AbsensiJadwalTipeService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["AbsensiJadwalPegawaiTerjadwalService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["AbsensiJadwalTipeNormalDetailService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_5__["PegawaiDetailService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__["NzMessageService"]])
    ], DetailTipeComponent);
    return DetailTipeComponent;
}());



/***/ }),

/***/ "./src/app/pages/profile/pengaturan-absensi/edit-manual/edit-manual.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/profile/pengaturan-absensi/edit-manual/edit-manual.component.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2ZpbGUvcGVuZ2F0dXJhbi1hYnNlbnNpL2VkaXQtbWFudWFsL2VkaXQtbWFudWFsLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/profile/pengaturan-absensi/edit-manual/edit-manual.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/profile/pengaturan-absensi/edit-manual/edit-manual.component.ts ***!
  \***************************************************************************************/
/*! exports provided: EditManualComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditManualComponent", function() { return EditManualComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sdk/hr/services */ "./src/app/sdk/hr/services.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/angular-reactive-forms-helper */ "./src/app/services/angular-reactive-forms-helper.ts");
/* harmony import */ var src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/tool/pesan.service */ "./src/app/services/tool/pesan.service.ts");
/* harmony import */ var _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../service/pegawai-detail.service */ "./src/app/pages/profile/service/pegawai-detail.service.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");









var EditManualComponent = /** @class */ (function () {
    function EditManualComponent(absensiJadwalTipeService, absensiJadwalPegawaiTerjadwalService, spinner, router, activatedRoute, fb, pesan, pegawaiDetailService, nzMessageService) {
        this.absensiJadwalTipeService = absensiJadwalTipeService;
        this.absensiJadwalPegawaiTerjadwalService = absensiJadwalPegawaiTerjadwalService;
        this.spinner = spinner;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.fb = fb;
        this.pesan = pesan;
        this.pegawaiDetailService = pegawaiDetailService;
        this.nzMessageService = nzMessageService;
        this.id_pegawai = '';
        this.id_jadwal_tipe = null;
        this.listTipe = [];
        this.ListJadwal = {};
        this.bulan = null;
        this.tahun = null;
    }
    EditManualComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.paramMap.subscribe(function (data) {
            if (data.get('bulan')) {
                _this.bulan = data.get('bulan');
            }
            if (data.get('tahun')) {
                _this.tahun = data.get('tahun');
            }
        });
        this.pegawaiDetailService.getIdPegawai().subscribe(function (data) {
            _this.id_pegawai = data;
        });
        this.getPreeData();
    };
    EditManualComponent.prototype.getPreeData = function () {
        var _this = this;
        this.spinner.show();
        this.absensiJadwalTipeService.getAbsensiJadwalTipes().subscribe(function (data) {
            _this.listTipe = data.data;
            _this.spinner.hide();
        });
    };
    EditManualComponent.prototype.pilihTipe = function () {
        var _this = this;
        this.spinner.show();
        if (!this.id_jadwal_tipe) {
            this.pesan.pesanWarningForm("Jadwal tipe harus di pilih sebagai template dasar");
        }
        var param = {
            id_pegawai: this.id_pegawai,
            id_jadwal_tipe: this.id_jadwal_tipe,
            bulan: this.bulan,
            tahun: this.tahun
        };
        this.absensiJadwalPegawaiTerjadwalService.postAbsensiJadwalPegawaiTerjadwals(param).subscribe(function (data) {
            _this.goToBack();
            _this.pesan.pesanBerhasilForm("Berhasil di setting template, silahkan update pda menu View");
            _this.spinner.hide();
        }, function (err) {
            _this.pesan.pesanBerhasilForm("Gagal");
            _this.spinner.hide();
        });
    };
    EditManualComponent.prototype.goToBack = function () {
        this.router.navigate(['/profile/pengaturan-absensi/view']);
    };
    EditManualComponent.ctorParameters = function () { return [
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["AbsensiJadwalTipeService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["AbsensiJadwalPegawaiTerjadwalService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_5__["FormBuilderTypeSafe"] },
        { type: src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_6__["PesanService"] },
        { type: _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_7__["PegawaiDetailService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_8__["NzMessageService"] }
    ]; };
    EditManualComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-manual',
            template: __webpack_require__(/*! raw-loader!./edit-manual.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/profile/pengaturan-absensi/edit-manual/edit-manual.component.html"),
            styles: [__webpack_require__(/*! ./edit-manual.component.scss */ "./src/app/pages/profile/pengaturan-absensi/edit-manual/edit-manual.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["AbsensiJadwalTipeService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["AbsensiJadwalPegawaiTerjadwalService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_5__["FormBuilderTypeSafe"],
            src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_6__["PesanService"],
            _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_7__["PegawaiDetailService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_8__["NzMessageService"]])
    ], EditManualComponent);
    return EditManualComponent;
}());



/***/ }),

/***/ "./src/app/pages/profile/pengaturan-absensi/edit-tipe/edit-tipe.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/profile/pengaturan-absensi/edit-tipe/edit-tipe.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2ZpbGUvcGVuZ2F0dXJhbi1hYnNlbnNpL2VkaXQtdGlwZS9lZGl0LXRpcGUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/profile/pengaturan-absensi/edit-tipe/edit-tipe.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/profile/pengaturan-absensi/edit-tipe/edit-tipe.component.ts ***!
  \***********************************************************************************/
/*! exports provided: EditTipeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditTipeComponent", function() { return EditTipeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sdk/hr/services */ "./src/app/sdk/hr/services.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../service/pegawai-detail.service */ "./src/app/pages/profile/service/pegawai-detail.service.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/angular-reactive-forms-helper */ "./src/app/services/angular-reactive-forms-helper.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/tool/pesan.service */ "./src/app/services/tool/pesan.service.ts");










var EditTipeComponent = /** @class */ (function () {
    function EditTipeComponent(direktoriPegawaiService, absensiJadwalTipeService, spinner, router, activatedRoute, fb, pesan, pegawaiDetailService, nzMessageService) {
        this.direktoriPegawaiService = direktoriPegawaiService;
        this.absensiJadwalTipeService = absensiJadwalTipeService;
        this.spinner = spinner;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.fb = fb;
        this.pesan = pesan;
        this.pegawaiDetailService = pegawaiDetailService;
        this.nzMessageService = nzMessageService;
        this.id_pegawai = '';
        this.pegawai = {};
        this.listTipe = [];
    }
    EditTipeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pegawaiDetailService.getIdPegawai().subscribe(function (data) {
            _this.id_pegawai = data;
            console.log('id pegawai paja tu ' + _this.id_pegawai);
        });
        this.activatedRoute.paramMap.subscribe(function (data) {
            if (data.get('id_pegawai')) {
                _this.id_pegawai = data.get('id_pegawai');
                console.log(data.get('id_pegawai'));
                _this.getPreeData();
                _this.getData();
                _this.form();
            }
        });
    };
    EditTipeComponent.prototype.getPreeData = function () {
        var _this = this;
        this.absensiJadwalTipeService.getAbsensiJadwalTipes().subscribe(function (data) {
            _this.listTipe = data.data;
        });
    };
    EditTipeComponent.prototype.getData = function () {
        var _this = this;
        this.direktoriPegawaiService.getDirektoriPegawaisId(this.id_pegawai).subscribe(function (data) {
            _this.dataForm.setValue(data.data);
        });
    };
    EditTipeComponent.prototype.form = function () {
        this.dataForm = this.fb.group({
            no_induk: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            no_absensi: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            nama_belakang: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            nama_depan: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            jenis_kelamin: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            kewarganegaraan: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            type_pegawai: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            tanggal_masuk: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            hp: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            id_ptkp: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            id_jadwal_tipe: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            status_pegawai: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            id_pegawai: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            bpjs_jht: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            bpjs_jkk: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            bpjs_jkm: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            bpjs_jp: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            id_klaim_kategori: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            bpjs_kesehatan: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            id_user_create: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            created_at: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            updated_at: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            tanggal_keluar: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            foto: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('')
        });
    };
    EditTipeComponent.prototype.simpan = function () {
        var _this = this;
        this.spinner.show();
        if (this.dataForm.invalid) {
            this.pesan.pesanWarningForm('Form Tidak Valid');
            this.spinner.hide();
            return;
        }
        this.pegawai = this.dataForm.value;
        this.direktoriPegawaiService
            .putDirektoriPegawaisId({ id: this.id_pegawai, body: this.pegawai })
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
    EditTipeComponent.prototype.goToBack = function () {
        this.router.navigate(['/profile/pengaturan-absensi/view']);
    };
    EditTipeComponent.ctorParameters = function () { return [
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["DirektoriPegawaiService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["AbsensiJadwalTipeService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_7__["FormBuilderTypeSafe"] },
        { type: src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_9__["PesanService"] },
        { type: _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_5__["PegawaiDetailService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__["NzMessageService"] }
    ]; };
    EditTipeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-tipe',
            template: __webpack_require__(/*! raw-loader!./edit-tipe.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/profile/pengaturan-absensi/edit-tipe/edit-tipe.component.html"),
            styles: [__webpack_require__(/*! ./edit-tipe.component.scss */ "./src/app/pages/profile/pengaturan-absensi/edit-tipe/edit-tipe.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["DirektoriPegawaiService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["AbsensiJadwalTipeService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_7__["FormBuilderTypeSafe"],
            src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_9__["PesanService"],
            _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_5__["PegawaiDetailService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__["NzMessageService"]])
    ], EditTipeComponent);
    return EditTipeComponent;
}());



/***/ }),

/***/ "./src/app/pages/profile/pengaturan-absensi/pengaturan-absensi-routing.module.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/profile/pengaturan-absensi/pengaturan-absensi-routing.module.ts ***!
  \***************************************************************************************/
/*! exports provided: PengaturanAbsensiRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PengaturanAbsensiRoutingModule", function() { return PengaturanAbsensiRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _detail_manual_detail_manual_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./detail-manual/detail-manual.component */ "./src/app/pages/profile/pengaturan-absensi/detail-manual/detail-manual.component.ts");
/* harmony import */ var _edit_manual_edit_manual_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit-manual/edit-manual.component */ "./src/app/pages/profile/pengaturan-absensi/edit-manual/edit-manual.component.ts");
/* harmony import */ var _view_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view/view.component */ "./src/app/pages/profile/pengaturan-absensi/view/view.component.ts");
/* harmony import */ var _edit_tipe_edit_tipe_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit-tipe/edit-tipe.component */ "./src/app/pages/profile/pengaturan-absensi/edit-tipe/edit-tipe.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _detail_tipe_detail_tipe_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./detail-tipe/detail-tipe.component */ "./src/app/pages/profile/pengaturan-absensi/detail-tipe/detail-tipe.component.ts");








var routes = [
    {
        path: '',
        redirectTo: 'view'
    },
    {
        path: 'edit-tipe/:id_pegawai',
        component: _edit_tipe_edit_tipe_component__WEBPACK_IMPORTED_MODULE_4__["EditTipeComponent"],
    },
    {
        path: 'detail-tipe',
        component: _detail_tipe_detail_tipe_component__WEBPACK_IMPORTED_MODULE_7__["DetailTipeComponent"],
    },
    {
        path: 'view',
        component: _view_view_component__WEBPACK_IMPORTED_MODULE_3__["ViewComponent"],
    },
    {
        path: 'edit-manual/:bulan/:tahun',
        component: _edit_manual_edit_manual_component__WEBPACK_IMPORTED_MODULE_2__["EditManualComponent"],
    },
    {
        path: 'detail-manual',
        component: _detail_manual_detail_manual_component__WEBPACK_IMPORTED_MODULE_1__["DetailManualComponent"],
    },
];
var PengaturanAbsensiRoutingModule = /** @class */ (function () {
    function PengaturanAbsensiRoutingModule() {
    }
    PengaturanAbsensiRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"]]
        })
    ], PengaturanAbsensiRoutingModule);
    return PengaturanAbsensiRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/profile/pengaturan-absensi/pengaturan-absensi.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/profile/pengaturan-absensi/pengaturan-absensi.module.ts ***!
  \*******************************************************************************/
/*! exports provided: PengaturanAbsensiModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PengaturanAbsensiModule", function() { return PengaturanAbsensiModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _pengaturan_absensi_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pengaturan-absensi-routing.module */ "./src/app/pages/profile/pengaturan-absensi/pengaturan-absensi-routing.module.ts");
/* harmony import */ var _view_view_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./view/view.component */ "./src/app/pages/profile/pengaturan-absensi/view/view.component.ts");
/* harmony import */ var _edit_tipe_edit_tipe_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-tipe/edit-tipe.component */ "./src/app/pages/profile/pengaturan-absensi/edit-tipe/edit-tipe.component.ts");
/* harmony import */ var _edit_manual_edit_manual_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit-manual/edit-manual.component */ "./src/app/pages/profile/pengaturan-absensi/edit-manual/edit-manual.component.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/angular-reactive-forms-helper */ "./src/app/services/angular-reactive-forms-helper.ts");
/* harmony import */ var _detail_tipe_detail_tipe_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./detail-tipe/detail-tipe.component */ "./src/app/pages/profile/pengaturan-absensi/detail-tipe/detail-tipe.component.ts");
/* harmony import */ var _detail_manual_detail_manual_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./detail-manual/detail-manual.component */ "./src/app/pages/profile/pengaturan-absensi/detail-manual/detail-manual.component.ts");













var PengaturanAbsensiModule = /** @class */ (function () {
    function PengaturanAbsensiModule() {
    }
    PengaturanAbsensiModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_view_view_component__WEBPACK_IMPORTED_MODULE_4__["ViewComponent"], _edit_tipe_edit_tipe_component__WEBPACK_IMPORTED_MODULE_5__["EditTipeComponent"], _edit_manual_edit_manual_component__WEBPACK_IMPORTED_MODULE_6__["EditManualComponent"], _detail_tipe_detail_tipe_component__WEBPACK_IMPORTED_MODULE_11__["DetailTipeComponent"], _detail_manual_detail_manual_component__WEBPACK_IMPORTED_MODULE_12__["DetailManualComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _pengaturan_absensi_routing_module__WEBPACK_IMPORTED_MODULE_3__["PengaturanAbsensiRoutingModule"],
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__["NgZorroAntdModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_9__["PerfectScrollbarModule"],
            ],
            providers: [
                src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_10__["FormBuilderTypeSafe"]
            ],
        })
    ], PengaturanAbsensiModule);
    return PengaturanAbsensiModule;
}());



/***/ }),

/***/ "./src/app/pages/profile/pengaturan-absensi/view/view.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/pages/profile/pengaturan-absensi/view/view.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2ZpbGUvcGVuZ2F0dXJhbi1hYnNlbnNpL3ZpZXcvdmlldy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/profile/pengaturan-absensi/view/view.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/profile/pengaturan-absensi/view/view.component.ts ***!
  \*************************************************************************/
/*! exports provided: ViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewComponent", function() { return ViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _detail_manual_detail_manual_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../detail-manual/detail-manual.component */ "./src/app/pages/profile/pengaturan-absensi/detail-manual/detail-manual.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/sdk/hr/services */ "./src/app/sdk/hr/services.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../service/pegawai-detail.service */ "./src/app/pages/profile/service/pegawai-detail.service.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");








var ViewComponent = /** @class */ (function () {
    function ViewComponent(direktoriPegawaiService, absensiJadwalTipeService, absensiJadwalPegawaiTerjadwalService, spinner, router, activatedRoute, pegawaiDetailService, nzMessageService, drawerService) {
        this.direktoriPegawaiService = direktoriPegawaiService;
        this.absensiJadwalTipeService = absensiJadwalTipeService;
        this.absensiJadwalPegawaiTerjadwalService = absensiJadwalPegawaiTerjadwalService;
        this.spinner = spinner;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.pegawaiDetailService = pegawaiDetailService;
        this.nzMessageService = nzMessageService;
        this.drawerService = drawerService;
        this.id_pegawai = '';
        this.pegawai = {};
        this.datajadwalPegawai = [];
        this.jadwalTipe = {};
        // ##update detail
        this.value = "";
    }
    ViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pegawaiDetailService.getIdPegawai().subscribe(function (data) {
            _this.id_pegawai = data;
            console.log('id pegawai paja tu ' + _this.id_pegawai);
        });
        this.getPegawai();
        this.getJadwalPegawai();
    };
    ViewComponent.prototype.getPegawai = function () {
        var _this = this;
        this.spinner.show();
        this.direktoriPegawaiService.getDirektoriPegawaisId(this.id_pegawai)
            .subscribe(function (data) {
            _this.pegawai = data.data;
            _this.getTipeJamKerja(data.data.id_jadwal_tipe);
            _this.spinner.hide();
        });
    };
    ViewComponent.prototype.getTipeJamKerja = function (id_jadwal_tipe) {
        var _this = this;
        this.absensiJadwalTipeService.getAbsensiJadwalTipesId(id_jadwal_tipe).subscribe(function (data) {
            _this.jadwalTipe = data.data;
        });
    };
    ViewComponent.prototype.getJadwalPegawai = function () {
        var _this = this;
        this.spinner.show();
        this.absensiJadwalPegawaiTerjadwalService.getAbsensiJadwalPegawaiTerjadwals(JSON.stringify({ id_pegawai: this.id_pegawai })).subscribe(function (data) {
            _this.datajadwalPegawai = data.data;
            _this.spinner.hide();
        });
    };
    ViewComponent.prototype.goToBack = function () {
        this.router.navigate(['/hr/direktori/pegawai-detail', this.id_pegawai, 'pengaturan-absensi', 'view']);
    };
    ViewComponent.prototype.openComponent = function (bulan, tahun) {
        var _this = this;
        var drawerRef = this.drawerService.create({
            nzTitle: 'Schedule Update',
            nzWidth: '1000px',
            nzContent: _detail_manual_detail_manual_component__WEBPACK_IMPORTED_MODULE_1__["DetailManualComponent"],
            nzContentParams: {
                bulan: bulan,
                id_pegawai: this.id_pegawai,
                tahun: tahun,
            }
        });
        drawerRef.afterOpen.subscribe(function () {
            console.log('Drawer(Component) open');
        });
        drawerRef.afterClose.subscribe(function (data) {
            console.log(data);
            if (typeof data === 'string') {
                _this.value = data;
            }
        });
    };
    ViewComponent.ctorParameters = function () { return [
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_3__["DirektoriPegawaiService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_3__["AbsensiJadwalTipeService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_3__["AbsensiJadwalPegawaiTerjadwalService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
        { type: _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_6__["PegawaiDetailService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__["NzMessageService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__["NzDrawerService"] }
    ]; };
    ViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-view',
            template: __webpack_require__(/*! raw-loader!./view.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/profile/pengaturan-absensi/view/view.component.html"),
            styles: [__webpack_require__(/*! ./view.component.scss */ "./src/app/pages/profile/pengaturan-absensi/view/view.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_3__["DirektoriPegawaiService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_3__["AbsensiJadwalTipeService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_3__["AbsensiJadwalPegawaiTerjadwalService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _service_pegawai_detail_service__WEBPACK_IMPORTED_MODULE_6__["PegawaiDetailService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__["NzMessageService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__["NzDrawerService"]])
    ], ViewComponent);
    return ViewComponent;
}());



/***/ })

}]);
//# sourceMappingURL=pengaturan-absensi-pengaturan-absensi-module.js.map