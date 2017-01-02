import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { IPost, PostsService } from './../../services/posts.service';
import { IComment, CommentsService } from './../../services/comments.service';

@Component({
    selector: 'app-post',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.scss']
})
export class PostPageComponent implements OnInit, OnDestroy {
    postId: number;
    post: IPost;
    comments: IComment[];
    postSub: any;

    constructor(private activatedRoute: ActivatedRoute,
                private _postService: PostsService,
                private _commentsService: CommentsService) { }

    ngOnInit(): void {
        this.postSub = this.activatedRoute
            .params
            .subscribe((params: Params) => {
                this.postId = +params['id'];

                this._postService
                    .getPost(this.postId)
                    .then((post: IPost) => this.post = post);

                this._commentsService
                    .getComments(this.postId)
                    .then((comments: IComment[]) => this.comments = comments);
            });
    }

    ngOnDestroy(): void {
        this.postSub.unsubscribe();
    }

}
