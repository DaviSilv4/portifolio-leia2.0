import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortifolioContainerComponent } from './components/container/portifolio.container.component';
import { PortifolioViewComponent } from './components/view/portifolio.view.component';
import { CarroseulComponent } from '../shared/carroseul/carroseul.component';
import { ModalStudyngComponent } from '../shared/modal-studyng/modal-studyng.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    PortifolioContainerComponent,
    PortifolioViewComponent,
    CarroseulComponent,
    ModalStudyngComponent
  ],
  exports: [PortifolioContainerComponent]
})
export class PortifolioModule { }
