import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FooCounterComponent } from './foo-counter.component';

describe('FooCounterComponent', () => {
  let component: any;
  let fixture: ComponentFixture<FooCounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FooCounterComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should start counter', done => {
    // when
    component.start();
    // then
    component.counter$.subscribe(total => {
      expect(total).toBeTruthy();
      done();
    });
  });

  it('should stop counter', () => {
    // when
    component.start();
    component.stop();
    // then
    expect(component.counter$).toBeUndefined();
  });

  it('should start counter', done => {
    // when
    component.start();
    // then
    component.counter$.subscribe(total => {
      expect(total).toBeTruthy();
      done();
    });
  });

  it('should count 3 seconds', done => {
    // given
    const counterWindow = 3;
    // when
    component.start();
    component.counter$.subscribe();
    // then
    setTimeout(() => {
      component.counter$.subscribe(total => {
        expect(total).toBeGreaterThan(counterWindow);
        done();
      });
    }, counterWindow * 1000);
  });
});
