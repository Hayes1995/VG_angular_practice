import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class FormService {

   
  clusterID = '';
  cID= signal(this.clusterID); 
  username = '';
  password = '';
  nodeName = '';
  adminAPIKey = '';
  queryAPIKey = '';
  

  submit() {
    this.cID.update(() => this.clusterID);
    console.log(this.cID());
  }

}
