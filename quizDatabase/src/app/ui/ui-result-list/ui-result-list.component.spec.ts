import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiResultListComponent } from './ui-result-list.component';

describe('UiResultListComponent', () => {
  let component: UiResultListComponent;
  let fixture: ComponentFixture<UiResultListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiResultListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UiResultListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
