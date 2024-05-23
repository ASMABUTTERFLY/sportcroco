import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: any = {}//user howa eli 3malrneh wa9T da5alena login et mode de pass
  signeForm!: FormGroup
  erroMsg = ''
  constructor(private userService: UsersService, private router: Router) { }

  ngOnInit(): void {
  }
  login() {

    console.log("here me", this.user)
    this.userService.login(this.user).subscribe((data) => {
      console.log("here  after login", data);


      if (data.message == 'welcom') {
        sessionStorage.setItem('jwt',data.user);
        let decoded : any = jwtDecode(data.user)
        if ( decoded.role == 'admin') {  //kaned data.user walte  decoded
          this.router.navigate([`admin`]);
        } else {
          this.router.navigate([``]);
        }

      }
      else {
        this.erroMsg = 'Please check your Email/pwd'
      }


    });
  }
}
