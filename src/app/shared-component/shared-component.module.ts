import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterBarComponent } from './footer-bar/footer-bar.component';

import { MatRippleModule } from '@angular/material/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';

import { AppRoutingModule } from '../app-routing.module';

@NgModule({
	declarations: [ NavBarComponent, FooterBarComponent ],
	imports: [
		CommonModule,
		MatTooltipModule,
		MatRippleModule,
		AppRoutingModule,
		MatToolbarModule,
		MatButtonModule,
		MatListModule,
		MatSidenavModule,
		MatIconModule
	],
	exports: [ NavBarComponent, FooterBarComponent ]
})
export class SharedComponentModule {}
