import { NgModule, importProvidersFrom } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SiteSettingsComponent } from './site-settings/site-settings.component';
import { BusinessProjectsComponent } from './business-projects/business-projects.component';
import { BlogPagesComponent } from './blog-pages/blog-pages.component';
import { BlogSectionsComponent } from './blog-sections/blog-sections.component';
import { BlogWidgetsComponent } from './blog-widgets/blog-widgets.component';
import { BlogCategoryListComponent } from './blog-category-list/blog-category-list.component';
import { BlogCategoryAddEditComponent } from './blog-category-add-edit/blog-category-add-edit.component';

import { routes } from './app.routes';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    AppComponent,  // Importing standalone component
  ],
  providers: [],
  bootstrap: [AppComponent]  // Bootstrapping the standalone component
})
export class AppModule { }
