<template>
  <el-container>
    <!--侧边栏-->
    <el-aside width="253px" class="myMusicAside">
        <el-menu class="el-menu-vertical-demo" :router="true" :default-openeds="open_list" :default-active="$route.path" text-color="#000"
         active-text-color="#000">
                <el-menu-item index="/myArtist">我的歌手(4)</el-menu-item>
                <el-menu-item index="/myVideo">我的视频(2)</el-menu-item>
                <el-submenu index="/myLoveMusic">
                    <template slot="title">
                        <i class="el-icon-caret-right"></i>
                        <span>创建的歌单(1)</span>
                    </template>
                    <el-menu-item index="/myLoveMusic"> 
                        <img src="../../assets/myMusic/favorites.jpg">
                        <p class="myFavorite">
                            <span class="name">我喜欢的音乐</span><br>
                            <span class="count">5首</span>
                        </p>      
                    </el-menu-item>
                </el-submenu>
                <el-submenu index="/myCollection'">
                    <template slot="title">
                        <i class="el-icon-caret-right"></i>
                        <span>收藏的歌单(1)</span>
                    </template>
                    <el-menu-item index="/myCollection">
                        <img src="../../assets/myMusic/coll.jpg">
                        <p>
                            <span class="name" title="欧美励志//只有奋笔疾书，才能逆风前行">
                                欧美励志//只有奋笔疾书，才能逆风前行
                            </span>
                            <br>
                            <span class="count">5首</span>
                        </p>      
                    </el-menu-item>
                </el-submenu>
        </el-menu> 
    </el-aside>
    <el-main>
        <router-view></router-view>
    </el-main>
  </el-container>
</template>
<script>

export default {
    data(){
        return {
            open_list: ['/myLoveMusic']
        }
    }
}
</script>
<style lang="less">
.el-container {
    .el-main {
        margin-right: 139.835px;
        width: 730px;
        border: 1px solid #d3d3d3;
        height: 100%;
        position: relative;
    }
    .el-aside.myMusicAside {
        padding-top: 40px;
        margin-left: 139.835px;
        border: 1px solid #d3d3d3;
        overflow: auto;
        background: #f9f9f9;
        .el-menu-vertical-demo {
            background: #f9f9f9;
            .el-menu-item {
                padding-left: 49px !important;
            }
            .el-menu-item:hover {
                background: #e6e6e6;
            }
            .el-menu-item.is-active {
                background: #e6e6e6;
            }
            
            .el-submenu {
                .el-submenu__title:hover {
                    background-color: #f9f9f9 !important;   
                    .el-icon-arrow-down {
                        font-size: 0;
                    }
                }
                p {
                    display: inline-block;
                    position: absolute;
                    margin-left: 10px;
                    top: -25px;

                    span {
                        display: inline-block;
                        width: 151px;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                    }
                    span.count {
                        
                        color: #999;
                        position: absolute;
                        top: 21px;               
                    }
                }
                
            }
        }

    }
}
</style>
