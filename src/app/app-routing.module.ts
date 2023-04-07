import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddFacultyComponent } from './pages/add-faculty/add-faculty.component';
import { FacultyComponent } from './pages/faculty/faculty.component';

const routes: Routes = [
  {path: '',redirectTo:'faculty',pathMatch:'full' },
  {path: 'faculty', component: FacultyComponent},
  {path: 'add-faculty', component: AddFacultyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
