import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';
import {UserService} from '../../user/user.service';
import {TitleService} from '../../../title/title.service';

@Component({
    templateUrl: './drag-and-drop-detail.component.html'
})
export class DragAndDropDetailComponent implements OnInit, OnDestroy
{
    public uuid: string;

    private routeParamsSubscription: Subscription;

    constructor(private route: ActivatedRoute, private userService: UserService, private titleService: TitleService)
    {
    }

    /**
     * @override
     */
    public ngOnInit(): void
    {
        this.routeParamsSubscription = this.route.params.subscribe((params) => {
            this.uuid = params.uuid;
            this.titleService.setTitle(params.uuid);
        });
    }

    /**
     * @override
     */
    public ngOnDestroy(): void
    {
        this.routeParamsSubscription = this.route.params.subscribe((params) => {
            console.log(params);
        });
    }
}
