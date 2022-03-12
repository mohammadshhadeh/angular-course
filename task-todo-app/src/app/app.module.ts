import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { EnterTodoComponent } from './components/enter-todo/enter-todo.component';
import { TodoDetailsComponent } from './components/todo-details/todo-details.component';
import { TodoHeaderComponent } from './components/todo-header/todo-header.component';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { TodoComponent } from './components/todo.component';
import { CustomPipePipe } from './custom-pipe/custom-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    EnterTodoComponent,
    TodoDetailsComponent,
    TodoHeaderComponent,
    TodoComponent,
    CustomPipePipe,
  ],
  imports: [
    BrowserModule,
    MatSliderModule,
    MatIconModule,
    MatCheckboxModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
