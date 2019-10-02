import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'x-clicker',
	templateUrl: './clicker.component.html',
	styleUrls: ['./clicker.component.scss']
})

export class ClickerComponent implements OnInit {
	@Input() isInitButton?: boolean;
	@Input() icon: string;

	constructor() { }

	ngOnInit() {
	}

	public getHref() {
		return 'src/assets/svg/' + this.icon + '.svg';
	}
}

