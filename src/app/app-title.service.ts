import {Injectable, OnInit} from "@angular/core";
import {Title} from "@angular/platform-browser";
import {Subject} from "rxjs/Subject";

@Injectable()
export class AppTitleService implements OnInit
{
    private titleSubject: Subject<string> = new Subject();

    constructor(private titleService: Title)
    {
    }

    public ngOnInit(): void
    {
        throw new Error("Method not implemented.");
    }

    public getTitleSubject(): Subject<string>
    {
        return this.titleSubject;
    }

    public setTitle(title: string)
    {
        this.titleSubject.next(title);
        this.titleService.setTitle(title);
    }
}
