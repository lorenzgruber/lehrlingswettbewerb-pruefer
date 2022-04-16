import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Question } from 'src/app/models/question';
import { QuestionAnswer } from 'src/app/models/questionAnswer';
import { QuestionsService } from 'src/app/services/questions.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
})
export class QuestionComponent implements OnInit {
  @Input() question: Question;
  @Output() answerQuestionEvent = new EventEmitter<QuestionAnswer>();
  @Input() lastQuestionInTest: boolean;
  selectedAnswer: number;

  constructor() {}

  ngOnInit(): void {}

  selectAnswer(answer: number): void {
    this.selectedAnswer = answer;
    console.log(this.question.correct, this.selectedAnswer);
  }

  nextQuestion(): void {
    const answer = {
      question: this.question,
      answer: this.selectedAnswer
    } as QuestionAnswer;
    this.answerQuestionEvent.emit(answer);
    this.selectedAnswer = undefined;
  }
}
