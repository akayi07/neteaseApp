<template> 
    <el-container>
        <!--头部区域-->
        <el-header>
            <span>网易云音乐</span>
            <el-menu  :default-active="this.$route.path" mode="horizontal">
                <el-menu-item index="/"  @click="toPage('')">
                    发现音乐
                </el-menu-item>
                <el-menu-item index="/my" @click="toPage('mylogin')">
                    我的音乐
                </el-menu-item>
                <el-menu-item index="/friend" @click="toPage('friend')">
                    朋友
                </el-menu-item>
                <el-menu-item index="4">商城</el-menu-item>
                <el-menu-item index="5">音乐人</el-menu-item>
                <el-menu-item index="/download" id="download" @click="toPage('download')">
                    下载客户端
                </el-menu-item>
            </el-menu>
        </el-header>
        <router-view></router-view>
    </el-container>
</template>
<script>
export default {
    methods: {
        toPage(receiver){
            this.$router.push('/' + receiver);
        }
    }
};
</script>
<style lang="less" scoped>
.el-header {
    background: url("../assets/1.jpg") no-repeat 100px #242424;
    position: relative;
    span {
        color: #fff;
        font-size: 20px;
        position: absolute;
        top: 50%;
        left: 150px;
        transform: translateY(-50%);
    }
    .el-menu {
        border-bottom: 0;
        font-size: 20px;
        margin-left: 240px;
        background: #242424;
        .el-menu-item{
            color: #fff;
            border: none;
        }  
    }
    
    .el-menu-item:hover {
        background-color: #000 !important;
        color: #fff !important;
    }
    .is-active{
        background-color: #000 !important;
        color: #fff !important;
    }
}
</style>