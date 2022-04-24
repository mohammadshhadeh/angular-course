import {
	Component,
	ViewContainerRef,
	OnInit,
	ViewChild,
	OnDestroy,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { AuthResponseData, AuthService } from './auth.service';
import { AlertComponent } from '../../shared/alert/alert.component';
import { PlaceholderDirective } from 'src/app/shared/placeholder/placeholder.directive';

@Component({
	selector: 'app-auth',
	templateUrl: './auth.component.html',
	styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnDestroy {
	isLoginMode: boolean = true;
	isLoading: boolean = false;
	error: string = '';
	closeSub: Subscription;
	@ViewChild(PlaceholderDirective, { static: false })
	alertHost: PlaceholderDirective;

	constructor(
		private authService: AuthService,
		private router: Router,
		private viewContainerRef: ViewContainerRef
	) {}

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
				// this.error = errorMessage;
				this.showErrorAlert(errorMessage);
				this.isLoading = false;
			},
		});

		form.reset();
	}

	onHandleError() {
		this.error = '';
	}

	private showErrorAlert(message: string) {
		const hostViewContainerRef = this.alertHost.viewContainerRef;
		hostViewContainerRef.clear();
		const componentRef = hostViewContainerRef.createComponent(AlertComponent);
		componentRef.instance.message = message;
		this.closeSub = componentRef.instance.close.subscribe(() => {
			this.closeSub.unsubscribe();
			hostViewContainerRef.clear();
		});
	}

	ngOnDestroy(): void {
		if (this.closeSub) {
			this.closeSub.unsubscribe();
		}
	}
}
