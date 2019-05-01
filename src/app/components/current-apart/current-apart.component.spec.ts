import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentApartComponent } from './current-apart.component';

describe('CurrentApartComponent', () => {
  let component: CurrentApartComponent;
  let fixture: ComponentFixture<CurrentApartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentApartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentApartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
