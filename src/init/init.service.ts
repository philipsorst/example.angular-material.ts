import {Injectable} from '@angular/core';
import * as faker from 'faker';
import {MapBackedUserService} from '../app/user/map-backed-user.service';

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
