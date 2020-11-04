import {ChangeDetectionStrategy, Component, OnInit, ViewChild} from '@angular/core';
import {MatSidenav} from "@angular/material/sidenav";
import {Observable} from 'rxjs';
import {SidenavService} from '@dontdrinkandroot/ngx-material-extensions';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {map} from 'rxjs/operators';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit
{
    @ViewChild('sidenav', {static: true})
    public sidenav: MatSidenav;

    public screenLarge$: Observable<boolean>;

    private largeBreakpoints = [
        Breakpoints.Medium,
        Breakpoints.Large,
        Breakpoints.XLarge
    ];

    constructor(private sidenavService: SidenavService, private breakpointObserver: BreakpointObserver)
    {
    }


    /**
     * @override
     */
    public ngOnInit(): void
    {
        this.sidenavService.setSidenav(this.sidenav);
        this.largeBreakpoints;
        this.screenLarge$ = this.breakpointObserver.observe(this.largeBreakpoints).pipe(
            map(result => result.matches)
        );
    }

    public closeSidebar()
    {
        if (!this.breakpointObserver.isMatched(this.largeBreakpoints)) {
            this.sidenav.close();
        }
    }
}
