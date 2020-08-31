import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { LogOutButtonComponent } from 'src/app/components/header/log-out-button/log-out-button.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        declarations: [ HomeComponent ]
    })
    .compileComponents();
  }));
  
describe('LogOutButtonComponent', () => {
  let component: LogOutButtonComponent;
  let fixture: ComponentFixture<LogOutButtonComponent>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LogOutButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

    it('should create', () => {
      expect(component).toBeTruthy();
    });
});})