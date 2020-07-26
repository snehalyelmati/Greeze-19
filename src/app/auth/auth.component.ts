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
  isAuthenticated = false;

  constructor(private router: Router, private authService: AuthService) {
  }

  ngOnInit(): void {
    this.authService.user.subscribe(user => {
      this.isAuthenticated = !!user;
      // console.log(this.authService.user + ' ' + !!user);
      // console.log(localStorage.getItem('user'));
      if (this.isAuthenticated) {
        // console.log('From onInit');
        this.router.navigate(['home']);
      }
    });

  }

  switchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  signInWithGoogle() {
    this.authService.GoogleAuth();
    console.log('Logged in with google...');
  }

  signInWithFacebook() {
    // firebase code to signin with google
    this.authService.FacebookAuth();
    console.log('Logged in with facebook...');
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

    this.router.navigate(['home']);
  }
}
