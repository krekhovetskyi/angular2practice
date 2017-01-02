import { Component, OnInit } from '@angular/core';

import { IPost, PostsService } from './../../services/posts.service';

@Component({
    selector: 'app-posts',
    templateUrl: './posts.component.html',
    styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
    public posts: IPost[] = [];

    constructor(private _postsService: PostsService) { }

    ngOnInit() {
        this._postsService
            .getPosts()
            .then(posts => this.posts = posts);
    }

}
