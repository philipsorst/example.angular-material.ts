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
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {DragDropModule} from '@angular/cdk/drag-drop';
import {NotFoundComponent} from './common/not-found.component';
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '../environments/environment';
import {DragAndDropListComponent} from './examples/drag-and-drop-list/drag-and-drop-list.component';
import {DragAndDropDetailComponent} from './examples/drag-and-drop-list/drag-and-drop-detail.component';
import {ChipComponent} from './components/chip/chip.component';
import {InitService} from './init/init.service';
import {TypographyComponent} from './typography/typography.component';
import {TitleComponent} from './title/title.component';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {DdrAngularMaterialExtensionsModule} from '@dontdrinkandroot/angular-material-extensions';

export function initServiceFactory(initService: InitService): Function
{
    return () => initService.initialize();
}

@NgModule({
    declarations: [
        AppComponent,
        TypographyComponent,
        TitleComponent,
        ChipComponent,
        NotFoundComponent,
        DragAndDropListComponent,
        DragAndDropDetailComponent
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
        ScrollingModule,
        DragDropModule,
        DdrAngularMaterialExtensionsModule,
        ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production})
    ],
    providers: [
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
