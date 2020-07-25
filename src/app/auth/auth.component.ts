import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from './auth.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  isLoginMode = true;
  isLoading = false;

  constructor(private router: Router, private authService: AuthService) {
  }

  ngOnInit(): void {
  }

  switchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  signInWithGoogle() {
    console.log('Logged in with google...');
    this.authService.GoogleAuth();
  }

  signInWithFacebook() {
    // firebase code to signin with google
    console.log('Logged in with facebook...');
    this.router.navigate(['/']);
  }

  onSubmit(f: NgForm) {
    if (!f.valid) {
      return;
    }
    const email = f.value.email;
    const password = f.value.password;

    if (this.isLoginMode) {
      this.authService.onSignIn(email, password);
    } else {
      this.authService.onSignUp(email, password);
    }
    f.reset();

    this.router.navigate(['/']);
  }
}
