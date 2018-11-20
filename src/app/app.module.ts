import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material/material.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { AuthService } from './services/auth.service';
import { ListStadiumsComponent } from './stadiums/list-stadiums/list-stadiums.component';
import { AddStadiumComponent } from './stadiums/add-stadium/add-stadium.component';
import { SideMenuComponent } from './menu/side-menu/side-menu.component';
import { MenuLayoutComponent } from './menu/menu-layout/menu-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    ListStadiumsComponent,
    AddStadiumComponent,
    SideMenuComponent,
    MenuLayoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    NoopAnimationsModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
