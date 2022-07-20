import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreDataModule } from '@fem-production-angular/core-data';
import { CoreStateModule } from '@fem-production-angular/core-state';
import { MaterialModule } from '@fem-production-angular/material';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RoutingModule } from './routing.module';
import { WidgetDetailsComponent } from './widgets/widget-details/widget-details.component';
import { WidgetsListComponent } from './widgets/widgets-list/widgets-list.component';
import { WidgetsComponent } from './widgets/widgets.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    WidgetsComponent,
    WidgetsListComponent,
    WidgetDetailsComponent,
    HomeComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    CoreDataModule,
    CoreStateModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    RoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
