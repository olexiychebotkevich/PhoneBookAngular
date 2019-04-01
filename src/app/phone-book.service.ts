import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Person } from './person';

@Injectable({
  providedIn: 'root'
})
export class PhoneBookService {
  url = 'http://localhost:55778//Api/People';
  httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };

  constructor(private http: HttpClient) { }

  getAllPeople(): Observable<Person[]> {
    return this.http.get<Person[]>(this.url + '/ReadAllPeopleInfo');
  }

  getPersonById(PersonId: string): Observable<Person> {
    return this.http.get<Person>(this.url + '/ReadPersonById/' + PersonId);
  }

  createPerson(person: Person): Observable<Person> {
    return this.http.post<Person>(this.url + '/CreatePerson/', person, this.httpOptions);
  }

  updatePerson(person: Person): Observable<Person> {
    return this.http.put<Person>(this.url + '/UpdatePerson/', person, this.httpOptions);
  }

  deletePersonById(PersonId: string): Observable<number> {
    return this.http.delete<number>(this.url + '/DeletePersonById/' + PersonId, this.httpOptions);
  }
}