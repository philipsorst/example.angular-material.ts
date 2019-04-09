import {Injectable} from '@angular/core';
import {User} from './user';
import * as faker from 'faker';
import {BehaviorSubject} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class UserService
{
    private users: User[] = [];

    private usersSubject = new BehaviorSubject(this.users);

    constructor()
    {
        for (let i = 0; i < 200; i++) {
            this.users.push(this.createUser());
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
        this.usersSubject.next(this.users);
    }

    public createUser(sortKey: number = null): User
    {
        let user = new User();
        user.id = faker.random.uuid();
        user.firstName = faker.name.firstName();
        user.lastName = faker.name.lastName();
        user.userName = user.lastName.toLocaleLowerCase() + '.' + user.firstName.toLocaleLowerCase();
        user.avatarUrl = faker.image.avatar();

        if (null === sortKey) {
            user.sortKey = 0 === this.users.length ? 0 : this.users[this.users.length - 1].sortKey + 1
        } else {
            user.sortKey = sortKey;
        }

        return user;
    }

    public add(user: User)
    {
        this.users.push(user);
        this.usersSubject.next(this.users);
    }

    public remove(user: User)
    {
        this.users = this.users.filter((listUser: User) => {
            return listUser.id !== user.id;
        });
        this.usersSubject.next(this.users);
    }

    public getUsersObservable()
    {
        return this.usersSubject.asObservable();
    }

    public move(previousIndex: number, currentIndex: number)
    {
        if (previousIndex === currentIndex) {
            return;
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
        this.usersSubject.next(this.users);
    }

    private sort()
    {
        this.users.sort((user1: User, user2: User) => {
            return user1.sortKey - user2.sortKey;
        });
    }
}
