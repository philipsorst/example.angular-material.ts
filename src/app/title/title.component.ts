import {Component} from "@angular/core";
import {TitleService} from "./title.service";
import {Observable} from 'rxjs';

@Component({
    selector: 'ex-title',
    template: '<h2>{{title$ | async}}</h2>'
})
export class TitleComponent
{
    public title$: Observable<string>;

    constructor(private titleService: TitleService)
    {
        this.title$ = this.titleService.getTitleObservable();
    }
}
