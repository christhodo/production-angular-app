import { Component, OnInit } from '@angular/core';
import { Widget } from '@fem-production-angular/api-interfaces';
import { Observable } from 'rxjs';
import { WidgetsService } from '@fem-production-angular/core-data';

@Component({
  selector: 'fem-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  widgets$: Observable<Widget[]>;

  constructor(private widgetsService: WidgetsService) {}

  ngOnInit(): void {
    this.loadWidgets();
  }

  loadWidgets() {
    this.widgets$ = this.widgetsService.all();
  }
}
