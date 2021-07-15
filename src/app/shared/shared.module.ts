import { NgModule } from '@angular/core';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    NavBarComponent
  ],
  exports: [
    NavBarComponent
  ],
  entryComponents: [
    NavBarComponent
  ]
})

export class SharedModule {}
