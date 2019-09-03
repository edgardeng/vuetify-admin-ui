<template>
  <v-app id="app-inspire">
    <v-content class="app-login-wrapper">
      <v-container>
        <div class="login-content">
          <div class="login-slogan-wrapper">
            <div class="slogan">
              <img src="" alt="">
            </div>
            <h2> {{$t('system.name')}} </h2>
            <p> {{$t('system.desc')}} </p>
          </div>
          <div class="login-form-wrapper">

            <div style="text-align: right">
              <v-select style="width: 95px" v-model="lang" :items="langs" menu-props="auto" prepend-icon="earth" single-line ></v-select>
            </div>


            <v-form v-model="formValid"  ref="form" lazy-validation>
              <v-text-field
                :label="$t('login.account')"
                v-model="username"
                :rules="[rules.required]"
                prepend-icon="material-icons account_circle"
                type="text" >
              </v-text-field>

              <v-text-field
                v-model="password"
                :label="$t('login.password')"
                prepend-icon="material-icons lock"
                :rules="[rules.required, rules.min]"
                :append-icon="showPwd ? 'mdi-eye' : 'mdi-eye-off'"
                :type="showPwd? 'text' : 'password'"
                @click:append="showPwd = !showPwd">
              </v-text-field>

              <v-checkbox v-model="remember" :label="$t('login.remember')" > </v-checkbox>
              <v-btn rounded block color="primary" :loading="loading" :disabled="!formValid" @click="handleSignIn">{{$t('login.signin')}}</v-btn>
              <div class="text-center pb-8 pt-4">
                <v-btn text color="purple" class="pl-0 pr-0" @click="handelSignChange"> <span class="grey--text">{{$t('login.no_account')}} </span> {{$t('login.signup')}} </v-btn>
              </div>
            </v-form>

            <div class="login-btn">
              <v-btn icon>
                <v-icon color="blue">fa fa-facebook-square fa-lg</v-icon>
              </v-btn>
              <v-btn icon>
                <v-icon color="red">fa fa-google fa-lg</v-icon>
              </v-btn>
              <v-btn icon>
                <v-icon color="light-blue">fa fa-twitter fa-lg</v-icon>
              </v-btn>
            </div>

          </div>
        </div>

      </v-container>

    </v-content>
  </v-app>
</template>

<script>

import { mapActions } from 'vuex'

export default {
  name: 'Login',
  data() {
    return {
      lang: '中文',
      langs: ['中文', 'English'],
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
      currentYear: new Date().getFullYear()
    };
  },
  computed: {
  },
  methods: {
    ...mapActions([
      'USER_LOGIN'
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
  created() {},
};
</script>

<style lang="scss">

/*@import '../../styles/_login.scss';*/
.app-login-wrapper {
  width: 100%;
  height: 100%;
  display: block;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background: #6190E8; /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #A7BFE8, #6190E8); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #A7BFE8, #6190E8); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}

.login-content {
  width: 80%;
  max-width: 1000px;
  display: flex;
  margin: auto;
  margin-top: 100px;
  position: relative;
  border-radius: 4px;
  background: white;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);

}

.login-slogan-wrapper {
  width: 50%;
  max-width: 500px;
  padding: 20px;
  background: linear-gradient(0deg, #3a485a 0%, #607089 100%)
}

  .login-form-wrapper {
    width: 50%;
    max-width: 500px;
    padding: 20px;
  }

@media (max-width: 768px) {
  .login-slogan-wrapper {
    display: none;
  }
  .login-form-wrapper {
    width: 100%;
  }
}


</style>
