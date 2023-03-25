import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { SidenavComponent } from './sidenav/sidenav.component';
import { Component } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'gestion-stages';

}
