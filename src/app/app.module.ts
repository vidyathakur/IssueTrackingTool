import { IssueService } from './issue.service';
import { DashboardRoutingModule } from './dashboard/dashboard-routing.module';

// import { DashboardComponent } from './dashboard/dashboard.component';


import { MaterialModule } from './shared/material.module';

import { UserModule } from './user/user.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from 'src/app/user/login/login.component';
import { Routes, RouterModule } from '@angular/router';
import { NgxEditorModule } from 'ngx-editor';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SignupComponent } from 'src/app/user/signup/signup.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardModule } from 'src/app/dashboard/dashboard.module';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ImageViewerModule } from 'ng2-image-viewer';
import {
	SocialLoginModule,
	AuthServiceConfig,
	GoogleLoginProvider,
} from 'ng4-social-login';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';


const CONFIG = new AuthServiceConfig([
	{
		id: GoogleLoginProvider.PROVIDER_ID,
		provider: new GoogleLoginProvider('507363631372-vl5794tdqj0hfi2fodnh5j45fo8b2dfh.apps.googleusercontent.com')
	}
], false);

export function provideConfig() {
	return CONFIG;
}

@NgModule({
  declarations: [
    AppComponent,
    DialogBoxComponent,
    
  ],
  imports: [
    BrowserModule,
    DashboardRoutingModule,
    BrowserAnimationsModule,
    NgxEditorModule,
    AutocompleteLibModule,
    FormsModule,
    ImageViewerModule,
    ReactiveFormsModule,
    SocialLoginModule,
    HttpClientModule,
    UserModule,
    NgbModule,
    DashboardModule,
    MaterialModule,
    AppRoutingModule
  ],
  providers: [ IssueService,
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
