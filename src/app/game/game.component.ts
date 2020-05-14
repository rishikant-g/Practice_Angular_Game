import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  @Output() intervalFired = new EventEmitter<number>();
  interval;
  last_number = 0;
  constructor() { }

  ngOnInit(): void {
    
  }

  startGame(){
    this.interval = setInterval(() => {
      this.last_number++;
      this.intervalFired.emit(this.last_number);
    },1000);
  }

  pauseGame(){
    clearInterval(this.interval);
  }

}
