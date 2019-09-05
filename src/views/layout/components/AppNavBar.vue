<template>

  <v-app-bar fixed app>
    <v-app-bar-nav-icon @click.stop="$emit('toggle-sidebar')"></v-app-bar-nav-icon>
    <div class="flex-grow-1"></div>
    <v-btn icon @click="handleFullScreen">
      <v-icon>mdi-fullscreen</v-icon>
    </v-btn>

    <v-menu offset-y origin="center center" class="elelvation-1" :nudge-bottom="14" transition="scale-transition">
      <template v-slot:activator="{ on }">
      <v-btn icon slot="activator" v-on="on" >
        <v-badge color="red" overlap v-model="notices">
          <span slot="badge">{{notices}}</span>
          <v-icon >mdi-bell</v-icon>
        </v-badge>
      </v-btn>
      </template>
      <!-- 此处可以放通知列表 -->
      <notification-list> </notification-list>
    </v-menu>

    <v-menu offset-y origin="center center" :nudge-bottom="10">
      <template v-slot:activator="{ on }">
        <!--<v-icon>mdi-menu-down</v-icon>-->
        <v-btn text large v-on="on" class="pr-0">
          <v-avatar size="32px">
            <img src="https://edgardeng.github.io/resource/image/favicon.jpg"/>
          </v-avatar>
            <v-icon>mdi-menu-down</v-icon>
        </v-btn>
      </template>
      <v-list style="min-width: 240px;">

        <v-list-item to="/profile">
          <v-list-item-icon>
            <v-icon >mdi-face-profile</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="$t('menu.profile')"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item @click="handleChangeTheme">
          <v-list-item-icon>
            <v-icon >mdi-theme-light-dark</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="$t('menu.dark_theme')" style="margin-top: -10px;"></v-list-item-title>
          </v-list-item-content>
          <v-switch class=" pt-0" v-model="isDark" color="orange" ></v-switch>
        </v-list-item>

        <v-list-item @click="handleChangeLang">
          <v-list-item-icon>
            <v-icon >mdi-earth</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title style="margin-top: -10px;"> English</v-list-item-title>
          </v-list-item-content>
          <v-switch class="pt-0" v-model="langEn" color="indigo darken-3" > </v-switch>
        </v-list-item>

        <v-list-item @click="dialogSignOut">
          <v-list-item-icon>
            <v-icon >mdi-logout</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{$t('login.sign_out')}} </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-menu>

    <v-dialog v-model="dialog" max-width="360" >
      <v-card>
        <v-card-title class="headline">{{$t('dialog.hint')}}</v-card-title>
        <v-card-text> <v-icon color="warning">mdi-alert-circle</v-icon> {{$t('dialog.text_out')}} </v-card-text>
        <v-card-actions>
          <div class="flex-grow-1"></div>
          <v-btn text @click="dialog = false" > {{$t('dialog.cancel')}} </v-btn>
          <v-btn text @click="handleSignOut" color="error"> {{$t('dialog.confirm')}} </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

  </v-app-bar>

</template>
<script>
import NotificationList from "./NotificationList"
import { toggleFullScreen } from "@/utils/brower_help"
import { mapGetters, mapActions } from 'vuex'

export default {
  name: "AppToolbar",
  components: {
    NotificationList
  },
  data() {
    return {
      langEn: false,
      isDark: false,
      dialog: false,
      notice: 1
    }
  },
  computed: {
    ...mapGetters({
      theme: 'theme',
      language: 'language',
      notices: 'notices'
    })
  },
  mounted () {
    this.langEn = this.language === 'en'
    this.$i18n.locale = this.language
    this.isDark = this.theme === 'dark'
    this.$vuetify.theme.dark = this.isDark
    this.$vuetify.lang.current = 'zhHans'
  },
  watch: {
    langEn (newV, oldV) {
      let lang = newV ? 'en': 'zh'
      this.$i18n.locale = lang
      this.CHANGE_LANGUAGE(lang)
    },
    isDark (newV, oldV) {
      let theme = newV ? 'dark': 'light'
      this.$vuetify.theme.dark = newV
      this.CHANGE_THEME(theme)
    }
  },
  methods: {
    ...mapActions([
      'CHANGE_THEME', 'CHANGE_LANGUAGE', 'USER_LOGOUT'
    ]),
    handleFullScreen() {
      toggleFullScreen()
    },
    dialogSignOut() {
      this.dialog = true
    },
    handleSignOut() {
      this.USER_LOGOUT().then(info => {
        // window.location.href = '/#/login'
        // this.$router.push('/login')
        this.dialog = false
        window.location.reload();
      })
    },
    handleChangeTheme () {
      this.isDark = !this.isDark
    },
    handleChangeLang() {
      this.langEn = !this.langEn
    }
  }
}
</script>
