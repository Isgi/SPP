import { NgModule } from '@angular/core';
import { CommonModule }   from '@angular/common';

import { ReportRoutes } from './report.routes';
import { ReportComponent } from './report.component';


@NgModule({
    imports: [CommonModule, ReportRoutes],
    declarations: [ReportComponent]
})
export class ReportModule { }
