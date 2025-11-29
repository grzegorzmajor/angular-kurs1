import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-alert',
  imports: [],
  templateUrl: './alert.html',
  styleUrl: './alert.css',
})
export class Alert {
  @Input() errorMessage!: string;
  @Output() closeAlert = new EventEmitter<void>();

  closeAlertMessage() {
    this.closeAlert.emit();
  }
}
