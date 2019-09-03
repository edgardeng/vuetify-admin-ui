<template>
  <v-breadcrumbs :items="levelList" class="transparent">
    <template v-slot:item="props">
      <v-breadcrumbs-item :to="props.item.to" >
        {{$t(props.item.text)}}
      </v-breadcrumbs-item>
    </template>
  </v-breadcrumbs>
</template>

<script>
  export default {
    created () {
      this.getBreadcrumb()
    },
    data () {
      return {
        levelList: []
      }
    },
    methods: {
      //{ href: string disabled: boolean link: boolean text: string | number to: string | object
      getBreadcrumb () {
        const { path, matched } = this.$route;
        const items = [{ text: 'home', to: '/', disabled: false}];
        for (let i = 0, len = matched.length; i < len; i += 1) {
          const route = matched[i];
          if (route.name) {
            items.push({ text: route.name, disabled: false, to: route.path});
          }
        }
        this.levelList = items
      }
    },
    watch: {
      $route () {
        this.getBreadcrumb()
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .app-levelbar {
    display: inline-block;
    .no-redirect {
      color: #97a8be;
      cursor: text;
    }
  }

  @media screen and (max-width: 720px) {
    .app-levelbar {
      display: none;
    }
  }
</style>
