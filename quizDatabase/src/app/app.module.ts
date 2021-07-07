import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatabaseMainComponent } from './database-main/database-main.component';
import { UiHeaderComponent } from './ui/ui-header/ui-header.component';
import { UiBackgroundComponent } from './ui/ui-background/ui-background.component';
import { UiSearchBarComponent } from './ui/ui-search-bar/ui-search-bar.component';
import { UiResultListComponent } from './ui/ui-result-list/ui-result-list.component';

@NgModule({
  declarations: [
    AppComponent,
    DatabaseMainComponent,
    UiHeaderComponent,
    UiBackgroundComponent,
    UiSearchBarComponent,
    UiResultListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    // RouterModule.forRoot([
    //   { path: '', component: DatabaseMainComponent },
    //   { path: '**', redirectTo: '' }
    // ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
