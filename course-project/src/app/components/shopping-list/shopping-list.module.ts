import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LoggingService } from 'src/app/logging.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';
import { ShoppingListRoutingModule } from './shopping-list-routing.module';
import { ShoppingListComponent } from './shopping-list.component';

@NgModule({
	declarations: [ShoppingEditComponent, ShoppingListComponent],
	providers: [LoggingService],
	imports: [RouterModule, FormsModule, ShoppingListRoutingModule, SharedModule],
})
export class ShoppingListModule {}
