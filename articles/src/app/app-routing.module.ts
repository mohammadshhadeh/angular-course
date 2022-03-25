import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticlesComponent } from './components/articles/articles.component';
import { SingleArticleComponent } from './components/single-article/single-article.component';

const routes: Routes = [
  { path: '', component: ArticlesComponent },
  {
    path: 'article/:id',
    component: SingleArticleComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
