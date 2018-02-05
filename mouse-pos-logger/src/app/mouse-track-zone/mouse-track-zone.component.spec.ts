import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from "@angular/platform-browser";

import { MouseTrackZoneComponent } from './mouse-track-zone.component';
import { MySpecialLoggerService } from "../my-special-logger.service";
import { AnotherLoggerService } from "../another-logger.service";
import { LOG_LEVEL_TOKEN } from "../app.tokens";
import { LogLevel } from "../log-level.enum";

describe('MouseTrackZoneComponent', () => {
  let component: MouseTrackZoneComponent;
  let fixture: ComponentFixture<MouseTrackZoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MouseTrackZoneComponent ],
      providers: [
        MySpecialLoggerService,
        AnotherLoggerService,
        {provide: LOG_LEVEL_TOKEN, useValue: LogLevel.INFO}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MouseTrackZoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // 교재에 있는 테스트 추가 (여기선 inject 가 없다!! -> component 내 testing 이기 때문)
  it('마우스 클릭할 때마다 로그가 적재되어야 한다.', () => {
    expect(component).toBeTruthy();

    const trackZone = fixture.debugElement.query(By.css('.track-zone')); // 무슨 구문인지 잘 모르겠다.
    // ㄴ 교재에서 css 로 track-zone 을 클래스로 가진 div 태그를 trackZone 에 담는다는 의미임.
    trackZone.triggerEventHandler('click', { clientX: 1, clientY: 1 });
    expect((<MySpecialLoggerService>component.logger).logs.length).toEqual(1);

    trackZone.triggerEventHandler('click', { clientX: 100, clientY: 10 });
    trackZone.triggerEventHandler('click', { clientX: 200, clientY: 150 });
    // console.log((<MySpecialLoggerService>component.logger).logs);
    // expect((component.logger).logs.length) -> 이러면 에러난다. component 의 타입을 모르기 떄문인가?
    expect((<MySpecialLoggerService>component.logger).logs.length).toEqual(3);
  });
});
