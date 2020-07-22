import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import {HomeComponent} from './home/home.component';
import {SearchResultsComponent} from './search-results/search-results.component';
import {ExperienceComponent} from './search-results/experience/experience.component';
import {ProjectsComponent} from './search-results/projects/projects.component';
import {ContactComponent} from './search-results/contact/contact.component';
import {PhilanthropyComponent} from './search-results/philanthropy/philanthropy.component';
import {NavbarComponent} from './search-results/navbar/navbar.component';

import { AppRoutingModule } from './app-routing.module';
import { BlogComponent } from './search-results/blog/blog.component';
import { ContactService } from './search-results/contact/contact.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  imports:      [ 
  	BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  declarations: [ 
  	AppComponent,
    HomeComponent,
    SearchResultsComponent,
    NavbarComponent,
    ExperienceComponent,
    ProjectsComponent,
    PhilanthropyComponent,
    ContactComponent,
    BlogComponent
  ],
  providers: [
    ContactService
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
