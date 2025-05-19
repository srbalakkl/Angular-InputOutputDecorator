import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {Child1Component} from "../child1/child1.component";
import {Child2Component} from "../child2/child2.component";

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [
    Child1Component,
    Child2Component
  ],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.sass'
})
export class ParentComponent implements OnInit,AfterViewInit{

  childVariableValue = '';

  getChildVariable($event: string) {
    this.childVariableValue = $event;
    // console.log("The Child Variable is ",$event)
  }

  @ViewChild(Child1Component) ChildComponentInstance!: Child1Component;

  ngOnInit() {
    // this.ChildComponentInstance.childVariable = 'Here Im Changing the child component value';
    // console.log(this.ChildComponentInstance.childVariable)
  }

  ngAfterViewInit(): void {
    this.ChildComponentInstance.childMessage = 'Here Im Changing the child component value';
    console.log(this.ChildComponentInstance.childMessage)
  }

}
