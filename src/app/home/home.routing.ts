import { Routes } from '@angular/router';
import { PostsComponent } from './posts/posts.component';
import { ViewmoreComponent } from './viewmore/viewmore.component';
import { HomePage } from './home.page';

export const routes: Routes = [
    { path: '', component: HomePage, children: [
        {
          path: '',
          component: PostsComponent
        },
        {
          path: 'viewmore',
          component: ViewmoreComponent
        }
      ] }
];
