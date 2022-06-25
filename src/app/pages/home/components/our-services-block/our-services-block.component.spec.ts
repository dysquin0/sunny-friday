import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurServicesBlockComponent } from './our-services-block.component';

describe('OurServicesBlockComponent', () => {
  let component: OurServicesBlockComponent;
  let fixture: ComponentFixture<OurServicesBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurServicesBlockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurServicesBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
