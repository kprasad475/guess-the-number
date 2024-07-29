import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrl: './game.component.css',
  animations: [
    trigger('fadeIn', [
      state('void', style({ opacity: 0 })),
      transition('void => *', [
        animate(500)
      ])
    ])
  ]
})
export class GameComponent {

  targetNumber:number;
  guess:number;
  message:string;


  constructor(){
    this.newGame();
  }


  newGame(){
    this.targetNumber = Math.floor(Math.random() * 100)+1;
    this.guess = 0;
    this.message = '';

  }

  checkGuess():void{
if(this.guess < this.targetNumber){
  this.message = 'too low';
} else if (this.guess > this.targetNumber){
this.message = 'too high'
}
else{
  this.message = 'Correct ! you guessed the number !';
}
  }

}
