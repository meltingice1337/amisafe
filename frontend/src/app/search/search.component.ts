import { Component, AfterViewInit, OnInit } from '@angular/core';
import { CompleterService, CompleterData } from 'ng2-completer';
import { Router, Route, ActivatedRoute } from '@angular/router';
import { SearchService } from './search.service';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],

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
    this.searchService.getCountries().subscribe(
      (data) => {
        this.items = data;
        for (let i = 0; i < data.length; i++) {
          this.searchData.push(data[i].name);
        }
        // console.log(this.searchData);
      },
      (error) => {
        this.searchService.flagChange.next('default');
        this.router.navigate(['/']);
      }
    );

    this.searchService.flagChange
      .subscribe((iso) => this.iso = iso);

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

    this.searchService.flagChange.next(item.iso.toLowerCase());
    // console.log(this.iso);
    if (selectedItem.title.length > 0) {
      this.router.navigate([this.iso]);
    }

  }
}
