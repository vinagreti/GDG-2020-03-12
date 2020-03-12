import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FooCounterComponent } from './foo-counter.component';

@NgModule({
  declarations: [FooCounterComponent],
  exports: [FooCounterComponent],
  imports: [CommonModule, FormsModule],
})
export class FooCounterModule {}
