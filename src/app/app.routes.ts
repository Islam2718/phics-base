import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SiteSettingsComponent } from './components/site-settings/site-settings.component';
import { BusinessProjectsComponent } from './components/business-projects/business-projects.component';
import { BlogPagesComponent } from './components/blog-pages/blog-pages.component';
import { BlogSectionsComponent } from './components/blog-sections/blog-sections.component';
import { BlogWidgetsComponent } from './components/blog-widgets/blog-widgets.component';
import { BlogCategoryListComponent } from './components/blog-category-list/blog-category-list.component';
import { BlogCategoryAddEditComponent } from './components/blog-category-add-edit/blog-category-add-edit.component';
import { EcomProductCategoryComponent } from './components/ecom-product-category/ecom-product-category.component';
import { EcomProductComponent } from './components/ecom-product/ecom-product.component';

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
