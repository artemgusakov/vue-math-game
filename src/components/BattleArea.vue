<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="4" style="border: 1px black solid">
        <h1>Player</h1>
        <Player/>
      </v-col>
      <v-spacer></v-spacer>
      <v-col cols="4" style="border: 1px black solid">
        <h1>Monster</h1>
        <Player/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Player from "@/components/player/Player";

export default {

  name: 'BattleArea',
  components: {Player},
  comments: [
      Player
  ],

  data: () => ({
    //
  }),
}
</script>
