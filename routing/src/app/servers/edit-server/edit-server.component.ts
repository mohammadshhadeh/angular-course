import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { ServersService } from '../servers.service';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit {
  server: {id: number, name: string, status: string};
  serverName = '';
  serverStatus = '';
  allowEdit: boolean;
  constructor(private serversService: ServersService, private route: ActivatedRoute) { }

  ngOnInit() {
    const { params } = this.route.snapshot;
    this.server = this.serversService.getServer(+params['id']);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
    this.route.params.subscribe((queryParams: Params) => {
      this.allowEdit = !!(+queryParams['allowEdit']);
    })
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
  }

}
