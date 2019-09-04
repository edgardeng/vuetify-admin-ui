<!-- Created by dengxixi on 2018/4/11. -->
<template>

  <div class="hs-view-page">

    <v-card class="ml-4 mr-4" :elevation="4">
      <v-toolbar color="transparent" flat dense class="pt-2 pb-2">
        <v-toolbar-title ><h4>{{$t('menu.profile')}}</h4></v-toolbar-title >
        <v-spacer></v-spacer>
        <v-btn text @click="handlePassword()" color="primary">{{$t('view.update_pwd')}}</v-btn>
      </v-toolbar>
      <v-divider > </v-divider>

      <v-card-text >
        <v-row no-gutters >
          <v-col class="text-center" cols="12" md="6" >
            <v-avatar size="180px" class="mt-8 mb-8">
              <img src="../../assets/avatar/default.jpg"/>
            </v-avatar>
            <h3 class="pb-8"> {{profile.name}} </h3>
          </v-col>
          <v-col cols="12" md="6" class="pt-8 pl-8">
            <ul class="list-user-data">
            <li>
              <v-icon> mdi-face-profile</v-icon> {{profile.username}}
            </li>
            <li>
              <v-icon>{{profile.gender ==0 ? 'mdi-gender-male' : 'mdi-gender-female'}}</v-icon>
              {{profile.gender == 0 ? '男':'女'}}
            </li>
            <li>
              <v-icon>mdi-email</v-icon>{{profile.email}}
            </li>
            <li>
              <v-icon>mdi-cellphone</v-icon>{{profile.phone}}
            </li>
            <li >
              <v-icon>mdi-clock</v-icon> {{profile.createdAt}}
            </li>
          </ul>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>

    <v-dialog v-model="editDialog.show" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <span class="headline">{{$t('view.update_pwd')}}</span>
        </v-card-title>
        <v-card-text>

          <v-form label-width="100px" ref="password" >
            <v-text-field
              label="旧密码"
              v-model="editDialog.oldPassword"
              :rules="rules"
              type="password" >
            </v-text-field>

            <v-text-field class="mt-4"
              label="新密码"
              v-model="editDialog.newPassword"
              :rules="rules"
              type="password" >
            </v-text-field>

            </v-form>

        </v-card-text>

        <v-card-actions>
          <div class="flex-grow-1"></div>
          <v-btn text @click="editDialog.show = false">{{$t('dialog.cancel')}}</v-btn>
          <v-btn color="blue darken-1" text @click="handleSubmitPassword">{{$t('dialog.confirm')}}</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

  </div>

</template>

<script type="text/ecmascript-6" >
  import { mapGetters } from 'vuex'

  export default {
    name: 'Profile',
    data () {
      return {
        profile: {
          avatar: 'default.jpg',
          username: 'admin',
          name: '管理员',
          phone: '********',
          email: 'http://edgardeng.github.io',
          address: 'Shanghai',
          createdAt: '2019-09-01',
          gender: 0
        },
        host: undefined,
        rules: [
          value => !!value || this.$t('form.required'),
           v => !!v && (v.length >= 6) && (v.length <= 18) || '长度在 3 到 20 个字符'
        ],
        editDialog: {
          show: false,
          oldPassword: undefined,
          newPassword: undefined
        }
      }
    },
    computed: {
      ...mapGetters({
        user: 'getUser'
      })
    },
    mounted () {
      this.getProfile()
      // this.host = httpHost()
    },
    methods: {
      getProfile () {
        // getObj(this.user.id).then(response => {
        //   this.profile = response.data
        // })
      },
      handlePassword () {
        this.editDialog.show = true
      },
      handleSubmitPassword () {
        if (!this.$refs.form.validate()) {
          return
        }
      }
    }
  }
</script>

<style scoped  rel="stylesheet/scss" lang="scss" >

  .profile_img {
    display: block;
    max-width: 180px;
    max-height: 180px;
    margin: 10px;
  }

  .profile_img img{
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-image: inherit;
  }

  .list-user-data {
    margin-left: -40px;
  }

  .list-user-data li {
    margin: 10px 0;
    list-style-type:none;
  }

  .list-user-data i {
    margin-right: 10px;
  }

</style>
