import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    public projectTitle: string;

    constructor() { }

    ngOnInit() {
        this.projectTitle = 'Angular 2 App';
    }

}
