import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionAboutMainComponent } from './section-about-main.component';

describe('SectionAboutMainComponent', () => {
  let component: SectionAboutMainComponent;
  let fixture: ComponentFixture<SectionAboutMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionAboutMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionAboutMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
