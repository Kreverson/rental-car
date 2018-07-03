import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarSortingComponent } from './car-sorting.component';

describe('CarSortingComponent', () => {
  let component: CarSortingComponent;
  let fixture: ComponentFixture<CarSortingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarSortingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarSortingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
