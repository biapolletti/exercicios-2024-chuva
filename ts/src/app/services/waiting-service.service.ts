import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WaitingServiceService {
  private waitingCount = new BehaviorSubject<number>(0);

  getWaitingCount() {
    return this.waitingCount.asObservable();
  }

  incrementWaitingCount() {
    this.waitingCount.next(this.waitingCount.value + 1);
  }

  decrementWaitingCount() {
    this.waitingCount.next(this.waitingCount.value - 1);
  }
}
