import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  NgOptimizedImage,
  provideImgixLoader,
  provideCloudflareLoader,
  provideCloudinaryLoader,
  provideImageKitLoader
} from '@angular/common';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgOptimizedImage],
  providers: [
    // provideImgixLoader('https://assets.imgix.net/', { ensurePreconnect: true }),
    // provideCloudflareLoader('http://localhost:4200'),
    // provideCloudinaryLoader('http://localhost:4200'),
    // provideImageKitLoader('http://localhost:4200'),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
