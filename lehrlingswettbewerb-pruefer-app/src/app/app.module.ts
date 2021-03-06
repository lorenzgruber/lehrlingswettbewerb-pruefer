import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { QuestionComponent } from './components/question/question.component';
import { QuestionAnswerComponent } from './components/question-answer/question-answer.component';
import { TestSettingsComponent } from './components/test-settings/test-settings.component';
import { TestComponent } from './components/test/test.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    QuestionAnswerComponent,
    TestSettingsComponent,
    TestComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
