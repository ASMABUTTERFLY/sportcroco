import { Component, OnInit, PlatformRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlayersService } from 'src/app/services/players.service';

@Component({
  selector: 'app-player-info',
  templateUrl: './player-info.component.html',
  styleUrls: ['./player-info.component.css']
})
export class PlayerInfoComponent implements OnInit {
  id !: number;
  player: any;
  // playersTab=[
  //   { id:1,name: 'walid', position:'def',nbr:10,age:30},
  //   { id:2,name: 'walid', position:'hou',nbr:13,age:39},
  //   { id:3,name: 'walid', position:'frf',nbr:10,age:40},
  //   { id:4,name: 'walid', position:'ddb',nbr:11,age:23},

  // ];
  constructor(private activatedRoute:ActivatedRoute,
    private pservice:PlayersService
  ) { }

  ngOnInit(): void {
    this.id= this.activatedRoute.snapshot.params['id'];
   
  //   for (let i = 0; i < this.playersTab.length; i++) {
  //     if (this.id==this.playersTab[i].id) {
  //       play=this.playersTab[i];
  //       break;
  //     }
  // }
  this.pservice.getPlayerById(this.id).subscribe(
    (res)=>{this.player=res.player;})
}}
