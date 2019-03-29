import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSidenav} from "@angular/material";
import {SidenavService} from "../sidenav/sidenav.service";
import {Subscription} from 'rxjs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
})
export class AppComponent implements OnInit
{
    public title: string;

    @ViewChild('sidenav') public sidenav: MatSidenav;

    private titleSubscription: Subscription;

    constructor(private sidenavService: SidenavService)
    {
    }

    /**
     * @override
     */
    public ngOnInit(): void
    {
        this.sidenavService.setSidenav(this.sidenav);
    }
}
