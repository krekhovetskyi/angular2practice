import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

interface IUserAddress {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
        lat: string;
        lng: string;
    };
}

interface IUserCompany {
    name: string;
    catchPhrase: string;
    bs: string;
}

export interface IUser {
    id: number;
    name: string;
    username: string;
    email: string;
    addres: IUserAddress;
    phone: string;
    website: string;
    company: IUserCompany;
}

@Injectable()
export class UsersService {
    private _url: string = 'https://jsonplaceholder.typicode.com/users';

    constructor(private _http: Http) { }

    private handleError(error: any): Promise<any> {
        return Promise.reject(error.message || error);
    }

    getUsers(): Promise<IUser[]> {
        return this._http
                    .get(this._url)
                    .toPromise()
                    .then((users): IUser[] => users.json())
                    .catch(this.handleError);
    }

    getUser(id: number): Promise<IUser> {
        return this._http
                    .get(`${this._url}/${id}`)
                    .toPromise()
                    .then((user): IUser => user.json())
                    .catch(this.handleError);
    }

}
