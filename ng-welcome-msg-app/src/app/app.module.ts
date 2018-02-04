import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { WelcomeMsgComponent } from './welcome-msg/welcome-msg.component';
import { LangSelectorComponent } from './lang-selector/lang-selector.component';


// ngModel 사용을 위한 FormsModule import
import { FormsModule } from '@angular/forms';

// 원활한 한글 양방향 바인딩을 위한 COMPOSITION_BUFFER_MODE import
import { COMPOSITION_BUFFER_MODE } from '@angular/forms';

////

// I18nSupportService import
import { I18nSupportService } from './i18n-support.service';
import { LangSelectorBtnPipe } from './lang-selector/lang-selector-btn.pipe';

// 애니메이션 및 matrial 패키지 import
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatSnackBarModule, MatCardModule, MatInputModule, MatRadioModule, MatButtonModule } from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeMsgComponent,
    LangSelectorBtnPipe,
    LangSelectorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    // 애니메이션 및 material
    BrowserAnimationsModule,
    MatToolbarModule, MatSnackBarModule, MatCardModule, MatInputModule, MatRadioModule, MatButtonModule
  ],
  providers: [
      I18nSupportService,
      {provide: COMPOSITION_BUFFER_MODE, useValue: false}
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
