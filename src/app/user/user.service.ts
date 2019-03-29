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
        for (let i = 0; i < 50; i++) {
            this.users.push(this.createUser(i));
        }
        this.usersSubject.next(this.users);
    }

    public createUser(sortKey: number = 0): User
    {
        let user = new User();
        user.id = faker.random.uuid();
        user.firstName = faker.name.firstName();
        user.lastName = faker.name.lastName();
        user.userName = faker.internet.userName();
        user.avatarUrl = faker.image.avatar();
        user.sortKey = sortKey;

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

    private sort()
    {
        this.users.sort((user1: User, user2: User) => {
            return user1.userName.localeCompare(user2.userName);
        });
    }
}
