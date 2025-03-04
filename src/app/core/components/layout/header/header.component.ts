import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: false,
  
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
logout() {
throw new Error('Method not implemented.');
}
  @Input()
    applicationName : string = ''
  
  
}
