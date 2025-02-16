import { Component, signal, Input } from '@angular/core';
import { AdvFormComponent } from '../../adv-form/adv-form.component';

@Component({
  selector: 'app-completed-form',
  imports: [AdvFormComponent],
  templateUrl: './completed-form.component.html',
  styleUrl: './completed-form.component.css'
})
export class CompletedFormComponent {
  @Input() clusterID!: string;


}
