import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './core/components/layout/footer/footer.component';
import { HeaderComponent } from './core/components/layout/header/header.component';
import { LandingComponent } from './core/components/layout/landing/landing.component';
import { AuthorsComponent } from './pages/authors/authors.component';
import { BooksComponent } from './pages/books/books.component';
import { LoginComponent } from './pages/login/login.component';
import { interceptor } from './shared/interceptors';
@NgModule({
  declarations: [
    AppComponent,
    AuthorsComponent,
    BooksComponent,
    LoginComponent,
    LandingComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [provideHttpClient(withInterceptors(interceptor))],
  bootstrap: [AppComponent]
})
export class AppModule { }
