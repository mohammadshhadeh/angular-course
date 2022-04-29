import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { ShoppingService } from './components/shopping-list/shopping.service';
import { RecipeService } from './components/recipes/recipe.service';
import { AuthComponent } from './components/auth/auth.component';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';
import { AuthInterceptorService } from './components/auth/auth-interceptor.service';
import { AlertComponent } from './shared/alert/alert.component';
import { PlaceholderDirective } from './shared/placeholder/placeholder.directive';
import { RecipesModule } from './components/recipes/recipes.module';
import { ShoppingListModule } from './components/shopping-list/shopping-list.module';

@NgModule({
	declarations: [
		AppComponent,
		AuthComponent,
		DropdownDirective,
		HeaderComponent,
		LoadingSpinnerComponent,
		AlertComponent,
		PlaceholderDirective,
	],
	imports: [
		AppRoutingModule,
		BrowserModule,
		FormsModule,
		HttpClientModule,
		ReactiveFormsModule,
		RecipesModule,
		ShoppingListModule,
	],
	providers: [
		RecipeService,
		ShoppingService,
		{
			provide: HTTP_INTERCEPTORS,
			useClass: AuthInterceptorService,
			multi: true,
		},
	],
	bootstrap: [AppComponent],
	// old version of ng
	// entryComponents: [
	// 	AlertComponent,
	// ]
})
export class AppModule {}
