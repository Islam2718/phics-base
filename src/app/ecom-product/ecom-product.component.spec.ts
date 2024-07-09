import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcomProductComponent } from './ecom-product.component';

describe('EcomProductComponent', () => {
  let component: EcomProductComponent;
  let fixture: ComponentFixture<EcomProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EcomProductComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EcomProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
