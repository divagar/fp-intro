import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { MonacoEditorModule } from 'ngx-monaco-editor';

import { HttpService } from './app.http.service';
import { LSService } from './app.ls.service';
import { AppComponent } from './app.component';
import { CategoryComponent } from './slides/category.component';
import { FunctionComponent } from './slides/function.component';
import { PureFunctionsComponent } from './slides/pure.functions.component';
import { HOFComponent } from './slides/hof.component';
import { MRComponent } from './slides/mapreduce.component';
import { CurryingComponent } from './slides/currying.component';
import { ComposeComponent } from './slides/compose.component';


@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    FunctionComponent,
    PureFunctionsComponent,
    HOFComponent,
    MRComponent,
    CurryingComponent,
    ComposeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MonacoEditorModule
  ],
  providers: [
    HttpService,
    LSService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
