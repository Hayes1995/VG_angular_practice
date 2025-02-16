import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 genieImage = 'https://www.looper.com/img/gallery/why-we-dont-hear-from-sinbad-anymore/intro.jpg';
}
