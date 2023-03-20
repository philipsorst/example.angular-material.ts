import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatListModule} from "@angular/material/list";
import {DdrMaterialExtensionsModule} from '@dontdrinkandroot/ngx-material-extensions';
import {DdrExtensionsModule} from '@dontdrinkandroot/ngx-extensions';
import {MatCardModule} from "@angular/material/card";
import {ChipComponent} from "./components/chip/chip.component";
import {DragAndDropDetailComponent} from "./examples/drag-and-drop-list/drag-and-drop-detail.component";
import {DragAndDropListComponent} from "./examples/drag-and-drop-list/drag-and-drop-list.component";
import {NotFoundComponent} from "./common/not-found.component";
import {TypographyComponent} from "./typography/typography.component";
import {TitleComponent} from "./title/title.component";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatMenuModule} from "@angular/material/menu";
import {DragDropModule} from "@angular/cdk/drag-drop";
import {ScrollingModule} from "@angular/cdk/scrolling";
import {MatChipsModule} from "@angular/material/chips";
import {ReactiveFormsModule} from "@angular/forms";
import {MatOptionModule} from "@angular/material/core";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
    declarations: [
        AppComponent,
        ChipComponent,
        DragAndDropDetailComponent,
        DragAndDropListComponent,
        NotFoundComponent,
        TitleComponent,
        TypographyComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        DdrExtensionsModule,
        DdrMaterialExtensionsModule,
        DragDropModule,
        MatAutocompleteModule,
        MatButtonModule,
        MatCardModule,
        MatChipsModule,
        MatFormFieldModule,
        MatIconModule,
        MatListModule,
        MatMenuModule,
        MatOptionModule,
        MatToolbarModule,
        ReactiveFormsModule,
        ScrollingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
