import { Component } from '@angular/core';
import { BehaviorSubject, interval, Subject } from 'rxjs';
import { map, takeUntil, tap } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
function FooCounterComponent_form_2_Template(rf, ctx) { if (rf & 1) {
    var _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "form", 2);
    i0.ɵɵlistener("submit", function FooCounterComponent_form_2_Template_form_submit_0_listener() { i0.ɵɵrestoreView(_r9); var ctx_r8 = i0.ɵɵnextContext(); return ctx_r8.stop(); });
    i0.ɵɵelementStart(1, "h2");
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "button", 3);
    i0.ɵɵtext(5, "Parar");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r6 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind1(3, 1, ctx_r6.counter$), "s");
} }
function FooCounterComponent_form_3_Template(rf, ctx) { if (rf & 1) {
    var _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "form", 2);
    i0.ɵɵlistener("submit", function FooCounterComponent_form_3_Template_form_submit_0_listener() { i0.ɵɵrestoreView(_r11); var ctx_r10 = i0.ɵɵnextContext(); return ctx_r10.start(); });
    i0.ɵɵelementStart(1, "h2");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "button", 3);
    i0.ɵɵtext(4, "Contar");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r7 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", ctx_r7.lastTotal, "s");
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
    return FooCounterComponent;
}());
export { FooCounterComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(FooCounterComponent, [{
        type: Component,
        args: [{
                selector: 'foo-counter',
                templateUrl: './foo-counter.component.html',
            }]
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9vLWNvdW50ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZm9vLWNvdW50ZXIvIiwic291cmNlcyI6WyJsaWIvZm9vLWNvdW50ZXIuY29tcG9uZW50LnRzIiwibGliL2Zvby1jb3VudGVyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUMsT0FBTyxFQUFFLGVBQWUsRUFBRSxRQUFRLEVBQWMsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7Ozs7SUNEbkQsK0JBQ0U7SUFEeUIsZ0xBQWlCO0lBQzFDLDBCQUFJO0lBQUEsWUFBdUI7O0lBQUEsaUJBQUs7SUFDaEMsaUNBQXNCO0lBQUEscUJBQUs7SUFBQSxpQkFBUztJQUN0QyxpQkFBTzs7O0lBRkQsZUFBdUI7SUFBdkIscUVBQXVCOzs7O0lBSTdCLCtCQUNFO0lBRDBCLG9MQUFrQjtJQUM1QywwQkFBSTtJQUFBLFlBQWdCO0lBQUEsaUJBQUs7SUFDekIsaUNBQXNCO0lBQUEsc0JBQU07SUFBQSxpQkFBUztJQUN2QyxpQkFBTzs7O0lBRkQsZUFBZ0I7SUFBaEIsZ0RBQWdCOztBREh4QjtJQWVFO1FBVkEsYUFBUSxHQUFHLEdBQUcsQ0FBQztRQUlmLGNBQVMsR0FBRyxDQUFDLENBQUM7UUFFTixpQkFBWSxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7UUFFN0IsV0FBTSxHQUFHLElBQUksZUFBZSxDQUFTLENBQUMsQ0FBQyxDQUFDO0lBRWpDLENBQUM7SUFFaEIsbUNBQUssR0FBTDtRQUFBLGlCQU9DO1FBTkMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDcEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FDMUMsR0FBRyxDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsY0FBYyxFQUFFLEVBQXJCLENBQXFCLENBQUMsRUFDaEMsR0FBRyxDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsZUFBZSxFQUFFLEVBQXRCLENBQXNCLENBQUMsRUFDakMsU0FBUyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FDN0IsQ0FBQztJQUNKLENBQUM7SUFFRCxrQ0FBSSxHQUFKO1FBQ0UsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDeEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsUUFBUSxHQUFHLFNBQVMsQ0FBQztJQUM1QixDQUFDO0lBRU8sNENBQWMsR0FBdEI7UUFDRSxJQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ2hELElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFFTyw2Q0FBZSxHQUF2QjtRQUNFLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO0lBQ2xDLENBQUM7MEZBbkNVLG1CQUFtQjs0REFBbkIsbUJBQW1CO1lDUmhDLGdDQUNFOztZQUFBLHNFQUNFO1lBSUYsc0VBQ0U7WUFHSiwwQkFBZTs7WUFWRCw0RUFBOEM7WUFDcEQsZUFBb0I7WUFBcEIsbUNBQW9CO1lBS3BCLGVBQXFCO1lBQXJCLG9DQUFxQjs7OEJETjdCO0NBNENDLEFBeENELElBd0NDO1NBcENZLG1CQUFtQjtrREFBbkIsbUJBQW1CO2NBSi9CLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsYUFBYTtnQkFDdkIsV0FBVyxFQUFFLDhCQUE4QjthQUM1QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBpbnRlcnZhbCwgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCB0YWtlVW50aWwsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZm9vLWNvdW50ZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vZm9vLWNvdW50ZXIuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBGb29Db3VudGVyQ29tcG9uZW50IHtcbiAgaW50ZXJ2YWwgPSAxMDA7XG5cbiAgY291bnRlciQ6IE9ic2VydmFibGU8bnVtYmVyPjtcblxuICBsYXN0VG90YWwgPSAwO1xuXG4gIHByaXZhdGUgZW5kU2NoZWR1bGUkID0gbmV3IFN1YmplY3QoKTtcblxuICBwcml2YXRlIHRvdGFsJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8bnVtYmVyPigwKTtcblxuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgc3RhcnQoKSB7XG4gICAgdGhpcy50b3RhbCQubmV4dCgwKTtcbiAgICB0aGlzLmNvdW50ZXIkID0gaW50ZXJ2YWwodGhpcy5pbnRlcnZhbCkucGlwZShcbiAgICAgIHRhcCgoKSA9PiB0aGlzLmluY3JlbWVudFRvdGFsKCkpLFxuICAgICAgbWFwKCgpID0+IHRoaXMuZ2V0VG90YWxTZWNvbmRzKCkpLFxuICAgICAgdGFrZVVudGlsKHRoaXMuZW5kU2NoZWR1bGUkKVxuICAgICk7XG4gIH1cblxuICBzdG9wKCkge1xuICAgIHRoaXMubGFzdFRvdGFsID0gdGhpcy5nZXRUb3RhbFNlY29uZHMoKTtcbiAgICB0aGlzLmVuZFNjaGVkdWxlJC5uZXh0KCk7XG4gICAgdGhpcy5jb3VudGVyJCA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHByaXZhdGUgaW5jcmVtZW50VG90YWwoKSB7XG4gICAgY29uc3QgdG90YWwgPSB0aGlzLnRvdGFsJC52YWx1ZSArIHRoaXMuaW50ZXJ2YWw7XG4gICAgdGhpcy50b3RhbCQubmV4dCh0b3RhbCk7XG4gIH1cblxuICBwcml2YXRlIGdldFRvdGFsU2Vjb25kcygpIHtcbiAgICByZXR1cm4gdGhpcy50b3RhbCQudmFsdWUgLyAxMDAwO1xuICB9XG59XG4iLCI8bmctY29udGFpbmVyIFtuZ1N3aXRjaF09XCIoY291bnRlciQgfCBhc3luYykgPyB0cnVlIDogZmFsc2VcIj5cbiAgPGZvcm0gKm5nU3dpdGNoQ2FzZT1cInRydWVcIiAoc3VibWl0KT1cInN0b3AoKVwiPlxuICAgIDxoMj57eyBjb3VudGVyJCB8IGFzeW5jIH19czwvaDI+XG4gICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+UGFyYXI8L2J1dHRvbj5cbiAgPC9mb3JtPlxuXG4gIDxmb3JtICpuZ1N3aXRjaENhc2U9XCJmYWxzZVwiIChzdWJtaXQpPVwic3RhcnQoKVwiPlxuICAgIDxoMj57eyBsYXN0VG90YWwgfX1zPC9oMj5cbiAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5Db250YXI8L2J1dHRvbj5cbiAgPC9mb3JtPlxuPC9uZy1jb250YWluZXI+XG4iXX0=