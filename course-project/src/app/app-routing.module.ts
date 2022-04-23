import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './components/auth/auth.component';
import { AuthGuard } from './components/auth/auth.guard';
import { RecipeDetailsComponent } from './components/recipes/recipe-details/recipe-details.component';
import { RecipeEditComponent } from './components/recipes/recipe-edit/recipe-edit.component';
import { RecipeStartComponent } from './components/recipes/recipe-start/recipe-start.component';
import { RecipeResolverService } from './components/recipes/recipes-resolvers.service';
import { RecipesComponent } from './components/recipes/recipes.component';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';

const routes: Routes = [
	{ path: '', redirectTo: '/recipes', pathMatch: 'full' },
	{
		path: 'recipes',
		component: RecipesComponent,
		canActivate: [AuthGuard],
		children: [
			{
				path: '',
				component: RecipeStartComponent,
			},
			{
				path: 'new',
				component: RecipeEditComponent,
			},
			{
				path: ':id',
				component: RecipeDetailsComponent,
				resolve: [RecipeResolverService],
			},
			{
				path: ':id/edit',
				component: RecipeEditComponent,
			},
		],
	},
	{ path: 'shopping-list', component: ShoppingListComponent },
	{ path: 'auth', component: AuthComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
