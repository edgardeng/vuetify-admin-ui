<template>
  <div class="tinymce-editor">
    <editor v-model="myValue"
            :init="init"
            :disabled="disabled"
            @onClick="onClick">
    </editor>
  </div>
</template>

<script>
  import tinymce from 'tinymce/tinymce'
  import Editor from '@tinymce/tinymce-vue'
  import 'tinymce/themes/silver/theme';
  // import 'tinymce/themes/modern/theme'
  import 'tinymce/plugins/image'
  import 'tinymce/plugins/media'
  import 'tinymce/plugins/table'
  import 'tinymce/plugins/lists'
  import 'tinymce/plugins/contextmenu'
  import 'tinymce/plugins/wordcount'
  import 'tinymce/plugins/colorpicker'
  import 'tinymce/plugins/textcolor'

  export default {
    components: {
      Editor
    },
    props: {
      //传入一个value，使组件支持v-model绑定
      value: {
        type: String,
        default: ''
      },
      disabled: {
        type: Boolean,
        default: false
      },
      plugins: {
        type: [String, Array],
        default: 'lists image media table textcolor wordcount contextmenu'
      },
      toolbar: {
        type: [String, Array],
        default: 'undo redo |  formatselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | lists image media table | removeformat'
      }
    },
    data() {
      return {
        //初始化配置
        init: {
          plugins: this.plugins,
          toolbar: this.toolbar,
          menubar: false,
          // height: document.body.offsetHeight - 200,
          height: 800,
          // 去水印
          branding: false,
          // 允许粘贴图像
          paste_data_images: true,
          // 拼写检查
          browser_spellcheck: true,
          // 隐藏编辑器底部的状态栏
          // statusbar: false,
          // 隐藏最上方menu
          // menubar: false,
          language: 'zh_CN',
          language_url: '/tinymce/zh_CN.js',
          skin_url: '/tinymce/skins/ui/oxide',
          content_css: '/tinymce/skins/content/default/content.css',
          images_upload_handler: (blobInfo, success, failure) => {
            // const img = 'data:image/jpeg;base64,' + blobInfo.base64() // 用base64的图片形式上传图片，
            // success(img)
            this.handleUploadImage(blobInfo, success, failure); //ajax上传可参考https://www.tiny.cloud/docs/configure/file-image-upload/#images_upload_handler
          }
        },
        myValue: this.value
      }
    },
    mounted () {
      console.log('init .. ')
      tinymce.init({})
    },
    methods: {
      //添加相关的事件，可用的事件参照文档=> https://github.com/tinymce/tinymce-vue => All available events
      //需要什么事件可以自己增加
      onClick(e) {
        this.$emit('onClick', e, tinymce)
      },
      //可以添加一些自己的自定义事件，如清空内容
      clear() {
        this.myValue = ''
      },
      // 自定义上传文件
      handleUploadImage(blobInfo, success, failure) {
        const formdata = new FormData();
        formdata.set('upload_file', blobInfo.blob());
        this.$http
          .post('/api/images', formdata)
          .then((res) => {
            const { data } = res.data;
            this.$message.success(data.src);
            success('Uploaded successfully');
          })
          .catch((res) => {
            console.log('tinymce-uploadImage', res);
            this.$message.error('Failed');
            failure('Failed');
          });
      },
    },
    watch: {
      value(newValue) {
        this.myValue = newValue
      },
      myValue(newValue) {
        this.$emit('input', newValue)
      }
    }
  }
</script>
