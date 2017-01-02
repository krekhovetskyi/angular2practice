import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

export interface IComment {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
}

@Injectable()
export class CommentsService {
    private _url: string = 'https://jsonplaceholder.typicode.com/comments';

    constructor(private _http: Http) { }

    private hendleError(error: any): Promise<any>{
        return Promise.reject(error.message || error);
    }

    getComments(postId: number): Promise<IComment[]> {
        return this._http
                    .get(`${this._url}?postId=${postId}`)
                    .toPromise()
                    .then((comments): IComment[] => comments.json())
                    .catch(this.hendleError);
    }

}
