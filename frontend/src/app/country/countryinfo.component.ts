import { Component, OnInit, ElementRef, ViewChild, Inject, AfterViewInit } from '@angular/core';
import { CountryInfoService} from './countryinfo.service';

@Component({
  selector: 'countryinfo',
  templateUrl: './countryinfo.component.html',
  styleUrls: ['/countryinfo.component.css'],
  providers: [CountryInfoService]

})
export class CountryComponent {
  country: any;
  aspects: any;
  iso: String;
  constructor(private countryInfoService:CountryInfoService) { }
    ngAfterViewInit(){
      this.countryInfoService.getCountryInfo().subscribe(
        (data)=>{
          this.country=data;
          this.aspects=data.aspects;
         
        }
      )
    } 
}

