import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GrafikComponent } from './grafik.component';

const routes: Routes = [
  { path: 'grafik', component: GrafikComponent, data:{title:'Grafik'} },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GrafikRoutes { }
