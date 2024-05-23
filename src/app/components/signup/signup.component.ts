import { Component,  OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm!: FormGroup
  path !: string;
  title !: string;
  msg='';
  imagePreview:any;
  constructor( private fBuilder : FormBuilder,
private router: Router, private userService:UsersService
  ) { }
  
//Validators.minLength(6),Validators.maxLength(8),

  ngOnInit(): void {
 
   //if (this.path=='/inscription'){
  //   this.title='signup Client';
  // }else{
  //   this.title='signup Admin';
  // }
  //  }
  //ternary operator
  
  this.path=this.router.url;
  this.title=(this.path=='/inscription')?"signup Client":"signup Admin";  //for choose path
//for validator
 let patternReg : RegExp =/(^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%?&])[A-Za-z\d$@$!%?&]{6,8}$)/
    console.log('here into signup',this.path);
    this.signupForm=this.fBuilder.group({
firstName:['',[Validators.required , Validators.minLength(3)]],
lastName:['',[Validators.required,Validators.minLength(5)]],
email:['',[Validators.required,Validators.email]],
pwd:['',[Validators.required,Validators.pattern(patternReg)]],
// confirmPwd:['',[Validators.required,Validators.minLength(6),Validators.maxLength(10)]],
tel:[''],
img:['']
    })
  }
  signup(){
    let user = this.signupForm.value;
    if (this.path=='/inscription'){
      user.role='client'
        }else{
          user.role='admin' }
          console.log("here user",user)
          this.userService.signup(user,this.signupForm.value.img).subscribe((res)=>{console.log(res.message);
            this.msg=res.message;
          })
            
  }

  onImageSelected(event: Event) {
    // const file = (event.target as HTMLInputElement).files[0];
    const inputElement = event.target as HTMLInputElement;
    if (inputElement && inputElement.files && inputElement.files.length > 0) {
    const file = inputElement.files[0];
    console.log("here image informations ", file)
    this.signupForm.patchValue({ img: file });
    this.signupForm.updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
    this.imagePreview = reader.result as string;
    };
    reader.readAsDataURL(file);
    }
    }
    
}

