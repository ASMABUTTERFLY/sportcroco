import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-edit-team',
  templateUrl: './edit-team.component.html',
  styleUrls: ['./edit-team.component.css']
})
export class EditTeamComponent implements OnInit {
  id !: number;
  teamForm !:FormGroup
  team: any={};
  // teamsTab=[
  //   { id:1,name: 'team1', owner:'walid',fondation:3/4/55},
  //   { id:2,name: 'team2', owner:'ayoub',fondation:10},
  //   { id:3,name: 'team3', owner:'haroun',fondation:10},
  //   { id:4,name: 'team4', owner:'asma',fondation:10},
    
  // ];

  constructor(private activatedRoute : ActivatedRoute , 
    private teamService:TeamService ,private router:Router
  ) { }

  ngOnInit(): void {
    this.id=this.activatedRoute.snapshot.params['id']

    this.getTeamById()
  }
  getTeamById(){

    this.teamService.getTeamById(this.id).subscribe((res)=>{
      this.team=res.team
    })
  }
  editTeam(){
    this.teamService.updateTeam(this.team).subscribe((res)=>{
  console.log("here team ya asma",this.team)
  console.log(res.message)
  this.router.navigate(['admin'])

  })
  }}
