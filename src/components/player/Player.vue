<template>
  <v-container>
    <v-row class="text-center">
      <v-col style="border: 1px black solid">
        <h2>{{ isMonster ? "Monster" : "Player" }} name</h2>
      </v-col>
    </v-row>

    <v-row class="text-center">
      <v-col style="border: 1px black solid">
        I'm <h2>{{ isMonster ? "monster" : "player" }}</h2> life bar
        <p> left {{ hp }} health points </p>
      </v-col>
    </v-row>
    <v-row class="text-center">
      <v-img v-if="isMonster" src="../../assets/battle-pose-mirror.gif">
        <v-col style="border: 1px black solid">
          I'm <h2>{{ isMonster ? "monster" : "player" }}</h2> model
        </v-col>
      </v-img>

      <v-img v-if="!isMonster" src="../../assets/battle-pose.gif">
        <v-col style="border: 1px black solid">
          I'm <h2>{{ isMonster ? "monster" : "player" }}</h2> model
        </v-col>
      </v-img>

    </v-row>
  </v-container>
</template>

<script>

export default {

  name: 'Player',

  props: {
    isMonster: Boolean,
    hp: {
      type: Number,
      default: 100
    }
  },

  data: () => ({

  }),
}
</script>
