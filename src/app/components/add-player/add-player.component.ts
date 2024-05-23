import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { PlayersService } from 'src/app/services/players.service';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {
  player:any={}
  playerForm!: FormGroup
  teamsTab:any =[];
  teamId:any;
  constructor(private playerService:PlayersService , private teamService:TeamService) { }

  ngOnInit(): void {
    this.teamService.getAllTeams().subscribe((res)=>{
      this.teamsTab=res.teams;
    })
  }
  addPlayer(){
    this.player.tId=this.teamId;
    this.playerService.addPlayer(this.player).subscribe(res=>{console.log(res.message);
     
  })
}
selectTeamId(evt :any){
  this.teamId=evt.target.value;
}


}
