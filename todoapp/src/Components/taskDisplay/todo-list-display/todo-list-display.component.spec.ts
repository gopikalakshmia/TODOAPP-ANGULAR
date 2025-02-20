import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListDisplayComponent } from './todo-list-display.component';

describe('TodoListDisplayComponent', () => {
  let component: TodoListDisplayComponent;
  let fixture: ComponentFixture<TodoListDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoListDisplayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoListDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
