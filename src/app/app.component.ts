import { Component } from '@angular/core';
import * as p5 from 'p5';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'p5js-graphic-components';

  private p5;

  constructor(){}

  ngOnInit() {
    this.createCanvas();
  }
  
  private createCanvas() {
    this.p5 = new p5(this.sketch);
  }
  
  private sketch(p: any) {
    let ball;
    let heightBall;
    let yPos;
    let grow;
    let move_down;
    let img;
    let increase_h;
    let increase_y;

    let speed = 0;
    let x = 240;
    let y = 0;

    let gravity = 0.5;

    let count;
    p.setup = () => {
      p.frameRate(20);
      p.createCanvas(600, 400);
      img = p.loadImage('assets/img/ball.png');
      heightBall = 100;
      yPos= 100;
      grow=false;
      increase_h = false;
      move_down=true;
      
      count=0;
    };
  
    p.draw = () => {
      p.background(p.color(255,255,255));
      p.fill(0);
      //p.ellipse(100, yPos, 100, heightBall);
      p.imageMode(p.CORNER);
      p.image(img, x, y, 100, heightBall);
      p.rect(0, p.height-2, p.width, 100);

      y = y + speed;
      speed = speed + gravity;

      if (y > p.height-100) {
        // Multiplying by -0.95 instead of -1 slows the square 
        // down each time it bounces (by decreasing speed).  
        // This is known as a "dampening" effect and is a more 
        // realistic simulation of the real world (without it, 
        // a ball would bounce forever).
        speed = speed * -0.95;
        y = p.height-100;
      }

      if(y>p.height-110 && y<p.height-90){
        if(heightBall<=80) {heightBall=100; console.log('grow');}
        else{heightBall=80; console.log('npt grow');}
      }

    };
  }

}
