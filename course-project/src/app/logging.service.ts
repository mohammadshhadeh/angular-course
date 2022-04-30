import { Injectable } from '@angular/core';

@Injectable()
export class LoggingService {
	lastLog: string = '';

	printLog(message: string) {
		console.log(message);
		console.log(this.lastLog);
		this.lastLog = message;
	}
}
