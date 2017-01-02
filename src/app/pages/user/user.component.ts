import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { IUser, UsersService } from './../../services/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserPageComponent implements OnInit, OnDestroy {
    user: IUser;
    paramsSub: any;
    isVisibleCompanyTab: boolean = false;
    isVisibleAddressTab: boolean = false;

    constructor(private activatedRoute: ActivatedRoute,
                private _userService: UsersService) { }

    ngOnInit(): void {
        this.paramsSub = this.activatedRoute
                .params
                .subscribe((params: Params) => this._userService
                                .getUser(+params['id'])
                                .then((user: IUser) => this.user = user));
    }

    ngOnDestroy(): void {
        this.paramsSub.unsubscribe();
    }

    toggleTab(type: string): void {
        switch (type) {
            case 'company':
                this.isVisibleCompanyTab = !this.isVisibleCompanyTab;
                break;
            case 'address':
                this.isVisibleAddressTab = !this.isVisibleAddressTab;
                break;
            default:
                throw new Error('unexist type of tab');
        }
    }

}
