import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactoAddComponent } from './contacto-add.component';

describe('ContactoAddComponent', () => {
  let component: ContactoAddComponent;
  let fixture: ComponentFixture<ContactoAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactoAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactoAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
