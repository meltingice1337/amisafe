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
    constructor(
        private route: ActivatedRoute,
        private countryInfoService: CountryInfoService
    ) { }

    public ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            let aspect_type = params['aspect_type'];
            this.countryInfoService.requestGraphData(aspect_type).subscribe(
                (data) => {
                    console.log(data);
                    let barCharD = [];
                    this.details=data;
                    console.log(data);
                    for (var i = 0; i < data.data.length; i++) {
                        // console.log(data.data[i].country);
                        // console.log(data.data[i].features[0].value);
                        barCharD.push({
                            data: [data.data[i].features[0].value],
                            label: data.data[i].country
                        })
                    }
                    this.barChartData = barCharD;
                }
            );
        });

    }

    public barChartOptions: any = {
        scaleShowVerticalLines: false,
        responsive: true
    };
    public barChartLabels: string[] = [''];
    public barChartType: string = 'bar';
    public barChartLegend: boolean = false;

    public barChartData: any[] = [];

    // events
    public chartClicked(e: any): void {
        console.log(e);

    }

    public chartHovered(e: any): void {
        console.log(e);
    }
}