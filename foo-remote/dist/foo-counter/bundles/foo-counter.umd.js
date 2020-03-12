(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs'), require('rxjs/operators'), require('@angular/common'), require('@angular/forms')) :
    typeof define === 'function' && define.amd ? define('foo-counter', ['exports', '@angular/core', 'rxjs', 'rxjs/operators', '@angular/common', '@angular/forms'], factory) :
    (global = global || self, factory(global['foo-counter'] = {}, global.ng.core, global.rxjs, global.rxjs.operators, global.ng.common, global.ng.forms));
}(this, (function (exports, core, rxjs, operators, common, forms) { 'use strict';

    function FooCounterComponent_form_2_Template(rf, ctx) { if (rf & 1) {
        var _r9 = core["ɵɵgetCurrentView"]();
        core["ɵɵelementStart"](0, "form", 2);
        core["ɵɵlistener"]("submit", function FooCounterComponent_form_2_Template_form_submit_0_listener() { core["ɵɵrestoreView"](_r9); var ctx_r8 = core["ɵɵnextContext"](); return ctx_r8.stop(); });
        core["ɵɵelementStart"](1, "h2");
        core["ɵɵtext"](2);
        core["ɵɵpipe"](3, "async");
        core["ɵɵelementEnd"]();
        core["ɵɵelementStart"](4, "button", 3);
        core["ɵɵtext"](5, "Parar");
        core["ɵɵelementEnd"]();
        core["ɵɵelementEnd"]();
    } if (rf & 2) {
        var ctx_r6 = core["ɵɵnextContext"]();
        core["ɵɵadvance"](2);
        core["ɵɵtextInterpolate1"]("", core["ɵɵpipeBind1"](3, 1, ctx_r6.counter$), "s");
    } }
    function FooCounterComponent_form_3_Template(rf, ctx) { if (rf & 1) {
        var _r11 = core["ɵɵgetCurrentView"]();
        core["ɵɵelementStart"](0, "form", 2);
        core["ɵɵlistener"]("submit", function FooCounterComponent_form_3_Template_form_submit_0_listener() { core["ɵɵrestoreView"](_r11); var ctx_r10 = core["ɵɵnextContext"](); return ctx_r10.start(); });
        core["ɵɵelementStart"](1, "h2");
        core["ɵɵtext"](2);
        core["ɵɵelementEnd"]();
        core["ɵɵelementStart"](3, "button", 3);
        core["ɵɵtext"](4, "Contar");
        core["ɵɵelementEnd"]();
        core["ɵɵelementEnd"]();
    } if (rf & 2) {
        var ctx_r7 = core["ɵɵnextContext"]();
        core["ɵɵadvance"](2);
        core["ɵɵtextInterpolate1"]("", ctx_r7.lastTotal, "s");
    } }
    var FooCounterComponent = /** @class */ (function () {
        function FooCounterComponent() {
            this.interval = 100;
            this.lastTotal = 0;
            this.endSchedule$ = new rxjs.Subject();
            this.total$ = new rxjs.BehaviorSubject(0);
        }
        FooCounterComponent.prototype.start = function () {
            var _this = this;
            this.total$.next(0);
            this.counter$ = rxjs.interval(this.interval).pipe(operators.tap(function () { return _this.incrementTotal(); }), operators.map(function () { return _this.getTotalSeconds(); }), operators.takeUntil(this.endSchedule$));
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
        FooCounterComponent.ɵcmp = core["ɵɵdefineComponent"]({ type: FooCounterComponent, selectors: [["foo-counter"]], decls: 4, vars: 5, consts: [[3, "ngSwitch"], [3, "submit", 4, "ngSwitchCase"], [3, "submit"], ["type", "submit"]], template: function FooCounterComponent_Template(rf, ctx) { if (rf & 1) {
                core["ɵɵelementContainerStart"](0, 0);
                core["ɵɵpipe"](1, "async");
                core["ɵɵtemplate"](2, FooCounterComponent_form_2_Template, 6, 3, "form", 1);
                core["ɵɵtemplate"](3, FooCounterComponent_form_3_Template, 5, 1, "form", 1);
                core["ɵɵelementContainerEnd"]();
            } if (rf & 2) {
                core["ɵɵproperty"]("ngSwitch", core["ɵɵpipeBind1"](1, 3, ctx.counter$) ? true : false);
                core["ɵɵadvance"](2);
                core["ɵɵproperty"]("ngSwitchCase", true);
                core["ɵɵadvance"](1);
                core["ɵɵproperty"]("ngSwitchCase", false);
            } }, directives: [common.NgSwitch, common.NgSwitchCase, forms["ɵangular_packages_forms_forms_y"], forms.NgControlStatusGroup, forms.NgForm], pipes: [common.AsyncPipe], encapsulation: 2 });
        return FooCounterComponent;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](FooCounterComponent, [{
            type: core.Component,
            args: [{
                    selector: 'foo-counter',
                    templateUrl: './foo-counter.component.html',
                }]
        }], function () { return []; }, null); })();

    var FooCounterModule = /** @class */ (function () {
        function FooCounterModule() {
        }
        FooCounterModule.ɵmod = core["ɵɵdefineNgModule"]({ type: FooCounterModule });
        FooCounterModule.ɵinj = core["ɵɵdefineInjector"]({ factory: function FooCounterModule_Factory(t) { return new (t || FooCounterModule)(); }, imports: [[common.CommonModule, forms.FormsModule]] });
        return FooCounterModule;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && core["ɵɵsetNgModuleScope"](FooCounterModule, { declarations: [FooCounterComponent], imports: [common.CommonModule, forms.FormsModule], exports: [FooCounterComponent] }); })();
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](FooCounterModule, [{
            type: core.NgModule,
            args: [{
                    declarations: [FooCounterComponent],
                    exports: [FooCounterComponent],
                    imports: [common.CommonModule, forms.FormsModule],
                }]
        }], null, null); })();

    exports.FooCounterComponent = FooCounterComponent;
    exports.FooCounterModule = FooCounterModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=foo-counter.umd.js.map
