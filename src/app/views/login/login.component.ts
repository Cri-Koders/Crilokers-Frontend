import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ ReactiveFormsModule, MatInputModule, MatFormFieldModule, CommonModule, FontAwesomeModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent{

  faGoogle = faGoogle as IconProp
  faFacebook = faFacebook as IconProp
  formularioLogin: FormGroup

  constructor( private form : FormBuilder ) {
    this.formularioLogin = this.form.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  hasErrors( controlName: string, errorType: string ) {
    return this.formularioLogin?.get(controlName)?.hasError(errorType) && this.formularioLogin?.get(controlName)?.touched
  }

  iniciarSesion() {
    if (!this.formularioLogin.valid) {
      return
    }
    console.log(this.formularioLogin);
  }

}
