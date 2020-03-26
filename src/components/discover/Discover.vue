<template>
<div>
    <!--轮播图区域-->
    <div class="slideshow">
        <a class="goPre" @click="goPreImg" @mouseover="MouseHover" @mouseout="MouseOut"><span>&lt;</span></a>
            <ul>
                <li class="slideshow" v-for="(item, i) in slideshowImg" :key="item.id" 
                :id="item.id">
                    <!--使用了vue的内置组件transition-->
                    <transition name="fade">
                        <!--:class="{active: i==currentIndex},z-index,发现用v-for/v-show更简单-->
                        <img :src="item.src" v-show="i == currentIndex">
                    </transition>
                </li> 
            </ul>
            <div class="dload">
                <el-button type="primary" class="iconfont iconxiazai">
                    <a href="javascript:void(0)">下载客户端</a>
                </el-button>
                <p>PC 安卓 iPhone WP iPad Mac 六大客户端</p>
            </div>
        <a class="goNext" @click="goNextImg" @mouseover="MouseHover" @mouseout="MouseOut"><span>></span></a>
    </div>
    <!--推荐内容-->
    <el-container>
        <!--推荐内容正文-->
        <el-main>
            <PopularRec></PopularRec>
            <Newdisk></Newdisk>
            <RankingList></RankingList>
        </el-main>
        <!--推荐内容侧边栏-->
        <el-aside width="253px">
            <section class="asideLogin" v-if="!$root.showExit">
                <p>
                    登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机
                </p>
                <button class="loginBtn" @click="showLogin"><span>用户登录</span></button>
            </section>
            <section class="asideInfo" v-if="$root.showExit">
                <img src="../../assets/avatar.png" class="avatar">
                <p class="nickname">Nickname</p>          
                <ul class="userInfo">
                    <li class="info1">
                        <p>3</p>
                        <p>动态</p>
                    </li>
                    <li class="info2">
                        <p>47</p>
                        <p>关注</p>
                    </li>
                    <li class="info3">
                        <p>6</p>
                        <p>粉丝</p>
                    </li>
                </ul>
            </section>
            <section class="asideSinger">
                <header>
                    <span class="text">
                        入驻歌手
                    </span>
                    <a href="javascript: void(0)">
                        查看全部 >
                    </a>
                </header>
                <ul v-for="singer in singerList" :key="singer.id">
                    <li>
                        <a href="javascript: void(0)">
                            <img :src="singer.img">
                            <div class="intro">
                                <h3>{{singer.name}}</h3>
                                <p>{{singer.int}}</p>
                            </div>
                        </a>
                    </li>
                </ul>
                <div class="apply"> 
                    <a href="https://music.163.com/nmusician/web/index#/">
                        申请成为网易音乐人
                    </a>
                </div>
            </section>
            <section class="asideStreamer">
                <header>
                    <span class="text">
                        热门主播
                    </span>
                </header>
                <ul v-for="streamer in streamerInfo" :key="streamer.id">
                    <li>
                        <a href="javascript: void(0)">
                            <img :src="streamer.img">
                            <div class="intro">
                                <span>{{streamer.name}}</span>
                                <p>{{streamer.int}}</p>
                            </div>
                        </a>
                    </li>
                </ul>
            </section>
        </el-aside>
    </el-container>
</div>
</template>>
<script>
import PopularRec from './PopularRec.vue'
import Newdisk from './Newdisk.vue'
import RankingList from './RankingList.vue'
export default {
    data(){
        return{
            slideshowImg: [
                {id: '0', src: require('../../assets/discover/slideshow/sildeshow1.jpg')},
                {id: '1', src: require('../../assets/discover/slideshow/sildeshow2.jpg')},
                {id: '2', src: require('../../assets/discover/slideshow/sildeshow3.jpg')},
                {id: '3', src: require('../../assets/discover/slideshow/sildeshow4.jpg')},
                {id: '4', src: require('../../assets/discover/slideshow/sildeshow5.png')},
                {id: '5', src: require('../../assets/discover/slideshow/sildeshow6.jpg')},
                {id: '6', src: require('../../assets/discover/slideshow/sildeshow7.jpg')},
                {id: '7', src: require('../../assets/discover/slideshow/sildeshow8.jpg')},
                {id: '8', src: require('../../assets/discover/slideshow/sildeshow9.jpg')}
            ],
            singerList: [
                {id: '0', img: require('../../assets/discover/asdSinImg/zhm.jpg'), name: '张惠妹aMEI', int: '台湾歌手张惠妹'},
                {id: '1', img: require('../../assets/discover/asdSinImg/fine.jpg'), name: 'Fine乐团', int: '独立音乐人'},
                {id: '2', img: require('../../assets/discover/asdSinImg/wxl.jpg'), name: '萬曉利', int: '民谣歌手、中国现代民谣的代表人物之一'},
                {id: '3', img: require('../../assets/discover/asdSinImg/zl.jpg'), name: '音乐人赵雷', int: '民谣歌手'},
                {id: '4', img: require('../../assets/discover/asdSinImg/wsb.jpg'), name: '王三溥', int: '音乐人'}
            ],
            streamerInfo: [
                {id: '0', img: require('../../assets/discover/streamerInfo/cl.jpg'), name: '陈立', int: '心理学家、美食家陈立教授'},
                {id: '1', img: require('../../assets/discover/streamerInfo/djxs.jpg'), name: 'DJ艳秋', int: '著名音乐节目主持人'},
                {id: '2', img: require('../../assets/discover/streamerInfo/gjgd.png'), name: '国家大剧院古典音乐频道', int: '国家大剧院古典音乐官方'},
                {id: '3', img: require('../../assets/discover/streamerInfo/xxst.jpg'), name: '谢谢收听', int: '南京电台主持人王馨'},
                {id: '4', img: require('../../assets/discover/streamerInfo/yq.jpg'), name: 'DJ晓苏', int: '独立DJ，CRI环球旅游广播特邀DJ'}
            ],
            currentIndex: 0,
            interval: ''
        }  
    },
    components: {
        Newdisk, PopularRec, RankingList
    },
    methods: {
        showLogin() {
            this.$root.dialogVisible = true;
        },
        goPreImg(){
            clearInterval(this.interval)
            if(this.currentIndex > 0){
                this.currentIndex--;
            } else {
                this.currentIndex = 8;
            }
            this.interval = setInterval(this.goNextImg, 3000);

        },
        goNextImg(){
            if(this.currentIndex < 8){
                this.currentIndex++;
            } else {
                this.currentIndex = 0;
            }
        },
        MouseHover(){
            clearInterval(this.interval);
        },
        MouseOut(){
            this.interval = setInterval(this.goNextImg, 3000);
        }
    },
    mounted(){
        this.interval = setInterval(this.goNextImg, 3000);
    }
}
</script>>

<style lang="less" scoped>
div.slideshow {
    background-color: #555;
    height: 285px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    .goPre, .goNext {
        display: block;
        font-size: 50px;
        color: white;
        position: relative;
        top: 130px;
        width: 50px;
        height: 50px;
        span {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
        }
    }

    .goPre {
        margin-right: 18px;
    }

    .goNext {
        margin-left: 18px;
    }

    .goPre:hover, .goNext:hover {
        background: #111;
    }

    ul {
        list-style: none;
        margin: 0;
        padding: 0;
        li {
            .fade-enter-active, .fade-leave-active {
                transition: opacity .4s ease 0s;
            }
            .fade-enter, .fade-leave-active {
                opacity: 0;
            }
            img {
                width: 730px;
            }
        }
    }
    div.dload {
        background: url("../../assets/discover/download.png") no-repeat;
        width: 253px;
        position: relative;
        .el-button {
            position: relative;
            top: 64%;
            left: 50%;
            transform: translateX(-50%);
            font-size: 20px;
            width: 85%;
            padding: 15px;
            a {
            color: #fff;
            text-decoration: none;
            margin-left: 5px;
            }
        }
        p {
            color: #999;
            font-size: 12px;
            position: absolute;
            bottom: 3%;
            left: 6%;
        }
    }
    
}
.el-container {
    height: 100%;
    .el-main {
        margin-left: 139.835px;
        margin-right: 0;
        width: 730px;
        border: 1px solid #d3d3d3;
        height: 100%;
    }
    .el-aside {
        margin-right: 139.835px;
        border: 1px solid #d3d3d3;
        .asideLogin {
            border: 1px solid #fff;
            background-color:rgba(200 , 200 , 200, .2);
            p {
                font-size: 12px;
                margin: 20px;   
            }
            .loginBtn {
                cursor: pointer;
                background-color: #d00;
                color: #fff;
                border: 1px solid #d00;
                border-radius: 4px;
                display: block;
                margin: 0 auto 18px auto;
                span {
                    display: inline-block;
                    margin: 6px 23px;
                }
            } 
        }
        .asideInfo {
            width: 100%;
            border: 1px solid #fff;
            background-color:rgba(200 , 200 , 200, .2);
            .avatar {
                width: 80px;
                height: 80px;
                margin: 20px 0 20px 40px;          
                vertical-align:middle;
            }
            p.nickname {
                color: #333;
                font-size: 14px;
                display: inline-block;
                margin-left: 20px;
                position: relative;
                top: -24px;
            }
            .userInfo {
                padding-left: 20px;
                list-style: none;
                color: #666;
                margin: 0 0 10px;
                li {
                padding-right: 10px;
                display: inline-block;
                border-right: 1px solid;
                p {
                    margin: 0;
                }
                }
                .info2,
                .info3 {
                padding-left: 10px;
                }
                .info3 {
                border-right: none;
                }
            }
        }
        .asideSinger {
            font-size: 12px;
            header {
                border-bottom: 1px solid #ccc;
                margin: 15px 15px auto 15px;
                padding-bottom: 8px;
                display: flex;
                justify-content: space-between;
                .text {
                    color: #000;
                    font-weight: 900;
                }
                a {
                    color: #666;
                    text-decoration: none;
                }
                a:hover {
                    text-decoration: underline;
                }
            }
            ul{
                padding: 0;
                margin: 15px 15px auto 15px;
                list-style: none;
                li {
                    height: 62px;
                    background: #fafafa;
                    a {
                        text-decoration: none;
                        font-size: 12px;
                        color: #666;
                        height: 100%;
                        img {
                            float: left;
                        }
                        .intro {
                            
                            height: 100%;
                            width: 133px;
                            float: left;
                            margin-left: 15px; 

                            h3  {
                                margin-top: 8px;
                                color: #000;
                            }
                            p {
                                
                                width: 100%;
                                margin-top: 8px;
                                overflow: hidden;
                                white-space: nowrap;
                                text-overflow: ellipsis;
                            }
                        }
                    }
                }
            }
            .apply {
                margin: 12px 15px auto 15px;
                border: 1px solid #d3d3d3;
                border-radius: 5px;
                background: rgba(200 , 200 , 200, .2);
                padding: 5px;
                text-align: center;
                padding: 5px;
                a {
                    font-size: 12px;
                    font-weight: bold;
                    color:#333;
                    text-decoration: none;
                }
            }
            
            
        }
        .asideStreamer {
            font-size: 12px;
            header {
                border-bottom: 1px solid #ccc;
                margin: 15px 15px auto 15px;
                padding-bottom: 8px;
                display: flex;
                justify-content: space-between;
                .text {
                    color: #000;
                    font-weight: 900;
                }
            }
            ul{
                padding: 0;
                margin: 15px 15px auto 15px;
                list-style: none;
                li {
                    height: 40px;
                    a {
                        text-decoration: none;
                        font-size: 12px;
                        color: #666;
                        height: 100%;
                        img {
                            float: left;
                            height: 100%;
                        }
                        .intro {
                            height: 100%;
                            width: 160px;
                            float: left;
                            margin-left: 15px; 
                            span  {
                                display: inline-block;
                                margin-top: 5px;
                                color: #333;
                            }
                            p {
                                width: 100%;
                                margin-top: 5px;
                                overflow: hidden;
                                white-space: nowrap;
                                text-overflow: ellipsis;
                            }
                        }
                    }
                }
            }   
        }
    }
}
</style>