import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AuthorComponent } from './author/author.component';
import { MenuComponent } from './menu/menu.component';
import { LayoutComponent } from './layout/layout/layout.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { SliderComponent } from './shered/slider/slider.component';
import { AboutComponent } from './home/about/about.component';
import { EmployeesComponent } from './home/employees/employees.component';
import { MealsComponent } from './menu/meals/meals.component';
import { CategoriesComponent } from './menu/categories/categories.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NotFoundComponent } from './not-found/not-found.component';
import { SpecOfferComponent } from './home/spec-offer/spec-offer.component';
import { NgxPaginationModule } from 'ngx-pagination';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    AuthorComponent,
    MenuComponent,
    LayoutComponent,
    FooterComponent,
    HeaderComponent,
    SliderComponent,
    AboutComponent,
    EmployeesComponent,
    CategoriesComponent,
    MealsComponent,
    NotFoundComponent,
    SpecOfferComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgxPaginationModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
