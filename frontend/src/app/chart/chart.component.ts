import { SearchService } from '../search/search.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountryInfoService } from '../country/countryinfo.service';


@Component({
    templateUrl: './chart.component.html',
    providers: [CountryInfoService]
})
export class ChartComponent implements OnInit {
    sub: any;
    datavalues = [];
    datalabels = [];
    details;

    public barChartOptions: any = {
        scaleShowVerticalLines: false,
        responsive: true
    };
    public barChartLabels: string[] = [''];
    public barChartType = 'bar';
    public barChartLegend = false;

    public barChartData: any[] = [];

    constructor(
        private route: ActivatedRoute,
        private countryInfoService: CountryInfoService,
        private searchService: SearchService
    ) { }

    public ngOnInit() {
        this.searchService.flagChange.next('default');
        this.sub = this.route.params.subscribe(params => {
            const aspect_type = params['aspect_type'];
            this.countryInfoService.requestGraphData(aspect_type).subscribe(
                (data) => {
                    console.log(data);
                    const barCharD = [];
                    this.details = data;
                    console.log(data);
                    for (let i = 0; i < data.data.length; i++) {
                        // console.log(data.data[i].country);
                        // console.log(data.data[i].features[0].value);
                        barCharD.push({
                            data: [data.data[i].features[0].value],
                            label: data.data[i].country
                        });
                    }
                    this.barChartData = barCharD;
                }
            );
        });

    }

    // events
    public chartClicked(e: any): void {
        console.log(e);

    }

    public chartHovered(e: any): void {
        console.log(e);
    }
}
