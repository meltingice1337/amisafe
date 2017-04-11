import { Injectable } from '@angular/core';
import { HttpInterceptor } from '../http-interceptor';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Rx';

import 'rxjs/add/operator/map';

@Injectable()
export class SearchService {
    public flagChange: Subject<string> = new Subject();

    constructor(private http: HttpInterceptor) { }

    getCountries() {
        return this.http.get('/api/v1/countries')
            .map((res) => res.json())
            .catch((error: Response | any) => Observable.throw(error));
    }
}
