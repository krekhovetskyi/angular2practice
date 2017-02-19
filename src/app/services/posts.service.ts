import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

export interface IPost {
    id: number;
    title: string;
    body: string;
    userId: number;
}

interface IPostPaginationData {
    data: IPost[];
    totalCount: number;
}

@Injectable()
export class PostsService {
    private _url: string = 'https://jsonplaceholder.typicode.com/posts';

    constructor(private _http: Http) {
    }

    private static handleError(error: any): Promise<any> {
        return Promise.reject(error.message || error);
    }

    getPost(id: number): Promise<IPost> {
        return this._http
            .get(`${this._url}/${id}`)
            .toPromise()
            .then(response => response.json())
            .catch(PostsService.handleError);
    }

    getPosts(page?: number) {
        return this._http
            .get(`${this._url}${page ? `?_page=${page}` : ''}`)
            .toPromise()
            .then(response => {
                return <IPostPaginationData>{
                    data: response.json(),
                    totalCount: +response.headers.get('x-total-count')
                };
            })
            .catch(PostsService.handleError);
    }
}
