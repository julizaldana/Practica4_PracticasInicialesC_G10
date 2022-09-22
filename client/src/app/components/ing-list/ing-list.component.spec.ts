import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngListComponent } from './ing-list.component';

describe('IngListComponent', () => {
  let component: IngListComponent;
  let fixture: ComponentFixture<IngListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IngListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
