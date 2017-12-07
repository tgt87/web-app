import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login.component';
import { ListingComponent } from './listing.component';
import { DataService }  from '../services/data.service';
import { HttpModule } from '@angular/http';
import { BootstrapModalModule } from 'ng2-bootstrap-modal';
import { ErrorMsgComponent } from './error-msg.component';

const appRoutes: Routes = [
  { path: '', component: LoginComponent, pathMatch: 'full'},
  { path: 'listings', component: ListingComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    ListingComponent,
    LoginComponent,
    ErrorMsgComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BootstrapModalModule,
    BootstrapModalModule.forRoot({container:document.body}),
    RouterModule.forRoot(appRoutes)
  ],
  entryComponents: [
    ErrorMsgComponent
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
