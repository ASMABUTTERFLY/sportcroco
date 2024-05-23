import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  weatherForm!: FormGroup;
  apiResult: any;
  constructor(private fBuilder: FormBuilder,
    private router: Router, private weatherService: WeatherService) { }
  weather: any;
  ngOnInit(): void {

    this.weatherForm = this.fBuilder.group({
      city: ['', [Validators.required]]

    })
  }
  search() {
    console.log("here im", this.weatherForm.value);
    this.weatherService.search(this.weatherForm.value).subscribe((res) => {
      console.log("here im result search", res.apiRes);
      this.apiResult = res.apiRes;
    })
  }
}

