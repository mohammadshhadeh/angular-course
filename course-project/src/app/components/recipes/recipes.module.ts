import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeItemComponent } from './recipe-list/recipe-item/recipe-item.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipesRoutingModule } from './recipes-routing.module';
import { RecipesComponent } from './recipes.component';

@NgModule({
	declarations: [
		RecipeEditComponent,
		RecipeItemComponent,
		RecipeListComponent,
		RecipesComponent,
		RecipeStartComponent,
		RecipeDetailsComponent,
	],
	imports: [
		RouterModule,
		CommonModule,
		ReactiveFormsModule,
		RecipesRoutingModule,
	],
})
export class RecipesModule {}
