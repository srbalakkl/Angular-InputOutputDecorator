import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ParentComponent} from "./parent/parent.component";

@Component({
    selector: 'app-root',
    imports: [CommonModule, ParentComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.sass'
})
export class AppComponent {
  title = 'Angular-IO-Decorator';
}
