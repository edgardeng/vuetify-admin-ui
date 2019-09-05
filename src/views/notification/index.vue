<template>
  <div class="app-view-content">
    <v-card class="mx-auto" >
      <v-toolbar >
        <v-toolbar-title class="ml-0 pl-3">
          <span >{{$t('menu.notification')}}</span>
        </v-toolbar-title>
        <div class="flex-grow-1"></div>
        <v-btn text color="primary" @click="handleClickAll"> 全部设为已读 </v-btn>
      </v-toolbar>

      <v-list two-line>
        <v-list-item-group >
          <template v-for="(item, index) in items">
            <v-list-item :key="index" @click="handleClickItem(item)">
                <v-list-item-avatar >
                  <v-icon v-text="item.icon" :color="item.read? '':'pink'"></v-icon>
                </v-list-item-avatar>
                <v-list-item-content :class="item.read? '':'pink--text'">
                  <v-list-item-title v-text="item.title" ></v-list-item-title>
                  <v-list-item-subtitle v-text="item.content"></v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-action >
                  <v-list-item-action-text v-text="item.action"></v-list-item-action-text>
                </v-list-item-action>
            </v-list-item>

            <v-divider
              v-if="index + 1 < items.length"
              :key="index"
            ></v-divider>
          </template>
        </v-list-item-group>
      </v-list>
    </v-card>

  </div>

</template>

<script type="text/ecmascript-6" >

  export default {
    name: 'Profile',
    data () {
      return {
        items: [
          {
            read: false,
            title: 'System Notification',
            content: 'teal',
            icon: 'mdi-settings',
            action: 'Just now',
          },
          {
            read: false,
            title: 'New messages',
            content: 'light-blue',
            icon: 'mdi-message',
            action: '6 mins ago',
          },
          {
            read: false,
            title: 'New shares',
            content: 'cyan accent-3',
            icon: 'mdi-share',
            action: '32 mins ago',
          },
          {
            read: true,
            icon: 'mdi-settings',
            action: '1 hr ago',
            title: 'Ali Connors',
            content: "I'll be in your neighborhood doing errands this weekend. Do you want to hang out?",
          },
          {
            read: true,
            icon: 'mdi-settings',
            action: '2 hr ago',
            title: 'me, Scrott, Jennifer',
            content: "Wish I could come, but I'm out of town this weekend.",
          },

          ]
      }
    },
    computed: {
    },
    mounted () {
    },
    methods: {
      handleClickItem (item) {
        if (!item.read) {
          item.read = true
        }
      },
      handleClickAll () {
        for(let item of this.items) {
          if (!item.read) {
            item.read = true
          }
        }
      }
    }
  }
</script>
