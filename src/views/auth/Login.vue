<template>
  <div class="panel-wrapper">
    <v-container>

      <div class="session__body">
        <div class="slogan-wrapper">
          <div class="slogan">
            <img src="" alt="">
          </div>
        </div>

        <div class="form-wrapper">

          <base-langbar/>

          <h1 v-if="!isMobile" class="mt-3 md3">
            {{ $t('common.loginN')}}
          </h1>

          <v-row class="frame align-center">

            <v-form>
              <v-text-field
                v-model="form.username"
                prepend-icon="person"
                clearable
                :label="$t('common.username')"
                @keyup.enter.native="login"
                required
              ></v-text-field>
              <v-text-field
                v-model="form.password"
                prepend-icon="lock"
                @keyup.enter.native="login"
                :append-icon="showPwd ? 'visibility_off' : 'visibility'"
                :type="showPwd ? 'text' : 'password'"
                @click:append="showPwd = !showPwd"
                :label="$t('common.password')"
                required
              ></v-text-field>
              <v-row
                column
                wrap
                justify-end
                align-end
              >
                <v-btn block color="primary" @click="login" :loading="loginLoading">{{$t("common.login")}}</v-btn>

                <v-btn text small color="error" @click="redirectForgotPassword" >
                    {{ $t('common.forgetPassword') }}
                </v-btn>

              </v-row>
            </v-form>
          </v-row>

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

    <v-footer color="#fbfbfb" height="auto" >
      <v-row>
        <v-col text-xs-center>
          <!-- {{ $t('common.copyrightMessage', { currentYear }) }} -->
        </v-col>
      </v-row>
    </v-footer>

  </div>
</template>

<script>
import { isMobile } from '@/utils/util';
import BaseLangbar from '@/components/widgets/BaseLangbar.vue';

export default {
  name: 'Login',
  components: {
    BaseLangbar,
  },
  data() {
    return {
      currentYear: new Date().getFullYear(),
      showPwd: false,
      form: {
        username: 'admin',
        password: 'admin123',
      },
      loginLoading: false,
    };
  },
  computed: {
    isMobile() {
      return isMobile();
    },
  },
  methods: {
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
.panel-wrapper {
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
.session__body {
  width: 1000px;
  display: flex;
  margin: auto;
  margin-top: 50px;
  position: relative;
  border-radius: 4px;
  background: white;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);

}

.slogan-wrapper{
  width: 500px;
  padding: 20px;
  background: linear-gradient(0deg, #3a485a 0%, #607089 100%)
}

  .form-wrapper {
    width: 500px;
    padding: 20px;
  }




</style>
