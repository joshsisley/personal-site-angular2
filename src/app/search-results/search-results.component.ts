import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'search-results',
	templateUrl: './search-results.component.html'
})
export class SearchResultsComponent implements OnInit {
	selectedTab: string;
	selectedImageObj: any;
	showMoreImages: boolean = false;

	imagesArray = [
		{
			src: './assets/images/ha.jpg',
			description: 'Hawaiian Airlines Booking Widget',
			image: 0
		},
		{
			src: './assets/images/grovado.jpg',
			description: 'Grovado Health Visit Page',
			image: 1
		},
		{
			src: './assets/images/resourcecenter.jpg',
			description: 'Resource Center - Internal Resources',
			image: 2
		},
		{
			src: './assets/images/evenodds.jpg',
			description: 'Even Odds Home Page',
			image: 3
		},
		{
			src: './assets/images/btxr.jpg',
			description: 'BTXR Home Page',
			image: 4
		}
	]

	ngOnInit() {
		this.selectedTab = "experience";
		this.selectedImageObj = this.imagesArray[0];
	}

	showMorePictures() {
		this.showMoreImages = true;
	}

	nextImage() {
		if (this.selectedImageObj.image < 4) {
			this.selectedImageObj = this.imagesArray[this.selectedImageObj.image + 1];
		} else {
			this.selectedImageObj = this.imagesArray[0];
		}
	}

	prevImage() {
		if (this.selectedImageObj.image > 0) {
			this.selectedImageObj = this.imagesArray[this.selectedImageObj.image - 1];
		} else {
			this.selectedImageObj = this.imagesArray[4];
		}
	}

	closeImagesModal() {
		this.showMoreImages = false;
	}
}