<template>
  <v-card max-width="450" class="mx-auto">
    <v-list two-line>
      <template v-for="(item, index) in items">
        <v-list-item  :key="index" @click="handleClickItem(item)" >
          <v-list-item-avatar>
            <v-icon v-text="item.icon" ></v-icon>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title v-text="item.title"></v-list-item-title>
            <v-list-item-subtitle v-text="item.content"></v-list-item-subtitle>
          </v-list-item-content>
          <v-list-item-action>
            <v-list-item-action-text v-text="item.action"></v-list-item-action-text>
          </v-list-item-action>
        </v-list-item>
      </template>
    </v-list>
    <v-toolbar >
    <div class="text-center flex-grow-1"> <v-btn text color="primary" to="/notification">{{$t('system.view_all')}} </v-btn></div>
    </v-toolbar>
  </v-card>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      items: [
        {
          title: 'System Notification',
          content: 'teal',
          icon: 'mdi-settings',
          action: 'Just now',
        },
        {
          title: 'New messages',
          content: 'light-blue',
          icon: 'mdi-message',
          action: '6 mins ago',
        },
        {
          title: 'New shares',
          content: 'cyan accent-3',
          icon: 'mdi-share',
          action: '32 mins ago',
        }
      ],
    };
  },
  computed: {
  },
  methods: {
    ...mapActions([
      'CALCULATE_NOTICE_COUNT'
    ]),
    handleClickItem (item) {
      let i = this.items.indexOf(item)
      this.items.splice(i, 1)
      this.CALCULATE_NOTICE_COUNT(-1)
    }
  },
};
</script>
