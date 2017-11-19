import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
// import { RouterModule } from '@angular/router';
import { Routes, RouterModule } from "@angular/router";
import { AppComponent } from './app.component';
// import { APP_ROUTES_PROVIDER } from './app/app.routes';
import { HomeComponent } from './home/home.component';
import { DirectoryComponent } from './directory/directory.component';
import { FilterPipe } from './filter.pipe';
import {LoggingService} from './logging.service';
import {HttpModule} from '@angular/http'
const appRoutes: Routes = [
  { path: 'directory', component: DirectoryComponent },
  { path: '', component: HomeComponent },

];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DirectoryComponent,
    FilterPipe

  ],
  imports: [
    BrowserModule,FormsModule,HttpModule,RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [LoggingService,HttpModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
