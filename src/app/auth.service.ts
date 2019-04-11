import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

interface User {
  uid:string;
  email:string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user:Observable<User>
  error:any
  constructor(private myAuth:AngularFireAuth, private db:AngularFirestore, private router:Router) {
    //return this.myAuth.user
    this.user = this.myAuth.authState.pipe(switchMap(user=>{
      if(user){
        return this.db.doc<User>(`USERS/${user.uid}`).valueChanges()
      }else{
        return of(null)
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
