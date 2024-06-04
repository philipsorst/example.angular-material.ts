import {Routes} from '@angular/router';
import {TypographyComponent} from "./typography/typography.component";
import {ButtonComponent} from "./components/button/button.component";
import {CardComponent} from "./components/card/card.component";
import {ListComponent} from "./components/list/list.component";

export const routes: Routes = [
    {
        path: 'typography',
        component: TypographyComponent
    },
    {
        path: 'components',
        children: [
            {
                path: 'button',
                component: ButtonComponent
            },
            {
                path: 'card',
                component: CardComponent
            },
            {
                path: 'list',
                component: ListComponent
            }
        ]
    }
];
