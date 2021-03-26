<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="4" style="border: 1px black solid">
        <h1>{{ task.text }}</h1> <v-text-field v-model.number="answer" type="number"></v-text-field>
        <v-btn depressed color="primary" v-on:click="checkAnswer(task, answer)">
          Проверить
        </v-btn>
        Result is {{ result }}
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import {MathTaskHelper} from "@/helpers/math-example-helper";

export default {

  name: 'Task',

  data: () => ({
    answer: null,
    result: false,
    task: {}
  }),

  created: function() {
    this.math = new MathTaskHelper()
    this.task = this.math.getTask()
  },

  methods: {
     checkAnswer: function (task, answer) {
       this.result = this.math.checkAnswer(task.id, answer)
       this.task = this.math.getTask()
       this.answer = null
     }
  },
}
</script>
