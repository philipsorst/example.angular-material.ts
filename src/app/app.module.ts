import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule
} from "@angular/material";
import {AppTitleService} from "./app-title.service";
import {TypographyComponent} from "../typography/typography.component";
import {ListComponent} from "../list/list.component";

@NgModule({
    declarations: [
        AppComponent,
        TypographyComponent,
        ListComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule,
        MatToolbarModule,
        MatButtonModule,
        MatCardModule
    ],
    providers: [
        AppTitleService
    ],
    bootstrap: [AppComponent]
})
export class AppModule
{
}
