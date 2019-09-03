<template>
  <v-content class="app-content-wrapper ">
    <app-level-bar/>

    <v-container fluid >
      <v-fade-transition mode="out-in">
        <router-view />
      </v-fade-transition>
    </v-container>
  </v-content>
</template>

<script>
import AppLevelBar from './AppLevelBar.vue';

export default {
  name: 'AppMain',
  components: {
    AppLevelBar
  },
  methods: {
  }
};
</script>
<style scoped lang="scss">


</style>
