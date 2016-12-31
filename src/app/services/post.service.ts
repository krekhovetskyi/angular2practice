import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { IPost } from './IPost';

@Injectable()
export class PostService {
    private _url: string = 'https://jsonplaceholder.typicode.com/posts';

    constructor(private _http: Http) { }

    private handleError(error: any): Promise<any> {
        return Promise.reject(error.message || error);
    }

    getPosts(): Promise<IPost[]> {
        return this._http
            .get(this._url)
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }
}
