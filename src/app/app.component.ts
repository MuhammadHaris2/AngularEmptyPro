import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { DashboardService } from './services/dashboard.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
 
  constructor(){}

  ngOnInit(): void {
  
  }
}

