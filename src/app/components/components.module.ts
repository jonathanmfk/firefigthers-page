import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';
import { OurServicesComponent } from './our-services/our-services.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

import { HomeComponent } from './home/home.component';
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
    CommonModule,
    MatTabsModule,
    MatTooltipModule,
    MatCardModule,
    FlexLayoutModule,
    MatButtonModule,


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