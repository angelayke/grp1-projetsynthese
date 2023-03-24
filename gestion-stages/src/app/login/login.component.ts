import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  isLoggedIn: boolean = false;
  showLogin = true;
  constructor(private fb: FormBuilder, private router: Router) { }


  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],


    });
  }

  // onSubmit(): void {
  //   if (this.loginForm.valid){
  //     const username = this.loginForm.get('username')?.value;
  //     const email = this.loginForm.get('email')?.value

  //   }
  // }

  onSubmit(): void {
    if (this.loginForm.invalid){
      alert("Veuillez remplir les champs SVP!")

    }
    else if (this.loginForm.valid){
      this.isLoggedIn = true;
      // this.router.navigate(["/tableau-affichage-demande-stage"])
      this.router.navigate(['/sidenav']);
      this.showLogin = false; // cacher le formulaire de connexion


    }
  }



}
