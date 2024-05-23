import { PathLocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
 
newsTab=[
  {title:'azer',name:'melissa',date:'23/4/2024',img:'assets/images/person_1.jpg',avatar:'assets/images/img_1.jpg'},
  {title:'azer23',name:'meli',date:'23/4/2024',img:'assets/images/person_2.jpg',avatar:'assets/images/img_2.jpg'},
  {title:'azerAZS',name:'ali',date:'23/2/2024',img:'assets/images/person_3.jpg',avatar:'assets/images/img_3.jpg'},
  {title:'rimos',name:'ahmed',date:'3/1/2024',img:'assets/images/person_4.jpg',avatar:'assets/images/bg_3.jpg'},

]
  constructor() { }

  ngOnInit(): void {
  }

}
