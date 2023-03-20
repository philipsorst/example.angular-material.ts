import {Injectable} from '@angular/core';
import {faker} from '@faker-js/faker';
import {MapBackedUserService} from '../user/map-backed-user.service';

@Injectable({
    providedIn: 'root'
})
export class InitService
{
    constructor(private userService: MapBackedUserService)
    {
    }

    public initialize(): Promise<any>
    {
        console.log('Initializing');
        faker.seed(4711);
        this.userService.init();
        return Promise.resolve(true);
    }
}
