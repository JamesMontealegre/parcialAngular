import { HttpClientModule } from '@angular/common/http';
import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlantService } from 'src/app/services/plant.service';

import { PlantsComponent } from './plants.component';
import { IPlant } from '../../interfaces/plant.interface';
import { faker } from '@faker-js/faker';
import { By } from '@angular/platform-browser';

describe('PlantsComponent', () => {
  let component: PlantsComponent;
  let fixture: ComponentFixture<PlantsComponent>;
  let debug: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [PlantsComponent],
      providers: [PlantService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantsComponent);
    component = fixture.componentInstance;

    for (let i = 0; i < 5; i++) {
      const plant: IPlant = {
        nombre_comun: faker.lorem.sentence(),
        tipo: faker.lorem.sentence(),
        clima: faker.lorem.sentence(),
      };
      component.plantsList.push(plant);
    }
    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should test length plants list', () => {
    component.getPlantsList().then((resp: any) => {
      expect(resp.length).toEqual(6);
      expect(resp[0]).toEqual(component.plantsList[0]);
    });
  });
});
