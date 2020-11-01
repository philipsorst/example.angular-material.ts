import {Injectable} from '@angular/core';
import {User} from './user';
import * as faker from 'faker';

@Injectable({
    providedIn: 'root'
})
export class UserGeneratorService
{
    public generate(withUuid: boolean = false): User
    {
        let user = new User();
        if (withUuid) {
            user.id = this.generateUuid();
        }
        user.firstName = faker.name.firstName();
        user.lastName = faker.name.lastName();
        user.userName = user.lastName.toLocaleLowerCase() + '.' + user.firstName.toLocaleLowerCase();
        user.avatarUrl = faker.image.avatar();

        return user;
    }

    public generateUuid(): string
    {
        return faker.random.uuid();
    }
}
