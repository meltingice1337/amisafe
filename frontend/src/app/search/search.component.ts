import { Component, AfterViewInit } from '@angular/core';
import { CompleterService, CompleterData } from 'ng2-completer';
import { Router,Route,ActivatedRoute } from '@angular/router';
import { SearchService } from './search.service';
import $ from "jquery";

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['/search.component.css'],
  providers: [SearchService]

})
export class SearchComponent {

  iso: String;
  private items: any;
  innerHeight:any;

  protected searchStr: string;
  protected dataService: CompleterData;
  protected searchData = [];

  constructor(
    private completerService: CompleterService,
    private searchService: SearchService,
    private router:Router,
    private route:ActivatedRoute) {
    this.dataService = completerService.local(this.searchData);
  }

  ngOnInit() {
    
    this.searchService.getCountry().subscribe(
      (data) => {
        this.items = data;
        for (var i = 0; i < data.length; i++) {
          this.searchData.push(data[i].name)
        }
        //console.log(this.searchData);
      }
    )
    this.innerHeight = (window.screen.height);
    //console.log(innerHeight);
  }

  public handleSelect(selectedItem: any) {
    if (!selectedItem)
      return;
    this.iso = this.items.find((val, i, obj) => val.name == selectedItem.title).iso.toLowerCase();
    this.iso = "../../assets/images/flags/" + this.iso + ".png";
    //console.log(this.iso);
    if (selectedItem.title.length > 0)
      this.router.navigate([selectedItem.title.toLowerCase()])

  }

}
