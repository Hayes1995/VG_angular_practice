import { Component, signal, inject, Input, Output, EventEmitter, } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { FormService } from '../form.service';
import { FormInput } from '../form-input.model';
import { CompletedFormComponent } from "../finalPage/completed-form/completed-form.component";

@Component({
  selector: 'app-adv-form',
  imports: [FormsModule, CompletedFormComponent],
  standalone: true,
  templateUrl: './adv-form.component.html',
  styleUrl: './adv-form.component.css'
})
export class AdvFormComponent {
  clusterID = signal('');
  username =signal('');
  password =signal('');
  nodeName = signal('');
  adminAPIKey =signal('');
  queryAPIKey =signal('');
  isChecked = false;
  dataSubmitted = false;
  // @Output() add = new EventEmitter<FormInput>();

  onSubmit() {
    this.dataSubmitted = true;
    this.clusterID.update(this.clusterID);
    this.username.update(this.username);
    this.password.update(this.password);
    this.nodeName.update(this.nodeName);
    this.adminAPIKey.update(this.adminAPIKey);
    this.queryAPIKey.update(this.queryAPIKey);

  }


  onCheckboxChange() {
    this.isChecked = !this.isChecked;
  }
}
