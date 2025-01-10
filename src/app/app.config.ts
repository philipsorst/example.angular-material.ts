import {ApplicationConfig, isDevMode} from '@angular/core';
import {provideRouter, withInMemoryScrolling} from '@angular/router';

import {routes} from './app.routes';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {MAT_CARD_CONFIG} from "@angular/material/card";
import {provideServiceWorker} from '@angular/service-worker';

import {provideDdrMaterialExtensions} from "@dontdrinkandroot/ngx-material-extensions";

export const appConfig: ApplicationConfig = {
    providers: [
        provideRouter(routes, withInMemoryScrolling({
            scrollPositionRestoration: "enabled"
        })),
        provideAnimationsAsync(),
        {
            provide: MAT_CARD_CONFIG,
            useValue: {
                appearance: 'outlined'
            }
        },
        provideServiceWorker('ngsw-worker.js', {
            enabled: !isDevMode(),
            registrationStrategy: 'registerWhenStable:30000'
        }),
        provideDdrMaterialExtensions()
    ]
};
