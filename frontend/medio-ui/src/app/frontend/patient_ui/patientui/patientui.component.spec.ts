import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PatientuiComponent } from './patientui.component';



describe('PatientuiComponent', () => {
  let component: PatientuiComponent;
  let fixture: ComponentFixture<PatientuiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientuiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientuiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
