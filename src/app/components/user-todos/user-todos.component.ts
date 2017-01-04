import { Component, Input, OnInit } from '@angular/core';

import { UsersService, ITodo } from './../../services/users.service';

@Component({
    selector: 'app-user-todos',
    templateUrl: './user-todos.component.html',
    styleUrls: ['./user-todos.component.scss']
})
export class UserTodosComponent implements OnInit {
    @Input() userId: number;
    todos: ITodo[];
    limit: number = 5;

    constructor(private _userService: UsersService) { }

    ngOnInit() {
        this._userService
            .getUserTodos(this.userId, this.limit)
            .then((todos): ITodo[] => this.todos = todos);
    }

}
