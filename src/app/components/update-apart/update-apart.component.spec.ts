import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateApartComponent } from './update-apart.component';

describe('UpdateApartComponent', () => {
  let component: UpdateApartComponent;
  let fixture: ComponentFixture<UpdateApartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateApartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateApartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
