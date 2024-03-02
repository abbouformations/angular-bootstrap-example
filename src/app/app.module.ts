import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TextcomponentComponent } from './textcomponent/textcomponent.component';
import { ImagecomponentComponent } from './imagecomponent/imagecomponent.component';
import { EmployeeComponent } from './employee/employee.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { FormsModule } from '@angular/forms';
import { EInfoComponent } from './e-info/e-info.component';
import { NavbarComponent } from './template/navbar/navbar.component';
import { CallactionComponent } from './template/callaction/callaction.component';
import { ArticlesComponent } from './template/articles/articles.component';
import { ThefooterComponent } from './template/thefooter/thefooter.component';
import { ContentComponent } from './template/content/content.component';

@NgModule({
  declarations: [
    AppComponent,
    TextcomponentComponent,
    ImagecomponentComponent,
    EmployeeComponent,
    InscriptionComponent,
    EInfoComponent,
    NavbarComponent,
    ContentComponent,
    CallactionComponent,
    ArticlesComponent,
    ThefooterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
