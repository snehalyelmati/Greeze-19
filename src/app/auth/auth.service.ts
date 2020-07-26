import {Injectable, NgZone} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {Router} from '@angular/router';
import {auth} from 'firebase/app';
import {BehaviorSubject} from 'rxjs';
import {User} from '../user/user.model';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData: any;
  user = new BehaviorSubject<User>(null);
  idToken = new BehaviorSubject<string>(null);

  constructor(public afAuth: AngularFireAuth, public router: Router, public ngZone: NgZone) {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.userData = user;
        this.user.next({
          id: user.uid,
          displayName: user.displayName,
          emailId: user.email,
          photoURL: user.photoURL
        });
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user'));
      } else {
        localStorage.setItem('user', null);
        localStorage.setItem('idToken', null);
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
      this.user.next({
        id: result.user.uid,
        displayName: result.user.displayName,
        emailId: result.user.email,
        photoURL: result.user.photoURL
      });
      // send data to greeze api
      auth().currentUser.getIdToken(true).then(res => {
        // console.log('ID token: ' + res);
        this.idToken.next(res);
        localStorage.setItem('idToken', res);
      });
    }).catch((error) => {
      window.alert(error);
      this.router.navigate(['auth']);
    });
  }

  onSignUp(email: string, password: string) {
    return this.afAuth.createUserWithEmailAndPassword(email, password).then(result => {
      this.ngZone.run(() => {
        this.router.navigate(['/']);
      });
      console.log('Sign up successful!');
      this.user.next({
        id: result.user.uid,
        displayName: result.user.displayName,
        emailId: result.user.email,
        photoURL: result.user.photoURL
      });
      // send data to greeze api
      auth().currentUser.getIdToken(true).then(res => {
        // console.log('ID token: ' + res);
        this.idToken.next(res);
        localStorage.setItem('idToken', res);
      });
    }).catch((error) => {
      window.alert(error);
    });
  }

  GoogleAuth() {
    return this.AuthLogin(new auth.GoogleAuthProvider());
  }

  FacebookAuth() {
    return this.AuthLogin(new auth.FacebookAuthProvider());
  }

  // Auth logic to run auth providers
  AuthLogin(provider) {
    return this.afAuth.signInWithPopup(provider)
      .then((result) => {
        this.ngZone.run(() => {
          this.router.navigate(['/']);
        });
        this.user.next({
          id: result.user.uid,
          displayName: result.user.displayName,
          emailId: result.user.email,
          photoURL: result.user.photoURL
        });
        auth().currentUser.getIdToken(true).then(res => {
          // console.log('ID token:' + res);
          this.idToken.next(res);
          localStorage.setItem('idToken', res);
        });
      }).catch((error) => {
        window.alert(error);
      });
  }

  logout() {
    return this.afAuth.signOut().then(() => {
      localStorage.removeItem('user');
      localStorage.removeItem('idToken');
      this.router.navigate(['auth']);
      this.user.next(null);
    });
  }
}
