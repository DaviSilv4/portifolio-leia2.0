import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-studyng',
  templateUrl: './modal-studyng.component.html',
  styleUrls: ['./modal-studyng.component.scss']
})
export class ModalStudyngComponent implements OnInit {

  @Input() toggle!: boolean;

  constructor() { }

  ngOnInit() {
  }

  public closeModal(): void {
    if(this.toggle === true) {
      this.toggle = false;
    }
    // this.toggle != true;
    console.log(this.toggle);
  }

}
