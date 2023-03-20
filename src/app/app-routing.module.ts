import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TypographyComponent} from "./typography/typography.component";
import {DragAndDropListComponent} from "./examples/drag-and-drop-list/drag-and-drop-list.component";
import {DragAndDropDetailComponent} from "./examples/drag-and-drop-list/drag-and-drop-detail.component";
import {ChipComponent} from "./components/chip/chip.component";
import {NotFoundComponent} from "./common/not-found.component";
import {CardComponent} from "./components/card/card.component";

const routes: Routes = [
    {
        path: '', redirectTo: '/typography', pathMatch: 'full'
    },
    {
        path: 'typography', component: TypographyComponent
    },
    {
        path: 'examples',
        children: [
            {
                path: 'drag-and-drop-list',
                children: [
                    {
                        'path': '',
                        component: DragAndDropListComponent
                    },
                    {
                        path: ':uuid',
                        component: DragAndDropDetailComponent
                    }
                ]
            }
        ]
    },
    {
        path: 'components',
        children: [
            {
                path: 'chips',
                component: ChipComponent
            },
            {
                path: 'card',
                component: CardComponent
            }
        ]
    },
    {
        path: '**',
        component: NotFoundComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
