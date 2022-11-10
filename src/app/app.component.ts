import { Component, Input, OnInit } from '@angular/core';
import { TargetService } from './services/target.service';

interface Numbers {
  date: any;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'client';
  public numbersList: Numbers[] = [{ date: 1 }];

  selected!: any;
  smallButton: boolean = false;

  largeButton: boolean = false;

  open: boolean = false;

  close: boolean = false;

  eventList: any = [];

  rename: boolean = false;

  buttons: boolean = false;

  selecteds: any = [];

  firstButton(val: any) {
    if (this.smallButton == this.largeButton) {
      this.largeButton = !this.largeButton;
    }
    setTimeout(() => {
      this.largeButton = !this.largeButton;
    }, 3);
    this.close = !this.close;
    this.eventList;
    this.buttons = true;
  }

  createEvent(name: any) {
    this.open = !this.open;
    this.eventList.push(name.value);
  }

  secondButton() {
    this.open = true;
  }

  deleteEvent(val: any) {
    this.eventList.splice(val, 1);
    this.close = !this.close;
    if (this.smallButton == this.largeButton) {
      this.largeButton = !this.largeButton;
    }
    setTimeout(() => {
      this.largeButton = !this.largeButton;
    }, 1000);
  }

  closeEvent() {
    this.close = !this.close;
  }

  editEvent(name: any) {
    if (this.smallButton == this.largeButton) {
      this.largeButton = !this.largeButton;
    }
    setTimeout(() => {
      this.largeButton = !this.largeButton;
    }, 1000);
    this.rename = !this.rename;

    this.eventList.push(name.value);
    this.eventList.splice(name, 1);
  }

  constructor(private targerService: TargetService) {}

  ngOnInit(): void {
    this.targerService.getDate(this.numbersList);
  }
}
