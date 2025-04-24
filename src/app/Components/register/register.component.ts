import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  onSubmit(userName: string, password1: string, password2: string, form: HTMLFormElement) {
    console.log('Clicked the submit button');
    console.log("Entered username"+userName);
    console.log("Entered password"+password1);
    form.reset();
  }

}
