import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutUsComponent } from './components/about-us/about-us.component';
import { HomeComponent } from './components/home/home.component';
import { OurServicesComponent } from './components/our-services/our-services.component';
import { PqrsdComponent } from './components/pqrsd/pqrsd.component';

const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full'},
  { path: 'inicio', component: HomeComponent },
  { path: 'servicios', component: AboutUsComponent },
  { path: 'nosotros', component: OurServicesComponent },
  { path: 'pqrsd', component: PqrsdComponent }
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}
