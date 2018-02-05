import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';


import { MouseTrackZoneComponent } from "./mouse-track-zone/mouse-track-zone.component";
import { MySpecialLoggerService } from "./my-special-logger.service";
import { AnotherLoggerService } from "./another-logger.service";
import { LOG_LEVEL_TOKEN } from "./app.tokens";
import { LogLevel } from "./log-level.enum";

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        MouseTrackZoneComponent
      ],
      providers: [
        MySpecialLoggerService,
        AnotherLoggerService,
        {provide: LOG_LEVEL_TOKEN, useValue: LogLevel.INFO}
      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'mpl'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('mpl');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('mpl');
  }));
});
