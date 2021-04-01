import tasks from './data/tasks.json'

class MathTaskHelper {
    tasks;

    constructor() {
        this.tasks = tasks.map((val) => {
            return new Task(val.text, val.answer)
        })
    }

    getTask() {
        let index = Math.floor(Math.random() * Math.floor(this.tasks.length))
        return this.tasks[index];
    }

}

class Task {
    text;
    answer;

    constructor(text, answer) {
        this.text = text
        this.answer = answer
    }

    checkAnswer(answer) {
        return this.answer === answer
    }
}

export {MathTaskHelper, Task}