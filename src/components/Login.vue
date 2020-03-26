<template>
<div>
    <el-dialog class="quicklogin" :visible.sync="$root.dialogVisible" title="登录" width="30%" @close="cancelHandler">
        <el-form>
            <div class="platform"></div>
            <button class="signin" @click="toLoginDialog">手机号登录</button>
            <button class="signup" @click="toSignupDialog">注册</button>
        </el-form>
    </el-dialog>
    <el-dialog class="loginDialog" width="30%" title="手机号登录"  :visible.sync="loginVisible" @close="cancelHandler('loginRef')">
        <el-form :rules="rules" ref="loginRef" :model="ruleForm">
            <el-form-item class="top" prop="telephone">
                <el-input size="medium" placeholder="请输入手机号" onkeyup="value=value.replace(/\D/g, '')" v-model.number="ruleForm.telephone" class="input-with-select">
                    <el-select v-model="code" slot="prepend">
                            <el-option v-for="item in codeLists" :key="item.id" 
                            :value="item.code" :label="item.code">
                                <span class="left">{{item.country}}</span><span class="right">{{item.code}}</span>
                            </el-option>
                    </el-select>
                </el-input>
            </el-form-item>
            <el-form-item prop="password">
                <el-input size="medium" placeholder="请输入密码" show-password v-model="ruleForm.password" class="input-with-select1">
                </el-input>
            </el-form-item>
            <el-form-item>
                <el-button size="medium" type="primary" @click="toPage">登录</el-button>
            </el-form-item>
        </el-form>
    </el-dialog>
    <el-dialog class="signupDialog" width="30%" title="手机号注册"  :visible.sync="signupVisible" @close="cancelHandler('signupRef')">
        <el-form :rules="rules" ref="signupRef" :model="ruleForm">
            <el-form-item class="top" prop="telephone">
                <el-input size="medium" placeholder="请输入手机号" onkeyup="value=value.replace(/\D/g, '')" v-model.number="ruleForm.telephone" class="input-with-select">
                </el-input>
            </el-form-item>
            <el-form-item prop="password">
                <el-input size="medium" placeholder="请输入密码" show-password v-model="ruleForm.password" class="input-with-select1">
                </el-input>
            </el-form-item>
            <el-form-item>
                <el-button size="medium" type="primary" @click="toHome">注册</el-button>
            </el-form-item>
        </el-form>
    </el-dialog>
</div>
</template>
<script>
export default {
    data(){
        return {
            ruleForm: {
                telephone: '',
                password: ''
            },
            rules: {
                telephone: [
                    { required: true, message: '请输入手机号', trigger: 'blur' },
                ],
                password: [
                    { required: true, message: '请输入密码', trigger: 'blur' },
                    { min: 6, max: 15, message: '长度在 6 到 15 个字符', trigger: 'blur' }
                ]
            },
            loginVisible: false,
            signupVisible: false,
            codeLists: [
                {id: '1', country: '中国', code: '+86'},
                {id: '2', country: '中国香港', code: '+852'},
                {id: '3', country: '中国澳门', code: '+853'},
                {id: '4', country: '中国台湾', code: '+886'}
            ],
            code: '+86'
        }
    },
    methods: {
        cancelHandler(formName){
            this.$root.dialogVisible = false;
            if (this.$refs[formName]) {
                this.$refs[formName].resetFields();  
            }
            
        },
        //所有页面共用的登录函数，因为没有后端，所以是手机密码是固定值, 否则用axios获取数据的
        toPage(){this.$root.dialogVisible
            this.$refs.loginRef.validate((valid) => {
                if(valid && this.ruleForm.password === '123456' && this.ruleForm.telephone === 123456){
                    //判断登录前当前路由
                    window.sessionStorage.setItem('token', 'alreadylogin')
                    this.$root.showExit = true;
                    this.$message.success('登录成功');
                    if(this.$route.path === '/mylogin') {
                        this.$router.push('/my');
                    } else if(this.$route.path === '/friendlogin') {
                        this.$router.push('/friend');
                    } else if(this.$route.path === '/' || this.$route.path === '/discover') {
                        this.loginVisible  =false;
                        this.$root.showExit = true;
                    }      
                } else{
                    alert('登陆失败！请检查用户名与密码');
                }
            })
        },
        toHome(){
            this.$refs.signupRef.validate((valid) => {
               if(valid && this.ruleForm.password === '123456' && this.ruleForm.telephone === 123456){
                        this.$message.success('注册成功，跳转到首页，请重新登陆');
                        this.$router.push('/');
                } else {
                    alert('登陆失败！请检查用户名与密码');
                }         
            })   
        }, 
        toLoginDialog(){
            this.loginVisible = true;    
            this.$root.dialogVisible = false;              
        },
        toSignupDialog(){
            this.signupVisible = true;   
            this.$root.dialogVisible = false;   
        }
    }
}
</script>>
<style lang="less">
    .quicklogin {
        .platform {
            height: 120px;
            background: url(../assets/platform.png) no-repeat center;
            margin: -25px auto 20px;
        }
         .signin, .signup {
            cursor: pointer;
            display: block;
            margin:0 auto;
            background: #409eff;
            border: #409eff solid 1px;
            width: 200px;
            height: 30px;
            border-radius: 4px;
        }     
        .signup {
            margin-top: 5px;
            border: #f1f1f1 solid 1px;
            background: #e1e1e1; 
        }
    }
    .loginDialog {
        .el-dialog__body {
            padding: 10px 80px;
            .el-form-item.top {
                margin-bottom: 16px;
                .el-select {
                    width: 84px !important;
                    font-size: 12px;
                    .el-input__inner {
                        padding-right: 20px;
                        padding-left: 2px;
                    }
                }
            }
            .input-with-select .el-input-group__prepend {
                background-color: #fff;
            }
        }
        .el-button {
            display: block;
            background: #409eff;
            box-sizing: border-box;
            width: 213.6px;
        }
    }
    .signupDialog {
        .el-dialog__body {
            padding: 10px 80px;
            .el-form-item.top {
                margin-bottom: 16px;
                .el-select {
                    width: 84px !important;
                    font-size: 12px;
                    .el-input__inner {
                        padding-right: 20px;
                        padding-left: 2px;
                    }
                }
            }
            .input-with-select .el-input-group__prepend {
                background-color: #fff;
            }
        }
        .el-button {
            display: block;
            background: #409eff;
            box-sizing: border-box;
            width: 213.6px;
        }
    }
</style>