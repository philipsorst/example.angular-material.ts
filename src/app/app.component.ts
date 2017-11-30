import {Component, OnDestroy, OnInit} from '@angular/core';
import {AppTitleService} from "./app-title.service";
import {Subscription} from "rxjs/Subscription";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
})
export class AppComponent implements OnInit, OnDestroy
{
    public title: string;

    private titleSubscription: Subscription;

    constructor(private appTitleService: AppTitleService)
    {
    }

    public ngOnInit(): void
    {
        this.titleSubscription = this.appTitleService.getTitleSubject().subscribe((newTitle) => this.title = newTitle);
    }

    public ngOnDestroy(): void
    {
        this.titleSubscription.unsubscribe();
    }
}
