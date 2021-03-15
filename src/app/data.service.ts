import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  items: any;

  private _url: string = "http://localhost:8000/api";
  constructor(private _http: HttpClient) {
    this.items = [];
  }

  addItem(classData: any) {
    return this._http.post(this._url + '/class/add', classData);

  }

    getItems() {
        return this._http.get(this._url + '/class/list');
    }

    getTeachers() {
      return this._http.get(this._url + '/teacher/list');
    }

    getStudents() {
      return this._http.get(this._url + '/student/list');
    }

}
