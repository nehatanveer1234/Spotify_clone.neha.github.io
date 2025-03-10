import { Component,OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

public isSearchFieldVisible:boolean =false;
public usernameFormControl=new FormControl(null,[Validators.required,Validators.email]);
public passwordFormControl=new FormControl(null,[Validators.minLength(4)]);

public userForm: any=FormGroup;
constructor(){}

ngOnInit():void{
  this.userForm=new FormGroup({
    username:this.usernameFormControl,
    password:this.passwordFormControl,
  });
}
Submit(){
 console.log (this.userForm.value);

}
}
