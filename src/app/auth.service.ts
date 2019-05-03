import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loggedIn:Observable<boolean>
  error:any
  constructor(private myAuth:AngularFireAuth, private db:AngularFirestore, private router:Router) {
    this.loggedIn = this.myAuth.authState.pipe(switchMap(user=>{
      if(user){
        return of(true)
      }else {
        return of(false)
      }
    }))
  }

  emailLogin(e,p){
    this.myAuth.auth.signInWithEmailAndPassword(e,p).then((credential)=>{
      this.router.navigate(['/orders']);
    }).catch((error)=>{
      this.error=error;
    })
  }

  signOut(){
    this.myAuth.auth.signOut().then(()=>{
      this.router.navigate(['/login']);
    })
  }





}
