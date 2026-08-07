import { Routes } from '@angular/router';
import { LayoutComponent } from './doc/layout/layout.component';
import { HomeComponent } from './doc/home/home.component';
import { ChangelogComponent } from './doc/changelog/changelog.component';
import { ComponentDocPageComponent } from './doc/component-doc-page/component-doc-page.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'changelog', redirectTo: 'changelog/v19-x', pathMatch: 'full' },
      { path: 'changelog/:version', component: ChangelogComponent },
      { path: 'components/:path', component: ComponentDocPageComponent },
      { path: '**', redirectTo: '' },
    ],
  },
];
