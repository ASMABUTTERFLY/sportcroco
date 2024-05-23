import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatchesService } from 'src/app/services/matches.service';
import { deleteById } from 'src/app/shared/genericFunctions';

@Component({
  selector: 'app-admin-matches',
  templateUrl: './admin-matches.component.html',
  styleUrls: ['./admin-matches.component.css']
})
export class AdminMatchesComponent implements OnInit {
 matchesNbr : number =10;
  matchesTab: any = [];
  // matchesTab=[
  //   { id:1,scoreOne:0, scoreTwo:3,teamOne:'A',teamTwo:'B'},
  //   { id:2,scoreOne:1, scoreTwo:3,teamOne:'RMDE',teamTwo:'FCBT'},
  //   { id:3,scoreOne:3, scoreTwo:4,teamOne:'RMDT',teamTwo:'FCBB'},
  //   { id:4,scoreOne:2, scoreTwo:1,teamOne:'RMDF',teamTwo:'FCBD'},
  //   { id:5,scoreOne:0, scoreTwo:0,teamOne:'RMDF',teamTwo:'FCBA'},
  // ];
  
  constructor(private router:Router , private matchService:MatchesService) { }

  ngOnInit(){ 
    // this.matchesTab = JSON.parse(localStorage.getItem('matches') || '[]');
    this.getAllMatches() //appel methode dans compent 
  }
getAllMatches(){ //declaration 
  this.matchService.getAllMatches().subscribe((res)=>{ //getAllMatch ici est lappel du methode de service
    this.matchesTab=res.matches
  })
}
  display(id : number){
    this.router.navigate([`matchInfo/${id}`]);
  }

  editMatch(id : number){
    this.router.navigate([`editMatch/${id}`])
  }
  deleteMatch(id:number){
  //  deleteObject(this.matchesTab ,'matches',id)
   this.matchService.deleteMatch(id).subscribe((res)=>{

this.getAllMatches();   })
  }
  matchColor(s1:number,s2:number)
  {
  if (s1>s2) {
    return ['green', 'est le winner'];
  } else if(s1<s2) {
    return ['red', 'est le loser'];
    
  }
  else{
    return ['blue', 'null match'];
  }
  }
  Messages(s1:number,s2:number){
    if (s1>s2) {
     return ['green','est le winner'];
      
    }else if(s1<s2) {
      return ['red','est le losser']
    }else{
      return ['blue','null mATCH']
    }
    }
}
