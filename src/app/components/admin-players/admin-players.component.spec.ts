import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPlayersComponent } from './admin-players.component';

describe('AdminPlayersComponent', () => {
  let component: AdminPlayersComponent;
  let fixture: ComponentFixture<AdminPlayersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminPlayersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminPlayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
