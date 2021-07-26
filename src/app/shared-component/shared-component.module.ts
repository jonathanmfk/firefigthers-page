import { NgModule } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCardModule } from '@angular/material/card';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterBarComponent } from './footer-bar/footer-bar.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatRippleModule } from '@angular/material/core';


@NgModule({
  declarations: [
    NavBarComponent,
    FooterBarComponent
  ],
  imports: [
    MatTabsModule,
    MatTooltipModule,
    MatCardModule,
    FlexLayoutModule,
    MatRippleModule
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