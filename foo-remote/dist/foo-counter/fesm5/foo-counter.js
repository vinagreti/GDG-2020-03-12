import { ɵɵgetCurrentView, ɵɵelementStart, ɵɵlistener, ɵɵrestoreView, ɵɵnextContext, ɵɵtext, ɵɵpipe, ɵɵelementEnd, ɵɵadvance, ɵɵtextInterpolate1, ɵɵpipeBind1, ɵɵdefineComponent, ɵɵelementContainerStart, ɵɵtemplate, ɵɵelementContainerEnd, ɵɵproperty, ɵsetClassMetadata, Component, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { Subject, BehaviorSubject, interval } from 'rxjs';
import { tap, map, takeUntil } from 'rxjs/operators';
import { NgSwitch, NgSwitchCase, AsyncPipe, CommonModule } from '@angular/common';
import { ɵangular_packages_forms_forms_y, NgControlStatusGroup, NgForm, FormsModule } from '@angular/forms';

function FooCounterComponent_form_2_Template(rf, ctx) { if (rf & 1) {
    var _r9 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "form", 2);
    ɵɵlistener("submit", function FooCounterComponent_form_2_Template_form_submit_0_listener() { ɵɵrestoreView(_r9); var ctx_r8 = ɵɵnextContext(); return ctx_r8.stop(); });
    ɵɵelementStart(1, "h2");
    ɵɵtext(2);
    ɵɵpipe(3, "async");
    ɵɵelementEnd();
    ɵɵelementStart(4, "button", 3);
    ɵɵtext(5, "Parar");
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r6 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵtextInterpolate1("", ɵɵpipeBind1(3, 1, ctx_r6.counter$), "s");
} }
function FooCounterComponent_form_3_Template(rf, ctx) { if (rf & 1) {
    var _r11 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "form", 2);
    ɵɵlistener("submit", function FooCounterComponent_form_3_Template_form_submit_0_listener() { ɵɵrestoreView(_r11); var ctx_r10 = ɵɵnextContext(); return ctx_r10.start(); });
    ɵɵelementStart(1, "h2");
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementStart(3, "button", 3);
    ɵɵtext(4, "Contar");
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r7 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵtextInterpolate1("", ctx_r7.lastTotal, "s");
} }
var FooCounterComponent = /** @class */ (function () {
    function FooCounterComponent() {
        this.interval = 100;
        this.lastTotal = 0;
        this.endSchedule$ = new Subject();
        this.total$ = new BehaviorSubject(0);
    }
    FooCounterComponent.prototype.start = function () {
        var _this = this;
        this.total$.next(0);
        this.counter$ = interval(this.interval).pipe(tap(function () { return _this.incrementTotal(); }), map(function () { return _this.getTotalSeconds(); }), takeUntil(this.endSchedule$));
    };
    FooCounterComponent.prototype.stop = function () {
        this.lastTotal = this.getTotalSeconds();
        this.endSchedule$.next();
        this.counter$ = undefined;
    };
    FooCounterComponent.prototype.incrementTotal = function () {
        var total = this.total$.value + this.interval;
        this.total$.next(total);
    };
    FooCounterComponent.prototype.getTotalSeconds = function () {
        return this.total$.value / 1000;
    };
    FooCounterComponent.ɵfac = function FooCounterComponent_Factory(t) { return new (t || FooCounterComponent)(); };
    FooCounterComponent.ɵcmp = ɵɵdefineComponent({ type: FooCounterComponent, selectors: [["foo-counter"]], decls: 4, vars: 5, consts: [[3, "ngSwitch"], [3, "submit", 4, "ngSwitchCase"], [3, "submit"], ["type", "submit"]], template: function FooCounterComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementContainerStart(0, 0);
            ɵɵpipe(1, "async");
            ɵɵtemplate(2, FooCounterComponent_form_2_Template, 6, 3, "form", 1);
            ɵɵtemplate(3, FooCounterComponent_form_3_Template, 5, 1, "form", 1);
            ɵɵelementContainerEnd();
        } if (rf & 2) {
            ɵɵproperty("ngSwitch", ɵɵpipeBind1(1, 3, ctx.counter$) ? true : false);
            ɵɵadvance(2);
            ɵɵproperty("ngSwitchCase", true);
            ɵɵadvance(1);
            ɵɵproperty("ngSwitchCase", false);
        } }, directives: [NgSwitch, NgSwitchCase, ɵangular_packages_forms_forms_y, NgControlStatusGroup, NgForm], pipes: [AsyncPipe], encapsulation: 2 });
    return FooCounterComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(FooCounterComponent, [{
        type: Component,
        args: [{
                selector: 'foo-counter',
                templateUrl: './foo-counter.component.html',
            }]
    }], function () { return []; }, null); })();

var FooCounterModule = /** @class */ (function () {
    function FooCounterModule() {
    }
    FooCounterModule.ɵmod = ɵɵdefineNgModule({ type: FooCounterModule });
    FooCounterModule.ɵinj = ɵɵdefineInjector({ factory: function FooCounterModule_Factory(t) { return new (t || FooCounterModule)(); }, imports: [[CommonModule, FormsModule]] });
    return FooCounterModule;
}());
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(FooCounterModule, { declarations: [FooCounterComponent], imports: [CommonModule, FormsModule], exports: [FooCounterComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(FooCounterModule, [{
        type: NgModule,
        args: [{
                declarations: [FooCounterComponent],
                exports: [FooCounterComponent],
                imports: [CommonModule, FormsModule],
            }]
    }], null, null); })();

/*
 * Public API Surface of foo-counter
 */

/**
 * Generated bundle index. Do not edit.
 */

export { FooCounterComponent, FooCounterModule };
//# sourceMappingURL=foo-counter.js.map
