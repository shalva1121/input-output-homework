import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { ChildComponent } from '../child-component/child-component';

@Component({
  selector: 'app-parent-component',
  imports: [ChildComponent, FormsModule, NgIf],
  templateUrl: './parent-component.html',
  styleUrl: './parent-component.css',
})
export class ParentComponent {
  parentText = 'Hello from Parent';
  question = 'How are you?';

  userName = '';

  replyFromChild = '';
  greetingFromChild = '';

  onReply(reply: string): void {
    this.replyFromChild = reply;
  }

  onGreeting(greeting: string): void {
    this.greetingFromChild = greeting;
  }
}
