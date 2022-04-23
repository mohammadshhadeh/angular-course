import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthResponseData, AuthService } from './auth.service';

@Component({
	selector: 'app-auth',
	templateUrl: './auth.component.html',
	styleUrls: ['./auth.component.css'],
})
export class AuthComponent {
	isLoginMode: boolean = true;
	isLoading: boolean = false;
	error: string = '';

	constructor(private authService: AuthService, private router: Router) {}

	onSwitchMode() {
		this.isLoginMode = !this.isLoginMode;
	}

	onSubmit(form: NgForm) {
		if (!form.valid) return;
		const { email, password } = form.value;

		let authObs: Observable<AuthResponseData>;

		this.isLoading = true;
		if (this.isLoginMode) {
			authObs = this.authService.login(email, password);
		} else {
			authObs = this.authService.signUp(email, password);
		}

		authObs.subscribe({
			next: (resData) => {
				console.log('resData: ', resData);
				this.isLoading = false;
				this.error = '';
				this.router.navigate(['/recipes']);
			},
			error: (errorMessage) => {
				console.log(errorMessage);
				this.error = errorMessage;
				this.isLoading = false;
			},
		});

		form.reset();
	}
}
