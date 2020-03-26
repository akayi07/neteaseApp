<template>
<section class="friendlogin">
    <Login></Login>
    <div class="main">
        <p class="introduce">
            你可以关注明星和好友品味他们的私房歌单<br>
            通过他们的动态发现更多精彩音乐
        </p>
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
.friendlogin {
    width: 980px;
    min-height: 700px;
    margin: 0 auto;   
    .main {   
        width: 857px;
        height: 489px;
        margin: 80px auto 0;
        background: url('../../assets/friend/friendlogin.jpg') no-repeat;
        .introduce {
            color: #666;
            position: relative;
            left: 535px;
            top: 200px;
        }
        span {
            cursor: pointer;
            background: #409eff;
            border-radius: 5px;
            display: inline-block;
            padding: 8px 40px;
            position: relative;
            left: 535px;
            top: 200px;
        }
    }  
}
</style>