import { Component } from '@angular/core';
import { MySpecialLoggerService } from './my-special-logger.service';
import { LogLevel } from './log-level.enum';


@Component({
  selector: 'mpl-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'mpl';
  logger: MySpecialLoggerService;

  constructor() {
    this.logger = new MySpecialLoggerService(LogLevel.INFO);
    this.testLoggerLevel();
  }

  testLoggerLevel() {
    console.log('==========Default(Info) Log Level==========');
    this.logger.debug('test logging... in debug');
    this.logger.info('test logging... in info');
    this.logger.warn('test logging... in warn');
    this.logger.error('test logginf... in error');

    this.logger.logLevel = LogLevel.DEBUG;
    console.log('==========Debug Log Level==========');
    this.logger.debug('test logging... in debug');
    this.logger.info('test logging... in info');
    this.logger.warn('test logging... in warn');
    this.logger.error('test logging... in error');

    this.logger.logLevel = LogLevel.WARN;
    console.log('==========Warn Log Level==========');
    this.logger.debug('test logging... in debug');
    this.logger.info('test logging... in info');
    this.logger.warn('test logging... in warn');
    this.logger.error('test logging... in error');

    this.logger.logLevel = LogLevel.ERROR;
    console.log('==========Error Log Level==========');
    this.logger.debug('test logging... in debug');
    this.logger.info('test logging... in info');
    this.logger.warn('test logging... in warn');
    this.logger.error('test logging... in error');
  }

  printDebugLog() {
    this.logger.debug("test dependency injector tree!");
    /*
    여기서 아무리 버튼을 눌러도 debug 로그가 출력되지 않는 이유는,
    의존성 주입기 트리로 mouse-track-zone 에만 의존성 주입을 할당하였기 때문이다.
     */
  }
}
