import { Component, Input, OnInit } from '@angular/core';
import { UsersService } from 'src/app/users.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {
  @Input() id: number = 0;
  @Input() user: string = '';

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
  }

  setToInactive() {
    this.usersService.switchToInactive(this.id);
    this.usersService.processLogger();
  }

}
