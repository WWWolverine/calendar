import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TargetService {
  constructor() {}
  getDate(a: any) {
    for (let i = 0; i < 24; i++) {
      a.push(i);
    }
  }
}
