<template>
<div class="login">
    <!--也可以用el-form的表单验证功能,既然没有用el-form就换个方法验证-->
<el-dialog class="quicklogin" :visible.sync="dialogVisible" width="30%" @close="closehandler">
    <button class="signin" @click="toLoginDialog">手机号登录</button>
    <button class="singup" @click="toSignupDialog">注册</button>
</el-dialog>
<el-dialog class="loginDialog" width="30%" title="手机号登录"  :visible.sync="loginVisible">
    <div class="telephone">
        <span @click="showSelect" class="selector">{{this.currentCode}} </span>
        <input placeholder="请输入手机号">
        <div v-if="codeSelect" class="selectItem">
            <div v-for="item in codeList" :key="item.id" @click="changeCode(item.code)">
                <span>{{item.counetry}}</span><span>{{item.code}}</span>
            </div>
        </div>
    </div>
    <input class="pswd" placeholder="请输入密码">
</el-dialog>
<el-dialog class="signupDialog" width="30%" title="注册" :visible.sync="signupVisible">
</el-dialog>
</div>
</template>
<script>
export default {
data(){
    return {
        dialogVisible: false,
        loginVisible: false,
        signupVisible: false,
        codeSelect: false,
        currentCode: '+86',
        codeList: [
            {id: '1', country: '中国', code: '+86'},
            {id: '2', country: '中国香港', code: '+852'},
            {id: '3', country: '中国澳门', code: '+853'},
            {id: '4', country: '中国台湾', code: '+886'}
        ]
    }
},
methods: {
    changeCode(code){
        this.currentCode = code;
        this.codeSelect = false;
    },
    showSelect(){
        if(this.codeSelect) {
            this.codeSelect = false;
        } else {
                this.codeSelect = true;
        }
        
    },
    showDialog(){
        this.dialogVisible = true;
    },
    closehandler(){
        this.dialogVisible = false;
        
    },
    toLoginDialog(){
        this.dialogVisible = false;
        this.loginVisible = true;
        this.currentCode = '+86';
        
            this.$message('登陆成功！');
            this.$router.push('/my');
        
        
    },
    toSignupDialog(){
        this.dialogVisible = false;
        this.signupVisible = true;
        this.$message('注册成功，现在回到首页，请重新登录！');
        this.$router.push('/');     
    }
}
}
</script>>
<style lang="less" scoped>
.login {
    width: 980px;
    min-height: 700px;
    margin: 0 auto;
.loginDialog {
    .telephone {
        margin-bottom: 8px;
        .selector {
            border: 1px solid;
            display: inline-block;
        }
        .selectItem {
            border: 1px solid #606266;
            z-index: 1000;
            position: relative;
            width: 100%;
            div {
                display: block;
                margin: 5px auto;
                cursor: pointer;
            }
        }
    }
}
button{
    display: block;
    margin:0 auto;
    background: #409eff;
    border: #409eff solid 1px;
    width: 200px;
    padding: 6px auto;
    border-radius: 3px;
}     
.singup {
    margin-top: 5px;
    border: #f1f1f1 solid 1px;
    background: #e1e1e1; 
}
}
</style>