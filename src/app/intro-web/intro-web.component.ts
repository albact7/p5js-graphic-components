import { Component, OnInit, Input } from '@angular/core';
import * as p5 from 'p5';

@Component({
  selector: 'app-intro-web',
  templateUrl: './intro-web.component.html',
  styleUrls: ['./intro-web.component.css']
})
export class IntroWebComponent implements OnInit {

  private p5;
  sketch;

  title= 'TÍTULO';

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
    
    let posX = 200;
    let posY = 200;
    let rectW = 500;
    let img;
    p.setup = () => {
      p.frameRate(24);
      p.createCanvas(window.innerWidth, window.innerHeight).parent('container');
      img = p.loadImage('../assets/img/title-back.jpg');
    };
    
    p.draw = () => {
      p.background(img, 0, 0);
      p.strokeWeight(0);
      //p.tint(127, 127);
      p.fill(p.color(0,0,0, 1));
      if(p.mouseX < posX-40){
        p.rect(posX-40, posY-110,0, 150);
      }else if(p.mouseX > (posX-40)+rectW){
        p.rect(posX-40, posY-110,rectW, 150)
      }else{
        p.rect(posX-40, posY-110,p.mouseX-(posX-40), 150)
      }
       
      //p.rect(posX-40, posY-110,p.mouseX-(posX-40), 150);
      //p.tint(255, 255);
      p.textSize(100);
      p.fill(p.color(0,0,0,0));
      p.stroke(255);
      p.strokeWeight(10);
      p.rect(posX-40, posY-110,rectW, 150);
      p.fill(255);
      p.strokeWeight(5);
      p.text(this.title, posX, posY);
    };
  }
  }


}
