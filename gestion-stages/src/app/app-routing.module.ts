import { SidenavComponent } from './sidenav/sidenav.component';
import { TableaudebordComponent } from './tableaudebord/tableaudebord.component';
import { LoginComponent } from './login/login.component';
import { FormulaireStageComponent } from './formulaire-stage/formulaire-stage.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [

  // { path: '', component: LoginComponent },
  { path: 'sidenav', component: SidenavComponent}, //component: TableaudebordComponent
// { path: ''}, //component: LoginComponent
// { path: 'tableaudebord'}, //component: TableaudebordComponent
// { path: 'demandesdestage'}, //component: DemandesdestageComponent
// { path: 'offredestage'}, //component: OffredestageComponent
// { path: 'candidats'}, //component: CandidatsComponent
// { path: 'entreprises'}, //component: EntreprisesComponent
// { path: 'fichedemandestage'}, //component: FicheDemandeStageComponent
// { path: 'formulairestage'}, //component: FormulaireStageComponent
// { path: 'ficheoffrestage'}, //component: FicheOffreStageComponent
// { path: 'formulaireoffre'}, //component: FormulaireOffreComponent
// { path: 'fichecandidat'}, //component: FicheCandidatComponent
// { path: 'formulairecandidat'}, //component: FormulaireCandidatComponent
// { path: 'ficheentreprise'}, //component: FicheEntrepriseComponent
// { path: 'formulaireentreprise'}, //component: FormulaireEntrepriseComponent

{ path: 'formStage', component: FormulaireStageComponent },


];

@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
