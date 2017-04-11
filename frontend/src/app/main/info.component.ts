import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search/search.service';

@Component({
  templateUrl: './info.component.html',
})
export class InfoComponent implements OnInit {

  constructor(private searchService: SearchService) { }

  ngOnInit() {
    this.searchService.flagChange.next('default');
  }
}
