import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './views/login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './shared/header/header.component';
import { VideosComponent } from './views/videos/videos.component';

const routes: Routes = [
  {path: '', component:LoginComponent}, 
  {path: '', component: HeaderComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'videos', component: VideosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
