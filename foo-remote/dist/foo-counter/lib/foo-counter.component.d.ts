import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
export declare class FooCounterComponent {
    interval: number;
    counter$: Observable<number>;
    lastTotal: number;
    private endSchedule$;
    private total$;
    constructor();
    start(): void;
    stop(): void;
    private incrementTotal;
    private getTotalSeconds;
    static ɵfac: i0.ɵɵFactoryDef<FooCounterComponent>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<FooCounterComponent, "foo-counter", never, {}, {}, never>;
}
