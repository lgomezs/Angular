import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare function initPlugin();

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public _router:Router) { }

  ngOnInit() {
    initPlugin();
  }

  ingresar(){
      this._router.navigate(['/dashboard']);
  }

}
