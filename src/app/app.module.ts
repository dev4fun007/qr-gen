import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CreateQrComponent } from './create-qr/create-qr.component';
import { ProfileComponent } from './profile/profile.component';
import { HistoryComponent, ShareBottomSheet } from './history/history.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule, HTTP_INTERCEPTORS  } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import {
  MatButtonModule,
  MatIconModule,
  MatInputModule,
  MatSnackBarModule,
  MatCardModule,
  MatProgressSpinnerModule,
  MatTooltipModule,
  MatGridListModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatListModule,
} from '@angular/material';

import { RequestCachingService } from './services/request-caching.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CreateQrComponent,
    ProfileComponent,
    HistoryComponent,
    HomeComponent,
    ShareBottomSheet
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    
    FormsModule,
    HttpClientModule,
    
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatSnackBarModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatTooltipModule,
    MatGridListModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatListModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: RequestCachingService, multi: true }
  ],
  bootstrap: [AppComponent],
  entryComponents: [ShareBottomSheet]
})
export class AppModule { }
