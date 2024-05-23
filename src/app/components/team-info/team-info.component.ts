import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-team-info',
  templateUrl: './team-info.component.html',
  styleUrls: ['./team-info.component.css']
})
export class TeamInfoComponent implements OnInit {
  id !: number;
  // teamsTab=[
  //   { id:1,name: 'team1', owner:'walid',fondation:3/4/55},
  //   { id:2,name: 'team2', owner:'ayoub',fondation:10},
  //   { id:3,name: 'team3', owner:'haroun',fondation:10},
  //   { id:4,name: 'team4', owner:'asma',fondation:10},
    
  // ];

  constructor(private activatedRoute:ActivatedRoute, private tService:TeamService) { }
team:any;
  ngOnInit()  {
   
    this.id= this.activatedRoute.snapshot.params['id'];


  this.tService.getTeamById(this.id).subscribe(
    (res)=>{this.team=res.team;})
  
  
  }
  }


