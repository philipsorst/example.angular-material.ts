import {Component, OnDestroy, OnInit} from "@angular/core";
import {TitleService} from "./title.service";
import {Subscription} from 'rxjs';

@Component({
    selector: 'ex-title',
    template: '<h2>{{title}}</h2>'
})
export class TitleComponent implements OnInit, OnDestroy
{
    public title: string;

    private titleSubscription: Subscription;

    constructor(private titleService: TitleService)
    {
    }

    /**
     * @override
     */
    public ngOnInit()
    {
        this.titleSubscription = this.titleService.getTitleObservable().subscribe((title: string) => {
            this.title = title;
        })
    }

    /**
     * @override
     */
    public ngOnDestroy()
    {
        this.titleSubscription.unsubscribe();
    }
}
