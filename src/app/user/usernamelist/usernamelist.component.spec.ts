import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsernamelistComponent } from './usernamelist.component';

describe('UsernamelistComponent', () => {
  let component: UsernamelistComponent;
  let fixture: ComponentFixture<UsernamelistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsernamelistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsernamelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
