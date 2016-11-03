import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Ng2CompleterModule } from "ng2-completer";

import { SppRoutes } from './spp.routes';
import { SppComponent } from './spp.component';

@NgModule({
    imports: [CommonModule, SppRoutes, FormsModule, Ng2CompleterModule],
    declarations: [SppComponent]
})
export class SppModule { }
