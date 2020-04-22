import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {ContactsComponent} from './contacts/contacts.component';
import {AboutComponent} from './about/about.component';
import {MainPageRecordComponent} from './main-page-record/main-page-record.component';
import {CategoriesComponent} from './categories/categories.component';
import {FooterComponent} from './footer/footer.component';

import { ReactiveFormsModule} from '@angular/forms';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDividerModule} from '@angular/material/divider';
import {HttpClientModule} from '@angular/common/http';
import { NewToolComponent } from './new-tool/new-tool.component';
import { NavigationComponent } from './navigation/navigation.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatIconModule} from '@angular/material/icon';
import { AdminAllToolsComponent } from './admin-all-tools/admin-all-tools.component';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactsComponent,
    AboutComponent,
    MainPageRecordComponent,
    CategoriesComponent,
    FooterComponent,
    NewToolComponent,
    NavigationComponent,
    AdminAllToolsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatDividerModule,
    HttpClientModule,
    MatMenuModule,
    MatCardModule,
    MatProgressBarModule,
    MatIconModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
