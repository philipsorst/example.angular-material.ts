import {Injectable} from '@angular/core';
import * as faker from 'faker';

@Injectable({
    providedIn: 'root'
})
export class InitService
{
    public initialize(): Promise<any>
    {
        console.log('Initializing');
        faker.seed(4711);
        return Promise.resolve(true);
    }
}
