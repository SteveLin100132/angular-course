/**
 * 專案名稱： wcd-course
 * 部門代號： ML8100
 * 檔案說明： Code String
 * @CREATE Wednesday, 2nd January 2019 11:06:39 pm
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */

export const CODE1 = `<!-- 利用 #var 建立變數並給予ngForm，內建表單驗證的功能 -->
<form #myForm="ngForm">
  <label>帳號</label>
  <!-- touched 為第一次 focus 在輸入欄位後會轉為 true -->
  <span *ngIf="account.touched && account.errors">
    <code *ngIf="account.errors.required">必填</code>
  </span>

  <!-- 加入 ngModel 進行資料綁定，並給上 name 屬性定義 -->
  <!-- required 為驗證項目 -->
  <input type="text" #account="ngModel" ngModel
    name="account" required>

  <input type="submit" [disabled]="!myForm.valid">
</form>`;
