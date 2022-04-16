import { Component, Input, OnInit } from '@angular/core';
import { Question } from 'src/app/models/question';
import { QuestionsService } from 'src/app/services/questions.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  @Input() question: Question
  selectedAnswer: number

  constructor() { }

  ngOnInit(): void {
  }

  selectAnswer(answer: number): void {
    this.selectedAnswer = answer;
    console.log(this.question.correct, this.selectedAnswer);
    
  }

}
