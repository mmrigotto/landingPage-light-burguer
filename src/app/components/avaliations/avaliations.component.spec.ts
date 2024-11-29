import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvaliationsComponent } from './avaliations.component';

describe('AvaliationsComponent', () => {
  let component: AvaliationsComponent;
  let fixture: ComponentFixture<AvaliationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AvaliationsComponent]
    });
    fixture = TestBed.createComponent(AvaliationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
