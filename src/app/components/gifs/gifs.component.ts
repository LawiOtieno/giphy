import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-gifs',
  templateUrl: './gifs.component.html',
  styleUrls: ['./gifs.component.css']
})
export class GifsComponent implements OnInit {

  gifs:any[]=[];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {

    this.dataService.getTrendingGifs()
    .subscribe((response:any)=>{
      this.gifs = response.data;
      console.log(response.data);
      
      
    });
  }

}
