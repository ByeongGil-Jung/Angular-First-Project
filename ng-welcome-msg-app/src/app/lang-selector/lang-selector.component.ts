import { Component, OnInit } from '@angular/core';

// i18n 과 의존성 주입으로 파라미터를 공유해야 함! 그래서 import 를 시키자.
import { I18nSupportService } from '../i18n-support.service';

// 메타데이터 import
import { LANG_METADATA } from '../lang-metadata';

@Component({
  selector: 'app-lang-selector',
  templateUrl: './lang-selector.component.html',
  styleUrls: ['./lang-selector.component.css']
})
export class LangSelectorComponent implements OnInit {

  langMetaData = LANG_METADATA;
  langCode: string;

  // 여기선 dependency injection을 통해 컴포넌트간 서로 공유하는 parameter 를 설정할 수 있다.
  constructor(public i18nSupporter: I18nSupportService) {
    // 교재 : this.langCode = i18nSupporter.langCode;
    i18nSupporter.langCode = this.langCode; // 이것이 의미적으로 더 맞음
  }

  ngOnInit() {
  }

  syncToService(code) {
    this.i18nSupporter.langCode = code;
  }
}
