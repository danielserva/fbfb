import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { CarouselModule } from 'ng2-bootstrap/ng2-bootstrap';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { AUTH_PROVIDERS }      from 'angular2-jwt';

import { AppComponent } from './app.component';
import { WelcomeComponent }  from './home/welcome.component';
import { FBCarouselComponent } from './fbfb-carousel/fbfb-carousel.component';
import { ComoComponent }  from './como/como.component';
import { DoadoresComponent }  from './doadores/doadores.component';
import { EntidadesComponent }  from './entidades/entidades.component';
import { ParceirosComponent }  from './parceiros/parceiros.component';
import { PorqueComponent }  from './porque/porque.component';
import { TeamComponent }  from './team/team.component';

// import { ProductModule } from './products/product.module';

@NgModule({
  declarations: [
    AppComponent,
  WelcomeComponent,
  FBCarouselComponent,
  ComoComponent,
  DoadoresComponent,
  EntidadesComponent,
  ParceirosComponent,
  PorqueComponent,
  TeamComponent
  ],
  imports: [
    NgbModule.forRoot(),
    CarouselModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDw6HCie09eiqt8JKRMMP3K4MxpqP2fvgs'
    }),
    RouterModule.forRoot([
      {path: 'como', component: ComoComponent},
      {path: 'doadores', component: DoadoresComponent},
      {path: 'entidades', component: EntidadesComponent},
      {path: 'parceiros', component: ParceirosComponent},
      {path: 'porque', component: PorqueComponent},
      {path: 'team', component: TeamComponent},
      {path: 'welcome', component: WelcomeComponent},

      {path: '', redirectTo: 'welcome', pathMatch: 'full'},
      {path: '**', redirectTo: 'welcome', pathMatch: 'full'}
    ])
  ],
  providers: [AUTH_PROVIDERS],
  bootstrap: [AppComponent]
})
export class AppModule { }
