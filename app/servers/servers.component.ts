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

  constructor() { }

  ngOnInit() {
  }

}
