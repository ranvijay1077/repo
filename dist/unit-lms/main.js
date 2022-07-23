(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\jiten\Documents\unit-lms\src\main.ts */"zUnb");


/***/ }),

/***/ "9BVj":
/*!**************************************************!*\
  !*** ./src/app/host-form/host-form.component.ts ***!
  \**************************************************/
/*! exports provided: HostFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HostFormComponent", function() { return HostFormComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/data.service */ "EnSQ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");






function HostFormComponent_div_0_div_12_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "First Name is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HostFormComponent_div_0_div_12_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Max Length exceeded.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HostFormComponent_div_0_div_12_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Only characters are allowed.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HostFormComponent_div_0_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HostFormComponent_div_0_div_12_div_1_Template, 2, 0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, HostFormComponent_div_0_div_12_div_2_Template, 2, 0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, HostFormComponent_div_0_div_12_div_3_Template, 2, 0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.g.name.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.g.name.errors.maxlength);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.g.name.errors.pattern);
} }
function HostFormComponent_div_0_div_20_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Phone number is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HostFormComponent_div_0_div_20_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Enter a valid Phone number.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HostFormComponent_div_0_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HostFormComponent_div_0_div_20_div_1_Template, 2, 0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, HostFormComponent_div_0_div_20_div_2_Template, 2, 0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.g.phoneNo.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.g.phoneNo.errors.pattern);
} }
function HostFormComponent_div_0_div_28_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Email is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HostFormComponent_div_0_div_28_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Email must be a valid email address.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HostFormComponent_div_0_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HostFormComponent_div_0_div_28_div_1_Template, 2, 0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, HostFormComponent_div_0_div_28_div_2_Template, 2, 0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.g.emailAddress.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.g.emailAddress.errors.email);
} }
function HostFormComponent_div_0_div_45_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "City and Street Info is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HostFormComponent_div_0_div_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HostFormComponent_div_0_div_45_div_1_Template, 2, 0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r5.g.unitLocation.errors.required);
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
function HostFormComponent_div_0_div_56_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "input", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function HostFormComponent_div_0_div_56_Template_input_change_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r27); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r26.onCheckboxChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const web_r25 = ctx.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](3, _c0, ctx_r6.isSubmitted));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", web_r25.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", web_r25.name, " ");
} }
function HostFormComponent_div_0_div_66_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Cost per Day is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HostFormComponent_div_0_div_66_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HostFormComponent_div_0_div_66_div_1_Template, 2, 0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r7.g.costperDay.errors.required);
} }
function HostFormComponent_div_0_div_76_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Cost per Month is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HostFormComponent_div_0_div_76_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HostFormComponent_div_0_div_76_div_1_Template, 2, 0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r8.g.costperMonth.errors.required);
} }
function HostFormComponent_div_0_div_88_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Spot Info is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HostFormComponent_div_0_div_88_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HostFormComponent_div_0_div_88_div_1_Template, 2, 0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r9.g.spotDesc.errors.required);
} }
function HostFormComponent_div_0_div_99_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Spot Size is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HostFormComponent_div_0_div_99_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HostFormComponent_div_0_div_99_div_1_Template, 2, 0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r10.g.spotSize.errors.required);
} }
function HostFormComponent_div_0_option_117_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const s_r32 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", s_r32.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](s_r32.title);
} }
function HostFormComponent_div_0_div_118_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Session Info is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HostFormComponent_div_0_div_118_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HostFormComponent_div_0_div_118_div_1_Template, 2, 0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r12.g.renterTour.errors.required);
} }
function HostFormComponent_div_0_div_129_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " From Time is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HostFormComponent_div_0_div_129_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HostFormComponent_div_0_div_129_div_1_Template, 2, 0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r13.g.timeFrom.errors.required);
} }
function HostFormComponent_div_0_div_137_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Until Time is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HostFormComponent_div_0_div_137_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HostFormComponent_div_0_div_137_div_1_Template, 2, 0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r14.g.timeUntil.errors.required);
} }
function HostFormComponent_div_0_div_152_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Renter preference is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HostFormComponent_div_0_div_152_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HostFormComponent_div_0_div_152_div_1_Template, 2, 0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r15.g.renterPractice.errors.required);
} }
function HostFormComponent_div_0_div_161_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Info is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HostFormComponent_div_0_div_161_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HostFormComponent_div_0_div_161_div_1_Template, 2, 0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r16.g.musicPrefernce.errors.required);
} }
function HostFormComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "form", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function HostFormComponent_div_0_Template_form_ngSubmit_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r39); const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r38.addlead(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h5", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, HostFormComponent_div_0_div_12_Template, 4, 3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, " Phone Number ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, HostFormComponent_div_0_div_20_Template, 3, 2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, " Email Address ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, HostFormComponent_div_0_div_28_Template, 3, 2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "h5", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, " What ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "street name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, " and ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "city");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, " is your Unit located? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](44, "textarea", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](45, HostFormComponent_div_0_div_45_Template, 2, 1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "Describe the ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "floor");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, " of your unit. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](56, HostFormComponent_div_0_div_56_Template, 4, 5, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "Cost");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, "/Day($). ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](65, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](66, HostFormComponent_div_0_div_66_Template, 2, 1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](71, "Cost");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](72, "/Month($). ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](74, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](75, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](76, HostFormComponent_div_0_div_76_Template, 2, 1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](81, "How ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](83, "big");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](84, " is your spot? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](86, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](87, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](88, HostFormComponent_div_0_div_88_Template, 2, 1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](92, "Approximate ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](94, "square feet");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](95, ". ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](97, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](98, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](99, HostFormComponent_div_0_div_99_Template, 2, 1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "h5", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](101);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](102, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](103, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](105, "label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](106, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](107, "When");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](108, " can the renter come in for a ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](109, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](110, "tour");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](111, "? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](112, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](113, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](114, "select", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function HostFormComponent_div_0_Template_select_change_114_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r39); const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r40.onChange($event.target); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](115, "option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](116, "Select Day");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](117, HostFormComponent_div_0_option_117_Template, 2, 2, "option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](118, HostFormComponent_div_0_div_118_Template, 2, 1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](119, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](120, "h4", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](121, "At what time?");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](122, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](123, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](124, "label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](125, "From");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](126, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](127, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](128, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](129, HostFormComponent_div_0_div_129_Template, 2, 1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](130, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](131, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](132, "label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](133, "Until");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](134, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](135, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](136, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](137, HostFormComponent_div_0_div_137_Template, 2, 1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](138, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](139, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](140, "label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](141, "Can your renter practice alone?");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](142, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](143, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](144, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](145, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](146, "label", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](147, " Yes, I don't need to session with renters. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](148, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](149, "input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](150, "label", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](151, " No, renter has to be ready to session with me. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](152, HostFormComponent_div_0_div_152_Template, 2, 1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](153, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](154, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](155, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](156, "label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](157, "Do you have a music system and speakers available ? If yes, how will the host play their music ?");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](158, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](159, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](160, "textarea", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](161, HostFormComponent_div_0_div_161_Template, 2, 1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](162, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](163, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](164, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](165, "label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](166, "Extra notes: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](167, "textarea", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](168, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](169, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r0.addleadform);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.pTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](33, _c0, ctx_r0.isSubmitted && ctx_r0.g.name.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.isSubmitted && ctx_r0.g.name.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](35, _c0, ctx_r0.isSubmitted && ctx_r0.g.phoneNo.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.isSubmitted && ctx_r0.g.phoneNo.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](37, _c0, ctx_r0.isSubmitted && ctx_r0.g.emailAddress.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.isSubmitted && ctx_r0.g.emailAddress.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.locTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](39, _c0, ctx_r0.isSubmitted && ctx_r0.g.unitLocation.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.isSubmitted && ctx_r0.g.unitLocation.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.websiteList);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](41, _c0, ctx_r0.isSubmitted && ctx_r0.g.costperDay.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.isSubmitted && ctx_r0.g.costperDay.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](43, _c0, ctx_r0.isSubmitted && ctx_r0.g.costperMonth.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.isSubmitted && ctx_r0.g.costperMonth.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](45, _c0, ctx_r0.isSubmitted && ctx_r0.g.spotDesc.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.isSubmitted && ctx_r0.g.spotDesc.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](47, _c0, ctx_r0.isSubmitted && ctx_r0.g.spotSize.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.isSubmitted && ctx_r0.g.spotSize.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.prefTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](49, _c0, ctx_r0.isSubmitted && ctx_r0.g.renterTour.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.sessions);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.isSubmitted && ctx_r0.g.renterTour.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](51, _c0, ctx_r0.isSubmitted && ctx_r0.g.timeFrom.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.isSubmitted && ctx_r0.g.timeFrom.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](53, _c0, ctx_r0.isSubmitted && ctx_r0.g.timeUntil.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.isSubmitted && ctx_r0.g.timeUntil.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](55, _c0, ctx_r0.isSubmitted && ctx_r0.g.renterPractice.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](57, _c0, ctx_r0.isSubmitted && ctx_r0.g.renterPractice.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.isSubmitted && ctx_r0.g.renterPractice.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](59, _c0, ctx_r0.isSubmitted && ctx_r0.g.musicPrefernce.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.isSubmitted && ctx_r0.g.musicPrefernce.errors);
} }
function HostFormComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h1", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.feedback);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", ctx_r1.routeToHome);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.dashboard);
} }
class HostFormComponent {
    constructor(_fb, _ds) {
        this._fb = _fb;
        this._ds = _ds;
        this.pTitle = `Personal Info`;
        this.locTitle = `Your Belongings`;
        this.prefTitle = `Preferences`;
        this.addleadform = _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"];
        this.submitted = false;
        this.sessions = [
            { title: "Sunday", value: "Sun" },
            { title: "Monday", value: "Mon" },
            { title: "Tuesday", value: "Tue" },
            { title: "Wednesday", value: "Wed" },
            { title: "Thrusday", value: "Thr" },
            { title: "Friday", value: "Fri" },
            { title: "Saturday", value: "Sat" }
        ];
        this.websiteList = [
            { id: 1, name: 'Linoleum / Dance floor' },
            { id: 2, name: 'Padded / Gym floor' },
            { id: 3, name: 'Trampoline' },
            { id: 4, name: 'Grass' }
        ];
        this.isSubmitted = false;
        this.thanks = false;
        this.feedback = `Thank for your Feedback.`;
        this.dashboard = `Back to Home`;
        this.routeToHome = `/dashboard`;
    }
    ngOnInit() {
        this.addLead();
    }
    addLead() {
        this.addleadform = this._fb.group({
            name: [
                "",
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].maxLength(50),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern("^[a-zA-Z ]+$"),
                ],
            ],
            phoneNo: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].maxLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern("^[0-9]*$")]],
            emailAddress: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].email]],
            cityAndstreetInfo: ["null"],
            spotNeeded: ["null"],
            spotSize: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            preticerInfo: ["null"],
            firstPreticeSession: ["null"],
            timeFrom: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            timeUntil: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            floorPreference: this._fb.array([], [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
            needHostSession: ["null"],
            notes: [""],
            unitLocation: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            userType: ["Host"],
            costperDay: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            costperMonth: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            spotDesc: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            renterTour: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            renterPractice: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            musicPrefernce: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
        });
    }
    get g() { return this.addleadform.controls; }
    ;
    addlead() {
        if (this.addleadform.invalid) {
            this.isSubmitted = true;
            return;
        }
        if (this.addleadform.value) {
            if (this.addleadform.value.floorPreference.length) {
                this.addleadform.value.floorPreference = this.addleadform.value.floorPreference.toString();
                this._ds.addLead('http://52.22.88.240:8000/publish-lead/', this.addleadform.value).subscribe(res => {
                    if (!!res && !!res.status) {
                        console.log(res);
                        this.addleadform.reset();
                        this.thanks = true;
                    }
                }, error => {
                    console.log(error);
                });
            }
        }
    }
    onChange(ev) {
        console.log(ev);
    }
    onCheckboxChange(e) {
        const website = this.addleadform.get('floorPreference');
        if (e.target.checked) {
            website.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](e.target.value));
        }
        else {
            const index = website.controls.findIndex(x => x.value === e.target.value);
            website.removeAt(index);
        }
    }
}
HostFormComponent.ɵfac = function HostFormComponent_Factory(t) { return new (t || HostFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"])); };
HostFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HostFormComponent, selectors: [["app-host-form"]], decls: 2, vars: 2, consts: [["class", "container", 4, "ngIf"], [1, "container"], [3, "formGroup", "ngSubmit"], [1, "heading"], [1, "row"], [1, "col-md-4", "col-sm"], [1, "mb-3"], [1, "form-label"], [1, "required-field"], ["type", "text", "placeholder", "", "formControlName", "name", "name", "name", 1, "form-control", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], ["type", "text", "placeholder", "", "formControlName", "phoneNo", "name", "name", 1, "form-control", 3, "ngClass"], ["type", "text", "placeholder", "", "formControlName", "emailAddress", "name", "name", 1, "form-control", 3, "ngClass"], [1, "col-md-12", "col-sm"], ["placeholder", "", "formControlName", "unitLocation", "id", "unitLocation", "rows", "3", 1, "form-control", 3, "ngClass"], [1, "col-md-6", "col-sm"], [3, "ngClass", 4, "ngFor", "ngForOf"], [1, "col-md-3", "col-sm"], ["type", "number", "placeholder", "", "formControlName", "costperDay", "name", "costperDay", 1, "form-control", 3, "ngClass"], ["type", "number", "placeholder", "", "formControlName", "costperMonth", "name", "costperMonth", 1, "form-control", 3, "ngClass"], [1, "col-md-8", "col-sm"], ["type", "text", "placeholder", "", "formControlName", "spotDesc", "name", "spotDesc", 1, "form-control", 3, "ngClass"], ["type", "number", "placeholder", "", "formControlName", "spotSize", "name", "spotSize", 1, "form-control", 3, "ngClass"], ["aria-label", "courseCategory", "formControlName", "renterTour", 1, "form-select", "select-box", 3, "ngClass", "change"], ["value", "", "disabled", "", "selected", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "heading-sm"], ["type", "time", "placeholder", "", "formControlName", "timeFrom", "name", "timeFrom", 1, "form-control", 3, "ngClass"], ["type", "time", "placeholder", "", "formControlName", "timeUntil", "name", "timeUntil", 1, "form-control", 3, "ngClass"], [1, "form-check"], ["type", "radio", "formControlName", "renterPractice", "name", "renterPractice", "value", "Yes, I don't need to session with renters.", 1, "form-check-input", 3, "ngClass"], ["for", "flexRadioDisabled", 1, "form-check-label", "label-radio"], ["type", "radio", "formControlName", "renterPractice", "name", "renterPractice", "value", " No, renter has to be ready to session with me.", 1, "form-check-input", 3, "ngClass"], ["for", "flexRadioCheckedDisabled", 1, "form-check-label", "label-radio"], ["placeholder", "", "formControlName", "musicPrefernce", "id", "musicPrefernce", "rows", "3", 1, "form-control", 3, "ngClass"], ["placeholder", "", "formControlName", "notes", "id", "exampleFormControlTextarea2", "rows", "3", 1, "form-control"], ["type", "submit", 1, "btn", "btn-danger"], [1, "invalid-feedback"], [4, "ngIf"], [3, "ngClass"], ["type", "checkbox", 3, "value", "change"], [3, "value"], [1, "row", 2, "text-align", "center"], [1, "image-center"], [1, "col-md-12", "col-sm", 2, "margin-top", "30px"], ["role", "button", "aria-pressed", "true", 1, "btn", "btn-danger", "btn-sm", "active", 3, "routerLink"]], template: function HostFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, HostFormComponent_div_0_Template, 170, 61, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HostFormComponent_div_1_Template, 8, 3, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.thanks);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.thanks);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_z"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["RadioControlValueAccessor"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]], styles: [".container[_ngcontent-%COMP%]{\r\n    margin-top: 100px !important;\r\n}\r\n\r\n.heading[_ngcontent-%COMP%]{\r\n    color:  #ed1c24  !important;\r\n    margin-top: 15px !important;\r\n}\r\n\r\n.required-field[_ngcontent-%COMP%]{\r\n    color: #ed1c24 !important;\r\n}\r\n\r\n.heading-sm[_ngcontent-%COMP%]{\r\n    font-size: 12px !important;\r\n    color:  #ed1c24  !important;\r\n}\r\n\r\n.error[_ngcontent-%COMP%]{\r\n    color:  #ed1c24  !important;\r\n}\r\n\r\n.image-center[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    margin-top: 50px !important;\r\n}\r\n\r\n.btn-danger[_ngcontent-%COMP%] {\r\n    color: #fff;\r\n    background-color:#ed1c24 !important;\r\n    border-color: #ed1c24 !important; \r\n}\r\n\r\n.mar-20[_ngcontent-%COMP%]{\r\n    margin-top: 50px !important;\r\n}\r\n\r\n@media (min-width:320px)  { \r\n    .form-label[_ngcontent-%COMP%] {\r\n        margin-bottom: 0.5rem;\r\n        font-size: 14px;\r\n    }\r\n    .label-radio[_ngcontent-%COMP%]{\r\n        font-size: 13px !important;\r\n    }\r\n}\r\n\r\n@media (min-width:480px)  {  \r\n    .form-label[_ngcontent-%COMP%] {\r\n        margin-bottom: 0.5rem;\r\n        font-size: 14px;\r\n    }\r\n    .label-radio[_ngcontent-%COMP%]{\r\n        font-size: 13px !important;\r\n    }\r\n}\r\n\r\n@media (min-width:600px)  {  }\r\n\r\n@media (min-width:801px)  {  }\r\n\r\n@media (min-width:1025px) {  }\r\n\r\n@media (min-width:1281px) {  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvc3QtZm9ybS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksMkJBQTJCO0lBQzNCLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLDBCQUEwQjtJQUMxQiwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSwyQkFBMkI7QUFDL0I7O0FBR0E7SUFDSSxrQkFBa0I7SUFDbEIsMkJBQTJCO0FBQy9COztBQUdBO0lBQ0ksV0FBVztJQUNYLG1DQUFtQztJQUNuQyxnQ0FBZ0M7QUFDcEM7O0FBQ0E7SUFDSSwyQkFBMkI7QUFDL0I7O0FBRUEsNEJBQTRCLG9FQUFvRTtJQUM1RjtRQUNJLHFCQUFxQjtRQUNyQixlQUFlO0lBQ25CO0lBQ0E7UUFDSSwwQkFBMEI7SUFDOUI7QUFDSjs7QUFDQSw0QkFBNEIsa0RBQWtEO0lBQzFFO1FBQ0kscUJBQXFCO1FBQ3JCLGVBQWU7SUFDbkI7SUFDQTtRQUNJLDBCQUEwQjtJQUM5QjtBQUNKOztBQUNBLDRCQUE0QixpR0FBaUcsRUFBRTs7QUFDL0gsNEJBQTRCLHlEQUF5RCxFQUFFOztBQUN2Riw0QkFBNEIsaURBQWlELEVBQUU7O0FBQy9FLDRCQUE0QixnQ0FBZ0MsRUFBRSIsImZpbGUiOiJob3N0LWZvcm0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJ7XHJcbiAgICBtYXJnaW4tdG9wOiAxMDBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaGVhZGluZ3tcclxuICAgIGNvbG9yOiAgI2VkMWMyNCAgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi10b3A6IDE1cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLnJlcXVpcmVkLWZpZWxke1xyXG4gICAgY29sb3I6ICNlZDFjMjQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmhlYWRpbmctc217XHJcbiAgICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAgI2VkMWMyNCAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmVycm9ye1xyXG4gICAgY29sb3I6ICAjZWQxYzI0ICAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5cclxuLmltYWdlLWNlbnRlcntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDUwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuXHJcbi5idG4tZGFuZ2VyIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojZWQxYzI0ICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItY29sb3I6ICNlZDFjMjQgIWltcG9ydGFudDsgXHJcbn1cclxuLm1hci0yMHtcclxuICAgIG1hcmdpbi10b3A6IDUwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6MzIwcHgpICB7IC8qIHNtYXJ0cGhvbmVzLCBwb3J0cmFpdCBpUGhvbmUsIHBvcnRyYWl0IDQ4MHgzMjAgcGhvbmVzIChBbmRyb2lkKSAqL1xyXG4gICAgLmZvcm0tbGFiZWwge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB9XHJcbiAgICAubGFiZWwtcmFkaW97XHJcbiAgICAgICAgZm9udC1zaXplOiAxM3B4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIChtaW4td2lkdGg6NDgwcHgpICB7IC8qIHNtYXJ0cGhvbmVzLCBBbmRyb2lkIHBob25lcywgbGFuZHNjYXBlIGlQaG9uZSAqLyBcclxuICAgIC5mb3JtLWxhYmVsIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgfVxyXG4gICAgLmxhYmVsLXJhZGlve1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTNweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcbkBtZWRpYSAobWluLXdpZHRoOjYwMHB4KSAgeyAvKiBwb3J0cmFpdCB0YWJsZXRzLCBwb3J0cmFpdCBpUGFkLCBlLXJlYWRlcnMgKE5vb2svS2luZGxlKSwgbGFuZHNjYXBlIDgwMHg0ODAgcGhvbmVzIChBbmRyb2lkKSAqLyB9XHJcbkBtZWRpYSAobWluLXdpZHRoOjgwMXB4KSAgeyAvKiB0YWJsZXQsIGxhbmRzY2FwZSBpUGFkLCBsby1yZXMgbGFwdG9wcyBhbmRzIGRlc2t0b3BzICovIH1cclxuQG1lZGlhIChtaW4td2lkdGg6MTAyNXB4KSB7IC8qIGJpZyBsYW5kc2NhcGUgdGFibGV0cywgbGFwdG9wcywgYW5kIGRlc2t0b3BzICovIH1cclxuQG1lZGlhIChtaW4td2lkdGg6MTI4MXB4KSB7IC8qIGhpLXJlcyBsYXB0b3BzIGFuZCBkZXNrdG9wcyAqLyB9Il19 */"] });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
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

/***/ "EnSQ":
/*!******************************************!*\
  !*** ./src/app/services/data.service.ts ***!
  \******************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class DataService {
    constructor(http) {
        this.http = http;
    }
    getcsvData(url) {
        return this.http.get(url, {}).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])((data) => {
            return data;
        }));
    }
    ;
    addLead(url, data) {
        let body = JSON.stringify(data);
        return this.http.post(url, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])((data) => {
            return data;
        }));
    }
    ;
}
DataService.ɵfac = function DataService_Factory(t) { return new (t || DataService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
DataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: DataService, factory: DataService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "JEeY":
/*!******************************************************!*\
  !*** ./src/app/interceptors/response.interceptor.ts ***!
  \******************************************************/
/*! exports provided: ResponseInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResponseInterceptor", function() { return ResponseInterceptor; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




class ResponseInterceptor {
    constructor() {
        this.logoutCheck = false;
    }
    intercept(request, next) {
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((ev) => {
            var _a;
            if (ev instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpResponse"]) {
                if (request.method !== 'GET') {
                    if ((_a = ev.body) === null || _a === void 0 ? void 0 : _a.msg) {
                        // this.notifier(ev.body.msg, 'success');
                    }
                }
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])((error) => {
            console.log('IN error', error);
            // If Notification (toast) service is present we can show current error notification
            this.errorHandler(error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error);
        }));
    }
    errorHandler(error, type = 'error') {
        let errorList = error.error;
        let errorText = errorList.reason ? errorList.reason : errorList.message;
        switch (error.status) {
            case 401: {
                this.notifier('Access token expired', type);
                // this.auth.logout(ApiRoutes.logOut, {token : ''});
                break;
            }
            case 400: {
                this.notifier(errorText, type);
                break;
            }
            case 403: {
                this.notifier(errorText, type);
                break;
            }
            case 500: {
                this.notifier(errorText, type);
                break;
            }
            case 404: {
                this.notifier(errorText, type);
                //   this.ls.clear();
                //   this._r.navigate(['/' + this.routes.login], { replaceUrl: true });
                break;
            }
            case 0: {
                this.notifier('Seems there is some problem with the server. Try later!', type);
                break;
            }
        }
    }
    notifier(msg, type = 'success') {
        // if (type === 'error') {
        //     this.toastr.error(msg);
        //     return;
        // }
        // this.toastr.success('Success');
    }
}
ResponseInterceptor.ɵfac = function ResponseInterceptor_Factory(t) { return new (t || ResponseInterceptor)(); };
ResponseInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: ResponseInterceptor, factory: ResponseInterceptor.ɵfac });


/***/ }),

/***/ "PC4I":
/*!***************************************!*\
  !*** ./src/app/interceptors/index.ts ***!
  \***************************************/
/*! exports provided: RequestInterceptor, InternetInterceptor, ResponseInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _request_interceptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./request.interceptor */ "ua2D");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RequestInterceptor", function() { return _request_interceptor__WEBPACK_IMPORTED_MODULE_0__["RequestInterceptor"]; });

/* harmony import */ var _network_connectivity_intereptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./network-connectivity.intereptor */ "RPiZ");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InternetInterceptor", function() { return _network_connectivity_intereptor__WEBPACK_IMPORTED_MODULE_1__["InternetInterceptor"]; });

/* harmony import */ var _response_interceptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./response.interceptor */ "JEeY");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ResponseInterceptor", function() { return _response_interceptor__WEBPACK_IMPORTED_MODULE_2__["ResponseInterceptor"]; });






/***/ }),

/***/ "QX6l":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class DashboardComponent {
    constructor() {
        this.heading = `Prefer To be`;
        this.renter = `Renter`;
        this.host = `Host`;
        this.routertoRenter = `/renter-form`;
        this.routertoHost = `/host-form`;
    }
    ngOnInit() {
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(); };
DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], decls: 11, vars: 5, consts: [["role", "main", 1, "content"], [1, "heading"], [1, "row", "mar-20"], [1, "col-md-12", "col-sm"], ["role", "button", "aria-pressed", "true", 1, "btn", "btn-danger", "btn-lg", "active", 2, "width", "50%", 3, "routerLink"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.heading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", ctx.routertoRenter);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.renter);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", ctx.routertoHost);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.host);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: [".content[_ngcontent-%COMP%]{\r\n    margin-top: 100px !important;\r\n    align-items: center;\r\n    text-align: center;\r\n}\r\n\r\n.btn-danger[_ngcontent-%COMP%] {\r\n    color: #fff;\r\n    background-color:#ed1c24 !important;\r\n    border-color: #ed1c24 !important; \r\n}\r\n\r\n.mar-20[_ngcontent-%COMP%]{\r\n    margin-top: 50px !important;\r\n}\r\n\r\n.heading[_ngcontent-%COMP%]{\r\n    color:  #ed1c24  !important;\r\n    margin-top: 15px !important;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksNEJBQTRCO0lBQzVCLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsbUNBQW1DO0lBQ25DLGdDQUFnQztBQUNwQzs7QUFDQTtJQUNJLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLDJCQUEyQjtJQUMzQiwyQkFBMkI7QUFDL0IiLCJmaWxlIjoiZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudHtcclxuICAgIG1hcmdpbi10b3A6IDEwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uYnRuLWRhbmdlciB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6I2VkMWMyNCAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZWQxYzI0ICFpbXBvcnRhbnQ7IFxyXG59XHJcbi5tYXItMjB7XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5oZWFkaW5ne1xyXG4gICAgY29sb3I6ICAjZWQxYzI0ICAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLXRvcDogMTVweCAhaW1wb3J0YW50O1xyXG59Il19 */"] });


/***/ }),

/***/ "RPiZ":
/*!*****************************************************************!*\
  !*** ./src/app/interceptors/network-connectivity.intereptor.ts ***!
  \*****************************************************************/
/*! exports provided: InternetInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InternetInterceptor", function() { return InternetInterceptor; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class InternetInterceptor {
    constructor() { }
    // retuns internet status
    get isOnline() {
        return navigator.onLine;
    }
    intercept(request, next) {
        // check to see if there's internet
        if (!this.isOnline) {
            // if there is no internet, throw a throwError
            // since an error is thrown, the function will terminate here
            console.log('No internet connection');
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["throwError"])({ error: 'No internet connection' });
        }
        else {
            // else return the normal request
            return next.handle(request);
        }
    }
}
InternetInterceptor.ɵfac = function InternetInterceptor_Factory(t) { return new (t || InternetInterceptor)(); };
InternetInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: InternetInterceptor, factory: InternetInterceptor.ɵfac });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class AppComponent {
    constructor() {
        this.title = 'unit-Storage';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 6, vars: 0, consts: [["role", "banner", 1, "toolbar"], ["width", "40", "alt", "Angular Logo", "src", "../assets/images/logo.png"], [1, "spacer"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Unit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["app-root[_ngcontent-%COMP%]{\r\n    font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\r\n    font-size: 20px;\r\n    color: #333;\r\n    box-sizing: border-box;\r\n    -webkit-font-smoothing: antialiased;\r\n    -moz-osx-font-smoothing: grayscale;\r\n  }\r\n\r\n  h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\r\n    margin: 8px 0;\r\n  }\r\n\r\n  p[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n  }\r\n\r\n  .spacer[_ngcontent-%COMP%] {\r\n    flex: 1;\r\n  }\r\n\r\n  .toolbar[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    height: 60px;\r\n    display: flex;\r\n    align-items: center;\r\n    background-color: #ed1c24;\r\n    color: white;\r\n    font-weight: 600;\r\n  }\r\n\r\n  .toolbar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    margin: 0 5px 0 35px;\r\n  }\r\n\r\n  .content[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    margin: 82px auto 32px;\r\n    padding: 0 16px;\r\n    \r\n    flex-direction: column;\r\n    \r\n  }\r\n\r\n  svg.material-icons[_ngcontent-%COMP%] {\r\n    height: 24px;\r\n    width: auto;\r\n  }\r\n\r\n  svg.material-icons[_ngcontent-%COMP%]:not(:last-child) {\r\n    margin-right: 8px;\r\n  }\r\n\r\n  .card[_ngcontent-%COMP%]   svg.material-icons[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\r\n    fill: #888;\r\n  }\r\n\r\n  .card-container[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: center;\r\n    margin-top: 16px;\r\n  }\r\n\r\n  .card[_ngcontent-%COMP%] {\r\n    border-radius: 4px;\r\n    border: 1px solid #eee;\r\n    background-color: #fafafa;\r\n    height: 40px;\r\n    width: 200px;\r\n    margin: 0 8px 16px;\r\n    padding: 16px;\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: center;\r\n    align-items: center;\r\n    transition: all 0.2s ease-in-out;\r\n    line-height: 24px;\r\n  }\r\n\r\n  .card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(:last-child) {\r\n    margin-right: 0;\r\n  }\r\n\r\n  .card.card-small[_ngcontent-%COMP%] {\r\n    height: 16px;\r\n    width: 168px;\r\n  }\r\n\r\n  .card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(.highlight-card) {\r\n    cursor: pointer;\r\n  }\r\n\r\n  .card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(.highlight-card):hover {\r\n    transform: translateY(-3px);\r\n    box-shadow: 0 4px 17px rgba(0, 0, 0, 0.35);\r\n  }\r\n\r\n  .card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(.highlight-card):hover   .material-icons[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\r\n    fill: rgb(105, 103, 103);\r\n  }\r\n\r\n  .card.highlight-card[_ngcontent-%COMP%] {\r\n    background-color: #1976d2;\r\n    color: white;\r\n    font-weight: 600;\r\n    border: none;\r\n    width: auto;\r\n    min-width: 30%;\r\n    position: relative;\r\n  }\r\n\r\n  .card.card.highlight-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    margin-left: 60px;\r\n  }\r\n\r\n  svg#rocket[_ngcontent-%COMP%] {\r\n    width: 80px;\r\n    position: absolute;\r\n    left: -10px;\r\n    top: -24px;\r\n  }\r\n\r\n  svg#rocket-smoke[_ngcontent-%COMP%] {\r\n    height: calc(100vh - 95px);\r\n    position: absolute;\r\n    top: 10px;\r\n    right: 180px;\r\n    z-index: -10;\r\n  }\r\n\r\n  a[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:visited, a[_ngcontent-%COMP%]:hover {\r\n    color: #1976d2;\r\n    text-decoration: none;\r\n  }\r\n\r\n  a[_ngcontent-%COMP%]:hover {\r\n    color: #125699;\r\n  }\r\n\r\n  .terminal[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    width: 80%;\r\n    max-width: 600px;\r\n    border-radius: 6px;\r\n    padding-top: 45px;\r\n    margin-top: 8px;\r\n    overflow: hidden;\r\n    background-color: rgb(15, 15, 16);\r\n  }\r\n\r\n  .terminal[_ngcontent-%COMP%]::before {\r\n    content: \"\\2022 \\2022 \\2022\";\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    height: 4px;\r\n    background: rgb(58, 58, 58);\r\n    color: #c2c3c4;\r\n    width: 100%;\r\n    font-size: 2rem;\r\n    line-height: 0;\r\n    padding: 14px 0;\r\n    text-indent: 4px;\r\n  }\r\n\r\n  .terminal[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%] {\r\n    font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\r\n    color: white;\r\n    padding: 0 1rem 1rem;\r\n    margin: 0;\r\n  }\r\n\r\n  .circle-link[_ngcontent-%COMP%] {\r\n    height: 40px;\r\n    width: 40px;\r\n    border-radius: 40px;\r\n    margin: 8px;\r\n    background-color: white;\r\n    border: 1px solid #eeeeee;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    cursor: pointer;\r\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\r\n    transition: 1s ease-out;\r\n  }\r\n\r\n  .circle-link[_ngcontent-%COMP%]:hover {\r\n    transform: translateY(-0.25rem);\r\n    box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);\r\n  }\r\n\r\n  footer[_ngcontent-%COMP%] {\r\n    margin-top: 8px;\r\n    display: flex;\r\n    align-items: center;\r\n    line-height: 20px;\r\n  }\r\n\r\n  footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n  }\r\n\r\n  .github-star-badge[_ngcontent-%COMP%] {\r\n    color: #24292e;\r\n    display: flex;\r\n    align-items: center;\r\n    font-size: 12px;\r\n    padding: 3px 10px;\r\n    border: 1px solid rgba(27,31,35,.2);\r\n    border-radius: 3px;\r\n    background-image: linear-gradient(-180deg,#fafbfc,#eff3f6 90%);\r\n    margin-left: 4px;\r\n    font-weight: 600;\r\n    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;\r\n  }\r\n\r\n  .github-star-badge[_ngcontent-%COMP%]:hover {\r\n    background-image: linear-gradient(-180deg,#f0f3f6,#e6ebf1 90%);\r\n    border-color: rgba(27,31,35,.35);\r\n    background-position: -.5em;\r\n  }\r\n\r\n  .github-star-badge[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\r\n    height: 16px;\r\n    width: 16px;\r\n    margin-right: 4px;\r\n  }\r\n\r\n  svg#clouds[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    bottom: -160px;\r\n    left: -230px;\r\n    z-index: -10;\r\n    width: 1920px;\r\n  }\r\n\r\n  \r\n\r\n  @media screen and (max-width: 767px) {\r\n\r\n    .card-container[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:not(.circle-link), .terminal[_ngcontent-%COMP%] {\r\n      width: 100%;\r\n    }\r\n\r\n    .card[_ngcontent-%COMP%]:not(.highlight-card) {\r\n      height: 16px;\r\n      margin: 8px 0;\r\n    }\r\n\r\n    .card.highlight-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n      margin-left: 72px;\r\n    }\r\n\r\n    svg#rocket-smoke[_ngcontent-%COMP%] {\r\n      right: 120px;\r\n      transform: rotate(-5deg);\r\n    }\r\n  }\r\n\r\n  @media screen and (max-width: 575px) {\r\n    svg#rocket-smoke[_ngcontent-%COMP%] {\r\n      display: none;\r\n      visibility: hidden;\r\n    }\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksMEpBQTBKO0lBQzFKLGVBQWU7SUFDZixXQUFXO0lBQ1gsc0JBQXNCO0lBQ3RCLG1DQUFtQztJQUNuQyxrQ0FBa0M7RUFDcEM7O0VBRUE7Ozs7OztJQU1FLGFBQWE7RUFDZjs7RUFFQTtJQUNFLFNBQVM7RUFDWDs7RUFFQTtJQUNFLE9BQU87RUFDVDs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sT0FBTztJQUNQLFFBQVE7SUFDUixZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLG9CQUFvQjtFQUN0Qjs7RUFHQTtJQUNFLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLHNCQUFzQjtJQUN0QixzQkFBc0I7SUFDdEIseUJBQXlCO0VBQzNCOztFQUVBO0lBQ0UsWUFBWTtJQUNaLFdBQVc7RUFDYjs7RUFFQTtJQUNFLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLFVBQVU7RUFDWjs7RUFFQTtJQUNFLGFBQWE7SUFDYixlQUFlO0lBQ2YsdUJBQXVCO0lBQ3ZCLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsZ0NBQWdDO0lBQ2hDLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxZQUFZO0lBQ1osWUFBWTtFQUNkOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLDJCQUEyQjtJQUMzQiwwQ0FBMEM7RUFDNUM7O0VBRUE7SUFDRSx3QkFBd0I7RUFDMUI7O0VBRUE7SUFDRSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osV0FBVztJQUNYLGNBQWM7SUFDZCxrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxVQUFVO0VBQ1o7O0VBRUE7SUFDRSwwQkFBMEI7SUFDMUIsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxZQUFZO0lBQ1osWUFBWTtFQUNkOztFQUVBOzs7SUFHRSxjQUFjO0lBQ2QscUJBQXFCO0VBQ3ZCOztFQUVBO0lBQ0UsY0FBYztFQUNoQjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixpQ0FBaUM7RUFDbkM7O0VBRUE7SUFDRSw0QkFBNEI7SUFDNUIsa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1AsV0FBVztJQUNYLDJCQUEyQjtJQUMzQixjQUFjO0lBQ2QsV0FBVztJQUNYLGVBQWU7SUFDZixjQUFjO0lBQ2QsZUFBZTtJQUNmLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLG9FQUFvRTtJQUNwRSxZQUFZO0lBQ1osb0JBQW9CO0lBQ3BCLFNBQVM7RUFDWDs7RUFFQTtJQUNFLFlBQVk7SUFDWixXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCx1QkFBdUI7SUFDdkIseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZix3RUFBd0U7SUFDeEUsdUJBQXVCO0VBQ3pCOztFQUVBO0lBQ0UsK0JBQStCO0lBQy9CLDJDQUEyQztFQUM3Qzs7RUFFQTtJQUNFLGVBQWU7SUFDZixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGFBQWE7SUFDYixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxjQUFjO0lBQ2QsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLG1DQUFtQztJQUNuQyxrQkFBa0I7SUFDbEIsOERBQThEO0lBQzlELGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsa0lBQWtJO0VBQ3BJOztFQUVBO0lBQ0UsOERBQThEO0lBQzlELGdDQUFnQztJQUNoQywwQkFBMEI7RUFDNUI7O0VBRUE7SUFDRSxZQUFZO0lBQ1osV0FBVztJQUNYLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGVBQWU7SUFDZixjQUFjO0lBQ2QsWUFBWTtJQUNaLFlBQVk7SUFDWixhQUFhO0VBQ2Y7O0VBR0Esc0JBQXNCOztFQUN0Qjs7SUFFRTs7TUFFRSxXQUFXO0lBQ2I7O0lBRUE7TUFDRSxZQUFZO01BQ1osYUFBYTtJQUNmOztJQUVBO01BQ0UsaUJBQWlCO0lBQ25COztJQUVBO01BQ0UsWUFBWTtNQUNaLHdCQUF3QjtJQUMxQjtFQUNGOztFQUVBO0lBQ0U7TUFDRSxhQUFhO01BQ2Isa0JBQWtCO0lBQ3BCO0VBQ0YiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhcHAtcm9vdHtcclxuICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmLCBcIkFwcGxlIENvbG9yIEVtb2ppXCIsIFwiU2Vnb2UgVUkgRW1vamlcIiwgXCJTZWdvZSBVSSBTeW1ib2xcIjtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xyXG4gICAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcclxuICB9XHJcblxyXG4gIGgxLFxyXG4gIGgyLFxyXG4gIGgzLFxyXG4gIGg0LFxyXG4gIGg1LFxyXG4gIGg2IHtcclxuICAgIG1hcmdpbjogOHB4IDA7XHJcbiAgfVxyXG5cclxuICBwIHtcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcblxyXG4gIC5zcGFjZXIge1xyXG4gICAgZmxleDogMTtcclxuICB9XHJcblxyXG4gIC50b29sYmFyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGhlaWdodDogNjBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VkMWMyNDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgfVxyXG5cclxuICAudG9vbGJhciBpbWcge1xyXG4gICAgbWFyZ2luOiAwIDVweCAwIDM1cHg7XHJcbiAgfVxyXG5cclxuXHJcbiAgLmNvbnRlbnQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG1hcmdpbjogODJweCBhdXRvIDMycHg7XHJcbiAgICBwYWRkaW5nOiAwIDE2cHg7XHJcbiAgICAvKiBtYXgtd2lkdGg6IDk2MHB4OyAqL1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIC8qIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICovXHJcbiAgfVxyXG5cclxuICBzdmcubWF0ZXJpYWwtaWNvbnMge1xyXG4gICAgaGVpZ2h0OiAyNHB4O1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgfVxyXG5cclxuICBzdmcubWF0ZXJpYWwtaWNvbnM6bm90KDpsYXN0LWNoaWxkKSB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDhweDtcclxuICB9XHJcblxyXG4gIC5jYXJkIHN2Zy5tYXRlcmlhbC1pY29ucyBwYXRoIHtcclxuICAgIGZpbGw6ICM4ODg7XHJcbiAgfVxyXG5cclxuICAuY2FyZC1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogMTZweDtcclxuICB9XHJcblxyXG4gIC5jYXJkIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgbWFyZ2luOiAwIDhweCAxNnB4O1xyXG4gICAgcGFkZGluZzogMTZweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgICBsaW5lLWhlaWdodDogMjRweDtcclxuICB9XHJcblxyXG4gIC5jYXJkLWNvbnRhaW5lciAuY2FyZDpub3QoOmxhc3QtY2hpbGQpIHtcclxuICAgIG1hcmdpbi1yaWdodDogMDtcclxuICB9XHJcblxyXG4gIC5jYXJkLmNhcmQtc21hbGwge1xyXG4gICAgaGVpZ2h0OiAxNnB4O1xyXG4gICAgd2lkdGg6IDE2OHB4O1xyXG4gIH1cclxuXHJcbiAgLmNhcmQtY29udGFpbmVyIC5jYXJkOm5vdCguaGlnaGxpZ2h0LWNhcmQpIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcblxyXG4gIC5jYXJkLWNvbnRhaW5lciAuY2FyZDpub3QoLmhpZ2hsaWdodC1jYXJkKTpob3ZlciB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTNweCk7XHJcbiAgICBib3gtc2hhZG93OiAwIDRweCAxN3B4IHJnYmEoMCwgMCwgMCwgMC4zNSk7XHJcbiAgfVxyXG5cclxuICAuY2FyZC1jb250YWluZXIgLmNhcmQ6bm90KC5oaWdobGlnaHQtY2FyZCk6aG92ZXIgLm1hdGVyaWFsLWljb25zIHBhdGgge1xyXG4gICAgZmlsbDogcmdiKDEwNSwgMTAzLCAxMDMpO1xyXG4gIH1cclxuXHJcbiAgLmNhcmQuaGlnaGxpZ2h0LWNhcmQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE5NzZkMjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIG1pbi13aWR0aDogMzAlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIH1cclxuXHJcbiAgLmNhcmQuY2FyZC5oaWdobGlnaHQtY2FyZCBzcGFuIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA2MHB4O1xyXG4gIH1cclxuXHJcbiAgc3ZnI3JvY2tldCB7XHJcbiAgICB3aWR0aDogODBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IC0xMHB4O1xyXG4gICAgdG9wOiAtMjRweDtcclxuICB9XHJcblxyXG4gIHN2ZyNyb2NrZXQtc21va2Uge1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gOTVweCk7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDEwcHg7XHJcbiAgICByaWdodDogMTgwcHg7XHJcbiAgICB6LWluZGV4OiAtMTA7XHJcbiAgfVxyXG5cclxuICBhLFxyXG4gIGE6dmlzaXRlZCxcclxuICBhOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjMTk3NmQyO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIH1cclxuXHJcbiAgYTpob3ZlciB7XHJcbiAgICBjb2xvcjogIzEyNTY5OTtcclxuICB9XHJcblxyXG4gIC50ZXJtaW5hbCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgbWF4LXdpZHRoOiA2MDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgIHBhZGRpbmctdG9wOiA0NXB4O1xyXG4gICAgbWFyZ2luLXRvcDogOHB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNSwgMTUsIDE2KTtcclxuICB9XHJcblxyXG4gIC50ZXJtaW5hbDo6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6IFwiXFwyMDIyIFxcMjAyMiBcXDIwMjJcIjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBoZWlnaHQ6IDRweDtcclxuICAgIGJhY2tncm91bmQ6IHJnYig1OCwgNTgsIDU4KTtcclxuICAgIGNvbG9yOiAjYzJjM2M0O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICBsaW5lLWhlaWdodDogMDtcclxuICAgIHBhZGRpbmc6IDE0cHggMDtcclxuICAgIHRleHQtaW5kZW50OiA0cHg7XHJcbiAgfVxyXG5cclxuICAudGVybWluYWwgcHJlIHtcclxuICAgIGZvbnQtZmFtaWx5OiBTRk1vbm8tUmVndWxhcixDb25zb2xhcyxMaWJlcmF0aW9uIE1vbm8sTWVubG8sbW9ub3NwYWNlO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMCAxcmVtIDFyZW07XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG5cclxuICAuY2lyY2xlLWxpbmsge1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xyXG4gICAgbWFyZ2luOiA4cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlZWVlZWU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMjQpO1xyXG4gICAgdHJhbnNpdGlvbjogMXMgZWFzZS1vdXQ7XHJcbiAgfVxyXG5cclxuICAuY2lyY2xlLWxpbms6aG92ZXIge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0wLjI1cmVtKTtcclxuICAgIGJveC1zaGFkb3c6IDBweCAzcHggMTVweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgfVxyXG5cclxuICBmb290ZXIge1xyXG4gICAgbWFyZ2luLXRvcDogOHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICB9XHJcblxyXG4gIGZvb3RlciBhIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLmdpdGh1Yi1zdGFyLWJhZGdlIHtcclxuICAgIGNvbG9yOiAjMjQyOTJlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBwYWRkaW5nOiAzcHggMTBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjcsMzEsMzUsLjIpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KC0xODBkZWcsI2ZhZmJmYywjZWZmM2Y2IDkwJSk7XHJcbiAgICBtYXJnaW4tbGVmdDogNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLEJsaW5rTWFjU3lzdGVtRm9udCxTZWdvZSBVSSxIZWx2ZXRpY2EsQXJpYWwsc2Fucy1zZXJpZixBcHBsZSBDb2xvciBFbW9qaSxTZWdvZSBVSSBFbW9qaSxTZWdvZSBVSSBTeW1ib2w7XHJcbiAgfVxyXG5cclxuICAuZ2l0aHViLXN0YXItYmFkZ2U6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KC0xODBkZWcsI2YwZjNmNiwjZTZlYmYxIDkwJSk7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYmEoMjcsMzEsMzUsLjM1KTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0uNWVtO1xyXG4gIH1cclxuXHJcbiAgLmdpdGh1Yi1zdGFyLWJhZGdlIC5tYXRlcmlhbC1pY29ucyB7XHJcbiAgICBoZWlnaHQ6IDE2cHg7XHJcbiAgICB3aWR0aDogMTZweDtcclxuICAgIG1hcmdpbi1yaWdodDogNHB4O1xyXG4gIH1cclxuXHJcbiAgc3ZnI2Nsb3VkcyB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBib3R0b206IC0xNjBweDtcclxuICAgIGxlZnQ6IC0yMzBweDtcclxuICAgIHotaW5kZXg6IC0xMDtcclxuICAgIHdpZHRoOiAxOTIwcHg7XHJcbiAgfVxyXG5cclxuXHJcbiAgLyogUmVzcG9uc2l2ZSBTdHlsZXMgKi9cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xyXG5cclxuICAgIC5jYXJkLWNvbnRhaW5lciA+ICo6bm90KC5jaXJjbGUtbGluaykgLFxyXG4gICAgLnRlcm1pbmFsIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcblxyXG4gICAgLmNhcmQ6bm90KC5oaWdobGlnaHQtY2FyZCkge1xyXG4gICAgICBoZWlnaHQ6IDE2cHg7XHJcbiAgICAgIG1hcmdpbjogOHB4IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLmNhcmQuaGlnaGxpZ2h0LWNhcmQgc3BhbiB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiA3MnB4O1xyXG4gICAgfVxyXG5cclxuICAgIHN2ZyNyb2NrZXQtc21va2Uge1xyXG4gICAgICByaWdodDogMTIwcHg7XHJcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKC01ZGVnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NXB4KSB7XHJcbiAgICBzdmcjcm9ja2V0LXNtb2tlIHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgfVxyXG4gIH0iXX0= */"] });


/***/ }),

/***/ "TxfM":
/*!**************************************************!*\
  !*** ./src/app/lead-form/lead-form.component.ts ***!
  \**************************************************/
/*! exports provided: LeadFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeadFormComponent", function() { return LeadFormComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/data.service */ "EnSQ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");






function LeadFormComponent_div_0_div_12_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "First Name is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LeadFormComponent_div_0_div_12_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Max Length exceeded.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LeadFormComponent_div_0_div_12_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Only characters are allowed.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LeadFormComponent_div_0_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, LeadFormComponent_div_0_div_12_div_1_Template, 2, 0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, LeadFormComponent_div_0_div_12_div_2_Template, 2, 0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, LeadFormComponent_div_0_div_12_div_3_Template, 2, 0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.g.name.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.g.name.errors.maxlength);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.g.name.errors.pattern);
} }
function LeadFormComponent_div_0_div_20_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Phone number is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LeadFormComponent_div_0_div_20_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Enter a valid Phone number.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LeadFormComponent_div_0_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, LeadFormComponent_div_0_div_20_div_1_Template, 2, 0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, LeadFormComponent_div_0_div_20_div_2_Template, 2, 0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.g.phoneNo.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.g.phoneNo.errors.pattern);
} }
function LeadFormComponent_div_0_div_28_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Email is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LeadFormComponent_div_0_div_28_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Email must be a valid email address.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LeadFormComponent_div_0_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, LeadFormComponent_div_0_div_28_div_1_Template, 2, 0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, LeadFormComponent_div_0_div_28_div_2_Template, 2, 0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.g.emailAddress.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.g.emailAddress.errors.email);
} }
function LeadFormComponent_div_0_div_45_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "City and Street Info is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LeadFormComponent_div_0_div_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, LeadFormComponent_div_0_div_45_div_1_Template, 2, 0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r5.g.cityAndstreetInfo.errors.required);
} }
function LeadFormComponent_div_0_div_54_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Spot Info is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LeadFormComponent_div_0_div_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, LeadFormComponent_div_0_div_54_div_1_Template, 2, 0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r6.g.spotNeeded.errors.required);
} }
function LeadFormComponent_div_0_div_65_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Spot Size is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LeadFormComponent_div_0_div_65_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, LeadFormComponent_div_0_div_65_div_1_Template, 2, 0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r7.g.spotSize.errors.required);
} }
function LeadFormComponent_div_0_div_74_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Information is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LeadFormComponent_div_0_div_74_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, LeadFormComponent_div_0_div_74_div_1_Template, 2, 0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r8.g.preticerInfo.errors.required);
} }
function LeadFormComponent_div_0_option_87_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const s_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", s_r26.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](s_r26.title);
} }
function LeadFormComponent_div_0_div_88_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Session Info is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LeadFormComponent_div_0_div_88_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, LeadFormComponent_div_0_div_88_div_1_Template, 2, 0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r10.g.firstPreticeSession.errors.required);
} }
function LeadFormComponent_div_0_div_99_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " From Time is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LeadFormComponent_div_0_div_99_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, LeadFormComponent_div_0_div_99_div_1_Template, 2, 0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r11.g.timeFrom.errors.required);
} }
function LeadFormComponent_div_0_div_107_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Until Time is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LeadFormComponent_div_0_div_107_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, LeadFormComponent_div_0_div_107_div_1_Template, 2, 0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r12.g.timeUntil.errors.required);
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
function LeadFormComponent_div_0_div_114_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "input", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function LeadFormComponent_div_0_div_114_Template_input_change_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r32); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r31.onCheckboxChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const web_r30 = ctx.$implicit;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](3, _c0, ctx_r13.isSubmitted));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", web_r30.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", web_r30.name, " ");
} }
function LeadFormComponent_div_0_div_129_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Host preference is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LeadFormComponent_div_0_div_129_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, LeadFormComponent_div_0_div_129_div_1_Template, 2, 0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r14.g.needHostSession.errors.required);
} }
function LeadFormComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "form", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function LeadFormComponent_div_0_Template_form_ngSubmit_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r35); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r34.addlead(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h5", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, LeadFormComponent_div_0_div_12_Template, 4, 3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, " Phone Number ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, LeadFormComponent_div_0_div_20_Template, 3, 2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, " Email Address ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, LeadFormComponent_div_0_div_28_Template, 3, 2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "h5", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, " Give us your ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "city");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, " and ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "street number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, " so we can find the closest session spot to you. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](44, "textarea", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](45, LeadFormComponent_div_0_div_45_Template, 2, 1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "How big of a spot do you need? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](53, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](54, LeadFormComponent_div_0_div_54_Template, 2, 1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "Approximate ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, "square feet");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, ". ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](64, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](65, LeadFormComponent_div_0_div_65_Template, 2, 1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, "Who is going to be practicing here most of the time? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](72, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](73, "textarea", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](74, LeadFormComponent_div_0_div_74_Template, 2, 1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "h5", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](81, " When do you want to takea tour of your practice spot? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](83, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "select", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function LeadFormComponent_div_0_Template_select_change_84_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r35); const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r36.onChange($event.target); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](86, "Select Day");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](87, LeadFormComponent_div_0_option_87_Template, 2, 2, "option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](88, LeadFormComponent_div_0_div_88_Template, 2, 1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "h4", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](91, "At what time?");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](95, "From");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](97, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](98, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](99, LeadFormComponent_div_0_div_99_Template, 2, 1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](102, "label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](103, "Until");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](105, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](106, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](107, LeadFormComponent_div_0_div_107_Template, 2, 1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](108, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](109, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](110, "label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](111, "What kind of floor do you prefer?");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](112, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](113, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](114, LeadFormComponent_div_0_div_114_Template, 4, 5, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](115, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](116, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](117, "label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](118, "Can the host session with you?");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](119, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](120, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](121, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](122, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](123, "label", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](124, " Yes, host is welcome. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](125, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](126, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](127, "label", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](128, " No, prefer my own spot, thanks! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](129, LeadFormComponent_div_0_div_129_Template, 2, 1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](130, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](131, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](132, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](133, "label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](134, "Extra notes: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](135, "textarea", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](136, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](137, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r0.addleadform);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.pTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](29, _c0, ctx_r0.isSubmitted && ctx_r0.g.name.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.isSubmitted && ctx_r0.g.name.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](31, _c0, ctx_r0.isSubmitted && ctx_r0.g.phoneNo.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.isSubmitted && ctx_r0.g.phoneNo.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](33, _c0, ctx_r0.isSubmitted && ctx_r0.g.emailAddress.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.isSubmitted && ctx_r0.g.emailAddress.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.locTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](35, _c0, ctx_r0.isSubmitted && ctx_r0.g.cityAndstreetInfo.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.isSubmitted && ctx_r0.g.cityAndstreetInfo.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](37, _c0, ctx_r0.isSubmitted && ctx_r0.g.spotNeeded.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.isSubmitted && ctx_r0.g.spotNeeded.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](39, _c0, ctx_r0.isSubmitted && ctx_r0.g.spotSize.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.isSubmitted && ctx_r0.g.spotSize.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](41, _c0, ctx_r0.isSubmitted && ctx_r0.g.preticerInfo.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.isSubmitted && ctx_r0.g.preticerInfo.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.prefTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](43, _c0, ctx_r0.isSubmitted && ctx_r0.g.firstPreticeSession.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.sessions);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.isSubmitted && ctx_r0.g.firstPreticeSession.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](45, _c0, ctx_r0.isSubmitted && ctx_r0.g.timeFrom.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.isSubmitted && ctx_r0.g.timeFrom.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](47, _c0, ctx_r0.isSubmitted && ctx_r0.g.timeUntil.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.isSubmitted && ctx_r0.g.timeUntil.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.websiteList);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](49, _c0, ctx_r0.isSubmitted && ctx_r0.g.needHostSession.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](51, _c0, ctx_r0.isSubmitted && ctx_r0.g.needHostSession.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.isSubmitted && ctx_r0.g.needHostSession.errors);
} }
function LeadFormComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h1", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "a", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.feedback);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", ctx_r1.routeToHome);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.dashboard);
} }
class LeadFormComponent {
    constructor(_fb, _ds) {
        this._fb = _fb;
        this._ds = _ds;
        this.pTitle = `Personal Info`;
        this.locTitle = `Location`;
        this.prefTitle = `Preferences`;
        this.addleadform = _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"];
        this.submitted = false;
        this.sessions = [
            { title: "Sunday", value: "Sun" },
            { title: "Monday", value: "Mon" },
            { title: "Tuesday", value: "Tue" },
            { title: "Wednesday", value: "Wed" },
            { title: "Thrusday", value: "Thr" },
            { title: "Friday", value: "Fri" },
            { title: "Saturday", value: "Sat" }
        ];
        this.websiteList = [
            { id: 1, name: 'Linoleum / Dance floor' },
            { id: 2, name: 'Padded / Gym floor' },
            { id: 3, name: 'Trampoline' },
            { id: 4, name: 'Grass' }
        ];
        this.isSubmitted = false;
        this.thanks = false;
        this.feedback = `Thank for your Feedback.`;
        this.dashboard = `Back to Home`;
        this.routeToHome = `/dashboard`;
    }
    ngOnInit() {
        this.addLead();
    }
    addLead() {
        this.addleadform = this._fb.group({
            name: [
                "",
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].maxLength(50),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern("^[a-zA-Z ]+$"),
                ],
            ],
            phoneNo: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].maxLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern("^[0-9]*$")]],
            emailAddress: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].email]],
            cityAndstreetInfo: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            spotNeeded: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            spotSize: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            preticerInfo: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            firstPreticeSession: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            timeFrom: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            timeUntil: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            floorPreference: this._fb.array([], [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
            needHostSession: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            notes: [""],
            unitLocation: ["null"],
            userType: ["Renter"],
            costperDay: ["null"],
            costperMonth: ["null"],
            spotDesc: ["null"],
            renterTour: ["null"],
            renterPractice: ["null"],
            musicPreference: ["null"]
        });
    }
    get g() { return this.addleadform.controls; }
    ;
    addlead() {
        if (this.addleadform.invalid) {
            this.isSubmitted = true;
            return;
        }
        if (this.addleadform.value) {
            if (this.addleadform.value.floorPreference.length) {
                this.addleadform.value.floorPreference = this.addleadform.value.floorPreference.toString();
                this._ds.addLead('http://52.22.88.240:8000/publish-lead/', this.addleadform.value).subscribe(res => {
                    if (!!res && !!res.status) {
                        console.log(res);
                        this.addleadform.reset();
                        this.thanks = true;
                    }
                }, error => {
                    console.log(error);
                });
            }
        }
    }
    onChange(ev) {
        console.log(ev);
    }
    onCheckboxChange(e) {
        const website = this.addleadform.get('floorPreference');
        if (e.target.checked) {
            website.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](e.target.value));
        }
        else {
            const index = website.controls.findIndex(x => x.value === e.target.value);
            website.removeAt(index);
        }
    }
}
LeadFormComponent.ɵfac = function LeadFormComponent_Factory(t) { return new (t || LeadFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"])); };
LeadFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LeadFormComponent, selectors: [["lead-form"]], decls: 2, vars: 2, consts: [["class", "container", 4, "ngIf"], [1, "container"], [3, "formGroup", "ngSubmit"], [1, "heading"], [1, "row"], [1, "col-md-4", "col-sm"], [1, "mb-3"], [1, "form-label"], [1, "required-field"], ["type", "text", "placeholder", "", "formControlName", "name", "name", "name", 1, "form-control", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], ["type", "text", "placeholder", "", "formControlName", "phoneNo", "name", "name", 1, "form-control", 3, "ngClass"], ["type", "text", "placeholder", "", "formControlName", "emailAddress", "name", "name", 1, "form-control", 3, "ngClass"], [1, "col-md-12", "col-sm"], ["placeholder", "", "formControlName", "cityAndstreetInfo", "id", "cityAndstreetInfo", "rows", "3", 1, "form-control", 3, "ngClass"], [1, "col-md-8", "col-sm"], ["type", "text", "placeholder", "", "formControlName", "spotNeeded", "name", "spotNeeded", 1, "form-control", 3, "ngClass"], ["type", "number", "placeholder", "", "formControlName", "spotSize", "name", "spotSize", 1, "form-control", 3, "ngClass"], ["placeholder", "", "formControlName", "preticerInfo", "id", "preticerInfo", "rows", "3", 1, "form-control", 3, "ngClass"], ["aria-label", "courseCategory", "formControlName", "firstPreticeSession", 1, "form-select", "select-box", 3, "ngClass", "change"], ["value", "", "disabled", "", "selected", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "heading-sm"], [1, "col-md-6", "col-sm"], ["type", "time", "placeholder", "", "formControlName", "timeFrom", "name", "timeFrom", 1, "form-control", 3, "ngClass"], ["type", "time", "placeholder", "", "formControlName", "timeUntil", "name", "timeUntil", 1, "form-control", 3, "ngClass"], [3, "ngClass", 4, "ngFor", "ngForOf"], [1, "form-check"], ["type", "radio", "formControlName", "needHostSession", "name", "needHostSession", "value", "Yes, host is welcome.", 1, "form-check-input", 3, "ngClass"], ["for", "flexRadioDisabled", 1, "form-check-label", "label-radio"], ["type", "radio", "formControlName", "needHostSession", "name", "needHostSession", "value", "No, prefer my own spot, thanks!", 1, "form-check-input", 3, "ngClass"], ["for", "flexRadioCheckedDisabled", 1, "form-check-label", "label-radio"], ["placeholder", "", "formControlName", "notes", "id", "exampleFormControlTextarea1", "rows", "3", 1, "form-control"], ["type", "submit", 1, "btn", "btn-danger"], [1, "invalid-feedback"], [4, "ngIf"], [3, "value"], [3, "ngClass"], ["type", "checkbox", 3, "value", "change"], [1, "row", 2, "text-align", "center"], [1, "image-center"], [1, "col-md-12", "col-sm", 2, "margin-top", "30px"], ["role", "button", "aria-pressed", "true", 1, "btn", "btn-danger", "btn-sm", "active", 3, "routerLink"]], template: function LeadFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, LeadFormComponent_div_0_Template, 138, 53, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, LeadFormComponent_div_1_Template, 8, 3, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.thanks);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.thanks);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_z"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["RadioControlValueAccessor"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]], styles: [".heading[_ngcontent-%COMP%]{\r\n    color:  #ed1c24  !important;\r\n    margin-top: 15px !important;\r\n}\r\n\r\n.required-field[_ngcontent-%COMP%]{\r\n    color: #ed1c24 !important;\r\n}\r\n\r\n.heading-sm[_ngcontent-%COMP%]{\r\n    font-size: 12px !important;\r\n    color:  #ed1c24  !important;\r\n}\r\n\r\n.error[_ngcontent-%COMP%]{\r\n    color:  #ed1c24  !important;\r\n}\r\n\r\n.image-center[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    margin-top: 50px !important;\r\n}\r\n\r\n.container[_ngcontent-%COMP%]{\r\n    margin-top: 100px !important;\r\n}\r\n\r\n.btn-danger[_ngcontent-%COMP%] {\r\n    color: #fff;\r\n    background-color:#ed1c24 !important;\r\n    border-color: #ed1c24 !important; \r\n}\r\n\r\n.mar-20[_ngcontent-%COMP%]{\r\n    margin-top: 50px !important;\r\n}\r\n\r\n@media (min-width:320px)  { \r\n    .form-label[_ngcontent-%COMP%] {\r\n        margin-bottom: 0.5rem;\r\n        font-size: 14px;\r\n    }\r\n    .label-radio[_ngcontent-%COMP%]{\r\n        font-size: 13px !important;\r\n    }\r\n}\r\n\r\n@media (min-width:480px)  {  \r\n    .form-label[_ngcontent-%COMP%] {\r\n        margin-bottom: 0.5rem;\r\n        font-size: 14px;\r\n    }\r\n    .label-radio[_ngcontent-%COMP%]{\r\n        font-size: 13px !important;\r\n    }\r\n}\r\n\r\n@media (min-width:600px)  {  }\r\n\r\n@media (min-width:801px)  {  }\r\n\r\n@media (min-width:1025px) {  }\r\n\r\n@media (min-width:1281px) {  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxlYWQtZm9ybS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksMkJBQTJCO0lBQzNCLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLDBCQUEwQjtJQUMxQiwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSwyQkFBMkI7QUFDL0I7O0FBR0E7SUFDSSxrQkFBa0I7SUFDbEIsMkJBQTJCO0FBQy9COztBQUNBO0lBQ0ksNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksV0FBVztJQUNYLG1DQUFtQztJQUNuQyxnQ0FBZ0M7QUFDcEM7O0FBQ0E7SUFDSSwyQkFBMkI7QUFDL0I7O0FBR0EsNEJBQTRCLG9FQUFvRTtJQUM1RjtRQUNJLHFCQUFxQjtRQUNyQixlQUFlO0lBQ25CO0lBQ0E7UUFDSSwwQkFBMEI7SUFDOUI7QUFDSjs7QUFDQSw0QkFBNEIsa0RBQWtEO0lBQzFFO1FBQ0kscUJBQXFCO1FBQ3JCLGVBQWU7SUFDbkI7SUFDQTtRQUNJLDBCQUEwQjtJQUM5QjtBQUNKOztBQUNBLDRCQUE0QixpR0FBaUcsRUFBRTs7QUFDL0gsNEJBQTRCLHlEQUF5RCxFQUFFOztBQUN2Riw0QkFBNEIsaURBQWlELEVBQUU7O0FBQy9FLDRCQUE0QixnQ0FBZ0MsRUFBRSIsImZpbGUiOiJsZWFkLWZvcm0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkaW5ne1xyXG4gICAgY29sb3I6ICAjZWQxYzI0ICAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLXRvcDogMTVweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucmVxdWlyZWQtZmllbGR7XHJcbiAgICBjb2xvcjogI2VkMWMyNCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaGVhZGluZy1zbXtcclxuICAgIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6ICAjZWQxYzI0ICAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZXJyb3J7XHJcbiAgICBjb2xvcjogICNlZDFjMjQgICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcblxyXG4uaW1hZ2UtY2VudGVye1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogNTBweCAhaW1wb3J0YW50O1xyXG59XHJcbi5jb250YWluZXJ7XHJcbiAgICBtYXJnaW4tdG9wOiAxMDBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYnRuLWRhbmdlciB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6I2VkMWMyNCAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZWQxYzI0ICFpbXBvcnRhbnQ7IFxyXG59XHJcbi5tYXItMjB7XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDozMjBweCkgIHsgLyogc21hcnRwaG9uZXMsIHBvcnRyYWl0IGlQaG9uZSwgcG9ydHJhaXQgNDgweDMyMCBwaG9uZXMgKEFuZHJvaWQpICovXHJcbiAgICAuZm9ybS1sYWJlbCB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIH1cclxuICAgIC5sYWJlbC1yYWRpb3tcclxuICAgICAgICBmb250LXNpemU6IDEzcHggIWltcG9ydGFudDtcclxuICAgIH1cclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDo0ODBweCkgIHsgLyogc21hcnRwaG9uZXMsIEFuZHJvaWQgcGhvbmVzLCBsYW5kc2NhcGUgaVBob25lICovIFxyXG4gICAgLmZvcm0tbGFiZWwge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB9XHJcbiAgICAubGFiZWwtcmFkaW97XHJcbiAgICAgICAgZm9udC1zaXplOiAxM3B4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIChtaW4td2lkdGg6NjAwcHgpICB7IC8qIHBvcnRyYWl0IHRhYmxldHMsIHBvcnRyYWl0IGlQYWQsIGUtcmVhZGVycyAoTm9vay9LaW5kbGUpLCBsYW5kc2NhcGUgODAweDQ4MCBwaG9uZXMgKEFuZHJvaWQpICovIH1cclxuQG1lZGlhIChtaW4td2lkdGg6ODAxcHgpICB7IC8qIHRhYmxldCwgbGFuZHNjYXBlIGlQYWQsIGxvLXJlcyBsYXB0b3BzIGFuZHMgZGVza3RvcHMgKi8gfVxyXG5AbWVkaWEgKG1pbi13aWR0aDoxMDI1cHgpIHsgLyogYmlnIGxhbmRzY2FwZSB0YWJsZXRzLCBsYXB0b3BzLCBhbmQgZGVza3RvcHMgKi8gfVxyXG5AbWVkaWEgKG1pbi13aWR0aDoxMjgxcHgpIHsgLyogaGktcmVzIGxhcHRvcHMgYW5kIGRlc2t0b3BzICovIH0iXX0= */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _interceptors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./interceptors */ "PC4I");
/* harmony import */ var _lead_form_lead_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lead-form/lead-form.component */ "TxfM");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "QX6l");
/* harmony import */ var _host_form_host_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./host-form/host-form.component */ "9BVj");
/* harmony import */ var _thanks_thanks_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./thanks/thanks.component */ "ci+9");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ "fXoL");












class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({ providers: [
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HTTP_INTERCEPTORS"], useClass: _interceptors__WEBPACK_IMPORTED_MODULE_5__["InternetInterceptor"], multi: true },
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HTTP_INTERCEPTORS"], useClass: _interceptors__WEBPACK_IMPORTED_MODULE_5__["RequestInterceptor"], multi: true },
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HTTP_INTERCEPTORS"], useClass: _interceptors__WEBPACK_IMPORTED_MODULE_5__["ResponseInterceptor"], multi: true },
        { provide: _angular_common__WEBPACK_IMPORTED_MODULE_10__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_10__["HashLocationStrategy"] }
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _lead_form_lead_form_component__WEBPACK_IMPORTED_MODULE_6__["LeadFormComponent"],
        _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__["DashboardComponent"],
        _host_form_host_form_component__WEBPACK_IMPORTED_MODULE_8__["HostFormComponent"],
        _thanks_thanks_component__WEBPACK_IMPORTED_MODULE_9__["ThanksComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"]] }); })();


/***/ }),

/***/ "ci+9":
/*!********************************************!*\
  !*** ./src/app/thanks/thanks.component.ts ***!
  \********************************************/
/*! exports provided: ThanksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThanksComponent", function() { return ThanksComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/data.service */ "EnSQ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



function ThanksComponent_table_1_ng_container_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "th", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const user_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r3 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r2.phoneNo);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r2.emailAddress);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r2.userType);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r2 == null ? null : user_r2.cityAndstreetInfo);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r2 == null ? null : user_r2.unitLocation);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r2 == null ? null : user_r2.spotDesc);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r2 == null ? null : user_r2.spotSize);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r2 == null ? null : user_r2.costperDay);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r2 == null ? null : user_r2.costperMonth);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r2 == null ? null : user_r2.timeFrom);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r2 == null ? null : user_r2.timeUntil);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r2.floorPreference);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r2 == null ? null : user_r2.renterTour);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r2 == null ? null : user_r2.renterPractice);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r2 == null ? null : user_r2.needHostSession);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r2 == null ? null : user_r2.notes);
} }
function ThanksComponent_table_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Phone No.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "City And streetInfo ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Unit Location");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "th", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Spot Desc");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "th", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Spot Size");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "th", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Cost/Day($)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "th", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Cost/Month($)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "th", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "From");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "th", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Until");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "th", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Floor Preference");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "th", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "renter Tour");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "th", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "renter Practice");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "th", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Host Session");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "th", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Notes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, ThanksComponent_table_1_ng_container_40_Template, 38, 18, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.userList);
} }
class ThanksComponent {
    constructor(_ds) {
        this._ds = _ds;
        this.userList = [];
    }
    ngOnInit() {
        this.loadData();
    }
    loadData() {
        this._ds.getcsvData('http://52.22.88.240:8000/publish-lead/').subscribe(res => {
            if (!!res && !!res.status) {
                this.userList = JSON.parse(res.data);
            }
        }, error => {
            console.log(error);
        });
    }
}
ThanksComponent.ɵfac = function ThanksComponent_Factory(t) { return new (t || ThanksComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"])); };
ThanksComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ThanksComponent, selectors: [["app-thanks"]], decls: 2, vars: 1, consts: [[1, "container"], ["class", "table table-bordered mt-5", 4, "ngIf"], [1, "table", "table-bordered", "mt-5"], ["scope", "col"], [4, "ngFor", "ngForOf"], ["scope", "row"]], template: function ThanksComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ThanksComponent_table_1_Template, 41, 1, "table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userList.length);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: [".container[_ngcontent-%COMP%]{\r\n    margin-top: 100px !important;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRoYW5rcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksNEJBQTRCO0FBQ2hDIiwiZmlsZSI6InRoYW5rcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcntcclxuICAgIG1hcmdpbi10b3A6IDEwMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "ua2D":
/*!*****************************************************!*\
  !*** ./src/app/interceptors/request.interceptor.ts ***!
  \*****************************************************/
/*! exports provided: RequestInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestInterceptor", function() { return RequestInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class RequestInterceptor {
    constructor() { }
    intercept(request, next) {
        request = request.clone({
            setHeaders: {
                'Content-Type': 'application/json',
            }
        });
        return next.handle(request);
    }
}
RequestInterceptor.ɵfac = function RequestInterceptor_Factory(t) { return new (t || RequestInterceptor)(); };
RequestInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: RequestInterceptor, factory: RequestInterceptor.ɵfac });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "QX6l");
/* harmony import */ var _host_form_host_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./host-form/host-form.component */ "9BVj");
/* harmony import */ var _lead_form_lead_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lead-form/lead-form.component */ "TxfM");
/* harmony import */ var _thanks_thanks_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./thanks/thanks.component */ "ci+9");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");







const routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__["DashboardComponent"]
    },
    {
        path: 'renter-form',
        component: _lead_form_lead_form_component__WEBPACK_IMPORTED_MODULE_3__["LeadFormComponent"]
    },
    {
        path: 'host-form',
        component: _host_form_host_form_component__WEBPACK_IMPORTED_MODULE_2__["HostFormComponent"]
    },
    {
        path: 'user-info',
        component: _thanks_thanks_component__WEBPACK_IMPORTED_MODULE_4__["ThanksComponent"]
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map