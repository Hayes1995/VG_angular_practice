import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-nav-box',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './nav-box.component.html',
  styleUrl: './nav-box.component.css'
})
export class NavBoxComponent {

}
