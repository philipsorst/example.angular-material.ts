import {Injectable} from "@angular/core";
import {Title} from "@angular/platform-browser";
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class TitleService
{
    private titleBehaviorSubject = new BehaviorSubject<string>(null);

    constructor(private platformTitle: Title)
    {
        this.titleBehaviorSubject.next(platformTitle.getTitle());
    }

    public setTitle(title: string)
    {
        this.titleBehaviorSubject.next(title);
        this.platformTitle.setTitle(title);
    }

    public getTitleObservable(): Observable<string>
    {
        return this.titleBehaviorSubject.asObservable();
    }
}
