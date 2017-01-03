import { Component, Input, OnInit } from '@angular/core';

import { UsersService, IAlbum } from './../../services/users.service';

@Component({
    selector: 'app-user-albums',
    templateUrl: './user-albums.component.html',
    styleUrls: ['./user-albums.component.scss']
})
export class UserAlbumsComponent implements OnInit {
    @Input() userId: number;
    albums: IAlbum[];
    limit: number = 5;

    constructor(private _userService: UsersService) { }

    ngOnInit() {
        this._userService
            .getUserAlbums(this.userId, this.limit)
            .then((albums: IAlbum[]) => this.albums = albums);
    }

}
