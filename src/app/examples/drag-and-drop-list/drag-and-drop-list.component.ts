import {AfterViewInit, Component, OnDestroy, OnInit} from "@angular/core";
import {Observable} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {CdkDragDrop} from '@angular/cdk/drag-drop';
import {TitleService} from '../../../title/title.service';
import {User} from '../../user/user';
import {UserService} from '../../user/user.service';
import {ScrollService} from '../../router/scroll-service';

@Component({
    templateUrl: './drag-and-drop-list.component.html'
})
export class DragAndDropListComponent implements OnInit, OnDestroy, AfterViewInit
{
    public users$: Observable<User[]>;

    public detailActive = false;

    public opacity: number = 100;

    constructor(
        private titleService: TitleService,
        private route: ActivatedRoute,
        private router: Router,
        private userService: UserService,
        private scrollService: ScrollService
    )
    {
    }

    /**
     * @override
     */
    public ngOnInit(): void
    {
        this.titleService.setTitle('List');
        this.users$ = this.userService.getUsersObservable();
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
    public ngAfterViewInit(): void
    {
        this.scrollService.restore();
    }

    public trackByUuid(index: number, user: User)
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

    public dropped(event: CdkDragDrop<User>)
    {
        console.log('dropped', event);
        this.userService.move(event.previousIndex, event.currentIndex);
    }
}
