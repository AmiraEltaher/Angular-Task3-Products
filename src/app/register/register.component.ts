import { Component } from '@angular/core';
import { UserData } from '../interface/user-data';
import { AuthService } from '../services/auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

    user :UserData ={
      name:'',
      email:'',
      password:'',
    }

    successMessage :string ='';

    constructor(private authService:AuthService){}

    onRegister(){
        if (!this.user.name || !this.user.email || !this.user.password) {
            this.successMessage = 'Please fill in all fields';
        return;
  }

      const result = this.authService.register(this.user);
      if(result){
        this.successMessage = " Registered Successfully";
      }
      else{
        this.successMessage = " Register Failed";

      }
    }
}
