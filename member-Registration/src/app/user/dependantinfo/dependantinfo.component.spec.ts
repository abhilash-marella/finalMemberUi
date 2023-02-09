import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DependantinfoComponent } from './dependantinfo.component';

describe('DependantinfoComponent', () => {
  let component: DependantinfoComponent;
  let fixture: ComponentFixture<DependantinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DependantinfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DependantinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
