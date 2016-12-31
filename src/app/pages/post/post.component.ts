import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import 'rxjs/add/operator/switchMap';

import { IPost } from './../../services/IPost';
import { PostService } from './../../services/post.service';

@Component({
    selector: 'app-post',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.scss']
})
export class PostPageComponent implements OnInit, OnDestroy {
    postSub: any;
    post: IPost;

    constructor(private activatedRoute: ActivatedRoute,
        private _postService: PostService) { }

    ngOnInit(): void {
        this.postSub = this.activatedRoute
            .params
            .switchMap((params: Params) => this._postService.getPost(+params['id']))
            .subscribe((post: IPost) => this.post = post);
    }

    ngOnDestroy(): void {
        this.postSub.unsubscribe();
    }

}
