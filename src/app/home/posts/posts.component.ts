import { Component, OnInit, ViewChild } from '@angular/core';
import { RedditPostsService } from 'src/app/services/reddit-posts.service';
import { IonContent } from '@ionic/angular';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  @ViewChild('contentSpecify', { static: false }) content: IonContent;
  posts: any[];
  constructor(public redditpostsService: RedditPostsService, public router: Router, public storage: Storage) { }

  async ngOnInit() {
    this.storage.remove('post');
    await this.getPosts();
    this.ionViewDidEnter();
  }

  async getPosts() {
    // await this.redditpostsService.getRedditPost();
    this.redditpostsService.currentPostValue.length <= 0 ? await this.redditpostsService.getRedditPost() : null;
    // this.posts = this.redditpostsService.currentPostValue;
  }

  preProccessImage(url) {
    return url.replace('&amp;', '&');
  }

  viewMore(post) {
    this.storage.set('elementid', post.id);
    this.storage.set('post', post);
    // this.redditpostsService.elementid = post.id;
    // this.redditpostsService.post = post;
    this.router.navigateByUrl('home/viewmore');
  }

  async ionViewDidEnter() {
    const val = await this.storage.get('elementid');
    if (val) {
      const scrollY = document.getElementById(val);
      scrollY !== null ? scrollY.scrollIntoView(true) : null;
      // this.content.scrollToPoint(0, scrollY);
    }
  }

}
