<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="4" style="border: 1px black solid">
        <Player v-bind:is-monster="false"/>
      </v-col>
      <v-spacer></v-spacer>
      <v-col cols="4" style="border: 1px black solid">
        <Player v-bind:is-monster="true"/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Player from "@/components/player/Player";

export default {

  name: 'BattleArea',
  components: {Player},

  data: () => ({
    //
  }),
}
</script>
