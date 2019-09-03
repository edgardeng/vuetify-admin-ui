<template>
  <v-app id="app-inspire" class="app dashboard">
    <app-drawer ref="drawer"></app-drawer>
    <app-toolbar class="app--toolbar" @toggle-sidebar="toggleSidebar"></app-toolbar>
    <app-main > </app-main>
    <!-- Go to top -->
    <app-fab ref="fab"> </app-fab>
  </v-app>
</template>

<script>
  import AppDrawer from "./components/AppNavDrawer"
  import AppToolbar from "./components/AppNavBar"
  import AppFab from "./components/AppFab"
  import AppMain from "./components/AppMain"

  export default {
    components: {
      AppDrawer,
      AppToolbar,
      AppFab,
      AppMain
    },
    data() {
      return {
        showDrawer: true
      }
    },
    mounted () {
      window.addEventListener('scroll', this.handleScroll)
    },
    methods: {
      toggleSidebar() {
        if (this.$refs.drawer) {
          this.$refs.drawer.toggleSidebar()
        }
      },
      handleScroll () {
        if (this.$refs.fab) {
          this.$refs.fab.onScroll()
        }
      },
      destroyed () {
        window.removeEventListener('scroll', this.handleScroll);   //  离开页面清除（移除）滚轮滚动事件
      }
    },
    created() {}
  }
</script>
<style lang="scss">
  @import "@/assets/style/_layout.scss";
</style>

