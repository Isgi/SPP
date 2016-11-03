import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SppComponent } from './spp.component';

export const routes: Routes = [
  { path: 'spp', component: SppComponent, data:{title:'SPP'} },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SppRoutes { }