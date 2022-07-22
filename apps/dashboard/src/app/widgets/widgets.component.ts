import { Component, OnInit } from '@angular/core';
import { Widget } from '@fem-production-angular/api-interfaces';
import { Observable } from 'rxjs';
import { WidgetsFacade } from '@fem-production-angular/core-state';

const emptyWidget: Widget = {
  id: null,
  title: '',
  description: '',
};

@Component({
  selector: 'fem-production-angular-widgets',
  templateUrl: './widgets.component.html',
  styleUrls: ['./widgets.component.scss'],
})
export class WidgetsComponent implements OnInit {
  widgets$: Observable<Widget[]>;
  selectedWidget: Widget;

  constructor(private widgetsFacade: WidgetsFacade) {}

  ngOnInit(): void {
    this.reset();
  }

  reset() {
    this.loadWidgets();
    this.selectWidget(emptyWidget);
  }

  resetForm() {
    this.selectWidget(emptyWidget);
  }

  selectWidget(widget: Widget) {
    this.selectedWidget = widget;
  }

  loadWidgets() {
    this.widgets$ = this.widgetsFacade.loadWidgets();
  }

  saveWidget(widget: Widget) {
    const result$ = this.widgetsFacade.saveWidget(widget);
    result$.subscribe((result) => this.reset());
  }

  deleteWidget(widget: Widget) {
    const result$ = this.widgetsFacade.deleteWidget(widget);
    result$.subscribe((result) => this.reset());
  }
}
