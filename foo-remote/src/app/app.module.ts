import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FooCounterModule } from '@foo/counter';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FooCounterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
