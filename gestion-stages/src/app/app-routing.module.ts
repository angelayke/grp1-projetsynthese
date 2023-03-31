import { FormulaireOffreAjoutComponent } from './formulaire-offre-ajout/formulaire-offre-ajout.component';
import { FicheOffreStageComponent } from './fiche-offre-stage/fiche-offre-stage.component';
import { ListeDemandeStagesComponent } from './liste-demande-stages/liste-demande-stages.component';
import { ModifierDemandeStageComponent } from './modifier-demande-stage/modifier-demande-stage.component';
import { FicheDemandeStageComponent } from './fiche-demande-stage/fiche-demande-stage.component';
import { TableauGestionDemandeStageComponent } from './tableau-gestion-demande-stage/tableau-gestion-demande-stage.component';
import { EntreprisesComponent } from './entreprises/entreprises.component';
import { OffreStage, TableauAffichageOffreStageComponent } from './tableau-affichage-offre-stage/tableau-affichage-offre-stage.component';
import { CandidatsComponent } from './candidats/candidats.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { TableaudebordComponent } from './tableaudebord/tableaudebord.component';
import { LoginComponent } from './login/login.component';
import { FormulaireStageComponent } from './formulaire-stage/formulaire-stage.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormulaireAjoutEntrepriseComponent } from './formulaire-ajout-entreprise/formulaire-ajout-entreprise.component';
import { FicheEntrepriseComponent } from './fiche-entreprise/fiche-entreprise.component';
import { AjoutCandidatComponent } from './ajout-candidat/ajout-candidat.component';
import { CandidatDetailsComponent } from './candidat-details/candidat-details.component';


const routes: Routes = [

    {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'sidenav',
    component: SidenavComponent,
    children: [
      {
        path: 'tableaudebord',
        component: TableaudebordComponent,
      },
      {
        path: 'demandesdestage',
        component: TableauGestionDemandeStageComponent
      },
      {
        path: 'offredestage',
        component: TableauAffichageOffreStageComponent
      },
      {
        path: 'candidats',
        component: CandidatsComponent
      },
      {
        path: 'entreprises',
        component: EntreprisesComponent
      },
      {
        path: 'formulairestage',
        component: FormulaireStageComponent
      },
      {
        path: 'ajout-candidat',
        component: AjoutCandidatComponent
      },
      {
        path: 'ajout-entreprise',
        component: FormulaireAjoutEntrepriseComponent
      },
      {
        path: 'fiche-entreprise',
        component: FicheEntrepriseComponent
      },
      {
        path: 'modifier-demandestage',
        component: ModifierDemandeStageComponent
      },
      {
        path: 'fiche-demandestage/:_id',
        component: FicheDemandeStageComponent
      },
      {
        path: 'candidat-details',
        component: CandidatDetailsComponent
      },
      {
        path: 'fiche-offre-stage',
        component: FicheOffreStageComponent
      },
      {
        path: 'formulaire-ajout-stage',
        component: FormulaireOffreAjoutComponent
      },
    ]
  },
  {
    path: '**',
    redirectTo: '/login'
  }
];

@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }

// app-component <= root
// login/signup <= login
// / <= main-app-component <= sidenav component <= routing-module
