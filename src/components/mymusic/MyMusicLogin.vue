<template>
<section class="myMusic">

    <el-dialog class="quicklogin" title="登录" :visible.sync="dialogVisible" width="30%" @close="closehandler">
        <button class="signin" @click="toLoginDialog">手机号登录</button>
        <button class="singup" @click="toSignupDialog">注册</button>
    </el-dialog>

    <el-dialog class="loginDialog" width="30%" title="手机号登录"  :visible.sync="loginVisible">
        <div class="wrapper">
            <a class="selector" @click="showSelect">
                <span class="code">{{this.currentCode}}</span>
                <span class="el-icon-caret-bottom"></span>
            </a>
            <div class="teleWrapper">
                <input class="telephone" placeholder="请输入手机号">
            </div>
            <div v-if="codeSelect" class="selectItem">
                <div v-for="item in codeList" :key="item.id" @click="changeCode(item.code)">
                    <span class="country">{{item.country}}</span><span class="code">{{item.code}}</span><br>
                </div>
            </div>
            <input class="password" placeholder="请输入密码">
        </div>
            
    </el-dialog>

    <el-dialog class="signupDialog" width="30%" title="注册" :visible.sync="signupVisible">
    </el-dialog>

    <div class="main">
        <span @click="showDialog">立即登录</span>
    </div>
</section>
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
    },
    toSignupDialog(){
        this.dialogVisible = false;
        this.signupVisible = true;   
    }
}
}
</script>
<style lang="less" scoped>
.myMusic {
    width: 980px;
    min-height: 700px;
    margin: 0 auto;
    
    .quicklogin {
         button{
            display: block;
            margin:0 auto;
            background: #409eff;
            border: #409eff solid 1px;
            width: 200px;
            height: 30px;
            border-radius: 4px;
        }     
        .singup {
            margin-top: 5px;
            border: #f1f1f1 solid 1px;
            background: #e1e1e1; 
        }
    }
    .loginDialog {
        .wrapper {
            width: 220px;
            margin: 0 auto;
            
            .selector {
                border: 1px solid #000;
                height: 30px;
                line-height: 30px;
                font-size: 12px;
                position: relative;
                float: left;
                
            }
            .teleWrapper{
                input.telephone {
                    width: 174.333px;
                    padding: 2.5px 7px 2.5px;
                    font-size: 12px; 
                }
            }
            .password {
                width: 206px;
                font-size: 12px;
                padding: 2.5px 7px 2.5px;
            }

        }
        
    }
    .main {   
        width: 807px;
        height: 247px;
        margin: 100px auto 0;
        background: url('../../assets/myMusic/mymusic.png') no-repeat;
        span {
            cursor: pointer;
            background: #409eff;
            border-radius: 5px;
            display: inline-block;
            padding: 8px 40px;
            position: relative;
            left: 480px;
            top: 200px;
        }
    }  
}
</style>