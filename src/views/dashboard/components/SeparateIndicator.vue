<template>
  <v-card class="indicator" >

    <v-card-text class="text-center">
      <v-icon :color="config.color" size="56" >
        {{ config.icon }}
      </v-icon>
      <div class="pa-2 title">{{ config.count }}</div>
      <div class="font-weight-bold pt-3 title">{{ config.title }}</div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: ['config'],
};
</script>

