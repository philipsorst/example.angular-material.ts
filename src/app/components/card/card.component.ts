import {Component} from "@angular/core";
import {TitleService} from "../../title/title.service";

@Component({
    templateUrl: './card.component.html',
})
export class CardComponent
{
    constructor(private readonly titleService: TitleService)
    {
        this.titleService.setTitle('Card');
    }
}
