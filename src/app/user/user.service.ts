import {Observable} from 'rxjs';
import {PaginatedResult} from '../pagination/paginated-result';
import {User} from './user';

export abstract class UserService
{
    abstract list(page: number, perPage: number): Observable<PaginatedResult<User>>;

    abstract create(user: User): Observable<User>;

    abstract get(uuid: string): Observable<User>;

    abstract update(user: User): Observable<User>;

    abstract delete(uuid: string): Observable<boolean>;

    abstract move(previousIndex: number, currentIndex: number): Observable<boolean>
}
