<template>
  <div>

    <div class="py-2">
      <span>A Rich Text Editor Based on:</span>
      <v-btn href="https://github.com/tinymce/tinymce/" target="_blank" color="primary" text> tinymce </v-btn>

      <v-btn @click="clear" color="primary" class="ml-2">清空内容</v-btn>
      <v-btn @click="disabled = !disabled" color="primary" class="ml-2">{{disabled ? '启用':'禁用'}}</v-btn>
    </div>

    <v-divider> </v-divider>

    <tinymce-editor v-model="msg"
                    :disabled="disabled"
                    @onClick="onClick"
                    ref="editor"> </tinymce-editor>

  </div>
</template>

<script>
  import TinymceEditor from '@/components/editors/TinymceEditor.vue'
  export default {
    components: {
      TinymceEditor
    },
    data() {
      return {
        msg: 'Welcome to Use Tinymce Editor',
        disabled: false
      }
    },
    methods: {
      //鼠标单击的事件
      onClick(e, editor) {
        // console.log('Element clicked')
        // console.log(e)
        // console.log(editor)
      },
      //清空内容
      clear() {
        this.$refs.editor.clear()
      }
    }
  }
</script>
