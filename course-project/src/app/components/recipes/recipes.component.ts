import { Component, OnInit } from '@angular/core';
import { LoggingService } from 'src/app/logging.service';

@Component({
	selector: 'app-recipes',
	templateUrl: './recipes.component.html',
	styleUrls: ['./recipes.component.css'],
})
export class RecipesComponent implements OnInit {
	constructor(private loggingService: LoggingService) {}

	ngOnInit(): void {
		this.loggingService.printLog('Hello from RecipesComponent')
	}
}
