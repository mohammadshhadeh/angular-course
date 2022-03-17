import { Article, Comment } from "./shared/article.interface";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from "@angular/core";

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
    }),
};

@Injectable({
    providedIn: 'root',
})
export class ArticleService {
    private apiUrl = 'https://jsonplaceholder.typicode.com/';
    constructor(private http: HttpClient) {}

    getArticles(): Observable<Article[]> {
        return this.http.get<Article[]>(this.apiUrl + 'posts');
    }

    getCommentsById(id: string): Observable<Comment[]> {
        return this.http.get<Comment[]>(this.apiUrl + `comments?postId=${id}`);
    }

    getArticlesById(id: string): Observable<Article> {
        return this.http.get<Article>(this.apiUrl + `posts/${id}`);
    }
}
