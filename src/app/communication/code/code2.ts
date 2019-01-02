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

export const CODE2 = `export class AComponent implements OnInit {

  @Output() status: EventEmitter<boolean>;

  constructor() {
    this.status = new EventEmitter<boolean>;
  }

  ngOnInit() {
    this.status.emit(true);
  }

}`;

