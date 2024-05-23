import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatchesService } from 'src/app/services/matches.service';

@Component({
  selector: 'app-edit-match',
  templateUrl: './edit-match.component.html',
  styleUrls: ['./edit-match.component.css']
})
export class EditMatchComponent implements OnInit {
  matchForm !:FormGroup
  match : any ={}
  id !: number
  // matchesTab=[
  //   { id:1,teamOne:'A',teamTwo:'B',scoreOne:0, scoreTwo:3,},
  //   { id:2,teamOne:'RMDE',teamTwo:'FCBT',scoreOne:1, scoreTwo:3,},
  //   { id:3,teamOne:'RMDT',teamTwo:'FCBB',scoreOne:3, scoreTwo:4,},
  //   { id:4,teamOne:'RMDF',teamTwo:'FCBD',scoreOne:2, scoreTwo:1,},
  //   { id:5,teamOne:'RMDF',teamTwo:'FCBA',scoreOne:0, scoreTwo:0,},
  // ];
  
  constructor(
    private activatedRoute : ActivatedRoute, 
    private matchService:MatchesService ,
  private router:Router) { }

  ngOnInit(): void {  //pour remplire un formulaire on utilise 
    this.id=this.activatedRoute.snapshot.params['id']
    // this.match=this.matchesTab.find((m:any) => m.id==this.id);
    this.getMatchById()
  }
  getMatchById(){

    this.matchService.getMatchById(this.id).subscribe((res)=>{
      this.match=res.match
    })
  }
  editMatch(){
    this.matchService.updateMatch(this.match).subscribe((res)=>{
  console.log("here match ya asma",this.match)
  console.log(res.message)
  this.router.navigate(['admin'])

  })


  }}
