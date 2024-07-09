import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcomProductCategoryComponent } from './ecom-product-category.component';

describe('EcomProductCategoryComponent', () => {
  let component: EcomProductCategoryComponent;
  let fixture: ComponentFixture<EcomProductCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EcomProductCategoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EcomProductCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
