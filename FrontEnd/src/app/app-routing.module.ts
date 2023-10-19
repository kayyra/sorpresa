import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './views/login/login.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { HeaderComponent } from './shared/header/header.component';
import { VideosComponent } from './views/videos/videos.component';
import { ComidaComponent } from './views/comida/comida.component';
import { FunkosComponent } from './views/funkos/funkos.component';
import { animate } from '@angular/animations';
import { AnimeComponent } from './views/anime/anime.component';
import { NavMenuComponent } from './shared/nav-menu/nav-menu.component';

const routes: Routes = [
  {path: '', component:LoginComponent}, 
  {path: '', component: HeaderComponent},
  {path: 'nav-menu', component:NavMenuComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'videos', component: VideosComponent},
  {path: 'comida', component: ComidaComponent},
  {path: 'funko', component: FunkosComponent},
  {path: 'anime', component: AnimeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
