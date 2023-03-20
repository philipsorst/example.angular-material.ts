import {Injectable} from '@angular/core';
import {User} from './user';
import {faker} from '@faker-js/faker';

@Injectable({
    providedIn: 'root'
})
export class UserGeneratorService
{
    public generate(): User
    {
        let firstName = faker.name.firstName();
        let lastName = faker.name.lastName();
        return {
            id: this.generateUuid(),
            firstName: firstName,
            lastName: lastName,
            userName: lastName.toLocaleLowerCase() + '.' + firstName.toLocaleLowerCase(),
            avatarUrl: faker.image.avatar(),
            sortKey: 0
        }
    }

    public generateUuid(): string
    {
        return faker.datatype.uuid();
    }
}
