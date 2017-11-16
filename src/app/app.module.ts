import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { MonacoEditorModule } from 'ngx-monaco-editor';

import { HttpService } from './app.http.service';
import { AppComponent } from './app.component';
import { PureFunctionsComponent } from './slides/pure.functions.component';
import { CurryingComponent } from './slides/currying.component';
import { HOFComponent } from './slides/hof.component';
import { MRComponent } from './slides/mapreduce.component';

@NgModule({
  declarations: [
    AppComponent,
    PureFunctionsComponent,
    CurryingComponent,
    HOFComponent,
    MRComponent
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
