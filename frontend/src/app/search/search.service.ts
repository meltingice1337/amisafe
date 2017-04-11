import { Injectable } from '@angular/core';
import { HttpInterceptor } from '../http-interceptor';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';

@Injectable()
export class SearchService {

    constructor(private http: HttpInterceptor) { }

    getCountries() {
        return this.http.get('/api/v1/countries').map(
            (res) => res.json()
        ).catch((error: Response | any) => {
            return Observable.throw(error);
        });
    }
}
