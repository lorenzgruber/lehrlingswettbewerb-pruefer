import { Component, Input, OnInit } from '@angular/core';
import { QuestionAnswer } from 'src/app/models/questionAnswer';

@Component({
  selector: 'app-question-answer',
  templateUrl: './question-answer.component.html',
  styleUrls: ['./question-answer.component.scss'],
})
export class QuestionAnswerComponent implements OnInit {
  constructor() {}

  @Input() questionAnswer: QuestionAnswer;

  ngOnInit(): void {}
}
