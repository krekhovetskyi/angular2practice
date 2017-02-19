import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from "rxjs";

import { IPost, PostsService } from '../../services/posts.service';
import { IComment, CommentsService } from '../../services/comments.service';

@Component({
    selector: 'app-post',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.scss']
})
export class PostPageComponent implements OnInit, OnDestroy {
    post: IPost;
    comments: IComment[];
    paramsSub: any;

    constructor(private activatedRoute: ActivatedRoute,
                private _postService: PostsService,
                private _commentsService: CommentsService) {
    }

    ngOnInit(): void {
        this.paramsSub = this.activatedRoute
            .params
            .subscribe((params: Params) => {
                this.setPageData(params);
            });
    }

    ngOnDestroy(): void {
        this.paramsSub.unsubscribe();
    }

    setPageData(params: Params): void {
        let postId = +params['id'];

        Observable
            .forkJoin(
                this._postService.getPost(postId),
                this._commentsService.getComments(postId)
            )
            .subscribe((response) => {
                this.post = <IPost>response[0];
                this.comments = <IComment[]>response[1];
            });
    }

}
