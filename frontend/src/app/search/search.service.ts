import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SearchService {
    constructor(private http:Http){ }
    getCountry(){
            return this.http.get('src/app/search/search.json').map(
            (res) => res.json()
            );
    }

}