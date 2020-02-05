import { Component, OnInit } from '@angular/core';
import { RedditPostsService } from 'src/app/services/reddit-posts.service';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-viewmore',
  templateUrl: './viewmore.component.html',
  styleUrls: ['./viewmore.component.scss'],
})
export class ViewmoreComponent implements OnInit {
  post: any;
  elementid: number;
  constructor(public redditPostsService: RedditPostsService, public router: Router, public storage: Storage) { }

  async ngOnInit() {
    this.ionViewDidEnter();
  }

  async ionViewDidEnter() {
    const val = await this.storage.get('post');
    this.post = val;
    this.post === undefined ? this.toBack() : null;
  }

  toBack() {
    this.router.navigateByUrl('home');
  }

  preProccessImage(url) {
    const urlSantize = url.replace('&amp;', '&');
    return urlSantize;
  }

  downloadImage(url) {
    const downloadLink = this.preProccessImage(url);
    this.redditPostsService.getImage(downloadLink).subscribe(
      (res) => {
        const a = document.createElement('a');
        a.href = URL.createObjectURL(res);
        a.download = this.post.title + '.jpg';
        document.body.appendChild(a);
        a.click();
      }
    );
  }

}
