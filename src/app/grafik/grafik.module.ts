import { NgModule } from '@angular/core';
import { CommonModule }   from '@angular/common';

import { GrafikComponent } from './grafik.component';
import { GrafikRoutes } from './grafik.routes';
import { ChartModule } from 'angular2-highcharts';

@NgModule({
    imports: [CommonModule, GrafikRoutes, ChartModule],
    declarations: [GrafikComponent]
})
export class GrafikModule { }
