import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class BseService {

  constructor(private _http:HttpClient) { }

  getData() { 
    return this._http.get('assets/db.json');
}

}
