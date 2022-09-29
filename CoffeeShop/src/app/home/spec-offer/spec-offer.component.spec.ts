import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecOfferComponent } from './spec-offer.component';

describe('SpecOfferComponent', () => {
  let component: SpecOfferComponent;
  let fixture: ComponentFixture<SpecOfferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecOfferComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
