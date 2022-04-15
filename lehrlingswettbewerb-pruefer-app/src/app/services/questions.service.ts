import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Question } from '../models/question';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class QuestionsService {

  questions: Question[];
  private jsonURL = 'assets/questions.json';

  constructor(private http: HttpClient) {
    this.getJSON().subscribe((data) => {
      this.questions = data;
    });
  }

  private getJSON(): Observable<Question[]> {
    return this.http.get<Question[]>(this.jsonURL);
  }

  getRandomQuestion(): Question {
    return this.questions[Math.floor(Math.random() * this.questions.length)]
  }
}
