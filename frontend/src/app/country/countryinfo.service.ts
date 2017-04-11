import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class CountryInfoService {

    constructor(private http: Http) { }

    getCountryInfo(country): Observable<any> {
        return this.http.get('http://127.0.0.1:4567/api/v1/aspects/' + country.toLowerCase())
            .map((res) => res.json())
            .catch((error: Response | any) => Observable.throw(error));
    }

    requestGraphData(type): Observable<any> {
        return this.http.get('http://127.0.0.1:4567/v1/aspect/' + type)
            .map((res) => res.json())
            .catch((error: Response | any) => Observable.throw(error));
    }
}
