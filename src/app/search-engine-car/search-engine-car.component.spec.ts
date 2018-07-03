import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchEngineCarComponent } from './search-engine-car.component';

describe('SearchEngineCarComponent', () => {
  let component: SearchEngineCarComponent;
  let fixture: ComponentFixture<SearchEngineCarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchEngineCarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchEngineCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
