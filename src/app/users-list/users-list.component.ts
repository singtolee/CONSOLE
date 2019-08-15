import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { UserInfo } from '../tools/UserInfo';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  private dir = "ADDRESSES"

  userInfos: Observable<UserInfo[]>

  constructor(private db:AngularFirestore) { }

  ngOnInit() {
    this.userInfos = this.loadAllUsers()
  }

  loadAllUsers(){
    return this.db.collection(this.dir).snapshotChanges().pipe(map(actions=>{
      return actions.map(a=>{
        const data = a.payload.doc.data() as UserInfo;
        const id = a.payload.doc.id;
        data.uid = id
        return data;
      })
    }))

  }

}
