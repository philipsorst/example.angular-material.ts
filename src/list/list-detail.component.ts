import {Component, OnDestroy, OnInit} from '@angular/core';
import {UserService} from '../app/user/user.service';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
    templateUrl: './list-detail.component.html'
})
export class ListDetailComponent implements OnInit, OnDestroy
{
    public uuid: string;

    private routeParamsSubscription: Subscription;

    constructor(private route: ActivatedRoute, private userService: UserService)
    {
    }

    /**
     * @override
     */
    public ngOnInit(): void
    {
        this.routeParamsSubscription = this.route.params.subscribe((params) => {
            this.uuid = params.uuid;
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
