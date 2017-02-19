import { Component, OnInit } from '@angular/core';

import { IPost, PostsService } from '../../services/posts.service';

@Component({
    selector: 'app-posts',
    templateUrl: './posts.component.html',
    styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
    posts: IPost[] = [];
    page: number = 1;
    totalCount: number;

    constructor(private _postsService: PostsService) { }

    private getPosts(page: number) {
        this._postsService
            .getPosts(page)
            .then(response => {
                this.posts = response.data;
                this.totalCount = response.totalCount;
            });
    }

    ngOnInit() {
        this.getPosts(this.page);
    }

    onPageChange() {
        this.getPosts(this.page);
    }

}
