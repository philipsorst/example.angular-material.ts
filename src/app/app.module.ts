import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {
    MatAutocompleteModule,
    MatButtonModule,
    MatCardModule,
    MatChipsModule,
    MatFormFieldModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule
} from "@angular/material";
import {TypographyComponent} from "../typography/typography.component";
import {ListComponent} from "../list/list.component";
import {SidenavService} from "../sidenav/sidenav.service";
import {SidenavToggleComponent} from "../sidenav/sidenav-toggle.component";
import {TitleService} from "../title/title.service";
import {TitleComponent} from "../title/title.component";
import {ChipComponent} from "../chip/chip.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
    declarations: [
        AppComponent,
        TypographyComponent,
        ListComponent,
        SidenavToggleComponent,
        TitleComponent,
        ChipComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        AppRoutingModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule,
        MatToolbarModule,
        MatButtonModule,
        MatCardModule,
        MatAutocompleteModule,
        MatChipsModule,
        MatFormFieldModule
    ],
    providers: [
        SidenavService,
        TitleService
    ],
    bootstrap: [AppComponent]
})
export class AppModule
{
}
