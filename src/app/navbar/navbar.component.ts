import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Location } from '@angular/common' 

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public auth:AuthService, private location:Location) { }

  ngOnInit() {
  }

  switchTab(tab){
    this.location.replaceState(`/${tab}`)
  }

}
