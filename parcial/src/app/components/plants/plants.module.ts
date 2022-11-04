import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlantsComponent } from './plants.component';

@NgModule({
  declarations: [PlantsComponent],
  imports: [CommonModule],
  exports: [PlantsComponent],
})
export class PlantsModule {}
