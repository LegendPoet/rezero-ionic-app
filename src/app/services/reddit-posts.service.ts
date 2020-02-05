import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class RedditPostsService {
  public currentPostSubject: BehaviorSubject<any[]>;
  public currentPost: Observable<any[]>;

  constructor(public httpClient: HttpClient, public storage: Storage) {
    this.currentPostSubject = new BehaviorSubject<any[]>([]);
    this.currentPost = this.currentPostSubject.asObservable();
  }

  public get currentPostValue(): any[] {
    return this.currentPostSubject.value;
  }

  elementid: any;
  post: any;
  async getRedditPost() {
    const response: any = await this.httpClient.get<any>('https://www.reddit.com/r/Re_Zero.json?limit=10000').toPromise();
    this.currentPostSubject.next(response.data.children);
    return response;
  }

  getImage(imageUrl: string) {
    return this.httpClient.get(imageUrl, { observe: 'response', responseType: 'blob' })
      .pipe(
        map(res => {
          return new Blob([res.body], { type: res.headers.get('Content-Type') });
        })
      );
  }
}

/* help links

https://www.reddit.com/r/Re_Zero/comments/eyikie/media_smug_ram/
https://www.reddit.com/r/redditdev/comments/cdio0t/get_comments_with_json_in_subreddit_url/
https://www.reddit.com/dev/api/#GET_about_wikicontributors

*/
