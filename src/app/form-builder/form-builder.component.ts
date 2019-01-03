/**
 * 專案名稱： wcd-course
 * 部門代號： ML8100
 * 檔案說明： Form Builder Component
 * @CREATE Thu Jan 03 2019 8:07:49 AM
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */

import { Component, OnInit } from '@angular/core';

import { CODE1 } from './code/code1';
import { CODE2 } from './code/code2';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.less']
})
export class FormBuilderComponent implements OnInit {

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
