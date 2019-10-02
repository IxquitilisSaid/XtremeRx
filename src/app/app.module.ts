import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { InlineSVGModule } from 'ng-inline-svg';
import { AppComponent } from './app.component';
import { ClickerComponent } from './components/interactables/clicker/clicker.component';
import { SpinnerComponent } from './components/interactables/spinner/spinner.component';
import { ChaserComponent } from './components/interactables/chaser/chaser.component';

@NgModule({
	declarations: [
		AppComponent,
		ClickerComponent,
		SpinnerComponent,
		ChaserComponent
	],
	imports: [
		BrowserModule,
		HttpClientModule,
		InlineSVGModule.forRoot()
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
