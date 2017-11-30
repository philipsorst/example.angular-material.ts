import {Component, OnInit} from "@angular/core";
import {AppTitleService} from "../app/app-title.service";

@Component({
    templateUrl: './typography.component.html'
})
export class TypographyComponent implements OnInit
{
    constructor(private appTitleService: AppTitleService)
    {
    }

    public ngOnInit(): void
    {
        this.appTitleService.setTitle('Typography');
    }
}
