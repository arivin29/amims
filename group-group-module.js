(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["group-group-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/users/group/add/add.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/users/group/add/add.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"air__utils__heading card-header-flex\">\r\n        <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n            <h5 class=\"mb-0\">New Group</h5>\r\n        </div>\r\n    </div>\r\n    <div class=\"card\" style=\"width: 50%\">\r\n        <div class=\"card-body\">\r\n            <form nz-form [formGroup]=\"dataForm\" (ngSubmit)=\"simpan()\" id=\"ngForm\">\r\n                <div nz-row nzGutter=\"8\">\r\n                    <nz-form-item>\r\n                        <nz-form-label>Name</nz-form-label>\r\n                        <nz-form-control>\r\n                            <input nz-input formControlName=\"name\" />\r\n                        </nz-form-control>\r\n                    </nz-form-item>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <nz-form-item>\r\n                        <nz-form-label>Status</nz-form-label>\r\n                        <nz-form-control>\r\n                            <nz-radio-group formControlName=\"status_group\">\r\n                                <label nz-radio nzValue=\"Active\">Active</label>\r\n                                <label nz-radio nzValue=\"Inactive\">Inactive</label>\r\n                            </nz-radio-group>\r\n                        </nz-form-control>\r\n                    </nz-form-item>\r\n                </div>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <nz-form-item>\r\n                        <nz-form-label>Description</nz-form-label>\r\n                        <nz-form-control>\r\n                                <textarea nz-input placeholder=\"Description\" formControlName=\"description\"\r\n                                [nzAutosize]=\"{ minRows: 4, maxRows: 4 }\"></textarea>\r\n                        </nz-form-control>\r\n                    </nz-form-item>\r\n                </div>\r\n            </form>\r\n            <div class=\"footer\">\r\n                <button type=\"button\" (click)=\"goToBack()\" class=\"ant-btn\"\r\n                    style=\"margin-right: 8px;\"><span>Cancel</span></button>\r\n                <button type=\"submit\" class=\"ant-btn ant-btn-primary\" form=\"ngForm\"><span>Submit</span></button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/users/group/detail/detail.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/users/group/detail/detail.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"air__utils__heading card-header-flex\">\r\n        <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n            <h5 class=\"mb-0\">Group Detail</h5>\r\n        </div>\r\n    </div>\r\n    <div class=\"card\" style=\"width: 50%\">\r\n        <div class=\"card-body\">\r\n            <table class=\"table table-borderless\">\r\n                <tbody>\r\n                    <!-- <tr>\r\n                        <td class=\"text-gray-6 pl-0\">Group name</td>\r\n                        <td class=\"pr-0 text-left text-dark\">: {{dataGroup.name}} </td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td class=\"text-gray-6 pl-0\">Status</td>\r\n                        <td class=\"pr-0 text-left text-dark\">: {{dataGroup.status_group}}</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td class=\"text-gray-6 pl-0\">Desc</td>\r\n                        <td class=\"pr-0 text-left text-dark\">: {{dataGroup.description}}</td>\r\n                    </tr> -->\r\n                </tbody>\r\n            </table>\r\n            <div class=\"footer\">\r\n                <button type=\"button\" (click)=\"goToBack()\" class=\"ant-btn\"\r\n                    style=\"margin-right: 8px;\"><span>Back</span></button>\r\n                <button nz-button (click)=\"simpan()\" nzType=\"primary\">Save</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"card\" style=\"width: 50%\">\r\n        <div class=\"card-body\">\r\n\r\n            <nz-tree #nzTreeComponent [nzData]=\"listOfData\" nzCheckable [nzCheckedKeys]=\"defaultCheckedKeys\"\r\n                [nzExpandedKeys]=\"defaultExpandedKeys\" [nzSelectedKeys]=\"defaultSelectedKeys\"\r\n                (nzClick)=\"nzClick($event)\" (nzCheckBoxChange)=\"nzCheck($event)\" (nzExpandChange)=\"nzCheck($event)\">\r\n            </nz-tree>\r\n\r\n        </div>\r\n\r\n\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/users/group/edit/edit.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/users/group/edit/edit.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n        <div class=\"air__utils__heading card-header-flex\">\r\n            <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n                <h5 class=\"mb-0\">Edit Group</h5>\r\n            </div>\r\n        </div>\r\n        <div class=\"card\" style=\"width: 50%\">\r\n            <div class=\"card-body\">\r\n                <form nz-form [formGroup]=\"dataForm\" (ngSubmit)=\"simpan()\" id=\"ngForm\">\r\n                    <div nz-row nzGutter=\"8\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Name</nz-form-label>\r\n                            <nz-form-control>\r\n                                <input nz-input formControlName=\"name\" />\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-row nzGutter=\"8\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Status</nz-form-label>\r\n                            <nz-form-control>\r\n                                <nz-radio-group formControlName=\"status_group\">\r\n                                    <label nz-radio nzValue=\"Active\">Active</label>\r\n                                    <label nz-radio nzValue=\"Inactive\">Inactive</label>\r\n                                </nz-radio-group>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                    <div nz-row nzGutter=\"8\">\r\n                        <nz-form-item>\r\n                            <nz-form-label>Description</nz-form-label>\r\n                            <nz-form-control>\r\n                                    <textarea nz-input placeholder=\"Description\" formControlName=\"description\"\r\n                                    [nzAutosize]=\"{ minRows: 4, maxRows: 4 }\"></textarea>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </form>\r\n                <div class=\"footer\">\r\n                    <button type=\"button\" (click)=\"goToBack()\" class=\"ant-btn\"\r\n                        style=\"margin-right: 8px;\"><span>Cancel</span></button>\r\n                    <button type=\"submit\" class=\"ant-btn ant-btn-primary\" form=\"ngForm\"><span>Submit</span></button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/users/group/list/list.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/users/group/list/list.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n        <div class=\"air__utils__heading card-header-flex\">\r\n            <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n                <h5 class=\"mb-0\">Group</h5>\r\n            </div>\r\n            <div class=\"d-flex flex-column justify-content-center\">\r\n                <a class=\"btn btn-primary\" [routerLink]=\"['../add']\" routerLinkActive=\"router-link-active\">\r\n                    <i nz-icon nzType=\"plus\" nzTheme=\"outline\"></i> Add New\r\n                </a>\r\n            </div>\r\n        </div>\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <nav class=\"navbar\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-8\">\r\n                            <input class=\"form-control\" type=\"text\" name=\"search\" [(ngModel)]=\"search\">\r\n                        </div>\r\n                        <div class=\"col-md-4\">\r\n                            <button nz-button nzType=\"primary\" (click)=\"searchData()\">Search</button>\r\n                        </div>\r\n                    </div>\r\n                </nav>\r\n                <nz-table #ajaxTable nzShowSizeChanger [nzFrontPagination]=\"false\" [nzData]=\"listOfData\"\r\n                    [nzLoading]=\"loading\" [nzTotal]=\"total\" [(nzPageIndex)]=\"pageIndex\" [(nzPageSize)]=\"pageSize\"\r\n                    (nzPageIndexChange)=\"searchData()\" (nzPageSizeChange)=\"searchData(true)\">\r\n                    <thead (nzSortChange)=\"sort($event)\" nzSingleSort>\r\n                        <tr>\r\n                            <th nzShowSort nzSortKey=\"name\">Name</th>\r\n                            <th nzShowSort nzSortKey=\"description\">Description</th>\r\n                            <th nzShowSort nzSortKey=\"status_group\">Status</th>\r\n                            <th class=\"text-right\">Action</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr *ngFor=\"let data of ajaxTable.data\">\r\n                            <td>{{ data.name }}</td>\r\n                            <td>{{ data.description }}</td>\r\n                            <td>{{ data.status_group}}</td>\r\n                            <td class=\"text-right\">\r\n                                <a nz-dropdown [nzDropdownMenu]=\"menu\" nzPlacement=\"bottomRight\">\r\n                                    <i nz-icon nzType=\"more\" nzTheme=\"outline\"></i>\r\n                                </a>\r\n                                <nz-dropdown-menu #menu=\"nzDropdownMenu\">\r\n                                    <ul nz-menu nzSelectable>\r\n                                        <li nz-menu-item\r\n                                        [routerLink]=\"['../edit',data.id_group]\">\r\n                                        <i nz-icon nzType=\"edit\" nzTheme=\"outline\"></i>Edit\r\n                                        </li>\r\n                                        <li nz-menu-item\r\n                                        [routerLink]=\"['../detail',data.id_group]\">\r\n                                        <i nz-icon nzType=\"search\" nzTheme=\"outline\"></i>View\r\n                                        </li>\r\n                                        <li nz-menu-divider></li>\r\n                                        <li nz-menu-item>\r\n                                            <a nz-popconfirm nzPopconfirmTitle=\"Are you sure delete this ?\"\r\n                                                nzPopconfirmPlacement=\"bottom\"\r\n                                                (nzOnConfirm)=\"delete(data.id_group)\"\r\n                                                (nzOnCancel)=\"batalDelete()\"><i nz-icon nzType=\"delete\" nzTheme=\"outline\"></i>Delete</a>\r\n                                        </li>\r\n                                    </ul>\r\n                                </nz-dropdown-menu>\r\n                            </td>\r\n                        </tr>\r\n                    </tbody>\r\n                </nz-table>\r\n            </div>\r\n        </div>\r\n    </div>\r\n"

/***/ }),

/***/ "./src/app/pages/users/group/add/add.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/pages/users/group/add/add.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VzZXJzL2dyb3VwL2FkZC9hZGQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/users/group/add/add.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/users/group/add/add.component.ts ***!
  \********************************************************/
/*! exports provided: AddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddComponent", function() { return AddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_sdk_user_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sdk/user/services */ "./src/app/sdk/user/services.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/angular-reactive-forms-helper */ "./src/app/services/angular-reactive-forms-helper.ts");
/* harmony import */ var src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/tool/pesan.service */ "./src/app/services/tool/pesan.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");








var AddComponent = /** @class */ (function () {
    function AddComponent(userGroupService, spinner, fb, pesan, router) {
        this.userGroupService = userGroupService;
        this.spinner = spinner;
        this.fb = fb;
        this.pesan = pesan;
        this.router = router;
        this.dataGroup = {};
    }
    AddComponent.prototype.ngOnInit = function () {
        this.form();
    };
    AddComponent.prototype.form = function () {
        this.dataForm = this.fb.group({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]),
            status_group: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
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
        this.dataGroup = this.dataForm.value;
        this.userGroupService
            .postUserGroups(this.dataGroup)
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
        this.router.navigate(['users/group/list']);
    };
    AddComponent.ctorParameters = function () { return [
        { type: src_app_sdk_user_services__WEBPACK_IMPORTED_MODULE_2__["UserGroupService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"] },
        { type: src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_4__["FormBuilderTypeSafe"] },
        { type: src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_5__["PesanService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
    ]; };
    AddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add',
            template: __webpack_require__(/*! raw-loader!./add.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/users/group/add/add.component.html"),
            styles: [__webpack_require__(/*! ./add.component.scss */ "./src/app/pages/users/group/add/add.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_sdk_user_services__WEBPACK_IMPORTED_MODULE_2__["UserGroupService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"],
            src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_4__["FormBuilderTypeSafe"],
            src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_5__["PesanService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
    ], AddComponent);
    return AddComponent;
}());



/***/ }),

/***/ "./src/app/pages/users/group/detail/detail.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/pages/users/group/detail/detail.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VzZXJzL2dyb3VwL2RldGFpbC9kZXRhaWwuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/users/group/detail/detail.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/users/group/detail/detail.component.ts ***!
  \**************************************************************/
/*! exports provided: DetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailComponent", function() { return DetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_sdk_user_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/sdk/user/services */ "./src/app/sdk/user/services.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");






var DetailComponent = /** @class */ (function () {
    function DetailComponent(routerActive, userGroupService, spinner, router, userModuleService, userGroupDetailService) {
        this.routerActive = routerActive;
        this.userGroupService = userGroupService;
        this.spinner = spinner;
        this.router = router;
        this.userModuleService = userModuleService;
        this.userGroupDetailService = userGroupDetailService;
        this.dataGroup = {};
        this.id_group = '';
        this.listOfData = [];
        this.defaultCheckedKeys = [];
        this.defaultSelectedKeys = [];
        this.defaultExpandedKeys = ['0-0', '0-0-0', '0-0-1'];
        this.yangDicek = [];
        this.yangIkutDicek = [];
    }
    DetailComponent.prototype.ngOnInit = function () {
        this.id_group = this.routerActive.snapshot.paramMap.get('id_group');
        this.searchData();
    };
    DetailComponent.prototype.getData = function () {
        var _this = this;
        this.spinner.show();
        this.userGroupDetailService.getUserGroupDetails(JSON.stringify({ id_group: this.id_group, access: 'full' })).subscribe(function (response) {
            var a = [];
            response.data.forEach(function (element) {
                a.push(element.id_module_detail);
            });
            _this.defaultCheckedKeys = a;
            console.log(_this.defaultCheckedKeys);
            _this.spinner.hide();
        });
    };
    DetailComponent.prototype.goToBack = function () {
        this.router.navigate(['/users/group/list']);
    };
    DetailComponent.prototype.searchData = function (reset) {
        var _this = this;
        if (reset === void 0) { reset = false; }
        this.spinner.show();
        this.userModuleService
            .getUserModules()
            .subscribe(function (datas) {
            function unflatten(arr) {
                var tree = [], mappedArr = {}, arrElem, mappedElem;
                // First map the nodes of the array to an object -> create a hash table.
                for (var i = 0, len = arr.length; i < len; i++) {
                    arrElem = arr[i];
                    mappedArr[arrElem.key] = arrElem;
                    // mappedArr[arrElem.key]['children'] = [];
                }
                for (var key in mappedArr) {
                    if (mappedArr.hasOwnProperty(key)) {
                        mappedElem = mappedArr[key];
                        // If the element is not at the root level, add it to its parent array of children.
                        if (mappedElem.parent) {
                            if (!mappedArr[mappedElem['parent']].hasOwnProperty('children')) {
                                mappedArr[mappedElem['parent']]['children'] = [];
                                mappedArr[mappedElem['parent']]['isLeaf'] = false;
                            }
                            if (!mappedElem.hasOwnProperty('children')) {
                                mappedElem['isLeaf'] = true;
                            }
                            mappedArr[mappedElem['parent']]['children'].push(mappedElem);
                        }
                        // If the element is at the root level, add it to first level elements array.
                        else {
                            tree.push(mappedElem);
                        }
                    }
                }
                return tree;
            }
            var listData = datas.data;
            listData.forEach(function (item, index) {
                listData[index] = {
                    title: item.name_module,
                    key: item.id_module,
                    parent: item.id_module_parent,
                    // children: [],
                    expanded: true,
                };
            });
            _this.listOfData = unflatten(listData);
            _this.getData();
            _this.spinner.hide();
        });
    };
    DetailComponent.prototype.nzClick = function (event) {
        console.log(event);
        // this.defaultCheckedKeys = ["283af76f-7213-40da-aa54-cae84b2e5dfa", "9b1fea21-a86b-41c9-9247-812bd7bccb9b", "83fc5cac-d08b-4432-822d-505072d33650", "690f7327-fa52-4cd2-b2d8-9c4270d25506", "738960a0-1fa5-4d21-9efe-b8196d99e63d", "e04c6ed1-acb2-4c10-9e58-8e49058156a2", "5deacc26-a183-486e-b89c-d6b9a1a0d1c3"];
    };
    DetailComponent.prototype.nzCheck = function (event) {
        var _this = this;
        this.yangDicek = [];
        this.yangIkutDicek = [];
        var datas = this.nzTreeComponent.getTreeNodes();
        var prosesIkutDicek = function (data) {
            //yg ikut di cek
            data.service.halfCheckedNodeList.forEach(function (element) {
                _this.yangIkutDicek.push(element.key);
            });
            data.service.checkedNodeList.forEach(function (element) {
                _this.yangDicek.push(element.key);
            });
        };
        if (datas.length > 0) {
            prosesIkutDicek(datas[0]);
        }
    };
    // nzSelectedKeys change
    DetailComponent.prototype.nzSelect = function (keys) {
        console.log(keys);
        console.log(this.nzTreeComponent.getSelectedNodeList());
    };
    DetailComponent.prototype.ngAfterViewInit = function () {
        // get node by key: '10011'
        console.log(this.nzTreeComponent.getTreeNodeByKey('10011'));
        // use tree methods
        console.log(this.nzTreeComponent.getTreeNodes(), this.nzTreeComponent.getCheckedNodeList(), this.nzTreeComponent.getSelectedNodeList(), this.nzTreeComponent.getExpandedNodeList());
    };
    //--------------------------- update ke server ---------------------------
    DetailComponent.prototype.simpan = function () {
        var _this = this;
        this.spinner.show();
        var param = { yangDicek: this.yangDicek, yangIkutDicek: this.yangIkutDicek, id_group: this.id_group };
        this.userGroupDetailService.postUserGroupDetails(param).subscribe(function (data) {
            _this.spinner.hide();
        });
    };
    DetailComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: src_app_sdk_user_services__WEBPACK_IMPORTED_MODULE_1__["UserGroupService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: src_app_sdk_user_services__WEBPACK_IMPORTED_MODULE_1__["UserModuleService"] },
        { type: src_app_sdk_user_services__WEBPACK_IMPORTED_MODULE_1__["UserGroupDetailService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('nzTreeComponent', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzTreeComponent"])
    ], DetailComponent.prototype, "nzTreeComponent", void 0);
    DetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-detail',
            template: __webpack_require__(/*! raw-loader!./detail.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/users/group/detail/detail.component.html"),
            styles: [__webpack_require__(/*! ./detail.component.scss */ "./src/app/pages/users/group/detail/detail.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            src_app_sdk_user_services__WEBPACK_IMPORTED_MODULE_1__["UserGroupService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            src_app_sdk_user_services__WEBPACK_IMPORTED_MODULE_1__["UserModuleService"],
            src_app_sdk_user_services__WEBPACK_IMPORTED_MODULE_1__["UserGroupDetailService"]])
    ], DetailComponent);
    return DetailComponent;
}());



/***/ }),

/***/ "./src/app/pages/users/group/edit/edit.component.scss":
/*!************************************************************!*\
  !*** ./src/app/pages/users/group/edit/edit.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VzZXJzL2dyb3VwL2VkaXQvZWRpdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/users/group/edit/edit.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/users/group/edit/edit.component.ts ***!
  \**********************************************************/
/*! exports provided: EditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditComponent", function() { return EditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_sdk_user_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sdk/user/services */ "./src/app/sdk/user/services.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/angular-reactive-forms-helper */ "./src/app/services/angular-reactive-forms-helper.ts");
/* harmony import */ var src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/tool/pesan.service */ "./src/app/services/tool/pesan.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");








var EditComponent = /** @class */ (function () {
    function EditComponent(userGroupService, spinner, fb, pesan, router, activatedRoute) {
        this.userGroupService = userGroupService;
        this.spinner = spinner;
        this.fb = fb;
        this.pesan = pesan;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.dataGroup = {};
        this.id_group = '';
    }
    EditComponent.prototype.ngOnInit = function () {
        this.id_group = this.activatedRoute.snapshot.paramMap.get('id_group');
        this.form();
        this.getData();
    };
    EditComponent.prototype.getData = function () {
        var _this = this;
        this.userGroupService.getUserGroupsId(this.id_group).subscribe(function (data) {
            _this.dataForm.setValue(data.data);
        });
    };
    EditComponent.prototype.form = function () {
        this.dataForm = this.fb.group({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]),
            status_group: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            created_at: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            id_group: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            updated_at: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
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
        this.dataGroup = this.dataForm.value;
        this.userGroupService
            .putUserGroupsId({ id: this.id_group, body: this.dataGroup })
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
        this.router.navigate(['users/group/list']);
    };
    EditComponent.ctorParameters = function () { return [
        { type: src_app_sdk_user_services__WEBPACK_IMPORTED_MODULE_2__["UserGroupService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"] },
        { type: src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_4__["FormBuilderTypeSafe"] },
        { type: src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_5__["PesanService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] }
    ]; };
    EditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit',
            template: __webpack_require__(/*! raw-loader!./edit.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/users/group/edit/edit.component.html"),
            styles: [__webpack_require__(/*! ./edit.component.scss */ "./src/app/pages/users/group/edit/edit.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_sdk_user_services__WEBPACK_IMPORTED_MODULE_2__["UserGroupService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"],
            src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_4__["FormBuilderTypeSafe"],
            src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_5__["PesanService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]])
    ], EditComponent);
    return EditComponent;
}());



/***/ }),

/***/ "./src/app/pages/users/group/group-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/users/group/group-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: GroupRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupRoutingModule", function() { return GroupRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _detail_detail_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./detail/detail.component */ "./src/app/pages/users/group/detail/detail.component.ts");
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add/add.component */ "./src/app/pages/users/group/add/add.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/pages/users/group/edit/edit.component.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list/list.component */ "./src/app/pages/users/group/list/list.component.ts");
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
        path: 'edit/:id_group',
        component: _edit_edit_component__WEBPACK_IMPORTED_MODULE_3__["EditComponent"]
    },
    {
        path: 'add',
        component: _add_add_component__WEBPACK_IMPORTED_MODULE_2__["AddComponent"]
    },
    {
        path: 'detail/:id_group',
        component: _detail_detail_component__WEBPACK_IMPORTED_MODULE_1__["DetailComponent"]
    }
];
var GroupRoutingModule = /** @class */ (function () {
    function GroupRoutingModule() {
    }
    GroupRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"]]
        })
    ], GroupRoutingModule);
    return GroupRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/users/group/group.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/users/group/group.module.ts ***!
  \***************************************************/
/*! exports provided: GroupModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupModule", function() { return GroupModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _group_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./group-routing.module */ "./src/app/pages/users/group/group-routing.module.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list/list.component */ "./src/app/pages/users/group/list/list.component.ts");
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add/add.component */ "./src/app/pages/users/group/add/add.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/pages/users/group/edit/edit.component.ts");
/* harmony import */ var _detail_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./detail/detail.component */ "./src/app/pages/users/group/detail/detail.component.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/angular-reactive-forms-helper */ "./src/app/services/angular-reactive-forms-helper.ts");











var GroupModule = /** @class */ (function () {
    function GroupModule() {
    }
    GroupModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_list_list_component__WEBPACK_IMPORTED_MODULE_4__["ListComponent"], _add_add_component__WEBPACK_IMPORTED_MODULE_5__["AddComponent"], _edit_edit_component__WEBPACK_IMPORTED_MODULE_6__["EditComponent"], _detail_detail_component__WEBPACK_IMPORTED_MODULE_7__["DetailComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _group_routing_module__WEBPACK_IMPORTED_MODULE_3__["GroupRoutingModule"],
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_8__["NgZorroAntdModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"]
            ],
            providers: [
                src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_10__["FormBuilderTypeSafe"]
            ]
        })
    ], GroupModule);
    return GroupModule;
}());



/***/ }),

/***/ "./src/app/pages/users/group/list/list.component.scss":
/*!************************************************************!*\
  !*** ./src/app/pages/users/group/list/list.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VzZXJzL2dyb3VwL2xpc3QvbGlzdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/users/group/list/list.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/users/group/list/list.component.ts ***!
  \**********************************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_sdk_user_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sdk/user/services */ "./src/app/sdk/user/services.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");





var ListComponent = /** @class */ (function () {
    function ListComponent(userGroupService, spinner, nzMessageService) {
        this.userGroupService = userGroupService;
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
        this.userGroupService
            .getUserGroups(JSON.stringify({
            pageIndex: this.pageIndex, pageSize: this.pageSize, sortKey: this.sortKey, sortValue: this.sortValue, search: this.search
        }))
            .subscribe(function (data) {
            _this.loading = false;
            _this.total = data.data.total;
            _this.listOfData = data.data.data;
        });
    };
    ListComponent.prototype.updateFilter = function (value) {
        this.search = value;
        this.searchData(true);
    };
    ListComponent.prototype.delete = function (id) {
        var _this = this;
        this.spinner.show();
        this.userGroupService.deleteUserGroupsId(id).subscribe(function (data) {
            _this.searchData();
            _this.spinner.hide();
        });
    };
    ListComponent.prototype.batalDelete = function () {
        this.nzMessageService.info('click cancel');
    };
    ListComponent.ctorParameters = function () { return [
        { type: src_app_sdk_user_services__WEBPACK_IMPORTED_MODULE_2__["UserGroupService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzMessageService"] }
    ]; };
    ListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list',
            template: __webpack_require__(/*! raw-loader!./list.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/users/group/list/list.component.html"),
            styles: [__webpack_require__(/*! ./list.component.scss */ "./src/app/pages/users/group/list/list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_sdk_user_services__WEBPACK_IMPORTED_MODULE_2__["UserGroupService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzMessageService"]])
    ], ListComponent);
    return ListComponent;
}());



/***/ })

}]);
//# sourceMappingURL=group-group-module.js.map