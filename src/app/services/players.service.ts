import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {
  playerhUrl='http://localhost:3000/players';

  constructor(private  httpClient:HttpClient) { }
  addPlayer(player : any){

    return this.httpClient.post<{message:any}>(this.playerhUrl,player)
  }
  getAllPlayers(){
    return this.httpClient.get<{players:any}>(this.playerhUrl)
  }
  getPlayerById(id:any){
    return this.httpClient.get<{player:any}>(`${this.playerhUrl}/${id}`)
  }
  deletePlayer(id:any)
  {
    return this.httpClient.delete<{message:any}>(`${this.playerhUrl}/${id}`)
  }
  updatePlayer(player:any)
  {
    return this.httpClient.put<{message:any}>(this.playerhUrl,player)
  }
  getAllPlayestWithTeam(){
    return this.httpClient.get<{players:any}>('http://localhost:3000/playersDeTeam');
  }
}
