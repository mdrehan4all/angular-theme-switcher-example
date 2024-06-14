import { Component } from '@angular/core';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(private themeService: ThemeService) {}

  toggleDayTheme() {
    this.themeService.setTheme('day-theme');
  }

  toggleNightTheme() {
    this.themeService.setTheme('night-theme');
  }
}
