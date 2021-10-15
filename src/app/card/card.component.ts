import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  public image!: string;
  constructor() { }

  ngOnInit(): void {
    this.image = 'https://pbs.twimg.com/media/Dybd_Y9XQAAiItW?format=jpg&name=900x900'
    console.log('Llamando componente');
  }

}
