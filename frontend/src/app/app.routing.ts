import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchComponent } from './search/search.component';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { CountryComponent } from './country/countryinfo.component';


const routes: Routes = [
    {
        component: MainComponent,
        path: "",
        children: [
            {  
            path: ':country',
            component: CountryComponent
            }
        ]
    }


]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [SearchComponent,MainComponent,CountryComponent];