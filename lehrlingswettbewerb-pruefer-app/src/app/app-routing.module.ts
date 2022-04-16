import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { QuestionComponent } from './components/question/question.component';
import { TestSettingsComponent } from './components/test-settings/test-settings.component';
import { TestComponent } from './components/test/test.component';

const routes: Routes = [
  { path: '', component: TestSettingsComponent },
  { path: 'test/:subject/:questionCount', component: TestComponent },
  { path: 'test/simulation', component: TestComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full' },
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
