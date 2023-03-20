import {AfterViewInit, Component, OnInit} from "@angular/core";
import {BehaviorSubject, Observable} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {CdkDragDrop} from '@angular/cdk/drag-drop';
import {User} from '../../user/user';
import {MapBackedUserService} from '../../user/map-backed-user.service';
import {ScrollService} from '../../router/scroll-service';
import {UserGeneratorService} from '../../user/user-generator.service';
import {switchMap, tap} from 'rxjs/operators';
import {TitleService} from '../../title/title.service';

@Component({
    templateUrl: './drag-and-drop-list.component.html'
})
export class DragAndDropListComponent implements OnInit, AfterViewInit {
    private refresh$ = new BehaviorSubject(Date.now());

    public users$: Observable<User[]>;

    public detailActive = false;

    public opacity: number = 100;

    constructor(
        private titleService: TitleService,
        private route: ActivatedRoute,
        private router: Router,
        private userService: MapBackedUserService,
        private scrollService: ScrollService,
        private userGeneratorService: UserGeneratorService
    ) {
        this.users$ = this.refresh$.pipe(
            tap(() => console.log('refreshing')),
            switchMap(() => this.userService.list(1, 500))
        );
    }

    /**
     * @override
     */
    public ngOnInit(): void
    {
        this.titleService.setTitle('Drag and Drop List');
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
        this.userService.create(this.userGeneratorService.generate())
            .subscribe({next: () => this.refresh$.next(Date.now())})
    }

    public remove(user: User)
    {
        this.userService.delete(user.id)
            .subscribe({next: () => this.refresh$.next(Date.now())})
    }

    public dropped(event: CdkDragDrop<User>)
    {
        console.log('dropped', event);
        this.userService.move(event.previousIndex, event.currentIndex)
            .subscribe({next: () => this.refresh$.next(Date.now())})
    }
}
