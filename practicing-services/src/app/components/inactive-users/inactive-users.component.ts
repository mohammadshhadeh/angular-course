import { Component, Input, OnInit } from '@angular/core';
import { UsersService } from 'src/app/users.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {
  @Input() id: number = 0;
  @Input() user: string = '';

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
  }

  setToActive() {
    this.usersService.switchToActive(this.id);
    this.usersService.processLogger();
  }
}
