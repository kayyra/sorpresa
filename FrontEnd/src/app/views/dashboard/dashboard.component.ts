import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  currentDescription: string = '';

  showDescription(description: string) {
    this.currentDescription = description;
  }

  hideDescription() {
    this.currentDescription = '';
  }
}
