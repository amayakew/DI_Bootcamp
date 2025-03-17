// In todo.js, define an ES6 module that exports a TodoList class.
// The TodoList class should have methods to add tasks, mark tasks as complete, and list all tasks.
// Export the TodoList class.

export class TodoList {
    tasks = [];

    addTask(taskName){
        const task = {name: taskName, isCompleted: false};
        this.tasks.push(task);
        console.log(task);
    };

    markTask(taskName){
        const task = this.tasks.find(task => task.name === taskName);
        task.isCompleted = true;
        console.log(task);
    };

    listAllTasks(){
        console.log(this.tasks);
    };
};