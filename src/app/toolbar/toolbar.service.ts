import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs";

@Injectable({providedIn: 'root'})
export class ToolbarService {
    private title$ = new BehaviorSubject<string>('Angular Material Example');

    public setTitle(title: string): void {
        this.title$.next(title);
    }

    public watchTitle() {
        return this.title$.asObservable();
    }
}
