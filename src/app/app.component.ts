import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  inactiveUsers: { name: string, active: boolean }[] = []
  activeUsers: { name: string, active: boolean }[] = []
  constructor(private userService: UsersService) {}

  ngOnInit() {
    this.activeUsers = this.userService.getActiveUsers()
    this.inactiveUsers = this.userService.getInactiveUsers()
  }

  toggleUser(name: string){
    this.userService.toggleUser(name)
    this.activeUsers = this.userService.getActiveUsers()
    this.inactiveUsers = this.userService.getInactiveUsers()
  }
}
