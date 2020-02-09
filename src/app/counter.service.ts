import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  setToInactive: number = 0
  setToActive: number = 0
  constructor() { }

  onSetToInactive () {
    this.setToInactive += 1
    return this.setToInactive
  }
  onSetToActive () {
    this.setToActive += 1
    return this.setToActive
  }
}
