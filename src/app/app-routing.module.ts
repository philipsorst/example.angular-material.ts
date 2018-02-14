import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TypographyComponent} from "../typography/typography.component";
import {ListComponent} from "../list/list.component";
import {ChipComponent} from "../chip/chip.component";

const routes: Routes = [
    {path: '', redirectTo: '/typography', pathMatch: 'full'},
    {path: 'typography', component: TypographyComponent},
    {path: 'list', component: ListComponent},
    {path: 'chip', component: ChipComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule
{
}
