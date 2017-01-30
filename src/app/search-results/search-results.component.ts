import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'search-results',
  templateUrl: './search-results.component.html'
})
export class SearchResultsComponent implements OnInit { 
	selectedTab:string;
	ngOnInit() {
		this.selectedTab = "experience";
	}
}