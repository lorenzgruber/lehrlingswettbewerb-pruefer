import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Question } from '../models/question';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  questions: Question[]
  private jsonURL = 'assets/questions.json'

  constructor(private http: HttpClient) {
    this.getJSON().subscribe(data => {
      console.log(data);
     });
  }

  private getJSON(): Observable<any> {
    return this.http.get(this.jsonURL);
  }
}
