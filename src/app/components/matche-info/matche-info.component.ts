import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatchesService } from 'src/app/services/matches.service';

@Component({
  selector: 'app-matche-info',
  templateUrl: './matche-info.component.html',
  styleUrls: ['./matche-info.component.css']
})
export class MatcheInfoComponent implements OnInit {
  id !: number;
 match: any;
// matchesTab=[ //on a paas besoin d'utiliser un tableau statique
//   { id:1,scoreOne:0, scoreTwo:3,teamOne:'A',teamTwo:'B'},
//   { id:2,scoreOne:1, scoreTwo:3,teamOne:'RMDE',teamTwo:'FCBT'},
//   { id:3,scoreOne:3, scoreTwo:4,teamOne:'RMDT',teamTwo:'FCBB'},
//   { id:4,scoreOne:2, scoreTwo:1,teamOne:'RMDF',teamTwo:'FCBD'},
//   { id:5,scoreOne:0, scoreTwo:0,teamOne:'RMDF',teamTwo:'FCBA'},
// ];
  constructor(private activatedRoute:ActivatedRoute , private mService:MatchesService) { }

  ngOnInit()  {
   
    this.id= this.activatedRoute.snapshot.params['id'];
  
  //  for (let i = 0; i < this.matchesTab.length; i++) {
  //   if (this.id==this.matchesTab[i].id) {
  //     this.match=this.matchesTab[i];
  //     break;
  //   }
    
  //  }

  this.mService.getMatchById(this.id).subscribe(
    (res)=>{this.match=res.match;})
  
  
  }}
  


