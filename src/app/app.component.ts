import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'automataIngles2';
  currentState = 'S0';
  sentence = '';
  result = '';


  transitionTable: any = {
    S0: { I: 'S1', You: 'S2', He: 'S3', She: 'S3', It: 'S3', They: 'S2' },
    S1: { am: 'S5' },
    S2: { are: 'S5' },
    S3: { is: 'S5' },
  };

  checkSentence() {
    const words = this.sentence.trim().split(' ');
    const initialState = this.currentState;

    for (const word of words) {
      const nextState = this.transitionTable[this.currentState][word];
      if (!nextState) {
        this.result = 'No válido';
        return;
      }
      this.currentState = nextState;
    }

    if (this.currentState === 'S5') {
      this.result = 'Válido';
    } else {
      this.result = 'No válido';
    }

    this.currentState = initialState;
  }

  constructor() { }

  ngOnInit(): void {
  }
}
