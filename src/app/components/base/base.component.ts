import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {debounceTime, distinctUntilChanged, ReplaySubject, takeUntil} from 'rxjs';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-base',
  template: '',
})
export abstract class BaseComponent<TData> implements OnDestroy {

  protected _control?: FormControl;
  get control(): FormControl {
    return this._control ?? new FormControl();
  }
  @Input()
  set control(formControl: FormControl) {
    this._control = formControl;
  }
  private readonly destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);
  protected constructor() {
    console.log('BaseComponent.constructor');
  }

  // ngOnInit(): void {
  //   console.log('BaseComponent.ngOnInit');
  // }

  protected controlChangesHandler(): void {
    this.control.valueChanges.pipe(
        debounceTime(500),
        distinctUntilChanged(),
        takeUntil(this.destroyed$)
    ).subscribe(value => console.log('valueChanges', value));
  }

  ngOnDestroy(): void {
    console.log('BaseComponent.ngOnDestroy');
    this.destroyed$.next(true);
    this.destroyed$.complete();
    console.log('BaseComponent.ngOnDestroy complete');
  }

}
