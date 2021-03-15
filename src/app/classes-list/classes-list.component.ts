import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-classes-list',
  templateUrl: './classes-list.component.html',
  styleUrls: ['./classes-list.component.css']
})
export class ClassesListComponent implements OnInit {
  items: any = [];

  constructor(
      private dataService: DataService
  ) { }

  ngOnInit(): void {
      this.getItems();
  }

  getItems() {
      this.dataService.getItems()
          .subscribe(response => this.items = response);
  }

}
