<template>
  <div>
    <div>
      <span>A Markdown Editor Based on:</span>
      <v-btn href="https://github.com/markedjs/marked"
             target="_blank"
             color="primary" text> Marked
      </v-btn>
      and
      <v-btn
        href="https://github.com/highlightjs/highlight.js"
        target="_blank"
        color="primary" text> Highlightjs
      </v-btn>
    </div>
    <v-divider></v-divider>
    <v-row>
      <v-col xs="12" sm="6">
        <v-textarea class="white" v-model="value" auto-grow outlined ></v-textarea>
      </v-col>
      <v-divider></v-divider>
      <v-col xs="12" sm="6" :class="{ ['pl-3']: this.$vuetify.breakpoint.smAndUp }">
        <v-col>
          <v-select :items="items"
            label="Preview"
            v-model="type"></v-select>
        </v-col>
        <v-col>
          <v-textarea class="white"
            v-if="type === 'htmlSource'"
            :value="compiledMarkdown"
            auto-grow outlined
            readonly></v-textarea>
          <div
            v-else
            class="pa-2 white"
            style="background: #edeeee;"
            v-html="compiledMarkdown"></div>
        </v-col>
      </v-col>
    </v-row>
  </div>

</template>

<script>
import 'highlight.js/styles/default.css'
import marked from 'marked'
import highlight from 'highlight.js'

export default {
  name: 'MarkdownEditor',
  props: {
    value: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      type: 'preview',
      items: [
        {
          text: 'Preview',
          value: 'preview',
        },
        {
          text: 'HTML Source',
          value: 'htmlSource',
        },
      ],
      markder: undefined
    };
  },
  created () {
    if (!window.loadMarkJs) {
      window.loadMarkJs = true
    }
    this.init()
  },
  methods: {
    init () {
      const rendererMD = new marked.Renderer();
      marked.setOptions({
        renderer: rendererMD,
        gfm: true,
        tables: true,
        breaks: false,
        pedantic: false,
        sanitize: false,
        smartLists: true,
        smartypants: false,
        highlight(code, lang) {
          if (lang && highlight.getLanguage(lang)) {
            return highlight.highlight(lang, code, true).value;
          }
          return highlight.highlightAuto(code).value;
        },
      })
      this.markder = marked
    },
    loadScript () {
      return new Promise(function (resolve, reject) {
        let script = document.createElement("script");
        script.type = "text/javascript";
        script.src = "https://cdn.bootcss.com/marked/0.7.0/marked.min.js";
        document.head.appendChild(script);

        let script2 = document.createElement("script");
        script2.type = "text/javascript";
        script2.src = "https://cdn.bootcss.com/highlight.js/9.15.10/highlight.min.js";
        document.head.appendChild(script2);

        let style1 = document.createElement("link");
        style1.rel = "stylesheet";
        style1.href = "https://cdn.bootcss.com/highlight.js/9.15.10/styles/default.min.css";
        document.head.appendChild(style1);
        resolve()
      })
    }
  },
  computed: {
    compiledMarkdown() {
      return marked(this.value);
    },
  },
};
</script>
