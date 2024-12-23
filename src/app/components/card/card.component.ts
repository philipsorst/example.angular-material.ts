import {Component} from '@angular/core';
import {ToolbarService} from "../../toolbar/toolbar.service";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatProgressBarModule} from "@angular/material/progress-bar";

@Component({
    templateUrl: './card.component.html',
    imports: [
        MatButtonModule,
        MatCardModule,
        MatProgressBarModule
    ]
})
export class CardComponent {
    constructor(private readonly toolbarService: ToolbarService) {
        this.toolbarService.setTitle('Card');
    }
}
