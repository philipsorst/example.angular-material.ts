import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {NavigationStart, Router, RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatSidenav, MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout";
import {ToolbarService} from "./toolbar/toolbar.service";
import {combineLatest, distinctUntilChanged, fromEvent, map, Observable, Subscription} from "rxjs";
import {AsyncPipe, DOCUMENT} from "@angular/common";

@Component({
    selector: 'ddr-root',
    standalone: true,
    imports: [
        RouterOutlet,
        MatToolbarModule,
        MatSidenavModule,
        MatListModule,
        MatIconModule,
        MatButtonModule,
        RouterLink,
        AsyncPipe,
        RouterLinkActive
    ],
    templateUrl: 'app.component.html',
    styles: [],
})
export class AppComponent implements OnInit {
    public title$!: Observable<string>;

    public scrollSubscription!: Subscription;

    public closeSubscription!: Subscription;

    @ViewChild(MatSidenav, {static: true})
    public sidenav!: MatSidenav;

    public desktopView$ = this.breakpointObserver.observe([
        Breakpoints.Medium,
        Breakpoints.Large,
        Breakpoints.XLarge
    ]).pipe(
        map(result => result.matches)
    );

    constructor(
        private readonly toolbarService: ToolbarService,
        private readonly breakpointObserver: BreakpointObserver,
        private readonly router: Router,
        @Inject(DOCUMENT) private readonly document: Document
    ) {
    }

    /**
     * @override
     */
    public ngOnInit() {
        this.title$ = this.toolbarService.watchTitle();

        this.scrollSubscription = fromEvent(this.document, 'scroll')
            .pipe(
                map(() => this.document.documentElement.scrollTop > 0),
                distinctUntilChanged()
            ).subscribe((scrolled) => {
                if (scrolled) {
                    this.document.body.classList.add('scrolled');
                } else {
                    this.document.body.classList.remove('scrolled');
                }

                const themeColors = this.document.head.querySelectorAll<HTMLMetaElement>('meta[name="theme-color"]');
                themeColors.forEach((themeColor: HTMLMetaElement) => {
                    const media = themeColor.media;
                    if (media === '(prefers-color-scheme: light)') {
                        themeColor.content = scrolled ? '#efedf1' : '#fdfbff';
                    } else if (media === '(prefers-color-scheme: dark)') {
                        themeColor.content = scrolled ? '#1e1f23' : '#1a1b1f';
                    }
                });
            });

        this.closeSubscription = combineLatest([
            this.router.events,
            this.desktopView$
        ]).subscribe(([event, desktopView]) => {
            if (event instanceof NavigationStart && !desktopView) {
                this.sidenav.close();
            }
        });
    }
}
