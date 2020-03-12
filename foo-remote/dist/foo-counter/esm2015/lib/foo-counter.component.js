import { Component } from '@angular/core';
import { BehaviorSubject, interval, Subject } from 'rxjs';
import { map, takeUntil, tap } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
function FooCounterComponent_form_2_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "form", 2);
    i0.ɵɵlistener("submit", function FooCounterComponent_form_2_Template_form_submit_0_listener() { i0.ɵɵrestoreView(_r3); const ctx_r2 = i0.ɵɵnextContext(); return ctx_r2.stop(); });
    i0.ɵɵelementStart(1, "h2");
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "button", 3);
    i0.ɵɵtext(5, "Parar");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind1(3, 1, ctx_r0.counter$), "s");
} }
function FooCounterComponent_form_3_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "form", 2);
    i0.ɵɵlistener("submit", function FooCounterComponent_form_3_Template_form_submit_0_listener() { i0.ɵɵrestoreView(_r5); const ctx_r4 = i0.ɵɵnextContext(); return ctx_r4.start(); });
    i0.ɵɵelementStart(1, "h2");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "button", 3);
    i0.ɵɵtext(4, "Contar");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", ctx_r1.lastTotal, "s");
} }
export class FooCounterComponent {
    constructor() {
        this.interval = 100;
        this.lastTotal = 0;
        this.endSchedule$ = new Subject();
        this.total$ = new BehaviorSubject(0);
    }
    start() {
        this.total$.next(0);
        this.counter$ = interval(this.interval).pipe(tap(() => this.incrementTotal()), map(() => this.getTotalSeconds()), takeUntil(this.endSchedule$));
    }
    stop() {
        this.lastTotal = this.getTotalSeconds();
        this.endSchedule$.next();
        this.counter$ = undefined;
    }
    incrementTotal() {
        const total = this.total$.value + this.interval;
        this.total$.next(total);
    }
    getTotalSeconds() {
        return this.total$.value / 1000;
    }
}
FooCounterComponent.ɵfac = function FooCounterComponent_Factory(t) { return new (t || FooCounterComponent)(); };
FooCounterComponent.ɵcmp = i0.ɵɵdefineComponent({ type: FooCounterComponent, selectors: [["foo-counter"]], decls: 4, vars: 5, consts: [[3, "ngSwitch"], [3, "submit", 4, "ngSwitchCase"], [3, "submit"], ["type", "submit"]], template: function FooCounterComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementContainerStart(0, 0);
        i0.ɵɵpipe(1, "async");
        i0.ɵɵtemplate(2, FooCounterComponent_form_2_Template, 6, 3, "form", 1);
        i0.ɵɵtemplate(3, FooCounterComponent_form_3_Template, 5, 1, "form", 1);
        i0.ɵɵelementContainerEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("ngSwitch", i0.ɵɵpipeBind1(1, 3, ctx.counter$) ? true : false);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngSwitchCase", true);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngSwitchCase", false);
    } }, directives: [i1.NgSwitch, i1.NgSwitchCase, i2.ɵangular_packages_forms_forms_y, i2.NgControlStatusGroup, i2.NgForm], pipes: [i1.AsyncPipe], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(FooCounterComponent, [{
        type: Component,
        args: [{
                selector: 'foo-counter',
                templateUrl: './foo-counter.component.html',
            }]
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9vLWNvdW50ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZm9vLWNvdW50ZXIvIiwic291cmNlcyI6WyJsaWIvZm9vLWNvdW50ZXIuY29tcG9uZW50LnRzIiwibGliL2Zvby1jb3VudGVyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUMsT0FBTyxFQUFFLGVBQWUsRUFBRSxRQUFRLEVBQWMsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7Ozs7SUNEbkQsK0JBQ0U7SUFEeUIsa0xBQWlCO0lBQzFDLDBCQUFJO0lBQUEsWUFBdUI7O0lBQUEsaUJBQUs7SUFDaEMsaUNBQXNCO0lBQUEscUJBQUs7SUFBQSxpQkFBUztJQUN0QyxpQkFBTzs7O0lBRkQsZUFBdUI7SUFBdkIscUVBQXVCOzs7O0lBSTdCLCtCQUNFO0lBRDBCLG1MQUFrQjtJQUM1QywwQkFBSTtJQUFBLFlBQWdCO0lBQUEsaUJBQUs7SUFDekIsaUNBQXNCO0lBQUEsc0JBQU07SUFBQSxpQkFBUztJQUN2QyxpQkFBTzs7O0lBRkQsZUFBZ0I7SUFBaEIsZ0RBQWdCOztBREN4QixNQUFNLE9BQU8sbUJBQW1CO0lBVzlCO1FBVkEsYUFBUSxHQUFHLEdBQUcsQ0FBQztRQUlmLGNBQVMsR0FBRyxDQUFDLENBQUM7UUFFTixpQkFBWSxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7UUFFN0IsV0FBTSxHQUFHLElBQUksZUFBZSxDQUFTLENBQUMsQ0FBQyxDQUFDO0lBRWpDLENBQUM7SUFFaEIsS0FBSztRQUNILElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQzFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsRUFDaEMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQyxFQUNqQyxTQUFTLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUM3QixDQUFDO0lBQ0osQ0FBQztJQUVELElBQUk7UUFDRixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN4QyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxRQUFRLEdBQUcsU0FBUyxDQUFDO0lBQzVCLENBQUM7SUFFTyxjQUFjO1FBQ3BCLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDaEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUVPLGVBQWU7UUFDckIsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7SUFDbEMsQ0FBQzs7c0ZBbkNVLG1CQUFtQjt3REFBbkIsbUJBQW1CO1FDUmhDLGdDQUNFOztRQUFBLHNFQUNFO1FBSUYsc0VBQ0U7UUFHSiwwQkFBZTs7UUFWRCw0RUFBOEM7UUFDcEQsZUFBb0I7UUFBcEIsbUNBQW9CO1FBS3BCLGVBQXFCO1FBQXJCLG9DQUFxQjs7a0RERWhCLG1CQUFtQjtjQUovQixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGFBQWE7Z0JBQ3ZCLFdBQVcsRUFBRSw4QkFBOEI7YUFDNUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgaW50ZXJ2YWwsIE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCwgdGFrZVVudGlsLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Zvby1jb3VudGVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2Zvby1jb3VudGVyLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgRm9vQ291bnRlckNvbXBvbmVudCB7XG4gIGludGVydmFsID0gMTAwO1xuXG4gIGNvdW50ZXIkOiBPYnNlcnZhYmxlPG51bWJlcj47XG5cbiAgbGFzdFRvdGFsID0gMDtcblxuICBwcml2YXRlIGVuZFNjaGVkdWxlJCA9IG5ldyBTdWJqZWN0KCk7XG5cbiAgcHJpdmF0ZSB0b3RhbCQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PG51bWJlcj4oMCk7XG5cbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIHN0YXJ0KCkge1xuICAgIHRoaXMudG90YWwkLm5leHQoMCk7XG4gICAgdGhpcy5jb3VudGVyJCA9IGludGVydmFsKHRoaXMuaW50ZXJ2YWwpLnBpcGUoXG4gICAgICB0YXAoKCkgPT4gdGhpcy5pbmNyZW1lbnRUb3RhbCgpKSxcbiAgICAgIG1hcCgoKSA9PiB0aGlzLmdldFRvdGFsU2Vjb25kcygpKSxcbiAgICAgIHRha2VVbnRpbCh0aGlzLmVuZFNjaGVkdWxlJClcbiAgICApO1xuICB9XG5cbiAgc3RvcCgpIHtcbiAgICB0aGlzLmxhc3RUb3RhbCA9IHRoaXMuZ2V0VG90YWxTZWNvbmRzKCk7XG4gICAgdGhpcy5lbmRTY2hlZHVsZSQubmV4dCgpO1xuICAgIHRoaXMuY291bnRlciQgPSB1bmRlZmluZWQ7XG4gIH1cblxuICBwcml2YXRlIGluY3JlbWVudFRvdGFsKCkge1xuICAgIGNvbnN0IHRvdGFsID0gdGhpcy50b3RhbCQudmFsdWUgKyB0aGlzLmludGVydmFsO1xuICAgIHRoaXMudG90YWwkLm5leHQodG90YWwpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRUb3RhbFNlY29uZHMoKSB7XG4gICAgcmV0dXJuIHRoaXMudG90YWwkLnZhbHVlIC8gMTAwMDtcbiAgfVxufVxuIiwiPG5nLWNvbnRhaW5lciBbbmdTd2l0Y2hdPVwiKGNvdW50ZXIkIHwgYXN5bmMpID8gdHJ1ZSA6IGZhbHNlXCI+XG4gIDxmb3JtICpuZ1N3aXRjaENhc2U9XCJ0cnVlXCIgKHN1Ym1pdCk9XCJzdG9wKClcIj5cbiAgICA8aDI+e3sgY291bnRlciQgfCBhc3luYyB9fXM8L2gyPlxuICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPlBhcmFyPC9idXR0b24+XG4gIDwvZm9ybT5cblxuICA8Zm9ybSAqbmdTd2l0Y2hDYXNlPVwiZmFsc2VcIiAoc3VibWl0KT1cInN0YXJ0KClcIj5cbiAgICA8aDI+e3sgbGFzdFRvdGFsIH19czwvaDI+XG4gICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+Q29udGFyPC9idXR0b24+XG4gIDwvZm9ybT5cbjwvbmctY29udGFpbmVyPlxuIl19