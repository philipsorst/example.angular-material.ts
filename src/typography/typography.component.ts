import {Component, OnInit} from "@angular/core";
import {TitleService} from "../title/title.service";

@Component({
    templateUrl: './typography.component.html'
})
export class TypographyComponent implements OnInit
{
    constructor(private titleService: TitleService)
    {
    }

    public ngOnInit(): void
    {
        this.titleService.setTitle('Typography');
    }
}
