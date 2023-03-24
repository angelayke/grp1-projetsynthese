import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//ajout module
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatSelect } from '@angular/material/select';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { LayoutModule } from '@angular/cdk/layout';
import {MatSortModule} from '@angular/material/sort';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';


// Component
import { TableauAffichageOffreStageComponent } from './tableau-affichage-offre-stage/tableau-affichage-offre-stage.component';
import { HeaderComponent } from './header/header.component';
import { AjoutCandidatComponent } from './ajout-candidat/ajout-candidat.component';
import { CandidatsComponent } from './candidats/candidats.component';
import { ModalCandidatComponent } from './modal-candidat/modal-candidat.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { LoginComponent } from './login/login.component';
import { TableauAffichageDemandeStageComponent } from './tableau-affichage-demande-stage/tableau-affichage-demande-stage.component';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { DetailsStagesRequestComponent } from './details-stages-request/details-stages-request.component';
import { EntreprisesComponent } from './entreprises/entreprises.component';
import { FormulaireStageComponent } from './formulaire-stage/formulaire-stage.component';
import { TableauGestionDemandeStageComponent } from './tableau-gestion-demande-stage/tableau-gestion-demande-stage.component';
import { TableaudebordComponent } from './tableaudebord/tableaudebord.component';
import { FormulaireOffreAjoutComponent } from './formulaire-offre-ajout/formulaire-offre-ajout.component';
import { FormulaireOffreEditionComponent } from './formulaire-offre-edition/formulaire-offre-edition.component';

import { DernieresDemandesStagesComponent } from './dernieres-demandes-stages/dernieres-demandes-stages.component';
import { ModifierDemandeStageComponent } from './modifier-demande-stage/modifier-demande-stage.component';
import { DialogModifierStageComponent } from './dialog-modifier-stage/dialog-modifier-stage.component';
import { FicheDemandeStageComponent } from './fiche-demande-stage/fiche-demande-stage.component';

import { FicheEntrepriseComponent } from './fiche-entreprise/fiche-entreprise.component';
import { FormulaireAjoutEntrepriseComponent } from './formulaire-ajout-entreprise/formulaire-ajout-entreprise.component';
import { FormulaireUpdateEntrepriseComponent } from './formulaire-update-entreprise/formulaire-update-entreprise.component';

//menu sidenav
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDividerModule} from '@angular/material/divider';


@NgModule({
  declarations: [
    AppComponent,
    EntreprisesComponent,
    TableauAffichageOffreStageComponent,
    HeaderComponent,
    AjoutCandidatComponent,
    CandidatsComponent,
    ModalCandidatComponent,
    LoginComponent,
    TableauAffichageDemandeStageComponent,
    ConfirmationDialogComponent,
    DetailsStagesRequestComponent,
    SidenavComponent,
    FicheEntrepriseComponent,
    FormulaireAjoutEntrepriseComponent,
    FormulaireUpdateEntrepriseComponent,
    FormulaireOffreAjoutComponent,
    FormulaireOffreEditionComponent,
    FormulaireStageComponent,
    TableauGestionDemandeStageComponent,
    TableaudebordComponent,
    DernieresDemandesStagesComponent,
    ModifierDemandeStageComponent,
    DialogModifierStageComponent,
    FicheDemandeStageComponent,
   ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatInputModule,
    MatPaginatorModule,
    MatDialogModule,
    MatSidenavModule,
    MatToolbarModule,
    MatDividerModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    LayoutModule,
    MatSortModule,
    MatCheckboxModule,
    MatGridListModule,
    MatListModule
   ],
   
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
