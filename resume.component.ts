// src/app/resume/resume.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-resume',
  template: `
    <div class="resume">
      <h1>{{ fullName }}</h1>
      <p>{{ summary }}</p>
      <h2>Skills</h2>
      <ul>
        <li *ngFor="let skill of skills">{{ skill }}</li>
      </ul>
    </div>
  `,
  styles: `
    .resume {
      font-family: Arial, sans-serif;
      padding: 20px;
    }
  `,
})
export class ResumeComponent {
  fullName = 'Anika Patel';
  summary = 'I am Backend Frontend developer Iam lookin for internship of Java Full Stack backend Java and frontend HTML CSS JS and React Angular.';
  skills = ['Angular', 'TypeScript', 'HTML', 'CSS', 'React.js', 'Java'];
}
