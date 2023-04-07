import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'front-end';
  currentRoute: string ='';
  hiddenPanelMenu: boolean = true;


  constructor(
  ) {}

  ngOnInit(): void {
  }
}
