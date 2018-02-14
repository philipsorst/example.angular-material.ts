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
        for (let i = 0; i < 50; i++) {
            this.add(false);
        }
        this.sort();
    }

    public trackByUuid(user: User)
    {
        return user.id;
    }

    public add(sort: boolean = true)
    {
        this.users.push(this.createUser());
        if (sort) {
            this.sort()
        }
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
        user.firstName = faker.name.firstName();
        user.lastName = faker.name.lastName();
        user.userName = faker.internet.userName();
        user.avatarUrl = faker.image.avatar();

        return user;
    }

    private sort()
    {
        this.users.sort((user1: User, user2: User) => {
            return user1.userName.localeCompare(user2.userName);
        });
    }
}

export class User
{
    public id: string;
    public firstName: string;
    public lastName: string;
    public userName: string;
    public avatarUrl: string;
}
