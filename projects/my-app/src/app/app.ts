import {
  Component,
  inject,
  OnInit,
  REQUEST,
  REQUEST_CONTEXT,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit {
  ngOnInit(): void {
    console.log('App component initialized');
    console.log('Request context:', this.request);
  }
  request = inject(REQUEST_CONTEXT);

  protected title = 'my-app';
}
