import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-exp-form',
  imports: [FormsModule, RouterLink, ],
  templateUrl: './exp-form.component.html',
  styleUrl: './exp-form.component.css'
})
export class ExpFormComponent {
  clusterID = signal('');
  username = signal('');
  password = signal('');
  nodeName = signal('');
  adminAPIKey = signal('');
  queryAPIKey = signal('');
  isChecked = false;
  dataSubmitted = false;
  generateRandomWord(length: number): string {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

   test = this.generateRandomWord(6);
   tester = signal(this.test);

  onSubmit() {
    if (this.clusterID() === '') {
      this.clusterID.update(this.tester);
    }
    else{
      this.clusterID.update(this.clusterID);
    }
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
