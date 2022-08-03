import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add-items-input',
  templateUrl: './add-items-input.component.html',
  styleUrls: ['./add-items-input.component.scss'],
})
export class AddItemsInputComponent implements OnInit {
  @Output() public emitItemTaskList = new EventEmitter();

  public addItemTaskList: string = '';

  constructor() {}

  ngOnInit(): void {}

  public submitItemTaskList() {
    this.addItemTaskList = this.addItemTaskList.trim();
    if (!this.addItemTaskList) return;

    this.emitItemTaskList.emit(this.addItemTaskList);
    this.addItemTaskList = '';
  }
}
