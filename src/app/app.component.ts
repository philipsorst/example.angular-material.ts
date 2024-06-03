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
        RouterLinkActive,
        DdrMaterialExtensionsModule
    ],
    templateUrl: 'app.component.html',
    styles: [],
})
export class AppComponent implements OnInit {
    public title$!: Observable<string>;

    constructor(
        private readonly toolbarService: ToolbarService,
    ) {
    }

    /**
     * @override
     */
    public ngOnInit() {
        this.title$ = this.toolbarService.watchTitle();
    }
}
