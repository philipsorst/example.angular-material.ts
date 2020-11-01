import {BrowserModule} from '@angular/platform-browser';
import {APP_INITIALIZER, NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatChipsModule} from "@angular/material/chips";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatListModule} from "@angular/material/list";
import {MatMenuModule} from "@angular/material/menu";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatToolbarModule} from "@angular/material/toolbar";
import {TypographyComponent} from "../typography/typography.component";
import {NavListComponent} from "../list/nav-list.component";
import {SidenavService} from "../sidenav/sidenav.service";
import {SidenavToggleComponent} from "../sidenav/sidenav-toggle.component";
import {TitleService} from "../title/title.service";
import {TitleComponent} from "../title/title.component";
import {ChipComponent} from "../chip/chip.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {InitService} from '../init/init.service';
import {ListDetailComponent} from '../list/list-detail.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {NotFoundComponent} from './common/not-found.component';
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '../environments/environment';

export function initServiceFactory(initService: InitService): Function
{
    return () => initService.initialize();
}

@NgModule({
    declarations: [
        AppComponent,
        TypographyComponent,
        NavListComponent,
        ListDetailComponent,
        SidenavToggleComponent,
        TitleComponent,
        ChipComponent,
        NotFoundComponent
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
        MatFormFieldModule,
        MatMenuModule,
        DragDropModule,
        ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production})
    ],
    providers: [
        SidenavService,
        TitleService,
        {
            provide: APP_INITIALIZER,
            useFactory: initServiceFactory,
            deps: [InitService],
            multi: true
        },
    ],
    bootstrap: [AppComponent]
})
export class AppModule
{
}
