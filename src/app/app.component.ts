import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  public increment = 0;

  adicionar(){
    this.increment ++;
  }
  diminuir(){
    this.increment --;
  }
}
