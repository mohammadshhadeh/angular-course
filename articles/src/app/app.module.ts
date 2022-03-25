import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { SingleArticleComponent } from './components/single-article/single-article.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ArticleService } from './article.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { CommentComponent } from './components/single-article/comments/comment/comment.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticlesComponent,
    SingleArticleComponent,
    HeaderComponent,
    FooterComponent,
    CommentComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [ArticleService],
  bootstrap: [AppComponent],
})
export class AppModule {}
