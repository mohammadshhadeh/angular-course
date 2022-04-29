import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AuthComponent } from './components/auth/auth.component';
import { RecipesModule } from './components/recipes/recipes.module';
import { ShoppingListModule } from './components/shopping-list/shopping-list.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core.module';

@NgModule({
	declarations: [AppComponent, AuthComponent, HeaderComponent],
	imports: [
		AppRoutingModule,
		BrowserModule,
		FormsModule,
		HttpClientModule,
		ReactiveFormsModule,
		RecipesModule,
		ShoppingListModule,
		SharedModule,
		CoreModule,
	],
	bootstrap: [AppComponent],
	// old version of ng
	// entryComponents: [
	// 	AlertComponent,
	// ]
})
export class AppModule {}
