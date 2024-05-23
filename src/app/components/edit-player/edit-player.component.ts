import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PlayersService } from 'src/app/services/players.service';

@Component({
  selector: 'app-edit-player',
  templateUrl: './edit-player.component.html',
  styleUrls: ['./edit-player.component.css']
})
export class EditPlayerComponent implements OnInit {
  playerForm !:FormGroup
  player : any ={}
  id !: number
  // playersTab=[
  //   { id:1,name: 'walid', position:'def',nbr:10,age:30},
  //   { id:2,name: 'walid', position:'hou',nbr:13,age:39},
  //   { id:3,name: 'walid', position:'frf',nbr:10,age:40},
  //   { id:4,name: 'walid', position:'ddb',nbr:11,age:23},

  // ];
  constructor(private activatedRoute : ActivatedRoute, private playerService:PlayersService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.id=this.activatedRoute.snapshot.params['id']
    this.getPlayerById()
    // this.player=this.playersTab.find((m:any) => m.id==this.id);
  }
  getPlayerById(){

    this.playerService.getPlayerById(this.id).subscribe((res)=>{
      this.player=res.player
    })
  }
  editPlayer(){
    this.playerService.updatePlayer(this.player).subscribe((res)=>{
  console.log("here palyer",this.player)
  console.log(res.message)
  this.router.navigate(['admin'])

  })
  }}

