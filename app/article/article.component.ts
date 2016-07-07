import { Component, Input, OnInit } from '@angular/core';
import { Article }    from './article';
import { ArticleService } from '../service';

@Component({
    selector: 'article-form',
    templateUrl: 'app/article/article.component.html',
    providers: [ArticleService]

})

export class ArticleDetailComponent {
    private _listeArticles: Article[];
    private _articleService: ArticleService;
    private _indiceEnCours: number;

    constructor(articleService: ArticleService) {
        this._articleService = articleService;
    }

    @Input() enrArticle: Article;
    titre = 'Saisie article';

    submitted = false;

    ngOnInit() {
        this._listeArticles = this._articleService.getArticle();
        this.setEncours(0);
        /* this._articleService.getArticle()
            .then(article => {
                this._listeArticle = article;
                this.setEncours(0);
                }); */
    }

    onSubmit() {
        this.submitted = true;
        if (this.enrArticle.id < 0)
            this._articleService.addArticle(this.enrArticle);
        else
            this._articleService.setArticle(this.enrArticle);
        this._listeArticles[this._indiceEnCours] = this.enrArticle;
    }

    active = true;

    private ajouterArticle() {
        this.enrArticle = new Article(-1, '', '', 0);
        this.active = false;
        setTimeout(() => this.active = true, 0);
        this._indiceEnCours = this._listeArticles.push(this.enrArticle) - 1;
    }

    private supprimerArticle() {
        this._articleService.suppArticle(this.enrArticle);
        this._listeArticles.splice(this._indiceEnCours, 1);
        if (this._indiceEnCours > 0)
            this._indiceEnCours--;
        this.setEncours(this._indiceEnCours);
    }

    private setEncours(ind: number): void {
        this.enrArticle = this._listeArticles[ind];
        this._indiceEnCours = ind;
    }

    private setSuivant() {
        if (this._indiceEnCours < this._listeArticles.length - 1)
            this.setEncours(++this._indiceEnCours);
    }

    private setPrecedent() {
        if (this._indiceEnCours > 0)
            this.setEncours(--this._indiceEnCours);
    }

}
