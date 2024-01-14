import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliedPanelComponent } from './slied-panel.component';

describe('SliedPanelComponent', () => {
  let component: SliedPanelComponent;
  let fixture: ComponentFixture<SliedPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SliedPanelComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SliedPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
