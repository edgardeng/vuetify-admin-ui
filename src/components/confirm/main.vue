<template>
  <v-dialog max-width="360" v-model="visible">
    <v-card>
      <v-card-title class="headline">{{i18n.t('dialog.hint')}}</v-card-title>
      <v-card-text>
        <v-icon color="warning">mdi-alert-circle</v-icon>
        <span class="ml-1"> {{message}} </span>
      </v-card-text>
      <v-card-actions>
        <div class="flex-grow-1"></div>
        <v-btn text @click="handleAction('cancel')" > {{i18n.t('dialog.cancel')}} </v-btn>
        <v-btn text @click="handleAction('confirm')" color="primary"> {{i18n.t('dialog.confirm')}} </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
  import { VDialog } from 'vuetify/lib'
  import i18n from '@/i18n'
  export default {
    components: {
      VDialog
    },
    data() {
      return {
        visible: false,
        message: '',
        closed: false,
        callback: null,
        i18n: i18n
      };
    },
    mounted () {
      console.log('mounted', this.$vuetify)
    },
    methods: {

      close() {
        this.closed = true;
        setTimeout(() => {
          // 从DOM里将这个组件移除
          this.$destroy(true);
          this.$el.parentNode.removeChild(this.$el);
        }, 100)
      },
      handleAction (action) {
        this.action = action
        this.callback(this.action, this);
        this.close()
      },
    }
  };
</script>


