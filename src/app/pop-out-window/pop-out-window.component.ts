import { Component, OnInit } from '@angular/core';
import { NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-pop-out-window',
  templateUrl: './pop-out-window.component.html',
  styleUrls: ['./pop-out-window.component.css']
})
export class PopOutWindowComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal,private db : AngularFirestore) { }

  ngOnInit() {
  }
  dir = "MYORDERS" 

  key : string

  setOrderArrived(){
    console.log(this.key)
    this.db.collection(this.dir).doc(this.key).update({'arrived':true});
    this.activeModal.dismiss()
  }

}
