import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // The char after the colon is a back-tick
  // template: `
  //   <app-server></app-server>
  //   <app-server></app-server>'
  //   `,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'Status is N/A';
  serverName = '';
  userName = '';

  allowClearUserName = false;
  //allowClearUserName = (this.userName.length != 0);


  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 3000);
  }

  // Functions
  ngOnInit() {
  }

  onCreateServer(){
    this.serverCreationStatus = "Server was created:  " + this.serverName;
  }

  onClearUserName(){
    this.userName = "";
  }

  onUpdateUserName(){
    this.allowClearUserName = (this.userName.length != 0);
  }

  // We aren't using this.  This shows how to get input, but it lacks
  // two-way binding - so not good.
  // This function is called with each key-up (i.e., after each char is entered
  // into the input box).
  onUpdateServerName(event:any){
    // console.log(event);
    // We have to cast the value to define its type for TypeScript.
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
