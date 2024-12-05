import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendidosComponent } from './vendidos.component';

describe('VendidosComponent', () => {
  let component: VendidosComponent;
  let fixture: ComponentFixture<VendidosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VendidosComponent]
    });
    fixture = TestBed.createComponent(VendidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
