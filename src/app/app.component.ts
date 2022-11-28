import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName  = 'Britney';
  userData = {
    email: 'britney@email.com',
    role: 'Admin',
  }
  title = 'projeto';
}
