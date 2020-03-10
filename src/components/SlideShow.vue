<template>
    <div>
        <!--轮播图区域-->
        <div class="top">
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
                        <a href="https://music.163.com/#/download">下载客户端</a>
                    </el-button>
                    <p>PC 安卓 iPhone WP iPad Mac 六大客户端</p>
                </div>
            <a class="goNext" @click="goNextImg" @mouseover="MouseHover" @mouseout="MouseOut"><span>></span></a>
        </div>
        <!--主要内容-->
        <router-view></router-view>
    </div>
</template>>
<script>
export default {
    data(){
        return{
            slideshowImg: [
                {id: '0', src: require('../assets/slideshow/sildeshow1.jpg')},
                {id: '1', src: require('../assets/slideshow/sildeshow2.jpg')},
                {id: '2', src: require('../assets/slideshow/sildeshow3.jpg')},
                {id: '3', src: require('../assets/slideshow/sildeshow4.jpg')},
                {id: '4', src: require('../assets/slideshow/sildeshow5.png')},
                {id: '5', src: require('../assets/slideshow/sildeshow6.jpg')},
                {id: '6', src: require('../assets/slideshow/sildeshow7.jpg')},
                {id: '7', src: require('../assets/slideshow/sildeshow8.jpg')},
                {id: '8', src: require('../assets/slideshow/sildeshow9.jpg')}
            ],
            currentIndex: 0,
            interval: ''
        }  
    },
    methods: {
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
    div.top {
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
            background: url("../assets/download.png") no-repeat;
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
                bottom: 8%;
                left: 8%
            }
        }
        
    }
</style>