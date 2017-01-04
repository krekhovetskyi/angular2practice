import { Component, Input, OnInit } from '@angular/core';

import { UsersService } from './../../services/users.service';
import { IPost } from './../../services/posts.service';

@Component({
    selector: 'app-user-posts',
    templateUrl: './user-posts.component.html',
    styleUrls: ['./user-posts.component.scss']
})
export class UserPostsComponent implements OnInit {
    @Input() userId: number;
    posts: IPost[];
    limit: number = 5;

    constructor(private _userService: UsersService) { }

    ngOnInit() {
        this._userService
            .getUserPosts(this.userId, this.limit)
            .then((posts): IPost[] => this.posts = posts);
    }

}
