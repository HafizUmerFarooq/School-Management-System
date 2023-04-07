import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.component.html',
  styleUrls: ['./faculty.component.scss']
})
export class FacultyComponent implements OnInit {
  records:any[] = [];
  constructor(private http: HttpClient,private router:Router) { }

  ngOnInit(): void {
    this.getFaculties();
  }

  getFaculties(){
    this.http.get('http://localhost:3000/faculty').subscribe((res:any)=>{
      console.log('res: ', res);
      this.records = res.record;
    })
  }

  editPartie(id?:any){
    this.router.navigate(['/add-faculty'],{ queryParams: { id: id } });
  }

  deletePartie(id:any){
    this.http.delete('http://localhost:3000/faculty/'+id).subscribe((res:any)=>{
      this.getFaculties();
    })
  }
}
