import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { ClientDetailComponent } from './client/client.component';
import { ClientService } from './client/client.service';
import { ArticleDetailComponent } from './article/article.component';
import { ArticleService } from './article/article.service';

@Component({
    selector: 'my-app',
    template: `<nav>
    <a [routerLink]="['client']">Clients</a>
    <a [routerLink]="['article']">Articles</a>
    <a [routerLink]="['liste']">Liste</a>
    </nav>
    <router-outlet></router-outlet>` , 
    directives: [ROUTER_DIRECTIVES],
    providers: [ClientService , ArticleService]
})

export class AppComponent  {
   
}