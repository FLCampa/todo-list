import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddItemsInputComponent } from './add-items-input.component';

describe('AddItemsInputComponent', () => {
  let component: AddItemsInputComponent;
  let fixture: ComponentFixture<AddItemsInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddItemsInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddItemsInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
