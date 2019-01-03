/**
 * 專案名稱： wcd-course
 * 部門代號： ML8100
 * 檔案說明： Code Card Component
 * @CREATE Thu Jan 03 2019 7:57:21 AM
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-code-card',
  templateUrl: './code-card.component.html',
  styleUrls: ['./code-card.component.less']
})
export class CodeCardComponent implements OnInit {

  @Input() title: string;
  @Input() code: string;

  public code1: string;

  constructor() { }

  /**
   * @method public 初始化
   */
  ngOnInit() {
  }

}
