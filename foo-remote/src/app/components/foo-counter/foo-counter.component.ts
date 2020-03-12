import { Component } from '@angular/core';
import { BehaviorSubject, interval, Observable, Subject } from 'rxjs';
import { map, takeUntil, tap } from 'rxjs/operators';

@Component({
  selector: 'foo-counter',
  templateUrl: './foo-counter.component.html',
  styleUrls: ['./foo-counter.component.scss'],
})
export class FooCounterComponent {
  interval = 100;

  counter$: Observable<number>;

  lastTotal = 0;

  private endSchedule$ = new Subject();

  private total$ = new BehaviorSubject<number>(0);

  constructor() {}

  start() {
    this.total$.next(0);
    this.counter$ = interval(this.interval).pipe(
      tap(() => this.incrementTotal()),
      map(() => this.getTotalSeconds()),
      takeUntil(this.endSchedule$)
    );
  }

  stop() {
    this.lastTotal = this.getTotalSeconds();
    this.endSchedule$.next();
    this.counter$ = undefined;
  }

  private incrementTotal() {
    const total = this.total$.value + this.interval;
    this.total$.next(total);
  }

  private getTotalSeconds() {
    return this.total$.value / 1000;
  }
}
