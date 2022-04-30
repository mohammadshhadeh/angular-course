import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, catchError, tap, throwError } from 'rxjs';
import { User } from './user.model';
import { environment } from 'src/environments/environment';
export interface AuthResponseData {
	idToken: string;
	email: string;
	refreshToken: string;
	expiresIn: string;
	localId: string;
	registered?: string;
}

interface ErrorResponseData {
	error: { error: { message: string } };
}

const ERROR_MESSAGES: { [key: string]: string } = {
	EMAIL_EXISTS: 'This email exists already',
	EMAIL_NOT_FOUND: "This email doesn't exist",
	INVALID_PASSWORD: 'This password is not correct',
	UNKNOWN: 'An unknown error occurred!',
};

@Injectable({
	providedIn: 'root',
})
export class AuthService {
	private API_KEY: string = environment.firebaseAPIKey;
	private signUpUrl: string = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${this.API_KEY}`;
	private signInUrl: string = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${this.API_KEY}`;
	user = new BehaviorSubject<User>(null);
	private logoutTimer: any;

	constructor(private http: HttpClient, private router: Router) {}

	private handleError(errRes: ErrorResponseData) {
		const ERROR_KEY = errRes?.error?.error?.message || 'UNKNOWN';
		const errorMessage = ERROR_MESSAGES[ERROR_KEY];

		return throwError(() => errorMessage);
	}

	private handleAuth(
		email: string,
		userId: string,
		token: string,
		expiresIn: string
	) {
		const expirationDate = new Date(new Date().getTime() + +expiresIn * 1000);
		const user = new User(email, userId, token, expirationDate);
		this.user.next(user);
		this.autoLogout(+expiresIn * 1000);
		localStorage.setItem('userData', JSON.stringify(user));
	}

	signUp(email: string, password: string) {
		return this.http
			.post<AuthResponseData>(this.signUpUrl, {
				email,
				password,
				returnSecureToken: true,
			})
			.pipe(
				catchError((errRes) => this.handleError(errRes)),
				tap((resData) => {
					this.handleAuth(
						resData.email,
						resData.localId,
						resData.idToken,
						resData.expiresIn
					);
				})
			);
	}

	login(email: string, password: string) {
		return this.http
			.post<AuthResponseData>(this.signInUrl, {
				email,
				password,
				returnSecureToken: true,
			})
			.pipe(
				catchError((errRes) => this.handleError(errRes)),
				tap((resData) => {
					this.handleAuth(
						resData.email,
						resData.localId,
						resData.idToken,
						resData.expiresIn
					);
				})
			);
	}

	autoLogin() {
		let userData: {
			email: string;
			id: string;
			_token: string;
			_tokenExpirationDate: string;
		} = JSON.parse(localStorage.getItem('userData') || '{}');
		if (!userData) {
			return;
		}

		const loadedUser = new User(
			userData.email,
			userData.id,
			userData._token,
			new Date(userData._tokenExpirationDate)
		);

		if (loadedUser.token) {
			this.user.next(loadedUser);
			const expirationDuration =
				new Date(userData._tokenExpirationDate).getTime() -
				new Date().getTime();
			this.autoLogout(expirationDuration);
		}
	}

	logout() {
		this.user.next(null);
		this.router.navigate(['/auth']);
		localStorage.removeItem('userData');
		if (this.logoutTimer) {
			clearTimeout(this.logoutTimer);
		}

		this.logoutTimer = null;
	}

	autoLogout(expirationDuration: number) {
		this.logoutTimer = setTimeout(() => {
			this.logout();
		}, expirationDuration);
	}
}
