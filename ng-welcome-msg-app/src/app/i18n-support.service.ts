import { Injectable } from '@angular/core';

// 메타데이터 사용을 위한 import
import { LANG_METADATA } from './lang-metadata';

@Injectable()
export class I18nSupportService {
  langCode = 'ko';
  // private welcomeMsg;

  constructor() {
    /*
    this.welcomeMsg = {
      'ko': '안녕하세요',
      'en': 'Hello',
      'jp': '오하이오',
      'fr': '봉주르~'
    };
    */
  }

  getWelcomeMsgByCode(userName: string) {
    /*
    const helloMsg = this.welcomeMsg[this.langCode];
    return `${helloMsg}, ${userName}!`;
    */

    // 메타데이터 추가 후
    const langData = LANG_METADATA.find(lang => lang.code === this.langCode); // LANG_METADATA 는 JSON 형식이다
    console.log(langData);
    return `${langData.msg}, ${userName}!`;
  }

}
