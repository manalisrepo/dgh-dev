import { enableProdMode, NgZone } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Router } from '@angular/router';
import { AppModule } from './app/app.module';
import {
  singleSpaAngular,
  getSingleSpaExtraProviders,
} from 'single-spa-angular';
import { ApplicationRef, NgModuleRef } from '@angular/core';

let ngZone: NgZone;
let router: Router;

const lifecycles = singleSpaAngular({
  bootstrapFunction: async () => {
    console.log(1);
    const module: NgModuleRef<AppModule> = await platformBrowserDynamic(
      getSingleSpaExtraProviders()
    ).bootstrapModule(AppModule);

    ngZone = module.injector.get(NgZone);
    router = module.injector.get(Router);
    console.log(2);
    console.log(module);
    return module;
  },
  template: '<app-root></app-root>',
  Router,
  NgZone,
  updateFunction: async () => {
    // ✅ Ensure updateFunction returns a Promise
    if (ngZone && router) {
      ngZone.run(() => {
        router.navigateByUrl(router.url);
      });
    }
    return Promise.resolve();
  },
});

export const { bootstrap, mount, unmount } = lifecycles;
