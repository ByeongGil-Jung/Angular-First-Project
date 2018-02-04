import { Component, AfterViewInit } from '@angular/core';

// 외부 서비스 import
import { I18nSupportService } from '../i18n-support.service';

// material import
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-welcome-msg',
  templateUrl: './welcome-msg.component.html',
  styleUrls: ['./welcome-msg.component.css']
})
export class WelcomeMsgComponent implements AfterViewInit {
  // 추가
  userName = ''; // userName 은 양방향 바인딩 [(ngModel)]="userName" 에 인해 밑의 메소드 없이 바로 변경된다. (매우 빠름)
  private valid = false;
  private CHK_KEYUP_WAIT_SEC = 5000;
  private welcomeMsg: string;

  // 왜 교재에선 static 으로 썼을까?

  // 밑에서 parameter 인자에 선언한 것이 의존성 주입 (Dependency Injection) 이다.
  constructor(public i18nSupporter: I18nSupportService, private snackbar: MatSnackBar) { }

  ngAfterViewInit() {
    const checkTouchedFn = () => {
      if (this.valid) { return; }
      // console.log('이름을 입력해주세요.');
      this.snackbar.open('이름을 입력해주세요.', '확인', {duration: 3000});
    };

    setTimeout(checkTouchedFn, this.CHK_KEYUP_WAIT_SEC); // private static 으로 쓰인 이상 this 는 안되나?
  }

  onChange() {
    this.valid = this.userName.length > 0;
  }

  showWelcomeMsg() {
    this.welcomeMsg = this.i18nSupporter.getWelcomeMsgByCode(this.userName);
  }


}
