import { HttpClient, HttpEventType, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Subject, catchError, throwError, tap } from 'rxjs';
import { Post } from './post.model';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  private fireBaseUrl = 'https://angular-b5ec3-default-rtdb.firebaseio.com';
  error = new Subject<string>();

  constructor(private http: HttpClient) {}

  createAndStorePost(title: string, content: string) {
    const postData: Post = { title, content };

    this.http
      .post<{ name: string }>(this.fireBaseUrl + '/posts.json', postData, {
        observe: 'body', // default
        // observe: 'response' // => status, headers, body, ...etc
      })
      .subscribe({
        next: (responseData) => {
          console.log(responseData);
        },
        error: (error) => {
          this.error.next(error.message);
        },
      });
  }

  fetchPosts() {
    let searchParams = new HttpParams();
    searchParams = searchParams.append('print', 'pretty');
    searchParams = searchParams.append('hello', 'pretty');
    searchParams = searchParams.append('world', 'pretty');
    return this.http
      .get<{ [key: string]: Post }>(this.fireBaseUrl + '/posts.json', {
        headers: new HttpHeaders({
          'Custom-headers': 'Hello',
        }),
        // params: new HttpParams().set('print', 'pretty').set('ss', 'gg'),
        params: searchParams,
      })
      .pipe(
        map((responseData) => {
          const postsArray: Post[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              postsArray.push({ ...responseData[key], id: key });
            }
          }

          return postsArray;
        }),
        catchError((errorRes) => {
          return throwError(() => errorRes);
        })
      );
  }

  deletePosts() {
    return this.http
      .delete(this.fireBaseUrl + '/posts.json', {
        observe: 'events',
				responseType: 'text', // change body data type
      })
      .pipe(
				// execute some code without altering the response that we pass to the subscribe
        tap((event) => {
					if (event.type === HttpEventType.Sent) {
						// ...
					}

					if (event.type === HttpEventType.Response) {
						console.log(event);
					}
        })
      );
  }
}
