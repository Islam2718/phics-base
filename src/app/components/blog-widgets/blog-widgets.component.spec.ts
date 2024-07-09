import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogWidgetsComponent } from './blog-widgets.component';

describe('BlogWidgetsComponent', () => {
  let component: BlogWidgetsComponent;
  let fixture: ComponentFixture<BlogWidgetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogWidgetsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogWidgetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
