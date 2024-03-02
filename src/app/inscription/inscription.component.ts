import { Component } from '@angular/core';

@Component({
  selector: 'inscription',
  templateUrl: './inscription.component.html',
  styleUrl: './inscription.component.css'
})
export class InscriptionComponent {


  submit(login:any){ 
    console.log("Form submitted",login); 
    } 

}
