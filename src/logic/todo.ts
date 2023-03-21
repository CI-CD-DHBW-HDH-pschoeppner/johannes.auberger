import { writable } from "svelte/store";
import { v4 as uuidv4 } from 'uuid';

export class TodoItem {
  id = "";
  value = "";
  done = false;
}

// this function must return a unique ID every time it is called
export function generateID(): string {
    // TODO: implement // DONE
    return uuidv4();
}

// make sure, that
// the value isn't longer than 255 characters
// the value isn' empty
// the todo isn't contained in the todos array (case insensitive)
export function validateTodo(todo: TodoItem, todos: TodoItem[]): boolean {
  // TODO: implement // DONE
  if(todo.value.length > 255 || todo.value.replaceAll(" ","").length === 0 || 
    todos.some(t => t.value.toLowerCase() === todo.value.toLowerCase())){
    return false;
  }
  return true;
}

// capitalize the first letter of the todo
export function formatTodo(todo: TodoItem): TodoItem {
  // TODO: implement // DONE
  return {
    id: todo.id,
    value: todo.value.charAt(0).toUpperCase() + todo.value.slice(1),
    done: todo.done
  }
}

// generate a random rgb color
// each value (r,g,b) should be between 50 and 150
export function generateColor(): string {
  // TODO: implement // DONE
  const r = Math.floor(Math.random() * 100) + 50;
  const g = Math.floor(Math.random() * 100) + 50;
  const b = Math.floor(Math.random() * 100) + 50;
  return "rgb(" + r + "," + g + "," + b + ")";
}

export const todoList = writable<TodoItem[]>([]);
