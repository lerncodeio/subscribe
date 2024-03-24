import { Component, inject } from '@angular/core';
import { Todo } from '../../modals/todo.modal';
import { TodoService } from '../../services/todo.service';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-todo-list-page',
    standalone: true,
    imports: [CommonModule],
    template: `
        <section>
            <h1>Todo List</h1>
            <ul>
                <li *ngFor="let todo of todoList">
                    <input
                        type="checkbox"
                        [checked]="todo.completed" />
                    <span>{{ todo.title }}</span>
                </li>
            </ul>
        </section>
    `,
    styleUrl: './todo-list-page.component.scss',
})
export class TodoListPageComponent {
    private todoService: TodoService = inject(TodoService);

    public todoList: Todo[] = [];

    //TODO retrieve todo list from TodoService and assign the response to todoList property
}
