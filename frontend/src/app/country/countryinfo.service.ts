import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CountryInfoService {
    constructor(private http: Http) { }
    getCountryInfo(country) {
        return this.http.get('http://192.168.0.100:4567/api/v1/aspects/' + country)
            .map((res) => res.json());
    }
    requestGraphData(type){
        return this.http.get('http://192.168.0.100:4567/api/v1/aspects/' + type)
            .map((res) => res.json());
    }

}