import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';
import {NgxPaginationModule} from 'ngx-pagination'; 
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AppComponent } from './app.component';
import { HeaderComponent } from './includes/header/header.component';
import { FooterComponent } from './includes/footer/footer.component';
import { MainService } from './services/main.service';
import { HomeComponent } from './components/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    routing,
    HttpModule,
    BrowserAnimationsModule,
    MatButtonModule,
	MatCheckboxModule,
    MatCardModule,
    MatToolbarModule,
	NgxPaginationModule,

  ],
  providers: [MainService],
  bootstrap: [AppComponent]
})
export class AppModule { }
