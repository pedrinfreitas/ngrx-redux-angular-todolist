import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { TodoModule } from './todos/todo.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, TodoModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
