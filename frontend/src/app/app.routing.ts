import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchComponent } from './search/search.component';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { CountryComponent } from './country/countryinfo.component';
import { InfoComponent } from './main/info.component';
import { ChartComponent } from './chart/chart.component';


const routes: Routes = [
    {
        component: MainComponent,
        path: "",
        children: [
            {
                path: ':country',
                component: CountryComponent
            }, {
                path: "",
                component: InfoComponent
            }, {
                path: "charts/piechart",
                component: ChartComponent
            }
        ]
    }


]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [SearchComponent, MainComponent, CountryComponent,InfoComponent,ChartComponent];