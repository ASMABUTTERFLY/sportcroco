import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  userUrl: string = 'http://localhost:3000/users';


  constructor(private http: HttpClient) { }

  signup(user: any, img:File) {
let fData=new FormData();
fData.append("firstName",user.firstName);
fData.append("lastName",user.lastName);
fData.append("email",user.email);
fData.append("pwd",user.pwd);
fData.append("tel",user.tel);
fData.append("img",img);

    return this.http.post<{ message: any }>(this.userUrl + '/signup', fData);
  }

  login(obj: any) {

    return this.http.post<{ message: string, user: any }>(this.userUrl + '/login', obj)
  }

  editProfile(obj:any){
    return this.http.put<{message:any}>(this.userUrl,obj)
  }


}