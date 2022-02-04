import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';
import { OurServicesComponent } from './our-services/our-services.component';
import { HomeComponent } from './home/home.component';
import { MatCardModule } from '@angular/material/card';
import { AboutUsComponent } from './about-us/about-us.component';
import { PqrsdComponent } from './pqrsd/pqrsd.component';
import { NavBarComponent } from '../shared-component/nav-bar/nav-bar.component';
import { SharedComponentModule } from '../shared-component/shared-component.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
	declarations: [ HomeComponent, OurServicesComponent, AboutUsComponent, PqrsdComponent ],
	imports: [
		CommonModule,
		MatTabsModule,
		MatTooltipModule,
		MatCardModule,
		SharedComponentModule,
		BrowserModule,
		NgbModule
	],
	exports: [ HomeComponent, OurServicesComponent ],
	entryComponents: [ HomeComponent, OurServicesComponent, NavBarComponent ],
  bootstrap: [ HomeComponent ]
})
export class ComponentModule {}
