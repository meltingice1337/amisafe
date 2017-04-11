import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CountryInfoService {
    constructor(private http: Http) { }
    getCountryInfo(country) {
        return this.http.get('http://ncsf.ro/api/v1/aspects/' + country.toLowerCase())
            .map((res) => res.json());
    }
    requestGraphData(type) {
        return this.http.get('http://ncsf.ro/api/v1/aspect/' + type)
            .map((res) => res.json());
    }
    sendCountryUrl(countryurl) {
        // console.log(countryurl);
    }

}