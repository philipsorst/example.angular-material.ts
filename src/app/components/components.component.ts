import {Component} from "@angular/core";
import {RouterOutlet} from "@angular/router";

@Component({
    standalone: true,
    imports: [
        RouterOutlet
    ],
    template: `
        <router-outlet>Outlet</router-outlet>`
})
export class ComponentsComponent {
}
