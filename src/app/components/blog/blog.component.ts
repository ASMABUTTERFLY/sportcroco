import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
blogTab=[
{
  image:'assets/images/person_1.jpg',
  date:'30may2024',
  title:'ronaldino',
  description:'azer dfs eee araa'
},
{
  image:'assets/images/person_2.jpg',
  date:'34Juin2024',
  title:'rcherni',
  description:'azer dfs eee araa'
},
{
  image:'assets/images/person_3.jpg',
  date:'31 FEV 2024',
  title:'rdiago',
  description:'azer dfs eee araa'
},


]
  constructor() { }

  ngOnInit(): void {
  }

}
