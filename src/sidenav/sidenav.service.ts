import {Injectable} from "@angular/core";
import {MatSidenav} from "@angular/material";

@Injectable()
export class SidenavService
{
    private sidenav: MatSidenav;

    public setSidenav(sidenav: MatSidenav)
    {
        this.sidenav = sidenav;
    }

    public toggle(): Promise<void>
    {
        if (null == this.sidenav) {
            return Promise.resolve();
        }

        return this.sidenav.toggle();
    }

    public open(): Promise<void>
    {
        if (null == this.sidenav) {
            return Promise.resolve();
        }

        return this.sidenav.open();
    }

    public close(): Promise<void>
    {
        if (null == this.sidenav) {
            return Promise.resolve();
        }

        return this.sidenav.close();
    }
}
