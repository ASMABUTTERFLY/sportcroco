import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatchesService } from 'src/app/services/matches.service';
import { generatedId } from 'src/app/shared/genericFunctions';

@Component({
  selector: 'app-add-match',
  templateUrl: './add-match.component.html',
  styleUrls: ['./add-match.component.css']
})
export class AddMatchComponent implements OnInit {
  match:any={}//match : objet initialement vide
  matchForm!: FormGroup //form ID
  constructor(private matcheService : MatchesService) { }

  ngOnInit(): void { }
  addMatch(){
  //   let matches = JSON.parse(localStorage.getItem("matches") || "[]");
  // this.match.id = generatedId(matches);
  // matches.push(this.match);
  // localStorage.setItem("matches",JSON.stringify(matches));
    this.matcheService.addMatch(this.match).subscribe(result=>{console.log(result.message);
      // if (result.message=="0"){
      //   //navigate to table matches
      // }
      // else
      // {
      //   //erreur
      // }
      
    })
  }

}