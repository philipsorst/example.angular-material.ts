import {Injectable} from '@angular/core';
import {Router, Scroll} from '@angular/router';
import {ViewportScroller} from '@angular/common';
import {filter, tap} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class ScrollService
{
    private lastScrollPosition: [number, number] = [0, 0];

    constructor(private router: Router, private viewportScroller: ViewportScroller)
    {
        this.router.events
            .pipe(
                tap((e) => console.log('Event', e)),
                filter(e => e instanceof Scroll)
            )
            .subscribe(e => {
                if ((e as Scroll).position) {
                    this.lastScrollPosition = (e as Scroll).position;
                    console.log('scrollPosition', e)
                }
            });
    }

    public restore()
    {
        this.viewportScroller.scrollToPosition(this.lastScrollPosition);
    }
}
