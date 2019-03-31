import {Component, OnDestroy, OnInit} from "@angular/core";
import {TitleService} from "../title/title.service";
import {User} from '../app/user/user';
import {UserService} from '../app/user/user.service';
import {Observable} from 'rxjs';
import {ActivatedRoute} from '@angular/router';

@Component({
    templateUrl: './nav-list.component.html'
})
export class NavListComponent implements OnInit, OnDestroy
{
    public users: Observable<User[]>;

    public detailActive = false;

    public opacity: number = 100;


    constructor(
        private titleService: TitleService, private route: ActivatedRoute,
        private userService: UserService
    )
    {
    }

    /**
     * @override
     */
    public ngOnInit(): void
    {
        this.titleService.setTitle('List');
        this.users = this.userService.getUsersObservable();
    }

    /**
     * @override
     */
    public ngOnDestroy(): void
    {
    }

    public trackByUuid(user: User)
    {
        return user.id;
    }

    public add()
    {
        this.userService.add(this.userService.createUser());
    }

    public remove(user: User)
    {
        this.userService.remove(user);
    }

    dropped($event)
    {
        console.log('dropped', $event)
    }
}
