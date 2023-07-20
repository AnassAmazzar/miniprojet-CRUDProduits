import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductByidComponent } from './product-byid.component';

describe('ProductByidComponent', () => {
  let component: ProductByidComponent;
  let fixture: ComponentFixture<ProductByidComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductByidComponent]
    });
    fixture = TestBed.createComponent(ProductByidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
