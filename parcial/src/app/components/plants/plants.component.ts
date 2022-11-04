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
  aux: IPlant[] = [];
  numInPlants = 0;
  numOutPlants = 0;

  constructor(private plantsService: PlantService) {}

  ngOnInit(): void {
    this.getPlantsList();
    this.getNumOfPlantsByType();
  }

  getPlantsList() {
    return new Promise((resolve) => {
      this.plantsService.getPlantsList().subscribe((response: IPlant[]) => {
        this.plantsList = response;
        resolve(this.plantsList);
      });
    });
  }

  getNumOfPlantsByType() {
    this.getPlantsList().then((response: any) => {
      this.aux = response;
      this.aux.forEach((element: IPlant) => {
        if (element.tipo === 'Interior') {
          this.numInPlants = this.numInPlants + 1;
        } else {
          this.numOutPlants = this.numOutPlants + 1;
        }
      });
    });
  }

  // }
}
