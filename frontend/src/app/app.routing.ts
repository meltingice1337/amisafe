import {NgModule} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';

import {SearchComponent} from './search/search.component';

 const routes: Routes =[
     {
         path:'',
         redirectTo:'home',
         pathMatch:'full'
     },
     {
         path:'home', 
         component: SearchComponent
     }

 ]
 
 @NgModule({
     imports: [RouterModule.forRoot(routes)],
     exports: [RouterModule]
 })
 export class AppRoutingModule{}
 
 export const routingComponents = [SearchComponent];