import Vue from 'vue';
import VMain from './main.vue';

const VConstructor = Vue.extend(VMain);
let instance;

const MessageConfirm = function(vuetify, message, callback) {

  let options = {
    message, callback
  };

  instance = new VConstructor({
    data: options,
  });
  instance.$vuetify = vuetify // 传入$vuetify实例 暂时没有更好的方法, 最好在main.vue中获取

  // instance.id = id;
  instance.vm = instance.$mount();

  let app = document.getElementById("app-inspire") // snackbar put in v-app
  if (app) {
    app.appendChild(instance.vm.$el);
    instance.vm.visible = true;
    instance.dom = instance.vm.$el;
  } // add dom in document

  // instance.dom.style.zIndex = seed + 1001;
  // instances.push(instance);
  return instance.vm;

};


export default MessageConfirm;
