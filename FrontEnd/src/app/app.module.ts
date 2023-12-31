import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './views/login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginService } from './service/login.service';
import { DashboardComponent } from './views/dashboard/dashboard.component';

import { VideosComponent } from './views/videos/videos.component';
import { ComidaComponent } from './views/comida/comida.component';
import { FunkosComponent } from './views/funkos/funkos.component';
import { AnimeComponent } from './views/anime/anime.component';
import { FooterComponent } from './shared/footer/footer.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    VideosComponent,
    ComidaComponent,
    FunkosComponent,
    AnimeComponent,
    FooterComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
