import tasks from './data/tasks.json'

class MathTaskHelper {
    tasks;

    constructor() {
        this.tasks = tasks
    }

    getTask() {
        let index = Math.floor(Math.random() * Math.floor(this.tasks.length))
        return this.tasks[index];
    }

    checkAnswer(taskId, answer) {
        return this.tasks.find(value => value.id === taskId).answer === answer
    }

}

export {MathTaskHelper}