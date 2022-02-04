import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ContactusComponent } from './components/contactus/contactus.component';

import { AppRoutingModule } from '../routing/routing.module';

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  declarations: [
    AppComponent,
    HelloComponent,
    DashboardComponent,
    ContactusComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
