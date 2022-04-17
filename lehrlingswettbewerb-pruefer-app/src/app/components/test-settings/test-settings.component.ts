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
  subject: string = 'Bereich wählen';
  questionCount: number;
  simulation: boolean;
  countInputDisabled = true;

  constructor(
    private router: Router,
    private questionService: QuestionsService
  ) {}

  ngOnInit(): void {}

  onSubjectSelect(subject: string): void {
    this.subject = subject;
    this.countInputDisabled = false;
    
    if (this.questionCount > this.maxQuestionCount()) {
      this.questionCount = this.maxQuestionCount();
    }
    if (!this.questionCount) {
      this.questionCount = 1;
    }
  }

  onQuestionCountInput(count: number): void {
    this.questionCount = count;
    if (this.questionCount > this.maxQuestionCount()) {
      this.questionCount = this.maxQuestionCount();
    }
  }

  onSimulationCheck(simulation: boolean): void {
    this.simulation = simulation;
  }

  maxQuestionCount(): number {
    if (this.subject) {
      return this.questionService.getQuestionCountOfSubject(this.subject);
    }
    return 0;
  }

  startTest(): void {
    if (this.simulation) {
      this.router.navigate(['test/simulation']);
    }else {
      this.router.navigate(['test', this.subject, this.questionCount]);
    }
  }
}
