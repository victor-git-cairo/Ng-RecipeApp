import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Post } from '../post.model';
import { PostServices } from '../posts.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy {
  // posts = [
  //   { title: 'First Post', content: 'This first post content'},
  //   { title: 'Second Post', content: 'This second post content'},
  //   { title: 'Third Post', content: 'This third post content'}
  // ]

  posts:Post[] = new Array();
  private postsSub: Subscription | undefined;

  constructor(public postsService: PostServices) {}  

  ngOnInit() {
    this.posts = this.postsService.getPosts();
    this.postsSub = this.postsService.getPostUpdateListener()
        .subscribe((posts: Post[]) => {
          this.posts = posts;
        })
  }

  ngOnDestroy() {
    this.postsSub?.unsubscribe();
  }
  
}
