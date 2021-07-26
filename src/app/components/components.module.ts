import { NgModule } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';
import { OurServicesComponent } from './our-services/our-services.component';
import { HomeComponent } from './home/home.component';
import { MatCardModule } from '@angular/material/card';
import { AboutUsComponent } from './about-us/about-us.component';
import { PqrsdComponent } from './pqrsd/pqrsd.component';
import { NavBarComponent } from '../shared-component/nav-bar/nav-bar.component';
import { SharedComponentModule } from '../shared-component/shared-component.module';

@NgModule({
  declarations: [
    HomeComponent,
    OurServicesComponent,
    AboutUsComponent,
    PqrsdComponent
  ],
  imports: [
    MatTabsModule,
    MatTooltipModule,
    MatCardModule,
    SharedComponentModule
  ],
  exports: [
    HomeComponent,
    OurServicesComponent
  ],
  entryComponents: [
    HomeComponent,
    OurServicesComponent,
    NavBarComponent
  ]
})

export class ComponentModule {}