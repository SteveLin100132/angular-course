/**
 * 專案名稱： wcd-course
 * 部門代號： ML8100
 * 檔案說明： Welcome Component
 * @CREATE Wednesday, 2nd January 2019 10:14:29 pm
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.less']
})
export class WelcomeComponent implements OnInit {

  constructor() { }

  /**
   * @method public 初始化
   */
  ngOnInit() {
  }

}
