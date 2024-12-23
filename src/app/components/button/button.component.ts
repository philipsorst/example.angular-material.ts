import {Component} from "@angular/core";
import {ToolbarService} from "../../toolbar/toolbar.service";
import {MatCard, MatCardContent} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";

@Component({
    imports: [
        MatCard,
        MatCardContent,
        MatButtonModule
    ],
    templateUrl: 'button.component.html'
})
export class ButtonComponent {
    constructor(private readonly toolbarService: ToolbarService) {
        this.toolbarService.setTitle('Button');
    }
}
