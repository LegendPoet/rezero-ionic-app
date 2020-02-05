import { TestBed } from '@angular/core/testing';

import { RedditPostsService } from './reddit-posts.service';

describe('RedditPostsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RedditPostsService = TestBed.get(RedditPostsService);
    expect(service).toBeTruthy();
  });
});
