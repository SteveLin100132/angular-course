/**
 * 專案名稱： wcd-course
 * 部門代號： ML8100
 * 檔案說明： App Module
 * @CREATE Wednesday, 2nd January 2019 9:45:48 pm
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HighlightModule } from 'ngx-highlightjs';

import { AppComponent } from './app.component';
import { StructuralDirectivesComponent } from './structural-directives/structural-directives.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { CommunicationComponent } from './communication/communication.component';


import xml from 'highlight.js/lib/languages/xml';
import less from 'highlight.js/lib/languages/less';
import typescript from 'highlight.js/lib/languages/typescript';

export function hightlightSyntax() {
  return [
    { name: 'xml', func: xml },
    { name: 'less', func: less },
    { name: 'typescript', func: typescript }
  ];
}

@NgModule({
  declarations: [
    AppComponent,
    StructuralDirectivesComponent,
    SidebarComponent,
    WelcomeComponent,
    CommunicationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HighlightModule.forRoot({
      languages: hightlightSyntax
    })
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
