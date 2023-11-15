// edit.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  userData: any = {
    id: '',
    name: '',
    phone: '',
    address: ''
  };

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.loadUserData();
  }

  loadUserData(): void {
    const userId = this.route.snapshot.params['id'];

    axios.get(`http://localhost:8080/users/${userId}`)
      .then((response) => {
        this.userData = response.data;
      })
      .catch((error) => {
        console.error('Error loading user data:', error);
      });
  }

  onSubmit(): void {
    axios.put(`http://localhost:8080/users/update/${this.userData.id}`, this.userData)
      .then((response) => {
        console.log(response);
        this.router.navigate(['/main']);
      })
      .catch((error) => {
        console.error('Error updating user:', error);
      });
  }
}
