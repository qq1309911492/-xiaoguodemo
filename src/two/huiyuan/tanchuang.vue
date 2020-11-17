<template>
  <div>
    <el-button type="text"></el-button>

    <el-dialog
      title="编辑角色"
      :visible.sync="nvr.ishow"
    >
      <el-form :rules="rules" :model="form">
        <el-form-item label="手机号" prop="phone">
          <el-input v-model="form.phone"></el-input>
        </el-form-item>
        <el-form-item label="昵称" prop="rolename">
          <el-input v-model="form.nickname" autocomplete="off"></el-input>
        </el-form-item>
         <el-form-item label="密码" prop="rolename">
          <el-input v-model="form.password" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="状态">
          <el-switch
            v-model="form.status"
            active-color="#13ce66"
            inactive-color="#ff4949"
            :active-value="1"
            :inactive-value="2"
          >
          </el-switch>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="qx">取 消</el-button>
        
        <el-button type="primary" @click="xiugai">编 辑</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { HYonelist,HYdeit } from "../../util/axios/index";
export default {
  props: ["nvr"],
  data() {
    return {
      dialogFormVisible: true,
      form: {
        nickname: "",
        phone: "",
        password:'',
        status: 1,
      },
      rules: {
        //用户名验证
        phone: [
          { required: true, message: "请输入菜单名称", trigger: "blur" },
          {
            min: 11,
            max: 11,
            message: "长度在 11个字符",
            trigger: "blur",
          },
        ],
        //密码验证
        
      },
    };
  },
  methods: {
    qx() {
      this.$emit("bjqx", true);
      this.$emit("qx", false);
    },
      look(uid){
        HYonelist({uid}).then(res=>{
          this.form=res.data.list
        })

      },
      xiugai(){
        HYdeit(this.form).then(res=>{
          if(res.data.code==200){
            this.qx()
            this.add()
          }
        })
      },
    ...mapActions({
      add: "huiyuan/add",
    }),
  },
  mounted() {},
  computed: {
    ...mapGetters({
      ast: "huiyuan/aaa",
    }),
    ...mapGetters(["aaa"]),
  },
  components: {},
};
</script>

<style lang="" scoped>
</style>
