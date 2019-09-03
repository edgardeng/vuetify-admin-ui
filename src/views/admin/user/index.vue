<template>
  <div class="app-view-content">

    <v-card class="ml-4 mr-4" :elevation="4">
      <v-toolbar color="transparent" flat dense class="pt-2 pb-2">
        <v-toolbar-title ><h4>{{$t('menu.users')}}</h4></v-toolbar-title >
        <v-spacer></v-spacer>

        <v-btn icon @click="handleAdd">
          <v-icon color="primary">mdi-plus-circle</v-icon>
        </v-btn>
      </v-toolbar>
      <v-divider > </v-divider>

      <v-card-text >
        <template>
          <v-data-table :headers="headers" :items="list" class="elevation-0">
            <template v-slot:item.action="{ item }">
              <!--<v-btn @click="handleEdit(item)" fab small color="primary">-->
              <!--<v-icon >mdi-pencil</v-icon>-->
              <!--</v-btn>-->
              <v-btn icon @click="handleEdit(item)">
                <v-icon color="success">mdi-pencil-circle</v-icon>
              </v-btn>

              <v-btn icon @click="handleDelete(item)">
                <v-icon color="error">mdi-delete-circle</v-icon>
              </v-btn>
            </template>

            <template v-slot:item.status="{ item }">
              <v-chip small :color="item.status == 1 ? 'success':''" text-color="white"  >  {{item.status == 1 ? '正常':'待激活'}} </v-chip>
            </template>

            <template v-slot:item.gender="{ item }">
              <span >  {{item.gender == 0 ? '男':'女'}} </span>
            </template>

          </v-data-table>
        </template>

      </v-card-text>
    </v-card>


    <!--<div class="filter-container">-->
    <!--<el-input @keyup.enter.native="handleFilter" style="width: 200px" class="filter-item"-->
    <!--v-model="listQuery.name"> </el-input>-->
    <!--<el-button class="filter-item" type="primary" icon="search" @click="handleFilter">搜索</el-button>-->
    <!--<el-button class="filter-item" v-if="userManager_btn_add"-->
    <!--style="float:right" @click="handleAdd"-->
    <!--type="primary" icon="el-icon-plus" circle>-->
    <!--</el-button>-->
    <!--<el-button style="float:right" type="success" icon="el-icon-download"-->
    <!--circle @click="handleDownload()">-->
    <!--</el-button>-->

    <!--</div>-->
    <!--<el-table :data="list" v-loading.body="listLoading"-->
    <!--border fit-->
    <!--highlight-current-row-->
    <!--style="width: 100%; margin: 10px 0;">-->
    <!--<el-table-column type="index" width="50" label="序号"> </el-table-column>-->
    <!--<el-table-column width="100" label="账号" prop="username">-->
    <!--</el-table-column>-->
    <!--<el-table-column width="100" label="姓名" prop="name">-->
    <!--</el-table-column>-->
    <!--<el-table-column width="200" label="邮箱" prop="email">-->
    <!--</el-table-column>-->
    <!--<el-table-column width="110" label="手机" prop="phone">-->
    <!--</el-table-column>-->
    <!--<el-table-column width="60" align="center" label="性别" prop="gender">-->
    <!--<template slot-scope="scope">-->
    <!--<span> {{scope.row.gender==0 ? "女":"男"}}</span>-->
    <!--</template>-->
    <!--</el-table-column>-->
    <!--<el-table-column width="200" align="center" label="备注" prop="description">-->
    <!--</el-table-column>-->
    <!--<el-table-column width="80" align="center" label="状态" >-->
    <!--<template slot-scope="scope">-->
    <!--<el-tag> {{scope.row.status==1 ? " 正常":"锁定"}}</el-tag>-->
    <!--</template>-->
    <!--</el-table-column>-->
    <!--<el-table-column width="180" align="center" label="最后更新" prop="updatedAt">-->
    <!--</el-table-column>-->

    <!--<el-table-column align="center" label="操作" fixed="right" width="170">-->
    <!--<template slot-scope="scope">-->
    <!--<el-button v-if="userManager_btn_role" size="small" type="text" @click="handleRole(scope.row)">角色修改-->
    <!--</el-button>-->
    <!--<el-button v-if="userManager_btn_edit" size="small" type="primary" icon="el-icon-edit" circle @click="handleUpdate(scope.row)">-->
    <!--</el-button>-->
    <!--<el-button v-if="userManager_btn_del" size="small" type="danger" icon="el-icon-delete" circle @click="handleDelete(scope.row)">-->
    <!--</el-button>-->
    <!--</template>-->
    <!--</el-table-column>-->

    <!--</el-table>-->

    <!--<div v-show="!listLoading" class="pagination-container">-->
    <!--<el-pagination @size-change="handleSizeChange"-->
    <!--@current-change="handleCurrentChange"-->
    <!--:current-page.sync="listQuery.pageNum"-->
    <!--:page-sizes="[20,30,50]"-->
    <!--:page-size="listQuery.pageSize"-->
    <!--layout="total, sizes, prev, pager, next, jumper"-->
    <!--:total="total">-->
    <!--</el-pagination>-->
    <!--</div>-->

    <!--<el-dialog :title="textMap[editDialog.type]"-->
    <!--:visible.sync="editDialog.show">-->
    <!--<el-form :model="form" :rules="rules" ref="form" label-width="100px">-->

    <!--<el-form-item label="账户" prop="username">-->
    <!--<el-input v-model="form.username" placeholder="请输入账户" > </el-input>-->
    <!--</el-form-item>-->
    <!--<el-form-item label="密码" placeholder="请输入密码" prop="password">-->
    <!--<el-input v-model="form.password" disabled> </el-input>-->
    <!--</el-form-item>-->
    <!--<el-form-item label="姓名" prop="name">-->
    <!--<el-input v-model="form.name" placeholder="请输入姓名"></el-input>-->
    <!--</el-form-item>-->
    <!--<el-form-item label="邮箱" prop="email">-->
    <!--<el-input v-model="form.email" placeholder="请输入邮箱"></el-input>-->
    <!--</el-form-item>-->
    <!--<el-form-item label="电话" prop="phone">-->
    <!--<el-input v-model="form.phone" placeholder="请输入电话"></el-input>-->
    <!--</el-form-item>-->
    <!--<el-form-item label="性别">-->
    <!--<el-radio-group v-model="form.gender">-->
    <!--<el-radio :label="1">男</el-radio>-->
    <!--<el-radio :label="2">女</el-radio>-->
    <!--</el-radio-group>-->
    <!--</el-form-item>-->
    <!--<el-form-item label="描述">-->
    <!--<el-input type="textarea" :autosize="{ minRows: 2, maxRows: 5}"-->
    <!--placeholder="请输入内容"-->
    <!--v-model="form.description"></el-input>-->
    <!--</el-form-item>-->
    <!--</el-form>-->
    <!--<div slot="footer" class="dialog-footer">-->
    <!--<el-button @click="cancel()">取 消</el-button>-->
    <!--<el-button type="primary" @click="submit()">确 定</el-button>-->
    <!--</div>-->
    <!--</el-dialog>-->

    <!--<el-dialog title="修改用户的角色(组)"-->
    <!--:visible.sync="editRoleDialog.show">-->
    <!--<role-edit-->
    <!--ref="editRole"-->
    <!--@cancel="editRoleDialog.show = false"-->
    <!--@complete="editRoleDialog.show = false"> </role-edit>-->
    <!--</el-dialog>-->

    <v-dialog v-model="editDialog.show" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <span class="headline">{{$t(editDialog.type == 0 ?'view.add_user':'view.edit_user')}}</span>
        </v-card-title>
        <v-card-text>
          <v-form label-width="100px" ref="dialog_form" >
            <v-text-field label="账号" v-model="form.username" :rules="[rules.required]"> </v-text-field>
            <v-text-field label="密码" v-model="form.password" disabled :rules="[rules.required]"> </v-text-field>
            <v-text-field label="姓名" v-model="form.name" :rules="[rules.required]"> </v-text-field>
            <v-text-field label="邮箱" v-model="form.email" :rules="[rules.required]"> </v-text-field>
            <v-radio-group v-model="form.gender" row>
              <v-radio label="男" :value="0"></v-radio>
              <v-radio label="女" :value="1"></v-radio>
            </v-radio-group>
          </v-form>

        </v-card-text>

        <v-card-actions>
          <div class="flex-grow-1"></div>
          <v-btn text @click="editDialog.show = false">{{$t('dialog.cancel')}}</v-btn>
          <v-btn color="blue darken-1" text @click="handleSubmit">{{$t('dialog.confirm')}}</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
  // import { page, addObj, delObj, putObj, exportObjs } from 'api/admin/user'
  // import { downloadUrl } from 'api/admin/file'
  import { mapGetters } from 'vuex'
  // const RoleEdit = r => require.ensure([], () => r(require('./components/RoleEdit.vue')), 'group-user-edit')

  export default {
    name: 'user',
    components: {
      // RoleEdit
    },
    data () {
      return {
        headers: [
          { text: "账号", align: "left", value: "username"},
          { text: "邮箱", value: "email" },
          { text: "性别", value: "gender" },
          { text: "状态", value: "status" },
          { text: "更新时间", value: "updatedAt" },
          { text: "Action", value: "action", sortable: false}
        ],
        form: {
          username: undefined,
          name: undefined,
          gender: 1,
          password: undefined,
          email: undefined,
          phone: undefined,
          description: undefined
        },
        rules: {
          required: value => !!value || this.$t('form.required'),
          min: v => !!v && (v.length >= 6) || this.$t('form.min_6')
        },
        // rules: {
        //   username: [
        //     { required: true, message: '请输入用户名（登录名）', trigger: 'blur' },
        //     { min: 3, max: 20, message: '长度在 3 到 20 个字符', trigger: 'blur' }
        //   ],
        //   name: [
        //     { required: true, message: '请输入姓名（昵称）', trigger: 'blur' }
        //   ],
        //   password: [
        //     { required: true, message: '请输入姓名（昵称）', trigger: 'blur' },
        //     { min: 6, max: 18, message: '长度在 6 到 18 个字符', trigger: 'blur' }
        //   ]
        // },
        // list: null,
        list: [{ avatar: "/img/avatar/default.jpg", updatedAt: "2018-10-09 02:07:34", description: null, email: "heisai@heisai.cn", gender: 1,
          username: "admin", status: 1}],
        total: null,
        listLoading: true,
        listQuery: {
          pageNum: 1,
          pageSize: 20,
          name: undefined
        },
        userManager_btn_edit: false,
        userManager_btn_del: false,
        userManager_btn_add: false,
        userManager_btn_role: false,
        editDialog: {
          type: 0, // 0 add, 1 edit
          show: false
        },
        textMap: {
          update: '编辑',
          create: '创建'
        },
        editRoleDialog: {
          userid: 0,
          name: '',
          show: false
        }
      }
    },
    created () {
      // console.log(this.elements)
      console.log('user created', this.$vuetify)
      this.getList()
      if (this.elements) {
        this.userManager_btn_edit = this.elements['user:update']
        this.userManager_btn_del = this.elements['user:delete']
        this.userManager_btn_add = this.elements['user:add']
        this.userManager_btn_role = this.elements['userRole:update']
      }
    },
    computed: {
      ...mapGetters({
        elements: 'userElements'
      })
    },
    methods: {
      getList () {
        this.listLoading = true
        // page(this.listQuery).then(response => {
        //   this.list = response.data.data
        //   this.total = response.data.total
        //   this.listLoading = false
        // })
      },
      handleFilter () {
        this.getList().then(response => {
          this.list = response.data.data
          this.total = response.data.total
          this.listLoading = false
        })
      },
      handleSizeChange (val) {
        this.listQuery.pageSize = val
        this.getList()
      },
      handleCurrentChange (val) {
        this.listQuery.pageNum = val
        this.getList()
      },
      handleDownload () {
        // exportObjs().then(response => {
        //   let data = response.data
        //   window.location.href = downloadUrl(data)
        // })
      },
      handleRole (row) {
        this.editRoleDialog.show = true
        this.$nextTick(() => {
          this.$refs.editRole.setModel(row)
        })
      },
      handleAdd () {
        this.form.id = 0
        this.form.password = '123456'
        this.editDialog.type = 0
        this.editDialog.show = true
      },
      handleEdit (row) {
        this.form = row
        this.form.password = '******'
        delete this.form.createdAt
        delete this.form.updatedAt
        this.editDialog.type = 1
        this.editDialog.show = true
      },
      handleDelete (item) {
        const index = this.list.indexOf(item)
        this.$confirm(this.$vuetify, '确定要删除' + item.username, (action) => {
          if (action === 'confirm') {
            this.list.splice(index, 1)
          }
        })
      },
      handleSubmit () {
        if (!this.$refs.dialog_form.validate()) {
          return
        }
        let user = {
          avatar: "/img/avatar/default.jpg", updatedAt: "2018-10-09 02:07:34",
          email: this.form.email, gender: this.form.gender,
          username: this.form.username, status: 0
        }
        this.list.push(user)
        this.editDialog.show = false
      },
      add () {
        addObj(this.form).then(response => {
          let success = parseInt(response.code) === 0
          if (success) {
            this.complete()
          }
        })
      },
      update () {
        this.form.password = undefined
        // putObj(this.form.id, this.form).then(response => {
        //   let success = parseInt(response.code) === 0
        //   if (success) {
        //     this.complete()
        //   }
        // })
      },
      cancel () {
        this.editDialog.show = false
        this.$refs['form'].resetFields()
      },
      complete () {
        this.getList()
        this.cancel()
        this.$message.success('操作成功')
      }
    }
  }
</script>
