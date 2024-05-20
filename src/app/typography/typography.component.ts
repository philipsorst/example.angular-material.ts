import {Component} from "@angular/core";
import {MatCardModule} from "@angular/material/card";
import {ToolbarService} from "../toolbar/toolbar.service";

@Component({
    standalone: true,
    templateUrl: 'typography.component.html',
    imports: [
        MatCardModule
    ]
})
export class TypographyComponent {
    constructor(private readonly toolbarService: ToolbarService) {
        this.toolbarService.setTitle('Typography');
    }
}
