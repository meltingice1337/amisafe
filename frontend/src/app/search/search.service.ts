import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SearchService {
    constructor(private http: Http) { }
    getCountry() {
        return this.http.get('http://138.201.118.243/api/v1/countries').map(
            (res) => res.json()
        );
    }

}