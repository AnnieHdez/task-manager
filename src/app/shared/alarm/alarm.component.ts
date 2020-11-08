import { EventEmitter, Output } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-alarm',
  templateUrl: './alarm.component.html',
  styleUrls: ['./alarm.component.css']
})
export class AlarmComponent implements OnInit {

  @Input() message: string;
  @Output() close = new EventEmitter<void>();
  @Output() accept = new EventEmitter<string>();

  ngOnInit(){}

  constructor(){ }

  onClose(){
    this.close.emit();
  }

  onAccept(title: string){
    console.log(this.message);
    this.accept.emit(title);
  }


}
