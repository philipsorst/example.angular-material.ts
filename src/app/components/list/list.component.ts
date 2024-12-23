import {Component} from "@angular/core";
import {ToolbarService} from "../../toolbar/toolbar.service";
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatCheckboxModule} from "@angular/material/checkbox";

@Component({
    templateUrl: 'list.component.html',
    imports: [
        MatListModule,
        MatIconModule,
        MatButtonModule,
        MatCheckboxModule
    ]
})
export class ListComponent {
    constructor(private readonly toolbarService: ToolbarService) {
        this.toolbarService.setTitle('List');
    }
}
