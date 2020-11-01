import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {MapBackedUserService} from '../../user/map-backed-user.service';
import {TitleService} from '../../../title/title.service';
import {User} from '../../user/user';
import {map, switchMap, tap} from 'rxjs/operators';

@Component({
    templateUrl: './drag-and-drop-detail.component.html'
})
export class DragAndDropDetailComponent implements OnInit
{
    public user$: Observable<User>;

    constructor(
        private route: ActivatedRoute, private userService: MapBackedUserService, private titleService: TitleService)
    {
    }

    /**
     * @override
     */
    public ngOnInit(): void
    {
        const uuid$ = this.route.paramMap.pipe(map(routeParams => routeParams.get('uuid')));
        this.user$ = uuid$.pipe(switchMap(uuid => this.userService.get(uuid)), tap(user => this.titleService.setTitle(user.firstName + ' ' + user.lastName)));
    }
}
