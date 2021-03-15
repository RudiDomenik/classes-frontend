import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import {Router} from '@angular/router';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-create-classes',
  templateUrl: './create-classes.component.html',
  styleUrls: ['./create-classes.component.css']
})
export class CreateClassesComponent implements OnInit {
    classData = {
        name: '',
        description: '',
        teacherSelectedId: 0,
        studentSelectedId: 0,
    };
    teachers: any = [];
    students: any = [];
    studentControl = new FormControl();

  public className: string;

  constructor(
      private dataService: DataService,
      private router: Router
  ) {
    this.className = '';
  }

  ngOnInit(): void {
      this.getTeachers();
      this.getStudents();
  }

  getTeachers() {
    this.dataService.getTeachers()
        .subscribe(response => this.teachers = response);
  }

  getStudents() {
      this.dataService.getStudents()
          .subscribe(response => this.students = response);
  }

  addItem(): void {
      this.dataService.addItem(this.classData)
          .subscribe((response) => {
              if (response === 1) {
                  window.alert('Your class has been added to the cart!');
                  this.router.navigateByUrl('/classes-list');
              } else {
                  window.alert('Could not save class, please try again!');
              }
          });
  }

}
