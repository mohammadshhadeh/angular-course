import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { RecipesModule } from './components/recipes/recipes.module';
import { ShoppingListModule } from './components/shopping-list/shopping-list.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core.module';
import { AuthModule } from './components/auth/auth.module';

@NgModule({
	declarations: [AppComponent, HeaderComponent],
	imports: [
		AppRoutingModule,
		BrowserModule,
		CoreModule,
		HttpClientModule,
		RecipesModule,
		SharedModule,
		ShoppingListModule,
		AuthModule,
	],
	bootstrap: [AppComponent],
	// old version of ng
	// entryComponents: [
	// 	AlertComponent,
	// ]
})
export class AppModule {}
