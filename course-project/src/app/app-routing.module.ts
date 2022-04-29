import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{ path: '', redirectTo: '/recipes', pathMatch: 'full' },
	{
		path: 'recipes',
		loadChildren: () =>
			import('./components/recipes/recipes.module').then(
				(x) => x.RecipesModule
			),
	},
	{
		path: 'auth',
		loadChildren: () =>
			import('./components/auth/auth.module').then((x) => x.AuthModule),
	},
	{
		path: 'shopping-list',
		loadChildren: () =>
			import('./components/shopping-list/shopping-list.module').then(
				(x) => x.ShoppingListModule
			),
	},
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
	],
	exports: [RouterModule],
})
export class AppRoutingModule {}
