import {Component} from '@angular/core';
import {UserService} from '../app/user/user.service';

@Component({
    templateUrl: './list-detail.component.html'
})
export class ListDetailComponent
{
    constructor(private userService: UserService)
    {
    }
}
