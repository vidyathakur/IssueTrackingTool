(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"src/app/dashboard/dashboard.module": "./src/app/dashboard/dashboard.module.ts"
};

function webpackAsyncContext(req) {
	return Promise.resolve().then(function() {
		if(!__webpack_require__.o(map, req)) {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		}

		var id = map[req];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n<router-outlet></router-outlet>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/comment/comment.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/comment/comment.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"page-topbar\">\n  <div class=\"logo-area\">\n    <h3 style=\"color:#fff; padding-top: 12px;\">\n      Issue Tracking Tool\n    </h3>\n  </div>\n  <ul class=\"pull-right info-menu user-info\" style=\"display: flex;\">\n    <li class=\"profile\">\n      <a routerLink=\"/notifications\" class=\"toggle\" aria-expanded=\"false\">\n        <span class=\"badge\">{{totalNotify}}</span> <i class=\"fa fa-bell\"></i>\n      </a>\n    </li>\n    <li class=\"profile\">\n      <a routerLink=\"\" class=\"toggle\" aria-expanded=\"false\">\n        <span (click)=\"logout()\">Logout <i class=\"fa fa-lock\"></i></span>\n      </a>\n    </li>\n  </ul>\n\n</div>\n<div class=\"container\">\n  <button type=\"button\" class=\"close\" aria-label=\"Close\" style=\"margin-bottom: 13px; margin-top: 10px;\" (click)=\"backToHome()\">\n      <i class=\"fa fa-arrow-circle-left\" style=\"font-size:15px\" aria-hidden=\"true\"></i><span aria-hidden=\"true\" style=\"font-size:15px\"> Back</span>\n    </button>\n</div>\n<div class=\"container\" style=\"box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, 0.19); margin-top: 50px;\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <strong style=\"font-size: 14px;\">\n  Activity <small style=\"margin-left: 15px;\">Comments</small></strong><br>\n\n\n      <div *ngFor=\"let comments of commentData\" style=\"margin-top: 10px;\">\n        <div class=\"crop\" [style.color]=\"userColor ? userColor :'white'\" [style.background]=\"userBg ? userBg :'blue'\">\n          {{firstChar}}\n        </div>\n        <div class=\"about\">\n          <div class=\"name\">{{comments.commentName}}\n            <i *ngIf=\"messageRead\" class=\"fa fa-circle warning\"></i>\n          </div>\n        </div>\n        <h6> <small style=\"margin-left: 15px;\">{{comments.createdOn | date:\"short\"}}</small></h6>\n        <span style=\"font-size: 14px; padding-left: 10px;\"> {{comments.description}} </span>\n\n      </div>\n    </div>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/main-content/main-content.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/main-content/main-content.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n<div class=\"container\">\n  <div class=\"row\">\n   <div class=\"col-sm-12\"><button type=\"button\" (click)=\"open(mymodal)\" class=\"btn btn-primary\" style=\"margin-top: 40px;margin-bottom: 50px; float: right;\">Create Issue</button></div>\n  </div>\n</div>\n\n<mat-form-field>\n  <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n</mat-form-field>\n<div class=\"table-container mat-elevation-z8 \">\n\n\n  <table mat-table [dataSource]=\"dataSource\"  matSort>\n\n  <ng-container matColumnDef=\"title\" >\n    <th mat-header-cell *matHeaderCellDef mat-sort-header > Title </th>\n    <td mat-cell *matCellDef=\"let issue\" [routerLink]=\"['/edit-issue', issue.issueId]\" style=\"cursor: pointer;\"> {{issue.title}} </td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"status\">\n    <th mat-header-cell *matHeaderCellDef mat-sort-header> Status </th>\n    <td mat-cell *matCellDef=\"let issue\" [routerLink]=\"['/edit-issue', issue.issueId]\" style=\"cursor: pointer;\"> \n<ngb-progressbar type=\"success\" [value]=\"issue.percentage\">{{issue.percentage}}</ngb-progressbar>\n </td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"description\">\n    <th mat-header-cell *matHeaderCellDef mat-sort-header> Description </th>\n    <td mat-cell *matCellDef=\"let issue\" [routerLink]=\"['/edit-issue', issue.issueId]\" style=\"cursor: pointer;\"> {{issue.description}} </td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"reporter\">\n    <th mat-header-cell *matHeaderCellDef mat-sort-header> Reporter </th>\n    <td mat-cell *matCellDef=\"let issue\" [routerLink]=\"['/edit-issue', issue.issueId]\" style=\"cursor: pointer;\"> {{issue.reporter_name}} </td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"assignee\">\n  <th mat-header-cell *matHeaderCellDef mat-sort-header> Assignee </th>\n  <td mat-cell *matCellDef=\"let issue\" [routerLink]=\"['/edit-issue', issue.issueId]\" style=\"cursor: pointer;\"> {{issue.assignee_name}} </td>\n</ng-container>\n\n<ng-container matColumnDef=\"createdOn\">\n  <th mat-header-cell *matHeaderCellDef mat-sort-header> createdOn </th>\n  <td mat-cell *matCellDef=\"let issue\" [routerLink]=\"['/edit-issue', issue.issueId]\" style=\"cursor: pointer;\"> {{issue.createdOn | date}} </td>\n</ng-container>\n\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n</table>\n\n  <mat-paginator [pageSizeOptions]=\"[5, 10, 20]\" showFirstLastButtons></mat-paginator>\n</div>\n\n\n<ng-template #mymodal let-modal>\n  <form #createIssueForm=\"ngForm\" (ngSubmit)=\"createIssue(); createIssueForm.reset()\">\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\" id=\"modal-basic-title\">Create Issue</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n  <div class=\"form-group\">\n    <label for=\"issueTitle\">Title</label>\n    <input type=\"text\" class=\"form-control\" name=\"issueTitle\" [(ngModel)]=\"issueTitle\" #title=\"ngModel\" \n      placeholder=\"Enter Title\" required>\n  </div>\n \n  <div class=\"form-group\">\n    <label for=\"status\">Status</label>\n    <select [(ngModel)]=\"issueStatus\" #status=\"ngModel\"  name=\"issueStatus\" class=\"form-control\"  required>\n            <option *ngFor=\"let status of allStatus\" [value]=\"status.id\">{{status.label}}</option>\n          </select>\n  </div>\n \n\n\n\n  <div class=\"form-group\">\n    <label for=\"description\">Description</label>\n    <app-ngx-editor [placeholder]=\"'Enter text here...'\" [spellcheck]=\"true\" #description=\"ngModel\" name=\"issueDescription\" [(ngModel)]=\"issueDescription\"></app-ngx-editor>\n  </div>\n  <div class=\"form-group\">\n          <label for=\"reporter\">Reporter </label>\n          <select [(ngModel)]=\"issueReporter\" #reporter=\"ngModel\" name=\"issueReporter\" class=\"form-control\" id=\"reporter\"\n            required>\n            <option *ngFor=\"let name of allUsers\" [value]=\"name.userId\">{{name.firstName}} {{name.lastName}}</option>\n          </select>\n        </div>\n\n\n  <div class=\"form-group\">\n  <label for=\"assignee\">Assignee </label>\n  <select [(ngModel)]=\"issueAssignee\" #assignee=\"ngModel\" name=\"issueAssignee\" class=\"form-control\" id=\"assignee\" required>\n            <option [value]=\"currentUser.userId\">{{currentUser.firstName}} {{currentUser.lastName}}</option>\n          </select>\n</div>\n  <div class=\"form-group\">\n  <label for=\"images\">Attachment</label><br>\n  \n  <input type=\"file\" [(ngModel)]=\"issueImages\" #images=\"ngModel\" name=\"images\"  id=\"images\" aria-describedby=\"firstHelp\" (change)=\"selectImage($event)\">\n \n</div>\n  \n\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"submit\" class=\"btn btn-primary\" >Submit</button>\n<button type=\"button\" style=\"margin-left: 10px;\" class=\"btn btn-danger\" (click)=\"modal.close('Save click')\">Cancel</button>\n    \n  </div>\n  </form>\n</ng-template>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/sidebar/sidebar.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/sidebar/sidebar.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"page-sidebar expandit\" >\n      <div class=\"sidebar-inner\" id=\"main-menu-wrapper\">\n         <div class=\"profile-info row \">\n             \n          </div>\n          \n          <ul class=\"wraplist\" style=\"height: auto;\">\t\n          <li><a routerLink=\"/dashboard\"><span class=\"sidebar-icon\"><i class=\"fa fa-dashboard\"></i></span> <span class=\"menu-title\">Dashboard</span></a></li>\n          <li><a routerLink=\"/demo\"><span class=\"sidebar-icon\"><i class=\"fa fa-users\"></i></span> <span class=\"menu-title\">Manage Users</span></a></li>\n          <li><a href=\"\"><span class=\"sidebar-icon\"><i class=\"fa fa-lock\"></i></span> <span class=\"menu-title\">Sign Out</span></a></li>\n          </ul>\n        </div>\n    </div>\n\n\n\n   ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/topbar/topbar.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/topbar/topbar.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-sm-6 page-topbar\">\n      <div class=\"logo-area\">\n        <h3 style=\"color:#fff; padding-top: 12px;\">\n          Issue Tracking Tool\n        </h3>\n        </div>\n    </div>\n    <div class=\"col-sm-6 page-topbar\">\n      <ul class=\"pull-right info-menu user-info\" style=\"display: flex;\">\n        <li class=\"profile\">\n          <a routerLink=\"/notifications\" class=\"toggle\" aria-expanded=\"false\">\n            <span class=\"badge\">{{totalNotify}}</span> <i class=\"fa fa-bell\"></i>\n          </a>\n        </li>\n        <li class=\"profile\">\n          <a routerLink=\"\" class=\"toggle\" aria-expanded=\"false\">\n            <span (click)=\"logout()\">Logout </span>\n          </a>\n        </li>\n\n      </ul>\n    </div>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/dialog-box/dialog-box.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dialog-box/dialog-box.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\" id=\"modal-basic-title\">Delete Watcher Confirmation</h4>\n  </div>\n  <div class=\"modal-body\">\n    <h6>Do you want to really delete ? </h6>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"submit\"  class=\"btn btn-primary\" (click)=\"deleteThisWatcher(data.watcherId,data.issueId)\">Confirm</button>\n    <button type=\"button\" style=\"margin-left: 10px;\" class=\"btn btn-danger\"  (click)=\"onNoClick()\">Cancel</button>\n\n  </div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/edit-issue/edit-issue.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/edit-issue/edit-issue.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"page-topbar\">\n  <div class=\"logo-area\">\n    <h3 style=\"color:#fff; padding-top: 12px;\">\n      Issue Tracking Tool\n    </h3>\n  </div>\n  <ul class=\"pull-right info-menu user-info\" style=\"display: flex;\">\n    <li class=\"profile\">\n      <a style=\"cursor: pointer;\" (click)=\"notific()\" class=\"toggle\" aria-expanded=\"false\">\n        <span class=\"badge\">{{totalNotify}}</span> <i class=\"fa fa-bell\"></i>\n      </a>\n    </li>\n    <li class=\"profile\">\n      <a style=\"cursor: pointer;\" class=\"toggle\" aria-expanded=\"false\">\n        <span (click)=\"logout()\">Logout <i class=\"fa fa-lock\"></i></span>\n      </a>\n    </li>\n  </ul>\n\n</div>\n<br><br>\n\n\n\n<div class=\"container\" style=\"box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, 0.19);\" *ngIf=\"responseData\">\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\" id=\"modal-basic-title\">View Issue</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"backToHome()\">\n      <i class=\"fa fa-arrow-circle-left\" style=\"font-size:15px\" aria-hidden=\"true\"></i><span aria-hidden=\"true\" style=\"font-size:15px\"> Back</span>\n    </button>\n  </div>\n  <br>\n  <div class=\"modal-body\">\n    <div>\n      <label><strong style=\"font-size: 15px;\">Title: <i class=\"fa fa-pencil\" (click)=\"open(mymodal4)\" style=\"cursor: pointer; margin-left: 5px; color:#0095ff;\" aria-hidden=\"true\"></i></strong> <br>\n        {{responseData.title}} </label>\n      <div class=\"dropdown\">\n        <i class=\"fa fa-eye \" data-toggle=\"dropdown\" title=\"watch options\" style=\"font-size:24px; float: right; cursor: pointer; color:#0095ff;\"></i>\n        <div class=\"dropdown-menu\">\n          <form #createWatcherForm=\"ngForm\" (ngSubmit)=\"createWatcher()\">\n            <a class=\"dropdown-item\">Add Watchers</a>\n            <div class=\"dropdown-divider\"></div>\n            <span style=\"margin-left:10px;\">Watching this issue</span><br>\n            <div *ngFor=\"let watcher of allWatchers\">\n              <span style=\"margin-left:10px;\">{{watcher.reporter_details[0]['firstName']}}   {{watcher.reporter_details[0]['lastName']}} </span>\n              <i class=\"fa fa-trash\" style=\"color: red;\" aria-hidden=\"true\" (click)=\"openDialog(watcher.watcherId,watcher.issueId)\" ></i>\n            </div>\n            <div class=\"form-group\">\n              <label for=\"reporter\" style=\"margin-left:10px;\">Add Watchers </label>\n              <select [(ngModel)]=\"issueReporter\" #reporter=\"ngModel\" name=\"issueReporter\" class=\"form-control\" id=\"reporter\" required>\n          <option [value]=\"currentUser.userId\">{{currentUser.firstName}} {{currentUser.lastName}} </option> \n          </select>\n            </div>\n            <div class=\"dropdown-divider\"></div>\n            <a class=\"dropdown-item\"><button type=\"submit\" class=\"btn btn-primary btn-sm\">Add</button> \n    \n  </a>\n          </form>\n        </div>\n      </div>\n\n    </div>\n\n    <div *ngIf=\"responseData.status==1\">\n      <label for=\"status\"><strong style=\"font-size: 14px;\">Status: <i class=\"fa fa-pencil\" (click)=\"open(mymodal5)\" style=\"cursor: pointer;margin-left: 5px; color:#0095ff;\" aria-hidden=\"true\"></i></strong> <br>\n        Backlog</label><br>\n    </div>\n    <div *ngIf=\"responseData.status==2\">\n      <label for=\"status\"><strong style=\"font-size: 14px;\">Status: <i class=\"fa fa-pencil\" (click)=\"open(mymodal5)\" style=\"cursor: pointer;margin-left: 5px; color:#0095ff;\" aria-hidden=\"true\"></i></strong> <br>\n        In-Progress</label><br>\n    </div>\n    <div *ngIf=\"responseData.status==3\">\n      <label for=\"status\"><strong style=\"font-size: 14px;\">Status: <i class=\"fa fa-pencil\" (click)=\"open(mymodal5)\" style=\"cursor: pointer;margin-left: 5px; color:#0095ff;\" aria-hidden=\"true\"></i></strong> <br>\n        In-Test</label><br>\n    </div>\n    <div *ngIf=\"responseData.status==4\">\n      <label for=\"status\"><strong style=\"font-size: 14px;\">Status: <i class=\"fa fa-pencil\" (click)=\"open(mymodal5)\" style=\"cursor: pointer;margin-left: 5px; color:#0095ff;\" aria-hidden=\"true\"></i></strong> <br>\n        Done</label><br>\n    </div>\n\n\n\n    <div style=\" border: 1px solid #f3f3f3; border-radius: 5px; width: 80%; \">\n      <div class=\"crop\" style=\"margin: 16px 20px 5px 40px;\" [style.color]=\"userColor ? userColor :'white'\" [style.background]=\"userBg ? userBg :'blue'\">\n        {{firstChar}}\n      </div>\n      <label for=\"description\" style=\"margin: 13px 0px 5px -5px;\"><strong style=\"font-size: 14px; \">Description: <i class=\"fa fa-pencil\" (click)=\"open(mymodal6)\" style=\"cursor: pointer;margin-left: 5px; color:#0095ff;\" aria-hidden=\"true\"></i> </strong> <br>\n        {{responseData.description}} </label>\n\n    </div>\n\n\n\n\n    <div class=\"row\">\n      <div class=\"col-sm-12\">\n        <label for=\"description\"><strong style=\"font-size: 14px;\">Attachment:</strong>\n  \n   </label><br>\n        <img src=\"http://localhost:3000/{{responseData.images}}\" style=\"cursor: pointer;\" height=\"150\" width=\"10%\" data-toggle=\"modal\"\n          data-target=\"#basicExampleModal\"><br>\n\n      </div>\n    </div><br>\n    <strong style=\"font-size: 14px;\">\n  Activity <small style=\"margin-left: 15px;\">Comments</small></strong><br>\n\n\n    <div *ngFor=\"let comments of commentData\" style=\"margin-top: 10px;\">\n      <div click=\"nameClicked()\" class=\"crop\" [style.color]=\"userColor ? userColor :'white'\" [style.background]=\"userBg ? userBg :'blue'\">\n        {{firstChar}}\n      </div>\n      <div class=\"about\">\n        <div class=\"name\">{{comments.commentName}}\n          <i *ngIf=\"messageRead\" class=\"fa fa-circle warning\"></i>\n        </div>\n      </div>\n      <h6> <small style=\"margin-left: 15px;\">{{comments.createdOn | date:\"short\"}}</small></h6>\n      <span style=\"font-size: 14px; padding-left: 10px;\"> {{comments.description}} </span>\n\n    </div>\n\n\n\n\n\n\n\n    <br>\n    <div class=\"crop\" [style.color]=\"userColor ? userColor :'white'\" [style.background]=\"userBg ? userBg :'blue'\">\n      {{firstChar}}\n    </div>\n    <div class=\"card-body\" style=\"border: 1px solid #e4e5ea; padding: 0.40rem !important; width: 75%;\">\n      <a class=\"card-link\" (click)=\"open(mymodal2)\" style=\"cursor: pointer; color:#0095ff;\">Reply to a customer</a>\n\n    </div>\n    <br>\n\n    <div>\n      <label><strong style=\"font-size: 14px;\">Assignee: <i class=\"fa fa-pencil\" (click)=\"open(mymodal7)\" style=\"cursor: pointer; margin-left: 5px;color:#0095ff;\" aria-hidden=\"true\"></i></strong><br>\n        {{responseData.assignee_details[0]['firstName']}} {{responseData.assignee_details[0]['lastName']}}</label>\n\n    </div>\n\n\n    <div>\n      <label><strong style=\"font-size: 14px;\">Reportered by: <i class=\"fa fa-pencil\" (click)=\"open(mymodal8)\" style=\"cursor: pointer;margin-left: 5px; color:#0095ff;\" aria-hidden=\"true\"></i></strong><br>\n         {{responseData.reporter_details[0]['firstName']}} {{responseData.reporter_details[0]['lastName']}} on {{responseData.createdOn | date}} </label>\n\n    </div>\n\n  </div>\n\n\n</div>\n\n\n<div class=\"modal fade\" id=\"basicExampleModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <img src=\"http://localhost:3000/{{responseData.images}}\" height=\"450px\" width=\"100%\">\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n        <button type=\"button\" class=\"btn btn-primary\"><a [href]=\"fileUrl\" download=\"file.png\" style=\"color:#fff;\">Download</a></button>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<ng-template #mymodal2 let-modal>\n  <form #createCommentForm=\"ngForm\" (ngSubmit)=\"createComment()\">\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title\" id=\"modal-basic-title\">Comment</h4>\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n    </div>\n    <div class=\"modal-body\">\n      <div class=\"form-group\">\n        <label for=\"description\"></label>\n        <app-ngx-editor [placeholder]=\"'Add a Comment...'\" [spellcheck]=\"true\" #description=\"ngModel\" name=\"issueDescription\" [(ngModel)]=\"issueDescription\"></app-ngx-editor>\n      </div>\n    </div>\n    <div class=\"modal-footer\">\n      <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n      <button type=\"button\" style=\"margin-left: 10px;\" class=\"btn btn-danger\" (click)=\"modal.close('Save click')\">Cancel</button>\n\n    </div>\n  </form>\n</ng-template>\n\n\n\n\n<!--///// title/////-->\n<ng-template #mymodal4 let-modal>\n  <form [formGroup]=\"myForm\">\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title\" id=\"modal-basic-title\">Update Title</h4>\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n    </div>\n    <div class=\"modal-body\">\n      <div class=\"form-group\">\n        <label for=\"title\">Title</label>\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"responseData.title\" formControlName=\"title\" placeholder=\"Enter Title\"\n          required>\n      </div>\n    </div>\n    <div class=\"modal-footer\">\n      <button type=\"submit\" class=\"btn btn-primary\" (click)=\"updateIssue(responseData.issueId)\">Update</button>\n      <button type=\"button\" style=\"margin-left: 10px;\" class=\"btn btn-danger\" (click)=\"modal.close('Save click')\">Cancel</button>\n\n    </div>\n  </form>\n</ng-template>\n\n\n<!--///// status/////-->\n<ng-template #mymodal5 let-modal>\n  <form [formGroup]=\"myForm\">\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title\" id=\"modal-basic-title\">Update Status</h4>\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n    </div>\n    <div class=\"modal-body\">\n      <div class=\"form-group\">\n        <label for=\"status\">Status</label>\n        <select [(ngModel)]=\"responseData.status\" formControlName=\"status\" class=\"form-control\" required>\n            <option *ngFor=\"let status of allStatus\" [value]=\"status.id\">{{status.label}}</option>\n          </select>\n      </div>\n    </div>\n    <div class=\"modal-footer\">\n      <button type=\"submit\" class=\"btn btn-primary\" (click)=\"updateIssue(responseData.issueId)\">Update</button>\n      <button type=\"button\" style=\"margin-left: 10px;\" class=\"btn btn-danger\" (click)=\"modal.close('Save click')\">Cancel</button>\n\n    </div>\n  </form>\n</ng-template>\n\n<!--///// description/////-->\n<ng-template #mymodal6 let-modal>\n  <form [formGroup]=\"myForm\">\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title\" id=\"modal-basic-title\">Update Description</h4>\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n    </div>\n    <div class=\"modal-body\">\n      <div class=\"form-group\">\n        <label for=\"description\">Description</label>\n        <app-ngx-editor [placeholder]=\"'Enter text here...'\" [spellcheck]=\"true\" formControlName=\"description\" [(ngModel)]=\"responseData.description\"></app-ngx-editor>\n      </div>\n    </div>\n    <div class=\"modal-footer\">\n      <button type=\"submit\" class=\"btn btn-primary\" (click)=\"updateIssue(responseData.issueId)\">Update</button>\n      <button type=\"button\" style=\"margin-left: 10px;\" class=\"btn btn-danger\" (click)=\"modal.close('Save click')\">Cancel</button>\n\n    </div>\n  </form>\n</ng-template>\n\n<!--///// assignee/////-->\n<ng-template #mymodal7 let-modal>\n  <form [formGroup]=\"myForm\">\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title\" id=\"modal-basic-title\">Update Assignee</h4>\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n    </div>\n    <div class=\"modal-body\">\n      <div class=\"form-group\">\n        <label for=\"assignee\">Assignee </label>\n        <select [(ngModel)]=\"responseData.assignee\" formControlName=\"assignee\" class=\"form-control\" required>\n            <option [value]=\"currentUser.userId\">{{currentUser.firstName}} {{currentUser.lastName}}</option>\n          </select>\n      </div>\n    </div>\n    <div class=\"modal-footer\">\n      <button type=\"submit\" class=\"btn btn-primary\" (click)=\"updateIssue(responseData.issueId)\">Update</button>\n      <button type=\"button\" style=\"margin-left: 10px;\" class=\"btn btn-danger\" (click)=\"modal.close('Save click')\">Cancel</button>\n\n    </div>\n  </form>\n</ng-template>\n\n\n<!--///// reporter/////-->\n<ng-template #mymodal8 let-modal>\n  <form [formGroup]=\"myForm\">\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title\" id=\"modal-basic-title\">Update Reporter</h4>\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n    </div>\n    <div class=\"modal-body\">\n      <div class=\"form-group\">\n        <label for=\"reporter\">Reporter </label>\n        <select [(ngModel)]=\"responseData.reporter\" formControlName=\"reporter\" class=\"form-control\" id=\"reporter\" required>\n            <option *ngFor=\"let name of allUsers\" [value]=\"name.userId\">{{name.firstName}} {{name.lastName}}</option>\n          </select>\n      </div>\n    </div>\n    <div class=\"modal-footer\">\n      <button type=\"submit\" class=\"btn btn-primary\" (click)=\"updateIssue(responseData.issueId)\">Update</button>\n      <button type=\"button\" style=\"margin-left: 10px;\" class=\"btn btn-danger\" (click)=\"modal.close('Save click')\">Cancel</button>\n\n    </div>\n  </form>\n</ng-template>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/notification/notification.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/notification/notification.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"page-topbar\">\n  <div class=\"logo-area\">\n    <h3 style=\"color:#fff; padding-top: 12px;\">\n      Issue Tracking Tool\n    </h3>\n\n\n  </div>\n  <ul class=\"pull-right info-menu user-info\" style=\"display: flex;\">\n    <li class=\"profile\">\n      <a routerLink=\"\" class=\"toggle\" aria-expanded=\"false\">\n        <span class=\"badge\">{{totalNotify}}</span> <i class=\"fa fa-bell\"></i>\n      </a>\n    </li>\n    <li class=\"profile\">\n      <a routerLink=\"\" class=\"toggle\" aria-expanded=\"false\">\n        <span (click)=\"logout()\">Logout <i class=\"fa fa-lock\"></i></span>\n      </a>\n    </li>\n  </ul>\n\n</div>\n\n\n\n<div class=\"container\" style=\"box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, 0.19); margin-top: 30px;\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"table-responsive\" style=\"margin-top: 30px;\">\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" style=\"margin-bottom: 13px;\" (click)=\"backToHome()\">\n      <i class=\"fa fa-arrow-circle-left\" style=\"font-size:15px\" aria-hidden=\"true\"></i><span aria-hidden=\"true\" style=\"font-size:15px\"> Back</span>\n    </button>\n        <table class=\"table table-bordered table-hover\">\n\n          <thead>\n            <tr>\n              <th>UserName</th>\n              <th>Issue Title</th>\n              <th>createdOn</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let notify of notification\" (click)=\"goToDashboard(notify.issueId, notify.notificId)\">\n              <td>{{notify.comment_details[0]['commentName']}}</td>\n              <td>{{notify.comment_details[0]['description']}}</td>\n              <td>{{notify.comment_details[0]['createdOn']}}</td>\n            </tr>\n          </tbody>\n          <tfoot>\n            <tr>\n\n\n            </tr>\n          </tfoot>\n        </table>\n      </div>\n    </div>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/first-char/first-char.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/first-char/first-char.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div click=\"nameClicked()\" class=\"crop\" [style.color]=\"userColor ? userColor :'white'\" [style.background]=\"userBg ? userBg :'blue'\">\n  {{firstChar}}\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/login/login.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/login/login.component.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper fadeInDown\">\n  <div id=\"formContent\">\n    <div class=\"fadeIn first\">\n      <h2>Issue Tracking Tool</h2>\n    </div>\n    <form>\n      <input type=\"email\" [(ngModel)]=\"email\" id=\"email\" class=\"fadeIn second\" name=\"email\" placeholder=\"Email\">\n      <input type=\"password\" [(ngModel)]=\"password\" id=\"password\" class=\"fadeIn third\" name=\"password\" placeholder=\"password\">\n      <input type=\"submit\" class=\"fadeIn fourth\" (click)=\"signinFunction()\" value=\"Log In\">\n      <div class=\"col-md-12 \">\n        <div class=\"login-or\">\n          <hr class=\"hr-or\">\n          <span class=\"span-or\">or</span>\n        </div>\n      </div>\n      <button type=\"submit\" class=\"fadeIn fourth btns\" (click)=\"googlelogin()\"> <i class=\"fa fa-google-plus\" style=\"color:red\"></i> <span style=\"margin-left: 11px;\">Login with Google</span></button>\n\n    </form>\n\n    <div class=\"form-group\">\n      <p class=\"text-center\">Don't have account? <a [routerLink]=\"\" (click)=\"goToSignup()\" id=\"signup\">Sign up here</a></p>\n    </div>\n\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/signup/signup.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/signup/signup.component.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper fadeInDown\">\n  <div id=\"formContent\">\n    <div class=\"fadeIn first\">\n      <h2>Issue Tracking Tool</h2>\n    </div>\n\n    <form>\n      <input type=\"text\" id=\"firstName\" [(ngModel)]=\"firstName\" class=\"fadeIn second\" name=\"firstname\" placeholder=\"FirstName\">\n      <input type=\"text\" id=\"lastName\" [(ngModel)]=\"lastName\" class=\"fadeIn second\" name=\"lastname\" placeholder=\"LastName\">\n      <input type=\"password\" id=\"password\" [(ngModel)]=\"password\" class=\"fadeIn third\" name=\"password\" placeholder=\"password\">\n      <input type=\"email\" id=\"email\" [(ngModel)]=\"email\" class=\"fadeIn second\" name=\"email\" placeholder=\"Email\">\n      <input type=\"text\" id=\"mobile\" [(ngModel)]=\"mobile\" class=\"fadeIn second\" name=\"mobile\" placeholder=\"Mobile\">\n\n      <input type=\"submit\" class=\"fadeIn fourth\" value=\"SignUp\" (click)=\"signupFunction()\">\n\n    </form>\n    <div class=\"col-md-12 \">\n      <div class=\"login-or\">\n        <hr class=\"hr-or\">\n        <span class=\"span-or\">or</span>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <p class=\"text-center\"><a [routerLink]=\"\" (click)=\"goToSignIn()\" id=\"signin\">Already have an account?</a></p>\n    </div>\n\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _comment_comment_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./comment/comment.component */ "./src/app/comment/comment.component.ts");
/* harmony import */ var _notification_notification_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./notification/notification.component */ "./src/app/notification/notification.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_user_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/user/login/login.component */ "./src/app/user/login/login.component.ts");
/* harmony import */ var src_app_user_signup_signup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/user/signup/signup.component */ "./src/app/user/signup/signup.component.ts");
/* harmony import */ var src_app_edit_issue_edit_issue_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/edit-issue/edit-issue.component */ "./src/app/edit-issue/edit-issue.component.ts");








const routes = [
    { path: 'login', component: src_app_user_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"] },
    { path: 'signup', component: src_app_user_signup_signup_component__WEBPACK_IMPORTED_MODULE_6__["SignupComponent"] },
    { path: 'edit-issue/:issueId', component: src_app_edit_issue_edit_issue_component__WEBPACK_IMPORTED_MODULE_7__["EditIssueComponent"] },
    { path: 'edit-issue', component: src_app_edit_issue_edit_issue_component__WEBPACK_IMPORTED_MODULE_7__["EditIssueComponent"] },
    { path: 'notifications', component: _notification_notification_component__WEBPACK_IMPORTED_MODULE_2__["NotificationComponent"] },
    { path: 'comments/:issueId/:notifyId', component: _comment_comment_component__WEBPACK_IMPORTED_MODULE_1__["CommentComponent"] },
    { path: 'dashboard', loadChildren: 'src/app/dashboard/dashboard.module#DashboardModule'
    },
    {
        path: '**',
        redirectTo: 'login'
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'issueTrackingTool';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: provideConfig, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "provideConfig", function() { return provideConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _issue_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./issue.service */ "./src/app/issue.service.ts");
/* harmony import */ var _dashboard_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard/dashboard-routing.module */ "./src/app/dashboard/dashboard-routing.module.ts");
/* harmony import */ var _shared_material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/material.module */ "./src/app/shared/material.module.ts");
/* harmony import */ var _user_user_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user/user.module */ "./src/app/user/user.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var ngx_editor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-editor */ "./node_modules/ngx-editor/fesm2015/ngx-editor.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var src_app_dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/dashboard/dashboard.module */ "./src/app/dashboard/dashboard.module.ts");
/* harmony import */ var angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! angular-ng-autocomplete */ "./node_modules/angular-ng-autocomplete/fesm2015/angular-ng-autocomplete.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var ng2_image_viewer__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng2-image-viewer */ "./node_modules/ng2-image-viewer/ng2-image-viewer.umd.js");
/* harmony import */ var ng2_image_viewer__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(ng2_image_viewer__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var ng4_social_login__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng4-social-login */ "./node_modules/ng4-social-login/ng4-social-login.umd.js");
/* harmony import */ var ng4_social_login__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(ng4_social_login__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _dialog_box_dialog_box_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./dialog-box/dialog-box.component */ "./src/app/dialog-box/dialog-box.component.ts");



// import { DashboardComponent } from './dashboard/dashboard.component';

















const CONFIG = new ng4_social_login__WEBPACK_IMPORTED_MODULE_17__["AuthServiceConfig"]([
    {
        id: ng4_social_login__WEBPACK_IMPORTED_MODULE_17__["GoogleLoginProvider"].PROVIDER_ID,
        provider: new ng4_social_login__WEBPACK_IMPORTED_MODULE_17__["GoogleLoginProvider"]('507363631372-vl5794tdqj0hfi2fodnh5j45fo8b2dfh.apps.googleusercontent.com')
    }
], false);
function provideConfig() {
    return CONFIG;
}
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
            _dialog_box_dialog_box_component__WEBPACK_IMPORTED_MODULE_18__["DialogBoxComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["BrowserModule"],
            _dashboard_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_2__["DashboardRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
            ngx_editor__WEBPACK_IMPORTED_MODULE_10__["NgxEditorModule"],
            angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_14__["AutocompleteLibModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            ng2_image_viewer__WEBPACK_IMPORTED_MODULE_16__["ImageViewerModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
            ng4_social_login__WEBPACK_IMPORTED_MODULE_17__["SocialLoginModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
            _user_user_module__WEBPACK_IMPORTED_MODULE_4__["UserModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__["NgbModule"],
            src_app_dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_13__["DashboardModule"],
            _shared_material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_12__["AppRoutingModule"]
        ],
        providers: [_issue_service__WEBPACK_IMPORTED_MODULE_1__["IssueService"],
            {
                provide: ng4_social_login__WEBPACK_IMPORTED_MODULE_17__["AuthServiceConfig"],
                useFactory: provideConfig
            }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/comment/comment.component.css":
/*!***********************************************!*\
  !*** ./src/app/comment/comment.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".page-topbar {\n    min-height: 60px;\n    /*position: fixed;*/\n    width: 100%;\n    background-color: #0747A6;\n    top: 0px;\n    /*z-index:10000;*/\n    left: 0px;\n    box-shadow: 0 2px 4px rgba(33,33,33,.2);\n    -webkit-box-shadow: 0 2px 4px rgba(33,33,33,.2);\n    -moz-box-shadow: 0 2px 4px rgba(33,33,33,.2);\n    -o-box-shadow: 0 2px 4px rgba(33,33,33,.2);\n    -ms-box-shadow: 0 2px 4px rgba(33,33,33,.2);\n    max-height: 60px;\n}\n\n/*Transition==========================*/\n\n.page-topbar, .logo-area, .logo-area, #main-content, .logo-icon, .wraplist, .page-sidebar, .profile-info, .profile-image, .profile-details, .menu-title, .profile-image a img {\n    transition: 600ms;\n}\n\n.page-topbar .logo-area {\n   \n    background-repeat: no-repeat;\n}\n\n.page-topbar .logo-area {\n    width: 240px;\n    background-color: #0747A6;\n    display: block;\n    min-height: 60px;\n    float: left;\n    margin-left: 27px;\n}\n\n.page-topbar .logo-icon{\n    \n    background-repeat: no-repeat !important;\n}\n\n.page-topbar .logo-icon {\n    width: 100px !important;\n    background-color: #35395c;\n    display: block;\n    min-height: 60px;\n    float: left;\n}\n\n.page-topbar ul {\n    margin: 0px;\n    padding: 0px;\n}\n\n.page-topbar ul li {\n    list-style-type: none;    \n}\n\n.page-topbar .user-info li a {\n    display: inline-block;\n    font-size: 20px;\n    padding: 12px 20px;\n    color: #fff;\n    font-family: 'Comfortaa';\n    font-weight: 400;\n     position:relative;\n}\n\n.page-topbar .user-notify li a {\n    display: inline-block;\n    font-size: 16px;\n    padding: 22px 14px;\n    color: #fff;\n    font-family: 'Comfortaa';\n    font-weight: 400;\n     position:relative;\n}\n\n.page-topbar .quick-area .info-menu {\n    height: 60px;\n    margin: 0;\n    line-height: 50px;\n    padding: 0 15px;\n    display: flex;\n}\n\n.info-menu li{\n   \n}\n\n.page-topbar .badge {\n    display: inline-block;\n    min-width: 10px;\n    position: absolute;\n    padding: 3px 6px;\n    font-size: 10px;\n    font-weight: bold;\n    line-height: 1;\n    color: #fff;\n    text-align: center;\n    white-space: nowrap;\n    vertical-align: middle;\n    background-color: #F44336;\n    border-radius: 10px;\n    top: 8px;\n    right: 0;\n}\n\nli.profile img {\n    height: 30px;\n    width: 30px;\n    top: 0px;\n    right: 10px;\n    position: relative;\n    background-color: #999999;\n}\n\n/* Ripple magic */\n\n.page-topbar button:focus {\n     outline: none;\n}\n\n.page-topbar button {\n    border: none;\n    width: 50px;\n    cursor: pointer;\n    height: 50px;\n    color: white;\n    padding: 11px 15px;\n    font-size: 21px;\n    border-radius: 100%;\n    background: transparent;\n    margin-top: 5px;\n    position: relative;\n    float: left;\n}\n\n.page-topbar button{\n     position: relative;\n     overflow: hidden;\n}\n\n.page-topbar button:after {\n     content: '';\n     position: absolute;\n     top: 50%;\n     left: 50%;\n     width: 5px;\n     height: 5px;\n     background: rgba(255, 255, 255, .5);\n     opacity: 0;\n     border-radius: 100%;\n     transform: scale(1, 1) translate(-50%);\n     transform-origin: 50% 50%;\n}\n\n@-webkit-keyframes ripple {\n     0% {\n         transform: scale(0, 0);\n         opacity: 1;\n    }\n     20% {\n         transform: scale(25, 25);\n         opacity: 1;\n    }\n     100% {\n         opacity: 0;\n         transform: scale(40, 40);\n    }\n}\n\n@keyframes ripple {\n     0% {\n         transform: scale(0, 0);\n         opacity: 1;\n    }\n     20% {\n         transform: scale(25, 25);\n         opacity: 1;\n    }\n     100% {\n         opacity: 0;\n         transform: scale(40, 40);\n    }\n}\n\n.page-topbar button:focus:not(:active)::after {\n     -webkit-animation: ripple 1s ease-out;\n             animation: ripple 1s ease-out;\n}\n\n.page-topbar li .dropdown-menu.profile {\n    max-width: 180px;\n    height: auto;\n    padding: 0px;\n}\n\n.dropdown-menu {\n    width: 360px;\n    border-radius: 0px;\n    -o-border-radius: 0px;\n    -ms-border-radius: 0px;\n    -moz-border-radius: 0px;\n    -webkit-border-radius: 0px;\n    line-height: 23px;\n    font-size: 14px;\n    padding-bottom: 0px;\n    border: 0px solid transparent;\n    box-shadow: 0 0 20px 0 rgba(33,33,33,.2);\n    -webkit-box-shadow: 0 0 20px 0 rgba(33,33,33,.2);\n    -moz-box-shadow: 0 0 20px 0 rgba(33,33,33,.2);\n    -o-box-shadow: 0 0 20px 0 rgba(33,33,33,.2);\n    -ms-box-shadow: 0 0 20px 0 rgba(33,33,33,.2);\n    margin-top: -1px;\n    padding-top: 0px;\n}\n\n.page-topbar .dropdown-menu {\n    background: #ffffff;\n    border: 1px solid #f5f5f5;\n}\n\n.page-topbar li .dropdown-menu.profile li {\n    line-height: 40px;\n    display: block;\n    height: 40px;\n    margin: 0px;\n}\n\n.page-topbar li .dropdown-menu.profile li a {\n    display: block;\n    border-bottom: 1px solid #eeeeee;\n    padding: 12px 8px;\n}\n\n.page-topbar .dropdown-menu:after, .page-topbar .dropdown-menu:before {\n    bottom: 100%;\n    left: 22px;\n    border: solid transparent;\n    content: \" \";\n    height: 0;\n    width: 0;\n    position: absolute;\n    pointer-events: none;\n}\n\n.page-topbar .dropdown-menu:before {\n    border-color: rgba(194, 225, 245, 0);\n    border-bottom-color: rgba(80, 80, 80, .1);\n    border-width: 10px;\n    margin-left: -10px;\n}\n\n.page-topbar li .dropdown-menu li a {\n    text-decoration: none;\n    color: #717171;\n}\n\n/*//////////////////////////SIDE BAR NAVE//////////////////////////*/\n\n.page-sidebar {\n    height: auto;\n    width: 260px;\n    position: fixed;\n    padding: 0px;\n    background-color: #ffffff;\n    margin-top: 60px;\n    overflow: hidden;\n    box-shadow: 0 0 10px 0 rgba(33,33,33,.2);\n    -webkit-box-shadow: 0 0 10px 0 rgba(33,33,33,.2);\n    -moz-box-shadow: 0 0 10px 0 rgba(33,33,33,.2);\n    -o-box-shadow: 0 0 10px 0 rgba(33,33,33,.2);\n    -ms-box-shadow: 0 0 10px 0 rgba(33,33,33,.2);\n    min-height: 100%;\n    height: auto;\n}\n\n.page-sidebar.fixedscroll {\n    position: fixed;\n}\n\n.page-sidebar.collapseit {\n    width: 60px;\n    margin-left: 0px !important;\n    z-index: 99;\n}\n\n.page-sidebar .profile-info {\n    background: transparent;\n    padding-top: 15px;\n    padding-bottom: 10px;\n    padding-left: 20px;\n    padding-right: 15px;\n    display: flex;\n}\n\n.page-sidebar .profile-image {\n    padding-right: 5px;\n    display: inline-block;\n}\n\n.profile-info .profile-image img {\n    height: 65px;\n    width: 65px;\n    float: right;\n    top: 5px;\n    left: 5px;\n    position: relative;    \n}\n\n.short-profile img {\n    height: 45px !important;\n    width: 45px !important; \n    left: 2px !important;\n}\n\n.short-profile .profile-details{\n    display: none;\n}\n\n.profile-info .profile-details h3 {\n    margin: 19px 0px 6px 14px;\n}\n\n.profile-info .profile-details .profile-title {\n    color: rgba(174, 178, 183, 1.0);\n    font-size: 13px;\n    margin: 0px 0px 6px 14px;\n}\n\n#main-menu-wrapper ul {\n    padding: 0px;\n    margin: 0px;\n    padding-left: 0px;\n    list-style-type: none;\n    font-family: 'Comfortaa';\n    font-weight: 400;\n    font-size: 14px;\n}\n\n#main-menu-wrapper .menusection {    \n    font-weight: 400;\n    font-size: 13px;\n    line-height: 40px;\n    padding-left: 24px;\n    margin: 10px 0 0px 0;\n    color: #9e9e9e;\n    text-transform: uppercase;\n}\n\n.profile-info .profile-details h3 a {    \n    font-weight: 400;\n    color: #757575;\n    font-size: 19px;\n    line-height: 23px;\n    text-decoration: none;\n}\n\n#main-menu-wrapper li a {\n    display: block;\n    line-height: 42px;\n    min-height: 42px;\n    height: auto;\n    color: #424242;\n    text-decoration: none;\n/*    padding: 14px 0px;*/\n    padding-left: 5px;\n    clear: both;\n    border-left: 4px solid transparent;\n    white-space: nowrap;\n/*    font-size: 18px;*/\n}\n\n#main-menu-wrapper .fa {\n    font-size: 14px;\n}\n\n#main-menu-wrapper li a i {\n    display: inline-block;\n    width: 40px;\n    height: 34px;\n    line-height: 34px;\n    text-align: center;\n    top: 0px;\n    position: relative;\n}\n\n#main-menu-wrapper li a:hover {\n    background-color: rgba(33, 33, 33, 0.1);\n    border-left: 4px solid #35395c;    \n}\n\n/*MAIN CONTENT/////////////////////////////////////////////////////////////*/\n\n#main-content {\n    margin-left: 260px;\n    display: block;\n}\n\n#main-content.sidebar_shift {\n    margin-left: 60px;\n    margin-right: 0px;\n}\n\n.main-wrapper {\n    margin-top: 60px;\n    display: inline-block;\n    width: 100%;\n    padding: 15px 15px 0 15px;\n    margin-left: 0px;\n    margin-right: 0px;\n}\n\nsection.box {\n    background-color: #ffffff;\n    margin: 15px 0;\n    min-height: 350px;\n    box-shadow: 0 1px 3px rgba(33,33,33,.2);\n    -webkit-box-shadow: 0 1px 3px rgba(33,33,33,.2);\n    -moz-box-shadow: 0 1px 3px rgba(33,33,33,.2);\n    -o-box-shadow: 0 1px 3px rgba(33,33,33,.2);\n    -ms-box-shadow: 0 1px 3px rgba(33,33,33,.2);\n}\n\n.crop {\n   border-radius: 100%;\n    line-height: 2em;\n    padding: 0em;\n    text-align: center;\n    margin: 0em;\n    width: 2em;\n    height: 2em;\n    float: left;\n    text-transform: uppercase;\n  }\n\n.about {\n    float: left;\n    padding-left: 0.4em;\n  }\n\n.online,\n  .offline,\n  .me,\n  .warning {\n    margin-right: 3px;\n    font-size: 0.8em;\n  }\n\n.online {\n    color: #86BB71;\n  }\n\n.offline {\n    color: #E38968;\n  }\n\n.me {\n    color: #94C2ED;\n  }\n\n.warning {\n    color: #00c8e7;\n  }\n\n.status {\n    color: #92959E;\n  }\n\n.name {\n    float: left;\n  }\n\n.page-topbar .badge {\n    display: inline-block;\n    min-width: 10px;\n    position: absolute;\n    padding: 3px 6px;\n    font-size: 10px;\n    font-weight: bold;\n    line-height: 1;\n    color: #fff;\n    text-align: center;\n    white-space: nowrap;\n    vertical-align: middle;\n    background-color: #F44336;\n    border-radius: 10px;\n    top: 8px;\n    right: 12px;\n}\n\n\n  \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbWVudC9jb21tZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCx5QkFBeUI7SUFDekIsUUFBUTtJQUNSLGlCQUFpQjtJQUNqQixTQUFTO0lBQ1QsdUNBQXVDO0lBQ3ZDLCtDQUErQztJQUMvQyw0Q0FBNEM7SUFDNUMsMENBQTBDO0lBQzFDLDJDQUEyQztJQUMzQyxnQkFBZ0I7QUFDcEI7O0FBRUEsdUNBQXVDOztBQUN2QztJQUlJLGlCQUFpQjtBQUNyQjs7QUFFQTs7SUFFSSw0QkFBNEI7QUFDaEM7O0FBQ0E7SUFDSSxZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLGlCQUFpQjtBQUNyQjs7QUFFQTs7SUFFSSx1Q0FBdUM7QUFDM0M7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsV0FBVztBQUNmOztBQUNBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBQ0E7SUFDSSxxQkFBcUI7QUFDekI7O0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsd0JBQXdCO0lBQ3hCLGdCQUFnQjtLQUNmLGlCQUFpQjtBQUN0Qjs7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCx3QkFBd0I7SUFDeEIsZ0JBQWdCO0tBQ2YsaUJBQWlCO0FBQ3RCOztBQUNBO0lBQ0ksWUFBWTtJQUNaLFNBQVM7SUFDVCxpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGFBQWE7QUFDakI7O0FBRUE7O0FBRUE7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGlCQUFpQjtJQUNq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eUJBQXlCO0lBQ3pCLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7O0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsY0FBYztJQUNkLGlCQUFpQjtJQUNqQix1Q0FBdUM7SUFDdkMsK0NBQStDO0lBQy9DLDRDQUE0QztJQUM1QywwQ0FBMEM7SUFDMUMsMkNBQTJDO0FBQy9DOztBQUlBO0dBQ0csbUJBQW1CO0lBQ2xCLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxVQUFVO0lBQ1YsV0FBVztJQUNYLFdBQVc7SUFDWCx5QkFBeUI7RUFDM0I7O0FBRUE7SUFDRSxXQUFXO0lBQ1gsbUJBQW1CO0VBQ3JCOztBQUVBOzs7O0lBSUUsaUJBQWlCO0lBQ2pCLGdCQUFnQjtFQUNsQjs7QUFFQTtJQUNFLGNBQWM7RUFDaEI7O0FBRUE7SUFDRSxjQUFjO0VBQ2hCOztBQUVBO0lBQ0UsY0FBYztFQUNoQjs7QUFFQTtJQUNFLGNBQWM7RUFDaEI7O0FBRUE7SUFDRSxjQUFjO0VBQ2hCOztBQUVBO0lBQ0UsV0FBVztFQUNiOztBQUVBO0lBQ0UscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsY0FBYztJQUNkLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0Qix5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLFFBQVE7SUFDUixXQUFXO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9jb21tZW50L2NvbW1lbnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYWdlLXRvcGJhciB7XG4gICAgbWluLWhlaWdodDogNjBweDtcbiAgICAvKnBvc2l0aW9uOiBmaXhlZDsqL1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwNzQ3QTY7XG4gICAgdG9wOiAwcHg7XG4gICAgLyp6LWluZGV4OjEwMDAwOyovXG4gICAgbGVmdDogMHB4O1xuICAgIGJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKDMzLDMzLDMzLC4yKTtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKDMzLDMzLDMzLC4yKTtcbiAgICAtbW96LWJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKDMzLDMzLDMzLC4yKTtcbiAgICAtby1ib3gtc2hhZG93OiAwIDJweCA0cHggcmdiYSgzMywzMywzMywuMik7XG4gICAgLW1zLWJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKDMzLDMzLDMzLC4yKTtcbiAgICBtYXgtaGVpZ2h0OiA2MHB4O1xufVxuXG4vKlRyYW5zaXRpb249PT09PT09PT09PT09PT09PT09PT09PT09PSovXG4ucGFnZS10b3BiYXIsIC5sb2dvLWFyZWEsIC5sb2dvLWFyZWEsICNtYWluLWNvbnRlbnQsIC5sb2dvLWljb24sIC53cmFwbGlzdCwgLnBhZ2Utc2lkZWJhciwgLnByb2ZpbGUtaW5mbywgLnByb2ZpbGUtaW1hZ2UsIC5wcm9maWxlLWRldGFpbHMsIC5tZW51LXRpdGxlLCAucHJvZmlsZS1pbWFnZSBhIGltZyB7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiA2MDBtcztcbiAgICAtbW96LXRyYW5zaXRpb246IDYwMG1zO1xuICAgIC1vLXRyYW5zaXRpb246IDYwMG1zO1xuICAgIHRyYW5zaXRpb246IDYwMG1zO1xufVxuXG4ucGFnZS10b3BiYXIgLmxvZ28tYXJlYSB7XG4gICBcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xufVxuLnBhZ2UtdG9wYmFyIC5sb2dvLWFyZWEge1xuICAgIHdpZHRoOiAyNDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDc0N0E2O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1pbi1oZWlnaHQ6IDYwcHg7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgbWFyZ2luLWxlZnQ6IDI3cHg7XG59XG5cbi5wYWdlLXRvcGJhciAubG9nby1pY29ue1xuICAgIFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQgIWltcG9ydGFudDtcbn1cblxuLnBhZ2UtdG9wYmFyIC5sb2dvLWljb24ge1xuICAgIHdpZHRoOiAxMDBweCAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzNTM5NWM7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWluLWhlaWdodDogNjBweDtcbiAgICBmbG9hdDogbGVmdDtcbn1cbi5wYWdlLXRvcGJhciB1bCB7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgcGFkZGluZzogMHB4O1xufVxuLnBhZ2UtdG9wYmFyIHVsIGxpIHtcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7ICAgIFxufVxuLnBhZ2UtdG9wYmFyIC51c2VyLWluZm8gbGkgYSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBwYWRkaW5nOiAxMnB4IDIwcHg7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC1mYW1pbHk6ICdDb21mb3J0YWEnO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xufVxuLnBhZ2UtdG9wYmFyIC51c2VyLW5vdGlmeSBsaSBhIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIHBhZGRpbmc6IDIycHggMTRweDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LWZhbWlseTogJ0NvbWZvcnRhYSc7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgcG9zaXRpb246cmVsYXRpdmU7XG59XG4ucGFnZS10b3BiYXIgLnF1aWNrLWFyZWEgLmluZm8tbWVudSB7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIG1hcmdpbjogMDtcbiAgICBsaW5lLWhlaWdodDogNTBweDtcbiAgICBwYWRkaW5nOiAwIDE1cHg7XG4gICAgZGlzcGxheTogZmxleDtcbn1cblxuLmluZm8tbWVudSBsaXtcbiAgIFxufVxuXG4ucGFnZS10b3BiYXIgLmJhZGdlIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWluLXdpZHRoOiAxMHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBwYWRkaW5nOiAzcHggNnB4O1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBsaW5lLWhlaWdodDogMTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGNDQzMzY7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICB0b3A6IDhweDtcbiAgICByaWdodDogMDtcbn1cbmxpLnByb2ZpbGUgaW1nIHtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgd2lkdGg6IDMwcHg7XG4gICAgdG9wOiAwcHg7XG4gICAgcmlnaHQ6IDEwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM5OTk5OTk7XG59XG5cbi8qIFJpcHBsZSBtYWdpYyAqL1xuLnBhZ2UtdG9wYmFyIGJ1dHRvbjpmb2N1cyB7XG4gICAgIG91dGxpbmU6IG5vbmU7XG59XG4gLnBhZ2UtdG9wYmFyIGJ1dHRvbiB7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDExcHggMTVweDtcbiAgICBmb250LXNpemU6IDIxcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGZsb2F0OiBsZWZ0O1xufVxuIC5wYWdlLXRvcGJhciBidXR0b257XG4gICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbiAucGFnZS10b3BiYXIgYnV0dG9uOmFmdGVyIHtcbiAgICAgY29udGVudDogJyc7XG4gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgdG9wOiA1MCU7XG4gICAgIGxlZnQ6IDUwJTtcbiAgICAgd2lkdGg6IDVweDtcbiAgICAgaGVpZ2h0OiA1cHg7XG4gICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjUpO1xuICAgICBvcGFjaXR5OiAwO1xuICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpIHRyYW5zbGF0ZSgtNTAlKTtcbiAgICAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDUwJTtcbn1cbiBAa2V5ZnJhbWVzIHJpcHBsZSB7XG4gICAgIDAlIHtcbiAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCwgMCk7XG4gICAgICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiAgICAgMjAlIHtcbiAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMjUsIDI1KTtcbiAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuICAgICAxMDAlIHtcbiAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDQwLCA0MCk7XG4gICAgfVxufVxuIC5wYWdlLXRvcGJhciBidXR0b246Zm9jdXM6bm90KDphY3RpdmUpOjphZnRlciB7XG4gICAgIGFuaW1hdGlvbjogcmlwcGxlIDFzIGVhc2Utb3V0O1xufVxuLnBhZ2UtdG9wYmFyIGxpIC5kcm9wZG93bi1tZW51LnByb2ZpbGUge1xuICAgIG1heC13aWR0aDogMTgwcHg7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIHBhZGRpbmc6IDBweDtcbn1cbi5kcm9wZG93bi1tZW51IHtcbiAgICB3aWR0aDogMzYwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xuICAgIC1vLWJvcmRlci1yYWRpdXM6IDBweDtcbiAgICAtbXMtYm9yZGVyLXJhZGl1czogMHB4O1xuICAgIC1tb3otYm9yZGVyLXJhZGl1czogMHB4O1xuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyM3B4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xuICAgIGJvcmRlcjogMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGJveC1zaGFkb3c6IDAgMCAyMHB4IDAgcmdiYSgzMywzMywzMywuMik7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMjBweCAwIHJnYmEoMzMsMzMsMzMsLjIpO1xuICAgIC1tb3otYm94LXNoYWRvdzogMCAwIDIwcHggMCByZ2JhKDMzLDMzLDMzLC4yKTtcbiAgICAtby1ib3gtc2hhZG93OiAwIDAgMjBweCAwIHJnYmEoMzMsMzMsMzMsLjIpO1xuICAgIC1tcy1ib3gtc2hhZG93OiAwIDAgMjBweCAwIHJnYmEoMzMsMzMsMzMsLjIpO1xuICAgIG1hcmdpbi10b3A6IC0xcHg7XG4gICAgcGFkZGluZy10b3A6IDBweDtcbn1cbi5wYWdlLXRvcGJhciAuZHJvcGRvd24tbWVudSB7XG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZjVmNWY1O1xufVxuLnBhZ2UtdG9wYmFyIGxpIC5kcm9wZG93bi1tZW51LnByb2ZpbGUgbGkge1xuICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGhlaWdodDogNDBweDtcbiAgICBtYXJnaW46IDBweDtcbn1cbi5wYWdlLXRvcGJhciBsaSAuZHJvcGRvd24tbWVudS5wcm9maWxlIGxpIGEge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWVlZWVlO1xuICAgIHBhZGRpbmc6IDEycHggOHB4O1xufVxuXG4ucGFnZS10b3BiYXIgLmRyb3Bkb3duLW1lbnU6YWZ0ZXIsIC5wYWdlLXRvcGJhciAuZHJvcGRvd24tbWVudTpiZWZvcmUge1xuICAgIGJvdHRvbTogMTAwJTtcbiAgICBsZWZ0OiAyMnB4O1xuICAgIGJvcmRlcjogc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgY29udGVudDogXCIgXCI7XG4gICAgaGVpZ2h0OiAwO1xuICAgIHdpZHRoOiAwO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cbi5wYWdlLXRvcGJhciAuZHJvcGRvd24tbWVudTpiZWZvcmUge1xuICAgIGJvcmRlci1jb2xvcjogcmdiYSgxOTQsIDIyNSwgMjQ1LCAwKTtcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiByZ2JhKDgwLCA4MCwgODAsIC4xKTtcbiAgICBib3JkZXItd2lkdGg6IDEwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xufVxuLnBhZ2UtdG9wYmFyIGxpIC5kcm9wZG93bi1tZW51IGxpIGEge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjb2xvcjogIzcxNzE3MTtcbn1cblxuXG4vKi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vU0lERSBCQVIgTkFWRS8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vKi9cblxuLnBhZ2Utc2lkZWJhciB7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIHdpZHRoOiAyNjBweDtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgcGFkZGluZzogMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgbWFyZ2luLXRvcDogNjBweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IDAgcmdiYSgzMywzMywzMywuMik7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMTBweCAwIHJnYmEoMzMsMzMsMzMsLjIpO1xuICAgIC1tb3otYm94LXNoYWRvdzogMCAwIDEwcHggMCByZ2JhKDMzLDMzLDMzLC4yKTtcbiAgICAtby1ib3gtc2hhZG93OiAwIDAgMTBweCAwIHJnYmEoMzMsMzMsMzMsLjIpO1xuICAgIC1tcy1ib3gtc2hhZG93OiAwIDAgMTBweCAwIHJnYmEoMzMsMzMsMzMsLjIpO1xuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XG4gICAgaGVpZ2h0OiBhdXRvO1xufVxuLnBhZ2Utc2lkZWJhci5maXhlZHNjcm9sbCB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xufVxuLnBhZ2Utc2lkZWJhci5jb2xsYXBzZWl0IHtcbiAgICB3aWR0aDogNjBweDtcbiAgICBtYXJnaW4tbGVmdDogMHB4ICFpbXBvcnRhbnQ7XG4gICAgei1pbmRleDogOTk7XG59XG4ucGFnZS1zaWRlYmFyIC5wcm9maWxlLWluZm8ge1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG4ucGFnZS1zaWRlYmFyIC5wcm9maWxlLWltYWdlIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuLnByb2ZpbGUtaW5mbyAucHJvZmlsZS1pbWFnZSBpbWcge1xuICAgIGhlaWdodDogNjVweDtcbiAgICB3aWR0aDogNjVweDtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgdG9wOiA1cHg7XG4gICAgbGVmdDogNXB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgICAgXG59XG4uc2hvcnQtcHJvZmlsZSBpbWcge1xuICAgIGhlaWdodDogNDVweCAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiA0NXB4ICFpbXBvcnRhbnQ7IFxuICAgIGxlZnQ6IDJweCAhaW1wb3J0YW50O1xufVxuLnNob3J0LXByb2ZpbGUgLnByb2ZpbGUtZGV0YWlsc3tcbiAgICBkaXNwbGF5OiBub25lO1xufVxuLnByb2ZpbGUtaW5mbyAucHJvZmlsZS1kZXRhaWxzIGgzIHtcbiAgICBtYXJnaW46IDE5cHggMHB4IDZweCAxNHB4O1xufVxuLnByb2ZpbGUtaW5mbyAucHJvZmlsZS1kZXRhaWxzIC5wcm9maWxlLXRpdGxlIHtcbiAgICBjb2xvcjogcmdiYSgxNzQsIDE3OCwgMTgzLCAxLjApO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBtYXJnaW46IDBweCAwcHggNnB4IDE0cHg7XG59XG4jbWFpbi1tZW51LXdyYXBwZXIgdWwge1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICBtYXJnaW46IDBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDtcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgZm9udC1mYW1pbHk6ICdDb21mb3J0YWEnO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zaXplOiAxNHB4O1xufVxuI21haW4tbWVudS13cmFwcGVyIC5tZW51c2VjdGlvbiB7ICAgIFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICAgIHBhZGRpbmctbGVmdDogMjRweDtcbiAgICBtYXJnaW46IDEwcHggMCAwcHggMDtcbiAgICBjb2xvcjogIzllOWU5ZTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuLnByb2ZpbGUtaW5mbyAucHJvZmlsZS1kZXRhaWxzIGgzIGEgeyAgICBcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGNvbG9yOiAjNzU3NTc1O1xuICAgIGZvbnQtc2l6ZTogMTlweDtcbiAgICBsaW5lLWhlaWdodDogMjNweDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4jbWFpbi1tZW51LXdyYXBwZXIgbGkgYSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbGluZS1oZWlnaHQ6IDQycHg7XG4gICAgbWluLWhlaWdodDogNDJweDtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgY29sb3I6ICM0MjQyNDI7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuLyogICAgcGFkZGluZzogMTRweCAwcHg7Ki9cbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgICBjbGVhcjogYm90aDtcbiAgICBib3JkZXItbGVmdDogNHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4vKiAgICBmb250LXNpemU6IDE4cHg7Ki9cbn1cbiNtYWluLW1lbnUtd3JhcHBlciAuZmEge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbn1cbiNtYWluLW1lbnUtd3JhcHBlciBsaSBhIGkge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogNDBweDtcbiAgICBoZWlnaHQ6IDM0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDM0cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHRvcDogMHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbiNtYWluLW1lbnUtd3JhcHBlciBsaSBhOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDMzLCAzMywgMzMsIDAuMSk7XG4gICAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCAjMzUzOTVjOyAgICBcbn1cblxuXG5cbi8qTUFJTiBDT05URU5ULy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyovXG5cbiNtYWluLWNvbnRlbnQge1xuICAgIG1hcmdpbi1sZWZ0OiAyNjBweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cbiNtYWluLWNvbnRlbnQuc2lkZWJhcl9zaGlmdCB7XG4gICAgbWFyZ2luLWxlZnQ6IDYwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAwcHg7XG59XG4ubWFpbi13cmFwcGVyIHtcbiAgICBtYXJnaW4tdG9wOiA2MHB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAxNXB4IDE1cHggMCAxNXB4O1xuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAwcHg7XG59XG5zZWN0aW9uLmJveCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgICBtYXJnaW46IDE1cHggMDtcbiAgICBtaW4taGVpZ2h0OiAzNTBweDtcbiAgICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgzMywzMywzMywuMik7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgzMywzMywzMywuMik7XG4gICAgLW1vei1ib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgzMywzMywzMywuMik7XG4gICAgLW8tYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMzMsMzMsMzMsLjIpO1xuICAgIC1tcy1ib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgzMywzMywzMywuMik7XG59XG5cblxuXG4uY3JvcCB7XG4gICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgIGxpbmUtaGVpZ2h0OiAyZW07XG4gICAgcGFkZGluZzogMGVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW46IDBlbTtcbiAgICB3aWR0aDogMmVtO1xuICAgIGhlaWdodDogMmVtO1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIH1cbiAgXG4gIC5hYm91dCB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgcGFkZGluZy1sZWZ0OiAwLjRlbTtcbiAgfVxuICBcbiAgLm9ubGluZSxcbiAgLm9mZmxpbmUsXG4gIC5tZSxcbiAgLndhcm5pbmcge1xuICAgIG1hcmdpbi1yaWdodDogM3B4O1xuICAgIGZvbnQtc2l6ZTogMC44ZW07XG4gIH1cbiAgXG4gIC5vbmxpbmUge1xuICAgIGNvbG9yOiAjODZCQjcxO1xuICB9XG4gIFxuICAub2ZmbGluZSB7XG4gICAgY29sb3I6ICNFMzg5Njg7XG4gIH1cbiAgXG4gIC5tZSB7XG4gICAgY29sb3I6ICM5NEMyRUQ7XG4gIH1cbiAgXG4gIC53YXJuaW5nIHtcbiAgICBjb2xvcjogIzAwYzhlNztcbiAgfVxuICBcbiAgLnN0YXR1cyB7XG4gICAgY29sb3I6ICM5Mjk1OUU7XG4gIH1cbiAgXG4gIC5uYW1lIHtcbiAgICBmbG9hdDogbGVmdDtcbiAgfVxuXG4gIC5wYWdlLXRvcGJhciAuYmFkZ2Uge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBtaW4td2lkdGg6IDEwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHBhZGRpbmc6IDNweCA2cHg7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y0NDMzNjtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIHRvcDogOHB4O1xuICAgIHJpZ2h0OiAxMnB4O1xufVxuXG5cbiAgIl19 */");

/***/ }),

/***/ "./src/app/comment/comment.component.ts":
/*!**********************************************!*\
  !*** ./src/app/comment/comment.component.ts ***!
  \**********************************************/
/*! exports provided: CommentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentComponent", function() { return CommentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_issue_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/issue.service */ "./src/app/issue.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_app_user_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/user/user.service */ "./src/app/user/user.service.ts");
/* harmony import */ var ng2_cookies__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-cookies */ "./node_modules/ng2-cookies/index.js");
/* harmony import */ var ng2_cookies__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng6-toastr-notifications */ "./node_modules/ng6-toastr-notifications/fesm2015/ng6-toastr-notifications.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");










let CommentComponent = class CommentComponent {
    constructor(router, modalService, _route, toastr, userService, issueService) {
        this.router = router;
        this.modalService = modalService;
        this._route = _route;
        this.toastr = toastr;
        this.userService = userService;
        this.issueService = issueService;
        this.logout = () => {
            this.userService.logout().subscribe(apiResponse => {
                if (apiResponse.status === 200) {
                    ng2_cookies__WEBPACK_IMPORTED_MODULE_6__["Cookie"].delete('authtoken');
                    ng2_cookies__WEBPACK_IMPORTED_MODULE_6__["Cookie"].delete('receiverId');
                    ng2_cookies__WEBPACK_IMPORTED_MODULE_6__["Cookie"].delete('receiverName');
                    this.router.navigate(['/login']);
                }
                else {
                    this.toastr.errorToastr(apiResponse.message);
                }
            }, err => {
                this.toastr.errorToastr('some error occured');
            });
        };
        this.myForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormGroup"]({
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required)
        });
    }
    ngOnInit() {
        this.commentName = ng2_cookies__WEBPACK_IMPORTED_MODULE_6__["Cookie"].get('receiverName');
        this.firstChar = this.commentName[0];
        let issueId = this._route.snapshot.paramMap.get('issueId');
        let notifyId = this._route.snapshot.paramMap.get('notifyId');
        this.getAllComment(issueId, notifyId);
        this.totalNotification();
        console.log('vidya');
        this.issueService.getAllNotification().subscribe(data => {
            if (data.data != null) {
                this.notification = data.data;
                console.log(this.notification);
            }
            else {
            }
        }, err => {
            console.log('some error occured');
            console.error(err);
        });
    }
    totalNotification() {
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_4__('http://localhost:3000');
        this.socket.emit('comment');
        this.socket.on('notification', data => {
            this.totalNotify = data.total_notify;
        });
    }
    getAllComment(issueId, notifyId) {
        this.issueService.getAllComments(issueId, notifyId).subscribe(data => {
            if (data.data != null) {
                this.commentData = data.data;
                console.log(this.commentData);
            }
            else {
            }
        }, err => {
            console.log('some error occured');
            console.error(err);
        });
    }
    backToHome() {
        this.router.navigate(['/notifications']);
    }
    open(content) {
        this.modalService.open(content, { size: 'lg' }).result.then(result => {
            this.closeResult = `Closed with: ${result}`;
        }, reason => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }
    getDismissReason(reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return `with: ${reason}`;
        }
    }
};
CommentComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModal"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_7__["ToastrManager"] },
    { type: src_app_user_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] },
    { type: src_app_issue_service__WEBPACK_IMPORTED_MODULE_2__["IssueService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CommentComponent.prototype, "receiverName", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CommentComponent.prototype, "userLastName", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CommentComponent.prototype, "messageRead", void 0);
CommentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-comment',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./comment.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/comment/comment.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./comment.component.css */ "./src/app/comment/comment.component.css")).default]
    })
], CommentComponent);



/***/ }),

/***/ "./src/app/comment/comment.module.ts":
/*!*******************************************!*\
  !*** ./src/app/comment/comment.module.ts ***!
  \*******************************************/
/*! exports provided: CommentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentModule", function() { return CommentModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var src_app_shared_material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/material.module */ "./src/app/shared/material.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_app_comment_comment_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/comment/comment.component */ "./src/app/comment/comment.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var ngx_editor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-editor */ "./node_modules/ngx-editor/fesm2015/ngx-editor.js");









let CommentModule = class CommentModule {
};
CommentModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [src_app_comment_comment_component__WEBPACK_IMPORTED_MODULE_6__["CommentComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            src_app_shared_material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            ngx_editor__WEBPACK_IMPORTED_MODULE_8__["NgxEditorModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"]
        ],
        exports: [src_app_comment_comment_component__WEBPACK_IMPORTED_MODULE_6__["CommentComponent"]]
    })
], CommentModule);



/***/ }),

/***/ "./src/app/dashboard/dashboard-route.guard.ts":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard-route.guard.ts ***!
  \****************************************************/
/*! exports provided: DashboardRouteGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardRouteGuard", function() { return DashboardRouteGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ng2_cookies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-cookies */ "./node_modules/ng2-cookies/index.js");
/* harmony import */ var ng2_cookies__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies__WEBPACK_IMPORTED_MODULE_3__);




let DashboardRouteGuard = class DashboardRouteGuard {
    constructor(router) {
        this.router = router;
    }
    canActivate(next, state) {
        console.log('in guard service');
        if (ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get('authtoken') === undefined || ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get('authtoken') === '' || ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get('authtoken') === null) {
            this.router.navigate(['/login']);
            return false;
        }
        else {
            return true;
        }
        // return true;
    }
};
DashboardRouteGuard.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
DashboardRouteGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], DashboardRouteGuard);



/***/ }),

/***/ "./src/app/dashboard/dashboard-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/dashboard/dashboard-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: DashboardRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardRoutingModule", function() { return DashboardRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_dashboard_main_content_main_content_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/dashboard/main-content/main-content.component */ "./src/app/dashboard/main-content/main-content.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var src_app_dashboard_dashboard_route_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/dashboard/dashboard-route.guard */ "./src/app/dashboard/dashboard-route.guard.ts");






const routes = [
    {
        path: 'dashboard',
        component: src_app_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"],
        children: [
            { path: 'main-content', component: src_app_dashboard_main_content_main_content_component__WEBPACK_IMPORTED_MODULE_1__["MainContentComponent"], canActivate: [src_app_dashboard_dashboard_route_guard__WEBPACK_IMPORTED_MODULE_5__["DashboardRouteGuard"]] },
            {
                path: '**',
                redirectTo: 'main-content'
            }
        ]
    }
];
let DashboardRoutingModule = class DashboardRoutingModule {
};
DashboardRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
    })
], DashboardRoutingModule);



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DashboardComponent = class DashboardComponent {
    constructor() { }
    ngOnInit() {
    }
};
DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dashboard',
        template: `
    <p>
     <app-topbar></app-topbar>
     <router-outlet></router-outlet>
    </p>
  `
    })
], DashboardComponent);



/***/ }),

/***/ "./src/app/dashboard/dashboard.module.ts":
/*!***********************************************!*\
  !*** ./src/app/dashboard/dashboard.module.ts ***!
  \***********************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _comment_comment_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../comment/comment.module */ "./src/app/comment/comment.module.ts");
/* harmony import */ var _edit_issue_edit_issue_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../edit-issue/edit-issue.module */ "./src/app/edit-issue/edit-issue.module.ts");
/* harmony import */ var _dashboard_route_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard-route.guard */ "./src/app/dashboard/dashboard-route.guard.ts");
/* harmony import */ var src_app_dashboard_main_content_main_content_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/dashboard/main-content/main-content.component */ "./src/app/dashboard/main-content/main-content.component.ts");
/* harmony import */ var _shared_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../shared/material.module */ "./src/app/shared/material.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var src_app_dashboard_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/dashboard/sidebar/sidebar.component */ "./src/app/dashboard/sidebar/sidebar.component.ts");
/* harmony import */ var src_app_dashboard_topbar_topbar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/dashboard/topbar/topbar.component */ "./src/app/dashboard/topbar/topbar.component.ts");
/* harmony import */ var src_app_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var src_app_dashboard_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/dashboard/dashboard-routing.module */ "./src/app/dashboard/dashboard-routing.module.ts");
/* harmony import */ var ngx_editor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-editor */ "./node_modules/ngx-editor/fesm2015/ngx-editor.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/index.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var ng2_image_viewer__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng2-image-viewer */ "./node_modules/ng2-image-viewer/ng2-image-viewer.umd.js");
/* harmony import */ var ng2_image_viewer__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(ng2_image_viewer__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var src_app_notification_notification_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/app/notification/notification.module */ "./src/app/notification/notification.module.ts");




















let DashboardModule = class DashboardModule {
};
DashboardModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["NgModule"])({
        declarations: [src_app_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_10__["DashboardComponent"], src_app_dashboard_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_8__["SidebarComponent"], src_app_dashboard_main_content_main_content_component__WEBPACK_IMPORTED_MODULE_4__["MainContentComponent"], src_app_dashboard_topbar_topbar_component__WEBPACK_IMPORTED_MODULE_9__["TopbarComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"],
            _shared_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"],
            ng2_image_viewer__WEBPACK_IMPORTED_MODULE_17__["ImageViewerModule"],
            ng2_file_upload__WEBPACK_IMPORTED_MODULE_16__["FileUploadModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"],
            ngx_editor__WEBPACK_IMPORTED_MODULE_12__["NgxEditorModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__["NgbModule"],
            _edit_issue_edit_issue_module__WEBPACK_IMPORTED_MODULE_2__["EditIssueModule"],
            src_app_notification_notification_module__WEBPACK_IMPORTED_MODULE_18__["NotificationModule"],
            _comment_comment_module__WEBPACK_IMPORTED_MODULE_1__["CommentModule"],
            src_app_dashboard_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_11__["DashboardRoutingModule"]
        ],
        providers: [_dashboard_route_guard__WEBPACK_IMPORTED_MODULE_3__["DashboardRouteGuard"]]
    })
], DashboardModule);



/***/ }),

/***/ "./src/app/dashboard/main-content/main-content.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/dashboard/main-content/main-content.component.css ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mat-table {\n  width: 100%;\n}\n\n.mat-form-field {\n     font-size: 14px;\n   width: 80%;\n    margin-left: 10%;\n    margin-right: 10%;\n}\n\n.table-container{\n   width: 80%;\n    margin-left: 10%;\n    margin-right: 10%;\n    margin-top: 20px;\n}\n\ntd.mat-cell:last-of-type, td.mat-footer-cell:last-of-type, th.mat-header-cell:last-of-type {\n    padding-right: 0px !important;\n}\n\n.loading-shade{\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 56px;\n  right: 0;\n  background: rgba(0,0,0,0.15);\n  z-index: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL21haW4tY29udGVudC9tYWluLWNvbnRlbnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtLQUNLLGVBQWU7R0FDakIsVUFBVTtJQUNULGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7O0FBQ0E7R0FDRyxVQUFVO0lBQ1QsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEI7O0FBQ0E7SUFDSSw2QkFBNkI7QUFDakM7O0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxZQUFZO0VBQ1osUUFBUTtFQUNSLDRCQUE0QjtFQUM1QixVQUFVO0VBQ1YsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFDekIiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvbWFpbi1jb250ZW50L21haW4tY29udGVudC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC10YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubWF0LWZvcm0tZmllbGQge1xuICAgICBmb250LXNpemU6IDE0cHg7XG4gICB3aWR0aDogODAlO1xuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMCU7XG59XG4udGFibGUtY29udGFpbmVye1xuICAgd2lkdGg6IDgwJTtcbiAgICBtYXJnaW4tbGVmdDogMTAlO1xuICAgIG1hcmdpbi1yaWdodDogMTAlO1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG59XG50ZC5tYXQtY2VsbDpsYXN0LW9mLXR5cGUsIHRkLm1hdC1mb290ZXItY2VsbDpsYXN0LW9mLXR5cGUsIHRoLm1hdC1oZWFkZXItY2VsbDpsYXN0LW9mLXR5cGUge1xuICAgIHBhZGRpbmctcmlnaHQ6IDBweCAhaW1wb3J0YW50O1xufVxuLmxvYWRpbmctc2hhZGV7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDU2cHg7XG4gIHJpZ2h0OiAwO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuMTUpO1xuICB6LWluZGV4OiAxO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/dashboard/main-content/main-content.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/dashboard/main-content/main-content.component.ts ***!
  \******************************************************************/
/*! exports provided: MainContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainContentComponent", function() { return MainContentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _issue_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../issue.service */ "./src/app/issue.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm2015/sort.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng6-toastr-notifications */ "./node_modules/ng6-toastr-notifications/fesm2015/ng6-toastr-notifications.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_user_user_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/user/user.service */ "./src/app/user/user.service.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var ng2_cookies__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng2-cookies */ "./node_modules/ng2-cookies/index.js");
/* harmony import */ var ng2_cookies__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_15__);
















let MainContentComponent = class MainContentComponent {
    constructor(dialog, _route, modalService, toastr, router, http, userService, issueService, fb) {
        this.dialog = dialog;
        this._route = _route;
        this.modalService = modalService;
        this.toastr = toastr;
        this.router = router;
        this.http = http;
        this.userService = userService;
        this.issueService = issueService;
        this.fb = fb;
        this.attachmentList = [];
        this.displayedColumns = ['title', 'status', 'description', 'reporter', 'assignee', 'createdOn'];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"]();
        this.issue = [];
        this.selectedStatus = {};
        this.allStatus = [
            {
                label: 'Backlog',
                id: 1
            },
            {
                label: 'In-Progress',
                id: 2
            },
            {
                label: 'In-Test',
                id: 3
            },
            {
                label: 'Done',
                id: 4
            }
        ];
        this.issueService.getAllUser().subscribe(data => {
            if (data.data != null) {
                this.allUsers = data.data;
                console.log(this.allUsers);
            }
            else {
            }
        }, err => {
            console.log('some error occured');
            console.error(err);
        });
        this.modalOptions = {
            backdrop: 'static',
            backdropClass: 'customBackdrop'
        };
    }
    applyFilter(filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }
    selectStatus(issueId) {
        if (!!!issueId)
            return;
        this.selectedStatus[issueId] = !this.selectedStatus[issueId];
        const arr = lodash__WEBPACK_IMPORTED_MODULE_12__["toArray"](this.selectedStatus);
        const trues = lodash__WEBPACK_IMPORTED_MODULE_12__["filter"](arr, r => r === true).length;
        const arrLength = this.allStatus.length;
        this.statusPercentage = trues / arrLength * 100;
    }
    ngOnInit() {
        this.singleUser();
        let userId = ng2_cookies__WEBPACK_IMPORTED_MODULE_14__["Cookie"].get('receiverId');
        this.issueService.getAllIssue(userId).subscribe(data => {
            //console.log(data);
            let arrData = [];
            let arrayValue = data.data;
            arrayValue.forEach(item => {
                let data = {};
                const arrLength = this.allStatus.length;
                data['assignee'] = item.assignee;
                data['reporter'] = item.reporter;
                data['createdOn'] = item.createdOn;
                data['description'] = item.description;
                data['issueId'] = item.issueId;
                data['status'] = item.status;
                data['title'] = item.title;
                data['percentage'] = item.status / arrLength * 100;
                data['reporter_name'] =
                    item.reporter_details[0]['firstName'] + ' ' + item.reporter_details[0]['lastName'];
                data['assignee_name'] =
                    item.assignee_details[0]['firstName'] + ' ' + item.assignee_details[0]['lastName'];
                arrData.push(data);
            });
            this.dataSource.data = arrData;
            console.log(this.dataSource.data);
        }, err => {
            console.log('some error occured');
            console.error(err);
            this.toastr.errorToastr('Some error occured', 'Oops!');
        });
    }
    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }
    singleUser() {
        let userId = ng2_cookies__WEBPACK_IMPORTED_MODULE_14__["Cookie"].get('receiverId');
        this.issueService.getSingleUserInformation(ng2_cookies__WEBPACK_IMPORTED_MODULE_14__["Cookie"].get('receiverId')).subscribe(data => {
            this.currentUser = data.data;
            console.log(this.currentUser);
        }, error => {
            console.log('some error occured');
            console.log(error.errorMessage);
        });
    }
    createIssue() {
        let issueData = {
            userId: this.currentUser.userId,
            title: this.issueTitle,
            status: this.issueStatus,
            description: this.issueDescription,
            reporter: this.issueReporter,
            assignee: this.issueAssignee,
            images: this.issueImages.replace(/^.*\\/, "")
        };
        console.log(issueData);
        const formData = new FormData();
        formData.append('file', this.images);
        this.http
            .post('http://localhost:3000/file', formData)
            .subscribe(res => console.log(res), err => console.log(err));
        console.log(issueData);
        this.issueService.createIssue(issueData).subscribe(apiResponse => {
            console.log(apiResponse);
            if (apiResponse.status === 200) {
                this.toastr.successToastr('Issue created successful');
                this.modalService.dismissAll('Cross click');
                this.ngOnInit();
            }
            else {
                this.toastr.errorToastr(apiResponse.message);
            }
        }, err => {
            this.toastr.errorToastr('some error occured');
        });
    }
    open(content) {
        this.modalService.open(content, { size: 'xl' }).result.then(result => {
            this.closeResult = `Closed with: ${result}`;
        }, reason => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }
    getDismissReason(reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return `with: ${reason}`;
        }
    }
    selectImage(event) {
        if (event.target.files.length > 0) {
            const file = event.target.files[0];
            console.log(file.name);
            this.images = file;
        }
    }
    download(index) {
        var filename = this.attachmentList[index].uploadname;
        this.issueService
            .downloadFile(filename)
            .subscribe(data => Object(file_saver__WEBPACK_IMPORTED_MODULE_15__["saveAs"])(data, filename), error => console.error(error));
    }
};
MainContentComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModal"] },
    { type: ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_7__["ToastrManager"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClient"] },
    { type: src_app_user_user_service__WEBPACK_IMPORTED_MODULE_11__["UserService"] },
    { type: _issue_service__WEBPACK_IMPORTED_MODULE_1__["IssueService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormBuilder"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"], { static: true })
], MainContentComponent.prototype, "paginator", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_5__["MatSort"], { static: true })
], MainContentComponent.prototype, "sort", void 0);
MainContentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-main-content',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./main-content.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/main-content/main-content.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./main-content.component.css */ "./src/app/dashboard/main-content/main-content.component.css")).default]
    })
], MainContentComponent);



/***/ }),

/***/ "./src/app/dashboard/sidebar/sidebar.component.css":
/*!*********************************************************!*\
  !*** ./src/app/dashboard/sidebar/sidebar.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n\n\n\n.page-sidebar {\n    height: auto;\n    width: 260px;\n    position: fixed;\n    padding: 0px;\n    background-color: #ffffff;\n    margin-top: 60px;\n    overflow: hidden;\n    box-shadow: 0 0 10px 0 rgba(33,33,33,.2);\n    -webkit-box-shadow: 0 0 10px 0 rgba(33,33,33,.2);\n    -moz-box-shadow: 0 0 10px 0 rgba(33,33,33,.2);\n    -o-box-shadow: 0 0 10px 0 rgba(33,33,33,.2);\n    -ms-box-shadow: 0 0 10px 0 rgba(33,33,33,.2);\n    min-height: 100%;\n    height: auto;\n}\n.page-sidebar.fixedscroll {\n    position: fixed;\n}\n.page-sidebar.collapseit {\n    width: 60px;\n    margin-left: 0px !important;\n    z-index: 99;\n}\n.page-sidebar .profile-info {\n    background: transparent;\n    padding-top: 15px;\n    padding-bottom: 10px;\n    padding-left: 20px;\n    padding-right: 15px;\n    display: flex;\n}\n.page-sidebar .profile-image {\n    padding-right: 5px;\n    display: inline-block;\n}\n.profile-info .profile-image img {\n    height: 65px;\n    width: 65px;\n    float: right;\n    top: 5px;\n    left: 5px;\n    position: relative;    \n}\n.short-profile img {\n    height: 45px !important;\n    width: 45px !important; \n    left: 2px !important;\n}\n.short-profile .profile-details{\n    display: none;\n}\n.profile-info .profile-details h3 {\n    margin: 19px 0px 6px 14px;\n}\n.profile-info .profile-details .profile-title {\n    color: rgba(174, 178, 183, 1.0);\n    font-size: 13px;\n    margin: 0px 0px 6px 14px;\n}\n#main-menu-wrapper ul {\n    padding: 0px;\n    margin: 0px;\n    padding-left: 0px;\n    list-style-type: none;\n    font-family: 'Comfortaa';\n    font-weight: 400;\n    font-size: 14px;\n}\n#main-menu-wrapper .menusection {    \n    font-weight: 400;\n    font-size: 13px;\n    line-height: 40px;\n    padding-left: 24px;\n    margin: 10px 0 0px 0;\n    color: #9e9e9e;\n    text-transform: uppercase;\n}\n.profile-info .profile-details h3 a {    \n    font-weight: 400;\n    color: #757575;\n    font-size: 19px;\n    line-height: 23px;\n    text-decoration: none;\n}\n#main-menu-wrapper li a {\n    display: block;\n    line-height: 42px;\n    min-height: 42px;\n    height: auto;\n    color: #424242;\n    text-decoration: none;\n/*    padding: 14px 0px;*/\n    padding-left: 5px;\n    clear: both;\n    border-left: 4px solid transparent;\n    white-space: nowrap;\n/*    font-size: 18px;*/\n}\n#main-menu-wrapper .fa {\n    font-size: 14px;\n}\n#main-menu-wrapper li a i {\n    display: inline-block;\n    width: 40px;\n    height: 34px;\n    line-height: 34px;\n    text-align: center;\n    top: 0px;\n    position: relative;\n}\n#main-menu-wrapper li a:hover {\n    background-color: rgba(33, 33, 33, 0.1);\n    border-left: 4px solid #35395c;    \n}\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBS0E7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLGVBQWU7SUFDZixZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsd0NBQXdDO0lBQ3hDLGdEQUFnRDtJQUNoRCw2Q0FBNkM7SUFDN0MsMkNBQTJDO0lBQzNDLDRDQUE0QztJQUM1QyxnQkFBZ0I7SUFDaEIsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0lBQ0ksV0FBVztJQUNYLDJCQUEyQjtJQUMzQixXQUFXO0FBQ2Y7QUFDQTtJQUNJLHVCQUF1QjtJQUN2QixpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxZQUFZO0lBQ1osUUFBUTtJQUNSLFNBQVM7SUFDVCxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLHVCQUF1QjtJQUN2QixzQkFBc0I7SUFDdEIsb0JBQW9CO0FBQ3hCO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLCtCQUErQjtJQUMvQixlQUFlO0lBQ2Ysd0JBQXdCO0FBQzVCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLGlCQUFpQjtJQUNqQixxQkFBcUI7SUFDckIsd0JBQXdCO0lBQ3hCLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLGNBQWM7SUFDZCx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixxQkFBcUI7QUFDekI7QUFDQTtJQUNJLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixjQUFjO0lBQ2QscUJBQXFCO0FBQ3pCLHlCQUF5QjtJQUNyQixpQkFBaUI7SUFDakIsV0FBVztJQUNYLGtDQUFrQztJQUNsQyxtQkFBbUI7QUFDdkIsdUJBQXVCO0FBQ3ZCO0FBQ0E7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsV0FBVztJQUNYLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLHVDQUF1QztJQUN2Qyw4QkFBOEI7QUFDbEMiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuXG5cblxuLnBhZ2Utc2lkZWJhciB7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIHdpZHRoOiAyNjBweDtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgcGFkZGluZzogMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgbWFyZ2luLXRvcDogNjBweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IDAgcmdiYSgzMywzMywzMywuMik7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMTBweCAwIHJnYmEoMzMsMzMsMzMsLjIpO1xuICAgIC1tb3otYm94LXNoYWRvdzogMCAwIDEwcHggMCByZ2JhKDMzLDMzLDMzLC4yKTtcbiAgICAtby1ib3gtc2hhZG93OiAwIDAgMTBweCAwIHJnYmEoMzMsMzMsMzMsLjIpO1xuICAgIC1tcy1ib3gtc2hhZG93OiAwIDAgMTBweCAwIHJnYmEoMzMsMzMsMzMsLjIpO1xuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XG4gICAgaGVpZ2h0OiBhdXRvO1xufVxuLnBhZ2Utc2lkZWJhci5maXhlZHNjcm9sbCB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xufVxuLnBhZ2Utc2lkZWJhci5jb2xsYXBzZWl0IHtcbiAgICB3aWR0aDogNjBweDtcbiAgICBtYXJnaW4tbGVmdDogMHB4ICFpbXBvcnRhbnQ7XG4gICAgei1pbmRleDogOTk7XG59XG4ucGFnZS1zaWRlYmFyIC5wcm9maWxlLWluZm8ge1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG4ucGFnZS1zaWRlYmFyIC5wcm9maWxlLWltYWdlIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuLnByb2ZpbGUtaW5mbyAucHJvZmlsZS1pbWFnZSBpbWcge1xuICAgIGhlaWdodDogNjVweDtcbiAgICB3aWR0aDogNjVweDtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgdG9wOiA1cHg7XG4gICAgbGVmdDogNXB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgICAgXG59XG4uc2hvcnQtcHJvZmlsZSBpbWcge1xuICAgIGhlaWdodDogNDVweCAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiA0NXB4ICFpbXBvcnRhbnQ7IFxuICAgIGxlZnQ6IDJweCAhaW1wb3J0YW50O1xufVxuLnNob3J0LXByb2ZpbGUgLnByb2ZpbGUtZGV0YWlsc3tcbiAgICBkaXNwbGF5OiBub25lO1xufVxuLnByb2ZpbGUtaW5mbyAucHJvZmlsZS1kZXRhaWxzIGgzIHtcbiAgICBtYXJnaW46IDE5cHggMHB4IDZweCAxNHB4O1xufVxuLnByb2ZpbGUtaW5mbyAucHJvZmlsZS1kZXRhaWxzIC5wcm9maWxlLXRpdGxlIHtcbiAgICBjb2xvcjogcmdiYSgxNzQsIDE3OCwgMTgzLCAxLjApO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBtYXJnaW46IDBweCAwcHggNnB4IDE0cHg7XG59XG4jbWFpbi1tZW51LXdyYXBwZXIgdWwge1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICBtYXJnaW46IDBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDtcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgZm9udC1mYW1pbHk6ICdDb21mb3J0YWEnO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zaXplOiAxNHB4O1xufVxuI21haW4tbWVudS13cmFwcGVyIC5tZW51c2VjdGlvbiB7ICAgIFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICAgIHBhZGRpbmctbGVmdDogMjRweDtcbiAgICBtYXJnaW46IDEwcHggMCAwcHggMDtcbiAgICBjb2xvcjogIzllOWU5ZTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuLnByb2ZpbGUtaW5mbyAucHJvZmlsZS1kZXRhaWxzIGgzIGEgeyAgICBcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGNvbG9yOiAjNzU3NTc1O1xuICAgIGZvbnQtc2l6ZTogMTlweDtcbiAgICBsaW5lLWhlaWdodDogMjNweDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4jbWFpbi1tZW51LXdyYXBwZXIgbGkgYSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbGluZS1oZWlnaHQ6IDQycHg7XG4gICAgbWluLWhlaWdodDogNDJweDtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgY29sb3I6ICM0MjQyNDI7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuLyogICAgcGFkZGluZzogMTRweCAwcHg7Ki9cbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgICBjbGVhcjogYm90aDtcbiAgICBib3JkZXItbGVmdDogNHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4vKiAgICBmb250LXNpemU6IDE4cHg7Ki9cbn1cbiNtYWluLW1lbnUtd3JhcHBlciAuZmEge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbn1cbiNtYWluLW1lbnUtd3JhcHBlciBsaSBhIGkge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogNDBweDtcbiAgICBoZWlnaHQ6IDM0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDM0cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHRvcDogMHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbiNtYWluLW1lbnUtd3JhcHBlciBsaSBhOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDMzLCAzMywgMzMsIDAuMSk7XG4gICAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCAjMzUzOTVjOyAgICBcbn1cblxuXG5cbiJdfQ== */");

/***/ }),

/***/ "./src/app/dashboard/sidebar/sidebar.component.ts":
/*!********************************************************!*\
  !*** ./src/app/dashboard/sidebar/sidebar.component.ts ***!
  \********************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SidebarComponent = class SidebarComponent {
    constructor() { }
    ngOnInit() { }
};
SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sidebar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sidebar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/sidebar/sidebar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sidebar.component.css */ "./src/app/dashboard/sidebar/sidebar.component.css")).default]
    })
], SidebarComponent);



/***/ }),

/***/ "./src/app/dashboard/topbar/topbar.component.css":
/*!*******************************************************!*\
  !*** ./src/app/dashboard/topbar/topbar.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".page-topbar {\n    min-height: 60px;\n    /*position: fixed;*/\n    width: 100%;\n    background-color: #0747A6;\n    top: 0px;\n    /*z-index:10000;*/\n    left: 0px;\n    box-shadow: 0 2px 4px rgba(33,33,33,.2);\n    -webkit-box-shadow: 0 2px 4px rgba(33,33,33,.2);\n    -moz-box-shadow: 0 2px 4px rgba(33,33,33,.2);\n    -o-box-shadow: 0 2px 4px rgba(33,33,33,.2);\n    -ms-box-shadow: 0 2px 4px rgba(33,33,33,.2);\n    max-height: 60px;\n}\n\n/*Transition==========================*/\n\n.page-topbar, .logo-area, .logo-area, #main-content, .logo-icon, .wraplist, .page-sidebar, .profile-info, .profile-image, .profile-details, .menu-title, .profile-image a img {\n    transition: 600ms;\n}\n\n.page-topbar .logo-area {\n   \n    background-repeat: no-repeat;\n}\n\n.page-topbar .logo-area {\n    width: 240px;\n    background-color: #0747A6;\n    display: block;\n    min-height: 60px;\n    float: left;\n    margin-left: 27px;\n}\n\n.page-topbar .logo-icon{\n    \n    background-repeat: no-repeat !important;\n}\n\n.page-topbar .logo-icon {\n    width: 100px !important;\n    background-color: #35395c;\n    display: block;\n    min-height: 60px;\n    float: left;\n}\n\n.page-topbar ul {\n    margin: 0px;\n    padding: 0px;\n}\n\n.page-topbar ul li {\n    list-style-type: none;    \n}\n\n.page-topbar .user-info li a {\n    display: inline-block;\n    font-size: 20px;\n    padding: 12px 20px;\n    color: #fff;\n    font-family: 'Comfortaa';\n    font-weight: 400;\n     position:relative;\n}\n\n.page-topbar .user-notify li a {\n    display: inline-block;\n    font-size: 16px;\n    padding: 22px 14px;\n    color: #fff;\n    font-family: 'Comfortaa';\n    font-weight: 400;\n     position:relative;\n}\n\n.page-topbar .quick-area .info-menu {\n    height: 60px;\n    margin: 0;\n    line-height: 50px;\n    padding: 0 15px;\n    display: flex;\n}\n\n.info-menu li{\n   \n}\n\n.page-topbar .badge {\n    display: inline-block;\n    min-width: 10px;\n    position: absolute;\n    padding: 3px 6px;\n    font-size: 10px;\n    font-weight: bold;\n    line-height: 1;\n    color: #fff;\n    text-align: center;\n    white-space: nowrap;\n    vertical-align: middle;\n    background-color: #F44336;\n    border-radius: 10px;\n    top: 8px;\n    right: 0;\n}\n\nli.profile img {\n    height: 30px;\n    width: 30px;\n    top: 0px;\n    right: 10px;\n    position: relative;\n    background-color: #999999;\n}\n\n/* Ripple magic */\n\n.page-topbar button:focus {\n     outline: none;\n}\n\n.page-topbar button {\n    border: none;\n    width: 50px;\n    cursor: pointer;\n    height: 50px;\n    color: white;\n    padding: 11px 15px;\n    font-size: 21px;\n    border-radius: 100%;\n    background: transparent;\n    margin-top: 5px;\n    position: relative;\n    float: left;\n}\n\n.page-topbar button{\n     position: relative;\n     overflow: hidden;\n}\n\n.page-topbar button:after {\n     content: '';\n     position: absolute;\n     top: 50%;\n     left: 50%;\n     width: 5px;\n     height: 5px;\n     background: rgba(255, 255, 255, .5);\n     opacity: 0;\n     border-radius: 100%;\n     transform: scale(1, 1) translate(-50%);\n     transform-origin: 50% 50%;\n}\n\n@-webkit-keyframes ripple {\n     0% {\n         transform: scale(0, 0);\n         opacity: 1;\n    }\n     20% {\n         transform: scale(25, 25);\n         opacity: 1;\n    }\n     100% {\n         opacity: 0;\n         transform: scale(40, 40);\n    }\n}\n\n@keyframes ripple {\n     0% {\n         transform: scale(0, 0);\n         opacity: 1;\n    }\n     20% {\n         transform: scale(25, 25);\n         opacity: 1;\n    }\n     100% {\n         opacity: 0;\n         transform: scale(40, 40);\n    }\n}\n\n.page-topbar button:focus:not(:active)::after {\n     -webkit-animation: ripple 1s ease-out;\n             animation: ripple 1s ease-out;\n}\n\n.page-topbar li .dropdown-menu.profile {\n    max-width: 180px;\n    height: auto;\n    padding: 0px;\n}\n\n.dropdown-menu {\n    width: 360px;\n    border-radius: 0px;\n    -o-border-radius: 0px;\n    -ms-border-radius: 0px;\n    -moz-border-radius: 0px;\n    -webkit-border-radius: 0px;\n    line-height: 23px;\n    font-size: 14px;\n    padding-bottom: 0px;\n    border: 0px solid transparent;\n    box-shadow: 0 0 20px 0 rgba(33,33,33,.2);\n    -webkit-box-shadow: 0 0 20px 0 rgba(33,33,33,.2);\n    -moz-box-shadow: 0 0 20px 0 rgba(33,33,33,.2);\n    -o-box-shadow: 0 0 20px 0 rgba(33,33,33,.2);\n    -ms-box-shadow: 0 0 20px 0 rgba(33,33,33,.2);\n    margin-top: -1px;\n    padding-top: 0px;\n}\n\n.page-topbar .dropdown-menu {\n    background: #ffffff;\n    border: 1px solid #f5f5f5;\n}\n\n.page-topbar li .dropdown-menu.profile li {\n    line-height: 40px;\n    display: block;\n    height: 40px;\n    margin: 0px;\n}\n\n.page-topbar li .dropdown-menu.profile li a {\n    display: block;\n    border-bottom: 1px solid #eeeeee;\n    padding: 12px 8px;\n}\n\n.page-topbar .dropdown-menu:after, .page-topbar .dropdown-menu:before {\n    bottom: 100%;\n    left: 22px;\n    border: solid transparent;\n    content: \" \";\n    height: 0;\n    width: 0;\n    position: absolute;\n    pointer-events: none;\n}\n\n.page-topbar .dropdown-menu:before {\n    border-color: rgba(194, 225, 245, 0);\n    border-bottom-color: rgba(80, 80, 80, .1);\n    border-width: 10px;\n    margin-left: -10px;\n}\n\n.page-topbar li .dropdown-menu li a {\n    text-decoration: none;\n    color: #717171;\n}\n\n/*//////////////////////////SIDE BAR NAVE//////////////////////////*/\n\n.page-sidebar {\n    height: auto;\n    width: 260px;\n    position: fixed;\n    padding: 0px;\n    background-color: #ffffff;\n    margin-top: 60px;\n    overflow: hidden;\n    box-shadow: 0 0 10px 0 rgba(33,33,33,.2);\n    -webkit-box-shadow: 0 0 10px 0 rgba(33,33,33,.2);\n    -moz-box-shadow: 0 0 10px 0 rgba(33,33,33,.2);\n    -o-box-shadow: 0 0 10px 0 rgba(33,33,33,.2);\n    -ms-box-shadow: 0 0 10px 0 rgba(33,33,33,.2);\n    min-height: 100%;\n    height: auto;\n}\n\n.page-sidebar.fixedscroll {\n    position: fixed;\n}\n\n.page-sidebar.collapseit {\n    width: 60px;\n    margin-left: 0px !important;\n    z-index: 99;\n}\n\n.page-sidebar .profile-info {\n    background: transparent;\n    padding-top: 15px;\n    padding-bottom: 10px;\n    padding-left: 20px;\n    padding-right: 15px;\n    display: flex;\n}\n\n.page-sidebar .profile-image {\n    padding-right: 5px;\n    display: inline-block;\n}\n\n.profile-info .profile-image img {\n    height: 65px;\n    width: 65px;\n    float: right;\n    top: 5px;\n    left: 5px;\n    position: relative;    \n}\n\n.short-profile img {\n    height: 45px !important;\n    width: 45px !important; \n    left: 2px !important;\n}\n\n.short-profile .profile-details{\n    display: none;\n}\n\n.profile-info .profile-details h3 {\n    margin: 19px 0px 6px 14px;\n}\n\n.profile-info .profile-details .profile-title {\n    color: rgba(174, 178, 183, 1.0);\n    font-size: 13px;\n    margin: 0px 0px 6px 14px;\n}\n\n#main-menu-wrapper ul {\n    padding: 0px;\n    margin: 0px;\n    padding-left: 0px;\n    list-style-type: none;\n    font-family: 'Comfortaa';\n    font-weight: 400;\n    font-size: 14px;\n}\n\n#main-menu-wrapper .menusection {    \n    font-weight: 400;\n    font-size: 13px;\n    line-height: 40px;\n    padding-left: 24px;\n    margin: 10px 0 0px 0;\n    color: #9e9e9e;\n    text-transform: uppercase;\n}\n\n.profile-info .profile-details h3 a {    \n    font-weight: 400;\n    color: #757575;\n    font-size: 19px;\n    line-height: 23px;\n    text-decoration: none;\n}\n\n#main-menu-wrapper li a {\n    display: block;\n    line-height: 42px;\n    min-height: 42px;\n    height: auto;\n    color: #424242;\n    text-decoration: none;\n/*    padding: 14px 0px;*/\n    padding-left: 5px;\n    clear: both;\n    border-left: 4px solid transparent;\n    white-space: nowrap;\n/*    font-size: 18px;*/\n}\n\n#main-menu-wrapper .fa {\n    font-size: 14px;\n}\n\n#main-menu-wrapper li a i {\n    display: inline-block;\n    width: 40px;\n    height: 34px;\n    line-height: 34px;\n    text-align: center;\n    top: 0px;\n    position: relative;\n}\n\n#main-menu-wrapper li a:hover {\n    background-color: rgba(33, 33, 33, 0.1);\n    border-left: 4px solid #35395c;    \n}\n\n/*MAIN CONTENT/////////////////////////////////////////////////////////////*/\n\n#main-content {\n    margin-left: 260px;\n    display: block;\n}\n\n#main-content.sidebar_shift {\n    margin-left: 60px;\n    margin-right: 0px;\n}\n\n.main-wrapper {\n    margin-top: 60px;\n    display: inline-block;\n    width: 100%;\n    padding: 15px 15px 0 15px;\n    margin-left: 0px;\n    margin-right: 0px;\n}\n\nsection.box {\n    background-color: #ffffff;\n    margin: 15px 0;\n    min-height: 350px;\n    box-shadow: 0 1px 3px rgba(33,33,33,.2);\n    -webkit-box-shadow: 0 1px 3px rgba(33,33,33,.2);\n    -moz-box-shadow: 0 1px 3px rgba(33,33,33,.2);\n    -o-box-shadow: 0 1px 3px rgba(33,33,33,.2);\n    -ms-box-shadow: 0 1px 3px rgba(33,33,33,.2);\n}\n\n.page-topbar .badge {\n    display: inline-block;\n    min-width: 10px;\n    position: absolute;\n    padding: 3px 6px;\n    font-size: 10px;\n    font-weight: bold;\n    line-height: 1;\n    color: #fff;\n    text-align: center;\n    white-space: nowrap;\n    vertical-align: middle;\n    background-color: #F44336;\n    border-radius: 10px;\n    top: 8px;\n    right: 12px;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL3RvcGJhci90b3BiYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLHlCQUF5QjtJQUN6QixRQUFRO0lBQ1IsaUJBQWlCO0lBQ2pCLFNBQVM7SUFDVCx1Q0FBdUM7SUFDdkMsK0NBQStDO0lBQy9DLDRDQUE0QztJQUM1QywwQ0FBMEM7SUFDMUMsMkNBQTJDO0lBQzNDLGdCQUFnQjtBQUNwQjs7QUFFQSx1Q0FBdUM7O0FBQ3ZDO0lBSUksaUJBQWlCO0FBQ3JCOztBQUVBOztJQUVJLDRCQUE0QjtBQUNoQzs7QUFDQTtJQUNJLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsaUJBQWlCO0FBQ3JCOztBQUVBOztJQUVJLHVDQUF1QztBQUMzQzs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2Qix5QkFBeUI7SUFDekIsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixXQUFXO0FBQ2Y7O0FBQ0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFDQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCx3QkFBd0I7SUFDeEIsZ0JBQWdCO0tBQ2YsaUJBQWlCO0FBQ3RCOztBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLHdCQUF3QjtJQUN4QixnQkFBZ0I7S0FDZixpQkFBaUI7QUFDdEI7O0FBQ0E7SUFDSSxZQUFZO0lBQ1osU0FBUztJQUNULGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsYUFBYTtBQUNqQjs7QUFFQTs7QUFFQTs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsaUJB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QVc7SUFDWCx5QkFBeUI7SUFDekIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjs7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLHVDQUF1QztJQUN2QywrQ0FBK0M7SUFDL0MsNENBQTRDO0lBQzVDLDBDQUEwQztJQUMxQywyQ0FBMkM7QUFDL0M7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsUUFBUTtJQUNSLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC90b3BiYXIvdG9wYmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFnZS10b3BiYXIge1xuICAgIG1pbi1oZWlnaHQ6IDYwcHg7XG4gICAgLypwb3NpdGlvbjogZml4ZWQ7Ki9cbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDc0N0E2O1xuICAgIHRvcDogMHB4O1xuICAgIC8qei1pbmRleDoxMDAwMDsqL1xuICAgIGxlZnQ6IDBweDtcbiAgICBib3gtc2hhZG93OiAwIDJweCA0cHggcmdiYSgzMywzMywzMywuMik7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDJweCA0cHggcmdiYSgzMywzMywzMywuMik7XG4gICAgLW1vei1ib3gtc2hhZG93OiAwIDJweCA0cHggcmdiYSgzMywzMywzMywuMik7XG4gICAgLW8tYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMzMsMzMsMzMsLjIpO1xuICAgIC1tcy1ib3gtc2hhZG93OiAwIDJweCA0cHggcmdiYSgzMywzMywzMywuMik7XG4gICAgbWF4LWhlaWdodDogNjBweDtcbn1cblxuLypUcmFuc2l0aW9uPT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuLnBhZ2UtdG9wYmFyLCAubG9nby1hcmVhLCAubG9nby1hcmVhLCAjbWFpbi1jb250ZW50LCAubG9nby1pY29uLCAud3JhcGxpc3QsIC5wYWdlLXNpZGViYXIsIC5wcm9maWxlLWluZm8sIC5wcm9maWxlLWltYWdlLCAucHJvZmlsZS1kZXRhaWxzLCAubWVudS10aXRsZSwgLnByb2ZpbGUtaW1hZ2UgYSBpbWcge1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogNjAwbXM7XG4gICAgLW1vei10cmFuc2l0aW9uOiA2MDBtcztcbiAgICAtby10cmFuc2l0aW9uOiA2MDBtcztcbiAgICB0cmFuc2l0aW9uOiA2MDBtcztcbn1cblxuLnBhZ2UtdG9wYmFyIC5sb2dvLWFyZWEge1xuICAgXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbn1cbi5wYWdlLXRvcGJhciAubG9nby1hcmVhIHtcbiAgICB3aWR0aDogMjQwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA3NDdBNjtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtaW4taGVpZ2h0OiA2MHB4O1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIG1hcmdpbi1sZWZ0OiAyN3B4O1xufVxuXG4ucGFnZS10b3BiYXIgLmxvZ28taWNvbntcbiAgICBcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0ICFpbXBvcnRhbnQ7XG59XG5cbi5wYWdlLXRvcGJhciAubG9nby1pY29uIHtcbiAgICB3aWR0aDogMTAwcHggIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzUzOTVjO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1pbi1oZWlnaHQ6IDYwcHg7XG4gICAgZmxvYXQ6IGxlZnQ7XG59XG4ucGFnZS10b3BiYXIgdWwge1xuICAgIG1hcmdpbjogMHB4O1xuICAgIHBhZGRpbmc6IDBweDtcbn1cbi5wYWdlLXRvcGJhciB1bCBsaSB7XG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lOyAgICBcbn1cbi5wYWdlLXRvcGJhciAudXNlci1pbmZvIGxpIGEge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgcGFkZGluZzogMTJweCAyMHB4O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtZmFtaWx5OiAnQ29tZm9ydGFhJztcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcbn1cbi5wYWdlLXRvcGJhciAudXNlci1ub3RpZnkgbGkgYSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBwYWRkaW5nOiAyMnB4IDE0cHg7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC1mYW1pbHk6ICdDb21mb3J0YWEnO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xufVxuLnBhZ2UtdG9wYmFyIC5xdWljay1hcmVhIC5pbmZvLW1lbnUge1xuICAgIGhlaWdodDogNjBweDtcbiAgICBtYXJnaW46IDA7XG4gICAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gICAgcGFkZGluZzogMCAxNXB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5pbmZvLW1lbnUgbGl7XG4gICBcbn1cblxuLnBhZ2UtdG9wYmFyIC5iYWRnZSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG1pbi13aWR0aDogMTBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcGFkZGluZzogM3B4IDZweDtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjQ0MzM2O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgdG9wOiA4cHg7XG4gICAgcmlnaHQ6IDA7XG59XG5saS5wcm9maWxlIGltZyB7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIHRvcDogMHB4O1xuICAgIHJpZ2h0OiAxMHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTk5OTk5O1xufVxuXG4vKiBSaXBwbGUgbWFnaWMgKi9cbi5wYWdlLXRvcGJhciBidXR0b246Zm9jdXMge1xuICAgICBvdXRsaW5lOiBub25lO1xufVxuIC5wYWdlLXRvcGJhciBidXR0b24ge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICB3aWR0aDogNTBweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiAxMXB4IDE1cHg7XG4gICAgZm9udC1zaXplOiAyMXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBmbG9hdDogbGVmdDtcbn1cbiAucGFnZS10b3BiYXIgYnV0dG9ue1xuICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG4gLnBhZ2UtdG9wYmFyIGJ1dHRvbjphZnRlciB7XG4gICAgIGNvbnRlbnQ6ICcnO1xuICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgIHRvcDogNTAlO1xuICAgICBsZWZ0OiA1MCU7XG4gICAgIHdpZHRoOiA1cHg7XG4gICAgIGhlaWdodDogNXB4O1xuICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC41KTtcbiAgICAgb3BhY2l0eTogMDtcbiAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAxKSB0cmFuc2xhdGUoLTUwJSk7XG4gICAgIHRyYW5zZm9ybS1vcmlnaW46IDUwJSA1MCU7XG59XG4gQGtleWZyYW1lcyByaXBwbGUge1xuICAgICAwJSB7XG4gICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAsIDApO1xuICAgICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG4gICAgIDIwJSB7XG4gICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDI1LCAyNSk7XG4gICAgICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiAgICAgMTAwJSB7XG4gICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSg0MCwgNDApO1xuICAgIH1cbn1cbiAucGFnZS10b3BiYXIgYnV0dG9uOmZvY3VzOm5vdCg6YWN0aXZlKTo6YWZ0ZXIge1xuICAgICBhbmltYXRpb246IHJpcHBsZSAxcyBlYXNlLW91dDtcbn1cbi5wYWdlLXRvcGJhciBsaSAuZHJvcGRvd24tbWVudS5wcm9maWxlIHtcbiAgICBtYXgtd2lkdGg6IDE4MHB4O1xuICAgIGhlaWdodDogYXV0bztcbiAgICBwYWRkaW5nOiAwcHg7XG59XG4uZHJvcGRvd24tbWVudSB7XG4gICAgd2lkdGg6IDM2MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgICAtby1ib3JkZXItcmFkaXVzOiAwcHg7XG4gICAgLW1zLWJvcmRlci1yYWRpdXM6IDBweDtcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6IDBweDtcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDBweDtcbiAgICBsaW5lLWhlaWdodDogMjNweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgcGFkZGluZy1ib3R0b206IDBweDtcbiAgICBib3JkZXI6IDBweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBib3gtc2hhZG93OiAwIDAgMjBweCAwIHJnYmEoMzMsMzMsMzMsLjIpO1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDIwcHggMCByZ2JhKDMzLDMzLDMzLC4yKTtcbiAgICAtbW96LWJveC1zaGFkb3c6IDAgMCAyMHB4IDAgcmdiYSgzMywzMywzMywuMik7XG4gICAgLW8tYm94LXNoYWRvdzogMCAwIDIwcHggMCByZ2JhKDMzLDMzLDMzLC4yKTtcbiAgICAtbXMtYm94LXNoYWRvdzogMCAwIDIwcHggMCByZ2JhKDMzLDMzLDMzLC4yKTtcbiAgICBtYXJnaW4tdG9wOiAtMXB4O1xuICAgIHBhZGRpbmctdG9wOiAwcHg7XG59XG4ucGFnZS10b3BiYXIgLmRyb3Bkb3duLW1lbnUge1xuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2Y1ZjVmNTtcbn1cbi5wYWdlLXRvcGJhciBsaSAuZHJvcGRvd24tbWVudS5wcm9maWxlIGxpIHtcbiAgICBsaW5lLWhlaWdodDogNDBweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgbWFyZ2luOiAwcHg7XG59XG4ucGFnZS10b3BiYXIgbGkgLmRyb3Bkb3duLW1lbnUucHJvZmlsZSBsaSBhIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VlZWVlZTtcbiAgICBwYWRkaW5nOiAxMnB4IDhweDtcbn1cblxuLnBhZ2UtdG9wYmFyIC5kcm9wZG93bi1tZW51OmFmdGVyLCAucGFnZS10b3BiYXIgLmRyb3Bkb3duLW1lbnU6YmVmb3JlIHtcbiAgICBib3R0b206IDEwMCU7XG4gICAgbGVmdDogMjJweDtcbiAgICBib3JkZXI6IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGNvbnRlbnQ6IFwiIFwiO1xuICAgIGhlaWdodDogMDtcbiAgICB3aWR0aDogMDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG4ucGFnZS10b3BiYXIgLmRyb3Bkb3duLW1lbnU6YmVmb3JlIHtcbiAgICBib3JkZXItY29sb3I6IHJnYmEoMTk0LCAyMjUsIDI0NSwgMCk7XG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogcmdiYSg4MCwgODAsIDgwLCAuMSk7XG4gICAgYm9yZGVyLXdpZHRoOiAxMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAtMTBweDtcbn1cbi5wYWdlLXRvcGJhciBsaSAuZHJvcGRvd24tbWVudSBsaSBhIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6ICM3MTcxNzE7XG59XG5cblxuLyovLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1NJREUgQkFSIE5BVkUvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyovXG5cbi5wYWdlLXNpZGViYXIge1xuICAgIGhlaWdodDogYXV0bztcbiAgICB3aWR0aDogMjYwcHg7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICAgIG1hcmdpbi10b3A6IDYwcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCAwIHJnYmEoMzMsMzMsMzMsLjIpO1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDEwcHggMCByZ2JhKDMzLDMzLDMzLC4yKTtcbiAgICAtbW96LWJveC1zaGFkb3c6IDAgMCAxMHB4IDAgcmdiYSgzMywzMywzMywuMik7XG4gICAgLW8tYm94LXNoYWRvdzogMCAwIDEwcHggMCByZ2JhKDMzLDMzLDMzLC4yKTtcbiAgICAtbXMtYm94LXNoYWRvdzogMCAwIDEwcHggMCByZ2JhKDMzLDMzLDMzLC4yKTtcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xuICAgIGhlaWdodDogYXV0bztcbn1cbi5wYWdlLXNpZGViYXIuZml4ZWRzY3JvbGwge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbn1cbi5wYWdlLXNpZGViYXIuY29sbGFwc2VpdCB7XG4gICAgd2lkdGg6IDYwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xuICAgIHotaW5kZXg6IDk5O1xufVxuLnBhZ2Utc2lkZWJhciAucHJvZmlsZS1pbmZvIHtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBwYWRkaW5nLXRvcDogMTVweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgcGFkZGluZy1yaWdodDogMTVweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuLnBhZ2Utc2lkZWJhciAucHJvZmlsZS1pbWFnZSB7XG4gICAgcGFkZGluZy1yaWdodDogNXB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbi5wcm9maWxlLWluZm8gLnByb2ZpbGUtaW1hZ2UgaW1nIHtcbiAgICBoZWlnaHQ6IDY1cHg7XG4gICAgd2lkdGg6IDY1cHg7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIHRvcDogNXB4O1xuICAgIGxlZnQ6IDVweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7ICAgIFxufVxuLnNob3J0LXByb2ZpbGUgaW1nIHtcbiAgICBoZWlnaHQ6IDQ1cHggIWltcG9ydGFudDtcbiAgICB3aWR0aDogNDVweCAhaW1wb3J0YW50OyBcbiAgICBsZWZ0OiAycHggIWltcG9ydGFudDtcbn1cbi5zaG9ydC1wcm9maWxlIC5wcm9maWxlLWRldGFpbHN7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cbi5wcm9maWxlLWluZm8gLnByb2ZpbGUtZGV0YWlscyBoMyB7XG4gICAgbWFyZ2luOiAxOXB4IDBweCA2cHggMTRweDtcbn1cbi5wcm9maWxlLWluZm8gLnByb2ZpbGUtZGV0YWlscyAucHJvZmlsZS10aXRsZSB7XG4gICAgY29sb3I6IHJnYmEoMTc0LCAxNzgsIDE4MywgMS4wKTtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgbWFyZ2luOiAwcHggMHB4IDZweCAxNHB4O1xufVxuI21haW4tbWVudS13cmFwcGVyIHVsIHtcbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgcGFkZGluZy1sZWZ0OiAwcHg7XG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgIGZvbnQtZmFtaWx5OiAnQ29tZm9ydGFhJztcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbn1cbiNtYWluLW1lbnUtd3JhcHBlciAubWVudXNlY3Rpb24geyAgICBcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBsaW5lLWhlaWdodDogNDBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDI0cHg7XG4gICAgbWFyZ2luOiAxMHB4IDAgMHB4IDA7XG4gICAgY29sb3I6ICM5ZTllOWU7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cbi5wcm9maWxlLWluZm8gLnByb2ZpbGUtZGV0YWlscyBoMyBhIHsgICAgXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBjb2xvcjogIzc1NzU3NTtcbiAgICBmb250LXNpemU6IDE5cHg7XG4gICAgbGluZS1oZWlnaHQ6IDIzcHg7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuI21haW4tbWVudS13cmFwcGVyIGxpIGEge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGxpbmUtaGVpZ2h0OiA0MnB4O1xuICAgIG1pbi1oZWlnaHQ6IDQycHg7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIGNvbG9yOiAjNDI0MjQyO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbi8qICAgIHBhZGRpbmc6IDE0cHggMHB4OyovXG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gICAgY2xlYXI6IGJvdGg7XG4gICAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuLyogICAgZm9udC1zaXplOiAxOHB4OyovXG59XG4jbWFpbi1tZW51LXdyYXBwZXIgLmZhIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG59XG4jbWFpbi1tZW51LXdyYXBwZXIgbGkgYSBpIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgaGVpZ2h0OiAzNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAzNHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB0b3A6IDBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4jbWFpbi1tZW51LXdyYXBwZXIgbGkgYTpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzMywgMzMsIDMzLCAwLjEpO1xuICAgIGJvcmRlci1sZWZ0OiA0cHggc29saWQgIzM1Mzk1YzsgICAgXG59XG5cblxuXG4vKk1BSU4gQ09OVEVOVC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8qL1xuXG4jbWFpbi1jb250ZW50IHtcbiAgICBtYXJnaW4tbGVmdDogMjYwcHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG4jbWFpbi1jb250ZW50LnNpZGViYXJfc2hpZnQge1xuICAgIG1hcmdpbi1sZWZ0OiA2MHB4O1xuICAgIG1hcmdpbi1yaWdodDogMHB4O1xufVxuLm1haW4td3JhcHBlciB7XG4gICAgbWFyZ2luLXRvcDogNjBweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMTVweCAxNXB4IDAgMTVweDtcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xuICAgIG1hcmdpbi1yaWdodDogMHB4O1xufVxuc2VjdGlvbi5ib3gge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgbWFyZ2luOiAxNXB4IDA7XG4gICAgbWluLWhlaWdodDogMzUwcHg7XG4gICAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMzMsMzMsMzMsLjIpO1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMzMsMzMsMzMsLjIpO1xuICAgIC1tb3otYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMzMsMzMsMzMsLjIpO1xuICAgIC1vLWJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDMzLDMzLDMzLC4yKTtcbiAgICAtbXMtYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMzMsMzMsMzMsLjIpO1xufVxuXG4ucGFnZS10b3BiYXIgLmJhZGdlIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWluLXdpZHRoOiAxMHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBwYWRkaW5nOiAzcHggNnB4O1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBsaW5lLWhlaWdodDogMTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGNDQzMzY7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICB0b3A6IDhweDtcbiAgICByaWdodDogMTJweDtcbn1cblxuIl19 */");

/***/ }),

/***/ "./src/app/dashboard/topbar/topbar.component.ts":
/*!******************************************************!*\
  !*** ./src/app/dashboard/topbar/topbar.component.ts ***!
  \******************************************************/
/*! exports provided: TopbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopbarComponent", function() { return TopbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng6-toastr-notifications */ "./node_modules/ng6-toastr-notifications/fesm2015/ng6-toastr-notifications.js");
/* harmony import */ var src_app_user_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/user/user.service */ "./src/app/user/user.service.ts");
/* harmony import */ var ng2_cookies__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-cookies */ "./node_modules/ng2-cookies/index.js");
/* harmony import */ var ng2_cookies__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var src_app_issue_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/issue.service */ "./src/app/issue.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_8__);









let TopbarComponent = class TopbarComponent {
    constructor(toastr, http, issueService, userService, router) {
        this.toastr = toastr;
        this.http = http;
        this.issueService = issueService;
        this.userService = userService;
        this.router = router;
        this.logout = () => {
            this.userService.logout().subscribe(apiResponse => {
                if (apiResponse.status === 200) {
                    ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].delete('authtoken');
                    ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].delete('receiverId');
                    ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].delete('receiverName');
                    this.router.navigate(['/login']);
                }
                else {
                    this.toastr.errorToastr(apiResponse.message);
                }
            }, err => {
                this.toastr.errorToastr('some error occured');
            });
        };
    }
    ngOnInit() {
        this.totalNotification();
    }
    totalNotification() {
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_8__('http://localhost:3000');
        this.socket.emit('comment');
        this.socket.on('notification', data => {
            this.totalNotify = data.total_notify;
        });
    }
};
TopbarComponent.ctorParameters = () => [
    { type: ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_3__["ToastrManager"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"] },
    { type: src_app_issue_service__WEBPACK_IMPORTED_MODULE_6__["IssueService"] },
    { type: src_app_user_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
TopbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-topbar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./topbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/topbar/topbar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./topbar.component.css */ "./src/app/dashboard/topbar/topbar.component.css")).default]
    })
], TopbarComponent);



/***/ }),

/***/ "./src/app/dialog-box/dialog-box.component.css":
/*!*****************************************************!*\
  !*** ./src/app/dialog-box/dialog-box.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RpYWxvZy1ib3gvZGlhbG9nLWJveC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/dialog-box/dialog-box.component.ts":
/*!****************************************************!*\
  !*** ./src/app/dialog-box/dialog-box.component.ts ***!
  \****************************************************/
/*! exports provided: DialogBoxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogBoxComponent", function() { return DialogBoxComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng6-toastr-notifications */ "./node_modules/ng6-toastr-notifications/fesm2015/ng6-toastr-notifications.js");
/* harmony import */ var src_app_issue_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/issue.service */ "./src/app/issue.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let DialogBoxComponent = class DialogBoxComponent {
    constructor(router, issueService, toastr, dialogRef, data) {
        this.router = router;
        this.issueService = issueService;
        this.toastr = toastr;
        this.dialogRef = dialogRef;
        this.data = data;
    }
    ngOnInit() { }
    onNoClick() {
        this.dialogRef.close();
    }
    deleteThisWatcher(watcherId, issueId) {
        this.issueService.deleteWatcher(watcherId, issueId).subscribe(data => {
            this.toastr.successToastr('Watchers Deleted successfully', 'Success!');
            setTimeout(() => {
                this.dialogRef.close();
            }, 1000);
        }, error => {
            console.log('some error occured');
            console.log(error.errorMessage);
            this.toastr.errorToastr('Some error occured', 'Oops!');
        });
    }
};
DialogBoxComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: src_app_issue_service__WEBPACK_IMPORTED_MODULE_4__["IssueService"] },
    { type: ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_3__["ToastrManager"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
];
DialogBoxComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dialog-box',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dialog-box.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/dialog-box/dialog-box.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dialog-box.component.css */ "./src/app/dialog-box/dialog-box.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], DialogBoxComponent);



/***/ }),

/***/ "./src/app/edit-issue/edit-issue.component.css":
/*!*****************************************************!*\
  !*** ./src/app/edit-issue/edit-issue.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".page-topbar {\n    min-height: 60px;\n    /*position: fixed;*/\n    width: 100%;\n    background-color: #0747A6;\n    top: 0px;\n    /*z-index:10000;*/\n    left: 0px;\n    box-shadow: 0 2px 4px rgba(33,33,33,.2);\n    -webkit-box-shadow: 0 2px 4px rgba(33,33,33,.2);\n    -moz-box-shadow: 0 2px 4px rgba(33,33,33,.2);\n    -o-box-shadow: 0 2px 4px rgba(33,33,33,.2);\n    -ms-box-shadow: 0 2px 4px rgba(33,33,33,.2);\n    max-height: 60px;\n}\n\n/*Transition==========================*/\n\n.page-topbar, .logo-area, .logo-area, #main-content, .logo-icon, .wraplist, .page-sidebar, .profile-info, .profile-image, .profile-details, .menu-title, .profile-image a img {\n    transition: 600ms;\n}\n\n.page-topbar .logo-area {\n   \n    background-repeat: no-repeat;\n}\n\n.page-topbar .logo-area {\n    width: 240px;\n    background-color: #0747A6;\n    display: block;\n    min-height: 60px;\n    float: left;\n    margin-left: 27px;\n}\n\n.page-topbar .logo-icon{\n    \n    background-repeat: no-repeat !important;\n}\n\n.page-topbar .logo-icon {\n    width: 100px !important;\n    background-color: #35395c;\n    display: block;\n    min-height: 60px;\n    float: left;\n}\n\n.page-topbar ul {\n    margin: 0px;\n    padding: 0px;\n}\n\n.page-topbar ul li {\n    list-style-type: none;    \n}\n\n.page-topbar .user-info li a {\n    display: inline-block;\n    font-size: 20px;\n    padding: 12px 20px;\n    color: #fff;\n    font-family: 'Comfortaa';\n    font-weight: 400;\n     position:relative;\n}\n\n.page-topbar .user-notify li a {\n    display: inline-block;\n    font-size: 16px;\n    padding: 22px 14px;\n    color: #fff;\n    font-family: 'Comfortaa';\n    font-weight: 400;\n     position:relative;\n}\n\n.page-topbar .quick-area .info-menu {\n    height: 60px;\n    margin: 0;\n    line-height: 50px;\n    padding: 0 15px;\n    display: flex;\n}\n\n.info-menu li{\n   \n}\n\n.page-topbar .badge {\n    display: inline-block;\n    min-width: 10px;\n    position: absolute;\n    padding: 3px 6px;\n    font-size: 10px;\n    font-weight: bold;\n    line-height: 1;\n    color: #fff;\n    text-align: center;\n    white-space: nowrap;\n    vertical-align: middle;\n    background-color: #F44336;\n    border-radius: 10px;\n    top: 8px;\n   right: 12px;\n}\n\nli.profile img {\n    height: 30px;\n    width: 30px;\n    top: 0px;\n    right: 10px;\n    position: relative;\n    background-color: #999999;\n}\n\n/* Ripple magic */\n\n.page-topbar button:focus {\n     outline: none;\n}\n\n.page-topbar button {\n    border: none;\n    width: 50px;\n    cursor: pointer;\n    height: 50px;\n    color: white;\n    padding: 11px 15px;\n    font-size: 21px;\n    border-radius: 100%;\n    background: transparent;\n    margin-top: 5px;\n    position: relative;\n    float: left;\n}\n\n.page-topbar button{\n     position: relative;\n     overflow: hidden;\n}\n\n.page-topbar button:after {\n     content: '';\n     position: absolute;\n     top: 50%;\n     left: 50%;\n     width: 5px;\n     height: 5px;\n     background: rgba(255, 255, 255, .5);\n     opacity: 0;\n     border-radius: 100%;\n     transform: scale(1, 1) translate(-50%);\n     transform-origin: 50% 50%;\n}\n\n@-webkit-keyframes ripple {\n     0% {\n         transform: scale(0, 0);\n         opacity: 1;\n    }\n     20% {\n         transform: scale(25, 25);\n         opacity: 1;\n    }\n     100% {\n         opacity: 0;\n         transform: scale(40, 40);\n    }\n}\n\n@keyframes ripple {\n     0% {\n         transform: scale(0, 0);\n         opacity: 1;\n    }\n     20% {\n         transform: scale(25, 25);\n         opacity: 1;\n    }\n     100% {\n         opacity: 0;\n         transform: scale(40, 40);\n    }\n}\n\n.page-topbar button:focus:not(:active)::after {\n     -webkit-animation: ripple 1s ease-out;\n             animation: ripple 1s ease-out;\n}\n\n.page-topbar li .dropdown-menu.profile {\n    max-width: 180px;\n    height: auto;\n    padding: 0px;\n}\n\n.dropdown-menu {\n    width: 360px;\n    border-radius: 0px;\n    -o-border-radius: 0px;\n    -ms-border-radius: 0px;\n    -moz-border-radius: 0px;\n    -webkit-border-radius: 0px;\n    line-height: 23px;\n    font-size: 14px;\n    padding-bottom: 0px;\n    border: 0px solid transparent;\n    box-shadow: 0 0 20px 0 rgba(33,33,33,.2);\n    -webkit-box-shadow: 0 0 20px 0 rgba(33,33,33,.2);\n    -moz-box-shadow: 0 0 20px 0 rgba(33,33,33,.2);\n    -o-box-shadow: 0 0 20px 0 rgba(33,33,33,.2);\n    -ms-box-shadow: 0 0 20px 0 rgba(33,33,33,.2);\n    margin-top: -1px;\n    padding-top: 0px;\n}\n\n.page-topbar .dropdown-menu {\n    background: #ffffff;\n    border: 1px solid #f5f5f5;\n}\n\n.page-topbar li .dropdown-menu.profile li {\n    line-height: 40px;\n    display: block;\n    height: 40px;\n    margin: 0px;\n}\n\n.page-topbar li .dropdown-menu.profile li a {\n    display: block;\n    border-bottom: 1px solid #eeeeee;\n    padding: 12px 8px;\n}\n\n.page-topbar .dropdown-menu:after, .page-topbar .dropdown-menu:before {\n    bottom: 100%;\n    left: 22px;\n    border: solid transparent;\n    content: \" \";\n    height: 0;\n    width: 0;\n    position: absolute;\n    pointer-events: none;\n}\n\n.page-topbar .dropdown-menu:before {\n    border-color: rgba(194, 225, 245, 0);\n    border-bottom-color: rgba(80, 80, 80, .1);\n    border-width: 10px;\n    margin-left: -10px;\n}\n\n.page-topbar li .dropdown-menu li a {\n    text-decoration: none;\n    color: #717171;\n}\n\n/*//////////////////////////SIDE BAR NAVE//////////////////////////*/\n\n.page-sidebar {\n    height: auto;\n    width: 260px;\n    position: fixed;\n    padding: 0px;\n    background-color: #ffffff;\n    margin-top: 60px;\n    overflow: hidden;\n    box-shadow: 0 0 10px 0 rgba(33,33,33,.2);\n    -webkit-box-shadow: 0 0 10px 0 rgba(33,33,33,.2);\n    -moz-box-shadow: 0 0 10px 0 rgba(33,33,33,.2);\n    -o-box-shadow: 0 0 10px 0 rgba(33,33,33,.2);\n    -ms-box-shadow: 0 0 10px 0 rgba(33,33,33,.2);\n    min-height: 100%;\n    height: auto;\n}\n\n.page-sidebar.fixedscroll {\n    position: fixed;\n}\n\n.page-sidebar.collapseit {\n    width: 60px;\n    margin-left: 0px !important;\n    z-index: 99;\n}\n\n.page-sidebar .profile-info {\n    background: transparent;\n    padding-top: 15px;\n    padding-bottom: 10px;\n    padding-left: 20px;\n    padding-right: 15px;\n    display: flex;\n}\n\n.page-sidebar .profile-image {\n    padding-right: 5px;\n    display: inline-block;\n}\n\n.profile-info .profile-image img {\n    height: 65px;\n    width: 65px;\n    float: right;\n    top: 5px;\n    left: 5px;\n    position: relative;    \n}\n\n.short-profile img {\n    height: 45px !important;\n    width: 45px !important; \n    left: 2px !important;\n}\n\n.short-profile .profile-details{\n    display: none;\n}\n\n.profile-info .profile-details h3 {\n    margin: 19px 0px 6px 14px;\n}\n\n.profile-info .profile-details .profile-title {\n    color: rgba(174, 178, 183, 1.0);\n    font-size: 13px;\n    margin: 0px 0px 6px 14px;\n}\n\n#main-menu-wrapper ul {\n    padding: 0px;\n    margin: 0px;\n    padding-left: 0px;\n    list-style-type: none;\n    font-family: 'Comfortaa';\n    font-weight: 400;\n    font-size: 14px;\n}\n\n#main-menu-wrapper .menusection {    \n    font-weight: 400;\n    font-size: 13px;\n    line-height: 40px;\n    padding-left: 24px;\n    margin: 10px 0 0px 0;\n    color: #9e9e9e;\n    text-transform: uppercase;\n}\n\n.profile-info .profile-details h3 a {    \n    font-weight: 400;\n    color: #757575;\n    font-size: 19px;\n    line-height: 23px;\n    text-decoration: none;\n}\n\n#main-menu-wrapper li a {\n    display: block;\n    line-height: 42px;\n    min-height: 42px;\n    height: auto;\n    color: #424242;\n    text-decoration: none;\n/*    padding: 14px 0px;*/\n    padding-left: 5px;\n    clear: both;\n    border-left: 4px solid transparent;\n    white-space: nowrap;\n/*    font-size: 18px;*/\n}\n\n#main-menu-wrapper .fa {\n    font-size: 14px;\n}\n\n#main-menu-wrapper li a i {\n    display: inline-block;\n    width: 40px;\n    height: 34px;\n    line-height: 34px;\n    text-align: center;\n    top: 0px;\n    position: relative;\n}\n\n#main-menu-wrapper li a:hover {\n    background-color: rgba(33, 33, 33, 0.1);\n    border-left: 4px solid #35395c;    \n}\n\n/*MAIN CONTENT/////////////////////////////////////////////////////////////*/\n\n#main-content {\n    margin-left: 260px;\n    display: block;\n}\n\n#main-content.sidebar_shift {\n    margin-left: 60px;\n    margin-right: 0px;\n}\n\n.main-wrapper {\n    margin-top: 60px;\n    display: inline-block;\n    width: 100%;\n    padding: 15px 15px 0 15px;\n    margin-left: 0px;\n    margin-right: 0px;\n}\n\nsection.box {\n    background-color: #ffffff;\n    margin: 15px 0;\n    min-height: 350px;\n    box-shadow: 0 1px 3px rgba(33,33,33,.2);\n    -webkit-box-shadow: 0 1px 3px rgba(33,33,33,.2);\n    -moz-box-shadow: 0 1px 3px rgba(33,33,33,.2);\n    -o-box-shadow: 0 1px 3px rgba(33,33,33,.2);\n    -ms-box-shadow: 0 1px 3px rgba(33,33,33,.2);\n}\n\n.crop {\n   border-radius: 100%;\n    line-height: 2em;\n    padding: 0em;\n    text-align: center;\n    margin: 0em;\n    width: 2em;\n    height: 2em;\n    float: left;\n    text-transform: uppercase;\n  }\n\n.about {\n    float: left;\n    padding-left: 0.4em;\n  }\n\n.online,\n  .offline,\n  .me,\n  .warning {\n    margin-right: 3px;\n    font-size: 0.8em;\n  }\n\n.online {\n    color: #86BB71;\n  }\n\n.offline {\n    color: #E38968;\n  }\n\n.me {\n    color: #94C2ED;\n  }\n\n.warning {\n    color: #00c8e7;\n  }\n\n.status {\n    color: #92959E;\n  }\n\n.name {\n    float: left;\n  }\n\n\n  \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdC1pc3N1ZS9lZGl0LWlzc3VlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCx5QkFBeUI7SUFDekIsUUFBUTtJQUNSLGlCQUFpQjtJQUNqQixTQUFTO0lBQ1QsdUNBQXVDO0lBQ3ZDLCtDQUErQztJQUMvQyw0Q0FBNEM7SUFDNUMsMENBQTBDO0lBQzFDLDJDQUEyQztJQUMzQyxnQkFBZ0I7QUFDcEI7O0FBRUEsdUNBQXVDOztBQUN2QztJQUlJLGlCQUFpQjtBQUNyQjs7QUFFQTs7SUFFSSw0QkFBNEI7QUFDaEM7O0FBQ0E7SUFDSSxZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLGlCQUFpQjtBQUNyQjs7QUFFQTs7SUFFSSx1Q0FBdUM7QUFDM0M7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsV0FBVztBQUNmOztBQUNBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBQ0E7SUFDSSxxQkFBcUI7QUFDekI7O0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsd0JBQXdCO0lBQ3hCLGdCQUFnQjtLQUNmLGlCQUFpQjtBQUN0Qjs7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCx3QkFBd0I7SUFDeEIsZ0JBQWdCO0tBQ2YsaUJBQWlCO0FBQ3RCOztBQUNBO0lBQ0ksWUFBWTtJQUNaLFNBQVM7SUFDVCxpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGFBQWE7QUFDakI7O0FBRUE7O0FBRUE7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsUUFBUTtHQUNULFdBQVc7QUFDZDs7QUFDQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsUUFBUTtJQUNSLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIseUJBQXlCO0FBQzdCOztBQUVBLGlCQUFpQjs7QUFDakI7S0FDSyxhQUFhO0FBQ2xCOztBQUNDO0lBQ0csWUFBWTtJQUNaLFdBQVc7SUFDWCxlQUFlO0lBQ2YsWUFBWTtJQUNaLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixXQUFXO0FBQ2Y7O0FBQ0M7S0FDSSxrQkFBa0I7S0FDbEIsZ0JBQWdCO0FBQ3JCOztBQUNDO0tBQ0ksV0FBVztLQUNYLGtCQUFrQjtLQUNsQixRQUFRO0tBQ1IsU0FBUztLQUNULFVBQVU7S0FDVixXQUFXO0tBQ1gsbUNBQW1DO0tBQ25DLFVBQVU7S0FDVixtQkFBbUI7S0FDbkIsc0NBQXNDO0tBQ3RDLHlCQUF5QjtBQUM5Qjs7QUFDQztLQUNJO1NBQ0ksc0JBQXNCO1NBQ3RCLFVBQVU7SUFDZjtLQUNDO1NBQ0ksd0JBQXdCO1NBQ3hCLFVBQVU7SUFDZjtLQUNDO1NBQ0ksVUFBVTtTQUNWLHdCQUF3QjtJQUM3QjtBQUNKOztBQWJDO0tBQ0k7U0FDSSxzQkFBc0I7U0FDdEIsVUFBVTtJQUNmO0tBQ0M7U0FDSSx3QkFBd0I7U0FDeEIsVUFBVTtJQUNmO0tBQ0M7U0FDSSxVQUFVO1NBQ1Ysd0JBQXdCO0lBQzdCO0FBQ0o7O0FBQ0M7S0FDSSxxQ0FBNkI7YUFBN0IsNkJBQTZCO0FBQ2xDOztBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixZQUFZO0FBQ2hCOztBQUNBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QiwwQkFBMEI7SUFDMUIsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsNkJBQTZCO0lBQzdCLHdDQUF3QztJQUN4QyxnREFBZ0Q7SUFDaEQsNkNBQTZDO0lBQzdDLDJDQUEyQztJQUMzQyw0Q0FBNEM7SUFDNUMsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQjs7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQix5QkFBeUI7QUFDN0I7O0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsY0FBYztJQUNkLFlBQVk7SUFDWixXQUFXO0FBQ2Y7O0FBQ0E7SUFDSSxjQUFjO0lBQ2QsZ0NBQWdDO0lBQ2hDLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixVQUFVO0lBQ1YseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixTQUFTO0lBQ1QsUUFBUTtJQUNSLGtCQUFrQjtJQUNsQixvQkFBb0I7QUFDeEI7O0FBQ0E7SUFDSSxvQ0FBb0M7SUFDcEMseUNBQXlDO0lBQ3pDLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEI7O0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsY0FBYztBQUNsQjs7QUFHQSxvRUFBb0U7O0FBRXBFO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixlQUFlO0lBQ2YsWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLHdDQUF3QztJQUN4QyxnREFBZ0Q7SUFDaEQsNkNBQTZDO0lBQzdDLDJDQUEyQztJQUMzQyw0Q0FBNEM7SUFDNUMsZ0JBQWdCO0lBQ2hCLFlBQVk7QUFDaEI7O0FBQ0E7SUFDSSxlQUFlO0FBQ25COztBQUNBO0lBQ0ksV0FBVztJQUNYLDJCQUEyQjtJQUMzQixXQUFXO0FBQ2Y7O0FBQ0E7SUFDSSx1QkFBdUI7SUFDdkIsaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGFBQWE7QUFDakI7O0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIscUJBQXFCO0FBQ3pCOztBQUNBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxZQUFZO0lBQ1osUUFBUTtJQUNSLFNBQVM7SUFDVCxrQkFBa0I7QUFDdEI7O0FBQ0E7SUFDSSx1QkFBdUI7SUFDdkIsc0JBQXNCO0lBQ3RCLG9CQUFvQjtBQUN4Qjs7QUFDQTtJQUNJLGFBQWE7QUFDakI7O0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7O0FBQ0E7SUFDSSwrQkFBK0I7SUFDL0IsZUFBZTtJQUNmLHdCQUF3QjtBQUM1Qjs7QUFDQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLHFCQUFxQjtJQUNyQix3QkFBd0I7SUFDeEIsZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7O0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLGNBQWM7SUFDZCx5QkFBeUI7QUFDN0I7O0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLGVBQWU7SUFDZixpQkFBaUI7SUFDakIscUJBQXFCO0FBQ3pCOztBQUNBO0lBQ0ksY0FBYztJQUNkLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGNBQWM7SUFDZCxxQkFBcUI7QUFDekIseUJBQXlCO0lBQ3JCLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsa0NBQWtDO0lBQ2xDLG1CQUFtQjtBQUN2Qix1QkFBdUI7QUFDdkI7O0FBQ0E7SUFDSSxlQUFlO0FBQ25COztBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1Isa0JBQWtCO0FBQ3RCOztBQUNBO0lBQ0ksdUNBQXVDO0lBQ3ZDLDhCQUE4QjtBQUNsQzs7QUFJQSw0RUFBNEU7O0FBRTVFO0lBQ0ksa0JBQWtCO0lBQ2xCLGNBQWM7QUFDbEI7O0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsaUJBQWlCO0FBQ3JCOztBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHFCQUFxQjtJQUNyQixXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7O0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsY0FBYztJQUNkLGlCQUFpQjtJQUNqQix1Q0FBdUM7SUFDdkMsK0NBQStDO0lBQy9DLDRDQUE0QztJQUM1QywwQ0FBMEM7SUFDMUMsMkNBQTJDO0FBQy9DOztBQUlBO0dBQ0csbUJBQW1CO0lBQ2xCLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxVQUFVO0lBQ1YsV0FBVztJQUNYLFdBQVc7SUFDWCx5QkFBeUI7RUFDM0I7O0FBRUE7SUFDRSxXQUFXO0lBQ1gsbUJBQW1CO0VBQ3JCOztBQUVBOzs7O0lBSUUsaUJBQWlCO0lBQ2pCLGdCQUFnQjtFQUNsQjs7QUFFQTtJQUNFLGNBQWM7RUFDaEI7O0FBRUE7SUFDRSxjQUFjO0VBQ2hCOztBQUVBO0lBQ0UsY0FBYztFQUNoQjs7QUFFQTtJQUNFLGNBQWM7RUFDaEI7O0FBRUE7SUFDRSxjQUFjO0VBQ2hCOztBQUVBO0lBQ0UsV0FBVztFQUNiIiwiZmlsZSI6InNyYy9hcHAvZWRpdC1pc3N1ZS9lZGl0LWlzc3VlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFnZS10b3BiYXIge1xuICAgIG1pbi1oZWlnaHQ6IDYwcHg7XG4gICAgLypwb3NpdGlvbjogZml4ZWQ7Ki9cbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDc0N0E2O1xuICAgIHRvcDogMHB4O1xuICAgIC8qei1pbmRleDoxMDAwMDsqL1xuICAgIGxlZnQ6IDBweDtcbiAgICBib3gtc2hhZG93OiAwIDJweCA0cHggcmdiYSgzMywzMywzMywuMik7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDJweCA0cHggcmdiYSgzMywzMywzMywuMik7XG4gICAgLW1vei1ib3gtc2hhZG93OiAwIDJweCA0cHggcmdiYSgzMywzMywzMywuMik7XG4gICAgLW8tYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMzMsMzMsMzMsLjIpO1xuICAgIC1tcy1ib3gtc2hhZG93OiAwIDJweCA0cHggcmdiYSgzMywzMywzMywuMik7XG4gICAgbWF4LWhlaWdodDogNjBweDtcbn1cblxuLypUcmFuc2l0aW9uPT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuLnBhZ2UtdG9wYmFyLCAubG9nby1hcmVhLCAubG9nby1hcmVhLCAjbWFpbi1jb250ZW50LCAubG9nby1pY29uLCAud3JhcGxpc3QsIC5wYWdlLXNpZGViYXIsIC5wcm9maWxlLWluZm8sIC5wcm9maWxlLWltYWdlLCAucHJvZmlsZS1kZXRhaWxzLCAubWVudS10aXRsZSwgLnByb2ZpbGUtaW1hZ2UgYSBpbWcge1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogNjAwbXM7XG4gICAgLW1vei10cmFuc2l0aW9uOiA2MDBtcztcbiAgICAtby10cmFuc2l0aW9uOiA2MDBtcztcbiAgICB0cmFuc2l0aW9uOiA2MDBtcztcbn1cblxuLnBhZ2UtdG9wYmFyIC5sb2dvLWFyZWEge1xuICAgXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbn1cbi5wYWdlLXRvcGJhciAubG9nby1hcmVhIHtcbiAgICB3aWR0aDogMjQwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA3NDdBNjtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtaW4taGVpZ2h0OiA2MHB4O1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIG1hcmdpbi1sZWZ0OiAyN3B4O1xufVxuXG4ucGFnZS10b3BiYXIgLmxvZ28taWNvbntcbiAgICBcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0ICFpbXBvcnRhbnQ7XG59XG5cbi5wYWdlLXRvcGJhciAubG9nby1pY29uIHtcbiAgICB3aWR0aDogMTAwcHggIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzUzOTVjO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1pbi1oZWlnaHQ6IDYwcHg7XG4gICAgZmxvYXQ6IGxlZnQ7XG59XG4ucGFnZS10b3BiYXIgdWwge1xuICAgIG1hcmdpbjogMHB4O1xuICAgIHBhZGRpbmc6IDBweDtcbn1cbi5wYWdlLXRvcGJhciB1bCBsaSB7XG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lOyAgICBcbn1cbi5wYWdlLXRvcGJhciAudXNlci1pbmZvIGxpIGEge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgcGFkZGluZzogMTJweCAyMHB4O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtZmFtaWx5OiAnQ29tZm9ydGFhJztcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcbn1cbi5wYWdlLXRvcGJhciAudXNlci1ub3RpZnkgbGkgYSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBwYWRkaW5nOiAyMnB4IDE0cHg7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC1mYW1pbHk6ICdDb21mb3J0YWEnO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xufVxuLnBhZ2UtdG9wYmFyIC5xdWljay1hcmVhIC5pbmZvLW1lbnUge1xuICAgIGhlaWdodDogNjBweDtcbiAgICBtYXJnaW46IDA7XG4gICAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gICAgcGFkZGluZzogMCAxNXB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5pbmZvLW1lbnUgbGl7XG4gICBcbn1cblxuLnBhZ2UtdG9wYmFyIC5iYWRnZSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG1pbi13aWR0aDogMTBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcGFkZGluZzogM3B4IDZweDtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjQ0MzM2O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgdG9wOiA4cHg7XG4gICByaWdodDogMTJweDtcbn1cbmxpLnByb2ZpbGUgaW1nIHtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgd2lkdGg6IDMwcHg7XG4gICAgdG9wOiAwcHg7XG4gICAgcmlnaHQ6IDEwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM5OTk5OTk7XG59XG5cbi8qIFJpcHBsZSBtYWdpYyAqL1xuLnBhZ2UtdG9wYmFyIGJ1dHRvbjpmb2N1cyB7XG4gICAgIG91dGxpbmU6IG5vbmU7XG59XG4gLnBhZ2UtdG9wYmFyIGJ1dHRvbiB7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDExcHggMTVweDtcbiAgICBmb250LXNpemU6IDIxcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGZsb2F0OiBsZWZ0O1xufVxuIC5wYWdlLXRvcGJhciBidXR0b257XG4gICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbiAucGFnZS10b3BiYXIgYnV0dG9uOmFmdGVyIHtcbiAgICAgY29udGVudDogJyc7XG4gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgdG9wOiA1MCU7XG4gICAgIGxlZnQ6IDUwJTtcbiAgICAgd2lkdGg6IDVweDtcbiAgICAgaGVpZ2h0OiA1cHg7XG4gICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjUpO1xuICAgICBvcGFjaXR5OiAwO1xuICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpIHRyYW5zbGF0ZSgtNTAlKTtcbiAgICAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDUwJTtcbn1cbiBAa2V5ZnJhbWVzIHJpcHBsZSB7XG4gICAgIDAlIHtcbiAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCwgMCk7XG4gICAgICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiAgICAgMjAlIHtcbiAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMjUsIDI1KTtcbiAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuICAgICAxMDAlIHtcbiAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDQwLCA0MCk7XG4gICAgfVxufVxuIC5wYWdlLXRvcGJhciBidXR0b246Zm9jdXM6bm90KDphY3RpdmUpOjphZnRlciB7XG4gICAgIGFuaW1hdGlvbjogcmlwcGxlIDFzIGVhc2Utb3V0O1xufVxuLnBhZ2UtdG9wYmFyIGxpIC5kcm9wZG93bi1tZW51LnByb2ZpbGUge1xuICAgIG1heC13aWR0aDogMTgwcHg7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIHBhZGRpbmc6IDBweDtcbn1cbi5kcm9wZG93bi1tZW51IHtcbiAgICB3aWR0aDogMzYwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xuICAgIC1vLWJvcmRlci1yYWRpdXM6IDBweDtcbiAgICAtbXMtYm9yZGVyLXJhZGl1czogMHB4O1xuICAgIC1tb3otYm9yZGVyLXJhZGl1czogMHB4O1xuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyM3B4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xuICAgIGJvcmRlcjogMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGJveC1zaGFkb3c6IDAgMCAyMHB4IDAgcmdiYSgzMywzMywzMywuMik7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMjBweCAwIHJnYmEoMzMsMzMsMzMsLjIpO1xuICAgIC1tb3otYm94LXNoYWRvdzogMCAwIDIwcHggMCByZ2JhKDMzLDMzLDMzLC4yKTtcbiAgICAtby1ib3gtc2hhZG93OiAwIDAgMjBweCAwIHJnYmEoMzMsMzMsMzMsLjIpO1xuICAgIC1tcy1ib3gtc2hhZG93OiAwIDAgMjBweCAwIHJnYmEoMzMsMzMsMzMsLjIpO1xuICAgIG1hcmdpbi10b3A6IC0xcHg7XG4gICAgcGFkZGluZy10b3A6IDBweDtcbn1cbi5wYWdlLXRvcGJhciAuZHJvcGRvd24tbWVudSB7XG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZjVmNWY1O1xufVxuLnBhZ2UtdG9wYmFyIGxpIC5kcm9wZG93bi1tZW51LnByb2ZpbGUgbGkge1xuICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGhlaWdodDogNDBweDtcbiAgICBtYXJnaW46IDBweDtcbn1cbi5wYWdlLXRvcGJhciBsaSAuZHJvcGRvd24tbWVudS5wcm9maWxlIGxpIGEge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWVlZWVlO1xuICAgIHBhZGRpbmc6IDEycHggOHB4O1xufVxuXG4ucGFnZS10b3BiYXIgLmRyb3Bkb3duLW1lbnU6YWZ0ZXIsIC5wYWdlLXRvcGJhciAuZHJvcGRvd24tbWVudTpiZWZvcmUge1xuICAgIGJvdHRvbTogMTAwJTtcbiAgICBsZWZ0OiAyMnB4O1xuICAgIGJvcmRlcjogc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgY29udGVudDogXCIgXCI7XG4gICAgaGVpZ2h0OiAwO1xuICAgIHdpZHRoOiAwO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cbi5wYWdlLXRvcGJhciAuZHJvcGRvd24tbWVudTpiZWZvcmUge1xuICAgIGJvcmRlci1jb2xvcjogcmdiYSgxOTQsIDIyNSwgMjQ1LCAwKTtcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiByZ2JhKDgwLCA4MCwgODAsIC4xKTtcbiAgICBib3JkZXItd2lkdGg6IDEwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xufVxuLnBhZ2UtdG9wYmFyIGxpIC5kcm9wZG93bi1tZW51IGxpIGEge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjb2xvcjogIzcxNzE3MTtcbn1cblxuXG4vKi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vU0lERSBCQVIgTkFWRS8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vKi9cblxuLnBhZ2Utc2lkZWJhciB7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIHdpZHRoOiAyNjBweDtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgcGFkZGluZzogMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgbWFyZ2luLXRvcDogNjBweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IDAgcmdiYSgzMywzMywzMywuMik7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMTBweCAwIHJnYmEoMzMsMzMsMzMsLjIpO1xuICAgIC1tb3otYm94LXNoYWRvdzogMCAwIDEwcHggMCByZ2JhKDMzLDMzLDMzLC4yKTtcbiAgICAtby1ib3gtc2hhZG93OiAwIDAgMTBweCAwIHJnYmEoMzMsMzMsMzMsLjIpO1xuICAgIC1tcy1ib3gtc2hhZG93OiAwIDAgMTBweCAwIHJnYmEoMzMsMzMsMzMsLjIpO1xuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XG4gICAgaGVpZ2h0OiBhdXRvO1xufVxuLnBhZ2Utc2lkZWJhci5maXhlZHNjcm9sbCB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xufVxuLnBhZ2Utc2lkZWJhci5jb2xsYXBzZWl0IHtcbiAgICB3aWR0aDogNjBweDtcbiAgICBtYXJnaW4tbGVmdDogMHB4ICFpbXBvcnRhbnQ7XG4gICAgei1pbmRleDogOTk7XG59XG4ucGFnZS1zaWRlYmFyIC5wcm9maWxlLWluZm8ge1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG4ucGFnZS1zaWRlYmFyIC5wcm9maWxlLWltYWdlIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuLnByb2ZpbGUtaW5mbyAucHJvZmlsZS1pbWFnZSBpbWcge1xuICAgIGhlaWdodDogNjVweDtcbiAgICB3aWR0aDogNjVweDtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgdG9wOiA1cHg7XG4gICAgbGVmdDogNXB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgICAgXG59XG4uc2hvcnQtcHJvZmlsZSBpbWcge1xuICAgIGhlaWdodDogNDVweCAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiA0NXB4ICFpbXBvcnRhbnQ7IFxuICAgIGxlZnQ6IDJweCAhaW1wb3J0YW50O1xufVxuLnNob3J0LXByb2ZpbGUgLnByb2ZpbGUtZGV0YWlsc3tcbiAgICBkaXNwbGF5OiBub25lO1xufVxuLnByb2ZpbGUtaW5mbyAucHJvZmlsZS1kZXRhaWxzIGgzIHtcbiAgICBtYXJnaW46IDE5cHggMHB4IDZweCAxNHB4O1xufVxuLnByb2ZpbGUtaW5mbyAucHJvZmlsZS1kZXRhaWxzIC5wcm9maWxlLXRpdGxlIHtcbiAgICBjb2xvcjogcmdiYSgxNzQsIDE3OCwgMTgzLCAxLjApO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBtYXJnaW46IDBweCAwcHggNnB4IDE0cHg7XG59XG4jbWFpbi1tZW51LXdyYXBwZXIgdWwge1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICBtYXJnaW46IDBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDtcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgZm9udC1mYW1pbHk6ICdDb21mb3J0YWEnO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zaXplOiAxNHB4O1xufVxuI21haW4tbWVudS13cmFwcGVyIC5tZW51c2VjdGlvbiB7ICAgIFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICAgIHBhZGRpbmctbGVmdDogMjRweDtcbiAgICBtYXJnaW46IDEwcHggMCAwcHggMDtcbiAgICBjb2xvcjogIzllOWU5ZTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuLnByb2ZpbGUtaW5mbyAucHJvZmlsZS1kZXRhaWxzIGgzIGEgeyAgICBcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGNvbG9yOiAjNzU3NTc1O1xuICAgIGZvbnQtc2l6ZTogMTlweDtcbiAgICBsaW5lLWhlaWdodDogMjNweDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4jbWFpbi1tZW51LXdyYXBwZXIgbGkgYSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbGluZS1oZWlnaHQ6IDQycHg7XG4gICAgbWluLWhlaWdodDogNDJweDtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgY29sb3I6ICM0MjQyNDI7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuLyogICAgcGFkZGluZzogMTRweCAwcHg7Ki9cbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgICBjbGVhcjogYm90aDtcbiAgICBib3JkZXItbGVmdDogNHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4vKiAgICBmb250LXNpemU6IDE4cHg7Ki9cbn1cbiNtYWluLW1lbnUtd3JhcHBlciAuZmEge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbn1cbiNtYWluLW1lbnUtd3JhcHBlciBsaSBhIGkge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogNDBweDtcbiAgICBoZWlnaHQ6IDM0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDM0cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHRvcDogMHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbiNtYWluLW1lbnUtd3JhcHBlciBsaSBhOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDMzLCAzMywgMzMsIDAuMSk7XG4gICAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCAjMzUzOTVjOyAgICBcbn1cblxuXG5cbi8qTUFJTiBDT05URU5ULy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyovXG5cbiNtYWluLWNvbnRlbnQge1xuICAgIG1hcmdpbi1sZWZ0OiAyNjBweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cbiNtYWluLWNvbnRlbnQuc2lkZWJhcl9zaGlmdCB7XG4gICAgbWFyZ2luLWxlZnQ6IDYwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAwcHg7XG59XG4ubWFpbi13cmFwcGVyIHtcbiAgICBtYXJnaW4tdG9wOiA2MHB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAxNXB4IDE1cHggMCAxNXB4O1xuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAwcHg7XG59XG5zZWN0aW9uLmJveCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgICBtYXJnaW46IDE1cHggMDtcbiAgICBtaW4taGVpZ2h0OiAzNTBweDtcbiAgICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgzMywzMywzMywuMik7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgzMywzMywzMywuMik7XG4gICAgLW1vei1ib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgzMywzMywzMywuMik7XG4gICAgLW8tYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMzMsMzMsMzMsLjIpO1xuICAgIC1tcy1ib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgzMywzMywzMywuMik7XG59XG5cblxuXG4uY3JvcCB7XG4gICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgIGxpbmUtaGVpZ2h0OiAyZW07XG4gICAgcGFkZGluZzogMGVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW46IDBlbTtcbiAgICB3aWR0aDogMmVtO1xuICAgIGhlaWdodDogMmVtO1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIH1cbiAgXG4gIC5hYm91dCB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgcGFkZGluZy1sZWZ0OiAwLjRlbTtcbiAgfVxuICBcbiAgLm9ubGluZSxcbiAgLm9mZmxpbmUsXG4gIC5tZSxcbiAgLndhcm5pbmcge1xuICAgIG1hcmdpbi1yaWdodDogM3B4O1xuICAgIGZvbnQtc2l6ZTogMC44ZW07XG4gIH1cbiAgXG4gIC5vbmxpbmUge1xuICAgIGNvbG9yOiAjODZCQjcxO1xuICB9XG4gIFxuICAub2ZmbGluZSB7XG4gICAgY29sb3I6ICNFMzg5Njg7XG4gIH1cbiAgXG4gIC5tZSB7XG4gICAgY29sb3I6ICM5NEMyRUQ7XG4gIH1cbiAgXG4gIC53YXJuaW5nIHtcbiAgICBjb2xvcjogIzAwYzhlNztcbiAgfVxuICBcbiAgLnN0YXR1cyB7XG4gICAgY29sb3I6ICM5Mjk1OUU7XG4gIH1cbiAgXG4gIC5uYW1lIHtcbiAgICBmbG9hdDogbGVmdDtcbiAgfVxuXG5cbiAgIl19 */");

/***/ }),

/***/ "./src/app/edit-issue/edit-issue.component.ts":
/*!****************************************************!*\
  !*** ./src/app/edit-issue/edit-issue.component.ts ***!
  \****************************************************/
/*! exports provided: EditIssueComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditIssueComponent", function() { return EditIssueComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _dialog_box_dialog_box_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../dialog-box/dialog-box.component */ "./src/app/dialog-box/dialog-box.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng6-toastr-notifications */ "./node_modules/ng6-toastr-notifications/fesm2015/ng6-toastr-notifications.js");
/* harmony import */ var src_app_user_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/user/user.service */ "./src/app/user/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ng2_cookies__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-cookies */ "./node_modules/ng2-cookies/index.js");
/* harmony import */ var ng2_cookies__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_issue_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/issue.service */ "./src/app/issue.service.ts");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_14__);















let EditIssueComponent = class EditIssueComponent {
    constructor(sanitizer, toastr, http, dialog, modalService, userService, fb, _route, issueService, router) {
        this.sanitizer = sanitizer;
        this.toastr = toastr;
        this.http = http;
        this.dialog = dialog;
        this.modalService = modalService;
        this.userService = userService;
        this.fb = fb;
        this._route = _route;
        this.issueService = issueService;
        this.router = router;
        this.userNameAppear = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.attachmentList = [];
        this.fileName = [];
        this.allStatus = [
            {
                label: 'Backlog',
                id: 1
            },
            {
                label: 'In-Progress',
                id: 2
            },
            {
                label: 'In-Test',
                id: 3
            },
            {
                label: 'Done',
                id: 4
            }
        ];
        this.logout = () => {
            this.userService.logout().subscribe(apiResponse => {
                if (apiResponse.status === 200) {
                    ng2_cookies__WEBPACK_IMPORTED_MODULE_6__["Cookie"].delete('authtoken');
                    ng2_cookies__WEBPACK_IMPORTED_MODULE_6__["Cookie"].delete('receiverId');
                    ng2_cookies__WEBPACK_IMPORTED_MODULE_6__["Cookie"].delete('receiverName');
                    this.router.navigate(['/login']);
                }
                else {
                    this.toastr.errorToastr(apiResponse.message);
                } // end condition
            }, err => {
                this.toastr.errorToastr('some error occured');
            });
        }; // end logout
        this.download = index => {
            let fileId = this.fileName[index];
            this.issueService.downloadAttachment(fileId).subscribe(response => {
                Object(file_saver__WEBPACK_IMPORTED_MODULE_10__["saveAs"])(response, response['filename']);
            });
        };
        this.myForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormGroup"]({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required),
            status: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required),
            assignee: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required),
            reporter: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required),
            images: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required)
        });
        this.modalOptions = { backdrop: 'static', backdropClass: 'customBackdrop' };
        this.issueService.getAllUser().subscribe(data => {
            if (data.data != null) {
                this.allUsers = data.data;
                console.log(this.allUsers);
            }
            else {
            }
        }, err => {
            console.log('some error occured');
            console.error(err);
        });
    }
    ngOnInit() {
        this.totalNotification();
        this.commentName = ng2_cookies__WEBPACK_IMPORTED_MODULE_6__["Cookie"].get('receiverName');
        this.firstChar = this.commentName[0];
        this.singleUser();
        let issueId = this._route.snapshot.paramMap.get('issueId');
        this.getAllWatcher(issueId);
        this.allCommentDetails(issueId);
        const data = 'some text';
        const blob = new Blob([data], { type: 'application/octet-stream' });
        this.fileUrl = this.sanitizer.bypassSecurityTrustResourceUrl(window.URL.createObjectURL(blob));
        this.issueService.getSingleIssue(issueId).subscribe(data => {
            console.log(data);
            this.responseData = data['data'];
        }, error => {
            console.log('some error occured');
            console.log(error.errorMessage);
        });
    }
    backToHome() {
        this.router.navigate(['/dashboard']);
    }
    notific() {
        this.router.navigate(['/notifications']);
    }
    createComment() {
        let issueData = {
            userId: this.currentUser.userId,
            issueId: this.responseData.issueId,
            description: this.issueDescription,
            images: this.issueImages,
            commentName: ng2_cookies__WEBPACK_IMPORTED_MODULE_6__["Cookie"].get('receiverName')
        };
        const formData = new FormData();
        formData.append('file', this.images);
        this.http
            .post('http://localhost:3000/file', formData)
            .subscribe(res => console.log(res), err => console.log(err));
        this.issueService.createComment(issueData).subscribe(apiResponse => {
            console.log(apiResponse);
            if (apiResponse.status === 200) {
                this.toastr.successToastr('Comment posted successful');
                this.modalService.dismissAll('Cross click');
                this.ngOnInit();
            }
            else {
                this.toastr.errorToastr(apiResponse.message);
            }
        }, err => {
            this.toastr.errorToastr('some error occured');
        });
    }
    totalNotification() {
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_14__('http://localhost:3000');
        this.socket.emit('comment');
        this.socket.on('notification', data => {
            this.totalNotify = data.total_notify;
        });
    }
    allCommentDetails(issueId) {
        this.issueService.getUserDetails(issueId).subscribe(data => {
            if (data.data != null) {
                this.commentData = data.data;
                console.log(this.commentData);
            }
            else {
            }
        }, err => {
            console.log('some error occured');
            console.error(err);
        });
    }
    updateIssue() {
        this.issueService.editIssue(this.responseData.issueId, this.responseData).subscribe(data => {
            console.log(data);
            this.toastr.successToastr(' updated successfully', 'Success!');
            this.modalService.dismissAll('Cross click');
        }, error => {
            console.log('some error occured');
            console.log(error.errorMessage);
            this.toastr.errorToastr('Some error occured', 'Oops!');
        });
    }
    singleUser() {
        let userId = ng2_cookies__WEBPACK_IMPORTED_MODULE_6__["Cookie"].get('receiverId');
        this.issueService.getSingleUserInformation(ng2_cookies__WEBPACK_IMPORTED_MODULE_6__["Cookie"].get('receiverId')).subscribe(data => {
            this.currentUser = data.data;
            console.log(this.currentUser);
        }, error => {
            console.log('some error occured');
            console.log(error.errorMessage);
        });
    }
    createWatcher() {
        let watcherData = {
            userId: this.currentUser.userId,
            issueId: this.responseData.issueId,
            reporter: this.issueReporter
        };
        console.log(watcherData);
        this.issueService.createWatcher(watcherData).subscribe(apiResponse => {
            console.log(apiResponse);
            if (apiResponse.status === 200) {
                this.toastr.successToastr('Watcher added successful');
                this.modalService.dismissAll('Cross click');
                this.ngOnInit();
            }
            else {
                this.toastr.errorToastr(apiResponse.message);
            }
        }, err => {
            this.toastr.errorToastr('some error occured');
        });
    }
    getAllWatcher(issueId) {
        this.issueService.getAllWatcher(issueId).subscribe(data => {
            if (data.data != null) {
                this.allWatchers = data.data;
                console.log(this.allWatchers);
            }
            else {
            }
        }, err => {
            console.log('some error occured');
            console.error(err);
        });
    }
    open(content) {
        this.modalService.open(content, { size: 'lg' }).result.then(result => {
            this.closeResult = `Closed with: ${result}`;
        }, reason => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }
    openDialog(watcherId, issueId) {
        const dialogRef = this.dialog.open(_dialog_box_dialog_box_component__WEBPACK_IMPORTED_MODULE_1__["DialogBoxComponent"], {
            width: '50%',
            data: {
                watcherId: watcherId,
                issueId: issueId
            }
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            location.reload();
        });
    }
    getDismissReason(reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return `with: ${reason}`;
        }
    }
};
EditIssueComponent.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["DomSanitizer"] },
    { type: ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_3__["ToastrManager"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClient"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__["MatDialog"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModal"] },
    { type: src_app_user_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: src_app_issue_service__WEBPACK_IMPORTED_MODULE_9__["IssueService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()
], EditIssueComponent.prototype, "receiverName", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()
], EditIssueComponent.prototype, "userLastName", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()
], EditIssueComponent.prototype, "messageRead", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])()
], EditIssueComponent.prototype, "userNameAppear", void 0);
EditIssueComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-edit-issue',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./edit-issue.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/edit-issue/edit-issue.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./edit-issue.component.css */ "./src/app/edit-issue/edit-issue.component.css")).default]
    })
], EditIssueComponent);



/***/ }),

/***/ "./src/app/edit-issue/edit-issue.module.ts":
/*!*************************************************!*\
  !*** ./src/app/edit-issue/edit-issue.module.ts ***!
  \*************************************************/
/*! exports provided: EditIssueModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditIssueModule", function() { return EditIssueModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _dialog_box_dialog_box_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../dialog-box/dialog-box.component */ "./src/app/dialog-box/dialog-box.component.ts");
/* harmony import */ var _shared_pipe_replace_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../shared/pipe/replace.pipe */ "./src/app/shared/pipe/replace.pipe.ts");
/* harmony import */ var _edit_issue_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit-issue.component */ "./src/app/edit-issue/edit-issue.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var src_app_shared_material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/material.module */ "./src/app/shared/material.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var ngx_editor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-editor */ "./node_modules/ngx-editor/fesm2015/ngx-editor.js");
/* harmony import */ var ng2_image_viewer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng2-image-viewer */ "./node_modules/ng2-image-viewer/ng2-image-viewer.umd.js");
/* harmony import */ var ng2_image_viewer__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(ng2_image_viewer__WEBPACK_IMPORTED_MODULE_10__);











let EditIssueModule = class EditIssueModule {
};
EditIssueModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
        declarations: [_edit_issue_component__WEBPACK_IMPORTED_MODULE_3__["EditIssueComponent"], _shared_pipe_replace_pipe__WEBPACK_IMPORTED_MODULE_2__["ReplacePipe"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
            ng2_image_viewer__WEBPACK_IMPORTED_MODULE_10__["ImageViewerModule"],
            src_app_shared_material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
            ngx_editor__WEBPACK_IMPORTED_MODULE_9__["NgxEditorModule"],
        ],
        exports: [_edit_issue_component__WEBPACK_IMPORTED_MODULE_3__["EditIssueComponent"]],
        entryComponents: [
            _dialog_box_dialog_box_component__WEBPACK_IMPORTED_MODULE_1__["DialogBoxComponent"]
        ]
    })
], EditIssueModule);



/***/ }),

/***/ "./src/app/issue.service.ts":
/*!**********************************!*\
  !*** ./src/app/issue.service.ts ***!
  \**********************************/
/*! exports provided: IssueService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IssueService", function() { return IssueService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var ng2_cookies__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-cookies */ "./node_modules/ng2-cookies/index.js");
/* harmony import */ var ng2_cookies__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm2015/add/operator/catch.js");
/* harmony import */ var rxjs_add_operator_do__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/add/operator/do */ "./node_modules/rxjs-compat/_esm2015/add/operator/do.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/add/operator/toPromise */ "./node_modules/rxjs-compat/_esm2015/add/operator/toPromise.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");










let IssueService = class IssueService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].baseUrl;
        this.getUserInfoFromLocalstorage = () => {
            return JSON.parse(localStorage.getItem('userInfo'));
        }; // end getUserInfoFromLocalstorage
        this.setUserInfoInLocalStorage = data => {
            localStorage.setItem('userInfo', JSON.stringify(data));
        };
        this.downloadAttachment = file => {
            return this.http.get(`/api/download/${file}`, {
                responseType: 'blob',
                headers: { 'Content-type': 'text/xml' }
            });
        };
    }
    handleError(err) {
        console.log('Handle error Http calls');
        console.log(err.message);
        return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].throw(err.message);
    }
    getAllUser() {
        let myResponse = this.http.get(this.baseUrl + '/all/' + '?authToken=' + ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].get('authtoken'));
        console.log(myResponse);
        return myResponse;
    }
    getSingleUserInformation(currentUserId) {
        console.log(currentUserId);
        let myResponse = this.http.get(this.baseUrl + '/' + currentUserId + '/details' + '?authToken=' + ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].get('authtoken'));
        return myResponse;
    }
    getAllIssue(userId) {
        console.log(userId);
        let myResponse = this.http.get(this.baseUrl + '/view/all/' + userId + '?authToken=' + ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].get('authtoken'));
        console.log(myResponse);
        return myResponse;
    }
    getSingleIssue(currentissueId) {
        console.log(currentissueId);
        let myResponse = this.http.get(this.baseUrl + '/view' + '/' + currentissueId + '?authToken=' + ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].get('authtoken'));
        console.log(myResponse);
        return myResponse;
    }
    createIssue(issueData) {
        let myResponse = this.http.post(this.baseUrl + '/create' + '?authToken=' + ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].get('authtoken'), issueData);
        return myResponse;
    }
    deleteIssue(issueId) {
        let data = {};
        let myResponse = this.http.post(this.baseUrl + '/' + issueId + '/delete' + '?authToken=' + ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].get('authtoken'), data);
        return myResponse;
    }
    editIssue(issueId, issueData) {
        let myResponse = this.http.put(this.baseUrl + '/' + issueId + '/edit' + '?authToken=' + ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].get('authtoken'), issueData);
        return myResponse;
    }
    createComment(issueData) {
        let myResponse = this.http.post(this.baseUrl + '/create/comment/' + '?authToken=' + ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].get('authtoken'), issueData);
        return myResponse;
    }
    getUserDetails(issueId) {
        let myResponse = this.http.get(this.baseUrl + '/all/allComments/' + issueId + '?authToken=' + ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].get('authtoken'));
        console.log(myResponse);
        return myResponse;
    }
    getAllComments(issueId, notifyId) {
        let myResponse = this.http.get(this.baseUrl + '/view/all/comments/' + issueId + '/' + notifyId + '?authToken=' + ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].get('authtoken'));
        console.log(myResponse);
        return myResponse;
    }
    createWatcher(watcherData) {
        let myResponse = this.http.post(this.baseUrl + '/create/watcher/' + '?authToken=' + ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].get('authtoken'), watcherData);
        return myResponse;
    }
    getAllWatcher(issueId) {
        let myResponse = this.http.get(this.baseUrl + '/view/all/watcher/' + issueId + '?authToken=' + ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].get('authtoken'));
        console.log(myResponse);
        return myResponse;
    }
    getAllNotification() {
        let myResponse = this.http.get(this.baseUrl + '/all/notifications/' + '?authToken=' + ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].get('authtoken'));
        console.log(myResponse);
        return myResponse;
    }
    deleteWatcher(watcherId, issueId) {
        let data = {};
        let myResponse = this.http.post(this.baseUrl + '/view/delete/watcher/' + watcherId + '/' + issueId + '?authToken=' + ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].get('authtoken'), data);
        return myResponse;
    }
    downloadFile(file) {
        var body = { filename: file };
        return this.http.post('http://localhost:3000/file/download', body, {
            responseType: 'blob',
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append('Content-Type', 'application/json')
        });
    }
};
IssueService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] }
];
IssueService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], IssueService);



/***/ }),

/***/ "./src/app/notification/notification.component.css":
/*!*********************************************************!*\
  !*** ./src/app/notification/notification.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".page-topbar {\n    min-height: 60px;\n    /*position: fixed;*/\n    width: 100%;\n    background-color: #0747A6;\n    top: 0px;\n    /*z-index:10000;*/\n    left: 0px;\n    box-shadow: 0 2px 4px rgba(33,33,33,.2);\n    -webkit-box-shadow: 0 2px 4px rgba(33,33,33,.2);\n    -moz-box-shadow: 0 2px 4px rgba(33,33,33,.2);\n    -o-box-shadow: 0 2px 4px rgba(33,33,33,.2);\n    -ms-box-shadow: 0 2px 4px rgba(33,33,33,.2);\n    max-height: 60px;\n}\n\n/*Transition==========================*/\n\n.page-topbar, .logo-area, .logo-area, #main-content, .logo-icon, .wraplist, .page-sidebar, .profile-info, .profile-image, .profile-details, .menu-title, .profile-image a img {\n    transition: 600ms;\n}\n\n.page-topbar .logo-area {\n   \n    background-repeat: no-repeat;\n}\n\n.page-topbar .logo-area {\n    width: 240px;\n    background-color: #0747A6;\n    display: block;\n    min-height: 60px;\n    float: left;\n    margin-left: 27px;\n}\n\n.page-topbar .logo-icon{\n    \n    background-repeat: no-repeat !important;\n}\n\n.page-topbar .logo-icon {\n    width: 100px !important;\n    background-color: #35395c;\n    display: block;\n    min-height: 60px;\n    float: left;\n}\n\n.page-topbar ul {\n    margin: 0px;\n    padding: 0px;\n}\n\n.page-topbar ul li {\n    list-style-type: none;    \n}\n\n.page-topbar .user-info li a {\n    display: inline-block;\n    font-size: 20px;\n    padding: 12px 20px;\n    color: #fff;\n    font-family: 'Comfortaa';\n    font-weight: 400;\n     position:relative;\n}\n\n.page-topbar .user-notify li a {\n    display: inline-block;\n    font-size: 16px;\n    padding: 22px 14px;\n    color: #fff;\n    font-family: 'Comfortaa';\n    font-weight: 400;\n     position:relative;\n}\n\n.page-topbar .quick-area .info-menu {\n    height: 60px;\n    margin: 0;\n    line-height: 50px;\n    padding: 0 15px;\n    display: flex;\n}\n\n.info-menu li{\n   \n}\n\n.page-topbar .badge {\n    display: inline-block;\n    min-width: 10px;\n    position: absolute;\n    padding: 3px 6px;\n    font-size: 10px;\n    font-weight: bold;\n    line-height: 1;\n    color: #fff;\n    text-align: center;\n    white-space: nowrap;\n    vertical-align: middle;\n    background-color: #F44336;\n    border-radius: 10px;\n    top: 8px;\n   right: 12px;\n}\n\nli.profile img {\n    height: 30px;\n    width: 30px;\n    top: 0px;\n    right: 10px;\n    position: relative;\n    background-color: #999999;\n}\n\n/* Ripple magic */\n\n.page-topbar button:focus {\n     outline: none;\n}\n\n.page-topbar button {\n    border: none;\n    width: 50px;\n    cursor: pointer;\n    height: 50px;\n    color: white;\n    padding: 11px 15px;\n    font-size: 21px;\n    border-radius: 100%;\n    background: transparent;\n    margin-top: 5px;\n    position: relative;\n    float: left;\n}\n\n.page-topbar button{\n     position: relative;\n     overflow: hidden;\n}\n\n.page-topbar button:after {\n     content: '';\n     position: absolute;\n     top: 50%;\n     left: 50%;\n     width: 5px;\n     height: 5px;\n     background: rgba(255, 255, 255, .5);\n     opacity: 0;\n     border-radius: 100%;\n     transform: scale(1, 1) translate(-50%);\n     transform-origin: 50% 50%;\n}\n\n@-webkit-keyframes ripple {\n     0% {\n         transform: scale(0, 0);\n         opacity: 1;\n    }\n     20% {\n         transform: scale(25, 25);\n         opacity: 1;\n    }\n     100% {\n         opacity: 0;\n         transform: scale(40, 40);\n    }\n}\n\n@keyframes ripple {\n     0% {\n         transform: scale(0, 0);\n         opacity: 1;\n    }\n     20% {\n         transform: scale(25, 25);\n         opacity: 1;\n    }\n     100% {\n         opacity: 0;\n         transform: scale(40, 40);\n    }\n}\n\n.page-topbar button:focus:not(:active)::after {\n     -webkit-animation: ripple 1s ease-out;\n             animation: ripple 1s ease-out;\n}\n\n.page-topbar li .dropdown-menu.profile {\n    max-width: 180px;\n    height: auto;\n    padding: 0px;\n}\n\n.dropdown-menu {\n    width: 360px;\n    border-radius: 0px;\n    -o-border-radius: 0px;\n    -ms-border-radius: 0px;\n    -moz-border-radius: 0px;\n    -webkit-border-radius: 0px;\n    line-height: 23px;\n    font-size: 14px;\n    padding-bottom: 0px;\n    border: 0px solid transparent;\n    box-shadow: 0 0 20px 0 rgba(33,33,33,.2);\n    -webkit-box-shadow: 0 0 20px 0 rgba(33,33,33,.2);\n    -moz-box-shadow: 0 0 20px 0 rgba(33,33,33,.2);\n    -o-box-shadow: 0 0 20px 0 rgba(33,33,33,.2);\n    -ms-box-shadow: 0 0 20px 0 rgba(33,33,33,.2);\n    margin-top: -1px;\n    padding-top: 0px;\n}\n\n.page-topbar .dropdown-menu {\n    background: #ffffff;\n    border: 1px solid #f5f5f5;\n}\n\n.page-topbar li .dropdown-menu.profile li {\n    line-height: 40px;\n    display: block;\n    height: 40px;\n    margin: 0px;\n}\n\n.page-topbar li .dropdown-menu.profile li a {\n    display: block;\n    border-bottom: 1px solid #eeeeee;\n    padding: 12px 8px;\n}\n\n.page-topbar .dropdown-menu:after, .page-topbar .dropdown-menu:before {\n    bottom: 100%;\n    left: 22px;\n    border: solid transparent;\n    content: \" \";\n    height: 0;\n    width: 0;\n    position: absolute;\n    pointer-events: none;\n}\n\n.page-topbar .dropdown-menu:before {\n    border-color: rgba(194, 225, 245, 0);\n    border-bottom-color: rgba(80, 80, 80, .1);\n    border-width: 10px;\n    margin-left: -10px;\n}\n\n.page-topbar li .dropdown-menu li a {\n    text-decoration: none;\n    color: #717171;\n}\n\n/*//////////////////////////SIDE BAR NAVE//////////////////////////*/\n\n.page-sidebar {\n    height: auto;\n    width: 260px;\n    position: fixed;\n    padding: 0px;\n    background-color: #ffffff;\n    margin-top: 60px;\n    overflow: hidden;\n    box-shadow: 0 0 10px 0 rgba(33,33,33,.2);\n    -webkit-box-shadow: 0 0 10px 0 rgba(33,33,33,.2);\n    -moz-box-shadow: 0 0 10px 0 rgba(33,33,33,.2);\n    -o-box-shadow: 0 0 10px 0 rgba(33,33,33,.2);\n    -ms-box-shadow: 0 0 10px 0 rgba(33,33,33,.2);\n    min-height: 100%;\n    height: auto;\n}\n\n.page-sidebar.fixedscroll {\n    position: fixed;\n}\n\n.page-sidebar.collapseit {\n    width: 60px;\n    margin-left: 0px !important;\n    z-index: 99;\n}\n\n.page-sidebar .profile-info {\n    background: transparent;\n    padding-top: 15px;\n    padding-bottom: 10px;\n    padding-left: 20px;\n    padding-right: 15px;\n    display: flex;\n}\n\n.page-sidebar .profile-image {\n    padding-right: 5px;\n    display: inline-block;\n}\n\n.profile-info .profile-image img {\n    height: 65px;\n    width: 65px;\n    float: right;\n    top: 5px;\n    left: 5px;\n    position: relative;    \n}\n\n.short-profile img {\n    height: 45px !important;\n    width: 45px !important; \n    left: 2px !important;\n}\n\n.short-profile .profile-details{\n    display: none;\n}\n\n.profile-info .profile-details h3 {\n    margin: 19px 0px 6px 14px;\n}\n\n.profile-info .profile-details .profile-title {\n    color: rgba(174, 178, 183, 1.0);\n    font-size: 13px;\n    margin: 0px 0px 6px 14px;\n}\n\n#main-menu-wrapper ul {\n    padding: 0px;\n    margin: 0px;\n    padding-left: 0px;\n    list-style-type: none;\n    font-family: 'Comfortaa';\n    font-weight: 400;\n    font-size: 14px;\n}\n\n#main-menu-wrapper .menusection {    \n    font-weight: 400;\n    font-size: 13px;\n    line-height: 40px;\n    padding-left: 24px;\n    margin: 10px 0 0px 0;\n    color: #9e9e9e;\n    text-transform: uppercase;\n}\n\n.profile-info .profile-details h3 a {    \n    font-weight: 400;\n    color: #757575;\n    font-size: 19px;\n    line-height: 23px;\n    text-decoration: none;\n}\n\n#main-menu-wrapper li a {\n    display: block;\n    line-height: 42px;\n    min-height: 42px;\n    height: auto;\n    color: #424242;\n    text-decoration: none;\n/*    padding: 14px 0px;*/\n    padding-left: 5px;\n    clear: both;\n    border-left: 4px solid transparent;\n    white-space: nowrap;\n/*    font-size: 18px;*/\n}\n\n#main-menu-wrapper .fa {\n    font-size: 14px;\n}\n\n#main-menu-wrapper li a i {\n    display: inline-block;\n    width: 40px;\n    height: 34px;\n    line-height: 34px;\n    text-align: center;\n    top: 0px;\n    position: relative;\n}\n\n#main-menu-wrapper li a:hover {\n    background-color: rgba(33, 33, 33, 0.1);\n    border-left: 4px solid #35395c;    \n}\n\n/*MAIN CONTENT/////////////////////////////////////////////////////////////*/\n\n#main-content {\n    margin-left: 260px;\n    display: block;\n}\n\n#main-content.sidebar_shift {\n    margin-left: 60px;\n    margin-right: 0px;\n}\n\n.main-wrapper {\n    margin-top: 60px;\n    display: inline-block;\n    width: 100%;\n    padding: 15px 15px 0 15px;\n    margin-left: 0px;\n    margin-right: 0px;\n}\n\nsection.box {\n    background-color: #ffffff;\n    margin: 15px 0;\n    min-height: 350px;\n    box-shadow: 0 1px 3px rgba(33,33,33,.2);\n    -webkit-box-shadow: 0 1px 3px rgba(33,33,33,.2);\n    -moz-box-shadow: 0 1px 3px rgba(33,33,33,.2);\n    -o-box-shadow: 0 1px 3px rgba(33,33,33,.2);\n    -ms-box-shadow: 0 1px 3px rgba(33,33,33,.2);\n}\n\n.crop {\n   border-radius: 100%;\n    line-height: 2em;\n    padding: 0em;\n    text-align: center;\n    margin: 0em;\n    width: 2em;\n    height: 2em;\n    float: left;\n    text-transform: uppercase;\n  }\n\n.about {\n    float: left;\n    padding-left: 0.4em;\n  }\n\n.online,\n  .offline,\n  .me,\n  .warning {\n    margin-right: 3px;\n    font-size: 0.8em;\n  }\n\n.online {\n    color: #86BB71;\n  }\n\n.offline {\n    color: #E38968;\n  }\n\n.me {\n    color: #94C2ED;\n  }\n\n.warning {\n    color: #00c8e7;\n  }\n\n.status {\n    color: #92959E;\n  }\n\n.name {\n    float: left;\n  }\n\n.page-topbar .badge {\n    display: inline-block;\n    min-width: 10px;\n    position: absolute;\n    padding: 3px 6px;\n    font-size: 10px;\n    font-weight: bold;\n    line-height: 1;\n    color: #fff;\n    text-align: center;\n    white-space: nowrap;\n    vertical-align: middle;\n    background-color: #F44336;\n    border-radius: 10px;\n    top: 8px;\n   right: 12px;\n}\n\n  \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbm90aWZpY2F0aW9uL25vdGlmaWNhdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLFFBQVE7SUFDUixpQkFBaUI7SUFDakIsU0FBUztJQUNULHVDQUF1QztJQUN2QywrQ0FBK0M7SUFDL0MsNENBQTRDO0lBQzVDLDBDQUEwQztJQUMxQywyQ0FBMkM7SUFDM0MsZ0JBQWdCO0FBQ3BCOztBQUVBLHVDQUF1Qzs7QUFDdkM7SUFJSSxpQkFBaUI7QUFDckI7O0FBRUE7O0lBRUksNEJBQTRCO0FBQ2hDOztBQUNBO0lBQ0ksWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxpQkFBaUI7QUFDckI7O0FBRUE7O0lBRUksdUNBQXVDO0FBQzNDOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLFdBQVc7QUFDZjs7QUFDQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUNBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLHdCQUF3QjtJQUN4QixnQkFBZ0I7S0FDZixpQkFBaUI7QUFDdEI7O0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsd0JBQXdCO0lBQ3hCLGdCQUFnQjtLQUNmLGlCQUFpQjtBQUN0Qjs7QUFDQTtJQUNJLFlBQVk7SUFDWixTQUFTO0lBQ1QsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixhQUFhO0FBQ2pCOztBQUVBOztBQUVBOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixp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V0FBVztJQUNYLHlCQUF5QjtJQUN6QixnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCOztBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsdUNBQXVDO0lBQ3ZDLCtDQUErQztJQUMvQyw0Q0FBNEM7SUFDNUMsMENBQTBDO0lBQzFDLDJDQUEyQztBQUMvQzs7QUFJQTtHQUNHLG1CQUFtQjtJQUNsQixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsVUFBVTtJQUNWLFdBQVc7SUFDWCxXQUFXO0lBQ1gseUJBQXlCO0VBQzNCOztBQUVBO0lBQ0UsV0FBVztJQUNYLG1CQUFtQjtFQUNyQjs7QUFFQTs7OztJQUlFLGlCQUFpQjtJQUNqQixnQkFBZ0I7RUFDbEI7O0FBRUE7SUFDRSxjQUFjO0VBQ2hCOztBQUVBO0lBQ0UsY0FBYztFQUNoQjs7QUFFQTtJQUNFLGNBQWM7RUFDaEI7O0FBRUE7SUFDRSxjQUFjO0VBQ2hCOztBQUVBO0lBQ0UsY0FBYztFQUNoQjs7QUFFQTtJQUNFLFdBQVc7RUFDYjs7QUFHRjtJQUNJLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQixRQUFRO0dBQ1QsV0FBVztBQUNkIiwiZmlsZSI6InNyYy9hcHAvbm90aWZpY2F0aW9uL25vdGlmaWNhdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhZ2UtdG9wYmFyIHtcbiAgICBtaW4taGVpZ2h0OiA2MHB4O1xuICAgIC8qcG9zaXRpb246IGZpeGVkOyovXG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA3NDdBNjtcbiAgICB0b3A6IDBweDtcbiAgICAvKnotaW5kZXg6MTAwMDA7Ki9cbiAgICBsZWZ0OiAwcHg7XG4gICAgYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMzMsMzMsMzMsLjIpO1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMzMsMzMsMzMsLjIpO1xuICAgIC1tb3otYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMzMsMzMsMzMsLjIpO1xuICAgIC1vLWJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKDMzLDMzLDMzLC4yKTtcbiAgICAtbXMtYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMzMsMzMsMzMsLjIpO1xuICAgIG1heC1oZWlnaHQ6IDYwcHg7XG59XG5cbi8qVHJhbnNpdGlvbj09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbi5wYWdlLXRvcGJhciwgLmxvZ28tYXJlYSwgLmxvZ28tYXJlYSwgI21haW4tY29udGVudCwgLmxvZ28taWNvbiwgLndyYXBsaXN0LCAucGFnZS1zaWRlYmFyLCAucHJvZmlsZS1pbmZvLCAucHJvZmlsZS1pbWFnZSwgLnByb2ZpbGUtZGV0YWlscywgLm1lbnUtdGl0bGUsIC5wcm9maWxlLWltYWdlIGEgaW1nIHtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IDYwMG1zO1xuICAgIC1tb3otdHJhbnNpdGlvbjogNjAwbXM7XG4gICAgLW8tdHJhbnNpdGlvbjogNjAwbXM7XG4gICAgdHJhbnNpdGlvbjogNjAwbXM7XG59XG5cbi5wYWdlLXRvcGJhciAubG9nby1hcmVhIHtcbiAgIFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG59XG4ucGFnZS10b3BiYXIgLmxvZ28tYXJlYSB7XG4gICAgd2lkdGg6IDI0MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwNzQ3QTY7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWluLWhlaWdodDogNjBweDtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBtYXJnaW4tbGVmdDogMjdweDtcbn1cblxuLnBhZ2UtdG9wYmFyIC5sb2dvLWljb257XG4gICAgXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdCAhaW1wb3J0YW50O1xufVxuXG4ucGFnZS10b3BiYXIgLmxvZ28taWNvbiB7XG4gICAgd2lkdGg6IDEwMHB4ICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM1Mzk1YztcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtaW4taGVpZ2h0OiA2MHB4O1xuICAgIGZsb2F0OiBsZWZ0O1xufVxuLnBhZ2UtdG9wYmFyIHVsIHtcbiAgICBtYXJnaW46IDBweDtcbiAgICBwYWRkaW5nOiAwcHg7XG59XG4ucGFnZS10b3BiYXIgdWwgbGkge1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTsgICAgXG59XG4ucGFnZS10b3BiYXIgLnVzZXItaW5mbyBsaSBhIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIHBhZGRpbmc6IDEycHggMjBweDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LWZhbWlseTogJ0NvbWZvcnRhYSc7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgcG9zaXRpb246cmVsYXRpdmU7XG59XG4ucGFnZS10b3BiYXIgLnVzZXItbm90aWZ5IGxpIGEge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgcGFkZGluZzogMjJweCAxNHB4O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtZmFtaWx5OiAnQ29tZm9ydGFhJztcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcbn1cbi5wYWdlLXRvcGJhciAucXVpY2stYXJlYSAuaW5mby1tZW51IHtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gICAgbWFyZ2luOiAwO1xuICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xuICAgIHBhZGRpbmc6IDAgMTVweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uaW5mby1tZW51IGxpe1xuICAgXG59XG5cbi5wYWdlLXRvcGJhciAuYmFkZ2Uge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBtaW4td2lkdGg6IDEwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHBhZGRpbmc6IDNweCA2cHg7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y0NDMzNjtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIHRvcDogOHB4O1xuICAgcmlnaHQ6IDEycHg7XG59XG5saS5wcm9maWxlIGltZyB7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIHRvcDogMHB4O1xuICAgIHJpZ2h0OiAxMHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTk5OTk5O1xufVxuXG4vKiBSaXBwbGUgbWFnaWMgKi9cbi5wYWdlLXRvcGJhciBidXR0b246Zm9jdXMge1xuICAgICBvdXRsaW5lOiBub25lO1xufVxuIC5wYWdlLXRvcGJhciBidXR0b24ge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICB3aWR0aDogNTBweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiAxMXB4IDE1cHg7XG4gICAgZm9udC1zaXplOiAyMXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBmbG9hdDogbGVmdDtcbn1cbiAucGFnZS10b3BiYXIgYnV0dG9ue1xuICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG4gLnBhZ2UtdG9wYmFyIGJ1dHRvbjphZnRlciB7XG4gICAgIGNvbnRlbnQ6ICcnO1xuICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgIHRvcDogNTAlO1xuICAgICBsZWZ0OiA1MCU7XG4gICAgIHdpZHRoOiA1cHg7XG4gICAgIGhlaWdodDogNXB4O1xuICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC41KTtcbiAgICAgb3BhY2l0eTogMDtcbiAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAxKSB0cmFuc2xhdGUoLTUwJSk7XG4gICAgIHRyYW5zZm9ybS1vcmlnaW46IDUwJSA1MCU7XG59XG4gQGtleWZyYW1lcyByaXBwbGUge1xuICAgICAwJSB7XG4gICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAsIDApO1xuICAgICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG4gICAgIDIwJSB7XG4gICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDI1LCAyNSk7XG4gICAgICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiAgICAgMTAwJSB7XG4gICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSg0MCwgNDApO1xuICAgIH1cbn1cbiAucGFnZS10b3BiYXIgYnV0dG9uOmZvY3VzOm5vdCg6YWN0aXZlKTo6YWZ0ZXIge1xuICAgICBhbmltYXRpb246IHJpcHBsZSAxcyBlYXNlLW91dDtcbn1cbi5wYWdlLXRvcGJhciBsaSAuZHJvcGRvd24tbWVudS5wcm9maWxlIHtcbiAgICBtYXgtd2lkdGg6IDE4MHB4O1xuICAgIGhlaWdodDogYXV0bztcbiAgICBwYWRkaW5nOiAwcHg7XG59XG4uZHJvcGRvd24tbWVudSB7XG4gICAgd2lkdGg6IDM2MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgICAtby1ib3JkZXItcmFkaXVzOiAwcHg7XG4gICAgLW1zLWJvcmRlci1yYWRpdXM6IDBweDtcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6IDBweDtcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDBweDtcbiAgICBsaW5lLWhlaWdodDogMjNweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgcGFkZGluZy1ib3R0b206IDBweDtcbiAgICBib3JkZXI6IDBweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBib3gtc2hhZG93OiAwIDAgMjBweCAwIHJnYmEoMzMsMzMsMzMsLjIpO1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDIwcHggMCByZ2JhKDMzLDMzLDMzLC4yKTtcbiAgICAtbW96LWJveC1zaGFkb3c6IDAgMCAyMHB4IDAgcmdiYSgzMywzMywzMywuMik7XG4gICAgLW8tYm94LXNoYWRvdzogMCAwIDIwcHggMCByZ2JhKDMzLDMzLDMzLC4yKTtcbiAgICAtbXMtYm94LXNoYWRvdzogMCAwIDIwcHggMCByZ2JhKDMzLDMzLDMzLC4yKTtcbiAgICBtYXJnaW4tdG9wOiAtMXB4O1xuICAgIHBhZGRpbmctdG9wOiAwcHg7XG59XG4ucGFnZS10b3BiYXIgLmRyb3Bkb3duLW1lbnUge1xuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2Y1ZjVmNTtcbn1cbi5wYWdlLXRvcGJhciBsaSAuZHJvcGRvd24tbWVudS5wcm9maWxlIGxpIHtcbiAgICBsaW5lLWhlaWdodDogNDBweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgbWFyZ2luOiAwcHg7XG59XG4ucGFnZS10b3BiYXIgbGkgLmRyb3Bkb3duLW1lbnUucHJvZmlsZSBsaSBhIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VlZWVlZTtcbiAgICBwYWRkaW5nOiAxMnB4IDhweDtcbn1cblxuLnBhZ2UtdG9wYmFyIC5kcm9wZG93bi1tZW51OmFmdGVyLCAucGFnZS10b3BiYXIgLmRyb3Bkb3duLW1lbnU6YmVmb3JlIHtcbiAgICBib3R0b206IDEwMCU7XG4gICAgbGVmdDogMjJweDtcbiAgICBib3JkZXI6IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGNvbnRlbnQ6IFwiIFwiO1xuICAgIGhlaWdodDogMDtcbiAgICB3aWR0aDogMDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG4ucGFnZS10b3BiYXIgLmRyb3Bkb3duLW1lbnU6YmVmb3JlIHtcbiAgICBib3JkZXItY29sb3I6IHJnYmEoMTk0LCAyMjUsIDI0NSwgMCk7XG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogcmdiYSg4MCwgODAsIDgwLCAuMSk7XG4gICAgYm9yZGVyLXdpZHRoOiAxMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAtMTBweDtcbn1cbi5wYWdlLXRvcGJhciBsaSAuZHJvcGRvd24tbWVudSBsaSBhIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6ICM3MTcxNzE7XG59XG5cblxuLyovLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1NJREUgQkFSIE5BVkUvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyovXG5cbi5wYWdlLXNpZGViYXIge1xuICAgIGhlaWdodDogYXV0bztcbiAgICB3aWR0aDogMjYwcHg7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICAgIG1hcmdpbi10b3A6IDYwcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCAwIHJnYmEoMzMsMzMsMzMsLjIpO1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDEwcHggMCByZ2JhKDMzLDMzLDMzLC4yKTtcbiAgICAtbW96LWJveC1zaGFkb3c6IDAgMCAxMHB4IDAgcmdiYSgzMywzMywzMywuMik7XG4gICAgLW8tYm94LXNoYWRvdzogMCAwIDEwcHggMCByZ2JhKDMzLDMzLDMzLC4yKTtcbiAgICAtbXMtYm94LXNoYWRvdzogMCAwIDEwcHggMCByZ2JhKDMzLDMzLDMzLC4yKTtcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xuICAgIGhlaWdodDogYXV0bztcbn1cbi5wYWdlLXNpZGViYXIuZml4ZWRzY3JvbGwge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbn1cbi5wYWdlLXNpZGViYXIuY29sbGFwc2VpdCB7XG4gICAgd2lkdGg6IDYwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xuICAgIHotaW5kZXg6IDk5O1xufVxuLnBhZ2Utc2lkZWJhciAucHJvZmlsZS1pbmZvIHtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBwYWRkaW5nLXRvcDogMTVweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgcGFkZGluZy1yaWdodDogMTVweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuLnBhZ2Utc2lkZWJhciAucHJvZmlsZS1pbWFnZSB7XG4gICAgcGFkZGluZy1yaWdodDogNXB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbi5wcm9maWxlLWluZm8gLnByb2ZpbGUtaW1hZ2UgaW1nIHtcbiAgICBoZWlnaHQ6IDY1cHg7XG4gICAgd2lkdGg6IDY1cHg7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIHRvcDogNXB4O1xuICAgIGxlZnQ6IDVweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7ICAgIFxufVxuLnNob3J0LXByb2ZpbGUgaW1nIHtcbiAgICBoZWlnaHQ6IDQ1cHggIWltcG9ydGFudDtcbiAgICB3aWR0aDogNDVweCAhaW1wb3J0YW50OyBcbiAgICBsZWZ0OiAycHggIWltcG9ydGFudDtcbn1cbi5zaG9ydC1wcm9maWxlIC5wcm9maWxlLWRldGFpbHN7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cbi5wcm9maWxlLWluZm8gLnByb2ZpbGUtZGV0YWlscyBoMyB7XG4gICAgbWFyZ2luOiAxOXB4IDBweCA2cHggMTRweDtcbn1cbi5wcm9maWxlLWluZm8gLnByb2ZpbGUtZGV0YWlscyAucHJvZmlsZS10aXRsZSB7XG4gICAgY29sb3I6IHJnYmEoMTc0LCAxNzgsIDE4MywgMS4wKTtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgbWFyZ2luOiAwcHggMHB4IDZweCAxNHB4O1xufVxuI21haW4tbWVudS13cmFwcGVyIHVsIHtcbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgcGFkZGluZy1sZWZ0OiAwcHg7XG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgIGZvbnQtZmFtaWx5OiAnQ29tZm9ydGFhJztcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbn1cbiNtYWluLW1lbnUtd3JhcHBlciAubWVudXNlY3Rpb24geyAgICBcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBsaW5lLWhlaWdodDogNDBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDI0cHg7XG4gICAgbWFyZ2luOiAxMHB4IDAgMHB4IDA7XG4gICAgY29sb3I6ICM5ZTllOWU7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cbi5wcm9maWxlLWluZm8gLnByb2ZpbGUtZGV0YWlscyBoMyBhIHsgICAgXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBjb2xvcjogIzc1NzU3NTtcbiAgICBmb250LXNpemU6IDE5cHg7XG4gICAgbGluZS1oZWlnaHQ6IDIzcHg7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuI21haW4tbWVudS13cmFwcGVyIGxpIGEge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGxpbmUtaGVpZ2h0OiA0MnB4O1xuICAgIG1pbi1oZWlnaHQ6IDQycHg7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIGNvbG9yOiAjNDI0MjQyO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbi8qICAgIHBhZGRpbmc6IDE0cHggMHB4OyovXG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gICAgY2xlYXI6IGJvdGg7XG4gICAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuLyogICAgZm9udC1zaXplOiAxOHB4OyovXG59XG4jbWFpbi1tZW51LXdyYXBwZXIgLmZhIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG59XG4jbWFpbi1tZW51LXdyYXBwZXIgbGkgYSBpIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgaGVpZ2h0OiAzNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAzNHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB0b3A6IDBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4jbWFpbi1tZW51LXdyYXBwZXIgbGkgYTpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzMywgMzMsIDMzLCAwLjEpO1xuICAgIGJvcmRlci1sZWZ0OiA0cHggc29saWQgIzM1Mzk1YzsgICAgXG59XG5cblxuXG4vKk1BSU4gQ09OVEVOVC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8qL1xuXG4jbWFpbi1jb250ZW50IHtcbiAgICBtYXJnaW4tbGVmdDogMjYwcHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG4jbWFpbi1jb250ZW50LnNpZGViYXJfc2hpZnQge1xuICAgIG1hcmdpbi1sZWZ0OiA2MHB4O1xuICAgIG1hcmdpbi1yaWdodDogMHB4O1xufVxuLm1haW4td3JhcHBlciB7XG4gICAgbWFyZ2luLXRvcDogNjBweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMTVweCAxNXB4IDAgMTVweDtcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xuICAgIG1hcmdpbi1yaWdodDogMHB4O1xufVxuc2VjdGlvbi5ib3gge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgbWFyZ2luOiAxNXB4IDA7XG4gICAgbWluLWhlaWdodDogMzUwcHg7XG4gICAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMzMsMzMsMzMsLjIpO1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMzMsMzMsMzMsLjIpO1xuICAgIC1tb3otYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMzMsMzMsMzMsLjIpO1xuICAgIC1vLWJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDMzLDMzLDMzLC4yKTtcbiAgICAtbXMtYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMzMsMzMsMzMsLjIpO1xufVxuXG5cblxuLmNyb3Age1xuICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICBsaW5lLWhlaWdodDogMmVtO1xuICAgIHBhZGRpbmc6IDBlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAwZW07XG4gICAgd2lkdGg6IDJlbTtcbiAgICBoZWlnaHQ6IDJlbTtcbiAgICBmbG9hdDogbGVmdDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB9XG4gIFxuICAuYWJvdXQge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHBhZGRpbmctbGVmdDogMC40ZW07XG4gIH1cbiAgXG4gIC5vbmxpbmUsXG4gIC5vZmZsaW5lLFxuICAubWUsXG4gIC53YXJuaW5nIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDNweDtcbiAgICBmb250LXNpemU6IDAuOGVtO1xuICB9XG4gIFxuICAub25saW5lIHtcbiAgICBjb2xvcjogIzg2QkI3MTtcbiAgfVxuICBcbiAgLm9mZmxpbmUge1xuICAgIGNvbG9yOiAjRTM4OTY4O1xuICB9XG4gIFxuICAubWUge1xuICAgIGNvbG9yOiAjOTRDMkVEO1xuICB9XG4gIFxuICAud2FybmluZyB7XG4gICAgY29sb3I6ICMwMGM4ZTc7XG4gIH1cbiAgXG4gIC5zdGF0dXMge1xuICAgIGNvbG9yOiAjOTI5NTlFO1xuICB9XG4gIFxuICAubmFtZSB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gIH1cblxuXG4ucGFnZS10b3BiYXIgLmJhZGdlIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWluLXdpZHRoOiAxMHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBwYWRkaW5nOiAzcHggNnB4O1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBsaW5lLWhlaWdodDogMTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGNDQzMzY7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICB0b3A6IDhweDtcbiAgIHJpZ2h0OiAxMnB4O1xufVxuXG4gICJdfQ== */");

/***/ }),

/***/ "./src/app/notification/notification.component.ts":
/*!********************************************************!*\
  !*** ./src/app/notification/notification.component.ts ***!
  \********************************************************/
/*! exports provided: NotificationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationComponent", function() { return NotificationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_issue_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/issue.service */ "./src/app/issue.service.ts");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_app_user_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/user/user.service */ "./src/app/user/user.service.ts");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng6-toastr-notifications */ "./node_modules/ng6-toastr-notifications/fesm2015/ng6-toastr-notifications.js");
/* harmony import */ var ng2_cookies__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-cookies */ "./node_modules/ng2-cookies/index.js");
/* harmony import */ var ng2_cookies__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies__WEBPACK_IMPORTED_MODULE_7__);








let NotificationComponent = class NotificationComponent {
    constructor(router, toastr, userService, issueService) {
        this.router = router;
        this.toastr = toastr;
        this.userService = userService;
        this.issueService = issueService;
        this.logout = () => {
            this.userService.logout().subscribe(apiResponse => {
                if (apiResponse.status === 200) {
                    ng2_cookies__WEBPACK_IMPORTED_MODULE_7__["Cookie"].delete('authtoken');
                    ng2_cookies__WEBPACK_IMPORTED_MODULE_7__["Cookie"].delete('receiverId');
                    ng2_cookies__WEBPACK_IMPORTED_MODULE_7__["Cookie"].delete('receiverName');
                    this.router.navigate(['/login']);
                }
                else {
                    this.toastr.errorToastr(apiResponse.message);
                }
            }, err => {
                this.toastr.errorToastr('some error occured');
            });
        };
    }
    ngOnInit() {
        this.totalNotification();
        console.log('vidya');
        this.issueService.getAllNotification().subscribe(data => {
            if (data.data != null) {
                this.notification = data.data;
                console.log(this.notification);
            }
            else {
            }
        }, err => {
            console.log('some error occured');
            console.error(err);
        });
    }
    totalNotification() {
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_4__('http://localhost:3000');
        this.socket.emit('comment');
        this.socket.on('notification', data => {
            this.totalNotify = data.total_notify;
        });
    }
    backToHome() {
        this.router.navigate(['/dashboard']);
    }
    goToDashboard(issueId, notify) {
        console.log(issueId);
        this.router.navigate(['/comments', issueId, notify]);
    }
};
NotificationComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_6__["ToastrManager"] },
    { type: src_app_user_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] },
    { type: src_app_issue_service__WEBPACK_IMPORTED_MODULE_3__["IssueService"] }
];
NotificationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-notification',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./notification.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/notification/notification.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./notification.component.css */ "./src/app/notification/notification.component.css")).default]
    })
], NotificationComponent);



/***/ }),

/***/ "./src/app/notification/notification.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/notification/notification.module.ts ***!
  \*****************************************************/
/*! exports provided: NotificationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationModule", function() { return NotificationModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var src_app_shared_material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/material.module */ "./src/app/shared/material.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_app_notification_notification_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/notification/notification.component */ "./src/app/notification/notification.component.ts");







let NotificationModule = class NotificationModule {
};
NotificationModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [src_app_notification_notification_component__WEBPACK_IMPORTED_MODULE_6__["NotificationComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            src_app_shared_material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
        ],
        exports: [src_app_notification_notification_component__WEBPACK_IMPORTED_MODULE_6__["NotificationComponent"]]
    })
], NotificationModule);



/***/ }),

/***/ "./src/app/shared/first-char/first-char.component.css":
/*!************************************************************!*\
  !*** ./src/app/shared/first-char/first-char.component.css ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".crop {\n    border-radius: 100%;\n    line-height: 1em;\n    padding: 1em;\n    text-align: center;\n    margin: 0em;\n    width: 3em;\n    height: 3em;\n    float: left;\n    text-transform: uppercase;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2ZpcnN0LWNoYXIvZmlyc3QtY2hhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxVQUFVO0lBQ1YsV0FBVztJQUNYLFdBQVc7SUFDWCx5QkFBeUI7RUFDM0IiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvZmlyc3QtY2hhci9maXJzdC1jaGFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3JvcCB7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICBsaW5lLWhlaWdodDogMWVtO1xuICAgIHBhZGRpbmc6IDFlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAwZW07XG4gICAgd2lkdGg6IDNlbTtcbiAgICBoZWlnaHQ6IDNlbTtcbiAgICBmbG9hdDogbGVmdDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB9Il19 */");

/***/ }),

/***/ "./src/app/shared/first-char/first-char.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/first-char/first-char.component.ts ***!
  \***********************************************************/
/*! exports provided: FirstCharComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirstCharComponent", function() { return FirstCharComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FirstCharComponent = class FirstCharComponent {
    constructor() {
        this._name = '';
        this.notify = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
        this._name = this.name;
        this.firstChar = this._name[0];
    } // end ngOnInit
    ngOnChanges(changes) {
        let name = changes.name;
        this._name = name.currentValue;
        this.firstChar = this._name[0];
    }
    nameClicked() {
        this.notify.emit(this._name);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], FirstCharComponent.prototype, "name", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], FirstCharComponent.prototype, "userBg", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], FirstCharComponent.prototype, "userColor", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], FirstCharComponent.prototype, "notify", void 0);
FirstCharComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-first-char',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./first-char.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/first-char/first-char.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./first-char.component.css */ "./src/app/shared/first-char/first-char.component.css")).default]
    })
], FirstCharComponent);



/***/ }),

/***/ "./src/app/shared/material.module.ts":
/*!*******************************************!*\
  !*** ./src/app/shared/material.module.ts ***!
  \*******************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm2015/card.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm2015/sort.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm2015/form-field.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm2015/progress-spinner.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm2015/toolbar.js");
/* harmony import */ var _first_char_first_char_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./first-char/first-char.component */ "./src/app/shared/first-char/first-char.component.ts");















let MaterialModule = class MaterialModule {
};
MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_first_char_first_char_component__WEBPACK_IMPORTED_MODULE_14__["FirstCharComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_6__["MatSortModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__["MatPaginatorModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBarModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__["MatProgressSpinnerModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__["MatToolbarModule"]
        ],
        exports: [
            _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_6__["MatSortModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__["MatPaginatorModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBarModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__["MatProgressSpinnerModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__["MatToolbarModule"],
            _first_char_first_char_component__WEBPACK_IMPORTED_MODULE_14__["FirstCharComponent"]
        ]
    })
], MaterialModule);



/***/ }),

/***/ "./src/app/shared/pipe/replace.pipe.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/pipe/replace.pipe.ts ***!
  \*********************************************/
/*! exports provided: ReplacePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReplacePipe", function() { return ReplacePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ReplacePipe = class ReplacePipe {
    transform(value, strToReplace, replacementStr) {
        if (!value || !strToReplace || !replacementStr) {
            return value;
        }
        return value.replace(new RegExp(strToReplace, 'g'), replacementStr);
    }
};
ReplacePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'replace'
    })
], ReplacePipe);



/***/ }),

/***/ "./src/app/user/login/login.component.css":
/*!************************************************!*\
  !*** ./src/app/user/login/login.component.css ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("html {\n  background-color: #56baed;\n}\n\nbody {\n  font-family: \"Poppins\", sans-serif;\n  height: 100vh;\n}\n\na {\n  color: #92badd;\n  display:inline-block;\n  text-decoration: none;\n  font-weight: 400;\n}\n\nh2 {\n  text-align: center;\n    font-size: 25px;\n    font-weight: 600;\n    text-transform: uppercase;\n    display: inline-block;\n    margin: 15px 8px 25px 8px;\n}\n\n/* STRUCTURE */\n\n.wrapper {\n  display: flex;\n  align-items: center;\n  flex-direction: column; \n  justify-content: center;\n  width: 100%;\n  min-height: 100%;\n  padding: 20px;\n  height: -webkit-fill-available;\n  /*background-color: #0747A6;*/\n}\n\n#formContent {\n  border-radius: 10px 10px 10px 10px;\n  background: #fff;\n  padding: 30px;\n  width: 90%;\n  max-width: 450px;\n  position: relative;\n  padding: 0px;\n  box-shadow: 0 30px 60px 0 rgba(0,0,0,0.3);\n  text-align: center;\n}\n\n#formFooter {\n  background-color: #f6f6f6;\n  border-top: 1px solid #dce8f1;\n  padding: 25px;\n  text-align: center;\n  border-radius: 0 0 10px 10px;\n}\n\n/* TABS */\n\nh2.inactive {\n  color: #cccccc;\n}\n\nh2.active {\n  color: #0d0d0d;\n  border-bottom: 2px solid #5fbae9;\n}\n\n/* FORM TYPOGRAPHY*/\n\ninput[type=button], input[type=submit], input[type=reset]  {\n  background-color: #56baed;\n  border: none;\n  color: white;\n  padding: 15px 80px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  text-transform: uppercase;\n  font-size: 13px;\n  box-shadow: 0 10px 30px 0 rgba(95,186,233,0.4);\n  border-radius: 5px 5px 5px 5px;\n  margin: 10px 20px 40px 20px;\n  transition: all 0.3s ease-in-out;\n}\n\ninput[type=button]:hover, input[type=submit]:hover, input[type=reset]:hover  {\n  background-color: #39ace7;\n}\n\ninput[type=button]:active, input[type=submit]:active, input[type=reset]:active  {\n  transform: scale(0.95);\n}\n\ninput[type=email] {\n  border: none;\n  color: #0d0d0d;\n  padding: 15px 32px;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 16px;\n  margin: 5px;\n  width: 85%;\n  border: 2px solid #f6f6f6;\n  transition: all 0.5s ease-in-out;\n  border-radius: 5px 5px 5px 5px;\n}\n\ninput[type=password] {\n  border: none;\n  color: #0d0d0d;\n  padding: 15px 32px;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 16px;\n  margin: 5px;\n  width: 85%;\n  border: 2px solid #f6f6f6;\n  transition: all 0.5s ease-in-out;\n  border-radius: 5px 5px 5px 5px;\n}\n\ninput[type=email]:focus {\n  background-color: #fff;\n  border-bottom: 2px solid #5fbae9;\n}\n\ninput[type=password]:focus {\n  background-color: #fff;\n  border-bottom: 2px solid #5fbae9;\n}\n\ninput[type=email]:placeholder {\n  color: #cccccc;\n}\n\ninput[type=password]:placeholder {\n  color: #cccccc;\n}\n\n.login-or {\n         position: relative;\n         color: #aaa;\n         margin-bottom: 10px;\n         padding-bottom: 10px;\n         }\n\n.span-or {\n         display: block;\n         position: absolute;\n         left: 50%;\n         top: -2px;\n         margin-left: -25px;\n         background-color: #fff;\n         width: 50px;\n         text-align: center;\n         }\n\n.hr-or {\n         height: 1px;\n         margin-top: 0px !important;\n         margin-bottom: 0px !important;\n         }\n\n/* ANIMATIONS */\n\n/* Simple CSS3 Fade-in-down Animation */\n\n.fadeInDown {\n  -webkit-animation-name: fadeInDown;\n  animation-name: fadeInDown;\n  -webkit-animation-duration: 1s;\n  animation-duration: 1s;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n\n@-webkit-keyframes fadeInDown {\n  0% {\n    opacity: 0;\n    transform: translate3d(0, -100%, 0);\n  }\n  100% {\n    opacity: 1;\n    transform: none;\n  }\n}\n\n@keyframes fadeInDown {\n  0% {\n    opacity: 0;\n    transform: translate3d(0, -100%, 0);\n  }\n  100% {\n    opacity: 1;\n    transform: none;\n  }\n}\n\n/* Simple CSS3 Fade-in Animation */\n\n@-webkit-keyframes fadeIn { from { opacity:0; } to { opacity:1; } }\n\n@keyframes fadeIn { from { opacity:0; } to { opacity:1; } }\n\n.fadeIn {\n  opacity:0;\n  -webkit-animation:fadeIn ease-in 1;\n  animation:fadeIn ease-in 1;\n\n  -webkit-animation-fill-mode:forwards;\n  animation-fill-mode:forwards;\n\n  -webkit-animation-duration:1s;\n  animation-duration:1s;\n}\n\n.fadeIn.first {\n  -webkit-animation-delay: 0.4s;\n  animation-delay: 0.4s;\n}\n\n.fadeIn.second {\n  -webkit-animation-delay: 0.6s;\n  animation-delay: 0.6s;\n}\n\n.fadeIn.third {\n  -webkit-animation-delay: 0.8s;\n  animation-delay: 0.8s;\n}\n\n.fadeIn.fourth {\n  -webkit-animation-delay: 1s;\n  animation-delay: 1s;\n  width: 86%;\n}\n\n/* Simple CSS3 Fade-in Animation */\n\n.underlineHover:after {\n  display: block;\n  left: 0;\n  bottom: -10px;\n  width: 0;\n  height: 2px;\n  background-color: #56baed;\n  content: \"\";\n  transition: width 0.2s;\n}\n\n.underlineHover:hover {\n  color: #0d0d0d;\n}\n\n.underlineHover:hover:after{\n  width: 100%;\n}\n\n/* OTHERS */\n\n*:focus {\n    outline: none;\n}\n\n#icon {\n  width:60%;\n}\n\n.btns{\n  background-color: #fff;\n    border: none;\n    color: #2f2f2f;\n    padding: 15px 80px;\n    text-align: center;\n    text-decoration: none;\n    display: inline-block;\n    text-transform: uppercase;\n    font-size: 13px;\n    box-shadow: 0 10px 30px 0 rgba(95,186,233,0.4);\n    border-radius: 5px 5px 5px 5px;\n    margin: 10px 20px 20px 20px;\n    transition: all 0.3s ease-in-out;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxvQkFBb0I7RUFDcEIscUJBQXFCO0VBQ3JCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtCQUFrQjtJQUNoQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6QixxQkFBcUI7SUFDckIseUJBQXlCO0FBQzdCOztBQUlBLGNBQWM7O0FBRWQ7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUVFLGtDQUFrQztFQUNsQyxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFFWix5Q0FBeUM7RUFDekMsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLDZCQUE2QjtFQUM3QixhQUFhO0VBQ2Isa0JBQWtCO0VBRWxCLDRCQUE0QjtBQUM5Qjs7QUFJQSxTQUFTOztBQUVUO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxnQ0FBZ0M7QUFDbEM7O0FBSUEsbUJBQW1COztBQUVuQjtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLHFCQUFxQjtFQUNyQix5QkFBeUI7RUFDekIsZUFBZTtFQUVmLDhDQUE4QztFQUU5Qyw4QkFBOEI7RUFDOUIsMkJBQTJCO0VBSzNCLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUtFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixxQkFBcUI7RUFDckIsZUFBZTtFQUNmLFdBQVc7RUFDWCxVQUFVO0VBQ1YseUJBQXlCO0VBS3pCLGdDQUFnQztFQUVoQyw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxZQUFZO0VBQ1osY0FBYztFQUNkLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixXQUFXO0VBQ1gsVUFBVTtFQUNWLHlCQUF5QjtFQUt6QixnQ0FBZ0M7RUFFaEMsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLGdDQUFnQztBQUNsQzs7QUFDQTtFQUNFLHNCQUFzQjtFQUN0QixnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUNBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtTQUNTLGtCQUFrQjtTQUNsQixXQUFXO1NBQ1gsbUJBQW1CO1NBQ25CLG9CQUFvQjtTQUNwQjs7QUFFVDtTQUNTLGNBQWM7U0FDZCxrQkFBa0I7U0FDbEIsU0FBUztTQUNULFNBQVM7U0FDVCxrQkFBa0I7U0FDbEIsc0JBQXNCO1NBQ3RCLFdBQVc7U0FDWCxrQkFBa0I7U0FDbEI7O0FBQ0E7U0FDQSxXQUFXO1NBQ1gsMEJBQTBCO1NBQzFCLDZCQUE2QjtTQUM3Qjs7QUFHVCxlQUFlOztBQUVmLHVDQUF1Qzs7QUFDdkM7RUFDRSxrQ0FBa0M7RUFDbEMsMEJBQTBCO0VBQzFCLDhCQUE4QjtFQUM5QixzQkFBc0I7RUFDdEIsaUNBQWlDO0VBQ2pDLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFO0lBQ0UsVUFBVTtJQUVWLG1DQUFtQztFQUNyQztFQUNBO0lBQ0UsVUFBVTtJQUVWLGVBQWU7RUFDakI7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsVUFBVTtJQUVWLG1DQUFtQztFQUNyQztFQUNBO0lBQ0UsVUFBVTtJQUVWLGVBQWU7RUFDakI7QUFDRjs7QUFFQSxrQ0FBa0M7O0FBQ2xDLDRCQUE0QixPQUFPLFNBQVMsRUFBRSxFQUFFLEtBQUssU0FBUyxFQUFFLEVBQUU7O0FBRWxFLG9CQUFvQixPQUFPLFNBQVMsRUFBRSxFQUFFLEtBQUssU0FBUyxFQUFFLEVBQUU7O0FBRTFEO0VBQ0UsU0FBUztFQUNULGtDQUFrQztFQUVsQywwQkFBMEI7O0VBRTFCLG9DQUFvQztFQUVwQyw0QkFBNEI7O0VBRTVCLDZCQUE2QjtFQUU3QixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSw2QkFBNkI7RUFFN0IscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsNkJBQTZCO0VBRTdCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLDZCQUE2QjtFQUU3QixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSwyQkFBMkI7RUFFM0IsbUJBQW1CO0VBQ25CLFVBQVU7QUFDWjs7QUFFQSxrQ0FBa0M7O0FBQ2xDO0VBQ0UsY0FBYztFQUNkLE9BQU87RUFDUCxhQUFhO0VBQ2IsUUFBUTtFQUNSLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsV0FBVztFQUNYLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBSUEsV0FBVzs7QUFFWDtJQUNJLGFBQWE7QUFDakI7O0FBRUE7RUFDRSxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxzQkFBc0I7SUFDcEIsWUFBWTtJQUNaLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixxQkFBcUI7SUFDckIseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZiw4Q0FBOEM7SUFDOUMsOEJBQThCO0lBQzlCLDJCQUEyQjtJQUMzQixnQ0FBZ0M7QUFDcEMiLCJmaWxlIjoic3JjL2FwcC91c2VyL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJodG1sIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU2YmFlZDtcbn1cblxuYm9keSB7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cblxuYSB7XG4gIGNvbG9yOiAjOTJiYWRkO1xuICBkaXNwbGF5OmlubGluZS1ibG9jaztcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG5oMiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDI1cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBtYXJnaW46IDE1cHggOHB4IDI1cHggOHB4O1xufVxuXG5cblxuLyogU1RSVUNUVVJFICovXG5cbi53cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgbWluLWhlaWdodDogMTAwJTtcbiAgcGFkZGluZzogMjBweDtcbiAgaGVpZ2h0OiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xuICAvKmJhY2tncm91bmQtY29sb3I6ICMwNzQ3QTY7Ki9cbn1cblxuI2Zvcm1Db250ZW50IHtcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMTBweCAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMTBweCAxMHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBwYWRkaW5nOiAzMHB4O1xuICB3aWR0aDogOTAlO1xuICBtYXgtd2lkdGg6IDQ1MHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmc6IDBweDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDMwcHggNjBweCAwIHJnYmEoMCwwLDAsMC4zKTtcbiAgYm94LXNoYWRvdzogMCAzMHB4IDYwcHggMCByZ2JhKDAsMCwwLDAuMyk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuI2Zvcm1Gb290ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmNmY2O1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2RjZThmMTtcbiAgcGFkZGluZzogMjVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDAgMCAxMHB4IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDAgMCAxMHB4IDEwcHg7XG59XG5cblxuXG4vKiBUQUJTICovXG5cbmgyLmluYWN0aXZlIHtcbiAgY29sb3I6ICNjY2NjY2M7XG59XG5cbmgyLmFjdGl2ZSB7XG4gIGNvbG9yOiAjMGQwZDBkO1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzVmYmFlOTtcbn1cblxuXG5cbi8qIEZPUk0gVFlQT0dSQVBIWSovXG5cbmlucHV0W3R5cGU9YnV0dG9uXSwgaW5wdXRbdHlwZT1zdWJtaXRdLCBpbnB1dFt0eXBlPXJlc2V0XSAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTZiYWVkO1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMTVweCA4MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXNpemU6IDEzcHg7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAxMHB4IDMwcHggMCByZ2JhKDk1LDE4NiwyMzMsMC40KTtcbiAgYm94LXNoYWRvdzogMCAxMHB4IDMwcHggMCByZ2JhKDk1LDE4NiwyMzMsMC40KTtcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1cHggNXB4IDVweCA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweCA1cHggNXB4IDVweDtcbiAgbWFyZ2luOiAxMHB4IDIwcHggNDBweCAyMHB4O1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xuICAtbXMtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbn1cblxuaW5wdXRbdHlwZT1idXR0b25dOmhvdmVyLCBpbnB1dFt0eXBlPXN1Ym1pdF06aG92ZXIsIGlucHV0W3R5cGU9cmVzZXRdOmhvdmVyICB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzOWFjZTc7XG59XG5cbmlucHV0W3R5cGU9YnV0dG9uXTphY3RpdmUsIGlucHV0W3R5cGU9c3VibWl0XTphY3RpdmUsIGlucHV0W3R5cGU9cmVzZXRdOmFjdGl2ZSAge1xuICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMC45NSk7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcbiAgLW8tdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMC45NSk7XG4gIHRyYW5zZm9ybTogc2NhbGUoMC45NSk7XG59XG5cbmlucHV0W3R5cGU9ZW1haWxdIHtcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogIzBkMGQwZDtcbiAgcGFkZGluZzogMTVweCAzMnB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiAxNnB4O1xuICBtYXJnaW46IDVweDtcbiAgd2lkdGg6IDg1JTtcbiAgYm9yZGVyOiAycHggc29saWQgI2Y2ZjZmNjtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbiAgLW1zLXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xuICAtby10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNXB4IDVweCA1cHggNXB4O1xuICBib3JkZXItcmFkaXVzOiA1cHggNXB4IDVweCA1cHg7XG59XG5cbmlucHV0W3R5cGU9cGFzc3dvcmRdIHtcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogIzBkMGQwZDtcbiAgcGFkZGluZzogMTVweCAzMnB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiAxNnB4O1xuICBtYXJnaW46IDVweDtcbiAgd2lkdGg6IDg1JTtcbiAgYm9yZGVyOiAycHggc29saWQgI2Y2ZjZmNjtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbiAgLW1zLXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xuICAtby10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNXB4IDVweCA1cHggNXB4O1xuICBib3JkZXItcmFkaXVzOiA1cHggNXB4IDVweCA1cHg7XG59XG5cbmlucHV0W3R5cGU9ZW1haWxdOmZvY3VzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICM1ZmJhZTk7XG59XG5pbnB1dFt0eXBlPXBhc3N3b3JkXTpmb2N1cyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjNWZiYWU5O1xufVxuXG5pbnB1dFt0eXBlPWVtYWlsXTpwbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjY2NjY2NjO1xufVxuaW5wdXRbdHlwZT1wYXNzd29yZF06cGxhY2Vob2xkZXIge1xuICBjb2xvcjogI2NjY2NjYztcbn1cblxuLmxvZ2luLW9yIHtcbiAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgIGNvbG9yOiAjYWFhO1xuICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgICAgICAgfVxuXG4uc3Bhbi1vciB7XG4gICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgIHRvcDogLTJweDtcbiAgICAgICAgIG1hcmdpbi1sZWZ0OiAtMjVweDtcbiAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgICB3aWR0aDogNTBweDtcbiAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgIH1cbiAgICAgICAgIC5oci1vciB7XG4gICAgICAgICBoZWlnaHQ6IDFweDtcbiAgICAgICAgIG1hcmdpbi10b3A6IDBweCAhaW1wb3J0YW50O1xuICAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICB9XG5cblxuLyogQU5JTUFUSU9OUyAqL1xuXG4vKiBTaW1wbGUgQ1NTMyBGYWRlLWluLWRvd24gQW5pbWF0aW9uICovXG4uZmFkZUluRG93biB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGZhZGVJbkRvd247XG4gIGFuaW1hdGlvbi1uYW1lOiBmYWRlSW5Eb3duO1xuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIGZhZGVJbkRvd24ge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTEwMCUsIDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTEwMCUsIDApO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IG5vbmU7XG4gICAgdHJhbnNmb3JtOiBub25lO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgZmFkZUluRG93biB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTAwJSwgMCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTAwJSwgMCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogbm9uZTtcbiAgICB0cmFuc2Zvcm06IG5vbmU7XG4gIH1cbn1cblxuLyogU2ltcGxlIENTUzMgRmFkZS1pbiBBbmltYXRpb24gKi9cbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlSW4geyBmcm9tIHsgb3BhY2l0eTowOyB9IHRvIHsgb3BhY2l0eToxOyB9IH1cbkAtbW96LWtleWZyYW1lcyBmYWRlSW4geyBmcm9tIHsgb3BhY2l0eTowOyB9IHRvIHsgb3BhY2l0eToxOyB9IH1cbkBrZXlmcmFtZXMgZmFkZUluIHsgZnJvbSB7IG9wYWNpdHk6MDsgfSB0byB7IG9wYWNpdHk6MTsgfSB9XG5cbi5mYWRlSW4ge1xuICBvcGFjaXR5OjA7XG4gIC13ZWJraXQtYW5pbWF0aW9uOmZhZGVJbiBlYXNlLWluIDE7XG4gIC1tb3otYW5pbWF0aW9uOmZhZGVJbiBlYXNlLWluIDE7XG4gIGFuaW1hdGlvbjpmYWRlSW4gZWFzZS1pbiAxO1xuXG4gIC13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTpmb3J3YXJkcztcbiAgLW1vei1hbmltYXRpb24tZmlsbC1tb2RlOmZvcndhcmRzO1xuICBhbmltYXRpb24tZmlsbC1tb2RlOmZvcndhcmRzO1xuXG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOjFzO1xuICAtbW96LWFuaW1hdGlvbi1kdXJhdGlvbjoxcztcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOjFzO1xufVxuXG4uZmFkZUluLmZpcnN0IHtcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDAuNHM7XG4gIC1tb3otYW5pbWF0aW9uLWRlbGF5OiAwLjRzO1xuICBhbmltYXRpb24tZGVsYXk6IDAuNHM7XG59XG5cbi5mYWRlSW4uc2Vjb25kIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDAuNnM7XG4gIC1tb3otYW5pbWF0aW9uLWRlbGF5OiAwLjZzO1xuICBhbmltYXRpb24tZGVsYXk6IDAuNnM7XG59XG5cbi5mYWRlSW4udGhpcmQge1xuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMC44cztcbiAgLW1vei1hbmltYXRpb24tZGVsYXk6IDAuOHM7XG4gIGFuaW1hdGlvbi1kZWxheTogMC44cztcbn1cblxuLmZhZGVJbi5mb3VydGgge1xuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMXM7XG4gIC1tb3otYW5pbWF0aW9uLWRlbGF5OiAxcztcbiAgYW5pbWF0aW9uLWRlbGF5OiAxcztcbiAgd2lkdGg6IDg2JTtcbn1cblxuLyogU2ltcGxlIENTUzMgRmFkZS1pbiBBbmltYXRpb24gKi9cbi51bmRlcmxpbmVIb3ZlcjphZnRlciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBsZWZ0OiAwO1xuICBib3R0b206IC0xMHB4O1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAycHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1NmJhZWQ7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHRyYW5zaXRpb246IHdpZHRoIDAuMnM7XG59XG5cbi51bmRlcmxpbmVIb3Zlcjpob3ZlciB7XG4gIGNvbG9yOiAjMGQwZDBkO1xufVxuXG4udW5kZXJsaW5lSG92ZXI6aG92ZXI6YWZ0ZXJ7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5cblxuLyogT1RIRVJTICovXG5cbio6Zm9jdXMge1xuICAgIG91dGxpbmU6IG5vbmU7XG59IFxuXG4jaWNvbiB7XG4gIHdpZHRoOjYwJTtcbn1cblxuLmJ0bnN7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGNvbG9yOiAjMmYyZjJmO1xuICAgIHBhZGRpbmc6IDE1cHggODBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBib3gtc2hhZG93OiAwIDEwcHggMzBweCAwIHJnYmEoOTUsMTg2LDIzMywwLjQpO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweCA1cHggNXB4IDVweDtcbiAgICBtYXJnaW46IDEwcHggMjBweCAyMHB4IDIwcHg7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/user/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/user/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng6-toastr-notifications */ "./node_modules/ng6-toastr-notifications/fesm2015/ng6-toastr-notifications.js");
/* harmony import */ var ng2_cookies__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-cookies */ "./node_modules/ng2-cookies/index.js");
/* harmony import */ var ng2_cookies__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var ng4_social_login__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng4-social-login */ "./node_modules/ng4-social-login/ng4-social-login.umd.js");
/* harmony import */ var ng4_social_login__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ng4_social_login__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var src_app_user_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/user/user.service */ "./src/app/user/user.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");








let LoginComponent = class LoginComponent {
    constructor(router, http, userService, socialAuthService, toastr) {
        this.router = router;
        this.http = http;
        this.userService = userService;
        this.socialAuthService = socialAuthService;
        this.toastr = toastr;
        this.user = ng4_social_login__WEBPACK_IMPORTED_MODULE_5__["SocialUser"];
        this.goToSignup = () => {
            this.router.navigate(['/signup']);
        };
        this.signinFunction = () => {
            if (!this.email) {
                this.toastr.warningToastr('enter email');
            }
            else if (!this.password) {
                this.toastr.warningToastr('enter password');
            }
            else {
                let data = {
                    email: this.email,
                    password: this.password
                };
                this.userService.signinFunction(data).subscribe(apiResponse => {
                    if (apiResponse.status === 200) {
                        console.log(apiResponse);
                        ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].set('authtoken', apiResponse.data.authToken);
                        ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].set('receiverId', apiResponse.data.userDetails.userId);
                        ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].set('receiverissueId', apiResponse.data.userDetails.issueId);
                        ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].set('receiverwatcherId', apiResponse.data.userDetails.watcherId);
                        ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].set('receiverName', apiResponse.data.userDetails.firstName + ' ' + apiResponse.data.userDetails.lastName);
                        this.userService.setUserInfoInLocalStorage(apiResponse.data.userDetails);
                        if (apiResponse.data.userDetails) {
                            this.router.navigate(['/dashboard', 'main-content']);
                        }
                    }
                    else {
                        this.toastr.errorToastr(apiResponse.message);
                    }
                }, err => {
                    this.toastr.errorToastr('some error occured');
                });
            }
        };
    }
    ngOnInit() { }
    googlelogin() {
        this.socialAuthService.signIn(ng4_social_login__WEBPACK_IMPORTED_MODULE_5__["GoogleLoginProvider"].PROVIDER_ID).then(userData => {
            this.user = userData;
            let data = { email: this.userData, password: this.userData };
            this.userService.googleFunction(userData).subscribe(apiResponse => {
                if (apiResponse.status === 200) {
                    console.log(apiResponse);
                    ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].set('authtoken', apiResponse.data.authToken);
                    ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].set('receiverId', apiResponse.data.userDetails.userId);
                    ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].set('receiverissueId', apiResponse.data.userDetails.issueId);
                    ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].set('receiverwatcherId', apiResponse.data.userDetails.watcherId);
                    ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].set('receiverName', apiResponse.data.userDetails.firstName + ' ' + apiResponse.data.userDetails.lastName);
                    this.userService.setUserInfoInLocalStorage(apiResponse.data.userDetails);
                    if (apiResponse.data.userDetails) {
                        this.router.navigate(['/dashboard', 'main-content']);
                    }
                }
                else {
                    this.toastr.errorToastr(apiResponse.message);
                }
            }, err => {
                this.toastr.errorToastr('some error occured');
            });
            console.log(this.user);
        });
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"] },
    { type: src_app_user_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"] },
    { type: ng4_social_login__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_3__["ToastrManager"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */ "./src/app/user/login/login.component.css")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/user/signup/signup.component.css":
/*!**************************************************!*\
  !*** ./src/app/user/signup/signup.component.css ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("html {\n  background-color: #56baed;\n}\n\nbody {\n  font-family: \"Poppins\", sans-serif;\n  height: 100vh;\n}\n\na {\n  color: #92badd;\n  display:inline-block;\n  text-decoration: none;\n  font-weight: 400;\n}\n\nh2 {\n  text-align: center;\n    font-size: 25px;\n    font-weight: 600;\n    text-transform: uppercase;\n    display: inline-block;\n    margin: 15px 8px 25px 8px;\n}\n\n/* STRUCTURE */\n\n.wrapper {\n  display: flex;\n  align-items: center;\n  flex-direction: column; \n  justify-content: center;\n  width: 100%;\n  min-height: 100%;\n  padding: 20px;\n  height: -webkit-fill-available;\n  /*background-color: #0747A6;*/\n}\n\n#formContent {\n  border-radius: 10px 10px 10px 10px;\n  background: #fff;\n  padding: 30px;\n  width: 90%;\n  max-width: 450px;\n  position: relative;\n  padding: 0px;\n  box-shadow: 0 30px 60px 0 rgba(0,0,0,0.3);\n  text-align: center;\n}\n\n#formFooter {\n  background-color: #f6f6f6;\n  border-top: 1px solid #dce8f1;\n  padding: 25px;\n  text-align: center;\n  border-radius: 0 0 10px 10px;\n}\n\n/* TABS */\n\nh2.inactive {\n  color: #cccccc;\n}\n\nh2.active {\n  color: #0d0d0d;\n  border-bottom: 2px solid #5fbae9;\n}\n\n/* FORM TYPOGRAPHY*/\n\ninput[type=button], input[type=submit], input[type=reset]  {\n  background-color: #56baed;\n  border: none;\n  color: white;\n  padding: 15px 80px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  text-transform: uppercase;\n  font-size: 13px;\n  box-shadow: 0 10px 30px 0 rgba(95,186,233,0.4);\n  border-radius: 5px 5px 5px 5px;\n  margin: 10px 20px 40px 20px;\n  transition: all 0.3s ease-in-out;\n}\n\ninput[type=button]:hover, input[type=submit]:hover, input[type=reset]:hover  {\n  background-color: #39ace7;\n}\n\ninput[type=button]:active, input[type=submit]:active, input[type=reset]:active  {\n  transform: scale(0.95);\n}\n\ninput[type=email] {\n  border: none;\n  color: #0d0d0d;\n  padding: 15px 32px;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 16px;\n  margin: 5px;\n  width: 85%;\n  border: 2px solid #f6f6f6;\n  transition: all 0.5s ease-in-out;\n  border-radius: 5px 5px 5px 5px;\n}\n\ninput[type=password] {\n  border: none;\n  color: #0d0d0d;\n  padding: 15px 32px;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 16px;\n  margin: 5px;\n  width: 85%;\n  border: 2px solid #f6f6f6;\n  transition: all 0.5s ease-in-out;\n  border-radius: 5px 5px 5px 5px;\n}\n\ninput[type=text] {\n  border: none;\n  color: #0d0d0d;\n  padding: 15px 32px;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 16px;\n  margin: 5px;\n  width: 85%;\n  border: 2px solid #f6f6f6;\n  transition: all 0.5s ease-in-out;\n  border-radius: 5px 5px 5px 5px;\n}\n\ninput[type=email]:focus {\n  background-color: #fff;\n  border-bottom: 2px solid #5fbae9;\n}\n\ninput[type=text]:focus {\n  background-color: #fff;\n  border-bottom: 2px solid #5fbae9;\n}\n\ninput[type=password]:focus {\n  background-color: #fff;\n  border-bottom: 2px solid #5fbae9;\n}\n\ninput[type=email]:placeholder {\n  color: #cccccc;\n}\n\ninput[type=text]:placeholder {\n  color: #cccccc;\n}\n\ninput[type=password]:placeholder {\n  color: #cccccc;\n}\n\n.login-or {\n         position: relative;\n         color: #aaa;\n         margin-bottom: 10px;\n         padding-bottom: 10px;\n         }\n\n.span-or {\n         display: block;\n         position: absolute;\n         left: 50%;\n         top: -2px;\n         margin-left: -25px;\n         background-color: #fff;\n         width: 50px;\n         text-align: center;\n         }\n\n.hr-or {\n         height: 1px;\n         margin-top: 0px !important;\n         margin-bottom: 0px !important;\n         }\n\n/* ANIMATIONS */\n\n/* Simple CSS3 Fade-in-down Animation */\n\n.fadeInDown {\n  -webkit-animation-name: fadeInDown;\n  animation-name: fadeInDown;\n  -webkit-animation-duration: 1s;\n  animation-duration: 1s;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n\n@-webkit-keyframes fadeInDown {\n  0% {\n    opacity: 0;\n    transform: translate3d(0, -100%, 0);\n  }\n  100% {\n    opacity: 1;\n    transform: none;\n  }\n}\n\n@keyframes fadeInDown {\n  0% {\n    opacity: 0;\n    transform: translate3d(0, -100%, 0);\n  }\n  100% {\n    opacity: 1;\n    transform: none;\n  }\n}\n\n/* Simple CSS3 Fade-in Animation */\n\n@-webkit-keyframes fadeIn { from { opacity:0; } to { opacity:1; } }\n\n@keyframes fadeIn { from { opacity:0; } to { opacity:1; } }\n\n.fadeIn {\n  opacity:0;\n  -webkit-animation:fadeIn ease-in 1;\n  animation:fadeIn ease-in 1;\n\n  -webkit-animation-fill-mode:forwards;\n  animation-fill-mode:forwards;\n\n  -webkit-animation-duration:1s;\n  animation-duration:1s;\n}\n\n.fadeIn.first {\n  -webkit-animation-delay: 0.4s;\n  animation-delay: 0.4s;\n}\n\n.fadeIn.second {\n  -webkit-animation-delay: 0.6s;\n  animation-delay: 0.6s;\n}\n\n.fadeIn.third {\n  -webkit-animation-delay: 0.8s;\n  animation-delay: 0.8s;\n}\n\n.fadeIn.fourth {\n  -webkit-animation-delay: 1s;\n  animation-delay: 1s;\n  width: 86%;\n}\n\n/* Simple CSS3 Fade-in Animation */\n\n.underlineHover:after {\n  display: block;\n  left: 0;\n  bottom: -10px;\n  width: 0;\n  height: 2px;\n  background-color: #56baed;\n  content: \"\";\n  transition: width 0.2s;\n}\n\n.underlineHover:hover {\n  color: #0d0d0d;\n}\n\n.underlineHover:hover:after{\n  width: 100%;\n}\n\n/* OTHERS */\n\n*:focus {\n    outline: none;\n}\n\n#icon {\n  width:60%;\n}\n\n.btns{\n  background-color: #fff;\n    border: none;\n    color: #2f2f2f;\n    padding: 15px 80px;\n    text-align: center;\n    text-decoration: none;\n    display: inline-block;\n    text-transform: uppercase;\n    font-size: 13px;\n    box-shadow: 0 10px 30px 0 rgba(95,186,233,0.4);\n    border-radius: 5px 5px 5px 5px;\n    margin: 10px 20px 20px 20px;\n    transition: all 0.3s ease-in-out;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxrQ0FBa0M7RUFDbEMsYUFBYTtBQUNmOztBQUVBO0VBQ0UsY0FBYztFQUNkLG9CQUFvQjtFQUNwQixxQkFBcUI7RUFDckIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0JBQWtCO0lBQ2hCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLHFCQUFxQjtJQUNyQix5QkFBeUI7QUFDN0I7O0FBSUEsY0FBYzs7QUFFZDtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsNkJBQTZCO0FBQy9COztBQUVBO0VBRUUsa0NBQWtDO0VBQ2xDLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsWUFBWTtFQUVaLHlDQUF5QztFQUN6QyxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsNkJBQTZCO0VBQzdCLGFBQWE7RUFDYixrQkFBa0I7RUFFbEIsNEJBQTRCO0FBQzlCOztBQUlBLFNBQVM7O0FBRVQ7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGdDQUFnQztBQUNsQzs7QUFJQSxtQkFBbUI7O0FBRW5CO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIscUJBQXFCO0VBQ3JCLHlCQUF5QjtFQUN6QixlQUFlO0VBRWYsOENBQThDO0VBRTlDLDhCQUE4QjtFQUM5QiwyQkFBMkI7RUFLM0IsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VB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QUM5Qyw4QkFBOEI7SUFDOUIsMkJBQTJCO0lBQzNCLGdDQUFnQztBQUNwQyIsImZpbGUiOiJzcmMvYXBwL3VzZXIvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaHRtbCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1NmJhZWQ7XG59XG5cbmJvZHkge1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gIGhlaWdodDogMTAwdmg7XG59XG5cbmEge1xuICBjb2xvcjogIzkyYmFkZDtcbiAgZGlzcGxheTppbmxpbmUtYmxvY2s7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuaDIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAyNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWFyZ2luOiAxNXB4IDhweCAyNXB4IDhweDtcbn1cblxuXG5cbi8qIFNUUlVDVFVSRSAqL1xuXG4ud3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGhlaWdodDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcbiAgLypiYWNrZ3JvdW5kLWNvbG9yOiAjMDc0N0E2OyovXG59XG5cbiNmb3JtQ29udGVudCB7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDEwcHggMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDEwcHggMTBweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgcGFkZGluZzogMzBweDtcbiAgd2lkdGg6IDkwJTtcbiAgbWF4LXdpZHRoOiA0NTBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiAwcHg7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAzMHB4IDYwcHggMCByZ2JhKDAsMCwwLDAuMyk7XG4gIGJveC1zaGFkb3c6IDAgMzBweCA2MHB4IDAgcmdiYSgwLDAsMCwwLjMpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbiNmb3JtRm9vdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjZmNjtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkY2U4ZjE7XG4gIHBhZGRpbmc6IDI1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAwIDAgMTBweCAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAwIDAgMTBweCAxMHB4O1xufVxuXG5cblxuLyogVEFCUyAqL1xuXG5oMi5pbmFjdGl2ZSB7XG4gIGNvbG9yOiAjY2NjY2NjO1xufVxuXG5oMi5hY3RpdmUge1xuICBjb2xvcjogIzBkMGQwZDtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICM1ZmJhZTk7XG59XG5cblxuXG4vKiBGT1JNIFRZUE9HUkFQSFkqL1xuXG5pbnB1dFt0eXBlPWJ1dHRvbl0sIGlucHV0W3R5cGU9c3VibWl0XSwgaW5wdXRbdHlwZT1yZXNldF0gIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU2YmFlZDtcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDE1cHggODBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1zaXplOiAxM3B4O1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMTBweCAzMHB4IDAgcmdiYSg5NSwxODYsMjMzLDAuNCk7XG4gIGJveC1zaGFkb3c6IDAgMTBweCAzMHB4IDAgcmdiYSg5NSwxODYsMjMzLDAuNCk7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNXB4IDVweCA1cHggNXB4O1xuICBib3JkZXItcmFkaXVzOiA1cHggNXB4IDVweCA1cHg7XG4gIG1hcmdpbjogMTBweCAyMHB4IDQwcHggMjBweDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbiAgLW1zLXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xuICAtby10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG59XG5cbmlucHV0W3R5cGU9YnV0dG9uXTpob3ZlciwgaW5wdXRbdHlwZT1zdWJtaXRdOmhvdmVyLCBpbnB1dFt0eXBlPXJlc2V0XTpob3ZlciAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzlhY2U3O1xufVxuXG5pbnB1dFt0eXBlPWJ1dHRvbl06YWN0aXZlLCBpbnB1dFt0eXBlPXN1Ym1pdF06YWN0aXZlLCBpbnB1dFt0eXBlPXJlc2V0XTphY3RpdmUgIHtcbiAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC45NSk7XG4gIC1vLXRyYW5zZm9ybTogc2NhbGUoMC45NSk7XG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xuICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xufVxuXG5pbnB1dFt0eXBlPWVtYWlsXSB7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6ICMwZDBkMGQ7XG4gIHBhZGRpbmc6IDE1cHggMzJweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbWFyZ2luOiA1cHg7XG4gIHdpZHRoOiA4NSU7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNmNmY2ZjY7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG4gIC1tcy10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDVweCA1cHggNXB4IDVweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4IDVweCA1cHggNXB4O1xufVxuXG5pbnB1dFt0eXBlPXBhc3N3b3JkXSB7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6ICMwZDBkMGQ7XG4gIHBhZGRpbmc6IDE1cHggMzJweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbWFyZ2luOiA1cHg7XG4gIHdpZHRoOiA4NSU7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNmNmY2ZjY7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG4gIC1tcy10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDVweCA1cHggNXB4IDVweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4IDVweCA1cHggNXB4O1xufVxuaW5wdXRbdHlwZT10ZXh0XSB7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6ICMwZDBkMGQ7XG4gIHBhZGRpbmc6IDE1cHggMzJweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbWFyZ2luOiA1cHg7XG4gIHdpZHRoOiA4NSU7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNmNmY2ZjY7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG4gIC1tcy10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDVweCA1cHggNXB4IDVweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4IDVweCA1cHggNXB4O1xufVxuXG5pbnB1dFt0eXBlPWVtYWlsXTpmb2N1cyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjNWZiYWU5O1xufVxuaW5wdXRbdHlwZT10ZXh0XTpmb2N1cyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjNWZiYWU5O1xufVxuaW5wdXRbdHlwZT1wYXNzd29yZF06Zm9jdXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzVmYmFlOTtcbn1cblxuaW5wdXRbdHlwZT1lbWFpbF06cGxhY2Vob2xkZXIge1xuICBjb2xvcjogI2NjY2NjYztcbn1cbmlucHV0W3R5cGU9dGV4dF06cGxhY2Vob2xkZXIge1xuICBjb2xvcjogI2NjY2NjYztcbn1cbmlucHV0W3R5cGU9cGFzc3dvcmRdOnBsYWNlaG9sZGVyIHtcbiAgY29sb3I6ICNjY2NjY2M7XG59XG5cbi5sb2dpbi1vciB7XG4gICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICBjb2xvcjogI2FhYTtcbiAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICAgICAgIH1cblxuLnNwYW4tb3Ige1xuICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgICB0b3A6IC0ycHg7XG4gICAgICAgICBtYXJnaW4tbGVmdDogLTI1cHg7XG4gICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICB9XG4gICAgICAgICAuaHItb3Ige1xuICAgICAgICAgaGVpZ2h0OiAxcHg7XG4gICAgICAgICBtYXJnaW4tdG9wOiAwcHggIWltcG9ydGFudDtcbiAgICAgICAgIG1hcmdpbi1ib3R0b206IDBweCAhaW1wb3J0YW50O1xuICAgICAgICAgfVxuXG5cbi8qIEFOSU1BVElPTlMgKi9cblxuLyogU2ltcGxlIENTUzMgRmFkZS1pbi1kb3duIEFuaW1hdGlvbiAqL1xuLmZhZGVJbkRvd24ge1xuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBmYWRlSW5Eb3duO1xuICBhbmltYXRpb24tbmFtZTogZmFkZUluRG93bjtcbiAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDFzO1xuICBhbmltYXRpb24tZHVyYXRpb246IDFzO1xuICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlSW5Eb3duIHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMDAlLCAwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMDAlLCAwKTtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBub25lO1xuICAgIHRyYW5zZm9ybTogbm9uZTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIGZhZGVJbkRvd24ge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTEwMCUsIDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTEwMCUsIDApO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IG5vbmU7XG4gICAgdHJhbnNmb3JtOiBub25lO1xuICB9XG59XG5cbi8qIFNpbXBsZSBDU1MzIEZhZGUtaW4gQW5pbWF0aW9uICovXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZUluIHsgZnJvbSB7IG9wYWNpdHk6MDsgfSB0byB7IG9wYWNpdHk6MTsgfSB9XG5ALW1vei1rZXlmcmFtZXMgZmFkZUluIHsgZnJvbSB7IG9wYWNpdHk6MDsgfSB0byB7IG9wYWNpdHk6MTsgfSB9XG5Aa2V5ZnJhbWVzIGZhZGVJbiB7IGZyb20geyBvcGFjaXR5OjA7IH0gdG8geyBvcGFjaXR5OjE7IH0gfVxuXG4uZmFkZUluIHtcbiAgb3BhY2l0eTowO1xuICAtd2Via2l0LWFuaW1hdGlvbjpmYWRlSW4gZWFzZS1pbiAxO1xuICAtbW96LWFuaW1hdGlvbjpmYWRlSW4gZWFzZS1pbiAxO1xuICBhbmltYXRpb246ZmFkZUluIGVhc2UtaW4gMTtcblxuICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6Zm9yd2FyZHM7XG4gIC1tb3otYW5pbWF0aW9uLWZpbGwtbW9kZTpmb3J3YXJkcztcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTpmb3J3YXJkcztcblxuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjoxcztcbiAgLW1vei1hbmltYXRpb24tZHVyYXRpb246MXM7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjoxcztcbn1cblxuLmZhZGVJbi5maXJzdCB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwLjRzO1xuICAtbW96LWFuaW1hdGlvbi1kZWxheTogMC40cztcbiAgYW5pbWF0aW9uLWRlbGF5OiAwLjRzO1xufVxuXG4uZmFkZUluLnNlY29uZCB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwLjZzO1xuICAtbW96LWFuaW1hdGlvbi1kZWxheTogMC42cztcbiAgYW5pbWF0aW9uLWRlbGF5OiAwLjZzO1xufVxuXG4uZmFkZUluLnRoaXJkIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDAuOHM7XG4gIC1tb3otYW5pbWF0aW9uLWRlbGF5OiAwLjhzO1xuICBhbmltYXRpb24tZGVsYXk6IDAuOHM7XG59XG5cbi5mYWRlSW4uZm91cnRoIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDFzO1xuICAtbW96LWFuaW1hdGlvbi1kZWxheTogMXM7XG4gIGFuaW1hdGlvbi1kZWxheTogMXM7XG4gIHdpZHRoOiA4NiU7XG59XG5cbi8qIFNpbXBsZSBDU1MzIEZhZGUtaW4gQW5pbWF0aW9uICovXG4udW5kZXJsaW5lSG92ZXI6YWZ0ZXIge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAtMTBweDtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTZiYWVkO1xuICBjb250ZW50OiBcIlwiO1xuICB0cmFuc2l0aW9uOiB3aWR0aCAwLjJzO1xufVxuXG4udW5kZXJsaW5lSG92ZXI6aG92ZXIge1xuICBjb2xvcjogIzBkMGQwZDtcbn1cblxuLnVuZGVybGluZUhvdmVyOmhvdmVyOmFmdGVye1xuICB3aWR0aDogMTAwJTtcbn1cblxuXG5cbi8qIE9USEVSUyAqL1xuXG4qOmZvY3VzIHtcbiAgICBvdXRsaW5lOiBub25lO1xufSBcblxuI2ljb24ge1xuICB3aWR0aDo2MCU7XG59XG5cbi5idG5ze1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBjb2xvcjogIzJmMmYyZjtcbiAgICBwYWRkaW5nOiAxNXB4IDgwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgYm94LXNoYWRvdzogMCAxMHB4IDMwcHggMCByZ2JhKDk1LDE4NiwyMzMsMC40KTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHggNXB4IDVweCA1cHg7XG4gICAgbWFyZ2luOiAxMHB4IDIwcHggMjBweCAyMHB4O1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/user/signup/signup.component.ts":
/*!*************************************************!*\
  !*** ./src/app/user/signup/signup.component.ts ***!
  \*************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng6-toastr-notifications */ "./node_modules/ng6-toastr-notifications/fesm2015/ng6-toastr-notifications.js");
/* harmony import */ var src_app_user_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/user/user.service */ "./src/app/user/user.service.ts");






let SignupComponent = class SignupComponent {
    constructor(router, http, toastr, userService) {
        this.router = router;
        this.http = http;
        this.toastr = toastr;
        this.userService = userService;
        this.goToSignIn = () => {
            this.router.navigate(['/login']);
        };
        this.signupFunction = () => {
            if (!this.firstName) {
                this.toastr.warningToastr('enter first name');
            }
            else if (!this.lastName) {
                this.toastr.warningToastr('enter last name');
            }
            else if (!this.password) {
                this.toastr.warningToastr('enter password');
            }
            else if (!this.mobile) {
                this.toastr.warningToastr('enter mobile');
            }
            else if (!this.email) {
                this.toastr.warningToastr('enter email');
            }
            else {
                let data = {
                    firstName: this.firstName,
                    lastName: this.lastName,
                    password: this.password,
                    mobile: this.mobile,
                    email: this.email
                };
                console.log(data);
                this.userService.signupFunction(data).subscribe(apiResponse => {
                    console.log(apiResponse);
                    if (apiResponse.status === 200) {
                        this.toastr.successToastr('Signup successful');
                        setTimeout(() => {
                            this.goToSignIn();
                        }, 2000);
                    }
                    else {
                        this.toastr.errorToastr(apiResponse.message);
                    }
                }, err => {
                    this.toastr.errorToastr('some error occured');
                });
            }
        };
    }
    ngOnInit() { }
};
SignupComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_4__["ToastrManager"] },
    { type: src_app_user_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] }
];
SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-signup',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./signup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/signup/signup.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./signup.component.css */ "./src/app/user/signup/signup.component.css")).default]
    })
], SignupComponent);



/***/ }),

/***/ "./src/app/user/user.module.ts":
/*!*************************************!*\
  !*** ./src/app/user/user.module.ts ***!
  \*************************************/
/*! exports provided: UserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModule", function() { return UserModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var src_app_user_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/user/login/login.component */ "./src/app/user/login/login.component.ts");
/* harmony import */ var src_app_user_signup_signup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/user/signup/signup.component */ "./src/app/user/signup/signup.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng6-toastr-notifications */ "./node_modules/ng6-toastr-notifications/fesm2015/ng6-toastr-notifications.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");










let UserModule = class UserModule {
};
UserModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [src_app_user_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"], src_app_user_signup_signup_component__WEBPACK_IMPORTED_MODULE_4__["SignupComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
            ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_6__["ToastrModule"].forRoot(),
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                { path: 'signup', component: src_app_user_signup_signup_component__WEBPACK_IMPORTED_MODULE_4__["SignupComponent"] },
            ])
        ],
    })
], UserModule);



/***/ }),

/***/ "./src/app/user/user.service.ts":
/*!**************************************!*\
  !*** ./src/app/user/user.service.ts ***!
  \**************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm2015/add/operator/catch.js");
/* harmony import */ var rxjs_add_operator_do__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/do */ "./node_modules/rxjs-compat/_esm2015/add/operator/do.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/toPromise */ "./node_modules/rxjs-compat/_esm2015/add/operator/toPromise.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var ng2_cookies__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-cookies */ "./node_modules/ng2-cookies/index.js");
/* harmony import */ var ng2_cookies__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");









let UserService = class UserService {
    constructor(http) {
        this.http = http;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].baseUrl;
        this.getUserInfoFromLocalstorage = () => {
            return JSON.parse(localStorage.getItem('userInfo'));
        };
        this.setUserInfoInLocalStorage = data => {
            localStorage.setItem('userInfo', JSON.stringify(data));
        };
    }
    signupFunction(data) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('firstName', data.firstName)
            .set('lastName', data.lastName)
            .set('password', data.password)
            .set('email', data.email)
            .set('mobile', data.mobile);
        return this.http.post(`${this.baseUrl}/signup`, params);
    }
    createIssue(data) {
        console.log(this.setUserInfoInLocalStorage);
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('title', data.title)
            .set('status', data.status)
            .set('description', data.description)
            .set('reporter', data.reporter)
            .set('assignee', data.assignee)
            .set('images', data.images)
            .set('issueId', data.issueId);
        return this.http.post('/create' + '?authToken=' + ng2_cookies__WEBPACK_IMPORTED_MODULE_7__["Cookie"].get('authtoken'), params);
    }
    signinFunction(data) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('email', data.email).set('password', data.password);
        return this.http.post(`${this.baseUrl}/login`, params);
    }
    googleFunction(data) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('email', data.email).set('password', data.password);
        return this.http.post(`${this.baseUrl}/sociallogin`, params);
    }
    logout() {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('authToken', ng2_cookies__WEBPACK_IMPORTED_MODULE_7__["Cookie"].get('authtoken'));
        return this.http.post(`${this.baseUrl}/logout`, params);
    }
    handleError(err) {
        let errorMessage = '';
        if (err.error instanceof Error) {
            errorMessage = `An error occurred: ${err.error.message}`;
        }
        else {
            errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
        }
        console.error(errorMessage);
        return rxjs__WEBPACK_IMPORTED_MODULE_6__["Observable"].throw(errorMessage);
    }
};
UserService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], UserService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false,
    baseUrl: 'http://localhost:3000/api/v1/users'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_5__);






if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\edwisor\issue-tracking-projects\issueTrackingTool-frontend\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map