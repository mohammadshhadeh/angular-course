import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AuthInterceptorService } from './components/auth/auth-interceptor.service';
import { RecipeService } from './components/recipes/recipe.service';
import { ShoppingService } from './components/shopping-list/shopping.service';
import { LoggingService } from './logging.service';

@NgModule({
	providers: [
		RecipeService,
		ShoppingService,
		{
			provide: HTTP_INTERCEPTORS,
			useClass: AuthInterceptorService,
			multi: true,
		},
		// LoggingService,
	],
})
export class CoreModule {}
