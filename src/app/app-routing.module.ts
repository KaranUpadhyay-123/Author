import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './core/components/layout/landing/landing.component';
import { AuthorsComponent } from './pages/authors/authors.component';
import { BooksComponent } from './pages/books/books.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'authors', component: AuthorsComponent },
  { path: 'books', component: BooksComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
