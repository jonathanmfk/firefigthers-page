import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';

//share-component import
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedComponentModule } from './shared-component/shared-component.module';
import { MenuComponent } from './menu/menu.component';
import { ComponentModule } from './components/components.module';

@NgModule({
	declarations: [ AppComponent, MenuComponent ],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		MatButtonModule,
		MatSidenavModule,
		MatIconModule,
		MatToolbarModule,
		MatListModule,

		SharedComponentModule,
		ComponentModule
	],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
