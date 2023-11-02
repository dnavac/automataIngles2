import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutomataComponent } from './automata/automata.component';

const routes: Routes = [
  { path: 'automata', component: AutomataComponent },
  {path:'', redirectTo: './automata', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
