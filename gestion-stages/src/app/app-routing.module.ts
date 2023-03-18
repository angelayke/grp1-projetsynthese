import { FormulaireStageComponent } from './formulaire-stage/formulaire-stage.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableaudebordComponent } from './tableaudebord/tableaudebord.component';
import { TableauAffichageDemandeStageComponent } from './tableau-affichage-demande-stage/tableau-affichage-demande-stage.component';
import { TableauAffichageOffreStageComponent } from './tableau-affichage-offre-stage/tableau-affichage-offre-stage.component';
import { CandidatsComponent } from './candidats/candidats.component';
import { EntreprisesComponent } from './entreprises/entreprises.component';

const routes: Routes = [
 { path: '', component: TableaudebordComponent}, //component: LoginComponent
 { path: 'tableaudebord', component: TableaudebordComponent},
 { path: 'demandesdestage', component: TableauAffichageDemandeStageComponent}, 
 { path: 'offredestage', component: TableauAffichageOffreStageComponent}, 
 { path: 'candidats', component: CandidatsComponent}, 
 { path: 'entreprises', component: EntreprisesComponent}, 
// { path: 'fichedemandestage'}, //component: FicheDemandeStageComponent
// { path: 'formulairestage'}, //component: FormulaireStageComponent
// { path: 'ficheoffrestage'}, //component: FicheOffreStageComponent
// { path: 'formulaireoffre'}, //component: FormulaireOffreComponent
// { path: 'fichecandidat'}, //component: FicheCandidatComponent
// { path: 'formulairecandidat'}, //component: FormulaireCandidatComponent
// { path: 'ficheentreprise'}, //component: FicheEntrepriseComponent
// { path: 'formulaireentreprise'}, //component: FormulaireEntrepriseComponent

{ path: 'formStage', component: FormulaireStageComponent }
];

@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
