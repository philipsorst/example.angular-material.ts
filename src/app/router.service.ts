import {Injectable} from '@angular/core';
import {Router, RouterEvent} from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class RouterService
{
    constructor(private router: Router)
    {
        this.router.events.subscribe((event: RouterEvent) => {
            console.log('routerEvent', event);
        });
    }
}
