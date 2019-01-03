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

export const CODE2 = `<!-- 將 [formGroup] 屬性綁定 app.component.ts 中宣告的 FormGroup -->
<form [formGroup]="form">
  <label>帳號</label>
  <span *ngIf="form.controls.account.touched && form.controls.account.errors">
    <code *ngIf="form.controls.account.errors.required">必填</code>
  </span>

  <!-- 綁定 formControlsName -->
  <input type="text" formControlName="account">
  <input type="submit" [disabled]="form.invalid">
</form>`;
