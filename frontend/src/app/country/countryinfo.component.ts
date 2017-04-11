import { Component, OnInit, ElementRef, ViewChild, Inject, OnDestroy } from '@angular/core';
import { CountryInfoService } from './countryinfo.service';
import { ActivatedRoute, Router } from '@angular/router';

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
    private route: ActivatedRoute,
    private router: Router) { }

  public ngOnInit() {
    const countryurl = this.route.snapshot.params['country'];
    console.log(countryurl);
    this.sub = this.route.params.subscribe(params => {
      const country = params['country'];
      if (country !== 'chart') {
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
      }
    });
    this.countryInfoService.sendCountryUrl(countryurl);
  }
  public ngOnDestroy() {
    this.sub.unsubscribe();
  }
  public requestGraph(aspect_type) {
    this.router.navigate(['charts/' + aspect_type.toLowerCase()]);
  }
}

