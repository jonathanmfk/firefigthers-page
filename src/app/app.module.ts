import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ComponentModule } from './components/components.module';
import { SharedComponentModule } from './shared-component/shared-component.module';

@NgModule({
	declarations: [ AppComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		RouterModule,
		BrowserAnimationsModule,
    MatTabsModule,
    MatTooltipModule,
		ComponentModule,
		SharedComponentModule
	],
	providers: [],
	bootstrap: [ AppComponent ],
})
export class AppModule {}
