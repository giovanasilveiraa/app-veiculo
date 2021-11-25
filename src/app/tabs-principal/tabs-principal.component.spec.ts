import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsPrincipalComponent } from './tabs-principal.component';

describe('TabsPrincipalComponent', () => {
  let component: TabsPrincipalComponent;
  let fixture: ComponentFixture<TabsPrincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabsPrincipalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
