import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleService } from 'src/app/article.service';
import { Article, Comment } from '../../shared/article.interface';

@Component({
  selector: 'app-single-article',
  templateUrl: './single-article.component.html',
  styleUrls: ['./single-article.component.css'],
})
export class SingleArticleComponent implements OnInit {
  articleId: any;
  comments: Comment[] | undefined;
  article: Article;
  constructor(
    public router: ActivatedRoute,
    private articleService: ArticleService
  ) {
    this.article = {
      userId: 0,
      title: '',
      body: '',
      id: 0
    }
  } //create instance

  ngOnInit(): void {
    this.articleId = this.router.snapshot.paramMap.get('id');
    this.articleService.getCommentsById(this.articleId).subscribe((comments) => {
      this.comments = comments;
    });

    this.articleService.getArticlesById(this.articleId).subscribe((article) => {
      this.article = article;
    });
  }
}
