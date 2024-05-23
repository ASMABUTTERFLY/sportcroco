import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { AddMatchComponent } from './components/add-match/add-match.component';
import { AddTeamComponent } from './components/add-team/add-team.component';
import { AddPlayerComponent } from './components/add-player/add-player.component';
import { AdminComponent } from './components/admin/admin.component';
import { ResultComponent } from './components/result/result.component';
import { MatchesComponent } from './components/matches/matches.component';
import { PlayersComponent } from './components/players/players.component';
import { TeamsComponent } from './components/teams/teams.component';
import { AdminMatchesComponent } from './components/admin-matches/admin-matches.component';
import { MatcheInfoComponent } from './components/matche-info/matche-info.component';
import { TeamInfoComponent } from './components/team-info/team-info.component';
import { PlayerInfoComponent } from './components/player-info/player-info.component';
import { EditMatchComponent } from './components/edit-match/edit-match.component';
import { EditTeamComponent } from './components/edit-team/edit-team.component';
import { EditPlayerComponent } from './components/edit-player/edit-player.component';
import { SearchComponent } from './components/search/search.component';
import { ProfileComponent } from './components/profile/profile.component';
import { WeatherComponent } from './components/weather/weather.component';

const routes: Routes = [
  //http://localhost:4200=>
  //home componant will be displyed
  {path : '',component : HomeComponent},
  //http://localhost:4200/inscription=>
  //signup componant will be displyed
  //http://localhost:4200/connexion=>
    { path: 'inscription' , component:SignupComponent},
    { path: 'signupAdmin' , component:SignupComponent},
  //login componant will be displyed
  { path: 'connexion' , component:LoginComponent},
  //http://localhost:4200/addMatch=>
  //formulaire add match componant will be displyed
  { path: 'addMatch' , component:AddMatchComponent},
  { path: 'addTeam' , component:AddTeamComponent},
  { path: 'addPlayer' , component:AddPlayerComponent},
  { path: 'admin' , component:AdminComponent},
  { path: 'matches' , component:MatchesComponent},
  { path: 'players' , component:PlayersComponent},
  { path: 'teams' , component:TeamsComponent},
  { path: 'matchInfo/:id' , component:MatcheInfoComponent},
  { path: 'teamInfo/:id' , component:TeamInfoComponent},
  { path: 'playerInfo/:id' , component:PlayerInfoComponent},
  {path:'editMatch/:id',component:EditMatchComponent},
  {path:'editTeam/:id',component:EditTeamComponent},
  {path:'editPlayer/:id',component:EditPlayerComponent},
  {path:'searchMatches',component:SearchComponent},
  {path:'profile',component:ProfileComponent},
  {path:'weather',component:WeatherComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
