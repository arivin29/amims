(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["permintaan-pegawai-permintaan-pegawai-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/hr/direktori/employee/permintaan-pegawai/add/add.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/hr/direktori/employee/permintaan-pegawai/add/add.component.html ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"air__utils__heading card-header-flex\">\r\n        <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n            <h5 class=\"mb-0\">New Job</h5>\r\n        </div>\r\n    </div>\r\n    <div class=\"card\">\r\n        <div class=\"card-body\">\r\n            <form nz-form [formGroup]=\"dataForm\" (ngSubmit)=\"simpan()\" id=\"ngForm\">\r\n                <div nz-row nzGutter=\"8\">\r\n                    <nz-form-item></nz-form-item>\r\n                    <nz-form-label><b>Required Position</b></nz-form-label>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Department</nz-form-label>\r\n                            <nz-form-control>\r\n                                <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"Department\" (ngModelChange)=\"getDivisi()\"\r\n                                    formControlName=\"permintaan_departemen\">\r\n                                    <nz-option *ngFor=\"let item of listDepartemen\" nzValue=\"{{item.id_departemen}}\"\r\n                                        nzLabel=\"{{item.nama_departemen}}\"></nz-option>\r\n                                </nz-select>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Division</nz-form-label>\r\n                            <nz-form-control>\r\n                                <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"Division\"  (ngModelChange)=\"getJabatan()\"\r\n                                    formControlName=\"permintaan_divisi\">\r\n                                    <nz-option *ngFor=\"let item of listDivisi\" nzValue=\"{{item.id_divisi}}\"\r\n                                        nzLabel=\"{{item.nama_divisi}}\"></nz-option>\r\n                                </nz-select>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Position</nz-form-label>\r\n                            <nz-form-control>\r\n                                <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"Position\"\r\n                                    formControlName=\"permintaan_jabatan\">\r\n                                    <nz-option *ngFor=\"let item of listJabatan\" nzValue=\"{{item.id_jabatan}}\"\r\n                                        nzLabel=\"{{item.nama_jabatan}}\"></nz-option>\r\n                                </nz-select>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Job Grade</nz-form-label>\r\n                            <nz-form-control>\r\n                                <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"Job Grade\"\r\n                                    formControlName=\"permintaan_pangkat\">\r\n                                    <nz-option *ngFor=\"let item of listPangkat\" nzValue=\"{{item.id_pangkat}}\"\r\n                                        nzLabel=\"{{item.position_level}}\"></nz-option>\r\n                                </nz-select>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <div nz-row nzGutter=\"8\">\r\n                            <div nz-col nzSpan=\"12\">\r\n                                <nz-form-item>\r\n                                    <nz-form-label>Office</nz-form-label>\r\n                                    <nz-form-control>\r\n                                        <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"Office\"\r\n                                            formControlName=\"lokasi_kerja\">\r\n                                            <nz-option *ngFor=\"let item of listKantor\" nzValue=\"{{item.id_kantor}}\"\r\n                                                nzLabel=\"{{item.nama_kantor}}\"></nz-option>\r\n                                        </nz-select>\r\n                                    </nz-form-control>\r\n                                </nz-form-item>\r\n                            </div>\r\n                            <div nz-col nzSpan=\"12\">\r\n                                <nz-form-item>\r\n                                    <nz-form-label>Schedule Type</nz-form-label>\r\n                                    <nz-form-control>\r\n                                        <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"Select Schedule Type\"\r\n                                            formControlName=\"type_jam_kerja\">\r\n                                            <nz-option nzLabel=\"Normal\" nzValue=\"Normal\"></nz-option>\r\n                                            <nz-option nzLabel=\"Shift\" nzValue=\"Shift\"></nz-option>\r\n                                        </nz-select>\r\n                                    </nz-form-control>\r\n                                </nz-form-item>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <div nz-row nzGutter=\"8\">\r\n                            <div nz-col nzSpan=\"12\">\r\n                                <nz-form-item>\r\n                                    <nz-form-label>Date Needed</nz-form-label>\r\n                                    <nz-form-control>\r\n                                        <nz-date-picker nzFormat=\"yyyy-MM-dd\" nzPlaceHolder=\"Date Needed\"\r\n                                            formControlName=\"tanggal_dibutuhkan\"></nz-date-picker>\r\n                                    </nz-form-control>\r\n                                </nz-form-item>\r\n                            </div>\r\n                            <div nz-col nzSpan=\"12\">\r\n                                <nz-form-item>\r\n                                    <nz-form-label>Total Employees Needed </nz-form-label>\r\n                                    <nz-form-control>\r\n                                        <input nz-input placeholder=\"Total Employees Needed\" formControlName=\"jumlah_kebutuhan\" />\r\n                                    </nz-form-control>\r\n                                </nz-form-item>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <nz-form-item></nz-form-item>\r\n                    <nz-form-label>Plan</nz-form-label>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Employee Status</nz-form-label>\r\n                            <nz-form-control>\r\n                                <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"\"\r\n                                    formControlName=\"status_hubungan_kerja\">\r\n                                    <nz-option nzLabel=\"PKWT\" nzValue=\"PKWT\"></nz-option>\r\n                                    <nz-option nzLabel=\"PKWTT\" nzValue=\"PKWTT\"></nz-option>\r\n                                    <nz-option nzLabel=\"Outsourcing\" nzValue=\"Outsourcing\"></nz-option>\r\n                                </nz-select>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                    </div>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-control>\r\n                                <nz-radio-group formControlName=\"Rencana\">\r\n                                    <label nz-radio nzValue=\"Sesuai rencana\">As the plan approved by the directors</label>\r\n                                    <label nz-radio nzValue=\"Tidak sesuai rencana\">Outside the plan (Explain)</label>\r\n                                </nz-radio-group>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Explain if out of the plan</nz-form-label>\r\n                            <nz-form-control>\r\n                                <textarea nz-input placeholder=\"Explain\" formControlName=\"tidak_sesuai_rencana\"\r\n                                    [nzAutosize]=\"{ minRows: 3, maxRows: 3 }\"></textarea>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <nz-form-item></nz-form-item>\r\n                    <nz-form-label><b>Requirements</b></nz-form-label>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Responsibility to</nz-form-label>\r\n                            <nz-form-control>\r\n                                <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"Nama Jabatan\"\r\n                                    formControlName=\"id_jabatan_atasan\">\r\n                                    <nz-option *ngFor=\"let item of listJabatan\" nzValue=\"{{item.nama_jabatan}}\"\r\n                                        nzLabel=\"{{item.nama_jabatan}}\"></nz-option>\r\n                                </nz-select>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Minimum Education</nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input placeholder=\"Education\"\r\n                                    formControlName=\"pendidikan_minimum\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <nz-form-item>\r\n                        <nz-form-label>Job and Resposibility</nz-form-label>\r\n                        <nz-form-control>\r\n                            <textarea nz-input placeholder=\"Jelaskan\" formControlName=\"tugas_utama\"\r\n                                [nzAutosize]=\"{ minRows: 3, maxRows: 3 }\"></textarea>\r\n                        </nz-form-control>\r\n                    </nz-form-item>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Number of Direct Subordinates</nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input placeholder=\"input jumlah\" formControlName=\"jumlah_bawahan\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Minimum Experience</nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input placeholder=\"tahun\" formControlName=\"pengalaman_minimal\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Special skill needed</nz-form-label>\r\n                            <nz-form-control>\r\n                                <textarea nz-input placeholder=\"tulis kebutuhan\"\r\n                                    formControlName=\"keterampilan_dibutuhkan\"\r\n                                    [nzAutosize]=\"{ minRows: 3, maxRows: 3 }\"></textarea>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Certificate required</nz-form-label>\r\n                            <nz-form-control>\r\n                                <textarea nz-input placeholder=\"tulis kebutuhan\" formControlName=\"sertifikat_dibutuhkan\"\r\n                                    [nzAutosize]=\"{ minRows: 3, maxRows: 3 }\"></textarea>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Working room</nz-form-label>\r\n                            <nz-form-control>\r\n                                <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"Select\"\r\n                                    formControlName=\"ruang_kerja\">\r\n                                    <nz-option nzLabel=\"Tertutup\" nzValue=\"Tertutup\"></nz-option>\r\n                                    <nz-option nzLabel=\"Terbuka\" nzValue=\"Terbuka\"></nz-option>\r\n                                    <nz-option nzLabel=\"Lain-lain\" nzValue=\"Lain-lain\"></nz-option>\r\n                                </nz-select>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Others</nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input placeholder=\"tuliskan\" formControlName=\"ruang_kerja\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <nz-form-item></nz-form-item>\r\n                    <nz-form-label>Physical</nz-form-label>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Age</nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input placeholder=\"tahun\" formControlName=\"umur\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Gender</nz-form-label>\r\n                            <nz-form-control>\r\n                                <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"Select\"\r\n                                    formControlName=\"jenis_kelamin\">\r\n                                    <nz-option nzLabel=\"Laki-laki\" nzValue=\"Laki-laki\"></nz-option>\r\n                                    <nz-option nzLabel=\"Perempuan\" nzValue=\"Perempuan\"></nz-option>\r\n                                </nz-select>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Height</nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input placeholder=\"cm\" formControlName=\"tinggi\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Weight</nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input placeholder=\"kg\" formControlName=\"berat\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Glasses</nz-form-label>\r\n                            <nz-form-control>\r\n                                <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"Select\"\r\n                                    formControlName=\"berkacamata\">\r\n                                    <nz-option nzLabel=\"Boleh\" nzValue=\"Boleh\"></nz-option>\r\n                                    <nz-option nzLabel=\"Tidak Boleh\" nzValue=\"Tidak Boleh\"></nz-option>\r\n                                </nz-select>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Martial status</nz-form-label>\r\n                            <nz-form-control>\r\n                                <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"Select\"\r\n                                    formControlName=\"status_perkawinan\">\r\n                                    <nz-option nzLabel=\"Menikah\" nzValue=\"Menikah\"></nz-option>\r\n                                    <nz-option nzLabel=\"Single\" nzValue=\"Single\"></nz-option>\r\n                                </nz-select>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <nz-form-item></nz-form-item>\r\n                    <nz-form-label>Fasility</nz-form-label>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Basic salary </nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input placeholder=\"rupian\" formControlName=\"gaji_pokok\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Food & transportation allowance</nz-form-label>\r\n                            <nz-form-control>\r\n                                <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"Select\"\r\n                                    formControlName=\"uang_makan_transport\">\r\n                                    <nz-option nzLabel=\"Dapat\" nzValue=\"Dapat\"></nz-option>\r\n                                    <nz-option nzLabel=\"Tidak\" nzValue=\"Tidak\"></nz-option>\r\n                                </nz-select>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Position allowance</nz-form-label>\r\n                            <nz-form-control>\r\n                                <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"Select\"\r\n                                    formControlName=\"uang_jabatan\">\r\n                                    <nz-option nzLabel=\"Dapat\" nzValue=\"Dapat\"></nz-option>\r\n                                    <nz-option nzLabel=\"Tidak\" nzValue=\"Tidak\"></nz-option>\r\n                                </nz-select>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Other Allowance</nz-form-label>\r\n                            <nz-form-control>\r\n                                <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"Select\"\r\n                                    formControlName=\"uang_tunjangan\">\r\n                                    <nz-option nzLabel=\"Dapat\" nzValue=\"Dapat\"></nz-option>\r\n                                    <nz-option nzLabel=\"Tidak\" nzValue=\"Tidak\"></nz-option>\r\n                                </nz-select>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Overtime</nz-form-label>\r\n                            <nz-form-control>\r\n                                <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"Select\" formControlName=\"lembur\">\r\n                                    <nz-option nzLabel=\"Dapat\" nzValue=\"Dapat\"></nz-option>\r\n                                    <nz-option nzLabel=\"Tidak\" nzValue=\"Tidak\"></nz-option>\r\n                                </nz-select>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Jamsostek</nz-form-label>\r\n                            <nz-form-control>\r\n                                <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"Select\" formControlName=\"jamsostek\">\r\n                                    <nz-option nzLabel=\"Dapat\" nzValue=\"Dapat\"></nz-option>\r\n                                    <nz-option nzLabel=\"Tidak\" nzValue=\"Tidak\"></nz-option>\r\n                                </nz-select>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Other facility</nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input placeholder=\"rupian\" formControlName=\"fasilitas_lain\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                    </div>\r\n                </div>\r\n            </form>\r\n            <div class=\"footer\">\r\n                <button type=\"button\" (click)=\"goToBack()\" class=\"ant-btn\"\r\n                    style=\"margin-right: 8px;\"><span>Cancel</span></button>\r\n                <button type=\"submit\" class=\"ant-btn ant-btn-primary\" form=\"ngForm\"><span>Submit</span></button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/hr/direktori/employee/permintaan-pegawai/detail/detail.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/hr/direktori/employee/permintaan-pegawai/detail/detail.component.html ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"air__utils__heading card-header-flex\">\r\n        <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n            <h5 class=\"mb-0\">Detail Permintaan</h5>\r\n        </div>\r\n        <div class=\"d-flex flex-column justify-content-center\">\r\n            <span style=\"margin-right: 15px;\">\r\n                {{PermintaanPegawai.nomor | titlecase}}\r\n            </span>\r\n        </div>\r\n        <div class=\"d-flex flex-column justify-content-center\">\r\n            <button nz-button nzType=\"primary\" style=\"margin-right: 15px;\"><i nz-icon\r\n                    nzType=\"printer\"></i>Print</button>\r\n        </div>\r\n        <div class=\"d-flex flex-column justify-content-center\">\r\n            {{PermintaanPegawai.status | titlecase}}\r\n        </div>\r\n    </div>\r\n    <div nz-row nzGutter=\"8\">\r\n        <div nz-col nzSpan=\"17\">\r\n            <div class=\"card\">\r\n                <div class=\"card-body\">\r\n                    <table class=\"table table-borderless\">\r\n                        <tbody>\r\n                            <div class=\"card\">\r\n                                <div class=\"card-body\">\r\n                                    <tr>\r\n                                        <td class=\"text-gray-6 pl-0\">POSISI YANG DIBUTUHKAN</td>\r\n                                    </tr>\r\n                                    <div nz-row nzGutter=\"8\">\r\n                                        <div nz-col nzSpan=\"14\">\r\n                                            <tr>\r\n                                                <td class=\"text-gray-6 pl-0\">Jabatan</td>\r\n                                                <td class=\"pr-0 text-left text-dark\">: {{dataJabatan.nama_jabatan}}</td>\r\n                                            </tr>\r\n                                            <tr>\r\n                                                <td class=\"text-gray-6 pl-0\">Departemen</td>\r\n                                                <td class=\"pr-0 text-left text-dark\">: {{dataDepartemen.nama_departemen}}\r\n                                                </td>\r\n                                            </tr>\r\n                                            <tr>\r\n                                                <td class=\"text-gray-6 pl-0\">Pangkat</td>\r\n                                                <td class=\"pr-0 text-left text-dark\">: {{dataPangkat.nama_pangkat}}</td>\r\n                                            </tr>\r\n                                            <tr>\r\n                                                <td class=\"text-gray-6 pl-0\">lokasi kerja</td>\r\n                                                <td class=\"pr-0 text-left text-dark\">: {{PermintaanPegawai.lokasi_kerja}}\r\n                                                </td>\r\n                                            </tr>\r\n                                        </div>\r\n                                        <div nz-col nzSpan=\"10\">\r\n                                            <tr>\r\n                                                <td class=\"text-gray-6 pl-0\">Tipe jam kerja</td>\r\n                                                <td class=\"pr-0 text-left text-dark\">: {{PermintaanPegawai.type_jam_kerja }}\r\n                                                </td>\r\n                                            </tr>\r\n                                            <tr>\r\n                                                <td class=\"text-gray-6 pl-0\">Jumlah kebutuhkan</td>\r\n                                                <td class=\"pr-0 text-left text-dark\">: {{PermintaanPegawai.jumlah_kebutuhan}}\r\n                                                </td>\r\n                                            </tr>\r\n                                            <tr>\r\n                                                <td class=\"text-gray-6 pl-0\">Tanggal dibuthkan</td>\r\n                                                <td class=\"pr-0 text-left text-dark\">: {{PermintaanPegawai.tanggal_dibutuhkan | date}}\r\n                                                </td>\r\n                                            </tr>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"card\">\r\n                                <div class=\"card-body\">\r\n                                    <tr>\r\n                                        <td class=\"text-gray-6 pl-0\">RENCANA</td>\r\n                                    </tr>\r\n                                    <div nz-row nzGutter=\"8\">\r\n                                        <div nz-col nzSpan=\"14\">\r\n                                            <tr>\r\n                                                <td class=\"text-gray-6 pl-0\">Kesesuaian rencana</td>\r\n                                                <td class=\"pr-0 text-left text-dark\">: {{PermintaanPegawai.Rencana}}\r\n                                                </td>\r\n                                            </tr>\r\n                                        </div>\r\n                                        <div nz-col nzSpan=\"10\">\r\n                                            <tr>\r\n                                                <td class=\"text-gray-6 pl-0\">Hubungan Kerja</td>\r\n                                                <td class=\"pr-0 text-left text-dark\">: {{PermintaanPegawai.status_hubungan_kerja}}\r\n                                                </td>\r\n                                            </tr>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div nz-row nzGutter=\"8\">\r\n                                        <tr>\r\n                                            <td class=\"text-gray-6 pl-0\">Alasan apabila Tidak sesuai</td>\r\n                                            <td class=\"pl-0 text-left text-dark\">: {{PermintaanPegawai.tidak_sesuai_rencana }} </td>\r\n                                        </tr>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"card\">\r\n                                <div class=\"card-body\">\r\n                                    <tr>\r\n                                        <td class=\"text-gray-6 pl-0\">SPESIFIKASI JABATAN</td>\r\n                                    </tr>\r\n                                    <div nz-row nzGutter=\"8\">\r\n                                        <div nz-col nzSpan=\"14\">\r\n                                            <tr>\r\n                                                <td class=\"text-gray-6 pl-0\">Bertanggung jawab langsung kepada</td>\r\n                                                <td class=\"pr-0 text-left text-dark\">: {{PermintaanPegawai.id_jabatan_atasan}}\r\n                                                </td>\r\n                                            </tr>\r\n                                            <tr>\r\n                                                <td class=\"text-gray-6 pl-0\">Ruangan Kerja</td>\r\n                                                <td class=\"pr-0 text-left text-dark\">: {{PermintaanPegawai.ruang_kerja}}\r\n                                                </td>\r\n                                            </tr>\r\n                                            <tr>\r\n                                                <td class=\"text-gray-6 pl-0\">Jumlah bawahan</td>\r\n                                                <td class=\"pr-0 text-left text-dark\">: {{PermintaanPegawai.jumlah_bawahan}}\r\n                                                </td>\r\n                                            </tr>\r\n                                        </div>\r\n                                        <div nz-col nzSpan=\"10\">\r\n                                            <tr>\r\n                                                <td class=\"text-gray-6 pl-0\">Pendidikan minimal</td>\r\n                                                <td class=\"pr-0 text-left text-dark\">: {{PermintaanPegawai.pendidikan_minimum}}\r\n                                                </td>\r\n                                            </tr>\r\n                                            <tr>\r\n                                                <td class=\"text-gray-6 pl-0\">Jumlah bawahan</td>\r\n                                                <td class=\"pr-0 text-left text-dark\">: {{PermintaanPegawai.jumlah_bawahan}}\r\n                                                </td>\r\n                                            </tr>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div nz-row nzGutter=\"8\">\r\n                                        <tr>\r\n                                            <td class=\"text-gray-6 pl-0\">Tugas dan tanggung jawab</td>\r\n                                            <td class=\"pr-0 text-left text-dark\">: {{PermintaanPegawai.tugas_utama}}\r\n                                            </td>\r\n                                        </tr>\r\n                                        <tr>\r\n                                            <td class=\"text-gray-6 pl-0\">Keterampilan khusus yang dibutuhkan</td>\r\n                                            <td class=\"pr-0 text-left text-dark\">: {{PermintaanPegawai.keterampilan_dibutuhkan}}\r\n                                            </td>\r\n                                        </tr>\r\n                                        <tr>\r\n                                            <td class=\"text-gray-6 pl-0\">Sertifikat yang dibutuhkan </td>\r\n                                            <td class=\"pr-0 text-left text-dark\">: {{PermintaanPegawai.sertifikat_dibutuhkan}}\r\n                                            </td>\r\n                                        </tr>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"card\">\r\n                                <div class=\"card-body\">\r\n                                    <tr>\r\n                                        <td class=\"text-gray-6 pl-0\">FISIK</td>\r\n                                    </tr>\r\n                                    <div nz-row nzGutter=\"8\">\r\n                                        <div nz-col nzSpan=\"14\">\r\n                                            <tr>\r\n                                                <td class=\"text-gray-6 pl-0\">Umur</td>\r\n                                                <td class=\"pr-0 text-left text-dark\">: {{PermintaanPegawai.umur}}</td>\r\n                                            </tr>\r\n                                            <tr>\r\n                                                <td class=\"text-gray-6 pl-0\">Berat badan</td>\r\n                                                <td class=\"pr-0 text-left text-dark\">: {{PermintaanPegawai.berat}}</td>\r\n                                            </tr>\r\n                                            <tr>\r\n                                                <td class=\"text-gray-6 pl-0\">Tinggi badan</td>\r\n                                                <td class=\"pr-0 text-left text-dark\">: {{PermintaanPegawai.tinggi}}</td>\r\n                                            </tr>\r\n                                        </div>\r\n                                        <div nz-col nzSpan=\"10\">\r\n                                            <tr>\r\n                                                <td class=\"text-gray-6 pl-0\">Jenis kelamin</td>\r\n                                                <td class=\"pr-0 text-left text-dark\">: {{PermintaanPegawai.jenis_kelamin}}\r\n                                                </td>\r\n                                            </tr>\r\n                                            <tr>\r\n                                                <td class=\"text-gray-6 pl-0\">Berkacamata</td>\r\n                                                <td class=\"pr-0 text-left text-dark\">: {{PermintaanPegawai.berkacamata}}\r\n                                                </td>\r\n                                            </tr>\r\n                                            <tr>\r\n                                                <td class=\"text-gray-6 pl-0\">Status perkawinan</td>\r\n                                                <td class=\"pr-0 text-left text-dark\">: {{PermintaanPegawai.status_perkawinan}}\r\n                                                </td>\r\n                                            </tr>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"card\">\r\n                                <div class=\"card-body\">\r\n                                    <tr>\r\n                                        <td class=\"text-gray-6 pl-0\">FASILITAS</td>\r\n                                    </tr>\r\n                                    <div nz-row nzGutter=\"8\">\r\n                                        <div nz-col nzSpan=\"14\">\r\n                                            <tr>\r\n                                                <td class=\"text-gray-6 pl-0\">Gaji Pokok</td>\r\n                                                <td class=\"pr-0 text-left text-dark\">: {{PermintaanPegawai.gaji_pokok}}\r\n                                                </td>\r\n                                            </tr>\r\n                                            <tr>\r\n                                                <td class=\"text-gray-6 pl-0\">Uang makan & transport</td>\r\n                                                <td class=\"pr-0 text-left text-dark\">: {{PermintaanPegawai.uang_makan_transport}}\r\n                                                </td>\r\n                                            </tr>\r\n                                            <tr>\r\n                                                <td class=\"text-gray-6 pl-0\">Uang jabatan</td>\r\n                                                <td class=\"pr-0 text-left text-dark\">: {{PermintaanPegawai.uang_jabatan}}\r\n                                                </td>\r\n                                            </tr>\r\n                                            <tr>\r\n                                                <td class=\"text-gray-6 pl-0\">Fasilitas lain</td>\r\n                                                <td class=\"pr-0 text-left text-dark\">: {{PermintaanPegawai.fasilitas_lain}}\r\n                                                </td>\r\n                                            </tr>\r\n                                        </div>\r\n                                        <div nz-col nzSpan=\"10\">\r\n                                            <tr>\r\n                                                <td class=\"text-gray-6 pl-0\">uang tunjangan</td>\r\n                                                <td class=\"pr-0 text-left text-dark\">: {{PermintaanPegawai.uang_tunjangan}}\r\n                                                </td>\r\n                                            </tr>\r\n                                            <tr>\r\n                                                <td class=\"text-gray-6 pl-0\">Lembur</td>\r\n                                                <td class=\"pr-0 text-left text-dark\">: {{PermintaanPegawai.lembur}}</td>\r\n                                            </tr>\r\n                                            <tr>\r\n                                                <td class=\"text-gray-6 pl-0\">Jamsostek</td>\r\n                                                <td class=\"pr-0 text-left text-dark\">: {{PermintaanPegawai.jamsostek}}\r\n                                                </td>\r\n                                            </tr>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n\r\n\r\n\r\n                            <!-- Kandidat -->\r\n                            <div class=\"card\">\r\n                                <div class=\"card-header\">Applicants</div>\r\n                                <div class=\"card-body\">\r\n\r\n                                    <nz-table #basicTable [nzData]=\"pelamar\" [nzFrontPagination]=\"false\">\r\n                                        <thead>\r\n                                            <tr>\r\n                                                <th>Pict</th>\r\n                                                <th nzShowSort nzSortKey=\"nama_depan\">Name</th>\r\n                                                <th>Phone</th>\r\n                                                <th>Email</th>\r\n                                                <th>Spesialization</th>\r\n                                                <th class=\"text-right\">Action</th>\r\n                                            </tr>\r\n                                        </thead>\r\n                                        <tbody>\r\n                                            <tr *ngFor=\"let data of basicTable.data\">\r\n                                                <td>\r\n                                                    <nz-avatar nzIcon=\"user\" nzSrc=\"{{data.foto}}\"></nz-avatar>\r\n                                                </td>\r\n                                                <td>{{ data.nama_depan }} {{ data.nama_belakang }}</td>\r\n                                                <td>{{ data.hp }}</td>\r\n                                                <td>{{ data.email }}</td>\r\n                                                <td>{{ data.Spesialisasi }}</td>\r\n                                                <td class=\"text-right\">\r\n\r\n                                                    <a nz-dropdown [nzDropdownMenu]=\"menu\" nzPlacement=\"bottomRight\">\r\n                                                        <i nz-icon nzType=\"more\" nzTheme=\"outline\"></i>\r\n                                                    </a>\r\n                                                    <nz-dropdown-menu #menu=\"nzDropdownMenu\">\r\n                                                        <ul nz-menu nzSelectable>\r\n\r\n                                                            <li nz-menu-item [routerLink]=\"['../../../detail-pelama',data.id_pelamar]\">\r\n                                                                detail\r\n                                                            </li>\r\n                                                            <li nz-menu-item>\r\n                                                                <a nz-popconfirm nzPopconfirmTitle=\"Are you sure delete this ?\" nzPopconfirmPlacement=\"bottom\" (nzOnConfirm)=\"pelamarTerima(data.id_pelamar)\">Terima</a>\r\n                                                            </li>\r\n                                                        </ul>\r\n                                                    </nz-dropdown-menu>\r\n\r\n                                                </td>\r\n                                            </tr>\r\n                                        </tbody>\r\n                                    </nz-table>\r\n\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div class=\"card\">\r\n                                <div class=\"card-header\">Kandidat</div>\r\n                                <div class=\"card-body\">\r\n\r\n                                    <nz-table #basicTable2 [nzData]=\"kandidat\" [nzFrontPagination]=\"false\">\r\n                                        <thead>\r\n                                            <tr>\r\n                                                <th>Pict</th>\r\n                                                <th nzShowSort nzSortKey=\"nama_depan\">Name</th>\r\n                                                <th>Phone</th>\r\n                                                <th>Email</th>\r\n                                                <th>Spesialization</th>\r\n                                                <th class=\"text-right\">Action</th>\r\n                                            </tr>\r\n                                        </thead>\r\n                                        <tbody>\r\n                                            <tr *ngFor=\"let data of basicTable2.data\">\r\n                                                <td>\r\n                                                    <nz-avatar nzIcon=\"user\" nzSrc=\"{{data.foto}}\"></nz-avatar>\r\n                                                </td>\r\n                                                <td>{{ data.nama_depan }} {{ data.nama_belakang }}</td>\r\n                                                <td>{{ data.hp }}</td>\r\n                                                <td>{{ data.email }}</td>\r\n                                                <td>{{ data.Spesialisasi }}</td>\r\n                                                <td class=\"text-right\">\r\n\r\n                                                    <a nz-dropdown [nzDropdownMenu]=\"menu\" nzPlacement=\"bottomRight\">\r\n                                                        <i nz-icon nzType=\"more\" nzTheme=\"outline\"></i>\r\n                                                    </a>\r\n                                                    <nz-dropdown-menu #menu=\"nzDropdownMenu\">\r\n                                                        <ul nz-menu nzSelectable>\r\n\r\n                                                            <li nz-menu-item [routerLink]=\"['../../../detail-pelamar',data.id_pelamar]\">\r\n                                                                detail\r\n                                                            </li>\r\n                                                            <li nz-menu-item>\r\n                                                                <a nz-popconfirm nzPopconfirmTitle=\"Are you sure delete this ?\" nzPopconfirmPlacement=\"bottom\" (nzOnConfirm)=\"pelamarTerima(data.id_pelamar)\">Terima</a>\r\n                                                            </li>\r\n                                                        </ul>\r\n                                                    </nz-dropdown-menu>\r\n\r\n                                                </td>\r\n                                            </tr>\r\n                                        </tbody>\r\n                                    </nz-table>\r\n\r\n\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div class=\"card\">\r\n                                <div class=\"card-header\">Employee</div>\r\n                                <div class=\"card-body\">\r\n\r\n\r\n\r\n                                </div>\r\n                            </div>\r\n\r\n                        </tbody>\r\n                    </table>\r\n                    <div class=\"footer\">\r\n                        <div class=\"row\">\r\n                            <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n                                <button nz-button nzType=\"default\" (click)=\"goToBack()\" style=\"margin-right: 8px;\">Back</button>\r\n                            </div>\r\n                            <div class=\"d-flex flex-column justify-content-center\">\r\n                                <erp-approval-standar></erp-approval-standar>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n\r\n\r\n\r\n\r\n        <div nz-col nzSpan=\"7\">\r\n            <div class=\"card\">\r\n                <div class=\"card-body\">\r\n                    <nz-timeline nzMode=\"left\">\r\n                        <nz-timeline-item *ngFor=\"let item of listLog\">{{item.status}} oleh {{item.nama_depan}}\r\n                            <b>{{item.sebagai}}</b> {{item.created_at | date:'short' }} </nz-timeline-item>\r\n                    </nz-timeline>\r\n                    <ng-template #dotTemplate>\r\n                        <i nz-icon nzType=\"clock-circle-o\" style=\"font-size: 16px;\"></i>\r\n                    </ng-template>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/hr/direktori/employee/permintaan-pegawai/edit/edit.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/hr/direktori/employee/permintaan-pegawai/edit/edit.component.html ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"air__utils__heading card-header-flex\">\r\n        <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n            <h5 class=\"mb-0\">Edit Required</h5>\r\n        </div>\r\n    </div>\r\n    <div class=\"card\">\r\n        <div class=\"card-body\">\r\n            <form nz-form [formGroup]=\"dataForm\" (ngSubmit)=\"simpan()\" id=\"ngForm\">\r\n                <div nz-row nzGutter=\"8\">\r\n                    <nz-form-item></nz-form-item>\r\n                    <nz-form-label>Required Position</nz-form-label>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Departement</nz-form-label>\r\n                            <nz-form-control>\r\n                                <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"Department\" (ngModelChange)=\"getDivisi()\"\r\n                                    formControlName=\"permintaan_departemen\">\r\n                                    <nz-option *ngFor=\"let item of listDepartemen\" nzValue=\"{{item.id_departemen}}\"\r\n                                        nzLabel=\"{{item.nama_departemen}}\"></nz-option>\r\n                                </nz-select>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Division</nz-form-label>\r\n                            <nz-form-control>\r\n                                <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"Division\"  (ngModelChange)=\"getJabatan()\" [nzDisabled]=\"listDivisi.length < 1\"\r\n                                    formControlName=\"permintaan_divisi\">\r\n                                    <nz-option *ngFor=\"let item of listDivisi\" nzValue=\"{{item.id_divisi}}\"\r\n                                        nzLabel=\"{{item.nama_divisi}}\"></nz-option>\r\n                                </nz-select>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Position</nz-form-label>\r\n                            <nz-form-control>\r\n                                <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"Position\" [nzDisabled]=\"listJabatan.length < 1\"\r\n                                    formControlName=\"permintaan_jabatan\">\r\n                                    <nz-option *ngFor=\"let item of listJabatan\" nzValue=\"{{item.id_jabatan}}\"\r\n                                        nzLabel=\"{{item.nama_jabatan}}\"></nz-option>\r\n                                </nz-select>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Job Grade</nz-form-label>\r\n                            <nz-form-control>\r\n                                <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"Grade\"\r\n                                    formControlName=\"permintaan_pangkat\">\r\n                                    <nz-option *ngFor=\"let item of listPangkat\" nzValue=\"{{item.id_pangkat}}\"\r\n                                        nzLabel=\"{{item.position_level}}\"></nz-option>\r\n                                </nz-select>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Placement</nz-form-label>\r\n                            <nz-form-control>\r\n                                <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"palcement\"\r\n                                    formControlName=\"lokasi_kerja\">\r\n                                    <nz-option *ngFor=\"let item of listKantor\" nzValue=\"{{item.id_kantor}}\"\r\n                                        nzLabel=\"{{item.nama_kantor}}\"></nz-option>\r\n                                </nz-select>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <div nz-row nzGutter=\"8\">\r\n                            <div nz-col nzSpan=\"12\">\r\n                                <nz-form-item>\r\n                                    <nz-form-label>Work hour</nz-form-label>\r\n                                    <nz-form-control>\r\n                                        <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"Select a type\"\r\n                                            formControlName=\"type_jam_kerja\">\r\n                                            <nz-option nzLabel=\"Normal\" nzValue=\"Normal\"></nz-option>\r\n                                            <nz-option nzLabel=\"Shift\" nzValue=\"Shift\"></nz-option>\r\n                                        </nz-select>\r\n                                    </nz-form-control>\r\n                                </nz-form-item>\r\n                            </div>\r\n                            <div nz-col nzSpan=\"12\">\r\n                                <nz-form-item>\r\n                                    <nz-form-label>Date needed</nz-form-label>\r\n                                    <nz-form-control>\r\n                                        <nz-date-picker nzFormat=\"yyyy-MM-dd\" nzPlaceHolder=\"\"\r\n                                            formControlName=\"tanggal_dibutuhkan\"></nz-date-picker>\r\n                                    </nz-form-control>\r\n                                </nz-form-item>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Needed value</nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input placeholder=\"Masukan jumlah\" formControlName=\"jumlah_kebutuhan\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                    </div>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <nz-form-item></nz-form-item>\r\n                    <nz-form-label>Plan</nz-form-label>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-control>\r\n                                <nz-radio-group formControlName=\"Rencana\">\r\n                                    <label nz-radio nzValue=\"Sesuai rencana\">Sesuai rencana yang\r\n                                        disetujui direksi</label>\r\n                                    <label nz-radio nzValue=\"Tidak sesuai rencana\">Di luar rancana\r\n                                        (Jelaskan)</label>\r\n                                </nz-radio-group>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Explain if out of the plan</nz-form-label>\r\n                            <nz-form-control>\r\n                                <textarea nz-input placeholder=\"Jelaskan\" formControlName=\"tidak_sesuai_rencana\"\r\n                                    [nzAutosize]=\"{ minRows: 3, maxRows: 3 }\"></textarea>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Relationship</nz-form-label>\r\n                            <nz-form-control>\r\n                                <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"\"\r\n                                    formControlName=\"status_hubungan_kerja\">\r\n                                    <nz-option nzLabel=\"PKWT\" nzValue=\"PKWT\"></nz-option>\r\n                                    <nz-option nzLabel=\"PKWTT\" nzValue=\"PKWTT\"></nz-option>\r\n                                    <nz-option nzLabel=\"Outsourcing\" nzValue=\"Outsourcing\"></nz-option>\r\n                                </nz-select>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                    </div>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <nz-form-item></nz-form-item>\r\n                    <nz-form-label>Position spesification</nz-form-label>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Responsibility to</nz-form-label>\r\n                            <nz-form-control>\r\n                                <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"Nama Jabatan\"\r\n                                    formControlName=\"id_jabatan_atasan\">\r\n                                    <nz-option *ngFor=\"let item of listJabatan\" nzValue=\"{{item.nama_jabatan}}\"\r\n                                        nzLabel=\"{{item.nama_jabatan}}\"></nz-option>\r\n                                </nz-select>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Minimum education</nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input placeholder=\"Tingkat dan jurusan\"\r\n                                    formControlName=\"pendidikan_minimum\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <nz-form-item>\r\n                        <nz-form-label>Job and resposibility</nz-form-label>\r\n                        <nz-form-control>\r\n                            <textarea nz-input placeholder=\"Jelaskan\" formControlName=\"tugas_utama\"\r\n                                [nzAutosize]=\"{ minRows: 3, maxRows: 3 }\"></textarea>\r\n                        </nz-form-control>\r\n                    </nz-form-item>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Number of direct subordinates</nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input placeholder=\"input jumlah\" formControlName=\"jumlah_bawahan\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Minimum experience</nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input placeholder=\"tahun\" formControlName=\"pengalaman_minimal\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Special skill needed</nz-form-label>\r\n                            <nz-form-control>\r\n                                <textarea nz-input placeholder=\"tulis kebutuhan\"\r\n                                    formControlName=\"keterampilan_dibutuhkan\"\r\n                                    [nzAutosize]=\"{ minRows: 3, maxRows: 3 }\"></textarea>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Certificate required</nz-form-label>\r\n                            <nz-form-control>\r\n                                <textarea nz-input placeholder=\"tulis kebutuhan\" formControlName=\"sertifikat_dibutuhkan\"\r\n                                    [nzAutosize]=\"{ minRows: 3, maxRows: 3 }\"></textarea>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Working room</nz-form-label>\r\n                            <nz-form-control>\r\n                                <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"Select\"\r\n                                    formControlName=\"ruang_kerja\">\r\n                                    <nz-option nzLabel=\"Tertutup\" nzValue=\"Tertutup\"></nz-option>\r\n                                    <nz-option nzLabel=\"Terbuka\" nzValue=\"Terbuka\"></nz-option>\r\n                                    <nz-option nzLabel=\"Lain-lain\" nzValue=\"Lain-lain\"></nz-option>\r\n                                </nz-select>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Others</nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input placeholder=\"tuliskan\" formControlName=\"ruang_kerja\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <nz-form-item></nz-form-item>\r\n                    <nz-form-label>Physical</nz-form-label>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Age</nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input placeholder=\"tahun\" formControlName=\"umur\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Gender</nz-form-label>\r\n                            <nz-form-control>\r\n                                <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"Select\"\r\n                                    formControlName=\"jenis_kelamin\">\r\n                                    <nz-option nzLabel=\"Laki-laki\" nzValue=\"Laki-laki\"></nz-option>\r\n                                    <nz-option nzLabel=\"Perempuan\" nzValue=\"Perempuan\"></nz-option>\r\n                                </nz-select>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Height</nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input placeholder=\"cm\" formControlName=\"tinggi\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Weight</nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input placeholder=\"kg\" formControlName=\"berat\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Glasses</nz-form-label>\r\n                            <nz-form-control>\r\n                                <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"Select\"\r\n                                    formControlName=\"berkacamata\">\r\n                                    <nz-option nzLabel=\"Boleh\" nzValue=\"Boleh\"></nz-option>\r\n                                    <nz-option nzLabel=\"Tidak Boleh\" nzValue=\"Tidak Boleh\"></nz-option>\r\n                                </nz-select>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Martial status</nz-form-label>\r\n                            <nz-form-control>\r\n                                <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"Select\"\r\n                                    formControlName=\"status_perkawinan\">\r\n                                    <nz-option nzLabel=\"Menikah\" nzValue=\"Menikah\"></nz-option>\r\n                                    <nz-option nzLabel=\"Single\" nzValue=\"Single\"></nz-option>\r\n                                </nz-select>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <nz-form-item></nz-form-item>\r\n                    <nz-form-label>Fasility</nz-form-label>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Basic salary </nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input placeholder=\"rupian\" formControlName=\"gaji_pokok\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Food & transportation allowance</nz-form-label>\r\n                            <nz-form-control>\r\n                                <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"Select\"\r\n                                    formControlName=\"uang_makan_transport\">\r\n                                    <nz-option nzLabel=\"Dapat\" nzValue=\"Dapat\"></nz-option>\r\n                                    <nz-option nzLabel=\"Tidak\" nzValue=\"Tidak\"></nz-option>\r\n                                </nz-select>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Position allowance</nz-form-label>\r\n                            <nz-form-control>\r\n                                <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"Select\"\r\n                                    formControlName=\"uang_jabatan\">\r\n                                    <nz-option nzLabel=\"Dapat\" nzValue=\"Dapat\"></nz-option>\r\n                                    <nz-option nzLabel=\"Tidak\" nzValue=\"Tidak\"></nz-option>\r\n                                </nz-select>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Other Allowance</nz-form-label>\r\n                            <nz-form-control>\r\n                                <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"Select\"\r\n                                    formControlName=\"uang_tunjangan\">\r\n                                    <nz-option nzLabel=\"Dapat\" nzValue=\"Dapat\"></nz-option>\r\n                                    <nz-option nzLabel=\"Tidak\" nzValue=\"Tidak\"></nz-option>\r\n                                </nz-select>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Overtime</nz-form-label>\r\n                            <nz-form-control>\r\n                                <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"Select\" formControlName=\"lembur\">\r\n                                    <nz-option nzLabel=\"Dapat\" nzValue=\"Dapat\"></nz-option>\r\n                                    <nz-option nzLabel=\"Tidak\" nzValue=\"Tidak\"></nz-option>\r\n                                </nz-select>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Jamsostek</nz-form-label>\r\n                            <nz-form-control>\r\n                                <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"Select\" formControlName=\"jamsostek\">\r\n                                    <nz-option nzLabel=\"Dapat\" nzValue=\"Dapat\"></nz-option>\r\n                                    <nz-option nzLabel=\"Tidak\" nzValue=\"Tidak\"></nz-option>\r\n                                </nz-select>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Other facility</nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input placeholder=\"rupian\" formControlName=\"fasilitas_lain\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <div nz-col nzSpan=\"12\">\r\n                            <nz-form-item>\r\n                                <nz-form-label>change File</nz-form-label>\r\n                                <nz-form-control>\r\n                                    <a>\r\n                                        <div class=\"button\" nz-button nzType=\"primary\" nzBlock (click)=\"togleShowUpload()\">\r\n                                            <i nz-icon nzType=\"cloud-upload\" nzTheme=\"outline\"></i>&nbsp;Upload</div>\r\n                                    </a>\r\n                                </nz-form-control>\r\n                            </nz-form-item>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </form>\r\n\r\n            <div nz-row nzGutter=\"8\" *ngIf=\"toogleUpload\">\r\n                <erp-single-upload></erp-single-upload>\r\n            </div>\r\n\r\n            <div class=\"footer\">\r\n                <button nz-button nzType=\"default\" (click)=\"goToBack()\"\r\n                    style=\"margin-right: 8px;\"><span>Cancel</span></button>\r\n                <button type=\"button\" (click)=\"simpan()\" class=\"ant-btn ant-btn-primary\"\r\n                    form=\"ngForm\"><span>Submit</span></button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/hr/direktori/employee/permintaan-pegawai/list/list.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/hr/direktori/employee/permintaan-pegawai/list/list.component.html ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"air__utils__heading card-header-flex\">\r\n        <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n            <h5 class=\"mb-0\">Jobs</h5>\r\n        </div>\r\n        <div class=\"d-flex flex-column justify-content-center\">\r\n            <a class=\"btn btn-primary\" [routerLink]=\"['../add']\" routerLinkActive=\"router-link-active\">\r\n                <i nz-icon nzType=\"plus\" nzTheme=\"outline\"></i> Add New\r\n            </a>\r\n        </div>\r\n    </div>\r\n    <div class=\"card\">\r\n        <div class=\"card-body\">\r\n            <nav class=\"navbar\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-8\">\r\n                        <input class=\"form-control\" type=\"text\" name=\"search\" [(ngModel)]=\"search\">\r\n                    </div>\r\n                    <div class=\"col-md-4\">\r\n                        <button nz-button nzType=\"primary\" (click)=\"searchData()\">Search</button>\r\n                    </div>\r\n                </div>\r\n            </nav>\r\n            <nz-table #ajaxTable nzShowSizeChanger [nzFrontPagination]=\"false\" [nzData]=\"listOfData\"\r\n                [nzLoading]=\"loading\" [nzTotal]=\"total\" [(nzPageIndex)]=\"pageIndex\" [(nzPageSize)]=\"pageSize\"\r\n                (nzPageIndexChange)=\"searchData()\" (nzPageSizeChange)=\"searchData(true)\">\r\n                <thead (nzSortChange)=\"sort($event)\" nzSingleSort>\r\n                    <tr>\r\n                        <th nzShowSort nzSortKey=\"status\">Status</th>\r\n                        <th nzShowSort nzSortKey=\"nama_jabatan\">Position</th>\r\n                        <th nzShowSort nzSortKey=\"nama_departemen\">Department</th>\r\n                        <th class=\"text-center\">Applicant</th><!--Jumlah pelamar-->\r\n                        <th nzShowSort nzSortKey=\"tanggal_dibutuhkan\">Date Needed</th>\r\n                        <th nzShowSort nzSortKey=\"nama_kantor\">Office</th>\r\n                        <th>File</th>\r\n                        <th class=\"text-right\">Action</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor=\"let data of ajaxTable.data\">\r\n                        <td>{{ data.status }}</td>\r\n                        <td>{{ data.nama_jabatan }}</td>\r\n                        <td>{{ data.nama_departemen }}</td>\r\n                        <td class=\"text-center\">{{data.total}}</td>\r\n                        <!--\r\n                        <td>{{ data.jumlah_kebutuhan }}</td> -->\r\n                        <td>{{ data.tanggal_dibutuhkan | date}} </td>\r\n                        <td>{{ data.nama_kantor}}</td>\r\n                        <td>\r\n                            <erp-download-mode1 [formoduleid]=\"data.id_dokumen\"></erp-download-mode1>\r\n                        </td>\r\n                        <td class=\"text-right\">\r\n                            <a nz-dropdown [nzDropdownMenu]=\"menu\" nzPlacement=\"bottomRight\">\r\n                                <i nz-icon nzType=\"more\" nzTheme=\"outline\"></i>\r\n                            </a>\r\n                            <nz-dropdown-menu #menu=\"nzDropdownMenu\">\r\n                                <ul nz-menu nzSelectable>\r\n                                    <li nz-menu-item [routerLink]=\"['../detail',data.id_permintaan_pegawai]\">\r\n                                        <i nz-icon nzType=\"search\" nzTheme=\"outline\"></i> View\r\n                                    </li>\r\n                                    <li nz-menu-item *ngIf=\"data.status == 'draft'\" [routerLink]=\"['../edit',data.id_permintaan_pegawai]\">\r\n                                        <i nz-icon nzType=\"edit\" nzTheme=\"outline\"></i> Edit\r\n                                    </li>\r\n                                    <li nz-menu-divider></li>\r\n                                    <li nz-menu-item>\r\n                                        <a nz-popconfirm nzPopconfirmTitle=\"Are you sure delete this ?\"\r\n                                            nzPopconfirmPlacement=\"bottom\"\r\n                                            (nzOnConfirm)=\"delete(data.id_permintaan_pegawai)\"\r\n                                            (nzOnCancel)=\"batalDelete()\"><i nz-icon nzType=\"delete\" nzTheme=\"outline\"></i> Delete</a>\r\n                                    </li>\r\n                                </ul>\r\n                            </nz-dropdown-menu>\r\n                        </td>\r\n                    </tr>\r\n                </tbody>\r\n            </nz-table>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/hr/direktori/employee/permintaan-pegawai/add/add.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/employee/permintaan-pegawai/add/add.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hyL2RpcmVrdG9yaS9lbXBsb3llZS9wZXJtaW50YWFuLXBlZ2F3YWkvYWRkL2FkZC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/hr/direktori/employee/permintaan-pegawai/add/add.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/employee/permintaan-pegawai/add/add.component.ts ***!
  \*************************************************************************************/
/*! exports provided: AddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddComponent", function() { return AddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/sdk/hr/services */ "./src/app/sdk/hr/services.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/angular-reactive-forms-helper */ "./src/app/services/angular-reactive-forms-helper.ts");
/* harmony import */ var src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/tool/pesan.service */ "./src/app/services/tool/pesan.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");









var AddComponent = /** @class */ (function () {
    function AddComponent(direktoriPermintaanPegawaiService, notification, companyDepartemenService, companyJabatanService, companyPangkatService, companyDivisiService, companyKantorService, spinner, fb, pesan, router) {
        this.direktoriPermintaanPegawaiService = direktoriPermintaanPegawaiService;
        this.notification = notification;
        this.companyDepartemenService = companyDepartemenService;
        this.companyJabatanService = companyJabatanService;
        this.companyPangkatService = companyPangkatService;
        this.companyDivisiService = companyDivisiService;
        this.companyKantorService = companyKantorService;
        this.spinner = spinner;
        this.fb = fb;
        this.pesan = pesan;
        this.router = router;
        this.dataPermintaanPegawai = {};
        this.id_perjalanan_dinas = '';
        this.listDepartemen = [];
        this.listJabatan = [];
        this.listPangkat = [];
        this.listDivisi = [];
        this.listKantor = [];
    }
    AddComponent.prototype.ngOnInit = function () {
        this.form();
        this.getPreeData();
    };
    AddComponent.prototype.getPreeData = function () {
        var _this = this;
        this.companyPangkatService.getCompanyPangkats().subscribe(function (data) {
            _this.listPangkat = data.data;
        });
        this.companyKantorService.getCompanyKantors().subscribe(function (data) {
            _this.listKantor = data.data;
        });
        this.companyDepartemenService.getCompanyDepartemens().subscribe(function (data) {
            _this.listDepartemen = data.data;
        });
    };
    AddComponent.prototype.getDivisi = function () {
        var _this = this;
        this.spinner.show();
        this.companyDivisiService.getCompanyDivisis(JSON.stringify({
            id_departemen: this.dataForm.value.permintaan_departemen,
        })).subscribe(function (data) {
            _this.spinner.hide();
            _this.listDivisi = data.data;
        });
    };
    AddComponent.prototype.getJabatan = function () {
        var _this = this;
        this.spinner.show();
        this.companyJabatanService.getCompanyJabatans(JSON.stringify({
            id_divisi: this.dataForm.value.permintaan_divisi,
        })).subscribe(function (data) {
            _this.spinner.hide();
            _this.listJabatan = data.data;
            if (data.data.length < 1) {
                _this.pesan.pesanWarningForm('data jabatan kosong!');
            }
        });
    };
    AddComponent.prototype.form = function () {
        this.dataForm = this.fb.group({
            permintaan_jabatan: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]),
            permintaan_departemen: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            permintaan_pangkat: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            lokasi_kerja: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            type_jam_kerja: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            tanggal_dibutuhkan: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            jumlah_kebutuhan: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            Rencana: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            tidak_sesuai_rencana: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            status_hubungan_kerja: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            id_jabatan_atasan: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            tugas_utama: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            pendidikan_minimum: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            jumlah_bawahan: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            pengalaman_minimal: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            spesifik_pengalaman: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            sertifikat_dibutuhkan: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            keterampilan_dibutuhkan: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            ruang_kerja: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            umur: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            jenis_kelamin: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            tinggi: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            berat: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            status_perkawinan: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            berkacamata: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            gaji_pokok: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            uang_makan_transport: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            uang_jabatan: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            uang_tunjangan: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            lembur: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            jamsostek: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            fasilitas_lain: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            permintaan_divisi: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
        });
    };
    AddComponent.prototype.simpan = function () {
        var _this = this;
        this.spinner.show();
        if (this.dataForm.invalid) {
            this.pesan.pesanWarningForm('Form Tidak Valid');
            this.spinner.hide();
            return;
        }
        this.dataPermintaanPegawai = this.dataForm.value;
        this.direktoriPermintaanPegawaiService
            .postDirektoriPermintaanPegawais(this.dataPermintaanPegawai)
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
        this.router.navigate(['/hr/direktori/permintaan-pegawai/list']);
    };
    AddComponent.ctorParameters = function () { return [
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_1__["DirektoriPermintaanPegawaiService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzNotificationService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_1__["CompanyDepartemenService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_1__["CompanyJabatanService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_1__["CompanyPangkatService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_1__["CompanyDivisiService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_1__["CompanyKantorService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"] },
        { type: src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_5__["FormBuilderTypeSafe"] },
        { type: src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_6__["PesanService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }
    ]; };
    AddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-add',
            template: __webpack_require__(/*! raw-loader!./add.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/hr/direktori/employee/permintaan-pegawai/add/add.component.html"),
            styles: [__webpack_require__(/*! ./add.component.scss */ "./src/app/pages/hr/direktori/employee/permintaan-pegawai/add/add.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_1__["DirektoriPermintaanPegawaiService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzNotificationService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_1__["CompanyDepartemenService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_1__["CompanyJabatanService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_1__["CompanyPangkatService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_1__["CompanyDivisiService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_1__["CompanyKantorService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"],
            src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_5__["FormBuilderTypeSafe"],
            src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_6__["PesanService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]])
    ], AddComponent);
    return AddComponent;
}());



/***/ }),

/***/ "./src/app/pages/hr/direktori/employee/permintaan-pegawai/detail/detail.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/employee/permintaan-pegawai/detail/detail.component.scss ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hyL2RpcmVrdG9yaS9lbXBsb3llZS9wZXJtaW50YWFuLXBlZ2F3YWkvZGV0YWlsL2RldGFpbC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/hr/direktori/employee/permintaan-pegawai/detail/detail.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/employee/permintaan-pegawai/detail/detail.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: DetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailComponent", function() { return DetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sdk/hr/services */ "./src/app/sdk/hr/services.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_components_approval_standar_standar_approval_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/components/approval/standar/standar-approval.service */ "./src/app/components/approval/standar/standar-approval.service.ts");
/* harmony import */ var src_app_sdk_user_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/sdk/user/services */ "./src/app/sdk/user/services.ts");







var DetailComponent = /** @class */ (function () {
    function DetailComponent(companyPangkatService, companyJabatanService, companyDepartemenService, direktoriPermintaanPegawaiService, direktoriPelamarService, routerActive, spinner, router, standarApprovalService, toolsLogFlowService) {
        this.companyPangkatService = companyPangkatService;
        this.companyJabatanService = companyJabatanService;
        this.companyDepartemenService = companyDepartemenService;
        this.direktoriPermintaanPegawaiService = direktoriPermintaanPegawaiService;
        this.direktoriPelamarService = direktoriPelamarService;
        this.routerActive = routerActive;
        this.spinner = spinner;
        this.router = router;
        this.standarApprovalService = standarApprovalService;
        this.toolsLogFlowService = toolsLogFlowService;
        this.id_permintaan_pegawai = '';
        this.PermintaanPegawai = {};
        this.dataJabatan = {};
        this.dataDepartemen = {};
        this.dataPangkat = {};
        this.pelamar = [];
        this.kandidat = [];
        this.params = null;
        this.id_data_flow = '';
        this.listLog = [];
    }
    DetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.routerActive.paramMap.subscribe(function (params) {
            if (params.get('id_permintaan_pegawai')) {
                _this.id_permintaan_pegawai = params.get('id_permintaan_pegawai');
            }
            _this.getPermintaanPegawai();
            _this.getLog();
        });
        this.standarApprovalService.isreload.next(false);
        this.standarApprovalService.getisreload().subscribe(function (data) {
            if (data) {
                _this.getPermintaanPegawai();
                _this.getLog();
            }
        });
    };
    DetailComponent.prototype.getPermintaanPegawai = function () {
        var _this = this;
        this.spinner.show();
        this.direktoriPermintaanPegawaiService.getDirektoriPermintaanPegawaisId(this.id_permintaan_pegawai).subscribe(function (data) {
            _this.PermintaanPegawai = data.data;
            _this.getJabatan(data.data.permintaan_jabatan);
            _this.getDepartemen(data.data.permintaan_departemen);
            _this.getPangkat(data.data.permintaan_pangkat);
            _this.params = {
                id: data.data.id_permintaan_pegawai,
                id_data_flow_detail: data.data.id_data_flow_detail,
                id_data_flow: data.data.id_data_flow,
                next_status: null,
                primary_key: "id_permintaan_pegawai"
            };
            _this.standarApprovalService.param.next(_this.params);
            _this.spinner.hide();
        });
        this.direktoriPelamarService.getDirektoriPelamars(JSON.stringify({ id_permintaan_pegawai: this.id_permintaan_pegawai })).subscribe(function (data) {
            _this.pelamar = data.data;
        });
        this.direktoriPelamarService.getDirektoriPelamars(JSON.stringify({ status: 'dipertimbangkan' })).subscribe(function (data) {
            _this.kandidat = data.data;
        });
    };
    DetailComponent.prototype.getJabatan = function (permintaan_jabatan) {
        var _this = this;
        this.companyJabatanService.getCompanyJabatansId(permintaan_jabatan).subscribe(function (data) {
            _this.dataJabatan = data.data;
        });
    };
    DetailComponent.prototype.getDepartemen = function (permintaan_departemen) {
        var _this = this;
        this.companyDepartemenService.getCompanyDepartemensId(permintaan_departemen).subscribe(function (data) {
            _this.dataDepartemen = data.data;
        });
    };
    DetailComponent.prototype.getPangkat = function (permintaan_pangkat) {
        var _this = this;
        this.companyPangkatService.getCompanyPangkatsId(permintaan_pangkat).subscribe(function (data) {
            _this.dataPangkat = data.data;
        });
    };
    DetailComponent.prototype.getLog = function () {
        var _this = this;
        this.spinner.show();
        this.toolsLogFlowService.getToolsLogFlows(JSON.stringify({ for_module_id: this.id_permintaan_pegawai })).subscribe(function (data) {
            _this.listLog = data.data;
            _this.spinner.hide();
        });
    };
    DetailComponent.prototype.goToBack = function () {
        this.router.navigate(['/hr/direktori/permintaan-pegawai/list']);
    };
    //permintaan
    DetailComponent.prototype.pelamarTerima = function (id_pelamar) {
    };
    DetailComponent.ctorParameters = function () { return [
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["CompanyPangkatService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["CompanyJabatanService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["CompanyDepartemenService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["DirektoriPermintaanPegawaiService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["DirektoriPelamarService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_1__["NgxSpinnerService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: src_app_components_approval_standar_standar_approval_service__WEBPACK_IMPORTED_MODULE_5__["StandarApprovalService"] },
        { type: src_app_sdk_user_services__WEBPACK_IMPORTED_MODULE_6__["ToolsLogFlowService"] }
    ]; };
    DetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-detail',
            template: __webpack_require__(/*! raw-loader!./detail.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/hr/direktori/employee/permintaan-pegawai/detail/detail.component.html"),
            styles: [__webpack_require__(/*! ./detail.component.scss */ "./src/app/pages/hr/direktori/employee/permintaan-pegawai/detail/detail.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["CompanyPangkatService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["CompanyJabatanService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["CompanyDepartemenService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["DirektoriPermintaanPegawaiService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["DirektoriPelamarService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_1__["NgxSpinnerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            src_app_components_approval_standar_standar_approval_service__WEBPACK_IMPORTED_MODULE_5__["StandarApprovalService"],
            src_app_sdk_user_services__WEBPACK_IMPORTED_MODULE_6__["ToolsLogFlowService"]])
    ], DetailComponent);
    return DetailComponent;
}());



/***/ }),

/***/ "./src/app/pages/hr/direktori/employee/permintaan-pegawai/edit/edit.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/employee/permintaan-pegawai/edit/edit.component.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hyL2RpcmVrdG9yaS9lbXBsb3llZS9wZXJtaW50YWFuLXBlZ2F3YWkvZWRpdC9lZGl0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/hr/direktori/employee/permintaan-pegawai/edit/edit.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/employee/permintaan-pegawai/edit/edit.component.ts ***!
  \***************************************************************************************/
/*! exports provided: EditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditComponent", function() { return EditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sdk/hr/services */ "./src/app/sdk/hr/services.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/angular-reactive-forms-helper */ "./src/app/services/angular-reactive-forms-helper.ts");
/* harmony import */ var src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/tool/pesan.service */ "./src/app/services/tool/pesan.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_components_document_single_upload_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/components/document/single-upload.service */ "./src/app/components/document/single-upload.service.ts");










var EditComponent = /** @class */ (function () {
    function EditComponent(direktoriPermintaanPegawaiService, notification, companyDepartemenService, companyJabatanService, companyPangkatService, companyDivisiService, companyKantorService, spinner, fb, activatedRoute, pesan, router, singleUploadService) {
        this.direktoriPermintaanPegawaiService = direktoriPermintaanPegawaiService;
        this.notification = notification;
        this.companyDepartemenService = companyDepartemenService;
        this.companyJabatanService = companyJabatanService;
        this.companyPangkatService = companyPangkatService;
        this.companyDivisiService = companyDivisiService;
        this.companyKantorService = companyKantorService;
        this.spinner = spinner;
        this.fb = fb;
        this.activatedRoute = activatedRoute;
        this.pesan = pesan;
        this.router = router;
        this.singleUploadService = singleUploadService;
        this.dataPermintaanPegawai = {};
        this.id_permintaan_pegawai = '';
        this.listDepartemen = [];
        this.listJabatan = [];
        this.listPangkat = [];
        this.listKantor = [];
        this.listDivisi = [];
        this.toogleUpload = false;
    }
    EditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id_permintaan_pegawai = this.activatedRoute.snapshot.paramMap.get('id_permintaan_pegawai');
        this.form();
        this.getPreeData();
        this.getData();
        this.singleUploadService.getCallback().subscribe(function (data) {
            if (data == 'employee_managejob.finish') {
                _this.toogleUpload = false;
            }
        });
        this.singleUploadService.getId().subscribe(function (data) {
            if (data) {
                _this.dataForm.patchValue({ id_dokumen: data });
                _this.simpan();
            }
        });
    };
    EditComponent.prototype.togleShowUpload = function () {
        this.toogleUpload = true;
    };
    EditComponent.prototype.getPreeData = function () {
        var _this = this;
        this.companyPangkatService.getCompanyPangkats().subscribe(function (data) {
            _this.listPangkat = data.data;
        });
        this.companyKantorService.getCompanyKantors().subscribe(function (data) {
            _this.listKantor = data.data;
        });
        this.companyDepartemenService.getCompanyDepartemens().subscribe(function (data) {
            _this.listDepartemen = data.data;
        });
    };
    EditComponent.prototype.getDivisi = function () {
        var _this = this;
        this.spinner.show();
        this.companyDivisiService.getCompanyDivisis(JSON.stringify({
            id_departemen: this.dataForm.value.permintaan_departemen,
        })).subscribe(function (data) {
            _this.spinner.hide();
            _this.listDivisi = data.data;
        });
    };
    EditComponent.prototype.getJabatan = function () {
        var _this = this;
        this.spinner.show();
        this.companyJabatanService.getCompanyJabatans(JSON.stringify({
            id_divisi: this.dataForm.value.permintaan_divisi,
        })).subscribe(function (data) {
            _this.spinner.hide();
            _this.listJabatan = data.data;
            if (data.data.length < 1) {
                _this.pesan.pesanWarningForm('data jabatan kosong!');
            }
        });
    };
    EditComponent.prototype.getData = function () {
        var _this = this;
        this.spinner.show();
        this.direktoriPermintaanPegawaiService.getDirektoriPermintaanPegawaisId(this.id_permintaan_pegawai).subscribe(function (data) {
            _this.dataForm.setValue(data.data);
            _this.spinner.hide();
            _this.singleUploadService.param.next({
                for_module: "employee_managejob",
                for_table: "erp_hr.permintaan_pegawai",
                for_module_id: data.data.id_permintaan_pegawai
            });
        });
    };
    EditComponent.prototype.form = function () {
        this.dataForm = this.fb.group({
            permintaan_jabatan: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]),
            permintaan_departemen: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            permintaan_pangkat: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            lokasi_kerja: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            type_jam_kerja: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            tanggal_dibutuhkan: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            jumlah_kebutuhan: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            Rencana: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            tidak_sesuai_rencana: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            status_hubungan_kerja: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            id_jabatan_atasan: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            tugas_utama: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            pendidikan_minimum: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            jumlah_bawahan: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            pengalaman_minimal: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            spesifik_pengalaman: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            sertifikat_dibutuhkan: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            keterampilan_dibutuhkan: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            ruang_kerja: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            umur: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            jenis_kelamin: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            tinggi: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            berat: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            status_perkawinan: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            berkacamata: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            gaji_pokok: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            uang_makan_transport: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            uang_jabatan: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            uang_tunjangan: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            lembur: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            jamsostek: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            fasilitas_lain: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            id_user: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            id_permintaan_pegawai: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            created_at: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            updated_at: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            id_data_flow_detail: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            id_data_flow: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            status: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            posisi: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            nomor: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            status_permintaan: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            id_dokumen: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            permintaan_divisi: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
        });
    };
    EditComponent.prototype.simpan = function () {
        var _this = this;
        this.spinner.show();
        if (this.dataForm.invalid) {
            this.pesan.pesanWarningForm('Form Tidak Valid');
            this.spinner.hide();
            return;
        }
        this.dataPermintaanPegawai = this.dataForm.value;
        this.direktoriPermintaanPegawaiService
            .putDirektoriPermintaanPegawaisId({ id: this.id_permintaan_pegawai, body: this.dataPermintaanPegawai })
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
        this.router.navigate(['/hr/direktori/permintaan-pegawai/list']);
    };
    EditComponent.ctorParameters = function () { return [
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["DirektoriPermintaanPegawaiService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzNotificationService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["CompanyDepartemenService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["CompanyJabatanService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["CompanyPangkatService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["CompanyDivisiService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["CompanyKantorService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"] },
        { type: src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_5__["FormBuilderTypeSafe"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] },
        { type: src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_6__["PesanService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
        { type: src_app_components_document_single_upload_service__WEBPACK_IMPORTED_MODULE_9__["SingleUploadService"] }
    ]; };
    EditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit',
            template: __webpack_require__(/*! raw-loader!./edit.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/hr/direktori/employee/permintaan-pegawai/edit/edit.component.html"),
            styles: [__webpack_require__(/*! ./edit.component.scss */ "./src/app/pages/hr/direktori/employee/permintaan-pegawai/edit/edit.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["DirektoriPermintaanPegawaiService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzNotificationService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["CompanyDepartemenService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["CompanyJabatanService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["CompanyPangkatService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["CompanyDivisiService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["CompanyKantorService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"],
            src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_5__["FormBuilderTypeSafe"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"],
            src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_6__["PesanService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
            src_app_components_document_single_upload_service__WEBPACK_IMPORTED_MODULE_9__["SingleUploadService"]])
    ], EditComponent);
    return EditComponent;
}());



/***/ }),

/***/ "./src/app/pages/hr/direktori/employee/permintaan-pegawai/list/list.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/employee/permintaan-pegawai/list/list.component.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hyL2RpcmVrdG9yaS9lbXBsb3llZS9wZXJtaW50YWFuLXBlZ2F3YWkvbGlzdC9saXN0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/hr/direktori/employee/permintaan-pegawai/list/list.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/employee/permintaan-pegawai/list/list.component.ts ***!
  \***************************************************************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sdk/hr/services */ "./src/app/sdk/hr/services.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");





var ListComponent = /** @class */ (function () {
    function ListComponent(direktoriPermintaanPegawaiService, nzMessageService, spinner) {
        this.direktoriPermintaanPegawaiService = direktoriPermintaanPegawaiService;
        this.nzMessageService = nzMessageService;
        this.spinner = spinner;
        this.pageIndex = 1;
        this.pageSize = 10;
        this.total = 1;
        this.listOfData = [];
        this.loading = true;
        this.sortValue = null;
        this.sortKey = null;
        this.search = '';
    }
    ListComponent.prototype.ngOnInit = function () {
        this.searchData();
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
        this.direktoriPermintaanPegawaiService
            .getDirektoriPermintaanPegawais(JSON.stringify({
            pageIndex: this.pageIndex, pageSize: this.pageSize, sortKey: this.sortKey, sortValue: this.sortValue, search: this.search
        }))
            .subscribe(function (data) {
            _this.loading = false;
            _this.total = data.data.total;
            _this.listOfData = data.data.data;
            console.log(data.data.data);
        });
    };
    ListComponent.prototype.updateFilter = function (value) {
        this.search = value;
        this.searchData(true);
    };
    ListComponent.prototype.delete = function (id) {
        var _this = this;
        this.spinner.show();
        this.direktoriPermintaanPegawaiService.deleteDirektoriPermintaanPegawaisId(id).subscribe(function (data) {
            _this.searchData();
            _this.spinner.hide();
        });
    };
    ListComponent.prototype.batalDelete = function () {
        this.nzMessageService.info('click cancel');
    };
    ListComponent.ctorParameters = function () { return [
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["DirektoriPermintaanPegawaiService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzMessageService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"] }
    ]; };
    ListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list',
            template: __webpack_require__(/*! raw-loader!./list.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/hr/direktori/employee/permintaan-pegawai/list/list.component.html"),
            styles: [__webpack_require__(/*! ./list.component.scss */ "./src/app/pages/hr/direktori/employee/permintaan-pegawai/list/list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["DirektoriPermintaanPegawaiService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzMessageService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"]])
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "./src/app/pages/hr/direktori/employee/permintaan-pegawai/permintaan-pegawai-routing.module.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/employee/permintaan-pegawai/permintaan-pegawai-routing.module.ts ***!
  \*****************************************************************************************************/
/*! exports provided: PermintaanPegawaiRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermintaanPegawaiRoutingModule", function() { return PermintaanPegawaiRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _detail_detail_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./detail/detail.component */ "./src/app/pages/hr/direktori/employee/permintaan-pegawai/detail/detail.component.ts");
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add/add.component */ "./src/app/pages/hr/direktori/employee/permintaan-pegawai/add/add.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/pages/hr/direktori/employee/permintaan-pegawai/edit/edit.component.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list/list.component */ "./src/app/pages/hr/direktori/employee/permintaan-pegawai/list/list.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");







var routes = [
    {
        path: '',
        redirectTo: 'list'
    },
    {
        path: 'list',
        component: _list_list_component__WEBPACK_IMPORTED_MODULE_4__["ListComponent"]
    },
    {
        path: 'edit/:id_permintaan_pegawai',
        component: _edit_edit_component__WEBPACK_IMPORTED_MODULE_3__["EditComponent"]
    },
    {
        path: 'add',
        component: _add_add_component__WEBPACK_IMPORTED_MODULE_2__["AddComponent"]
    },
    {
        path: 'detail/:id_permintaan_pegawai',
        component: _detail_detail_component__WEBPACK_IMPORTED_MODULE_1__["DetailComponent"]
    }
];
var PermintaanPegawaiRoutingModule = /** @class */ (function () {
    function PermintaanPegawaiRoutingModule() {
    }
    PermintaanPegawaiRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"]]
        })
    ], PermintaanPegawaiRoutingModule);
    return PermintaanPegawaiRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/hr/direktori/employee/permintaan-pegawai/permintaan-pegawai.module.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/employee/permintaan-pegawai/permintaan-pegawai.module.ts ***!
  \*********************************************************************************************/
/*! exports provided: PermintaanPegawaiModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermintaanPegawaiModule", function() { return PermintaanPegawaiModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _permintaan_pegawai_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./permintaan-pegawai-routing.module */ "./src/app/pages/hr/direktori/employee/permintaan-pegawai/permintaan-pegawai-routing.module.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list/list.component */ "./src/app/pages/hr/direktori/employee/permintaan-pegawai/list/list.component.ts");
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add/add.component */ "./src/app/pages/hr/direktori/employee/permintaan-pegawai/add/add.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/pages/hr/direktori/employee/permintaan-pegawai/edit/edit.component.ts");
/* harmony import */ var _detail_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./detail/detail.component */ "./src/app/pages/hr/direktori/employee/permintaan-pegawai/detail/detail.component.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/angular-reactive-forms-helper */ "./src/app/services/angular-reactive-forms-helper.ts");
/* harmony import */ var src_app_components_approval_approval_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/components/approval/approval.module */ "./src/app/components/approval/approval.module.ts");
/* harmony import */ var src_app_components_document_document_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/components/document/document.module */ "./src/app/components/document/document.module.ts");
/* harmony import */ var src_app_pipe_pipe_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/pipe/pipe.module */ "./src/app/pipe/pipe.module.ts");














var PermintaanPegawaiModule = /** @class */ (function () {
    function PermintaanPegawaiModule() {
    }
    PermintaanPegawaiModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_list_list_component__WEBPACK_IMPORTED_MODULE_4__["ListComponent"], _add_add_component__WEBPACK_IMPORTED_MODULE_5__["AddComponent"], _edit_edit_component__WEBPACK_IMPORTED_MODULE_6__["EditComponent"], _detail_detail_component__WEBPACK_IMPORTED_MODULE_7__["DetailComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _permintaan_pegawai_routing_module__WEBPACK_IMPORTED_MODULE_3__["PermintaanPegawaiRoutingModule"],
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_8__["NgZorroAntdModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                src_app_components_approval_approval_module__WEBPACK_IMPORTED_MODULE_11__["ApprovalModule"],
                src_app_components_document_document_module__WEBPACK_IMPORTED_MODULE_12__["DocumentModule"],
                src_app_pipe_pipe_module__WEBPACK_IMPORTED_MODULE_13__["PipeModule"]
            ],
            providers: [
                src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_10__["FormBuilderTypeSafe"]
            ]
        })
    ], PermintaanPegawaiModule);
    return PermintaanPegawaiModule;
}());



/***/ }),

/***/ "./src/app/sdk/hr/services.ts":
/*!************************************!*\
  !*** ./src/app/sdk/hr/services.ts ***!
  \************************************/
/*! exports provided: AbsensiJadwalPegawaiTerjadwalService, AbsensiJadwalTipeService, AbsensiJadwalTipeNormalDetailService, AbsensiKehadiranService, AbsensiRekapKehadiranService, AbsensiPilotAircraftService, AbsensiPilotJadwalDetailService, AbsensiPilotRonService, AkunBillingService, AkunBillingCategoryService, AkunCashAdvanceService, AkunExpensesSummaryService, AkunExpensesSummaryItemService, AkunReimburseService, AkunReimburseItemService, AkunUntukAkunService, CompanyAcaraService, CompanyDepartemenService, CompanyDivisiService, CompanyJabatanService, CompanyKantorService, CompanyLettersService, CompanyLisensiService, CompanyPangkatService, CompanyPengumumanService, CompanyPerizinanService, CompanyPerusahaanService, DirektoriBankAccountService, DirektoriHrNotesService, DirektoriKalenderPerusahaanService, DirektoriLisensiTipeService, DirektoriPegawaiService, DirektoriPegawaiBiodataService, DirektoriPegawaiCardService, DirektoriPegawaiEmergencyService, DirektoriPegawaiKeahlianService, DirektoriPegawaiKeluargaService, DirektoriPegawaiKeluargalistService, DirektoriPegawaiLisensiService, DirektoriPegawaiMasterService, DirektoriPegawaiPendidikanService, DirektoriPegawaiPendidikanInformalService, DirektoriPegawaiPengalamanService, DirektoriPegawaiPosisiService, DirektoriPegawaiSpService, DirektoriPegawaiStatusService, DirektoriPegawaiTypeService, DirektoriPelamarService, DirektoriPelamarBiodataService, DirektoriPelamarEmergencyService, DirektoriPelamarIdcardService, DirektoriPelamarKeahlianService, DirektoriPelamarKeluargaService, DirektoriPelamarKeluargalistService, DirektoriPelamarPendidikanService, DirektoriPelamarPendidikanInformalService, DirektoriPelamarPengalamanService, DirektoriPenilaianPelamarService, DirektoriPerjalananDinasService, DirektoriPerjalananDinasAnggotaService, DirektoriPerjalananDinasRonService, DirektoriPermintaanPegawaiService, DirektoriPermintaanPegawaiListService, DirektoriProjekService, DirektoriProjekAnggotaService, DirektoriPromosiService, DirektoriResignService, DirektoriSpTipeService, DirektoriTerminationService, DirektoriTrainingService, DirektoriTrainingAnggotaService, DirektoriTrainingTrainerService, DirektoriVPegawaiPosisiService, FileDokumenService, FlowDataFlowService, FlowDataFlowDetailService, FlowLogFlowService, GaBiayaService, GaBiayaRincianService, GaHotelService, GaKlaimItemService, GaKlaimKategoriService, GaKlaimPengajuanService, GaKlaimPengaturanService, GaPembelianService, GaPembelianItemService, GaTiketService, GaTransportService, GaUniformService, GaUniformMasterService, GaUniformMasterxService, GaUntukService, KalenderCutiKategoriService, KalenderCutiPengajuanService, KalenderCutiPengajuanTanggalService, KalenderCutiPengaturanService, KalenderCutiPengaturanPerpegawaiService, KalenderLemburPengaturanService, KalenderLemburService, PayrollPtkpService, PayrollPilotMasterRatePilotService, PayrollPilotPekerjaanService, PayrollPilotRatePilotService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_absensi_jadwal_pegawai_terjadwal_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/absensi-jadwal-pegawai-terjadwal.service */ "./src/app/sdk/hr/services/absensi-jadwal-pegawai-terjadwal.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AbsensiJadwalPegawaiTerjadwalService", function() { return _services_absensi_jadwal_pegawai_terjadwal_service__WEBPACK_IMPORTED_MODULE_0__["AbsensiJadwalPegawaiTerjadwalService"]; });

/* harmony import */ var _services_absensi_jadwal_tipe_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/absensi-jadwal-tipe.service */ "./src/app/sdk/hr/services/absensi-jadwal-tipe.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AbsensiJadwalTipeService", function() { return _services_absensi_jadwal_tipe_service__WEBPACK_IMPORTED_MODULE_1__["AbsensiJadwalTipeService"]; });

/* harmony import */ var _services_absensi_jadwal_tipe_normal_detail_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/absensi-jadwal-tipe-normal-detail.service */ "./src/app/sdk/hr/services/absensi-jadwal-tipe-normal-detail.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AbsensiJadwalTipeNormalDetailService", function() { return _services_absensi_jadwal_tipe_normal_detail_service__WEBPACK_IMPORTED_MODULE_2__["AbsensiJadwalTipeNormalDetailService"]; });

/* harmony import */ var _services_absensi_kehadiran_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/absensi-kehadiran.service */ "./src/app/sdk/hr/services/absensi-kehadiran.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AbsensiKehadiranService", function() { return _services_absensi_kehadiran_service__WEBPACK_IMPORTED_MODULE_3__["AbsensiKehadiranService"]; });

/* harmony import */ var _services_absensi_rekap_kehadiran_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/absensi-rekap-kehadiran.service */ "./src/app/sdk/hr/services/absensi-rekap-kehadiran.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AbsensiRekapKehadiranService", function() { return _services_absensi_rekap_kehadiran_service__WEBPACK_IMPORTED_MODULE_4__["AbsensiRekapKehadiranService"]; });

/* harmony import */ var _services_absensi_pilot_aircraft_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/absensi-pilot-aircraft.service */ "./src/app/sdk/hr/services/absensi-pilot-aircraft.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AbsensiPilotAircraftService", function() { return _services_absensi_pilot_aircraft_service__WEBPACK_IMPORTED_MODULE_5__["AbsensiPilotAircraftService"]; });

/* harmony import */ var _services_absensi_pilot_jadwal_detail_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/absensi-pilot-jadwal-detail.service */ "./src/app/sdk/hr/services/absensi-pilot-jadwal-detail.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AbsensiPilotJadwalDetailService", function() { return _services_absensi_pilot_jadwal_detail_service__WEBPACK_IMPORTED_MODULE_6__["AbsensiPilotJadwalDetailService"]; });

/* harmony import */ var _services_absensi_pilot_ron_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/absensi-pilot-ron.service */ "./src/app/sdk/hr/services/absensi-pilot-ron.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AbsensiPilotRonService", function() { return _services_absensi_pilot_ron_service__WEBPACK_IMPORTED_MODULE_7__["AbsensiPilotRonService"]; });

/* harmony import */ var _services_akun_billing_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/akun-billing.service */ "./src/app/sdk/hr/services/akun-billing.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AkunBillingService", function() { return _services_akun_billing_service__WEBPACK_IMPORTED_MODULE_8__["AkunBillingService"]; });

/* harmony import */ var _services_akun_billing_category_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/akun-billing-category.service */ "./src/app/sdk/hr/services/akun-billing-category.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AkunBillingCategoryService", function() { return _services_akun_billing_category_service__WEBPACK_IMPORTED_MODULE_9__["AkunBillingCategoryService"]; });

/* harmony import */ var _services_akun_cash_advance_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/akun-cash-advance.service */ "./src/app/sdk/hr/services/akun-cash-advance.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AkunCashAdvanceService", function() { return _services_akun_cash_advance_service__WEBPACK_IMPORTED_MODULE_10__["AkunCashAdvanceService"]; });

/* harmony import */ var _services_akun_expenses_summary_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/akun-expenses-summary.service */ "./src/app/sdk/hr/services/akun-expenses-summary.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AkunExpensesSummaryService", function() { return _services_akun_expenses_summary_service__WEBPACK_IMPORTED_MODULE_11__["AkunExpensesSummaryService"]; });

/* harmony import */ var _services_akun_expenses_summary_item_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/akun-expenses-summary-item.service */ "./src/app/sdk/hr/services/akun-expenses-summary-item.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AkunExpensesSummaryItemService", function() { return _services_akun_expenses_summary_item_service__WEBPACK_IMPORTED_MODULE_12__["AkunExpensesSummaryItemService"]; });

/* harmony import */ var _services_akun_reimburse_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/akun-reimburse.service */ "./src/app/sdk/hr/services/akun-reimburse.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AkunReimburseService", function() { return _services_akun_reimburse_service__WEBPACK_IMPORTED_MODULE_13__["AkunReimburseService"]; });

/* harmony import */ var _services_akun_reimburse_item_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/akun-reimburse-item.service */ "./src/app/sdk/hr/services/akun-reimburse-item.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AkunReimburseItemService", function() { return _services_akun_reimburse_item_service__WEBPACK_IMPORTED_MODULE_14__["AkunReimburseItemService"]; });

/* harmony import */ var _services_akun_untuk_akun_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/akun-untuk-akun.service */ "./src/app/sdk/hr/services/akun-untuk-akun.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AkunUntukAkunService", function() { return _services_akun_untuk_akun_service__WEBPACK_IMPORTED_MODULE_15__["AkunUntukAkunService"]; });

/* harmony import */ var _services_company_acara_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/company-acara.service */ "./src/app/sdk/hr/services/company-acara.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CompanyAcaraService", function() { return _services_company_acara_service__WEBPACK_IMPORTED_MODULE_16__["CompanyAcaraService"]; });

/* harmony import */ var _services_company_departemen_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/company-departemen.service */ "./src/app/sdk/hr/services/company-departemen.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CompanyDepartemenService", function() { return _services_company_departemen_service__WEBPACK_IMPORTED_MODULE_17__["CompanyDepartemenService"]; });

/* harmony import */ var _services_company_divisi_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./services/company-divisi.service */ "./src/app/sdk/hr/services/company-divisi.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CompanyDivisiService", function() { return _services_company_divisi_service__WEBPACK_IMPORTED_MODULE_18__["CompanyDivisiService"]; });

/* harmony import */ var _services_company_jabatan_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./services/company-jabatan.service */ "./src/app/sdk/hr/services/company-jabatan.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CompanyJabatanService", function() { return _services_company_jabatan_service__WEBPACK_IMPORTED_MODULE_19__["CompanyJabatanService"]; });

/* harmony import */ var _services_company_kantor_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./services/company-kantor.service */ "./src/app/sdk/hr/services/company-kantor.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CompanyKantorService", function() { return _services_company_kantor_service__WEBPACK_IMPORTED_MODULE_20__["CompanyKantorService"]; });

/* harmony import */ var _services_company_letters_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./services/company-letters.service */ "./src/app/sdk/hr/services/company-letters.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CompanyLettersService", function() { return _services_company_letters_service__WEBPACK_IMPORTED_MODULE_21__["CompanyLettersService"]; });

/* harmony import */ var _services_company_lisensi_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./services/company-lisensi.service */ "./src/app/sdk/hr/services/company-lisensi.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CompanyLisensiService", function() { return _services_company_lisensi_service__WEBPACK_IMPORTED_MODULE_22__["CompanyLisensiService"]; });

/* harmony import */ var _services_company_pangkat_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./services/company-pangkat.service */ "./src/app/sdk/hr/services/company-pangkat.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CompanyPangkatService", function() { return _services_company_pangkat_service__WEBPACK_IMPORTED_MODULE_23__["CompanyPangkatService"]; });

/* harmony import */ var _services_company_pengumuman_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./services/company-pengumuman.service */ "./src/app/sdk/hr/services/company-pengumuman.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CompanyPengumumanService", function() { return _services_company_pengumuman_service__WEBPACK_IMPORTED_MODULE_24__["CompanyPengumumanService"]; });

/* harmony import */ var _services_company_perizinan_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./services/company-perizinan.service */ "./src/app/sdk/hr/services/company-perizinan.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CompanyPerizinanService", function() { return _services_company_perizinan_service__WEBPACK_IMPORTED_MODULE_25__["CompanyPerizinanService"]; });

/* harmony import */ var _services_company_perusahaan_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./services/company-perusahaan.service */ "./src/app/sdk/hr/services/company-perusahaan.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CompanyPerusahaanService", function() { return _services_company_perusahaan_service__WEBPACK_IMPORTED_MODULE_26__["CompanyPerusahaanService"]; });

/* harmony import */ var _services_direktori_bank_account_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./services/direktori-bank-account.service */ "./src/app/sdk/hr/services/direktori-bank-account.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DirektoriBankAccountService", function() { return _services_direktori_bank_account_service__WEBPACK_IMPORTED_MODULE_27__["DirektoriBankAccountService"]; });

/* harmony import */ var _services_direktori_hr_notes_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./services/direktori-hr-notes.service */ "./src/app/sdk/hr/services/direktori-hr-notes.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DirektoriHrNotesService", function() { return _services_direktori_hr_notes_service__WEBPACK_IMPORTED_MODULE_28__["DirektoriHrNotesService"]; });

/* harmony import */ var _services_direktori_kalender_perusahaan_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./services/direktori-kalender-perusahaan.service */ "./src/app/sdk/hr/services/direktori-kalender-perusahaan.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DirektoriKalenderPerusahaanService", function() { return _services_direktori_kalender_perusahaan_service__WEBPACK_IMPORTED_MODULE_29__["DirektoriKalenderPerusahaanService"]; });

/* harmony import */ var _services_direktori_lisensi_tipe_service__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./services/direktori-lisensi-tipe.service */ "./src/app/sdk/hr/services/direktori-lisensi-tipe.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DirektoriLisensiTipeService", function() { return _services_direktori_lisensi_tipe_service__WEBPACK_IMPORTED_MODULE_30__["DirektoriLisensiTipeService"]; });

/* harmony import */ var _services_direktori_pegawai_service__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./services/direktori-pegawai.service */ "./src/app/sdk/hr/services/direktori-pegawai.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DirektoriPegawaiService", function() { return _services_direktori_pegawai_service__WEBPACK_IMPORTED_MODULE_31__["DirektoriPegawaiService"]; });

/* harmony import */ var _services_direktori_pegawai_biodata_service__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./services/direktori-pegawai-biodata.service */ "./src/app/sdk/hr/services/direktori-pegawai-biodata.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DirektoriPegawaiBiodataService", function() { return _services_direktori_pegawai_biodata_service__WEBPACK_IMPORTED_MODULE_32__["DirektoriPegawaiBiodataService"]; });

/* harmony import */ var _services_direktori_pegawai_card_service__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./services/direktori-pegawai-card.service */ "./src/app/sdk/hr/services/direktori-pegawai-card.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DirektoriPegawaiCardService", function() { return _services_direktori_pegawai_card_service__WEBPACK_IMPORTED_MODULE_33__["DirektoriPegawaiCardService"]; });

/* harmony import */ var _services_direktori_pegawai_emergency_service__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./services/direktori-pegawai-emergency.service */ "./src/app/sdk/hr/services/direktori-pegawai-emergency.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DirektoriPegawaiEmergencyService", function() { return _services_direktori_pegawai_emergency_service__WEBPACK_IMPORTED_MODULE_34__["DirektoriPegawaiEmergencyService"]; });

/* harmony import */ var _services_direktori_pegawai_keahlian_service__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./services/direktori-pegawai-keahlian.service */ "./src/app/sdk/hr/services/direktori-pegawai-keahlian.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DirektoriPegawaiKeahlianService", function() { return _services_direktori_pegawai_keahlian_service__WEBPACK_IMPORTED_MODULE_35__["DirektoriPegawaiKeahlianService"]; });

/* harmony import */ var _services_direktori_pegawai_keluarga_service__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./services/direktori-pegawai-keluarga.service */ "./src/app/sdk/hr/services/direktori-pegawai-keluarga.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DirektoriPegawaiKeluargaService", function() { return _services_direktori_pegawai_keluarga_service__WEBPACK_IMPORTED_MODULE_36__["DirektoriPegawaiKeluargaService"]; });

/* harmony import */ var _services_direktori_pegawai_keluargalist_service__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./services/direktori-pegawai-keluargalist.service */ "./src/app/sdk/hr/services/direktori-pegawai-keluargalist.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DirektoriPegawaiKeluargalistService", function() { return _services_direktori_pegawai_keluargalist_service__WEBPACK_IMPORTED_MODULE_37__["DirektoriPegawaiKeluargalistService"]; });

/* harmony import */ var _services_direktori_pegawai_lisensi_service__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./services/direktori-pegawai-lisensi.service */ "./src/app/sdk/hr/services/direktori-pegawai-lisensi.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DirektoriPegawaiLisensiService", function() { return _services_direktori_pegawai_lisensi_service__WEBPACK_IMPORTED_MODULE_38__["DirektoriPegawaiLisensiService"]; });

/* harmony import */ var _services_direktori_pegawai_master_service__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./services/direktori-pegawai-master.service */ "./src/app/sdk/hr/services/direktori-pegawai-master.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DirektoriPegawaiMasterService", function() { return _services_direktori_pegawai_master_service__WEBPACK_IMPORTED_MODULE_39__["DirektoriPegawaiMasterService"]; });

/* harmony import */ var _services_direktori_pegawai_pendidikan_service__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./services/direktori-pegawai-pendidikan.service */ "./src/app/sdk/hr/services/direktori-pegawai-pendidikan.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DirektoriPegawaiPendidikanService", function() { return _services_direktori_pegawai_pendidikan_service__WEBPACK_IMPORTED_MODULE_40__["DirektoriPegawaiPendidikanService"]; });

/* harmony import */ var _services_direktori_pegawai_pendidikan_informal_service__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./services/direktori-pegawai-pendidikan-informal.service */ "./src/app/sdk/hr/services/direktori-pegawai-pendidikan-informal.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DirektoriPegawaiPendidikanInformalService", function() { return _services_direktori_pegawai_pendidikan_informal_service__WEBPACK_IMPORTED_MODULE_41__["DirektoriPegawaiPendidikanInformalService"]; });

/* harmony import */ var _services_direktori_pegawai_pengalaman_service__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./services/direktori-pegawai-pengalaman.service */ "./src/app/sdk/hr/services/direktori-pegawai-pengalaman.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DirektoriPegawaiPengalamanService", function() { return _services_direktori_pegawai_pengalaman_service__WEBPACK_IMPORTED_MODULE_42__["DirektoriPegawaiPengalamanService"]; });

/* harmony import */ var _services_direktori_pegawai_posisi_service__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./services/direktori-pegawai-posisi.service */ "./src/app/sdk/hr/services/direktori-pegawai-posisi.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DirektoriPegawaiPosisiService", function() { return _services_direktori_pegawai_posisi_service__WEBPACK_IMPORTED_MODULE_43__["DirektoriPegawaiPosisiService"]; });

/* harmony import */ var _services_direktori_pegawai_sp_service__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./services/direktori-pegawai-sp.service */ "./src/app/sdk/hr/services/direktori-pegawai-sp.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DirektoriPegawaiSpService", function() { return _services_direktori_pegawai_sp_service__WEBPACK_IMPORTED_MODULE_44__["DirektoriPegawaiSpService"]; });

/* harmony import */ var _services_direktori_pegawai_status_service__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./services/direktori-pegawai-status.service */ "./src/app/sdk/hr/services/direktori-pegawai-status.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DirektoriPegawaiStatusService", function() { return _services_direktori_pegawai_status_service__WEBPACK_IMPORTED_MODULE_45__["DirektoriPegawaiStatusService"]; });

/* harmony import */ var _services_direktori_pegawai_type_service__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./services/direktori-pegawai-type.service */ "./src/app/sdk/hr/services/direktori-pegawai-type.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DirektoriPegawaiTypeService", function() { return _services_direktori_pegawai_type_service__WEBPACK_IMPORTED_MODULE_46__["DirektoriPegawaiTypeService"]; });

/* harmony import */ var _services_direktori_pelamar_service__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./services/direktori-pelamar.service */ "./src/app/sdk/hr/services/direktori-pelamar.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DirektoriPelamarService", function() { return _services_direktori_pelamar_service__WEBPACK_IMPORTED_MODULE_47__["DirektoriPelamarService"]; });

/* harmony import */ var _services_direktori_pelamar_biodata_service__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./services/direktori-pelamar-biodata.service */ "./src/app/sdk/hr/services/direktori-pelamar-biodata.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DirektoriPelamarBiodataService", function() { return _services_direktori_pelamar_biodata_service__WEBPACK_IMPORTED_MODULE_48__["DirektoriPelamarBiodataService"]; });

/* harmony import */ var _services_direktori_pelamar_emergency_service__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./services/direktori-pelamar-emergency.service */ "./src/app/sdk/hr/services/direktori-pelamar-emergency.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DirektoriPelamarEmergencyService", function() { return _services_direktori_pelamar_emergency_service__WEBPACK_IMPORTED_MODULE_49__["DirektoriPelamarEmergencyService"]; });

/* harmony import */ var _services_direktori_pelamar_idcard_service__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./services/direktori-pelamar-idcard.service */ "./src/app/sdk/hr/services/direktori-pelamar-idcard.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DirektoriPelamarIdcardService", function() { return _services_direktori_pelamar_idcard_service__WEBPACK_IMPORTED_MODULE_50__["DirektoriPelamarIdcardService"]; });

/* harmony import */ var _services_direktori_pelamar_keahlian_service__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./services/direktori-pelamar-keahlian.service */ "./src/app/sdk/hr/services/direktori-pelamar-keahlian.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DirektoriPelamarKeahlianService", function() { return _services_direktori_pelamar_keahlian_service__WEBPACK_IMPORTED_MODULE_51__["DirektoriPelamarKeahlianService"]; });

/* harmony import */ var _services_direktori_pelamar_keluarga_service__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./services/direktori-pelamar-keluarga.service */ "./src/app/sdk/hr/services/direktori-pelamar-keluarga.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DirektoriPelamarKeluargaService", function() { return _services_direktori_pelamar_keluarga_service__WEBPACK_IMPORTED_MODULE_52__["DirektoriPelamarKeluargaService"]; });

/* harmony import */ var _services_direktori_pelamar_keluargalist_service__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./services/direktori-pelamar-keluargalist.service */ "./src/app/sdk/hr/services/direktori-pelamar-keluargalist.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DirektoriPelamarKeluargalistService", function() { return _services_direktori_pelamar_keluargalist_service__WEBPACK_IMPORTED_MODULE_53__["DirektoriPelamarKeluargalistService"]; });

/* harmony import */ var _services_direktori_pelamar_pendidikan_service__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./services/direktori-pelamar-pendidikan.service */ "./src/app/sdk/hr/services/direktori-pelamar-pendidikan.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DirektoriPelamarPendidikanService", function() { return _services_direktori_pelamar_pendidikan_service__WEBPACK_IMPORTED_MODULE_54__["DirektoriPelamarPendidikanService"]; });

/* harmony import */ var _services_direktori_pelamar_pendidikan_informal_service__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./services/direktori-pelamar-pendidikan-informal.service */ "./src/app/sdk/hr/services/direktori-pelamar-pendidikan-informal.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DirektoriPelamarPendidikanInformalService", function() { return _services_direktori_pelamar_pendidikan_informal_service__WEBPACK_IMPORTED_MODULE_55__["DirektoriPelamarPendidikanInformalService"]; });

/* harmony import */ var _services_direktori_pelamar_pengalaman_service__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./services/direktori-pelamar-pengalaman.service */ "./src/app/sdk/hr/services/direktori-pelamar-pengalaman.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DirektoriPelamarPengalamanService", function() { return _services_direktori_pelamar_pengalaman_service__WEBPACK_IMPORTED_MODULE_56__["DirektoriPelamarPengalamanService"]; });

/* harmony import */ var _services_direktori_penilaian_pelamar_service__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./services/direktori-penilaian-pelamar.service */ "./src/app/sdk/hr/services/direktori-penilaian-pelamar.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DirektoriPenilaianPelamarService", function() { return _services_direktori_penilaian_pelamar_service__WEBPACK_IMPORTED_MODULE_57__["DirektoriPenilaianPelamarService"]; });

/* harmony import */ var _services_direktori_perjalanan_dinas_service__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./services/direktori-perjalanan-dinas.service */ "./src/app/sdk/hr/services/direktori-perjalanan-dinas.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DirektoriPerjalananDinasService", function() { return _services_direktori_perjalanan_dinas_service__WEBPACK_IMPORTED_MODULE_58__["DirektoriPerjalananDinasService"]; });

/* harmony import */ var _services_direktori_perjalanan_dinas_anggota_service__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./services/direktori-perjalanan-dinas-anggota.service */ "./src/app/sdk/hr/services/direktori-perjalanan-dinas-anggota.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DirektoriPerjalananDinasAnggotaService", function() { return _services_direktori_perjalanan_dinas_anggota_service__WEBPACK_IMPORTED_MODULE_59__["DirektoriPerjalananDinasAnggotaService"]; });

/* harmony import */ var _services_direktori_perjalanan_dinas_ron_service__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./services/direktori-perjalanan-dinas-ron.service */ "./src/app/sdk/hr/services/direktori-perjalanan-dinas-ron.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DirektoriPerjalananDinasRonService", function() { return _services_direktori_perjalanan_dinas_ron_service__WEBPACK_IMPORTED_MODULE_60__["DirektoriPerjalananDinasRonService"]; });

/* harmony import */ var _services_direktori_permintaan_pegawai_service__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ./services/direktori-permintaan-pegawai.service */ "./src/app/sdk/hr/services/direktori-permintaan-pegawai.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DirektoriPermintaanPegawaiService", function() { return _services_direktori_permintaan_pegawai_service__WEBPACK_IMPORTED_MODULE_61__["DirektoriPermintaanPegawaiService"]; });

/* harmony import */ var _services_direktori_permintaan_pegawai_list_service__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ./services/direktori-permintaan-pegawai-list.service */ "./src/app/sdk/hr/services/direktori-permintaan-pegawai-list.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DirektoriPermintaanPegawaiListService", function() { return _services_direktori_permintaan_pegawai_list_service__WEBPACK_IMPORTED_MODULE_62__["DirektoriPermintaanPegawaiListService"]; });

/* harmony import */ var _services_direktori_projek_service__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ./services/direktori-projek.service */ "./src/app/sdk/hr/services/direktori-projek.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DirektoriProjekService", function() { return _services_direktori_projek_service__WEBPACK_IMPORTED_MODULE_63__["DirektoriProjekService"]; });

/* harmony import */ var _services_direktori_projek_anggota_service__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ./services/direktori-projek-anggota.service */ "./src/app/sdk/hr/services/direktori-projek-anggota.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DirektoriProjekAnggotaService", function() { return _services_direktori_projek_anggota_service__WEBPACK_IMPORTED_MODULE_64__["DirektoriProjekAnggotaService"]; });

/* harmony import */ var _services_direktori_promosi_service__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! ./services/direktori-promosi.service */ "./src/app/sdk/hr/services/direktori-promosi.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DirektoriPromosiService", function() { return _services_direktori_promosi_service__WEBPACK_IMPORTED_MODULE_65__["DirektoriPromosiService"]; });

/* harmony import */ var _services_direktori_resign_service__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! ./services/direktori-resign.service */ "./src/app/sdk/hr/services/direktori-resign.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DirektoriResignService", function() { return _services_direktori_resign_service__WEBPACK_IMPORTED_MODULE_66__["DirektoriResignService"]; });

/* harmony import */ var _services_direktori_sp_tipe_service__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! ./services/direktori-sp-tipe.service */ "./src/app/sdk/hr/services/direktori-sp-tipe.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DirektoriSpTipeService", function() { return _services_direktori_sp_tipe_service__WEBPACK_IMPORTED_MODULE_67__["DirektoriSpTipeService"]; });

/* harmony import */ var _services_direktori_termination_service__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! ./services/direktori-termination.service */ "./src/app/sdk/hr/services/direktori-termination.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DirektoriTerminationService", function() { return _services_direktori_termination_service__WEBPACK_IMPORTED_MODULE_68__["DirektoriTerminationService"]; });

/* harmony import */ var _services_direktori_training_service__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! ./services/direktori-training.service */ "./src/app/sdk/hr/services/direktori-training.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DirektoriTrainingService", function() { return _services_direktori_training_service__WEBPACK_IMPORTED_MODULE_69__["DirektoriTrainingService"]; });

/* harmony import */ var _services_direktori_training_anggota_service__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(/*! ./services/direktori-training-anggota.service */ "./src/app/sdk/hr/services/direktori-training-anggota.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DirektoriTrainingAnggotaService", function() { return _services_direktori_training_anggota_service__WEBPACK_IMPORTED_MODULE_70__["DirektoriTrainingAnggotaService"]; });

/* harmony import */ var _services_direktori_training_trainer_service__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(/*! ./services/direktori-training-trainer.service */ "./src/app/sdk/hr/services/direktori-training-trainer.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DirektoriTrainingTrainerService", function() { return _services_direktori_training_trainer_service__WEBPACK_IMPORTED_MODULE_71__["DirektoriTrainingTrainerService"]; });

/* harmony import */ var _services_direktori_vpegawai_posisi_service__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(/*! ./services/direktori-vpegawai-posisi.service */ "./src/app/sdk/hr/services/direktori-vpegawai-posisi.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DirektoriVPegawaiPosisiService", function() { return _services_direktori_vpegawai_posisi_service__WEBPACK_IMPORTED_MODULE_72__["DirektoriVPegawaiPosisiService"]; });

/* harmony import */ var _services_file_dokumen_service__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(/*! ./services/file-dokumen.service */ "./src/app/sdk/hr/services/file-dokumen.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FileDokumenService", function() { return _services_file_dokumen_service__WEBPACK_IMPORTED_MODULE_73__["FileDokumenService"]; });

/* harmony import */ var _services_flow_data_flow_service__WEBPACK_IMPORTED_MODULE_74__ = __webpack_require__(/*! ./services/flow-data-flow.service */ "./src/app/sdk/hr/services/flow-data-flow.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FlowDataFlowService", function() { return _services_flow_data_flow_service__WEBPACK_IMPORTED_MODULE_74__["FlowDataFlowService"]; });

/* harmony import */ var _services_flow_data_flow_detail_service__WEBPACK_IMPORTED_MODULE_75__ = __webpack_require__(/*! ./services/flow-data-flow-detail.service */ "./src/app/sdk/hr/services/flow-data-flow-detail.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FlowDataFlowDetailService", function() { return _services_flow_data_flow_detail_service__WEBPACK_IMPORTED_MODULE_75__["FlowDataFlowDetailService"]; });

/* harmony import */ var _services_flow_log_flow_service__WEBPACK_IMPORTED_MODULE_76__ = __webpack_require__(/*! ./services/flow-log-flow.service */ "./src/app/sdk/hr/services/flow-log-flow.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FlowLogFlowService", function() { return _services_flow_log_flow_service__WEBPACK_IMPORTED_MODULE_76__["FlowLogFlowService"]; });

/* harmony import */ var _services_ga_biaya_service__WEBPACK_IMPORTED_MODULE_77__ = __webpack_require__(/*! ./services/ga-biaya.service */ "./src/app/sdk/hr/services/ga-biaya.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GaBiayaService", function() { return _services_ga_biaya_service__WEBPACK_IMPORTED_MODULE_77__["GaBiayaService"]; });

/* harmony import */ var _services_ga_biaya_rincian_service__WEBPACK_IMPORTED_MODULE_78__ = __webpack_require__(/*! ./services/ga-biaya-rincian.service */ "./src/app/sdk/hr/services/ga-biaya-rincian.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GaBiayaRincianService", function() { return _services_ga_biaya_rincian_service__WEBPACK_IMPORTED_MODULE_78__["GaBiayaRincianService"]; });

/* harmony import */ var _services_ga_hotel_service__WEBPACK_IMPORTED_MODULE_79__ = __webpack_require__(/*! ./services/ga-hotel.service */ "./src/app/sdk/hr/services/ga-hotel.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GaHotelService", function() { return _services_ga_hotel_service__WEBPACK_IMPORTED_MODULE_79__["GaHotelService"]; });

/* harmony import */ var _services_ga_klaim_item_service__WEBPACK_IMPORTED_MODULE_80__ = __webpack_require__(/*! ./services/ga-klaim-item.service */ "./src/app/sdk/hr/services/ga-klaim-item.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GaKlaimItemService", function() { return _services_ga_klaim_item_service__WEBPACK_IMPORTED_MODULE_80__["GaKlaimItemService"]; });

/* harmony import */ var _services_ga_klaim_kategori_service__WEBPACK_IMPORTED_MODULE_81__ = __webpack_require__(/*! ./services/ga-klaim-kategori.service */ "./src/app/sdk/hr/services/ga-klaim-kategori.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GaKlaimKategoriService", function() { return _services_ga_klaim_kategori_service__WEBPACK_IMPORTED_MODULE_81__["GaKlaimKategoriService"]; });

/* harmony import */ var _services_ga_klaim_pengajuan_service__WEBPACK_IMPORTED_MODULE_82__ = __webpack_require__(/*! ./services/ga-klaim-pengajuan.service */ "./src/app/sdk/hr/services/ga-klaim-pengajuan.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GaKlaimPengajuanService", function() { return _services_ga_klaim_pengajuan_service__WEBPACK_IMPORTED_MODULE_82__["GaKlaimPengajuanService"]; });

/* harmony import */ var _services_ga_klaim_pengaturan_service__WEBPACK_IMPORTED_MODULE_83__ = __webpack_require__(/*! ./services/ga-klaim-pengaturan.service */ "./src/app/sdk/hr/services/ga-klaim-pengaturan.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GaKlaimPengaturanService", function() { return _services_ga_klaim_pengaturan_service__WEBPACK_IMPORTED_MODULE_83__["GaKlaimPengaturanService"]; });

/* harmony import */ var _services_ga_pembelian_service__WEBPACK_IMPORTED_MODULE_84__ = __webpack_require__(/*! ./services/ga-pembelian.service */ "./src/app/sdk/hr/services/ga-pembelian.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GaPembelianService", function() { return _services_ga_pembelian_service__WEBPACK_IMPORTED_MODULE_84__["GaPembelianService"]; });

/* harmony import */ var _services_ga_pembelian_item_service__WEBPACK_IMPORTED_MODULE_85__ = __webpack_require__(/*! ./services/ga-pembelian-item.service */ "./src/app/sdk/hr/services/ga-pembelian-item.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GaPembelianItemService", function() { return _services_ga_pembelian_item_service__WEBPACK_IMPORTED_MODULE_85__["GaPembelianItemService"]; });

/* harmony import */ var _services_ga_tiket_service__WEBPACK_IMPORTED_MODULE_86__ = __webpack_require__(/*! ./services/ga-tiket.service */ "./src/app/sdk/hr/services/ga-tiket.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GaTiketService", function() { return _services_ga_tiket_service__WEBPACK_IMPORTED_MODULE_86__["GaTiketService"]; });

/* harmony import */ var _services_ga_transport_service__WEBPACK_IMPORTED_MODULE_87__ = __webpack_require__(/*! ./services/ga-transport.service */ "./src/app/sdk/hr/services/ga-transport.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GaTransportService", function() { return _services_ga_transport_service__WEBPACK_IMPORTED_MODULE_87__["GaTransportService"]; });

/* harmony import */ var _services_ga_uniform_service__WEBPACK_IMPORTED_MODULE_88__ = __webpack_require__(/*! ./services/ga-uniform.service */ "./src/app/sdk/hr/services/ga-uniform.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GaUniformService", function() { return _services_ga_uniform_service__WEBPACK_IMPORTED_MODULE_88__["GaUniformService"]; });

/* harmony import */ var _services_ga_uniform_master_service__WEBPACK_IMPORTED_MODULE_89__ = __webpack_require__(/*! ./services/ga-uniform-master.service */ "./src/app/sdk/hr/services/ga-uniform-master.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GaUniformMasterService", function() { return _services_ga_uniform_master_service__WEBPACK_IMPORTED_MODULE_89__["GaUniformMasterService"]; });

/* harmony import */ var _services_ga_uniform_masterx_service__WEBPACK_IMPORTED_MODULE_90__ = __webpack_require__(/*! ./services/ga-uniform-masterx.service */ "./src/app/sdk/hr/services/ga-uniform-masterx.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GaUniformMasterxService", function() { return _services_ga_uniform_masterx_service__WEBPACK_IMPORTED_MODULE_90__["GaUniformMasterxService"]; });

/* harmony import */ var _services_ga_untuk_service__WEBPACK_IMPORTED_MODULE_91__ = __webpack_require__(/*! ./services/ga-untuk.service */ "./src/app/sdk/hr/services/ga-untuk.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GaUntukService", function() { return _services_ga_untuk_service__WEBPACK_IMPORTED_MODULE_91__["GaUntukService"]; });

/* harmony import */ var _services_kalender_cuti_kategori_service__WEBPACK_IMPORTED_MODULE_92__ = __webpack_require__(/*! ./services/kalender-cuti-kategori.service */ "./src/app/sdk/hr/services/kalender-cuti-kategori.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KalenderCutiKategoriService", function() { return _services_kalender_cuti_kategori_service__WEBPACK_IMPORTED_MODULE_92__["KalenderCutiKategoriService"]; });

/* harmony import */ var _services_kalender_cuti_pengajuan_service__WEBPACK_IMPORTED_MODULE_93__ = __webpack_require__(/*! ./services/kalender-cuti-pengajuan.service */ "./src/app/sdk/hr/services/kalender-cuti-pengajuan.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KalenderCutiPengajuanService", function() { return _services_kalender_cuti_pengajuan_service__WEBPACK_IMPORTED_MODULE_93__["KalenderCutiPengajuanService"]; });

/* harmony import */ var _services_kalender_cuti_pengajuan_tanggal_service__WEBPACK_IMPORTED_MODULE_94__ = __webpack_require__(/*! ./services/kalender-cuti-pengajuan-tanggal.service */ "./src/app/sdk/hr/services/kalender-cuti-pengajuan-tanggal.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KalenderCutiPengajuanTanggalService", function() { return _services_kalender_cuti_pengajuan_tanggal_service__WEBPACK_IMPORTED_MODULE_94__["KalenderCutiPengajuanTanggalService"]; });

/* harmony import */ var _services_kalender_cuti_pengaturan_service__WEBPACK_IMPORTED_MODULE_95__ = __webpack_require__(/*! ./services/kalender-cuti-pengaturan.service */ "./src/app/sdk/hr/services/kalender-cuti-pengaturan.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KalenderCutiPengaturanService", function() { return _services_kalender_cuti_pengaturan_service__WEBPACK_IMPORTED_MODULE_95__["KalenderCutiPengaturanService"]; });

/* harmony import */ var _services_kalender_cuti_pengaturan_perpegawai_service__WEBPACK_IMPORTED_MODULE_96__ = __webpack_require__(/*! ./services/kalender-cuti-pengaturan-perpegawai.service */ "./src/app/sdk/hr/services/kalender-cuti-pengaturan-perpegawai.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KalenderCutiPengaturanPerpegawaiService", function() { return _services_kalender_cuti_pengaturan_perpegawai_service__WEBPACK_IMPORTED_MODULE_96__["KalenderCutiPengaturanPerpegawaiService"]; });

/* harmony import */ var _services_kalender_lembur_pengaturan_service__WEBPACK_IMPORTED_MODULE_97__ = __webpack_require__(/*! ./services/kalender-lembur-pengaturan.service */ "./src/app/sdk/hr/services/kalender-lembur-pengaturan.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KalenderLemburPengaturanService", function() { return _services_kalender_lembur_pengaturan_service__WEBPACK_IMPORTED_MODULE_97__["KalenderLemburPengaturanService"]; });

/* harmony import */ var _services_kalender_lembur_service__WEBPACK_IMPORTED_MODULE_98__ = __webpack_require__(/*! ./services/kalender-lembur.service */ "./src/app/sdk/hr/services/kalender-lembur.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KalenderLemburService", function() { return _services_kalender_lembur_service__WEBPACK_IMPORTED_MODULE_98__["KalenderLemburService"]; });

/* harmony import */ var _services_payroll_ptkp_service__WEBPACK_IMPORTED_MODULE_99__ = __webpack_require__(/*! ./services/payroll-ptkp.service */ "./src/app/sdk/hr/services/payroll-ptkp.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PayrollPtkpService", function() { return _services_payroll_ptkp_service__WEBPACK_IMPORTED_MODULE_99__["PayrollPtkpService"]; });

/* harmony import */ var _services_payroll_pilot_master_rate_pilot_service__WEBPACK_IMPORTED_MODULE_100__ = __webpack_require__(/*! ./services/payroll-pilot-master-rate-pilot.service */ "./src/app/sdk/hr/services/payroll-pilot-master-rate-pilot.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PayrollPilotMasterRatePilotService", function() { return _services_payroll_pilot_master_rate_pilot_service__WEBPACK_IMPORTED_MODULE_100__["PayrollPilotMasterRatePilotService"]; });

/* harmony import */ var _services_payroll_pilot_pekerjaan_service__WEBPACK_IMPORTED_MODULE_101__ = __webpack_require__(/*! ./services/payroll-pilot-pekerjaan.service */ "./src/app/sdk/hr/services/payroll-pilot-pekerjaan.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PayrollPilotPekerjaanService", function() { return _services_payroll_pilot_pekerjaan_service__WEBPACK_IMPORTED_MODULE_101__["PayrollPilotPekerjaanService"]; });

/* harmony import */ var _services_payroll_pilot_rate_pilot_service__WEBPACK_IMPORTED_MODULE_102__ = __webpack_require__(/*! ./services/payroll-pilot-rate-pilot.service */ "./src/app/sdk/hr/services/payroll-pilot-rate-pilot.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PayrollPilotRatePilotService", function() { return _services_payroll_pilot_rate_pilot_service__WEBPACK_IMPORTED_MODULE_102__["PayrollPilotRatePilotService"]; });










































































































/***/ })

}]);
//# sourceMappingURL=permintaan-pegawai-permintaan-pegawai-module.js.map