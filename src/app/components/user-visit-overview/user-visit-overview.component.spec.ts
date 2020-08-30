  
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserVisitOverviewComponent } from './user-visit-overview.component';

describe('UserVisitOverviewComponent', () => {
  let component: UserVisitOverviewComponent;
  let fixture: ComponentFixture<UserVisitOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserVisitOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserVisitOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});