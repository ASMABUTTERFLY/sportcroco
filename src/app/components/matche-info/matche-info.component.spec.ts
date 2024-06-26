import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatcheInfoComponent } from './matche-info.component';

describe('MatcheInfoComponent', () => {
  let component: MatcheInfoComponent;
  let fixture: ComponentFixture<MatcheInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatcheInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatcheInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
