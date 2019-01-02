/**
 * 專案名稱： wcd-course
 * 部門代號： ML8100
 * 檔案說明： Structural Directives Component
 * @CREATE Wednesday, 2nd January 2019 9:49:09 pm
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */

import { Component, OnInit } from '@angular/core';

import { HighlightResult } from 'ngx-highlightjs';

import { CODE1 } from './code/code1';
import { CODE2 } from './code/code2';
import { CODE3 } from './code/code3';

@Component({
  selector: 'app-structural-directives',
  templateUrl: './structural-directives.component.html',
  styleUrls: ['./structural-directives.component.less']
})
export class StructuralDirectivesComponent implements OnInit {

  public code1: string;
  public code2: string;
  public code3: string;

  constructor() {
    this.code1 = CODE1;
    this.code2 = CODE2;
    this.code3 = CODE3;
  }

  /**
   * @method public 初始化
   */
  ngOnInit() {
    this.codeImplement();
  }

  /**
   * @method public 將code寫在這
   * TODO:
   */
  codeImplement(): void {

  }

}
