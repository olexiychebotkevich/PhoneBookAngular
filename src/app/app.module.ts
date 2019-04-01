import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PhoneBookComponent } from './phone-book/phone-book.component';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { MatButtonModule, MatMenuModule, MatDatepickerModule } from '@angular/material';
import { MatNativeDateModule, MatIconModule, MatCardModule } from '@angular/material';
import { MatSidenavModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { MatTooltipModule, MatToolbarModule } from '@angular/material';
import { MatPaginatorModule } from '@angular/material/paginator';
import { PhoneBookService } from './phone-book.service';

@NgModule({
  declarations: [
    AppComponent,
    PhoneBookComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    MatPaginatorModule,
    MatCardModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatInputModule,
    MatTooltipModule,
    MatToolbarModule,
    AppRoutingModule
  ],
  providers: [HttpClientModule,
    PhoneBookService,
    MatDatepickerModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
