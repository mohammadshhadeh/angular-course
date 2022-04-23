import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataStorageService } from 'src/app/shared/data-storage.service';
import { AuthService } from '../auth/auth.service';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, OnDestroy {
	isAuthenticated = false;
	private userSub: Subscription;

	constructor(
		private dataStorageService: DataStorageService,
		private authService: AuthService
	) {}

	ngOnInit(): void {
		this.userSub = this.authService.user.subscribe((user) => {
			this.isAuthenticated = !!user;
		});
	}

	ngOnDestroy(): void {
		this.userSub.unsubscribe();
	}

	onSaveData() {
		this.dataStorageService.storeRecipes();
	}

	onFetchData() {
		this.dataStorageService.fetchRecipes().subscribe();
	}

	onLogout() {
		this.authService.logout();
	}
}
