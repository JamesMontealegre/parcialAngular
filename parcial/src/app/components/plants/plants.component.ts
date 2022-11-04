import { Component, OnInit } from '@angular/core';
import { PlantService } from '../../services/plant.service';
import { IPlant } from '../../interfaces/plant.interface';

@Component({
  selector: 'app-plants',
  templateUrl: './plants.component.html',
  styleUrls: ['./plants.component.scss'],
})
export class PlantsComponent implements OnInit {
  plantsList: IPlant[] = [];
  numInPlants = 0;
  numOutPlants = 0;

  constructor(private plantsService: PlantService) {}

  ngOnInit(): void {
    this.getPlantsList().then((resp: any) => {
      this.plantsList = resp;
      this.getNumOfPlantsByType(this.plantsList);
    });
  }

  getPlantsList() {
    return new Promise((resolve) => {
      this.plantsService.getPlantsList().subscribe((response: IPlant[]) => {
        resolve(response);
      });
    });
  }

  getNumOfPlantsByType(array: IPlant[]) {
    array.forEach((element: IPlant) => {
      if (element.tipo === 'Interior') {
        this.numInPlants = this.numInPlants + 1;
      } else {
        this.numOutPlants = this.numOutPlants + 1;
      }
    });
  }
}
