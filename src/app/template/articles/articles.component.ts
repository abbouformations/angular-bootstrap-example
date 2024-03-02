import { Component } from '@angular/core';
import { Article } from '../../article';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.css',
})
export class ArticlesComponent {
  datas: Article[] = [
    new Article('Formation Java', 'JDK, JRE, les APIs, ...'),
    new Article('Formation Spring', 'Spring IOC, Spring AOP, ...'),
    new Article('Formation Angular', 'Forms, Reactive Forms, Routing, ...'),
  ];
}
