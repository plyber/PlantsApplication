import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PlantCardComponent } from "./shared/plant-card/plant-card.component";
import { HeaderComponent } from "./core/header/header.component";
import { SideBarComponent } from "./core/side-bar/side-bar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PlantCardComponent, HeaderComponent, SideBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'DesignProject';
}
