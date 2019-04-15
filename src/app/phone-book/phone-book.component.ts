import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from '../person';
import { PhoneBookService } from '../phone-book.service';
import { MatNativeDateModule, MatIconModule, MatCardModule } from '@angular/material';
import { MatSidenavModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { MatTooltipModule, MatToolbarModule } from '@angular/material';
import { MatPaginatorModule } from '@angular/material/paginator';


@Component({
  selector: 'app-phone-book',
  templateUrl: './phone-book.component.html',
  styleUrls: ['./phone-book.component.scss']
})
export class PhoneBookComponent implements OnInit {
  allPeople: Observable<Person[]>;
  constructor( private pS: PhoneBookService) { }

  ngOnInit() {
    this.loadAllPeople();
    console.log(this.allPeople);
  }


  loadAllPeople() {
    this.allPeople = this.pS.getAllPeople();
    
  }

}
