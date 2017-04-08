import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CountryInfoService {
    constructor(private http:Http){ }
    getCountryInfo(){
            return this.http.get('src/app/country/countryinfo.json').map(
            (res) => res.json()
            );
    }

}