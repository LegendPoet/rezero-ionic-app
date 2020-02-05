import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { ViewmoreComponent } from './viewmore/viewmore.component';
import { PostsComponent } from './posts/posts.component';
import { routes } from './home.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    HomePage,
    PostsComponent,
    ViewmoreComponent
  ]
})
export class HomePageModule { }
