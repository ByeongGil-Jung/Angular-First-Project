import { Injectable, Inject } from '@angular/core';
import { LOG_LEVEL_TOKEN } from "./app.tokens";
import { LogLevel } from "./log-level.enum";
import { LoggerService } from "./logger-service";

// MySpecialLoggerService 와 동일한 메서드를 갖지만, 시간 정보를 출력하지 않고 로그 히스토리를 저장하지 않는다.
@Injectable()
export class AnotherLoggerService extends LoggerService {

  constructor(@Inject(LOG_LEVEL_TOKEN) logLevel: LogLevel) {
    super(logLevel);
  }

  log(logLevel: LogLevel, msg: string) {
    const logMsg = this.getFormattedLogMsg(logLevel, msg);
    if (this.isProperLogLevel(logLevel)) {
      console.log(logMsg);
    }
  }

  private getFormattedLogMsg(logLevel: LogLevel, msg: string) {
    return `[${LogLevel[logLevel]}] - ${msg}`;
  }

}
