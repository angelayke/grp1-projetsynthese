import { TableauAffichageDemandeStageComponent } from './tableau-affichage-demande-stage/tableau-affichage-demande-stage.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'tableau-affichage-demande-stage', component: TableauAffichageDemandeStageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
