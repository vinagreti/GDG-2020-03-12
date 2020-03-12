import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FooCounterModule } from './components/foo-counter/foo-counter.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FooCounterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
