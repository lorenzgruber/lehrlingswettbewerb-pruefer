import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Question } from '../models/question';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class QuestionsService {
  questions: Question[];
  private jsonURL = 'assets/questions.json';

  constructor(private http: HttpClient) {
    console.log('constructor called');
    this.getJSON().subscribe((data) => {
      this.questions = data;
    });
  }

  private getJSON(): Observable<Question[]> {
    return this.http.get<Question[]>(this.jsonURL);
  }

  // getRandomQuestion(): Question {
  //   console.log('calling random');

  //   return this.questions[Math.floor(Math.random() * this.questions.length)];
  // }

  getQuestionCountOfSubject(subject: string): number {
    const subjectQuestions = [];
    for (const question of this.questions) {
      if (question.questionID.includes(subject)) {
        subjectQuestions.push(question);
      }
    }
    return subjectQuestions.length;
  }

  getTestQuestions(subject: string, amount: number): Question[] {
    const subjectQuestions = [];
    const result = [];
    for (const question of this.questions) {
      if (question.questionID.includes(subject)) {
        subjectQuestions.push(question);
      }
    }
    for (let i = 0; i < amount; i++) {
      const randomIndex = Math.floor(Math.random() * subjectQuestions.length);
      result.push(subjectQuestions.splice(randomIndex, 1));
    }
    console.log(result);

    return result;
  }
}
