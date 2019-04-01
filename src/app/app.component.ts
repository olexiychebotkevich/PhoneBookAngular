import { Component, OnInit } from '@angular/core';
import { Person } from './person';
import { PhoneBookService } from './phone-book.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  
  title = 'AngularWorkersClient';
}
