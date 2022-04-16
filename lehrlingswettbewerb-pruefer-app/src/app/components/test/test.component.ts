import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Question } from 'src/app/models/question';
import { QuestionAnswer } from 'src/app/models/questionAnswer';
import { QuestionsService } from 'src/app/services/questions.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})
export class TestComponent implements OnInit {
  questions: Question[];
  currentQuestion: Question;
  answeredQuestions: QuestionAnswer[] = [];
  initialQuestionCount: number;
  testFinished: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private questionService: QuestionsService
  ) {}

  ngOnInit(): void {

    // very bad fix
    if (this.questionService.questions === undefined) {
      this.quitTest();
    }

    if (Object.keys(this.route.snapshot.params).length === 0) {
      this.questions = this.questionService
        .getTestQuestions('A', 10)
        .concat(this.questionService.getTestQuestions('B', 10))
        .concat(this.questionService.getTestQuestions('C', 10))
        .concat(this.questionService.getTestQuestions('D', 10));
    } else {
      this.questions = this.questionService.getTestQuestions(
        this.route.snapshot.paramMap.get('subject'),
        parseInt(this.route.snapshot.paramMap.get('questionCount'))
      );
    }
    this.initialQuestionCount = this.questions.length;
    this.currentQuestion = this.questions.pop()[0];
  }

  getQuestoinAnswer(answer: QuestionAnswer): void {
    this.answeredQuestions.push(answer);
    if (this.questions.length !== 0) {
      this.currentQuestion = this.questions.pop()[0];
    } else {
      this.testFinished = true;
    }
  }

  quitTest(): void {
    this.router.navigate(['/']);
  }
}
