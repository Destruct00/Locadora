import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MegaMenuModule} from 'primeng/megamenu';
import { MenuComponent } from './components/menu/menu.component';
import { AtorFormComponent } from './pages/ator/form/ator-form/ator-form.component';
import {DialogModule} from 'primeng/dialog';
import { AtorListComponent } from './pages/ator/list/ator-list/ator-list.component';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import {CardModule} from 'primeng/card';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AtorFormService } from './pages/ator/services/ator-form.service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AtorFormComponent,
    AtorListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MegaMenuModule,
    DialogModule,
    ButtonModule,
    TableModule,
    CardModule,
    RouterModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [AtorFormService],
  bootstrap: [AppComponent]
})
export class AppModule { }
