import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Post } from './post.model';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  private fireBaseUrl = 'https://angular-b5ec3-default-rtdb.firebaseio.com';

	constructor(private http: HttpClient) {}

  createAndStorePost(title: string, content: string) {
    const postData: Post = { title, content };

    return this.http.post<{ name: string }>(
      this.fireBaseUrl + '/posts.json',
      postData
    );
  }

  fetchPosts() {
    return this.http
      .get<{ [key: string]: Post }>(this.fireBaseUrl + '/posts.json')
      .pipe(
        map((responseData) => {
          const postsArray: Post[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              postsArray.push({ ...responseData[key], id: key });
            }
          }

          return postsArray;
        })
      );
  }

  deletePosts() {
    return this.http.delete(this.fireBaseUrl + '/posts.json');
  }
}
