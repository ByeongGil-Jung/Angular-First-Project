import { TestBed, inject } from '@angular/core/testing';

import { MySpecialLoggerService } from './my-special-logger.service';
import {LOG_LEVEL_TOKEN} from "./app.tokens";
import {LogLevel} from "./log-level.enum";

describe('MySpecialLoggerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MySpecialLoggerService, {provide: LOG_LEVEL_TOKEN, useValue: LogLevel.INFO}]
    });
  });

  it('should be created', inject([MySpecialLoggerService], (service: MySpecialLoggerService) => {
    expect(service).toBeTruthy();
  }));

  // 교재용 테스트 추가.
  it('최초 로그 레벨은 LOG_LEVEL_TOKEN 에서 선안한 값이어야 한다.',
    inject([MySpecialLoggerService], (service: MySpecialLoggerService) => {
      expect(service).toBeTruthy();
      expect(service.logLevel).toEqual(LogLevel.INFO);
    }));

  it('로그 레벨에 따라 저장되는 로그의 수가 정확하게 일치하여야 한다.',
    inject([MySpecialLoggerService], (service: MySpecialLoggerService) => {
      service.info('test1');
      service.info('test2');
      expect(service.logs.length).toEqual(2);

      service.debug("can't be printed...");
      expect(service.logs.length).toEqual(2);

      service.logLevel = LogLevel.ERROR;
      service.debug("can't be printed...");
      service.info("can't be printed...");
      service.warn("can't be printed...");
      expect(service.logs.length).toEqual(2);

      service.error('test 3');
      expect(service.logs.length).toEqual(3);

      /*
      여기서는 default(info) 에서 info 로그가 추가 될 경우 배열에 push 되는 것과,
      error 상태에서 그 미만 단계 로그가 추가 될 경우 push 가 되지 않고, error 인 경우만 배열에 push 가 됨을 expect 한 것이다.
       */
    }))
});
