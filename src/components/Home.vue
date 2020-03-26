<template>
    <el-container>
        <Login></Login>
        <!--头部区域-->
        <el-header class="home">
            <span>网易云音乐</span>
            <el-menu class="homemenu" :router="true" :default-active="$root.activeItem" mode="horizontal" active-text-color="#fff"
            text-color="#fff">
                <el-menu-item index="/" class="homeItem">
                    发现音乐
                </el-menu-item>
                <el-menu-item index="/mylogin" class="homeItem">
                    我的音乐
                </el-menu-item>
                <el-menu-item index="/friendlogin" class="homeItem">
                    朋友
                </el-menu-item>
                <el-menu-item class="login" @click="showLogin" v-show="!$root.showExit">登录</el-menu-item>
                
                <el-menu-item class="exit" v-show="$root.showExit" @click="exit">退出</el-menu-item>
            </el-menu>
            
        </el-header>
        <router-view></router-view>
    <div class="player">
        <div class="intro">
            <span>{{this.$root.name}}</span>
            <span class="artist">{{this.$root.artist}}</span>
        </div>
        <img :src="this.$root.imgSrc">
        <audio :autoplay="this.$root.autoplay" :src="this.$root.songSrc" controls></audio>
    </div>
    </el-container>
</template>
<script>
import Login from './Login.vue'
export default {
    beforeRouteEnter(to, from, next) {
        if(to.path === '/friendlogin' || to.path === '/friend') {
            next(vm => {
                vm.$root.activeItem = '/friendlogin';
            })
            
        } else if(to.path === '/myLoveMusic' || to.path === '/myVideo' || to.path === '/myCollection' ||
        to.path === '/myArtist' || to.path === '/my' || to.path === '/mylogin') {
            next(vm => {
                vm.$root.activeItem = '/mylogin';
            })
            
        } else {
            next(vm => {
                vm.$root.activeItem = '/';   
            })

        }
    },
    components: {
        Login
    },
    methods: {
        
        showLogin() {
            this.$root.dialogVisible = true;
        },
        exit() {
            this.$root.showExit = false;
            window.sessionStorage.removeItem('token');
            this.$router.push('/');
           
        } 
    },
    created(){
        if(window.sessionStorage.getItem('token')) {
            this.$root.showExit = true;
        }
        
    }
};
</script>
<style lang="less">
.el-header.home {
    background: url("../assets/topbar.png") no-repeat 100px #242424;
    position: relative;
    span {
        color: #fff;
        font-size: 20px;
        position: absolute;
        top: 50%;
        left: 150px;
        transform: translateY(-50%);
    }
    .el-menu.homemenu {
        border-bottom: 0;
        font-size: 20px;
        margin-left: 240px;
        background: #242424;
        .homeItem {
            color: #fff;
            border: none;
        }
        .homeItem.is-active {
            background: #000 !important;
        }
        .homeItem:hover {
            background: #000;

        }
        .login, .exit {
            color: #787878 !important;
            position: absolute;
            right: 10px;
            border: none;       
        }
        .login:hover, .exit:hover {
            background-color: #242424;

            text-decoration: underline;
        }
        
    }
    
}
.player {
    width:100%;
    background: #2d2d2d;
    position: fixed;
    bottom: 0;
    text-align: center;
    color: #fff;
    font-size: 12px;
    .intro {
        float: left;
        margin: 3px 141px;
        .artist {
        color: #9b9b9b;
        margin-left: 20px;
    }
    }
    
    img {
        position: absolute;
        left: 90.835px;
        top: 10px;
    }
    audio {
        width: 983px;
        margin: auto 139.835px;

    }
}

</style>