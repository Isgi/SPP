import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

//rootes
import { AppRoutes } from './app.routes';

// App is our top level component
import { AppComponent } from './app.component';
import { APP_RESOLVER_PROVIDERS } from './app.resolver';

//page
import { SppModule } from './spp/spp.module';
import { GrafikModule } from './grafik/grafik.module';
import { ReportModule } from './report/report.module';

//shared
import { BreadcrumbsComponent }         from './shared/breadcrumb.component';



@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    SppModule,
    GrafikModule,
    ReportModule,
    AppRoutes
  ],
  declarations: [
    AppComponent,
    BreadcrumbsComponent
  ],
  bootstrap: [ AppComponent ],
})
export class AppModule { }