import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'car-rental-frontend';
  isBookingFormVisible = false;

  openBookingForm() {
    this.isBookingFormVisible = true;
  }

  closeBookingForm() {
    this.isBookingFormVisible = false;
  }
}
