import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageFlight } from './manage-flight';

describe('ManageFlight', () => {
  let component: ManageFlight;
  let fixture: ComponentFixture<ManageFlight>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ManageFlight]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageFlight);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
