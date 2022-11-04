import { getTestBed, TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { PlantService } from './plant.service';

describe('PlantService', () => {
  let plantsService: PlantService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PlantService],
    });
    plantsService = TestBed.inject(PlantService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
    getTestBed().resetTestingModule();
  });
  it('should be created', () => {
    expect(plantsService).toBeTruthy();
  });
});
