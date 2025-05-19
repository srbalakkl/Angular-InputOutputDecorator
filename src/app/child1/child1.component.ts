import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-child1',
  standalone: true,
  imports: [],
  templateUrl: './child1.component.html',
  styleUrl: './child1.component.sass'
})
export class Child1Component implements OnInit{

  @Input() childVariable = '';
  @Output() childVariable2 = new EventEmitter<string>();

  childMessage = "I'm Here..";

  ngOnInit(){
    this.childVariable2.emit('Child1')
  }

}
