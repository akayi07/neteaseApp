<template>
<section class="myMusicLogin">
    <Login></Login>
    <div class="main">
        <span @click="showLogin">立即登录</span>
    </div>
</section>
</template>
<script>
import Login from '../Login.vue'
export default {
    components: {
        Login
    },
    methods: {
        showLogin() {
            this.$root.dialogVisible = true;
        } 
    }
    
}
</script>
<style lang="less">
.myMusicLogin {
    width: 980px;
    min-height: 700px;
    margin: 0 auto;   
    .main {   
        width: 807px;
        height: 269px;
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