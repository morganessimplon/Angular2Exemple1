import { provideRouter, RouterConfig }  from '@angular/router';
import { ClientDetailComponent } from './client/client.component';
import { ArticleDetailComponent } from './article/article.component';

export const routes: RouterConfig = [
  {
    path: '',
//    redirectTo: '/dashboard',
    redirectTo: '/article',
    pathMatch: 'full'
  },
  /*{
    path: 'dashboard',
    component: DashboardComponent
  },*/
  {
    path: 'article',
    component: ArticleDetailComponent
  },

  {
      path: 'client',
      component: ClientDetailComponent
  }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];