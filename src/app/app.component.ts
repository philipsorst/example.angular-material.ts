import {Component, OnInit} from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {ToolbarService} from "./toolbar/toolbar.service";
import {Observable} from "rxjs";
import {AsyncPipe} from "@angular/common";
import {DdrMaterialExtensionsModule} from "@dontdrinkandroot/ngx-material-extensions";
import {SwUpdate} from "@angular/service-worker";

@Component({
    selector: 'ddr-root',
    imports: [
        RouterOutlet,
        MatToolbarModule,
        MatSidenavModule,
        MatListModule,
        MatIconModule,
        MatButtonModule,
        RouterLink,
        AsyncPipe,
        RouterLinkActive,
        DdrMaterialExtensionsModule
    ],
    templateUrl: 'app.component.html',
    styles: []
})
export class AppComponent implements OnInit {
    public title$!: Observable<string>;

    constructor(
        private readonly toolbarService: ToolbarService,
        swUpdate: SwUpdate,
    ) {
        if (swUpdate.isEnabled) {
            swUpdate.versionUpdates.subscribe((event) => {
                switch (event.type) {
                    case 'VERSION_READY':
                        document.location.reload();
                        break;
                }
            });
        }
    }

    /**
     * @override
     */
    public ngOnInit() {
        this.title$ = this.toolbarService.watchTitle();
    }
}
