import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar';
import { Home } from './components/home/home';
import { AboutAs } from './components/about-as/about-as';

@Component({
imports: [RouterOutlet, Home, NavbarComponent, AboutAs],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('FlexZone');
}
