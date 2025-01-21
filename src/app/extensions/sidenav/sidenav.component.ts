import {ChangeDetectionStrategy, Component} from "@angular/core";
import {DdrMatSidenavService} from "@dontdrinkandroot/ngx-material-extensions";
import {MatSlideToggle} from "@angular/material/slide-toggle";

@Component({
    templateUrl: './sidenav.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        MatSlideToggle
    ]
})
export class SidenavComponent {

    protected stayOpenOnLargeScreen = this.sidenavService.stayOpenOnLargeScreen;

    constructor(private sidenavService: DdrMatSidenavService) {
    }
}
