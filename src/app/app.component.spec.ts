import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { EventsAppComponent } from './events.app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        EventsAppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(EventsAppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Angular'`, () => {
    const fixture = TestBed.createComponent(EventsAppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Angular');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(EventsAppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to Angular!');
  });
});
