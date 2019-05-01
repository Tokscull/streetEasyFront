import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddApartComponent } from './add-apart.component';

describe('AddApartComponent', () => {
  let component: AddApartComponent;
  let fixture: ComponentFixture<AddApartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddApartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddApartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
