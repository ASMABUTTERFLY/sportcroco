import { Component, OnInit } from '@angular/core';
import { MatchesService } from 'src/app/services/matches.service';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {
  matchesTab :any =[];
// matchesTab=[
// { id:1,scoreOne:0, scoreTwo:3,teamOne:'RMD',teamTwo:'FCB'},
// { id:2,scoreOne:3, scoreTwo:3,teamOne:'RMDE',teamTwo:'FCBT'},
// { id:3,scoreOne:3, scoreTwo:4,teamOne:'RMDT',teamTwo:'FCBB'},
// { id:4,scoreOne:2, scoreTwo:1,teamOne:'RMDF',teamTwo:'FCBD'},
// { id:5,scoreOne:0, scoreTwo:3,teamOne:'RMDF',teamTwo:'FCBA'},]
  constructor( private matcheService:MatchesService) { }

  ngOnInit(): void {
    this.matcheService.getAllMatches().subscribe((res)=>{
      this.matchesTab=res.matches;
    })
  }
 
}
