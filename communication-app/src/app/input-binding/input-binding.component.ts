import { Component, OnInit, Input } from '@angular/core';
import { Client } from './client.model';

@Component({
  selector: 'app-input-binding',
  templateUrl: './input-binding.component.html',
  styleUrls: ['./input-binding.component.css']
})
export class InputBindingComponent implements OnInit {

  @Input() firstName: string;
  @Input() lastName: string;
  @Input() age: number;

  clients: Client[];

  constructor() {
    this.clients = [
      {id: 1, name: "Grima", age: 35},
      {id: 2, name: "jhon", age: 20},
      {id: 3, name: "Zica", age: 27},
      {id: 3, name: "Jovem ney", age: 25},
    ]
  }

  ngOnInit(): void {
  }

}
