import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './container/dashboard/dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.modules';
import { AngularMaterialModule } from 'src/app/angular-material.module';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardComponent } from './components/card/card.component';

@NgModule({
    declarations: [
        DashboardComponent,
        CardComponent
    ],
    entryComponents: [],
    imports:
        [
            CommonModule,
            FormsModule,
            IonicModule,
            ReactiveFormsModule,
            DashboardRoutingModule,
            AngularMaterialModule
        ],
    providers: [],
})
export class DashboardModule { }
