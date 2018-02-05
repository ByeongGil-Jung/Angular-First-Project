import { Component, OnInit, Host, Optional } from '@angular/core';
import { MySpecialLoggerService } from '../my-special-logger.service';
import { LogLevel } from '../log-level.enum';
import { LOG_LEVEL_TOKEN } from "../app.tokens";
import { AnotherLoggerService } from "../another-logger.service";
import { LoggerService } from "../logger-service";

@Component({
  selector: 'mpl-mouse-track-zone',
  templateUrl: './mouse-track-zone.component.html',
  styleUrls: ['./mouse-track-zone.component.css'],
  providers: [MySpecialLoggerService, {provide: LOG_LEVEL_TOKEN, useValue: LogLevel.DEBUG}]
  /*
  (위의 providers 를 주석 처리 할 경우)
  만약 생성자에서 @Host() 만 있고, @Optional() 이 없으면 에러 발생.
  >> @Host() 제약으로 앵귤러의 의존성 주입기가 MouseTrackZoneComponent 의 의존성 정보만 찾아서 안됨...

  여기서 @Host() @Optional() 을 해줄 경우, 위 providers 를 주석 처리해도 돌아감.
  >> @Optional() 은 존재하지 않으면 null 로 받아들여, 주입받지 않아도 되도록 처리되기 때문.
   */
})
export class MouseTrackZoneComponent implements OnInit {
  logger: LoggerService;

  constructor(
    @Host() @Optional() mySpecialLogger: MySpecialLoggerService,
    /*

     */
    anotherLogger: AnotherLoggerService
  ) {
    this.logger = mySpecialLogger ? mySpecialLogger : anotherLogger;
  }

  ngOnInit() {
  }

  captureMousePos($event: MouseEvent) {
    // this.logger.debug('click event occured');
    const pos = [$event.clientX, $event.clientY];
    this.logger.info(`x:${pos[0]} y:${pos[1]}`);
  }

}
