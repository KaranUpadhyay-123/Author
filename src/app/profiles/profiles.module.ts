import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { interceptor } from '../shared/interceptors';
import { ProfilesRoutingModule } from './profiles-routing.module';
import { ProfileService } from './services/profile.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ProfilesRoutingModule
  ],
  providers: [ProfileService, provideHttpClient(withInterceptors(interceptor))],
})
export class ProfilesModule { }
