import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerrewardsComponent } from './customerrewards/customerrewards.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [
    AppComponent,
    CustomerrewardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgbDropdownModule,
    NgbDatepickerModule, FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
