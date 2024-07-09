import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogCategoryAddEditComponent } from './blog-category-add-edit.component';

describe('BlogCategoryAddEditComponent', () => {
  let component: BlogCategoryAddEditComponent;
  let fixture: ComponentFixture<BlogCategoryAddEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogCategoryAddEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogCategoryAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
