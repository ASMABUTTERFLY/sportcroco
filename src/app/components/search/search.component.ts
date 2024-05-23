import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchForm! :FormGroup;
  foundedMatches :any = [];
  matchesTab : any =[];
  // matchesTab=[
  //   { id:1,scoreOne:0, scoreTwo:3,teamOne:'A',teamTwo:'B'},
  //   { id:2,scoreOne:1, scoreTwo:3,teamOne:'RMDE',teamTwo:'FCBT'},
  //   { id:3,scoreOne:3, scoreTwo:4,teamOne:'RMDT',teamTwo:'FCBB'},
  //   { id:4,scoreOne:2, scoreTwo:1,teamOne:'RMDF',teamTwo:'FCBD'},
  //   { id:5,scoreOne:0, scoreTwo:0,teamOne:'RMDF',teamTwo:'FCBA'},
  // ];
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }
search(){
  let scoreValue = this.searchForm.value.score;
  this.foundedMatches=[];
  // for (let i = 0; i < this.matchesTab.length; i++) {
  //   if (
  //     this.matchesTab[i].scoreOne == scoreValue || 
  //     this.matchesTab[i].scoreTwo == scoreValue) {
  //       this.foundedMatches.push(this.matchesTab[i]);
  //   }
  // }
  this.foundedMatches=this.matchesTab.filter(
    (m:any) => m.scoreOne==scoreValue||m.scoreTwo==scoreValue);
}
}

