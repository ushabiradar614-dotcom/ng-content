import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-get-confirm',
  templateUrl: './get-confirm.component.html',
  styleUrls: ['./get-confirm.component.scss']
})
export class GetConfirmComponent implements OnInit {
// @Output() emitHideFlag : EventEmitter<boolean> = new  EventEmitter<boolean>();
@Output() emitApiFlag : EventEmitter<boolean>= new EventEmitter<boolean>();
  constructor() { }

  ngOnInit(): void {
  }
  onClose(confirmFlag: boolean){
  //  this.emitHideFlag.emit(false)
   this.emitApiFlag.emit(confirmFlag)
  }

}
