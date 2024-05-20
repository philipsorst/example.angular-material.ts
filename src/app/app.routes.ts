import {Routes} from '@angular/router';
import {TypographyComponent} from "./typography/typography.component";
import {ButtonComponent} from "./components/button/button.component";

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
            }
        ]
    }
];
