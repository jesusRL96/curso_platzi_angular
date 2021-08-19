import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'platzi-store';
  items = ['nicolas', 'julian', 'pepe'];

  addItem(){
    this.items.push('nuevo item');
  }
  deleteItem(index: number){
    this.items.splice(index,1);
  }
}
