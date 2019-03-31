import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TypographyComponent} from "../typography/typography.component";
import {NavListComponent} from "../list/nav-list.component";
import {ChipComponent} from "../chip/chip.component";
import {ListDetailComponent} from '../list/list-detail.component';

const routes: Routes = [
    {path: '', redirectTo: '/typography', pathMatch: 'full'},
    {path: 'typography', component: TypographyComponent},
    {
        path: 'navlist',
        children: [
            {
                'path': '',
                component: NavListComponent
            },
            {
                path: ':uuid',
                component: ListDetailComponent
            }
        ]
    },
    {path: 'chip', component: ChipComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
    exports: [RouterModule]
})
export class AppRoutingModule
{
}
