import { Injectable } from '@angular/core';
import { HttpInterceptor } from '../http-interceptor';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class CountryInfoService {

    constructor(private http: HttpInterceptor) { }

    getCountryInfo(country): Observable<any> {
        return this.http.get('/api/v1/aspects/' + country.toLowerCase())
            .map((res) => res.json())
            .catch((error: Response | any) => Observable.throw(error));
    }

    requestGraphData(type): Observable<any> {
        return this.http.get('/v1/aspect/' + type)
            .map((res) => res.json())
            .catch((error: Response | any) => Observable.throw(error));
    }
}
