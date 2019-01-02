/**
 * 專案名稱： wcd-course
 * 部門代號： ML8100
 * 檔案說明： Communication Component
 * @CREATE Wednesday, 2nd January 2019 11:44:24 pm
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */

import { Component, OnInit } from '@angular/core';

import { CODE1 } from './code/code1';
import { CODE2 } from './code/code2';

@Component({
  selector: 'app-communication',
  templateUrl: './communication.component.html',
  styleUrls: ['./communication.component.less']
})
export class CommunicationComponent implements OnInit {

  public code1: string;
  public code2: string;

  constructor() {
    this.code1 = CODE1;
    this.code2 = CODE2;
  }

  /**
   * @method public 初始化
   */
  ngOnInit() {
  }

}
