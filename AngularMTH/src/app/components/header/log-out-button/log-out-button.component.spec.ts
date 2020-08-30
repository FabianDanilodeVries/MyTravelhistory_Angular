import { async, ComponentFixture, TestBed } from '@angular/core/testing';

<<<<<<< HEAD:AngularMTH/src/app/components/home/home.component.spec.ts
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ]
=======
import { LogOutButtonComponent } from './log-out-button.component';

describe('LogOutButtonComponent', () => {
  let component: LogOutButtonComponent;
  let fixture: ComponentFixture<LogOutButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogOutButtonComponent ]
>>>>>>> 21cacc296f79cac8ccb6f771a79d28ac7cd0b346:AngularMTH/src/app/components/header/log-out-button/log-out-button.component.spec.ts
    })
    .compileComponents();
  }));

  beforeEach(() => {
<<<<<<< HEAD:AngularMTH/src/app/components/home/home.component.spec.ts
    fixture = TestBed.createComponent(HomeComponent);
=======
    fixture = TestBed.createComponent(LogOutButtonComponent);
>>>>>>> 21cacc296f79cac8ccb6f771a79d28ac7cd0b346:AngularMTH/src/app/components/header/log-out-button/log-out-button.component.spec.ts
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
