
import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { DataResolver } from './app.resolver';

export const ROUTES: Routes = [
  { path: '', redirectTo: 'spp', pathMatch: 'full'},
  { path: 'report', loadChildren: 'app/report/report.module#ReportModule'},
  { path: 'grafik', loadChildren: 'app/grafik/grafik.module#GrafikModule'},

];
@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutes{}