// add.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  // Define properties for the form fields
  newUserData: any = {
    name: '',
    phone: '',
    address: ''
  };

  constructor(private router: Router) {}

  // Function to handle form submission
  onSubmit(): void {
    // Perform data validation if needed

    // Send POST request to add new user
    axios.post('http://localhost:8080/users', this.newUserData)
      .then((response) => {
        console.log(response);
        // Navigate back to the main page after successful addition
        this.router.navigate(['/main']);
      })
      .catch((error) => {
        console.error('Error adding user:', error);
      });
  }
}
