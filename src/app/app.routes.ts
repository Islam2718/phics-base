import { Routes } from '@angular/router';
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
import { EcomProductCategoryComponent } from './ecom-product-category/ecom-product-category.component';
import { EcomProductComponent } from './ecom-product/ecom-product.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'site-settings', component: SiteSettingsComponent },
  { path: 'business-projects', component: BusinessProjectsComponent },
  { path: 'blog-pages', component: BlogPagesComponent },
  { path: 'blog-sections', component: BlogSectionsComponent },
  { path: 'blog-widgets', component: BlogWidgetsComponent },
  { path: 'blog-category-list', component: BlogCategoryListComponent },
  { path: 'blog-category-add-edit', component: BlogCategoryAddEditComponent },
  { path: 'ecom-product-category', component: EcomProductCategoryComponent },
  { path: 'ecom-product', component: EcomProductComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' }
];
