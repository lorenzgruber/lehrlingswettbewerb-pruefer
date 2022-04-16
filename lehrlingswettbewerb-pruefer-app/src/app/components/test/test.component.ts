import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Question } from 'src/app/models/question';
import { QuestionsService } from 'src/app/services/questions.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})
export class TestComponent implements OnInit {
  questions: Question[];
  currentQuestion: Question;
  correctQuestions: Question[];
  wrongQuestions: Question[];

  constructor(
    private route: ActivatedRoute,
    private questionService: QuestionsService
  ) {
  }

  ngOnInit(): void {
    if (Object.keys(this.route.snapshot.params).length === 0) {
      this.questions = this.questionService
        .getTestQuestions('A', 30)
        .concat(this.questionService.getTestQuestions('B', 30))
        .concat(this.questionService.getTestQuestions('C', 30))
        .concat(this.questionService.getTestQuestions('D', 30));
    } else {
      this.questions = this.questionService.getTestQuestions(
        this.route.snapshot.paramMap.get('subject'),
        parseInt(this.route.snapshot.paramMap.get('questionCount'))
      );
    }
  }
}
