import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PlantCardComponent } from "./shared/plant-card/plant-card.component";
import { HeaderComponent } from "./core/header/header.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PlantCardComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'DesignProject';
}
