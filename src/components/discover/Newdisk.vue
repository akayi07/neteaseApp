<template>
<section class="newDisks">
<header>
    <span class="iconfont iconbiaotiyuanquan">
        新碟上架
    </span>
    <span class="iconfont iconjiantou">更多</span>
</header>
<div class="container">
    <span class="goPre" @click="goPreImg">&lt;</span>
    <div id="nowrap">
        <div class="newDisk" v-for="newDisk in newDisks" :key="newDisk.id" >
            <img :src="newDisk.img"><br>
            <a>{{newDisk.name}}</a><br>
            <a>{{newDisk.author}}</a>
        </div>
    </div>
    <span class="goNext" @click="goNextImg">></span>
</div>
</section>
</template>
<script>
export default {
    data(){
        return {
            newDisks: [
                {id: '0', img: require('../../assets/discover/newDisk/MAPOFTHESOUL7.png'), name: 'MAPOFTHESOUL7', author: 'Monday満ちる'},
                {id: '1', img: require('../../assets/discover/newDisk/The Man (Live From Paris).jpg'), name: 'The Man (Live From Paris)', author: 'Taylor Swift'},
                {id: '2', img: require('../../assets/discover/newDisk/Tomorrow will be fine.png'), name: 'Tomorrow will be fine.', author: 'Sodagreen'},
                {id: '3', img: require('../../assets/discover/newDisk/歌手·当打之年 第5期.png'), name: '歌手·当打之年 第5期', author: '歌手'},
                {id: '4', img: require('../../assets/discover/newDisk/你要相信这不是最后一天.png'), name: '你要相信这不是最后一天', author: '华晨宇'},
                {id: '5', img: require('../../assets/discover/newDisk/朋友请听好 (易烊千玺版).png'), name: '朋友请听好 (易烊千玺版)', author: '易烊千玺/朋友请听好'},
                {id: '6', img: require('../../assets/discover/newDisk/平凡天使.png'), name: '平凡天使', author: ' G.E.M.邓紫棋'},
                {id: '7', img: require('../../assets/discover/newDisk/小王.png'), name: '小王', author: '毛不易'},
                {id: '8', img: require('../../assets/discover/newDisk/我在北京等你 电视剧原声带.png'), name: '我在北京等你 电视剧原声带', author: '鲁士郎 / 洪川'},
                {id: '9', img: require('../../assets/discover/newDisk/하이에나 OST Part.2.jpg'), name: '하이에나 OST Part.2', author: '伯贤'}
            ],
            move: ''
        }
    },
 
    methods: {
        goPreImg(){
            var move = document.getElementById('nowrap');
            move.style.left = '675.1px';
        },
        goNextImg(){
            var move = document.getElementById('nowrap');
            move.style.right = '675.1px';
        }
    }
    
}
</script>>
<style lang="less" scoped>
.newDisks {
    font-size: 12px;
    header {
        border-bottom: 2px solid #C10D0C;
        padding-bottom: 8px;
        position: relative;
        .iconbiaotiyuanquan {
            font-size: 20px;
            font-weight: normal;
            display: inline-block;
            margin-left: 12px;
        }
        .recmTop {
            color: #666;
            display: inline-block;
            margin-left: 15px;
            font-size: 12px;
            a { 
                text-decoration: none;
                color: #666;
            }
            span {
                display: inline-block;
                margin: 0 12px 0 12px;
            }     
        }
        .iconjiantou {
            font-size: 12px;
            position: absolute;
            top: 50%;
            right: 12px;
            transform: translateY(-50%);
        }
    }
    .container {
        overflow: hidden;
        width: 100%;
        background-color: #f5f5f5;
        margin-top: 18px;
        position: relative;
        span {
            color: #333;
            position: absolute;
            text-decoration: none;
            cursor: pointer;
        }
        .goPre {          
            left: 11px;
            top: 70px;
            transform: translateX(-50%, -50%);
        }
        .goNext {
            right: 11px;
            top: 70px;
            transform: translate(50%, -50%);
        }
        #nowrap {
            position: relative;
            width: 645px;
            white-space: nowrap;
            margin: 20px 21.84px; 
            display: inline-block;
            }
            .newDisk {
                display: inline-block;
                width: 100px;
                margin: auto 15.2px;
                img {
                    width: 100%;
                    height: 100px;
                }
                a { 
                    display: inline-block;
                    width: 100px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    text-decoration: none;
                }
            }
        }
       
}
</style>

