import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { PlayersService } from 'src/app/services/players.service';
import { deleteById } from 'src/app/shared/genericFunctions';



@Component({
  selector: 'app-admin-players',
  templateUrl: './admin-players.component.html',
  styleUrls: ['./admin-players.component.css']
})
export class AdminPlayersComponent implements OnInit {
  playersTab: any = [];
  teamstab: any = [];
  foundedteams : any ={};
  teamId:any;
 
  // playersTab=[
  //   { id:1,name: 'walid', position:'def',nbr:10,age:30},
  //   { id:2,name: 'walid', position:'hou',nbr:13,age:39},
  //   { id:3,name: 'walid', position:'frf',nbr:10,age:40},
  //   { id:4,name: 'walid', position:'ddb',nbr:11,age:23},

  // ];
  constructor (private router:Router,private playerService:PlayersService) { }

  ngOnInit(){ 
    // this.playersTab = JSON.parse(localStorage.getItem('players') || '[]');
    // this.teamstab = JSON.parse(localStorage.getItem('teams') || '[]');
    // this.getAllPlayers();
    
    this.playerService.getAllPlayestWithTeam().subscribe((res) => {
      console.log('here all teals from BE', res.players);
      this.playersTab = res.players;
    });

   
  }
  
  getAllPlayers(){
    this.playerService.getAllPlayers().subscribe((res)=>{
      this.playersTab=res.players
    })
  }
  display(id : number){
    this.router.navigate([`playerInfo/${id}`]);}


  editPlayer(id : number){
    this.router.navigate([`editPlayer/${id}`]);
  }

  deletePlayer(id : number){
   
    this.playerService.deletePlayer(id).subscribe((res)=>{

      this.getAllPlayers () })
        }

  
  

  
      }


