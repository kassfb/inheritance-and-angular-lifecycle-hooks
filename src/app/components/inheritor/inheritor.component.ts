import { Component, OnInit } from '@angular/core';
import {BaseComponent} from '../base/base.component';

@Component({
  selector: 'app-inheritor',
  templateUrl: './inheritor.component.html',
  styleUrls: ['./inheritor.component.scss']
})
export class InheritorComponent extends BaseComponent<string> implements OnInit {

  value = 'Clear me';

  constructor() {
    super();
  }

  ngOnInit(): void {
    console.log('InheritorComponent.ngOnInit');
    this.controlChangesHandler();
  }

  override ngOnDestroy() {
    console.log('InheritorComponent.ngOnDestroy');
    // Обязательно вызвать super.ngOnDestroy(); в наследнике.
    // Иначе ngOnDestroy перезапишется и в родителе (base.component) не будет вызван!
    // Для теста можно закоментировать строку super.ngOnDestroy(); и в консоли пропадут логи ngOnDestroy() из base.component.
    super.ngOnDestroy();
  }

}
