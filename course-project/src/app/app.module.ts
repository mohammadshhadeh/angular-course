import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core.module';

@NgModule({
	declarations: [AppComponent, HeaderComponent],
	imports: [
		AppRoutingModule,
		BrowserModule,
		CoreModule,
		HttpClientModule,
		SharedModule,
	],
	bootstrap: [AppComponent],
	// old version of ng
	// entryComponents: [
	// 	AlertComponent,
	// ]
})
export class AppModule {}
