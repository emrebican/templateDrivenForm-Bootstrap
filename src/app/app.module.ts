import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormTemplateComponent } from './form-template/form-template.component';

@NgModule({
  declarations: [AppComponent, FormTemplateComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  exports: [FormTemplateComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
