import { Component } from '@angular/core';

@Component({
  selector: 'app-books',
  standalone: false,
  
  templateUrl: './books.component.html',
  styleUrl: './books.component.css'
})
export class BooksComponent {
  books = [
    { title: "Harry Potter", author: "J.K. Rowling" },
    { title: "Game of Thrones", author: "George R.R. Martin" }
  ];
}
