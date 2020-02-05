import { Component, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';
import { Router } from '@angular/router';
import { RedditPostsService } from '../services/reddit-posts.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(public router: Router, public redditPostsService: RedditPostsService) { }

  goToHome() {
    this.router.navigateByUrl('home');
  }

  async refreshData() {
    await this.redditPostsService.getRedditPost();
  }

}
