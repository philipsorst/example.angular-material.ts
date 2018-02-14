import {Component, OnInit} from "@angular/core";
import * as faker from 'faker';
import {Title} from "@angular/platform-browser";

@Component({
    templateUrl: './list.component.html'
})
export class ListComponent implements OnInit
{
    public users: User[] = [];

    constructor(private titleService: Title)
    {
    }

    /**
     * @override
     */
    public ngOnInit(): void
    {
        this.titleService.setTitle('List');
        let users = [];
        for (let i = 0; i < 50; i++) {
            users.push(this.createUser());
        }

        users.sort((user1: User, user2: User) => {
            return user1.username.localeCompare(user2.username);
        });

        this.users = users;
    }

    public trackByUuid(user: User)
    {
        return user.id;
    }

    public add()
    {
        this.users.push(this.createUser());
        this.users.sort((user1: User, user2: User) => {
            return user1.username.localeCompare(user2.username);
        });
    }

    public remove(user: User)
    {
        this.users = this.users.filter((listUser: User) => {
            return listUser.id !== user.id;
        });
    }

    private createUser(): User
    {
        let user = new User();
        user.id = faker.random.uuid();
        user.username = faker.name.findName();
        user.avatarUrl = faker.image.avatar();

        return user;
    }
}

export class User
{
    public id: string;
    public username: string;
    public avatarUrl: string;
}
