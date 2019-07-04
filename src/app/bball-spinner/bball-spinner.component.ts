import { Component, Input } from '@angular/core';
import * as p5 from 'p5';

@Component({
  selector: 'app-bball-spinner',
  templateUrl: './bball-spinner.component.html',
  styleUrls: ['./bball-spinner.component.css'] 
})
export class BballSpinnerComponent {
  private p5;
  sketch;
  @Input() red_background = 255;
  @Input() green_background = 255;
  @Input() blue_background = 255;

  @Input() margin_left='35vw';
  @Input() margin_top='15vw';

  constructor(){}

  ngOnInit() {

    this.createCanvas();
  }
  
  private createCanvas() {
    this.sketchP();
    this.p5 = new p5(this.sketch);
  }
  
  private sketchP() {
    this.sketch = (p) =>{
    let heightBall;
    let img;
    let posX = 300;

    let speed = 0;
    let x = posX/2;
    let y = 2;

    let gravity = 0.5;
    let scale = 30;
    let scaleStep = -1.5;
    
    p.setup = () => {
      p.frameRate(10);
      p.createCanvas(posX+100, 400).parent('container');
      img = p.loadImage('../assets/img/ball.png');
      heightBall = 100; 
    };
    
    p.draw = () => {
      p.background(p.color(this.red_background, this.green_background, this.blue_background));
      p.fill(p.color(227, 227, 227));
      p.stroke(p.color(227, 227, 227));
      p.imageMode(p.CORNER);
      scale = scale - scaleStep;
      p.ellipse(x+50,p.height-25, scale, scale-scale/1.5);
      p.image(img, x, y, 100, heightBall);

      y = y + speed;
      speed = speed + gravity;

      if (y > p.height-100) {
        speed = speed * -1;
        y = p.height-100;
        scaleStep = scaleStep *-1;
      }
      if(y<0){
        scaleStep = scaleStep *-1;
        y=0;
        speed = speed * -1;
      }

      if(y >= p.height-120 && y <= p.height-101){
        heightBall=80;
      }
      if(y >= p.height-140 && y <= p.height-121){
        heightBall=100;
      }
    };
  }
  }

}