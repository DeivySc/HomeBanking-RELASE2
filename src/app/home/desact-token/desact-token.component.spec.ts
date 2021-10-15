import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesactTokenComponent } from './desact-token.component';

describe('DesactTokenComponent', () => {
  let component: DesactTokenComponent;
  let fixture: ComponentFixture<DesactTokenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesactTokenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DesactTokenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
