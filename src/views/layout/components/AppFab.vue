<template>
  <v-fab-transition>
    <v-btn
      large
      bottom
      right
      fab
      dark
      fixed
      color="red"
      v-show="show"
      @click="toTop" >
      <v-icon>mdi-arrow-up</v-icon>
    </v-btn>
  </v-fab-transition>
</template>

<script>
export default {
  name: "AppFab",

  data: () => ({
    show: false
  }),

  methods: {
    onScroll() {
      if (typeof window === "undefined") return
      const top = window.pageYOffset || document.documentElement.offsetTop || 0
      this.show = top > 300
    },
    toTop() {
      this.$vuetify.goTo(0)
    }
  }
}
</script>
