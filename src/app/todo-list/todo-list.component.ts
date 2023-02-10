import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TodoList, TodolistService } from '../todolist.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoListComponent {
  readonly obsState: Observable<TodoList>;
  public newItemLabel = "";

  constructor(private tdls: TodolistService) {
    this.obsState = tdls.observable;
  }

  appendNexItem(): void {
    this.tdls.create( this.newItemLabel );
    this.newItemLabel = "";
  }
}
