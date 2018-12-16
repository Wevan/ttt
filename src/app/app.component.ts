import {Component} from '@angular/core';
import {Article} from './article/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],

})
export class AppComponent {
  articles: Article[];

  constructor() {
    this.articles = [
      new Article('Angular 2', 'https://angular.io/guide/styleguide', 3),
      new Article('FullStack', 'https://semantic-ui.com/elements/button.html', 10),
      new Article('Homepage', 'https://github.com/ng-book2/code/', 6)
    ];
  }

  sortArticles(): Article[] {
    return this.articles.sort(((a, b) => b.votes - a.votes));
  }

  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    console.log(`Adding article title:${title.value} and link:${link.value}`);
    this.articles.push(new Article(title.value, link.value, 0));
    title.value = '';
    link.value = '';
    return false;
  }
}
