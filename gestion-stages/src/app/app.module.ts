import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//ajout module
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

import {MatTableModule} from '@angular/material/table';
import { HeaderComponent } from './header/header.component';
import { AjoutCandidatComponent } from './ajout-candidat/ajout-candidat.component';
import { CandidatsComponent } from './candidats/candidats.component';
import { ModalCandidatComponent } from './modal-candidat/modal-candidat.component';

import { SidenavComponent } from './sidenav/sidenav.component';

//menu sidenav
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDividerModule} from '@angular/material/divider';


import { ReactiveFormsModule } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';


import { LoginComponent } from './login/login.component';
import { TableauAffichageDemandeStageComponent } from './tableau-affichage-demande-stage/tableau-affichage-demande-stage.component';

import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { DetailsStagesRequestComponent } from './details-stages-request/details-stages-request.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AjoutCandidatComponent,
    CandidatsComponent,
    ModalCandidatComponent,
    LoginComponent,
    TableauAffichageDemandeStageComponent,
    ConfirmationDialogComponent,
    DetailsStagesRequestComponent,
    SidenavComponent
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
    MatDividerModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
