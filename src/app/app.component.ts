import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {TopoComponent} from "./components/topo/topo.component";
import {RodapeComponent} from "./components/rodape/rodape.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TopoComponent, RodapeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'passaro-urbano-standalone';
}
