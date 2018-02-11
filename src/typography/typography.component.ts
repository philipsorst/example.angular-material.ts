import {Component, OnInit} from "@angular/core";
import {Title} from "@angular/platform-browser";

@Component({
    templateUrl: './typography.component.html'
})
export class TypographyComponent implements OnInit
{
    constructor(private titleService: Title)
    {
    }

    public ngOnInit(): void
    {
        this.titleService.setTitle('Typography');
    }
}
