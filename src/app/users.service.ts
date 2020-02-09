import { Injectable } from '@angular/core';
import { CounterService } from './counter.service'
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  users: {name: string, active: boolean} [] = [
    {
      name: 'John',
      active: true
    },
    {
      name: 'Mike',
      active: false
    },
    {
      name: 'Steve',
      active: true
    },
    {
      name: 'Chris',
      active: false
    },
    {
      name: 'Debra',
      active: true
    },
  ]
  constructor(private counterService:CounterService) { }

  getActiveUsers () {
    return this.users.filter(user => user.active === true)
  }
  getInactiveUsers () {
    return this.users.filter(user => user.active === false)
  }

  toggleUser (name: string) {
    this.users = this.users.map(user => {
      if (user.name === name) {
        if(user.active) {
          console.log(`Users set to inactive: ${this.counterService.onSetToInactive()}`)
        } else {
          console.log(`Users set to active: ${this.counterService.onSetToActive()}`)
        }
        user.active = !user.active
        console.log(user)
      }
      return user
    })
  }
}
