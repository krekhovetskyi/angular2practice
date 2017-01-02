import { Component, OnInit } from '@angular/core';

import { IUser, UsersService } from '../../services/users.service';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.scss']
})
export class UsersPageComponent implements OnInit {
    users: IUser[];

    constructor(private _usersService: UsersService) { }

    ngOnInit() {
        this._usersService
            .getUsers()
            .then((users): IUser[] => this.users = users);
    }

}
