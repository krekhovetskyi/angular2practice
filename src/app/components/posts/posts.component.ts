import { Component, OnInit } from '@angular/core';

import { IPost } from './../../services/IPost';
import { PostService } from './../../services/post.service';


@Component({
    selector: 'app-posts',
    templateUrl: './posts.component.html',
    styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
    public posts: IPost[] = [];

    constructor(private _postService: PostService) { }

    ngOnInit() {
        this._postService
            .getPosts()
            .then(posts => this.posts = posts);
    }

}
