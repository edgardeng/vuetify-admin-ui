<template>
  <!-- put snackbar in top center with success,info,error,warning  -->
  <!-- Currently `mouseenter` and `mouseleave` is invalid -->
  <div @mouseenter="clearTimer" @mouseleave="startTimer" >
    <v-snackbar
      v-model="visible"
      :color="color || type"
      :top="y === 'top'"
      :left="x === 'left'"
      :bottom="y === 'bottom'"
      :right="x === 'right'"
      :multi-line="mode === 'multi-line'"
      :timeout="timeout"
      :vertical="mode === 'vertical'" >
      <span> <v-icon color="white" class="mr-2"> {{icon}}</v-icon> {{ text }} </span>
      <v-btn text @click="close" > {{btn}} </v-btn>
    </v-snackbar>
  </div>
</template>

<script>
  import { VSnackbar, VBtn } from 'vuetify';

  export default {
    components: {
      VSnackbar,
      VBtn,
    },
    data() {
      return {
        visible: false,
        y: 'top',
        x: null,
        mode: '',
        timeout: 15000,
        text: '',
        color: null,
        timer: null,
        closed: false,
        duration: this.timeout,
        type: 'info',
        btn: 'close',
        icon: 'mdi-information',
        icons: {
          'success': 'mdi-check-circle',
          'warning': 'mdi-alert-circle',
          'info': 'mdi-information',
          'error': 'mdi-alert-octagram',
        }
      };
    },
    methods: {
      close() {
        this.visible = false;
        this.closed = true;
        setTimeout(() => {
          // 从DOM里将这个组件移除
          this.$destroy(true);
          // console.log('this.$el', this.$el);
          this.$el.parentNode.removeChild(this.$el);
        }, 500);
      },
      clearTimer() {
        // TODO: Can be disabled when the mouse is over.
        // this.timeout = 0;
        clearTimeout(this.timer);
      },
      startTimer() {
        // this.timeout = this.duration;
        if (this.duration > 0) {
          this.timer = setTimeout(() => {
            if (!this.closed) {
              this.close();
              this.duration = 0;
            }
          }, this.duration);
        }
      },
      keydown(e) {
        // esc关闭消息
        if (e.keyCode === 27 && !this.closed) {
          this.close();
        }
      },
    },
    mounted() {
      this.icon = this.icons[this.type]
      this.duration = this.timeout;
      this.startTimer();
      document.addEventListener('keydown', this.keydown);
    },
    beforeDestroy() {
      document.removeEventListener('keydown', this.keydown);
    },
  };
</script>
