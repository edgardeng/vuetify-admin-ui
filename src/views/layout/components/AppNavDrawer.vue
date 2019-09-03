<template>
  <v-navigation-drawer class="app-drawer" app v-model="showDrawer" :width="drawWidth">
    <v-toolbar >
      <img src="../../../assets/logo.svg" height="36" />
      <v-toolbar-title class="ml-0 pl-3">
        <span >{{$t('system.name')}}</span>
      </v-toolbar-title>
    </v-toolbar>

    <vue-perfect-scrollbar class="drawer-menu--scroll" :settings="scrollSettings">
      <v-list dense>
        <template v-for="(item,i) in menus">
          <v-list-group
            v-if="item.children" :key="i" :prepend-icon="item.icon" no-action >
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title >{{$t(item.name)}}</v-list-item-title>
              </v-list-item-content>
            </template>

            <v-list-item
              v-for="(subItem,ix) in item.children"
              :key="'a' + ix"
              :to="subItem.path" >
              <v-list-item-content>
                <v-list-item-title > {{$t(subItem.name)}}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>

          </v-list-group>

          <v-subheader v-else-if="item.header" :key="i">{{$t(item.header)}}</v-subheader>

          <v-list-item v-else :to="item.path" :key="i">
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{$t(item.name)}}</v-list-item-title>
          </v-list-item>
        </template>
      </v-list>
    </vue-perfect-scrollbar>

  </v-navigation-drawer>
</template>
<script>
import { mapGetters } from 'vuex'
import VuePerfectScrollbar from "vue-perfect-scrollbar"
export default {
  name: "AppDrawer",
  components: {
    VuePerfectScrollbar
  },
  props: {
    drawWidth: {
      type: [Number, String],
      default: "260"
    }
  },
  data() {
    return {
      showDrawer: true,
      scrollSettings: {
        maxScrollbarLength: 160
      }
    }
  },
  computed: {
    ...mapGetters({
      menus: 'router4Menu' // 'homeMenus'
    }),
    // sideToolbarColor() {
    //   return this.$vuetify.options.extra.sideNav
    // }
  },
  created() {
    // this.menus = this.getMenus()
  },
  methods: {
    toggleSidebar() {
      this.showDrawer = !this.showDrawer
    }
  }
}
</script>

<style lang="scss" scoped>
.app--drawer {
  overflow: hidden;
  .drawer-menu--scroll {
    height: calc(100vh - 48px);
    overflow: auto;
  }
  ::-webkit-scrollbar {
      display: none;
  }
}



</style>
