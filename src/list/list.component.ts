import {Component, OnInit} from "@angular/core";
import * as faker from 'faker';
import {Title} from "@angular/platform-browser";

@Component({
    templateUrl: './list.component.html'
})
export class ListComponent implements OnInit
{
    public userNames: string[] = [];

    constructor(private titleService: Title)
    {
    }

    public ngOnInit(): void
    {
        this.titleService.setTitle('List');
        for (let i = 0; i < 50; i++) {
            this.userNames.push(faker.name.findName());
        }
    }
}
