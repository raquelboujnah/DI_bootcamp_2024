export class TodoList {
    constructor(){
        this.arr = []
    }
 
    addTask(taskDesc){
        const task = {
            description: taskDesc,
            completed: false
        }
        this.arr.push(task)
    }

    markTask(taskDesc){
        const task = this.arr.find(t => t.description === taskDesc);
        task.completed = true
    }

    displayTask(){
        this.arr.forEach(task => {
            console.log(`${task.description}, completed: ${task.completed}`);
        })
    }
}
