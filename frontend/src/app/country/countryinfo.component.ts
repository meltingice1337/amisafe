import { Component, OnInit, ElementRef, ViewChild, Inject, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { SearchService } from '../search/search.service';
import { CountryInfoService } from './countryinfo.service';

@Component({
  selector: 'countryinfo',
  templateUrl: './countryinfo.component.html',
  styleUrls: ['./countryinfo.component.css'],
  providers: [CountryInfoService]

})
export class CountryComponent implements OnInit, OnDestroy {

  country: any;
  aspects: any;
  iso: String;
  private sub: any;
  aspect_type;

  constructor(
    private countryInfoService: CountryInfoService,
    private searchService: SearchService,
    private route: ActivatedRoute,
    private router: Router) { }

  public ngOnInit() {
    const countryurl = this.route.snapshot.params['country'];
    this.sub = this.route.params.subscribe(params => {
      console.log('yas2');
      let country = params['country'];
      if (!country) {
        country = 'default';
      }
      this.searchService.flagChange.next(country);
      this.countryInfoService.getCountryInfo(country).subscribe(
        (data) => {
          console.log(data);
          this.country = data;
          this.aspects = data.aspects;
        },
        (error) => {
          this.router.navigate(['/']);
        }
      );
    });
  }
  public ngOnDestroy() {
    this.sub.unsubscribe();
  }
  public requestGraph(aspect_type) {
    this.router.navigate(['charts/' + aspect_type.toLowerCase()]);
  }
}

