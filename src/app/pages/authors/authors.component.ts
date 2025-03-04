import { Component } from '@angular/core';

@Component({
  selector: 'app-authors',
  standalone: false,
  
  templateUrl: './authors.component.html',
  styleUrl: './authors.component.css'
})
export class AuthorsComponent {
  authors = ["J.K. Rowling", "George R.R. Martin", "J.R.R. Tolkien"];
}
