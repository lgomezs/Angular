import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantillaComponent } from './plantilla.component';

describe('PlantillaComponent', () => {
  let component: PlantillaComponent;
  let fixture: ComponentFixture<PlantillaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlantillaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantillaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
