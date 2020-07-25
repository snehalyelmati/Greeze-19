import {Injectable, NgZone} from '@angular/core';
import {User} from '../shared/services/user.model';
import {AngularFireAuth} from '@angular/fire/auth';
import {Router} from '@angular/router';
import {auth} from 'firebase/app';
import {BehaviorSubject} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData: User;
  user = new BehaviorSubject<User>(null);

  constructor(public afAuth: AngularFireAuth, public router: Router, public ngZone: NgZone) {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.userData = user;
        this.user.next(user);
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user'));
      } else {
        localStorage.setItem('user', null);
        JSON.parse(localStorage.getItem('user'));
      }
    });
  }

  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return user !== null;
  }

  onSignIn(email: string, password: string) {
    return this.afAuth.signInWithEmailAndPassword(email, password).then(result => {
      this.ngZone.run(() => {
        this.router.navigate(['/']);
      });
      console.log('Sign in successful!');
      this.user.next(result.user);
      // send data to greeze api
    });
  }

  onSignUp(email: string, password: string) {
    return this.afAuth.createUserWithEmailAndPassword(email, password).then(result => {
      this.ngZone.run(() => {
        this.router.navigate(['/']);
      });
      console.log('Sign up successful!');
      this.user.next(result.user);
      // send data to greeze api
    });
  }

  GoogleAuth() {
    return this.AuthLogin(new auth.GoogleAuthProvider());
  }

  // Auth logic to run auth providers
  AuthLogin(provider) {
    return this.afAuth.signInWithPopup(provider)
      .then((result) => {
        this.ngZone.run(() => {
          this.router.navigate(['/']);
        });
        this.user.next(result.user);
        auth().currentUser.getIdToken(true).then(res => {
          console.log('ID token: ' + res);
        });
      }).catch((error) => {
        window.alert(error);
      });
  }

  logout() {
    return this.afAuth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['auth']);
      this.user.next(null);
    });
  }
}
