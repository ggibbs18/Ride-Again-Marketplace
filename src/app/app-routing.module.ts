import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SeattleComponent } from './seattle/seattle.component';
import { SanComponent } from './san/san.component';
import { BurbankComponent } from './burbank/burbank.component';
import { DallasComponent } from './dallas/dallas.component';
import { DcComponent } from './dc/dc.component';
import { ChicagoComponent } from './chicago/chicago.component';

const routes: Routes = [
  {
    path: '',
    component: BurbankComponent,
    pathMatch: 'full'
  },

   {
    path: 'dallas',
    component: DallasComponent,
  },
  {
    path: 'seattle',
    component: SeattleComponent
  },
  {
    path: 'san',
    component: SanComponent
  },
   {
    path: 'dc',
    component: DcComponent
  },
  {
    path: 'chicago',
    component: ChicagoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
