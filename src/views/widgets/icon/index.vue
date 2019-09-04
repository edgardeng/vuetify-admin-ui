<template>
  <div class="app-view-content">
  <v-card class="ma-3">
      <h3 class="pa-3"> Common Icons</h3>
      <v-container>
        <v-row >
          <v-col
            v-for="(item, index) in commonIcons"
            :key="index" >
            <v-tooltip top>
              <template v-slot:activator="{ on }">
                <v-icon class="pa-3" large v-on="on"
                        @click="handleClipboard(item)">mdi-{{item}}</v-icon>
                <!--<span>{{item}}</span>-->
              </template>
              <span>{{item}}</span>
            </v-tooltip>
          </v-col>
        </v-row>
      </v-container>
    </v-card>

  </div>
</template>

<script>
  import handleClipboard from '@/utils/clipboard'

  export default {
    name: 'VIcons',
    data() {
      return {
        commonIcons: [
          'account-edit', 'account-group', 'account-group-outline', 'account-heart', 'account-heart-outline',
          'account-key', 'account-key-outline', 'account-minus', 'account-minus-outline', 'account-multiple',
          'account-multiple-check', 'account-multiple-minus', 'account-multiple-minus-outline', 'account-multiple-outline',
          'account-multiple-plus', 'account-multiple-plus-outline', 'account-network', 'account-network-outline', 'account-off',
          'account-off-outline', 'account-outline','account-plus', 'account-plus-outline', 'account-question',
          'account-question-outline', 'account-remove', 'account-search','account-search-outline', 'account-settings',
          'account-star', 'account-star-outline','account-supervisor', 'account-supervisor-circle', 'account-switch',
          'account-tie', 'accusoft', 'adchoices','adjust', 'air-conditioner', 'air-filter', 'air-horn', 'air-purifier',
          'airbag', 'airballoon', 'airplane', 'airplane-landing','airplane-off', 'airplane-takeoff', 'airplay', 'airport', 'alarm',
          'alarm-bell', 'alarm-check', 'alarm-light', 'alarm-light-outline','alarm-multiple', 'alarm-note', 'alarm-note-off', 'alarm-off',
          'alarm-plus', 'alarm-snooze', 'album', 'alert', 'alert-box', 'alert-box-outline', 'alert-circle', 'alert-circle-outline', 'alert-decagram',
          'alert-decagram-outline', 'alert-octagon', 'alert-octagon-outline', 'alert-octagram', 'alert-octagram-outline', 'alert-outline', 'alien', 'all-inclusive']
      }
    },
    methods: {
      generateCode (item) {
        return  `<v-icon>mdi-${item}</v-icon>`
      },
      handleClipboard(item) {
        handleClipboard('.app-view-content', this.generateCode(item));
      },
    },
  };
</script>
