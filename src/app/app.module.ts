import { DatePipe, DecimalPipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrModule } from 'ngx-toastr';
import { TableModule } from 'primeng/table';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FacultyComponent } from './pages/faculty/faculty.component';
import { AddFacultyComponent } from './pages/add-faculty/add-faculty.component';
import { PanelMenuModule } from 'primeng/panelmenu';
import { AvatarModule } from 'primeng/avatar';
import { FormsModule } from '@angular/forms';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    FacultyComponent,
    AddFacultyComponent,
    SidebarComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    TableModule,
    PanelMenuModule,
    AvatarModule,
    ToastrModule.forRoot(),
  ],
  providers: [
    DecimalPipe,
    DatePipe,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
