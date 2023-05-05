import { Component, Input, OnInit } from '@angular/core';
import { Carrossel } from 'src/app/portfolio/model/data.model';

@Component({
  selector: 'app-carroseul',
  templateUrl: './carroseul.component.html',
  styleUrls: ['./carroseul.component.scss']
})
export class CarroseulComponent implements OnInit {

  @Input() contentData!: Carrossel[];
  @Input() indicators = true;
  @Input() controls = true;
  @Input() autoSlide = false;
  @Input() autoInteval = 3000;

  selectedIndex = 0;

  constructor() { }

  ngOnInit() {
    this.autoSlideTime();
  }

  selectImage(index: number) {
    this.selectedIndex = index;
  }

  onPrevClick(): void{
    if(this.selectedIndex === 0){
      this.selectedIndex = this.contentData.length - 1;
    }else{
      this.selectedIndex--;
    }
  }

  onNextClick(): void{
    if(this.selectedIndex === this.contentData.length - 1){
       this.selectedIndex = 0;
    }else{
      this.selectedIndex++;
    }
  }

  autoSlideTime(): void{
    if(this.autoSlide){
      this.autoSlideImages();
    }
  }

  autoSlideImages(){
    setInterval(() => {
      this.onNextClick();
    }, this.autoInteval);
  }

}
