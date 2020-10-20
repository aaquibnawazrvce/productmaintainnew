import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuppliermaintainComponent } from './suppliermaintain.component';

describe('SuppliermaintainComponent', () => {
  let component: SuppliermaintainComponent;
  let fixture: ComponentFixture<SuppliermaintainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuppliermaintainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuppliermaintainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
