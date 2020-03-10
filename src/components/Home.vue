<template> 
    <el-container>
        <!--头部区域-->
        <el-header>
            <span>网易云音乐</span>
            <el-menu :default-active="activeIndex" mode="horizontal" default-openeds = "['4']">
                <el-submenu :index = "4">
                    <template slot="title">发现音乐</template>
                    <el-menu-item :index="subItem.id" v-for="subItem in findMusic" :key="subItem.id">
                        {{subItem.name}}
                    </el-menu-item>
                    <Index></Index>
                </el-submenu>
                <el-menu-item :index="item.id" v-for="item in menuList" :key="item.id">
                        {{item.name}}
                </el-menu-item>
            </el-menu>
        </el-header>
        <!--轮播图和主要内容-->
        <router-view></router-view>
    </el-container>
</template>
<script>
export default {
    data(){
        return {
            menuList: [
            {id: '0', name: '我的音乐'},
            {id: '1', name: '朋友'}, 
            {id: '2', name: '商城'}, 
            {id: '3', name: '音乐人'}
            ],
            findMusic: [
                {id: '0-0', name: '推荐'}, 
                {id: '0-1', name: '排行榜'}, 
                {id: '0-2', name: '歌单'}, 
                {id: '0-3', name: '歌手'}
            ]
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
    color: #fff;
    font-size: 20px;
    margin-left: 240px;
    background: #242424;
    .el-submenu .el-menu-item{
        background-color: #f00;
        display: flex;
        justify-content: center;
        flex: auto;
        float: left !important;
        border: none;
        
    }
}
}


</style>>