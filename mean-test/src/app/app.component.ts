import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UsersService } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'IT6203';
  formName = 'Project Proposal Form';
  condition = false;

}
