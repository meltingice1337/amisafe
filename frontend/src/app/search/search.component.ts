import { Component, AfterViewInit, OnInit } from '@angular/core';
import { CompleterService, CompleterData } from 'ng2-completer';
import { Router, Route, ActivatedRoute } from '@angular/router';
import { SearchService } from './search.service';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [SearchService]

})
export class SearchComponent implements OnInit {

  iso: String;
  private items: any;
  innerHeight: any;

  public searchStr: string;
  public dataService: CompleterData;
  public searchData = [];

  constructor(
    private completerService: CompleterService,
    private searchService: SearchService,
    private router: Router,
    private route: ActivatedRoute) {
    this.dataService = completerService.local(this.searchData);
  }

  ngOnInit() {
    this.iso = 'default';

    this.searchService.getCountry().subscribe(
      (data) => {
        this.items = data;
        for (let i = 0; i < data.length; i++) {
          this.searchData.push(data[i].name);
        }
        this.checkRoute();
        // console.log(this.searchData);
      },
      (error) => {
        this.iso = 'default';
        this.router.navigate(['/']);
      }
    );
    this.innerHeight = (window.screen.height);
    // console.log(innerHeight);
  }

  public handleSelect(selectedItem: any) {
    if (!selectedItem) {
      return;
    }

    const item = this.items.find((val, i, obj) => val.name.toLowerCase() === selectedItem.title.toLowerCase());
    if (!item) {
      return;
    }

    this.iso = item.iso.toLowerCase();
    // console.log(this.iso);
    if (selectedItem.title.length > 0) {
      this.router.navigate([selectedItem.title.toLowerCase()]);
    }

  }

  private checkRoute(): void {
    const country = this.router.routerState.snapshot.url.split('/');
    if (country.length === 2 && country[1].trim() !== '') {
      this.handleSelect({ title: decodeURI(country[1]) });
    }
  }

}
