import {Routes} from '@angular/router';
import {TypographyComponent} from "./typography/typography.component";
import {ButtonComponent} from "./components/button/button.component";
import {CardComponent} from "./components/card/card.component";

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
            }
        ]
    }
];
