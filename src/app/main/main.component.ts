import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  data: any[] = []; 

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.loadData();
  }


  addItem(){
    this.router.navigate(['add'])
  }
  loadData(){
    axios.get('http://localhost:8080/users')
      .then((response) => {
        this.data = response.data;
        console.log(response)
      })
      .catch((error) => {
        console.error('Error loading data:', error);
      }); 
  }

  deleteItem(id: number): void {
    axios.delete(`http://localhost:8080/users/delete/${id}`)
      .then((response) => {
        console.log(response);
        this.loadData();
      })
      .catch((error) => {
        console.error('Error deleting item:', error);
      });
  }

  editItem(id: number): void {
    this.router.navigate(['/edit', id]);
  }
}
