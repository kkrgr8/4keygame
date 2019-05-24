import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'charts';

  public donutChartData = [{
    id: 0,
    label: 'CPU Usage',
    value: 10,
    color: '#38d1c6',
  }, {
    id: 1,
    label: 'Memory',
    value: 90,
    color: '#ccc',
  }];
}
