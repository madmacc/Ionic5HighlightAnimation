import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  students = [];
  studentsDiv = [];

  constructor() { }

  ngOnInit() {
  }

  onAddIonItem() {
    this.students.push({ name: 'Example Item', isNew: true });
  }

  onAddDiv() {
    this.studentsDiv.push({ name: 'Example Div', isNew: true });
  }

  onReset() {
    this.students = [];
    this.studentsDiv = [];
  } 

}
