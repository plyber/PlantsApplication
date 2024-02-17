import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PlantCardComponent } from "./shared/plant-card/plant-card.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PlantCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'DesignProject';
}
