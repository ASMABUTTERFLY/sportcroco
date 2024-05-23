import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { jwtDecode } from 'jwt-decode';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
decoded:any ;
profileForm!:FormGroup
  constructor( private formBuilder:FormBuilder ,private userService:UsersService) { }

  ngOnInit(): void {
    let token= sessionStorage.getItem('jwt');
      if (token){
        this.decoded=jwtDecode(token);
        console.log('here decoded token into profile', this.decoded)
      }
      this.profileForm=this.formBuilder.group({
        tel:[""],
        oldPwd:[""],
        newPwd:[""]
      })
    
  }
  editProfile(){
    console.log("here object :",this.profileForm.value)
    this.profileForm.value.userId=this.decoded.id;
  this.userService.editProfile(this.profileForm.value).subscribe((res)=>{
    console.log("here response update profile",res.message);
  });
  }
  // mustMatch():boolean{
  //   return this.profileForm.value.newPwd !=  this.profileForm.value.confPwd
  // }

}
