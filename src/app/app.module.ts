import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './modules/material.module';

import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, ContactComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
