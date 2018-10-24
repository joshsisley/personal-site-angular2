import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { SearchResultsComponent } from './search-results/search-results.component';

const routes: Routes = [
	{
		path: '',
		component: HomeComponent
	},
	{
		path: 'search-results',
		component: SearchResultsComponent
	},
	{
		path: '**',
		redirectTo: '/search-results'
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})

export class AppRoutingModule { }