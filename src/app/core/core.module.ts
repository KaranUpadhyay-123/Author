import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FooterComponent } from './components/layout/footer/footer.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { LandingComponent } from './components/layout/landing/landing.component';



@NgModule({
  declarations: [
    HeaderComponent,
    LandingComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ],
  exports:
  [
    HeaderComponent,
    FooterComponent,
    LandingComponent
  ]
})
export class CoreModule { }
