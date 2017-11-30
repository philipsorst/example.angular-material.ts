import {Component, OnInit} from "@angular/core";
import {AppTitleService} from "../app/app-title.service";
import * as faker from 'faker';

@Component({
    templateUrl: './list.component.html'
})
export class ListComponent implements OnInit
{
    public userNames: string[] = [];

    constructor(private appTitleService: AppTitleService)
    {
    }

    public ngOnInit(): void
    {
        this.appTitleService.setTitle('List');
        for (let i = 0; i < 50; i++) {
            this.userNames.push(faker.name.findName());
        }
    }
}
