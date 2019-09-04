<template>
  <v-app id="app-inspire">
    <v-content class="app-login-wrapper">
      <v-container>
        <div class="login-content">
          <div class="login-slogan-wrapper ">
            <div class="text-center">
              <img src="../../assets/logo.svg" style="width: 160px;height: 160px; margin: 40px">
            </div>
            <h2 class="pa-2 blue--text text--lighten-5"> {{$t('system.name')}} </h2>
            <p class="pa-2 indigo--text text--lighten-4"> {{$t('system.desc')}} </p>
          </div>
          <div class="login-form-wrapper">

            <v-form v-model="formValid"  ref="form" lazy-validation class="mt-6">
              <v-text-field
                :label="$t('login.account')"
                v-model="username"
                :rules="[rules.required]"
                prepend-icon="mdi-account-circle"
                type="text" >
              </v-text-field>

              <v-text-field
                v-model="password"
                :label="$t('login.password')"
                prepend-icon="mdi-lock"
                :rules="[rules.required, rules.min]"
                :append-icon="showPwd ? 'mdi-eye' : 'mdi-eye-off'"
                :type="showPwd? 'text' : 'password'"
                @click:append="showPwd = !showPwd">
              </v-text-field>

              <v-checkbox v-model="remember" :label="$t('login.remember')" > </v-checkbox>
              <v-btn rounded block color="primary" :loading="loading" :disabled="!formValid" @click="handleSignIn">{{$t('login.signin')}}</v-btn>
              <div class="text-center pb-4 pt-4">
                <v-btn text color="purple" class="pl-0 pr-0" @click="handelSignChange"> <span class="grey--text">{{$t('login.no_account')}} </span> {{$t('login.signup')}} </v-btn>
              </div>
            </v-form>
            <div class="text-center pb-12 mb-12">
              <v-btn fab dark small color="indigo darken-2" class="mr-3">
                <v-icon dark>mdi-facebook</v-icon>
              </v-btn>
              <v-btn fab dark small color="blue lighten-1" class="mr-3">
                <v-icon dark>mdi-twitter</v-icon>
              </v-btn>
              <v-btn fab dark small color="green darken-1" class="mr-3">
                <v-icon dark>mdi-wechat</v-icon>
              </v-btn>
              <v-btn fab dark small color="red darken-1">
                <v-icon dark>mdi-sina-weibo</v-icon>
              </v-btn>
            </div>
            <v-select style="width: 98px;position: absolute;right:15px;bottom:5px" class="pa-0 ma-0" v-model="lang" :items="languages" menu-props="auto" prepend-icon="mdi-earth" ></v-select>
          </div>
        </div>
      </v-container>
    </v-content>
    <div style="position: absolute; bottom: 10px; width: 100%;" class="pa-2 indigo--text text--lighten-4 text-center"> {{currentYear}} Designed By <a href="https://edgardeng.github.io" target="_self"> edgardeng</a></div>
  </v-app>
</template>

<script>

import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Login',
  data() {
    return {
      languages: [{text: '中文', value:'zh'},{text: 'English', value:'en'} ],
      formValid: true,
      username: 'admin',
      password: '123456',
      remember: false,
      showPwd: false,
      loading: false,
      rules: {
        required: value => !!value || this.$t('form.required'),
        min: v => !!v && (v.length >= 6) || this.$t('form.min_6')
      },
      currentYear: new Date().getFullYear(),
      lang: undefined
    };
  },
  computed: {
    ...mapGetters({
      language: 'language'
    })
  },
  mounted () {
    this.lang = this.language
    this.$i18n.locale = this.language
  },
  watch: {
    lang (newV, oldV) {
      this.$i18n.locale = newV
      this.CHANGE_LANGUAGE(newV)
    },
  },
  methods: {
    ...mapActions([
      'USER_LOGIN',  'CHANGE_LANGUAGE'
    ]),
    handleSignIn () {
      if (!this.$refs.form.validate()) {
        return
      }
      this.loading = true
      let data = {
        username: this.username,
        password: this.password
      }
      this.USER_LOGIN(data).then(response => {
        if (response) {
          let redirect = this.$route.query.redirect
          if (!redirect) {
            redirect = '/'
          }
          this.$router.push(redirect)
        }
        // if (this.remember) {
        //   setObject('remember', rememberObj)
        // } else {
        //   setObject('remember', null)
        // }
        this.loading = false
      }).catch(error => {
        this.$message.error(error)
        this.loading = false
      })
    },
    handelSignChange () {

    },
    handleSignUp () {
      console.log('Register', this.username, this.password)
    },
    login() {
      if (!this.form.password || !this.form.username) {
        return;
      }

      this.loginLoading = true;
      this.$store
        .dispatch('login', this.form)
        .then(() => {
          try {
            this.$router.push({ name: 'Index' });
          } catch (err) {
            this.$router.push({ path: '/' });
          }
        })
        .catch((res) => {
          console.log('login-failed', res);
          this.$message({
            type: 'error',
            text: this.$t('common.invalid_password_username'),
          });
        })
        .finally(() => {
          this.loginLoading = false;
        });
    },
    redirectForgotPassword() {
      console.log('redirectForgotPassword');
      this.$message({
        type: 'info',
        text: 'Ahem: Please add redirect function',
      });
    },
  },
};
</script>

<style lang="scss">
@import '../../assets/style/_login.scss';


</style>
