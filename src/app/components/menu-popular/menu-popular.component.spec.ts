import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuPopularComponent } from './menu-popular.component';

describe('MenuPopularComponent', () => {
  let component: MenuPopularComponent;
  let fixture: ComponentFixture<MenuPopularComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuPopularComponent]
    });
    fixture = TestBed.createComponent(MenuPopularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
