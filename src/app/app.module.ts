import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { MonacoEditorModule } from 'ngx-monaco-editor';

import { HttpService } from './app.http.service';
import { AppComponent } from './app.component';
import { PureFunctionsComponent } from './slides/pure.functions.component';
import { Slide1Component } from './slides/1.component';

@NgModule({
  declarations: [
    AppComponent,
    PureFunctionsComponent,
    Slide1Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MonacoEditorModule
  ],
  providers: [
    HttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
