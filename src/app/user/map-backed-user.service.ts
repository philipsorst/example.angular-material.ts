import {Injectable} from '@angular/core';
import {User} from './user';
import {Observable, of, throwError} from 'rxjs';
import {UserService} from './user.service';
import {UserGeneratorService} from './user-generator.service';
import {PaginatedResult} from '../pagination/paginated-result';
import {Pagination} from '../pagination/pagination';

@Injectable({
    providedIn: 'root'
})
export class MapBackedUserService extends UserService
{
    private users: User[] = [];

    private uuidUserMap = new Map<string, User>();

    constructor(private userGeneratorService: UserGeneratorService)
    {
        super();
    }

    public init()
    {
        for (let i = 0; i < 5000; i++) {
            const user = this.userGeneratorService.generate();
            user.sortKey = 0 === this.users.length ? 0 : this.users[this.users.length - 1].sortKey + 1
            this.users.push(user);
            this.uuidUserMap.set(user.id, user);
        }
        this.users.sort((user1: User, user2: User) => {
            const lastNameResult = user1.lastName.localeCompare(user2.lastName);
            if (0 !== lastNameResult) {
                return lastNameResult;
            }

            return user1.firstName.localeCompare((user2.firstName));
        });
        this.users.forEach((user: User, index: number) => {
            user.sortKey = index;
        });
        this.sort();
    }

    /**
     * @override
     */
    public list(page: number = 1, perPage: number = 50): Observable<PaginatedResult<User>>
    {
        console.debug('MapBackedUserService', 'list', page, perPage);
        const startIndex = (page - 1) * perPage;
        const endIndex = Math.min((page * perPage), this.users.length);
        const slicedUsers = this.users.slice(startIndex, endIndex);
        const paginatedResult = new PaginatedResult<User>(new Pagination(this.users.length, page, perPage));
        slicedUsers.forEach((user, index) => paginatedResult[index] = user);

        return of(paginatedResult);
    }

    /**
     * @override
     */
    public get(uuid: string): Observable<User>
    {
        console.debug('MapBackedUserService', 'get', uuid);
        const user = this.uuidUserMap.get(uuid);
        if (null == user) {
            return throwError(new Error('Not Found'));
        }

        return of(user);
    }

    /**
     * @override
     */
    public create(user: User): Observable<User>
    {
        console.debug('MapBackedUserService', 'create', user);
        user.id = this.userGeneratorService.generateUuid();
        this.users.push(user);
        this.uuidUserMap.set(user.id, user);
        this.sort();

        return of(user);
    }

    /**
     * @override
     */
    public update(user: User): Observable<User>
    {
        console.debug('MapBackedUserService', 'update', user);
        this.sort();

        return of(user);
    }

    /**
     * @override
     */
    public delete(uuid: string): Observable<boolean>
    {
        console.debug('MapBackedUserService', 'delete', uuid);
        const user = this.uuidUserMap.get(uuid);
        if (null == user) {
            return throwError(new Error('Not Found'));
        }

        this.users = this.users.filter((listUser: User) => {
            return listUser.id !== user.id;
        });
        this.uuidUserMap.delete(uuid);
        return of(true);
    }

    public move(previousIndex: number, currentIndex: number): Observable<boolean>
    {
        console.debug('MapBackedUserService', 'move', previousIndex, currentIndex);
        if (previousIndex === currentIndex) {
            of(false);
        }

        let targetNextIdx;
        let targetPrevIdx;

        if (currentIndex > previousIndex) {
            targetPrevIdx = currentIndex;
            targetNextIdx = currentIndex + 1;
        } else {
            targetPrevIdx = currentIndex - 1;
            targetNextIdx = currentIndex;
        }

        let prevKey = 0 > targetPrevIdx ? this.users[0].sortKey - 2 : this.users[targetPrevIdx].sortKey;
        let nextKey = this.users.length - 1 < targetNextIdx ? this.users[this.users.length - 1].sortKey + 2 : this.users[targetNextIdx].sortKey;
        console.log('move', previousIndex, currentIndex, targetPrevIdx, targetNextIdx, prevKey, nextKey);
        this.users[previousIndex].sortKey = ((prevKey + nextKey) / 2.0);
        this.sort();

        return of(true);
    }

    private sort()
    {
        this.users.sort((user1: User, user2: User) => {
            return user1.sortKey - user2.sortKey;
        });
    }
}
