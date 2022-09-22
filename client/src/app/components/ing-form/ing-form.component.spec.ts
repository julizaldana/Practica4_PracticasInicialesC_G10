import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngFormComponent } from './ing-form.component';

describe('IngFormComponent', () => {
  let component: IngFormComponent;
  let fixture: ComponentFixture<IngFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IngFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
