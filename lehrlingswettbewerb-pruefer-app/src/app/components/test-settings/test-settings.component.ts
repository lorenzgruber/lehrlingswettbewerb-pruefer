import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Question } from 'src/app/models/question';
import { QuestionsService } from 'src/app/services/questions.service';

@Component({
  selector: 'app-test-settings',
  templateUrl: './test-settings.component.html',
  styleUrls: ['./test-settings.component.scss'],
})
export class TestSettingsComponent implements OnInit {
  subject: string = 'A';
  questionCount: number = 30;
  simulation: boolean;

  constructor(
    private router: Router,
    private questionService: QuestionsService
  ) {}

  ngOnInit(): void {}

  setSubject(subject: string): void {
    this.subject = subject;
  }

  setQuestionCount(count: number): void {
    this.questionCount = count;
  }

  maxQuestionCount(): number {
    if (this.subject) {
      return this.questionService.getQuestionCountOfSubject(this.subject);
    }
    return 0;
  }

  startTest(): void {
    this.router.navigate(['test', this.subject, this.questionCount]);
    // this.router.navigate(['test/simulation']);
  }
}
