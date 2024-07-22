import { TodoList } from "./todo.js";

const todo = new TodoList()
todo.addTask('Faire ma chambre')
todo.addTask('vider la lave vaisselle')
todo.addTask('plier le linge')
todo.addTask('Faire a manger')

todo.markTask('Faire ma chambre')
todo.markTask('vider la lave vaisselle')
todo.displayTask()

