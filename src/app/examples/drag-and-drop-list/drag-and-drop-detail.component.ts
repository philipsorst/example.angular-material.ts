import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {MapBackedUserService} from '../../user/map-backed-user.service';
import {User} from '../../user/user';
import {filter, map, switchMap, tap} from 'rxjs/operators';
import {TitleService} from '../../title/title.service';
import {isNonNull} from '@dontdrinkandroot/ngx-extensions';

@Component({
    templateUrl: './drag-and-drop-detail.component.html'
})
export class DragAndDropDetailComponent {
    public user$: Observable<User>;

    constructor(
        private route: ActivatedRoute, private userService: MapBackedUserService, private titleService: TitleService) {
        const uuid$ = this.route.paramMap.pipe(
            map(routeParams => routeParams.get('uuid')),
            filter(isNonNull)
        );
        this.user$ = uuid$.pipe(
            switchMap(uuid => this.userService.get(uuid)),
            tap(user => this.titleService.setTitle(user.firstName + ' ' + user.lastName))
        );
    }
}
