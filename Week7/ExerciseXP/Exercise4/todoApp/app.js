// In app.js, import the TodoList class from the todo.js module.
// Create an instance of the TodoList class.
// Add a few tasks, mark some as complete, and list all tasks.
// Run app.js and verify that the todo list operations are working correctly.

import { TodoList } from "./todo.js";

const todoList = new TodoList();
todoList.addTask('buy fruits');
todoList.addTask('do homework');
todoList.addTask('do sport');

todoList.markTask('buy fruits');
todoList.markTask('do sport');

todoList.listAllTasks();