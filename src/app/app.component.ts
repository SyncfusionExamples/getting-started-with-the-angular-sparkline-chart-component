import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SparklineModule, SparklineTooltipService } from '@syncfusion/ej2-angular-charts'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SparklineModule],
  providers: [SparklineTooltipService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public dataSource = [
    { month: 'January', value: 34 },
    { month: 'February', value: 36 },
    { month: 'March', value: 32 },
    { month: 'April', value: 35 },
    { month: 'May', value: 40 },
    { month: 'June', value: 38 },
    { month: 'July', value: 33 },
    { month: 'August', value: 37 },
    { month: 'September', value: 34 },
    { month: 'October', value: 31 },
    { month: 'November', value: 30 },
    { month: 'December', value: 28 }
  ];

  public markerSettings: object = {
    visible: ['All']
  };

  public dataLabelSettings: object = {
    visible: ['Start ', 'End']
  };

  public padding: object = { left: 10, right: 10 };

  public tooltipSettings: object = {
    visible: true,
  };
}
