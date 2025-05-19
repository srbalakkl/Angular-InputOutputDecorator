import {Component, computed, EventEmitter, Input, input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-child1',
  imports: [],
  templateUrl: './child1.component.html',
  styleUrl: './child1.component.sass'
})
export class Child1Component implements OnInit {

  @Input() childVariable = '';
  @Output() childVariable2 = new EventEmitter<string>();

  childMessage = "I'm Here..";

  ipSignalVar = input.required();

  ngOnInit() {
    console.log('The Child Variable is===', this.childVariable);
    console.log('The Signal Child Variable is===', this.ipSignalVar());
    let label = computed(() => `The slider's value is ${this.ipSignalVar()}`);
    console.log(label())

    this.childVariable2.emit('Child1')
  }



}
