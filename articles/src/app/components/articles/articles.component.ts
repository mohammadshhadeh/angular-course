import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/article.service';
import { Article } from 'src/app/shared/article.interface';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  articles: Article[] = [];
  constructor(private articleService: ArticleService) {}

  ngOnInit(): void {
    this.articleService.getArticles().subscribe((articles) => this.articles = articles);
  }
}
