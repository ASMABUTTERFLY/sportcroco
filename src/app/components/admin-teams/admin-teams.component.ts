import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-admin-teams',
  templateUrl: './admin-teams.component.html',
  styleUrls: ['./admin-teams.component.css']
})
export class AdminTeamsComponent implements OnInit {
  // teamsTab=[
  //   { id:1,name: 'team1', owner:'walid',fondation:90},
  //   { id:2,name: 'team2', owner:'ayoub',fondation:10},
  //   { id:3,name: 'team3', owner:'haroun',fondation:10},
  //   { id:4,name: 'team4', owner:'asma',fondation:10},

  // ];

  teamsTab: any = [];


  constructor(private router: Router, private teamService: TeamService) { }

  ngOnInit() {

    this.teamService.getAllTeamsWithPlayers().subscribe((res) => {
      console.log('here all teals from BE', res.teams);
      this.teamsTab = res.teams;
    });


  }
  // this.getAllTeams() //appel methode dans compent 

  //   getAllTeams(){ //declaration 
  //   this.teamService.getAllTeams().subscribe((res)=>{ //getAllMatch ici est lappel du methode de service
  //     this.teamsTab=res.teams
  //   })
  // }
  display(id: number) {
    this.router.navigate([`teamInfo/${id}`]);
  }

  editTeam(id: number) {
    this.router.navigate([`editTeam/${id}`])
  }
  deleteTeam(id: number) {

    this.teamService.deleteTeam(id).subscribe((res) => {

      // this.getAllTeams();  
    })
  }

}
