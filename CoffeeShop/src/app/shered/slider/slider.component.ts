import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ISlider } from 'src/app/interfaces/slider';
import { SliderService } from 'src/app/services/slider.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  public sliderData:ISlider[]=[];

  public selextedIndex:number=0;

  constructor(private sliderService:SliderService) { }

  ngOnInit(): void {
     
   this.getDataForSlider();
   
  }

  getDataForSlider(){
    this.sliderService.getAll().subscribe(data=>{
     this.sliderData=data;
      
    })
  }
  selectImage(i:number):void{
    this.selextedIndex=i;
    
  }
  

  

}
