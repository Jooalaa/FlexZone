import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar';
import { Home } from './components/home/home';
import { AboutAs } from './components/about-as/about-as';
import { ContactUs } from './components/contact-us/contact-us';
import { Nutrition } from './components/nutrition/nutrition';
import { SupplementStore } from './components/supplement-store/supplement-store';

@Component({
imports: [RouterOutlet, Home, NavbarComponent, AboutAs, ContactUs, Nutrition, SupplementStore],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('FlexZone');
}
