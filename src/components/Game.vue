<template>
  <v-container>
    <v-img src="../assets/background.jpg">
      <v-row class="text-center">
        <v-col cols="12" style="border: 1px black solid">
          <Task/>
        </v-col>
      </v-row>
      <v-row class="text-center">
        <v-col class="mb-4" style="border: 1px red solid">
          <BattleArea/>
        </v-col>
      </v-row>
    </v-img>
  </v-container>

</template>

<script>
import BattleArea from './BattleArea';
import Task from './Task';

export default {
  name: 'Game',

  components: {
    BattleArea,
    Task
  },

  data: () => ({
    //
  }),
}
</script>
