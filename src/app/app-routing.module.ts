import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BseComponent } from './bse/bse.component';

const routes: Routes = [
  {
    path: '',
    component: BseComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
