import {Component, OnDestroy, OnInit} from '@angular/core';
import {UserService} from '../app/user/user.service';
import {ActivatedRoute} from '@angular/router';

@Component({
    templateUrl: './list-detail.component.html'
})
export class ListDetailComponent implements OnInit, OnDestroy
{
    constructor(private route: ActivatedRoute, private userService: UserService)
    {
    }

    /**
     * @override
     */
    public ngOnDestroy(): void
    {
    }

    /**
     * @override
     */
    public ngOnInit(): void
    {
    }
}
