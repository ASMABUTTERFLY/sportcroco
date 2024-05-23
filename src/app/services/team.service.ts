import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  teamUrl:string ='http://localhost:3000/teams';
  
    constructor(private  httpClient:HttpClient) { }
    addTeam(team : any){
  
      return this.httpClient.post<{message:any}>(this.teamUrl,team)
    }
    getAllTeams(){
      return this.httpClient.get<{teams:any}>(this.teamUrl)
    }
    getTeamById(id:any){
      return this.httpClient.get<{team:any}>(`${this.teamUrl}/${id}`)
    }
    deleteTeam(id:any)
    {
      return this.httpClient.delete<{message:any}>(`${this.teamUrl}/${id}`)
    }
    updateTeam(team:any)
    {
      return this.httpClient.put<{message:string}>(this.teamUrl,team)
    }
    getAllTeamsWithPlayers(){
      return this.httpClient.get<{teams:any}>('http://localhost:3000/teamsPlayers');
    }
  }
  
