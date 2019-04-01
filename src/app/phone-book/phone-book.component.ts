import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from '../person';
import { PhoneBookService } from '../phone-book.service';


@Component({
  selector: 'app-phone-book',
  templateUrl: './phone-book.component.html',
  styleUrls: ['./phone-book.component.scss']
})
export class PhoneBookComponent implements OnInit {
  allPeople: Observable<Person[]>;
  constructor( private wS: PhoneBookService) { }

  ngOnInit() {
    this.loadAllPeople();
  }


  loadAllPeople() {
    this.allPeople = this.wS.getAllPeople();
    console.log(this.allPeople);
  }

}
