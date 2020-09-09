(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["model-detail-model-detail-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/asset/model-detail/componen/componen.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/asset/model-detail/componen/componen.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"card\">\r\n        <div class=\"card-header-flex\">\r\n            <div class=\"d-flex flex-column justify-content-center mr-auto\" style=\"margin-left: 10px\">\r\n                <h5 class=\"mb-0\">Componen</h5>\r\n            </div>\r\n            <div class=\"d-flex flex-column justify-content-center\" style=\"margin-right: 10px\">\r\n                <a class=\"btn btn-primary\" (click)=\"add_item()\" routerLinkActive=\"router-link-active\">\r\n                    + Item\r\n                </a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"card\">\r\n        <div class=\"card-body\">\r\n            <div nz-row nzGutter=\"8\" *ngIf=\"id_model_child\">\r\n                <div nz-col nzSpan=\"6\">\r\n                    <nz-form-item>\r\n                        <nz-form-label>Keyword</nz-form-label>\r\n                        <nz-form-control>\r\n                            <input nz-input placeholder=\"\" disabled [(ngModel)]=\"dataItem.keyword\" />\r\n                        </nz-form-control>\r\n                    </nz-form-item>\r\n                </div>\r\n                <div nz-col nzSpan=\"6\">\r\n                    <nz-form-item>\r\n                        <nz-form-label>Part Number</nz-form-label>\r\n                        <nz-form-control>\r\n                            <input nz-input placeholder=\"\" disabled [(ngModel)]=\"dataItem.part_number\" />\r\n                        </nz-form-control>\r\n                    </nz-form-item>\r\n                </div>\r\n                <div nz-col nzSpan=\"4\">\r\n                    <nz-form-item>\r\n                        <nz-form-label>Life limit</nz-form-label>\r\n                        <nz-form-control>\r\n                            <input nz-input placeholder=\"\" disabled [(ngModel)]=\"dataItem.life_limit_var\" />\r\n                        </nz-form-control>\r\n                    </nz-form-item>\r\n                </div>\r\n                <div nz-col nzSpan=\"4\">\r\n                    <nz-form-item>\r\n                        <nz-form-label>Varibale</nz-form-label>\r\n                        <nz-form-control>\r\n                            <input nz-input placeholder=\"\" disabled [(ngModel)]=\"dataItem.life_limit_val\" />\r\n                        </nz-form-control>\r\n                    </nz-form-item>\r\n                </div>\r\n                <div nz-col nzSpan=\"4\">\r\n                    <nz-form-item>\r\n                        <nz-form-label>-</nz-form-label>\r\n                        <nz-form-control>\r\n                            <button type=\"button\" (click)=\"simpan_item()\"\r\n                                class=\"ant-btn ant-btn-primary\"><span>Submit</span></button>\r\n                        </nz-form-control>\r\n                    </nz-form-item>\r\n                </div>\r\n            </div>\r\n\r\n            <br>\r\n            <nz-table #basicTable1 [nzData]=\"listModelChild\" [nzShowPagination]=\"true\"\r\n                class=\"air__utils__scrollTable mb-4\">\r\n                <thead>\r\n                    <tr>\r\n                        <th>Keyword</th>\r\n                        <th>Part Number</th>\r\n                        <th>Life limit</th>\r\n                        <th class=\"text-right\">\r\n                            <i nz-icon nzType=\"delete\" nzTheme=\"outline\"></i>\r\n                        </th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor=\"let data of basicTable1.data\">\r\n                        <td>{{data.keyword}}</td>\r\n                        <td>{{data.part_number}}</td>\r\n                        <td>{{data.life_limit_val}} {{data.life_limit_var}}</td>\r\n                        <td class=\"text-right\">\r\n                            <button type=\"button\" class=\"btn btn-primary mr-2\"\r\n                                (click)=\"deleteItem(data.id_model_template_child)\">\r\n                                <i class=\"fe fe-trash\"></i>\r\n                            </button>\r\n                        </td>\r\n                    </tr>\r\n                </tbody>\r\n            </nz-table>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/asset/model-detail/consumsiable/consumsiable.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/asset/model-detail/consumsiable/consumsiable.component.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"card\">\r\n        <div class=\"card-header-flex\">\r\n            <div class=\"d-flex flex-column justify-content-center mr-auto\" style=\"margin-left: 10px\">\r\n                <h5 class=\"mb-0\">Consumsiable</h5>\r\n            </div>\r\n            <div class=\"d-flex flex-column justify-content-center\" style=\"margin-right: 10px\">\r\n                <a class=\"btn btn-primary\" (click)=\"add_item()\" routerLinkActive=\"router-link-active\">\r\n                    + Item\r\n                </a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"card\">\r\n        <div class=\"card-body\">\r\n            <div nz-row nzGutter=\"8\" *ngIf=\"id_model_child\">\r\n                <div nz-col nzSpan=\"6\">\r\n                    <nz-form-item>\r\n                        <nz-form-label>Keyword</nz-form-label>\r\n                        <nz-form-control>\r\n                            <input nz-input placeholder=\"\" disabled [(ngModel)]=\"dataItem.keyword\" />\r\n                        </nz-form-control>\r\n                    </nz-form-item>\r\n                </div>\r\n                <div nz-col nzSpan=\"6\">\r\n                    <nz-form-item>\r\n                        <nz-form-label>Part Number</nz-form-label>\r\n                        <nz-form-control>\r\n                            <input nz-input placeholder=\"\" disabled [(ngModel)]=\"dataItem.part_number\" />\r\n                        </nz-form-control>\r\n                    </nz-form-item>\r\n                </div>\r\n                <div nz-col nzSpan=\"4\">\r\n                    <nz-form-item>\r\n                        <nz-form-label>Life limit</nz-form-label>\r\n                        <nz-form-control>\r\n                            <input nz-input placeholder=\"\" disabled [(ngModel)]=\"dataItem.life_limit_var\" />\r\n                        </nz-form-control>\r\n                    </nz-form-item>\r\n                </div>\r\n                <div nz-col nzSpan=\"4\">\r\n                    <nz-form-item>\r\n                        <nz-form-label>Varibale</nz-form-label>\r\n                        <nz-form-control>\r\n                            <input nz-input placeholder=\"\" disabled [(ngModel)]=\"dataItem.life_limit_val\" />\r\n                        </nz-form-control>\r\n                    </nz-form-item>\r\n                </div>\r\n                <div nz-col nzSpan=\"4\">\r\n                    <nz-form-item>\r\n                        <nz-form-label>-</nz-form-label>\r\n                        <nz-form-control>\r\n                            <button type=\"button\" (click)=\"simpan_item()\"\r\n                                class=\"ant-btn ant-btn-primary\"><span>Submit</span></button>\r\n                        </nz-form-control>\r\n                    </nz-form-item>\r\n                </div>\r\n            </div>\r\n\r\n            <br>\r\n            <nz-table #basicTable1 [nzData]=\"listModelChild\" [nzShowPagination]=\"false\"\r\n                class=\"air__utils__scrollTable mb-4\">\r\n                <thead>\r\n                    <tr>\r\n                        <th>Keyword</th>\r\n                        <th>Part Number</th>\r\n                        <th>Life limit</th>\r\n                        <th class=\"text-right\">\r\n                            <i nz-icon nzType=\"delete\" nzTheme=\"outline\"></i>\r\n                        </th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor=\"let data of basicTable1.data\">\r\n                        <td>{{data.keyword}}</td>\r\n                        <td>{{data.part_number}}</td>\r\n                        <td>{{data.life_limit_val}} {{data.life_limit_var}}</td>\r\n                        <td class=\"text-right\">\r\n                            <button type=\"button\" class=\"btn btn-primary mr-2\"\r\n                                (click)=\"deleteItem(data.id_model_template_child)\">\r\n                                <i class=\"fe fe-trash\"></i>\r\n                            </button>\r\n                        </td>\r\n                    </tr>\r\n                </tbody>\r\n            </nz-table>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/asset/model-detail/custom-field/custom-field.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/asset/model-detail/custom-field/custom-field.component.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div nz-row nzGutter=\"8\">\r\n<nz-form-item>\r\n    <nz-form-label>Label</nz-form-label>\r\n    <nz-form-control>\r\n        <input nz-input placeholder=\"\" [(ngModel)]=\"customField.field_label\" />\r\n    </nz-form-control>\r\n</nz-form-item>\r\n\r\n<nz-form-item>\r\n    <nz-form-label>Name</nz-form-label>\r\n    <nz-form-control>\r\n        <input nz-input placeholder=\"\" [(ngModel)]=\"customField.field_name\" />\r\n    </nz-form-control>\r\n</nz-form-item>\r\n\r\n<nz-form-item>\r\n    <nz-form-label>Instruction</nz-form-label>\r\n    <nz-form-control>\r\n        <input nz-input placeholder=\"\" [(ngModel)]=\"customField.instruction\" />\r\n    </nz-form-control>\r\n</nz-form-item>\r\n\r\n<nz-form-item>\r\n    <nz-form-label>End Render</nz-form-label>\r\n    <nz-form-control>\r\n        <input nz-input placeholder=\"\" [(ngModel)]=\"customField.end_render\" />\r\n    </nz-form-control>\r\n</nz-form-item>\r\n</div>\r\n\r\n\r\n\r\n<div nz-row nzGutter=\"8\">\r\n    <nz-form-item>\r\n        <nz-form-label>Type</nz-form-label>\r\n        <nz-form-control>\r\n            <nz-radio-group [(ngModel)]=\"customField.field_type\">\r\n                <label nz-radio nzValue=\"input\">Input</label>\r\n                <label nz-radio nzValue=\"select\">Select</label>\r\n                <label nz-radio nzValue=\"textarea\">Text Area</label>\r\n            </nz-radio-group>\r\n        </nz-form-control>\r\n    </nz-form-item>\r\n</div>\r\n\r\n<div nz-row nzGutter=\"8\" *ngIf=\"customField.field_type == 'select'\">\r\n    <nz-form-item>\r\n        <nz-form-label>option value</nz-form-label>\r\n        <nz-form-control>\r\n            <textarea nz-input placeholder=\"Description\" [(ngModel)]=\"customField.option_value\"\r\n                [nzAutosize]=\"{ minRows: 4, maxRows: 4 }\"></textarea>\r\n        </nz-form-control>\r\n        <p>Use json Array ( {{example}} )</p>\r\n    </nz-form-item>\r\n</div>\r\n\r\n\r\n<div class=\"footer\">\r\n    <button type=\"button\" (click)=\"addCustomFIeld()\" class=\"ant-btn ant-btn-primary\"><span>Submit</span></button>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/asset/model-detail/detail/detail.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/asset/model-detail/detail/detail.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n    <div class=\"card-header-flex\">\r\n        <div class=\"d-flex flex-column justify-content-center mr-auto\" style=\"margin-left: 10px\">\r\n            <h5 class=\"mb-0\">Model Detail</h5>\r\n        </div>\r\n        <div class=\"d-flex flex-column justify-content-center\" style=\"margin-right: 10px\">\r\n            <!-- <a class=\"btn btn-primary\" [routerLink]=\"['../../../master/model/edit',model.id_model]\"\r\n                routerLinkActive=\"router-link-active\">\r\n                Edit\r\n            </a> -->\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"card\">\r\n    <div class=\"card-body\">\r\n        <table class=\"table table-borderless\">\r\n            <tbody>\r\n                <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <tr>\r\n                            <td class=\"text-gray-6 pl-0\">Part Number</td>\r\n                            <td class=\"pr-0 text-left text-dark\">: {{dataModel.part_number}}</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td class=\"text-gray-6 pl-0\">Keyword</td>\r\n                            <td class=\"pr-0 text-left text-dark\">: {{dataModel.keyword}}</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td class=\"text-gray-6 pl-0\">Life limit start</td>\r\n                            <td class=\"pr-0 text-left text-dark\">: {{dataLifelimit.life_limit}}</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td class=\"text-gray-6 pl-0\">Life Limit</td>\r\n                            <td class=\"pr-0 text-left text-dark\">: {{dataModel.life_limit_val}}\r\n                                {{dataModel.life_limit_var}}</td>\r\n                        </tr>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <tr>\r\n                            <td class=\"text-gray-6 pl-0\">Is single</td>\r\n                            <td class=\"pr-0 text-left text-dark\">: {{dataModel.is_single}}</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td class=\"text-gray-6 pl-0\">Type</td>\r\n                            <td class=\"pr-0 text-left text-dark\">: {{dataType.part_id}}</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td class=\"text-gray-6 pl-0\">Manufacture</td>\r\n                            <td class=\"pr-0 text-left text-dark\">: {{dataVendor.name_vendor}}</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td class=\"text-gray-6 pl-0\">Condition monitoring</td>\r\n                            <td class=\"pr-0 text-left text-dark\">: {{dataCondition.condition_monitoring}}</td>\r\n                        </tr>\r\n                    </div>\r\n                </div>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/asset/model-detail/foto/foto.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/asset/model-detail/foto/foto.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"card\" *ngIf=\"toogleUpload == false\">\r\n    <div class=\"card-body\">\r\n        <div class=\"d-flex flex-wrap flex-column\r\n                            align-items-center mb-3\">\r\n            <div class=\"air__utils__avatar\">\r\n                <img class=\"img-responsive\" alt=\"example\" src=\"{{foto}}\" />\r\n            </div>\r\n            <div class=\"d-flex flex-wrap align-items-center mt-3\">\r\n\r\n                <a nz-button type=\"button\" (click)=\"goToBack()\" class=\"ant-btn\"\r\n                    style=\"margin-right: 9px;\"><span>Back</span></a>\r\n                <a nz-button nzType=\"primary\" (click)=\"togleShowUpload()\"><i nz-icon nzType=\"cloud-upload\"\r\n                        nzTheme=\"outline\"></i>&nbsp;Replace</a>\r\n\r\n            </div>\r\n        </div>\r\n        <div class=\"footer\">\r\n\r\n        </div>\r\n\r\n    </div>\r\n</div> -->\r\n<div class=\"card\" >\r\n    <div class=\"card-body\">\r\n        <div nz-row nzGutter=\"8\">\r\n            <erp-single-upload></erp-single-upload>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/asset/model-detail/license/license.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/asset/model-detail/license/license.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"card\">\r\n        <div class=\"card-header-flex\">\r\n            <div class=\"d-flex flex-column justify-content-center mr-auto\" style=\"margin-left: 10px\">\r\n                <h5 class=\"mb-0\">License</h5>\r\n            </div>\r\n            <div class=\"d-flex flex-column justify-content-center\" style=\"margin-right: 10px\">\r\n                <a class=\"btn btn-primary\" (click)=\"add_item()\" routerLinkActive=\"router-link-active\">\r\n                    + Item\r\n                </a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"card\">\r\n        <div class=\"card-body\">\r\n            <div nz-row nzGutter=\"8\" *ngIf=\"id_model_child\">\r\n                <div nz-col nzSpan=\"6\">\r\n                    <nz-form-item>\r\n                        <nz-form-label>Keyword</nz-form-label>\r\n                        <nz-form-control>\r\n                            <input nz-input placeholder=\"\" disabled [(ngModel)]=\"dataItem.keyword\" />\r\n                        </nz-form-control>\r\n                    </nz-form-item>\r\n                </div>\r\n                <div nz-col nzSpan=\"6\">\r\n                    <nz-form-item>\r\n                        <nz-form-label>Part Number</nz-form-label>\r\n                        <nz-form-control>\r\n                            <input nz-input placeholder=\"\" disabled [(ngModel)]=\"dataItem.part_number\" />\r\n                        </nz-form-control>\r\n                    </nz-form-item>\r\n                </div>\r\n                <div nz-col nzSpan=\"4\">\r\n                    <nz-form-item>\r\n                        <nz-form-label>Life limit</nz-form-label>\r\n                        <nz-form-control>\r\n                            <input nz-input placeholder=\"\" disabled [(ngModel)]=\"dataItem.life_limit_var\" />\r\n                        </nz-form-control>\r\n                    </nz-form-item>\r\n                </div>\r\n                <div nz-col nzSpan=\"4\">\r\n                    <nz-form-item>\r\n                        <nz-form-label>Varibale</nz-form-label>\r\n                        <nz-form-control>\r\n                            <input nz-input placeholder=\"\" disabled [(ngModel)]=\"dataItem.life_limit_val\" />\r\n                        </nz-form-control>\r\n                    </nz-form-item>\r\n                </div>\r\n                <div nz-col nzSpan=\"4\">\r\n                    <nz-form-item>\r\n                        <nz-form-label>-</nz-form-label>\r\n                        <nz-form-control>\r\n                            <button type=\"button\" (click)=\"simpan_item()\"\r\n                                class=\"ant-btn ant-btn-primary\"><span>Submit</span></button>\r\n                        </nz-form-control>\r\n                    </nz-form-item>\r\n                </div>\r\n            </div>\r\n\r\n            <br>\r\n            <nz-table #basicTable1 [nzData]=\"listModelChild\" [nzShowPagination]=\"true\"\r\n                class=\"air__utils__scrollTable mb-4\">\r\n                <thead>\r\n                    <tr>\r\n                        <th>Keyword</th>\r\n                        <th>Part Number</th>\r\n                        <th>Life limit</th>\r\n                        <th class=\"text-right\">\r\n                            <i nz-icon nzType=\"delete\" nzTheme=\"outline\"></i>\r\n                        </th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor=\"let data of basicTable1.data\">\r\n                        <td>{{data.keyword}}</td>\r\n                        <td>{{data.part_number}}</td>\r\n                        <td>{{data.life_limit_val}} {{data.life_limit_var}}</td>\r\n                        <td class=\"text-right\">\r\n                            <button type=\"button\" class=\"btn btn-primary mr-2\"\r\n                                (click)=\"deleteItem(data.id_model_template_child)\">\r\n                                <i class=\"fe fe-trash\"></i>\r\n                            </button>\r\n                        </td>\r\n                    </tr>\r\n                </tbody>\r\n            </nz-table>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/asset/model-detail/maintenance-code/maintenance-code.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/asset/model-detail/maintenance-code/maintenance-code.component.html ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nz-form-item>\r\n    <nz-form-label>Code</nz-form-label>\r\n    <nz-form-control>\r\n        <input nz-input placeholder=\"\" [(ngModel)]=\"maintenanceCode.code\" />\r\n    </nz-form-control>\r\n</nz-form-item>\r\n\r\n<nz-form-item>\r\n    <nz-form-label>Work</nz-form-label>\r\n    <nz-form-control>\r\n        <textarea nz-input placeholder=\"Insert work\" [(ngModel)]=\"maintenanceCode.work\"\r\n            [nzAutosize]=\"{ minRows: 4, maxRows: 4 }\"></textarea>\r\n    </nz-form-control>\r\n</nz-form-item>\r\n\r\n<nz-form-item>\r\n    <nz-form-label>Description</nz-form-label>\r\n    <nz-form-control>\r\n        <textarea nz-input placeholder=\"Insert work\" [(ngModel)]=\"maintenanceCode.description\"\r\n            [nzAutosize]=\"{ minRows: 4, maxRows: 4 }\"></textarea>\r\n    </nz-form-control>\r\n</nz-form-item>\r\n\r\n\r\n<div class=\"footer\">\r\n    <button type=\"button\" (click)=\"addMaintenanceCode()\" class=\"ant-btn ant-btn-primary\"><span>Submit</span></button>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/asset/model-detail/maintenance/maintenance.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/asset/model-detail/maintenance/maintenance.component.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"card\">\r\n        <div class=\"card-header-flex\">\r\n            <div class=\"d-flex flex-column justify-content-center mr-auto\" style=\"margin-left: 10px\">\r\n                <h5 class=\"mb-0\">Maintenance</h5>\r\n            </div>\r\n            <div class=\"d-flex flex-column justify-content-center\" style=\"margin-right: 10px\">\r\n                <a class=\"btn btn-primary\" (click)=\"add()\" routerLinkActive=\"router-link-active\">\r\n                    + Item\r\n                </a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"card\">\r\n        <div class=\"card-body\">\r\n            <div nz-row nzGutter=\"8\" *ngIf=\"toogleAdd\">\r\n                <div nz-col nzSpan=\"8\">\r\n                    <nz-form-item>\r\n                        <nz-form-label>Code maintenance\r\n                            <i style=\"float: right;\" nz-tooltip nzTooltipTitle=\"Add more Maintenance\"><i nz-icon\r\n                                    (click)=\"openCode()\" nzType=\"plus-circle\" nzTheme=\"outline\"></i></i>\r\n                        </nz-form-label>\r\n                        <nz-form-control>\r\n                            <nz-select style=\"width: 100%;\" nzShowSearch nzAllowClear\r\n                                nzPlaceHolder=\"Choose maintenance code\" [(ngModel)]=\"id_maintenance_code\">\r\n                                <nz-option *ngFor=\"let item of listMaintenanceCode\"\r\n                                    nzValue=\"{{item.id_maintenance_code}}\" nzLabel=\"{{item.code}}\"></nz-option>\r\n                            </nz-select>\r\n                        </nz-form-control>\r\n                    </nz-form-item>\r\n                </div>\r\n                <div nz-col nzSpan=\"8\">\r\n                    <nz-form-item>\r\n                        <nz-form-label>Model life variable\r\n                            <i style=\"float: right;\" nz-tooltip nzTooltipTitle=\"Add more Model life\"><i nz-icon\r\n                                    (click)=\"openModelLife()\" nzType=\"plus-circle\" nzTheme=\"outline\"></i></i>\r\n                        </nz-form-label>\r\n                        <nz-form-control>\r\n                            <nz-select style=\"width: 100%;\" nzShowSearch nzAllowClear\r\n                                nzPlaceHolder=\"Choose maintenance code\" [(ngModel)]=\"id_model_life\">\r\n                                <nz-option *ngFor=\"let item of listModellife\" nzValue=\"{{item.id_model_life}}\"\r\n                                    nzLabel=\"{{item.variable}}\"></nz-option>\r\n                            </nz-select>\r\n                        </nz-form-control>\r\n                    </nz-form-item>\r\n                </div>\r\n                <div nz-col nzSpan=\"8\">\r\n                    <nz-form-item>\r\n                        <nz-form-label>Live Value</nz-form-label>\r\n                        <nz-form-control>\r\n                            <nz-input-number style=\"width: 100%;\" placeholder=\"\" [(ngModel)]=\"model_life_val\">\r\n                            </nz-input-number>\r\n                        </nz-form-control>\r\n                    </nz-form-item>\r\n                </div>\r\n                <div nz-col nzSpan=\"8\">\r\n                    <nz-form-item>\r\n                        <nz-form-label>Periode value</nz-form-label>\r\n                        <nz-form-control>\r\n                            <nz-input-number style=\"width: 100%;\" placeholder=\"\" [(ngModel)]=\"periode_val\">\r\n                            </nz-input-number>\r\n                        </nz-form-control>\r\n                    </nz-form-item>\r\n                </div>\r\n                <div nz-col nzSpan=\"8\">\r\n                    <nz-form-item>\r\n                        <nz-form-label>Periode</nz-form-label>\r\n                        <nz-form-control>\r\n                            <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"Select a person\" style=\"width: 100%;\"\r\n                                [(ngModel)]=\"periode_var\">\r\n                                <nz-option nzLabel=\"hari\" nzValue=\"hari\"></nz-option>\r\n                                <nz-option nzLabel=\"minggu\" nzValue=\"minggu\"></nz-option>\r\n                                <nz-option nzLabel=\"bulan\" nzValue=\"bulan\"></nz-option>\r\n                                <nz-option nzLabel=\"tahun\" nzValue=\"tahun\"></nz-option>\r\n                            </nz-select>\r\n                        </nz-form-control>\r\n                    </nz-form-item>\r\n                </div>\r\n                <div nz-col nzSpan=\"3\">\r\n                    <br>\r\n                    <br>\r\n                    <button style=\"margin-top: 5px;\" nz-button (click)=\"addMaintenance()\" nzType=\"primary\"><i nz-icon\r\n                            nzType=\"plus\"></i>Add</button>\r\n                </div>\r\n            </div>\r\n            <!-- END ROW -->\r\n\r\n\r\n            <nz-table #basicTable [nzData]=\"listMaintenance\" [nzFrontPagination]=\"true\"\r\n                class=\"air__utils__scrollTable mb-4\">\r\n                <thead>\r\n                    <tr>\r\n                        <th class=\"\">Code</th>\r\n                        <th class=\"\">Live Variable</th>\r\n                        <th class=\"\">Live value</th>\r\n                        <th class=\"\">Periode</th>\r\n                        <th class=\" text-right\"></th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor=\"let data of basicTable.data\">\r\n                        <td>\r\n                            {{data.code}}\r\n                        </td>\r\n                        <td>\r\n                            <div>{{data.variable}}</div>\r\n                        </td>\r\n                        <td>\r\n                            {{data.model_life_val}}\r\n                        </td>\r\n                        <td>\r\n                            {{data.periode_val}} {{data.periode_var}}\r\n                        </td>\r\n                        <td class=\"text-right\">\r\n                            <button type=\"button\" class=\"btn btn-primary mr-2\"\r\n                                (click)=\"deleteMaintenance(data.id_model_maintenance)\">\r\n                                <i class=\"fe fe-trash\"></i>\r\n                            </button>\r\n                        </td>\r\n                    </tr>\r\n                </tbody>\r\n            </nz-table>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/asset/model-detail/model-detail.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/asset/model-detail/model-detail.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"row\">\r\n        <div class=\"col-xl-3 col-lg-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-body\">\r\n\r\n\r\n                    <div class=\"d-flex flex-wrap flex-column\r\n                    align-items-center\">\r\n                    <div class=\"air__utils__avatar\r\n                        air__utils__avatar--size64 mb-3 mt-3\" (click)=\"UpdateFoto()\">\r\n                        <img class=\"img-responsive\" alt=\"example\" src=\"{{foto}}\" />\r\n                    </div>\r\n                    <div class=\"text-center\">\r\n                        <div class=\"text-dark font-weight-bold\r\n                            font-size-18\">{{dataModel.keyword}}</div>\r\n                        <div class=\"text-uppercase font-size-12 mb-3\">{{dataModel.part_number}}\r\n                        </div>\r\n\r\n                            <button type=\"button\" class=\"btn btn-primary\r\n                                    btn-with-addon\" nz-dropdown [nzDropdownMenu]=\"menu\">\r\n                                <span class=\"btn-addon\">\r\n                                    <i class=\"btn-addon-icon fe fe-plus-circle\"></i>\r\n                                </span>\r\n                                Action\r\n                            </button>\r\n\r\n                            <nz-dropdown-menu #menu=\"nzDropdownMenu\">\r\n                                <ul nz-menu nzSelectable>\r\n                                    <li nz-menu-item>\r\n                                        <a [routerLink]=\"['../../transaction/checkin-add', dataModel.id_model]\"\r\n                                            routerLinkActive=\"router-link-active\">Add new Item</a>\r\n                                    </li>\r\n                                    <li nz-menu-item>\r\n                                        <a [routerLink]=\"['../../master/model/edit', dataModel.id_model]\"\r\n                                            routerLinkActive=\"router-link-active\">Edit</a>\r\n                                    </li>\r\n                                    <!-- <li nz-menu-item>2nd menu item</li>\r\n                                    <li nz-menu-item>3rd menu item</li> -->\r\n                                </ul>\r\n                            </nz-dropdown-menu>\r\n\r\n                        </div>\r\n                    </div>\r\n\r\n                </div>\r\n            </div>\r\n\r\n\r\n            <div class=\"card text-primary\">\r\n\r\n                <perfect-scrollbar>\r\n                    <div class=\"air__menuLeft__container\">\r\n                        <ul class=\"air__menuLeft__list\">\r\n\r\n                            <ng-container *ngFor=\"let item of menuData\">\r\n                                <ng-container *ngTemplateOutlet=\"itemTpl;\r\n                                        context: {$implicit: item}\"></ng-container>\r\n                                <ng-container *ngTemplateOutlet=\"submenuTpl;\r\n                                        context: {$implicit: item}\"></ng-container>\r\n                                <ng-container *ngTemplateOutlet=\"categoryTpl;\r\n                                        context: {$implicit: item}\"></ng-container>\r\n                            </ng-container>\r\n                        </ul>\r\n\r\n                    </div>\r\n                </perfect-scrollbar>\r\n\r\n            </div>\r\n\r\n\r\n\r\n\r\n        </div>\r\n        <div class=\"col-xl-9 col-lg-12\">\r\n            <router-outlet></router-outlet>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n\r\n<ng-template #itemTpl let-item>\r\n    <ng-container *ngIf=\"!item.children && !item.category\">\r\n        <li class=\"air__menuLeft__item\" [ngClass]=\"{air__menuLeft__item__active:\r\n                item.key === activeItem}\">\r\n            <a [routerLink]=\"item.url ? item.url : 'javascript: void(0)'\" class=\"air__menuLeft__link\">\r\n                <i *ngIf=\"item.icon\" class=\"air__menuLeft__icon\" [ngClass]=\"item.icon\"></i>\r\n                <span>{{ item.title }}</span>\r\n            </a>\r\n        </li>\r\n    </ng-container>\r\n</ng-template>\r\n<ng-template #submenuTpl let-item>\r\n    <ng-container *ngIf=\"item.children\">\r\n        <li class=\"air__menuLeft__item air__menuLeft__submenu\" [ngClass]=\"{air__menuLeft__submenu__active: item.key ===\r\n                activeSubmenu}\">\r\n            <a href=\"javascript: void(0);\" class=\"air__menuLeft__link\" (click)=\"handleSubmenuClick(item.key)\"\r\n                (mouseenter)=\"handleFlyoutOver($event, item.key, item.children)\"\r\n                (mouseleave)=\"handleFlyoutOut(item.key)\">\r\n                <i *ngIf=\"item.icon\" class=\"air__menuLeft__icon\" [ngClass]=\"item.icon\"></i>\r\n                <span>{{ item.title }}</span>\r\n            </a>\r\n            <ul class=\"air__menuLeft__list\">\r\n                <ng-container *ngFor=\"let item of item.children\">\r\n                    <ng-container *ngTemplateOutlet=\"itemTpl; context:\r\n                            {$implicit: item}\"></ng-container>\r\n                </ng-container>\r\n            </ul>\r\n        </li>\r\n    </ng-container>\r\n</ng-template>\r\n<ng-template #categoryTpl let-item>\r\n    <ng-container *ngIf=\"item.category\">\r\n        <li class=\"air__menuLeft__category\">\r\n            <span>{{ item.title }}</span>\r\n        </li>\r\n    </ng-container>\r\n</ng-template>\r\n<ng-template #flyoutTpl let-item>\r\n    <div @flyoutAnimation [ngStyle]=\"{\r\n            left: item.itemDimensions.left + item.itemDimensions.width - 10 + 'px',\r\n            top: item.itemDimensions.top + 'px'\r\n            }\" class=\"air__menuFlyout\" [ngClass]=\"{\r\n            air__menuFlyoutLeft: menuLayoutType === 'left',\r\n            air__menuFlyout__black: flyoutMenuColor === 'dark',\r\n            air__menuFlyout__white: flyoutMenuColor === 'white',\r\n            air__menuFlyout__gray: flyoutMenuColor === 'gray'\r\n            }\">\r\n        <ul class=\"air__menuLeft__list\" (mouseenter)=\"handleFlyoutContainerOver(item.key)\"\r\n            (mouseleave)=\"handleFlyoutOut(item.key)\">\r\n            <ng-container *ngFor=\"let item of item.items\">\r\n                <ng-container *ngTemplateOutlet=\"itemTpl; context: {$implicit:\r\n                        item}\"></ng-container>\r\n            </ng-container>\r\n        </ul>\r\n    </div>\r\n</ng-template>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/asset/model-detail/model-life/model-life.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/asset/model-detail/model-life/model-life.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nz-form-item>\r\n        <nz-form-label>Variabel</nz-form-label>\r\n        <nz-form-control>\r\n            <input nz-input placeholder=\"\" [(ngModel)]=\"modelLife.variable\" />\r\n        </nz-form-control>\r\n    </nz-form-item>\r\n\r\n    <nz-form-item>\r\n        <nz-form-label>Variabel unit</nz-form-label>\r\n        <nz-form-control>\r\n                <input nz-input placeholder=\"\" [(ngModel)]=\"modelLife.variable_unit\" />\r\n        </nz-form-control>\r\n    </nz-form-item>\r\n\r\n    <div class=\"footer\">\r\n        <button type=\"button\" (click)=\"addModelLife()\" class=\"ant-btn ant-btn-primary\"><span>Submit</span></button>\r\n    </div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/asset/model-detail/pengaturan/category/category.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/asset/model-detail/pengaturan/category/category.component.html ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div nz-row nzGutter=\"8\" *ngFor=\"let item of listCategory\">\r\n    <div nz-col nzSpan=\"12\">\r\n        <nz-form-item>\r\n            <nz-form-control>\r\n                <label nz-checkbox [(ngModel)]=\"item.id_model_category_master\"\r\n                    (ngModelChange)=\"postCategory(item.id_model_category,item)\">{{item.name_model_category}}</label>\r\n            </nz-form-control>\r\n        </nz-form-item>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/asset/model-detail/pengaturan/owner/owner.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/asset/model-detail/pengaturan/owner/owner.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"air__utils__heading card-header-flex\">\r\n        <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n            <h5 class=\"mb-0\">Owner</h5>\r\n        </div>\r\n        <div class=\"d-flex flex-column justify-content-center\" style=\"margin-right: 10px\">\r\n            <a class=\"btn btn-primary\" (click)=\"add_item()\" routerLinkActive=\"router-link-active\">\r\n                + Owner\r\n            </a>\r\n        </div>\r\n    </div>\r\n    <div class=\"card\">\r\n        <div class=\"card-body\">\r\n            <div nz-row nzGutter=\"8\" [hidden]=\"!id_model_owner_master\">\r\n                <div nz-col nzSpan=\"6\">\r\n                    <nz-form-item>\r\n                        <nz-form-label>Owner</nz-form-label>\r\n                        <nz-form-control>\r\n                            <input nz-input placeholder=\"\" disabled [(ngModel)]=\"dataItem.name_model_owner\" />\r\n                        </nz-form-control>\r\n                    </nz-form-item>\r\n                </div>\r\n                <div nz-col nzSpan=\"6\">\r\n                    <nz-form-item>\r\n                        <nz-form-label>Owner desc</nz-form-label>\r\n                        <nz-form-control>\r\n                            <input nz-input placeholder=\"\" disabled [(ngModel)]=\"dataItem.model_owner_desc\" />\r\n                        </nz-form-control>\r\n                    </nz-form-item>\r\n                </div>\r\n                <div nz-col nzSpan=\"4\">\r\n                    <nz-form-item>\r\n                        <nz-form-label>-</nz-form-label>\r\n                        <nz-form-control>\r\n                            <button type=\"button\" (click)=\"simpan_item()\"\r\n                                class=\"ant-btn ant-btn-primary\"><span>Submit</span></button>\r\n                        </nz-form-control>\r\n                    </nz-form-item>\r\n                </div>\r\n            </div>\r\n\r\n            <br>\r\n            <nz-table #basicTable1 [nzData]=\"listOwner\" [nzShowPagination]=\"false\" class=\"air__utils__scrollTable mb-4\">\r\n                <thead>\r\n                    <tr>\r\n                        <th>Owner</th>\r\n                        <th>Owner desc</th>\r\n                        <th class=\"text-right\">\r\n                            <i nz-icon nzType=\"delete\" nzTheme=\"outline\"></i>\r\n                        </th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor=\"let data of basicTable1.data\">\r\n                        <td>{{data.name_model_owner}}</td>\r\n                        <td>{{data.model_owner_desc}}</td>\r\n                        <td class=\"text-right\">\r\n                            <button type=\"button\" class=\"btn btn-primary mr-2\"\r\n                                (click)=\"deleteItem(data.id_model_owner)\">\r\n                                <i class=\"fe fe-trash\"></i>\r\n                            </button>\r\n                        </td>\r\n                    </tr>\r\n                </tbody>\r\n            </nz-table>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/asset/model-detail/pengaturan/searc-owner/searc-owner.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/asset/model-detail/pengaturan/searc-owner/searc-owner.component.html ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div nz-row nzGutter=\"8\">\r\n    <div nz-col nzSpan=\"20\">\r\n        <nz-form-item>\r\n            <nz-form-label>Owner</nz-form-label>\r\n            <nz-form-control>\r\n                <input nz-input placeholder=\"Enter keyword\" [(ngModel)]=\"search\" />\r\n            </nz-form-control>\r\n        </nz-form-item>\r\n    </div>\r\n    <div nz-col nzSpan=\"4\">\r\n        <nz-form-label>Search</nz-form-label><br>\r\n        <button nz-button nzType=\"primary\" nzShape=\"circle\" (click)=\"searchData()\"><i nz-icon\r\n                nzType=\"search\"></i></button>\r\n    </div>\r\n</div>\r\n\r\n<nz-table #ajaxTable nzShowSizeChanger [nzFrontPagination]=\"false\" [nzData]=\"listOfData\" [nzLoading]=\"loading\"\r\n    [nzTotal]=\"total\" [(nzPageIndex)]=\"pageIndex\" [(nzPageSize)]=\"pageSize\" (nzPageIndexChange)=\"searchData()\"\r\n    (nzPageSizeChange)=\"searchData(true)\">\r\n    <thead (nzSortChange)=\"sort($event)\" nzSingleSort>\r\n        <tr>\r\n            <th nzShowSort nzSortKey=\"part_number\">Owner</th>\r\n            <th nzShowSort nzSortKey=\"keyword\">Owner desc</th>\r\n            <th class=\"text-right\">Action</th>\r\n        </tr>\r\n    </thead>\r\n    <tbody>\r\n        <tr *ngFor=\"let data of ajaxTable.data\">\r\n            <td>{{ data.name_model_owner }} </td>\r\n            <td>{{ data.model_owner_desc }}</td>\r\n            <td class=\"text-right\">\r\n                <button nz-button nzType=\"primary\" (click)=\"selectModel(data.id_model_owner_master)\" nzShape=\"circle\"><i\r\n                        nz-icon nzType=\"check\"></i></button>\r\n            </td>\r\n        </tr>\r\n    </tbody>\r\n</nz-table>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/asset/model-detail/riwayat/pembelian/pembelian.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/asset/model-detail/riwayat/pembelian/pembelian.component.html ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"card\">\r\n        <div class=\"card-header-flex\">\r\n            <div class=\"d-flex flex-column justify-content-center mr-auto\" style=\"margin-left: 10px\">\r\n                <h5 class=\"mb-0\">Purchase Order</h5>\r\n            </div>\r\n            <!-- <div class=\"d-flex flex-column justify-content-center\" style=\"margin-right: 10px\">\r\n                <a class=\"btn btn-primary\" (click)=\"add_item()\" routerLinkActive=\"router-link-active\">\r\n                    + Item\r\n                </a>\r\n            </div> -->\r\n        </div>\r\n    </div>\r\n    <div class=\"card\">\r\n        <div class=\"card-body\">\r\n            <nz-table #basicTable1 [nzData]=\"listPembelian\" [nzShowPagination]=\"true\"\r\n                class=\"air__utils__scrollTable mb-4\">\r\n                <thead>\r\n                    <tr>\r\n                        <th>Status</th>\r\n                        <th>PO Number</th>\r\n                        <th>Pegawai</th>\r\n                        <th>Kantor</th>\r\n                        <th>Request date</th>\r\n                        <th>Purchased date</th>\r\n                        <th>Store</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor=\"let data of basicTable1.data\">\r\n                        <td>\r\n                            <nz-tag [nzColor]=\"data.status | status\">{{data.status | titlecase}}</nz-tag>\r\n                        </td>\r\n                        <td>{{ data.no_po }}</td>\r\n                        <td>{{ data.nama_depan }} {{ data.nama_belakang }}</td>\r\n                        <td>{{ data.nama_kantor }}</td>\r\n                        <td>{{ data.created_at | date}}</td>\r\n                        <td>{{ data.tanggal_pembelian | date}}</td>\r\n                        <td>{{ data.nama_toko }}</td>\r\n                    </tr>\r\n                </tbody>\r\n            </nz-table>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/asset/model-detail/riwayat/permintaan/permintaan.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/asset/model-detail/riwayat/permintaan/permintaan.component.html ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"card\">\r\n        <div class=\"card-header-flex\">\r\n            <div class=\"d-flex flex-column justify-content-center mr-auto\" style=\"margin-left: 10px\">\r\n                <h5 class=\"mb-0\">Request</h5>\r\n            </div>\r\n            <!-- <div class=\"d-flex flex-column justify-content-center\" style=\"margin-right: 10px\">\r\n                <a class=\"btn btn-primary\" (click)=\"add_item()\" routerLinkActive=\"router-link-active\">\r\n                    + Item\r\n                </a>\r\n            </div> -->\r\n        </div>\r\n    </div>\r\n    <div class=\"card\">\r\n        <div class=\"card-body\">\r\n            <!-- <div nz-row nzGutter=\"8\" [hidden]=\"!id_model\">\r\n                <div nz-col nzSpan=\"6\">\r\n                    <nz-form-item>\r\n                        <nz-form-label>Keyword</nz-form-label>\r\n                        <nz-form-control>\r\n                            <input nz-input placeholder=\"\" disabled [(ngModel)]=\"dataItem.keyword\" />\r\n                        </nz-form-control>\r\n                    </nz-form-item>\r\n                </div>\r\n                <div nz-col nzSpan=\"6\">\r\n                    <nz-form-item>\r\n                        <nz-form-label>Part Number</nz-form-label>\r\n                        <nz-form-control>\r\n                            <input nz-input placeholder=\"\" disabled [(ngModel)]=\"dataItem.part_number\" />\r\n                        </nz-form-control>\r\n                    </nz-form-item>\r\n                </div>\r\n                <div nz-col nzSpan=\"4\">\r\n                    <nz-form-item>\r\n                        <nz-form-label>Life limit</nz-form-label>\r\n                        <nz-form-control>\r\n                            <input nz-input placeholder=\"\" disabled [(ngModel)]=\"dataItem.life_limit_var\" />\r\n                        </nz-form-control>\r\n                    </nz-form-item>\r\n                </div>\r\n                <div nz-col nzSpan=\"4\">\r\n                    <nz-form-item>\r\n                        <nz-form-label>Varibale</nz-form-label>\r\n                        <nz-form-control>\r\n                            <input nz-input placeholder=\"\" disabled [(ngModel)]=\"dataItem.life_limit_val\" />\r\n                        </nz-form-control>\r\n                    </nz-form-item>\r\n                </div>\r\n                <div nz-col nzSpan=\"4\">\r\n                    <nz-form-item>\r\n                        <nz-form-label>-</nz-form-label>\r\n                        <nz-form-control>\r\n                            <button type=\"button\" (click)=\"simpan_item()\"\r\n                                class=\"ant-btn ant-btn-primary\"><span>Submit</span></button>\r\n                        </nz-form-control>\r\n                    </nz-form-item>\r\n                </div>\r\n            </div> -->\r\n\r\n            <br>\r\n            <nz-table #basicTable1 [nzData]=\"listPurchase\" [nzShowPagination]=\"true\"\r\n                class=\"air__utils__scrollTable mb-4\">\r\n                <thead>\r\n                    <tr>\r\n                        <th>Pegawai</th>\r\n                        <th>Kantor </th>\r\n                        <th>Tanggal request</th>\r\n                        <th>Quantity</th>\r\n                        <th>Keperluan</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor=\"let data of basicTable1.data\">\r\n                        <td>{{data.nama_depan}} {{data.nama_belakang}}</td>\r\n                        <td>{{data.nama_kantor}}</td>\r\n                        <td>{{data.tanggal_request}}</td>\r\n                        <td>{{data.qty}}</td>\r\n                        <td>{{data.request_for}}</td>\r\n                    </tr>\r\n                </tbody>\r\n            </nz-table>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/asset/model-detail/spesification/spesification.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/asset/model-detail/spesification/spesification.component.html ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"card\">\r\n        <div class=\"card-header-flex\">\r\n            <div class=\"d-flex flex-column justify-content-center mr-auto\" style=\"margin-left: 10px\">\r\n                <h5 class=\"mb-0\">Spesifikasi</h5>\r\n            </div>\r\n            <div class=\"d-flex flex-column justify-content-center\" style=\"margin-right: 10px\">\r\n                <a class=\"btn btn-primary\" (click)=\"Add()\" routerLinkActive=\"router-link-active\">\r\n                    + Item\r\n                </a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"card\">\r\n        <div class=\"card-body\">\r\n\r\n            <div nz-row nzGutter=\"8\" *ngIf=\"toogleAdd\">\r\n                <div nz-col nzSpan=\"9\">\r\n                    <nz-form-item>\r\n                        <nz-form-label>Field\r\n                            <i style=\"float: right;\" nz-tooltip nzTooltipTitle=\"Add more cusstom field\"><i nz-icon\r\n                                    (click)=\"openComponent()\" nzType=\"plus-circle\" nzTheme=\"outline\"></i></i>\r\n                        </nz-form-label>\r\n                        <nz-form-control>\r\n                            <nz-select style=\"width: 100%;\" nzShowSearch nzAllowClear\r\n                                nzPlaceHolder=\"Choose Custom Field\" [(ngModel)]=\"id_custom_field\">\r\n                                <nz-option *ngFor=\"let item of listCustomField\" nzValue=\"{{item.custom_fild}}\"\r\n                                    nzLabel=\"{{item.field_label}}\"></nz-option>\r\n                            </nz-select>\r\n                        </nz-form-control>\r\n                    </nz-form-item>\r\n                </div>\r\n                <div nz-col nzSpan=\"6\">\r\n                    <nz-form-item>\r\n                        <nz-form-label>Value Default</nz-form-label>\r\n                        <nz-form-control>\r\n                            <input nz-input placeholder=\"\" [(ngModel)]=\"value_default\" />\r\n                        </nz-form-control>\r\n                    </nz-form-item>\r\n                </div>\r\n                <div nz-col nzSpan=\"3\">\r\n                    <nz-form-item>\r\n                        <nz-form-label>Sort</nz-form-label>\r\n                        <nz-form-control>\r\n                            <nz-input-number placeholder=\"\" [(ngModel)]=\"urutan\"></nz-input-number>\r\n                        </nz-form-control>\r\n                    </nz-form-item>\r\n                </div>\r\n                <div nz-col nzSpan=\"3\">\r\n\r\n                    <nz-form-item style=\"text-align: center;\">\r\n                        <nz-form-label>Required</nz-form-label>\r\n                        <nz-form-control>\r\n                            <label nz-checkbox [(ngModel)]=\"is_required\"> ? </label>\r\n                        </nz-form-control>\r\n                    </nz-form-item>\r\n\r\n                </div>\r\n                <div nz-col nzSpan=\"3\">\r\n                    <br>\r\n                    <br>\r\n                    <button nz-button (click)=\"addSpesification()\" nzType=\"primary\"><i nz-icon\r\n                            nzType=\"plus\"></i>Add</button>\r\n                </div>\r\n            </div>\r\n\r\n\r\n\r\n            <nz-table #basicTable [nzData]=\"listSpesification\" [nzFrontPagination]=\"false\"\r\n                class=\"air__utils__scrollTable mb-4\">\r\n                <thead>\r\n                    <tr>\r\n                        <th class=\"\">Required</th>\r\n                        <th class=\"\">Name</th>\r\n                        <th class=\"\">Type</th>\r\n                        <th class=\"\">Default</th>\r\n                        <th class=\" text-right\"></th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor=\"let data of basicTable.data\">\r\n                        <td>\r\n                            {{data.is_required}}\r\n                        </td>\r\n                        <td>\r\n                            <div>{{data.field_label}}</div>\r\n                            <div class=\"text-gray-4\">{{data.usefield_namerName}}</div>\r\n                        </td>\r\n                        <td>\r\n                            {{data.field_type}}\r\n                        </td>\r\n                        <td>\r\n                            {{data.value_default}}\r\n                        </td>\r\n                        <td class=\"text-right\">\r\n                            <button type=\"button\" class=\"btn btn-primary mr-2\"\r\n                                (click)=\"deleteSpesifikasi(data.id_model_specification)\">\r\n                                <i class=\"fe fe-trash\"></i>\r\n                            </button>\r\n                        </td>\r\n                    </tr>\r\n                </tbody>\r\n            </nz-table>\r\n\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/asset/model-detail/stock/stock.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/asset/model-detail/stock/stock.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n    <div class=\"card-body\">\r\n        <nav class=\"navbar\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-8\">\r\n                    <!-- <input class=\"form-control\" type=\"text\" name=\"search\" [(ngModel)]=\"search\"> -->\r\n                    <input nz-input placeholder=\"Search\" [(ngModel)]=\"search\" />\r\n                </div>\r\n                <div class=\"col-md-4\">\r\n                    <button nz-button nzType=\"primary\" (click)=\"searchData()\">Search</button>\r\n                </div>\r\n            </div>\r\n        </nav>\r\n\r\n        <nz-table #ajaxTable nzShowSizeChanger [nzFrontPagination]=\"false\" [nzData]=\"listOfData\" [nzLoading]=\"loading\" [nzTotal]=\"total\" [(nzPageIndex)]=\"pageIndex\" [(nzPageSize)]=\"pageSize\" (nzPageIndexChange)=\"searchData()\" (nzPageSizeChange)=\"searchData(true)\">\r\n            <thead (nzSortChange)=\"sort($event)\" nzSingleSort>\r\n                <tr>\r\n                    <th  nzShowSort nzSortKey=\"sn\">SN</th>\r\n                    <th nzShowSort nzSortKey=\"qty\">Qty</th>\r\n                    <th>Number PO</th>\r\n                    <th>Date Purchase</th>\r\n                    <th nzShowSort nzSortKey=\"status\">Status</th>\r\n                    <th>Location</th>\r\n                    <th class=\"text-right\">Action</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr *ngFor=\"let data of ajaxTable.data\">\r\n\r\n                    <td>{{ data.sn }}</td>\r\n                    <td>{{ data.qty }} {{ data.unit }}</td>\r\n                    <td>{{ data.purchase_number }}</td>\r\n                    <td>{{ data.purchase_date |date }}</td>\r\n                    <td>{{ data.status }}</td>\r\n                    <td>{{ data.location }}</td>\r\n                    <td class=\"text-right\">\r\n                        <a nz-dropdown [nzDropdownMenu]=\"menu\" [nzPlacement]=\"'bottomRight'\">\r\n                            <i nz-icon nzType=\"more\" nzTheme=\"outline\"></i>\r\n                        </a>\r\n                        <nz-dropdown-menu #menu=\"nzDropdownMenu\">\r\n                            <ul nz-menu nzSelectable>\r\n                                <li nz-menu-item [routerLink]=\"['../../../detail',data.id_asset]\">Asset Detail </li>\r\n                                <!-- <li nz-menu-divider></li>\r\n                                <li nz-menu-item [routerLink]=\"['../../../model',data.id_model]\">Model Detail </li> -->\r\n                            </ul>\r\n                        </nz-dropdown-menu>\r\n                    </td>\r\n                </tr>\r\n            </tbody>\r\n        </nz-table>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/asset/model-detail/view/view.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/asset/model-detail/view/view.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nz-tabset nzLinkRouter>\r\n    <nz-tab>\r\n        <a nz-tab-link [routerLink]=\"['./detail']\">Detail</a>\r\n    </nz-tab>\r\n    <nz-tab>\r\n        <a nz-tab-link [routerLink]=\"['./spesifikasi']\">Spesifikasi</a>\r\n    </nz-tab>\r\n    <nz-tab>\r\n        <a nz-tab-link [routerLink]=\"['./componen']\">Componen</a>\r\n    </nz-tab>\r\n    <nz-tab>\r\n        <a nz-tab-link [routerLink]=\"['./consumsiable']\">Consumsiable</a>\r\n    </nz-tab>\r\n    <nz-tab>\r\n        <a nz-tab-link [routerLink]=\"['./license']\">License</a>\r\n    </nz-tab>\r\n</nz-tabset>\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/pages/asset/model-detail/componen/componen.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/pages/asset/model-detail/componen/componen.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Fzc2V0L21vZGVsLWRldGFpbC9jb21wb25lbi9jb21wb25lbi5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/asset/model-detail/componen/componen.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/asset/model-detail/componen/componen.component.ts ***!
  \*************************************************************************/
/*! exports provided: ComponenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponenComponent", function() { return ComponenComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_sdk_asset_services_asset_model_template_child_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sdk/asset/services/asset-model-template-child.service */ "./src/app/sdk/asset/services/asset-model-template-child.service.ts");
/* harmony import */ var _model_detail_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model-detail.service */ "./src/app/pages/asset/model-detail/model-detail.service.ts");
/* harmony import */ var src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/sdk/asset/services */ "./src/app/sdk/asset/services.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/angular-reactive-forms-helper */ "./src/app/services/angular-reactive-forms-helper.ts");
/* harmony import */ var src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/tool/pesan.service */ "./src/app/services/tool/pesan.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_components_search_item_search_item_search_item_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/components/search-item/search-item/search-item.component */ "./src/app/components/search-item/search-item/search-item.component.ts");











var ComponenComponent = /** @class */ (function () {
    function ComponenComponent(assetModelTemplateChildService, modelDetailService, assetModelxService, spinner, notification, fb, pesan, router, drawerService) {
        this.assetModelTemplateChildService = assetModelTemplateChildService;
        this.modelDetailService = modelDetailService;
        this.assetModelxService = assetModelxService;
        this.spinner = spinner;
        this.notification = notification;
        this.fb = fb;
        this.pesan = pesan;
        this.router = router;
        this.drawerService = drawerService;
        this.listModelChild = [];
        this.id_model = null;
        this.id_model_child = null;
        this.id_part_id = 'componen';
        this.dataItem = {};
    }
    ComponenComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.modelDetailService.getIdModel().subscribe(function (data) {
            if (data) {
                _this.id_model = data;
                console.log('sadasda ' + _this.id_model);
                _this.getlistChild();
            }
        });
    };
    ComponenComponent.prototype.add_item = function () {
        var _this = this;
        var drawerRef = this.drawerService.create({
            nzTitle: 'Search Model',
            nzContent: src_app_components_search_item_search_item_search_item_component__WEBPACK_IMPORTED_MODULE_10__["SearchItemComponent"],
            nzWidth: '900px',
            nzContentParams: {
                value: 'arifan'
            }
        });
        drawerRef.afterOpen.subscribe(function () {
            console.log('Drawer(Component) open');
        });
        drawerRef.afterClose.subscribe(function (data) {
            if (typeof data === 'string') {
                _this.id_model_child = data;
                _this.beforeModel();
            }
        });
    };
    ComponenComponent.prototype.getlistChild = function () {
        var _this = this;
        var param = {
            id_model_child: this.id_model,
            id_part_id: this.id_part_id
        };
        this.assetModelTemplateChildService.getAssetModelTemplateChildren(JSON.stringify(param)).subscribe(function (data) {
            _this.listModelChild = data.data;
        });
    };
    ComponenComponent.prototype.deleteItem = function (id) {
        var _this = this;
        this.spinner.show();
        this.assetModelTemplateChildService.deleteAssetModelTemplateChildrenId(id).subscribe(function (data) {
            _this.getlistChild();
            _this.spinner.hide();
        });
    };
    ComponenComponent.prototype.beforeModel = function () {
        var _this = this;
        console.log("panggie ko");
        this.spinner.show();
        this.assetModelxService.getAssetModelxesId(this.id_model_child).subscribe(function (data) {
            _this.dataItem.keyword = data.data.keyword;
            _this.dataItem.part_number = data.data.part_number;
            _this.dataItem.id_model_child = data.data.id_model;
            _this.dataItem.life_limit_var = data.data.life_limit_var;
            _this.dataItem.life_limit_var = data.data.life_limit_val;
            _this.dataItem.id_model_parent = _this.id_model;
            _this.spinner.hide();
            console.log(_this.dataItem);
        });
    };
    ComponenComponent.prototype.simpan_item = function () {
        var _this = this;
        var param = {
            id_model_child: this.id_model,
            id_model: this.id_model_child
        };
        this.spinner.show();
        //simpan ka server
        this.assetModelTemplateChildService.postAssetModelTemplateChildren(param).subscribe(function (data) {
            _this.id_model_child = null;
            _this.spinner.hide();
            _this.getlistChild();
        }, function (err) {
            _this.spinner.hide();
            _this.pesan.pesanWarningForm('Dupikat pembelian Item!');
        });
    };
    ComponenComponent.ctorParameters = function () { return [
        { type: src_app_sdk_asset_services_asset_model_template_child_service__WEBPACK_IMPORTED_MODULE_2__["AssetModelTemplateChildService"] },
        { type: _model_detail_service__WEBPACK_IMPORTED_MODULE_3__["ModelDetailService"] },
        { type: src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_4__["AssetModelxService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__["NzNotificationService"] },
        { type: src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_7__["FormBuilderTypeSafe"] },
        { type: src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_8__["PesanService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__["NzDrawerService"] }
    ]; };
    ComponenComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-componen',
            template: __webpack_require__(/*! raw-loader!./componen.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/asset/model-detail/componen/componen.component.html"),
            styles: [__webpack_require__(/*! ./componen.component.scss */ "./src/app/pages/asset/model-detail/componen/componen.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_sdk_asset_services_asset_model_template_child_service__WEBPACK_IMPORTED_MODULE_2__["AssetModelTemplateChildService"],
            _model_detail_service__WEBPACK_IMPORTED_MODULE_3__["ModelDetailService"],
            src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_4__["AssetModelxService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__["NzNotificationService"],
            src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_7__["FormBuilderTypeSafe"],
            src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_8__["PesanService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__["NzDrawerService"]])
    ], ComponenComponent);
    return ComponenComponent;
}());



/***/ }),

/***/ "./src/app/pages/asset/model-detail/consumsiable/consumsiable.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/asset/model-detail/consumsiable/consumsiable.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Fzc2V0L21vZGVsLWRldGFpbC9jb25zdW1zaWFibGUvY29uc3Vtc2lhYmxlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/asset/model-detail/consumsiable/consumsiable.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/asset/model-detail/consumsiable/consumsiable.component.ts ***!
  \*********************************************************************************/
/*! exports provided: ConsumsiableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsumsiableComponent", function() { return ConsumsiableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sdk/asset/services */ "./src/app/sdk/asset/services.ts");
/* harmony import */ var _model_detail_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model-detail.service */ "./src/app/pages/asset/model-detail/model-detail.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/angular-reactive-forms-helper */ "./src/app/services/angular-reactive-forms-helper.ts");
/* harmony import */ var src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/tool/pesan.service */ "./src/app/services/tool/pesan.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_components_search_item_search_item_search_item_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/components/search-item/search-item/search-item.component */ "./src/app/components/search-item/search-item/search-item.component.ts");










var ConsumsiableComponent = /** @class */ (function () {
    function ConsumsiableComponent(assetModelTemplateChildService, modelDetailService, assetModelxService, spinner, notification, fb, pesan, router, drawerService) {
        this.assetModelTemplateChildService = assetModelTemplateChildService;
        this.modelDetailService = modelDetailService;
        this.assetModelxService = assetModelxService;
        this.spinner = spinner;
        this.notification = notification;
        this.fb = fb;
        this.pesan = pesan;
        this.router = router;
        this.drawerService = drawerService;
        this.listModelChild = [];
        this.id_model = null;
        this.id_model_child = null;
        this.id_part_id = 'consumable';
        this.dataItem = {};
    }
    ConsumsiableComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.modelDetailService.getIdModel().subscribe(function (data) {
            if (data) {
                _this.id_model = data;
                console.log('sadasda ' + _this.id_model);
                _this.getlistChild();
            }
        });
    };
    ConsumsiableComponent.prototype.add_item = function () {
        var _this = this;
        var drawerRef = this.drawerService.create({
            nzTitle: 'Search Model',
            nzContent: src_app_components_search_item_search_item_search_item_component__WEBPACK_IMPORTED_MODULE_9__["SearchItemComponent"],
            nzWidth: '900px',
            nzContentParams: {
                value: 'arifan'
            }
        });
        drawerRef.afterOpen.subscribe(function () {
            console.log('Drawer(Component) open');
        });
        drawerRef.afterClose.subscribe(function (data) {
            if (typeof data === 'string') {
                _this.id_model_child = data;
                _this.beforeModel();
            }
        });
    };
    ConsumsiableComponent.prototype.getlistChild = function () {
        var _this = this;
        var param = {
            id_model_child: this.id_model,
            id_part_id: this.id_part_id
        };
        this.assetModelTemplateChildService.getAssetModelTemplateChildren(JSON.stringify(param)).subscribe(function (data) {
            _this.listModelChild = data.data;
        });
    };
    ConsumsiableComponent.prototype.deleteItem = function (id) {
        var _this = this;
        this.spinner.show();
        this.assetModelTemplateChildService.deleteAssetModelTemplateChildrenId(id).subscribe(function (data) {
            _this.getlistChild();
            _this.spinner.hide();
        });
    };
    ConsumsiableComponent.prototype.beforeModel = function () {
        var _this = this;
        console.log("panggie ko");
        this.spinner.show();
        this.assetModelxService.getAssetModelxesId(this.id_model_child).subscribe(function (data) {
            _this.dataItem.keyword = data.data.keyword;
            _this.dataItem.part_number = data.data.part_number;
            _this.dataItem.id_model_child = data.data.id_model;
            _this.dataItem.life_limit_var = data.data.life_limit_var;
            _this.dataItem.life_limit_var = data.data.life_limit_val;
            _this.dataItem.id_model_parent = _this.id_model;
            _this.spinner.hide();
            console.log(_this.dataItem);
        });
    };
    ConsumsiableComponent.prototype.simpan_item = function () {
        var _this = this;
        var param = {
            id_model_child: this.id_model,
            id_model: this.id_model_child
        };
        this.spinner.show();
        //simpan ka server
        this.assetModelTemplateChildService.postAssetModelTemplateChildren(param).subscribe(function (data) {
            _this.id_model_child = null;
            _this.spinner.hide();
            _this.getlistChild();
        }, function (err) {
            _this.spinner.hide();
            _this.pesan.pesanWarningForm('Dupikat pembelian Item!');
        });
    };
    ConsumsiableComponent.ctorParameters = function () { return [
        { type: src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_2__["AssetModelTemplateChildService"] },
        { type: _model_detail_service__WEBPACK_IMPORTED_MODULE_3__["ModelDetailService"] },
        { type: src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_2__["AssetModelxService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzNotificationService"] },
        { type: src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_6__["FormBuilderTypeSafe"] },
        { type: src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_7__["PesanService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzDrawerService"] }
    ]; };
    ConsumsiableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-consumsiable',
            template: __webpack_require__(/*! raw-loader!./consumsiable.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/asset/model-detail/consumsiable/consumsiable.component.html"),
            styles: [__webpack_require__(/*! ./consumsiable.component.scss */ "./src/app/pages/asset/model-detail/consumsiable/consumsiable.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_2__["AssetModelTemplateChildService"],
            _model_detail_service__WEBPACK_IMPORTED_MODULE_3__["ModelDetailService"],
            src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_2__["AssetModelxService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzNotificationService"],
            src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_6__["FormBuilderTypeSafe"],
            src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_7__["PesanService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzDrawerService"]])
    ], ConsumsiableComponent);
    return ConsumsiableComponent;
}());



/***/ }),

/***/ "./src/app/pages/asset/model-detail/custom-field/custom-field.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/asset/model-detail/custom-field/custom-field.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer {\n  position: absolute;\n  bottom: 0px;\n  width: 100%;\n  border-top: 1px solid #e8e8e8;\n  padding: 10px 16px;\n  text-align: right;\n  left: 0px;\n  background: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYXNzZXQvbW9kZWwtZGV0YWlsL2N1c3RvbS1maWVsZC9FOlxcUFJPSkVLXFxERVJBWk9OQVxcZGV2ZXRlay1lcnAvc3JjXFxhcHBcXHBhZ2VzXFxhc3NldFxcbW9kZWwtZGV0YWlsXFxjdXN0b20tZmllbGRcXGN1c3RvbS1maWVsZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvYXNzZXQvbW9kZWwtZGV0YWlsL2N1c3RvbS1maWVsZC9jdXN0b20tZmllbGQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9hc3NldC9tb2RlbC1kZXRhaWwvY3VzdG9tLWZpZWxkL2N1c3RvbS1maWVsZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb290ZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2IoMjMyLCAyMzIsIDIzMik7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDE2cHg7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIGxlZnQ6IDBweDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgfVxyXG4iLCIuZm9vdGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZThlOGU4O1xuICBwYWRkaW5nOiAxMHB4IDE2cHg7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBsZWZ0OiAwcHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/asset/model-detail/custom-field/custom-field.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/asset/model-detail/custom-field/custom-field.component.ts ***!
  \*********************************************************************************/
/*! exports provided: CustomFieldComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomFieldComponent", function() { return CustomFieldComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/tool/pesan.service */ "./src/app/services/tool/pesan.service.ts");
/* harmony import */ var src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/sdk/asset/services */ "./src/app/sdk/asset/services.ts");






var CustomFieldComponent = /** @class */ (function () {
    function CustomFieldComponent(drawerRef, spinner, pesan, assetCustomFildService) {
        this.drawerRef = drawerRef;
        this.spinner = spinner;
        this.pesan = pesan;
        this.assetCustomFildService = assetCustomFildService;
        this.value = '';
        this.example = '["a","b","c"]';
        this.customField = {};
    }
    CustomFieldComponent.prototype.ngOnInit = function () {
    };
    CustomFieldComponent.prototype.close = function () {
        this.drawerRef.close(this.value);
    };
    CustomFieldComponent.prototype.addCustomFIeld = function () {
        var _this = this;
        if (this.customField.field_type == 'select' && this.customField.option_value != '') {
            try {
                JSON.parse(this.customField.option_value);
            }
            catch (e) {
                this.pesan.pesanWarningForm('Format Json tidak  valid!');
                return false;
            }
        }
        this.spinner.show();
        this.assetCustomFildService.postAssetCustomFilds(this.customField).subscribe(function (data) {
            _this.spinner.hide();
            _this.close();
        }, function (err) {
            _this.spinner.hide();
            _this.pesan.pesanWarningForm('Spesifikasi sudah ada');
        });
    };
    CustomFieldComponent.ctorParameters = function () { return [
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzDrawerRef"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"] },
        { type: src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_4__["PesanService"] },
        { type: src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_5__["AssetCustomFildService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CustomFieldComponent.prototype, "value", void 0);
    CustomFieldComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-custom-field',
            template: __webpack_require__(/*! raw-loader!./custom-field.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/asset/model-detail/custom-field/custom-field.component.html"),
            styles: [__webpack_require__(/*! ./custom-field.component.scss */ "./src/app/pages/asset/model-detail/custom-field/custom-field.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzDrawerRef"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"],
            src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_4__["PesanService"],
            src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_5__["AssetCustomFildService"]])
    ], CustomFieldComponent);
    return CustomFieldComponent;
}());



/***/ }),

/***/ "./src/app/pages/asset/model-detail/detail/detail.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/pages/asset/model-detail/detail/detail.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Fzc2V0L21vZGVsLWRldGFpbC9kZXRhaWwvZGV0YWlsLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/asset/model-detail/detail/detail.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/asset/model-detail/detail/detail.component.ts ***!
  \*********************************************************************/
/*! exports provided: DetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailComponent", function() { return DetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/sdk/asset/services */ "./src/app/sdk/asset/services.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_sdk_asset_services_asset_model_list_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/sdk/asset/services/asset-model-list.service */ "./src/app/sdk/asset/services/asset-model-list.service.ts");
/* harmony import */ var _model_detail_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../model-detail.service */ "./src/app/pages/asset/model-detail/model-detail.service.ts");







var DetailComponent = /** @class */ (function () {
    function DetailComponent(assetPartIdService, assetLifeLimitService, assetConditionMonitoringService, vendorVendorService, assetModelxService, spinner, modelDetailService, assetModelListService, router, activatedRoute) {
        this.assetPartIdService = assetPartIdService;
        this.assetLifeLimitService = assetLifeLimitService;
        this.assetConditionMonitoringService = assetConditionMonitoringService;
        this.vendorVendorService = vendorVendorService;
        this.assetModelxService = assetModelxService;
        this.spinner = spinner;
        this.modelDetailService = modelDetailService;
        this.assetModelListService = assetModelListService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.id_model = '';
        this.dataModel = {};
        this.dataType = {};
        this.dataLifelimit = {};
        this.dataCondition = {};
        this.dataVendor = {};
    }
    DetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.modelDetailService.getIdModel().subscribe(function (data) {
            if (data) {
                _this.id_model = data;
                _this.getModel();
            }
        });
    };
    DetailComponent.prototype.getModel = function () {
        var _this = this;
        this.spinner.show();
        this.assetModelxService.getAssetModelxesId(this.id_model).subscribe(function (data) {
            _this.dataModel = data.data;
            _this.spinner.hide();
            _this.getPartId(_this.dataModel.id_part_id);
            _this.getConditionMonitoring(_this.dataModel.id_condition_monitoring);
            _this.getLifeLimit(_this.dataModel.id_life_limit);
            _this.getVendor(_this.dataModel.id_manufacture);
        });
    };
    DetailComponent.prototype.getPartId = function (id) {
        var _this = this;
        this.spinner.show();
        this.assetPartIdService.getAssetPartIdsId(id).subscribe(function (data) {
            _this.dataType = data.data;
            _this.spinner.hide();
        });
    };
    DetailComponent.prototype.getLifeLimit = function (id) {
        var _this = this;
        this.spinner.show();
        this.assetLifeLimitService.getAssetLifeLimitsId(id).subscribe(function (data) {
            _this.dataLifelimit = data.data;
            _this.spinner.hide();
        });
    };
    DetailComponent.prototype.getConditionMonitoring = function (id) {
        var _this = this;
        this.spinner.show();
        this.assetConditionMonitoringService.getAssetConditionMonitoringsId(id).subscribe(function (data) {
            _this.dataCondition = data.data;
            _this.spinner.hide();
        });
    };
    DetailComponent.prototype.getVendor = function (id) {
        var _this = this;
        this.spinner.show();
        this.vendorVendorService.getVendorVendorsId(id).subscribe(function (data) {
            _this.dataVendor = data.data;
            _this.spinner.hide();
        });
    };
    DetailComponent.ctorParameters = function () { return [
        { type: src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_3__["AssetPartIdService"] },
        { type: src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_3__["AssetLifeLimitService"] },
        { type: src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_3__["AssetConditionMonitoringService"] },
        { type: src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_3__["VendorVendorService"] },
        { type: src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_3__["AssetModelxService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_1__["NgxSpinnerService"] },
        { type: _model_detail_service__WEBPACK_IMPORTED_MODULE_6__["ModelDetailService"] },
        { type: src_app_sdk_asset_services_asset_model_list_service__WEBPACK_IMPORTED_MODULE_5__["AssetModelListService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
    ]; };
    DetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-detail',
            template: __webpack_require__(/*! raw-loader!./detail.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/asset/model-detail/detail/detail.component.html"),
            styles: [__webpack_require__(/*! ./detail.component.scss */ "./src/app/pages/asset/model-detail/detail/detail.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_3__["AssetPartIdService"],
            src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_3__["AssetLifeLimitService"],
            src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_3__["AssetConditionMonitoringService"],
            src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_3__["VendorVendorService"],
            src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_3__["AssetModelxService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_1__["NgxSpinnerService"],
            _model_detail_service__WEBPACK_IMPORTED_MODULE_6__["ModelDetailService"],
            src_app_sdk_asset_services_asset_model_list_service__WEBPACK_IMPORTED_MODULE_5__["AssetModelListService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], DetailComponent);
    return DetailComponent;
}());



/***/ }),

/***/ "./src/app/pages/asset/model-detail/foto/foto.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/pages/asset/model-detail/foto/foto.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Fzc2V0L21vZGVsLWRldGFpbC9mb3RvL2ZvdG8uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/asset/model-detail/foto/foto.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/asset/model-detail/foto/foto.component.ts ***!
  \*****************************************************************/
/*! exports provided: FotoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FotoComponent", function() { return FotoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/sdk/asset/services */ "./src/app/sdk/asset/services.ts");
/* harmony import */ var _model_detail_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../model-detail.service */ "./src/app/pages/asset/model-detail/model-detail.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_components_document_single_upload_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/components/document/single-upload.service */ "./src/app/components/document/single-upload.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/angular-reactive-forms-helper */ "./src/app/services/angular-reactive-forms-helper.ts");
/* harmony import */ var src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/tool/pesan.service */ "./src/app/services/tool/pesan.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");










var FotoComponent = /** @class */ (function () {
    function FotoComponent(assetModelxService, modelDetailService, singleUploadService, spinner, fb, pesan, activatedRoute, router) {
        this.assetModelxService = assetModelxService;
        this.modelDetailService = modelDetailService;
        this.singleUploadService = singleUploadService;
        this.spinner = spinner;
        this.fb = fb;
        this.pesan = pesan;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.id_model = '';
        this.toogleUpload = false;
        this.dataModel = {};
        // togleShowUpload() {
        //     this.toogleUpload = true;
        // }
        this.foto = 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png';
    }
    FotoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.modelDetailService.getIdModel().subscribe(function (data) {
            _this.id_model = data;
            console.log('id pegawai paja tu ' + _this.id_model);
        });
        this.getData();
        this.form();
        this.singleUploadService.getCallback().subscribe(function (data) {
            if (data == 'company.finish') {
                _this.toogleUpload = false;
            }
        });
        this.singleUploadService.getId().subscribe(function (data) {
            if (data) {
                _this.dataForm.patchValue({ foto: data });
                _this.simpan();
            }
        });
    };
    FotoComponent.prototype.getData = function () {
        var _this = this;
        this.assetModelxService.getAssetModelxesId(this.id_model).subscribe(function (data) {
            _this.dataForm.setValue(data.data);
            _this.singleUploadService.param.next({
                for_module: "asset_model",
                for_table: "erp_asset.model",
                for_module_id: data.data.id_model
            });
            // if (data.data.foto) {
            //     this.foto = "http://erp-document.vm.devetek.com/download?id_document=" + data.data.foto
            // }
        });
    };
    FotoComponent.prototype.form = function () {
        this.dataForm = this.fb.group({
            id_manufacture: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required]),
            id_condition_monitoring: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required]),
            id_life_limit: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required]),
            id_part_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required]),
            part_number: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            keyword: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            life_limit_var: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            life_limit_val: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            min_qty: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            unit: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            id_user: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            id_model: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            is_single: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            created_at: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            updated_at: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            foto: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
        });
    };
    FotoComponent.prototype.simpan = function () {
        var _this = this;
        this.spinner.show();
        if (this.dataForm.invalid) {
            this.pesan.pesanWarningForm('Form Tidak Valid');
            this.spinner.hide();
            return;
        }
        this.dataModel = this.dataForm.value;
        this.assetModelxService.putAssetModelxesId({ id: this.id_model, body: this.dataModel }).subscribe(function (data) {
            _this.toogleUpload = false;
            _this.getData();
            _this.goToBack();
            _this.spinner.hide();
        }, function (err) {
            _this.pesan.pesanWarningForm('Gagal di simpan');
            _this.spinner.hide();
        }, function () {
            console.log('HTTP request completed.');
        });
    };
    FotoComponent.prototype.goToBack = function () {
        this.router.navigate(['/asset/model', this.id_model, 'view', 'detail']);
    };
    FotoComponent.ctorParameters = function () { return [
        { type: src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_1__["AssetModelxService"] },
        { type: _model_detail_service__WEBPACK_IMPORTED_MODULE_2__["ModelDetailService"] },
        { type: src_app_components_document_single_upload_service__WEBPACK_IMPORTED_MODULE_4__["SingleUploadService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"] },
        { type: src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_6__["FormBuilderTypeSafe"] },
        { type: src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_7__["PesanService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] }
    ]; };
    FotoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-foto',
            template: __webpack_require__(/*! raw-loader!./foto.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/asset/model-detail/foto/foto.component.html"),
            styles: [__webpack_require__(/*! ./foto.component.scss */ "./src/app/pages/asset/model-detail/foto/foto.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_1__["AssetModelxService"],
            _model_detail_service__WEBPACK_IMPORTED_MODULE_2__["ModelDetailService"],
            src_app_components_document_single_upload_service__WEBPACK_IMPORTED_MODULE_4__["SingleUploadService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"],
            src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_6__["FormBuilderTypeSafe"],
            src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_7__["PesanService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]])
    ], FotoComponent);
    return FotoComponent;
}());



/***/ }),

/***/ "./src/app/pages/asset/model-detail/license/license.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/pages/asset/model-detail/license/license.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Fzc2V0L21vZGVsLWRldGFpbC9saWNlbnNlL2xpY2Vuc2UuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/asset/model-detail/license/license.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/asset/model-detail/license/license.component.ts ***!
  \***********************************************************************/
/*! exports provided: LicenseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LicenseComponent", function() { return LicenseComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sdk/asset/services */ "./src/app/sdk/asset/services.ts");
/* harmony import */ var _model_detail_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model-detail.service */ "./src/app/pages/asset/model-detail/model-detail.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/angular-reactive-forms-helper */ "./src/app/services/angular-reactive-forms-helper.ts");
/* harmony import */ var src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/tool/pesan.service */ "./src/app/services/tool/pesan.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_components_search_item_search_item_search_item_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/components/search-item/search-item/search-item.component */ "./src/app/components/search-item/search-item/search-item.component.ts");










var LicenseComponent = /** @class */ (function () {
    function LicenseComponent(assetModelTemplateChildService, modelDetailService, assetModelxService, spinner, notification, fb, pesan, router, drawerService) {
        this.assetModelTemplateChildService = assetModelTemplateChildService;
        this.modelDetailService = modelDetailService;
        this.assetModelxService = assetModelxService;
        this.spinner = spinner;
        this.notification = notification;
        this.fb = fb;
        this.pesan = pesan;
        this.router = router;
        this.drawerService = drawerService;
        this.listModelChild = [];
        this.id_model = null;
        this.id_model_child = null;
        this.id_part_id = 'license';
        this.dataItem = {};
    }
    LicenseComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.modelDetailService.getIdModel().subscribe(function (data) {
            if (data) {
                _this.id_model = data;
                console.log('sadasda ' + _this.id_model);
                _this.getlistChild();
            }
        });
    };
    LicenseComponent.prototype.add_item = function () {
        var _this = this;
        var drawerRef = this.drawerService.create({
            nzTitle: 'Search Model',
            nzContent: src_app_components_search_item_search_item_search_item_component__WEBPACK_IMPORTED_MODULE_9__["SearchItemComponent"],
            nzWidth: '900px',
            nzContentParams: {
                value: 'arifan'
            }
        });
        drawerRef.afterOpen.subscribe(function () {
            console.log('Drawer(Component) open');
        });
        drawerRef.afterClose.subscribe(function (data) {
            if (typeof data === 'string') {
                _this.id_model_child = data;
                _this.beforeModel();
            }
        });
    };
    LicenseComponent.prototype.getlistChild = function () {
        var _this = this;
        var param = {
            id_model_child: this.id_model,
            id_part_id: this.id_part_id
        };
        this.assetModelTemplateChildService.getAssetModelTemplateChildren(JSON.stringify(param)).subscribe(function (data) {
            _this.listModelChild = data.data;
        });
    };
    LicenseComponent.prototype.deleteItem = function (id) {
        var _this = this;
        this.spinner.show();
        this.assetModelTemplateChildService.deleteAssetModelTemplateChildrenId(id).subscribe(function (data) {
            _this.getlistChild();
            _this.spinner.hide();
        });
    };
    LicenseComponent.prototype.beforeModel = function () {
        var _this = this;
        console.log("panggie ko");
        this.spinner.show();
        this.assetModelxService.getAssetModelxesId(this.id_model_child).subscribe(function (data) {
            _this.dataItem.keyword = data.data.keyword;
            _this.dataItem.part_number = data.data.part_number;
            _this.dataItem.id_model_child = data.data.id_model;
            _this.dataItem.life_limit_var = data.data.life_limit_var;
            _this.dataItem.life_limit_var = data.data.life_limit_val;
            _this.dataItem.id_model_parent = _this.id_model;
            _this.spinner.hide();
            console.log(_this.dataItem);
        });
    };
    LicenseComponent.prototype.simpan_item = function () {
        var _this = this;
        var param = {
            id_model_child: this.id_model,
            id_model: this.id_model_child
        };
        this.spinner.show();
        //simpan ka server
        this.assetModelTemplateChildService.postAssetModelTemplateChildren(param).subscribe(function (data) {
            _this.id_model_child = null;
            _this.spinner.hide();
            _this.getlistChild();
        }, function (err) {
            _this.spinner.hide();
            _this.pesan.pesanWarningForm('Dupikat pembelian Item!');
        });
    };
    LicenseComponent.ctorParameters = function () { return [
        { type: src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_2__["AssetModelTemplateChildService"] },
        { type: _model_detail_service__WEBPACK_IMPORTED_MODULE_3__["ModelDetailService"] },
        { type: src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_2__["AssetModelxService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzNotificationService"] },
        { type: src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_6__["FormBuilderTypeSafe"] },
        { type: src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_7__["PesanService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzDrawerService"] }
    ]; };
    LicenseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-license',
            template: __webpack_require__(/*! raw-loader!./license.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/asset/model-detail/license/license.component.html"),
            styles: [__webpack_require__(/*! ./license.component.scss */ "./src/app/pages/asset/model-detail/license/license.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_2__["AssetModelTemplateChildService"],
            _model_detail_service__WEBPACK_IMPORTED_MODULE_3__["ModelDetailService"],
            src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_2__["AssetModelxService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzNotificationService"],
            src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_6__["FormBuilderTypeSafe"],
            src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_7__["PesanService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzDrawerService"]])
    ], LicenseComponent);
    return LicenseComponent;
}());



/***/ }),

/***/ "./src/app/pages/asset/model-detail/maintenance-code/maintenance-code.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/asset/model-detail/maintenance-code/maintenance-code.component.scss ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Fzc2V0L21vZGVsLWRldGFpbC9tYWludGVuYW5jZS1jb2RlL21haW50ZW5hbmNlLWNvZGUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/asset/model-detail/maintenance-code/maintenance-code.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/asset/model-detail/maintenance-code/maintenance-code.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: MaintenanceCodeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaintenanceCodeComponent", function() { return MaintenanceCodeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sdk/asset/services */ "./src/app/sdk/asset/services.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/tool/pesan.service */ "./src/app/services/tool/pesan.service.ts");






var MaintenanceCodeComponent = /** @class */ (function () {
    function MaintenanceCodeComponent(drawerRef, spinner, pesan, asssetMaintenanceCodeService) {
        this.drawerRef = drawerRef;
        this.spinner = spinner;
        this.pesan = pesan;
        this.asssetMaintenanceCodeService = asssetMaintenanceCodeService;
        this.value = '';
        this.maintenanceCode = {};
    }
    MaintenanceCodeComponent.prototype.ngOnInit = function () {
    };
    MaintenanceCodeComponent.prototype.close = function () {
        this.drawerRef.close(this.value);
    };
    MaintenanceCodeComponent.prototype.addMaintenanceCode = function () {
        var _this = this;
        this.spinner.show();
        this.asssetMaintenanceCodeService.postAssetMaintenanceCodes(this.maintenanceCode).subscribe(function (data) {
            _this.spinner.hide();
            _this.close();
        }, function (err) {
            _this.spinner.hide();
            _this.pesan.pesanWarningForm('Maintenance Code sudah ada');
        });
    };
    MaintenanceCodeComponent.ctorParameters = function () { return [
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzDrawerRef"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"] },
        { type: src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_5__["PesanService"] },
        { type: src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_2__["AssetMaintenanceCodeService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MaintenanceCodeComponent.prototype, "value", void 0);
    MaintenanceCodeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-maintenance-code',
            template: __webpack_require__(/*! raw-loader!./maintenance-code.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/asset/model-detail/maintenance-code/maintenance-code.component.html"),
            styles: [__webpack_require__(/*! ./maintenance-code.component.scss */ "./src/app/pages/asset/model-detail/maintenance-code/maintenance-code.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzDrawerRef"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"],
            src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_5__["PesanService"],
            src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_2__["AssetMaintenanceCodeService"]])
    ], MaintenanceCodeComponent);
    return MaintenanceCodeComponent;
}());



/***/ }),

/***/ "./src/app/pages/asset/model-detail/maintenance/maintenance.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/asset/model-detail/maintenance/maintenance.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Fzc2V0L21vZGVsLWRldGFpbC9tYWludGVuYW5jZS9tYWludGVuYW5jZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/asset/model-detail/maintenance/maintenance.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/asset/model-detail/maintenance/maintenance.component.ts ***!
  \*******************************************************************************/
/*! exports provided: MaintenanceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaintenanceComponent", function() { return MaintenanceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sdk/asset/services */ "./src/app/sdk/asset/services.ts");
/* harmony import */ var _model_detail_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model-detail.service */ "./src/app/pages/asset/model-detail/model-detail.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/tool/pesan.service */ "./src/app/services/tool/pesan.service.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _maintenance_code_maintenance_code_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../maintenance-code/maintenance-code.component */ "./src/app/pages/asset/model-detail/maintenance-code/maintenance-code.component.ts");
/* harmony import */ var _model_life_model_life_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../model-life/model-life.component */ "./src/app/pages/asset/model-detail/model-life/model-life.component.ts");










var MaintenanceComponent = /** @class */ (function () {
    function MaintenanceComponent(assetModelMaintenanceService, assetModelLifeService, assetMaintenanceCodeService, modelDetailService, router, activatedRoute, spinner, pesan, drawerService) {
        this.assetModelMaintenanceService = assetModelMaintenanceService;
        this.assetModelLifeService = assetModelLifeService;
        this.assetMaintenanceCodeService = assetMaintenanceCodeService;
        this.modelDetailService = modelDetailService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.spinner = spinner;
        this.pesan = pesan;
        this.drawerService = drawerService;
        this.id_model = null;
        this.toogleAdd = false;
        this.listMaintenanceCode = [];
        this.listModellife = [];
        this.listMaintenance = [];
        this.periode_val = 0;
        this.periode_var = '';
        this.id_maintenance_code = null;
        this.id_model_life = null;
        this.model_life_val = 0;
    }
    MaintenanceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.modelDetailService.getIdModel().subscribe(function (data) {
            if (data) {
                _this.id_model = data;
                _this.getMaintenance();
            }
        });
        this.getCode();
        this.getModelLife();
    };
    MaintenanceComponent.prototype.add = function () {
        this.toogleAdd = true;
    };
    MaintenanceComponent.prototype.getCode = function () {
        var _this = this;
        this.assetMaintenanceCodeService.getAssetMaintenanceCodes().subscribe(function (data) {
            _this.listMaintenanceCode = data.data;
        });
    };
    MaintenanceComponent.prototype.getModelLife = function () {
        var _this = this;
        this.assetModelLifeService.getAssetModelLives().subscribe(function (data) {
            _this.listModellife = data.data;
        });
    };
    MaintenanceComponent.prototype.getMaintenance = function () {
        var _this = this;
        this.spinner.show();
        this.assetModelMaintenanceService.getAssetModelMaintenances(JSON.stringify({ id_model: this.id_model })).subscribe(function (data) {
            _this.listMaintenance = data.data;
            _this.spinner.hide();
        });
    };
    MaintenanceComponent.prototype.addMaintenance = function () {
        var _this = this;
        var params = {
            id_model: this.id_model,
            periode_val: this.periode_val,
            periode_var: this.periode_var,
            id_maintenance_code: this.id_maintenance_code,
            id_model_life: this.id_model_life,
            model_life_val: this.model_life_val,
        };
        if (!this.id_maintenance_code) {
            this.pesan.pesanWarningForm('Field harus di isi!');
            return false;
        }
        this.assetModelMaintenanceService.postAssetModelMaintenances(params).subscribe(function (data) {
            _this.getMaintenance();
            _this.periode_val = 0;
            _this.periode_var = '-';
            _this.id_maintenance_code = null;
            _this.model_life_val = 0;
            _this.id_model_life = '';
            _this.toogleAdd = false;
        }, function (err) {
            _this.pesan.pesanWarningForm('Maintenance sudah ada');
        });
    };
    MaintenanceComponent.prototype.deleteMaintenance = function (id) {
        var _this = this;
        this.spinner.show();
        this.assetModelMaintenanceService.deleteAssetModelMaintenancesId(id).subscribe(function (data) {
            _this.spinner.hide();
            _this.getMaintenance();
        }, function (err) {
            _this.spinner.hide();
            _this.pesan.pesanWarningForm('spesifiaasi sudah di gunakan, tidak boleh di delete!');
        });
    };
    MaintenanceComponent.prototype.openCode = function () {
        var _this = this;
        var drawerRef = this.drawerService.create({
            nzTitle: 'Add new Maintenance Code',
            nzContent: _maintenance_code_maintenance_code_component__WEBPACK_IMPORTED_MODULE_8__["MaintenanceCodeComponent"],
            nzWidth: '320px'
        });
        drawerRef.afterOpen.subscribe(function () {
            console.log('Drawer(Component) open');
        });
        drawerRef.afterClose.subscribe(function (data) {
            console.log(data);
            if (typeof data === 'string') {
                _this.getCode();
            }
        });
    };
    MaintenanceComponent.prototype.openModelLife = function () {
        var _this = this;
        var drawerRef = this.drawerService.create({
            nzTitle: 'Add new Model Life',
            nzContent: _model_life_model_life_component__WEBPACK_IMPORTED_MODULE_9__["ModelLifeComponent"],
            nzWidth: '320px'
        });
        drawerRef.afterOpen.subscribe(function () {
            console.log('Drawer(Component) open');
        });
        drawerRef.afterClose.subscribe(function (data) {
            console.log(data);
            if (typeof data === 'string') {
                _this.getModelLife();
            }
        });
    };
    MaintenanceComponent.ctorParameters = function () { return [
        { type: src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_2__["AssetModelMaintenanceService"] },
        { type: src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_2__["AssetModelLifeService"] },
        { type: src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_2__["AssetMaintenanceCodeService"] },
        { type: _model_detail_service__WEBPACK_IMPORTED_MODULE_3__["ModelDetailService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"] },
        { type: src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_6__["PesanService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__["NzDrawerService"] }
    ]; };
    MaintenanceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-maintenance',
            template: __webpack_require__(/*! raw-loader!./maintenance.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/asset/model-detail/maintenance/maintenance.component.html"),
            styles: [__webpack_require__(/*! ./maintenance.component.scss */ "./src/app/pages/asset/model-detail/maintenance/maintenance.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_2__["AssetModelMaintenanceService"],
            src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_2__["AssetModelLifeService"],
            src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_2__["AssetMaintenanceCodeService"],
            _model_detail_service__WEBPACK_IMPORTED_MODULE_3__["ModelDetailService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"],
            src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_6__["PesanService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__["NzDrawerService"]])
    ], MaintenanceComponent);
    return MaintenanceComponent;
}());



/***/ }),

/***/ "./src/app/pages/asset/model-detail/model-detail-routing.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/asset/model-detail/model-detail-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: ModelDetailRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModelDetailRoutingModule", function() { return ModelDetailRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _stock_stock_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stock/stock.component */ "./src/app/pages/asset/model-detail/stock/stock.component.ts");
/* harmony import */ var _riwayat_pembelian_pembelian_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./riwayat/pembelian/pembelian.component */ "./src/app/pages/asset/model-detail/riwayat/pembelian/pembelian.component.ts");
/* harmony import */ var _model_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./model-detail.component */ "./src/app/pages/asset/model-detail/model-detail.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _detail_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./detail/detail.component */ "./src/app/pages/asset/model-detail/detail/detail.component.ts");
/* harmony import */ var _spesification_spesification_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./spesification/spesification.component */ "./src/app/pages/asset/model-detail/spesification/spesification.component.ts");
/* harmony import */ var _componen_componen_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./componen/componen.component */ "./src/app/pages/asset/model-detail/componen/componen.component.ts");
/* harmony import */ var _maintenance_maintenance_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./maintenance/maintenance.component */ "./src/app/pages/asset/model-detail/maintenance/maintenance.component.ts");
/* harmony import */ var _consumsiable_consumsiable_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./consumsiable/consumsiable.component */ "./src/app/pages/asset/model-detail/consumsiable/consumsiable.component.ts");
/* harmony import */ var _license_license_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./license/license.component */ "./src/app/pages/asset/model-detail/license/license.component.ts");
/* harmony import */ var _view_view_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./view/view.component */ "./src/app/pages/asset/model-detail/view/view.component.ts");
/* harmony import */ var _pengaturan_category_category_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pengaturan/category/category.component */ "./src/app/pages/asset/model-detail/pengaturan/category/category.component.ts");
/* harmony import */ var _pengaturan_owner_owner_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pengaturan/owner/owner.component */ "./src/app/pages/asset/model-detail/pengaturan/owner/owner.component.ts");
/* harmony import */ var _riwayat_permintaan_permintaan_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./riwayat/permintaan/permintaan.component */ "./src/app/pages/asset/model-detail/riwayat/permintaan/permintaan.component.ts");
/* harmony import */ var _foto_foto_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./foto/foto.component */ "./src/app/pages/asset/model-detail/foto/foto.component.ts");

















var routes = [
    {
        path: '',
        component: _model_detail_component__WEBPACK_IMPORTED_MODULE_3__["ModelDetailComponent"],
        children: [
            {
                path: '',
                redirectTo: 'view'
            },
            {
                path: 'maintenance',
                component: _maintenance_maintenance_component__WEBPACK_IMPORTED_MODULE_9__["MaintenanceComponent"]
            },
            {
                path: 'stock',
                component: _stock_stock_component__WEBPACK_IMPORTED_MODULE_1__["StockComponent"]
            },
            {
                path: 'foto',
                component: _foto_foto_component__WEBPACK_IMPORTED_MODULE_16__["FotoComponent"]
            },
            {
                path: 'riwayat/pembelian',
                component: _riwayat_pembelian_pembelian_component__WEBPACK_IMPORTED_MODULE_2__["PembelianComponent"]
            },
            {
                path: 'riwayat/permintaan',
                component: _riwayat_permintaan_permintaan_component__WEBPACK_IMPORTED_MODULE_15__["PermintaanComponent"]
            },
            {
                path: 'pengaturan/category',
                component: _pengaturan_category_category_component__WEBPACK_IMPORTED_MODULE_13__["CategoryComponent"]
            },
            {
                path: 'pengaturan/owner',
                component: _pengaturan_owner_owner_component__WEBPACK_IMPORTED_MODULE_14__["OwnerComponent"]
            },
            {
                path: 'view',
                component: _view_view_component__WEBPACK_IMPORTED_MODULE_12__["ViewComponent"],
                children: [
                    {
                        path: '',
                        redirectTo: 'detail'
                    },
                    {
                        path: 'detail',
                        component: _detail_detail_component__WEBPACK_IMPORTED_MODULE_6__["DetailComponent"]
                    },
                    {
                        path: 'spesifikasi',
                        component: _spesification_spesification_component__WEBPACK_IMPORTED_MODULE_7__["SpesificationComponent"]
                    },
                    {
                        path: 'componen',
                        component: _componen_componen_component__WEBPACK_IMPORTED_MODULE_8__["ComponenComponent"]
                    },
                    {
                        path: 'consumsiable',
                        component: _consumsiable_consumsiable_component__WEBPACK_IMPORTED_MODULE_10__["ConsumsiableComponent"]
                    },
                    {
                        path: 'license',
                        component: _license_license_component__WEBPACK_IMPORTED_MODULE_11__["LicenseComponent"]
                    },
                ]
            }
        ]
    }
];
var ModelDetailRoutingModule = /** @class */ (function () {
    function ModelDetailRoutingModule() {
    }
    ModelDetailRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]]
        })
    ], ModelDetailRoutingModule);
    return ModelDetailRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/asset/model-detail/model-detail.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/pages/asset/model-detail/model-detail.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".air__utils__avatar {\n  height: 180px;\n  width: 180px;\n  padding: 0px;\n}\n.air__utils__avatar img {\n  margin-top: rem(5);\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n.air__menuLeft {\n  -webkit-box-flex: 0;\n          flex: 0 0 240px;\n  max-width: 240px;\n  min-width: 240px;\n  width: 240px;\n  min-height: 100%;\n  background: #161537;\n  overflow: hidden;\n}\n@media (max-width: 767px) {\n  .air__menuLeft {\n    position: fixed;\n    z-index: 997;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    overflow: visible;\n    margin-left: -240px;\n    -webkit-transition: -webkit-transform 0.2s ease-in-out;\n    transition: -webkit-transform 0.2s ease-in-out;\n    transition: transform 0.2s ease-in-out;\n    transition: transform 0.2s ease-in-out, -webkit-transform 0.2s ease-in-out;\n  }\n  .air__menuLeft__mobileToggleButton {\n    display: block !important;\n  }\n  .air__menuLeft__toggleButton {\n    display: none;\n  }\n  .air__menuLeft__mobileToggled {\n    -webkit-transform: translateX(240px);\n            transform: translateX(240px);\n  }\n}\n.air__menuLeft__outer {\n  position: fixed;\n  z-index: 1000;\n  top: 0;\n  height: 100%;\n  -webkit-box-flex: 0;\n          flex: 0 0 240px;\n  max-width: 240px;\n  min-width: 240px;\n  width: 240px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n.air__menuLeft__container {\n  padding-bottom: 1.33rem;\n}\n.air__menuLeft__backdrop {\n  position: fixed;\n  z-index: 996;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  background: #161537;\n  opacity: 0;\n  visibility: hidden;\n  -webkit-transition: opacity 0.2s ease-in-out;\n  transition: opacity 0.2s ease-in-out;\n}\n@media (max-width: 767px) {\n  .air__menuLeft__mobileToggled + .air__menuLeft__backdrop {\n    opacity: 0.2;\n    visibility: visible;\n  }\n}\n.air__menuLeft__mobileToggleButton {\n  position: absolute;\n  right: -2.67rem;\n  top: 9.46rem;\n  width: 2.66rem;\n  height: 2.66rem;\n  background: #161537;\n  border-radius: 0 5px 5px 0;\n  cursor: pointer;\n  display: none;\n  text-align: center;\n  box-shadow: 0 4px 38px 0 rgba(22, 21, 55, 0.11), 0 0 21px 0 rgba(22, 21, 55, 0.05);\n}\n.air__menuLeft__mobileToggleButton span {\n  display: inline-block;\n  width: 14px;\n  height: 2px;\n  position: relative;\n  background: #fff;\n  -webkit-transition: background 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86);\n  transition: background 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86);\n  top: 5px;\n}\n.air__menuLeft__mobileToggled .air__menuLeft__mobileToggleButton span {\n  background: transparent;\n}\n.air__menuLeft__mobileToggled .air__menuLeft__mobileToggleButton span:before {\n  -webkit-transform: translateY(5px) rotate(45deg);\n          transform: translateY(5px) rotate(45deg);\n}\n.air__menuLeft__mobileToggled .air__menuLeft__mobileToggleButton span:after {\n  -webkit-transform: translateY(-5px) rotate(-45deg);\n          transform: translateY(-5px) rotate(-45deg);\n}\n.air__menuLeft__mobileToggleButton span:before, .air__menuLeft__mobileToggleButton span:after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  background: #fff;\n  width: 100%;\n  height: 2px;\n  -webkit-transition: -webkit-transform 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86);\n  transition: -webkit-transform 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86);\n  transition: transform 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86);\n  transition: transform 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86), -webkit-transform 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86);\n}\n.air__menuLeft__mobileToggleButton span:before {\n  top: -5px;\n}\n.air__menuLeft__mobileToggleButton span:after {\n  top: 5px;\n}\n.air__menuLeft__toggleButton {\n  position: absolute;\n  top: 0.8rem;\n  right: 0.66rem;\n  z-index: 2;\n  width: 40px;\n  height: 40px;\n  cursor: pointer;\n}\n.air__menuLeft__toggled .air__menuLeft__toggleButton {\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n.air__menuLeft__toggleButton:hover span {\n  opacity: 1 !important;\n}\n.air__menuLeft__toggleButton span {\n  -webkit-transition: all 0.2s ease-in-out;\n  transition: all 0.2s ease-in-out;\n  opacity: 0.9;\n}\n.air__menuLeft__toggleButton span:before, .air__menuLeft__toggleButton span:after {\n  position: absolute;\n  content: \"\";\n  display: block;\n  width: 12px;\n  height: 3px;\n  background: #1b55e3;\n  border-radius: 5px;\n}\n.air__menuLeft__toggleButton span:before {\n  top: 14px;\n  left: 6px;\n  -webkit-transform: rotate(-45deg);\n          transform: rotate(-45deg);\n}\n.air__menuLeft__toggleButton span:after {\n  top: 21px;\n  left: 6px;\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg);\n}\n.air__menuLeft__toggleButton span:first-child {\n  position: relative;\n  left: 3px;\n}\n.air__menuLeft__toggleButton span:last-child {\n  position: relative;\n  left: 11px;\n  opacity: 0.5;\n}\n.air__menuLeft__logo {\n  display: block;\n  padding: 1rem 1.33rem;\n  line-height: 1;\n  height: 4.26rem;\n}\n.air__menuLeft__logo img {\n  float: left;\n  margin-top: 0.33rem;\n}\n.air__menuLeft__logo__name {\n  font-weight: 900;\n  color: #fff;\n  font-size: 21px;\n  margin-left: 2.66rem;\n}\n.air__menuLeft__logo__descr {\n  color: #c3bedc;\n  margin-left: 2.66rem;\n  font-size: 12px;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n}\n.air__menuLeft__user {\n  display: block;\n  padding: 1rem 1.33rem;\n  height: 4.8rem;\n  line-height: 1.3;\n}\n.air__menuLeft__user__avatar {\n  float: left;\n}\n.air__menuLeft__user__name {\n  margin-left: 4rem;\n  color: #fff;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  margin-top: 0.13rem;\n}\n.air__menuLeft__user__role {\n  margin-left: 4rem;\n  color: #786fa4;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n.air__menuLeft__banner {\n  margin: 2.66rem 1.33rem 1.33rem;\n  background: #1b55e3;\n  background: linear-gradient(45deg, #1b55e3 0%, #4877e9 100%);\n  border-radius: 6px;\n  padding: 1.33rem;\n  color: #fff;\n  box-shadow: 0 8px 15px -5px black;\n}\n.air__menuLeft__list {\n  list-style: none;\n  padding-left: 0;\n  margin: 0;\n}\n.air__menuLeft__list .air__menuLeft__list .air__menuLeft__link {\n  padding-left: 3.26rem;\n}\n.air__menuLeft__category {\n  text-transform: uppercase;\n  color: #786fa4;\n  letter-spacing: 1px;\n  font-size: 0.8rem;\n  padding: 0.93rem 1.33rem;\n  overflow: hidden;\n  position: relative;\n}\n.air__menuLeft__category:after {\n  content: \"\";\n  position: absolute;\n  top: 50%;\n  left: 1.33rem;\n  right: 1.33rem;\n  height: 1px;\n  background: #4a436a;\n  display: none;\n}\n.air__menuLeft__item {\n  display: block;\n}\n.air__menuLeft__item__active > .air__menuLeft__link {\n  background: #1b55e3;\n  color: #fff;\n}\n.air__menuLeft__item__active > .air__menuLeft__link .air__menuLeft__icon {\n  color: #fff;\n}\n.air__menuLeft__submenu > .air__menuLeft__link {\n  position: relative;\n}\n.air__menuLeft__submenu > .air__menuLeft__link:before, .air__menuLeft__submenu > .air__menuLeft__link:after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  top: 1.33rem;\n  right: 1.33rem;\n  width: 6px;\n  height: 2px;\n  background: #786fa4;\n  -webkit-transform: rotate(-45deg);\n          transform: rotate(-45deg);\n  -webkit-transition: background 0.2s ease-in-out;\n  transition: background 0.2s ease-in-out;\n}\n.air__menuLeft__submenu > .air__menuLeft__link:after {\n  right: 1.6rem;\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg);\n}\n.air__menuLeft__submenu__active {\n  background: #100f28;\n}\n.air__menuLeft__submenu__active > .air__menuLeft__link {\n  color: #fff;\n}\n.air__menuLeft__submenu__active > .air__menuLeft__link:before, .air__menuLeft__submenu__active > .air__menuLeft__link:after {\n  background: #fff;\n}\n.air__menuLeft__submenu__active > .air__menuLeft__link .air__menuLeft__icon {\n  color: #fff;\n}\n.air__menuLeft__submenu__active > .air__menuLeft__list {\n  display: block !important;\n}\n.air__menuLeft__submenu .air__menuLeft__list {\n  display: none;\n  padding-bottom: 0.66rem;\n}\n.air__menuLeft__link {\n  color: #aca6cc;\n  display: block;\n  padding: 0.6rem 2.66rem 0.6rem 1.33rem;\n  font-size: 1rem;\n}\n.air__menuLeft__link:hover, .air__menuLeft__link:focus {\n  color: #1b55e3;\n}\n.air__menuLeft__link:hover:before, .air__menuLeft__link:hover:after, .air__menuLeft__link:focus:before, .air__menuLeft__link:focus:after {\n  background: #fff;\n}\n.air__menuLeft__icon {\n  display: inline-block;\n  width: 1.66rem;\n}\n@media (min-width: 768px) {\n  .air__menuLeft__toggled:not(.air__menuLeft__compact) {\n    -webkit-box-flex: 0;\n            flex: 0 0 80px;\n    max-width: 80px;\n    min-width: 80px;\n    width: 80px;\n  }\n  .air__menuLeft__toggled:not(.air__menuLeft__compact) .air__menuLeft__outer {\n    -webkit-box-flex: 0;\n            flex: 0 0 80px;\n    max-width: 80px;\n    min-width: 80px;\n    width: 80px;\n  }\n  .air__menuLeft__toggled:not(.air__menuLeft__compact) .air__menuLeft__logo {\n    visibility: hidden;\n  }\n  .air__menuLeft__toggled:not(.air__menuLeft__compact) .air__menuLeft__toggleButton {\n    right: 1.33rem;\n  }\n  .air__menuLeft__toggled:not(.air__menuLeft__compact) .air__menuLeft__user__name, .air__menuLeft__toggled:not(.air__menuLeft__compact) .air__menuLeft__user__role {\n    display: none;\n  }\n  .air__menuLeft__toggled:not(.air__menuLeft__compact) .air__menuLeft__banner {\n    display: none;\n  }\n  .air__menuLeft__toggled:not(.air__menuLeft__compact) .air__menuLeft__submenu__active {\n    background: #1b55e3;\n  }\n  .air__menuLeft__toggled:not(.air__menuLeft__compact) .air__menuLeft__submenu > .air__menuLeft__list {\n    display: none !important;\n  }\n  .air__menuLeft__toggled:not(.air__menuLeft__compact) .air__menuLeft__link > span {\n    display: none;\n  }\n  .air__menuLeft__toggled:not(.air__menuLeft__compact) .air__menuLeft__link:before {\n    right: 1.2rem;\n    top: 1.4rem;\n  }\n  .air__menuLeft__toggled:not(.air__menuLeft__compact) .air__menuLeft__link:after {\n    right: 1.2rem;\n    top: 1.2rem;\n  }\n  .air__menuLeft__toggled:not(.air__menuLeft__compact) .air__menuLeft__icon {\n    width: 2.66rem;\n    text-align: center;\n  }\n  .air__menuLeft__toggled:not(.air__menuLeft__compact) .air__menuLeft__category {\n    text-indent: -999px;\n  }\n  .air__menuLeft__toggled:not(.air__menuLeft__compact) .air__menuLeft__category:after {\n    display: block;\n  }\n}\n@media (min-width: 768px) {\n  .air__menuLeft__compact {\n    -webkit-box-flex: 0;\n            flex: 0 0 150px;\n    max-width: 150px;\n    min-width: 150px;\n    width: 150px;\n  }\n  .air__menuLeft__compact .air__menuLeft__outer {\n    -webkit-box-flex: 0;\n            flex: 0 0 150px;\n    max-width: 150px;\n    min-width: 150px;\n    width: 150px;\n  }\n  .air__menuLeft__compact .air__menuLeft__logo {\n    text-align: center;\n  }\n  .air__menuLeft__compact .air__menuLeft__logo img {\n    float: none;\n  }\n  .air__menuLeft__compact .air__menuLeft__logo__name, .air__menuLeft__compact .air__menuLeft__logo__descr {\n    display: none;\n  }\n  .air__menuLeft__compact .air__menuLeft__toggleButton {\n    display: none;\n  }\n  .air__menuLeft__compact .air__menuLeft__user {\n    height: auto;\n    text-align: center;\n  }\n  .air__menuLeft__compact .air__menuLeft__user__avatar {\n    float: none;\n    margin-bottom: 0.66rem;\n  }\n  .air__menuLeft__compact .air__menuLeft__user__name, .air__menuLeft__compact .air__menuLeft__user__role {\n    display: block;\n    margin-left: 0;\n  }\n  .air__menuLeft__compact .air__menuLeft__banner {\n    display: none;\n  }\n  .air__menuLeft__compact .air__menuLeft__submenu__active {\n    background: #1b55e3;\n  }\n  .air__menuLeft__compact .air__menuLeft__submenu > .air__menuLeft__list {\n    display: none !important;\n  }\n  .air__menuLeft__compact .air__menuLeft__link {\n    text-align: center;\n    padding: 0.6rem 1.33rem;\n  }\n  .air__menuLeft__compact .air__menuLeft__link > span {\n    display: block;\n    float: none !important;\n  }\n  .air__menuLeft__compact .air__menuLeft__link > span:global(.badge) {\n    display: inline-block;\n  }\n  .air__menuLeft__compact .air__menuLeft__link:before {\n    right: 1.2rem;\n    top: 50%;\n    margin-top: 2px;\n  }\n  .air__menuLeft__compact .air__menuLeft__link:after {\n    right: 1.2rem;\n    top: 50%;\n    margin-top: -1px;\n  }\n  .air__menuLeft__compact .air__menuLeft__icon {\n    width: 2.66rem;\n    display: block;\n    margin: 0 auto 0.33rem;\n    text-align: center;\n  }\n  .air__menuLeft__compact .air__menuLeft__category {\n    display: none;\n  }\n}\n.air__menuLeft__unfixed {\n  display: -webkit-box;\n  display: flex;\n}\n.air__menuLeft__unfixed .air__menuLeft__outer {\n  height: auto;\n  position: static;\n}\n.air__menuLeft__shadow {\n  box-shadow: 0 0 100px -30px rgba(57, 55, 73, 0.3);\n}\n.air__menuLeft__blue {\n  background: #1b55e3;\n}\n.air__menuLeft__blue .air__menuLeft__toggleButton span:first-child:before, .air__menuLeft__blue .air__menuLeft__toggleButton span:first-child:after {\n  background: #fff;\n}\n.air__menuLeft__blue .air__menuLeft__toggleButton span:last-child:before, .air__menuLeft__blue .air__menuLeft__toggleButton span:last-child:after {\n  background: #fff;\n}\n.air__menuLeft__blue .air__menuLeft__category:after {\n  background: rgba(242, 244, 248, 0.1);\n}\n.air__menuLeft__blue .air__menuLeft__link {\n  color: #e4e9f0;\n}\n.air__menuLeft__blue .air__menuLeft__link:hover {\n  color: #1b55e3;\n}\n.air__menuLeft__blue .air__menuLeft__link:hover:before, .air__menuLeft__blue .air__menuLeft__link:hover:after {\n  background: #fff !important;\n}\n.air__menuLeft__blue .air__menuLeft__submenu__active {\n  background: #184ccc;\n}\n.air__menuLeft__blue .air__menuLeft__submenu__active > .air__menuLeft__link {\n  color: #fff;\n}\n.air__menuLeft__blue .air__menuLeft__submenu__active > .air__menuLeft__link:before, .air__menuLeft__blue .air__menuLeft__submenu__active > .air__menuLeft__link:after {\n  background: #fff !important;\n}\n.air__menuLeft__blue .air__menuLeft__submenu > .air__menuLeft__link:before, .air__menuLeft__blue .air__menuLeft__submenu > .air__menuLeft__link:after {\n  background: #aca6cc;\n}\n.air__menuLeft__blue .air__menuLeft__category, .air__menuLeft__blue .air__menuLeft__user__role {\n  color: #aca6cc;\n}\n.air__menuLeft__blue .air__menuLeft__banner {\n  box-shadow: 0 8px 15px -5px rgba(0, 0, 0, 0.3);\n}\n.air__menuLeft__gray {\n  background: #f2f4f8;\n}\n.air__menuLeft__gray .air__menuLeft__category:after {\n  background: #e5e9f1;\n}\n.air__menuLeft__gray .air__menuLeft__link {\n  color: #786fa4;\n}\n.air__menuLeft__gray .air__menuLeft__link:hover {\n  color: #fff;\n  background: #1b55e3;\n}\n.air__menuLeft__gray .air__menuLeft__link:hover:before, .air__menuLeft__gray .air__menuLeft__link:hover:after {\n  background: #fff !important;\n}\n.air__menuLeft__gray .air__menuLeft__item__active .air__menuLeft__link {\n  color: #fff;\n}\n.air__menuLeft__gray .air__menuLeft__submenu__active {\n  background: #e4e9f0;\n}\n.air__menuLeft__gray .air__menuLeft__submenu__active > .air__menuLeft__link .air__menuLeft__icon {\n  color: #786fa4;\n}\n.air__menuLeft__gray .air__menuLeft__submenu__active > .air__menuLeft__link:hover .air__menuLeft__icon {\n  color: #fff;\n}\n.air__menuLeft__toggled.air__menuLeft__gray .air__menuLeft__submenu__active {\n  background: #e4e9f0 !important;\n}\n.air__menuLeft__gray .air__menuLeft__submenu > .air__menuLeft__link:before, .air__menuLeft__gray .air__menuLeft__submenu > .air__menuLeft__link:after {\n  background: #aca6cc;\n}\n.air__menuLeft__gray .air__menuLeft__category, .air__menuLeft__gray .air__menuLeft__user__name {\n  color: #786fa4;\n}\n.air__menuLeft__gray .air__menuLeft__user__role {\n  color: #aca6cc;\n}\n.air__menuLeft__gray .air__menuLeft__logo__name {\n  color: #161537;\n}\n.air__menuLeft__gray .air__menuLeft__banner {\n  box-shadow: 0 8px 15px -5px rgba(0, 0, 0, 0.3);\n}\n.air__menuLeft__white {\n  background: #fff;\n}\n.air__menuLeft__white .air__menuLeft__category:after {\n  background: #f2f4f8;\n}\n.air__menuLeft__white .air__menuLeft__link {\n  color: #786fa4;\n}\n.air__menuLeft__white .air__menuLeft__link:hover {\n  color: #fff;\n  background: #1b55e3;\n}\n.air__menuLeft__white .air__menuLeft__link:hover:before, .air__menuLeft__white .air__menuLeft__link:hover:after {\n  background: #fff !important;\n}\n.air__menuLeft__white .air__menuLeft__item__active .air__menuLeft__link {\n  color: #fff;\n}\n.air__menuLeft__white .air__menuLeft__submenu__active {\n  background: #f2f4f8;\n}\n.air__menuLeft__white .air__menuLeft__submenu__active > .air__menuLeft__link .air__menuLeft__icon {\n  color: #786fa4;\n}\n.air__menuLeft__white .air__menuLeft__submenu__active > .air__menuLeft__link:hover .air__menuLeft__icon {\n  color: #fff;\n}\n.air__menuLeft__toggled.air__menuLeft__white .air__menuLeft__submenu__active {\n  background: #f2f4f8 !important;\n}\n.air__menuLeft__white .air__menuLeft__submenu > .air__menuLeft__link:before, .air__menuLeft__white .air__menuLeft__submenu > .air__menuLeft__link:after {\n  background: #aca6cc;\n}\n.air__menuLeft__white .air__menuLeft__category, .air__menuLeft__white .air__menuLeft__user__name {\n  color: #786fa4;\n}\n.air__menuLeft__white .air__menuLeft__user__role {\n  color: #aca6cc;\n}\n.air__menuLeft__white .air__menuLeft__logo__name {\n  color: #161537;\n}\n.air__menuLeft__white .air__menuLeft__banner {\n  box-shadow: 0 8px 15px -5px rgba(0, 0, 0, 0.3);\n}\n@media (min-width: 768px) {\n  .air__menuLeft__flyout:not(.air__menuLeft__toggled) .air__menuLeft__submenu__active {\n    background: #1b55e3;\n  }\n  .air__menuLeft__flyout:not(.air__menuLeft__toggled) .air__menuLeft__submenu__active > .air__menuLeft__link {\n    color: #fff;\n  }\n  .air__menuLeft__flyout:not(.air__menuLeft__toggled) .air__menuLeft__submenu__active > .air__menuLeft__link .air__menuLeft__icon {\n    color: #fff;\n  }\n  .air__menuLeft__flyout:not(.air__menuLeft__toggled) .air__menuLeft__submenu > .air__menuLeft__list {\n    display: none !important;\n  }\n  .air__menuLeft__flyout:not(.air__menuLeft__toggled) .air__menuLeft__link:before {\n    right: 1.2rem;\n    top: 50%;\n  }\n  .air__menuLeft__flyout:not(.air__menuLeft__toggled) .air__menuLeft__link:after {\n    right: 1.2rem;\n    top: 50%;\n    margin-top: -3px;\n  }\n  .air__menuLeft__flyout .air__menuLeft__link:hover, .air__menuLeft__compact .air__menuLeft__link:hover, .air__menuLeft__toggled .air__menuLeft__link:hover {\n    background: #1b55e3;\n  }\n  .air__menuLeft__flyout.air__menuFlyout__black .air__menuLeft__link:hover, .air__menuLeft__compact.air__menuFlyout__black .air__menuLeft__link:hover, .air__menuLeft__toggled.air__menuFlyout__black .air__menuLeft__link:hover {\n    background: #161537;\n  }\n  .air__menuLeft__flyout.air__menuFlyout__gray .air__menuLeft__link:hover, .air__menuLeft__compact.air__menuFlyout__gray .air__menuLeft__link:hover, .air__menuLeft__toggled.air__menuFlyout__gray .air__menuLeft__link:hover {\n    background: #f2f4f8;\n    color: #1b55e3;\n  }\n  .air__menuLeft__flyout.air__menuFlyout__gray .air__menuLeft__link:hover:before, .air__menuLeft__flyout.air__menuFlyout__gray .air__menuLeft__link:hover:after, .air__menuLeft__compact.air__menuFlyout__gray .air__menuLeft__link:hover:before, .air__menuLeft__compact.air__menuFlyout__gray .air__menuLeft__link:hover:after, .air__menuLeft__toggled.air__menuFlyout__gray .air__menuLeft__link:hover:before, .air__menuLeft__toggled.air__menuFlyout__gray .air__menuLeft__link:hover:after {\n    background: #1b55e3;\n  }\n  .air__menuLeft__flyout.air__menuFlyout__white .air__menuLeft__link:hover, .air__menuLeft__compact.air__menuFlyout__white .air__menuLeft__link:hover, .air__menuLeft__toggled.air__menuFlyout__white .air__menuLeft__link:hover {\n    background: #fff;\n    color: #1b55e3;\n  }\n  .air__menuLeft__flyout.air__menuFlyout__white .air__menuLeft__link:hover:before, .air__menuLeft__flyout.air__menuFlyout__white .air__menuLeft__link:hover:after, .air__menuLeft__compact.air__menuFlyout__white .air__menuLeft__link:hover:before, .air__menuLeft__compact.air__menuFlyout__white .air__menuLeft__link:hover:after, .air__menuLeft__toggled.air__menuFlyout__white .air__menuLeft__link:hover:before, .air__menuLeft__toggled.air__menuFlyout__white .air__menuLeft__link:hover:after {\n    background: #1b55e3;\n  }\n  .air__menuFlyout {\n    position: fixed;\n    z-index: 3000;\n    top: 100px;\n    box-shadow: 0 0 40px -10px rgba(22, 21, 55, 0.4);\n    background: #1b55e3;\n    -webkit-transform: translate3d(0, calc(-50% + 20px), 0);\n            transform: translate3d(0, calc(-50% + 20px), 0);\n    -webkit-transition: -webkit-transform 0.1s ease-in-out !important;\n    transition: -webkit-transform 0.1s ease-in-out !important;\n    transition: transform 0.1s ease-in-out !important;\n    transition: transform 0.1s ease-in-out, -webkit-transform 0.1s ease-in-out !important;\n    -webkit-transition-delay: 0 !important;\n            transition-delay: 0 !important;\n    -webkit-transform-origin: 0 0;\n            transform-origin: 0 0;\n  }\n  .air__menuFlyout .air__menuLeft__list {\n    max-width: 36rem;\n    display: block !important;\n    height: auto !important;\n  }\n  .air__menuFlyout .air__menuLeft__item {\n    float: left;\n    width: 12rem;\n    border-left: 1px solid rgba(242, 244, 248, 0.1);\n    border-bottom: 1px solid rgba(242, 244, 248, 0.1);\n  }\n  .air__menuFlyout .air__menuLeft__item:nth-child(3n+1) {\n    border-left: none;\n  }\n  .air__menuFlyout .air__menuLeft__item__active .air__menuLeft__link {\n    background: rgba(242, 244, 248, 0.1);\n  }\n  .air__menuFlyout .air__menuLeft__link {\n    color: #fff;\n    padding: 1rem 2rem;\n  }\n  .air__menuFlyout .air__menuLeft__link:hover {\n    background: rgba(242, 244, 248, 0.1);\n  }\n  .air__menuFlyout .air__menuLeft__link > span {\n    display: block !important;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n    overflow: hidden;\n  }\n}\n@media (min-width: 768px) and (min-width: 768px) {\n  .air__menuFlyout__black.air__menuFlyout {\n    background: #161537;\n  }\n  .air__menuFlyout__white .air__menuLeft__link:hover:before, .air__menuFlyout__white .air__menuLeft__link:hover:after {\n    background: #1b55e3 !important;\n  }\n  .air__menuFlyout__white .air__menuLeft__submenu__active > .air__menuLeft__link:hover {\n    color: #1b55e3;\n  }\n  .air__menuFlyout__white .air__menuLeft__submenu__active > .air__menuLeft__link:hover .air__menuLeft__icon {\n    color: #1b55e3;\n  }\n  .air__menuFlyout__white.air__menuFlyout {\n    background: #fff;\n    box-shadow: 0 4px 38px 0 rgba(22, 21, 55, 0.11), 0 0 21px 0 rgba(22, 21, 55, 0.05);\n  }\n  .air__menuFlyout__white.air__menuFlyout .air__menuLeft__item {\n    border-left: 1px solid #f2f4f8;\n    border-bottom: 1px solid #f2f4f8;\n  }\n  .air__menuFlyout__white.air__menuFlyout .air__menuLeft__link {\n    color: #1b55e3;\n  }\n  .air__menuFlyout__white.air__menuFlyout .air__menuLeft__link:hover {\n    color: #1644b5;\n    background: rgba(221, 226, 236, 0.3);\n  }\n  .air__menuFlyout__white.air__menuFlyout .air__menuLeft__link:hover__active .air__menuLeft__link {\n    background: rgba(221, 226, 236, 0.3);\n  }\n  .air__menuFlyout__gray .air__menuLeft__link:hover:before, .air__menuFlyout__gray .air__menuLeft__link:hover:after {\n    background: #1b55e3 !important;\n  }\n  .air__menuFlyout__gray .air__menuLeft__submenu__active > .air__menuLeft__link:hover {\n    color: #1b55e3;\n  }\n  .air__menuFlyout__gray .air__menuLeft__submenu__active > .air__menuLeft__link:hover .air__menuLeft__icon {\n    color: #1b55e3;\n  }\n  .air__menuFlyout__gray.air__menuFlyout {\n    background: #f2f4f8;\n    box-shadow: 0 4px 38px 0 rgba(22, 21, 55, 0.11), 0 0 21px 0 rgba(22, 21, 55, 0.05);\n  }\n  .air__menuFlyout__gray.air__menuFlyout .air__menuLeft__item {\n    border-left: 1px solid #e5e9f1;\n    border-bottom: 1px solid #e5e9f1;\n  }\n  .air__menuFlyout__gray.air__menuFlyout .air__menuLeft__item__active .air__menuLeft__link {\n    background: rgba(221, 226, 236, 0.3);\n  }\n  .air__menuFlyout__gray.air__menuFlyout .air__menuLeft__link {\n    color: #1b55e3;\n  }\n  .air__menuFlyout__gray.air__menuFlyout .air__menuLeft__link:hover {\n    color: #1644b5;\n    background: rgba(221, 226, 236, 0.3);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYXNzZXQvbW9kZWwtZGV0YWlsL0U6XFxQUk9KRUtcXERFUkFaT05BXFxkZXZldGVrLWVycC9zcmNcXGFwcFxccGFnZXNcXGFzc2V0XFxtb2RlbC1kZXRhaWxcXG1vZGVsLWRldGFpbC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvYXNzZXQvbW9kZWwtZGV0YWlsL21vZGVsLWRldGFpbC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvYXNzZXQvbW9kZWwtZGV0YWlsL0U6XFxQUk9KRUtcXERFUkFaT05BXFxkZXZldGVrLWVycC9zcmNcXGFzc2V0c1xcc3R5bGVzXFxtaXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQ0NKO0FEQ0k7RUFDSSxrQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7QUNDUjtBRElBO0VBQ0ksbUJBQUE7VUFBQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLG1CRWhCSTtFRmlCSixnQkFBQTtBQ0RKO0FERUk7RUFSSjtJQVNRLGVBQUE7SUFDQSxZQUFBO0lBQ0EsTUFBQTtJQUNBLE9BQUE7SUFDQSxTQUFBO0lBQ0EsaUJBQUE7SUFDQSxtQkFBQTtJQUNBLHNEQUFBO0lBQUEsOENBQUE7SUFBQSxzQ0FBQTtJQUFBLDBFQUFBO0VDQ047RURBTTtJQUNJLHlCQUFBO0VDRVY7RURBTTtJQUNJLGFBQUE7RUNFVjtFRENVO0lBQ0ksb0NBQUE7WUFBQSw0QkFBQTtFQ0NkO0FBQ0Y7QURHSTtFQUNJLGVBQUE7RUFDQSxhQUFBO0VBQ0EsTUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtVQUFBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtBQ0RSO0FESUk7RUFDSSx1QkFBQTtBQ0ZSO0FESUk7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLE9BQUE7RUFDQSxtQkUvREE7RUZnRUEsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsNENBQUE7RUFBQSxvQ0FBQTtBQ0ZSO0FESVk7RUFDSTtJQUNJLFlBQUE7SUFDQSxtQkFBQTtFQ0ZsQjtBQUNGO0FET0k7RUFDSSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxtQkVuRkE7RUZvRkEsMEJBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0ZFbkRHO0FEOENYO0FETVE7RUFDSSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkUvRko7RUZnR0ksd0VBQUE7RUFBQSxnRUFBQTtFQUNBLFFBQUE7QUNKWjtBRE1nQjtFQUNJLHVCQUFBO0FDSnBCO0FES29CO0VBQ0ksZ0RBQUE7VUFBQSx3Q0FBQTtBQ0h4QjtBREtvQjtFQUNJLGtEQUFBO1VBQUEsMENBQUE7QUNIeEI7QURPWTtFQUVJLFdBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkVsSFI7RUZtSFEsV0FBQTtFQUNBLFdBQUE7RUFDQSwrRUFBQTtFQUFBLHVFQUFBO0VBQUEsK0RBQUE7RUFBQSw0SEFBQTtBQ0xoQjtBRE9ZO0VBQ0ksU0FBQTtBQ0xoQjtBRE9ZO0VBQ0ksUUFBQTtBQ0xoQjtBRFVJO0VBUUksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUNmUjtBRElnQjtFQUNJLGlDQUFBO1VBQUEseUJBQUE7QUNGcEI7QURjWTtFQUNJLHFCQUFBO0FDWGhCO0FEY1E7RUVwRk4sd0NBQUE7RUFBQSxnQ0FBQTtFRnNGVSxZQUFBO0FDWlo7QURhWTtFQUVJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLG1CRTVKVDtFRjZKUyxrQkFBQTtBQ1poQjtBRGNZO0VBQ0ksU0FBQTtFQUNBLFNBQUE7RUFDQSxpQ0FBQTtVQUFBLHlCQUFBO0FDWmhCO0FEY1k7RUFDSSxTQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO1VBQUEsd0JBQUE7QUNaaEI7QURjWTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtBQ1poQjtBRGNZO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtBQ1poQjtBRGlCSTtFQUNJLGNBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FDZlI7QURnQlE7RUFDSSxXQUFBO0VBQ0EsbUJBQUE7QUNkWjtBRGdCUTtFQUNJLGdCQUFBO0VBQ0EsV0VsTUo7RUZtTUksZUFBQTtFQUNBLG9CQUFBO0FDZFo7QURnQlE7RUFDSSxjRWhNSDtFRmlNRyxvQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0FDZFo7QURrQkk7RUFDSSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUNoQlI7QURpQlE7RUFDSSxXQUFBO0FDZlo7QURpQlE7RUFDSSxpQkFBQTtFQUNBLFdFek5KO0VGME5JLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDZlo7QURpQlE7RUFDSSxpQkFBQTtFQUNBLGNFeE5IO0VGeU5HLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ2ZaO0FEbUJJO0VBQ0ksK0JBQUE7RUFDQSxtQkV4T0Q7RUZ5T0MsNERBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0U5T0E7RUYrT0EsaUNBQUE7QUNqQlI7QURvQkk7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0FDbEJSO0FEb0JZO0VBQ0kscUJBQUE7QUNsQmhCO0FEc0JJO0VBQ0kseUJBQUE7RUFDQSxjRXJQQztFRnNQRCxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esd0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDcEJSO0FEcUJRO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtBQ25CWjtBRHNCSTtFQUNJLGNBQUE7QUNwQlI7QURzQlk7RUFDSSxtQkVqUlQ7RUZrUlMsV0VwUlI7QURnUVI7QURxQmdCO0VBQ0ksV0V0Ulo7QURtUVI7QUR5QlE7RUFDSSxrQkFBQTtBQ3ZCWjtBRHdCWTtFQUVJLFdBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsbUJFOVJQO0VGK1JPLGlDQUFBO1VBQUEseUJBQUE7RUVwUGQsK0NBQUE7RUFBQSx1Q0FBQTtBRDhORjtBRHlCWTtFQUNJLGFBQUE7RUFDQSxnQ0FBQTtVQUFBLHdCQUFBO0FDdkJoQjtBRDBCUTtFQUNJLG1CQUFBO0FDeEJaO0FEeUJZO0VBQ0ksV0VuVFI7QUQ0UlI7QUR3QmdCO0VBRUksZ0JFdFRaO0FEK1JSO0FEeUJnQjtFQUNJLFdFelRaO0FEa1NSO0FEMEJZO0VBQ0kseUJBQUE7QUN4QmhCO0FEMkJRO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0FDekJaO0FENEJJO0VBQ0ksY0U5VEM7RUYrVEQsY0FBQTtFQUNBLHNDQUFBO0VBQ0EsZUFBQTtBQzFCUjtBRDJCUTtFQUVJLGNFMVVMO0FEZ1RQO0FEMkJZO0VBRUksZ0JFL1VSO0FEcVRSO0FEOEJJO0VBQ0kscUJBQUE7RUFDQSxjQUFBO0FDNUJSO0FEZ0NRO0VBQ0k7SUFDSSxtQkFBQTtZQUFBLGNBQUE7SUFDQSxlQUFBO0lBQ0EsZUFBQTtJQUNBLFdBQUE7RUM5QmQ7RURnQ2tCO0lBQ0ksbUJBQUE7WUFBQSxjQUFBO0lBQ0EsZUFBQTtJQUNBLGVBQUE7SUFDQSxXQUFBO0VDOUJ0QjtFRGdDa0I7SUFDSSxrQkFBQTtFQzlCdEI7RURnQ2tCO0lBQ0ksY0FBQTtFQzlCdEI7RURpQ3NCO0lBRUksYUFBQTtFQ2hDMUI7RURtQ2tCO0lBQ0ksYUFBQTtFQ2pDdEI7RURvQ3NCO0lBQ0ksbUJFclhyQjtFRG1WTDtFRG9Dc0I7SUFDSSx3QkFBQTtFQ2xDMUI7RURzQ3NCO0lBQ0ksYUFBQTtFQ3BDMUI7RURzQ3NCO0lBQ0ksYUFBQTtJQUNBLFdBQUE7RUNwQzFCO0VEc0NzQjtJQUNJLGFBQUE7SUFDQSxXQUFBO0VDcEMxQjtFRHVDa0I7SUFDSSxjQUFBO0lBQ0Esa0JBQUE7RUNyQ3RCO0VEdUNrQjtJQUNJLG1CQUFBO0VDckN0QjtFRHNDc0I7SUFDSSxjQUFBO0VDcEMxQjtBQUNGO0FENENRO0VBQ0k7SUFDSSxtQkFBQTtZQUFBLGVBQUE7SUFDQSxnQkFBQTtJQUNBLGdCQUFBO0lBQ0EsWUFBQTtFQzFDZDtFRDRDa0I7SUFDSSxtQkFBQTtZQUFBLGVBQUE7SUFDQSxnQkFBQTtJQUNBLGdCQUFBO0lBQ0EsWUFBQTtFQzFDdEI7RUQ0Q2tCO0lBQ0ksa0JBQUE7RUMxQ3RCO0VEMkNzQjtJQUNJLFdBQUE7RUN6QzFCO0VEMkNzQjtJQUVJLGFBQUE7RUMxQzFCO0VENkNrQjtJQUNJLGFBQUE7RUMzQ3RCO0VENkNrQjtJQUNJLFlBQUE7SUFDQSxrQkFBQTtFQzNDdEI7RUQ0Q3NCO0lBQ0ksV0FBQTtJQUNBLHNCQUFBO0VDMUMxQjtFRDRDc0I7SUFFSSxjQUFBO0lBQ0EsY0FBQTtFQzNDMUI7RUQ4Q2tCO0lBQ0ksYUFBQTtFQzVDdEI7RUQrQ3NCO0lBQ0ksbUJFcGNyQjtFRHVaTDtFRCtDc0I7SUFDSSx3QkFBQTtFQzdDMUI7RURnRGtCO0lBQ0ksa0JBQUE7SUFDQSx1QkFBQTtFQzlDdEI7RUQrQ3NCO0lBQ0ksY0FBQTtJQUNBLHNCQUFBO0VDN0MxQjtFRDhDMEI7SUFDSSxxQkFBQTtFQzVDOUI7RUQrQ3NCO0lBQ0ksYUFBQTtJQUNBLFFBQUE7SUFDQSxlQUFBO0VDN0MxQjtFRCtDc0I7SUFDSSxhQUFBO0lBQ0EsUUFBQTtJQUNBLGdCQUFBO0VDN0MxQjtFRGdEa0I7SUFDSSxjQUFBO0lBQ0EsY0FBQTtJQUNBLHNCQUFBO0lBQ0Esa0JBQUE7RUM5Q3RCO0VEZ0RrQjtJQUNJLGFBQUE7RUM5Q3RCO0FBQ0Y7QURxRFE7RUFDSSxvQkFBQTtFQUFBLGFBQUE7QUNuRFo7QURvRFk7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7QUNsRGhCO0FEd0RRO0VBQ0ksaURFcGREO0FEK1pYO0FEMkRRO0VBQ0ksbUJFaGdCTDtBRHdjUDtBRDREd0I7RUFFSSxnQkV4Z0JwQjtBRDZjUjtBRCtEd0I7RUFFSSxnQkU5Z0JwQjtBRGdkUjtBRG1Fb0I7RUFDSSxvQ0FBQTtBQ2pFeEI7QURvRWdCO0VBQ0ksY0VuaEJYO0FEaWRUO0FEbUVvQjtFQUNJLGNFeGhCakI7QUR1ZFA7QURrRXdCO0VBRUksMkJBQUE7QUNqRTVCO0FEc0VvQjtFQUNJLG1CQUFBO0FDcEV4QjtBRHFFd0I7RUFDSSxXRXJpQnBCO0FEa2VSO0FEb0U0QjtFQUVJLDJCQUFBO0FDbkVoQztBRHdFd0I7RUFFSSxtQkV2aUJuQjtBRGdlVDtBRDJFZ0I7RUFFSSxjRTdpQlg7QURtZVQ7QUQ0RWdCO0VBQ0ksOENBQUE7QUMxRXBCO0FEK0VRO0VBQ0ksbUJFMWpCSDtBRDhlVDtBRCtFb0I7RUFDSSxtQkFBQTtBQzdFeEI7QURnRmdCO0VBQ0ksY0U3akJYO0FEK2VUO0FEK0VvQjtFQUNJLFdFeGtCaEI7RUZ5a0JnQixtQkV2a0JqQjtBRDBmUDtBRDhFd0I7RUFFSSwyQkFBQTtBQzdFNUI7QURtRndCO0VBQ0ksV0VubEJwQjtBRGtnQlI7QURzRm9CO0VBQ0ksbUJFcGxCZjtBRGdnQlQ7QURzRjRCO0VBQ0ksY0VubEJ2QjtBRCtmVDtBRHVGZ0M7RUFDSSxXRWhtQjVCO0FEMmdCUjtBRDJGZ0M7RUFDSSw4QkFBQTtBQ3pGcEM7QUQrRndCO0VBRUksbUJFdm1CbkI7QUQwZ0JUO0FEaUdnQjtFQUVJLGNFNW1CWDtBRDRnQlQ7QURrR2dCO0VBQ0ksY0VobkJYO0FEZ2hCVDtBRGtHZ0I7RUFDSSxjRTFuQlo7QUQwaEJSO0FEa0dnQjtFQUNJLDhDQUFBO0FDaEdwQjtBRHFHUTtFQUNJLGdCRXBvQko7QURraUJSO0FEcUdvQjtFQUNJLG1CRXBvQmY7QURpaUJUO0FEc0dnQjtFQUNJLGNFbm9CWDtBRCtoQlQ7QURxR29CO0VBQ0ksV0U5b0JoQjtFRitvQmdCLG1CRTdvQmpCO0FEMGlCUDtBRG9Hd0I7RUFFSSwyQkFBQTtBQ25HNUI7QUR5R3dCO0VBQ0ksV0V6cEJwQjtBRGtqQlI7QUQ0R29CO0VBQ0ksbUJFM3BCZjtBRGlqQlQ7QUQ0RzRCO0VBQ0ksY0V6cEJ2QjtBRCtpQlQ7QUQ2R2dDO0VBQ0ksV0V0cUI1QjtBRDJqQlI7QURpSGdDO0VBQ0ksOEJBQUE7QUMvR3BDO0FEcUh3QjtFQUVJLG1CRTdxQm5CO0FEMGpCVDtBRHVIZ0I7RUFFSSxjRWxyQlg7QUQ0akJUO0FEd0hnQjtFQUNJLGNFdHJCWDtBRGdrQlQ7QUR3SGdCO0VBQ0ksY0Voc0JaO0FEMGtCUjtBRHdIZ0I7RUFDSSw4Q0FBQTtBQ3RIcEI7QUQ0SEk7RUFJZ0I7SUFDSSxtQkU3c0JqQjtFRGlsQkw7RUQ2SHNCO0lBQ0ksV0VqdEJwQjtFRHNsQk47RUQ0SDBCO0lBQ0ksV0VudEJ4QjtFRHlsQk47RUQ4SGtCO0lBQ0ksd0JBQUE7RUM1SHRCO0VEZ0lrQjtJQUNJLGFBQUE7SUFDQSxRQUFBO0VDOUh0QjtFRGdJa0I7SUFDSSxhQUFBO0lBQ0EsUUFBQTtJQUNBLGdCQUFBO0VDOUh0QjtFRDBJa0I7SUFDSSxtQkU5dUJqQjtFRHNtQkw7RURpSjBCO0lBQ0ksbUJFenZCeEI7RUQwbUJOO0VEd0owQjtJQUNJLG1CRWh3QnZCO0lGaXdCdUIsY0Vud0J6QjtFRDZtQkw7RUR1SjhCO0lBRUksbUJFdHdCN0I7RURnbkJMO0VEZ0swQjtJQUNJLGdCRW54QnhCO0lGb3hCd0IsY0VseEJ6QjtFRG9uQkw7RUQrSjhCO0lBRUksbUJFcnhCN0I7RUR1bkJMO0VEd0tVO0lBQ0ksZUFBQTtJQUNBLGFBQUE7SUFDQSxVQUFBO0lBQ0EsZ0RFNXZCTDtJRjZ2QkssbUJFcHlCVDtJRnF5QlMsdURBQUE7WUFBQSwrQ0FBQTtJQUNBLGlFQUFBO0lBQUEseURBQUE7SUFBQSxpREFBQTtJQUFBLHFGQUFBO0lBQ0Esc0NBQUE7WUFBQSw4QkFBQTtJQUNBLDZCQUFBO1lBQUEscUJBQUE7RUN0S2Q7RUR3S2tCO0lBQ0ksZ0JBQUE7SUFDQSx5QkFBQTtJQUNBLHVCQUFBO0VDdEt0QjtFRHdLa0I7SUFDSSxXQUFBO0lBQ0EsWUFBQTtJQUNBLCtDQUFBO0lBQ0EsaURBQUE7RUN0S3RCO0VEdUtzQjtJQUNJLGlCQUFBO0VDcksxQjtFRHdLMEI7SUFDSSxvQ0FBQTtFQ3RLOUI7RUQwS2tCO0lBQ0ksV0VoMEJoQjtJRmkwQmdCLGtCQUFBO0VDeEt0QjtFRHlLc0I7SUFDSSxvQ0FBQTtFQ3ZLMUI7RUR5S3NCO0lBQ0kseUJBQUE7SUFDQSxtQkFBQTtJQUNBLHVCQUFBO0lBQ0EsZ0JBQUE7RUN2SzFCO0FBQ0Y7QUQ0S29CO0VBSVk7SUFDSSxtQkVuMUI1QjtFRHNxQk47RURxTDBDO0lBRUksOEJBQUE7RUNwTDlDO0VEMkw4QztJQUNJLGNFcDJCN0M7RUQycUJMO0VEMExrRDtJQUNJLGNFdDJCakQ7RUQ4cUJMO0VEK0w4QjtJQUNJLGdCRWgzQjVCO0lGaTNCNEIsa0ZFMzBCekI7RUQ4b0JUO0VEK0xzQztJQUNJLDhCQUFBO0lBQ0EsZ0NBQUE7RUM3TDFDO0VEK0xzQztJQUNJLGNFdDNCckM7RUR5ckJMO0VEOEwwQztJQUNJLGNBQUE7SUFDQSxvQ0FBQTtFQzVMOUM7RUQ4TGtEO0lBQ0ksb0NBQUE7RUM1THREO0VEeU0wQztJQUVJLDhCQUFBO0VDeE05QztFRCtNOEM7SUFDSSxjRW41QjdDO0VEc3NCTDtFRDhNa0Q7SUFDSSxjRXI1QmpEO0VEeXNCTDtFRG1OOEI7SUFDSSxtQkUzNUIzQjtJRjQ1QjJCLGtGRTEzQnpCO0VEeXFCVDtFRG1Oc0M7SUFDSSw4QkFBQTtJQUNBLGdDQUFBO0VDak4xQztFRG1OOEM7SUFDSSxvQ0FBQTtFQ2pObEQ7RURxTnNDO0lBQ0ksY0UxNkJyQztFRHV0Qkw7RURvTjBDO0lBQ0ksY0FBQTtJQUNBLG9DQUFBO0VDbE45QztBQUNGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYXNzZXQvbW9kZWwtZGV0YWlsL21vZGVsLWRldGFpbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5haXJfX3V0aWxzX19hdmF0YXIge1xyXG4gICAgaGVpZ2h0OiAxODBweDtcclxuICAgIHdpZHRoOiAxODBweDtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuXHJcbiAgICBpbWcge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IHJlbSg1KTtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIH1cclxufVxyXG5cclxuQGltcG9ydCAnc3JjL2Fzc2V0cy9zdHlsZXMvbWl4aW5zLnNjc3MnO1xyXG4uYWlyX19tZW51TGVmdCB7XHJcbiAgICBmbGV4OiAwIDAgMjQwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDI0MHB4O1xyXG4gICAgbWluLXdpZHRoOiAyNDBweDtcclxuICAgIHdpZHRoOiAyNDBweDtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiAkYmxhY2s7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6ICRzbS1tYXgtd2lkdGgpIHtcclxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgei1pbmRleDogOTk3O1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICBvdmVyZmxvdzogdmlzaWJsZTtcclxuICAgICAgICBtYXJnaW4tbGVmdDogLTI0MHB4O1xyXG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIGVhc2UtaW4tb3V0O1xyXG4gICAgICAgICZfX21vYmlsZVRvZ2dsZUJ1dHRvbiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICZfX3RvZ2dsZUJ1dHRvbiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIEBhdC1yb290IHtcclxuICAgICAgICAgICAgLmFpcl9fbWVudUxlZnRfX21vYmlsZVRvZ2dsZWQge1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI0MHB4KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIGZpeGVkIGNvbnRhaW5lclxyXG4gICAgJl9fb3V0ZXIge1xyXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICB6LWluZGV4OiAxMDAwO1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgZmxleDogMCAwIDI0MHB4O1xyXG4gICAgICAgIG1heC13aWR0aDogMjQwcHg7XHJcbiAgICAgICAgbWluLXdpZHRoOiAyNDBweDtcclxuICAgICAgICB3aWR0aDogMjQwcHg7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgfVxyXG4gICAgLy8gbWVudSBjb250YWluZXJcclxuICAgICZfX2NvbnRhaW5lciB7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IHJlbSgyMCk7XHJcbiAgICB9XHJcbiAgICAmX19iYWNrZHJvcCB7XHJcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgIHotaW5kZXg6IDk5NjtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgYmFja2dyb3VuZDogJGJsYWNrO1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4ycyBlYXNlLWluLW91dDtcclxuICAgICAgICBAYXQtcm9vdCB7XHJcbiAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkc20tbWF4LXdpZHRoKSB7XHJcbiAgICAgICAgICAgICAgICAuYWlyX19tZW51TGVmdF9fbW9iaWxlVG9nZ2xlZCArICYge1xyXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuMjtcclxuICAgICAgICAgICAgICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gbW9iaWxlIHRvZ2dsZSBidXR0b25cclxuICAgICZfX21vYmlsZVRvZ2dsZUJ1dHRvbiB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHJpZ2h0OiByZW0oLTQwKTtcclxuICAgICAgICB0b3A6IHJlbSgxNDIpO1xyXG4gICAgICAgIHdpZHRoOiByZW0oNDApO1xyXG4gICAgICAgIGhlaWdodDogcmVtKDQwKTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAkYmxhY2s7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMCA1cHggNXB4IDA7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGJveC1zaGFkb3c6ICRzaGFkb3ctMjtcclxuICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICB3aWR0aDogMTRweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAycHg7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogJHdoaXRlO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuM3MgY3ViaWMtYmV6aWVyKDAuNzgsIDAuMTQsIDAuMTUsIDAuODYpO1xyXG4gICAgICAgICAgICB0b3A6IDVweDtcclxuICAgICAgICAgICAgQGF0LXJvb3Qge1xyXG4gICAgICAgICAgICAgICAgLmFpcl9fbWVudUxlZnRfX21vYmlsZVRvZ2dsZWQgJiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgJjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNXB4KSByb3RhdGUoNDVkZWcpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAmOmFmdGVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01cHgpIHJvdGF0ZSgtNDVkZWcpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmOmJlZm9yZSxcclxuICAgICAgICAgICAgJjphZnRlciB7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiAnJztcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDJweDtcclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGN1YmljLWJlemllcigwLjc4LCAwLjE0LCAwLjE1LCAwLjg2KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmOmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICB0b3A6IC01cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJjphZnRlciB7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIHRvZ2dsZSBidXR0b25cclxuICAgICZfX3RvZ2dsZUJ1dHRvbiB7XHJcbiAgICAgICAgQGF0LXJvb3Qge1xyXG4gICAgICAgICAgICAuYWlyX19tZW51TGVmdF9fdG9nZ2xlZCB7XHJcbiAgICAgICAgICAgICAgICAuYWlyX19tZW51TGVmdF9fdG9nZ2xlQnV0dG9uIHtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IHJlbSgxMik7XHJcbiAgICAgICAgcmlnaHQ6IHJlbSgxMCk7XHJcbiAgICAgICAgei1pbmRleDogMjtcclxuICAgICAgICB3aWR0aDogNDBweDtcclxuICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDEgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgQGluY2x1ZGUgdHJhbnNpdGlvbi1zbG93KCk7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuOTtcclxuICAgICAgICAgICAgJjpiZWZvcmUsXHJcbiAgICAgICAgICAgICY6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzcHg7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkcHJpbWFyeTtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmOmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiA2cHg7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICY6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgICAgdG9wOiAyMXB4O1xyXG4gICAgICAgICAgICAgICAgbGVmdDogNnB4O1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICY6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgbGVmdDogM3B4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICY6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiAxMXB4O1xyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMC41O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy9sb2dvXHJcbiAgICAmX19sb2dvIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBwYWRkaW5nOiByZW0oMTUpIHJlbSgyMCk7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgICAgICAgaGVpZ2h0OiByZW0oNjQpO1xyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiByZW0oNSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICZfX25hbWUge1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogOTAwO1xyXG4gICAgICAgICAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIxcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiByZW0oNDApO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmX19kZXNjciB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkZ3JheS00O1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogcmVtKDQwKTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIHVzZXJcclxuICAgICZfX3VzZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIHBhZGRpbmc6IHJlbSgxNSkgcmVtKDIwKTtcclxuICAgICAgICBoZWlnaHQ6IHJlbSg3Mik7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuMztcclxuICAgICAgICAmX19hdmF0YXIge1xyXG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgJl9fbmFtZSB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiByZW0oNjApO1xyXG4gICAgICAgICAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogcmVtKDIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmX19yb2xlIHtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IHJlbSg2MCk7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkZ3JheS02O1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBiYW5uZXJcclxuICAgICZfX2Jhbm5lciB7XHJcbiAgICAgICAgbWFyZ2luOiByZW0oNDApIHJlbSgyMCkgcmVtKDIwKTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAkcHJpbWFyeTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICRwcmltYXJ5IDAlLCBsaWdodGVuKCRwcmltYXJ5LCAxMCUpIDEwMCUpO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgICAgICBwYWRkaW5nOiByZW0oMjApO1xyXG4gICAgICAgIGNvbG9yOiAkd2hpdGU7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCA4cHggMTVweCAtNXB4IHJnYmEoMCwgMCwgMCwgMSk7XHJcbiAgICB9XHJcbiAgICAvLyBtZW51IGl0ZW1zXHJcbiAgICAmX19saXN0IHtcclxuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgLmFpcl9fbWVudUxlZnRfX2xpc3Qge1xyXG4gICAgICAgICAgICAuYWlyX19tZW51TGVmdF9fbGluayB7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IHJlbSg0OSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAmX19jYXRlZ29yeSB7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICBjb2xvcjogJHRleHQ7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgICAgICBmb250LXNpemU6IHJlbSgxMik7XHJcbiAgICAgICAgcGFkZGluZzogcmVtKDE0KSByZW0oMjApO1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICY6YWZ0ZXIge1xyXG4gICAgICAgICAgICBjb250ZW50OiAnJztcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgbGVmdDogcmVtKDIwKTtcclxuICAgICAgICAgICAgcmlnaHQ6IHJlbSgyMCk7XHJcbiAgICAgICAgICAgIGhlaWdodDogMXB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBkYXJrZW4oJHRleHQsIDIwJSk7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgJl9faXRlbSB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgJl9fYWN0aXZlIHtcclxuICAgICAgICAgICAgPi5haXJfX21lbnVMZWZ0X19saW5rIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICRwcmltYXJ5O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICR3aGl0ZTtcclxuICAgICAgICAgICAgICAgIC5haXJfX21lbnVMZWZ0X19pY29uIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgJl9fc3VibWVudSB7XHJcbiAgICAgICAgPi5haXJfX21lbnVMZWZ0X19saW5rIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAmOmJlZm9yZSxcclxuICAgICAgICAgICAgJjphZnRlciB7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiAnJztcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgdG9wOiByZW0oMjApO1xyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IHJlbSgyMCk7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNnB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAycHg7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkZ3JheS02O1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcclxuICAgICAgICAgICAgICAgIEBpbmNsdWRlIHRyYW5zaXRpb24tYmcoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmOmFmdGVyIHtcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiByZW0oMjQpO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICZfX2FjdGl2ZSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGRhcmtlbigkYmxhY2ssIDQlKTtcclxuICAgICAgICAgICAgPi5haXJfX21lbnVMZWZ0X19saW5rIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAkd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAmOmJlZm9yZSxcclxuICAgICAgICAgICAgICAgICY6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICR3aGl0ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5haXJfX21lbnVMZWZ0X19pY29uIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgID4uYWlyX19tZW51TGVmdF9fbGlzdCB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5haXJfX21lbnVMZWZ0X19saXN0IHtcclxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IHJlbSgxMCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgJl9fbGluayB7XHJcbiAgICAgICAgY29sb3I6ICRncmF5LTU7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgcGFkZGluZzogcmVtKDkpIHJlbSg0MCkgcmVtKDkpIHJlbSgyMCk7XHJcbiAgICAgICAgZm9udC1zaXplOiByZW0oMTUpO1xyXG4gICAgICAgICY6aG92ZXIsXHJcbiAgICAgICAgJjpmb2N1cyB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkYmx1ZTtcclxuICAgICAgICAgICAgJjpiZWZvcmUsXHJcbiAgICAgICAgICAgICY6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJHdoaXRlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgJl9faWNvbiB7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIHdpZHRoOiByZW0oMjUpO1xyXG4gICAgfVxyXG4gICAgLy8gdG9nZ2xlZCBtZW51XHJcbiAgICBAYXQtcm9vdCB7XHJcbiAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6ICRzbS1taW4td2lkdGgpIHtcclxuICAgICAgICAgICAgLmFpcl9fbWVudUxlZnRfX3RvZ2dsZWQ6bm90KC5haXJfX21lbnVMZWZ0X19jb21wYWN0KSB7XHJcbiAgICAgICAgICAgICAgICBmbGV4OiAwIDAgODBweDtcclxuICAgICAgICAgICAgICAgIG1heC13aWR0aDogODBweDtcclxuICAgICAgICAgICAgICAgIG1pbi13aWR0aDogODBweDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgICAgICAgICAgICAgLmFpcl9fbWVudUxlZnQge1xyXG4gICAgICAgICAgICAgICAgICAgICZfX291dGVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmxleDogMCAwIDgwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogODBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiA4MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogODBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgJl9fbG9nbyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgJl9fdG9nZ2xlQnV0dG9uIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IHJlbSgyMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICZfX3VzZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAmX19uYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAmX19yb2xlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgJl9fYmFubmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgJl9fc3VibWVudSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICZfX2FjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkcHJpbWFyeTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+LmFpcl9fbWVudUxlZnRfX2xpc3Qge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICZfX2xpbmsge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA+c3BhbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICY6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiByZW0oMTgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiByZW0oMjEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICY6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IHJlbSgxOCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IHJlbSgxOCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgJl9faWNvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiByZW0oNDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICZfX2NhdGVnb3J5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1pbmRlbnQ6IC05OTlweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJjphZnRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIGNvbXBhY3QgbWVudVxyXG4gICAgQGF0LXJvb3Qge1xyXG4gICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAkc20tbWluLXdpZHRoKSB7XHJcbiAgICAgICAgICAgIC5haXJfX21lbnVMZWZ0X19jb21wYWN0IHtcclxuICAgICAgICAgICAgICAgIGZsZXg6IDAgMCAxNTBweDtcclxuICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTUwcHg7XHJcbiAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDE1MHB4O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgICAgICAgICAgICAgLmFpcl9fbWVudUxlZnQge1xyXG4gICAgICAgICAgICAgICAgICAgICZfX291dGVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmxleDogMCAwIDE1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDE1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDE1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICZfX2xvZ28ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbG9hdDogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAmX19uYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAmX19kZXNjciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICZfX3RvZ2dsZUJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICZfX3VzZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJl9fYXZhdGFyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsb2F0OiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogcmVtKDEwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAmX19uYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAmX19yb2xlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgJl9fYmFubmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgJl9fc3VibWVudSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICZfX2FjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkcHJpbWFyeTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+LmFpcl9fbWVudUxlZnRfX2xpc3Qge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICZfX2xpbmsge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IHJlbSg5KSByZW0oMjApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA+c3BhbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsb2F0OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAmOmdsb2JhbCguYmFkZ2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgJjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IHJlbSgxOCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDJweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAmOmFmdGVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiByZW0oMTgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAtMXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICZfX2ljb24ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogcmVtKDQwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvIHJlbSg1KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAmX19jYXRlZ29yeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gdW5maXhlZFxyXG4gICAgQGF0LXJvb3Qge1xyXG4gICAgICAgIC5haXJfX21lbnVMZWZ0X191bmZpeGVkIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgLmFpcl9fbWVudUxlZnRfX291dGVyIHtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBzdGF0aWM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBtZW51IHNoYWRvd1xyXG4gICAgQGF0LXJvb3Qge1xyXG4gICAgICAgIC5haXJfX21lbnVMZWZ0X19zaGFkb3cge1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAkc2hhZG93LTM7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gbWVudSB0aGVtZXNcclxuICAgIEBhdC1yb290IHtcclxuICAgICAgICAvLyBibHVlIHRoZW1lXHJcbiAgICAgICAgLmFpcl9fbWVudUxlZnRfX2JsdWUge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAkcHJpbWFyeTtcclxuICAgICAgICAgICAgLmFpcl9fbWVudUxlZnQge1xyXG4gICAgICAgICAgICAgICAgJl9fdG9nZ2xlQnV0dG9uIHtcclxuICAgICAgICAgICAgICAgICAgICBzcGFuOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJjpiZWZvcmUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICY6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHNwYW46bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICY6YmVmb3JlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAmOmFmdGVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICR3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICZfX2NhdGVnb3J5IHtcclxuICAgICAgICAgICAgICAgICAgICAmOmFmdGVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgkZ3JheS0xLCAwLjEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICZfX2xpbmsge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkZ3JheS0yO1xyXG4gICAgICAgICAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJGJsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICY6YmVmb3JlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAmOmFmdGVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICR3aGl0ZSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgJl9fc3VibWVudSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJl9fYWN0aXZlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogZGFya2VuKCRwcmltYXJ5LCA1JSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID4uYWlyX19tZW51TGVmdF9fbGluayB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJjpiZWZvcmUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAmOmFmdGVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkd2hpdGUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA+LmFpcl9fbWVudUxlZnRfX2xpbmsge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAmOmJlZm9yZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJjphZnRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkZ3JheS01O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgJl9fY2F0ZWdvcnksXHJcbiAgICAgICAgICAgICAgICAmX191c2VyX19yb2xlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJGdyYXktNTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICZfX2Jhbm5lciB7XHJcbiAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCA4cHggMTVweCAtNXB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBncmF5IHRoZW1lXHJcbiAgICAgICAgLmFpcl9fbWVudUxlZnRfX2dyYXkge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAkZ3JheS0xO1xyXG4gICAgICAgICAgICAuYWlyX19tZW51TGVmdCB7XHJcbiAgICAgICAgICAgICAgICAmX19jYXRlZ29yeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJjphZnRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGRhcmtlbigkZ3JheS0xLCA0JSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgJl9fbGluayB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICR0ZXh0O1xyXG4gICAgICAgICAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkcHJpbWFyeTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJjpiZWZvcmUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICY6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAmX19pdGVtIHtcclxuICAgICAgICAgICAgICAgICAgICAmX19hY3RpdmUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAuYWlyX19tZW51TGVmdF9fbGluayB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgJl9fc3VibWVudSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJl9fYWN0aXZlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJGdyYXktMjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgPi5haXJfX21lbnVMZWZ0X19saW5rIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5haXJfX21lbnVMZWZ0X19pY29uIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHRleHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYWlyX19tZW51TGVmdF9faWNvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEBhdC1yb290IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5haXJfX21lbnVMZWZ0X190b2dnbGVkLmFpcl9fbWVudUxlZnRfX2dyYXkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5haXJfX21lbnVMZWZ0X19zdWJtZW51X19hY3RpdmUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkZ3JheS0yICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgID4uYWlyX19tZW51TGVmdF9fbGluayB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICY6YmVmb3JlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAmOmFmdGVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICRncmF5LTU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAmX19jYXRlZ29yeSxcclxuICAgICAgICAgICAgICAgICZfX3VzZXJfX25hbWUge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkdGV4dDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICZfX3VzZXJfX3JvbGUge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkZ3JheS01O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgJl9fbG9nb19fbmFtZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRibGFjaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICZfX2Jhbm5lciB7XHJcbiAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCA4cHggMTVweCAtNXB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyB3aGl0ZSB0aGVtZVxyXG4gICAgICAgIC5haXJfX21lbnVMZWZ0X193aGl0ZSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICR3aGl0ZTtcclxuICAgICAgICAgICAgLmFpcl9fbWVudUxlZnQge1xyXG4gICAgICAgICAgICAgICAgJl9fY2F0ZWdvcnkge1xyXG4gICAgICAgICAgICAgICAgICAgICY6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkZ3JheS0xO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICZfX2xpbmsge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkdGV4dDtcclxuICAgICAgICAgICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICR3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJHByaW1hcnk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICY6YmVmb3JlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAmOmFmdGVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICR3aGl0ZSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgJl9faXRlbSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJl9fYWN0aXZlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmFpcl9fbWVudUxlZnRfX2xpbmsge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICR3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICZfX3N1Ym1lbnUge1xyXG4gICAgICAgICAgICAgICAgICAgICZfX2FjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICRncmF5LTE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID4uYWlyX19tZW51TGVmdF9fbGluayB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYWlyX19tZW51TGVmdF9faWNvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICR0ZXh0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFpcl9fbWVudUxlZnRfX2ljb24ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBAYXQtcm9vdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYWlyX19tZW51TGVmdF9fdG9nZ2xlZC5haXJfX21lbnVMZWZ0X193aGl0ZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFpcl9fbWVudUxlZnRfX3N1Ym1lbnVfX2FjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICRncmF5LTEgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPi5haXJfX21lbnVMZWZ0X19saW5rIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJjpiZWZvcmUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICY6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJGdyYXktNTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICZfX2NhdGVnb3J5LFxyXG4gICAgICAgICAgICAgICAgJl9fdXNlcl9fbmFtZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICR0ZXh0O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgJl9fdXNlcl9fcm9sZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRncmF5LTU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAmX19sb2dvX19uYW1lIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJGJsYWNrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgJl9fYmFubmVyIHtcclxuICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDhweCAxNXB4IC01cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gZmx5b3V0IG1lbnUgc3R5bGVzXHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJHNtLW1pbi13aWR0aCkge1xyXG4gICAgICAgICZfX2ZseW91dDpub3QoLmFpcl9fbWVudUxlZnRfX3RvZ2dsZWQpIHtcclxuICAgICAgICAgICAgLmFpcl9fbWVudUxlZnQge1xyXG4gICAgICAgICAgICAgICAgJl9fc3VibWVudSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJl9fYWN0aXZlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJHByaW1hcnk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID4uYWlyX19tZW51TGVmdF9fbGluayB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFpcl9fbWVudUxlZnRfX2ljb24ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPi5haXJfX21lbnVMZWZ0X19saXN0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICZfX2xpbmsge1xyXG4gICAgICAgICAgICAgICAgICAgICY6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IHJlbSgxOCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAmOmFmdGVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IHJlbSgxOCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAtM3B4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBtZW51IGl0ZW0gaG92ZXIgc3R5bGVzXHJcbiAgICAgICAgJl9fZmx5b3V0LFxyXG4gICAgICAgICZfX2NvbXBhY3QsXHJcbiAgICAgICAgJl9fdG9nZ2xlZCB7XHJcbiAgICAgICAgICAgIC8vIGRlZmF1bHRcclxuICAgICAgICAgICAgLmFpcl9fbWVudUxlZnQge1xyXG4gICAgICAgICAgICAgICAgJl9fbGluayB7XHJcbiAgICAgICAgICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICRwcmltYXJ5O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmLmFpcl9fbWVudUZseW91dCB7XHJcbiAgICAgICAgICAgICAgICAvLyBibGFja1xyXG4gICAgICAgICAgICAgICAgJl9fYmxhY2sge1xyXG4gICAgICAgICAgICAgICAgICAgIC5haXJfX21lbnVMZWZ0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJl9fbGluayB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkYmxhY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyBncmF5XHJcbiAgICAgICAgICAgICAgICAmX19ncmF5IHtcclxuICAgICAgICAgICAgICAgICAgICAuYWlyX19tZW51TGVmdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICZfX2xpbmsge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJGdyYXktMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHByaW1hcnk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJjpiZWZvcmUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJjphZnRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICRwcmltYXJ5O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIHdoaXRlXHJcbiAgICAgICAgICAgICAgICAmX193aGl0ZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLmFpcl9fbWVudUxlZnQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAmX19saW5rIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICR3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHByaW1hcnk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJjpiZWZvcmUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJjphZnRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICRwcmltYXJ5O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBmbHlvdXQgY29udGFpbmVyXHJcbiAgICAgICAgQGF0LXJvb3Qge1xyXG4gICAgICAgICAgICAuYWlyX19tZW51Rmx5b3V0IHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICAgICAgICAgIHotaW5kZXg6IDMwMDA7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDEwMHB4O1xyXG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogJHNoYWRvdy01O1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJHByaW1hcnk7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIGNhbGMoLTUwJSArIDIwcHgpLCAwKTtcclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjFzIGVhc2UtaW4tb3V0ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiAwIDA7XHJcbiAgICAgICAgICAgICAgICAuYWlyX19tZW51TGVmdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgJl9fbGlzdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogcmVtKDU0MCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAmX19pdGVtIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiByZW0oMTgwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCByZ2JhKCRncmF5LTEsIDAuMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKCRncmF5LTEsIDAuMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICY6bnRoLWNoaWxkKDNuICsgMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgJl9fYWN0aXZlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5haXJfX21lbnVMZWZ0X19saW5rIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKCRncmF5LTEsIDAuMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgJl9fbGluayB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IHJlbSgxNSkgcmVtKDMwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKCRncmF5LTEsIDAuMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPnNwYW4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyBmbHlvdXQgdGhlbWVzXHJcbiAgICAgICAgICAgICAgICBAYXQtcm9vdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6ICRzbS1taW4td2lkdGgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmFpcl9fbWVudUZseW91dCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBibGFja1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJl9fYmxhY2sge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICYuYWlyX19tZW51Rmx5b3V0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJGJsYWNrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vd2hpdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICZfX3doaXRlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYWlyX19tZW51TGVmdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICZfX2xpbmsge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJjpiZWZvcmUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJjphZnRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICRwcmltYXJ5ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICZfX3N1Ym1lbnUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJl9fYWN0aXZlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+LmFpcl9fbWVudUxlZnRfX2xpbmsge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkcHJpbWFyeTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5haXJfX21lbnVMZWZ0X19pY29uIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHByaW1hcnk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJi5haXJfX21lbnVGbHlvdXQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6ICRzaGFkb3ctMjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFpcl9fbWVudUxlZnQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJl9faXRlbSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAkZ3JheS0xO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkZ3JheS0xO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJl9fbGluayB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRwcmltYXJ5O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogZGFya2VuKCRwcmltYXJ5LCAxMCUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKCRncmF5LTMsIDAuMyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICZfX2FjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYWlyX19tZW51TGVmdF9fbGluayB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgkZ3JheS0zLCAwLjMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZ3JheVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJl9fZ3JheSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFpcl9fbWVudUxlZnQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmX19saW5rIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICY6YmVmb3JlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICY6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkcHJpbWFyeSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmX19zdWJtZW51IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICZfX2FjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPi5haXJfX21lbnVMZWZ0X19saW5rIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHByaW1hcnk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYWlyX19tZW51TGVmdF9faWNvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRwcmltYXJ5O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICYuYWlyX19tZW51Rmx5b3V0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJGdyYXktMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogJHNoYWRvdy0yO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYWlyX19tZW51TGVmdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmX19pdGVtIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkIGRhcmtlbigkZ3JheS0xLCA0JSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGRhcmtlbigkZ3JheS0xLCA0JSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJl9fYWN0aXZlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFpcl9fbWVudUxlZnRfX2xpbmsge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgkZ3JheS0zLCAwLjMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJl9fbGluayB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRwcmltYXJ5O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogZGFya2VuKCRwcmltYXJ5LCAxMCUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKCRncmF5LTMsIDAuMyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIi5haXJfX3V0aWxzX19hdmF0YXIge1xuICBoZWlnaHQ6IDE4MHB4O1xuICB3aWR0aDogMTgwcHg7XG4gIHBhZGRpbmc6IDBweDtcbn1cbi5haXJfX3V0aWxzX19hdmF0YXIgaW1nIHtcbiAgbWFyZ2luLXRvcDogcmVtKDUpO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmFpcl9fbWVudUxlZnQge1xuICBmbGV4OiAwIDAgMjQwcHg7XG4gIG1heC13aWR0aDogMjQwcHg7XG4gIG1pbi13aWR0aDogMjQwcHg7XG4gIHdpZHRoOiAyNDBweDtcbiAgbWluLWhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZDogIzE2MTUzNztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuYWlyX19tZW51TGVmdCB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHotaW5kZXg6IDk5NztcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICBib3R0b206IDA7XG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XG4gICAgbWFyZ2luLWxlZnQ6IC0yNDBweDtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyBlYXNlLWluLW91dDtcbiAgfVxuICAuYWlyX19tZW51TGVmdF9fbW9iaWxlVG9nZ2xlQnV0dG9uIHtcbiAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xuICB9XG4gIC5haXJfX21lbnVMZWZ0X190b2dnbGVCdXR0b24ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgLmFpcl9fbWVudUxlZnRfX21vYmlsZVRvZ2dsZWQge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNDBweCk7XG4gIH1cbn1cbi5haXJfX21lbnVMZWZ0X19vdXRlciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogMTAwMDtcbiAgdG9wOiAwO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGZsZXg6IDAgMCAyNDBweDtcbiAgbWF4LXdpZHRoOiAyNDBweDtcbiAgbWluLXdpZHRoOiAyNDBweDtcbiAgd2lkdGg6IDI0MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLmFpcl9fbWVudUxlZnRfX2NvbnRhaW5lciB7XG4gIHBhZGRpbmctYm90dG9tOiAxLjMzcmVtO1xufVxuLmFpcl9fbWVudUxlZnRfX2JhY2tkcm9wIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiA5OTY7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbiAgbGVmdDogMDtcbiAgYmFja2dyb3VuZDogIzE2MTUzNztcbiAgb3BhY2l0eTogMDtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnMgZWFzZS1pbi1vdXQ7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLmFpcl9fbWVudUxlZnRfX21vYmlsZVRvZ2dsZWQgKyAuYWlyX19tZW51TGVmdF9fYmFja2Ryb3Age1xuICAgIG9wYWNpdHk6IDAuMjtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICB9XG59XG4uYWlyX19tZW51TGVmdF9fbW9iaWxlVG9nZ2xlQnV0dG9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogLTIuNjdyZW07XG4gIHRvcDogOS40NnJlbTtcbiAgd2lkdGg6IDIuNjZyZW07XG4gIGhlaWdodDogMi42NnJlbTtcbiAgYmFja2dyb3VuZDogIzE2MTUzNztcbiAgYm9yZGVyLXJhZGl1czogMCA1cHggNXB4IDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogbm9uZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3gtc2hhZG93OiAwIDRweCAzOHB4IDAgcmdiYSgyMiwgMjEsIDU1LCAwLjExKSwgMCAwIDIxcHggMCByZ2JhKDIyLCAyMSwgNTUsIDAuMDUpO1xufVxuLmFpcl9fbWVudUxlZnRfX21vYmlsZVRvZ2dsZUJ1dHRvbiBzcGFuIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMTRweDtcbiAgaGVpZ2h0OiAycHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjNzIGN1YmljLWJlemllcigwLjc4LCAwLjE0LCAwLjE1LCAwLjg2KTtcbiAgdG9wOiA1cHg7XG59XG4uYWlyX19tZW51TGVmdF9fbW9iaWxlVG9nZ2xlZCAuYWlyX19tZW51TGVmdF9fbW9iaWxlVG9nZ2xlQnV0dG9uIHNwYW4ge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cbi5haXJfX21lbnVMZWZ0X19tb2JpbGVUb2dnbGVkIC5haXJfX21lbnVMZWZ0X19tb2JpbGVUb2dnbGVCdXR0b24gc3BhbjpiZWZvcmUge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNXB4KSByb3RhdGUoNDVkZWcpO1xufVxuLmFpcl9fbWVudUxlZnRfX21vYmlsZVRvZ2dsZWQgLmFpcl9fbWVudUxlZnRfX21vYmlsZVRvZ2dsZUJ1dHRvbiBzcGFuOmFmdGVyIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01cHgpIHJvdGF0ZSgtNDVkZWcpO1xufVxuXG4uYWlyX19tZW51TGVmdF9fbW9iaWxlVG9nZ2xlQnV0dG9uIHNwYW46YmVmb3JlLCAuYWlyX19tZW51TGVmdF9fbW9iaWxlVG9nZ2xlQnV0dG9uIHNwYW46YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAycHg7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGN1YmljLWJlemllcigwLjc4LCAwLjE0LCAwLjE1LCAwLjg2KTtcbn1cbi5haXJfX21lbnVMZWZ0X19tb2JpbGVUb2dnbGVCdXR0b24gc3BhbjpiZWZvcmUge1xuICB0b3A6IC01cHg7XG59XG4uYWlyX19tZW51TGVmdF9fbW9iaWxlVG9nZ2xlQnV0dG9uIHNwYW46YWZ0ZXIge1xuICB0b3A6IDVweDtcbn1cbi5haXJfX21lbnVMZWZ0X190b2dnbGVCdXR0b24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMC44cmVtO1xuICByaWdodDogMC42NnJlbTtcbiAgei1pbmRleDogMjtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmFpcl9fbWVudUxlZnRfX3RvZ2dsZWQgLmFpcl9fbWVudUxlZnRfX3RvZ2dsZUJ1dHRvbiB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG59XG5cbi5haXJfX21lbnVMZWZ0X190b2dnbGVCdXR0b246aG92ZXIgc3BhbiB7XG4gIG9wYWNpdHk6IDEgIWltcG9ydGFudDtcbn1cbi5haXJfX21lbnVMZWZ0X190b2dnbGVCdXR0b24gc3BhbiB7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuICBvcGFjaXR5OiAwLjk7XG59XG4uYWlyX19tZW51TGVmdF9fdG9nZ2xlQnV0dG9uIHNwYW46YmVmb3JlLCAuYWlyX19tZW51TGVmdF9fdG9nZ2xlQnV0dG9uIHNwYW46YWZ0ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTJweDtcbiAgaGVpZ2h0OiAzcHg7XG4gIGJhY2tncm91bmQ6ICMxYjU1ZTM7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbi5haXJfX21lbnVMZWZ0X190b2dnbGVCdXR0b24gc3BhbjpiZWZvcmUge1xuICB0b3A6IDE0cHg7XG4gIGxlZnQ6IDZweDtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbn1cbi5haXJfX21lbnVMZWZ0X190b2dnbGVCdXR0b24gc3BhbjphZnRlciB7XG4gIHRvcDogMjFweDtcbiAgbGVmdDogNnB4O1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG59XG4uYWlyX19tZW51TGVmdF9fdG9nZ2xlQnV0dG9uIHNwYW46Zmlyc3QtY2hpbGQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IDNweDtcbn1cbi5haXJfX21lbnVMZWZ0X190b2dnbGVCdXR0b24gc3BhbjpsYXN0LWNoaWxkIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiAxMXB4O1xuICBvcGFjaXR5OiAwLjU7XG59XG4uYWlyX19tZW51TGVmdF9fbG9nbyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiAxcmVtIDEuMzNyZW07XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBoZWlnaHQ6IDQuMjZyZW07XG59XG4uYWlyX19tZW51TGVmdF9fbG9nbyBpbWcge1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luLXRvcDogMC4zM3JlbTtcbn1cbi5haXJfX21lbnVMZWZ0X19sb2dvX19uYW1lIHtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMjFweDtcbiAgbWFyZ2luLWxlZnQ6IDIuNjZyZW07XG59XG4uYWlyX19tZW51TGVmdF9fbG9nb19fZGVzY3Ige1xuICBjb2xvcjogI2MzYmVkYztcbiAgbWFyZ2luLWxlZnQ6IDIuNjZyZW07XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbn1cbi5haXJfX21lbnVMZWZ0X191c2VyIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmc6IDFyZW0gMS4zM3JlbTtcbiAgaGVpZ2h0OiA0LjhyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjM7XG59XG4uYWlyX19tZW51TGVmdF9fdXNlcl9fYXZhdGFyIHtcbiAgZmxvYXQ6IGxlZnQ7XG59XG4uYWlyX19tZW51TGVmdF9fdXNlcl9fbmFtZSB7XG4gIG1hcmdpbi1sZWZ0OiA0cmVtO1xuICBjb2xvcjogI2ZmZjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIG1hcmdpbi10b3A6IDAuMTNyZW07XG59XG4uYWlyX19tZW51TGVmdF9fdXNlcl9fcm9sZSB7XG4gIG1hcmdpbi1sZWZ0OiA0cmVtO1xuICBjb2xvcjogIzc4NmZhNDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG4uYWlyX19tZW51TGVmdF9fYmFubmVyIHtcbiAgbWFyZ2luOiAyLjY2cmVtIDEuMzNyZW0gMS4zM3JlbTtcbiAgYmFja2dyb3VuZDogIzFiNTVlMztcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjMWI1NWUzIDAlLCAjNDg3N2U5IDEwMCUpO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIHBhZGRpbmc6IDEuMzNyZW07XG4gIGNvbG9yOiAjZmZmO1xuICBib3gtc2hhZG93OiAwIDhweCAxNXB4IC01cHggYmxhY2s7XG59XG4uYWlyX19tZW51TGVmdF9fbGlzdCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHBhZGRpbmctbGVmdDogMDtcbiAgbWFyZ2luOiAwO1xufVxuLmFpcl9fbWVudUxlZnRfX2xpc3QgLmFpcl9fbWVudUxlZnRfX2xpc3QgLmFpcl9fbWVudUxlZnRfX2xpbmsge1xuICBwYWRkaW5nLWxlZnQ6IDMuMjZyZW07XG59XG4uYWlyX19tZW51TGVmdF9fY2F0ZWdvcnkge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBjb2xvcjogIzc4NmZhNDtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIHBhZGRpbmc6IDAuOTNyZW0gMS4zM3JlbTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmFpcl9fbWVudUxlZnRfX2NhdGVnb3J5OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogMS4zM3JlbTtcbiAgcmlnaHQ6IDEuMzNyZW07XG4gIGhlaWdodDogMXB4O1xuICBiYWNrZ3JvdW5kOiAjNGE0MzZhO1xuICBkaXNwbGF5OiBub25lO1xufVxuLmFpcl9fbWVudUxlZnRfX2l0ZW0ge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5haXJfX21lbnVMZWZ0X19pdGVtX19hY3RpdmUgPiAuYWlyX19tZW51TGVmdF9fbGluayB7XG4gIGJhY2tncm91bmQ6ICMxYjU1ZTM7XG4gIGNvbG9yOiAjZmZmO1xufVxuLmFpcl9fbWVudUxlZnRfX2l0ZW1fX2FjdGl2ZSA+IC5haXJfX21lbnVMZWZ0X19saW5rIC5haXJfX21lbnVMZWZ0X19pY29uIHtcbiAgY29sb3I6ICNmZmY7XG59XG4uYWlyX19tZW51TGVmdF9fc3VibWVudSA+IC5haXJfX21lbnVMZWZ0X19saW5rIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmFpcl9fbWVudUxlZnRfX3N1Ym1lbnUgPiAuYWlyX19tZW51TGVmdF9fbGluazpiZWZvcmUsIC5haXJfX21lbnVMZWZ0X19zdWJtZW51ID4gLmFpcl9fbWVudUxlZnRfX2xpbms6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEuMzNyZW07XG4gIHJpZ2h0OiAxLjMzcmVtO1xuICB3aWR0aDogNnB4O1xuICBoZWlnaHQ6IDJweDtcbiAgYmFja2dyb3VuZDogIzc4NmZhNDtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjJzIGVhc2UtaW4tb3V0O1xufVxuLmFpcl9fbWVudUxlZnRfX3N1Ym1lbnUgPiAuYWlyX19tZW51TGVmdF9fbGluazphZnRlciB7XG4gIHJpZ2h0OiAxLjZyZW07XG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbn1cbi5haXJfX21lbnVMZWZ0X19zdWJtZW51X19hY3RpdmUge1xuICBiYWNrZ3JvdW5kOiAjMTAwZjI4O1xufVxuLmFpcl9fbWVudUxlZnRfX3N1Ym1lbnVfX2FjdGl2ZSA+IC5haXJfX21lbnVMZWZ0X19saW5rIHtcbiAgY29sb3I6ICNmZmY7XG59XG4uYWlyX19tZW51TGVmdF9fc3VibWVudV9fYWN0aXZlID4gLmFpcl9fbWVudUxlZnRfX2xpbms6YmVmb3JlLCAuYWlyX19tZW51TGVmdF9fc3VibWVudV9fYWN0aXZlID4gLmFpcl9fbWVudUxlZnRfX2xpbms6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuLmFpcl9fbWVudUxlZnRfX3N1Ym1lbnVfX2FjdGl2ZSA+IC5haXJfX21lbnVMZWZ0X19saW5rIC5haXJfX21lbnVMZWZ0X19pY29uIHtcbiAgY29sb3I6ICNmZmY7XG59XG4uYWlyX19tZW51TGVmdF9fc3VibWVudV9fYWN0aXZlID4gLmFpcl9fbWVudUxlZnRfX2xpc3Qge1xuICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xufVxuLmFpcl9fbWVudUxlZnRfX3N1Ym1lbnUgLmFpcl9fbWVudUxlZnRfX2xpc3Qge1xuICBkaXNwbGF5OiBub25lO1xuICBwYWRkaW5nLWJvdHRvbTogMC42NnJlbTtcbn1cbi5haXJfX21lbnVMZWZ0X19saW5rIHtcbiAgY29sb3I6ICNhY2E2Y2M7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiAwLjZyZW0gMi42NnJlbSAwLjZyZW0gMS4zM3JlbTtcbiAgZm9udC1zaXplOiAxcmVtO1xufVxuLmFpcl9fbWVudUxlZnRfX2xpbms6aG92ZXIsIC5haXJfX21lbnVMZWZ0X19saW5rOmZvY3VzIHtcbiAgY29sb3I6ICMxYjU1ZTM7XG59XG4uYWlyX19tZW51TGVmdF9fbGluazpob3ZlcjpiZWZvcmUsIC5haXJfX21lbnVMZWZ0X19saW5rOmhvdmVyOmFmdGVyLCAuYWlyX19tZW51TGVmdF9fbGluazpmb2N1czpiZWZvcmUsIC5haXJfX21lbnVMZWZ0X19saW5rOmZvY3VzOmFmdGVyIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn1cbi5haXJfX21lbnVMZWZ0X19pY29uIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMS42NnJlbTtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAuYWlyX19tZW51TGVmdF9fdG9nZ2xlZDpub3QoLmFpcl9fbWVudUxlZnRfX2NvbXBhY3QpIHtcbiAgICBmbGV4OiAwIDAgODBweDtcbiAgICBtYXgtd2lkdGg6IDgwcHg7XG4gICAgbWluLXdpZHRoOiA4MHB4O1xuICAgIHdpZHRoOiA4MHB4O1xuICB9XG4gIC5haXJfX21lbnVMZWZ0X190b2dnbGVkOm5vdCguYWlyX19tZW51TGVmdF9fY29tcGFjdCkgLmFpcl9fbWVudUxlZnRfX291dGVyIHtcbiAgICBmbGV4OiAwIDAgODBweDtcbiAgICBtYXgtd2lkdGg6IDgwcHg7XG4gICAgbWluLXdpZHRoOiA4MHB4O1xuICAgIHdpZHRoOiA4MHB4O1xuICB9XG4gIC5haXJfX21lbnVMZWZ0X190b2dnbGVkOm5vdCguYWlyX19tZW51TGVmdF9fY29tcGFjdCkgLmFpcl9fbWVudUxlZnRfX2xvZ28ge1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgfVxuICAuYWlyX19tZW51TGVmdF9fdG9nZ2xlZDpub3QoLmFpcl9fbWVudUxlZnRfX2NvbXBhY3QpIC5haXJfX21lbnVMZWZ0X190b2dnbGVCdXR0b24ge1xuICAgIHJpZ2h0OiAxLjMzcmVtO1xuICB9XG4gIC5haXJfX21lbnVMZWZ0X190b2dnbGVkOm5vdCguYWlyX19tZW51TGVmdF9fY29tcGFjdCkgLmFpcl9fbWVudUxlZnRfX3VzZXJfX25hbWUsIC5haXJfX21lbnVMZWZ0X190b2dnbGVkOm5vdCguYWlyX19tZW51TGVmdF9fY29tcGFjdCkgLmFpcl9fbWVudUxlZnRfX3VzZXJfX3JvbGUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgLmFpcl9fbWVudUxlZnRfX3RvZ2dsZWQ6bm90KC5haXJfX21lbnVMZWZ0X19jb21wYWN0KSAuYWlyX19tZW51TGVmdF9fYmFubmVyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIC5haXJfX21lbnVMZWZ0X190b2dnbGVkOm5vdCguYWlyX19tZW51TGVmdF9fY29tcGFjdCkgLmFpcl9fbWVudUxlZnRfX3N1Ym1lbnVfX2FjdGl2ZSB7XG4gICAgYmFja2dyb3VuZDogIzFiNTVlMztcbiAgfVxuICAuYWlyX19tZW51TGVmdF9fdG9nZ2xlZDpub3QoLmFpcl9fbWVudUxlZnRfX2NvbXBhY3QpIC5haXJfX21lbnVMZWZ0X19zdWJtZW51ID4gLmFpcl9fbWVudUxlZnRfX2xpc3Qge1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgfVxuICAuYWlyX19tZW51TGVmdF9fdG9nZ2xlZDpub3QoLmFpcl9fbWVudUxlZnRfX2NvbXBhY3QpIC5haXJfX21lbnVMZWZ0X19saW5rID4gc3BhbiB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAuYWlyX19tZW51TGVmdF9fdG9nZ2xlZDpub3QoLmFpcl9fbWVudUxlZnRfX2NvbXBhY3QpIC5haXJfX21lbnVMZWZ0X19saW5rOmJlZm9yZSB7XG4gICAgcmlnaHQ6IDEuMnJlbTtcbiAgICB0b3A6IDEuNHJlbTtcbiAgfVxuICAuYWlyX19tZW51TGVmdF9fdG9nZ2xlZDpub3QoLmFpcl9fbWVudUxlZnRfX2NvbXBhY3QpIC5haXJfX21lbnVMZWZ0X19saW5rOmFmdGVyIHtcbiAgICByaWdodDogMS4ycmVtO1xuICAgIHRvcDogMS4ycmVtO1xuICB9XG4gIC5haXJfX21lbnVMZWZ0X190b2dnbGVkOm5vdCguYWlyX19tZW51TGVmdF9fY29tcGFjdCkgLmFpcl9fbWVudUxlZnRfX2ljb24ge1xuICAgIHdpZHRoOiAyLjY2cmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICAuYWlyX19tZW51TGVmdF9fdG9nZ2xlZDpub3QoLmFpcl9fbWVudUxlZnRfX2NvbXBhY3QpIC5haXJfX21lbnVMZWZ0X19jYXRlZ29yeSB7XG4gICAgdGV4dC1pbmRlbnQ6IC05OTlweDtcbiAgfVxuICAuYWlyX19tZW51TGVmdF9fdG9nZ2xlZDpub3QoLmFpcl9fbWVudUxlZnRfX2NvbXBhY3QpIC5haXJfX21lbnVMZWZ0X19jYXRlZ29yeTphZnRlciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAuYWlyX19tZW51TGVmdF9fY29tcGFjdCB7XG4gICAgZmxleDogMCAwIDE1MHB4O1xuICAgIG1heC13aWR0aDogMTUwcHg7XG4gICAgbWluLXdpZHRoOiAxNTBweDtcbiAgICB3aWR0aDogMTUwcHg7XG4gIH1cbiAgLmFpcl9fbWVudUxlZnRfX2NvbXBhY3QgLmFpcl9fbWVudUxlZnRfX291dGVyIHtcbiAgICBmbGV4OiAwIDAgMTUwcHg7XG4gICAgbWF4LXdpZHRoOiAxNTBweDtcbiAgICBtaW4td2lkdGg6IDE1MHB4O1xuICAgIHdpZHRoOiAxNTBweDtcbiAgfVxuICAuYWlyX19tZW51TGVmdF9fY29tcGFjdCAuYWlyX19tZW51TGVmdF9fbG9nbyB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIC5haXJfX21lbnVMZWZ0X19jb21wYWN0IC5haXJfX21lbnVMZWZ0X19sb2dvIGltZyB7XG4gICAgZmxvYXQ6IG5vbmU7XG4gIH1cbiAgLmFpcl9fbWVudUxlZnRfX2NvbXBhY3QgLmFpcl9fbWVudUxlZnRfX2xvZ29fX25hbWUsIC5haXJfX21lbnVMZWZ0X19jb21wYWN0IC5haXJfX21lbnVMZWZ0X19sb2dvX19kZXNjciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAuYWlyX19tZW51TGVmdF9fY29tcGFjdCAuYWlyX19tZW51TGVmdF9fdG9nZ2xlQnV0dG9uIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIC5haXJfX21lbnVMZWZ0X19jb21wYWN0IC5haXJfX21lbnVMZWZ0X191c2VyIHtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIC5haXJfX21lbnVMZWZ0X19jb21wYWN0IC5haXJfX21lbnVMZWZ0X191c2VyX19hdmF0YXIge1xuICAgIGZsb2F0OiBub25lO1xuICAgIG1hcmdpbi1ib3R0b206IDAuNjZyZW07XG4gIH1cbiAgLmFpcl9fbWVudUxlZnRfX2NvbXBhY3QgLmFpcl9fbWVudUxlZnRfX3VzZXJfX25hbWUsIC5haXJfX21lbnVMZWZ0X19jb21wYWN0IC5haXJfX21lbnVMZWZ0X191c2VyX19yb2xlIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgfVxuICAuYWlyX19tZW51TGVmdF9fY29tcGFjdCAuYWlyX19tZW51TGVmdF9fYmFubmVyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIC5haXJfX21lbnVMZWZ0X19jb21wYWN0IC5haXJfX21lbnVMZWZ0X19zdWJtZW51X19hY3RpdmUge1xuICAgIGJhY2tncm91bmQ6ICMxYjU1ZTM7XG4gIH1cbiAgLmFpcl9fbWVudUxlZnRfX2NvbXBhY3QgLmFpcl9fbWVudUxlZnRfX3N1Ym1lbnUgPiAuYWlyX19tZW51TGVmdF9fbGlzdCB7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICB9XG4gIC5haXJfX21lbnVMZWZ0X19jb21wYWN0IC5haXJfX21lbnVMZWZ0X19saW5rIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMC42cmVtIDEuMzNyZW07XG4gIH1cbiAgLmFpcl9fbWVudUxlZnRfX2NvbXBhY3QgLmFpcl9fbWVudUxlZnRfX2xpbmsgPiBzcGFuIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmbG9hdDogbm9uZSAhaW1wb3J0YW50O1xuICB9XG4gIC5haXJfX21lbnVMZWZ0X19jb21wYWN0IC5haXJfX21lbnVMZWZ0X19saW5rID4gc3BhbjpnbG9iYWwoLmJhZGdlKSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB9XG4gIC5haXJfX21lbnVMZWZ0X19jb21wYWN0IC5haXJfX21lbnVMZWZ0X19saW5rOmJlZm9yZSB7XG4gICAgcmlnaHQ6IDEuMnJlbTtcbiAgICB0b3A6IDUwJTtcbiAgICBtYXJnaW4tdG9wOiAycHg7XG4gIH1cbiAgLmFpcl9fbWVudUxlZnRfX2NvbXBhY3QgLmFpcl9fbWVudUxlZnRfX2xpbms6YWZ0ZXIge1xuICAgIHJpZ2h0OiAxLjJyZW07XG4gICAgdG9wOiA1MCU7XG4gICAgbWFyZ2luLXRvcDogLTFweDtcbiAgfVxuICAuYWlyX19tZW51TGVmdF9fY29tcGFjdCAuYWlyX19tZW51TGVmdF9faWNvbiB7XG4gICAgd2lkdGg6IDIuNjZyZW07XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luOiAwIGF1dG8gMC4zM3JlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgLmFpcl9fbWVudUxlZnRfX2NvbXBhY3QgLmFpcl9fbWVudUxlZnRfX2NhdGVnb3J5IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG4uYWlyX19tZW51TGVmdF9fdW5maXhlZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uYWlyX19tZW51TGVmdF9fdW5maXhlZCAuYWlyX19tZW51TGVmdF9fb3V0ZXIge1xuICBoZWlnaHQ6IGF1dG87XG4gIHBvc2l0aW9uOiBzdGF0aWM7XG59XG5cbi5haXJfX21lbnVMZWZ0X19zaGFkb3cge1xuICBib3gtc2hhZG93OiAwIDAgMTAwcHggLTMwcHggcmdiYSg1NywgNTUsIDczLCAwLjMpO1xufVxuXG4uYWlyX19tZW51TGVmdF9fYmx1ZSB7XG4gIGJhY2tncm91bmQ6ICMxYjU1ZTM7XG59XG4uYWlyX19tZW51TGVmdF9fYmx1ZSAuYWlyX19tZW51TGVmdF9fdG9nZ2xlQnV0dG9uIHNwYW46Zmlyc3QtY2hpbGQ6YmVmb3JlLCAuYWlyX19tZW51TGVmdF9fYmx1ZSAuYWlyX19tZW51TGVmdF9fdG9nZ2xlQnV0dG9uIHNwYW46Zmlyc3QtY2hpbGQ6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuLmFpcl9fbWVudUxlZnRfX2JsdWUgLmFpcl9fbWVudUxlZnRfX3RvZ2dsZUJ1dHRvbiBzcGFuOmxhc3QtY2hpbGQ6YmVmb3JlLCAuYWlyX19tZW51TGVmdF9fYmx1ZSAuYWlyX19tZW51TGVmdF9fdG9nZ2xlQnV0dG9uIHNwYW46bGFzdC1jaGlsZDphZnRlciB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG59XG4uYWlyX19tZW51TGVmdF9fYmx1ZSAuYWlyX19tZW51TGVmdF9fY2F0ZWdvcnk6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI0MiwgMjQ0LCAyNDgsIDAuMSk7XG59XG4uYWlyX19tZW51TGVmdF9fYmx1ZSAuYWlyX19tZW51TGVmdF9fbGluayB7XG4gIGNvbG9yOiAjZTRlOWYwO1xufVxuLmFpcl9fbWVudUxlZnRfX2JsdWUgLmFpcl9fbWVudUxlZnRfX2xpbms6aG92ZXIge1xuICBjb2xvcjogIzFiNTVlMztcbn1cbi5haXJfX21lbnVMZWZ0X19ibHVlIC5haXJfX21lbnVMZWZ0X19saW5rOmhvdmVyOmJlZm9yZSwgLmFpcl9fbWVudUxlZnRfX2JsdWUgLmFpcl9fbWVudUxlZnRfX2xpbms6aG92ZXI6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kOiAjZmZmICFpbXBvcnRhbnQ7XG59XG4uYWlyX19tZW51TGVmdF9fYmx1ZSAuYWlyX19tZW51TGVmdF9fc3VibWVudV9fYWN0aXZlIHtcbiAgYmFja2dyb3VuZDogIzE4NGNjYztcbn1cbi5haXJfX21lbnVMZWZ0X19ibHVlIC5haXJfX21lbnVMZWZ0X19zdWJtZW51X19hY3RpdmUgPiAuYWlyX19tZW51TGVmdF9fbGluayB7XG4gIGNvbG9yOiAjZmZmO1xufVxuLmFpcl9fbWVudUxlZnRfX2JsdWUgLmFpcl9fbWVudUxlZnRfX3N1Ym1lbnVfX2FjdGl2ZSA+IC5haXJfX21lbnVMZWZ0X19saW5rOmJlZm9yZSwgLmFpcl9fbWVudUxlZnRfX2JsdWUgLmFpcl9fbWVudUxlZnRfX3N1Ym1lbnVfX2FjdGl2ZSA+IC5haXJfX21lbnVMZWZ0X19saW5rOmFmdGVyIHtcbiAgYmFja2dyb3VuZDogI2ZmZiAhaW1wb3J0YW50O1xufVxuLmFpcl9fbWVudUxlZnRfX2JsdWUgLmFpcl9fbWVudUxlZnRfX3N1Ym1lbnUgPiAuYWlyX19tZW51TGVmdF9fbGluazpiZWZvcmUsIC5haXJfX21lbnVMZWZ0X19ibHVlIC5haXJfX21lbnVMZWZ0X19zdWJtZW51ID4gLmFpcl9fbWVudUxlZnRfX2xpbms6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kOiAjYWNhNmNjO1xufVxuLmFpcl9fbWVudUxlZnRfX2JsdWUgLmFpcl9fbWVudUxlZnRfX2NhdGVnb3J5LCAuYWlyX19tZW51TGVmdF9fYmx1ZSAuYWlyX19tZW51TGVmdF9fdXNlcl9fcm9sZSB7XG4gIGNvbG9yOiAjYWNhNmNjO1xufVxuLmFpcl9fbWVudUxlZnRfX2JsdWUgLmFpcl9fbWVudUxlZnRfX2Jhbm5lciB7XG4gIGJveC1zaGFkb3c6IDAgOHB4IDE1cHggLTVweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG59XG5cbi5haXJfX21lbnVMZWZ0X19ncmF5IHtcbiAgYmFja2dyb3VuZDogI2YyZjRmODtcbn1cbi5haXJfX21lbnVMZWZ0X19ncmF5IC5haXJfX21lbnVMZWZ0X19jYXRlZ29yeTphZnRlciB7XG4gIGJhY2tncm91bmQ6ICNlNWU5ZjE7XG59XG4uYWlyX19tZW51TGVmdF9fZ3JheSAuYWlyX19tZW51TGVmdF9fbGluayB7XG4gIGNvbG9yOiAjNzg2ZmE0O1xufVxuLmFpcl9fbWVudUxlZnRfX2dyYXkgLmFpcl9fbWVudUxlZnRfX2xpbms6aG92ZXIge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZDogIzFiNTVlMztcbn1cbi5haXJfX21lbnVMZWZ0X19ncmF5IC5haXJfX21lbnVMZWZ0X19saW5rOmhvdmVyOmJlZm9yZSwgLmFpcl9fbWVudUxlZnRfX2dyYXkgLmFpcl9fbWVudUxlZnRfX2xpbms6aG92ZXI6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kOiAjZmZmICFpbXBvcnRhbnQ7XG59XG4uYWlyX19tZW51TGVmdF9fZ3JheSAuYWlyX19tZW51TGVmdF9faXRlbV9fYWN0aXZlIC5haXJfX21lbnVMZWZ0X19saW5rIHtcbiAgY29sb3I6ICNmZmY7XG59XG4uYWlyX19tZW51TGVmdF9fZ3JheSAuYWlyX19tZW51TGVmdF9fc3VibWVudV9fYWN0aXZlIHtcbiAgYmFja2dyb3VuZDogI2U0ZTlmMDtcbn1cbi5haXJfX21lbnVMZWZ0X19ncmF5IC5haXJfX21lbnVMZWZ0X19zdWJtZW51X19hY3RpdmUgPiAuYWlyX19tZW51TGVmdF9fbGluayAuYWlyX19tZW51TGVmdF9faWNvbiB7XG4gIGNvbG9yOiAjNzg2ZmE0O1xufVxuLmFpcl9fbWVudUxlZnRfX2dyYXkgLmFpcl9fbWVudUxlZnRfX3N1Ym1lbnVfX2FjdGl2ZSA+IC5haXJfX21lbnVMZWZ0X19saW5rOmhvdmVyIC5haXJfX21lbnVMZWZ0X19pY29uIHtcbiAgY29sb3I6ICNmZmY7XG59XG4uYWlyX19tZW51TGVmdF9fdG9nZ2xlZC5haXJfX21lbnVMZWZ0X19ncmF5IC5haXJfX21lbnVMZWZ0X19zdWJtZW51X19hY3RpdmUge1xuICBiYWNrZ3JvdW5kOiAjZTRlOWYwICFpbXBvcnRhbnQ7XG59XG5cbi5haXJfX21lbnVMZWZ0X19ncmF5IC5haXJfX21lbnVMZWZ0X19zdWJtZW51ID4gLmFpcl9fbWVudUxlZnRfX2xpbms6YmVmb3JlLCAuYWlyX19tZW51TGVmdF9fZ3JheSAuYWlyX19tZW51TGVmdF9fc3VibWVudSA+IC5haXJfX21lbnVMZWZ0X19saW5rOmFmdGVyIHtcbiAgYmFja2dyb3VuZDogI2FjYTZjYztcbn1cbi5haXJfX21lbnVMZWZ0X19ncmF5IC5haXJfX21lbnVMZWZ0X19jYXRlZ29yeSwgLmFpcl9fbWVudUxlZnRfX2dyYXkgLmFpcl9fbWVudUxlZnRfX3VzZXJfX25hbWUge1xuICBjb2xvcjogIzc4NmZhNDtcbn1cbi5haXJfX21lbnVMZWZ0X19ncmF5IC5haXJfX21lbnVMZWZ0X191c2VyX19yb2xlIHtcbiAgY29sb3I6ICNhY2E2Y2M7XG59XG4uYWlyX19tZW51TGVmdF9fZ3JheSAuYWlyX19tZW51TGVmdF9fbG9nb19fbmFtZSB7XG4gIGNvbG9yOiAjMTYxNTM3O1xufVxuLmFpcl9fbWVudUxlZnRfX2dyYXkgLmFpcl9fbWVudUxlZnRfX2Jhbm5lciB7XG4gIGJveC1zaGFkb3c6IDAgOHB4IDE1cHggLTVweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG59XG5cbi5haXJfX21lbnVMZWZ0X193aGl0ZSB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG59XG4uYWlyX19tZW51TGVmdF9fd2hpdGUgLmFpcl9fbWVudUxlZnRfX2NhdGVnb3J5OmFmdGVyIHtcbiAgYmFja2dyb3VuZDogI2YyZjRmODtcbn1cbi5haXJfX21lbnVMZWZ0X193aGl0ZSAuYWlyX19tZW51TGVmdF9fbGluayB7XG4gIGNvbG9yOiAjNzg2ZmE0O1xufVxuLmFpcl9fbWVudUxlZnRfX3doaXRlIC5haXJfX21lbnVMZWZ0X19saW5rOmhvdmVyIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQ6ICMxYjU1ZTM7XG59XG4uYWlyX19tZW51TGVmdF9fd2hpdGUgLmFpcl9fbWVudUxlZnRfX2xpbms6aG92ZXI6YmVmb3JlLCAuYWlyX19tZW51TGVmdF9fd2hpdGUgLmFpcl9fbWVudUxlZnRfX2xpbms6aG92ZXI6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kOiAjZmZmICFpbXBvcnRhbnQ7XG59XG4uYWlyX19tZW51TGVmdF9fd2hpdGUgLmFpcl9fbWVudUxlZnRfX2l0ZW1fX2FjdGl2ZSAuYWlyX19tZW51TGVmdF9fbGluayB7XG4gIGNvbG9yOiAjZmZmO1xufVxuLmFpcl9fbWVudUxlZnRfX3doaXRlIC5haXJfX21lbnVMZWZ0X19zdWJtZW51X19hY3RpdmUge1xuICBiYWNrZ3JvdW5kOiAjZjJmNGY4O1xufVxuLmFpcl9fbWVudUxlZnRfX3doaXRlIC5haXJfX21lbnVMZWZ0X19zdWJtZW51X19hY3RpdmUgPiAuYWlyX19tZW51TGVmdF9fbGluayAuYWlyX19tZW51TGVmdF9faWNvbiB7XG4gIGNvbG9yOiAjNzg2ZmE0O1xufVxuLmFpcl9fbWVudUxlZnRfX3doaXRlIC5haXJfX21lbnVMZWZ0X19zdWJtZW51X19hY3RpdmUgPiAuYWlyX19tZW51TGVmdF9fbGluazpob3ZlciAuYWlyX19tZW51TGVmdF9faWNvbiB7XG4gIGNvbG9yOiAjZmZmO1xufVxuLmFpcl9fbWVudUxlZnRfX3RvZ2dsZWQuYWlyX19tZW51TGVmdF9fd2hpdGUgLmFpcl9fbWVudUxlZnRfX3N1Ym1lbnVfX2FjdGl2ZSB7XG4gIGJhY2tncm91bmQ6ICNmMmY0ZjggIWltcG9ydGFudDtcbn1cblxuLmFpcl9fbWVudUxlZnRfX3doaXRlIC5haXJfX21lbnVMZWZ0X19zdWJtZW51ID4gLmFpcl9fbWVudUxlZnRfX2xpbms6YmVmb3JlLCAuYWlyX19tZW51TGVmdF9fd2hpdGUgLmFpcl9fbWVudUxlZnRfX3N1Ym1lbnUgPiAuYWlyX19tZW51TGVmdF9fbGluazphZnRlciB7XG4gIGJhY2tncm91bmQ6ICNhY2E2Y2M7XG59XG4uYWlyX19tZW51TGVmdF9fd2hpdGUgLmFpcl9fbWVudUxlZnRfX2NhdGVnb3J5LCAuYWlyX19tZW51TGVmdF9fd2hpdGUgLmFpcl9fbWVudUxlZnRfX3VzZXJfX25hbWUge1xuICBjb2xvcjogIzc4NmZhNDtcbn1cbi5haXJfX21lbnVMZWZ0X193aGl0ZSAuYWlyX19tZW51TGVmdF9fdXNlcl9fcm9sZSB7XG4gIGNvbG9yOiAjYWNhNmNjO1xufVxuLmFpcl9fbWVudUxlZnRfX3doaXRlIC5haXJfX21lbnVMZWZ0X19sb2dvX19uYW1lIHtcbiAgY29sb3I6ICMxNjE1Mzc7XG59XG4uYWlyX19tZW51TGVmdF9fd2hpdGUgLmFpcl9fbWVudUxlZnRfX2Jhbm5lciB7XG4gIGJveC1zaGFkb3c6IDAgOHB4IDE1cHggLTVweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAuYWlyX19tZW51TGVmdF9fZmx5b3V0Om5vdCguYWlyX19tZW51TGVmdF9fdG9nZ2xlZCkgLmFpcl9fbWVudUxlZnRfX3N1Ym1lbnVfX2FjdGl2ZSB7XG4gICAgYmFja2dyb3VuZDogIzFiNTVlMztcbiAgfVxuICAuYWlyX19tZW51TGVmdF9fZmx5b3V0Om5vdCguYWlyX19tZW51TGVmdF9fdG9nZ2xlZCkgLmFpcl9fbWVudUxlZnRfX3N1Ym1lbnVfX2FjdGl2ZSA+IC5haXJfX21lbnVMZWZ0X19saW5rIHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgfVxuICAuYWlyX19tZW51TGVmdF9fZmx5b3V0Om5vdCguYWlyX19tZW51TGVmdF9fdG9nZ2xlZCkgLmFpcl9fbWVudUxlZnRfX3N1Ym1lbnVfX2FjdGl2ZSA+IC5haXJfX21lbnVMZWZ0X19saW5rIC5haXJfX21lbnVMZWZ0X19pY29uIHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgfVxuICAuYWlyX19tZW51TGVmdF9fZmx5b3V0Om5vdCguYWlyX19tZW51TGVmdF9fdG9nZ2xlZCkgLmFpcl9fbWVudUxlZnRfX3N1Ym1lbnUgPiAuYWlyX19tZW51TGVmdF9fbGlzdCB7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICB9XG4gIC5haXJfX21lbnVMZWZ0X19mbHlvdXQ6bm90KC5haXJfX21lbnVMZWZ0X190b2dnbGVkKSAuYWlyX19tZW51TGVmdF9fbGluazpiZWZvcmUge1xuICAgIHJpZ2h0OiAxLjJyZW07XG4gICAgdG9wOiA1MCU7XG4gIH1cbiAgLmFpcl9fbWVudUxlZnRfX2ZseW91dDpub3QoLmFpcl9fbWVudUxlZnRfX3RvZ2dsZWQpIC5haXJfX21lbnVMZWZ0X19saW5rOmFmdGVyIHtcbiAgICByaWdodDogMS4ycmVtO1xuICAgIHRvcDogNTAlO1xuICAgIG1hcmdpbi10b3A6IC0zcHg7XG4gIH1cbiAgLmFpcl9fbWVudUxlZnRfX2ZseW91dCAuYWlyX19tZW51TGVmdF9fbGluazpob3ZlciwgLmFpcl9fbWVudUxlZnRfX2NvbXBhY3QgLmFpcl9fbWVudUxlZnRfX2xpbms6aG92ZXIsIC5haXJfX21lbnVMZWZ0X190b2dnbGVkIC5haXJfX21lbnVMZWZ0X19saW5rOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjMWI1NWUzO1xuICB9XG4gIC5haXJfX21lbnVMZWZ0X19mbHlvdXQuYWlyX19tZW51Rmx5b3V0X19ibGFjayAuYWlyX19tZW51TGVmdF9fbGluazpob3ZlciwgLmFpcl9fbWVudUxlZnRfX2NvbXBhY3QuYWlyX19tZW51Rmx5b3V0X19ibGFjayAuYWlyX19tZW51TGVmdF9fbGluazpob3ZlciwgLmFpcl9fbWVudUxlZnRfX3RvZ2dsZWQuYWlyX19tZW51Rmx5b3V0X19ibGFjayAuYWlyX19tZW51TGVmdF9fbGluazpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogIzE2MTUzNztcbiAgfVxuICAuYWlyX19tZW51TGVmdF9fZmx5b3V0LmFpcl9fbWVudUZseW91dF9fZ3JheSAuYWlyX19tZW51TGVmdF9fbGluazpob3ZlciwgLmFpcl9fbWVudUxlZnRfX2NvbXBhY3QuYWlyX19tZW51Rmx5b3V0X19ncmF5IC5haXJfX21lbnVMZWZ0X19saW5rOmhvdmVyLCAuYWlyX19tZW51TGVmdF9fdG9nZ2xlZC5haXJfX21lbnVGbHlvdXRfX2dyYXkgLmFpcl9fbWVudUxlZnRfX2xpbms6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6ICNmMmY0Zjg7XG4gICAgY29sb3I6ICMxYjU1ZTM7XG4gIH1cbiAgLmFpcl9fbWVudUxlZnRfX2ZseW91dC5haXJfX21lbnVGbHlvdXRfX2dyYXkgLmFpcl9fbWVudUxlZnRfX2xpbms6aG92ZXI6YmVmb3JlLCAuYWlyX19tZW51TGVmdF9fZmx5b3V0LmFpcl9fbWVudUZseW91dF9fZ3JheSAuYWlyX19tZW51TGVmdF9fbGluazpob3ZlcjphZnRlciwgLmFpcl9fbWVudUxlZnRfX2NvbXBhY3QuYWlyX19tZW51Rmx5b3V0X19ncmF5IC5haXJfX21lbnVMZWZ0X19saW5rOmhvdmVyOmJlZm9yZSwgLmFpcl9fbWVudUxlZnRfX2NvbXBhY3QuYWlyX19tZW51Rmx5b3V0X19ncmF5IC5haXJfX21lbnVMZWZ0X19saW5rOmhvdmVyOmFmdGVyLCAuYWlyX19tZW51TGVmdF9fdG9nZ2xlZC5haXJfX21lbnVGbHlvdXRfX2dyYXkgLmFpcl9fbWVudUxlZnRfX2xpbms6aG92ZXI6YmVmb3JlLCAuYWlyX19tZW51TGVmdF9fdG9nZ2xlZC5haXJfX21lbnVGbHlvdXRfX2dyYXkgLmFpcl9fbWVudUxlZnRfX2xpbms6aG92ZXI6YWZ0ZXIge1xuICAgIGJhY2tncm91bmQ6ICMxYjU1ZTM7XG4gIH1cbiAgLmFpcl9fbWVudUxlZnRfX2ZseW91dC5haXJfX21lbnVGbHlvdXRfX3doaXRlIC5haXJfX21lbnVMZWZ0X19saW5rOmhvdmVyLCAuYWlyX19tZW51TGVmdF9fY29tcGFjdC5haXJfX21lbnVGbHlvdXRfX3doaXRlIC5haXJfX21lbnVMZWZ0X19saW5rOmhvdmVyLCAuYWlyX19tZW51TGVmdF9fdG9nZ2xlZC5haXJfX21lbnVGbHlvdXRfX3doaXRlIC5haXJfX21lbnVMZWZ0X19saW5rOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIGNvbG9yOiAjMWI1NWUzO1xuICB9XG4gIC5haXJfX21lbnVMZWZ0X19mbHlvdXQuYWlyX19tZW51Rmx5b3V0X193aGl0ZSAuYWlyX19tZW51TGVmdF9fbGluazpob3ZlcjpiZWZvcmUsIC5haXJfX21lbnVMZWZ0X19mbHlvdXQuYWlyX19tZW51Rmx5b3V0X193aGl0ZSAuYWlyX19tZW51TGVmdF9fbGluazpob3ZlcjphZnRlciwgLmFpcl9fbWVudUxlZnRfX2NvbXBhY3QuYWlyX19tZW51Rmx5b3V0X193aGl0ZSAuYWlyX19tZW51TGVmdF9fbGluazpob3ZlcjpiZWZvcmUsIC5haXJfX21lbnVMZWZ0X19jb21wYWN0LmFpcl9fbWVudUZseW91dF9fd2hpdGUgLmFpcl9fbWVudUxlZnRfX2xpbms6aG92ZXI6YWZ0ZXIsIC5haXJfX21lbnVMZWZ0X190b2dnbGVkLmFpcl9fbWVudUZseW91dF9fd2hpdGUgLmFpcl9fbWVudUxlZnRfX2xpbms6aG92ZXI6YmVmb3JlLCAuYWlyX19tZW51TGVmdF9fdG9nZ2xlZC5haXJfX21lbnVGbHlvdXRfX3doaXRlIC5haXJfX21lbnVMZWZ0X19saW5rOmhvdmVyOmFmdGVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjMWI1NWUzO1xuICB9XG4gIC5haXJfX21lbnVGbHlvdXQge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB6LWluZGV4OiAzMDAwO1xuICAgIHRvcDogMTAwcHg7XG4gICAgYm94LXNoYWRvdzogMCAwIDQwcHggLTEwcHggcmdiYSgyMiwgMjEsIDU1LCAwLjQpO1xuICAgIGJhY2tncm91bmQ6ICMxYjU1ZTM7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCBjYWxjKC01MCUgKyAyMHB4KSwgMCk7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMXMgZWFzZS1pbi1vdXQgIWltcG9ydGFudDtcbiAgICB0cmFuc2l0aW9uLWRlbGF5OiAwICFpbXBvcnRhbnQ7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogMCAwO1xuICB9XG4gIC5haXJfX21lbnVGbHlvdXQgLmFpcl9fbWVudUxlZnRfX2xpc3Qge1xuICAgIG1heC13aWR0aDogMzZyZW07XG4gICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbiAgfVxuICAuYWlyX19tZW51Rmx5b3V0IC5haXJfX21lbnVMZWZ0X19pdGVtIHtcbiAgICBmbG9hdDogbGVmdDtcbiAgICB3aWR0aDogMTJyZW07XG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCByZ2JhKDI0MiwgMjQ0LCAyNDgsIDAuMSk7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjQyLCAyNDQsIDI0OCwgMC4xKTtcbiAgfVxuICAuYWlyX19tZW51Rmx5b3V0IC5haXJfX21lbnVMZWZ0X19pdGVtOm50aC1jaGlsZCgzbisxKSB7XG4gICAgYm9yZGVyLWxlZnQ6IG5vbmU7XG4gIH1cbiAgLmFpcl9fbWVudUZseW91dCAuYWlyX19tZW51TGVmdF9faXRlbV9fYWN0aXZlIC5haXJfX21lbnVMZWZ0X19saW5rIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI0MiwgMjQ0LCAyNDgsIDAuMSk7XG4gIH1cbiAgLmFpcl9fbWVudUZseW91dCAuYWlyX19tZW51TGVmdF9fbGluayB7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgcGFkZGluZzogMXJlbSAycmVtO1xuICB9XG4gIC5haXJfX21lbnVGbHlvdXQgLmFpcl9fbWVudUxlZnRfX2xpbms6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjQyLCAyNDQsIDI0OCwgMC4xKTtcbiAgfVxuICAuYWlyX19tZW51Rmx5b3V0IC5haXJfX21lbnVMZWZ0X19saW5rID4gc3BhbiB7XG4gICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC5haXJfX21lbnVGbHlvdXRfX2JsYWNrLmFpcl9fbWVudUZseW91dCB7XG4gICAgYmFja2dyb3VuZDogIzE2MTUzNztcbiAgfVxuICAuYWlyX19tZW51Rmx5b3V0X193aGl0ZSAuYWlyX19tZW51TGVmdF9fbGluazpob3ZlcjpiZWZvcmUsIC5haXJfX21lbnVGbHlvdXRfX3doaXRlIC5haXJfX21lbnVMZWZ0X19saW5rOmhvdmVyOmFmdGVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjMWI1NWUzICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmFpcl9fbWVudUZseW91dF9fd2hpdGUgLmFpcl9fbWVudUxlZnRfX3N1Ym1lbnVfX2FjdGl2ZSA+IC5haXJfX21lbnVMZWZ0X19saW5rOmhvdmVyIHtcbiAgICBjb2xvcjogIzFiNTVlMztcbiAgfVxuICAuYWlyX19tZW51Rmx5b3V0X193aGl0ZSAuYWlyX19tZW51TGVmdF9fc3VibWVudV9fYWN0aXZlID4gLmFpcl9fbWVudUxlZnRfX2xpbms6aG92ZXIgLmFpcl9fbWVudUxlZnRfX2ljb24ge1xuICAgIGNvbG9yOiAjMWI1NWUzO1xuICB9XG4gIC5haXJfX21lbnVGbHlvdXRfX3doaXRlLmFpcl9fbWVudUZseW91dCB7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBib3gtc2hhZG93OiAwIDRweCAzOHB4IDAgcmdiYSgyMiwgMjEsIDU1LCAwLjExKSwgMCAwIDIxcHggMCByZ2JhKDIyLCAyMSwgNTUsIDAuMDUpO1xuICB9XG4gIC5haXJfX21lbnVGbHlvdXRfX3doaXRlLmFpcl9fbWVudUZseW91dCAuYWlyX19tZW51TGVmdF9faXRlbSB7XG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZjJmNGY4O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjJmNGY4O1xuICB9XG4gIC5haXJfX21lbnVGbHlvdXRfX3doaXRlLmFpcl9fbWVudUZseW91dCAuYWlyX19tZW51TGVmdF9fbGluayB7XG4gICAgY29sb3I6ICMxYjU1ZTM7XG4gIH1cbiAgLmFpcl9fbWVudUZseW91dF9fd2hpdGUuYWlyX19tZW51Rmx5b3V0IC5haXJfX21lbnVMZWZ0X19saW5rOmhvdmVyIHtcbiAgICBjb2xvcjogIzE2NDRiNTtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDIyMSwgMjI2LCAyMzYsIDAuMyk7XG4gIH1cbiAgLmFpcl9fbWVudUZseW91dF9fd2hpdGUuYWlyX19tZW51Rmx5b3V0IC5haXJfX21lbnVMZWZ0X19saW5rOmhvdmVyX19hY3RpdmUgLmFpcl9fbWVudUxlZnRfX2xpbmsge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjIxLCAyMjYsIDIzNiwgMC4zKTtcbiAgfVxuICAuYWlyX19tZW51Rmx5b3V0X19ncmF5IC5haXJfX21lbnVMZWZ0X19saW5rOmhvdmVyOmJlZm9yZSwgLmFpcl9fbWVudUZseW91dF9fZ3JheSAuYWlyX19tZW51TGVmdF9fbGluazpob3ZlcjphZnRlciB7XG4gICAgYmFja2dyb3VuZDogIzFiNTVlMyAhaW1wb3J0YW50O1xuICB9XG4gIC5haXJfX21lbnVGbHlvdXRfX2dyYXkgLmFpcl9fbWVudUxlZnRfX3N1Ym1lbnVfX2FjdGl2ZSA+IC5haXJfX21lbnVMZWZ0X19saW5rOmhvdmVyIHtcbiAgICBjb2xvcjogIzFiNTVlMztcbiAgfVxuICAuYWlyX19tZW51Rmx5b3V0X19ncmF5IC5haXJfX21lbnVMZWZ0X19zdWJtZW51X19hY3RpdmUgPiAuYWlyX19tZW51TGVmdF9fbGluazpob3ZlciAuYWlyX19tZW51TGVmdF9faWNvbiB7XG4gICAgY29sb3I6ICMxYjU1ZTM7XG4gIH1cbiAgLmFpcl9fbWVudUZseW91dF9fZ3JheS5haXJfX21lbnVGbHlvdXQge1xuICAgIGJhY2tncm91bmQ6ICNmMmY0Zjg7XG4gICAgYm94LXNoYWRvdzogMCA0cHggMzhweCAwIHJnYmEoMjIsIDIxLCA1NSwgMC4xMSksIDAgMCAyMXB4IDAgcmdiYSgyMiwgMjEsIDU1LCAwLjA1KTtcbiAgfVxuICAuYWlyX19tZW51Rmx5b3V0X19ncmF5LmFpcl9fbWVudUZseW91dCAuYWlyX19tZW51TGVmdF9faXRlbSB7XG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZTVlOWYxO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTVlOWYxO1xuICB9XG4gIC5haXJfX21lbnVGbHlvdXRfX2dyYXkuYWlyX19tZW51Rmx5b3V0IC5haXJfX21lbnVMZWZ0X19pdGVtX19hY3RpdmUgLmFpcl9fbWVudUxlZnRfX2xpbmsge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjIxLCAyMjYsIDIzNiwgMC4zKTtcbiAgfVxuICAuYWlyX19tZW51Rmx5b3V0X19ncmF5LmFpcl9fbWVudUZseW91dCAuYWlyX19tZW51TGVmdF9fbGluayB7XG4gICAgY29sb3I6ICMxYjU1ZTM7XG4gIH1cbiAgLmFpcl9fbWVudUZseW91dF9fZ3JheS5haXJfX21lbnVGbHlvdXQgLmFpcl9fbWVudUxlZnRfX2xpbms6aG92ZXIge1xuICAgIGNvbG9yOiAjMTY0NGI1O1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjIxLCAyMjYsIDIzNiwgMC4zKTtcbiAgfVxufSIsIi8vIENvbG9yc1xyXG4kd2hpdGU6ICNmZmY7XHJcbiRibGFjazogIzE2MTUzNztcclxuJGJsdWU6ICMxYjU1ZTM7XHJcbiRibHVlLWxpZ2h0OiAjM2Q2ZWU3O1xyXG4kZ3JheS0xOiAjZjJmNGY4O1xyXG4kZ3JheS0yOiAjZTRlOWYwO1xyXG4kZ3JheS0zOiAjZGRlMmVjO1xyXG4kZ3JheS00OiAjYzNiZWRjO1xyXG4kZ3JheS01OiAjYWNhNmNjO1xyXG4kZ3JheS02OiAjNzg2ZmE0O1xyXG4keWVsbG93OiAjZmYwO1xyXG4kb3JhbmdlOiAjZjJhNjU0O1xyXG4kcmVkOiAjZjAwO1xyXG4kcGluazogI2ZkMzk5NTtcclxuJHB1cnBsZTogIzY1MmVmZjtcclxuXHJcbiR0ZXh0OiAkZ3JheS02O1xyXG4kYm9yZGVyOiAkZ3JheS0yO1xyXG5cclxuLy8gQWNjZW50IGNvbG9yc1xyXG4kZGVmYXVsdDogJGdyYXktNDtcclxuJHByaW1hcnk6ICRibHVlO1xyXG4kc2Vjb25kYXJ5OiAjNmE3YTg0O1xyXG4kc3VjY2VzczogIzQ2YmU4YTtcclxuJGluZm86ICMwODg3Yzk7XHJcbiR3YXJuaW5nOiAjZjM5ODM0O1xyXG4kZGFuZ2VyOiAjZmI0MzRhO1xyXG4kbGlnaHQ6ICRncmF5LTE7XHJcbiRkYXJrOiAkYmxhY2s7XHJcblxyXG4vLyBGb250IEZhbWlseVxyXG4kYmFzZS1mb250LWZhbWlseTogJ1NvdXJjZSBTYW5zIFBybycsIHNhbnMtc2VyaWY7XHJcblxyXG4vLyBGb250IFNpemVcclxuJGJhc2UtZm9udC1zaXplOiAxNSAhZGVmYXVsdDtcclxuXHJcbi8vIFNoYWRvd3NcclxuJHNoYWRvdzogMCAwIDQwcHggLTEwcHggcmdiYSgkYmxhY2ssIDAuMik7XHJcbiRzaGFkb3ctMjogMCA0cHggMzhweCAwIHJnYmEoJGJsYWNrLCAwLjExKSwgMCAwIDIxcHggMCByZ2JhKCRibGFjaywgMC4wNSk7XHJcbiRzaGFkb3ctMzogMCAwIDEwMHB4IC0zMHB4IHJnYmEoNTcsIDU1LCA3MywgMC4zKTtcclxuJHNoYWRvdy00OiAwIDRweCAxMHB4IDAgcmdiYSgkYmxhY2ssIDAuMDMpLCAwIDAgMTBweCAwIHJnYmEoJGJsYWNrLCAwLjAyKTtcclxuJHNoYWRvdy01OiAwIDAgNDBweCAtMTBweCByZ2JhKCRibGFjaywgMC40KTtcclxuJHNoYWRvdy1hbnQ6IDAgMTBweCAzNXB4IC01cHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcclxuXHJcbi8vIENvbnZlcnQgdmFsdWUgb2YgcmVtKCkgc2FzcyBtaXhpbiBmdW5jdGlvblxyXG5AZnVuY3Rpb24gcmVtKCRweCwgJGJhc2U6ICRiYXNlLWZvbnQtc2l6ZSkge1xyXG4gIEByZXR1cm4gI3tmbG9vcigoJHB4LyRiYXNlKSAqIDEwMCkgLyAxMDB9cmVtOyAvLyB0byBSRU1zXHJcbiAgLy8gQHJldHVybiAjeyRweH1weDsgLy8gdG8gUFgnc1xyXG59XHJcblxyXG4vLyBUcmFuc2l0aW9uc1xyXG5AbWl4aW4gdHJhbnNpdGlvbi1iZygpIHtcclxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMnMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuQG1peGluIHRyYW5zaXRpb24tY29sb3IoKSB7XHJcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4ycyBlYXNlLWluLW91dDtcclxufVxyXG5AbWl4aW4gdHJhbnNpdGlvbi1mYXN0KCkge1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjA1cyBlYXNlLWluLW91dDtcclxufVxyXG5AbWl4aW4gdHJhbnNpdGlvbi1taWRkbGUoKSB7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMXMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuQG1peGluIHRyYW5zaXRpb24tc2xvdygpIHtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuLy8gUmVzcG9uc2l2ZSB1dGlsc1xyXG4keHhsLW1pbi13aWR0aDogMTYwMHB4O1xyXG4keHhsLW1heC13aWR0aDogMTU5OXB4O1xyXG4keGwtbWluLXdpZHRoOiAxMjAwcHg7XHJcbiR4bC1tYXgtd2lkdGg6IDExOTlweDtcclxuJG1kLW1pbi13aWR0aDogOTkycHg7XHJcbiRtZC1tYXgtd2lkdGg6IDk5MXB4O1xyXG4kc20tbWluLXdpZHRoOiA3NjhweDtcclxuJHNtLW1heC13aWR0aDogNzY3cHg7XHJcbiR4cy1taW4td2lkdGg6IDU0NHB4O1xyXG4keHMtbWF4LXdpZHRoOiA1NDNweDtcclxuIl19 */"

/***/ }),

/***/ "./src/app/pages/asset/model-detail/model-detail.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/asset/model-detail/model-detail.component.ts ***!
  \********************************************************************/
/*! exports provided: ModelDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModelDetailComponent", function() { return ModelDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _model_detail_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./model-detail.service */ "./src/app/pages/asset/model-detail/model-detail.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_menu_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/menu.service */ "./src/app/services/menu.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var src_app_sdk_asset_services_asset_model_list_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/sdk/asset/services/asset-model-list.service */ "./src/app/sdk/asset/services/asset-model-list.service.ts");
/* harmony import */ var src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/sdk/asset/services */ "./src/app/sdk/asset/services.ts");










var ModelDetailComponent = /** @class */ (function () {
    function ModelDetailComponent(menuService, router, activatedRoute, assetModelListService, assetModelxService, modelDetailService, assetPartIdService, assetLifeLimitService, assetConditionMonitoringService, vendorVendorService, spinner) {
        this.menuService = menuService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.assetModelListService = assetModelListService;
        this.assetModelxService = assetModelxService;
        this.modelDetailService = modelDetailService;
        this.assetPartIdService = assetPartIdService;
        this.assetLifeLimitService = assetLifeLimitService;
        this.assetConditionMonitoringService = assetConditionMonitoringService;
        this.vendorVendorService = vendorVendorService;
        this.spinner = spinner;
        this.menuData = [];
        this.activeSubmenu = '';
        this.activeItem = '';
        this.renderedFlyoutItems = {};
        this.flyoutTimers = {};
        this.flyoutActive = false;
        this.objectKeys = Object.keys;
        this.id_model = '';
        this.model = {};
        this.dataModel = {};
        this.foto = 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png';
    }
    ModelDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.paramMap.subscribe(function (params) {
            if (params.get('id_model')) {
                _this.id_model = params.get('id_model');
                _this.modelDetailService.setIdModel(_this.id_model);
            }
            _this.getModel();
        });
        this.menuData = [
            {
                title: 'Dashboard',
                key: 'view',
                icon: 'fe fe-bookmark',
                url: 'view',
            },
            {
                title: 'Stock',
                key: 'hubungan-kerja',
                icon: 'fe fe-bookmark',
                url: 'stock',
            },
            {
                title: 'Perbaikan',
                key: 'dipecat',
                icon: 'fe fe-bookmark',
                url: '/hr/direktori/module/dipecat',
            },
            {
                title: 'Riwayat',
                key: 'Lainnya',
                icon: 'fe fe-home',
                count: 6,
                children: [
                    {
                        title: 'Pembelian',
                        key: 'riwayat/pembelian',
                        icon: 'fe fe-bookmark',
                        url: 'riwayat/pembelian',
                    },
                    {
                        title: 'Permintaan',
                        key: 'riwayat/permintaan',
                        icon: 'fe fe-bookmark',
                        url: 'riwayat/permintaan',
                    },
                    {
                        title: 'Pemakaian',
                        key: 'proyek',
                        icon: 'fe fe-bookmark',
                        url: 'lainnya/proyek',
                    },
                ],
            },
            {
                category: true,
                title: 'Pengaturan',
            },
            {
                title: 'Owner',
                key: 'pengaturan/owner',
                icon: 'fe fe-bookmark',
                url: 'pengaturan/owner',
            },
            {
                title: 'Maintenance',
                key: 'maintenance',
                icon: 'fe fe-bookmark',
                url: 'maintenance',
            },
        ];
        // this.setActiveItems(this.router.url)
        this.router.events
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__["NavigationStart"]; }))
            .subscribe(function (event) {
            // this.setActiveItems(event.url ? event.url : null)
        });
    };
    // getModel() {
    //     this.spinner.show()
    //     this.assetModelxService.getAssetModelxesId(this.id_model).subscribe(
    //         data => {
    //             this.spinner.hide()
    //             this.model = data.data;
    //             this.getPartId(this.model.id_part_id)
    //             this.getConditionMonitoring(this.model.id_condition_monitoring)
    //             this.getLifeLimit(this.model.id_life_limit)
    //         },
    //         err => {
    //             this.spinner.hide()
    //         }
    //     )
    // }
    // partId: Part_id = {};
    // getPartId(id) {
    //     this.assetPartIdService.getAssetPartIdsId(id).subscribe(
    //         data => {
    //             this.partId = data.data
    //         }
    //     )
    // }
    // lifeLimit: Life_limit = {};
    // getLifeLimit(id) {
    //     this.assetLifeLimitService.getAssetLifeLimitsId(id).subscribe(
    //         data => {
    //             this.lifeLimit = data.data
    //         }
    //     )
    // }
    // conditionMonitoring: Condition_monitoring = {};
    // getConditionMonitoring(id) {
    //     this.assetConditionMonitoringService.getAssetConditionMonitoringsId(id).subscribe(
    //         data => {
    //             this.conditionMonitoring = data.data
    //         }
    //     )
    // }
    ModelDetailComponent.prototype.toggleMobileMenu = function () { };
    ModelDetailComponent.prototype.toggleMenu = function () { };
    ModelDetailComponent.prototype.toggleSettings = function () { };
    ModelDetailComponent.prototype.handleSubmenuClick = function (key) {
        var currentKey = this.activeSubmenu;
        if (this.flyoutActive) {
            return;
        }
        this.activeSubmenu = currentKey === key ? '' : key;
    };
    ModelDetailComponent.prototype.setActiveItems = function (pathname) {
        var menuData = this.menuData;
        var flattenItems = function (items, key) {
            return items.reduce(function (flattenedItems, item) {
                flattenedItems.push(item);
                if (Array.isArray(item[key])) {
                    return flattenedItems.concat(flattenItems(item[key], key));
                }
                return flattenedItems;
            }, []);
        };
        var activeItem = lodash__WEBPACK_IMPORTED_MODULE_7__["find"](flattenItems(menuData, 'children'), ['url', pathname]);
        var activeSubmenu = menuData.reduce(function (key, parent) {
            if (Array.isArray(parent.children)) {
                parent.children.map(function (child) {
                    if (child.key === activeItem.key) {
                        key = parent;
                    }
                    return '';
                });
            }
            return key;
        });
        this.activeItem = activeItem.key;
        this.activeSubmenu = activeSubmenu.key;
    };
    ModelDetailComponent.prototype.handleFlyoutOver = function (event, key, items) {
        var _a;
        if (this.flyoutActive) {
            clearInterval(this.flyoutTimers[key]);
            var item = event.currentTarget;
            var itemDimensions = item.getBoundingClientRect();
            this.renderedFlyoutItems = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.renderedFlyoutItems, (_a = {}, _a[key] = {
                key: key,
                itemDimensions: itemDimensions,
                items: items,
            }, _a));
        }
    };
    ModelDetailComponent.prototype.handleFlyoutOut = function (key) {
        var _this = this;
        if (this.flyoutActive) {
            this.flyoutTimers[key] = setTimeout(function () {
                var updatedFlyoutItems = Object.assign({}, _this.renderedFlyoutItems);
                delete updatedFlyoutItems[key];
                _this.renderedFlyoutItems = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, updatedFlyoutItems);
            }, 100);
        }
    };
    ModelDetailComponent.prototype.handleFlyoutContainerOver = function (key) {
        clearInterval(this.flyoutTimers[key]);
    };
    ModelDetailComponent.prototype.getModel = function () {
        var _this = this;
        this.assetModelxService.getAssetModelxesId(this.id_model).subscribe(function (data) {
            _this.dataModel = data.data;
            if (data.data.foto) {
                _this.foto = "http://erp-document.vm.devetek.com/download?id_document=" + data.data.foto;
            }
        });
    };
    ModelDetailComponent.prototype.UpdateFoto = function () {
        this.router.navigate(['/asset/model', this.id_model, 'foto']);
    };
    ModelDetailComponent.ctorParameters = function () { return [
        { type: src_app_services_menu_service__WEBPACK_IMPORTED_MODULE_4__["MenuService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
        { type: src_app_sdk_asset_services_asset_model_list_service__WEBPACK_IMPORTED_MODULE_8__["AssetModelListService"] },
        { type: src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_9__["AssetModelxService"] },
        { type: _model_detail_service__WEBPACK_IMPORTED_MODULE_2__["ModelDetailService"] },
        { type: src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_9__["AssetPartIdService"] },
        { type: src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_9__["AssetLifeLimitService"] },
        { type: src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_9__["AssetConditionMonitoringService"] },
        { type: src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_9__["VendorVendorService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_1__["NgxSpinnerService"] }
    ]; };
    ModelDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-model-detail',
            template: __webpack_require__(/*! raw-loader!./model-detail.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/asset/model-detail/model-detail.component.html"),
            styles: [__webpack_require__(/*! ./model-detail.component.scss */ "./src/app/pages/asset/model-detail/model-detail.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_menu_service__WEBPACK_IMPORTED_MODULE_4__["MenuService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            src_app_sdk_asset_services_asset_model_list_service__WEBPACK_IMPORTED_MODULE_8__["AssetModelListService"],
            src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_9__["AssetModelxService"],
            _model_detail_service__WEBPACK_IMPORTED_MODULE_2__["ModelDetailService"],
            src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_9__["AssetPartIdService"],
            src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_9__["AssetLifeLimitService"],
            src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_9__["AssetConditionMonitoringService"],
            src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_9__["VendorVendorService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_1__["NgxSpinnerService"]])
    ], ModelDetailComponent);
    return ModelDetailComponent;
}());



/***/ }),

/***/ "./src/app/pages/asset/model-detail/model-detail.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/asset/model-detail/model-detail.module.ts ***!
  \*****************************************************************/
/*! exports provided: ModelDetailModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModelDetailModule", function() { return ModelDetailModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_pipe_pipe_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/pipe/pipe.module */ "./src/app/pipe/pipe.module.ts");
/* harmony import */ var _model_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./model-detail.component */ "./src/app/pages/asset/model-detail/model-detail.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _model_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./model-detail-routing.module */ "./src/app/pages/asset/model-detail/model-detail-routing.module.ts");
/* harmony import */ var _detail_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./detail/detail.component */ "./src/app/pages/asset/model-detail/detail/detail.component.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/angular-reactive-forms-helper */ "./src/app/services/angular-reactive-forms-helper.ts");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var _custom_field_custom_field_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./custom-field/custom-field.component */ "./src/app/pages/asset/model-detail/custom-field/custom-field.component.ts");
/* harmony import */ var _spesification_spesification_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./spesification/spesification.component */ "./src/app/pages/asset/model-detail/spesification/spesification.component.ts");
/* harmony import */ var _maintenance_maintenance_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./maintenance/maintenance.component */ "./src/app/pages/asset/model-detail/maintenance/maintenance.component.ts");
/* harmony import */ var _maintenance_code_maintenance_code_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./maintenance-code/maintenance-code.component */ "./src/app/pages/asset/model-detail/maintenance-code/maintenance-code.component.ts");
/* harmony import */ var _model_life_model_life_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./model-life/model-life.component */ "./src/app/pages/asset/model-detail/model-life/model-life.component.ts");
/* harmony import */ var _componen_componen_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./componen/componen.component */ "./src/app/pages/asset/model-detail/componen/componen.component.ts");
/* harmony import */ var _consumsiable_consumsiable_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./consumsiable/consumsiable.component */ "./src/app/pages/asset/model-detail/consumsiable/consumsiable.component.ts");
/* harmony import */ var _license_license_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./license/license.component */ "./src/app/pages/asset/model-detail/license/license.component.ts");
/* harmony import */ var _view_view_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./view/view.component */ "./src/app/pages/asset/model-detail/view/view.component.ts");
/* harmony import */ var _pengaturan_category_category_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pengaturan/category/category.component */ "./src/app/pages/asset/model-detail/pengaturan/category/category.component.ts");
/* harmony import */ var _pengaturan_owner_owner_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./pengaturan/owner/owner.component */ "./src/app/pages/asset/model-detail/pengaturan/owner/owner.component.ts");
/* harmony import */ var _pengaturan_searc_owner_searc_owner_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./pengaturan/searc-owner/searc-owner.component */ "./src/app/pages/asset/model-detail/pengaturan/searc-owner/searc-owner.component.ts");
/* harmony import */ var _riwayat_pembelian_pembelian_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./riwayat/pembelian/pembelian.component */ "./src/app/pages/asset/model-detail/riwayat/pembelian/pembelian.component.ts");
/* harmony import */ var _riwayat_permintaan_permintaan_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./riwayat/permintaan/permintaan.component */ "./src/app/pages/asset/model-detail/riwayat/permintaan/permintaan.component.ts");
/* harmony import */ var _stock_stock_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./stock/stock.component */ "./src/app/pages/asset/model-detail/stock/stock.component.ts");
/* harmony import */ var src_app_components_document_document_module__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! src/app/components/document/document.module */ "./src/app/components/document/document.module.ts");
/* harmony import */ var _foto_foto_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./foto/foto.component */ "./src/app/pages/asset/model-detail/foto/foto.component.ts");




























var ModelDetailModule = /** @class */ (function () {
    function ModelDetailModule() {
    }
    ModelDetailModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [_model_detail_component__WEBPACK_IMPORTED_MODULE_2__["ModelDetailComponent"], _detail_detail_component__WEBPACK_IMPORTED_MODULE_6__["DetailComponent"], _custom_field_custom_field_component__WEBPACK_IMPORTED_MODULE_11__["CustomFieldComponent"], _foto_foto_component__WEBPACK_IMPORTED_MODULE_27__["FotoComponent"], _spesification_spesification_component__WEBPACK_IMPORTED_MODULE_12__["SpesificationComponent"], _maintenance_maintenance_component__WEBPACK_IMPORTED_MODULE_13__["MaintenanceComponent"], _maintenance_code_maintenance_code_component__WEBPACK_IMPORTED_MODULE_14__["MaintenanceCodeComponent"], _model_life_model_life_component__WEBPACK_IMPORTED_MODULE_15__["ModelLifeComponent"], _componen_componen_component__WEBPACK_IMPORTED_MODULE_16__["ComponenComponent"], _consumsiable_consumsiable_component__WEBPACK_IMPORTED_MODULE_17__["ConsumsiableComponent"], _license_license_component__WEBPACK_IMPORTED_MODULE_18__["LicenseComponent"], _view_view_component__WEBPACK_IMPORTED_MODULE_19__["ViewComponent"], _pengaturan_category_category_component__WEBPACK_IMPORTED_MODULE_20__["CategoryComponent"], _pengaturan_owner_owner_component__WEBPACK_IMPORTED_MODULE_21__["OwnerComponent"], _pengaturan_searc_owner_searc_owner_component__WEBPACK_IMPORTED_MODULE_22__["SearcOwnerComponent"], _riwayat_pembelian_pembelian_component__WEBPACK_IMPORTED_MODULE_23__["PembelianComponent"], _riwayat_permintaan_permintaan_component__WEBPACK_IMPORTED_MODULE_24__["PermintaanComponent"], _stock_stock_component__WEBPACK_IMPORTED_MODULE_25__["StockComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _model_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__["ModelDetailRoutingModule"],
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__["NgZorroAntdModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_10__["PerfectScrollbarModule"],
                src_app_components_document_document_module__WEBPACK_IMPORTED_MODULE_26__["DocumentModule"],
                src_app_pipe_pipe_module__WEBPACK_IMPORTED_MODULE_1__["PipeModule"]
            ],
            providers: [
                src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_9__["FormBuilderTypeSafe"]
            ],
            entryComponents: [_custom_field_custom_field_component__WEBPACK_IMPORTED_MODULE_11__["CustomFieldComponent"], _maintenance_code_maintenance_code_component__WEBPACK_IMPORTED_MODULE_14__["MaintenanceCodeComponent"], _model_life_model_life_component__WEBPACK_IMPORTED_MODULE_15__["ModelLifeComponent"], _pengaturan_searc_owner_searc_owner_component__WEBPACK_IMPORTED_MODULE_22__["SearcOwnerComponent"]]
        })
    ], ModelDetailModule);
    return ModelDetailModule;
}());



/***/ }),

/***/ "./src/app/pages/asset/model-detail/model-life/model-life.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/asset/model-detail/model-life/model-life.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Fzc2V0L21vZGVsLWRldGFpbC9tb2RlbC1saWZlL21vZGVsLWxpZmUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/asset/model-detail/model-life/model-life.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/asset/model-detail/model-life/model-life.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ModelLifeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModelLifeComponent", function() { return ModelLifeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sdk/asset/services */ "./src/app/sdk/asset/services.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/tool/pesan.service */ "./src/app/services/tool/pesan.service.ts");






var ModelLifeComponent = /** @class */ (function () {
    function ModelLifeComponent(drawerRef, spinner, pesan, assetModelLifeService) {
        this.drawerRef = drawerRef;
        this.spinner = spinner;
        this.pesan = pesan;
        this.assetModelLifeService = assetModelLifeService;
        this.value = '';
        this.modelLife = {};
    }
    ModelLifeComponent.prototype.ngOnInit = function () {
    };
    ModelLifeComponent.prototype.close = function () {
        this.drawerRef.close(this.value);
    };
    ModelLifeComponent.prototype.addModelLife = function () {
        var _this = this;
        this.spinner.show();
        this.assetModelLifeService.postAssetModelLives(this.modelLife).subscribe(function (data) {
            _this.spinner.hide();
            _this.close();
        }, function (err) {
            _this.spinner.hide();
            _this.pesan.pesanWarningForm('Model life sudah ada');
        });
    };
    ModelLifeComponent.ctorParameters = function () { return [
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzDrawerRef"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"] },
        { type: src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_5__["PesanService"] },
        { type: src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_2__["AssetModelLifeService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ModelLifeComponent.prototype, "value", void 0);
    ModelLifeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-model-life',
            template: __webpack_require__(/*! raw-loader!./model-life.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/asset/model-detail/model-life/model-life.component.html"),
            styles: [__webpack_require__(/*! ./model-life.component.scss */ "./src/app/pages/asset/model-detail/model-life/model-life.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzDrawerRef"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"],
            src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_5__["PesanService"],
            src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_2__["AssetModelLifeService"]])
    ], ModelLifeComponent);
    return ModelLifeComponent;
}());



/***/ }),

/***/ "./src/app/pages/asset/model-detail/pengaturan/category/category.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/pages/asset/model-detail/pengaturan/category/category.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Fzc2V0L21vZGVsLWRldGFpbC9wZW5nYXR1cmFuL2NhdGVnb3J5L2NhdGVnb3J5LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/asset/model-detail/pengaturan/category/category.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/pages/asset/model-detail/pengaturan/category/category.component.ts ***!
  \************************************************************************************/
/*! exports provided: CategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryComponent", function() { return CategoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sdk/asset/services */ "./src/app/sdk/asset/services.ts");
/* harmony import */ var _model_detail_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../model-detail.service */ "./src/app/pages/asset/model-detail/model-detail.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/tool/pesan.service */ "./src/app/services/tool/pesan.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");







var CategoryComponent = /** @class */ (function () {
    function CategoryComponent(spinner, pesan, assetModelCategoryMasterService, AssetModelCategoryService, modelDetailService, router) {
        this.spinner = spinner;
        this.pesan = pesan;
        this.assetModelCategoryMasterService = assetModelCategoryMasterService;
        this.AssetModelCategoryService = AssetModelCategoryService;
        this.modelDetailService = modelDetailService;
        this.router = router;
        this.id_model = null;
        this.listCategory = [];
        this.id_model_category_master = '';
    }
    CategoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.modelDetailService.getIdModel().subscribe(function (data) {
            if (data) {
                _this.id_model = data;
                _this.getCategory();
            }
        });
    };
    CategoryComponent.prototype.getCategory = function () {
        var _this = this;
        this.assetModelCategoryMasterService.getAssetModelCategoryMasters().subscribe(function (data) {
            var out = [];
            data.data.forEach(function (item) {
                var param = item;
                if (param.id_model_category_master == _this.id_model_category_master) {
                    param.id_model_category_master = true;
                }
                else
                    (param.id_model_category_master = false);
                out.push(param);
            });
            _this.listCategory = out;
        });
    };
    CategoryComponent.prototype.postCategory = function (data) {
        var _this = this;
        if (data.id_model_category_master == true) {
            data.id_model_category_master = data.id_model_category_master;
        }
        else {
            data.id_model_category_master = null;
        }
        var param = {
            id_model_category_master: data.id_model_category_master,
            id_model: this.id_model,
        };
        this.spinner.show();
        this.AssetModelCategoryService.postAssetModelCategories(param).subscribe(function (data) {
            _this.spinner.hide();
        }, function (err) {
            _this.spinner.hide();
            _this.pesan.pesanWarningForm('gagal di update');
        });
    };
    CategoryComponent.ctorParameters = function () { return [
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"] },
        { type: src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_5__["PesanService"] },
        { type: src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_2__["AssetModelCategoryMasterService"] },
        { type: src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_2__["AssetModelCategoryService"] },
        { type: _model_detail_service__WEBPACK_IMPORTED_MODULE_3__["ModelDetailService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
    ]; };
    CategoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-category',
            template: __webpack_require__(/*! raw-loader!./category.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/asset/model-detail/pengaturan/category/category.component.html"),
            styles: [__webpack_require__(/*! ./category.component.scss */ "./src/app/pages/asset/model-detail/pengaturan/category/category.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"],
            src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_5__["PesanService"],
            src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_2__["AssetModelCategoryMasterService"],
            src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_2__["AssetModelCategoryService"],
            _model_detail_service__WEBPACK_IMPORTED_MODULE_3__["ModelDetailService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
    ], CategoryComponent);
    return CategoryComponent;
}());



/***/ }),

/***/ "./src/app/pages/asset/model-detail/pengaturan/owner/owner.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/pages/asset/model-detail/pengaturan/owner/owner.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Fzc2V0L21vZGVsLWRldGFpbC9wZW5nYXR1cmFuL293bmVyL293bmVyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/asset/model-detail/pengaturan/owner/owner.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/pages/asset/model-detail/pengaturan/owner/owner.component.ts ***!
  \******************************************************************************/
/*! exports provided: OwnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OwnerComponent", function() { return OwnerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sdk/asset/services */ "./src/app/sdk/asset/services.ts");
/* harmony import */ var _model_detail_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../model-detail.service */ "./src/app/pages/asset/model-detail/model-detail.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/angular-reactive-forms-helper */ "./src/app/services/angular-reactive-forms-helper.ts");
/* harmony import */ var src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/tool/pesan.service */ "./src/app/services/tool/pesan.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _searc_owner_searc_owner_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../searc-owner/searc-owner.component */ "./src/app/pages/asset/model-detail/pengaturan/searc-owner/searc-owner.component.ts");










var OwnerComponent = /** @class */ (function () {
    function OwnerComponent(assetModelOwnerMasterService, assetModelOwnerService, modelDetailService, spinner, notification, fb, pesan, router, drawerService) {
        this.assetModelOwnerMasterService = assetModelOwnerMasterService;
        this.assetModelOwnerService = assetModelOwnerService;
        this.modelDetailService = modelDetailService;
        this.spinner = spinner;
        this.notification = notification;
        this.fb = fb;
        this.pesan = pesan;
        this.router = router;
        this.drawerService = drawerService;
        this.listOwner = [];
        this.id_model = null;
        this.id_model_owner_master = '';
        this.dataItem = {};
    }
    OwnerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.modelDetailService.getIdModel().subscribe(function (data) {
            if (data) {
                _this.id_model = data;
                console.log('sadasda ' + _this.id_model);
                _this.getlistOwner();
            }
        });
    };
    OwnerComponent.prototype.add_item = function () {
        var _this = this;
        var drawerRef = this.drawerService.create({
            nzTitle: 'Search Model',
            nzContent: _searc_owner_searc_owner_component__WEBPACK_IMPORTED_MODULE_9__["SearcOwnerComponent"],
            nzWidth: '900px',
            nzContentParams: {
                value: 'arifan'
            }
        });
        drawerRef.afterOpen.subscribe(function () {
            console.log('Drawer(Component) open');
        });
        drawerRef.afterClose.subscribe(function (data) {
            if (typeof data === 'string') {
                _this.id_model_owner_master = data;
                _this.beforeModel();
            }
        });
    };
    OwnerComponent.prototype.getlistOwner = function () {
        var _this = this;
        var param = {
            id_model: this.id_model,
        };
        this.assetModelOwnerService.getAssetModelOwners(JSON.stringify(param)).subscribe(function (data) {
            _this.listOwner = data.data;
        });
    };
    OwnerComponent.prototype.deleteItem = function (id) {
        var _this = this;
        this.spinner.show();
        this.assetModelOwnerService.deleteAssetModelOwnersId(id).subscribe(function (data) {
            _this.getlistOwner();
            _this.spinner.hide();
        });
    };
    OwnerComponent.prototype.beforeModel = function () {
        var _this = this;
        console.log("panggie ko");
        this.spinner.show();
        this.assetModelOwnerMasterService.getAssetModelOwnerMastersId(this.id_model_owner_master).subscribe(function (data) {
            _this.dataItem.name_model_owner = data.data.name_model_owner;
            _this.dataItem.model_owner_desc = data.data.model_owner_desc;
            _this.dataItem.id_model_owner_master = data.data.id_model_owner_master;
            _this.spinner.hide();
            console.log(_this.dataItem);
        });
    };
    OwnerComponent.prototype.simpan_item = function () {
        var _this = this;
        var param = {
            id_model: this.id_model,
            id_model_owner_master: this.dataItem.id_model_owner_master
        };
        this.spinner.show();
        //simpan ka server
        this.assetModelOwnerService.postAssetModelOwners(param).subscribe(function (data) {
            _this.id_model_owner_master = null;
            _this.spinner.hide();
            _this.getlistOwner();
        }, function (err) {
            _this.spinner.hide();
            _this.pesan.pesanWarningForm('Dupikat pembelian Item!');
        });
    };
    OwnerComponent.ctorParameters = function () { return [
        { type: src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_2__["AssetModelOwnerMasterService"] },
        { type: src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_2__["AssetModelOwnerService"] },
        { type: _model_detail_service__WEBPACK_IMPORTED_MODULE_3__["ModelDetailService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzNotificationService"] },
        { type: src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_6__["FormBuilderTypeSafe"] },
        { type: src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_7__["PesanService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzDrawerService"] }
    ]; };
    OwnerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-owner',
            template: __webpack_require__(/*! raw-loader!./owner.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/asset/model-detail/pengaturan/owner/owner.component.html"),
            styles: [__webpack_require__(/*! ./owner.component.scss */ "./src/app/pages/asset/model-detail/pengaturan/owner/owner.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_2__["AssetModelOwnerMasterService"],
            src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_2__["AssetModelOwnerService"],
            _model_detail_service__WEBPACK_IMPORTED_MODULE_3__["ModelDetailService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzNotificationService"],
            src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_6__["FormBuilderTypeSafe"],
            src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_7__["PesanService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzDrawerService"]])
    ], OwnerComponent);
    return OwnerComponent;
}());



/***/ }),

/***/ "./src/app/pages/asset/model-detail/pengaturan/searc-owner/searc-owner.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/pages/asset/model-detail/pengaturan/searc-owner/searc-owner.component.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Fzc2V0L21vZGVsLWRldGFpbC9wZW5nYXR1cmFuL3NlYXJjLW93bmVyL3NlYXJjLW93bmVyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/asset/model-detail/pengaturan/searc-owner/searc-owner.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/pages/asset/model-detail/pengaturan/searc-owner/searc-owner.component.ts ***!
  \******************************************************************************************/
/*! exports provided: SearcOwnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearcOwnerComponent", function() { return SearcOwnerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sdk/asset/services */ "./src/app/sdk/asset/services.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");




var SearcOwnerComponent = /** @class */ (function () {
    function SearcOwnerComponent(drawerRef, assetModelOwnerMasterService) {
        this.drawerRef = drawerRef;
        this.assetModelOwnerMasterService = assetModelOwnerMasterService;
        this.value = '';
        this.pageIndex = 1;
        this.pageSize = 10;
        this.total = 1;
        this.listOfData = [];
        this.loading = true;
        this.sortValue = null;
        this.sortKey = null;
        this.search = '';
    }
    SearcOwnerComponent.prototype.ngOnInit = function () {
        this.searchData();
    };
    SearcOwnerComponent.prototype.close = function () {
        this.drawerRef.close(this.value);
    };
    SearcOwnerComponent.prototype.sort = function (sort) {
        this.sortKey = sort.key;
        this.sortValue = sort.value;
        this.searchData();
    };
    SearcOwnerComponent.prototype.searchData = function (reset) {
        var _this = this;
        if (reset === void 0) { reset = false; }
        if (reset) {
            this.pageIndex = 1;
        }
        this.loading = true;
        this.assetModelOwnerMasterService
            .getAssetModelOwnerMasters(JSON.stringify({
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
        });
    };
    SearcOwnerComponent.prototype.updateFilter = function (value) {
        this.search = value;
        this.searchData(true);
    };
    SearcOwnerComponent.prototype.selectModel = function (id_model) {
        this.value = id_model;
        this.close();
    };
    SearcOwnerComponent.ctorParameters = function () { return [
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzDrawerRef"] },
        { type: src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_2__["AssetModelOwnerMasterService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SearcOwnerComponent.prototype, "value", void 0);
    SearcOwnerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-searc-owner',
            template: __webpack_require__(/*! raw-loader!./searc-owner.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/asset/model-detail/pengaturan/searc-owner/searc-owner.component.html"),
            styles: [__webpack_require__(/*! ./searc-owner.component.scss */ "./src/app/pages/asset/model-detail/pengaturan/searc-owner/searc-owner.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzDrawerRef"],
            src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_2__["AssetModelOwnerMasterService"]])
    ], SearcOwnerComponent);
    return SearcOwnerComponent;
}());



/***/ }),

/***/ "./src/app/pages/asset/model-detail/riwayat/pembelian/pembelian.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/asset/model-detail/riwayat/pembelian/pembelian.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Fzc2V0L21vZGVsLWRldGFpbC9yaXdheWF0L3BlbWJlbGlhbi9wZW1iZWxpYW4uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/asset/model-detail/riwayat/pembelian/pembelian.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/asset/model-detail/riwayat/pembelian/pembelian.component.ts ***!
  \***********************************************************************************/
/*! exports provided: PembelianComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PembelianComponent", function() { return PembelianComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sdk/asset/services */ "./src/app/sdk/asset/services.ts");
/* harmony import */ var _model_detail_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../model-detail.service */ "./src/app/pages/asset/model-detail/model-detail.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/tool/pesan.service */ "./src/app/services/tool/pesan.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");








var PembelianComponent = /** @class */ (function () {
    function PembelianComponent(gaPembelianItemService, modelDetailService, spinner, notification, pesan, router) {
        this.gaPembelianItemService = gaPembelianItemService;
        this.modelDetailService = modelDetailService;
        this.spinner = spinner;
        this.notification = notification;
        this.pesan = pesan;
        this.router = router;
        this.listPembelian = [];
        this.id_model = '';
    }
    PembelianComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.modelDetailService.getIdModel().subscribe(function (data) {
            if (data) {
                _this.id_model = data;
                console.log('sadasda ' + _this.id_model);
                _this.getlistPembelian();
            }
        });
    };
    PembelianComponent.prototype.getlistPembelian = function () {
        var _this = this;
        this.gaPembelianItemService.getGaPembelianItems(JSON.stringify({ id_model: this.id_model })).subscribe(function (data) {
            _this.listPembelian = data.data;
        });
    };
    PembelianComponent.ctorParameters = function () { return [
        { type: src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_2__["GaPembelianItemService"] },
        { type: _model_detail_service__WEBPACK_IMPORTED_MODULE_3__["ModelDetailService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzNotificationService"] },
        { type: src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_6__["PesanService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }
    ]; };
    PembelianComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pembelian',
            template: __webpack_require__(/*! raw-loader!./pembelian.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/asset/model-detail/riwayat/pembelian/pembelian.component.html"),
            styles: [__webpack_require__(/*! ./pembelian.component.scss */ "./src/app/pages/asset/model-detail/riwayat/pembelian/pembelian.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_2__["GaPembelianItemService"],
            _model_detail_service__WEBPACK_IMPORTED_MODULE_3__["ModelDetailService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzNotificationService"],
            src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_6__["PesanService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]])
    ], PembelianComponent);
    return PembelianComponent;
}());



/***/ }),

/***/ "./src/app/pages/asset/model-detail/riwayat/permintaan/permintaan.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/asset/model-detail/riwayat/permintaan/permintaan.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Fzc2V0L21vZGVsLWRldGFpbC9yaXdheWF0L3Blcm1pbnRhYW4vcGVybWludGFhbi5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/asset/model-detail/riwayat/permintaan/permintaan.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/asset/model-detail/riwayat/permintaan/permintaan.component.ts ***!
  \*************************************************************************************/
/*! exports provided: PermintaanComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermintaanComponent", function() { return PermintaanComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/sdk/asset/services */ "./src/app/sdk/asset/services.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_detail_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../model-detail.service */ "./src/app/pages/asset/model-detail/model-detail.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/tool/pesan.service */ "./src/app/services/tool/pesan.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");








var PermintaanComponent = /** @class */ (function () {
    function PermintaanComponent(gaPurchaseRequestItemService, modelDetailService, spinner, notification, pesan, router) {
        this.gaPurchaseRequestItemService = gaPurchaseRequestItemService;
        this.modelDetailService = modelDetailService;
        this.spinner = spinner;
        this.notification = notification;
        this.pesan = pesan;
        this.router = router;
        this.listPurchase = [];
        this.id_model = '';
    }
    PermintaanComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.modelDetailService.getIdModel().subscribe(function (data) {
            if (data) {
                _this.id_model = data;
                console.log('sadasda ' + _this.id_model);
                _this.getlistPembelian();
            }
        });
    };
    PermintaanComponent.prototype.getlistPembelian = function () {
        var _this = this;
        this.gaPurchaseRequestItemService.getGaPurchaseRequestItems(JSON.stringify({ id_model: this.id_model })).subscribe(function (data) {
            _this.listPurchase = data.data;
        });
    };
    PermintaanComponent.ctorParameters = function () { return [
        { type: src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_1__["GaPurchaseRequestItemService"] },
        { type: _model_detail_service__WEBPACK_IMPORTED_MODULE_3__["ModelDetailService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzNotificationService"] },
        { type: src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_6__["PesanService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }
    ]; };
    PermintaanComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-permintaan',
            template: __webpack_require__(/*! raw-loader!./permintaan.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/asset/model-detail/riwayat/permintaan/permintaan.component.html"),
            styles: [__webpack_require__(/*! ./permintaan.component.scss */ "./src/app/pages/asset/model-detail/riwayat/permintaan/permintaan.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_1__["GaPurchaseRequestItemService"],
            _model_detail_service__WEBPACK_IMPORTED_MODULE_3__["ModelDetailService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzNotificationService"],
            src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_6__["PesanService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]])
    ], PermintaanComponent);
    return PermintaanComponent;
}());



/***/ }),

/***/ "./src/app/pages/asset/model-detail/spesification/spesification.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/asset/model-detail/spesification/spesification.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Fzc2V0L21vZGVsLWRldGFpbC9zcGVzaWZpY2F0aW9uL3NwZXNpZmljYXRpb24uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/asset/model-detail/spesification/spesification.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/asset/model-detail/spesification/spesification.component.ts ***!
  \***********************************************************************************/
/*! exports provided: SpesificationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpesificationComponent", function() { return SpesificationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _model_detail_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model-detail.service */ "./src/app/pages/asset/model-detail/model-detail.service.ts");
/* harmony import */ var src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/sdk/asset/services */ "./src/app/sdk/asset/services.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/tool/pesan.service */ "./src/app/services/tool/pesan.service.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _custom_field_custom_field_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../custom-field/custom-field.component */ "./src/app/pages/asset/model-detail/custom-field/custom-field.component.ts");









var SpesificationComponent = /** @class */ (function () {
    function SpesificationComponent(assetCustomFildService, assetModelSpecificationService, assetModelxService, modelDetailService, router, activatedRoute, spinner, pesan, drawerService) {
        this.assetCustomFildService = assetCustomFildService;
        this.assetModelSpecificationService = assetModelSpecificationService;
        this.assetModelxService = assetModelxService;
        this.modelDetailService = modelDetailService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.spinner = spinner;
        this.pesan = pesan;
        this.drawerService = drawerService;
        this.toogleAdd = false;
        this.id_model = null;
        this.listCustomField = [];
        this.listSpesification = [];
        this.is_required = false;
        this.value_default = '';
        this.id_custom_field = null;
        this.urutan = 0;
    }
    SpesificationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.modelDetailService.getIdModel().subscribe(function (data) {
            if (data) {
                _this.id_model = data;
                _this.getSpesifikasi();
            }
        });
        this.getCusstomFiled();
    };
    SpesificationComponent.prototype.getCusstomFiled = function () {
        var _this = this;
        this.assetCustomFildService.getAssetCustomFilds().subscribe(function (data) {
            _this.listCustomField = data.data;
        });
    };
    SpesificationComponent.prototype.Add = function () {
        this.toogleAdd = true;
    };
    SpesificationComponent.prototype.getSpesifikasi = function () {
        var _this = this;
        this.spinner.show();
        this.assetModelSpecificationService.getAssetModelSpecifications(JSON.stringify({ id_model: this.id_model })).subscribe(function (data) {
            _this.listSpesification = data.data;
            _this.spinner.hide();
        });
    };
    SpesificationComponent.prototype.addSpesification = function () {
        var _this = this;
        var params = {
            id_model: this.id_model,
            is_requeired: this.is_required ? 'ya' : 'tidak',
            urutan: this.urutan,
            value_default: this.value_default,
            id_custom_field: this.id_custom_field,
        };
        if (!this.id_custom_field) {
            this.pesan.pesanWarningForm('Field harus di isi!');
            return false;
        }
        this.spinner.show();
        this.assetModelSpecificationService.postAssetModelSpecifications(params).subscribe(function (data) {
            _this.spinner.hide();
            _this.getSpesifikasi();
            _this.is_required = false;
            _this.value_default = '-';
            _this.id_custom_field = null;
            _this.urutan = 0;
            _this.toogleAdd = false;
        }, function (err) {
            _this.spinner.hide();
            _this.pesan.pesanWarningForm('Spesifikasi sudah ada');
        });
    };
    SpesificationComponent.prototype.deleteSpesifikasi = function (id) {
        var _this = this;
        this.spinner.show();
        this.assetModelSpecificationService.deleteAssetModelSpecificationsId(id).subscribe(function (data) {
            _this.spinner.hide();
            _this.getSpesifikasi();
        }, function (err) {
            _this.spinner.hide();
            _this.pesan.pesanWarningForm('spesifiaasi sudah di gunakan, tidak boleh di delete!');
        });
    };
    // ##FIELD
    SpesificationComponent.prototype.openComponent = function () {
        var _this = this;
        var drawerRef = this.drawerService.create({
            nzTitle: 'Add new Custom Field',
            nzContent: _custom_field_custom_field_component__WEBPACK_IMPORTED_MODULE_8__["CustomFieldComponent"],
            nzWidth: '320px'
        });
        drawerRef.afterOpen.subscribe(function () {
            console.log('Drawer(Component) open');
        });
        drawerRef.afterClose.subscribe(function (data) {
            console.log(data);
            if (typeof data === 'string') {
                _this.getCusstomFiled();
            }
        });
    };
    SpesificationComponent.ctorParameters = function () { return [
        { type: src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_4__["AssetCustomFildService"] },
        { type: src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_4__["AssetModelSpecificationService"] },
        { type: src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_4__["AssetModelxService"] },
        { type: _model_detail_service__WEBPACK_IMPORTED_MODULE_3__["ModelDetailService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"] },
        { type: src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_6__["PesanService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__["NzDrawerService"] }
    ]; };
    SpesificationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-spesification',
            template: __webpack_require__(/*! raw-loader!./spesification.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/asset/model-detail/spesification/spesification.component.html"),
            styles: [__webpack_require__(/*! ./spesification.component.scss */ "./src/app/pages/asset/model-detail/spesification/spesification.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_4__["AssetCustomFildService"],
            src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_4__["AssetModelSpecificationService"],
            src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_4__["AssetModelxService"],
            _model_detail_service__WEBPACK_IMPORTED_MODULE_3__["ModelDetailService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"],
            src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_6__["PesanService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__["NzDrawerService"]])
    ], SpesificationComponent);
    return SpesificationComponent;
}());



/***/ }),

/***/ "./src/app/pages/asset/model-detail/stock/stock.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/pages/asset/model-detail/stock/stock.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Fzc2V0L21vZGVsLWRldGFpbC9zdG9jay9zdG9jay5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/asset/model-detail/stock/stock.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/asset/model-detail/stock/stock.component.ts ***!
  \*******************************************************************/
/*! exports provided: StockComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockComponent", function() { return StockComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/sdk/asset/services */ "./src/app/sdk/asset/services.ts");
/* harmony import */ var _model_detail_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../model-detail.service */ "./src/app/pages/asset/model-detail/model-detail.service.ts");





var StockComponent = /** @class */ (function () {
    function StockComponent(assetModelxService, assetAssetService, spinner, modelDetailService) {
        this.assetModelxService = assetModelxService;
        this.assetAssetService = assetAssetService;
        this.spinner = spinner;
        this.modelDetailService = modelDetailService;
        this.id_model = '';
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
    StockComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.modelDetailService.getIdModel().subscribe(function (data) {
            if (data) {
                _this.id_model = data;
                _this.searchData();
            }
        });
    };
    StockComponent.prototype.sort = function (sort) {
        this.sortKey = sort.key;
        this.sortValue = sort.value;
        this.searchData();
    };
    StockComponent.prototype.searchData = function (reset) {
        var _this = this;
        if (reset === void 0) { reset = false; }
        this.spinner.show();
        if (reset) {
            this.pageIndex = 1;
        }
        this.loading = true;
        this.assetAssetService
            .getAssetAssets(JSON.stringify({
            pageIndex: this.pageIndex, pageSize: this.pageSize, sortKey: this.sortKey, sortValue: this.sortValue, search: this.search, id_model: this.id_model
        }))
            .subscribe(function (data) {
            _this.loading = false;
            _this.total = data.data.total;
            _this.listOfData = data.data.data;
            _this.spinner.hide();
        });
    };
    StockComponent.prototype.updateFilter = function (value) {
        this.search = value;
        this.searchData(true);
    };
    StockComponent.ctorParameters = function () { return [
        { type: src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_3__["AssetModelxService"] },
        { type: src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_3__["AssetAssetService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_1__["NgxSpinnerService"] },
        { type: _model_detail_service__WEBPACK_IMPORTED_MODULE_4__["ModelDetailService"] }
    ]; };
    StockComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-stock',
            template: __webpack_require__(/*! raw-loader!./stock.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/asset/model-detail/stock/stock.component.html"),
            styles: [__webpack_require__(/*! ./stock.component.scss */ "./src/app/pages/asset/model-detail/stock/stock.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_3__["AssetModelxService"],
            src_app_sdk_asset_services__WEBPACK_IMPORTED_MODULE_3__["AssetAssetService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_1__["NgxSpinnerService"],
            _model_detail_service__WEBPACK_IMPORTED_MODULE_4__["ModelDetailService"]])
    ], StockComponent);
    return StockComponent;
}());



/***/ }),

/***/ "./src/app/pages/asset/model-detail/view/view.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/pages/asset/model-detail/view/view.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Fzc2V0L21vZGVsLWRldGFpbC92aWV3L3ZpZXcuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/asset/model-detail/view/view.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/asset/model-detail/view/view.component.ts ***!
  \*****************************************************************/
/*! exports provided: ViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewComponent", function() { return ViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ViewComponent = /** @class */ (function () {
    function ViewComponent() {
    }
    ViewComponent.prototype.ngOnInit = function () {
    };
    ViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-view',
            template: __webpack_require__(/*! raw-loader!./view.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/asset/model-detail/view/view.component.html"),
            styles: [__webpack_require__(/*! ./view.component.scss */ "./src/app/pages/asset/model-detail/view/view.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ViewComponent);
    return ViewComponent;
}());



/***/ })

}]);
//# sourceMappingURL=model-detail-model-detail-module.js.map