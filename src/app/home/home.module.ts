import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BannerComponent } from './components/banner/banner.component';
import { HomeComponent } from './components/home/home.component';

import { HomeRoutingModule } from './home-routing.module';

import { SwiperModule } from 'swiper/angular';
import { SharedModule } from './../shared/shared.module';

@NgModule({
    declarations:[
        BannerComponent,
        HomeComponent,
    ],
    imports:[
        CommonModule,
        HomeRoutingModule,
        SwiperModule,
        SharedModule,
    ]
})
export class HomeModule {

}