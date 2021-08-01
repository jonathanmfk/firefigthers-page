import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCardModule } from '@angular/material/card';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterBarComponent } from './footer-bar/footer-bar.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatRippleModule } from '@angular/material/core';
import { AppRoutingModule } from '../app-routing.module';


@NgModule({
  declarations: [
    NavBarComponent,
    FooterBarComponent
  ],
  imports: [
    CommonModule,
    MatTabsModule,
    MatTooltipModule,
    MatCardModule,
    FlexLayoutModule,
    MatRippleModule,
    AppRoutingModule
  ],
  exports: [
    NavBarComponent,
    FooterBarComponent
  ],
  entryComponents: [
    NavBarComponent,
    FooterBarComponent
  ]
})

export class SharedComponentModule {}